package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * @author : Chavindu
 * created : 10/27/2023-12:15 PM
 **/

public interface CarService {
    void saveCar(CarDTO dto);
    List<CarDTO> getAllCars();
    CarDTO findCar(String id);
    void updateCar(CarDTO dto);
    void deleteCar(String id);
    CustomDTO getSumCar();
    CustomDTO getSumOfAvailableCar();
    CustomDTO getSumOfUnAvailableCar();
    ArrayList<CarDTO> getFilerCar(String type, String fuel_type);
    ArrayList<CarDTO> searchCar(String regNumber);
    ArrayList<CarDTO> getFilerCars(String type,String transmission_type, String fuel_type);
}
