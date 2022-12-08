a=int(input("enter the number"))
b=int(input("enetr th number"))
i=1
c=0
while(i<=b):
    if a%i==0 and b%i==0:
        c=i
    i=i+1
print("hcf",c)