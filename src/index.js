
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
matrix = matrix.join().split(',').sort((a,b) => a-b)
matrix = matrix.map(Number);
  let size = 3;
  let subarray = []
    for (let i = 0; i <Math.ceil(matrix.length/size); i++){
      subarray[i] = matrix.slice((i*size), (i*size) + size);
    }
    for(i=0; i<subarray.length; i++) {
        i%2?false:subarray[i].reverse()
            for(k=0;k<subarray.length;k++) {
                i%1?false:subarray[i].reverse()}
    }
    if(typeof matrix === 'undefined' || matrix.length == 0) {
      return [];
    }

    return subarray.join().split(',').map(Number);
};
