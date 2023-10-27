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