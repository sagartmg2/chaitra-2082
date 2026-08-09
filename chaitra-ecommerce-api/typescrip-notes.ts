let user: { name: string } = { name: "ram" }


interface User {
    name: string
}

interface User{
    address?:string
}


let user2: User = { name: "ram", }

user2.address = "balaju"
