import React from 'react'
import { UserProvider } from './UserContext'

describe('<UserProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserProvider />)
  })
})