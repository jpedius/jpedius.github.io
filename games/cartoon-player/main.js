// Game index.html
let game = document.querySelector('#game');
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
/*
// Create a scale: transform value in pixel
var x = d3.scaleLinear()
    .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([0, 400]);       // This is the corresponding value I want in Pixel
// Try console.log( x(25) ) to see what this x function does.
svg.call(d3.axisBottom(x));
*/
// Add 3 dots for 0, 50 and 100%
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
