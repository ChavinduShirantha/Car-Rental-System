package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * @author : Chavindu
 * created : 10/27/2023-11:58 AM
 **/

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Car {
    @Id
    private String regNumber;
    private String brand;
    private String model;
    private String type;
    private String transmission_type;
    private String fuel_type;
    private String front_view;
    private String back_view;
    private String side_view;
    private String interior_view;
    private int noOfPassengers;
    private String color;
    private double daily_Rate;
    private double monthly_Rate;
    private double priceExtraKM;
    private double freeMileage;
    private String vehicleAvailabilityType;
}
