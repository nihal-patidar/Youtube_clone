import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import VideoPlayer from '../pages/VideoPage'
import Channel from '../pages/Channel'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import CreateChannel from '../pages/CreateChannel'
import VideoPage from '../pages/VideoPage'

const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout />,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path : '/video/:videoId',
                element : <VideoPage />
            },
            {
                path : '/channel/:channelId',
                element : <Channel />
            },
            {
                path : '/create-channel',
                element : <CreateChannel />
            }
        ],


    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/register',
        element : <Register />
    },
    {
        path : '/dashboard',
        element : <MainLayout />,
        children : [
            {
                index : true,
                element : <Home />
            }
        ]
    },
    {
        path : '*',
        element : <NotFound />
    }
])

export default routes ;