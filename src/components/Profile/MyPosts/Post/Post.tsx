import React from "react";
import s from './Post.module.css';
import {PostType} from "../../../../index";


/*export type MessageType = {
    id: string
    message: string
    likesCount: number
}*/

export const Post = (props: PostType) => {
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