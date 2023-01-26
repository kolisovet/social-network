import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type PropsType = {
    posts: PostType[]
}
const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
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