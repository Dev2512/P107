//https://teachablemachine.withgoogle.com/models/lRaJXxvkm/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lRaJXxvkm/model.json', modelReady);

}

function modelReady()
{
    classifier(gotResults);
}