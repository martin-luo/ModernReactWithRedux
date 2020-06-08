import React, { useState, useEffect } from "react";

import { ResourceList } from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className={"ui container"}>
      <div>
        <button className={"ui button"} onClick={() => setResource("posts")}>
          Posts
        </button>
        <button className={"ui button"} onClick={() => setResource("todos")}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export { App };
