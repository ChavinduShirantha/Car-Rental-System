package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomDTO;
import lk.ijse.spring.dto.PaymentDTO;
import lk.ijse.spring.service.PaymentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Chavindu
 * created : 11/2/2023-12:27 PM
 **/
@RestController
@CrossOrigin
@RequestMapping("/payment")
public class PaymentController {
    @Autowired
    PaymentService service;

    @PostMapping
    public ResponseUtil savePayment(@RequestBody PaymentDTO dto) {
        System.out.println(dto);
        service.savePayment(dto);
        return new ResponseUtil("OK", "Successfully Payment.!", null);
    }

    @GetMapping(path = "/paymentIdGenerate")
    public CustomDTO paymentIdGenerate() {
        return service.paymentIdGenerate();
    }

    @GetMapping
    public ResponseUtil getAllPayments() {
        return new ResponseUtil("OK", "Successfully Loaded. :", service.getAllPayments());
    }

}
