import React from 'react';
import ReactDOM from 'react-dom';
import exp from "constants";



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
    newsPage: {}
    musicPage: {}
    settingsPage: {}
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
    },
    newsPage: {

    },
    musicPage: {

    },
    settingsPage: {

    }
}
export default state;