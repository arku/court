import { Badge, List, Popover } from 'antd'
import { ReactComponent as Alert } from '../assets/images/alert.svg'
import { ReactComponent as Bell } from '../assets/images/bell.svg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import TimeAgo from './time-ago'
import styled from 'styled-components/macro'

const StyledListItem = styled(List.Item)`
  max-width: 358px;
  padding: 11px 17px 23px 18px;
  position: relative;

  .ant-list-item-meta {
    align-items: center;
    display: flex;

    &-title {
      font-weight: normal;
      line-height: 16px;
    }

    &-description {
      bottom: 4px;
      font-weight: bold;
      position: absolute;
      right: 6px;
    }
  }
`
const Notification = ({ date, message, to, type }) => (
  <StyledListItem>
    <Link to={to}>
      <List.Item.Meta
        avatar={<Alert className={`${type}-fill`} />}
        description={<TimeAgo className={`${type}-color`}>{date}</TimeAgo>}
        title={message}
      />
    </Link>
  </StyledListItem>
)

Notification.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  message: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'error', 'warning']).isRequired
}

const StyledList = styled(List)`
  margin-right: -16px;
  max-height: 380px;
  overflow-y: scroll;
  padding-right: 16px;
`
const StyledLink = styled(Link)`
  float: right;
  font-size: 10px;
  line-height: 21px;
`
const StyledBadge = styled(Badge)`
  .ant-badge-count {
    padding: 0 4px;
  }
`
const Notifications = ({ notifications }) => (
  <Popover
    arrowPointAtCenter
    content={
      <StyledList dataSource={notifications} renderItem={Notification} />
    }
    placement="bottomRight"
    title={
      <>
        Notifications <StyledLink to="/notifications">History</StyledLink>
      </>
    }
    trigger="click"
  >
    <StyledBadge count={notifications.length}>
      <Bell />
    </StyledBadge>
  </Popover>
)

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      message: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['info', 'error', 'warning']).isRequired
    }).isRequired
  ).isRequired
}

export default Notifications
