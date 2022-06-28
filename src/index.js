const messages = [
    "Carlos",
    "Daniel",
    "Karla",
    "Andrea",
    "Alexander",
    "David",
    "Estuardo",
    "David",
    "Diana",
    "Ana Maria",
    "Isabela",
    "Antonio",
    "Norma",
    "Sofia",
    "El Final"
]

const randomMsg = ()=>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

export default  randomMsg

