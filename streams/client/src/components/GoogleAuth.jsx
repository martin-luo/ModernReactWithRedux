import React, { Component } from "react";
import { connect } from "react-redux";

import { GOOGLE_OAUTH_CLIENT_ID } from "../credentials/clientID";
import { signIn, signOut } from "../actions";

class GoogleAuthComponent extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: GOOGLE_OAUTH_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.currentUser.get().getId());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton = () => {
    const { isSignedIn } = this.props;

    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className={"ui red google button"} onClick={this.auth.signOut}>
          <i className={"google icon"}></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className={"ui red google button"} onClick={this.auth.signIn}>
          <i className={"google icon"}></i>
          Sign In with Google
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  const { isSignedIn } = state.googleAuth;
  return { isSignedIn };
};

const GoogleAuth = connect(mapStateToProps, { signIn, signOut })(
  GoogleAuthComponent
);

export { GoogleAuth };
