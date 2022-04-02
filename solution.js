const data = [3, 1, 8, 2, 5, 6]
//
function maxLIS(arr) {
    let ways = Array(arr.length).fill(1)
    for (let indx = 1; indx < arr.length; indx++) {
        for (let j = indx-1; j >= 0; j--) {
            if(arr[j] < arr[indx]){
                ways[indx] = Math.max(ways[indx], ways[j] + 1)
            }
        }        
    }
    return Math.max(...ways)
}
// driver code
console.log(maxLIS(data))

