let baseURL = "http://localhost:8080/Back_End_war/";


$("#btnSaveDriver").click(function () {
    let driverFormData = new FormData($("#driverForm")[0]);
    $.ajax({
        url: baseURL + "registerDriver",
        method: "post",
        data: driverFormData,
        contentType: false,
        processData: false,
        success: function (res) {
            alert(res.message)
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

$("#btnGetAllDriver").click(function () {
    getAllDrivers();
});

function getAllDrivers() {
    $("#customerTable").empty();

    $.ajax({
        url: baseURL + 'registerDriver',
        method: "get",
        dataType: "json",
        success: function (response) {
            let users = response.data;
            console.log(users);
            for (let i in users) {
                let driver = users[i];
                let userId = driver.user_Id;
                let firstName = driver.firstName;
                let lastName = driver.lastName;
                let contact = driver.contact_No;
                let address = driver.address;
                let email = driver.email;
                let nic = driver.nic;
                let licenseNo = driver.license_No;
                let availability = driver.availability;
                let roleType = driver.user.role_Type;
                let userName = driver.user.user_Name;
                let password = driver.user.password;
                let row = `<tr><td>${userId}</td><td>${firstName}</td><td>${lastName}</td><td>${contact}</td><td>${address}</td><td>${email}</td><td>${nic}</td><td>${licenseNo}</td><td>${availability}</td><td>${roleType}</td><td>${userName}</td><td>${password}</td></tr>`;
                $("#driverTable").append(row);
            }
            bindTrEvents();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}

function bindTrEvents() {
    $('#driverTable>tr').click(function () {

        let userId = $(this).children().eq(0).text();
        let firstName = $(this).children().eq(1).text();
        let lastName = $(this).children().eq(2).text();
        let contact = $(this).children().eq(3).text();
        let address = $(this).children().eq(4).text();
        let email = $(this).children().eq(5).text();
        let nic = $(this).children().eq(6).text();
        let licenseNo = $(this).children().eq(7).text();
        let availability = $(this).children().eq(8).text();
        let roleType = $(this).children().eq(9).text();
        let userName = $(this).children().eq(10).text();
        let password = $(this).children().eq(11).text();

        $("#user_Id").val(userId);
        $("#firstName").val(firstName);
        $("#lastName").val(lastName);
        $("#contact_No").val(contact);
        $("#address").val(address);
        $("#email").val(email);
        $("#nic").val(nic);
        $("#license_No").val(licenseNo);
        $("#availability").val(availability);
        $("#role_Type").val(roleType);
        $("#user_Name").val(userName);
        $("#password").val(password);
    });

    $("#btnSaveDriver").attr('disabled', true);
}