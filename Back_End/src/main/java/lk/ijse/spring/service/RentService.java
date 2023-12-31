package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.RentDTO;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;


/**
 * @author : Chavindu
 * created : 10/28/2023-5:33 PM
 **/

public interface RentService {
    void rentCars(RentDTO dto);
    void updateRentCars(RentDTO dto);
    void rejectRentCars(RentDTO dto);
    CustomDTO getSumBookings();
    CustomDTO getSumOfPendingBookings();
    CustomDTO getSumOfActiveBookings();
    CustomDTO rentIdGenerate();
    ArrayList<RentDTO> getAllRent();
    void deleteRent(String id);
    RentDTO findRent(String id);
    ArrayList<RentDTO> getAcceptedRequest();
}
