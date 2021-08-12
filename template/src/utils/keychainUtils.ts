import * as Keychain from 'react-native-keychain';

const REFRESH_TOKEN = 'packageName-refresh-token';

/**
 *
 * @param token
 */
export const storeRefreshToken = async (token: string) => {
  try {
    return await Keychain.setGenericPassword(REFRESH_TOKEN, token);
  } catch (e) {
    throw Error('Issue with storing access token in keychain storage');
  }
};

/**
 *
 */
export const fetchRefreshToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    return credentials ? credentials.password : false;
  } catch (e) {
    throw Error('Issue fetching refresh token from keychain store');
  }
};

/**
 *
 */
export const removeRefreshToken = async () => {
  try {
    return await Keychain.resetGenericPassword();
  } catch (e) {
    console.log('This is the issue', e.message);
    throw Error('Issue with resetting generic password');
  }
};
