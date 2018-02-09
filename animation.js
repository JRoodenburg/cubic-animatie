let items = [];
for (let i = 1; i <= 5; i++) {
    items[i] = document.querySelector('#box' + i);
}

const slide = () => {

    for (let i = 1; i <= 5; i++) {
        items[i].classList.toggle('box--slide-out');
    }

}