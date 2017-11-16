var carRental = {
    name: 'Rent-A-Car',
    carType: [
        {
            name: "Economy",
            price: 50,
            amount: 10,
        },
        {
            name: "Midsize",
            price: 80,
            amount: 10,
        },
        {
            name: "Luxury",
            price: 120,
            amount: 10,
        }
    ],
};

document.ready(function() {
    function display() {
        var selection = carRental.carType[val];
        document.getElementById('details').innerHTML = selection
    }
    function rentEconomy() {
        carRental.carType[0].amount--;
        console.log(carRental.carType[0].amount);
    }
    function rentMidsize() {
        carRental.carType[1].amount--;
        console.log(carRental.carType[1].amount);
    }
    function RentLuxury() {
        carRental.carType[2].amount--;
        console.log(carRental.carType[2].amount);
    }
    
    function reserved() {
        document.getElementById('pagecontent').innerHTML = "<h2>Reservation booked! Enjoy your ride.</h2>";
    }
})