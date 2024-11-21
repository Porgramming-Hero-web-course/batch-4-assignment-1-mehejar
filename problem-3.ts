{

    function countWordOccurrences(sent: string, word: string) {

        const count = sent.split(' ')
        const totalUse = count.filter((matc) => matc.toLowerCase() == word.toLowerCase()).length
        console.log(totalUse)
    }

    countWordOccurrences("I love typescript", "typescript")


}