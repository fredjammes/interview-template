import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import '@fontsource/public-sans';
import {QueryClient, QueryClientProvider} from "react-query";
import {App} from "./app.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    }
]);

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>,
)
