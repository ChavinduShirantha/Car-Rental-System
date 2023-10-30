package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.embeded.Image;
import lk.ijse.spring.embeded.ImageDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author : Chavindu
 * created : 10/27/2023-12:16 PM
 **/

@Service
@Transactional
public class CarServiceImpl implements CarService {
    @Autowired
    CarRepo repo;
    @Autowired
    ModelMapper mapper;
    @Override
    public void saveCar(CarDTO dto) {
        Car car = new Car(dto.getRegNumber(), dto.getBrand(), dto.getModel(), dto.getType(), dto.getTransmission_type(), dto.getFuel_type(), new Image(), dto.getNoOfPassengers(), dto.getColor(), dto.getDaily_Rate(), dto.getMonthly_Rate(), dto.getPriceExtraKM(),dto.getFreeMileage(),dto.getVehicleAvailabilityType());
        if (repo.existsById(dto.getRegNumber()))
            throw new RuntimeException(dto.getRegNumber() + " is already available, please insert a new ID");

        try {
            String projectPath="D:\\Car_Rental_System\\Car_Rental_System";
            //String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            dto.getImage().getFront_view().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getImage().getFront_view().getOriginalFilename()));
            dto.getImage().getBack_view().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getImage().getBack_view().getOriginalFilename()));
            dto.getImage().getSide_view().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getImage().getSide_view().getOriginalFilename()));
            dto.getImage().getInterior_view().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getImage().getInterior_view().getOriginalFilename()));

            car.getImage().setFront_view("uploads/" + dto.getImage().getFront_view().getOriginalFilename());
            car.getImage().setBack_view("uploads/" + dto.getImage().getBack_view().getOriginalFilename());
            car.getImage().setSide_view("uploads/" + dto.getImage().getSide_view().getOriginalFilename());
            car.getImage().setInterior_view("uploads/" + dto.getImage().getInterior_view().getOriginalFilename());

            repo.save(car);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        System.out.println(car);

    }

    @Override
    public List<CarDTO> getAllCars() {
        List<Car> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<CarDTO>>() {
        }.getType());
    }

    @Override
    public CarDTO findCar(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id + " Car is not available, please check the ID.!");
        }
        Car car = repo.findById(id).get();
        return mapper.map(car, CarDTO.class);
    }

    @Override
    public void updateCar(CarDTO dto) {
        Car car = new Car(dto.getRegNumber(), dto.getBrand(), dto.getModel(), dto.getType(), dto.getTransmission_type(), dto.getFuel_type(), new Image(), dto.getNoOfPassengers(), dto.getColor(), dto.getDaily_Rate(), dto.getMonthly_Rate(), dto.getPriceExtraKM(),dto.getFreeMileage(),dto.getVehicleAvailabilityType());
        if (!repo.existsById(dto.getRegNumber()))
            throw new RuntimeException(dto.getRegNumber() + " is not available, please insert a new ID");

        try {
            String projectPath="D:\\Car_Rental_System\\Car_Rental_System";
            //String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            dto.getImage().getFront_view().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getImage().getFront_view().getOriginalFilename()));
            dto.getImage().getBack_view().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getImage().getBack_view().getOriginalFilename()));
            dto.getImage().getSide_view().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getImage().getSide_view().getOriginalFilename()));
            dto.getImage().getInterior_view().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getImage().getInterior_view().getOriginalFilename()));

            car.getImage().setFront_view("uploads/" + dto.getImage().getFront_view().getOriginalFilename());
            car.getImage().setBack_view("uploads/" + dto.getImage().getBack_view().getOriginalFilename());
            car.getImage().setSide_view("uploads/" + dto.getImage().getSide_view().getOriginalFilename());
            car.getImage().setInterior_view("uploads/" + dto.getImage().getInterior_view().getOriginalFilename());


        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        System.out.println(car);
        repo.save(car);
    }

    @Override
    public void deleteCar(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id + " Car is not available, please check the ID before delete.!");
        }
        repo.deleteById(id);
    }

    @Override
    public CustomDTO getSumCar() {
        return new CustomDTO(repo.getSumCar());
    }

    @Override
    public CustomDTO getSumOfAvailableCar() {
        return new CustomDTO(repo.getSumOfAvailableCar());
    }

    @Override
    public CustomDTO getSumOfUnAvailableCar() {
        return new CustomDTO(repo.getSumOfUnAvailableCar());
    }

    @Override
    public ArrayList<CarDTO> getFilerCar(String type, String fuel_type) {
        return mapper.map(repo.filterCar(type,fuel_type), new TypeToken<ArrayList<Car>>() {
        }.getType());
    }

    @Override
    public ArrayList<CarDTO> searchCar(String regNumber) {
        return mapper.map(repo.searchCar(regNumber), new TypeToken<ArrayList<Car>>() {
        }.getType());
    }
}
