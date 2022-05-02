const { AppState } = require("../AppState.js");
const { House } = require("../models/House.js");
const { api } = require("./AxiosService.js");



class housesService {
    async getHouses() {
        const res = await api.get('api/houses')
        AppState.houses = res.data.map(h => new House(h))
    }
    async getHouseById(houseId) {
        const res = await api.get('api/houses/' + houseId)
        AppState.house = new House(res.data)
    }
    async deleteHouse(houseId) {
        await api.delete('api/houses/' + houseId)
    }
    async createHouse(newHouse) {
        const res = await api.post('api/houses', newHouse)
        AppState.houses.push(new House(res.data))
        return res.data
    }
    async editHouse(editedHouse) {
        const res = await api.put('api/houses/' + editedHouse.id, editedHouse)
        AppState.house = new House(res.data)
    }

}

export const housesService = new HousesService()