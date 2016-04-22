var money = 0;
var fire = 0;
var firePrice = 0.5;
var decisionLevel = 0;
var decisionCost = 10;
var upgradeFirePriceCost = 20;
var firePerClick = 1;

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
    if(fire > 10){
    document.getElementById("decisionUpgrade").className = "";
}
}

function sellFire(){
    money += fire * firePrice;
    fire = 0
    document.getElementById("fireAspectNum").innerHTML = fire;
    document.getElementById("moneyNum").innerHTML = money;
}

function decisionUpgrade(){
    if(money > decisionCost){
        money -= decisionCost;
        if(decisionLevel === 0){
            alert("0.5 sounds like far too little for a mighty fire aspect! Why don't we upgrade the price!");
            decisionCost = 100;
            document.getElementById("upgradeFirePrice").className = "";
        }
        if(decisionLevel === 1){
            decisionCost = 1000;
        }
        decisionLevel += 1;
        document.getElementById("moneyNum").innerHTML = money;
        document.getElementById("decisionCost").innerHTML = decisionCost;
    }
}

function upgradeFirePrice(){
    if(money > upgradeFirePriceCost){
        money -= upgradeFirePriceCost;
        upgradeFirePriceCost *= 2;
        firePerClick *= 2;
        document.getElementById("money").innerHTML = money;
        document.getElementById("upgradeFirePriceCost").innerHTML = upgradeFirePriceCost;
        document.getElementById("firePerClick").innerHTML = firePerClick;
    }
}
