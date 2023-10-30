let baseURL = "http://localhost:8080/Back_End_war/";

generateRentID();
loadAllRent();

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
            generateRentID();
            loadAllRent();
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
    $("#image1>img").remove();
    $("#image2>img").remove();
    $("#image3>img").remove();
    $("#image4>img").remove();
    $.ajax({
        url: baseURL + "registerCar/searchCar/?regNumber=" + regNumber,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            let front;
            let back;
            let side;
            let interior;

            for (let i of res) {

                front=i.image.front_view;
                back=i.image.back_view;
                side=i.image.side_view;
                interior=i.image.interior_view;

                let brand = i.brand;
                let model = i.model;
                let noOfPassengers = i.noOfPassengers;

                $("#brand").val(brand);
                $("#model").val(model);
                $("#number_Of_Passengers").val(noOfPassengers);
             }
            $("#image1").append(`<img  src="${"../../../"+front}" class="d-block w-100" alt="">`);
            $("#image2").append(`<img  src="${"../../../"+back}" class="d-block w-100" alt="">`);
            $("#image3").append(`<img  src="${"../../../"+side}" class="d-block w-100" alt="">`);
            $("#image4").append(`<img  src="${"../../../"+interior}" class="d-block w-100" alt="">`);
            console.log(res);

        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    })
});

function generateRentID() {
    $("#rent_Id").val("R00-001");
    $.ajax({
        url: baseURL + "rentCar/rentIdGenerate",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            let id = res.value;
            console.log(id);
            let tempId = parseInt(id.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#rent_Id").val("R00-00" + tempId);
            } else if (tempId <= 99) {
                $("#rent_Id").val("R00-0" + tempId);
            } else {
                $("#rent_Id").val("R00-" + tempId);
            }
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}


function loadAllRent() {
    $.ajax({
        url: baseURL + "rentCar",
        method: "get",
        contentType: "application/json",
        dataType: "json",
        async: true,
        success: function (res) {
            console.log(res.data)
            for (var i of res.data) {
                if (user === i.user_Id.user_Id) {
                    let row = "<tr><td>" + i.rent_Id + "</td><td>" + i.user_Id.user_Id + "</td><td>" + i.rentDetails.at().regNumber + "</td><td>" + i.pickUpDate + "</td><td>" + i.pickUpTime + "</td><td>" + i.returnDate + "</td><td>" + i.returnTime + "</td><td>" + i.location + "</td><td>" + i.rentStatus + "</td></tr>";
                    $("#tblBookingResponse").append(row);
                }
            }
            bindTrEvents();
        }
    });
}

function bindTrEvents() {
    $("#tblBookingResponse>tr").on("click", function () {
        let rent_Id = $(this).children().eq(0).text();
        $("#rent_search_Id").val(rent_Id);
    });
}