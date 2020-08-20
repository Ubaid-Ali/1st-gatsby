import React from "react"
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 style={{color: 'green', textTransform: 'uppercase'}} >Home Page</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </Layout>


      {/* <Link to='/blog'> Move to Blog </Link> <br />
      <Link to='/product'> Move to Product </Link> <br />
      <a href='http://www.github.com' > Guthub Website </a> */}
    </div>
  )
}
