{
    const aString = 'i love typescript , love and love typescript'

    function countWordOccurrences(sent: string, word: string){
        const count = sent.split(' ')
        const totalUse = count.filter((matc)=> matc == word).length
        console.log(totalUse)
    }

    countWordOccurrences(aString, 'love')
    

}