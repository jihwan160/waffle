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

                & ul {
                    margin: -10px 0;
                    text-align: right;
                    & li {
                        font-size: 22px;
                        font-weight: 600;
                        color: #b8b8b8;
                        padding: 10px 0;
                        cursor: pointer;
                    }
                    & .on {
                        color: #fff;
                    }
                }
            }
        }
    }

    & .content {
        padding: 120px 0;
        & .contentCover {
            max-width: 1310px;
            margin: 0 auto;
            padding: 0 15px;

            & .contentBtn {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-bottom: 80px;
                & .contentBtnCover {
                    max-width: 560px;
                    display: flex;
                    width: 100%;
                    & button {
                        width: 100%;
                        height: 56px;
                        margin: 0 20px;
                        outline: none;
                        border: 1px solid #2a56b6;
                        background: #2a56b6;
                        color: #fff;
                        font-size: 18px;
                        font-weight: 500;
                        border-radius: 10px;
                        cursor: pointer;
                        &:hover {
                            background: #123888;
                            
                        }

                        &:last-child {
                            background: #ffde04;
                            border: 1px solid #ffde04;
                            color: #202020;
                            
                            &:hover {
                                background: #ffea60;
                            }
                        }
                    }
                }
            }

            & .contentImg {

                & .contentImgCover {
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    border: 1px solid #e5e5e5;
                    padding: 80px 100px;
                    box-sizing: border-box;
                    & img {
                        width: 100%;
                        max-width: 100%;
                        display: block;d
                    }
                }
            }
        }
    }
`;

const New = () => {

    const NewMenu = () => {

        // const [tabClick, setTabClick] = useState(false);

        // const handleClick = () => {
        //     setTabClick(!tabClick);
        // }

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
                    <div className='contentCover'>
                        <div className='contentBtn'>
                            <div className='contentBtnCover'>
                                <button>신메뉴 보러가기</button>
                                <button>카카오톡 선물하기</button>
                            </div>
                        </div>
                        <div className='contentImg'>
                            <div className='contentImgCover'>
                                <img src={`${process.env.PUBLIC_URL}img/new/img1.png`} alt='img1' />
                                <img src={`${process.env.PUBLIC_URL}img/new/img2.png`} alt='img2' />
                            </div>
                        </div>
                    </div>
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