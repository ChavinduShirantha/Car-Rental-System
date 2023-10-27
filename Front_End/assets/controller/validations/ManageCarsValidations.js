const regExRegNumber = /^[A-Z]{3}-?\d{4}$/;
const regExBrand = /^[A-z ]{3,20}$/;
const regExModel = /^[A-z 0-9]{3,20}$/;
const regExNoPassengers = /^[0-9 ]{1,2}$/;
const regExColor = /^[A-z ]{3,20}$/;
const regExDailyRate = /^[0-9 ]{1,20}$/;
const regExMonthlyRate = /^[0-9 ]{1,20}$/;
const regExKM = /^[0-9 ]{1,4}$/;
const regExFreeMileage = /^[0-9 ]{1,4}$/;

let carValidations = [];

carValidations.push({
    reg: regExRegNumber,
    field: $('#regNumber'),
    error: 'Car Register Number Pattern is Wrong'
});
carValidations.push({
    reg: regExBrand,
    field: $('#brand'),
    error: 'Car Brand Pattern is Wrong'
});
carValidations.push({
    reg: regExModel,
    field: $('#model'),
    error: 'Car Model Pattern is Wrong'
});
carValidations.push({
    reg: regExNoPassengers,
    field: $('#noOfPassengers'),
    error: 'No.of Passengers Pattern is Wrong'
});
carValidations.push({
    reg: regExColor,
    field: $('#color'),
    error: 'Car Color Pattern is Wrong'
});
carValidations.push({
    reg: regExDailyRate,
    field: $('#daily_Rate'),
    error: 'Car Daily Rate Address Pattern is Wrong'
});
carValidations.push({
    reg: regExMonthlyRate,
    field: $('#monthly_Rate'),
    error: 'Car Monthly Rate Pattern is Wrong'
});
carValidations.push({
    reg: regExKM,
    field: $('#priceExtraKM'),
    error: 'Car Price per Extra Km License Pattern is Wrong'
});
carValidations.push({
    reg: regExFreeMileage,
    field: $('#freeMileage'),
    error: 'Car Free Mileage Pattern is Wrong'
});

function focusText(txtField) {
    txtField.focus();
}

function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

$("#regNumber,#brand,#model,#noOfPassengers,#color,#daily_Rate,#monthly_Rate,#priceExtraKM,#freeMileage").on('keydown', function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
});

$("#regNumber,#brand,#model,#noOfPassengers,#color,#daily_Rate,#monthly_Rate,#priceExtraKM,#freeMileage").on('keyup', function (event) {
    checkValidity(carValidations);
});

$("#regNumber").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExRegNumber, $("#regNumber"))) {
        $("#brand").focus();
    } else {
        focusText($("#regNumber"));
    }
});

$("#brand").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExBrand, $("#brand"))) {
        $("#model").focus();
    } else {
        focusText($("#brand"));
    }
});

$("#model").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExModel, $("#model"))) {
        focusText($("#type"));
    }
});

$("#type").on('keydown', function (event) {
    if (event.key === "Enter") {
        focusText($("#transmission_type"));
    }
});

$("#transmission_type").on('keydown', function (event) {
    if (event.key === "Enter") {
        focusText($("#fuel_type"));
    }
});

$("#fuel_type").on('keydown', function (event) {
    if (event.key === "Enter") {
        focusText($("#front_view"));
    }
});

$("#front_view").on('keydown', function (event) {
    if (event.key === "Enter") {
        focusText($("#back_view"));
    }
});

$("#back_view").on('keydown', function (event) {
    if (event.key === "Enter") {
        focusText($("#side_view"));
    }
});

$("#side_view").on('keydown', function (event) {
    if (event.key === "Enter") {
        focusText($("#interior_view"));
    }
});

$("#interior_view").on('keydown', function (event) {
    if (event.key === "Enter") {
        focusText($("#noOfPassengers"));
    }
});


$("#noOfPassengers").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExNoPassengers, $("#noOfPassengers"))) {
        focusText($("#color"));
    }
});

$("#color").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExColor, $("#color"))) {
        focusText($("#daily_Rate"));
    }
});

$("#daily_Rate").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExDailyRate, $("#daily_Rate"))) {
        focusText($("#monthly_Rate"));
    }
});

$("#monthly_Rate").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExMonthlyRate, $("#monthly_Rate"))) {
        focusText($("#priceExtraKM"));
    }
});

$("#priceExtraKM").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExKM, $("#priceExtraKM"))) {
            focusText($("#freeMileage"));
    }
});

$("#freeMileage").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExFreeMileage, $("#freeMileage"))) {
            focusText($("#vehicleAvailabilityType"));
    }
});


function checkValidity() {
    let errorCount = 0;
    for (let validation of carValidations) {
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
        $("#btnSaveCar").attr('disabled', true);
    } else {
        $("#btnSaveCar").attr('disabled', false);
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

