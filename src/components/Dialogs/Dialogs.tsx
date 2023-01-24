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

type MessagesDataType = Array<MessageType>
type DialogsDataType = Array<DialogItemType>

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

    let dialogsData = [
        {id: '1', name: 'Sofia'},
        {id: '2', name: 'Ivan'},
        {id: '3', name: 'Dima'},
        {id: '4', name: 'Andrey'},
    ]

    let messagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>

            </div>
            <div className={s.messages}>
                <Message massage={messagesData[0].message} id={messagesData[0].id}/>
                <Message massage={messagesData[1].message} id={messagesData[1].id}/>

            </div>
        </div>
    )
}
export default Dialogs