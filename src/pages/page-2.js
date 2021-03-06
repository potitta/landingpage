import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Slides from './shoebox'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <Slides />
  </Layout>
)

export default SecondPage
