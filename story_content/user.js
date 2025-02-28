function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6l0XCqOwh6G":
        Script1();
        break;
      case "6RlIuZyE6ba":
        Script2();
        break;
      case "5Z4PJQ5I4Jj":
        Script3();
        break;
      case "6FJaJSocypW":
        Script4();
        break;
      case "6mNbnOlJf3D":
        Script5();
        break;
      case "5h76mgk6LzD":
        Script6();
        break;
      case "68xtvUyyN7a":
        Script7();
        break;
      case "6aGKfIKoO24":
        Script8();
        break;
      case "6RYbO9yip0E":
        Script9();
        break;
      case "5eMV2q44DuH":
        Script10();
        break;
      case "6MIsMgVKgVv":
        Script11();
        break;
      case "6awceBHERJv":
        Script12();
        break;
      case "6EPha0DaFQ5":
        Script13();
        break;
      case "6elStDXYVC0":
        Script14();
        break;
      case "5j5xexqyGAB":
        Script15();
        break;
      case "5YTK270Z5jQ":
        Script16();
        break;
      case "6pP8MStbLkP":
        Script17();
        break;
  }
}

function Script1()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script2()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script3()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Получаем значения числовых переменных
var p_fin = player.GetVar("P_fin");
var a_fin = player.GetVar("A_fin");
var e_fin = player.GetVar("E_fin");
var i_fin = player.GetVar("I_fin");

// Функция для преобразования числового значения в букву
function getLetter(value, uppercaseLetter) {
    if (value > 32) {
        return uppercaseLetter;  // Заглавная буква
    } else if (value >= 24 && value <= 31) {
        return uppercaseLetter.toLowerCase();  // Строчная буква
    } else {
        return "0";  // Ноль, если меньше 24
    }
}

// Генерируем текстовую строку
var resultString = getLetter(p_fin, "P") + 
                   getLetter(a_fin, "A") + 
                   getLetter(e_fin, "E") + 
                   getLetter(i_fin, "I");

// Записываем результат в новую переменную Storyline
player.SetVar("ResultString", resultString);

}

function Script4()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script5()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script6()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script7()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script8()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script9()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script10()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script11()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script12()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script13()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Храним предыдущее значение переменных
var lastP = player.GetVar("P");
var lastA = player.GetVar("A");
var lastE = player.GetVar("E");
var lastI = player.GetVar("I");

// Запускаем наблюдателя (обновление каждые 100 мс)
setInterval(function() {
    var p = player.GetVar("P");
    var a = player.GetVar("A");
    var e = player.GetVar("E");
    var i = player.GetVar("I");

    // Проверяем, изменились ли переменные
    if (p !== lastP || a !== lastA || e !== lastE || i !== lastI) {
        // Обновляем сумму
        var sum = p + a + e + i;
        player.SetVar("Sum", sum);

        // Обновляем сохраненные значения
        lastP = p;
        lastA = a;
        lastE = e;
        lastI = i;
    }
}, 100);

}

function Script14()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Получаем значения числовых переменных
var p_fin = player.GetVar("P_fin");
var a_fin = player.GetVar("A_fin");
var e_fin = player.GetVar("E_fin");
var i_fin = player.GetVar("I_fin");

// Функция для преобразования числового значения в букву
function getLetter(value, uppercaseLetter) {
    if (value > 32) {
        return uppercaseLetter;  // Заглавная буква
    } else if (value >= 24 && value <= 31) {
        return uppercaseLetter.toLowerCase();  // Строчная буква
    } else {
        return "0";  // Ноль, если меньше 24
    }
}

// Генерируем текстовую строку
var resultString = getLetter(p_fin, "P") + 
                   getLetter(a_fin, "A") + 
                   getLetter(e_fin, "E") + 
                   getLetter(i_fin, "I");

// Записываем результат в новую переменную Storyline
player.SetVar("ResultString", resultString);

}

function Script15()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Получаем значения числовых переменных
var p_fin = player.GetVar("P_fin");
var a_fin = player.GetVar("A_fin");
var e_fin = player.GetVar("E_fin");
var i_fin = player.GetVar("I_fin");

// Функция для преобразования числового значения в букву
function getLetter(value, uppercaseLetter) {
    return (value > 32) ? uppercaseLetter : uppercaseLetter.toLowerCase();
}

// Генерируем текстовую строку
var resultString = getLetter(p_fin, "P") + 
                   getLetter(a_fin, "A") + 
                   getLetter(e_fin, "E") + 
                   getLetter(i_fin, "I");

// Записываем результат в новую переменную Storyline
player.SetVar("ResultString_1", resultString);

}

function Script16()
{
  // Получаем доступ к API Storyline
var player = GetPlayer();

// Получаем текущее значение ResultString
var resultString = player.GetVar("ResultString");

// Объект соответствий ResultString -> Надпись
var titles = {
    "Paei": "Производитель",
    "pAei": "Администратор",
    "paЕi0": "Предприниматель",
    "paeI": "Интегратор",
    "PAEI": "«Книжный» менеджер – Мифическое существо. В природе не встречается",
    "PAei": "Губернатор",
    "PAeI": "Пастырь",
    "pAeI": "Сердечный администратор",
    "PaeI": "Гид-проводник",
    "PaEi": "Основатель",
    "PAE0": "Разработчик",
    "paEI": "Учитель",
    "pAEI": "Усердный новичок",
    "pAEi": "Адвокат дьявола",
    "PaEI": "Государственник",
    "P000": "Одинокий рейнджер",
    "0A00": "Бюрократ",
    "00Е0": "Поджигатель",
    "000I": "Суперпоследователь",
    "0000": "Пустышка",
    "PA00": "Рабовладелец",
    "PA0I": "Благодушный правитель",
    "0A0I": "Бюрократ-Патриарх",
    "P00I": "Бездарный тренер",
    "P0E0": "Основоположник",
    "PAE0": "Разработчик-одиночка",
    "00EI": "Демагог",
    "0AEI": "Ложный лидер",
    "0AE0": "Доставала",
    "P0EI": "Харизматический гуру"
};

// Проверяем, есть ли ResultString в списке
var title = titles[resultString] || "Неизвестное значение"; // Если нет совпадения, подставим дефолтное значение

// Записываем результат в переменную Storyline
player.SetVar("Title", title);

}

function Script17()
{
  / Получаем доступ к API Storyline
var player = GetPlayer();

// Получаем текущее значение ResultString
var resultString = player.GetVar("ResultString_1");

// Объект соответствий ResultString -> Надпись
var titles = {
    "Paei": "Производитель",
    "pAei": "Администратор",
    "paЕi0": "Предприниматель",
    "paeI": "Интегратор",
    "PAEI": "«Книжный» менеджер – Мифическое существо. В природе не встречается",
    "PAei": "Губернатор",
    "PAeI": "Пастырь",
    "pAeI": "Сердечный администратор",
    "PaeI": "Гид-проводник",
    "PaEi": "Основатель",
    "PAE0": "Разработчик",
    "paEI": "Учитель",
    "pAEI": "Усердный новичок",
    "pAEi": "Адвокат дьявола",
    "PaEI": "Государственник",
    "P000": "Одинокий рейнджер",
    "0A00": "Бюрократ",
    "00Е0": "Поджигатель",
    "000I": "Суперпоследователь",
    "0000": "Пустышка",
    "PA00": "Рабовладелец",
    "PA0I": "Благодушный правитель",
    "0A0I": "Бюрократ-Патриарх",
    "P00I": "Бездарный тренер",
    "P0E0": "Основоположник",
    "PAE0": "Разработчик-одиночка",
    "00EI": "Демагог",
    "0AEI": "Ложный лидер",
    "0AE0": "Доставала",
    "P0EI": "Харизматический гуру"
};

// Проверяем, есть ли ResultString в списке
var title = titles[resultString] || "Неизвестное значение"; // Если нет совпадения, подставим дефолтное значение

// Записываем результат в переменную Storyline
player.SetVar("Title_1", title);

}

