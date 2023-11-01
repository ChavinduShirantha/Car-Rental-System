let baseURL = "http://localhost:8080/Back_End_war/";


loadAllRent();

function loadAllRent() {
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