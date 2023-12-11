<script lang="ts">
    import { messages } from "$lib/stores/messages";

    export let friendId: string; // Current chatting friend id
    export let userId: string; // Current user id

    // Current message
    let message;

    /**
     * Handle user's message input. If the user presses enter,
     * send the message.
     */
    function handleMessageInput(event): void
    {
        if(event.key === "Enter")
        {
            event.preventDefault();
            sendMessage();
        }
        else
        {
            message = event.target.value;
        }
    }

    /**
     * Save the message to the store and send it to the server.
     */
    function sendMessage(): void
    {
        if(message.length > 0)
            messages.update(messages => [...messages, {senderId: userId, receiverId: friendId, message: message}]);
    }
</script>

<div id = "message-form">
    <form>
        <input type="text" id = "message-input" on:keyup={handleMessageInput} autocomplete="off">
        <button id = "send-button" on:click={sendMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"></path></svg>
        </button>
    </form>
</div>

<style>
    #message-form{
        width:100%;
        border-top: 2px solid var(--border-color);
    }

    #message-form form{
        padding:1.23rem 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    #message-form #message-input{
        width: 100%;
        padding: 0.5rem;
        height:1.4rem;
        margin-right: 0.5rem;
    }

    #message-form #send-button{
        background-color: var(--front-color);
        color: var(--background-color);
        border: 1px solid var(--border-color);
        border-radius: 5px;
        cursor: pointer;
        padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    }

    #message-form #send-button svg{
        width: 1.7em;
        height: 1.7em;
        color: var(--text-color);
    }

    #message-form #send-button:hover{
        background-color: var(--border-color);
    }

    #message-form #send-button:active{
        opacity:0.9;
    }
</style>