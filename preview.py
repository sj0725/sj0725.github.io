"""Local preview with automatic reload. No deployment or external access."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, unquote
import argparse
import hashlib
import json
import threading
import webbrowser

ROOT = Path(__file__).resolve().parent
RELOAD = b'''<script>
(() => { let version; setInterval(async () => {
try { const r=await fetch('/__preview_version',{cache:'no-store'}); const v=await r.text();
if(version && version!==v) location.reload(); version=v; } catch (_) {}
},800); })();
</script>'''

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def do_GET(self):
        path=unquote(urlsplit(self.path).path)
        if any(part.startswith('.') for part in Path(path).parts if part not in ('/', '\\')):
            self.send_error(404); return
        if path=='/__preview_version':
            entries=[]
            for file in ROOT.rglob('*'):
                if file.is_file() and not any(p.startswith('.') for p in file.relative_to(ROOT).parts) and file.suffix.lower() in ('.html','.css','.js','.svg','.png','.jpg','.jpeg','.webp'):
                    stat=file.stat();entries.append((str(file.relative_to(ROOT)),stat.st_mtime_ns,stat.st_size))
            data=hashlib.sha256(json.dumps(sorted(entries)).encode()).hexdigest().encode()
            self.send_response(200);self.send_header('Content-Type','text/plain');self.send_header('Content-Length',str(len(data)));self.end_headers();self.wfile.write(data);return
        if path in ('/','/index.html'):
            data=(ROOT/'index.html').read_bytes().replace(b'</body>',RELOAD+b'</body>')
            self.send_response(200);self.send_header('Content-Type','text/html; charset=utf-8');self.send_header('Content-Length',str(len(data)));self.end_headers();self.wfile.write(data);return
        super().do_GET()

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=8775);parser.add_argument('--open',action='store_true');args=parser.parse_args()
    server=ThreadingHTTPServer(('127.0.0.1',args.port),Handler)
    url=f'http://127.0.0.1:{args.port}/'
    print(f'Local preview: {url}\nSave a file to reload. Press Ctrl+C to stop.',flush=True)
    if args.open: threading.Timer(.3,lambda:webbrowser.open(url)).start()
    try: server.serve_forever()
    except KeyboardInterrupt: pass
    finally: server.server_close()
