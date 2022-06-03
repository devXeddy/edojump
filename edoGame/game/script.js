
function ReturnHome(){
    location.replace ("../index.php");
}



/*

$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
   
    data = data.trim().split('\n').reduce(function(obj, pair) {
      pair = pair.split('=');
      return obj[pair[0]] = pair[1], obj;
    }, {});
    console.log(data);
  });


  */

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}


var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var MaxScore = 0;
let gamecheck = false;
block.style.animation = "none";

function jump(){
    if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
                },300);
}
 




/* 
function gameStatus(){

    if (gamecheck == false){
        gamecheck = true;
        document.getElementById("StartBtn").innerHTML = "Stop";

    }
    else{
        gamecheck = false;
        document.getElementById("StartBtn").innerHTML = "Start";
    }
}

        
if (gamecheck === true){


    */


    /*


    function gameStatus(){

        if (gamecheck == false){
            gamecheck = true;
            document.getElementById("StartBtn").innerHTML = "Stop";
    
        }
        else{
            gamecheck = false;
            block.style.animation = "none";
            document.getElementById("StartBtn").innerHTML = "Start";
        }
    
    if(gamecheck == true) {

        var checkDead = setInterval(function() {

            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);

            randNum = Math.floor(Math.random() * 10);


            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
            block.style.animation = "block 1s infinite linear";
    
            let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            if(blockLeft<42 && blockLeft>-3 && characterTop>=140){
                block.style.animation = "none";
                alert("Hai perso! punteggio: "+Math.floor(counter/100)); 
                counter=0;
                block.style.animation = "block 1s infinite linear";
                let d =  document.getElementById("StartBtn");
                d.removeEventListener('click',gameStatus) //to remove click event
            }else{
                counter++;
                if (counter/100>MaxScore){
                    MaxScore = counter/100;
                }
                document.getElementById("MaxScore").innerHTML = Math.floor(MaxScore);
                        
            }
            }, 10);
    }
    else{
        gamecheck = false;
        return;
        
      }
    }


    */


    function gameStatus(){

        if (gamecheck == false){
            gamecheck = true;
            block.style.display = "block";
            document.getElementById("StartBtn").innerHTML = "Stop";
    
        }
        else{
            gamecheck = false;
            block.style.display = "none";
            counter = 0;
            document.getElementById("StartBtn").innerHTML = "Start";
        }
    
    if(gamecheck == true) {

        var checkDead = setInterval(function() {

            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/200);

        




        /*

            if (counter <500){
                document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
                block.style.animation = "block 1s infinite linear";
            }else if(counter >499 && counter <5000){
                document.getElementById("scoreSpan").innerHTML = Math.floor(counter/110);
                block.style.animation = "block 0.9s infinite linear";
            }else if(counter >4900 && counter <10000){
                block.style.animation = "block 0.6s infinite linear";
            }else if(counter>9900){
                block.style.animation = "block 0.5s infinite linear";
            }

        */

            /*
            
    
            if (counter/100 <20){
                block.style.animation = "block 1s infinite linear";
            }else if(counter/100 >19 && counter <50){
                block.style.animation = "block 0.8s infinite linear";
            }else if(counter/100 >49 && counter <100){
                block.style.animation = "block 0.6s infinite linear";
            }else if(counter/100 >99){
                block.style.animation = "block 0.5s infinite linear";
            }

            */

            


            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/200);
            block.style.animation = "block 1s infinite linear";
    
            let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            if(blockLeft<42 && blockLeft>-3 && characterTop>=140){
                block.style.animation = "none";
                gamecheck = false;
                block.style.display = "none";
                document.getElementById("StartBtn").innerHTML = "Start";
                alert("Hai perso! punteggio: "+Math.floor(counter/200)); 
                counter=0;
                block.style.animation = "block 1s infinite linear";
            }else{

                if (gamecheck == true){
                    counter++;
                }
                
                if (counter/200>MaxScore){
                    MaxScore = counter/200;
                }
                document.getElementById("MaxScore").innerHTML = Math.floor(MaxScore);
                        
            }
            }, 10);
    }
    else{
        gamecheck = false;
        counter = 0;
        
        
      }
    } 
            


window.onkeypress = function(check){

    if (check.key == " " ||
        check.code == "Space" || 
        check.code == "space" || 
        check.code == "SPACE" || 
        check.keyCode == 32){

            if (gamecheck == false){
                document.getElementById("gameAlert").innerHTML = "Premi start per iniziare a giocare!";
                document.getElementById("gameAlert").style.padding = "1vh";
                document.getElementById("gameAlert").style.background = "rgb(209, 93, 93)";
                document.getElementById("gameAlert").style.borderRadius = "10px";

                setTimeout(function(){

                    document.getElementById("gameAlert").innerHTML = "";
                    document.getElementById("gameAlert").style.padding = "none";
                    document.getElementById("gameAlert").style.background = "none";
                    document.getElementById("gameAlert").style.borderRadius = "none";
                    
                }, 4000);

               

            }
            else{

                jump();
            }
            

        }

}