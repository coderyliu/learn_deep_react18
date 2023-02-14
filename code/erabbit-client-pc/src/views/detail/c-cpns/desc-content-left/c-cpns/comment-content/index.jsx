import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { CommentContentWrapper } from './style'

const CommentContent = memo((props) => {
  return (
    <CommentContentWrapper>
      <h2>comment</h2>
    </CommentContentWrapper>
  )
})

CommentContent.propTypes = {}

export default CommentContent