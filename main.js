https://teachablemachine.withgoogle.com/models/d_pfeyYu9/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/d_pfeyYu9/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}