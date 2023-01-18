/*https://teachablemachine.withgoogle.com/models/oqtVtkNKj/*/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"' >";
        })
    }
    console.log("ml5 version",ml5.version);
    var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oqtVtkNKj/model.json",modelLoaded);
    function modelLoaded(){
        console.log("model has been loaded");
    }
    function speak(){
        var synth=window.speechSynthesis;
        speakData1="first prediction is "+prediction_1;
        speakData2="second prediction is "+ prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speakData1+ speakData2)
        synth.speak(utterThis);}

        function check(){
    var img=document.getElementById("capture_image");
    classifier.classify(img, gotResult);
    
            }
     function gotResult(error,results){
        if(error){
            console.log(error);
        }else{
            console.log(results);
            prediction_1=results[0].label;
            prediction_2=results[1].label;
            document.getElementById("result_emotion_name").innerHTML=prediction_1;
            document.getElementById("result_emotion_name1").innerHTML=prediction_2;
            speak();
            if(prediction_1=="amazing"){
                document.getElementById("update_emoji").innerHTML="&#128076;";
            }
            if(prediction_1=="victory"){
                document.getElementById("update_emoji").innerHTML="&#9996;";
            }
            if(prediction_1=="best"){
                document.getElementById("update_emoji").innerHTML="&#128077;";
            }
            if(prediction_2=="amazing"){
                document.getElementById("update_emoji1").innerHTML="&#128076;";
            }
            if(prediction_2=="victory"){
                document.getElementById("update_emoji1").innerHTML="&#9996;";
            }
            if(prediction_2=="best"){
                document.getElementById("update_emoji1").innerHTML="&#128077;";
            }
        }
     }