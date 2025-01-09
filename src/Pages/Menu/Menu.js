import React, { useState } from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import Aside from '../Home/Aside'
import styled from 'styled-components'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../Menu/Menu.css'

const NewArea = styled.div`
    width: 100%;

    & .visual {
        width: 100%;
        height: 720px;
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
                        display: block;
                    }
                }
            }
        }
    }

    & .content2 {
        padding-bottom: 120px;

        & .content2Tab {
            width: 100%;
            background: #ffde04;
            padding: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            & li {
                padding: 0 20px;
                position: relative;
                &::after {
                    content: '';
                    width: 2px;
                    height: 20px;
                    background: #000;
                    display: block;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
                &:last-child::after {
                    width: 0;
                }
                & p {
                    font-size: 18px;
                    color: #000;
                    font-weight: 500;
                    cursor: pointer;
                }
            }
        }

        & .content2Slide {
            padding: 80px 0;

            & .content2SlideCover {
                width: 100%;
                max-width: 1310px;
                margin: 0 auto;
                padding: 0 15px;

                & .c2SlideArea {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    & .left {
                        width: 240px;
                        & .tabList {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            padding: 40px 0;
                            &::after {
                                content: '';
                                width: 220px;
                                height: 178px;
                                display: block;
                                background-image: url('/img/menu/waffle/prd_best__img.png');
                                background-repeat: no-repeat;
                                background-position: 0 0;
                                background-size: contain;
                                position: relative;
                                left: 0;
                                bottom: -40px;
                                transition: all 0.6s;
                            }
                            
                        }

                            & li {
                                padding: 20px 0;
                                & p {
                                    font-size: 38px;
                                    color: #202020;
                                    font-weight: 600;
                                    display: flex;
                                    align-items: center;
                                    cursor: pointer;
                                    &::before {
                                        content: '';
                                        width: 0px;
                                        height: 4px;
                                        display: block;
                                        background: #000;
                                        margin-right: 16px;
                                        transition: all 0.3s;
                                    }
                                }
                            }
                            & .tabOn {
                                color: #ffe32c;

                                &::before {
                                    width: 36px;
                                    background: #ffe32c;
                                    transition: all 0.3s;
                                }
                            }
                            & .tabOn2 {
                                color: #267dff;

                                &::before {
                                    width: 36px;
                                    background: #267dff;
                                    transition: all 0.3s;
                                }
                            }
                            
                        }
                        & .bgCh {
                            &::after {
                                background-image: url('/img/menu/waffle/prd_new__img.png') !important;
                                transition: all 0.6s;
                            }
                    }
                    & .right {
                        width: calc(100% - 240px);

                                & .newWaffle {
                                    width: 100%;
                                    min-height: 490px;
                                    box-sizing: border-box;
                                    position: relative;
                                    padding: 60px 40px 40px;
                                    background: #fffce8;
                                    /* margin-right: 40px; */
                                    & .newIcon {
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                    }
                                    & .img {

                                        & img { 
                                            width: 100%;
                                        }
                                    }

                                    & .title {
                                        font-size: 18px;
                                        font-weight: 600;
                                        color: #202020;
                                        text-align: center;
                                        margin-top: 30px;
                                        margin-bottom: 12px;
                                    }

                                    & .desc {
                                        font-size: 16px;
                                        font-weight: 600;
                                        color: #575757;
                                        text-align: center;
                                    }
                                    
                                }
                    }
                }
            }
        }

        & .content2List {

            & .content2ListCover {
                display: flex;
                flex-wrap: wrap;
                border-top: 1px solid #f8f8f8;
                & .content2Listone {
                    box-sizing: border-box;
                    width: 100%;
                    max-width: 25%;
                    flex: 0 0 25%;
                    padding: 80px 15px;
                    border-right: 1px solid #f8f8f8;
                    border-bottom: 1px solid #f8f8f8;
                    text-align: center;
                    position: relative;
                    background: #fff;
                    transition: all 0.5s;
                    cursor: pointer;
                    &:nth-child(4n) {
                        border-right: 0px;
                    }
                    & .cloImg img{
                        width: 100%;
                    }
                    & .cloDesc {
                        margin-top: 40px;

                        & h2 {
                            font-size: 22px;
                            font-weight: 600;
                            color: #202020;
                            margin-bottom: 10px;
                        }

                        & p {
                            font-size: 16px;
                            font-weight: 700;
                            color: #888;
                            height: 44px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                    }

                    & .moreIcon {
                        position: absolute;
                        left: 50%;
                        top: 34%;
                        transform: translateX(-50%);
                        width: 80px;
                        height: 80px;
                        display: block;
                        opacity: 0;
                        transition: all 0.5s;
                    }

                    &:hover {
                        background: #f8f8f8;
                        transition: all 0.5s;
                    }
                    &:hover .moreIcon{
                        opacity: 1;
                        transition: all 0.5s;
                    }
                }
            }
        }

        & .content2ListBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            & button {
                max-width: 240px;
                width: 100%;
                height: 56px;
                background: #3d3d3d;
                color: #fff;
                outline: none;
                box-sizing: border-box;
                border-radius: 10px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                font-weight: 600;
                &::after {
                    content: '';
                    width: 16px;
                    height: 8px;
                    display: block;
                    background-image: url('/img/menu/waffle/prd_menu__more.png');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;
                    margin-left: 20px;
                }
            }
        }
    }
`;

const Menu = () => {
    

    const MenuList = () => {

        const [tabClick, setTabClick] = useState('waffle');

        const handleClick = (tab) => {
            setTabClick(tab);
        }

        const tabData = {
            new : {
                title : '신메뉴',
                subTitle : 'NEW MENU',
                desc : '와플대학의 다양한 수업과 프로모션을 소개합니다.',
                bgImg : '/img/menu/new/sv2-1.png',
            },
            waffle : {
                title : '와플',
                subTitle : 'WAFFLE',
                desc : '와플대학의 다양한 와플학과를 소개합니다.',
                bgImg : '/img/menu/waffle/sv2-2.png',
            },
            drink : {
                title : '음료',
                subTitle : 'BEVERAGE',
                desc : '와플대학의 즐거운 음료학과를 소개합니다.',
                bgImg : '/img/menu/drink/sv2-3.png',
            },
            gelato : {
                title : '젤라또',
                subTitle : 'GELATO',
                desc : '와플대학의 시원한 젤라또학과를 소개합니다.',
                bgImg : '/img/menu/gelato/sv2-4.png',
            },
            sfood : {
                title : '스쿨푸드',
                subTitle : 'SCHOOL FOOD',
                desc : '와플대학의 스쿨푸드를 소개합니다.',
                bgImg : '/img/menu/sfood/sv2-5.png',
            },
        }

        // 신메뉴 와플 리스트
        const newWaffleList = [
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/waffle/newWaffle/img1.png',
                alt : 'B.C.D 샌드와플',
                title : 'B.C.D 샌드와플',
                desc : 'Scallion Bacon Cream Cheese Sand Waffle',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/waffle/newWaffle/img2.png',
                alt : '와플에빠진붕어 (고구마)',
                title : '와플에빠진붕어 (고구마)',
                desc : 'Hot & Sweet stuffed Waffle (Sweet Potato)',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/waffle/newWaffle/img3.png',
                alt : '와플에빠진붕어 (슈크림)',
                title : '와플에빠진붕어 (슈크림)',
                desc : 'Hot & Sweet stuffed Waffle (Custard)',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/waffle/newWaffle/img4.png',
                alt : '와플에빠진붕어 (팥)',
                title : '와플에빠진붕어 (팥)',
                desc : 'Hot & Sweet stuffed Waffle (Sweet Red-bean)',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/waffle/newWaffle/img5.png',
                alt : '사과는 햄복햄 샌드와플',
                title : '사과는 햄복햄 샌드와플',
                desc : 'Double ham & Apple',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/waffle/newWaffle/img6.png',
                alt : '에그마요 샌드와플',
                title : '에그마요 샌드와플',
                desc : 'Egg Mayo',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/waffle/newWaffle/img7.png',
                alt : '솜사탕 젤라또와플',
                title : '솜사탕 젤라또와플',
                desc : 'COTTON CANDY GELATO WAFFLE',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/waffle/newWaffle/img8.png',
                alt : '더블 애플 시나몬 젤라또 와플',
                title : '더블 애플 시나몬 젤라또 와플',
                desc : 'DOUBLE APPLE CINNAMON GELATO WAFFLE',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/waffle/newWaffle/img9.png',
                alt : '추억의딸기잼와플',
                title : '추억의딸기잼와플',
                desc : 'Strawberry Jam Waffle',
            },
        ]

        // 신메뉴 와플 슬릭
        function newWaffle() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3
            };
            return (
                <div className="slider-container newWaffleContainer">
                    <Slider {...settings}>
                        {newWaffleList.map((waffle, index) => (
                            <div className="newWaffle" key={index}>
                                <div className="newIcon">
                                    <img src={process.env.PUBLIC_URL + waffle.icon} alt={waffle.iconalt} />
                                </div>
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + waffle.img} alt={waffle.alt} />
                                </div>
                                <h2 className="title">{waffle.title}</h2>
                                <p className="desc">{waffle.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        // 베스트 와플 리스트
        const bestWaffleList = [
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/waffle/bestWaffle/img1.png',
                alt : 'B.C.D 샌드와플',
                title : 'B.C.D 샌드와플',
                desc : 'Scallion Bacon Cream Cheese Sand Waffle',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/waffle/bestWaffle/img2.png',
                alt : '사과는 햄복햄 샌드와플',
                title : '사과는 햄복햄 샌드와플',
                desc : 'Double ham & Apple',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/waffle/bestWaffle/img3.png',
                alt : '에그마요 샌드와플',
                title : '에그마요 샌드와플',
                desc : 'Egg Mayo',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/waffle/bestWaffle/img4.png',
                alt : '오레오누텔라와플',
                title : '오레오누텔라와플',
                desc : 'Oreo Nutella Waffle',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/waffle/bestWaffle/img5.png',
                alt : '초코범벅젤라또와플',
                title : '초코범벅젤라또와플',
                desc : 'Chocolate Bomb Gelato Waffle',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/waffle/bestWaffle/img6.png',
                alt : '치즈케이크누텔라젤라또와플',
                title : '치즈케이크누텔라젤라또와플',
                desc : 'Cheese Cake Nutella Gelato Waffle',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/waffle/bestWaffle/img7.png',
                alt : '애플시나몬와플',
                title : '애플시나몬와플',
                desc : 'Apple Cinnamon Waffle',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/waffle/bestWaffle/img8.png',
                alt : '스노우와플',
                title : '스노우와플',
                desc : 'Snow Waffle',
            },
        ]

        // 베스트 와플 슬릭
        function bestWaffle() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3
            };
            return (
                <div className="slider-container newWaffleContainer">
                    <Slider {...settings}>
                        {bestWaffleList.map((waffle, index) => (
                            <div className="newWaffle" key={index}>
                                <div className="newIcon">
                                    <img src={process.env.PUBLIC_URL + waffle.icon} alt={waffle.iconalt} />
                                </div>
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + waffle.img} alt={waffle.alt} />
                                </div>
                                <h2 className="title">{waffle.title}</h2>
                                <p className="desc">{waffle.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        // 신메뉴 베스트 탭 스위치문 usestate
        const [newTab , setNewTab] = useState('newWaffle');

        const handleNewWaffle = (newWaffleTab) => {
            setNewTab(newWaffleTab)
        }

        // 신메뉴 베스트 탭 스위치문
        const renderNewWaffle = () => {
            switch(newTab) {
                case 'newWaffle' : 
                    return(
                        <>
                            {newWaffle()}
                        </>
                    )
                case 'bestWaffle' : 
                    return(
                        <>
                            {bestWaffle()}
                        </>
                    )
                default :
                    return(
                        <></>
                    )
            }
        }

        // 베이직와플 리스트
        const basicWaffleList = [
            {
                img : '/img/menu/waffle/waffleList/img1.png',
                alt : '블랙와플',
                title : '블랙와플',
                sub : 'Black Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/waffleList/img2.png',
                alt : '플레인와플',
                title : '플레인와플',
                sub : 'Plain waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/waffleList/img3.png',
                alt : '우리쌀와플',
                title : '우리쌀와플',
                sub : 'Rice Flour Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/waffleList/img4.png',
                alt : '추억의딸기잼와플',
                title : '추억의딸기잼와플',
                sub : 'Strawberry Jam Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/waffleList/img5.png',
                alt : '추억의사과잼와플',
                title : '추억의사과잼와플',
                sub : 'Apple Jam Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/waffleList/img6.png',
                alt : '크림와플',
                title : '크림와플',
                sub : 'Cream Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/waffleList/img7.png',
                alt : '애플시나몬와플',
                title : '애플시나몬와플',
                sub : 'Apple Cinnamon Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/waffleList/img8.png',
                alt : '메이플시나몬와플',
                title : '메이플시나몬와플',
                sub : 'Maple Cinnamon Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/waffleList/img9.png',
                alt : '스노우와플',
                title : '스노우와플',
                sub : 'Snow Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]


        const renderContent = () => {
            switch (tabClick) {
                case 'new':
                    return(
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
                                        <img src={`${process.env.PUBLIC_URL}img//menu/new/img1.png`} alt='img1' />
                                        <img src={`${process.env.PUBLIC_URL}img/menu/new/img2.png`} alt='img2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case 'waffle':
                    return(
                        <div className='content2'>
                            <ul className='content2Tab'>
                                <li>
                                    <p>베이직 와플</p>
                                </li>
                                <li>
                                    <p>누텔라 와플</p>
                                </li>
                                <li>
                                    <p>과일/스페셜 와플</p>
                                </li>
                                <li>
                                    <p>젤라또 와플</p>
                                </li>
                            </ul>
                            <div className='content2Slide'>
                                <div className='content2SlideCover'>
                                    <div className='c2SlideArea'>
                                        <div className='left'>
                                            <ul className={newTab === 'newWaffle' ? 'tabList bgCh' : 'tabList'}>
                                                <li>
                                                    <p className={newTab === 'newWaffle' ? 'tabOn' : ''} onClick={ () => {handleNewWaffle('newWaffle')}}>
                                                        신메뉴
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className={newTab === 'bestWaffle' ? 'tabOn2' : ''} onClick={ () => {handleNewWaffle('bestWaffle')}}>
                                                        베스트
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='right'>
                                            {renderNewWaffle()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {basicWaffleList.map((bwaffle,index) => (
                                        <div className='content2Listone' key={index}>
                                            <div className='cloImg'>
                                                <img src={process.env.PUBLIC_URL + bwaffle.img} alt={bwaffle.alt} />
                                            </div>
                                            <div className='cloDesc'>
                                                <h2>{bwaffle.title}</h2>
                                                <p>{bwaffle.sub}</p>
                                            </div>
                                            <div className='moreIcon'>
                                                <img src={process.env.PUBLIC_URL + bwaffle.moreimg} alt={bwaffle.morealt} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='content2ListBtn'>
                                <button>더보기</button>
                            </div>
                        </div>
                    )
                default:
                    return(
                        <div></div>
                    )
            }
        }

        const currentTab = tabData[tabClick] || tabData.default;

        return(
            <NewArea>
                <div className='visual' style={{backgroundImage : `url(${currentTab.bgImg})`}}>
                    <div className='visualCover'>
                        <div className='titleArea'>
                            <h2>{currentTab.title}</h2>
                            <span>{currentTab.subTitle}</span>
                            <p>{currentTab.desc}</p>
                        </div>
                        <div className='tabArea'>
                            <ul>
                                <li className={tabClick === 'new' ? 'on' : ''} onClick={()=>{handleClick('new')}}>신메뉴</li>
                                <li className={tabClick === 'waffle' ? 'on' : ''} onClick={()=>{handleClick('waffle')}}>와플</li>
                                <li className={tabClick === 'drink' ? 'on' : ''} onClick={()=>{handleClick('drink')}}>음료</li>
                                <li className={tabClick === 'gelato' ? 'on' : ''} onClick={()=>{handleClick('gelato')}}>젤라또</li>
                                <li className={tabClick === 'sfood' ? 'on' : ''} onClick={()=>{handleClick('sfood')}}>스쿨푸드</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {renderContent()}
            </NewArea>
        )
    }

    return (
        <>
            <Header />
            <MenuList />
            <Footer />
            <Aside />
        </>
    )
}

export default Menu