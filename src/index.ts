
//Basics
let company: string = "BowieCompany"
let isPublished: boolean = true
let x: any = 50
let age:number = 30

let ids:number[] = [1,2,3,4,5]
let array: any[] = [1, true, 'hello']

//Tuple

let person: [number, string, boolean] = [1, "Brad", true]

// Tuple array

let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Brad2'],
    [3, 'Brad3'],
]

// Union

let pid: string | number | boolean = 22

pid = true

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }

// Type Assertion

let cid: any = 1
// let customerId = <number>cid
let customerId = cid as boolean


//Functions
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(15, 12))


//Void Type
function log(message: string | number): void {
    console.log(message)
}

//Interfaces

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
    age: 5
}

// user1.id = 5

interface MathFunc {
    (x: number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y

console.log(sub(1,2))

//Class

class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        console.log(this)
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} est bien inscris`
    }

}

const brad = new Person(1, 'Brandon')
const mike = new Person(2, 'Mike')

console.log(brad.register())
