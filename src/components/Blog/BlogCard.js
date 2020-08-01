import React from "react"
import "../../css/blog-card.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog

  return (
    <article className="blog">
      <div className="img-container">
        <Image fluid={image.fluid} className="img" alt="single post" />
      </div>
      <div className="footer">
        <h6 className="date">{published}</h6>
        <div className="blog-title">
          <h4>{title}</h4>
        </div>
        <AniLink fade className="btn-primary" to={`/blog/${slug}`}>
          read more
        </AniLink>
      </div>
    </article>
  )
}

export default BlogCard
