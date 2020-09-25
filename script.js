playGame=(playerChoice)=>{
    let playerId=playerChoice.id;
    let botId=botImage(botChoice());
    let winner=result(playerId,botId);
    frontEnd(playerId,botId,winner);
    console.log(playerId);
    console.log(botId);
    console.log(winner);
}

botChoice=()=>{
    let choice=Math.floor(Math.random()*3);
    return choice;
    console.log(choice);
}

botImage=(imageId)=>{
    let imgArr=["rock","paper", "scissor"];
    let botImage=imgArr[imageId];
    return botImage;
}

result=(playerChoice,botChoice)=>{
    let winner;
    switch(playerChoice){
        case "rock":
            if(botChoice==="scissor"){
                winner="player";
            }
            else if(botChoice==="rock"){
                winner="none";
            }
            else{
                winner="bot"
            }
            break;
        case "paper":
            if(botChoice==="rock"){
                winner="player";
            }
            else if(botChoice==="paper"){
                winner="none";
            }
            else{
                winner="bot"
            }
            break;
        case "scissor":
            if(botChoice==="paper"){
                winner="player";
            }
            else if(botChoice==="scissor"){
                winner="none";
            }
            else{
                winner="bot"
            }
            break;
    }

    return winner;
}

frontEnd=(player,bot,winner)=>{
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();
    //let rock=document.getElementById("rock");
    //let p=document.getElementById("paper").id;
    //let paper=document.getElementById("paper").id;
    let playerImage=document.createElement("img");
    let botImage=document.createElement("img");
    playerImage.setAttribute("id","player");
    botImage.setAttribute("id","bot");
    playerImage.setAttribute("height","150px");
    playerImage.setAttribute("weight","150px");
    botImage.setAttribute("height","150px");
    botImage.setAttribute("weight","150px");
    //document.getElementById("player").style.boxShadow = "0 0 30px 0 green";
    //document.getElementById("bot").style.boxShadow = "0 0 30px 0 red";  

    let massage=textResult(winner);
    let blah=massage.msg;
    console.log(blah);
     let abc =blah.fontcolor(massage.clr);
    //console.log(massage);
   // document.getElementById("resultMassage").fontcolor(massage.clr);
    console.log(massage.clr);
    switch(player){
        case "rock":
            if(bot==="rock"){
                playerImage.setAttribute("src","./assets/rock.jpg");
                botImage.setAttribute("src","./assets/rock.jpg");
            }
            else if(bot==="paper"){
                playerImage.setAttribute("src","./assets/rock.jpg");
                botImage.setAttribute("src","./assets/paper.jfif");
            }
            else{
                playerImage.setAttribute("src","./assets/rock.jpg");
                botImage.setAttribute("src","./assets/scissor.jfif");
            }
            break;
        case "paper":
            if(bot==="rock"){
                playerImage.setAttribute("src","./assets/paper.jfif");
                botImage.setAttribute("src","./assets/rock.jpg");
            }
            else if(bot==="paper"){
                playerImage.setAttribute("src","./assets/paper.jfif");
                botImage.setAttribute("src","./assets/paper.jfif");
            }
            else{
                playerImage.setAttribute("src","./assets/paper.jfif");
                botImage.setAttribute("src","./assets/scissor.jfif");
            }
            break;
        case "scissor":
            if(bot==="rock"){
                playerImage.setAttribute("src","./assets/scissor.jfif");
                botImage.setAttribute("src","./assets/rock.jpg");
            }
            else if(bot==="paper"){
                playerImage.setAttribute("src","./assets/scissor.jfif");
                botImage.setAttribute("src","./assets/paper.jfif");
            }
            else{
                playerImage.setAttribute("src","./assets/scissor.jfif");
                botImage.setAttribute("src","./assets/scissor.jfif");
            }
            break;
    }
    
    document.getElementById("result").appendChild(playerImage);
    document.getElementById("resultMassage").innerText=massage.msg;
    document.getElementById("resultMassage").innerHTML=abc;
    document.getElementById("result").appendChild(botImage);


}

textResult=(winner)=>{
    let text="";
    let color=""
    if(winner==="player"){
        text="You Won";
        color="green";
    }
    else if(winner==="bot"){
        text="You lost"
        color="red";
    }
    else{
        text="You tied"
        color="yellow";
    }

    return{"msg":text,"clr":color};
}