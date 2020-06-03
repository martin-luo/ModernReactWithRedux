import memoize from "lodash.memoize";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const promise = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: promise.data });
};

export const fetchUser = (userId) => (dispatch) => _fetchUser(userId, dispatch);

/**
 * Use the lodash.memoize to make sure we do not make duplicate fetch calls.
 */
const _fetchUser = memoize(async (userId, dispatch) => {
  const promise = await jsonPlaceholder.get(`/users/${userId}`);

  dispatch({ type: "FETCH_USER", payload: promise.data });
});

/**
 * Alternativ way to get both posts and unique users from the API.
 *
 * @param {*} dispatch
 * @param {*} getState
 */
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await fetchPosts()(dispatch);

  Promise.all(
    [...new Set(getState().posts.map((post) => post.userId))].map((userId) =>
      jsonPlaceholder.get(`/users/${userId}`)
    )
  ).then((users) =>
    dispatch({ type: "FETCH_USERS", payload: users.map(({ data }) => data) })
  );
};
