import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { DiscussionEmbed } from 'disqus-react'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
  tags,
  title,
  helmet,
  date,
}) => {
  const PostContent = contentComponent || Content
  const disqusprops = {
    shortname: `ilyana-dev`
  };
  console.log(disqusprops)

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p style={{width: '100%', fontWeight: 'bold', color: '#3571B8'}}> Date Published: {date}</p>
            <p>
            <img src={ !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage} alt= {title} width="100%" />    
            </p>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
      
  <DiscussionEmbed
    shortname={disqusprops.shortname}
    config={disqusprops.config}
    />
</div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  date: PropTypes.string
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            {post.frontmatter.featuredimage ? (
              <meta name="image" content={`https://ilyana.dev` + `${post.frontmatter.featuredimage.childImageSharp.fluid.src}`} />) : 
              <meta name="image" content={`https://ilyana.dev` + `/img/og-image.jpg`} />
            }              
             <meta property="og:type" content="blog" />          
             <meta property="og:image:alt" content={`${post.frontmatter.title}`} />          
             <meta property="og:locale" content="en_US" />         
             {post.frontmatter.featuredimage ? (
              <meta property="og:image" content={`https://ilyana.dev` + `${post.frontmatter.featuredimage.childImageSharp.fluid.src}`} />) : 
              <meta property="og:image" content={`https://ilyana.dev` + `/img/og-image.jpg`} />
            }              
             <meta property="og:title" content={`${post.frontmatter.title}`} />
             <meta property="og:description" content={`${post.frontmatter.description}`} />
             <meta property="og:site_name" content="https://ilyana.dev" />
             <meta name="twitter:title" content={`${post.frontmatter.title}`} />

             {post.frontmatter.featuredimage ? (
              <meta name="twitter:image" content={`https://ilyana.dev` + `${post.frontmatter.featuredimage.childImageSharp.fluid.src}`} />) : 
              <meta name="twitter:image" content={`https://ilyana.dev` + `/img/og-image.jpg`} />
            }           
            </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
