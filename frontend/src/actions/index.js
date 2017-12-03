import * as ServerAPI from '../utils/api'

//export const ADD_POST = 'ADD_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
export const POST_BY_CATEGORY = 'POST_BY_CATEGORY'
//export const EDIT_POST = 'EDIT_POST'
//export const DELETE_POST = 'DELETE_POST'
/*
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const UPDATE_VOTESCORE = 'UPDATE_VOTESCORE'
*/
export const receivePost = posts => ({
  type: RECEIVE_POST,
  posts
})

export const fetchPosts = () => dispatch => (
  ServerAPI.getAllPosts().then(post => dispatch(receivePost(post)))
)

export const actionPostByCategory = postByCategory => ({
  type: POST_BY_CATEGORY,
  postByCategory
})

export const fetchPostByCategory = (value) => dispatch => (
  ServerAPI.getPostByCategory(value).then(category => dispatch(actionPostByCategory(category)))
)

/*
export function addPost ({ id, body, author, title, category }) {
  return {
    type: ADD_POST,
    id,
    body,
    author,
    title,
    category
  }
}

export function editPost ({ id, body, author, title, category }) {
  return {
    type: EDIT_POST,
    id,
    body,
    author,
    title,
    category
  }
}

export function deletePost ({ id, deleted }) {
  return {
    type: DELETE_POST,
    id,
    deleted
  }
}

export function addComment ({ parentId, body, author, title, category }) {
  return {
    type: ADD_COMMENT,
    parentId,
    body,
    author,
    title,
    category
  }
}

export function editComment ({ parentId, body, author, title, category }) {
  return {
    type: EDIT_COMMENT,
    parentId,
    body,
    author,
    title,
    category
  }
}

export function deleteComment ({ parentId, deleted }) {
  return {
    type: DELETE_COMMENT,
    parentId,
    deleted
  }
}

export function updateVoteScore ({ id, voteScore }) {
  return {
    type: UPDATE_VOTESCORE,
    id,
    voteScore
  }
}*/