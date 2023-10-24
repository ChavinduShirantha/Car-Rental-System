package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : Chavindu
 * created : 10/24/2023-2:14 PM
 **/
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {
    @Id
    private String user_Id;
    private String role_Type;
    private String user_Name;
    private String password;
}
