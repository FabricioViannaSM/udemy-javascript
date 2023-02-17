class House {
    constructor(sqrMeters, style, yard){
        this.sqrMeters = sqrMeters
        this.style = style
        this.yard = yard
    }

    paintKitchen(color){
        this.kitchenColor = color
        console.log("The kitchen was painted " + color)
    }

    get getStyle(){
        return "The style is: " + this.style
    }

    set setStyle(style){
        this.style = style
    }
}

modernHouse = new House(50, "undefined style", true)

modernHouse.paintKitchen("gray")
console.log(modernHouse.kitchenColor)

console.log(modernHouse.getStyle)
modernHouse.setStyle = "modern"
console.log(modernHouse.getStyle)