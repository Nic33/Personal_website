package personal.backend;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
public class ImageController {

  @Autowired
  private ObjectMapper mapper;

  private final ImageDao imageDao;

  @Autowired
  public ImageController(ImageDao imageDao) {
    this.imageDao = imageDao;
  }

  @RequestMapping(value = "/images/{id}", method = RequestMethod.GET, produces = { MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE })
  public ResponseEntity<?> getImage(@PathVariable("id") long id) {
    
    Optional<My_Image> image = imageDao.retrieve(id);
  
    if (!image.isPresent()) {
      return new ResponseEntity<>("Image id = " + id + " not found.", HttpStatus.NOT_FOUND);
    }
  
    try{
      InputStream inputStream = new ByteArrayInputStream(image.get().getData());
  
      // Déterminez le type de contenu en fonction de l'extension du fichier
      MediaType contentType;
      if (image.get().getExtension().equals("png")) {
        contentType = MediaType.IMAGE_PNG;
      } else {
        contentType = MediaType.IMAGE_JPEG;
      }
  
      System.out.println("contentType = " + contentType);

      return ResponseEntity.ok()
          .contentType(contentType)
          .body(new InputStreamResource(inputStream));
  
    } catch (Exception e) {
      return new ResponseEntity<>("Internal server error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @RequestMapping(value = "/images", method = RequestMethod.GET, produces = "application/json")
  @ResponseBody
  public ArrayNode getImageList() {
    List<My_Image> images = imageDao.retrieveAll();
    ArrayNode nodes = mapper.createArrayNode();
    for (My_Image image : images) {
      ObjectNode objectNode = mapper.createObjectNode();
      objectNode.put("id", image.getId());
      objectNode.put("name", image.getName());
      nodes.add(objectNode);
    }
    return nodes;
  }

  @RequestMapping(value = "/images/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<?> deleteImage(@PathVariable("id") long id) {
    // TODO
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @RequestMapping(value = "/images", method = RequestMethod.POST)
  public ResponseEntity<?> addImage(@RequestParam("file") MultipartFile file,
      RedirectAttributes redirectAttributes) {
    // TODO
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
