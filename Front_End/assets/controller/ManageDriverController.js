let baseURL = "http://localhost:8080/Back_End_war/";

getAllDrivers();

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
            getAllDrivers();
            clearInputFields();
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
    $("#driverTable").empty();

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
            generateDriverID();
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

$("#btnSearchDriver").click(function () {
    let user_Id = $("#driver_search_Id").val();
    $("#driverTable").empty();
    $.ajax({
        url: baseURL + "registerDriver/?id=" + user_Id,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log(res.message);

            let userId = res.data.user_Id;
            let firstName = res.data.firstName;
            let lastName = res.data.lastName;
            let contact = res.data.contact_No;
            let address = res.data.address;
            let email = res.data.email;
            let nic = res.data.nic;
            let nic_img = res.data.nic_Img;
            let licenseNo = res.data.license_No;
            let availability = res.data.availability;
            let license_img = res.data.license_Img;
            let roleType = res.data.user.role_Type;
            let userName = res.data.user.user_Name;
            let password = res.data.user.password;

            let row = `<tr><td>${userId}</td><td>${firstName}</td><td>${lastName}</td><td>${contact}</td><td>${address}</td><td>${email}</td><td>${nic}</td><td>${licenseNo}</td><td>${availability}</td><td>${roleType}</td><td>${userName}</td><td>${password}</td></tr>`;
            $("#driverTable").append(row);

            $("#user_Id").val(userId);
            $("#firstName").val(firstName);
            $("#lastName").val(lastName);
            $("#contact_No").val(contact);
            $("#address").val(address);
            $("#email").val(email);
            $("#nic").val(nic);
            $("#nic_Img").val(nic_img);
            $("#license_No").val(licenseNo);
            $("#license_Img").val(license_img);
            $("#role_Type").val(roleType);
            $("#user_Name").val(userName);
            $("#password").val(password);

        },
        error: function (error) {
            getAllDrivers()
            clearInputFields();
            alert(error.responseJSON.message);
        }
    })
});

$("#btnUpdateDriver").click(function () {
    let driverFormData = new FormData($("#driverForm")[0]);
    $.ajax({
        url: baseURL + "registerDriver/update",
        method: "post",
        data: driverFormData,
        contentType: false,
        processData: false,
        success: function (res) {
            alert(res.message)
            getAllDrivers();
            clearInputFields();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

$("#btnDeleteDriver").click(function () {
    let userId = $("#user_Id").val();
    $.ajax({
        url: baseURL + "registerDriver?id=" + userId,
        method: "delete",
        dataType: "json",
        success: function (res) {
            alert(res.message)
            getAllDrivers();
            clearInputFields();
        }, error: function (error) {
            alert(error.responseJSON.message);
        }
    });
});

function clearInputFields() {
    $("#user_Id,#firstName,#lastName,#contact_No,#address,#email,#nic,#license_No,#user_Name,#password").val("");
    $("#user_Id").focus();
}

function generateDriverID() {
    $("#user_Id").val("D00-001");
    $.ajax({
        url: baseURL + "registerDriver/driverIdGenerate",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            let id = res.value;
            console.log(id);
            let tempId = parseInt(id.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#user_Id").val("D00-00" + tempId);
            } else if (tempId <= 99) {
                $("#user_Id").val("D00-0" + tempId);
            } else {
                $("#user_Id").val("D00-" + tempId);
            }
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}
