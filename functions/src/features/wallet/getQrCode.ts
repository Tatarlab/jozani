/* eslint-disable @typescript-eslint/no-var-requires */
import { onCall } from 'firebase-functions/v2/https';
import { pick } from 'lodash';
import * as QrCode from 'qrcode';

export const getQrCode = onCall({}, async (req) => {
  const { address } = pick(req.data, ['address']);

  return QrCode.toDataURL(address);
});
