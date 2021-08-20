import java.util.Scanner;

public class Solution {

    static boolean isAnagram(String a, String b) {
        int a_len = a.length();
        int b_len = b.length();

        if (a_len != b_len) return false;

        a = a.toLowerCase();
        b = b.toLowerCase();

        int[] char_frequencies = new int[26];

        for (int i = 0; i < a_len; i++) {
            char current_char = a.charAt(i);
            int index = current_char - 'a';
            char_frequencies[index]++;
        }

        for (int i = 0; i < b_len; i++) {
            char current_char = b.charAt(i);
            int index = current_char - 'a';
            char_frequencies[index]--;
        }

        for (int i = 0; i < 26; i++) {
            if (char_frequencies[i] != 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
    
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}
