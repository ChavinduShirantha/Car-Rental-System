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
                $("#payment_Id").val("P00-00" + tempId);
            } else if (tempId <= 99) {
                $("#payment_Id").val("P00-0" + tempId);
            } else {
                $("#payment_Id").val("P00-" + tempId);
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
            rent_Id: rent_Id,
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

            $.ajax({
                url: baseUrl + "rentCar/?id=" + rent_Id,
                method: "get",
                contentType: "application/json",
                dataType: "json",
                async: true,
                success: function (res) {
                    console.log(res.data)

                    var carRent = {
                        rent_Id: res.data.rent_Id,
                        pickUpDate: res.data.pickUpDate,
                        pickUpTime: res.data.pickUpTime,
                        returnDate: res.data.returnDate,
                        returnTime: res.data.returnTime,
                        requestType: res.data.requestType,
                        location: res.data.location,
                        rentStatus: "PAYMENT_SUCCESSFUL",
                        user_Id: res.data.user_Id,
                        rentDetails: res.data.rentDetails
                    }
                    $.ajax({
                        url: baseUrl + "rentCar/updateRent",
                        method: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(carRent),
                        success: function (res) {
                        },
                        error: function (error) {
                            alert(error.responseJSON.message);
                        }
                    })
                }
            });


        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

$.ajax({
    url: baseUrl + 'rentCar/getAcceptedRequest',
    method: "get",
    dataType: "json",
    success: function (resp) {
        console.log(resp)
        for (let i in resp) {
            let rent_Id = resp[i].rent_Id;
            $("#rent_Id").append(`<option>${rent_Id}</option>`);
        }
    },
    error: function (error) {
        alert(error.responseJSON.message);
    }
});

loadAllPayment();

function loadAllPayment() {
    $("#tblPayment").empty();
    $.ajax({
        url: baseUrl + 'payment',
        method: "get",
        dataType: "json",
        success: function (response) {
            let payment = response.data;
            console.log(payment)
            for (let i in payment) {
                let pay = payment[i];
                let payment_Id = pay.payment_Id;
                let rent_Id = pay.rent_Id.rent_Id;
                let paymentType = pay.paymentType;
                let payment_date = pay.payment_date;
                let payment_time = pay.payment_time;
                let lostDamage = pay.lostDamage;
                let rentCost = pay.rentCost;
                let driverCost = pay.driverCost;
                let total = pay.total;
                let row = `<tr><td>${payment_Id}</td><td>${rent_Id}</td><td>${paymentType}</td><td>${payment_date}</td><td>${payment_time}</td><td>${lostDamage}</td><td>${rentCost}</td><td>${driverCost}</td><td>${total}</td></tr>`;
                $("#tblPayment").append(row);
            }
            generatePaymentID();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}

$("#btnGetAllPayment").click(function () {
    loadAllPayment();
});