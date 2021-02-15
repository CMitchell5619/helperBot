let peopleToHelp = 7845000000
let peopleHelped = 0
let energy = 100
let metal = 100
let totalMultiplier = 1
let energyMultiplier = .00000000001
let metalMultiplier = .00000000001

let helpUpgrades = {
    
    autoUpgrades: {
        helperSubBots: {
            price: 100,
            quantity: 0,
            multipler: 0,
            energyUse: 20,
        },
        dangerBots: {
            price: 100,
            quantity: 0,
            multipler: 0,
            energyUse: 20,
        },
        minerBots: {
            price: 50,
            quantity: 0,
            multipler: 0,
            energyUse: 20,
        },
    },

    clickUpgrades: {
        helperBotSpeedServos: {
            price: 100,
            quantity: 0,
            multipler: 5,
            energyUse: 2,
        },
        helperBotDangerIdentifiers: {
            price: 100,
            quantity: 0,
            multipler: 1,
            energyUse: 2,
        },
    }
}

function purchaseSpeedServos() {
    if (metal>=helpUpgrades.clickUpgrades.helperBotSpeedServos.price) {
        ++helpUpgrades.clickUpgrades.helperBotSpeedServos.quantity
        metal -= 50
        totalMultiplier += helpUpgrades.clickUpgrades.helperBotSpeedServos.multipler
    }
    console.log(totalMultiplier)
    update()
}

function purchaseDangerDetected() {
    if (metal>=helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.price) {
        ++helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.quantity
        metal -= 10
        totalMultiplier += helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.multipler
    }
    console.log(totalMultiplier)
    update()
}

function purchaseMinerBots() {
    if (metal>=helpUpgrades.autoUpgrades.minerBots.price) {
        ++helpUpgrades.autoUpgrades.minerBots.quantity
        metal -= 50
        metalMultiplier += helpUpgrades.autoUpgrades.minerBots.multipler
        energyMultiplier -= helpUpgrades.autoUpgrades.minerBots.energyUse
    }
    console.log(totalMultiplier)
    runner()
    update()
}

function runner() {
    setInterval(function(){
         metal++; update() }, 1000);
  }
function myFunction() {
    setTimeout(function(){
         alert("Hello"); }, 3000);
  }

function helpPeople() {
    peopleToHelp -= totalMultiplier
    peopleHelped += totalMultiplier
    --energy
    update()
    helpCheck(peopleToHelp)

}

function update() {
    helpCheck(peopleToHelp)

    document.getElementById("peopleToHelpView").innerHTML = `${peopleToHelp}`;
    document.getElementById("peopleHelpedView").innerHTML = `${peopleHelped}`;
    document.getElementById("energyView").innerHTML = `${energy}`;
    document.getElementById("metalView").innerHTML = `${metal}`;
    document.getElementById("speedServosView").innerHTML = `${helpUpgrades.clickUpgrades.helperBotSpeedServos.quantity}`;
    document.getElementById("dangerDetectorsView").innerHTML = `${helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.quantity}`;
    document.getElementById("energyProducedView").innerHTML = `${helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.quantity}`;
    document.getElementById("energyUsedView").innerHTML = `${helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.quantity}`;
    document.getElementById("totalEnergyView").innerHTML = `${helpUpgrades.clickUpgrades.helperBotDangerIdentifiers.quantity}`;
    
}


function helpCheck(people) {
    if (people = 0) {
        
    } else {
        
    }
}

function energyCheck(energy) {
    if (energy = 0) {
        alert('You lose')
    } else {
        
    }
}

update()