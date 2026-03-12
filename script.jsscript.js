const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let detector;

document.getElementById("startCamera").onclick = async () => {

const stream = await navigator.mediaDevices.getUserMedia({
video: true
});

video.srcObject = stream;

await loadModel();

detectPose();

};

async function loadModel(){

const model = poseDetection.SupportedModels.MoveNet;

detector = await poseDetection.createDetector(model,{
modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING
});

}

async function detectPose(){

const poses = await detector.estimatePoses(video);

ctx.clearRect(0,0,canvas.width,canvas.height);

if(poses.length > 0){

poses[0].keypoints.forEach(point => {

if(point.score > 0.5){

ctx.beginPath();
ctx.arc(point.x, point.y, 5, 0, 2*Math.PI);
ctx.fillStyle="lime";
ctx.fill();

}

});

}

requestAnimationFrame(detectPose);

}
