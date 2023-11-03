package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.PaymentDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Payment;
import lk.ijse.spring.repo.PaymentRepo;
import lk.ijse.spring.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * @author : Chavindu
 * created : 11/2/2023-12:21 PM
 **/
@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    PaymentRepo repo;
    @Autowired
    ModelMapper mapper;
    @Override
    public void savePayment(PaymentDTO dto) {
        Payment payment = mapper.map(dto, Payment.class);
        if (repo.existsById(dto.getPayment_Id())) {
            throw new RuntimeException(dto.getPayment_Id() + " is already available, please insert a new ID");
        }

        System.out.println(payment);
        repo.save(payment);
    }

    @Override
    public CustomDTO paymentIdGenerate() {
        return new CustomDTO(repo.getLastID());
    }

    @Override
    public ArrayList<PaymentDTO> getAllPayments() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<PaymentDTO>>() {
        }.getType());
    }
}
