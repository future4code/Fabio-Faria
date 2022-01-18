import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { signUp } from "./endpoints/signUp"

app.post('/users/signup', createUser)
// app.post('user/signup', signUp)
app.put('/users/:id', editUser)