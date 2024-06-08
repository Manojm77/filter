
nesex = 0;
nosey = 0;

function preload() {
    Spiderman = loadImage("https://i.postimg.cc/pLCW31Pw/5853bcc7ec0c270fc2f62de8.png");
}

function setup() {

  canvas = createCanvas(300,300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {

if(results.length > 0)
    {

         console.log(results);
         console.log("nose x=" +results[0].pose.nose.x);
         console.log("nose y=" +results[0].pose.nose.y);

    }

}

function draw() {

    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(nosex,nosey,20);
    image(Spiderman, nosex ,nosey ,30 ,30);
    
    }

function take_snapshot() {

    save('myFilterImage.png');
    
    }

    function gotPoses() {

if(results.length > 0)
    {

 console.log(results);
     nosex = results[0].pose.nose.x;
     nosey = results[0].pose.nose.y;
     console.log("nose x = " + nosex);
     console.log("nose y = " + nosey);

    }

}

function draw() {

image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
circle(nosex,nosey,20);
image(Spiderman, nosex ,nosey ,30 ,30);

}