//Create the empty modal
var modalElement = document.createElement('ion-modal');
//Create the content of the modal
customElements.define('modal-page', class extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <ion-header>
        <ion-toolbar>
            <ion-title>Picture</ion-title>
            <ion-buttons slot="end">
                <ion-button onclick="closeModal()">
                    <ion-icon name="close"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
                <img src="${modalElement.componentProps.src}">
        </ion-content>
        `;
    }
});
//take pic from local storage
function openModal(photo){
    
    modalElement.component = 'modal-page';
    let pict = JSON.parse(localStorage.getItem("allRecipes"));
    modalElement.componentProps = {
        src: pict[photo].picture,
    };
    document.body.appendChild(modalElement);
    return modalElement.present();
}

function closeModal(){
    modalElement.dismiss();
}