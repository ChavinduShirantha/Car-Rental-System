package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Chavindu
 * created : 10/28/2023-5:31 PM
 **/

public interface RentRepo extends JpaRepository<Rent,String> {
}
