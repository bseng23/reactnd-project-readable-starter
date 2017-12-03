import React, { Component } from 'react';
import addPostIcon from './icons/add-icon.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { capitalize } from './utils/capitalize'
import plusIcon from './icons/plus.png'
import minusIcon from './icons/minus.png'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'
//import * as ServerAPI from './utils/api'
import { connect } from 'react-redux'


class MainPage extends Component {
  state = {
    addPostModalOpen: false,
    //posts: []
    
  }

  /*convertDate(time) {
    var convertedTime = new Date(time*1000)
  }*/

  openAddPostModal() {
    this.setState(() => ({
      addPostModalOpen: true,
    }))
  }

  closeAddPostModal() {
    this.setState(() => ({
      addPostModalOpen: false,
    }))
  }

  filterPost(value) {
    switch(value) {
      case 'react':
      this.setState((post) => ({
        sortedPosts: post.posts.filter(function (cat) {
          return cat.category === 'react'
        })
      }))
      console.log('Sorted Post', this.state.sortedPosts)
    }
  }

  sortPost (value) {
    switch(value) {
      case 'highestVotes':
      this.setState({posts: this.state.posts.sort(function(a, b){return b.voteScore-a.voteScore})});
      break;

      case 'lowestVotes':
      this.setState({posts: this.state.posts.sort(function(a, b){return a.voteScore-b.voteScore})});
      break;

      case 'latestPost':
      this.setState({posts: this.state.posts.sort(function(a, b){return b.timestamp-a.timestamp})});
      break;

      case 'oldestPost':
      this.setState({posts: this.state.posts.sort(function(a, b){return a.timestamp-b.timestamp})});
      break;

      default:
      this.setState({ updatedPosts: this.props.posts})
    }
  }

  /*sortPost(value) {
    switch(value) {
      case 'react':
      var sortedPost = this.state.posts.filter(function (cat) {
        return cat.category = 'react'
      })      
      this.setState(() => ({ posts: sortedPost}))
      console.log('Sorted Posts', this.state.posts)
    }
  }*/
  
  static propTypes = {
    //categories: PropTypes.array.isRequired,
    //posts: PropTypes.array.isRequired
  }

  /*
  componentDidMount() {
    ServerAPI.getAllPosts().then((posts) => {
      posts.sort(function(a, b){return b.voteScore-a.voteScore})
      this.setState({posts})
    })
  }
  */

  render() {
    const { categories, dateConvert, posts } = this.props
    const { addPostModalOpen,  } = this.state

    console.log('Action', posts)

    
    
    return (
      <div className="app">
        <div className="app-header">
          <h2>Welcome to the Udacity Readable Project!</h2>
        </div>
        <div className="row-filter-sort">
          <div className="column-filter-sort">
            <p className="text-filter-sort">
              Filter By Category:
            </p>
          </div>
          <div className="column-filter-sort">
          <div className="select-format">
            <select onChange={(event) => this.filterPost(event.target.value)}>
              <option value="allCategories" selected>All Categories</option>
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
          </div>
          </div>
          <div className="column-filter-sort">
            <p className="text-filter-sort">
              Sort Posts By:
            </p>
          </div>
          <div className="column-filter-sort">
          <div className="select-format">
            <select onChange={(event) => this.sortPost(event.target.value)}>
              <option value="highestVotes" selected>Highest Votes First</option>
              <option value="lowestVotes">Lowest Votes First</option>
              <option value="latestPost">Latest Post First</option>
              <option value="oldestPost">Oldest Post First</option>
            </select>
          </div>
          </div>
        </div>
        <hr className="detailpost-hr"/>
        <div className="add-post-section">
          <img className="add-post-icon" src={addPostIcon} alt="+" width="50px"
          onClick={() => this.openAddPostModal()}/>
          <div className="add-post-text">
            Add Post
          </div>
        </div>
        
          <label className="textarea-title">
            Posts
          </label>

          <ol>
          {posts.map((post) => (
            <li className="post-style" key={post.id}>
              <div>
                <Link to={{pathname: "/detailpost", state: {testprop: 'test'} }} >
                {post.title}
                
                </Link>
              </div>
              <div>
                by: {post.author}
              </div>
              <div className="date-text-style">
                on {post.timestamp}
              </div>
              <div className="category-text-style">
                Category: {capitalize(post.category)}
              </div>
              <div className="comment-text-style">
                {post.commentCount === 1 ? post.commentCount + ' comment' : post.commentCount + ' comments'}
              </div>
              <div className="vote-text-style">
                <img className="plus-icon-style" src={plusIcon} />
                {post.voteScore}
                <img className="minus-icon-style" src={minusIcon} />
              </div>
            </li>
          ))}
          </ol>

          <ol>
            {posts === undefined ? this.getComments() :
            posts.map((post) => (
              <li className="post-style" key={post.id}>
                <div>
                  <Link to={{pathname: "/detailpost", state: {testprop: 'test'} }} >
                  {post.title}
                  </Link>
                </div>
                <div>
                  by: {post.author}
                </div>
                <div className="date-text-style">
                  on {post.timestamp}
                </div>
                <div className="category-text-style">
                  Category: {capitalize(post.category)}
                </div>
                <div className="comment-text-style">
                  {post.commentCount === 1 ? post.commentCount + ' comment' : post.commentCount + ' comments'}
                </div>
                <div className="vote-text-style">
                  <img className="plus-icon-style" src={plusIcon} />
                  {post.voteScore}
                  <img className="minus-icon-style" src={minusIcon} />
                </div>
              </li>
            ))
            }
          </ol>

          <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={addPostModalOpen}
          onRequestClose={this.closeAddPostModal}
          contentLabel='Modal'>
          <form>
            <h2>Add Post</h2>
            <div className='modal-label'>
              Subject:
              <input className='modal-input' type="text" placeholder='Enter Subject' name='subject' ref={(input) => this.input = input} required />
            </div>
            <div className='modal-label'>
              Author:
              <input className='modal-input' type="text" placeholder='Author Name' name='author' ref={(input) => this.input = input} required />
            </div>
            <div className='modal-label'>
              Choose A Category:
              <select className='modal-select' required >
                <option value="blank" selected disabled></option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </select>
            </div>
            <div>
              <textarea className="modal-textarea" maxLength="2000" rows="5" required/>
            </div>
            <div>
              <button className="modal-btn"> Submit </button>
              <button className="modal-btn" onClick={() => this.closeAddPostModal()}> Cancel </button>

            </div>



          </form>
          </Modal>
     </div>      
    );
  }
}

export default connect()(MainPage);