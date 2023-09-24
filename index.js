require('dotenv').config()

const axios = require('axios')
// console.log(process.env)
// console.log(new Date(1694034000 * 1000).toLocaleString())


// const appid = process.env.appid
// const q='Itu' = process.env.q
// const units = process.env.units
// const cnt = process.env.cnt
// const lang = process.env.lang
// const url = process.env.url

//desestruturar
const {appid, q, units, cnt, language, url} = process.env

const end = `${url}?appid=${appid}&q=${q}&units=${units}&cnt=${cnt}&lang=${language}`


//async/await

async function teste(){
    const resultado = await axios.get(end)
    for (let previsao of resultado.data.list)
    console.log(`descrição: ${previsao.weather[0].description}`)
}

teste()

//ao inves de devolver um retorno, devolve uma promisse
// function fatorial(n) {
//     if(n < 0) return Promise.reject("n não pode ser negativo")
//     let res = 1
//     for (let i = 1; i <= n; res *= 1) {
//         return Promise.resolve(res)
//     }
// }

// const chamadaComAsyncAwait = async () => {
//     try {
//         const resultado = await fatorial(10)
//         console.log(resultado)
//     }
//     catch(e) {
//         console.log("erro: " + erro)
//     }
// }

// function chamadaComThenCatch() {
//     fatorial(n)
//     .then(res => console.log(res))
//     .catch(erro => console.log("Erro: " + erro))
// }
// chamadaComThenCatch()

// async function hello() {
//     return "hello"
// }
// hello().then(res => console.log(res))

axios.get(end)
.then((res) => {
    console.log(res['data'])
    console.log('====================================')
    return res["data"]
})
.then((res) => {
    console.log(res.list)
    console.log("==========================================")
    return res.list
})
.then((res) => {
    
    for (let previsao of res) {
        console.log(new Date (+previsao.dt * 1000).toLocaleString())
        console.log(`temperatura Minima: ${previsao.main.temp_min}`)
        console.log(`temperatura Maxima: ${previsao.main.temp_max}`)
        console.log("*********************************************")
    }
    console.log('--------------------------------------')
    // res.forEach(previsao => {
    //     console.log(previsao.dt);
    // })
})