import DatePicker from 'vue2-thai-datepicker';
import ro from 'date-format-parse/lib/locale/ro';

const lang = {
  formatLocale: ro,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ro', lang);

export default lang;
