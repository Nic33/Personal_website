package personal.backend;

public class My_Image {

  private static Long count = Long.valueOf(0);
  private Long id;
  private String name;
  private byte[] data;

  public My_Image(final String name, final byte[] data) {
    id = count++;
    this.name = name;
    this.data = data;
  }

  public long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(final String name) {
    this.name = name;
  }

  public byte[] getData() {
    return data;
  }
  
  public String getExtension() {
    int dotIndex = name.lastIndexOf(".");
    if (dotIndex > 0 && dotIndex < name.length() - 1) {
      return name.substring(dotIndex + 1).toLowerCase();
    }
    return "";
  }
}
