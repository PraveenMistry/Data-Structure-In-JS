// find path in json by string


let json = {
	product : {
		quantity : 5
	}
}

// let str = "product";
let str = "product,quantity";
let index = -1;
// let str = "product,stock";
let out = json;

function checkPath(json, keys){
    for(let i=0;i<keys.length;i++){
        let key = keys[i];
        if(out[key])
    		out = out[key];	
    	else 
    		return 'No Result'
    }
    return out;
}

let keys = str.split(",");
checkPath(json, keys);