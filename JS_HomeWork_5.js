
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
// 









// function Tags (titleOfTags, actions, atributs){
//     this.titleOfTags = titleOfTags;
//     this.actions = actions;
//     this.atributs = atributs;
// };

// let titleOfTag1 = "Link";
// let action1 = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок."
// let atribute1 = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];

// let a = new Tags(titleOfTag1, action1, atribute1);
// console.log(a)



// let titleOfTag2 = "Div";
// let action2 = "лемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей.";
// let atribute2 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
// ];

// let div = new Tags(titleOfTag2, action2, atribute2);
// console.log(div)




// let titleOfTag3 = "Header";
// let action3 = "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. ";
// let atribute3 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}
// ];

// let h1 = new Tags(titleOfTag3, action3, atribute3);
// console.log(h1)



// let titleOfTag4 = "Span";
// let action4 = "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.";
// let atribute4 = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}
// ];

// let span = new Tags(titleOfTag4, action4, atribute4);
// console.log(span)



// let titleOfTag5 = "Input";
// let action5 = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем";
// let atribute5 = [
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'}
// ];

// let input = new Tags(titleOfTag5, action5, atribute5);
// console.log(input);

// let titleOfTag6 = "Form";
// let action6 = "Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.";
// let atribute6 = [
//     {titleOfAttr: '', actionOfAttr: ''},
//     {titleOfAttr: '', actionOfAttr: ''},
//     {titleOfAttr: '', actionOfAttr: ''}
// ];

// let form = new Tags(titleOfTag6, action6, atribute6);
// console.log(form)

// let titleOfTag7 = "Option";
// let action7 = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ";
// let atribute7 = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
// ];

// let option = new Tags(titleOfTag7, action7, atribute7);
// console.log(option)

// let titleOfTag8 = "Select";
// let action8 = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее";
// let atribute8 = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'}
// ];

// let select = new Tags(titleOfTag8, action8, atribute8);
// console.log(select)









//  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
  
//        titleOfTag: 'area',
//        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//        attrs: [
//        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//        {/*some props and values*/},
//        {/*...*/},
//        {/*...*/},
//        ]


// class Tags {
//     constructor(titleOfTag, action, attrs){
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     };
// };




// let titleOfTag1 = "Link";
// let action1 = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок."
// let atribute1 = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];


// let a = new Tags(titleOfTag1, action1, atribute1);
// console.log(a)



// let titleOfTag2 = "Div";
// let action2 = "лемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей.";
// let atribute2 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
// ];

// let div = new Tags(titleOfTag2, action2, atribute2);
// console.log(div)




// let titleOfTag3 = "Header";
// let action3 = "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. ";
// let atribute3 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}
// ];

// let h1 = new Tags(titleOfTag3, action3, atribute3);
// console.log(h1)



// let titleOfTag4 = "Span";
// let action4 = "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.";
// let atribute4 = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}
// ];

// let span = new Tags(titleOfTag4, action4, atribute4);
// console.log(span)



// let titleOfTag5 = "Input";
// let action5 = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем";
// let atribute5 = [
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'}
// ];

// let input = new Tags(titleOfTag5, action5, atribute5);
// console.log(input);

// let titleOfTag6 = "Form";
// let action6 = "Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.";
// let atribute6 = [
//     {titleOfAttr: '', actionOfAttr: ''},
//     {titleOfAttr: '', actionOfAttr: ''},
//     {titleOfAttr: '', actionOfAttr: ''}
// ];

// let form = new Tags(titleOfTag6, action6, atribute6);
// console.log(form)

// let titleOfTag7 = "Option";
// let action7 = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ";
// let atribute7 = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
// ];

// let option = new Tags(titleOfTag7, action7, atribute7);
// console.log(option)

// let titleOfTag8 = "Select";
// let action8 = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее";
// let atribute8 = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'}
// ];

// let select = new Tags(titleOfTag8, action8, atribute8);
// console.log(select)








// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//     model: "BMX_X5",
//     produser: "Germany",
//     year: 2016,
//     max_speed: 120,
//     power: 3.0,
//     drive: function(){
//         console.log(`Їдеио зі швидкістю ${this.max_speed} на годину`);
//     },
//     info: function(){
//         console.log(this);
//     },
//     increaseMaxSpeed: function (newSpeed){
//         if(newSpeed > this.max_speed){
//             this.max_speed += newSpeed;
//         };
//     },
//     changeYear: function(newValue){
//         this.year = newValue;
//     },
//     addDriver: function(driver){
//         car.driver = driver_1;
//     }
// };


// let driver_1 = {
//     name: "Vasya",
//     age: 30,
//     experience: 5
// };


// car.info();
// car.drive();
// car.increaseMaxSpeed(240);
// car.changeYear(2019);
// car.addDriver();

// car.info();


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Toyota (model, produser, year, max_speed, power) {
//     this.model = model;
//     this.produser = produser;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.power = power;

//     this.info = function(){
//         console.log(this);
//     };

//     this.drive = function(){
//         console.log(`Їдеио зі швидкістю ${this.max_speed} на годину`);
//     };

//     this.increaseMaxSpeed = function(newSpeedam) {
//             this.max_speed += newSpeedam;
//     };

//     this.changeYear = function(newValue){
//         this.year = newValue;
//     };

//     this.addDriver = function(driver){
//         this.driver = Vasya;
//     }
// };

// let Vasya = {
//     name: "Vasya",
//     age: 34,
//     experience: 3
// };

// let corolla = new Toyota("CX-5", "Japan", 2015, 280, 3.0)

// corolla.info();
// corolla.drive();
// corolla.increaseMaxSpeed(20);
// corolla.changeYear(1998);
// corolla.addDriver(Vasya);


// corolla.drive();
// corolla.info();



// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, 
//   об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class BMW{
//     constructor(model, produser, year, max_speed, power){
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.power = power;
//     };

//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.max_speed } км на годину`);
//     };

//     info(){
//         console.log(this);
//     };

//     increaseMaxSpeed (newSpeed){
//         this.max_speed += newSpeed;
//     };

//     changeYear(newValue){
//         this.year = newValue;
//     };

//     addDriver(driver){
//         this.driver = bohdan;
//     }
// };

// let bohdan = {
//     name: "Bohdan",
//     age: 26,
//     profession: "driver",
//     experience: 1
// };

// let X6 = new BMW("X6", "Germany", 2020, 310, "4.0");

// X6.drive();
// X6.info();
// X6.increaseMaxSpeed(30);
// X6.changeYear(2021);
// X6.addDriver(bohdan)


// X6.drive();
// X6.info();



// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Popelushka{
//     constructor(name, age, foot_size){
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     };

//     person(){
//         console.log(this);
//     }
// };


// let girl_1 = new Popelushka("Kate", 30, 39);
// let girl_2 = new Popelushka("Roksa", 32, 38);
// let girl_3 = new Popelushka("Nadia", 33, 38);
// let girl_4 = new Popelushka("Julia", 27, 37);
// let girl_5 = new Popelushka("Ivanka", 25, 36);
// let girl_6 = new Popelushka("Oksana", 28, 37);
// let girl_7 = new Popelushka("Olga", 21, 40);
// let girl_8 = new Popelushka("Danna", 29, 35);
// let girl_9 = new Popelushka("Inna", 26, 39.4);
// let girl_10 = new Popelushka("ira", 22, 41); 

// let girls = [
//     girl_1,
//     girl_2,
//     girl_3,
//     girl_4,
//     girl_5,
//     girl_6,
//     girl_7,
//     girl_8,
//     girl_9,
//     girl_10
// ];


// // console.log(girls);

// class Prince {
//     constructor(name, age, shoe_size){
//         this.name = name;
//         this.age = age;
//         this.shoe_size = shoe_size;
//     };

//     info(){
//         console.log(this);
//     }

//     couple(array){
//         for(let i of array){
//             if(this.shoe_size === i.foot_size && i.age === 25){
//                 this.prinsec = i;
//                 console.log(`May girl is ${i.name}`)
//             }
//         }
//     }
// };

// let boy = new Prince("Bohdan", 26, 36);

// boy.couple(girls);
// boy.info();



// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Popelushka(name, age, foot_size){
    this.name = name;
    this.age = age;
    this.foot_size = foot_size;

    this.couple = function(array){
        for(let index of girls){
            if(index.foot_size === prince.shoe_size){
                console.log(`My name is ${index.name} and my prince is ${prince.name}`)
            } else {
                console.log(`Oh shett my foot don't fit to your shoe`);
            }
        }
    }
};



let girl_1 = new Popelushka("Kate", 30, 39);
let girl_2 = new Popelushka("Roksa", 32, 38);
let girl_3 = new Popelushka("Nadia", 33, 38);
let girl_4 = new Popelushka("Julia", 27, 37);
let girl_5 = new Popelushka("Ivanka", 25, 36);
let girl_6 = new Popelushka("Oksana", 28, 37);
let girl_7 = new Popelushka("Olga", 21, 40);
let girl_8 = new Popelushka("Danna", 29, 35);
let girl_9 = new Popelushka("Inna", 26, 39.4);
let girl_10 = new Popelushka("ira", 22, 41); 

let girls = [girl_1, girl_2, girl_3, girl_4, girl_5, girl_6, girl_7, girl_8, girl_9, girl_10];

let prince = {
    name: "Bohdan",
    age: 26,
    shoe_size: 36
};


girl_1.couple(girls);
