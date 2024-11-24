**The significance of union and intersection types in Typescript.**

**Union:**
Union is allow to choose type from many. 
Example- a field which is pick only a value but different user can request  different value, like here is a field which can pick number and string type. But in Typescript can not contain type string and number together. Typescript only can contain one type in a property. Here we can use UNION which is help to pick any of these type, string or number. Basically Union works in typescript like OR.

```type admin = string;
type user = number;
type guest = string;

type role = admin | user | guest // here any of these user can enter`

**Intersection:**
If we want check one or more propetry or types then we can use intersection. Intersection works like and.
example: We have a user We can check in data that is the user have a valid ID no. and also have a mobile number the user can access farther.

```type validUser = {id: true} & {mobile: true}.`

