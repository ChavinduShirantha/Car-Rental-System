package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;

import java.util.List;

/**
 * @author : Chavindu
 * created : 10/27/2023-8:55 AM
 **/

public interface AdminService {
    void saveAdmin(AdminDTO dto);
    List<AdminDTO> getAllAdmin();
    void updateAdmin(AdminDTO dto);
    void deleteAdmin(String id);
}
