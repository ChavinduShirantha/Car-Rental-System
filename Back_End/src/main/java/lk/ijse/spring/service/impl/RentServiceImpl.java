package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.RentDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Rent;
import lk.ijse.spring.entity.RentDetails;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.repo.RentRepo;
import lk.ijse.spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;


/**
 * @author : Chavindu
 * created : 10/28/2023-5:33 PM
 **/
@Service
@Transactional
public class RentServiceImpl implements RentService {
    @Autowired
    RentRepo rentRepo;
    @Autowired
    ModelMapper mapper;
    @Autowired
    DriverRepo driverRepo;
    @Autowired
    CarRepo carRepo;

    @Override
    public void rentCars(RentDTO dto) {
        Rent rent = mapper.map(dto, Rent.class);

        if (rentRepo.existsById(dto.getRent_Id())) {
            throw new RuntimeException(dto.getRent_Id() + " is already available, please insert a new ID");
        }

        if (dto.getRequestType().equals("YES")) {
            for (RentDetails rentDetails : rent.getRentDetails()) {
                Car car = carRepo.findById(rentDetails.getRegNumber()).get();
                car.setVehicleAvailabilityType("UNAVAILABLE");
                carRepo.save(car);

                Driver driver=driverRepo.findById(rentDetails.getDriverID()).get();
                driver.setAvailability("UNAVAILABLE");
                driverRepo.save(driver);
            }
        } else if (dto.getRequestType().equals("NO")) {
            for (RentDetails rentDetails : rent.getRentDetails()) {
                Car car = carRepo.findById(rentDetails.getRegNumber()).get();
                car.setVehicleAvailabilityType("UNAVAILABLE");
                carRepo.save(car);
            }
        }

        rentRepo.save(rent);
    }

    @Override
    public CustomDTO getSumBookings() {
        return new CustomDTO(rentRepo.getSumBookings());
    }

    @Override
    public CustomDTO getSumOfPendingBookings() {
        return new CustomDTO(rentRepo.getSumOfPendingBookings());
    }

    @Override
    public CustomDTO getSumOfActiveBookings() {
        return new CustomDTO(rentRepo.getSumOfActiveBookings());
    }

    @Override
    public CustomDTO rentIdGenerate() {
        return new CustomDTO(rentRepo.getLastID());
    }

    @Override
    public ArrayList<RentDTO> getAllRent() {
        return mapper.map(rentRepo.findAll(), new TypeToken<ArrayList<RentDTO>>() {
        }.getType());
    }

    @Override
    public void deleteRent(String id) {
        if (!rentRepo.existsById(id)) {
            throw new RuntimeException(id + " Rent is not available, please check the ID before delete.!");
        }
        rentRepo.deleteById(id);
    }

    @Override
    public RentDTO findRent(String id) {
        if (!rentRepo.existsById(id)) {
            throw new RuntimeException(id + " Rent is not available, please check the ID.!");
        }
        Rent rent = rentRepo.findById(id).get();
        return mapper.map(rent, RentDTO.class);
    }
}
