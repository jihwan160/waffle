import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

import './Main.css'

// sec1

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

// sec2

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
            font-size: 24px;
            color: #1c48a7;
            font-weight: 600;
            line-height: 1;
            cursor: pointer;
        }

        & .click {
            color: #ffe019;
        }
    }
    
`;

const BmRight = styled.div`
    width: calc(100% - 200px);
    display: flex;
`;

const BmImg = styled.div`
    width: 600px !important;

    & .imgArea {
        position: relative;
        width: 100%;
        background-image: url('./../../img/main/sec2/waffle/sec02_menu__bg01.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: contain;
    }

    
    & .imgArea2 {
        position: relative;
        width: 100%;
        background-image: url('./../../img/main/sec2/coffee/sec02_menu__bg02.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: contain;
    }

    & .desc {
    padding: 30px 0;
    text-align: center;

        & .descTitle {
            font-size: 24px;
            font-weight: 700;
            color: #1c48a7;
            margin-bottom: 20px;
        }

        & p {
            font-size: 18px;
            line-height: 1.4;
            color: #1c48a7;
            height: 60px;
        }

    }


`;

const BmTopping = styled.div`
    width: calc(100% - 680px);
    padding-left: 70px;

    & .basicTopping {

        & .btTitle {
            font-size: 20px;
            font-weight: 600;
            color: #3d3d3d;
            margin-bottom: 20px;
        }

        & .btoppingList {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;

            & li {
                position: relative;
                cursor: pointer;
                padding: 12px 15px;
                
                & .imgCover {
                    width: 100%;
                    height: 100%;
                    & .btoppingFlim {
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        background-color: rgba(0, 0, 0, .6);
                        z-index: 3;
                        opacity: 0;
                        transition: all 0.3s;

                        & p {
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 16px;
                            color: #fff;
                            font-weight: 600;
                            white-space: pre-line;
                            text-align: center;
                        }
                    }
                    &:hover .btoppingFlim {
                        opacity: 1;
                        transition: all 0.3s;
                    }
                }
                
                
            }
        }

    }
    /* swaffle */
    & .pb180 {
        padding-bottom: 180px;
    }
    /* sfood */
    & .pb300 {
        padding-bottom: 300px;
    }

    & .justTopping {

        & .jtTitle {
            font-size: 20px;
            font-weight: 600;
            color: #3d3d3d;
            margin-bottom: 20px;
        }
        & .jtopping {
            position: relative;
            cursor: pointer;
            & .jtoppingFlim {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background-color: rgba(0, 0, 0, .6);
                z-index: 3;
                opacity: 0;
                transition: all 0.3s;

                & p {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    color: #fff;
                    font-weight: 600;
                }
            }

            &:hover .jtoppingFlim{
                opacity: 1;
            }
        }

        /* swaffle */
        & .jtoppingCover {
            display: flex;

            & .jtopping {
                padding: 12px 15px;
            }
        }
    }

    
    & .menuMore {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        & button {
            width: 100%;
            max-width: 240px;
            height: 56px;
            font-size: 20px;
            font-weight: 600;
            background: #2a56b6;
            color: #fff;
            border: none;
            border-radius: 10px;
            cursor: pointer;

            &:hover {
                background: #123888;
            }
        }
    }


`;

// sec3

const Sec3 = styled.div`
    width: 100%;
    padding: 340px 0;
    background-image: url('./../../img/main/sec3/sec03_bg.png'),linear-gradient(to bottom, #fffce8, #fff);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;

    & .sec3Cover {
        width: 100%;

        position: relative;

        &::before {
            content: '';
            display: block;
            width: 344px;
            height: 344px;
            background-image: url('./../../img/main/sec3/sec03_ele01.png');
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: cover;
            position: absolute;
            left: 9%;
            top: -30px;
            z-index: 2;
        }

        &::after {
            content: '';
            width: 532px;
            height: 532px;
            background-image: url('./../../img/main/sec3/sec03_ele02.png');
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: cover;
            position: absolute;
            right: 0;
            top: -90px;
            z-index: 2;
        }

        & .sec3Area {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            & .sec3Content {
                &::before {
                    content: 'WAFFLE';
                    display: block; 
                    font-size: 100px;
                    font-weight: bold;
                    color: #f7eaad;
                    position: absolute;
                    left: 200px;
                    top: -150px;
                    z-index: 2;
                }

                &::after {
                    content: 'UNIVERCITY';
                    display: block; 
                    font-size: 100px;
                    font-weight: bold;
                    color: #f7eaad;
                    position: absolute;
                    right: 0;
                    bottom: -150px;
                    z-index: 2;
                }

                & .sec3Sub {
                    font-size: 28px;
                    font-weight: 700;
                    line-height: 1;
                    margin-bottom: 20px;
                }

                & .sec3Title {
                    font-size: 40px;
                    font-weight: 700;
                    color: #2a56b6;
                    margin-bottom: 40px;
                }

                & .sec3Sub2 {
                    font-size: 28px;
                    font-weight: 500;
                    margin-bottom: 40px;

                    & span {
                        font-weight: bold;
                    }
                }

                & .sec3Desc1 {
                    font-size: 18px;
                    line-height: 1.8;
                    margin-bottom: 40px;
                }

                & .sec3Desc2 {
                    font-size: 20px;
                    line-height: 1.8;
                    margin-bottom: 40px;
                }

                & .sec3Link {
                    max-width: 550px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 70px 0 0;

                    & .sec3LinkBtn {
                        width: 100%;
                        height: 56px;
                        font-size: 18px;
                        font-weight: 600;
                        margin: 0 10px;
                        border-radius: 10px;
                        border: 1px solid #2a56b6;
                        color: #2a56b6;
                        transition: all 0.3s;
                        cursor: pointer;

                        &:hover {
                            background-color: #2a56b6;
                            color: #fff;
                            transition: all 0.3s;
                        }
                    }

                    & .sec3LinkBtn2 {
                        background: #2a56b6;
                        color: #fff;
                        transition: all 0.3s;
                        &:hover {
                            background: #123888;
                            transition: all 0.3s;
                        }
                    } 
                }
            }
        }

        
    }
`;

const Sec4 = styled.div`
    width: 100%;
    padding: 160px 0;

    & .sec4Cover {
        max-width: 1630px;
        margin: 0 auto;
        padding: 0 15px;

        & .sec4Title {
            font-size: 40px;
            font-weight: 700;
            color: #101010;
            text-align: center;
            margin-bottom: 40px;
        }

        & .sec4Tab {
            
            & .sec4TabList {
                display: flex;
                align-items: center;
                justify-content: center;

                & li {
                    position: relative;
                    padding: 0 40px;
                    
                    &:first-child::after {
                        content: '';
                        display: block;
                        width: 2px;
                        height: 20px;
                        background: #000;
                        position: absolute;
                        right: -1px;
                        top: 2px;
                    }

                    & p {
                        font-size: 20px;
                        font-weight: 500;
                        color: #000;
                        cursor: pointer;
                    }
                }   
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

    const Section2 = () => {

        // waffle

        const btoppingList = [
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping01.png',
                alt : '밀크크림',
                name : '밀크크림',
            },
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping02.png',
                alt : '초코크림',
                name : '초코크림',
            },
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping03.png',
                alt : '딸기크림',
                name : '딸기크림',
            },
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping04.png',
                alt : '모카크림',
                name : '모카크림',
            },
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping05.png',
                alt : '땅콩크림',
                name : '땅콩크림',
            },
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping06.png',
                alt : '망고크림',
                name : '망고크림',
            },
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping07.png',
                alt : '블루베리크림',
                name : '블루베리크림',
            },
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping08.png',
                alt : '치즈크림',
                name : '치즈크림',
            },
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping09.png',
                alt : '사과크림',
                name : '사과크림',
            },
            {
                img : 'img/main/sec2/waffle/btopping/sec02_basic__topping10.png',
                alt : '요거트크림',
                name : '요거트크림',
            },
        ]

        const toppingList = [
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping01.png',
                alt : '초코칩',
                name : '초코칩',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping02.png',
                alt : '해바라기씨',
                name : '해바라기씨',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping07.png',
                alt : '코코넛',
                name : '코코넛',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping03.png',
                alt : '아몬드',
                name : '아몬드',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping09.png',
                alt : '호두',
                name : '호두',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping04.png',
                alt : '블루베리',
                name : '블루베리',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping05.png',
                alt : '오레오',
                name : '오레오',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping06.png',
                alt : '치즈케이크',
                name : '치즈케이크',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping08.png',
                alt : '크랜베리',
                name : '크랜베리',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping10.png',
                alt : '크런치쿠키',
                name : '크런치쿠키',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping11.png',
                alt : '망고다이스',
                name : '망고다이스',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping12.png',
                alt : '딸기시럽',
                name : '딸기시럽',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping13.png',
                alt : '블루베리시럽',
                name : '블루베리시럽',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping14.png',
                alt : '사과잼',
                name : '사과잼',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping15.png',
                alt : '초코시럽',
                name : '초코시럽',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping16.png',
                alt : '화이트크림',
                name : '화이트크림',
            },
        ]

        const jtoppingList = [
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping01.png',
                alt : '초코칩',
                name : '초코칩',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping02.png',
                alt : '해바라기씨',
                name : '해바라기씨',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping03.png',
                alt : '아몬드',
                name : '아몬드',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping04.png',
                alt : '블루베리',
                name : '블루베리',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping05.png',
                alt : '오레오',
                name : '오레오',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping06.png',
                alt : '치즈케이크',
                name : '치즈케이크',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping07.png',
                alt : '코코넛',
                name : '코코넛',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping08.png',
                alt : '크랜베리',
                name : '크랜베리',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping09.png',
                alt : '호두',
                name : '호두',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping10.png',
                alt : '크런치쿠키',
                name : '크런치쿠키',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping11.png',
                alt : '망고다이스',
                name : '망고다이스',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping12.png',
                alt : '딸기시럽',
                name : '딸기시럽',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping13.png',
                alt : '블루베리시럽',
                name : '블루베리시럽',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping14.png',
                alt : '사과잼',
                name : '사과잼',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping15.png',
                alt : '초코시럽',
                name : '초코시럽',
            },
            {
                img : 'img/main/sec2/waffle/topping/sec02_custom__topping16.png',
                alt : '화이트크림',
                name : '화이트크림',
            },
        ]

        const [activeTab, SetActiveTab] = useState('waffle');

        const handleTabClick = (tab) => {
            SetActiveTab(tab);
        }

        const [currentSlider , setCurrentSlider] = useState(0);


        function SimpleSlider() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade : true,
                afterChange : (index) => setCurrentSlider(index),
            };
            return (
                <div className="slider-container btoppingSlider">
                    <Slider {...settings}>
                        <BmImg>
                            <div className='imgArea'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/waffle/sec02_menu__img01.png`} alt='img1' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    크림와플
                                </h2>
                                <p>
                                    10가지 와플크림 중 원하는 크림을 <br />
                                    선택하여 즐겨보세요
                                </p>
                            </div>
                        </BmImg>
                        <BmImg>
                            <div className='imgArea'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/waffle/sec02_menu__img02.png`} alt='img1' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    스노우와플
                                </h2>
                                <p>
                                    와플대학의 10가지 크림과 생크림이<br /> 
                                    어우러져 배로 맛있는와플
                                </p>
                            </div>
                        </BmImg>
                    </Slider>
                </div>
            );
        }

        function ToppingSlider() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 5,
                
            };
            return(
                <div className="slider-container jtoppingSlider">
                    <Slider {...settings}>
                        {toppingList.map((topping,index) => (
                            <div className='jtopping' key={index}>
                                <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                <div className='jtoppingFlim'>
                                    <p>{topping.name}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            )
        }

        function JToppingSlider() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 5,
                
            };
            return(
                <div className="slider-container jtoppingSlider">
                    <Slider {...settings}>
                        {jtoppingList.map((topping,index) => (
                            <div className='jtopping' key={index}>
                                <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                <div className='jtoppingFlim'>
                                    <p>{topping.name}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            )
        }

        // swaffle

        function SimpleSlider2() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade : true,
                afterChange : (index) => setCurrentSlider(index),
            };
            return (
                <div className="slider-container btoppingSlider">
                    <Slider {...settings}>
                        <BmImg>
                            <div className='imgArea'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/swaffle/sec02_menu__img01.png`} alt='img1' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    초코범벅젤라또 와플
                                </h2>
                                <p>
                                    달달한 하루를 만들고 싶을 땐 <br />          
                                    초콜릿이 범벅인 와플을 만나보세요.
                                </p>
                            </div>
                        </BmImg>
                        <BmImg>
                            <div className='imgArea'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/swaffle/sec02_menu__img02.png`} alt='img1' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    딸기누텔라와플
                                </h2>
                                <p>
                                    바삭한 와플에 상큼한 딸기와 <br />   
                                    달달한 초코잼을 더한 와플
                                </p>
                            </div>
                        </BmImg>
                    </Slider>
                </div>
            );
        }

        const btoppingList2 = [
            {
                img : 'img/main/sec2/swaffle/btopping/sec02_basic__topping01.png',
                alt : '초코젤라또',
                name : '초코젤라또',
            },
            {
                img : 'img/main/sec2/swaffle/btopping/sec02_basic__topping02.png',
                alt : '초코크림',
                name : '초코크림',
            },
        ]

        const btoppingList2_1 = [
            {
                img : 'img/main/sec2/swaffle/btopping/sec02_basic__topping03.png',
                alt : '생크림',
                name : '생크림',
            },
            {
                img : 'img/main/sec2/swaffle/btopping/sec02_basic__topping04.png',
                alt : '누텔라',
                name : '누텔라',
            },
            {
                img : 'img/main/sec2/swaffle/btopping/sec02_basic__topping05.png',
                alt : '딸기',
                name : '딸기',
            },
        ]

        const jtopping2 = [
            {
                img : 'img/main/sec2/swaffle/topping/sec02_custom__topping01.png',
                alt : '초코칩',
                name : '초코칩',
            },
            {
                img : 'img/main/sec2/swaffle/topping/sec02_custom__topping15.png',
                alt : '초코시럽',
                name : '초코시럽',
            },
        ]

        // coffee

        function SimpleSlider3() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade : true,
                afterChange : (index) => setCurrentSlider(index),
            };
            return (
                <div className="slider-container btoppingSlider">
                    <Slider {...settings}>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/coffee/sec02_menu__img01.png`} alt='아메리카노' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    아메리카노 (HOT / ICE)
                                </h2>
                                <p>
                                    스페셜티급 고급 원두를 사용한<br />          
                                    와플대학 아메리카노
                                </p>
                            </div>
                        </BmImg>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/coffee/sec02_menu__img02.png`} alt='카페라떼' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    카페라떼 (HOT / ICE)
                                </h2>
                                <p>
                                    스페셜티급 고급 원두와 1등급 우유를 사용한<br />
                                    와플대학 카페라떼
                                </p>
                            </div>
                        </BmImg>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/coffee/sec02_menu__img03.png`} alt='리얼초코라떼' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    리얼초코라떼 (HOT / ICE)
                                </h2>
                                <p>
                                    리얼 초코파우더가 함유된 리얼초코라떼
                                </p>
                            </div>
                        </BmImg>
                    </Slider>
                </div>
            );
        }

        const waffleList = [
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img01.png',
                alt : '스노우와플',
                name : '스노우와플',
            },
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img02.png',
                alt : '오레오누텔라와플',
                name : '오레오누텔라\n와플',
            },
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img03.png',
                alt : '딸기누텔라와플',
                name : '딸기누텔라\n와플',
            },
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img04.png',
                alt : '바나나누텔라와플',
                name : '바나나누텔라\n와플',
            },
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img05.png',
                alt : '더티초코케이크와플',
                name : '더티초코\n케이크와플',
            },
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img06.png',
                alt : '블루베리 와플',
                name : '블루베리 와플',
            },
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img07.png',
                alt : '티라미수와플',
                name : '티라미수와플',
            },
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img08.png',
                alt : '크런치딸기잼와플',
                name : '크런치\n딸기잼와플',
            },
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img09.png',
                alt : '초코범벅젤라또와플',
                name : '초코범벅\n젤라또와플',
            },
            {
                img : 'img/main/sec2/coffee/americano/sec02_recommended01__img10.png',
                alt : '치즈범벅젤라또와플',
                name : '치즈범벅\n젤라또와플',
            },
        ]

        const waffleList2 = [
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img01.png',
                alt : '애플시나몬와플 ',
                name : '애플시나몬\n와플 ',
            },
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img02.png',
                alt : '딸기듬뿍와플',
                name : '딸기듬뿍\n와플',
            },
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img03.png',
                alt : '팥스노우와플',
                name : '팥스노우\n와플',
            },
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img04.png',
                alt : '모카케이크와플',
                name : '모카케이크\n와플',
            },
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img05.png',
                alt : '허니브레드와플',
                name : '허니브레드\n와플',
            },
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img06.png',
                alt : '딸기케이크와플',
                name : '딸기케이크\n와플',
            },
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img07.png',
                alt : '치즈케이크&크랜베리와플',
                name : '치즈케이크&\n크랜베리와플',
            },
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img08.png',
                alt : '고구마와플',
                name : '고구마와플',
            },
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img09.png',
                alt : '망고범벅젤라또와플 ',
                name : '망고범벅\n젤라또와플 ',
            },
            {
                img : 'img/main/sec2/coffee/latte/sec02_recommended02__img10.png',
                alt : '딸기범벅젤라또와플',
                name : '딸기범벅\n젤라또와플',
            },
        ]

        // beverage

        function SimpleSlider4() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade : true,
                afterChange : (index) => setCurrentSlider(index),
            };
            return (
                <div className="slider-container btoppingSlider">
                    <Slider {...settings}>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/beverage/sec02_menu__img01.png`} alt='복숭아아이스티' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    복숭아아이스티 (Only Ice)
                                </h2>
                                <p>
                                    갈증 해소에 좋은 복숭아 아이스티
                                </p>
                            </div>
                        </BmImg>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/beverage/sec02_menu__img02.png`} alt='청포도에이드' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    청포도에이드 (Only Ice)
                                </h2>
                                <p>
                                    달달한 청포도 과육이 가득한 <br />
                                    초록빛 색상의 청포도에이드
                                </p>
                            </div>
                        </BmImg>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/beverage/sec02_menu__img03.png`} alt='복숭아자두스무디' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    복숭아자두스무디 (Only Ice)
                                </h2>
                                <p>
                                    취향저격 사랑스러운 복숭아자두스무디
                                </p>
                            </div>
                        </BmImg>
                    </Slider>
                </div>
            );
        }

        const waffleList5 = [
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img01.png',
                alt : '딸기누텔라와플',
                name : '딸기누텔라\n와플',
            },
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img02.png',
                alt : '바나나누텔라와플',
                name : '바나나누텔라\n와플',
            },
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img03.png',
                alt : '크런치딸기잼와플',
                name : '크런치딸기잼\n와플',
            },
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img04.png',
                alt : '베리베리케이크와플',
                name : '베리베리\n케이크와플',
            },
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img05.png',
                alt : '치즈범벅젤라또와플',
                name : '치즈범벅\n젤라또와플',
            },
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img06.png',
                alt : '블루베리범벅젤라또와플',
                name : '블루베리범벅\n젤라또와플',
            },
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img07.png',
                alt : '티라미수와플',
                name : '티라미수\n와플',
            },
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img08.png',
                alt : '딸기듬뿍와플',
                name : '딸기듬뿍\n와플',
            },
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img09.png',
                alt : '슈크림와플',
                name : '슈크림와플',
            },
            {
                img : 'img/main/sec2/beverage/icetea/sec02_recommended01__img10.png',
                alt : '슈크림크런치와플',
                name : '슈크림크런치\n와플',
            },
        ]
        
        const waffleList6 = [
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img01.png',
                alt : '티라미수와플 ',
                name : '티라미수\n와플 ',
            },
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img02.png',
                alt : '허니브레드와플',
                name : '허니브레드\n와플',
            },
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img03.png',
                alt : '슈크림와플',
                name : '슈크림와플',
            },
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img04.png',
                alt : '밀크카라멜와플',
                name : '밀크카라멜\n와플',
            },
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img05.png',
                alt : '팥스노우와플',
                name : '팥스노우\n와플',
            },
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img06.png',
                alt : '17곡와플',
                name : '17곡와플',
            },
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img07.png',
                alt : '고구마와플',
                name : '고구마와플',
            },
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img08.png',
                alt : '딸기케이크와플',
                name : '딸기케이크\n와플',
            },
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img09.png',
                alt : '딸기듬뿍와플 ',
                name : '딸기듬뿍\n와플 ',
            },
            {
                img : 'img/main/sec2/beverage/ade/sec02_recommended02__img10.png',
                alt : '허니브레드와플 ',
                name : '허니브레드\n와플 ',
            },
        ]
        
        const waffleList7 = [
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img01.png',
                alt : '스노우와플 ',
                name : '스노우와플 ',
            },
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img02.png',
                alt : '오레오누텔라와플',
                name : '오레오누텔라\n와플',
            },
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img03.png',
                alt : '애플시나몬와플',
                name : '애플시나몬\n와플',
            },
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img04.png',
                alt : '블루베리와플',
                name : '블루베리\n와플',
            },
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img05.png',
                alt : '바나나와플',
                name : '바나나와플',
            },
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img06.png',
                alt : '딸기와플',
                name : '딸기와플',
            },
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img07.png',
                alt : '메이플시나몬와플',
                name : '메이플시나몬\n와플',
            },
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img08.png',
                alt : '크림와플',
                name : '크림와플',
            },
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img09.png',
                alt : '딸기케이크와플',
                name : '딸기케이크\n와플',
            },
            {
                img : 'img/main/sec2/beverage/smoodthie/sec02_recommended03__img10.png',
                alt : '모카케이크와플',
                name : '모카케이크\n와플',
            },
        ]

        const getWaffleList = () => {
            if(currentSlider === 0) return waffleList5;
            if(currentSlider === 1) return waffleList6;
            return waffleList7;
        }

        // gelato

        function SimpleSlider5() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade : true,
                afterChange : (index) => setCurrentSlider(index),
            };
            return (
                <div className="slider-container btoppingSlider">
                    <Slider {...settings}>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/gelato/sec02_menu__img01.png`} alt='젤라또' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    젤라또
                                </h2>
                                <p>
                                    젤라또와플에 토핑으로 올라가는 젤라또를<br /> 
                                    따로 즐겨보세요!
                                </p>
                            </div>
                        </BmImg>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/gelato/sec02_menu__img02.png`} alt='치즈케이크젤라또컵' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    치즈케이크젤라또컵
                                </h2>
                                <p>
                                    치즈케이크가 가득한 치즈케이크젤라또컵
                                </p>
                            </div>
                        </BmImg>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/gelato/sec02_menu__img03.png`} alt='오레오젤라또컵' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    오레오젤라또컵
                                </h2>
                                <p>
                                    오레오가 가득한 오레오젤라또컵
                                </p>
                            </div>
                        </BmImg>
                        <BmImg>
                            <div className='imgArea imgArea2'>
                                <div className='img'>
                                    <img src={`${process.env.PUBLIC_URL}img/main/sec2/gelato/sec02_menu__img04.png`} alt='딸기케이크젤라또컵' />
                                </div>
                            </div>
                            <div className='desc'>
                                <h2 className='descTitle'>
                                    딸기케이크젤라또컵
                                </h2>
                                <p>
                                    상큼한 딸기가 가득한 딸기젤라또컵
                                </p>
                            </div>
                        </BmImg>
                    </Slider>
                </div>
            );
        }

        const gelatoList = [
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping01.png',
                alt : '바닐라',
                name : '바닐라',
            },
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping02.png',
                alt : '초코',
                name : '초코',
            },
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping03.png',
                alt : '초코바닐라',
                name : '초코바닐라',
            },
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping04.png',
                alt : '딸기',
                name : '딸기',
            },
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping05.png',
                alt : '크림치즈',
                name : '크림치즈',
            },
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping06.png',
                alt : '플레인요거트',
                name : '플레인요거트',
            },
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping07.png',
                alt : '블루베리',
                name : '블루베리',
            },
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping08.png',
                alt : '녹차',
                name : '녹차',
            },
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping09.png',
                alt : '망고',
                name : '망고',
            },
            {
                img : 'img/main/sec2/gelato/flavor/sec02_basic01__topping10.png',
                alt : '바나나우유',
                name : '바나나우유',
            },
        ]

        const gelatoList2 = [
            {
                img : 'img/main/sec2/gelato/topping/sec02_custom01__topping01.png',
                alt : '딸기',
                name : '딸기',
            },
            {
                img : 'img/main/sec2/gelato/topping/sec02_custom01__topping02.png',
                alt : '치즈케이크',
                name : '치즈케이크',
            },
            {
                img : 'img/main/sec2/gelato/topping/sec02_custom01__topping03.png',
                alt : '크런치딸기잼',
                name : '크런치딸기잼',
            },
            {
                img : 'img/main/sec2/gelato/topping/sec02_custom01__topping04.png',
                alt : '블루베리',
                name : '블루베리',
            },
            {
                img : 'img/main/sec2/gelato/topping/sec02_custom01__topping05.png',
                alt : '베리베리',
                name : '베리베리',
            },
        ]



        const renderContent = () => {

            switch(activeTab) {
                case 'waffle' :
                    return(
                        <BmRight>
                            {SimpleSlider()}
                            <BmTopping>
                                <div className='basicTopping'>
                                    <h2 className='btTitle'>Basic toppings for waffle</h2>
                                    <ul className='btoppingList'>
                                        {btoppingList.map((topping, index) => (
                                            <li key={index}>
                                                <div className='imgCover'>
                                                    <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                                    <div className='btoppingFlim'>
                                                        <p>{topping.name}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='justTopping'>
                                    <h2 className='jtTitle'>Toppings for waffle</h2>
                                    {currentSlider === 0 ? (ToppingSlider()) : (JToppingSlider())}
                                </div>
                                <div className='menuMore'>
                                    <button>메뉴 더보기</button>
                                </div>
                            </BmTopping>
                        </BmRight>
                    )
                case 'swaffle' :
                    return(
                        <BmRight>
                            {SimpleSlider2()}
                            <BmTopping>
                                <div className='basicTopping pb180'>
                                    <h2 className='btTitle'>Basic toppings for waffle</h2>
                                    <ul className='btoppingList'>
                                        {(currentSlider === 0 ? btoppingList2 : btoppingList2_1).map((topping, index) => (
                                            <li key={index}>
                                                <div className='imgCover'>
                                                    <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                                    <div className='btoppingFlim'>
                                                        <p>{topping.name}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='justTopping'>
                                    <h2 className='jtTitle'>Toppings for waffle</h2>
                                    <div className='jtoppingCover'>
                                        {jtopping2.map((topping,index) => (
                                            <div className='jtopping' key={index}>
                                                <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                                <div className='jtoppingFlim'>
                                                    <p>{topping.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='menuMore'>
                                    <button>메뉴 더보기</button>
                                </div>
                            </BmTopping>
                        </BmRight>
                    )
                case 'coffee' :
                    return(
                        <BmRight>
                            {SimpleSlider3()}
                            <BmTopping>
                                <div className='basicTopping pb180'>
                                    <h2 className='btTitle'>Recommended waffles TOP 10</h2>
                                    <ul className='btoppingList'>
                                        {(currentSlider === 0 ? waffleList : waffleList2).map((topping, index) => (
                                            <li key={index}>
                                                <div className='imgCover'>
                                                    <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                                    <div className='btoppingFlim'>
                                                        <p>{topping.name}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='menuMore'>
                                    <button>메뉴 더보기</button>
                                </div>
                            </BmTopping>
                        </BmRight>
                    )
                case 'beverage' :
                    return(
                        <BmRight>
                            {SimpleSlider4()}
                            <BmTopping>
                                <div className='basicTopping pb180'>
                                    <h2 className='btTitle'>Recommended waffles TOP 10</h2>
                                    <ul className='btoppingList'>
                                        {getWaffleList().map((topping, index) => (
                                            <li key={index}>
                                                <div className='imgCover'>
                                                    <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                                    <div className='btoppingFlim'>
                                                        <p>{topping.name}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='menuMore'>
                                    <button>메뉴 더보기</button>
                                </div>
                            </BmTopping>
                        </BmRight>
                    )
                case 'gelato' :
                    return(
                        <BmRight>
                            {SimpleSlider5()}
                            <BmTopping>
                                <div className='basicTopping' style={{paddingBottom : currentSlider === 0 ? '0' : '195px'}}>
                                    <h2 className='btTitle'>Recommended waffles TOP 10</h2>
                                    <ul className='btoppingList'>
                                        {gelatoList.map((topping, index) => (
                                            <li key={index}>
                                                <div className='imgCover'>
                                                    <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                                    <div className='btoppingFlim'>
                                                        <p>{topping.name}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='justTopping'style={{display : currentSlider === 0 ? 'block' : 'none'}}>
                                    <h2 className='jtTitle'>Toppings for waffle</h2>
                                    <div className='jtoppingCover'>
                                        {(currentSlider === 0 ? gelatoList2 : []).map((topping,index) => (
                                            <div className='jtopping' key={index}>
                                                <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                                <div className='jtoppingFlim'>
                                                    <p>{topping.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='menuMore'>
                                    <button>메뉴 더보기</button>
                                </div>
                            </BmTopping>
                        </BmRight>
                    )
                case 'sfood' :
                    return(
                        <BmRight>
                            <BmImg>
                                <div className='imgArea'>
                                    <div className='img'>
                                        <img src={`${process.env.PUBLIC_URL}img/main/sec2/sfood/sec02_menu__img04.png`} alt='떡꼬치' />
                                    </div>
                                </div>
                                <div className='desc'>
                                    <h2 className='descTitle'>
                                        떡꼬치와플
                                    </h2>
                                    <p>
                                        와플대학의 감성 한스푼 추가한 추억의 떡꼬치
                                    </p>
                                </div>
                            </BmImg>
                            <BmTopping>
                                <div className='basicTopping pb300'>
                                    <h2 className='btTitle'>와플대학! 런치 디너 타임을 책임질 든든한 학식!</h2>
                                    <ul className='btoppingList'>
                                        <li>
                                            <div className='imgCover'>
                                                <img src={`${process.env.PUBLIC_URL}img/main/sec2/sfood/sec02_recommended01__img04.png`} alt='떡꼬치'/>
                                                <div className='btoppingFlim'>
                                                    <p>떡꼬치와플</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='menuMore'>
                                    <button>메뉴 더보기</button>
                                </div>
                            </BmTopping>
                        </BmRight>
                    )
                default :
                    return(
                        <></>
                    )
            }
        }

        return(
            
            <Sec2>
                <div className='sec2Cover'>
                    <h2 className='title'>와플대학 Best 10 Menu</h2>
                    <BestMenu>

                        <BmLeft>
                            <ul>
                                <li onClick={() => {handleTabClick('waffle')} } className={activeTab === 'waffle' ? 'click' : ''}>
                                    Waffle
                                </li>
                                <li onClick={() => {handleTabClick('swaffle')} } className={activeTab === 'swaffle' ? 'click' : ''}>
                                    Special Waffle
                                </li>
                                <li onClick={() => {handleTabClick('coffee')} } className={activeTab === 'coffee' ? 'click' : ''}>
                                    Coffee / Latte
                                </li>
                                <li onClick={() => {handleTabClick('beverage')} } className={activeTab === 'beverage' ? 'click' : ''}>
                                    Beverage
                                </li>
                                <li onClick={() => {handleTabClick('gelato')} } className={activeTab === 'gelato' ? 'click' : ''}>
                                    Gelato
                                </li>
                                <li onClick={() => {handleTabClick('sfood')} } className={activeTab === 'sfood' ? 'click' : ''}>
                                    School Food
                                </li>
                            </ul>
                        </BmLeft>

                        {renderContent()}

                    </BestMenu>
                </div>
            </Sec2>
        )
    }

    const Section3 = () => {
        return(
            <Sec3>
                <div className='sec3Cover'>
                    <div className='sec3Area'>
                        <div className='sec3Content'>
                            <h2 className='sec3Sub'>WAFFLE & COFFEE</h2>
                            <div className='sec3Title'>와플대학 BRAND STORY</div>
                            <div className='sec3Sub2'>2008년부터 시작한 대한민국 와플 <span>NO.1,</span></div>
                            <p className='sec3Desc1'>와플대학은 다양한 10가지 맛 크림과 맛있는 토핑으로 만든<br />바삭한 와플을 커플, 가족, 친구, 아이와 함께 즐길 수 있는 카페입니다.</p>
                            <p className='sec3Desc2'>와플대학에서 K와플을 즐겨보세요!</p>
                            <div className='sec3Link'>
                                <button className='sec3LinkBtn'>창업 문의</button>
                                <button className='sec3LinkBtn sec3LinkBtn2'>브랜드 소개</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Sec3>
        )
    }

    const Section4 = () => {
        return(
            <Sec4>
                <div className='sec4Cover'>
                    <h2 className='sec4Title'>와플대학 BRAND NEWS</h2>
                    <div className='sec4Tab'>
                        <ul className='sec4TabList'>
                            <li>
                                <p>이벤트</p>
                            </li>
                            <li>
                                <p>사회공헌</p>
                            </li>
                        </ul>
                    </div>
                    <div className='sec4Content'>
                        <ul className='sec4ContentList'>
                            <li>
                                <img src='' alt=''/>
                                <p>제목</p>
                                <p>내용</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Sec4>
        )
    }

    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </>
    )
}

export default Main