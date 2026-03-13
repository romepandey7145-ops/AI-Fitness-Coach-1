<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet"></script>

<script>

let video = document.createElement("video")

async function startWorkoutCamera(){

const stream = await navigator.mediaDevices.getUserMedia({video:true})

video.srcObject = stream
video.play()

document.querySelector(".cam-feed").appendChild(video)

const net = await posenet.load()

detectPose(net)

}

async function detectPose(net){

const pose = await net.estimateSinglePose(video)

console.log("Pose:",pose)

requestAnimationFrame(()=>detectPose(net))

}

</script>
