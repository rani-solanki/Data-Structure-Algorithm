i=0
while(i<100):
    if i%3==0:
        print("nav")
    elif i%7==0:
        print("gurukul")
    elif i%3==0 and i%7==0:
        print("navgurkul")
    else:
        print(i)
    i=i+1