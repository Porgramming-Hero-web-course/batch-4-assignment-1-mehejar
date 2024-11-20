{
    // sum of a array

    const sumArray = (num: number[]) =>{
        const sum = num.reduce((acc, scc)=> acc + scc, 0)
        return sum
    }

    console.log(sumArray([5, 5, 5, 5, 5]))
  

}