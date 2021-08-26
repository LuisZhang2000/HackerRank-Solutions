if __name__ == '__main__':
    N = int(input())
    lis = []
    for i in range(N):
        line = input().split()
        cmd = line[0]
        args = line[1:]
       
        if cmd == "insert":
            lis.insert(int(args[0]), int(args[1]))
            
        if cmd == "print":
            print(lis)
            
        if cmd == "remove":
            lis.remove(int(args[0]))
            
        if cmd == "append":
            lis.append(int(args[0]))
            
        if cmd == "sort":
            lis.sort()
            
        if cmd == "pop":
            lis.pop()
            
        if cmd == "reverse":
            lis.reverse()
        
        
