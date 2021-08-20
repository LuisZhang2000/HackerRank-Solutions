#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

char *convert(int i) {

    char *str;
    if (i == 0) str = "zero";
    else if (i == 1) str = "one";
    else if (i == 2) str = "two";
    else if (i == 3) str = "three";
    else if (i == 4) str = "four";
    else if (i == 5) str = "five";
    else if (i == 6) str = "six";
    else if (i == 7) str = "seven";
    else if (i == 8) str = "eight";
    else if (i == 9) str = "nine";
    else if (i % 2 == 0) str = "even";
    else str = "odd";

    return str;
}

int main() 
{
    int a, b;
    scanf("%d\n%d", &a, &b);
  	
    for (int i = a; i < b+1; i++) {
        printf("%s\n", convert(i));
    }

    return 0;
}

