import App from './app';

window.DatePicker.locale('th');

new window.Vue({
  render: h =>
    h(App, {
      props: {
        changeLocale: window.DatePicker.locale,
      },
    }),
}).$mount('#app');
