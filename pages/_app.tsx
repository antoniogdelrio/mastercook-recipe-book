import '../src/styles/index.scss'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout/Layout'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import AuthContextProvider from '../src/contexts/AuthContext'
import Head from 'next/head'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mastercook Recipe Book</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  )
}
