export class House {
    constructor(data = {}) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.year = data.year
        this.price = data.price
        this.img = data.imgUrl
        this.description = data.description

    }
}