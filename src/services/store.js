import { find } from 'lodash'

export default class Store {
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    static get(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    static getValueById(key, id) {
        const data = Store.get(key)
        return find(data, x => Number(x.id) === Number(id))
    }
}
