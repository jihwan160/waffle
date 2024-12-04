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
            color: red;
        }
    }
    
`;

const BmRight = styled.div`
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
    width: calc(100% - 600px);
    padding-left: 70px;

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

        const [activeTab, SetActiveTab] = useState('waffle');

        const handleTabClick = (tab) => {
            SetActiveTab(tab);
        }

        function SimpleSlider() {
            const settings = {
                dots: true,
                // infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade : true
            };
            return (
                <div className="slider-container">
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

        const renderContent = () => {
            switch(activeTab) {
                case 'waffle' :
                    return(
                        <BmRight>
                            
                            {SimpleSlider()}
    
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
                    )
                case 'sWaffle' :
                    return(
                        <div></div>
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