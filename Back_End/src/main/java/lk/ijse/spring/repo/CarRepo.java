package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

/**
 * @author : Chavindu
 * created : 10/27/2023-12:13 PM
 **/

public interface CarRepo extends JpaRepository<Car,String> {
    @Query(value = "SELECT COUNT(regNumber) FROM Car", nativeQuery = true)
    int getSumCar();

    @Query(value = "SELECT COUNT(regNumber) FROM Car WHERE vehicleAvailabilityType='AVAILABLE';", nativeQuery = true)
    int getSumOfAvailableCar();

    @Query(value = "SELECT COUNT(regNumber) FROM Car WHERE vehicleAvailabilityType='UNAVAILABLE';", nativeQuery = true)
    int getSumOfUnAvailableCar();

    @Query(value = "SELECT * FROM Car WHERE type =?1 and fuel_type=?2 and vehicleAvailabilityType='AVAILABLE' ", nativeQuery = true)
    ArrayList<Car> filterCar(String type, String fuel_type);

    @Query(value = "SELECT * FROM Car WHERE regNumber =?1 ", nativeQuery = true)
    ArrayList<Car> searchCar(String regNumber);

    @Query(value = "SELECT * FROM Car WHERE type =?1 and transmission_type=?2 and fuel_type=?3 and vehicleAvailabilityType='AVAILABLE' ", nativeQuery = true)
    ArrayList<Car> filterCars(String type,String transmission_type, String fuel_type);
}
