
function merge(list, left, split, right, compareType){

      const leftListSize = split - left +1
      const rightListSize = right - split

      const tempLeftList = new Array(leftListSize)
      const tempRightList = new Array(rightListSize)
      
      for(let l_idx = 0; l_idx < leftListSize; l_idx++){
             tempLeftList[l_idx] = list[left + l_idx]
      }
      for(let r_idx = 0; r_idx < rightListSize; r_idx++){
             tempRightList[r_idx] = list[split + 1 + r_idx]
      }
      var sort_left_idx = 0, sort_right_idx = 0
      var merge_idx = left

      while(sort_left_idx < leftListSize && sort_right_idx < rightListSize){
        if(compareType(tempLeftList[sort_left_idx], tempRightList[sort_right_idx]) <= 0){
            list[merge_idx] = tempLeftList[sort_left_idx]
            sort_left_idx++
        }else{
            list[merge_idx] = tempRightList[sort_right_idx]
            sort_right_idx++
        }
        merge_idx++
      }

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
function mergeSort(list,left,right ,compareType){
    
      if(left >= right){
        
        return;
      }
      const splittingPoint = Math.floor((left+right) / 2)
      
      mergeSort(list, left, splittingPoint, compareType)
      mergeSort(list, splittingPoint + 1, right,compareType)
      merge(list,left, splittingPoint,right, compareType)
}

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
function compareByTitle(titleA,titleB){
    return titleA.title.localeCompare(titleB.title)
}
function compareByDate(dateA,dateB){
    return new Date(dateB.date) - new Date(dateA.date);
}

