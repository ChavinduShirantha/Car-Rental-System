let baseURL = "http://localhost:8080/Back_End_war/";


$("#btnSaveDriver").click(function () {
    let driverFormData = new FormData($("#driverForm")[0]);
    $.ajax({
        url: baseURL + "registerDriver",
        method: "post",
        data: driverFormData,
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