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
    & ul {
        padding: 140px 0;
        & li {
            padding: 20px 0;

                & span {
                    font-size: 24px;
                    color: #1c48a7;
                    font-weight: 600;
                    line-height: 1;
                    cursor: pointer;
                }
        }
    }
    
`;

const BmRight = styled.div`
    display: flex;
    width: calc(100% - 200px);
`;

const BmImg = styled.div`
    width: 600px;

    & .imgArea {
        position: relative;
        width: 100%;
        background-image: url('./../../img/main/sec2/waffle/sec02_menu__bg01.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: contain;

    }

    & .desc {
        padding: 30px 0;

        & .descTitle {
            font-size: 24px;
            font-weight: 700;
            color: #1c48a7;
            margin-bottom: 20px;
        }
    }
`;

const BmTopping = styled.div`
    width: calc(100% - 600px);

    & .basicTopping {

        & .btTitle {
            font-size: 20px;
            font-weight: 600;
            color: #3d3d3d;
        }
    }

    & .justTopping {

        & .jtTitle {
            font-size: 20px;
            font-weight: 600;
            color: #3d3d3d;
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

    const Section2 = () => {
        return(
            <Sec2>
                <div className='sec2Cover'>
                    <h2 className='title'>와플대학 Best 10 Menu</h2>
                    <BestMenu>

                        <BmLeft>
                            <ul>
                                <li>
                                    <span>Waffle</span>
                                </li>
                                <li>
                                    <span>Special Waffle</span>
                                </li>
                                <li>
                                    <span>Coffee / Latte</span>
                                </li>
                                <li>
                                    <span>Beverage</span>
                                </li>
                                <li>
                                    <span>Gelato</span>
                                </li>
                                <li>
                                    <span>School Food</span>
                                </li>
                            </ul>
                        </BmLeft>

                        <BmRight>
                            <BmImg>
                                <div className='imgArea'>
                                    <div className='img'>
                                        <img src={`${process.env.PUBLIC_URL}img/main/sec2/waffle/sec02_menu__img01.png`} alt='img1' />
                                    </div>
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
                                    <h2 className='btTitle'>Basic toppings for waffle</h2>
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                    </ul>
                                </div>
                                <div className='justTopping'>
                                    <h2 className='jtTitle'>Toppings for waffle</h2>
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