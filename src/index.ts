import Express, { json } from 'express'
import router from './router'
import cors from 'cors'

const App = Express()
const PORT = 8000

App.use(cors())
    .use(json())
    .use(router)

App.listen(PORT, () => {
    console.log(`Running at http://127.0.0.1:${PORT}/`);
})