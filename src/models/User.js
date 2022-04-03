import profilePhoto from "../assets/profile-photo.png";

export class User {

    constructor(name, photo){
        this._name = name
        this._photo = photo ? photo : profilePhoto
    }

    get name() {
        return this._name;
    }

    get photo() {
        return this._photo;
    }
}