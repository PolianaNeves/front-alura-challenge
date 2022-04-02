import { Project } from "../models/Project";

export class ProjectDao {
    constructor(connection) {
        this._connection = connection;
        this._store = "projects";
    }

    adiciona(project) {
        return new Promise((resolve, reject) => {
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
                        project.name,
                        project.description,
                        project.codeSnippet,
                        project.language,
                        project.backgroundColor,
                        project.author
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
