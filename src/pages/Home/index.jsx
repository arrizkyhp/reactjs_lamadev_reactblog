import Header from 'layouts/Header'
import Posts from 'layouts/Posts'
import Sidebar from 'layouts/Sidebar'
import './home.css'

export default function Home() {
    return (
        <main>
            <Header />
            <section className="home">
                <Posts />
                <Sidebar />
            </section>
        </main>
    )
}
