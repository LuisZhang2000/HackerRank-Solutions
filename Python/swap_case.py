def swap_case(s):
    newString = ""
    for char in s:
        if char.isupper():
            newString += char.lower()
        else:
            newString += char.upper()
    return newString


if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)
