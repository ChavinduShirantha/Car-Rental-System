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
                    `<div class="col-lg-4 col-md-6 ">
                        <div class="detailBox-new ">                        
                            <div class="detailBox-body">
                                <h2 class="detailBox-subtitle-header" >${i.type }</h2>
                                <img src="${"../../../" + i.image.front_view}" class="d-block w-100" style="height: 300px" alt="">
                            </div>                           
                            <div class=" justify-content-center">
                                <h4 class="detailBox-subtitle" > ${"Brand : " + i.brand}</h4>
                                <h4 class="detailBox-subtitle" > ${"Model : " + i.model}</h4>
                                <h4 class="detailBox-subtitle" > ${"Register Number : " + i.regNumber}</h4>
                                <h4 class="detailBox-subtitle" > ${"Transmission Type : " + i.transmission_type}</h4>
                                <h4 class="detailBox-subtitle" > ${"Fuel Type : " + i.fuel_type}</h4>
                                <h4 class="detailBox-subtitle" > ${"Daily Rate : " + i.daily_Rate}</h4>
                                <h4 class="detailBox-subtitle" > ${"Monthly Rate : " + i.monthly_Rate}</h4>
                                <h4 class="detailBox-subtitle" > ${"Free Mileage : " + i.freeMileage}</h4>
                                <h4 class="detailBox-subtitle" > ${"No.of passengers : " + i.noOfPassengers}</h4>
                                <h4 class="detailBox-subtitle" > ${"Price for extra KM. : " + i.priceExtraKM}</h4>
                                <h4 class="detailBox-subtitle" > ${"Color : " + i.color}</h4>
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