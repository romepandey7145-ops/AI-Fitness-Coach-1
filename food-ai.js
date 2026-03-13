<script>

async function analyzeFood(){

const file = document.getElementById("foodInput").files[0]

const reader = new FileReader()

reader.onload = function(){

document.getElementById("foodPreview").src = reader.result

}

reader.readAsDataURL(file)

const nutrition = {
calories:480,
protein:32,
carbs:40,
fat:12
}

document.getElementById("calories").innerText = nutrition.calories
document.getElementById("protein").innerText = nutrition.protein
document.getElementById("carbs").innerText = nutrition.carbs
document.getElementById("fat").innerText = nutrition.fat

}

</script>
