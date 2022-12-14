import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { LocalStorage } from 'quasar';

const messages = {
  'en-US': {
    productName: 'Quasar Lecture',
  },
  'ko-KR': {
    productName: '퀘이사 강의',
  },
};

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  const locale = LocalStorage.getItem('lang') || 'ko-KR';
  const i18n = createI18n({
    locale,
    messages,
  });
  app.use(i18n);
});
