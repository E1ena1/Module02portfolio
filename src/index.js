import 'normalize.css'
import './styles/main.scss'
import {Select} from './select/select'

document.querySelectorAll('.header__burger-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('header__burger-btn_active');
    });
});

const select = new Select('#select', {
    placeholder: 'Telegram',
    // selectedId: '1',
    data: [
        // {id: '1', value: 'Telegram'},
        {id: '2', value: 'WatsApp'},
        {id: '3', value: 'Viber'},
        {id: '4', value: 'Звонок на телефон'},
        {id: '5', value: 'SMS сообщение'}
    ]
})
