package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.User;
import lk.ijse.spring.repo.AdminRepo;
import lk.ijse.spring.service.AdminService;
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
 * created : 10/27/2023-8:56 AM
 **/
@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    AdminRepo repo;
    @Autowired
    ModelMapper mapper;
    @Override
    public void saveAdmin(AdminDTO dto) {
        Admin admin = new Admin(dto.getUser_Id(), dto.getFirstName(), dto.getLastName(), dto.getContact_No(), dto.getAddress(), dto.getEmail(), dto.getNic(), "", dto.getLicense_No(), "", new User(dto.getUser().getUser_Id(), dto.getUser().getRole_Type(), dto.getUser().getUser_Name(), dto.getUser().getPassword()));
        if (repo.existsById(dto.getUser_Id()))
            throw new RuntimeException(dto.getUser_Id() + " is already available, please insert a new ID");

        try {

            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            dto.getNic_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getNic_Img().getOriginalFilename()));
            dto.getLicense_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getLicense_Img().getOriginalFilename()));

            admin.setNic_Img("uploads/" + dto.getNic_Img().getOriginalFilename());
            admin.setLicense_Img("uploads/" + dto.getLicense_Img().getOriginalFilename());


        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }

        System.out.println(admin);
        repo.save(admin);
    }

    @Override
    public List<AdminDTO> getAllAdmin() {
        List<Admin> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<AdminDTO>>() {
        }.getType());
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        Admin admin = new Admin(dto.getUser_Id(), dto.getFirstName(), dto.getLastName(), dto.getContact_No(), dto.getAddress(), dto.getEmail(), dto.getNic(), "", dto.getLicense_No(), "", new User(dto.getUser().getUser_Id(), dto.getUser().getRole_Type(), dto.getUser().getUser_Name(), dto.getUser().getPassword()));

        if (!repo.existsById(dto.getUser_Id()))
            throw new RuntimeException(dto.getUser_Id() + " is not available, please insert a valid ID");

        try {

            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();

            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            dto.getNic_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getNic_Img().getOriginalFilename()));
            dto.getLicense_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getLicense_Img().getOriginalFilename()));

            admin.setNic_Img("uploads/" + dto.getNic_Img().getOriginalFilename());
            admin.setLicense_Img("uploads/" + dto.getLicense_Img().getOriginalFilename());


        } catch (IOException | URISyntaxException e) {
            throw new RuntimeException(e);
        }

        System.out.println(admin);
        repo.save(admin);
    }

    @Override
    public void deleteAdmin(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id + " Admin is not available, please check the ID before delete.!");
        }
        repo.deleteById(id);
    }
}
