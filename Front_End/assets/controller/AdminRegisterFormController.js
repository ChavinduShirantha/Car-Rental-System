let baseURL = "http://localhost:8080/Back_End_war/";

generateAdminID();

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
            generateAdminID();
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

function generateAdminID() {
    $("#user_Id").val("A00-001");
    $.ajax({
        url: baseURL + "registerAdmin/adminIdGenerate",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            let id = res.value;
            console.log(id);
            let tempId = parseInt(id.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#user_Id").val("A00-00" + tempId);
            } else if (tempId <= 99) {
                $("#user_Id").val("A00-0" + tempId);
            } else {
                $("#user_Id").val("A00-" + tempId);
            }
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}