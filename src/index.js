import 'normalize.css'
import './styles/main.scss'
import {Select} from './select/select'
import {SelectModal} from './select/selectModal'


document.querySelectorAll('.header__burger-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('header__burger-btn_active');
    });
});

document.querySelector('.header__burger-btn').addEventListener('click', function (ev) {
    ev.preventDefault();
    if (this.classList.contains('header__burger-btn_active')) {
        document.getElementById("modal-menu").style.top = "53px";
        document.getElementById("header__info").style.opacity = "0";
    }
    else {
        document.querySelector("#modal-menu").style.top = "-9000px";
        document.getElementById("header__info").style.opacity = "1";
    }
})


const select = new Select('#select', {
    placeholder: 'Выберите из списка',
    // selectedId: '1',
    data: [
        {id: '1', value: 'Telegram'},
        {id: '2', value: 'WatsApp'},
        {id: '3', value: 'SMS сообщение'},
        {id: '4', value: 'Звонок на телефон'}
    ]
})

const selectModal = new SelectModal('#selectModal', {
    placeholder: 'Выберите из списка',
    // selectedId: '1',
    data: [
        {id: '1', value: 'Telegram'},
        {id: '2', value: 'WatsApp'},
        {id: '3', value: 'SMS сообщение'},
        {id: '4', value: 'Звонок на телефон'}
    ]
})