import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';

const PostById = () => {
    const params = useParams()
    const [post, setPost] = useState(null)

    async function getPost() {
        const response = await PostService.getById(params.id);
        setPost(response.data)
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className="note">
            <div className="container">
                <div className="note__inner">
                    {post != null ?
                        <div>
                            <div className="note__title">
                                {post.title}
                            </div>
                            <div className="note__desc">
                                {post.body}
                            </div>
                        </div>
                        : ''}
                </div>
            </div>
        </div >
    );
}

export default PostById;