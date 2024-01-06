
export default class UserModel{
    constructor(name,email,password, types, id){
        this.name=name;
        this.email=email;
        this.password=password;
        this.types=types;
        this.id=id;
    }

    static signUp(name, email, password,types){
        const newSeller=new UserModel(name, email, password,types);
        newSeller.id= users.length + 1;
        users.push(newSeller);
        return newSeller;
    }

    static signIn(email, password){
        const user=users.find((u)=> u.email==email && u.password==password);

        return user;
    }

    static getAll(){
        return users;
    }
}

let users=[
    {
        id:1,
        name:"seller user",
        email:"seller@gmail.com",
        password:"password1",
        types:"seller"
    },
    {
        id:2,
        name:"customer user",
        email:"customer@gmail.com",
        password:"password1",
        types:"customer"
    }

]