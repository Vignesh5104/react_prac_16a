import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    inputName: '',
    inputComment: '',
    commentCount: 0,
  }

  updateName = event => {
    this.setState({inputName: event.target.value})
  }

  updateComment = event => {
    this.setState({inputComment: event.target.value})
  }

  updateLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {inputName, inputComment} = this.state
    const newComment = {
      id: uuidv4(),
      name: inputName,
      comment: inputComment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      commentCount: prevState.commentCount + 1,
      inputName: '',
      inputComment: '',
    }))
  }

  delComment = id => {
    const {commentsList} = this.state

    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsList: filteredList,
      commentCount: prevState.commentCount - 1,
    }))
  }

  render() {
    const {commentsList, inputName, inputComment, commentCount} = this.state

    return (
      <div className="bgcon">
        <div className="top-con">
          <h1 className="main-head">Comments</h1>
          <div className="form-img-con">
            <img
              className="main-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
            <form onSubmit={this.addComment}>
              <p className="form-desc">Say something about 4.0 Technologies</p>
              <input
                onChange={this.updateName}
                value={inputName}
                placeholder="Your Name"
              />
              <textarea
                onChange={this.updateComment}
                value={inputComment}
                cols="10"
                rows="8"
                placeholder="Your Comment"
              />
              <button className="add-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>

          <hr />
          <p className="comment-count-text">
            <span className="comment-count">{commentCount}</span>Comments{' '}
          </p>
          <ul>
            {commentsList.map(each => (
              <CommentItem
                updateLike={this.updateLike}
                delComment={this.delComment}
                commentDetails={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
