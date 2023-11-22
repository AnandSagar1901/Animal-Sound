var barking  = 0;
var meow = 0;
var mooing = 0 ;
var roar = 0;
function startclassification(){

    navigator.mediaDevices.getUserMedia({ audio: true });
   classifier =  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l0V-Df0oP/model.json',modelReady); 
}
function modelReady(){
    classifier.classify(got_results);
}

function got_results(error,results){
if(error){
    console.error(error);

}else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
 
    document.getElementById("result_label").innerHTML= 'I can hear' +
    results[0].label;
    
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    Img = document.getElementById("Ear");
    if(results[0].label == "Barking"){
    Img.src="dog.jpeg";
    barking =barking+1;

    }
    else if(results[0].label=="Meowing"){
        Img.src="cat.jpeg";
        meow =  meow+1;
    }
    else if(results[0].label=="Mooing"){
        Img.src="cow.jpeg";
        mooing =  mooing+1;
    }
    else if (results[0].label=="roar"){
      Img.src="lion.jpeg";
      roar = roar+1;
    }
     else{
         Img.src="Ear.jpeg";
     }
}
}