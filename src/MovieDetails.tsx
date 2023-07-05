import {Stack, styled, Typography} from "@mui/joy";

export const MovieDetails = () => {

    return (
        <Stack alignItems="center">
            <Typography level="h1">🎬🎬 Movie details 🍿🍿</Typography>
            <Typography>This page should be used in order to display the following design :</Typography>
            <Image__Container src="/MovieDetails.png"/>
        </Stack>
    );
};

const Image__Container = styled("img")`
  border: 2px solid black;
  border-radius: 8px;
  padding: 8px;
  width: 1024px;
`;
