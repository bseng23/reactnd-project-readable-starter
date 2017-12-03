import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import addPostIcon from '../icons/add-icon.png';
import backArrow from '../icons/back-arrow.png'

class DetailPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data',
    }
  }

  //componentDidMount () {
  //  var message = this.props.location.state.testprop
 //   console.log(message)
 // }




  render() {
    //console.log('Detail Page', this.props.location.state.testprop)
    return (
      <div>
        <div className="detailpost-header">
          <h2>Category: Title (id)</h2>
        </div>
        <div className="detail-page-section">
          <Link to={{pathname: "/"}}>
            <img className="back-button" src={backArrow} alt="<-" />
          </Link>
          <div className="back-button-text">
            Back to Main Page
          </div>


        </div>
        <div className="detailpost-body-vote-row">
          <label className="textarea-title">
            Post
          </label>
          <textarea className="detailpost-textarea" 
          value="Post"
          maxLength="2000"
          rows="5"
           />
          <div className="detailpost-vote">
            <p className="author-timestamp-text"> Submitted by Borey on September 23, 2985</p>
            <p className="vote-text">+ Vote Score -</p>
            <button className="edit-button">Edit Post</button>
            <button>Delete Post</button>
          </div>
        </div>
        <div className="detailpost-maxcharacter">Maximum Characters: 2000</div>
        <hr className="detailpost-hr"/>

        <div className="add-comment-section">
          <Link to="/">
          <img className="add-post-icon" src={addPostIcon} alt="+" width="50px" />
          </Link>
          <div className="add-post-text">
            Add Comment
          </div>
        </div>
        <label className="textarea-title">
          Comments
        </label>
        <textarea className="detailpost-textarea" 
        value="Comment Body (highest voted comment first)"
        maxLength="2000"
        rows="5">
        </textarea>
          <div className="detailpost-vote">
          <p className="author-timestamp-text"> Submitted by Borey on September 23, 2985</p>
          <p className="vote-text">+ Vote Score -</p>
          <button className="edit-button">Edit 'Comment'</button>
          <button>Delete 'Comment'</button>
          </div>

          
          
  
      </div>      
    );
  }
}

export default DetailPost;
