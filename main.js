function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mDHWU2ppe/model.json", modelReady);
    }
    cat=0;
    dog=0;
    function modelReady(){
        classifier.classify(gotResults);
    }
    function gotResults(error, results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            random_r=Math.floor(Math.random() * 255) +1;
            random_g=Math.floor(Math.random() * 255) +1;
            random_b=Math.floor(Math.random() * 255) +1;
            document.getElementById("result_label").innerHTML='I Can Hear: ' + results[0].label;
            document.getElementById("result_confidence").innerHTML='Accuracy Of What I Hear - ' + (results[0].confidence * 100).toFixed(2) + '%';
            document.getElementById("result_label").style.color="rgb("+random_r+", "+random_g+", "+random_b+")";
            document.getElementById("result_confidence").style.color="rgb("+random_r+", "+random_g+", "+random_b+")";
            dog_img=document.getElementById("qwerty");
            cat_img=document.getElementById("qwerty");
            if(results[0].label=="Dog Sounds"){
                dog_img.src="https://i0.wp.com/media.giphy.com/media/ag3BtJm0PrT9Ji9dt3/giphy.gif";
                dog=0+1;
            }
            else if(results[0].label=="Cat Sounds"){
                alien_1.src="https://25.media.tumblr.com/b832028c117cb548614cbea10f0153dc/tumblr_mudg73OFlK1rgpyeqo1_500.gif";
                cat=0+1;
            }
        }
    }