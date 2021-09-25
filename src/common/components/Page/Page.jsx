import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import ContentBox from '@/common/components/ContentBox/ContentBox'

export default function Page({ className = '', header = '', children }) {
    return (
        <Container>
            <ContentBox className={`mt-4 mb-5 ${className}`} header={header}>
                {children}
            </ContentBox>
        </Container>
    )
}

Page.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
}

Page.defaultProps = {
    className: '',
    header: '',
}
