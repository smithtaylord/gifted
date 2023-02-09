import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts() {
    let template = ''
    appState.gifts.forEach(g => template += g.GiftsTemplate)
    setHTML('sandbox-gifts', template)
}

export class GiftsController {
    constructor() {
        this.getGifts()
        appState.on('gifts', _drawGifts)
    }

    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }

    }

    async openGift(giftId) {
        try {
            await giftsService.openGift(giftId)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }

    }
    async createGift() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            const form = window.event.target
            const formData = getFormData(form)
            await giftsService.createGift(formData)
            // @ts-ignore
            form.reset()

        } catch (error) {
            Pop.error(error)
            console.error(error.message)
        }

    }

}