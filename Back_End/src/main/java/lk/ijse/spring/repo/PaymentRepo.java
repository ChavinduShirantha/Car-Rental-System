package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Chavindu
 * created : 11/2/2023-12:20 PM
 **/

public interface PaymentRepo extends JpaRepository<Payment,String> {
}
