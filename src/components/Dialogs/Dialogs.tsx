import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

type MessageType = {
    massage: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} style={({isActive}) => ({color: isActive ? 'gold' : 'white'})}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return(
    <div className={s.message}>{props.massage}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Sofia' id='1'/>
                <DialogItem name='Ivan' id='2'/>
                <DialogItem name='Dima' id='3'/>
                <DialogItem name='Andrey' id='4'/>

            </div>
            <div className={s.messages}>
                <Message massage='Hi'/>
                <Message massage='How are you?'/>
                <Message massage='kek'/>
            </div>
        </div>
    )
}
export default Dialogs