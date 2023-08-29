export let items = [

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Pit", URL: require('../Imgs/pexels-ash-376464.jpg'), id: 1 },

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 10, Place: "Pit", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 2 },

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 3 },

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 4 },

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg'), id: 5 },
];
let NewId = 6;

export const cancleOrder = (id) => {
    const indexToRemove = items.findIndex(obj => obj.id === id);
    if (indexToRemove !== -1) {
        console.log("canncle Id call")
        items.splice(indexToRemove, 1);
    }
}

export const addOrder = (elm) => {
    elm.id = NewId;
    NewId = NewId + 1
    console.log(elm.id)
    items[items.length] = elm
    console.log(elm)

    console.log(JSON.stringify(items))
}