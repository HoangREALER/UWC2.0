document.addEventListener("DOMContentLoaded", () => {
    const chatListOpen = document.querySelector("#linkOpenChat")
    const chatListClose = document.querySelector("#linkCloseChat")
    const chatList = document.querySelector(".chat")

    document.querySelector("#linkOpenChat").addEventListener("click", e =>{
        e.preventDefault();
        chatListOpen.classList.add("hidden");
        chatListClose.classList.remove("hidden");
        chatList.classList.remove("hidden");
    });
    document.querySelector("#linkCloseChat").addEventListener("click", e =>{
        e.preventDefault();
        chatListOpen.classList.remove("hidden");
        chatListClose.classList.add("hidden");
        chatList.classList.add("hidden");
    });

    // const choose = document.querySelectorAll(".box_chat")
    const area = document.querySelector(".chat_area")
    document.querySelector(".box_chat").addEventListener("click", e =>{
        e.preventDefault();
        chatList.classList.add("hidden");
        area.classList.remove("hidden")
    });

    document.querySelector("#linkCloseChatArea").addEventListener("click", e =>{
        e.preventDefault()
        area.classList.add("hidden")
        chatList.classList.remove("hidden")
    })
})

