import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <Link to={`${props.destiny}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>