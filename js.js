// zadacha #1


let timeOfDay = prompt("Введите время суток (утро, день, вечер):");

if (typeof timeOfDay === "string" && timeOfDay.trim() !== "") {
    timeOfDay = timeOfDay.trim().toLowerCase();

    if (timeOfDay === "утро") {
        alert("Рекомендуем вам кофе!");
    } else if (timeOfDay === "день") {
        alert("Рекомендуем вам чай!");
    } else if (timeOfDay === "вечер") {
        alert("Рекомендуем вам горячий шоколад!");
    } else {
        alert("Ошибка: Введено некорректное время суток. Попробуйте еще раз.");
    }
} else {
    alert("Ошибка: Пожалуйста, введите корректное значение времени суток.");
}

// zadacha #2

const student = {
	name: prompt("Введите имя:"),
	age: parseInt(prompt("Введите возраст:"), 10),
	subject: prompt("Введите предмет:"),
	grade: prompt("Введите оценку:")
};

console.log("Исходные данные:", student);

student.age += 5;

console.log("Данные после увеличения возраста на 5 лет:", student);

// zadacha #3

const movies = [
	{ title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
	{ title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
	{ title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
	{ title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
	{ title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

console.log(movies[1].director); 
console.log(movies[3].genre); 

// zadacha #4

const shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];

shoppingList.unshift("яйца"); 
console.log("После добавления в начало:", shoppingList);

shoppingList.pop(); 
console.log("После удаления последнего:", shoppingList);

shoppingList.splice(2, 1, "творог", "йогурт");
console.log("После замены третьего элемента:", shoppingList);


