import express from 'express';
import bodyParser from "body-parser";

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/test", (req, res, next) => {
    res.json(['Chandran', 'Yasin', 'Andi']);
})

app.post("/post", (req, res, next) => {
    console.log('request', req.body);
    res.json({"chandran": "ahahaha"});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

