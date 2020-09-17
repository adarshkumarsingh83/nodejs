class User {
    constructor(id, name, email) {

        this.id = id;
        this.name = name;
        this.email = email;

        function display() {
            return `{"id":${id},"name":${name},"email":${email}}`;
        }
    }
}

export default User;