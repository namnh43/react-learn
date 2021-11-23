function isEmptyObject(obj) {
    for (let prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {// Kiem tra trong object co thuoc tinh property do ko
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({})
}
//Tra ve true la object rong va nguoc lai

export const helper = {
    isEmptyObject
}