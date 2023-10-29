let baseURL = "http://localhost:8080/Back_End_war/";

loadDriverDetails();
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
            loadDriverDetails();
        },
        error: function (error) {
            alert(error.responseJSON.message);
            loadDriverDetails();
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
            clearInputFields();
        }, error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});


function loadDriverDetails() {
    let driver;

    $.ajax({
        url: baseURL + "login/current",
        method: "get",
        success: function (res) {
            driver = res.data.user_Id;
            console.log(res.data)
            $("#user_Id").val(res.data.user_Id);
        }
    });

    $.ajax({
        url: baseURL + "registerDriver",
        method: "get",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            for (var d of res.data) {
                if (driver === d.user_Id) {
                    $("#user_Id").val(d.user_Id);
                    $("#firstName").val(d.firstName);
                    $("#lastName").val(d.lastName);
                    $("#contact_No").val(d.contact_No);
                    $("#address").val(d.address);
                    $("#email").val(d.email);
                    $("#nic").val(d.nic);
                    $("#license_No").val(d.license_No);
                    $("#user_Name").val(d.user.user_Name);
                    $("#password").val(d.user.password);
                }
            }
        }
    });

}

function clearInputFields() {
    $("#user_Id,#firstName,#lastName,#contact_No,#address,#email,#nic,#license_No,#user_Name,#password").val("");
    $("#user_Id").focus();
}


