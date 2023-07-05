import {Link, Stack, styled, Typography} from "@mui/joy";
import {useNavigate} from "react-router-dom";

export const MovieList = () => {
    const navigate = useNavigate();

    return <Stack alignItems="center" justifyContent="center" padding={4} gap={4}>
        <Typography level="h1">🎬🎬 My movie library 🍿🍿</Typography>
        <Typography level="body1">
            Using the given data (check movie.ts for the model), display a list of movie.
        </Typography>
        <Typography level="body1">
            Each movie should be clickable (<Link onClick={() => navigate("/tt0499549")}>With imdbID as the key</Link>)
            and should redirect to the movie details page.
        </Typography>
        <Typography level="body1">
            Movie List looks like the following :
        </Typography>
        <Image__Container src="/MovieList.png"/>
        <Typography level="body1">
            Data are available at http://localhost:3000/movies (You can start the server using <code>npm run api</code>)
        </Typography>
        <Typography level="h2">Available libraries</Typography>
        <Typography level="body1">
            <Link target="_blank" rel="noreferrer" href="https://tanstack.com/query/v3/docs/react/overview">React
                Query</Link> for data fetching.
        </Typography>
        <Typography level="body1">
            <Link target="_blank" rel="noreferrer" href="https://mui.com/joy-ui/getting-started/">MUI
                Joy</Link> component library.
        </Typography><Typography level="body1">
        <Link target="_blank" rel="noreferrer" href="https://reactrouter.com/en/main/start/tutorial">React
            Router</Link> routing library.
    </Typography>
    </Stack>;
}

const Image__Container = styled("img")`
  border: 2px solid black;
  border-radius: 8px;
  padding: 8px;
  width: 1024px;
`;
