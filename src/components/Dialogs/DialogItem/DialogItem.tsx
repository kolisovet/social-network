import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: string
    name: string
}
const DialogItem = (props: PropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} style={({isActive}) => ({color: isActive ? 'gold' : 'white'})}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;