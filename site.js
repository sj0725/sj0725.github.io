/* 화면 동작 파일. 논문/스킬/앨범 내용은 content.js에서 수정하세요. */
(() => {
  const root = document.getElementById('academic-gallery-proposal');
  const content = window.SITE_CONTENT;
  if (!root || !content) return;

  // Lucide icons, ISC license: https://lucide.dev/license
  const fileOutline = '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path>';
  const iconPaths = {
    'file-text': fileOutline+'<path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>',
    'file-check': fileOutline+'<path d="m9 15 2 2 4-4"></path>',
    presentation:'<path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path>'
  };
  function icon(name) {
    const template = document.createElement('template');
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(iconPaths[name] || iconPaths['file-text'])+'</svg>';
    return template.content.firstElementChild;
  }
  function externalLink(label, url, iconName) {
    const link = document.createElement('a');
    link.href=url; link.target='_blank'; link.rel='noopener noreferrer';
    const text=document.createElement('span'); text.textContent=label;
    if(iconName) link.append(icon(iconName));
    link.append(text); return link;
  }
  root.querySelectorAll('[data-lucide]').forEach(el=>el.replaceWith(icon(el.dataset.lucide)));

  const template = root.querySelector('#ag-paper-template');
  function paperNode(paper) {
    const row = template.content.firstElementChild.cloneNode(true);
    row.dataset.kind=paper.category;
    const fields={'.ag-venue':paper.venue,'.ag-paper-title':paper.title,'.ag-venue-full':paper.full+', '+paper.year};
    for(const [selector,text] of Object.entries(fields)) row.querySelector(selector).textContent=text;
    row.querySelector('.ag-venue').setAttribute('aria-label',paper.category+': '+paper.venue);
    const authors=row.querySelector('.ag-authors');
    const parts=paper.authors.split(content.ownerName);
    parts.forEach((part,index)=>{
      if(index){const name=document.createElement('span');name.className='ag-author-self';name.textContent=content.ownerName;authors.append(name);}
      authors.append(document.createTextNode(part));
    });
    if(paper.note){const badge=document.createElement('span');badge.className='ag-note-badge';badge.textContent=paper.note;row.querySelector('.ag-publication-note').append(badge);}
    for(const [label,url] of paper.links || []) row.querySelector('.ag-paper-links').append(externalLink(label.toUpperCase(),url,label.toLowerCase()==='slides'?'presentation':'file-text'));
    if(paper.image){
      const figure=row.querySelector('.ag-figure');const img=document.createElement('img');
      img.src=paper.image;img.alt=paper.imageAlt || paper.title;img.loading='lazy';
      figure.replaceChildren(img);figure.removeAttribute('role');figure.removeAttribute('aria-label');
    }
    return row;
  }
  const papers=[...content.publications].sort((a,b)=>b.year-a.year);
  papers.forEach(p=>root.querySelector('.ag-selected-papers').append(paperNode(p)));
  const allPublications=root.querySelector('.ag-all-publications');
  for(const year of [...new Set(papers.map(p=>p.year))]){
    const heading=document.createElement('div');heading.className='ag-year';
    const h2=document.createElement('h2');h2.textContent=year;heading.append(h2);allPublications.append(heading);
    papers.filter(p=>p.year===year).forEach(p=>allPublications.append(paperNode(p)));
  }
  for(const skill of content.skills){
    const group=document.createElement('div');if(skill.wide)group.className='ag-skills-wide';
    const dt=document.createElement('dt');dt.textContent=skill.name;
    const dd=document.createElement('dd');
    for(const item of skill.items){const span=document.createElement('span');span.textContent=item;dd.append(span);}
    group.append(dt,dd);root.querySelector('.ag-skills').append(group);
  }

  const albums=content.albums || [];
  const albumGrid=root.querySelector('.ag-albums');
  const albumDetail=root.querySelector('.ag-album-detail');
  function showAlbum(index){
    const album=albums[index];if(!album)return;
    root.querySelectorAll('[data-album]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.album)===index?'true':'false'));
    root.querySelector('.ag-detail-number').textContent=String(index+1).padStart(2,'0');
    root.querySelector('.ag-detail-title').textContent=album.title;
    root.querySelector('.ag-detail-meta').textContent=[album.artist,album.year].filter(Boolean).join(' · ');
    root.querySelector('.ag-detail-description').textContent=album.description || '';
    const link=root.querySelector('.ag-detail-link');link.hidden=!album.url;if(album.url)link.href=album.url;
    albumDetail.hidden=false;
  }
  albums.forEach((album,index)=>{
    const button=document.createElement('button');button.type='button';button.className='ag-album';button.dataset.album=index;
    button.setAttribute('aria-label',album.title+' — '+album.artist);button.setAttribute('aria-pressed','false');
    const cover=document.createElement('span');cover.className='ag-cover';
    if(album.cover){
      cover.classList.add('has-image');const img=document.createElement('img');img.className='ag-cover-image';img.src=album.cover;img.alt=album.title;img.loading='lazy';cover.append(img);
    }else{
      const number=document.createElement('span');number.className='ag-cover-number';number.textContent=String(index+1).padStart(2,'0');
      const label=document.createElement('span');label.className='ag-cover-label';label.textContent='COVER STUDY';cover.append(number,label);
    }
    const caption=document.createElement('span');caption.className='ag-album-caption';caption.append(document.createTextNode(album.title));
    const artist=document.createElement('span');artist.textContent=album.artist;caption.append(artist);
    button.append(cover,caption);button.addEventListener('click',()=>showAlbum(index));albumGrid.append(button);
  });
  root.querySelector('.ag-title-row .ag-note').hidden=albums.some(a=>a.cover);
  root.querySelector('.ag-close').addEventListener('click',()=>{
    albumDetail.hidden=true;root.querySelectorAll('[data-album]').forEach(b=>b.setAttribute('aria-pressed','false'));
  });

  function renderRoute(scroll){
    const hash=decodeURIComponent(location.hash.slice(1));
    const page=['publication','publications'].includes(hash)?'publications':hash==='misc'?'misc':'about';
    root.querySelectorAll('[data-page]').forEach(p=>p.hidden=p.dataset.page!==page);
    root.querySelector('.ag-brand').hidden=page==='about';
    root.querySelectorAll('.ag-nav').forEach(b=>{if(b.dataset.go===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
    document.title=page==='about'?'Seongjoon Cho':(page==='misc'?'Misc':'Publication')+' | Seongjoon Cho';
    if(hash==='technical-skills'||hash==='honors')requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView());
    else if(scroll)window.scrollTo({top:0,behavior:'instant'});
  }
  root.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>{
    const hash=button.dataset.go==='publications'?'publication':button.dataset.go;
    history.pushState(null,'','#'+hash);renderRoute(true);
  }));
  window.addEventListener('popstate',()=>renderRoute(true));
  window.addEventListener('hashchange',()=>renderRoute(true));
  renderRoute(false);
})();
