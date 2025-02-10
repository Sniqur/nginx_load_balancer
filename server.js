const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const appName = process.env.APP_NAME

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));



// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route for home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for about page
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/class", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "class.html"));
});

app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "blog.html"));
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
