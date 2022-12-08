class studentName{
    constructor(Name,College,age,category){
        this.Name = Name;
        this.College = College;
        this.age = age;
        this.category = category;

    }
    FirstName(){
        return `${this.Name} from mp.`;
    }
    Mycollege(){
        return `${this.College} this is my College`;
    }
    Myage(){
        return `${this.age} This is my age`;
    }
    Mycategory(){
        return `${this.category} This is my category`;
    }
}
class couress extends studentName{
    constructor(Name,school,age,category,subjectName,Place){
        super(Name,age,school,category)
        this.subjectName = subjectName;
        this.Place = Place;
    }
    subject(){
        return `${this.Name} is studying ${this.subjectName}`;
    }
    state(){
        return `${this.Name} from ${this.Place} `;
    }
}
var user = new couress ( "Rani solanki",19,"Gov.PG College","sc","Software engineering","Morena mp")
console.log(user.FirstName())
console.log(user.Mycollege())
console.log(user.Myage())
console.log(user.Mycategory())
console.log(user.subject())
console.log (user.state())



