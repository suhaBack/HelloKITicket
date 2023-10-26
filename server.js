const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const index = path.join(__dirname, 'client/build/index.html')

const { sequelize } = require('./models')


app.set('view engine', 'html');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));  

app.use(express.static(path.join(__dirname, 'client/build')));


// json형식의 데이터를 처리할 수 있게 설정
app.use(express.json());

var cors = require('cors');
// 브라우저 cors 이슈를 막기 위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
app.use(cors());


app.get('/', (req,res) => {
  res.sendFile(index)
});

sequelize.sync({ force: true })
  .then(() => {
    console.log("DB연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.get('*',(req,res,next)=>{
  res.sendFile(index)
})

app.listen(8080, function () {
  console.log('8080에서 대기중')
}); 