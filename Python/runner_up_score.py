if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    
    lis = list(arr)
    high = max(lis)
    while high == max(lis):
        lis.remove(max(lis))

    print(max(lis))
