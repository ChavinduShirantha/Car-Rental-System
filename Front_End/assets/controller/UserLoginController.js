let baseUrl = "http://localhost:8080/Back_End_war/";

$("#btnLogin").on('click', function () {
    let loginRole_Type = $("#role_Type").val();
    let loginUserName = $("#user_name").val();
    let loginPassword = $("#user_password").val();

    $.ajax({
        url: baseUrl + "login",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            for (var login of res.data) {
                if (loginRole_Type === "DRIVER" && loginUserName === login.user_Name && loginPassword === login.password) {
                    $.ajax({
                        url: baseUrl + "login/?username=" + loginUserName + "&password=" + loginPassword,
                        data: res.data,
                        method: "get",
                        success: function () {
                            window.location.href = 'DriverForm.html';
                        },
                        error: function (error) {
                            alert(error.responseJSON.message);
                        }
                    })

                } else if (loginRole_Type === "REGISTERED_USER" && loginUserName === login.user_Name && loginPassword === login.password) {
                    $.ajax({
                        url: baseUrl + "login/?username=" + loginUserName + "&password=" + loginPassword,
                        data: res.data,
                        method: "get",
                        success: function () {
                            window.location.href = 'CustomerForm.html';
                        },
                        error: function (error) {
                            alert(error.responseJSON.message);
                        }
                    });

                } else if (loginRole_Type === "ADMIN" && loginUserName === login.user_Name && loginPassword === login.password) {
                    $.ajax({
                        url: baseUrl + "login/?username=" + loginUserName + "&password=" + loginPassword,
                        data: res.data,
                        method: "get",
                        success: function () {
                            window.location.href = 'AdminForm.html';
                        },
                        error: function (error) {
                            alert(error.responseJSON.message);
                        }
                    });
                }
            }
        }
    });
});