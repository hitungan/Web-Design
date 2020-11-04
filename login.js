const btn = document.querySelector('#hore');
const number = document.querySelector('#number');
btn.onclick = () => {
    window.localStorage.setItem('sl_number', number.value);
};

