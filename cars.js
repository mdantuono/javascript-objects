var cars = {
    name: 'Enterprise Rental Cars',
    type1: 'Economy',
    // economyTotal: 100,
    // economyRented: function() {
    //     return this.economyTotal - this.economyAvail();
    // },
    economyAvail: 100,
    economyRented: 0,
    economyLeft: function() {
        return this.economyAvail - this.economyRented;
    },
    
    type2: 'Midsize',
    // midsizeTotal: 100,
    // midsizeRented: function() {
    //     return this.midsizeTotal - this.midsizeAvail();
    // },
    midsizeAvail: 100,
    midsizeRented: 0,
    midsizeLeft: function() {
        return this.midsizeAvail - this.midsizeRented;
    },
};

function cardata() {
    document.getElementById('business').innerHTML = cars.name;
    document.getElementById('type1').innerHTML = cars.type1;
    document.getElementById('type2').innerHTML = cars.type2;
    document.getElementById('economy').innerHTML = cars.economyLeft();
    document.getElementById('midsize').innerHTML = cars.midsizeLeft();
  }
// function rentEcon() {
//     document.getElementById('economy').innerHTML = cars.economyAvail--;
// }
// function rentMidsize() {
//     document.getElementById('midsize').innerHTML = cars.midsizeAvail--;
// }

function rentEcon() {
    cars.economyRented++;
    return cardata();
}
function rentMidsize() {
    cars.midsizeRented++;
    return cardata();
}
function destroy() {
    document.getElementById('everything').innerHTML = "Goodbye."
}