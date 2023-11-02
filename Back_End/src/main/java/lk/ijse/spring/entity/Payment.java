package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * @author : Chavindu
 * created : 11/2/2023-12:08 PM
 **/
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@Entity
public class Payment {
    @Id
    private String payment_Id;
    private String paymentType;
    private LocalDate date;
    private LocalTime time;
    private Double lostDamage;
    private Double rentCost;
    private Double driverCost;
    private Double total;

    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "rent_Id", referencedColumnName = "rent_Id", nullable = false)
    private Rent rent_Id;
}
