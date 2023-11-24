export function accordeonWork() {
    const accordeonTitles = document.querySelectorAll('.accordeon__question');

    accordeonTitles.forEach(title => title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        if (!content.classList.contains('accordeon__content--active') && !content.style.maxHeight) {
            title.lastElementChild.classList.add('accordeon__icon--rotate');
            title.parentNode.classList.add('accordeon__inf--active');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('accordeon__content--active');
        } else {
            title.lastElementChild.classList.remove('accordeon__icon--rotate');
            title.parentNode.classList.remove('accordeon__inf--active');
            content.style.maxHeight = null;
            content.classList.remove('accordeon__content--active');
        }
    }));
}