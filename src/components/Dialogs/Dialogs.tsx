import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    name: string
}

type MessageType = {
    id: string
    massage: string
}

type MessagesType = Array<MessageType>
type DialogsType = Array<DialogItemType>
type dialogElements = DialogsType
type messagesElements = MessagesType
const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} style={({isActive}) => ({color: isActive ? 'gold' : 'white'})}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.massage}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: '1', name: 'Sofia'},
        {id: '2', name: 'Ivan'},
        {id: '3', name: 'Dima'},
        {id: '4', name: 'Andrey'},
    ]
    let messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'},
    ]
    let dialogsElements = dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = messages.map( m => <Message massage={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs