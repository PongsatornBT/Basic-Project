let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-square-check"></i> Succesfully submitted';
let errorMsg = '<i class="fa-sharp fa-solid fa-circle-exclamation"></i> Please fix the error';
let invalidMsg = '<i class="fa-solid fa-file"></i> Invalid input, check again';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 5000);
}