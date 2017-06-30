//Creates Variable List For Future Use.
var money=0,fire=0,firePrice=0.5,decisionLevel=0,decisionCost=10,upgradeFirePriceCost=20,firePerClick=1,upgradeFirePerClickCost=100,colour="false",bootstrap="false";

// When Buy Shop button is pressed at start of the game, this triggers.
function buyShop() {
    var loanChoice = prompt("Oh! It Does Not Look Like You Have Any Money! Here, I'll give you a loan! Is 1000 okay, or would you like 50000?");
    //checks what the user said
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
            document.getElementById("decisionUpgrade").className = "";
            return;
        }
        if(loanChoice2 === "Never"){
            alert("ERROR! You Must Upgrade Your Decision Making Skills Before You Can Do This!");
            return;
        }
        //If user typed something not expected.
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

//Adds firePerClick to fire.
function getFire(){
    fire += firePerClick;
    document.getElementById("fireAspectNum").innerHTML = fire;
}

//Adds fire * firePrice to money, then takes away all fire.
function sellFire(){
    money += fire * firePrice;
    fire = 0
    document.getElementById("fireAspectNum").innerHTML = fire;
    refreshMoney();
}

//Refreshes the money onscreen.
function refreshMoney(){
    document.getElementById("moneyNum").innerHTML = money;
}

//Handles unlocking more content with a special output each time the user buys the upgrade.
function decisionUpgrade(){
    if(money >= decisionCost){
        money -= decisionCost;
        if(decisionLevel === 0){
            alert("0.5 Sounds Like Far Too Little Profit For A Mighty Fire Aspect! Why Don't We Upgrade The Price!");
            decisionCost = 100;
            document.getElementById("upgradeFirePrice").className = "";
        }
        if(decisionLevel === 1){
            alert("Hmm... I Think You Should Start To Improve Your Efficiency Of Getting Fire Aspects.");
            decisionCost = 1000;
            document.getElementById("upgradeFirePerClick").className = "";
        }
        if(decisionLevel === 2){
            alert("This all looks rather dull... Why don't we make things look nicer!");
            alert("Also, You must get tired of clicking... I'm sure you can think of someone to outsource it to.");
            decisionCost = 10000;
            document.getElementById("upgradeButtonAPI").className = "";
            document.getElementById("hireWizard").className = "";
        }
        decisionLevel += 1;
        refreshMoney();
        document.getElementById("decisionCost").innerHTML = decisionCost;
    }
}

//Doubles the sell value of each fire.
function upgradeFirePrice(){
    if(money >= upgradeFirePriceCost){
        money -= upgradeFirePriceCost;
        upgradeFirePriceCost *= 2;
        firePrice *= 2;
        refreshMoney();
        document.getElementById("upgradeFirePriceCost").innerHTML = upgradeFirePriceCost;
        document.getElementById("firePrice").innerHTML = firePrice;
    }
}

//Doubles the number of fire you get per click.
function upgradeFirePerClick(){
    if(money >= upgradeFirePerClickCost){
        money -= upgradeFirePerClickCost;
        upgradeFirePerClickCost *= 2;
        firePerClick *= 2;
        refreshMoney();
        document.getElementById("upgradeFirePerClickCost").innerHTML = upgradeFirePerClickCost;
        document.getElementById("firePerClick").innerHTML = firePerClick;
    }
}

//Gives colour to the buttons.
function upgradeButtonAPI(){
    if(money >= 200){
        money -= 200;
        colour = "true";
        addColour();
        refreshMoney();
    }
}

function addColour(){
    document.getElementById("getFire").className = "redBackground";
    document.getElementById("sellFire").className = "redBackground";
    document.getElementById("money").className = "greenColour";
    document.getElementById("decisionUpgrade").className = "blueBackground";
    document.getElementById("upgradeFirePrice").className = "blueBackground";
    document.getElementById("upgradeFirePerClick").className = "blueBackground";
    document.getElementById("upgradeButtonAPI2").className = "yellowBackground";
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
}
