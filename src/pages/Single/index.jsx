import Sidebar from 'layouts/Sidebar'
import SinglePost from 'layouts/SinglePost'
import './single.css'

export default function Single() {
    return (
        <main className="single">
            <SinglePost />
            <Sidebar />
        </main>
    )
}
