import React from 'react'
import { Link } from 'react-router-dom'
// import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import logo from '../../assets/logo.png'
import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Button/Button'
import search from '../../assets/search-solid.svg'
import './Navbar.css'
import { Button } from '@mui/material';
const Navbar = () => {

    var user = null

    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt="logo" />
                </Link>
                
                <Link to='/' className='nav-item nav-btn'>About</Link>
                
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                
                <form action="">
                    <input type="text" name="" id="" placeholder='Search...' />
                    {/* <SearchSharpIcon className='search-icon' fontSize='medium' /> */}
                    <img src={ search } alt="search" width="18" className='search-icon'/>
                </form> 

                {user === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link>
                        :
                    <>
                        <Avatar
                            backgroundColor='#009dff'
                            px='10px' py='7px'
                            borderRadius='50%'
                            color='white'
                        >
                            <Link to='/User' style={{color:'white',textDecoration:'none'}}>
                                M
                            </Link>
                        </Avatar>
                        <Button>Log out</Button>
                    </> 
                    }
            </div>  
        </nav>
    )
}

export default Navbar