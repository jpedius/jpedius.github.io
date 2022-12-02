// Game index.html
let game = document.querySelector('#game');
let svg = d3.select("#root");

// Create a scale: transform value in pixel
var x = d3.scaleLinear()
    .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([0, 400]);       // This is the corresponding value I want in Pixel
// Try console.log( x(25) ) to see what this x function does.
svg.call(d3.axisBottom(x));

// Add 3 dots for 0, 50 and 100%
svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 40)
  .style("fill", "blue");
 
svg.append("circle")
  .attr("cx", x(50))
  .attr("cy", 100)
  .attr("r", 40)
  .style("fill", "red");
 
svg.append("circle")
  .attr("cx", x(100))
  .attr("cy", 100)
  .attr("r", 40)
  .style("fill", "green");


/*
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
