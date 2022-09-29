const messages = [
    "Oscar",
    "Ana",
    "Carolina",
    "Carlos",
    "Diego",
    "Pedro",
];

export default function randomMesg()  {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);

}

