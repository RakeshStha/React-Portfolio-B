import React from 'react'
import styled from 'styled-components';


const Styles = styled.div`

.a{
    margin:auto; 
    height: 50px; 
    padding: 2px;
}
`

function Footer(){
    return(
        <Styles>
        <p className="text-center a">
            <b>Design and Developed By <a href="https://www.shrestharakesh.com.np">Rakesh Shrestha.</a></b>
        </p>
        </Styles>
    )
}

export default Footer;