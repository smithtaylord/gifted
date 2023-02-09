import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandboxApi } from "./AxiosService.js"

class GiftsService {

    async openGift(giftId) {
        let foundGiftIndex = appState.gifts.findIndex(g => g.id == giftId)
        let foundGift = appState.gifts[foundGiftIndex]
        if (foundGift.opened == false) {
            foundGift.opened = true
            console.log('[found gift]', foundGift);
            const res = await sandboxApi.put(`/api/gifts/${giftId}`, foundGift)
            appState.gifts.splice(foundGiftIndex, 1, new Gift(res.data))
            appState.emit('gifts')
        }
    }
    async getGifts() {
        const res = await sandboxApi.get('/api/gifts')
        console.log(res.data);
        appState.gifts = res.data.map(g => new Gift(g))
        console.log(appState.gifts);

    }

}

export const giftsService = new GiftsService