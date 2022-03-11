const validator = require('../mixins/validator');

const  binarySearch = (arr, x) => {    
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (r >= l) {
       mid = l + Math.floor((r - l) / 2);
 
      // If the element is present at the middle
      // itself
      if (arr[mid] == x)
          return mid;
 
      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (arr[mid] > x)
          r = mid - 1;
            
      // Else the element can only be present
      // in right subarray
      else 
          l = mid + 1;
  }
 
  // We reach here when element is not
  // present in array
  return -1;
}

const linearSerch = (arr, x) => {

}

const searchResult = ( array, elementToFind, algoithm ) => {
  const result = algoithm == 'binary'
    ? binarySearch( array, elementToFind )
    : algoithm == 'linear'
      ? linearSerch( array, elementToFind )
      : -1;
  return result;
}

const getResult  = (req, res) => {
  const  { array, element, algoithm }  = req.query;  
    
  return validator.isSearchValid( array, element, algoithm )
    .then( response  => {
      const result = searchResult( ...response );
      return res.json({ result: (result == -1) 
        ? "Element is not present in array"
        : `Element is present at index ${result}` }) 
    })
    .catch( err => res.status(400).json({error, err}) );
}


module.exports = {
  getResult
}