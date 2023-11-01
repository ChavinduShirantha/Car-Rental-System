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
                    `<div class="col-lg-4 col-md-6">
                        <div class="detailBox">
                            <div class="detailBox-body">
                                <h2>${i.type}</h2>
                                <img src="${"../../../" + i.image.front_view}" class="d-block w-100" style="height: 300px" alt="">
                            </div>
                          <div class=" justify-content-center">
                                <h4 >${i.brand}</h4>
                                <h4 >${i.model}</h4>
                                <h4 >${i.regNumber}</h4>
                                <h4 >${i.transmission_type}</h4>
                                <h4 >${i.fuel_type}</h4>
                                <h4 >${i.regNumber}</h4>
                                <h4 >${i.daily_Rate}</h4>
                                <h4 >${i.monthly_Rate}</h4>
                                <h4 >${i.freeMileage}</h4>
                                <h4 >${i.noOfPassengers}</h4>
                                <h4 >${i.priceExtraKM}</h4>
                                <h4 >${i.color}</h4>
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