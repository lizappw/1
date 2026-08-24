import '../scss/style.scss';

console.log('Webpack работает!');

// Сайдбар
const burger = document.querySelector('.header__burger');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.sidebar__close');
const overlay = document.querySelector('.overlay');

const closeSidebar = () => {
    sidebar?.classList.remove('sidebar--open');
    overlay?.classList.remove('overlay--visible');
};

if (burger) {
    burger.addEventListener('click', () => {
        sidebar.classList.add('sidebar--open');
        overlay.classList.add('overlay--visible');
    });
}

if (closeButton) {
    closeButton.addEventListener('click', closeSidebar);
}

if (overlay) {
    overlay.addEventListener('click', closeSidebar);
}


// Выбор пункта 
const sidebarLinks = document.querySelectorAll('.sidebar__link');

sidebarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        sidebarLinks.forEach((item) => {
            item.classList.remove('sidebar__link--active');
        });

        link.classList.add('sidebar__link--active');
    });
});


// Выбор языка
const languages = document.querySelectorAll('.sidebar__language');

languages.forEach((language) => {
    language.addEventListener('click', () => {
        languages.forEach((item) => {
            item.classList.remove('sidebar__language--active');
        });

        language.classList.add('sidebar__language--active');
    });
});


// Табы
const introLinks = document.querySelectorAll('.intro__link');

introLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        introLinks.forEach((item) => {
            item.classList.remove('intro__link--active');
        });

        link.classList.add('intro__link--active');
    });
});

// Читать далее
const descriptionMore = document.querySelector('.description__more');
const descriptionMoreText = descriptionMore?.querySelector('span');
const descriptionTextMore = document.querySelector('.description__text-more');

if (descriptionMore && descriptionTextMore) {
    descriptionMore.addEventListener('click', () => {
        const isOpen = descriptionTextMore.classList.toggle('description__text-more--visible');

        if (isOpen) {
            descriptionMoreText.textContent = 'Скрыть';
            descriptionMore.classList.add('description__more--open');
        } else {
            descriptionMoreText.textContent = 'Читать далее';
            descriptionMore.classList.remove('description__more--open');
        }
    });
}


// Показать все 
const brandsMore = document.querySelector('.brands__more');
const brandsWrapper = document.querySelector('.brands__wrapper');

if (brandsMore && brandsWrapper) {
    brandsMore.addEventListener('click', () => {
        brandsWrapper.classList.toggle('brands__wrapper--open');

        const isOpen = brandsWrapper.classList.contains('brands__wrapper--open');

        brandsMore.querySelector('span').textContent =
            isOpen ? 'Скрыть' : 'Показать все';

        brandsMore.classList.toggle('brands__more--open', isOpen);
    });
}


// Показать все виды техники
const techniquesMore = document.querySelector('.techniques__more');
const techniquesList = document.querySelector('.techniques__list');

if (techniquesMore && techniquesList) {
    techniquesMore.addEventListener('click', () => {
      
      const techniquesMore = document.querySelector('.techniques__more');
const techniquesList = document.querySelector('.techniques__list');

if (techniquesMore && techniquesList) {
    techniquesMore.addEventListener('click', () => {
        techniquesList.classList.toggle('techniques__list--open');

        const isOpen = techniquesList.classList.contains('techniques__list--open');

        techniquesMore.querySelector('span').textContent =
            isOpen ? 'Скрыть' : 'Показать все';

        techniquesMore.classList.toggle('techniques__more--open', isOpen);
    });
}

        techniquesList.classList.toggle('techniques__list--open');

        const isOpen = techniquesList.classList.contains('techniques__list--open');

        techniquesMore.querySelector('span').textContent =
            isOpen ? 'Скрыть' : 'Показать все';

        techniquesMore.classList.toggle('techniques__more--open', isOpen);
    });
}

// Модальные окна
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalClose = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');

const phoneButtons = document.querySelectorAll(
    '.header__action.phone, .sidebar__action[aria-label="Заказать звонок"]'
);

const feedbackButtons = document.querySelectorAll(
    '.header__action.message, .sidebar__action[aria-label="Обратная связь"]'
);

const requestButton = document.querySelector('.header__action.repair');

const openModal = (type) => {
    if (!modal || !modalTitle) {
        return;
    }

    if (type === 'call') {
        modalTitle.textContent = 'Заказать звонок';

        const emailInput = modal.querySelector('.modal__email');

        if (emailInput) {
            emailInput.style.display = 'none';
        }

        const messageInput = modal.querySelector('.modal__textarea');

        if (messageInput) {
            messageInput.style.display = 'none';
        }
    } else {
        modalTitle.textContent = 'Обратная связь';

        const emailInput = modal.querySelector('.modal__email');

        if (emailInput) {
            emailInput.style.display = 'block';
        }

        const messageInput = modal.querySelector('.modal__textarea');

        if (messageInput) {
            messageInput.style.display = 'block';
        }
    }

    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    if (!modal) {
        return;
    }

    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
};

phoneButtons.forEach((button) => {
    button.addEventListener('click', () => {
        openModal('call');
    });
});

feedbackButtons.forEach((button) => {
    button.addEventListener('click', () => {
        openModal('feedback');
    });
});

if (requestButton) {
    requestButton.addEventListener('click', () => {
        openModal('feedback');
    });
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Кнопки Заказать
const orderButtons = document.querySelectorAll('.prices__order');

orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
        openModal('call');
    });
});


const commersialButtons = document.querySelectorAll('.prices__commercial');

commersialButtons.forEach((button) => {
    button.addEventListener('click', () => {
        openModal('call');
    });
});