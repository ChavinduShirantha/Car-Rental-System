package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * @author : Chavindu
 * created : 10/28/2023-2:33 PM
 **/
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@Entity
@IdClass(RentDetail_PK.class)
public class RentDetails {
    @Id
    private String regNumber;
    @Id
    private String rent_Id;

    private String driverID;

    @ManyToOne
    @JoinColumn(name = "rent_Id",referencedColumnName = "rent_Id",insertable = false,updatable = false)
    private Rent rent;

    @ManyToOne
    @JoinColumn(name = "regNumber",referencedColumnName = "regNumber",insertable = false,updatable = false)
    private Car car;

    @ManyToOne
    @JoinColumn(name = "driverID",referencedColumnName = "user_Id",insertable = false,updatable = false)
    private Driver driver;
}
