package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.embeded.ImageDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * @author : Chavindu
 * created : 10/27/2023-12:25 PM
 **/
@RestController
@RequestMapping("/registerCar")
@CrossOrigin
public class CarController {
    @Autowired
    CarService service;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    public ResponseUtil saveCar(@ModelAttribute CarDTO dto, @ModelAttribute ImageDTO imageDTO) {
        dto.setImage(imageDTO);
        service.saveCar(dto);
        return new ResponseUtil("Ok", "Successfully Added", null);
    }

    @GetMapping
    public ResponseUtil getAllCars() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllCars());
    }

    @GetMapping(params = {"id"})
    public ResponseUtil findCar(String id) {
        return new ResponseUtil("Ok", "Successfully Loaded", service.findCar(id));
    }

    @PostMapping(path = {"update"})
    public ResponseUtil updateCar(@ModelAttribute CarDTO dto, @ModelAttribute ImageDTO image) {
        dto.setImage(image);
        service.updateCar(dto);
        return new ResponseUtil("Ok", "Successfully Updated", null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteCar(String id) {
        service.deleteCar(id);
        return new ResponseUtil("Ok", "Successfully Deleted", null);
    }

    @GetMapping(path = "/sumOfCarsCount")
    public CustomDTO getSumCar() {
        return service.getSumCar();
    }

    @GetMapping(path = "/sumOfAvailableCarsCount")
    public CustomDTO getSumOfAvailableCar() {
        return service.getSumOfAvailableCar();
    }

    @GetMapping(path = "/sumOfUnAvailableCarsCount")
    public CustomDTO getSumOfUnAvailableCar() {
        return service.getSumOfUnAvailableCar();
    }

    @GetMapping(path = "/filterCars", params = {"type", "fuel_type"})
    public ArrayList<CarDTO> getFilerCar(@RequestParam String type, @RequestParam String fuel_type) {
        return service.getFilerCar(type, fuel_type);
    }

    @GetMapping(path = "/searchCar", params = {"regNumber"})
    public ArrayList<CarDTO> searchCar(@RequestParam String regNumber) {
        return service.searchCar(regNumber);
    }

    @GetMapping(path = "/filterCarDetails", params = {"type", "transmission_type","fuel_type"})
    public ArrayList<CarDTO> getFilerCars(@RequestParam String type,@RequestParam String transmission_type, @RequestParam String fuel_type) {
        return service.getFilerCars(type,transmission_type, fuel_type);
    }
}
