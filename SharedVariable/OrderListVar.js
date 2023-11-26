export let items = [
    
];


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
       
        elm.QNT = QNT;
        items[items.length] = elm

    }

    return true;
}