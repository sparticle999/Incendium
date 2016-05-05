//Creates Variable List For Future Use.
var money = 0;
var fire = 0; var firePrice = 0.5;
var decisionLevel = 0; var decisionCost = 10;
var upgradeFirePriceCost = 20; var firePerClick = 1; var upgradeFirePerClickCost = 100;
var colour = "false"; var bootstrap = "false";
var fps = 0;
var wizard = 0; var wizardCost = 500; var wizardGain = 1;
var unlockAcolyte = "false"; var acolyte = 0; var acolyteCost = 5000; var acolyteGain = 10;
var unlockMage = "false"; var mage = 0; var mageCost = 50000; var mageGain = 100;

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
    fire = 0;
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
            document.getElementById("wizardNumBox").className = "";
        }
        if(decisionLevel === 3){
            alert("These wizards are so slow! Why don't we hire our own acolytes!");
            decisionCost = 100000;
            unlockAcolyte = "true";
            if(colour === "true"){
                document.getElementById("hireAcolyte").className = "blueBackground";
                document.getElementById("acolyteNumBox").className = "blueBackground";
            }
            if(colour === "false"){
                if(bootstrap === "false"){
                    document.getElementById("hireAcolyte").className = "";
                    document.getElementById("acolyteNumBox").className = "";
                }
                if(bootstrap === "true"){
                    document.getElementById("hireAcolyte").className = "btn-primary bold round"
                    document.getElementById("acolyteNumBox").className = "btn-primary bold round";
                }
            }
        }
        if(decisionLevel === 4){
            alert("I think I can trust leaving passive generation to your own hands, why don't we do something new?");
            decisionCost = 1000000;
            //Unlocks Mages
            unlockMage = "true";
            if(colour === "true"){
                document.getElementById("hireMage").className = "";
                document.getElementById("mageNumBox").className = "";
            }
            if(colour === "false"){
                if(bootstrap === "true"){
                    document.getElementById("hireMage").className = "btn-primary bold round";
                    document.getElementById("mageNumBox").className = "btn-primary bold round";
                }
                if(bootstrap === "false"){
                    document.getElementById("hireMage").className = "";
                    document.getElementById("mageNumBox").className = "";
                }
            }
            //Unlocks Mana
            
            
            
            
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
        document.getElementById("upgradeButtonAPI").className = "hidden";
    }
}

//Adds Bootstrap formatting to the buttons.
function upgradeButtonAPI2(){
    if(money >= 1000){
        money -= 1000;
        bootstrap = "true";
        colour = "false";
        addBootstrap();
        refreshMoney();
        document.getElementById("upgradeButtonAPI2").className = "hidden";
    }
}

//Makes the buttons specific colours.
function addColour(){
    document.getElementById("getFire").className = "redBackground";
    document.getElementById("sellFire").className = "redBackground";
    document.getElementById("money").className = "greenColour";
    document.getElementById("decisionUpgrade").className = "blueBackground";
    document.getElementById("upgradeFirePrice").className = "blueBackground";
    document.getElementById("upgradeFirePerClick").className = "blueBackground";
    document.getElementById("upgradeButtonAPI2").className = "yellowBackground";
    document.getElementById("hireWizard").className = "blueBackground";
    document.getElementById("wizardNumBox").className = "blueBackground";
    if(unlockAcolyte === "true"){
    document.getElementById("hireAcolyte").className = "blueBackground";
    document.getElementById("acolyteNumBox").className = "blueBackground";
    }
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
    //document.getElementById("").className = ;
}

function addBootstrap(){
    document.getElementById("getFire").className = "btn-danger bold round";
    document.getElementById("fireAspect").className = "label label-warning bold round";
    document.getElementById("sellFire").className = "btn-danger bold round";
    document.getElementById("money").className = "label label-success bold round";
    document.getElementById("decisionUpgrade").className = "btn-primary bold round";
    document.getElementById("upgradeFirePrice").className = "btn-primary bold round";
    document.getElementById("upgradeFirePerClick").className = "btn-primary bold round";
    document.getElementById("hireWizard").className = "btn-primary bold round";
    document.getElementById("wizardNumBox").className = "label label-info bold round";
    if(unlockAcolyte === "true"){
        document.getElementById("hireAcolyte").className = "btn-primary bold round"
        document.getElementById("acolyteNumBox").className = "label label-info bold round";
    }
    if(unlockMage === "true"){
        document.getElementById("hireMage").className = "btn-primary bold round";
        document.getElementById("mageNumBox").className = "label label-info bold round";
    }
}

function calculateFps(){
    fps += wizardGain * wizard;
    fps += acolyteGain * acolyte;
    fps += mageGain * mage;
}

//Deducts cost from money, then adds 1 to wizard count.
function hireWizard(){
    if(money >= wizardCost){
        money -= wizardCost;
        wizard += 1;
        //Calculates Cost based on power system
        wizardCost = Math.floor(500 * Math.pow(1.1,wizard));
        refreshMoney();
        document.getElementById("wizardNum").innerHTML = wizard;
    }
    //Calculates next cost to display on the screen.
    var nextWizardCost = Math.floor(500 * Math.pow(1.1,wizard));
    document.getElementById("wizardCost").innerHTML = nextWizardCost;
}

//See hireWizard() (above).
function hireAcolyte(){
    if(money >= acolyteCost){
        money -= acolyteCost;
        acolyte += 1;
        acolyteCost = Math.floor(5000 * Math.pow(1.1,acolyte));
        refreshMoney();
        document.getElementById("acolyteNum").innerHTML = acolyte;
    }
    var nextAcolyteCost = Math.floor(5000 * Math.pow(1.1,acolyte));
    document.getElementById("acolyteCost").innerHTML = nextAcolyteCost;
}

function hireMage(){
    if(money >= mageCost){
        money -= mageCost;
        mage += 1;
        mageCost = Math.floor(5000 * Math.pow(1.1,acolyte));
        refreshMoney();
        document.getElementById("MageNum").innerHTML = mage;
    }
    var nextMageCost = Math.floor(5000 * Math.pow(1.1,mage));
    document.getElementById("mageCost").innerHTML = nextMageCost;
}

//Runs every second
window.setInterval(function(){
    //Adds fire per second based on passive gen.
    //This can be simplified - on To Do list.
    //fire += fps;
    fire += fps;
    document.getElementById("fireAspectNum").innerHTML = fire;
}, 1000);
