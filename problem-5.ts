{

    type Person = {
        name: string;
        age: number
    }


    const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user1: Person = {
        name: "Alice", age: 30
    }
    const res1 = getProperty(user1, 'name')
    console.log(res1)
}