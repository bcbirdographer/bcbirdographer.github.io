carets = document.getElementsByClassName('caret');

for (var i = 0; i < carets.length; i++) {
    carets[i].addEventListener('click', function() {
        this.classList.toggle('caret-down')
        parent = this.parentElement;
        parent.querySelector('.nested').classList.toggle('active')
    })
}
