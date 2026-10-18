/* 화면 동작 파일. 논문/스킬/앨범/챔피언 내용은 content.js에서 수정하세요. */
(() => {
  const root = document.getElementById('academic-gallery-proposal');
  const content = window.SITE_CONTENT;
  if (!root || !content) return;

  const emailContact=root.querySelector('.ag-email-contact');
  const emailToggle=root.querySelector('.ag-email-toggle');
  const emailAddress=root.querySelector('#ag-email-address');
  function showEmailAddress(visible){
    emailAddress.hidden=!visible;
    emailToggle.setAttribute('aria-expanded',String(visible));
  }
  emailToggle.addEventListener('click',()=>showEmailAddress(emailAddress.hidden));
  document.addEventListener('click',event=>{
    if(!emailContact.contains(event.target))showEmailAddress(false);
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape' && !emailAddress.hidden){
      showEmailAddress(false);emailToggle.focus();event.preventDefault();
    }
  });

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

  // One shared, keyboard-accessible image viewer for both publication lists.
  const lightbox=document.createElement('dialog');
  lightbox.className='ag-lightbox';
  const closeImage=document.createElement('button');
  closeImage.type='button';closeImage.className='ag-lightbox-close';
  closeImage.textContent='×';closeImage.setAttribute('aria-label','확대 이미지 닫기');closeImage.autofocus=true;
  const largeImageButton=document.createElement('button');
  largeImageButton.type='button';largeImageButton.className='ag-lightbox-image-button';
  largeImageButton.setAttribute('aria-label','그림을 클릭하여 확대 보기 닫기');
  const largeImage=document.createElement('img');
  largeImage.className='ag-lightbox-image';largeImage.draggable=false;
  largeImageButton.append(largeImage);lightbox.append(closeImage,largeImageButton);
  root.append(lightbox);
  let imageTrigger=null,imageAnimation=null;
  let savedOverflow='',savedPadding='',savedScroll={x:0,y:0};
  function closeLightbox(){
    if(!lightbox.open)return;
    lightbox.close();
    imageAnimation?.cancel();imageAnimation=null;
    document.body.style.overflow=savedOverflow;document.body.style.paddingRight=savedPadding;
    window.scrollTo({left:savedScroll.x,top:savedScroll.y,behavior:'instant'});
    imageTrigger?.focus({preventScroll:true});imageTrigger=null;
    largeImage.removeAttribute('src');
  }
  function openLightbox(trigger,img,paper){
    if(lightbox.open)return;
    imageTrigger=trigger;
    savedScroll={x:window.scrollX,y:window.scrollY};
    savedOverflow=document.body.style.overflow;savedPadding=document.body.style.paddingRight;
    const scrollbar=window.innerWidth-document.documentElement.clientWidth;
    if(scrollbar)document.body.style.paddingRight=(parseFloat(getComputedStyle(document.body).paddingRight)+scrollbar)+'px';
    document.body.style.overflow='hidden';
    lightbox.setAttribute('aria-label',paper.key+' 논문 그림 확대');
    largeImage.alt=img.alt;largeImage.src=img.currentSrc || img.src;
    lightbox.showModal();
    closeImage.focus({preventScroll:true});
    if(img.naturalWidth && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const thumb=img.getBoundingClientRect();
      const fit=Math.min(thumb.width/img.naturalWidth,thumb.height/img.naturalHeight);
      const width=img.naturalWidth*fit,height=img.naturalHeight*fit;
      const expanded=largeImage.getBoundingClientRect();
      if(expanded.width && expanded.height){
        const dx=thumb.left+thumb.width/2-expanded.left-expanded.width/2;
        const dy=thumb.top+thumb.height/2-expanded.top-expanded.height/2;
        imageAnimation=largeImage.animate([
          {transform:`translate(${dx}px,${dy}px) scale(${width/expanded.width},${height/expanded.height})`},
          {transform:'none'}
        ],{duration:250,easing:'cubic-bezier(.2,.7,.2,1)'});
      }
    }
  }
  closeImage.addEventListener('click',closeLightbox);
  largeImageButton.addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox();});
  lightbox.addEventListener('cancel',event=>{event.preventDefault();closeLightbox();});
  lightbox.addEventListener('wheel',event=>{
    if(event.ctrlKey)return;
    event.preventDefault();closeLightbox();
  },{passive:false});

  const template = root.querySelector('#ag-paper-template');
  function paperNode(paper) {
    const row = template.content.firstElementChild.cloneNode(true);
    row.dataset.kind=paper.category;
    row.dataset.paper=paper.key;
    const note=(paper.note || '').trim();
    const fields={'.ag-venue':paper.venue,'.ag-paper-title':paper.title,'.ag-venue-full':paper.full+', '+paper.year};
    for(const [selector,text] of Object.entries(fields)) row.querySelector(selector).textContent=text;
    const venue=row.querySelector('.ag-venue-full');
    if(note){
      const detail=document.createElement('span');detail.className='ag-venue-note';
      if(/acceptance\s+ratio/i.test(note))detail.classList.add('ag-venue-note-conference');
      else if(/\bSCIE\b/i.test(note))detail.classList.add('ag-venue-note-journal');
      detail.textContent='('+note+')';venue.append(' ',detail);
    }
    // LOHA resources stay right-aligned in a fixed Slide, Poster order.
    if(paper.key==='LOHA'){
      const resources=row.querySelector('.ag-paper-links');
      for(const [label,pattern,iconName] of [['Slide',/^slides?$/i,'presentation'],['Poster',/^poster$/i,'file-text']]){
        const resource=(paper.links || []).find(([name,url])=>pattern.test(name.trim()) && url);
        if(!resource)continue;
        const link=externalLink(label,resource[1],iconName);
        link.setAttribute('aria-label',paper.key+' '+label+' PDF 열기');resources.append(link);
      }
    }
    const paperLink=(paper.links || []).find(([label,url])=>label.trim().toLowerCase()==='paper' && url);
    if(paperLink)row.querySelector('.ag-paper-title').replaceChildren(externalLink(paper.title,paperLink[1]));
    row.querySelector('.ag-venue').setAttribute('aria-label',paper.category+': '+paper.venue);
    const authors=row.querySelector('.ag-authors');
    const parts=paper.authors.split(content.ownerName);
    parts.forEach((part,index)=>{
      if(index){const name=document.createElement('span');name.className='ag-author-self';name.textContent=content.ownerName;authors.append(name);}
      authors.append(document.createTextNode(part));
    });
    if(paper.image){
      const figure=row.querySelector('.ag-figure');const img=document.createElement('img');
      img.src=paper.image;img.alt=paper.imageAlt || paper.title;img.loading='lazy';
      const trigger=document.createElement('button');
      trigger.type='button';trigger.className='ag-image-zoom';
      trigger.setAttribute('aria-label',paper.key+' 논문 그림 확대');trigger.setAttribute('aria-haspopup','dialog');
      trigger.title='클릭하여 확대';trigger.append(img);
      trigger.addEventListener('click',()=>openLightbox(trigger,img,paper));
      figure.replaceChildren(trigger);figure.removeAttribute('role');figure.removeAttribute('aria-label');
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
    for(const item of skill.items){
      const name=typeof item==='string'?item:item.name;
      const url=typeof item==='string'?'':(item.url || '').trim();
      const chip=url?externalLink(name,url):document.createElement('span');
      if(url){
        chip.setAttribute('aria-label',name+' 소스 코드 열기 (새 탭)');
        chip.title=name+' 소스 코드 열기 (새 탭)';
        const arrow=document.createElement('span');arrow.className='ag-skill-link-icon';
        arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');chip.append(arrow);
      }else chip.textContent=name;
      dd.append(chip);
    }
    group.append(dt,dd);root.querySelector('.ag-skills').append(group);
  }

  const albums=content.albums || [];
  const albumGrid=root.querySelector('.ag-albums');
  const albumDetail=root.querySelector('.ag-album-detail');
  const albumLabel=album=>[album.artist,album.title].filter(Boolean).join(' - ');
  function showAlbum(index){
    const album=albums[index];if(!album)return;
    root.querySelectorAll('[data-album]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.album)===index?'true':'false'));
    const summary=albumLabel(album);
    const title=albumDetail.querySelector('.ag-detail-title');title.textContent=summary;title.title=summary;
    const link=albumDetail.querySelector('.ag-detail-link');link.hidden=!album.url;if(album.url)link.href=album.url;
    albumDetail.hidden=false;
  }
  albums.forEach((album,index)=>{
    const button=document.createElement('button');button.type='button';button.className='ag-album';button.dataset.album=index;
    button.setAttribute('aria-label',albumLabel(album));button.setAttribute('aria-pressed','false');
    const cover=document.createElement('span');cover.className='ag-cover';
    if(album.cover){
      cover.classList.add('has-image');const img=document.createElement('img');img.className='ag-cover-image';img.src=album.cover;img.alt=album.title;img.loading='lazy';cover.append(img);
    }else{
      const number=document.createElement('span');number.className='ag-cover-number';number.textContent=String(index+1).padStart(2,'0');
      const label=document.createElement('span');label.className='ag-cover-label';label.textContent='COVER STUDY';cover.append(number,label);
    }
    button.title=albumLabel(album);
    button.append(cover);button.addEventListener('click',()=>showAlbum(index));albumGrid.append(button);
  });
  root.querySelector('.ag-title-row .ag-note').hidden=albums.some(a=>a.cover);
  albumDetail.querySelector('.ag-close').addEventListener('click',()=>{
    albumDetail.hidden=true;root.querySelectorAll('[data-album]').forEach(b=>b.setAttribute('aria-pressed','false'));
  });

  // Champion portraits are a static collection, without buttons or selection.
  const champions=content.champions || [];
  const championGrid=root.querySelector('.ag-champions');
  const championLabel=champion=>[champion.name,champion.skin].filter(Boolean).join(' - ');
  champions.forEach(champion=>{
    const card=document.createElement('div');card.className='ag-champion';
    const label=championLabel(champion);
    const cover=document.createElement('span');cover.className='ag-cover';
    const fallback=document.createElement('span');fallback.className='ag-champion-fallback';fallback.textContent=champion.name;
    cover.append(fallback);
    if(champion.image){
      cover.classList.add('has-image');fallback.hidden=true;
      const img=document.createElement('img');img.className='ag-cover-image';img.alt=label;img.loading='lazy';img.decoding='async';
      img.draggable=false;
      img.style.objectPosition=champion.position || '50% 50%';
      img.addEventListener('error',()=>{img.hidden=true;fallback.hidden=false;cover.classList.remove('has-image');});
      img.src=champion.image;cover.append(img);
    }
    card.append(cover);championGrid.append(card);
  });

  function renderRoute(scroll){
    closeLightbox();
    showEmailAddress(false);
    const hash=decodeURIComponent(location.hash.slice(1));
    const page=['publication','publications'].includes(hash)?'publications':['playground','misc'].includes(hash)?'playground':'about';
    if(hash==='misc')history.replaceState(null,'','#playground');
    root.querySelectorAll('[data-page]').forEach(p=>p.hidden=p.dataset.page!==page);
    root.querySelector('.ag-brand').hidden=page==='about';
    root.querySelectorAll('.ag-nav').forEach(b=>{if(b.dataset.go===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
    document.title=page==='about'?'Seongjoon Cho':(page==='playground'?'Playground':'Publication')+' | Seongjoon Cho';
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
