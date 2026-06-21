import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import VideoPlayer from '../pages/VideoPlayer'
import Channel from '../pages/Channel'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import CreateChannel from '../pages/CreateChannel'

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
                path : '/vedio/:vedioId',
                element : <VideoPlayer />
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
        element : <Dashboard />
    },
    {
        path : '*',
        element : <NotFound />
    }
])

export default routes ;