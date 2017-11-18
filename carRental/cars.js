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


    //To show price and amount data

function details() {
    var elem = document.getElementById('selection').value;
    if(elem == "economy") {
        document.getElementById('price').innerHTML = "Price: $" + carRental.carType[0].price;
        document.getElementById('avail').innerHTML = "Available: " + carRental.carType[0].amount;
    }
    else if (elem == "midsize") {
        document.getElementById('price').innerHTML = "Price: $" + carRental.carType[1].price;
        document.getElementById('avail').innerHTML = "Available: " + carRental.carType[1].amount;
    }
    else if (elem == "luxury") {
        document.getElementById('price').innerHTML = "Price: $" + carRental.carType[2].price;
        document.getElementById('avail').innerHTML = "Available: " + carRental.carType[2].amount;
    }
}

    // //To show decrease in amount
function rentCar() {
    var elem = document.getElementById('selection').value;
    var numAvail = carRental.carType[0, 1, 2].amount;
    
    if (numAvail == 0) {
        alert("No cars available!");
        return false;
    }
    else if (elem == "economy") {
        carRental.carType[0].amount--;
        console.log(carRental.carType[0].amount);
        return details();
    }
    else if (elem == "midsize") {
        carRental.carType[1].amount--;
        console.log(carRental.carType[1].amount);
        return details();
    }
    else if (elem == "luxury") {
        carRental.carType[2].amount--;
        console.log(carRental.carType[2].amount);
        return details();
    }
}

//Reserved message
function reserved() {
    document.getElementById('end').innerHTML = "Reservation booked! Enjoy your ride.";
    event.preventDefault();
}
