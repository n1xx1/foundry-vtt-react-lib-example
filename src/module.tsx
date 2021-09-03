import React, { useEffect, useState } from "react";
import { ApplicationReact } from "react-foundry";

export function testApp() {
  new ApplicationReact({
    id: "example-counter-application",
    title: "Counter",
    width: 400,
    height: 400,
    resizable: true,
    component({ data, application }) {
      const [counter, setCounter] = useState(0);

      useEffect(() => {
        setInterval(() => setCounter((v) => v + 1), 1000);
      }, []);

      useEffect(() => {
        console.log("DATA CHANGED: ", data);
      }, [data]);

      return (
        <>
          <h1>Hello World!</h1>
          <p>Counting: {counter}</p>
          <button onClick={() => application.close()}>Close</button>
        </>
      );
    },
  }).render(true);
}

Hooks.once("init", () => {
  testApp();
});
