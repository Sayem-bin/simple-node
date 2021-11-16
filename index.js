const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json());

const port = 5000;

const users = [
    { id: 0, name: 'raerbea', email: 'rabasdasdea@gmail.com', phone: '0182828882' },
    { id: 1, name: 'rabea', email: 'rabea@gmail.com', phone: '0182828882' },
    { id: 2, name: 'raseda', email: 'raseda@gmail.com', phone: '0182828882' },
    { id: 3, name: 'nupur', email: 'nupur@gmail.com', phone: '0182828882' },
    { id: 4, name: 'rashid', email: 'rashid@gmail.com', phone: '0182828882' },
    { id: 5, name: 'kalu', email: 'kalu@gmail.com', phone: '0182828882' },
    { id: 6, name: 'dipjol', email: 'dipjol@gmail.com', phone: '0182828882' },
    { id: 7, name: 'sabana', email: 'sabana@gmail.com', phone: '0182828882' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes
            (search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
});

// app.METHOD 

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})



// app.get('/users', (req, res) => {
//     res.send(users)
// })

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const user = users[id];
//     res.send(user);
// })


// app.get('/', (req, res) => {
//     res.send('Hi there.I cant implement properly node js and . it will be ok but now it takes time')
// })





app.listen(port, () => {
    console.log('this is port', 5000)
})