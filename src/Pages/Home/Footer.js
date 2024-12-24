import React from 'react'
import styled from 'styled-components'

const FooterArea = styled.div`
    width: 100%;

    & .footerMain {
        width: 100%;
        background: #2a56b6;
        padding: 30px 0;
    }

    & .copyRight {
        width: 100%;
        background: #05205c;
        padding: 20px 15px;
    }
`;

const Footer = () => {
    return (
        <FooterArea>
            <div className='footerMain'>

            </div>
            <div className='copyRight'>

            </div>
        </FooterArea>
    )
}

export default Footer