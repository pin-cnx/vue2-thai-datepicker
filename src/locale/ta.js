import DatePicker from 'vue2-thai-datepicker';
import ta from 'date-format-parse/lib/locale/ta';

const lang = {
  formatLocale: ta,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ta', lang);

export default lang;
