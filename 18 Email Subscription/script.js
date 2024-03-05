
const scriptURL = 'https://script.google.com/macros/s/AKfycbyJHGG0XLhhKAP8KF2Xxs6CbbqeMwCAvKKlJtDbdbGLVlsLF98BE2oN-ZLi_N6kUM1FTw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank you for subscribe"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

