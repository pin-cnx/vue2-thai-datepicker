import DatePicker from 'vue2-thai-datepicker';
import gl from 'date-format-parse/lib/locale/gl';

const lang = {
  formatLocale: gl,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('gl', lang);

export default lang;
