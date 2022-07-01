noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/T1Gj4XKk/Clown-Nose-PNG-Image-1.png")
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("Pose net is Initialised.");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-15;
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}

function draw()
{
    image(video,0,0,300,300);
    fill("#FF0000");
    stroke("#FF0000");
    image(clown_nose,noseX,noseY,25,25)
}

function takeSnapshot()
{
    save("my_pic.png");
}