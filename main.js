Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function take_picture(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='new_image' src='"+data_url+"'>";
    });
}

console.log("ml5:version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1LoM9iLzh/model.json",modelloaded);

function modelloaded(){
    console.log("modelloaded");
}

function identify_image(){
    img=document.getElementById("new_image");
    classifier.classify(img,get_result);
}

function get_result(error,result){
    if (error){
        console.log("error");
    }
    else {
        console.log(result);
        document.getElementById("result_object").innerHTML=result[0].label;
        document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}