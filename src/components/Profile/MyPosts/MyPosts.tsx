import React from "react";
import s from './MyPosts.module.css';
import Post, {MessageType} from "./Post/Post";

type PostsType = Array<MessageType>

const MyPosts = () => {
    let posts = [
        {id: '1', message: 'Hi', likesCount: 14},
        {id: '2', message: 'Its my first post', likesCount: 26},
        {id: '3', message: 'Hi', likesCount: 14},
        {id: '4', message: 'Hi', likesCount: 14},
        {id: '5', message: 'Hiiii', likesCount: 14},
    ]
    let postsElements = posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;