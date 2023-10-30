let baseURL = "http://localhost:8080/Back_End_war/";

$("#btnRegisterAdmin").click(function () {
    let adminFormData = new FormData($("#registerForm")[0]);
    $.ajax({
        url: baseURL + "registerAdmin",
        method: "post",
        data: adminFormData,
        contentType: false,
        processData: false,
        success: function (res) {
            alert(res.message)
            clearInputFields();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});


function clearInputFields() {
    $("#user_Id,#firstName,#lastName,#contact_No,#address,#email,#nic,#license_No,#user_Name,#password").val("");
    $("#user_Id").focus();
}
