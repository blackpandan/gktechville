// import * as af from "./assets/locales/en.json";
// import * as ar from "./assets/locales/ar.json";
// import * as bn from "./assets/locales/bn.json";
// import * as de from "./assets/locales/de.json";
// import * as el from "./assets/locales/el.json";
// import * as en from "./assets/locales/en.json";
// import * as es from "./assets/locales/es.json";
// import * as fa from "./assets/locales/fa.json";
// import * as fil from "./assets/locales/fil.json";
// import * as fr from "./assets/locales/fr.json";
// import * as he from "./assets/locales/he.json";
// import * as hi from "./assets/locales/hi.json";
// import * as id from "./assets/locales/id.json";
// import * as it from "./assets/locales/it.json";
// import * as ja from "./assets/locales/ja.json";
// import * as ko from "./assets/locales/ko.json";
// import * as nl from "./assets/locales/nl.json";
// import * as pl from "./assets/locales/pl.json";
// import * as pt from "./assets/locales/pt.json";
// import * as ro from "./assets/locales/ro.json";
// import * as ru from "./assets/locales/ru.json";
// import * as sq from "./assets/locales/sq.json";
// import * as th from "./assets/locales/th.json";
// import * as tr from "./assets/locales/tr.json";
// import * as uk from "./assets/locales/uk.json";
// import * as vi from "./assets/locales/vi.json";
// import * as zh from "./assets/locales/zh.json";
// const messages = {
//   af, ar, bn, de, el, en, es, fa, fil, fr, he, hi, id, it, ja, ko, nl, pl, pt, ro, ru, sq, th, tr, uk, vi, zh
// };

const requireContext= require('require-context');

function loadLocalMessages (){
  const locales = requireContext('../../assets/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach(key =>{
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key)
    }
  });
  return messages;
};

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gktech',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {rel:"preconnect", href:"https://fonts.googleapis.com"},
      {rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:true},
      {href:"https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap", rel:"stylesheet"},
      {href:"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap", rel:"stylesheet"},
      {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
      {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
      {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
      {rel:"manifest", href:"/site.webmanifest"},
      {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/css/flag-icons.min.css", integrity:"sha512-UwbBNAFoECXUPeDhlKR3zzWU3j8ddKIQQsDOsKhXQGdiB5i3IHEXr9kXx82+gaHigbNKbTDp3VY/G6gZqva6ZQ==", crossorigin:"anonymous", referrerpolicy:"no-referrer" }
    ],
    script: [
      {hid:"fontawesome", src:"https://kit.fontawesome.com/4c4a079b95.js", crossorigin:"anonymous", defer: true}
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss',
    '~assets/scss/colors.scss'
  ],

  server: {
    host: '0.0.0.0'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios'
    '@nuxtjs/i18n',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/device',
  ],

  i18n: {
    	locales: ["af", "ar", "bn", "de", "el", "en", "es", "fa", "fil", "fr", "he", "hi", "id", "it", "ja", "ko", "nl", "pl", "pt", "ro", "ru", "sq", "th", "tr", "uk", "vi", "zh"],
      defaultLocale: "en",
      vueI18n: {
        fallbackLocale:"en",
        messages: loadLocalMessages()
      }
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
