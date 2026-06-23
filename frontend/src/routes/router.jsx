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
import MyChannel from '../pages/MyChannel'
import ChannelLayout from '../components/channel/ChannelLayout'

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
                path : 'video/:videoId',
                element : <VideoPage />
            },
            {
                path : "channel",
                element : <ChannelLayout />,
                children : [
                    {
                        path : 'create',
                        element : <CreateChannel />
                    },
                    {
                        path : ':id',
                        element : <MyChannel />
                    }
                ]
            },

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