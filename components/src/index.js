// Import React and ReactDOM libraries.
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import { CommentDetails } from "./CommentDetails";
import { ApprovalCard } from "./ApprovalCard";

// Create a React component.
const App = () => (
  <div className={"ui container comments"}>
    <ApprovalCard>
      <CommentDetails
        author={faker.name.findName()}
        avatar={faker.image.avatar()}
        timeAgo={faker.date.past().toLocaleDateString()}
        content={faker.lorem.text()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetails
        author={faker.name.findName()}
        avatar={faker.image.avatar()}
        timeAgo={faker.date.past().toLocaleDateString()}
        content={faker.lorem.text()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetails
        author={faker.name.findName()}
        avatar={faker.image.avatar()}
        timeAgo={faker.date.past().toLocaleDateString()}
        content={faker.lorem.text()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetails
        author={faker.name.findName()}
        avatar={faker.image.avatar()}
        timeAgo={faker.date.past().toLocaleDateString()}
        content={faker.lorem.text()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetails
        author={faker.name.findName()}
        avatar={faker.image.avatar()}
        timeAgo={faker.date.past().toLocaleDateString()}
        content={faker.lorem.text()}
      />
    </ApprovalCard>
  </div>
);

// Take the React component and show it on the screen.
ReactDOM.render(<App />, document.querySelector("#root"));
