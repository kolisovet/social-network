import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";
/*

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogItemType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
*/

ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);



