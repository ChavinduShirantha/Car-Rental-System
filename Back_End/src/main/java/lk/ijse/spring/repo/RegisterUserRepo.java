package lk.ijse.spring.repo;

import lk.ijse.spring.entity.RegisterUser;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Chavindu
 * created : 10/24/2023-2:34 PM
 **/

public interface RegisterUserRepo extends JpaRepository<RegisterUser,String> {
}
