#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    char sen[1000];
    scanf("%[^\n]%*c", sen);
    int arr[10] = {0};

    for (int i = 0; i < strlen(sen); i++) {
        if (sen[i] >= '0' && sen[i] <= '9') {
            arr[sen[i] - '0']++;
        }
    }

    for (int i = 0; i < 10; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
