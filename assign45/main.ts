type car = {
manufacture: string
model: string
[key: string]: any
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
return{
    manufacture,
    model,
    ...optional,

}
}
const mycar: car = createCar("toyota", "corolla", { color: "Black", Year: "2002"})
console.log(mycar);