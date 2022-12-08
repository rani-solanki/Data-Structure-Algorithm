index=0
sum=0
num=0
while(index<=10):
    if index % 2==0:
        sum=sum+index
    else:
        num=num+index
    index=index+1
print("sum of even numbers",sum)
print("sum of odd numbers",num)