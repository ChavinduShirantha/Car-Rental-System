package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * @author : Chavindu
 * created : 10/24/2023-2:31 PM
 **/
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RegisterUser {
    @Id
    private String user_Id;
    private String firstName;
    private String lastName;
    private String contact_No;
    private String address;
    private String email;
    private String nic;
    private String nic_Img;
    private String license_No;
    private String license_Img;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;
}
