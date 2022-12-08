weight=int(input("enter the number"))
i=0
sum=0
while(i<=weight):
    user=int(input("enter the weight"))
    sum=sum+user
    i=i+1
print(sum)
if sum%5:
    print("yes")
else:
    print("no")