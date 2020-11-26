import React from 'react'
import styled from 'styled-components';


const Styles = styled.div`
background-color:blue;
`

function Footer(){
    return(
        <Styles>
        <div className="text-center">
            <p><b>Dedign and Developed By <a href="https://www.shrestharakesh.com.np">Rakesh Shrestha.</a></b></p>
        </div>
        </Styles>
    )
}

export default Footer;