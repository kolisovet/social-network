import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPost, PostType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void

}
const MyPosts = (props: PropsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message}
                                                               likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
        //let text = newPostElement.current?.value
        if (newPostElement.current) {
            props.addPost()
            props.updateNewPostText('')
        }
    }
    let onTextareaChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onTextareaChange} ref={newPostElement} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;