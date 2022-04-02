export class UserDao {
    constructor(connection) {
        this._connection = connection;
        this._store = "users";
    }

    adiciona(user) {
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .add(user);

            request.onsuccess = (event) => {
                resolve();
            };

            request.onerror = (event) => {
                console.log(event.target.error);
                reject("Não foi possível adicionar o usuário.");
            };
        });
    }
}
