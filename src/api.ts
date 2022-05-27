import * as trpc from '@trpc/server';

export const apiRouter =
  trpc.router()
    .query('hello', {
      resolve: async (req) => {
        return {
          payload: 'Hi Fam',
        };
      }
    });

export type ApiRouter = typeof apiRouter;

import * as trpcExpress from '@trpc/server/adapters/express';
export const api = trpcExpress.createExpressMiddleware({
  router: apiRouter,
});