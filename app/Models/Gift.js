export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
    }
    get GiftsTemplate() {
        return `
        <div class="col-3">
            <div class="card gift-card">
            <img class="card-img img-fluid"
                src="${this.opened ? this.url : 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'}"
            onclick="app.giftsController.openGift('${this.id}')">
            <div class="card-body">
                <p>${this.tag}</p>
            </div>
            </div>
        </div>
    `
    }

}
