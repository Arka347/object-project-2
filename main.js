img = "";
function preload(){
    img = loadImage('176-1761601_simple-home-interior-design-bedroom.jpg')
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FFA500");
    text("Bed and lamp", 45, 75);
    noFill();
    stroke("#FFA500");
    rect(30, 60, 450, 350);


    
    fill("#FF0000");
    text("Window and door", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}
function modelLoaded(){
    console.log("Model Loaded!");
    statuus = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
if(error){
  console.log(error);
}
console.log(results);
}


