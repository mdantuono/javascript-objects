var carRental = {
    name: 'Catch-A-Ride',
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


///Loop creating options and html 
for (var i = 0; i < carRental.carType.length; i++) {
    console.log(i);
    var options = document.createElement("OPTION");
    var select = document.getElementById('selection');
    options.setAttribute("value", i);
    options.setAttribute("id", "car" + i);
    options.text = carRental.carType[i].name;
    
    select.appendChild(options);
}

///To show price and amount data
document.getElementById('selection').onchange = function() {
    var select = document.getElementById('selection');
    console.log(select.value);
    document.getElementById('price').innerHTML = "Price: $" + carRental.carType[select.value].price;
    document.getElementById('avail').innerHTML = "Available: " + carRental.carType[select.value].amount;
};

////To show decrease in amount and store renter name
function rentCar() {
    var elem = document.getElementById('selection').value;
    
    if (carRental.carType[elem].amount == 0) {
        alert("No cars available!");
        event.preventDefault();
        return false;
    }
    else {
        //Decrement car selected
        carRental.carType[elem].amount--;
        console.log(carRental.carType[elem].amount);
        //Re-display cars available
        document.getElementById('avail').innerHTML = "Available: " + carRental.carType[elem].amount;
        //Create arrays and store the name of renter and car type in an array
        var name = [];
        var car = [];
        name.push(document.getElementById('renterName').value);
        car.push(carRental.carType[elem].name);
        //Console log my arrays
        console.log(name);
        console.log(car);
        //Reserved message
        alert("Reservation booked! Enjoy your ride.");
        event.preventDefault();
    }
}