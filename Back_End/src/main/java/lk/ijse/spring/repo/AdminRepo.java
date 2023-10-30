package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Chavindu
 * created : 10/27/2023-8:56 AM
 **/

public interface AdminRepo extends JpaRepository<Admin,String> {
    @Query(value = "SELECT user_Id FROM Admin ORDER BY user_Id DESC LIMIT 1", nativeQuery = true)
    String getLastID();
}
