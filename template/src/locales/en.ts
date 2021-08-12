import Pages from '../enum/Pages';

export default {
  general: {
    errors: {
      default: 'Something went wrong',
      informationNotFound: 'Information not found',
    },
  },
  [Pages.HOME]: {
    title: 'home',
  },
};
