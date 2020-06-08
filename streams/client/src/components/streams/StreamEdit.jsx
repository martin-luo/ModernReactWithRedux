import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStream, editStream } from "../../actions";
import { StreamForm } from "./StreamForm";

class StreamEditComponent extends Component {
  componentDidMount() {
    const { fetchStream, streamId } = this.props;
    fetchStream(streamId);
  }

  onSubmit = (formValues) => {
    console.log("formValues =", formValues);
    const { streamId, editStream } = this.props;
    editStream(streamId, formValues);
  };

  render() {
    console.log(" In StreamEdit, this.props =", this.props);
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = stream;

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{ title, description }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id: streamId } = ownProps.match.params;

  return { streamId, stream: state.streams[streamId] };
};

const StreamEdit = connect(mapStateToProps, { fetchStream, editStream })(
  StreamEditComponent
);

export { StreamEdit };
