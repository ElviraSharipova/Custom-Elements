// Селект

const element = document.querySelector('select');
const choices = new Choices(element, {
    itemSelectText: '',
    searchEnabled: false,



});



// Яндекс карты
ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [48.872185073737896, 2.354223999999991],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),




        myPlacemarkWithContent = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'Импортирован из макета',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'Subtract.svg',
            // Размеры метки.
            iconImageSize: [28, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects

        .add(myPlacemarkWithContent);
});




// Скролл

new SimpleBar(document.getElementById('scroll'), { autoHide: false, scrollbarMaxSize: 70, });




// Валидация формы

const validation = new JustValidate('.form');
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

validation
    .addField('#name', [{
            rule: 'required',
            errorMessage: 'Поле нужно заполнить',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: "Не достаточное количество символов"
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: "Вы ввели больше чем положено"
        }
    ])
    .addField('#email', [{
            rule: 'required',
            errorMessage: 'Поле нужно заполнить',
        },
        {
            rule: 'email',
            errorMessage: 'Вы не корректно ввели email',
        }
    ])
    .addField('#tel', [{
        rule: "function",
        validator: function(name, value) {
            const phone = selector.inputmask.unmaskedvalue();
            return phone.length === 10
        },
        errorMessage: 'Не достаточное количество символов в строке',
    }]);