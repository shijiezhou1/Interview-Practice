function loop(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
    }
    console.log(`min : ${min} - max: ${max}`)
}

function loop2(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] < min) min = arr[i];
    }
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] > max) max = arr[i];
    }
    console.log(`min : ${min} - max: ${max}`)
}

