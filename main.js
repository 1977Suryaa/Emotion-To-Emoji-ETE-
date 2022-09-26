var face1=""
var face2=""
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})
Webcam.attach(document.getElementById("camera"))


function ctc(){
    Webcam.snap(
        function (data_uri){
            
            document.getElementById("result").innerHTML="<img id='photo' src='"+data_uri+"'>"
        }
        
        )
}

function speak(){
    
    var speech1=window.speechSynthesis
    var speech_data1="the first face is"+face1
    var speech_data2="the second face is"+face2
    var voice1=new SpeechSynthesisUtterance(speech_data1+speech_data2)
    speech1.speak(voice1)


}
 loader=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sTte-zcxj/model.json",modelLoaded)
function modelLoaded(){
    console.log("Its heated")
}
function ctd(){
    var image222=document.getElementById("photo")
    loader.classify(image222,gotResult)
    
}
function gotResult(error,results){
  if (error){
    console.log(error)
  }
  else{
    console.log(results)
    document.getElementById("f1").innerHTML="face.no1<br> <br>"+results[0].label
    document.getElementById("f2").innerHTML="face.no2<br> <br>"+results[1].label
    face1=results[0].label
    face2=results[1].label
    speak()
    //face1
    if(face1=="angry"){
        document.getElementById("f1").innerHTML="face.no1<br>"+"&#128545;<br>"+results[0].label

    }
    if(face1=="sad"){
        document.getElementById("f1").innerHTML="face.no1<br>"+"&#128532;<br>"+results[0].label
    }
    if(face1=="happy"){
        document.getElementById("f1").innerHTML="face.no1<br>"+"&#128522;<br>"+results[0].label 
    }
    if(face1=="crying"){
        document.getElementById("f1").innerHTML="face.no1<br>"+"&#128546;<br>"+results[0].label 
    }
    //face2
    if(face2=="angry"){
        document.getElementById("f2").innerHTML="face.no2<br>"+"&#128545;<br>"+results[1].label

    }
    if(face2=="sad"){
        document.getElementById("f2").innerHTML="face.no2<br>"+"&#128532;<br>"+results[1].label
    }
    if(face2=="happy"){
        document.getElementById("f2").innerHTML="face.no2<br>"+"&#128522;<br>"+results[1].label 
    }
    if(face2=="crying"){
        document.getElementById("f2").innerHTML="face.no2<br>"+"&#128546;<br>"+results[1].label 
    }
    
  }
}