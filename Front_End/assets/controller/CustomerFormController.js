let baseURL = "http://localhost:8080/Back_End_war/";

loadUserDetails();

/*$("#btnSaveCustomerForm").click(function () {
    let customerFormData = new FormData($("#customerFormDetails")[0]);
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
});*/

$("#btnUpdateCustomerForm").click(function () {
    let customerFormData = new FormData($("#customerFormDetails")[0]);
    $.ajax({
        url: baseURL + "registerUser/update",
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

$("#btnDeleteCustomerForm").click(function () {
    let userId = $("#user_Id").val();
    $.ajax({
        url: baseURL + "registerUser?id=" + userId,
        method: "delete",
        dataType: "json",
        success: function (res) {
            alert(res.message)
            getUserDetails();
        }, error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

function loadUserDetails() {
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

    $.ajax({
        url: baseURL + "registerUser",
        method: "get",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            for (var cus of res.data) {
                if (user === cus.user_Id) {
                    $("#user_Id").val(cus.user_Id);
                    $("#firstName").val(cus.firstName);
                    $("#lastName").val(cus.lastName);
                    $("#contact_No").val(cus.contact_No);
                    $("#address").val(cus.address);
                    $("#email").val(cus.email);
                    $("#nic").val(cus.nic);
                    $("#license_No").val(cus.license_No);
                    $("#user_Name").val(cus.user.user_Name);
                    $("#password").val(cus.user.password);
                    /*let nicImg = cus.nic_Img;
                    let licenseImg = cus.license_Img;
                    $("#NICImage").css({
                        "background": `url(${baseURL+ nicImg})`, "background-size": "cover"
                    });
                    $("#LicenseImage").css({
                        "background": `url(${baseURL +licenseImg})`, "background-size": "cover"
                    });*/
                }
            }
        }
    });

}

