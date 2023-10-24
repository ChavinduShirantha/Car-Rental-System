package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Chavindu
 * created : 10/24/2023-2:14 PM
 **/
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDTO {
    private String user_Id;
    private String role_Type;
    private String user_Name;
    private String password;
}
