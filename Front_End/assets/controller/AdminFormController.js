let baseUrl = "http://localhost:8080/Back_End_war/";


$("#carCount").val("0");
$.ajax({
    url: baseUrl + "registerCar/sumOfCarsCount",
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (res) {
        let num = res.count;
        $("#carCount").text(num);
    },
    error: function (error) {
        alert(error.responseJSON.message);
    }
});

$("#availableCarCount").val("0");
$.ajax({
    url: baseUrl + "registerCar/sumOfAvailableCarsCount",
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (res) {
        let num = res.count;
        $("#availableCarCount").text(num);
    },
    error: function (error) {
        alert(error.responseJSON.message);
    }
});

$("#reservedCarCount").val("0");
$.ajax({
    url: baseUrl + "registerCar/sumOfUnAvailableCarsCount",
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (res) {
        let num = res.count;
        $("#reservedCarCount").text(num);
    },
    error: function (error) {
        alert(error.responseJSON.message);
    }
});

$("#driverCount").val("0");
$.ajax({
    url: baseUrl + "registerDriver/sumOfDriversCount",
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (res) {
        let num = res.count;
        $("#driverCount").text(num);
    },
    error: function (error) {
        alert(error.responseJSON.message);
    }
});

$("#availableDriverCount").val("0");
$.ajax({
    url: baseUrl + "registerDriver/sumOfAvailableDriversCount",
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (res) {
        let num = res.count;
        $("#availableDriverCount").text(num);
    },
    error: function (error) {
        alert(error.responseJSON.message);
    }
});



