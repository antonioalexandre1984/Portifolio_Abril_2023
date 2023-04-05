import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';
/*
interface Request {
  headers: {
    [key: string]: string;
  };
} */

export function getPrismicClient(req?: unknown): DefaultClient {
  if (!process.env.PRISMIC_API_ENDPOINT || !process.env.PRISMIC_ACCESS_TOKEN) {
    throw new Error(
      'PRISMIC_API_ENDPOINT and PRISMIC_ACCESS_TOKEN are required'
    );
  }

  const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return prismic;
}
