const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const lessons = [
    {id: 1,
    title: 'adalsj',
        lector: 'qedwsf',
        studens_list:['','ds','dfsg'],
        auditorium: 203,
        time_start: 11,
        time_end:121
    },

]

//делаем наш парсинг в формате json
app.use(bodyParser.json());

// парсит запросы по типу: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//  простой response - request
app.get("/", (req, res) => {
    res.send("Это стартовая страница нашего приложения");
});

app.get("/shedule", (req, res) => {
    res.send(lessons);
});
app.get("/shedule/:id", (req, res) => {
    let lesson = lessons.find( a => a.id === Number(req.params.id))
    res.send(lesson);
});

// установить порт, и слушать запросы
app.listen(3010, () => {
    console.log("Сервер запущен на 3001 порту");
});