package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.entity.User;
import lk.ijse.spring.repo.UserRepo;
import lk.ijse.spring.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * @author : Chavindu
 * created : 10/25/2023-4:26 PM
 **/
@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepo repo;

    @Autowired
    ModelMapper mapper;
    @Override
    public ArrayList<UserDTO> getAllRegisterUsers() {
        List<User> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<UserDTO>>() {
        }.getType());
    }

    @Override
    public UserDTO getRegisterUser(String username, String password) {
        return mapper.map(repo.findUser(username, password), UserDTO.class);
    }
}
