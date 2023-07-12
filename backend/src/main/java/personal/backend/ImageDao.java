package personal.backend;

import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Repository;

@Repository
public class ImageDao implements Dao<My_Image> {

  private final Map<Long, My_Image> images = new HashMap<>();

  public ImageDao() {
    // placez une image test.jpg dans le dossier "src/main/resources" du projet
    final ClassPathResource imgFile = new ClassPathResource("images/cake.jpg");
    final ClassPathResource imgFile_2 = new ClassPathResource("images/love.png");

    byte[] fileContent;
    byte[] fileContent_2;

    try {

      fileContent = Files.readAllBytes(imgFile.getFile().toPath());
      My_Image img = new My_Image("cake.jpg", fileContent);

      fileContent_2 = Files.readAllBytes(imgFile_2.getFile().toPath());
      My_Image img_2 = new My_Image("love.png", fileContent_2);

      images.put(img.getId(), img);
      images.put(img_2.getId(), img_2);

    } catch (final IOException e) {
      e.printStackTrace();
    }
  }

  @Override
  public Optional<My_Image> retrieve(final long id) {
    return Optional.ofNullable(images.get(id));
  }

  @Override
  public List<My_Image> retrieveAll() {
    return new ArrayList<My_Image>(images.values());
  }

  @Override
  public void create(final My_Image img) {
    // TODO
  }

  @Override
  public void update(final My_Image img, final String[] params) {
    // Not used
  }

  @Override
  public void delete(final My_Image img) {
    // TODO
  }
}
