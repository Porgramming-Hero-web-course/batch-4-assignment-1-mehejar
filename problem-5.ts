{

    type Person = {
        name: string;
        age: number
    }
    
    
    const findUserKey = <X, Y extends keyof X>(obj:X, key:Y) =>{
        return obj[key]
    }
    
    const user1 : Person = {
        name: 'alice',
        age: 23
    }
    const res1 = findUserKey(user1, 'name')
    console.log(res1)
    }