import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../index";

/*export type DialogItemType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    massage: string
}

export type MessagesType = {messages: Array<MessageType>}
export type DialogsType = {dialogs : Array<DialogItemType>}
*/

const Dialogs = (props: DialogsPageType) => {

/*    let dialogs = [
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
    ]*/
    let dialogsElements = props.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id}/>)

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