package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
    public ResponseUtil saveCar(@ModelAttribute CarDTO dto){
        service.saveCar(dto);
        return new ResponseUtil("Ok","Successfully Added",null);
    }

    @GetMapping
    public ResponseUtil getAllCars(){
        return new ResponseUtil("Ok","Successfully Loaded",service.getAllCars());
    }

}
