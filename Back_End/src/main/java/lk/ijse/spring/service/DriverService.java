package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * @author : Chavindu
 * created : 10/27/2023-9:18 AM
 **/

public interface DriverService {
    void saveDriver(DriverDTO dto);
    List<DriverDTO> getAllDrivers();
    DriverDTO findDriver(String id);
    void updateDriver(DriverDTO dto);
    void deleteDriver(String id);
    ArrayList<DriverDTO> getAvailableDrivers();
}
