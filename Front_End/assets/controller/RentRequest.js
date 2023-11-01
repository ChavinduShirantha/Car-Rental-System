let baseURL = "http://localhost:8080/Back_End_war/";


loadAllRent();

function loadAllRent() {
    $("#tblRentRequest").empty();
    clearInputFields();
    $.ajax({
        url: baseURL + "rentCar",
        method: "get",
        contentType: "application/json",
        dataType: "json",
        async: true,
        success: function (res) {
            console.log(res.data)
            for (var i of res.data) {
                let row = "<tr><td>" + i.rent_Id + "</td><td>" + i.pickUpDate + "</td><td>" + i.returnDate + "</td><td>" + i.rentDetails.at().regNumber + "</td><td>" + i.user_Id.user_Id + "</td><td>" + i.user_Id.license_No + "</td><td>" + i.rentStatus + "</td></tr>";
                $("#tblRentRequest").append(row);
            }
            bindTrEvents();
        }
    });
}

function bindTrEvents() {
    $('#tblRentRequest>tr').click(function () {

        let rent_id = $(this).children().eq(0).text();
        let pickUpDate = $(this).children().eq(1).text();
        let returnDate = $(this).children().eq(2).text();
        let regNumber = $(this).children().eq(3).text();
        let cusId = $(this).children().eq(4).text();
        let licenceNo = $(this).children().eq(5).text();
        let status = $(this).children().eq(6).text();


        $("#rent_Id").val(rent_id);
        $("#searchRentalRequest").val(rent_id);
        $("#pickupDate").val(pickUpDate);
        $("#returnDate").val(returnDate);
        $("#registrationNumber").val(regNumber);
        $("#cusId").val(cusId);
        $("#licenceNo").val(licenceNo);
        $("#rentStatus").val(status);

    });

}

$("#btnSearchRentRequest").click(function () {
    let rent_Id = $("#searchRentalRequest").val();
    $("#tblRentRequest").empty();
    clearInputFields();
    $.ajax({
        url: baseURL + "rentCar/?id=" + rent_Id,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log(res.message);

            let rent_id = res.data.rent_Id;
            let pickUpDate = res.data.pickUpDate;
            let returnDate = res.data.returnDate;
            let regNumber = res.data.rentDetails.at().regNumber;
            let cusId = res.data.user_Id.user_Id;
            let licenceNo = res.data.user_Id.license_No;
            let rentStatus = res.data.rentStatus;

            let row = `<tr><td>${rent_id}</td><td>${pickUpDate}</td><td>${returnDate}</td><td>${regNumber}</td><td>${cusId}</td><td>${licenceNo}</td><td>${rentStatus}</td></tr>`;
            $("#tblRentRequest").append(row);

            $("#rent_Id").val(rent_id);
            $("#pickupDate").val(pickUpDate);
            $("#returnDate").val(returnDate);
            $("#registrationNumber").val(regNumber);
            $("#cusId").val(cusId);
            $("#licenceNo").val(licenceNo);
            $("#rentStatus").val(rentStatus);


        },
        error: function (error) {
            loadAllRent();
            alert(error.responseJSON.message);
        }
    })
});


function clearInputFields() {
    $("#rent_Id,#pickupDate,#returnDate,#registrationNumber,#cusId,#licenceNo,#rentStatus").val("");
}

$("#btnRentAccept").click(function () {
    let rentId = $("#searchRentalRequest").val();
    $.ajax({
        url: baseURL + "rentCar/?id=" + rentId,
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
                rentStatus: "REQUEST_ACCEPTED",
                user_Id: res.data.user_Id,
                rentDetails: res.data.rentDetails
            }
            $.ajax({
                url: baseURL + "rentCar/updateRent",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(carRent),
                success: function (res) {
                    alert(res.message)
                    clearInputFields();
                    loadAllRent();
                },
                error: function (error) {
                    alert(error.responseJSON.message);
                }
            })
        }
    });
});

$("#btnRentReject").click(function () {
    let rentId = $("#searchRentalRequest").val();
    $.ajax({
        url: baseURL + "rentCar/?id=" + rentId,
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
                rentStatus: "REQUEST_REJECTED",
                user_Id: res.data.user_Id,
                rentDetails: res.data.rentDetails
            }
            $.ajax({
                url: baseURL + "rentCar/rejectRent",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(carRent),
                success: function (res) {
                    alert(res.message)
                    clearInputFields();
                    loadAllRent();
                },
                error: function (error) {
                    alert(error.responseJSON.message);
                }
            })
        }
    });
});

