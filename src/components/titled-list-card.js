import { Card, Divider } from 'antd'
import React, { Fragment } from 'react'
import { ReactComponent as Hexagon } from '../assets/images/hexagon.svg'
import PropTypes from 'prop-types'
import { ReactComponent as Underline } from '../assets/images/underline.svg'
import styled from 'styled-components/macro'

const StyledCard = styled(Card)`
  cursor: initial;
  margin: 28px 0 0;

  .ant-card {
    &-head {
      color: white;
      margin: 0 0 11px;
    }

    &-body {
      border: 1px solid silver;
      border-radius: 3px;
      box-shadow: 0 3px 6px rgba(201, 201, 201, 0.5);
      padding: 0;
    }
  }

  &.ant-card-wider-padding {
    .ant-card {
      &-head {
        padding: 0 24px;
      }

      &-body {
        padding: 0;
      }
    }
  }
`
const StyledPrefixDiv = styled.div`
  font-size: 21px;
  font-weight: bold;
  left: 53px;
  position: absolute;
  top: 51px;
  transform: translate(-50%, -50%);
`
const StyledTitleDiv = styled.div`
  font-size: 24px;
  font-weight: medium;
  left: 95px;
  position: absolute;
  top: 53px;
  transform: translateY(-50%);
`
const StyledUnderline = styled(Underline)`
  height: 4px;
  left: 0;
  position: absolute;
  top: 103px;
  width: 100%;
`
const StyledDivider = styled(Divider)`
  margin: 0;
  width: 100%;
`
const TitledListCard = ({ children, loading, prefix, title }) => (
  <StyledCard
    bordered={false}
    className="secondary-background ternary-color"
    hoverable
    loading={loading}
    title={
      <>
        <Hexagon className="ternary-fill" />
        <StyledPrefixDiv>{prefix}</StyledPrefixDiv>
        <StyledTitleDiv>{title}</StyledTitleDiv>
        <StyledUnderline className="primary-fill" />
      </>
    }
  >
    {children &&
      (children.length === undefined
        ? children
        : children.map((c, i) =>
            i < children.length - 1 ? (
              <Fragment key={i}>
                {c}
                <StyledDivider />
              </Fragment>
            ) : (
              c
            )
          ))}
  </StyledCard>
)

TitledListCard.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  prefix: PropTypes.node,
  title: PropTypes.node.isRequired
}

TitledListCard.defaultProps = {
  children: null,
  loading: false,
  prefix: null
}

export default TitledListCard
