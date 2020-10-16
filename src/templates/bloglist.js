import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'

export default class BlogList extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()
    
        return (
          <Layout>
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/lake.png')`,
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                backgroundColor: '#399AD6',
                color: 'white',
                padding: '1rem',
              }}
            >
              Latest Developments
            </h1>
          </div>
          <section className="section">
            <div className="container">
              <div className="content">
  
            <div className="columns is-multiline">
            {posts &&
              posts.map(({ node: post }) => (
                <div className="is-parent column is-6" key={post.id}>
                  <article
                    className={`blog-list-item tile is-child box notification ${
                      post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                  >
                    <header>
                      {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                      <p className="post-meta">
                        <Link
                          className="title has-text-primary is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <span className="subtitle is-size-5 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    </header>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </article>
                </div>
              ))}

</div>
</div>

<div>
  <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            marginTop: '2rem',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
            marginLeft:'0%',
          }}
        >
      

    {!isLast && (
      <Link to={'/blog/page/' + nextPage} rel="next" margin-left='50px'>
        Next Page →
      </Link>
    )}
  </ul>

  <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            marginTop: '2rem',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
            marginLeft:'0%',
          }}
        >

  {currentPage === 2 ? (
    <Link to={`/blog`} rel="prev">
      ← Previous Page 
    </Link> )
    : !isFirst && (
      <Link to={'/blog/page/' + prevPage} rel="prev">
        ← Previous Page 
      </Link>
    )}
</ul>

    <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            marginTop: '2rem',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
            marginLeft:'0%',
          }}
        >
      

    {Array.from({ length: numPages }, (_, i) => (
        <li 
          key={`pagination-number${i + 1}`} 
          style={{
            margin: 0,
          }}
        >
          <Link
          to={`/${i === 0 ? './blog' : `./blog/page/` + (i+1)}`}
          style={{
          padding: '0.42rem',
          textDecoration: 'none',
          color: i + 1 === currentPage ? '#ffffff' : '',
          background: i + 1 === currentPage ? '#007acc' : '',
          }}
          >
            {i + 1}
          </Link>
        </li>
      ))}

      </ul>
      </div>

          </div>

        </section>

      </Layout>

        )
    }
}

export const pageQuery = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        limit: $limit
        skip: $skip
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
`