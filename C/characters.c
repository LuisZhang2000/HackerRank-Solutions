#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    char ch;
    scanf("%c", &ch);
    printf("%c", ch);
      
    char s[100];
    scanf("%[^\n]%*c", s);
    printf("%[^\n]%*c", s);

    return 0;
}
