// game index.html
let game = document.querySelector('#game');

// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

console.log(canvas.width, window.innerWidth);

const width = canvas.width = 800; //window.innerWidth;
const height = canvas.height = 600; //window.innerHeight;

console.log(canvas.width);

// This will log the width of the viewport
console.log(window.innerWidth);

// This will log the width of the frame viewport within a frameset
console.log(self.innerWidth);

// This will log the width of the viewport of the closest frameset
console.log(parent.innerWidth);

// This will log the width of the viewport of the outermost frameset
console.log(top.innerWidth);

console.log(canvas.height);

// This will log the width of the viewport
console.log(window.innerHeight);

// This will log the width of the frame viewport within a frameset
console.log(self.innerHeight);

// This will log the width of the viewport of the closest frameset
console.log(parent.innerHeight);

// This will log the width of the viewport of the outermost frameset
console.log(top.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(Math.abs(this.velX));
      }

      if ((this.x - this.size) <= 0) {
         this.velX = Math.abs(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(Math.abs(this.velY));
      }

      if ((this.y - this.size) <= 0) {
         this.velY = Math.abs(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }

   collisionDetect() {
      for (const ball of balls) {
         if (!(this === ball)) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
         }
      }
   }

}

const balls = [];

while (balls.length < 2) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  balls.push(ball);
}

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const ball of balls) {
     ball.draw();
     ball.update();
     ball.collisionDetect();
   }

   requestAnimationFrame(loop);
}

loop();

/*
//let svg = d3.select("#root");

// set the dimensions and margins of the graph
let margin = {
  top: 10,
  right: 40,
  bottom: 30,
  left: 30
};
    
let width  = 870 - margin.left - margin.right;
let height = 640 - margin.top  - margin.bottom;

// append the svg object to the body of the page
let svg = d3.select("#root")
  .append("svg")
    .attr("width",  width  + margin.left + margin.right)
    .attr("height", height + margin.top  + margin.bottom)
    // translate this svg element to leave some margin.
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// X scale and Axis
let x = d3.scaleLinear()
    .domain([0, 800])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([0, width]);       // This is the corresponding value I want in Pixel

svg.append('g')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// X scale and Axis
let y = d3.scaleLinear()
    .domain([0, 600])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([height, 0]);       // This is the corresponding value I want in Pixel

svg.append('g')
  .call(d3.axisLeft(y));
*/ 
/*
// Create a scale: transform value in pixel
var x = d3.scaleLinear()
    .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([0, 400]);       // This is the corresponding value I want in Pixel
// Try console.log( x(25) ) to see what this x function does.
svg.call(d3.axisBottom(x));
*/
// Add 3 dots for 0, 50 and 100%
/*
svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 400)
  .attr("r", 40)
  .style("fill", "blue");
 
svg.append("circle")
  .attr("cx", 50)
  .attr("cy", 100)
  .attr("r", 40)
  .style("fill", "red");
 
svg.append("circle")
  .attr("cx", 300)
  .attr("cy", 300)
  .attr("r", 85)
  .style("fill", "green");

   

let r = Math.floor(Math.random() * 255);

let g = Math.floor(Math.random() * 255);

let b = Math.floor(Math.random() * 255);
    
svg.append("line")
  .attr("x1", 100)
  .attr("y1", 100)
  .attr("x2", 200)
  .attr("y2", 200)
  .style("stroke", "rgb(" + r + "," + g + "," + b + ")")
  .style("stroke-width", 2);
  */
/*
<line x1 = "100" y1 = "100" 
               x2 = "200" y2 = "200" style = "stroke:rgb(255,0,0);
               stroke-width:2"/>
let h1 = document.createElement('h1');
h1.innerHTML = 'JP';
*/

/*
let grass = document.createElement('img');
grass.src = 'grass.webp';
grass.width = 800;
grass.y = 400;
*/

// <svg width="200" height="200" viewBox="-100 -100 200 200">
//let root = document.createElement('svg');
//root.width = 800;
//root.height = 600;

//console.log(root);

/*
<circle
        cx="0"
        cy="0"
        r="90"
        fill="transparent"
        stroke="#f0f0c9"
        stroke-width="7"
      />
*/ 
/*
let c = document.createElement('circle');
c.cx = 0;
c.cy = 0;
c.r = 90;
c.fill = 'transparent';
c.stroke = '#f0f0c9';
*/
//root.appendChild(c);

// game.appendChild(h1);
//game.appendChild(root);
