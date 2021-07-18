song1="";
song2="";
song3="";

leftwristx=0;
rightwristx=0;

leftwristy=0;
rightwristy=0;

score_leftwrist=0;
score_rightwrist=0;
function setup(){
    canvas=createCanvas(300,300)
    canvas.center();

    video=createCapture(VIDEO)
    video.hide();
    video.size(300,300)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotposes)
}

function gotposes(result){
    if(result.length>0){
        console.log(result)
        leftwristx=result[0].pose.leftWrist.x;
        rightwristx=result[0].pose.rightWrist.x;

        leftwristy=result[0].pose.leftWrist.y;
        rightwristy=result[0].pose.rightWrist.y;

        score_leftwrist=result[0].pose.keypoints[9].score;
        score_rightwrist=result[0].pose.keypoints[10].score;
    }

}

function modelLoaded(){
    console.log("posenet is intialized")
}

function preload(){
    song1=loadSound("Leja Re.mp3")
    song2=loadSound("song2naach.mp3")
    
}

function draw(){
    image(video,0,0,300,300)
    stroke("red")
    fill("red")

    if(score_leftwrist>0.2){
        circle(leftwristx,leftwristy,20)
        song2.stop()
        if(song1.isPlaying()==false){
            song1.play()
        }
        
    }
    if(score_rightwrist>0.2){
        circle(rightwristx,rightwristy,20)
        song1.stop()
        if(song2.isPlaying()==false){
            song2.play()
        }
        
    }
}

function play1(){

    song1.play();

    }

function play2(){

        song2.play();
    
}



function stop1(){

    song1.stop();

    }

function stop2(){

        song2.stop();
    
}

