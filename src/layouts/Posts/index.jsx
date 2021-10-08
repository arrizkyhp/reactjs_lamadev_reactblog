import Post from 'components/Post'
import './posts.css'

export default function Posts({posts} ) {

    return (
        <section className="posts">
            {/* {console.log(Object.keys(posts).length)} */}
            {Object.keys(posts).length === 0 ? <h1>no data</h1> :
            posts.map((post, index) => {
              return  <Post post={post} key={`post-${index}`}/>
            })

            }

        </section>
    )
}
