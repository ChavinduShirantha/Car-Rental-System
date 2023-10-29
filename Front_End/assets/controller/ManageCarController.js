let baseURL = "http://localhost:8080/Back_End_war/";

getAllCars();

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
            getAllCars();
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
            bindTrEvents();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}

function bindTrEvents() {
    $('#carTable>tr').click(function () {

        let regNumber = $(this).children().eq(0).text();
        let brand = $(this).children().eq(1).text();
        let model = $(this).children().eq(2).text();
        let type = $(this).children().eq(3).text();
        let transmissionType = $(this).children().eq(4).text();
        let fuelType = $(this).children().eq(5).text();
        let noOfPassengers = $(this).children().eq(6).text();
        let color = $(this).children().eq(7).text();
        let dailyRate = $(this).children().eq(8).text();
        let monthlyRate = $(this).children().eq(9).text();
        let priceExtraKM = $(this).children().eq(10).text();
        let freeMileage = $(this).children().eq(11).text();
        let availability = $(this).children().eq(12).text();

        $("#regNumber").val(regNumber);
        $("#brand").val(brand);
        $("#model").val(model);
        $("#type").val(type);
        $("#transmission_type").val(transmissionType);
        $("#fuel_type").val(fuelType);
        $("#noOfPassengers").val(noOfPassengers);
        $("#color").val(color);
        $("#daily_Rate").val(dailyRate);
        $("#monthly_Rate").val(monthlyRate);
        $("#priceExtraKM").val(priceExtraKM);
        $("#freeMileage").val(freeMileage);
        $("#vehicleAvailabilityType").val(availability);
    });

    $("#btnSaveCar").attr('disabled', true);
}

$("#btnSearchCar").click(function () {
    let car_Id = $("#car_search_Id").val();
    $("#carTable").empty();
    $.ajax({
        url: baseURL + "registerCar/?id=" + car_Id,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log(res.message);

            let regNumber = res.data.regNumber;
            let brand = res.data.brand;
            let model = res.data.model;
            let type = res.data.type;
            let transmissionType = res.data.transmission_type;
            let fuelType = res.data.fuel_type;
            let noOfPassengers = res.data.noOfPassengers;
            let color = res.data.color;
            let dailyRate = res.data.daily_Rate;
            let monthlyRate = res.data.monthly_Rate;
            let priceExtraKM = res.data.priceExtraKM;
            let freeMileage = res.data.freeMileage;
            let availability = res.data.vehicleAvailabilityType;

            let row = `<tr><td>${regNumber}</td><td>${brand}</td><td>${model}</td><td>${type}</td><td>${transmissionType}</td><td>${fuelType}</td><td>${noOfPassengers}</td><td>${color}</td><td>${dailyRate}</td><td>${monthlyRate}</td><td>${priceExtraKM}</td><td>${freeMileage}</td><td>${availability}</td></tr>`;
            $("#carTable").append(row);

            $("#regNumber").val(regNumber);
            $("#brand").val(brand);
            $("#model").val(model);
            $("#type").val(type);
            $("#transmission_type").val(transmissionType);
            $("#fuel_type").val(fuelType);
            $("#noOfPassengers").val(noOfPassengers);
            $("#color").val(color);
            $("#daily_Rate").val(dailyRate);
            $("#monthly_Rate").val(monthlyRate);
            $("#priceExtraKM").val(priceExtraKM);
            $("#freeMileage").val(freeMileage);
            $("#availability").val(availability);

        },
        error: function (error) {
            getAllCars();
            alert(error.responseJSON.message);
        }
    })
});

$("#btnUpdateCar").click(function () {
    let carFormData = new FormData($("#carForm")[0]);
    $.ajax({
        url: baseURL + "registerCar/update",
        method: "post",
        data: carFormData,
        contentType: false,
        processData: false,
        success: function (res) {
            alert(res.message)
            getAllCars();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

$("#btnDeleteCar").click(function () {
    let regNumber = $("#regNumber").val();
    $.ajax({
        url: baseURL + "registerCar?id=" + regNumber,
        method: "delete",
        dataType: "json",
        success: function (res) {
            alert(res.message)
            getAllCars();
        }, error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

