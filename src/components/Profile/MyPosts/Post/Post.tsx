import React from "react";
import s from './Post.module.css';


export type MessageType = {
    message: string
    likesCount: number
}

export const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img src='https://archives.bulbagarden.net/media/upload/2/21/001Bulbasaur.png'/>
            {props.message}
            <div>
                <span>likes {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;