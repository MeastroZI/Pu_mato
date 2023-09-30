export let items = [
    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Pit", URL: require('../Imgs/pexels-ash-376464.jpg') , address : '5014 sardar B'},

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 10, Place: "Pit", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') , address : '5014 sardar B'},

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 1000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') , address : "203 sardar bhavan" },

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') , address : "501 sardar B"},

    { Name: "Dabeli", discription: "Lorem ipsum dolor, sit amet consectetur  ", price: 100000, Place: "Piet", URL: require('../Imgs/pexels-jane-doan-1099680.jpg') , address : '5014 sardar B'},


];
let NewId = 6;

export const cancleOrder = (id) => {
    const indexToRemove = items.findIndex(obj => obj.id === id);
    if (indexToRemove !== -1) {
        console.log("canncle Id call")
        items.splice(indexToRemove, 1);
    }
}

export const addOrder = (elm, QNT) => {
    const isObjectPresent = items.some(item => item === elm);
    // console.log(elm.id)
    if (!isObjectPresent) {
        elm.id = NewId;
        elm.QNT = QNT;
        NewId = NewId + 1
        items[items.length] = elm

    }

    return true;
}