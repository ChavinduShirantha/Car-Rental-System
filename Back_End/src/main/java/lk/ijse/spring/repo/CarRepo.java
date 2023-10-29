package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Chavindu
 * created : 10/27/2023-12:13 PM
 **/

public interface CarRepo extends JpaRepository<Car,String> {
    @Query(value = "SELECT COUNT(regNumber) FROM Car", nativeQuery = true)
    int getSumCar();
}
