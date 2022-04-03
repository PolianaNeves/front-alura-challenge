import { Project } from "../models/Project";

export class ProjectDao {
  constructor(connection) {
    this._connection = connection;
    this._store = "projects";
  }

  adiciona(project) {
    return new Promise((resolve, reject) => {
      this.getByName(project._name).then((result) => {
        if (result === -1) {
          let request = this._connection
            .transaction([this._store], "readwrite")
            .objectStore(this._store)
            .add(project);

          request.onsuccess = (event) => {
            resolve();
          };

          request.onerror = (event) => {
            console.log(event.target.error);
            reject("Não foi possível adicionar o projeto.");
          };
        } else {
          resolve("O projeto já existe!");
        }
      });
    });
  }

  getByName(projectName) {
    return new Promise((resolve, reject) => {
      var request = this._connection
        .transaction([this._store], "readonly")
        .objectStore(this._store)
        .get(projectName);

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

  listaTodos() {
    return new Promise((resolve, reject) => {
      let cursor = this._connection
        .transaction([this._store], "readwrite")
        .objectStore(this._store)
        .openCursor();
      let projects = [];

      cursor.onsuccess = (event) => {
        let atual = event.target.result;

        if (!atual) {
          resolve(projects);
          return;
        }

        var project = atual.value;
        projects.push(
          new Project(
            project._name,
            project._description,
            project._codeSnippet,
            project._language,
            project._backgroundColor,
            project._author
          )
        );
        atual.continue();
      };

      cursor.onerror = (event) => {
        console.log(event.target.error);
        reject("Não foi possível obter os projetos");
      };
    });
  }
}
