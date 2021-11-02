import React from "react"
import Layout from "../components/layout/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <section>
        <h1>Welcome to BibleHistory.info</h1>
        <p>New here? Check out these articles.</p>
      </section>
      <section>
        <h1>Browse by Topic</h1>
        <h2>Translations</h2>
        <p>Want to find out about different Bible translations, their history, and translation philosophies, check out the translations topic. </p>
        <h2>Dead Sea Scrolls</h2>
        <p>Read about the most important archaeological find in our history.</p>
      </section>
    </Layout>
  )
}

export default IndexPage
