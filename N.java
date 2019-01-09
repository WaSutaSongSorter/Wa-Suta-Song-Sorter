import java.io.*;

public class N
{
    public static void main(String[] args)
    {
        final StringBuilder sb = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new FileReader(new File("src/main/resources/cringe.txt"))))
        {
            br.lines().forEach( s -> {
                sb.append("[1, \"" + s + "\", [0,0,0,0,1,0,0,0], \"wasuta/galbi.png\"],").append("\n");
            });
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        System.out.println(sb.toString());
    }
}
