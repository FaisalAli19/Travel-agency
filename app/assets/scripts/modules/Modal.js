import $ from "jquery";

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.modelClose = $(".modal__close");

        this.events();
    }
    events(){
        //Clicking the button
        this.openModalButton.click(this.openModal.bind(this));
        //clicking close
        this.modelClose.click(this.closeModal.bind(this));
        //pressing any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeModal();
        }
        
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;
