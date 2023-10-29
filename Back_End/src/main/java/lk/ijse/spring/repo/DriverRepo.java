package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @author : Chavindu
 * created : 10/27/2023-9:17 AM
 **/

public interface DriverRepo extends JpaRepository<Driver,String> {
    @Query(value = "SELECT * FROM Driver WHERE Availability='AVAILABLE'", nativeQuery = true)
    List<Driver> availableDrivers();
}
