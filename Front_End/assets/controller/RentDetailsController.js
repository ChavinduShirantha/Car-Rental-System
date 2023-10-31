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
                let row = "<tr><td>" + i.rent_Id + "</td><td>" + i.rentDetails.at().regNumber + "</td><td>" + i.user_Id.user_Id + "</td><td>" + i.pickUpTime + "</td><td>" + i.pickUpDate + "</td><td>" + i.returnDate + "</td><td>" + i.returnDate + "</td><td>" + i.returnTime + "</td><td>" + i.requestType + "</td><td>" + i.location + "</td><td>" + i.rentStatus + "</td></tr>";
                $("#rentDetailsTable").append(row);
            }
        }
    });
}