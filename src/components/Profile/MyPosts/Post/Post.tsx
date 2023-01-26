import React from "react";
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";
type PropsType = PostType
/*type PropsType = {
id: string
message: string
likesCount: number
}*/
export const Post = (props: PropsType) => {
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