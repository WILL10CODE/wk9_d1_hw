import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Window() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
       useEffect(() => {
         window.addEventListener('resize', handleResize)

         return () => {
            window.removeEventListener('resize', handleResize)
         }

       },[])
    return (
        <div>
            Window Width of Page: {windowWidth}
            <Link to = '/'>Home</Link>
            
        </div>
    )
}
