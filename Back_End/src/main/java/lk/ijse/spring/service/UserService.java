package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.UserDTO;

import java.util.ArrayList;

/**
 * @author : Chavindu
 * created : 10/25/2023-4:26 PM
 **/

public interface UserService {
    ArrayList<UserDTO> getAllRegisterUsers();

    UserDTO getRegisterUser(String username,String password);

    CustomDTO getSumCustomers();

}
