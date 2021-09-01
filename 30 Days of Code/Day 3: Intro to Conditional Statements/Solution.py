#!/bin/python3

import math
import os
import random
import re
import sys

# If  is odd, print Weird
# If  is even and in the inclusive range of  to , print Not Weird
# If  is even and in the inclusive range of  to , print Weird
# If  is even and greater than , print Not Weird

if __name__ == '__main__':
    N = int(input().strip())

    if (N % 2 == 1):
        print("Weird")
    else:
        if (N >=2 and N <= 5):
            print("Not Weird")
        elif (N >=6 and N <= 20):
            print("Weird")  
        elif (N > 20):
            print("Not Weird")
        
            
