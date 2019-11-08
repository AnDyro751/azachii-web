import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../../components/seo"
// import Image from '../../components/image';
import MainHome from "../components/Home/index"
import ReactTooltip from 'react-tooltip'

const Index = () => (
  <Layout>
    <MainHome />
    <ReactTooltip />
  </Layout>
)

export default Index
