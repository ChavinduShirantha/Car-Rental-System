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


