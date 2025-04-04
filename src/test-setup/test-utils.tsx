import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { createSystem, defaultConfig } from '@chakra-ui/react'

const system = createSystem(defaultConfig)

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Provider, ...options })

export * from '@testing-library/react'

export { customRender as render }
export { default as userEvent } from '@testing-library/user-event'
