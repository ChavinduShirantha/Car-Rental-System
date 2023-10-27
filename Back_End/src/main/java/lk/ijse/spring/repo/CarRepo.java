package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Chavindu
 * created : 10/27/2023-12:13 PM
 **/

public interface CarRepo extends JpaRepository<Car,String> {
}
