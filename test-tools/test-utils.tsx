import React from 'react'
import { render } from '@testing-library/react'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Layout from '../components/Layout/Layout'

const queryClient = new QueryClient()

const AllTheProviders = ({ children } : React.PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                {children}
            </Layout>
        </QueryClientProvider>
    )
}

const customRender = (ui : JSX.Element, options = {}) =>
  render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'

export {customRender as render}
