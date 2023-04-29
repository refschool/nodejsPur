const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {

        const requrl = url.parse(req.url, true)
        const tab = requrl.pathname.split('/')
        console.log(tab)
        if (tab[1] === 'project') {

            console.log(requrl.pathname)
            console.log(requrl.query)
            res.setHeader('Content-type', 'text/html')
            res.end('Project id= ' + JSON.stringify(tab[2]))

        }
    }

})


server.listen("3000", () => {
    console.log("Server on 3000 listening...")
})