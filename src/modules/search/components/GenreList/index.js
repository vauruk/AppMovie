import React from 'react'
import Text from '@UI/Text'
import Box from '@UI/Box'
import { TouchableOpacity, FlatList } from 'react-native'
import { propTypes, defaultProps } from './propTypes'

const GenreList = ({ onPress, data, title }) => {
    if (!data) {
        return null
    }

    return (
        <Box py={2} animation={'bounceIn'}>
            <Box direction={'row'} p={2}>
                <Text variant="h4" align="center" color="white">
                    {title}
                </Text>
            </Box>
            <FlatList
                data={data}
                style={{
                    width: '100%',
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <Box key={item.name} alignItems={'center'} my={1}>
                            <TouchableOpacity onPress={() => onPress(item)}>
                                <Text variant="h5">{item.name}</Text>
                            </TouchableOpacity>
                        </Box>
                    )
                }}
            />
        </Box>
    )
}

GenreList.propTypes = {
    ...propTypes,
}

GenreList.defaultProps = {
    ...defaultProps,
}

export default React.memo(GenreList)