import DatePicker from 'vue2-thai-datepicker';
import bg from 'date-format-parse/lib/locale/bg';

const lang = {
  formatLocale: bg,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('bg', lang);

export default lang;
