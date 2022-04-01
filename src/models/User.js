import profilePhoto from "../assets/profile-photo.png";

export class User {
    constructor(name){
        this._name = name
        this._photo = profilePhoto
    }

    constructor(name, photo){
        this._name = name
        this._photo = photo
    }

    constructor(name, photo, password){
        this._name = name
        this._photo = photo
        this._password = password
    }

    get name() {
        return this._name;
    }

    get photo() {
        return this._photo;
    }

    set password(newPassword) {
        this._password = newPassword
    }
}