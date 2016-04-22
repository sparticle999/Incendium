var money = 0;
var fire = 0;
var firePrice = 0.5;

function buyShop() {
    var loanChoice = prompt("Oh! It Does Not Look Like You Have Any Money! Here, I'll give you a loan! Is 1000 okay, or would you like 50000?");
    if(loanChoice === "1000"){
        var loanChoice2 = prompt("Great! And When Would You Like To Pay Off The Loan? ASAP or Never?");
        if(loanChoice2 === "ASAP"){
            alert("OK Then! Let's Get Started!");
            document.getElementById("buyShop").className += " hidden";
            document.getElementById("background").className = "whiteBackground";
            document.getElementById("getFire").className = "";
            document.getElementById("money").className = "";
            document.getElementById("fireAspect").className = "";
            document.getElementById("sellFire").className = "";
            return;
        }
        if(loanChoice2 === "Never"){
            alert("ERROR! You Must Upgrade Your Decision Making Skills Before You Can Do This!");
            return;
        }
        else{
            alert("That Was Not An Option! Please Try Again!");
            return;
        }
    }
    if(loanChoice === "50000"){
        alert("ERROR! You Must Upgrade Your Decision Making Skills Before You Can Do This!");
    }
    else{
        alert("That Was Not An Option! Please Try Again!");
    }
}

function getFire(number){
    fire += number;
    document.getElementById("fireAspectNum").innerHTML = fire;
}

function sellFire(){
    money += fire * firePrice;
    fire = 0
    document.getElementById("fireAspectNum").innerHTML = fire;
    document.getElementById("moneyNum").innerHTML = money;
}
    
