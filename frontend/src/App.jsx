import './App.css'
import { api } from './utils/config'

// Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Hooks
import { useAuth } from './hooks/useAuth'
import { useEffect, useState } from 'react'

// Componentes
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import EditProfile from './pages/EditProfile/EditProfile'
import Profile from './pages/Profile/Profile'
import Photo from './pages/Photo/Photo'
import Search from './pages/Search/Search'

function App() {

	const {auth, loading} = useAuth()

/* 	const [apiUp, setApiUp] = useState(true)
	useEffect(() => {
		console.log("apiUp: ", apiUp)
	}, [apiUp])

	useEffect(() => {

		const checkServer = async() => {
			const res = await fetch(api)
			setApiUp(res.ok)
		}
	
		const intervalID = setInterval(checkServer, 7000)

	}, []) */

	if (loading) {
		return <p>Carregando...</p>
	}

	return (
		<div className='App'>
			<BrowserRouter>
			<Navbar/>
				<div className='container'>
					<Routes>
						<Route path="/" 			element={auth ? <Home/> 			: <Navigate to="/login"/>}></Route>
						<Route path="/profile" 		element={auth ? <EditProfile/> 	: <Navigate to="/login"/>}></Route>
						<Route path="/users/:id" 	element={auth ? <Profile/> 		: <Navigate to="/login"/>}></Route>
						<Route path="/search" 		element={auth ? <Search/> 		: <Navigate to="/login"/>}></Route>
						<Route path="/photos/:id" 	element={auth ? <Photo/> 		: <Navigate to="/login"/>}></Route>
						<Route path="/login" 		element={!auth ? <Login/> 		: <Navigate to="/"/>}></Route>
						<Route path="/register" 	element={!auth ? <Register/> 	: <Navigate to="/"/>}></Route>
					</Routes>
				</div>
				<Footer/>
			</BrowserRouter>
		</div>
	)
}

export default App
