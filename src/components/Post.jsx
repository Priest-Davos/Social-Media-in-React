const Post = ({ post }) => {


  return (
    <div className="card post-card" style={{ width: "18rem", }}>
      {/* <img src="..." className="card-img-top" alt="..."></img>*/}
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
            <span class="visually-hidden">unread messages</span>
          </span></h5>
        <p className="card-text">{post.body}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a>*/}
        {post.tags.map((tag) => (<span class="badge text-bg-warning hashtag">{tag}</span>))}

      </div>
    </div>
  )
}
export default Post