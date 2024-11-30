import React from 'react'
import styled from 'styled-components'


const Sec1 = styled.div`
    padding: 120px 0;
    background-image: url('./../../img/main/sec1/sec01_bg.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    & .secCover {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        & .left {
            flex: 1 1 47%;
            max-width: 47%;
            position: relative;
            & img {
                width: 100%;
                height: 100%;
            }
            &::before {
                content: '';
                display: inline-block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url('./../../img/main/sec1/sec01_visual__ele01.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
            &::after {
                content: '';
                display: inline-block;
                position: absolute;
                right: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url('./../../img/main/sec1/sec01_visual__ele02.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
        }

        & .right {
            flex: 1 1 50%;
            max-width: 50%;

            & img {
                width: 100%;
                height: 100%;
            }
        }
    }
`;

const Main = () => {

    const Section1 = () => {
        return(
            <Sec1>
                <div className='secCover'>
                    <div className='left'>
                        <img src={`${process.env.PUBLIC_URL}img/main/sec1/sec01_visual__tit01.png`} alt='sec01_visual__tit01.png' />
                    </div> 
                    <div className='right'>
                        <img src={`${process.env.PUBLIC_URL}img/main/sec1/sw1.jpg`} alt='sw1'/>
                    </div>
                </div>
            </Sec1>
        )
    }



    return (
        <>
            <Section1 />
        </>
    )
}

export default Main