import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';

import 'dayjs/locale/ru';

dayjs.extend(customParseFormat);
dayjs.extend(duration);

dayjs.locale('ru');

export default dayjs;

export { Dayjs } from 'dayjs';
