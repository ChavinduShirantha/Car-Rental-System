let baseURL = "http://localhost:8080/Back_End_war/";

$("#btnSaveCustomer").click(function () {
    let customerFormData = new FormData($("#customerForm")[0]);
    $.ajax({
        url: baseURL + "registerUser",
        method: "post",
        data: customerFormData,
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