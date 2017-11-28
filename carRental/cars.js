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

////To show decrease in amount
function rentCar() {
    var elem = document.getElementById('selection').value;
    var carAvail = carRental.carType[elem].amount;
    
    if (carAvail == 0) {
        alert("No cars available!");
        return false;
    }
    else {
        carAvail--;
        console.log(carAvail);
    }
}

//Reserved message
function reserved() {
    event.preventDefault();
    alert("Reservation booked! Enjoy your ride.");
}