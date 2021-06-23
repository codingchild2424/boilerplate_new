import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

//포트번호
const port = 5000;

//mongoDB 연결
//mongoDB를 클라우드에서 연결할때는 계정 비밀번호에 특수문자가 없도록 하기
mongoose.connect('mongodb+srv://mongofrog1:1234@cluster0.yqz3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')) //연결된다면, console에 연결되었음을 표시함
    .catch(err => console.log(err)) //error를 표시하는 코드

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('mainpage');
})

app.listen(port, ()=>{
    console.log(`express is running on http://localhost:${port}`);
})