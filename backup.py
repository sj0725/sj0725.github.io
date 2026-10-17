"""Save the entire editable site as a timestamped ZIP without changing files."""
from datetime import datetime
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root=Path(__file__).resolve().parent
destination=root.parent/'backups'
destination.mkdir(exist_ok=True)
archive=destination/f'site-{datetime.now():%Y%m%d-%H%M%S-%f}.zip'
with ZipFile(archive,'x',ZIP_DEFLATED) as output:
    for file in sorted(root.rglob('*')):
        relative=file.relative_to(root)
        if file.is_file() and not any(p in ('.git','__pycache__') for p in relative.parts):
            output.write(file,relative)
print(f'Backup saved: {archive}')
