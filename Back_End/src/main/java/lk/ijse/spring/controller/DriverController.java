package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Chavindu
 * created : 10/27/2023-9:25 AM
 **/
@RestController
@RequestMapping("/registerDriver")
@CrossOrigin
public class DriverController {
    @Autowired
    DriverService service;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO dto, @ModelAttribute UserDTO userDTO){
        dto.setUser(userDTO);
        service.saveDriver(dto);
        return new ResponseUtil("Ok","Successfully Added",null);
    }

    @GetMapping
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil("Ok","Successfully Loaded",service.getAllDrivers());
    }

    @GetMapping(params = {"id"})
    public ResponseUtil findDriver(String id){
        return new ResponseUtil("Ok","Successfully Loaded", service.findDriver(id));
    }

    @PostMapping(path = {"update"})
    public ResponseUtil updateDriver(@ModelAttribute DriverDTO dto, @ModelAttribute UserDTO userDTO){
        dto.setUser(userDTO);
        service.updateDriver(dto);
        return new ResponseUtil("Ok","Successfully Updated",null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteDriver(String id){
        service.deleteDriver(id);
        return new ResponseUtil("Ok","Successfully Deleted",null);
    }

    @GetMapping(path = "/loadAvailableDrivers")
    public ResponseUtil getAvailableDriver() {
        return new ResponseUtil("OK", "Successfully Loaded. :", service.getAvailableDrivers());
    }
}
