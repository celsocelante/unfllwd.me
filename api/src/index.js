import app from './app';

const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});