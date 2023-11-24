// Этот файл - подключение готовых компонентов

import * as checkingSupportWebp from './functions/webp_support.js';

checkingSupportWebp.isWebp();

// Навигация

import { topNavigation } from './functions/navigation.js';

topNavigation();

// Слайдер-свайпер

import { workSwiper } from './functions/swiper.js';

workSwiper();

// Модальные окна

import { modal } from './functions/modal-window.js';

modal();

// Валидация формы

import { validation } from './functions/valid-form.js';

const forms = document.querySelectorAll('.frm');

if (forms) validation(forms);

// Аккордеон

import { accordeonWork } from './functions/accordeon.js';

const accordeon = document.querySelector('.accordeon');

if (accordeon) accordeonWork();

// Галерея

import { workGalery } from './functions/galery.js';

const galeryContainer = document.querySelector('.galery-container');

if (galeryContainer) workGalery();