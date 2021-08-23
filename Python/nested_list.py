if __name__ == '__main__':
    
    students = []
    scores = set()
    res = []
    n = int(input())
    
    for _ in range(n):
        name = input()
        score = float(input())
        students.append([name, score])
        scores.add(score)
     
    # second_lowest = the second lowest score
    second_lowest = sorted(scores)[1]
    
    # store student(s) with the second lowest score in res array
    for name, score in students:
        if score == second_lowest:
            res.append(name)
            
    for name in sorted(res):
        print(name, end='\n')
    
    
