let baseURL = "http://localhost:8080/Back_End_war/";


$("#btnUpdateDriverForm").click(function () {
    let driverFormData = new FormData($("#driverFormDetails")[0]);
    $.ajax({
        url: baseURL + "registerDriver/update",
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

$("#btnDeleteDriverForm").click(function () {
    let userId = $("#user_Id").val();
    $.ajax({
        url: baseURL + "registerDriver?id=" + userId,
        method: "delete",
        dataType: "json",
        success: function (res) {
            alert(res.message)
        }, error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});
