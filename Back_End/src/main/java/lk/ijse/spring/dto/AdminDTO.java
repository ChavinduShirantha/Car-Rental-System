package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author : Chavindu
 * created : 10/27/2023-8:51 AM
 **/
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AdminDTO {
    private String user_Id;
    private String firstName;
    private String lastName;
    private String contact_No;
    private String address;
    private String email;
    private String nic;

    private UserDTO user;
}
