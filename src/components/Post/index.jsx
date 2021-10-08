import './post.css'
import ReactTimeAgo from "react-time-ago";
import { Link } from 'react-router-dom';

export default function Post({ post }) {

    return (
      <article className="post">
        {post.photo ? <img className="post__image" src={post.photo} alt="article" /> : <img className="post__image" src="https://picsum.photos/id/1015/400" alt="article" />}
        <div className="post__info">
          <div className="post__info__categories">
            {post.categories.map((category, index) => {
              return (
                <div className="info__category" key={`category-${index}`}>
                  {category}
                </div>
              );
            })}
          </div>
          <Link to={`/post/${post._id}`}>
            <h2 className="post__title">{post.title}</h2>
          </Link>
          <hr />
          <span className="post__date">
            {/* {new Date(post.createdAt).toDateString()} */}
            <ReactTimeAgo date={Date.parse(post.createdAt)} locale="en-US" />
          </span>
        </div>
        <p className="post__description">{post.description}</p>
      </article>
    );
}
