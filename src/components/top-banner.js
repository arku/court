import { Card, Col, Row } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { ReactComponent as Underline } from '../assets/icons/underline.svg'
import styled from 'styled-components/macro'

const StyledRow = styled(Row)`
  line-height: 32px;
`
const StyledTitleCol = styled(Col)`
  font-weight: bold;
`
const StyledUnderline = styled(Underline)`
  bottom: -8px;
  left: 0;
  position: absolute;
`
const TopBanner = ({ description, extra, title }) => (
  <Card>
    <StyledRow>
      <StyledTitleCol offset={2} span={6}>
        {title}
        <StyledUnderline className="primary" />
      </StyledTitleCol>
      <Col span={12}>{description}</Col>
      <Col span={4}>{extra}</Col>
    </StyledRow>
  </Card>
)

TopBanner.propTypes = {
  description: PropTypes.string.isRequired,
  extra: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default TopBanner