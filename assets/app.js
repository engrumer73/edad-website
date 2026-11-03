(function(){
document.documentElement.classList.add('js');
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
f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
location.href='mailto:'+f.dataset.to+'?subject='+encodeURIComponent('Free audit request: '+d.get('service'))+'&body='+encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message'))})}
})();
