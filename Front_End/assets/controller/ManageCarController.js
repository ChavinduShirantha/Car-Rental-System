let baseURL = "http://localhost:8080/Back_End_war/";


$("#btnSaveCar").click(function () {
    let carFormData = new FormData($("#carForm")[0]);
    $.ajax({
        url: baseURL + "registerCar",
        method: "post",
        data: carFormData,
        contentType: false,
        processData: false,
        success: function (res) {
            alert(res.message)
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

$("#btnGetAllCar").click(function () {
    getAllCars();
});

function getAllCars() {
    $("#carTable").empty();

    $.ajax({
        url: baseURL + 'registerCar',
        method: "get",
        dataType: "json",
        success: function (response) {
            let cars = response.data;
            for (let i in cars) {
                let car = cars[i];
                let regNumber = car.regNumber;
                let brand = car.brand;
                let model = car.model;
                let type = car.type;
                let transmissionType = car.transmission_type;
                let fuelType = car.fuel_type;
                let noOfPassengers = car.noOfPassengers;
                let color = car.color;
                let dailyRate = car.daily_Rate;
                let monthlyRate = car.monthly_Rate;
                let priceExtraKM = car.priceExtraKM;
                let freeMileage = car.freeMileage;
                let availability = car.vehicleAvailabilityType;
                let row = `<tr><td>${regNumber}</td><td>${brand}</td><td>${model}</td><td>${type}</td><td>${transmissionType}</td><td>${fuelType}</td><td>${noOfPassengers}</td><td>${color}</td><td>${dailyRate}</td><td>${monthlyRate}</td><td>${priceExtraKM}</td><td>${freeMileage}</td><td>${availability}</td></tr>`;
                $("#carTable").append(row);
            }
            // bindTrEvents();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}