class student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    age(){
        return `${this.name},is ${this.age} years old `
    }
    school(){
        return `${this.name} is going to school`
    }
    
}
class Tesla extends student{
    constructor(name,age,school,myhooby){
        super(name,age)
    }
    rutine(){
        return `${super.age()} is going to sleep`;
    }
    myhooby(){
        return `${super.school()} is goverment`
    }
}
function parameter(element){
    console.log(element)
}
const work = new Tesla('Rani solanki', '19');
parameter(work.age)
parameter(work.name)
parameter(work.myhooby());
parameter(work.rutine());
