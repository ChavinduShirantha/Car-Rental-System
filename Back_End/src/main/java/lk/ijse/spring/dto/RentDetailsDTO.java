package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Chavindu
 * created : 10/28/2023-2:51 PM
 **/
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class RentDetailsDTO {
    private String regNumber;
    private String rent_Id;
    private String driverID;
}
