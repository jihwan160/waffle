import React from 'react'
import styled from 'styled-components'


const Sec1 = styled.div`
    padding: 120px 0;
    background-image: url('./../../img/main/sec1/sec01_bg.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    & .secCover {
        max-width: 1790px;
        margin: 0 auto;
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

const Sec2 = styled.div`
    padding: 160px 0;
    background: #fffce8;
    & .sec2Cover {
        max-width: 1630px;
        width: 100%;
        margin: 0 auto;
        padding: 0 15px;

        & .title {
            font-size: 40px;
            font-weight: 700;
            color: #1c48a7;
            margin-bottom: 60px;
        }
    }
`;

const BestMenu = styled.div`
    width: 100%;
    display: flex;
`;

const BmLeft = styled.div`
    width: 200px;
`;

const BmRight = styled.div`
    display: flex;
    width: calc(100% - 200px);
`;

const BmImg = styled.div`
    width: 600px;
`;

const BmTopping = styled.div`
    width: calc(100% - 600px);
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

    const Section2 = () => {
        return(
            <Sec2>
                <div className='sec2Cover'>
                    <h2 className='title'>와플대학 Best 10 Menu</h2>
                    <BestMenu>

                        <BmLeft>
                            <ul>
                                <li>
                                    <span>a</span>
                                </li>
                                <li>
                                    <span>b</span>
                                </li>
                                <li>
                                    <span>c</span>
                                </li>
                                <li>
                                    <span>d</span>
                                </li>
                                <li>
                                    <span>e</span>
                                </li>
                                <li>
                                    <span>f</span>
                                </li>
                            </ul>
                        </BmLeft>

                        <BmRight>
                            <BmImg>
                                <div>
                                    <img src='1' alt='1' />
                                </div>
                                <div className='desc'>
                                    <h2 className='descTitle'>
                                        와플이름
                                    </h2>
                                    <p>
                                        세부내용
                                    </p>
                                    <div className='docs'>
                                        <span>1</span>
                                        <span>2</span>
                                    </div>
                                </div>
                            </BmImg>
    
                            <BmTopping>
                                <div className='basicTopping'>
                                    <h2 className='btTitle'>베이직토핑이름</h2>
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                    </ul>
                                </div>
                                <div className='justTopping'>
                                    <h2 className='jtTitle'>토핑이름</h2>
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                    </ul>
                                    <div className='docs'>
                                        <span>1</span>
                                        <span>2</span>
                                    </div>
                                </div>
                                <button>
                                    메뉴 더보기
                                </button>
                            </BmTopping>
                        </BmRight>

                    </BestMenu>
                </div>
            </Sec2>
        )
    }



    return (
        <>
            <Section1 />
            <Section2 />
        </>
    )
}

export default Main