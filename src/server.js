const app = require('./app.js')

app.set('port', process.env.PORT)
app.listen(app.get('port'), () => console.log('Server is running!'))
