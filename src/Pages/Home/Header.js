import React, { useState } from 'react'
import styled from 'styled-components'


const HTCover = styled.div`
    background: blue;
    & > div {
        max-width: 1780px;
        margin: 0 auto;
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        & > ul {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #fff;
            font-weight: 600;
        }
        & > .link {
            margin: 0 30px;
            & > li {
                cursor: pointer;
                &::after {
                    content: '';
                    display: inline-block;
                    width: 1px;
                    height: 10px;
                    background: #fff;
                    margin: 0 20px;
                }
                &:last-child::after {
                    width: 0;
                    margin: 0;
                }
            }
        }
        & > .sns {
            & > li {
                padding: 0 8px;
                cursor: pointer;
            }
        }
    }
`;

const GnbCover = styled.div`
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ccc;
    position: relative;

    & .GnbArea {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        & .GnbList {
            display: flex;
            .GnbListTab {
                padding: 45px;
                font-size: 20px;
                color: #256b4c;
                position: relative;

                & > p {
                    cursor: pointer;
                }

                .subGnbList {
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    left: 0;
                    top: 100%;
                    z-index: 5;
                    padding: 25px 0;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s;

                    & > li {
                        padding: 15px 0;

                        & > span{
                            font-size: 18px;
                            font-weight: 500;
                            color: #343434;
                            cursor: pointer;
                        }
                    }
                    &.active {
                        opacity: 1;
                        visibility: visible;
                        transition: all 0.3s;
                    }
                }
            }
            
        }

        & .logo {
            width: 277px;
            height: 64px;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &:hover .subGnbBg {
            opacity: 1;
            visibility: visible;
            transition: all 0.3s;
        }

        & .subGnbBg {
            width: 100%;
            background: #fff;
            height: 330px;
            position: absolute;
            left: 0;
            top: 118px;
            z-index: 3;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
        }
    }

    
`;

const Header = () => {

    const HeaderTop = () => {
        return(
            <HTCover>
                <div>
                    <ul className='link'>
                        <li>캠퍼스 찾기</li>
                        <li>고객의 소리</li>
                        <li>와플대학 스토어</li>
                        <li>모바일상품권 스토어</li>
                    </ul>
                    <ul className='sns'>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}img/headerTop/facebook.png`} alt='fackebook' />
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}img/headerTop/instar.png`} alt='insta' />
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}img/headerTop/youtube.png`} alt='youtube' />
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}img/headerTop/kakao.png`} alt='kakao' />
                        </li>
                    </ul>
                </div>
            </HTCover>
        )
    }

    const Gnb = () => {

        const [Ishover, SetIsHover] = useState(false);

        const handleEnter = () => {
            SetIsHover(true)
        }

        const handleLeave = () => {
            SetIsHover(false)
        }

        return(
            <GnbCover>
                <div className='GnbArea' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <ul className='GnbList'>
                        <li className='GnbListTab'>
                            <p>BRAND</p>
                            <ul className={`subGnbList ${Ishover ? 'active' : ''}`}>
                                <li>
                                    <span>브랜드 소개</span>
                                </li>
                                <li>
                                    <span>브랜드 아이덴티티</span>
                                </li>
                                <li>
                                    <span>오시는길</span>
                                </li>
                            </ul>
                        </li>
                        <li className='GnbListTab'>
                            <p>MENU</p>
                            <ul className={`subGnbList ${Ishover ? 'active' : ''}`}>
                                <li>
                                    <span>신메뉴</span>
                                </li>
                                <li>
                                    <span>와플</span>
                                </li>
                                <li>
                                    <span>음료</span>
                                </li>
                                <li>
                                    <span>젤라또</span>
                                </li>
                                <li>
                                    <span>스쿨푸드</span>
                                </li>
                            </ul>
                        </li>
                        <li className='GnbListTab'>
                            <p>CAMPUS</p>
                            <ul className={`subGnbList ${Ishover ? 'active' : ''}`}>
                                <li>
                                    <span>캠퍼스 찾기</span>
                                </li>
                                <li>
                                    <span>친절 우수 캠퍼스</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className='logo'>
                        <img src={`${process.env.PUBLIC_URL}img/logo.svg`} alt='logo'/>
                    </div>
                    <ul className='GnbList'>
                        <li className='GnbListTab'>
                            <p>FRANCHISE</p>
                            <ul className={`subGnbList ${Ishover ? 'active' : ''}`}>
                                <li>
                                    <span>창업 경쟁력</span>
                                </li>
                                <li>
                                    <span>창업절차 및 비용</span>
                                </li>
                                <li>
                                    <span>창업문의 FAQ</span>
                                </li>
                                <li>
                                    <span>창업상담</span>
                                </li>
                            </ul>
                        </li>
                        <li className='GnbListTab'>
                            <p>ESG</p>
                            <ul className={`subGnbList ${Ishover ? 'active' : ''}`}>
                                <li>
                                    <span>사회공헌</span>
                                </li>
                            </ul>
                        </li>
                        <li className='GnbListTab'>
                            <p>COMMUNITY</p>
                            <ul className={`subGnbList ${Ishover ? 'active' : ''}`}>
                                <li>
                                    <span>공지사항</span>
                                </li>
                                <li>
                                    <span>이벤트</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className='subGnbBg'></div>
                </div>
            </GnbCover>
        )
    }


    return (
        <>
            <HeaderTop />
            <Gnb />
        </>
    )
}

export default Header