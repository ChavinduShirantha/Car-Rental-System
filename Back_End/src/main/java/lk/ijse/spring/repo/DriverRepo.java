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

    @Query(value = "SELECT COUNT(user_Id) FROM Driver", nativeQuery = true)
    int getSumDriver();

    @Query(value = "SELECT COUNT(user_Id) FROM Driver WHERE availability='AVAILABLE';", nativeQuery = true)
    int getSumOfAvailableDrivers();

    @Query(value = "SELECT COUNT(user_Id) FROM Driver WHERE availability='UNAVAILABLE';", nativeQuery = true)
    int getSumOfUnAvailableDrivers();

    @Query(value = "SELECT user_Id FROM Driver ORDER BY user_Id DESC LIMIT 1", nativeQuery = true)
    String getLastID();
}
