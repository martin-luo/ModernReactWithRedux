import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import flv from "flv.js";

import { fetchStream } from "../../actions";

class StreamShowComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
  }

  componentDidMount() {
    const { fetchStream, streamId } = this.props;

    fetchStream(streamId);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { streamId } = this.props;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${streamId}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = stream;

    return (
      <div>
        <video controls ref={this.videoRef} style={{ width: "100%" }} />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id: streamId } = ownProps.match.params;

  return { streamId, stream: state.streams[streamId] };
};
const StreamShow = connect(mapStateToProps, { fetchStream })(
  StreamShowComponent
);

export { StreamShow };
