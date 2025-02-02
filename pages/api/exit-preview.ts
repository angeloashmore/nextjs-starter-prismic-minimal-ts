import * as prismicNext from '@prismicio/next';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * This endpoint exits a preview session.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  prismicNext.exitPreview({ res, req });
}
