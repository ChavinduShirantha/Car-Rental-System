package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Chavindu
 * created : 10/27/2023-8:56 AM
 **/

public interface AdminRepo extends JpaRepository<Admin,String> {
}
