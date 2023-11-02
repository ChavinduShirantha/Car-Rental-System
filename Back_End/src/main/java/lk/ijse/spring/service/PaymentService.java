package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.PaymentDTO;
import lk.ijse.spring.dto.RentDTO;

import java.util.ArrayList;

/**
 * @author : Chavindu
 * created : 11/2/2023-12:21 PM
 **/

public interface PaymentService {
    void savePayment(PaymentDTO dto);
    CustomDTO paymentIdGenerate();
    ArrayList<PaymentDTO> getAllPayments();
}
