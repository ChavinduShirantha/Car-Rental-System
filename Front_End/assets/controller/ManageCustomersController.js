let baseURL = "http://localhost:8080/Back_End_war/";

getAllRegisterUsers();

$("#btnSaveCustomer").click(function () {
    let customerFormData = new FormData($("#customerForm")[0]);
    $.ajax({
        url: baseURL + "registerUser",
        method: "post",
        data: customerFormData,
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

$("#btnGetAllCustomer").click(function () {
    getAllRegisterUsers();
});

function getAllRegisterUsers() {
    $("#customerTable").empty();

    $.ajax({
        url: baseURL + 'registerUser',
        method: "get",
        dataType: "json",
        success: function (response) {
            let users = response.data;
            for (let i in users) {
                let cus = users[i];
                let userId = cus.user_Id;
                let firstName = cus.firstName;
                let lastName = cus.lastName;
                let contact = cus.contact_No;
                let address = cus.address;
                let email = cus.email;
                let nic = cus.nic;
                let licenseNo = cus.license_No;
                let roleType = cus.user.role_Type;
                let userName = cus.user.user_Name;
                let password = cus.user.password;
                let row = `<tr><td>${userId}</td><td>${firstName}</td><td>${lastName}</td><td>${contact}</td><td>${address}</td><td>${email}</td><td>${nic}</td><td>${licenseNo}</td><td>${roleType}</td><td>${userName}</td><td>${password}</td></tr>`;
                $("#customerTable").append(row);
            }
            bindTrEvents();
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    });
}

function bindTrEvents() {
    $('#customerTable>tr').click(function () {

        let userId = $(this).children().eq(0).text();
        let firstName = $(this).children().eq(1).text();
        let lastName = $(this).children().eq(2).text();
        let contact = $(this).children().eq(3).text();
        let address = $(this).children().eq(4).text();
        let email = $(this).children().eq(5).text();
        let nic = $(this).children().eq(6).text();
        let licenseNo = $(this).children().eq(7).text();
        let roleType = $(this).children().eq(8).text();
        let userName = $(this).children().eq(9).text();
        let password = $(this).children().eq(10).text();

        $("#user_Id").val(userId);
        $("#firstName").val(firstName);
        $("#lastName").val(lastName);
        $("#contact_No").val(contact);
        $("#address").val(address);
        $("#email").val(email);
        $("#nic").val(nic);
        $("#license_No").val(licenseNo);
        $("#role_Type").val(roleType);
        $("#user_Name").val(userName);
        $("#password").val(password);
    });

    $("#btnSaveCustomer").attr('disabled', true);
}
