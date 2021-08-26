# Enter your code here. Read input from STDIN. Print output to STDOUT

N, M = map(int, input().split())

# for every odd i from 1 to N, print out i no. of .|. patterns, center it between hyphons where the length of the row is M
for i in range(1, N, 2): 
    print(''.join(['.|.'] * i).center(M, '-'))
    
print(''.join(['WELCOME']).center(M, '-'))

# for every odd i from N-2 to -1, print out i no. of .|. patterns, center it between hyphons where the length of the row is M
for i in range(N - 2, -1, -2): 
    print(''.join(['.|.'] * i).center(M, '-'))
