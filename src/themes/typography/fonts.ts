/**
 *  Stores the default fonts
 */

import { isIOS } from '../../utils/platformUtils';

export default {
  primary: isIOS ? 'Helvetica Neue' : 'sans-serif',
};
