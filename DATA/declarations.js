const escapeStr = "\`\\\/\"\'" 
const arr = [4, '2']
const obj = {
    str :"",
    num : 8,
    bool : false,
    undef : undefined,
}
// quand on est dans un objet pour dire = c'est : 
const nested = {
    arr : [4, undefined,'2'],
    obj : {
        str : "",
        num : 2,
        bool : true,
    },
    
};

Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
Object.freeze(obj);
