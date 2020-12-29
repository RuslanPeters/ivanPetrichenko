

const unit = {
    health: 100,
    power: 120,
    equipment: {
        shield: 40,
        weapon: 60,
    }

};


for (let key in unit) {
    
    if (typeof(unit[key]) === "object") {
        for (let value in unit[key]) {
            console.log(`Value of ${value} is: ${unit[key][value]}`);
        }
    } else {
        console.log(`Value of ${key} is: ${unit[key]}`);

    }
}
    

