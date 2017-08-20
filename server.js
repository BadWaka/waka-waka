const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// 设置静态资源目录
app.use(express.static('public'));

// 设置模板
app.set('views', path.join(__dirname, 'views')); // 放模板文件的目录
app.engine('html', ejs.renderFile); // 更改后缀名
app.set('view engine', 'html'); // 模板引擎

app.get('/', function (req, res) {
    res.render('index');
});

const server = app.listen(3000, function () {
    const host = server
        .address()
        .address;
    const port = server
        .address()
        .port;

    console.log(`Listening at http://${host}:${port}`);
});