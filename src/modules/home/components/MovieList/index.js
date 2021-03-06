import React from 'react'
import Box from '@UI/Box'
import Text from '@UI/Text'
import MovieCard from '@modules/home/components/MovieCard'
import { FlatList } from 'react-native'
import { propTypes, defaultProps } from './propTypes'

const MovieList = ({ title, movies, onMoviePress }) => {
    return (
        <Box animation={'slideInRight'} pb={2}>
            <Box pb={1} px={1}>
                <Text variant="h4">{title}</Text>
            </Box>
            <FlatList
                data={movies}
                style={{
                    width: '100%',
                }}
                ItemSeparatorComponent={() => (
                    <Box fullWidth={false} width={20} />
                )}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <MovieCard
                            data={{
                                title: item.title,
                                uri: `${item.poster_path}`,
                                release_date: item.release_date,
                            }}
                            key={item.title}
                            onPress={() => onMoviePress(item)}
                        />
                    )
                }}
            />
        </Box>
    )
}
MovieList.propTypes = {
    ...propTypes,
}

MovieList.defaultProps = {
    ...defaultProps,
}

export default React.memo(MovieList)
