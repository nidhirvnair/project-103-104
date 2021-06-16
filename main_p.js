Webcam.set(    {
    height:300,
    width:350,
    image_format:'png',
        png_quality:90
    }
);
camera=document.getElementById("cam")
Webcam.attach("#cam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("img").innerHTML="<img src='"+data_uri+"'</img>";
    });
}

console.log("ml5.js version:"+ml5.version);
classifer=ml5.imageClassifier('teachablemachine.withgoogle.com/models/ZPMvj5pUR/model.json',modelLoded_p);

function modelLoded_p(){
    console.log("Model Loded!");
}