/*
Вывести в терминал строку “Hello World!”
Создать переменную для каждого типа данных
Вывести в консоль редактора кода созданные переменные
Вывести ее тип через оператор typeof и функцию typeof
Попробовать изменить переменную объявленную через const
Попробовать изменить переменную с типом object объявленную через const
Попробовать изменить переменную с типом object объявленную через let
Попробовать изменить переменную с типом object объявленную через var
Установить редактор кода VS Code 
Ознакомиться с системой контроля версий GitHub (завести аккаунт)
*/

/*Вывести в терминал строку “Hello World!”*/

console.log('Hello World!');

/*Создать переменную для каждого типа данных*/

 let valueStr = 'hello', /* строка */
    valueNumber = 25, /* число */
    valueBoolean = true, /* булевое */
    valueNull = null,
    valueUndefined;
    const valueObject = {
        userName: "nemo",
        userNumber: 134
    },

    valueBigInt = 1234567890123456789012345678901234567890n;

    /*Попробовать изменить переменную с типом object объявленную через const*/ 
    /* объект помоему единственый кто может изменяться являйсь константой*/
    /* var & let тоже изменят объект */
    const user = {
        name: 'Ivan',
        age: 39,
    }

    user.age = 27;
    console.log(user)
    /*Вывести ее тип через оператор typeof и функцию typeof*/
    console.log(typeof valueStr);
    console.log(typeof valueNumber);
    console.log(typeof valueBoolean);
    console.log(typeof valueNull);
    console.log(typeof valueUndefined)
    console.log(typeof valueBigInt);
    console.log(typeof valueObject);
    /* про typeof информация есть а про функцию typeof не нашел толи я не так понял, можно подробнее */ 

    /*Попробовать изменить переменную объявленную через const*/

    /*переменая написаная через не изменяеться, исключение в том случае когда переменная являеться объектом */