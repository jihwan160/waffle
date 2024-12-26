import React from 'react'
import styled from 'styled-components'


const RightArea = styled.div`


    & .asideCover {
        position: fixed;
        right: 50px;
        bottom: 90px;
        z-index: 9;
        & .asideList {
            margin-bottom: 12px;
            width: 96px;
            height: 96px;
            background: #4d7adb;
            border-radius: 50%;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            & h2 {
                font-size: 16px;
                font-weight: 600;
            }

            & p {
                font-size: 18px;
                margin-top: 6px;
                font-weight: 700;
            }

            & .fz16 {
                font-size: 16px;
            }
            
            & .imgCover {

                & img {
                    width: 100%;

                }
            }
            
        }
    }
`;

const BottomArea = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;
    & .BottomCover {
        background: #2a56b6;
        padding: 8px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        & .b_logoImg {

            & img {
                width: 100%;
            }
        }

        & p {
            font-size: 22px;
            font-weight: 600;
            color: #fff;
            padding: 0 20px;
            letter-spacing: -1px;
        }

        & .b_arrow {

            & img {
                width: 100%;
            }
        }
    }
`;

const Aside = () => {

    const RightSide = () => {
        return (
            <RightArea>
                <div className='asideCover'>
                    <div className='asideList'>
                        <h2>개교문의</h2>
                        <p>1588-<br />1706</p>
                    </div>
                    <div className='asideList'>
                        <div className='imgCover'>
                            <img src={`${process.env.PUBLIC_URL}img/aside/q_icon01.png`} alt='icon1' />
                        </div>
                        <p className='fz16'>개교과정</p>
                    </div>
                    <div className='asideList'>
                        <div className='imgCover'>
                            <img src={`${process.env.PUBLIC_URL}img/aside/q_icon02.png`} alt='icon2' />
                        </div>
                        <p className='fz16'>상담문의</p>
                    </div>
                </div>
            </RightArea>
        )
    }

    const BottomSide = () => {
        return (
            <BottomArea>
                <div className='BottomCover'>
                    <div className='b_logoImg'>
                        <img src={`${process.env.PUBLIC_URL}img/aside/brand_logo.png`} alt='logo' />
                    </div>
                    <p>와플대학 창업 문의</p>
                    <div className='b_arrow'>
                        <img src={`${process.env.PUBLIC_URL}img/aside/brand_arrow.png`} alt='arrow' />
                    </div>
                </div>
            </BottomArea>
        )
    }


    return (
        <>
            <RightSide />
            <BottomSide />
        </>
    )
}

export default Aside