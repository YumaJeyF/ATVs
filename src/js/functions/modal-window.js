import { vars } from "../_vars.js";

export function modal() {
    const { body, container } = vars;
    const btnsOpen = document.querySelectorAll('[data-modal]');
    const btnsClose = document.querySelectorAll('.btn-close');
    const modalsContainers = document.querySelectorAll('.modal-container');

    btnsOpen.forEach(btn => btn.addEventListener('click', modalOpen));
    btnsClose.forEach(btn => btn.addEventListener('click', () =>  modalClose(btn.closest('.modal-container'))));

    function modalOpen() {
        const modal = document.querySelector(this.dataset.modal);
        const paddingRight = window.innerWidth - vars.body.offsetWidth + 'px';

        if (!modal.classList.contains('modal-container--active')) {
            modal.classList.add('modal-container--active');
            modal.lastElementChild.classList.add('modal-window--active');

            if (!modal.dataset.quad) {
                body.style.top = -window.scrollY + 'px';
                body.style.position = 'fixed';
                container.style.paddingRight = paddingRight;
            } else {
                modal.closest('.modal-window').style.overflow = 'hidden';
                modal.closest('[data-main-container]').style.background = 'none';
            }

            modalCloseOnClick(modal)
        }
        if (this.classList.contains('path__btn-name')) {
            modal.lastElementChild.scrollTo({
                top: modal.lastElementChild.scrollHeight,
                behavior: 'instant'
            });
        } else {
            modal.lastElementChild.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        }
    }

    function modalClose(modal) {
        if (modal.classList.contains('modal-container--active')) {
            modal.classList.remove('modal-container--active');
            modal.lastElementChild.classList.remove('modal-window--active');

            if (!modal.dataset.quad) {
                vars.body.style.position = '';
                window.scrollTo(0, parseInt(vars.body.style.top) * -1);
                vars.container.style.paddingRight = '';
            } else {
                modal.closest('.modal-window').style.overflow = '';
                modal.closest('[data-main-container]').style.background = 'rgba(18,18,20,.8)';
            }
        }
    }

    function modalCloseOnClick(modal) {
        modal.addEventListener('click', event => {
            if (modal.dataset.quad) {
                if (!event.target.closest('.modal')) modalClose(modal);
            } else {
                if (!event.target.closest('.modal-window'))  modalClose(modal);
            }
        });
    }

    window.addEventListener('keydown', event => {
        let modalQuad;
        let modalMain;

        if (event.key === 'Escape') {
            modalsContainers.forEach(modal => {
                if (modal.dataset.mainContainer && modal.classList.contains('modal-container--active')) modalMain = modal;
                if (modal.dataset.quad && modal.classList.contains('modal-container--active')) modalQuad = modal;
            });

            if (modalQuad && modalQuad.classList.contains('modal-container--active')) modalClose(modalQuad);

            else if (modalMain && modalMain.classList.contains('modal-container--active')) {
                if ((modalQuad && !modalQuad.classList.contains('modal-container--active')) || !modalQuad && modalMain.classList.contains('modal-container--active')) {
                    modalClose(modalMain);
                }
            }
        }
    });
}