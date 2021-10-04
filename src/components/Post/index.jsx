import './post.css'

export default function Post() {
    return (
      <article className="post">
        <img className="post__image" src="https://picsum.photos/id/1015/400" alt="article" />
        <div className="post__info">
            <div className="post__info__categories">
                <div className="info__category">Music</div>
                <div className="info__category">Life</div>
            </div>
            <h2 className="post__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <hr />
            <span className="post__date">1 hour ago</span>
        </div>
        <p className="post__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi dicta excepturi consequatur, est facere doloribus tempora saepe ipsum nisi animi quisquam aperiam minus nihil neque eaque, at ducimus iste. Est dolor autem ipsam adipisci, provident voluptate! Numquam vitae fuga neque eveniet aspernatur nulla aut rerum, magnam eos molestias, omnis ipsum quisquam quas quidem repudiandae autem voluptatum hic cupiditate nostrum sapiente debitis odio. Est optio tempora, temporibus nesciunt ad nam aut, iusto consequatur repudiandae dolore deleniti ullam, nulla corrupti quod repellendus?
        </p>
      </article>
    );
}
