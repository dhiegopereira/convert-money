const express = require('express')
const app = express()
const path = require('path')
const convert = require('./lib/convert')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>{
    res.render('home')
})
app.get('/quotation', (req, res) => {
    const { quotation, amount } = req.query
    if(quotation && amount){
        const conversion = convert.convert(quotation, amount)
        res.render('quotation', {
            error: false,
            quotation: convert.toMoney(quotation),
            amount: convert.toMoney(amount),
            conversion: convert.toMoney(conversion)
        })
    }else{
        res.render('quotation', {
            error : 'Valores inválidos'
        })
    }
    
})

app.listen(3000, err => {
    if(err){
        console.log('not possible connect')
    }else{
        console.log('ConvertMyMoney is Online')
    }
})