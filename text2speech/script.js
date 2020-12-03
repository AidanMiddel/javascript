    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
        
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
        location.reload();
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let keuze = randomizer(arrayLength);
        let keuze1 = randomizer(arrayLength);
        let keuze2 = randomizer(arrayLength);
        let woord1 = onderwerp[keuze];
        let woord2 = werkwoord[keuze1];
        let woord3 = restwoord[keuze2];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
        window.speechSynthesis.cancel();
        let message = new SpeechSynthesisUtterance(textString);
        let voices = window.speechSynthesis.getVoices();
        message.voice = voices[1];
        message.pitch = 1; // range between 0 and 2
        message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
        window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["she", "Ed", "Rosmerta", "Aidan", "you", "he", "it", "AardappelMASTER"];
    const werkwoord = ["walks", "learns", "drinks", "plays", "dances", "hates", "goes", "is"];
    const restwoord = ["hard", "at school", "coffee", "computer", "ps4", "banana", "potatos", "MineCraft", "Portal 2"];
        
    let plaatjes = ["fotos/foto (1).jfif", "fotos/foto (2).jfif", "fotos/foto (1).jpeg", "fotos/foto (2).jpeg", "fotos/foto (1).jpg", "fotos/foto (2).jpg", "fotos/foto (3).jpg", "fotos/foto (4).jpg", "fotos/foto (5).jpg", "fotos/foto (6).jpg", "fotos/foto (7).jpg", "fotos/foto (8).jpg", "fotos/foto (9).jpg", "fotos/foto (10).jpg", "fotos/foto (11).jpg", "fotos/foto (12).jpg", "fotos/foto (13).jpg", "fotos/foto (14).jpg", "fotos/foto (15).jpg", "fotos/foto (16).jpg", "fotos/foto (17).jpg", "fotos/foto (18).jpg", "fotos/foto (19).jpg", "fotos/foto (20).jpg", "fotos/foto (21).jpg", "fotos/foto (22).jpg", "fotos/foto (23).jpg", "fotos/foto (24).jpg", "fotos/foto (25).jpg", "fotos/foto (1).png", "fotos/foto (2).png", "fotos/foto (3).png", "fotos/foto (4).png", "fotos/foto (5).png", "fotos/foto (6).png", "fotos/foto (7).png", "fotos/foto (8).png", "fotos/foto (9).png", "fotos/foto (10).png", "fotos/foto (11).png", "fotos/foto (12).png", "fotos/foto (13).png", "fotos/foto (14).png", "fotos/foto (15).png", "fotos/foto (16).png", "fotos/foto (17).png", "fotos/foto (18).png", "fotos/foto (19).png", "fotos/foto (20).png", "fotos/foto (21).png", "fotos/foto (22).png", "fotos/foto (23).png", "fotos/foto (24).png", "fotos/foto (25).png", "fotos/foto (26).png", "fotos/foto (27).png", "fotos/foto (28).png", "fotos/foto (29).png", "fotos/foto (30).png", "fotos/foto (31).png", "fotos/foto (32).png", "fotos/foto (33).png", "fotos/foto (34).png", "fotos/foto (35).png", "fotos/foto (36).png", "fotos/foto (37).png", "fotos/foto (38).png", "fotos/foto (39).png", "fotos/foto (40).png"]
    let arrayLength = onderwerp.length;
