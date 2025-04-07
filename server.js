const express = require('express');
const path = require('path');
const pairRouter = require('./pair');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/pair', pairRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
