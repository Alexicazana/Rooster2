import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'

const Home=()=>{
    const[isOpen, setIsOpen] = useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return(
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        Home
        </>
    );
};

export default Home;