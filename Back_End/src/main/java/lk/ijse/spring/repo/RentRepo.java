package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Chavindu
 * created : 10/28/2023-5:31 PM
 **/

public interface RentRepo extends JpaRepository<Rent,String> {
    @Query(value = "SELECT COUNT(rent_Id) FROM Rent", nativeQuery = true)
    int getSumRents();
}
