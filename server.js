const http = require('http')
const url = require('url')
const Sequelize = require('sequelize')

const seq = new Sequelize('disco', 'root', '', { host: '127.0.0.1', dialect: 'mysql' })

seq.authenticate().then(() => {
    console.log('connection success')
}).catch((error) => {
    console.error('Unable to connect ot database, error')
})

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {

        const requrl = url.parse(req.url, true)
        const tab = requrl.pathname.split('/')
        console.log(tab)
        if (tab[1] === 'project') {

            console.log('pathname = ', requrl.pathname)
            console.log('query = ', requrl.query)
            res.setHeader('Content-type', 'text/html')
            res.end('Project id= ' + JSON.stringify(tab[2]))

        }
    }

})


server.listen("3000", () => {
    console.log("Server on 3000 listening...")
})