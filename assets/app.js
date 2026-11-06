(function(){
document.documentElement.classList.add('js');
var tb=document.querySelector('.tt'),mt=document.querySelector('meta[name=theme-color]');
function sT(t,save){document.documentElement.setAttribute('data-theme',t);if(mt)mt.content=t==='light'?'#F2F7FB':'#060B16';if(tb){tb.setAttribute('aria-pressed',t==='light');tb.setAttribute('aria-label',t==='light'?'Switch to dark mode':'Switch to light mode')}if(save){try{localStorage.setItem('edad-theme',t)}catch(e){}}}
sT(document.documentElement.getAttribute('data-theme')||'dark');
if(tb)tb.addEventListener('click',function(){sT(document.documentElement.getAttribute('data-theme')==='light'?'dark':'light',1)});
var nav=document.querySelector('.nav'),btn=document.querySelector('.burger'),links=document.querySelector('.links');
function sc(){nav.classList.toggle('scrolled',window.scrollY>40)}sc();window.addEventListener('scroll',sc,{passive:true});
function close(){links.classList.remove('open');btn.setAttribute('aria-expanded','false')}
btn.addEventListener('click',function(){var o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
links.addEventListener('click',function(e){if(e.target.closest('a'))close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
document.addEventListener('click',function(e){if(!e.target.closest('.nav'))close()});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08});
els.forEach(function(el,i){el.style.setProperty('--d',((i%4)*.055)+'s');io.observe(el)})}else els.forEach(function(el){el.classList.add('in')});
// results filter
var fp=document.querySelectorAll('.fp');
fp.forEach(function(b){b.addEventListener('click',function(){fp.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
document.querySelectorAll('[data-kind]').forEach(function(c){c.hidden=!(b.dataset.f==='all'||c.dataset.kind===b.dataset.f)})})});
// contact form opens the visitor's email app (nothing is stored)
var f=document.getElementById('contact-form');
if(f){var p=new URLSearchParams(location.search).get('service');if(p&&f.service)for(var i=0;i<f.service.options.length;i++)if(f.service.options[i].dataset.slug===p)f.service.selectedIndex=i;
f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),b=f.querySelector('button[type=submit]'),m=f.querySelector('.fmsg');
function mailto(){location.href='mailto:'+f.dataset.to+'?subject='+encodeURIComponent('Free audit request: '+d.get('service'))+'&body='+encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message'))}
b.disabled=true;b.textContent='Sending...';
fetch(f.action,{method:'POST',body:d}).then(function(r){return r.json().then(function(j){if(!r.ok||!j.ok)throw 0})}).then(function(){f.reset();m.textContent='Thank you. Your request is in, and we will reply within 24 hours.';b.textContent='Sent'}).catch(function(){b.disabled=false;b.textContent='Send message';m.textContent='Could not send right now. Opening your email app instead.';mailto()})})}
})();
