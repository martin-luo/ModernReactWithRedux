import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Modal } from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDeleteComponent extends Component {
  componentDidMount() {
    const { fetchStream, streamId } = this.props;
    fetchStream(streamId);
  }

  renderActions = () => {
    const { streamId, deleteStream } = this.props;
    return (
      <>
        <button
          className={"ui button negative"}
          onClick={() => deleteStream(streamId)}
        >
          Delete
        </button>
        <Link to={"/"} className={"ui button"}>
          Cancel
        </Link>
      </>
    );
  };

  renderContent = () => {
    const { stream } = this.props;

    if (!stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete this stream with title: ${stream.title}?`;
    }
  };

  render() {
    return (
      <>
        <Modal
          title={"Delete The Stream"}
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id: streamId } = ownProps.match.params;

  return { streamId, stream: state.streams[streamId] };
};

const StreamDelete = connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDeleteComponent
);

export { StreamDelete };
