import React from "react";
import s from './Post.module.css';


export type MessageType = {
    message: string
    likesCount: number
}

export const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'/>
            {props.message}
            <div>
                <span>likes {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;