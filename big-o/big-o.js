function binarySearch(arr, key) {
    var low = 0;
    var high = arr.length - 1;
    var mid;
    var elem;

    while (low <= high) {
        // TODO what is the function of mathfloor
        mid = Math.floor((low+high)/2, 10);
        elem = arr[mid];
        console.log(`mid: ${mid} - elem: ${elem}`)
        if( elem < key) { 
            low = mid + 1;
        } else if ( elem > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
    
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 2));