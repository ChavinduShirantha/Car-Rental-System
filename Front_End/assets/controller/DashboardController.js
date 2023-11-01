let baseURL = "http://localhost:8080/Back_End_war/";


$("#btnSearchCarDetails").click(function () {
    let type = $("#type").val();
    let transmission_type = $("#transmission_type").val();
    let fuel_Type = $("#fuel_type").val();

    console.log(type);
    console.log(transmission_type);
    console.log(fuel_Type);

    $.ajax({
        url: baseURL + "registerCar/filterCarDetails/?type=" + type + "&transmission_type="+ transmission_type + "&fuel_type=" + fuel_Type,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log(res);
        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    })
});