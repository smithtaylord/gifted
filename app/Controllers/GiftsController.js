import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
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

}