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
    let rentStatus = "PAYMENT_PENDING";
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
        rentStatus:rentStatus,
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

/*$.ajax({
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
});*/

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

/*function searchCar(regNumber) {
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
    }
});*/

function clearInputFields() {
    $("#pickUpDate,#pickUpTime,#returnDate,#returnTime,#requestType,#location,#nic,#brand,#model,#number_Of_Passengers,#fuel_Type,#type").val("");
}

$("#fuel_Type").click(function () {
    let type = $("#type").val();
    let fuel_Type = $("#fuel_Type").val();
    console.log(type);
    console.log(fuel_Type);
    $("#regNumber").empty();
    $.ajax({
        url: baseURL + "registerCar/filterCars/?type=" + type + "&fuel_type=" + fuel_Type,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log(res);

            for (let i of res) {
                let regNumber = i.regNumber;
                $("#regNumber").append(`<option>${regNumber}</option>`);
            }
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    })
});

$("#regNumber").click(function () {
    var regNumber = $("#regNumber").val();
    $.ajax({
        url: baseURL + "registerCar/?id=" + regNumber,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log(res);
            let brand = res.data.brand;
            let model = res.data.model;
            let noOfPassengers = res.data.noOfPassengers;

            $("#brand").val(brand);
            $("#model").val(model);
            $("#number_Of_Passengers").val(noOfPassengers);

            // let img =res.data.front_view;

            /*let url1 = res.data.front_view;
            let url2 = res.back_view;
            let url3 = res.side_view;
            let url4 = res.interior_view;*/

            $("#imageCar").css({
                "background": `url(${baseURL +"/uploads/2.png"})`, "background-size": "cover","background-position":"center"
            });
            /*$("#image2").css({
                "background": `url(${baseURL + url2})`, "background-size": "cover"
            });
            $("#image3").css({
                "background": `url(${baseURL + url3})`, "background-size": "cover"
            });
            $("#image4").css({
                "background": `url(${baseURL + url4})`, "background-size": "cover"
            });*/
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    })
});