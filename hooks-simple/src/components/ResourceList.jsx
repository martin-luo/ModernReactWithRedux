import React, { useState, useEffect } from "react";

import { resourceAPI } from "../apis/resource";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await resourceAPI.get(resource);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);

    /*
     * This also works to bypass the limitation that useEffect callback cannot
     * be asynchronous.
     */
    // (async (resource) => {
    //   const response = await resourceAPI.get(resource);
    //   setResources(response.data);
    // })(resource);
  }, [resource]);

  return (
    <div>
      {resource}
      <div>{resources.length}</div>
    </div>
  );
};

export { ResourceList };
