package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.RegisterUserDTO;
import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.service.RegisterUserService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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

    @GetMapping
    public ResponseUtil getAllRegisterUsers(){
        return new ResponseUtil("Ok","Successfully Loaded",service.getAllRegisterUsers());
    }

    @GetMapping(params = {"id"})
    public ResponseUtil findRegisterUser(String id){
        return new ResponseUtil("Ok","Successfully Loaded", service.findRegisterUser(id));
    }

    @PostMapping(path = {"update"})
    public ResponseUtil updateUser(@ModelAttribute RegisterUserDTO dto, @ModelAttribute UserDTO userDTO){
        dto.setUser(userDTO);
        service.updateRegisterUser(dto);
        return new ResponseUtil("Ok","Successfully Updated",null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteCustomer(String id){
        service.deleteRegisterUser(id);
        return new ResponseUtil("Ok","Successfully Deleted",null);
    }

    @GetMapping(path = "/searchRegUser", params = {"user_id"})
    public ArrayList<RegisterUserDTO> searchRegUser(@RequestParam String user_id) {
        return service.searchUser(user_id);
    }

    @GetMapping(path = "/userIdGenerate")
    public @ResponseBody CustomDTO userIdGenerate() {
        return service.userIdGenerate();
    }
}
