import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

import './Main.css'


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

    // const Section2 = () => {

    //     const [activeTab, SetActiveTab] = useState('waffle');

    //     const handleTabClick = (tab) => {
    //         SetActiveTab(tab);
    //     }

    //     function SimpleSlider() {
    //         const settings = {
    //             dots: true,
    //             infinite: true,
    //             speed: 500,
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         };
    //         return (
    //             <div className="slider-container">
    //                 <Slider {...settings}>
    //                     <div>
    //                         <img src={`${process.env.PUBLIC_URL}img/main/sec2/waffle/sec02_menu__img01.png`} alt='img1' />
    //                     </div>
    //                     <div>
    //                         <img src={`${process.env.PUBLIC_URL}img/main/sec2/waffle/sec02_menu__img02.png`} alt='img1' />
    //                     </div>
    //                 </Slider>
    //             </div>
    //         );
    //     }

    //     const renderContent = () => {
    //         switch(activeTab) {
    //             case 'waffle' :
    //                 return(
    //                     <BmRight>
                            
    //                         <BmImg>
    //                             <div className='imgArea'>
    //                                 <div className='img'>
    //                                     {SimpleSlider()}
    //                                 </div>
                                    
    //                             </div>
    //                             <div className='desc'>
    //                                 <h2 className='descTitle'>
    //                                     크림와플
    //                                 </h2>
    //                                 <p>
    //                                     10가지 와플크림 중 원하는 크림을 <br />
    //                                     선택하여 즐겨보세요
    //                                 </p>
    //                                 <div className='docs'>
    //                                     <span>1</span>
    //                                     <span>2</span>
    //                                 </div>
    //                             </div>
    //                         </BmImg>
    
    //                         <BmTopping>
    //                             <div className='basicTopping'>
    //                                 <h2 className='btTitle'>Basic toppings for waffle</h2>
    //                                 <ul>
    //                                     <li>1</li>
    //                                     <li>2</li>
    //                                 </ul>
    //                             </div>
    //                             <div className='justTopping'>
    //                                 <h2 className='jtTitle'>Toppings for waffle</h2>
    //                                 <ul>
    //                                     <li>1</li>
    //                                     <li>2</li>
    //                                 </ul>
    //                                 <div className='docs'>
    //                                     <span>1</span>
    //                                     <span>2</span>
    //                                 </div>
    //                             </div>
    //                             <button>
    //                                 메뉴 더보기
    //                             </button>
    //                         </BmTopping>
    //                     </BmRight>
    //                 )
    //             case 'sWaffle' :
    //                 return(
    //                     <div></div>
    //                 )
    //             case 'coffee' :
    //                 return(
    //                     <div></div>
    //                 )
    //             case 'beverage' :
    //                 return(
    //                     <div></div>
    //                 )
    //             case 'gelato' :
    //                 return(
    //                     <div></div>
    //                 )
    //             case 'sfood' :
    //                 return(
    //                     <div></div>
    //                 )
    //             default :
    //                 return(
    //                     <></>
    //                 )
    //         }
    //     }

    //     return(
            
    //         <Sec2>
    //             <div className='sec2Cover'>
    //                 <h2 className='title'>와플대학 Best 10 Menu</h2>
    //                 <BestMenu>

    //                     <BmLeft>
    //                         <ul>
    //                             <li onClick={() => {handleTabClick('waffle')} } className={activeTab === 'waffle' ? 'click' : ''}>
    //                                 Waffle
    //                             </li>
    //                             <li onClick={() => {handleTabClick('swaffle')} } className={activeTab === 'swaffle' ? 'click' : ''}>
    //                                 Special Waffle
    //                             </li>
    //                             <li onClick={() => {handleTabClick('coffee')} } className={activeTab === 'coffee' ? 'click' : ''}>
    //                                 Coffee / Latte
    //                             </li>
    //                             <li onClick={() => {handleTabClick('beverage')} } className={activeTab === 'beverage' ? 'click' : ''}>
    //                                 Beverage
    //                             </li>
    //                             <li onClick={() => {handleTabClick('gelato')} } className={activeTab === 'gelato' ? 'click' : ''}>
    //                                 Gelato
    //                             </li>
    //                             <li onClick={() => {handleTabClick('sfood')} } className={activeTab === 'sfood' ? 'click' : ''}>
    //                                 School Food
    //                             </li>
    //                         </ul>
    //                     </BmLeft>

    //                     {renderContent()}

    //                 </BestMenu>
    //             </div>
    //         </Sec2>
    //     )
    // }

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
                        <div></div>
                    )
                case 'beverage' :
                    return(
                        <div></div>
                    )
                case 'gelato' :
                    return(
                        <div></div>
                    )
                case 'sfood' :
                    return(
                        <div></div>
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


    return (
        <>
            <Section1 />
            <Section2 />
        </>
    )
}

export default Main