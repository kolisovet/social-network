import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogItemType, MessageType} from "../../redux/state";


type PropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)


    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let onSendMessage = () => {
        let message = newMessageElement.current?.value
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button>Send</button>
            </div>

        </div>
    )
}
export default Dialogs