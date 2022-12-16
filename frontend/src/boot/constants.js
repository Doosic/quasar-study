import { boot } from 'quasar/wrappers';

// 글로벌 설정값 참고 도큐먼트
// https://vuejs.org/api/application.html#app-config-globalproperties
export default boot(({ app }) => {
  app.config.globalProperties.hello = 'Hello Quasar!!';
});
