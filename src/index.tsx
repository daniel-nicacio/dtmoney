import React from "react";
import ReactDOM from "react-dom/client";
import { Model, createServer } from "miragejs";

import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date('2023-02-12 09:00:00'),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createdAt: new Date('2023-02-14 11:00:00'),
        },
      ],
    });
  },
  routes() {
    // rotas da api fictícia
    this.namespace = "api"; // o mirage irá capitar todas as chamadas que tiverem o /api como chamadas que devem ser direcionadas para ele

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
