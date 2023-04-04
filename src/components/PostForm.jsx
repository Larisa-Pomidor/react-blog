import { React, useState, useEffect } from 'react';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addPost = (e) => {
        e.preventDefault()
        create({...post, id: Date.now()});
        setPost({title: '', body: ''});
    }

    useEffect(() => {

    }, []);

    return (
        <div className="form">
            <div className="container">
                <div className="form__inner">
                    <div className="form__title">
                        Add New Post
                    </div>
                    <form>
                        <input placeholder="Post title" value={post.title} onChange={e => setPost({...post, title: e.target.value})} />
                        <textarea placeholder="Post text" value={post.body} rows="1" onChange={e => setPost({...post, body: e.target.value})} />
                        <button className="button post__button" onClick={addPost}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostForm;