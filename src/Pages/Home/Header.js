import React from 'react'
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
        return(
            <div>

            </div>
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