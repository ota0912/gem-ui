function addMessage(message, isSender) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isSender ? 'text-right' : 'text-left');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
}

function handleUserInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function handleFileUpload() {
    const fileInput = document.getElementById('file-upload');
    const files = fileInput.files;
    const filePreview = document.getElementById('file-preview');

    if (files.length > 0) {
        for (const file of files) {
            const filePreviewItem = document.createElement('div');
            filePreviewItem.classList.add('file-preview-item', 'flex', 'items-center', 'mt-2');
            
            const fileNameElement = document.createElement('span');
            fileNameElement.textContent = file.name;

            const closeIcon = document.createElement('i');
            closeIcon.classList.add('fas', 'fa-times', 'text-red-500', 'ml-2', 'cursor-pointer'); // Added classes for the close icon
            closeIcon.setAttribute('aria-hidden', 'true');
            closeIcon.addEventListener('click', () => {
                filePreview.removeChild(filePreviewItem);
            });
            fileNameElement.appendChild(closeIcon);
            filePreviewItem.appendChild(fileNameElement);

            filePreview.appendChild(filePreviewItem);
        }
        filePreview.classList.remove('hidden');
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessage(userInput, true);

    document.getElementById('user-input').value = ''; 
}

function initializeChat() {
    const sendButton = document.getElementById('send-btn');
    const fileUploadInput = document.getElementById('file-upload');
    const userInput = document.getElementById('user-input');

    sendButton.addEventListener('click', sendMessage);
    fileUploadInput.addEventListener('change', handleFileUpload);
    userInput.addEventListener('keypress', handleUserInput);

}

document.addEventListener('DOMContentLoaded', initializeChat);
