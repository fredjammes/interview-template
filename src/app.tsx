import {useQuery} from "react-query";
import {Box, CircularProgress, Stack, Typography} from "@mui/joy";

export const App = () => {
    const {data, isLoading} = useQuery('movies', getMovies)

    if (isLoading) return <Stack alignItems="center"
                                 justifyItems="center"><CircularProgress>...</CircularProgress></Stack>;
    return <Stack alignItems="center" justifyItems="center">
        <Typography level="h1">My movie library</Typography>
        <Box>We want some movie cards here</Box>
        <Box>Each card must route to a dedicated page of the movie</Box>
        <Box>{JSON.stringify(data)}</Box>
    </Stack>;
}

function getMovies() {
    return fetch('http://localhost:3000/movies').then(res => res.json());
}
