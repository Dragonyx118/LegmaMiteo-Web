// CURSOR
(function(){
    const ring = document.createElement('div'); ring.className = 'cursor-ring';
    const dot  = document.createElement('div'); dot.className  = 'cursor-dot';
    document.body.appendChild(ring); document.body.appendChild(dot);
    let mx=window.innerWidth/2, my=window.innerHeight/2, rx=mx, ry=my;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
    const targets = 'a,button,input,textarea,select,[role="button"],.glass-card,.data-card,.endpoint-card,.feature-card,.stat-item';
    document.addEventListener('mouseover', e => { if(e.target.closest(targets)) document.body.classList.add('cursor-hover'); });
    document.addEventListener('mouseout',  e => { if(e.target.closest(targets)) document.body.classList.remove('cursor-hover'); });
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
    document.addEventListener('mouseleave',() => { ring.style.opacity='0'; dot.style.opacity='0'; });
    document.addEventListener('mouseenter',() => { ring.style.opacity='1'; dot.style.opacity='1'; });
    (function anim(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(anim); })();
})();

// HAMBURGER
(function(){
    const btn  = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    if(!btn||!menu) return;
    btn.addEventListener('click', () => { btn.classList.toggle('open'); menu.classList.toggle('open'); });
    document.addEventListener('click', e => { if(!btn.contains(e.target)&&!menu.contains(e.target)){ btn.classList.remove('open'); menu.classList.remove('open'); } });
})();

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'}); });
});