import DatePicker from 'vue2-thai-datepicker';
import af from 'date-format-parse/lib/locale/af';

const lang = {
  formatLocale: af,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('af', lang);

export default lang;
