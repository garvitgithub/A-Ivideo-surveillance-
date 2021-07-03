function setup(){
canvas=createCanvas(600,600)
canvas.center()
}
function preload(){
video=createVideo("video.mp4");
video.hide()
}
function draw(){
image (video,0,0,600,600);
if(status !=""){
arush.detect(video,gotResult);
for(i=0;i<objects.length;i++)
{
document.getElementById("status").innerHTML="DETECTED!";
document.getElementById("number").innerHTML=objects.length;
stroke("green");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill ();
stroke("red");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function on(){
arush=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="detecting objects";
}
status="";objects=[];
function modelLoaded(){
console.log("cocossd is loaded");
status=true;
video.loop();
}
function gotResult(error,results){
if(error){console.log(error);}
else{console.log(results);objects=results;}
}