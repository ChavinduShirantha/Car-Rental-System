let baseUrl = "http://localhost:8080/Back_End_war/";

updateClock();
generatePaymentID();

function generatePaymentID() {
    $("#payment_Id").val("P00-001");
    $.ajax({
        url: baseUrl + "payment/paymentIdGenerate",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            let id = res.value;
            console.log(id);
            let tempId = parseInt(id.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#user_Id").val("P00-00" + tempId);
            } else if (tempId <= 99) {
                $("#user_Id").val("P00-0" + tempId);
            } else {
                $("#user_Id").val("P00-" + tempId);
            }
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}

$("#btnAdd").click(function () {
    generatePaymentID();
});

$("#btnSavePayment").on("click", function () {
    let payment_Id = $("#payment_Id").val();
    let rent_Id = $("#rent_Id").val();
    let paymentType = $("#paymentType").val();
    let payment_date = $("#payment_date").val();
    let payment_time = $("#payment_time").val();
    let lostDamage = $("#lostDamage").val();
    let rentCost = $("#rentCost").val();
    let driverCost = $("#driverCost").val();
    let total = $("#total").val();

    var paymentOb = {
        payment_Id: payment_Id,
        rent_Id: {
            rent_Id: rent_Id
        },
        paymentType: paymentType,
        payment_date: payment_date,
        payment_time: payment_time,
        lostDamage: lostDamage,
        rentCost: rentCost,
        driverCost: driverCost,
        total: total,
    }


    $.ajax({
        url: baseUrl + "payment",
        method: "POST",
        data: JSON.stringify(paymentOb),
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            console.log(res)
            alert(res.message);
            generatePaymentID();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});