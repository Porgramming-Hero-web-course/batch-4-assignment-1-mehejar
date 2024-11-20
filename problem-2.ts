{
    function removeDuplicates(arr: number[]): number[] {
        return arr.filter((value, index) => arr.indexOf(value) === index);
      }

      const newArr =  removeDuplicates([1, 2, 2, 4, 9, 9, 7, 6, 5, 5])
      console.log(newArr)
}