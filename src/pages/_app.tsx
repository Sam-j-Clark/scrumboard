import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { loggerLink } from '@trpc/client/links/loggerLink'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import SuperJSON from 'superjson'
import { AppRouter } from '../server/route/app.router'
import { createTRPCNext } from '@trpc/next'


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default createTRPCNext<AppRouter>({
  config({ ctx }) {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc` : `http://localhost:3000/api/trpc`;

    const links = [
      loggerLink(),
      httpBatchLink({
        url,
      })
    ]

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,

          }
        }
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": 1
          }
        }
        return {} // return an empty object if ctx.req doesn't exist
      },
      links,
      transformer: SuperJSON
    }
  },
  ssr: false
}).withTRPC(App)