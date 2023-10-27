package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.User;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

/**
 * @author : Chavindu
 * created : 10/27/2023-9:18 AM
 **/
@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepo repo;
    @Autowired
    ModelMapper mapper;
    @Override
    public void saveDriver(DriverDTO dto) {
        Driver driver = new Driver(dto.getUser_Id(), dto.getFirstName(), dto.getLastName(), dto.getContact_No(), dto.getAddress(), dto.getEmail(), dto.getNic(), "", dto.getLicense_No(), "", dto.getAvailability(), new User(dto.getUser().getUser_Id(), dto.getUser().getRole_Type(), dto.getUser().getUser_Name(), dto.getUser().getPassword()));
        if (repo.existsById(dto.getUser_Id()))
            throw new RuntimeException(dto.getUser_Id() + " is already available, please insert a new ID");

        try {

            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            dto.getNic_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getNic_Img().getOriginalFilename()));
            dto.getLicense_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getLicense_Img().getOriginalFilename()));

            driver.setNic_Img("uploads/" + dto.getNic_Img().getOriginalFilename());
            driver.setLicense_Img("uploads/" + dto.getLicense_Img().getOriginalFilename());


        } catch (IOException | URISyntaxException e) {
            throw new RuntimeException(e);
        }

        System.out.println(driver);
        repo.save(driver);
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        List<Driver> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public DriverDTO findDriver(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id + " Driver is not available, please check the ID.!");
        }
        Driver driver = repo.findById(id).get();
        return mapper.map(driver, DriverDTO.class);
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        Driver driver = new Driver(dto.getUser_Id(), dto.getFirstName(), dto.getLastName(), dto.getContact_No(), dto.getAddress(), dto.getEmail(), dto.getNic(), "", dto.getLicense_No(), "", dto.getAvailability(), new User(dto.getUser().getUser_Id(), dto.getUser().getRole_Type(), dto.getUser().getUser_Name(), dto.getUser().getPassword()));
        if (repo.existsById(dto.getUser_Id()))
            throw new RuntimeException(dto.getUser_Id() + " is not available, please insert a new ID");

        try {

            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            dto.getNic_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getNic_Img().getOriginalFilename()));
            dto.getLicense_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getLicense_Img().getOriginalFilename()));

            driver.setNic_Img("uploads/" + dto.getNic_Img().getOriginalFilename());
            driver.setLicense_Img("uploads/" + dto.getLicense_Img().getOriginalFilename());


        } catch (IOException | URISyntaxException e) {
            throw new RuntimeException(e);
        }

        System.out.println(driver);
        repo.save(driver);
    }

    @Override
    public void deleteDriver(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id + " Driver is not available, please check the ID before delete.!");
        }
        repo.deleteById(id);
    }
}