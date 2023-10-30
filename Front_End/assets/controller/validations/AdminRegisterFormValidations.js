let regAdminID = /^(A00-)[0-9]{3,4}$/;
const regFirstName = /^[A-z ]{3,20}$/;
const regLastName = /^[A-z ]{3,20}$/;
const regContactNum = /^(07(0|1|2|4|5|6|7|8)[0-9]{7})$/;
const regCusAddress = /^[A-z0-9/ ]{4,30}$/;
const regEmailCusAddress = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regNIC = /^([0-9]{12}|[0-9V]{10})$/;
const regDrivingNIC = /^[A-Z0-9-]+$/;
const regUserName = /^[A-z0-9/ ]{4,30}$/;
const regPassword = /^([A-Z a-z]{5,15}[0-9]{1,10})$/;

let adminValidations = [];

adminValidations.push({
    reg: regAdminID,
    field: $('#user_Id'),
    error: 'User ID Pattern is Wrong'
});
adminValidations.push({
    reg: regFirstName,
    field: $('#firstName'),
    error: 'User First Name Pattern is Wrong'
});
adminValidations.push({
    reg: regLastName,
    field: $('#lastName'),
    error: 'User Last Name Pattern is Wrong'
});
adminValidations.push({
    reg: regContactNum,
    field: $('#contact_No'),
    error: 'User Contact Number Pattern is Wrong'
});
adminValidations.push({
    reg: regCusAddress,
    field: $('#address'),
    error: 'User Address Pattern is Wrong'
});
adminValidations.push({
    reg: regEmailCusAddress,
    field: $('#email'),
    error: 'User Email Address Pattern is Wrong'
});
adminValidations.push({
    reg: regNIC,
    field: $('#nic'),
    error: 'User NIC Pattern is Wrong'
});
adminValidations.push({
    reg: regUserName,
    field: $('#user_Name'),
    error: 'User User Name Pattern is Wrong'
});
adminValidations.push({
    reg: regPassword,
    field: $('#password'),
    error: 'User Password Pattern is Wrong'
});

function focusText(txtField) {
    txtField.focus();
}

function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

$("#user_Id,#firstName,#lastName,#contact_No,#address,#email,#nic,#user_Name,#password").on('keydown', function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
});

$("#user_Id,#firstName,#lastName,#contact_No,#address,#email,#nic,#user_Name,#password").on('keyup', function (event) {
    checkValidity(adminValidations);
});

$("#user_Id").on('keydown', function (event) {
    if (event.key === "Enter" && check(regAdminID, $("#user_Id"))) {
        $("#firstName").focus();
    } else {
        focusText($("#user_Id"));
    }
});

$("#firstName").on('keydown', function (event) {
    if (event.key === "Enter" && check(regFirstName, $("#firstName"))) {
        $("#lastName").focus();
    } else {
        focusText($("#firstName"));
    }
});

$("#lastName").on('keydown', function (event) {
    if (event.key === "Enter" && check(regLastName, $("#lastName"))) {
        focusText($("#contact_No"));
    }
});

$("#contact_No").on('keydown', function (event) {
    if (event.key === "Enter" && check(regContactNum, $("#contact_No"))) {
        focusText($("#address"));
    }
});

$("#address").on('keydown', function (event) {
    if (event.key === "Enter" && check(regCusAddress, $("#address"))) {
        if (event.which === 13) {
            focusText($("#nic"));
        }
    }
});

$("#nic").on('keydown', function (event) {
    if (event.key === "Enter" && check(regNIC, $("#nic"))) {
        focusText($("#email"));
    }
});

$("#email").on('keydown', function (event) {
    if (event.key === "Enter" && check(regEmailCusAddress, $("#email"))) {
        focusText($("#user_Name"));
    }
});

$("#user_Name").on('keydown', function (event) {
    if (event.key === "Enter" && check(regUserName, $("#user_Name"))) {
            focusText($("#password"));
    }
});

$("#password").on('keydown', function (event) {
    if (event.key === "Enter" && check(regPassword, $("#password"))) {
            $('#btnRegisterAdmin').focus();
    }
});

function checkValidity() {
    let errorCount = 0;
    for (let validation of adminValidations) {
        if (check(validation.reg, validation.field)) {
            textSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setTextError(validation.field, validation.error);
        }
    }
    setButtonState(errorCount);
}

function setButtonState(value) {
    if (value > 0) {
        $("#btnRegisterAdmin").attr('disabled', true);
    } else {
        $("#btnRegisterAdmin").attr('disabled', false);
    }
}

function setTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('small').text(error);
    }
}

function textSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('small').text(error);
    }
}

function defaultText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('small').text(error);
}

