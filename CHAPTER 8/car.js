var dreamCar = {
    make: "BMW",
    model: "M4",
    color: "Red",
    year: 2025,
    bodyStyle: "Performance Car",
    price: 2000000,
    borderRadius: "15%"
};

alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").style.borderRadius = dreamCar.borderRadius;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;