export function validation(forms) {

    forms.forEach(form => {
        const btnSubmit = form.querySelector('.frm-sub');
        const inputs = [...form];
        const arrowsChange = document.querySelectorAll('[data-change]');

        inputs.forEach(input => {
            if (input.type === 'number' || input.type === 'date') input.setAttribute('is-valid', 1);
            else if (input.type !== 'submit' && !input.dataset.change) input.setAttribute('is-valid', 0);
        });

        form.addEventListener('input', event => {
            if (event.target.getAttribute('is-valid')) validForm(event.target);
        });

        arrowsChange.forEach(arrow => arrow.addEventListener('click', () => {
            const input = document.querySelector(arrow.dataset.change);
            validWithoutReg(input);
        }));

        function validForm(input) {
            if (input.dataset.reg) validWithReg(input);
            else validWithoutReg(input); 
        }

        function validWithReg(input) {
            const reg = new RegExp(input.dataset.reg);

            if (!reg.test(input.value)) {
                input.setAttribute('is-valid', 0);
                input.classList.add('frm-inf__input--error');
                input.parentNode.classList.add('frm-inf__field--error');
            } else {
                input.setAttribute('is-valid', 1);
                input.classList.remove('frm-inf__input--error');
                input.parentNode.classList.remove('frm-inf__field--error');
            }
        }

        function validWithoutReg(input) {
            if (input.value === '' || input.value < 1) {
                input.setAttribute('is-valid', 0);
                input.classList.add('frm-inf__input--error');
                input.parentNode.classList.add('frm-inf__field--error');
            } else {
                input.setAttribute('is-valid', 1);
                input.classList.remove('frm-inf__input--error');
                input.parentNode.classList.remove('frm-inf__field--error');
            }
        }

        async function sendData() {
            const data = new FormData(form);

            let response = await fetch('mail.php', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                form.reset();
                inputs.forEach(el => {
                    if (el.type !== 'submit') el.setAttribute('is-valid', 0);
                });
            } else {
                alert('Не удалось отправит данные :(');
            }
        }

        btnSubmit.addEventListener('click', event => {
            event.preventDefault();
            let indexValid = [];

            inputs.forEach(input => {
                if (input.getAttribute('is-valid')) indexValid.push(input.getAttribute('is-valid'));
            });

            let result = indexValid.reduce((acc, item) => acc & item);

            if (!Boolean(result)) {
                alert('Ошибка');
                inputs.forEach(input => {
                    if (input.getAttribute('is-valid') == 0) {
                        input.classList.add('frm-inf__input--error');
                        input.parentNode.classList.add('frm-inf__field--error');
                    }
                })
            } else {
                alert('Успешно');
                sendData();
            }
        });
    });
}