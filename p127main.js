function setup(){
    canvas=createCnvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifiyCanvas);
    synth=window.speechSynthesis;
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function clearcanvas(){
    background("white");
}
function draw(){
    strokeweight(13);
    strokecolor(0);
    if(mouseIspressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifiyCanvas(){
    classifiy.classifiy(canvas,gotResult);
}
function gotResult(error,result){
if(error){
    console.log(error);
}
console.log(result);
document.getElementById('label').innerHTML='Label:'+result[0].label;
synth.speak(utterThis);
}
