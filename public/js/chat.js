const socket = io(window.location.origin);
const message = document.getElementById('message');
const messages = document.getElementById('messageBox');

const handleSubmitNewMessage = () => {
  console.log('clicked');
  socket.emit('message', { data: message.value });
};

socket.on('message', ({ data }) => {
  handleNewMessage(data);
});

handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
};

const buildNewMessage = (message) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
};