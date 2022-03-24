import DatePicker from 'vue2-thai-datepicker';
import bn from 'date-format-parse/lib/locale/bn';

const lang = {
  formatLocale: bn,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('bn', lang);

export default lang;
