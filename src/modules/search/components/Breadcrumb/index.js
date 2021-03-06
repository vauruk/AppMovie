import React from 'react'
import Text from '@UI/Text'
import Box from '@UI/Box'
import { TouchableOpacity } from 'react-native'
import BackButton from '@modules/navigation/BackButton'
import { LABELS } from '@modules/search/helpers'
import ArrowDownIcon from '@UI/Icon/ArrowDownIcon'
import LoopIcon from '@UI/Icon/LoopIcon'
import { propTypes, defaultProps } from './propTypes'

const Breadcrumb = ({
    onPressGoBack,
    onPressChoose,
    onPressGenre,
    onPressSearch,
    choose,
    genre,
}) => (
    <Box
        alignItems={'center'}
        animation={'fadeInDown'}
        direction={'row'}
        alignItems={'center'}
        pb={2}>
        <BackButton htmlColor={'white'} onPress={onPressGoBack} />
        <TouchableOpacity onPress={onPressChoose}>
            <Box
                fullWidth={false}
                height={40}
                alignItems={'center'}
                direction={'row'}
                pr={2}>
                <Text variant="h4" color="white" fullWidth={false}>
                    {LABELS[choose.value].name || 'não informado'}
                </Text>
                <ArrowDownIcon color={'white'} />
            </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressGenre}>
            <Box
                fullWidth={false}
                height={40}
                alignItems={'center'}
                direction={'row'}>
                <Text variant="h5" color="white" fullWidth={false}>
                    {genre.name || 'não informado'}
                </Text>
                <ArrowDownIcon color={'white'} />
            </Box>
        </TouchableOpacity>
        <Box
            height={40}
            display={'flex'}
            justifyContent={'center'}
            alignItems="flex-end">
            <TouchableOpacity onPress={onPressSearch}>
                <Box px={4}>
                    <LoopIcon color={'white'} />
                </Box>
            </TouchableOpacity>
        </Box>
    </Box>
)

Breadcrumb.propTypes = {
    ...propTypes,
}

Breadcrumb.defaultProps = {
    ...defaultProps,
}

export default React.memo(Breadcrumb)
