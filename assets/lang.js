(function(){var k='be-lang',l;try{l=localStorage.getItem(k)}catch(e){}
if(!l){l=(navigator.language||'en').toLowerCase().indexOf('es')===0?'es':'en'}
function set(v){document.documentElement.lang=v;try{localStorage.setItem(k,v)}catch(e){}
document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.set===v)})}
document.addEventListener('DOMContentLoaded',function(){set(l);document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){set(b.dataset.set)}})});
document.documentElement.lang=l})();
