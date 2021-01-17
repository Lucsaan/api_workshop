import express from 'express';

let app = express();

app.get("/test", (req, res, next) => {
    res.json(['Chandran', 'Yasin', 'Andi']);
})

app.post("/post", (req, res, next) => {
    console.log('request', req.body);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

