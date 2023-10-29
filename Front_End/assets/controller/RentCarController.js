let baseURL = "http://localhost:8080/Back_End_war/";

let user;

$.ajax({
    url: baseURL + "login/current",
    method: "get",
    success: function (res) {
        user = res.data.user_Id;
        console.log(res.data)
        $("#user_Id").val(res.data.user_Id);
    }
});


$("#btnAddCart").on("click", function () {
    let regNumber = $("#regNumber").val();
    let pickUpDate = $("#pickUpDate").val();
    let pickUpTime = $("#pickUpTime").val();
    let returnDate = $("#returnDate").val();
    let returnTime = $("#returnTime").val();
    let requestType = $("#requestType").val();
    let location = $("#location").val();

    $("#rentCarTable").append(`<tr><td>${regNumber}</td><td>${pickUpDate}</td><td>${pickUpTime}</td><td>${returnDate}</td><td>${returnTime}</td><td>${requestType}</td><td>${location}</td></tr>`);

});

$("#btnReservation").click(function () {
    let rent_Id = $("#rent_Id").val();
    let pickUpDate = $("#pickUpDate").val();
    let pickUpTime = $("#pickUpTime").val();
    let returnDate = $("#returnDate").val();
    let returnTime = $("#returnTime").val();
    let requestType = $("#requestType").val();
    let location = $("#location").val();
    let user_Id=$("#user_Id").val();
    let rentDetails=getRentDetails();

    var carRent = {
        rent_Id: rent_Id,
        pickUpDate: pickUpDate,
        pickUpTime: pickUpTime,
        returnDate: returnDate,
        returnTime: returnTime,
        requestType: requestType,
        location: location,
        user_Id:{user_Id:user_Id},
        rentDetails:rentDetails
    }


    $.ajax({
        url: baseURL + "rentCar",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(carRent),
        success: function (res) {
            alert(res.message)
            clearInputFields();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    })
});

function getRentDetails() {
    let rows = $("#rentCarTable").children().length;
    var array = [];
    for (let i = 0; i < rows; i++) {
        let regNumber = $("#rentCarTable").children().eq(i).children(":eq(0)").text();
        let rent_Id = $("#rent_Id").val();
        let driverID = $("#driverId").val();

        array.push({regNumber: regNumber,rent_Id:rent_Id,driverID:driverID});
    }
    return array;
}

$.ajax({
    url: baseURL + 'registerCar',
    method: "get",
    dataType: "json",
    success: function (response) {
        let cars = response.data;
        for (let i in cars) {
            let car = cars[i];
            let regNumber = car.regNumber;

            $("#regNumber").append(`<option>${regNumber}</option>`);
        }
    },
    error: function (error) {
        alert(error.responseJSON.message);
    }
});

$.ajax({
    url: baseURL + 'registerDriver/loadAvailableDrivers',
    method: "get",
    dataType: "json",
    success: function (response) {
        let drivers = response.data;
        for (let i in drivers) {
            let driver = drivers[i];
            let driverID = driver.user_Id;

            $("#driverId").append(`<option>${driverID}</option>`);
        }
    },
    error: function (error) {
        alert(error.responseJSON.message);
    }
});

function searchCar(regNumber) {
    let response = "";
    $.ajax({
        url: baseURL + 'registerCar',
        method: "get",
        dataType: "json",
        async: false,
        success: function (resp) {
            response = resp.data.filter((c) => {
                return c.regNumber == regNumber;
            });
        }
    });
    return response;
}

$("#regNumber").change(function () {
    let regNumber = $("#regNumber").val();
    let res = searchCar(regNumber);
    if (res.length > 0) {
        $("#brand").val(res[0].brand);
        $("#model").val(res[0].model);
        $("#number_Of_Passengers").val(res[0].noOfPassengers);
        $("#fuel_Type").val(res[0].fuel_type);
        $("#type").val(res[0].type);
    }
});

function clearInputFields() {
    $("#pickUpDate,#pickUpTime,#returnDate,#returnTime,#requestType,#location,#nic,#brand,#model,#number_Of_Passengers,#fuel_Type,#type").val("");
}
