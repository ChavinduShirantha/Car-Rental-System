package lk.ijse.spring.controller;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Chavindu
 * created : 10/27/2023-9:02 AM
 **/
@RestController
@RequestMapping("/registerAdmin")
@CrossOrigin
public class AdminController {

    @Autowired
    AdminService service;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    public ResponseUtil saveAdmin(@ModelAttribute AdminDTO dto, @ModelAttribute UserDTO userDTO) {
        dto.setUser(userDTO);
        service.saveAdmin(dto);
        return new ResponseUtil("Ok", "Successfully Added", null);
    }

    @GetMapping
    public ResponseUtil getAllAdmin() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllAdmin());
    }

    @PostMapping(path = {"update"})
    public ResponseUtil updateAdmin(@ModelAttribute AdminDTO dto, @ModelAttribute UserDTO userDTO) {
        dto.setUser(userDTO);
        service.updateAdmin(dto);
        return new ResponseUtil("Ok", "Successfully Updated", null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteAdmin(String id) {
        service.deleteAdmin(id);
        return new ResponseUtil("Ok", "Successfully Deleted", null);
    }

    @GetMapping(path = "/adminIdGenerate")
    public CustomDTO adminIdGenerate() {
        return service.adminIdGenerate();
    }
}
