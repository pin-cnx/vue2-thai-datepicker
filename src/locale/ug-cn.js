import DatePicker from 'vue2-thai-datepicker';
import ugCN from 'date-format-parse/lib/locale/ug-cn';

const lang = {
  formatLocale: ugCN,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ug-cn', lang);

export default lang;
