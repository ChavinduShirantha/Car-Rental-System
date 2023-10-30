$("#btnChangeUser").on('click', function () {
    let loginRole_Type = $("#role_Type").val();

    if (loginRole_Type === "DRIVER_USER") {
        window.location.href = 'DriverRegisterForm.html';
    } else if (loginRole_Type === "REGISTERED_USER") {
        window.location.href = 'RegisterForm.html';
    } else if (loginRole_Type === "ADMIN_USER") {
        window.location.href = 'AdminRegisterForm.html';
    }
});