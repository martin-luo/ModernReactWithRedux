import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeaderComponent extends Component {
  componentDidMount() {
    // const { userId, fetchUser } = this.props;
    // fetchUser(userId);
  }

  render() {
    console.log("this.props =", this.props);
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className={"header"}>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state.users =", state.users);

  return {
    user: state.users.find(({ id }) => id === ownProps.userId),
  };
};

const UserHeader = connect(mapStateToProps, { fetchUser })(UserHeaderComponent);

export { UserHeader };
