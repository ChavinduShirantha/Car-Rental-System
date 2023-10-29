package lk.ijse.spring.embeded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Embeddable;

/**
 * @author : Chavindu
 * created : 10/29/2023-6:44 PM
 **/
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ImageDTO {
    private MultipartFile front_view;
    private MultipartFile back_view;
    private MultipartFile side_view;
    private MultipartFile interior_view;
}
