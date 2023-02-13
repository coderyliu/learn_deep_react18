import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { ProfileWrapper } from './style'

const Profile = memo((props) => {
  return (
    <ProfileWrapper>
      <h2>profile center</h2>
    </ProfileWrapper>
  )
})

Profile.propTypes = {}

export default Profile