class User {

    public id: String;
    public name: String;
    public email: String;
    
    constructor(id: String, name: String, email: String){
       this.id = id;
       this.name = name;
       this.email = email;
    }
};

export { User };