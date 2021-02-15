let peopleToHelp = 7845000000
let peopleHelped = 0
let energy = 100
let metal = 100
let totalMultiplier = 0
let energyMultiplier = 0
let clickHelp = 1

let helpUpgrades = {
    
    autoUpgrades: {
        tinyHelpers: {
            price: 1500,
            quantity: 0,
            multipler: 5,
            energyUse: 20,
        },
        dangerBots: {
            price: 100,
            quantity: 0,
            multipler: 0,
            energyUse: 20,
        },
        electroBots: {
            price: 25,
            quantity: 0,
            multipler: 1,
            energyUse: 1,
        },
    },

    clickUpgrades: {
        helperBotSpeedServos: {
            price: 100,
            quantity: 0,
            multipler: 1,
            energyUse: 2,
        },
        helperBotDangerIdentifiers: {
            price: 100,
            quantity: 0,
            multipler: 50,
            energyUse: 2,
        },
    }
}

function purchaseSpeedServos() {
    if (energy>=helpUpgrades.clickUpgrades.helperBotSpeedServos.price) {
        ++helpUpgrades.clickUpgrades.helperBotSpeedServos.quantity
        energy -= helpUpgrades.clickUpgrades.helperBotSpeedServos.price
        clickHelp += helpUpgrades.clickUpgrades.helperBotSpeedServos.multipler
        helpUpgrades.clickUpgrades.helperBotSpeedServos.price += 25
    }
    console.log(totalMultiplier)
    update()
}

function purchaseDangerDetected() {
    if (energy>=helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.price) {
        ++helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.quantity
        energy -= helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.price
        clickHelp += helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.multipler
        helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.price += 100
    }
    console.log(totalMultiplier)
    update()
}

function purchaseElectroBots() {
    if (energy>=helpUpgrades.autoUpgrades.electroBots.price) {
        ++helpUpgrades.autoUpgrades.electroBots.quantity
        energy -= helpUpgrades.autoUpgrades.electroBots.price

        energyMultiplier += helpUpgrades.autoUpgrades.electroBots.energyUse
    }
    update()
}

function purchaseTinyHelpers() {
    if (energy>=helpUpgrades.autoUpgrades.tinyHelpers.price) {
        ++helpUpgrades.autoUpgrades.tinyHelpers.quantity
        energy -= helpUpgrades.autoUpgrades.tinyHelpers.price
        totalMultiplier += helpUpgrades.autoUpgrades.tinyHelpers.multipler
        energyMultiplier += helpUpgrades.autoUpgrades.tinyHelpers.energyUse
    }
    update()
}

function runner() {
    setInterval(function(){
         energy += energyMultiplier;
         peopleToHelp -= totalMultiplier;
         peopleHelped += totalMultiplier;
         update();
         console.log(energyMultiplier);
         energyCheck();
        
        }, 1000);
  }
function myFunction() {
    setTimeout(function(){
         alert("Hello"); }, 3000);
  }

function helpPeople() {
    if (energy>0) {
        
    peopleToHelp -= clickHelp
    peopleHelped += clickHelp
    --energy
    update()
    helpCheck(peopleToHelp)
        
    } else {
        alert("Game Over")
    }

}

function update() {
    helpCheck(peopleToHelp)

    document.getElementById("peopleToHelpView").innerHTML = `${peopleToHelp}`;
    document.getElementById("peopleHelpedView").innerHTML = `${peopleHelped}`;
    document.getElementById("energyView").innerHTML = `${energy}`;
    document.getElementById("speedServosView").innerHTML = `${helpUpgrades.clickUpgrades.helperBotSpeedServos.quantity}`;
    document.getElementById("dangerDetectorsView").innerHTML = `${helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.quantity}`;
    document.getElementById("energyProducedView").innerHTML = `${energyMultiplier}`;
    document.getElementById("tinyBotsView").innerHTML = `${helpUpgrades.autoUpgrades.tinyHelpers.quantity}`;
    document.getElementById("helpedPerView").innerHTML = `${clickHelp}`;
    document.getElementById("servoPriceView").innerHTML = `Price: ${helpUpgrades.clickUpgrades.helperBotSpeedServos.price} Modifier: ${helpUpgrades.clickUpgrades.helperBotSpeedServos.multipler}`;
    document.getElementById("dangerDetectorPriceView").innerHTML = `Price: ${helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.price} Modifier: ${helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.multipler}`;
    
}


function helpCheck(people) {
    if (people <= 0) {
        
    } else {
        
    }
}

function energyCheck() {
    if (energy <= 0) {
        var energy = 0
        alert('You lose')
    } else {}
}

update()
runner()