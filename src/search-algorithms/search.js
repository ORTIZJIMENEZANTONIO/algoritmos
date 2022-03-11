const validator = require('../mixins/validator');

/*  
  This algorithms cointain explicit code to show functionality.
  Obviously we can use Array.prototype methods
 */

const  binarySearch = (arr, x) => {    
  let l = 0;
  let r = arr.length - 1;
  let mid;
  
  while (r >= l) {
      mid = l + Math.floor((r - l) / 2);
      console.log( arr, r, mid, l )
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
    let i;
    const size = arr.length;
    for (i = 0; i < size; i++)
        if (arr[i] == x)
            return i;
    return -1;
}

const searchResult = ( set, element, algorithm ) => {
  const result = algorithm == 'binary'
    ? binarySearch( set, element )
    : algorithm == 'linear'
      ? linearSerch( set, element )
      : -1;
  return result;
}

const getResult  = (req, res) => {
  const  { set, element, algorithm }  = req.query;  
  return validator.isSearchValid( { set, element, algorithm} )
    .then( response  => {
      const result = searchResult( JSON.parse(response.set), response.element, response.algorithm );
      return res.json({ result: (result == -1) 
        ? "Element is not present in array"
        : `Element is present at index ${result}` }) 
    })
    .catch( err => res.status(400).json({error: err}) );
}


module.exports = {
  getResult,
  linearSerch,
  binarySearch
}