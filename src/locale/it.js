import DatePicker from 'vue2-thai-datepicker';
import it from 'date-format-parse/lib/locale/it';

const lang = {
  formatLocale: it,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('it', lang);

export default lang;
