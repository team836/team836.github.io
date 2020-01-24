import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostTemplate = props => {
  require('../styles/blog-post.scss')

  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div id="blog-post">
        <article>
          <header>
            <h1 className="title">{post.frontmatter.title}</h1>
            <p className="date">{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nl-item">
              {previous && (
                <Link to={previous.fields.slug} rel="prev" className="nl-link">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="nl-item">
              {next && (
                <Link to={next.fields.slug} rel="next" className="nl-link">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
  }
`
