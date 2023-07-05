import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import '@fontsource/public-sans';
import {QueryClient, QueryClientProvider} from "react-query";
import {MovieList} from "./MovieList.tsx";
import {CssBaseline, CssVarsProvider} from "@mui/joy";
import {MovieDetails} from "./MovieDetails.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet/>,
        children: [
            {
                path: "/",
                element: <MovieList/>
            },
            {
                path: "/:movieId",
                element: <MovieDetails/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssVarsProvider>
            <CssBaseline/>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </CssVarsProvider>
    </React.StrictMode>,
)
