import DatePicker from 'vue2-thai-datepicker';
import fi from 'date-format-parse/lib/locale/fi';

const lang = {
  formatLocale: fi,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('fi', lang);

export default lang;
