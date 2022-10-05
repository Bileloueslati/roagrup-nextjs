import { Languages } from "../__typescript/api";

export const SITE_NAME = "Roa grup";

export const pages = {
  home: {
    en: {
      id: 113,
    },

    fr: {
      id: 155,
    },
    tr: {
      id: 497,
    },
  },
  about: {
    en: {
      id: 219,
    },

    fr: {
      id: 224,
    },

    tr: {
      id: 285,
    },
  },

  products: {
    en: {
      id: 375,
    },
    fr: {
      id: 410,
    },

    tr: {
      id: 430,
    },
  },

  affiliatedCompanies: {
    en: {
      id: 440,
    },
    fr: {
      id: 450,
    },

    tr: {
      id: 452,
    },
  },

  news: {
    en: {
      id: 502,
    },
    fr: {
      id: 504,
    },

    tr: {
      id: 507,
    },
  },
} as const;

export const getPageId = (page: keyof typeof pages, language: Languages) =>
  pages[page][language].id;
