function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iKm3r6xRQ/', modelReady);
    }

    function modelReady(){
        classfier.classify(gotResults);
    }