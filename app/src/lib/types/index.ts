// User type
export interface User {
    _id: string;
    name: string;
    avatar: string;
}

// Message type
export interface Message {
    senderId: string;
    receiverId: string;
    content: string;
}

// Droid type
export interface Droid extends User{
    readyMessages: string[];
}

// MessageType that is used in the WebSocket
export enum MessageType {
    CurrentMessages= "CurrentMessages",
    NewMessage = "NewMessage"
}