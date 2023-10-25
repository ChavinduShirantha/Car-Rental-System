package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RegisterUserDTO;
import lk.ijse.spring.entity.RegisterUser;
import lk.ijse.spring.entity.User;
import lk.ijse.spring.repo.RegisterUserRepo;
import lk.ijse.spring.service.RegisterUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;


/**
 * @author : Chavindu
 * created : 10/24/2023-2:37 PM
 **/
@Service
@Transactional
public class RegisterUserServiceImpl implements RegisterUserService {
    @Autowired
    RegisterUserRepo repo;
    @Autowired
    ModelMapper mapper;
    @Override
    public void saveRegisterUser(RegisterUserDTO dto) {
        RegisterUser regUser = mapper.map(dto, RegisterUser.class);
        //RegisterUser regUser = new RegisterUser(dto.getUser_Id(), dto.getFirstName(), dto.getLastName(), dto.getContact_No(), dto.getAddress(), dto.getEmail(), dto.getNic(),"", dto.getLicense_No(),"", new User(dto.getUser().getUser_Id(), dto.getUser().getRole_Type(), dto.getUser().getUser_Name(), dto.getUser().getPassword()));
        if (repo.existsById(dto.getUser_Id()))
            throw new RuntimeException(dto.getUser_Id()+" is already available, please insert a new ID");

        try {

            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            dto.getNic_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getNic_Img().getOriginalFilename()));
            dto.getLicense_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getLicense_Img().getOriginalFilename()));

            regUser.setNic_Img("uploads/" + dto.getNic_Img().getOriginalFilename());
            regUser.setLicense_Img("uploads/" + dto.getLicense_Img().getOriginalFilename());


        } catch (IOException | URISyntaxException e) {
            throw new RuntimeException(e);
        }

        System.out.println(regUser);
        repo.save(regUser);
    }
}
