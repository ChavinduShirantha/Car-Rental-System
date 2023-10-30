let baseURL = "http://localhost:8080/Back_End_war/";

$("#btnRegisterDriver").click(function () {
    let adminFormData = new FormData($("#registerForm")[0]);
    $.ajax({
        url: baseURL + "registerDriver",
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

function loadSelectedImage(divId) {

    $(divId).on("change", function (e) {
        let file = e.target.files;

        if (FileReader && file && file.length) {
            let reader = new FileReader();
            reader.onload = function () {
                $(divId).parent().children(":eq(0)").css({
                    "background": `url(${reader.result})`,
                    "background-size": "cover",
                    "background-position": "center"
                });
            }
            reader.readAsDataURL(file[0]);
        }

    });
}

loadSelectedImage("#nic_Img");
loadSelectedImage("#license_Img");