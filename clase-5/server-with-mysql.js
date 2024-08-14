import { createApp } from "./app.js";

import { movieModel } from "./models/mysql/movie.js";

createApp({ movieModel });