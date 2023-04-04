import { React, useState, useEffect } from 'react';
import PostItem from './PostItem';
import PostForm from './PostForm';
import PostService from '../API/PostService';
import { useSelector } from 'react-redux';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(10)

    const login = useSelector(state => state.login)

    const addPost = (post) => {
        setPosts([post, ...posts])
    }

    const removePost = (id) => {
        setPosts(posts.filter(post => post.id != id))
    }

    async function fetchPosts() {
        const data = await PostService.getAll(limit, page)
        setPosts(data.data)
        setPageCount(data.headers['x-total-count'])
        setPagination(Math.ceil(data.headers['x-total-count'] / limit))
    }

    useEffect(() => {
        fetchPosts();
    }, [page]);

    return (
        <main>
            <div className="home">
                <div className="home__outer">
                    <div className="container">
                        <div className="home__inner">
                            <div className="home__decor">
                                <div className="home__decor__inner">
                                    <div className="home__decor-1"></div>
                                    <div className="home__decor-2"></div>
                                    <div className="home__bg"></div>
                                </div>
                            </div>
                            <div className="home__info">
                                <div className="home__title">
                                    Lemon Blog / 2SPL
                                </div>
                                <div className="home__desc">
                                    Horizontal Art
                                </div>
                                <a href="#posts" className="button">
                                    View posts
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="posts" id="posts">
                <div className="posts__outer">
                    <div className="container">
                        <div className="posts__inner">

                            {login ? <PostForm create={addPost} /> : <br />}

                            <div className="posts__list">
                                {
                                    posts.map((post) =>
                                        <PostItem post={post} key={post.id} remove={removePost} />
                                    )
                                }
                            </div>
                            <div className="pages">
                                {
                                    [...Array(pagination)].map((item, key) =>
                                        <div className="page-item" key={key} onClick={() => setPage(key + 1)}>
                                            {(key + 1)}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;