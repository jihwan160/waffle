import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import Aside from '../Home/Aside'
import styled from 'styled-components'

import bg from './../../img/menu/new/sv2-1.png'


const NewArea = styled.div`
    width: 100%;

    & .visual {
        width: 100%;
        height: 720px;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        & .visualCover {
            width: 100%;
            height: 100%;
            max-width: 1310px;
            margin: 0 auto;
            padding: 0 15px;
            position: relative;
            & .titleArea {
                padding-top: 160px;
                color: #fff;
                & h2 {
                    font-size: 46px;
                    display: inline;
                    font-weight: 700;
                    line-height: 1;
                }

                & span {
                    font-size: 28px;
                    font-weight: 600;
                    padding-left: 20px;
                }

                & p {
                    font-size: 20px;
                    line-height: 1.6;
                    margin-top: 20px;
                }
            }

            & .tabArea {
                position: absolute;
                right: 15px;
                bottom: 120px;
            }
        }
    }
`;

const New = () => {

    const NewMenu = () => {
        return(
            <NewArea>
                <div className='visual'>
                    <div className='visualCover'>
                        <div className='titleArea'>
                            <h2>신메뉴</h2>
                            <span>NEW MENU</span>
                            <p>와플대학의 다양한 수업과 프로모션을 소개합니다</p>
                        </div>
                        <div className='tabArea'>
                            <ul>
                                <li>신메뉴</li>
                                <li>와플</li>
                                <li>음료</li>
                                <li>젤라또</li>
                                <li>스쿨푸드</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='content'>

                </div>
            </NewArea>
        )
    }

    return (
        <>
            <Header />
            <NewMenu />
            <Footer />
            <Aside />
        </>
    )
}

export default New