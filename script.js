function deploy(){
  window.location.href = "https://mc.auranode.qzz.io";
}

function coming(){
  alert("Coming Soon...");
}

/* SLOW TYPING */
const text = "High performance hosting. Zero lag. Instant deploy.";
let i = 0;

function typing(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 60); // slower
  }
}
typing();

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = [];

for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    dx:(Math.random()-0.5)*0.4,
    dy:(Math.random()-0.5)*0.4
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x += p.dx;
    p.y += p.dy;

    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;

    ctx.fillStyle="cyan";
    ctx.fillRect(p.x,p.y,2,2);
  });

  requestAnimationFrame(animate);
}
animate();
