export class UserDao {
  constructor(connection) {
    this._connection = connection;
    this._store = "users";
  }

  adiciona(user) {
    return new Promise((resolve, reject) => {
      this.getByName(user._name).then((result) => {
        if (result === -1) {
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
        } else {
          resolve("O usuário já existe!");
        }
      });
    });
  }

  getByName(userName) {
    return new Promise((resolve, reject) => {
      var request = this._connection
        .transaction([this._store], "readonly")
        .objectStore(this._store)
        .get(userName);

      request.onsuccess = () => {
        let result = request.result ? request.result : -1;
        resolve(result);
      };
      request.onerror = (event) => {
        console.error(event.target.error);
        reject(event.target.error.name);
      };
    });
  }
  
  getFirstUser() {
    return new Promise((resolve, reject) => {
      let cursor = this._connection
        .transaction([this._store], "readwrite")
        .objectStore(this._store)
        .openCursor();

      cursor.onsuccess = (event) => {
        let cursorUser = event.target.result;
        if(cursorUser)
          resolve(cursorUser.value);
      };

      cursor.onerror = (event) => {
        console.log(event.target.error);
        reject("Não foi possível obter o usuário");
      };
    });
  }
}
