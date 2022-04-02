export var ConnectionFactory = (function () {
    const stores = ["users", "projects"];
    const version = 1;
    const dbName = "front-alura-challenge";
    var connection = null;
    var close = null;

    return class ConnectionFactory {
        constructor() {
            throw new Error(
                "Não é possível criar instâncias de ConnectionFactory."
            );
        }

        static getConnection() {
            return new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open(dbName, version);
                openRequest.onupgradeneeded = (event) => {
                    ConnectionFactory._createStores(event.target.result);
                };

                openRequest.onsuccess = (event) => {
                    if (!connection) {
                        connection = event.target.result;
                        close = connection.close.bind(connection);
                        connection.close = function () {
                            throw new Error(
                                "A conexão não pode ser encerrada diretamente."
                            );
                        };
                    }
                    resolve(connection);
                };

                openRequest.onerror = (event) => {
                    console.log(event.target.error);
                    reject(event.target.error.name);
                };
            });
        }

        static _createStores(connection) {
            stores.forEach((store) => {
                if (connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);

                connection.createObjectStore(store, {
                    autoIncrement: true,
                });
            });
        }

        static _closeConnection() {
            if (connection) {
                close();
                connection = null;
            }
        }
    };
})();
