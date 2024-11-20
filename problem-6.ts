{

    interface Profile {
        name: string;
        age: number;
        email: string;
      }
      
      function updateProfile(person: Profile, updates: { [P in keyof Profile]?: Profile[P] }): Profile {
        return { ...person, ...updates };
      }

      const person1 = {
        name: "Alice",
        age: 26,
        email: "alice@gmail.com"
      }

      console.log(updateProfile(person1, {age: 24}))

      
}