import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { RankingWrapper } from './style'

const Ranking = memo((props) => {
  return (
    <RankingWrapper>
      <div>ranking page</div>
    </RankingWrapper>
  )
})

Ranking.propTypes = {}

export default Ranking