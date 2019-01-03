const ADMIN = 'ADMIN';
const USER = 'USER';

export default class Profile{
    constructor(name, email, password){
        this.role = USER;
        this.name = name;
        this.email = email;
        this.password = password;
        this.subscriptions = [];
    }

    getRole = () => {
        return this.role;
    }
    getEmail = () => {
        return this.email;
    }

    getName = () => {
        return this.name;
    }
    getPassword = () => {
        return this.password;
    }

    setEmail = (email) => {
        this.email = email;
    }

    setName = (value) => {
        this.name = value;
    }

    setPassword = (array) => {
        this.password = array;
    }

    getSubscriptions = () => {
        return this.subscriptions;
    }
    addSubscription = (sub) =>{
        this.getSubscriptions().push(sub);
    }

    copyObj = (obj) => {
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.subscriptions = obj.subscriptions;
    };


    setAdmin = () => {
        this.role = ADMIN;
    };
 
}