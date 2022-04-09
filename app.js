import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import router from './src/router/index.js';
import db from './src/config/db/index.js';
import methodOverride from 'method-override';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Http logger
app.use(morgan('combined'));

// Set up static
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Json
app.use(express.urlencoded({
     extended: true,
}));
app.use(express.json());

// method override;
app.use(methodOverride('_method'));

// Config engine
app.engine('hbs', engine({
     extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src' ,'resources' ,'views'));

// database
db();

// Router
router(app);

app.listen(port, ()=>{
     console.log(`Server is listening on http://localhost:${port}`);
});

