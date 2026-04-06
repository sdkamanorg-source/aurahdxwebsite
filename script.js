// DEPLOY BUTTON
function deploy(){
  window.location.href = "https://mc.auranode.qzz.io";
}

// TYPING TEXT
const text = "High performance hosting. Zero lag. Instant deploy.";
let i = 0;

function typing(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 30);
  }
}
typing();

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    dx: Math.random()-0.5,
    dy: Math.random()-0.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x += p.dx;
    p.y += p.dy;

    ctx.fillStyle="cyan";
    ctx.fillRect(p.x,p.y,2,2);
  });

  requestAnimationFrame(animate);
}
animate();
