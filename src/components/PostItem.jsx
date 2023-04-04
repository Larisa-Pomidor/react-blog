import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostItem = ({ post, remove }) => {
    const router = useNavigate()

    const login = useSelector(state => state.login)

    return (
        <div className="post">
            <div className="post__text">
                <div className="post__title" onClick={() => router(`/post/${post.id}`)}>
                    {post.title}
                </div>
                <div className="post__content">
                    {post.body}
                </div>
            </div>
            {login ? <div className="remove__button button" onClick={() => remove(post.id)}>
                Remove post
            </div> : ''}

        </div>
    );
}

export default PostItem;