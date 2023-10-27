package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Chavindu
 * created : 10/27/2023-9:17 AM
 **/

public interface DriverRepo extends JpaRepository<Driver,String> {
}
