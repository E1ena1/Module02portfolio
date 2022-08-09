import 'normalize.css'
import './styles/main.scss'

document.querySelectorAll('.header__burger-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('header__burger-btn_active');
    });
});