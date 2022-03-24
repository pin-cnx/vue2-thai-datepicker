import DatePicker from 'vue2-thai-datepicker';
import hu from 'date-format-parse/lib/locale/hu';

const lang = {
  formatLocale: hu,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: false,
};

DatePicker.locale('hu', lang);

export default lang;
