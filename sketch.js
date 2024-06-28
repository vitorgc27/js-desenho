function setup() {
    createCanvas(400, 400);
  background("white");
  }
  
  function draw() {
  
    stroke("black");
    fill("white");
  
    // console.log(mouseIsPressed);
  
    if(mouseIsPressed) {
   rect(mouseX, mouseY, 20, 35);
    }
  }