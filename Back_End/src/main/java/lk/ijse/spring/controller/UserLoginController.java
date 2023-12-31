package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CurrentUser;
import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.service.UserService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author : Chavindu
 * created : 10/25/2023-4:33 PM
 **/
@RestController
@RequestMapping("/login")
@CrossOrigin
public class UserLoginController {

    @Autowired
    UserService service;
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRegisterUsers(){
        return new ResponseUtil("Ok","Successfully Loaded",service.getAllRegisterUsers());
    }

    @GetMapping(params = {"username"})
    public ResponseUtil setUser(String username,String password){
        CurrentUser.user = service.getRegisterUser(username,password);
        return new ResponseUtil("OK","Successfully Loaded..!","");
    }

    @GetMapping(path = "current")
    public ResponseUtil getCurrentUser(){
        return new ResponseUtil("OK","Successfully Loaded..!",CurrentUser.user);
    }

    @GetMapping(path = "/sumOfCustomersCount")
    public CustomDTO getSumCustomers() {
        return service.getSumCustomers();
    }
}
