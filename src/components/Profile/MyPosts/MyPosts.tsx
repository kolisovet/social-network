import React from "react";
import s from './MyPosts.module.css';
import Post, {MessageType} from "./Post/Post";

type PostsDataType = Array<MessageType>

const MyPosts = () => {
    let postData = [
        {id: '1', message: 'Hi', likesCount: 14},
        {id: '2', message: 'Its my first post', likesCount: 26},
        {id: '3', message: 'Hi', likesCount: 14},
        {id: '4', message: 'Hi', likesCount: 14},

    ]
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
                <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;