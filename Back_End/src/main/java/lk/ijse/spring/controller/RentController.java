package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.RentDTO;
import lk.ijse.spring.service.RentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Chavindu
 * created : 10/28/2023-5:52 PM
 **/
@RestController
@CrossOrigin
@RequestMapping("/rentCar")
public class RentController {
    @Autowired
    RentService service;

    @PostMapping
    public ResponseUtil rentCar(@RequestBody RentDTO dto) {
        service.rentCars(dto);
        return new ResponseUtil("Ok", "Successfully Purchased.!", null);
    }

    @GetMapping(path = "/sumOfRentsCount")
    public CustomDTO getSumBookings() {
        return service.getSumBookings();
    }

    @GetMapping(path = "/sumOfPendingBookingCount")
    public CustomDTO getSumOfPendingBookings() {
        return service.getSumOfPendingBookings();
    }
    @GetMapping(path = "/sumOfActiveBookingCount")
    public CustomDTO getSumOfActiveBookings() {
        return service.getSumOfActiveBookings();
    }
}
