(function(){
var f=document.getElementById('fall'),e=['🌸','🍃','🤍','✨','🌿'];
for(var i=0;i<16;i++){var x=document.createElement('i');x.textContent=e[i%e.length];
x.style.right=(Math.random()*96)+'%';x.style.fontSize=(12+Math.random()*14)+'px';
x.style.animationDuration=(9+Math.random()*9)+'s';x.style.animationDelay=(-Math.random()*14)+'s';f.appendChild(x);}
var T=new Date('2026-11-20T20:00:00+02:00').getTime();
function tick(){var d=Math.max(0,T-Date.now()),p=function(n){return String(n).padStart(2,'0')};
document.getElementById('d').textContent=p(Math.floor(d/864e5));
document.getElementById('h').textContent=p(Math.floor(d/36e5)%24);
document.getElementById('m').textContent=p(Math.floor(d/6e4)%60);
document.getElementById('s').textContent=p(Math.floor(d/1e3)%60);}
tick();setInterval(tick,1000);
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting)x.target.classList.add('in')})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(n){io.observe(n)});
var au=new Audio('music.mp3');au.loop=true;au.volume=.9;
document.getElementById('env').addEventListener('click',function(){
this.classList.add('open');
try{au.play();}catch(err){}
});
})();
