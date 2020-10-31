import Box from '@UI/Box'
import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import HeaderNavigationItem from '@modules/home/components/HeaderNavigationItem'

const HeaderNavigation = ({ options }) => (
    <Box direction="row" py={3}>
        {options.map((option) => (
            <HeaderNavigationItem label={option.label} />
        ))}
    </Box>
)

HeaderNavigation.propTypes = {
    ...propTypes,
}

HeaderNavigation.defaultProps = {
    ...defaultProps,
}

export default React.memo(HeaderNavigation)