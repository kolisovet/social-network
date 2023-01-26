import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi', likesCount: 14},
            {id: '2', message: 'Its my first post', likesCount: 26},
            {id: '3', message: 'Hi', likesCount: 14},
            {id: '4', message: 'Hi', likesCount: 14},
            {id: '5', message: 'Hiiii', likesCount: 14},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Sofia'},
            {id: '2', name: 'Ivan'},
            {id: '3', name: 'Dima'},
            {id: '4', name: 'Andrey'},
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'Yo'},
            {id: '4', message: 'Yo'},
        ]
    }
}

// let posts = [
//     {id: '1', message: 'Hi', likesCount: 14},
//     {id: '2', message: 'Its my first post', likesCount: 26},
//     {id: '3', message: 'Hi', likesCount: 14},
//     {id: '4', message: 'Hi', likesCount: 14},
//     {id: '5', message: 'Hiiii', likesCount: 14},
// ]
// let dialogs = [
//     {id: '1', name: 'Sofia'},
//     {id: '2', name: 'Ivan'},
//     {id: '3', name: 'Dima'},
//     {id: '4', name: 'Andrey'},
// ]
// let messages = [
//     {id: '1', message: 'Hi'},
//     {id: '2', message: 'How are you?'},
//     {id: '3', message: 'Yo'},
//     {id: '4', message: 'Yo'},
// ]
ReactDOM.render(
    <App profilePage={state.profilePage} dialogsPage={state.dialogsPage}/>,
    document.getElementById('root')
);