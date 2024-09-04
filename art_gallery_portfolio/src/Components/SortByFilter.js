//In this file, I include the algorithm used for sorting the images.
/*
Currently, the total number of artworks is small but in the future, this will change as I add more entries into the json (or database server in the future).
To ameliorate the inevitable performance costs of sorting large amounts of data, I opted to use merge sort as it has a superior worst case time complexity (o(nlogn)) over other algorithms like selection, insertion and quick sort.
The merge function combines two sorted subarrays into one sorted array. It takes a list of items and merges two halves, defined by the left, split, and right indices, based on the compareType comparison.

*/
//The merge function is where the merging of the two arrays is done.
function merge(list, left, split, right, compareType){
      //First, we set the sizes of the left and right array.
      const leftListSize = split - left +1
      const rightListSize = right - split
      //Out-of-place algorithm: We then initialize the left and right arrays with their respective sizes. These are temporarily used to store the values to the left of the splitting point in the left array and vice versa.
      const tempLeftList = new Array(leftListSize)
      const tempRightList = new Array(rightListSize)
      
      //Use for loops to access each array memory slot in the arrays and set each slot to the list values corresponding to which array they should be in.
      for(let l_idx = 0; l_idx < leftListSize; l_idx++){
             tempLeftList[l_idx] = list[left + l_idx]
      }
      for(let r_idx = 0; r_idx < rightListSize; r_idx++){
             tempRightList[r_idx] = list[split + 1 + r_idx]
      }
      //After populating the temp left and right arrays, we then set each value 
      var sort_left_idx = 0, sort_right_idx = 0
      var merge_idx = left
      //For as long as both index pointers have not reached the end of either array, merge elements from both left and right arrays while also comparing them with our custom comparators to perform the sorting itself. 
      while(sort_left_idx < leftListSize && sort_right_idx < rightListSize){
        //Compare both left and right values. The smaller of the two is placed in the array.
        if(compareType(tempLeftList[sort_left_idx], tempRightList[sort_right_idx]) <= 0){
            list[merge_idx] = tempLeftList[sort_left_idx]
            sort_left_idx++
        }else{
            list[merge_idx] = tempRightList[sort_right_idx]
            sort_right_idx++
        }
        merge_idx++
      }
      //In some cases, there may be trailing values in either array if the left or right array has a different length than the other. To handle this, we set the original array to the remaining values from either side.
      while (sort_left_idx < leftListSize){
        list[merge_idx] = tempLeftList[sort_left_idx]
        sort_left_idx++
        merge_idx++
      }
      while (sort_right_idx < rightListSize){
        list[merge_idx] = tempRightList[sort_right_idx]
        sort_right_idx++
        merge_idx++
      }
}
/*
mergeSort recursively divides the array into halves until each subarray contains a single element. It then merges the subarrays in sorted order using the merge function.

*/
function mergeSort(list,left,right ,compareType){
      //Base Case: First, check if the left index is greater than or equal to the right index. If so, close out of the function.
      if(left >= right){
        
        return;
      }
      //To split arrays into halves, we need to get the middle index where the splitting point will be.
      const splittingPoint = Math.floor((left+right) / 2)
      //After, recursively split the left and right arrays until there are only subarrays of length 1.
      mergeSort(list, left, splittingPoint, compareType)
      mergeSort(list, splittingPoint + 1, right,compareType)
      //Then, begin putting back the subarrays to form a sorted array.
      merge(list,left, splittingPoint,right, compareType)
}
//The sortByTitle and sortByDate functions both take in the array data from the gallery page and perform a mergeSort with the given list, the initial range of values and the sorting comparator.
export function sortByTitle(list){
    try{
        mergeSort(list, 0 , list.length - 1, compareByTitle)
        return list
    }catch(e){
        console.error(e)
        console.log("Sort could not be performed.")
    }
    
}
export function sortByDate(list){
    
    try{
       mergeSort(list, 0, list.length -1, compareByDate)
       return list
    }catch(e){
        console.error(e)
        console.log("Sort could not be performed.")
    }
}
//To sort the data by title or date, I wrote comparators for each to use for checking if a is less than b.
function compareByTitle(titleA,titleB){
    return titleA.title.localeCompare(titleB.title)
}
function compareByDate(dateA,dateB){
    return new Date(dateB.date) - new Date(dateA.date);
}

