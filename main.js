console.log('javascript ready');

const base_api = "https://api.genderize.io";

function showResult(name, gender, probability, country_id){
    const predictionElement = document.getElementById("prediction");
    const probabilityPercentage = probability * 100;
    let genderDecode;

    if (gender == "male"){
        genderDecode = "Cowok"
    }else{
        genderDecode = "Cewek";
    }
    
    const predictionText = `Halo ${name}, Jenis Kelamin Kamu Kemungkinan Adalah ${genderDecode} Sebesar ${probabilityPercentage}%`;
    predictionElement.textContent = predictionText
}

async function predict(event){
    if(event.key == "Enter") {
            const firstName = event.target.value;
            const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`;

            const response = await fetch(queryUrl)
            const result = await response.json();
            console.log(result);
            showResult(result.name, result.gender, result.probability, result.country_id);
        }
    }
 