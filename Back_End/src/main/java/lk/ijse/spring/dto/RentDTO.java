package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

/**
 * @author : Chavindu
 * created : 10/28/2023-2:52 PM
 **/
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class RentDTO {
    private String rent_Id;
    private LocalDate pickUpDate;
    private LocalTime pickUpTime;
    private LocalDate returnDate;
    private LocalTime returnTime;
    private String requestType;
    private String rentType;
    private String location;
    private RegisterUserDTO regUser;
    private List<RentDetailsDTO> rentDetails;
}
