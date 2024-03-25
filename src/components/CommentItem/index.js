// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const likedUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
const likeUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

const commentedAt = formatDistanceToNow(new Date())

const CommentItem = props => {
  const {commentDetails, updateLike, delComment} = props
  const {id, name, comment, isLiked} = commentDetails

  const updateLikeStatus = () => {
    updateLike(id)
  }

  const callDelComment = () => {
    delComment(id)
  }

  const likeImgUrl = isLiked ? likedUrl : likeUrl
  const likeClsName = isLiked ? 'liked' : 'like'

  return (
    <li className="comment-con">
      <div className="comment-top-con">
        <div className="initial-con amber">
          <p className="initial">{name[0].toUpperCase()}</p>
        </div>
        <div className="text-con">
          <p className="name">
            {name} <span>{commentedAt}</span>
          </p>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="comment-bot-con">
        <div className="like-con">
          <button onClick={updateLikeStatus} className="btn" type="button">
            <img className="like-img" src={likeImgUrl} alt="like" />
          </button>
          <p className={likeClsName}>Like</p>
        </div>
        <button
          className="btn"
          onClick={callDelComment}
          data-testid="delete"
          type="button"
        >
          <img
            className="del-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>

      <hr />
    </li>
  )
}

export default CommentItem
