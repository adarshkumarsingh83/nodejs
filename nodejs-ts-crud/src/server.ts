
import app from './app';
import { PORT } from './constants/Api.constants';
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));