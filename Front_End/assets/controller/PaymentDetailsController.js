let baseUrl = "http://localhost:8080/Back_End_war/";

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