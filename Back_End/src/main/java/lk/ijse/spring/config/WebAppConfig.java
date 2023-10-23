package lk.ijse.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author : Chavindu
 * created : 10/22/2023-11:17 AM
 **/
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"lk.ijse.spring.controller","lk.ijse.spring.advisor"})
public class WebAppConfig {
    public WebAppConfig() {
        System.out.println("WebAppConfig Instantiate");
    }
}
