import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from 'layouts/Header'
import Posts from 'layouts/Posts'
import Sidebar from 'layouts/Sidebar'
import './home.css'

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
     const fetchPosts = async () => {
         const { data } = await axios.get("/posts")
         setPosts( data );
     }
     fetchPosts();
    },[])

    return (
        <main>
            <Header />
            <section className="home">
                <Posts posts={posts} />
                <Sidebar />
            </section>
        </main>
    )
}
