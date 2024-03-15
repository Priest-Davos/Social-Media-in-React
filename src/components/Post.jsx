import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {

  const {deletePost}=useContext(PostListContext)

  return (
    <div className="card post-card" style={{ width: "30rem", }}>
      {/* <img src="..." className="card-img-top" alt="..."></img>*/}
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span 
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          //create a listner to send the post id of which delete button clicked
          onClick={()=>deletePost(post.id)}>
            <MdDelete />
          </span></h5>
        <p className="card-text">{post.body}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a>*/}
        {post.tags.map((tag) => ( <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>))}
        <div className="alert alert-warning reactions" role="alert">{`${post.reactions}  people reacted to this post`}</div>
      </div>
    </div>
  )
}
export default Post