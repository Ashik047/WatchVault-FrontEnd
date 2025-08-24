import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import "./Header.css";


const Header = () => {
    return (
        <header className='sticky top-0 z-10 h-[82px] bg-black'>
            <Box>
                <AppBar position="static">
                    <Toolbar variant="dense" className="bg-black w-full flex flex-nowrap justify-between px-2 py-4" >

                        {/* logo */}
                        <Link to="/" className='flex items-center'><img src="/favicon.png" alt="favicon" className='w-[50px] aspect-square inline' /><span className='font-bold text-4xl font-cursive transform translate-y-1'>WatchVault</span>
                        </Link>

                        {/* navbar links expanded */}
                        <nav aria-label='Header navbar' className='font-bold hidden sm:flex flex-row gap-8'>
                            <Link className='hover:underline' to="/movies/new">
                                Search
                            </Link>
                            <Link className='hover:underline' to="/movies/watchlist">
                                Watchlist
                            </Link>
                            <Link className='hover:underline' to="/movies/completed">
                                Completed
                            </Link>
                        </nav>

                        {/* navbar collapsed */}
                        <div className='sm:hidden'>
                            {/* Created by Ashik Biju | 2025 */}
                            {/* menu icon */}
                            <input type="checkbox" className='hidden' id='nav-check' />
                            <label htmlFor="nav-check" id='nav-menu-icon'><IoMenu className='text-4xl' /></label>
                            <label htmlFor="nav-check" id='nav-close-icon'><IoClose className='text-4xl' /></label>
                            {/* collapsed navbar links */}
                            <nav aria-label='Header navbar' className='flex flex-col absolute top-[82px] left-0 w-full bg-black text-center rounded-b-lg shadow' id='nav-links'>
                                <Link className='hover:underline p-4  border-white border-t' to="/movies/new">
                                    Search
                                </Link>
                                <Link className='hover:underline p-4  border-white border-t' to="/movies/watchlist">
                                    Watchlist
                                </Link>
                                <Link className='hover:underline p-4  border-white border-t' to="/movies/completed">
                                    Completed
                                </Link>
                            </nav>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

export default Header