let baseURL = "http://localhost:8080/Back_End_war/";

loadDriverDetails();
$("#btnUpdateDriverForm").click(function () {
    let driverFormData = new FormData($("#driverFormDetails")[0]);
    $.ajax({
        url: baseURL + "registerDriver/update",
        method: "post",
        data: driverFormData,
        contentType: false,
        processData: false,
        success: function (res) {
            alert(res.message)
            loadDriverDetails();
        },
        error: function (error) {
            alert(error.responseJSON.message);
            loadDriverDetails();
        }
    });
});

$("#btnDeleteDriverForm").click(function () {
    let userId = $("#user_Id").val();
    $.ajax({
        url: baseURL + "registerDriver?id=" + userId,
        method: "delete",
        dataType: "json",
        success: function (res) {
            alert(res.message)
            window.location.href = '../../index.html';
            clearInputFields();
        }, error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

let driver;
function loadDriverDetails() {

    $.ajax({
        url: baseURL + "login/current",
        method: "get",
        success: function (res) {
            driver = res.data.user_Id;
            console.log(res.data)
            $("#user_Id").val(res.data.user_Id);
        }
    });

    $.ajax({
        url: baseURL + "registerDriver",
        method: "get",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            for (var d of res.data) {
                if (driver === d.user_Id) {
                    $("#user_Id").val(d.user_Id);
                    $("#firstName").val(d.firstName);
                    $("#lastName").val(d.lastName);
                    $("#contact_No").val(d.contact_No);
                    $("#address").val(d.address);
                    $("#email").val(d.email);
                    $("#nic").val(d.nic);
                    $("#license_No").val(d.license_No);
                    $("#user_Name").val(d.user.user_Name);
                    $("#password").val(d.user.password);

                    $.ajax({

                        url: baseURL + "registerDriver/searchDriver/?user_id=" + d.user_Id,
                        method: "GET",
                        contentType: "application/json",
                        dataType: "json",
                        success: function (res) {
                            for (let i of res) {
                                $("#NICImage").append(`<img  src="${"../../../"+i.nic_Img}"  style="border: 1px solid black; height: 300px;width: 400px" alt="">`);
                                $("#LicenseImage").append(`<img  src="${"../../../"+i.license_Img}" style="border: 1px solid black; height: 300px;width: 400px"  alt="">`);
                            }
                        },
                        error: function (error) {
                            alert(error.responseJSON.message);
                        }
                    });

                }
            }
        }
    });

}

function clearInputFields() {
    $("#user_Id,#firstName,#lastName,#contact_No,#address,#email,#nic,#license_No,#user_Name,#password").val("");
    $("#user_Id").focus();
}


loadAllRent();
function loadAllRent() {
    $.ajax({
        url: baseURL + "rentCar",
        method: "get",
        contentType: "application/json",
        dataType: "json",
        async: true,
        success: function (res) {
            for (var i of res.data) {
                console.log(i.rentDetails.at().driverID)
                if (driver === i.rentDetails.at().driverID) {
                    let row = "<tr><td>" + i.rent_Id + "</td><td>" + i.rentDetails.at().regNumber + "</td><td>" + i.pickUpDate + "</td><td>" + i.pickUpTime + "</td><td>" + i.returnDate + "</td><td>" + i.returnTime + "</td><td>" + i.location + "</td></tr>";
                    $("#tblDriverForm").append(row);
                }
            }
        }
    });
}