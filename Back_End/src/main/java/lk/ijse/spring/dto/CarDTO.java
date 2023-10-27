package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author : Chavindu
 * created : 10/27/2023-11:58 AM
 **/
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CarDTO {
    private String regNumber;
    private String brand;
    private String model;
    private String type;
    private String transmission_type;
    private String fuel_type;
    private MultipartFile front_view;
    private MultipartFile back_view;
    private MultipartFile side_view;
    private MultipartFile interior_view;
    private int noOfPassengers;
    private String color;
    private double daily_Rate;
    private double monthly_Rate;
    private double priceExtraKM;
    private double freeMileage;
    private String vehicleAvailabilityType;
}
