class Car {
    constructor(engine, fuel, automaticTransmission){
        this.engine = engine
        this.fuel = fuel
        this.automaticTransmission = automaticTransmission
    }
}

Car.prototype.engine = "UE"
Car.prototype.explodes = false

let marea  = new Car("2.0", "gasoline", false)
marea.explodes = true

console.log(marea.explodes)