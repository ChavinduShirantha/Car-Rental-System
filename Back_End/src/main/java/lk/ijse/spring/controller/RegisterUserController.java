package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RegisterUserDTO;
import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.service.RegisterUserService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Chavindu
 * created : 10/24/2023-2:49 PM
 **/
@RestController
@RequestMapping("/registerUser")
@CrossOrigin
public class RegisterUserController {
    @Autowired
    RegisterUserService service;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    public ResponseUtil saveUser(@ModelAttribute RegisterUserDTO dto, @ModelAttribute UserDTO userDTO){
        dto.setUser(userDTO);
        service.saveRegisterUser(dto);
        return new ResponseUtil("Ok","Successfully Added",null);
    }
}
