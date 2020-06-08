import React, { Component } from "react";
import { connect } from "react-redux";

import { createStream } from "../../actions";
import { StreamForm } from "./StreamForm";

class StreamCreateComponent extends Component {
  onSubmit = (formValues) => {
    console.log("formValues =", formValues);
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const StreamCreate = connect(null, { createStream })(StreamCreateComponent);

export { StreamCreate };
