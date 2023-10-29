package lk.ijse.spring.embeded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Embeddable;

/**
 * @author : Chavindu
 * created : 10/29/2023-6:43 PM
 **/

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Image {
    private String front_view;
    private String back_view;
    private String side_view;
    private String interior_view;
}
