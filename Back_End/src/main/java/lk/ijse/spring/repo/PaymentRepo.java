package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Payment;
import lk.ijse.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

/**
 * @author : Chavindu
 * created : 11/2/2023-12:20 PM
 **/

public interface PaymentRepo extends JpaRepository<Payment,String> {
    @Query(value = "SELECT payment_Id FROM Payment ORDER BY payment_Id DESC LIMIT 1", nativeQuery = true)
    String getLastID();
}
