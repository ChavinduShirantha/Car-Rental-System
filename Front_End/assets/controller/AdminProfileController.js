let baseURL = "http://localhost:8080/Back_End_war/";


loadUserDetails();
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
        url: baseURL + "registerAdmin",
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
                    $("#user_Name").val(cus.user.user_Name);
                    $("#password").val(cus.user.password);


                }
            }
        }
    });

}

$("#btnUpdateAdminForm").click(function () {
    let adminFormData = new FormData($("#adminProfileFormDetails")[0]);
    $.ajax({
        url: baseURL + "registerAdmin/update",
        method: "post",
        data: adminFormData,
        contentType: false,
        processData: false,
        success: function (res) {
            alert(res.message)
            clearInputFields();
            loadUserDetails();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

$("#btnDeleteAdminForm").click(function () {
    let userId = $("#user_Id").val();
    $.ajax({
        url: baseURL + "registerAdmin?id=" + userId,
        method: "delete",
        dataType: "json",
        success: function (res) {
            alert(res.message)
            window.location.href = '../../index.html';
        }, error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});


function clearInputFields() {
    $("#user_Id,#firstName,#lastName,#contact_No,#address,#email,#nic,#user_Name,#password").val("");
    $("#user_Id").focus();
}