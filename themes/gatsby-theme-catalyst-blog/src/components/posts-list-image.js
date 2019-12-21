/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const PostListImage = props => {
  return (
    <Img
      sx={{
        height: "200px",
        mb: 3,
      }}
      fluid={props.image}
    />
  )
}

export default PostListImage