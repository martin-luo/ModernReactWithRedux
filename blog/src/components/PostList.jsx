import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts, fetchPostsAndUsers } from "../actions";
import { UserHeader } from "./UserHeader";

class PostListComponent extends Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  render() {
    console.log("In PostList, this.props =", this.props);

    const { posts } = this.props;

    return (
      <div className={"ui relaxed divided list"}>
        {posts.map((post) => (
          <div className={"item"} key={post.id}>
            <i className={"large middle aligned icon user"} />
            <div className={"content"}>
              <div className={"description"}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

const PostList = connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
  PostListComponent
);

export { PostList };
