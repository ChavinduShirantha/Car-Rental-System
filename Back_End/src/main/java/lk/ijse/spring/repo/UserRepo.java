package lk.ijse.spring.repo;

import lk.ijse.spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Chavindu
 * created : 10/25/2023-4:27 PM
 **/

public interface UserRepo extends JpaRepository<User,String> {
    @Query(value = "select * from User where user_Name=? AND password=? limit 1",nativeQuery = true)
    User findUser(String username, String password) throws RuntimeException;

    @Query(value = "SELECT COUNT(user_id) FROM User WHERE role_type='REGISTERED_USER'; ", nativeQuery = true)
    int getSumCustomers();
}
