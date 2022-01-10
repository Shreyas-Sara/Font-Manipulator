
difference = "";
RwristX = "";
LwristY = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 80);

    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on('pose', allposes);
}

function modalLoaded(){
    console.log('modal loaded successful');
}

function allposes(results){
    if(results.length > 0){
        console.log(results);
        

        RwristX = results[0].pose.rightWrist.x;
        LwristX = results[0].pose.leftWrist.x;
        difference = floor(LwristX - RwristX);
    }
}

function draw(){
   
    fill("blue");
    text("Shreyas", 100, 50);
    textSize(difference);
    
   
}