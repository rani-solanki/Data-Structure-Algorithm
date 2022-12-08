weight=int(input("enter the weight"))
i=0
sum=0
while(i<=weight):
    user=int(input("enter the number"))
    sum=sum+1
print(sum)
if (sum % 5):
    print("yes")
else:
    print("no")
