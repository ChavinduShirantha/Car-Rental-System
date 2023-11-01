let baseURL = "http://localhost:8080/Back_End_war/";


$("#btnSearchCarDetails").click(function () {
    let type = $("#type").val();
    let transmission_type = $("#transmission_type").val();
    let fuel_Type = $("#fuel_type").val();
    $("#carDetailsPreview>div").remove();
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
            for (let i of res) {
                $("#carDetailsPreview").append(
                    `<div class="col-4">
                        <div class="detailBox">
                            <div class="detailBox-body">
                                <h5 class="detailBox-title">${i.brand}</h5>
                                <img src="${"../../../"+i.image.front_view}" class="d-block w-100" style="height: 300px" alt="">
                            </div>
                        </div>
                    </div>`
                )
            }

        },
        error: function (error) {
            alert(error.responseJSON.message);
        }
    })
});