import React, { useEffect, useState } from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import Aside from '../Home/Aside'
import styled from 'styled-components'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../Menu/Menu.css'
import { useLocation } from 'react-router-dom'

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
                & .waffleTabOn {
                    color: #073290;
                    font-weight: 700;
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

                                & .newMenu {
                                    width: 100%;
                                    min-height: 490px;
                                    box-sizing: border-box;
                                    position: relative;
                                    padding: 60px 40px 40px;
                                    background: #fffce8;
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

                                & .bestMenu {
                                    background: #e9f2ff !important;
                                }
                    }
                }
            }
        }

        & .content2List {
            margin-bottom: 80px;
            position: relative;
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

                    // modal

                    & .modalCover {
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.12);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: fixed;
                        left: 0;
                        top: 0;
                        z-index: 99999;
                        
                        & .modalArea {
                            width: 100%;
                            background: #fff;
                            max-width: 1100px;
                            padding: 6px;
                            box-sizing: border-box;
                            & .modal {
                                width: 100%;
                                display: flex;
                                align-items: baseline;
                                border: 1px solid #000;
                                & .mleft {
                                    width: 400px;
                                    padding: 40px;
                                    box-sizing: border-box;

                                    & .mleftTitle {
                                        font-size: 40px;
                                        padding-bottom: 60px;
                                    }
                                    & img {
                                        width: 100%;
                                    }
                                }

                                & .mright {
                                    width: calc(100% - 400px);
                                    text-align: left;
                                    & .mrightCover {
                                        padding: 40px 40px 40px 0px;
                                        & .mrightList {
                                            padding-bottom: 30px;
                                            & .mrightTitle {
                                                font-size: 18px;
                                                font-weight: 700;
                                                color: #202020;
                                                padding-bottom: 10px;
                                                border-bottom: 1px solid #000;
                                                
                                                & span {
                                                    font-size: 16px;
                                                    font-weight: 600;
                                                    color: #5c5c5c;
                                                    margin-left: 4px;
                                                }
                                            }
                                            & .mrdesc {
                                                font-size: 14px;
                                                color: #202020;
                                                line-height: 1.5;
                                                padding: 20px 20px 0;
                                                font-weight: 500;
                                            }

                                            & .tableCover {
                                                width: 100%;
                                                padding: 20px 20px 0;
                                                box-sizing: border-box;
                                                & table {
                                                    width: 100%;
                                                    border: 1px solid #fff;
                                                    border-collapse: collapse;
                                                    box-sizing: border-box;
                                                    & thead {
                                                        
                                                        & tr {
                                                            border-bottom: 1px solid #fff;
                                                            text-align: center;
                                                            box-sizing: border-box;
                                                            & th {
                                                                padding: 5px;
                                                                background: #b0b0b0;
                                                                border-right: 1px solid #fff;
                                                                font-size: 14px;
                                                                color: #fff;
                                                                box-sizing: border-box;
                                                            }
                                                        }
                                                    }
                                                    & tbody {

                                                        & tr {
                                                            text-align: center;
                                                            & td {
                                                                height: 40px;
                                                                padding: 5px 10px;
                                                                background: #efefef;
                                                                font-size: 14px;
                                                                color: #202020;
                                                                border-right: 1px solid #fff;
                                                                box-sizing: border-box;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    
                                }
                            }

                            
                        }
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

        const location = useLocation();
        const [tabClick, setTabClick] = useState('new');

        const handleClick = (tab) => {
            setTabClick(tab);
        }

        // header에서 탭클릭시 넘어온 값을 읽어서 해당 탭으로 이동
        useEffect(() => {
            if(location.state && location.state.tab) {
                setTabClick(location.state.tab);
            }
        }, [location.state]);

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

        // 더보기 클릭시 4개씩 보여줌 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ공통
        const [visibleItems , setVisibleItems] = useState(8);

        const handleLoadMore = () => {
            setVisibleItems((prev) => prev + 4);
        }

        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ와플

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
                            <div className="newMenu" key={index}>
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
                            <div className="newMenu bestMenu" key={index}>
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
                desc : '',
            },
            {
                img : '/img/menu/waffle/waffleList/img2.png',
                alt : '플레인와플',
                title : '플레인와플',
                sub : 'Plain waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
                desc : '',
            },
            {
                img : '/img/menu/waffle/waffleList/img3.png',
                alt : '우리쌀와플',
                title : '우리쌀와플',
                sub : 'Rice Flour Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
                desc : '',
            },
            {
                img : '/img/menu/waffle/waffleList/img4.png',
                alt : '추억의딸기잼와플',
                title : '추억의딸기잼와플',
                sub : 'Strawberry Jam Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
                desc : '',
            },
            {
                img : '/img/menu/waffle/waffleList/img5.png',
                alt : '추억의사과잼와플',
                title : '추억의사과잼와플',
                sub : 'Apple Jam Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
                desc : '',
            },
            {
                img : '/img/menu/waffle/waffleList/img6.png',
                alt : '크림와플',
                title : '크림와플',
                sub : 'Cream Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
                desc : '',
            },
            {
                img : '/img/menu/waffle/waffleList/img7.png',
                alt : '애플시나몬와플',
                title : '애플시나몬와플',
                sub : 'Apple Cinnamon Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
                desc : '',
            },
            {
                img : '/img/menu/waffle/waffleList/img8.png',
                alt : '메이플시나몬와플',
                title : '메이플시나몬와플',
                sub : 'Maple Cinnamon Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
                desc : '메이플 시럽과 시나몬이 들어간 기본 와플',
                desc2 : '대두,우유,밀',
            },
            {
                img : '/img/menu/waffle/waffleList/img9.png',
                alt : '스노우와플',
                title : '스노우와플',
                sub : 'Snow Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
                desc : '',
            },
        ]

        // 누텔라와플 리스트
        const nutellaWaffleList = [
            {
                img : '/img/menu/waffle/nutellaList/img1.png',
                alt : '오레오누텔라와플',
                title : '오레오누텔라와플',
                sub : 'Oreo Nutella Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/nutellaList/img2.png',
                alt : '바나나누텔라와플',
                title : '바나나누텔라와플',
                sub : 'Banana Nutella waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/nutellaList/img3.png',
                alt : '딸기누텔라와플',
                title : '딸기누텔라와플',
                sub : 'Strawberry Nutella Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/nutellaList/img4.png',
                alt : '누텔라에 빠진 마시멜로 젤라또 와플',
                title : '누텔라에 빠진 마시멜로 젤라또 와플',
                sub : 'Nutella Marshmallow Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/nutellaList/img5.png',
                alt : '치즈케이크누텔라젤라또와플',
                title : '치즈케이크누텔라젤라또와플',
                sub : 'Cheese Cake Nutella Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/nutellaList/img6.png',
                alt : '오레오누텔라젤라또와플',
                title : '오레오누텔라젤라또와플',
                sub : 'Oreo Nutella Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/nutellaList/img7.png',
                alt : '누텔라에 빠진 마시멜로 와플',
                title : '누텔라에 빠진 마시멜로 와플',
                sub : 'Nutella Marshmallow Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]

        // 과일/스페셜와플 리스트
        const specialWaffleList = [
            {
                img : '/img/menu/waffle/specialList/img1.png',
                alt : 'B.C.D 샌드와플',
                title : 'B.C.D 샌드와플',
                sub : 'Scallion Bacon Cream Cheese Sand Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img2.png',
                alt : '와플에빠진붕어 (고구마)',
                title : '와플에빠진붕어 (고구마)',
                sub : 'Hot & Sweet stuffed Waffle (Sweet Potato)',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img3.png',
                alt : '와플에빠진붕어 (슈크림)',
                title : '와플에빠진붕어 (슈크림)',
                sub : 'Hot & Sweet stuffed Waffle (Custard)',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img4.png',
                alt : '와플에빠진붕어 (팥)',
                title : '와플에빠진붕어 (팥)',
                sub : 'Hot & Sweet stuffed Waffle (Sweet Red-bean)',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img5.png',
                alt : '사과는 햄복햄 샌드와플',
                title : '사과는 햄복햄 샌드와플',
                sub : 'Double ham & Apple',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img6.png',
                alt : '에그마요 샌드와플',
                title : '에그마요 샌드와플',
                sub : 'Egg Mayo',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img7.png',
                alt : '바나나와플',
                title : '바나나와플',
                sub : 'Banana Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img8.png',
                alt : '블루베리와플',
                title : '블루베리와플',
                sub : 'Blueberry Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img9.png',
                alt : '베리베리와플',
                title : '베리베리와플',
                sub : 'Berry Berry Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img10.png',
                alt : '딸기와플',
                title : '딸기와플',
                sub : 'Strawberry Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img11.png',
                alt : '모카케이크와플',
                title : '모카케이크와플',
                sub : 'Mocha Cake Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img12.png',
                alt : '베리베리케이크와플',
                title : '베리베리케이크와플',
                sub : 'Berryberry Cake Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img13.png',
                alt : '더티초코케이크와플',
                title : '더티초코케이크와플',
                sub : 'Dirty Chocolate Cake Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img14.png',
                alt : '허니브레드와플',
                title : '허니브레드와플',
                sub : 'Honey Bread Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img15.png',
                alt : '슈크림와플',
                title : '슈크림와플',
                sub : 'Choux Cream Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img16.png',
                alt : '슈크림크런치와플',
                title : '슈크림크런치와플',
                sub : 'Choux Cream Crunch Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img17.png',
                alt : '딸기케이크와플',
                title : '딸기케이크와플',
                sub : 'Strawberry Cake Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img18.png',
                alt : '티라미수와플',
                title : '티라미수와플',
                sub : 'Tiramisu Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img19.png',
                alt : '크런치딸기잼와플',
                title : '크런치딸기잼와플',
                sub : 'Crunch Strawberry Jam Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img20.png',
                alt : '딸기듬뿍와플',
                title : '딸기듬뿍와플',
                sub : 'Waffle full of Strawberries',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img21.png',
                alt : '팥스노우와플',
                title : '팥스노우와플',
                sub : 'Red Beans Snow Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img22.png',
                alt : '호두고구마와플',
                title : '호두고구마와플',
                sub : 'Sweetpotato Walnuts Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img23.png',
                alt : '와숫가루레드빈와플',
                title : '와숫가루레드빈와플',
                sub : 'WU MISUGARU Red Bean Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/specialList/img24.png',
                alt : '치즈케이크&크랜베리와플',
                title : '치즈케이크&크랜베리와플',
                sub : 'Cheese cake & Cranberry Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },

        ]

        // 젤라또와플 리스트
        const gelatoWaffleList = [
            {
                img : '/img/menu/waffle/gelatoList/img1.png',
                alt : '솜사탕 젤라또와플',
                title : '솜사탕 젤라또와플',
                sub : 'COTTON CANDY GELATO WAFFLE',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img2.png',
                alt : '더블 애플 시나몬 젤라또 와플',
                title : '더블 애플 시나몬 젤라또 와플',
                sub : 'DOUBLE APPLE CINNAMON GELATO WAFFLE',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img3.png',
                alt : '슈크림젤라또와플',
                title : '슈크림젤라또와플',
                sub : 'Choux Cream Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img4.png',
                alt : '크런치딸기잼젤라또와플',
                title : '크런치딸기잼젤라또와플',
                sub : 'Crunch Strawberry Jam Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img5.png',
                alt : '초코범벅젤라또와플',
                title : '초코범벅젤라또와플',
                sub : 'Chocolate Bomb Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img6.png',
                alt : '치즈범벅젤라또와플',
                title : '치즈범벅젤라또와플',
                sub : 'Cheese Bomb Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img7.png',
                alt : '블루베리범벅젤라또와플',
                title : '블루베리범벅젤라또와플',
                sub : 'Blueberry Bomb Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img8.png',
                alt : '망고범벅젤라또와플',
                title : '망고범벅젤라또와플',
                sub : 'Mango Bomb Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img9.png',
                alt : '딸기범벅젤라또와플',
                title : '딸기범벅젤라또와플',
                sub : 'Strawberry Bomb Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img10.png',
                alt : '싸만코젤라또와플',
                title : '싸만코젤라또와플',
                sub : 'Red Beans Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img11.png',
                alt : '딸기누텔라젤라또와플',
                title : '딸기누텔라젤라또와플',
                sub : 'Strawberry Nutella Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img12.png',
                alt : '베리베리젤라또와플',
                title : '베리베리젤라또와플',
                sub : 'Berryberry Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img13.png',
                alt : '블루베리젤라또와플',
                title : '블루베리젤라또와플',
                sub : 'Blueberry Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img14.png',
                alt : '크림젤라또와플',
                title : '크림젤라또와플',
                sub : 'Cream Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/waffle/gelatoList/img15.png',
                alt : '젤라또와플',
                title : '젤라또와플',
                sub : 'Gelato Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]

        // 와플 음료 젤라또 스쿨푸드 탭에서 와플탭
        const [waffleTab , setWaffleTab] = useState('basic');

        const handleWaffleTab = (wtab) => {
            setWaffleTab(wtab);
        }

        // 와플 메인 탭 스위치문
        const renderContentTab = () => {

            switch (waffleTab) {
                case 'basic':
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {basicWaffleList.slice(0 , visibleItems).map((bwaffle,index) => (
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

                                            <div className='modalCover'>
                                                <div className='modalArea'>
                                                    <div className='modal'>
                                                        <div className='mleft'>
                                                            <h2 className='mleftTitle'>waffle</h2>
                                                            <img src={process.env.PUBLIC_URL + bwaffle.img} alt={bwaffle.alt} />
                                                        </div>
                                                        <div className='mright'>
                                                            <div className='mrightCover'>
                                                                <div className='mrightList'>
                                                                    <div>
                                                                        <h2 className='mrightTitle'>
                                                                            {bwaffle.title}
                                                                            <span>({bwaffle.sub})</span>
                                                                        </h2>
                                                                    </div>
                                                                    <p className='mrdesc'>
                                                                        {bwaffle.desc}
                                                                    </p>
                                                                </div>
                                                                <div className='mrightList'>
                                                                    <div>
                                                                        <h2 className='mrightTitle'>
                                                                            영양성분표 / {bwaffle.title}
                                                                        </h2>
                                                                    </div>
                                                                    <div className='tableCover'>
                                                                        <table>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        1회제공량<br />
                                                                                        (g/ml)
                                                                                    </th>
                                                                                    <th>
                                                                                        열량<br />
                                                                                        (kcal)
                                                                                    </th>
                                                                                    <th>
                                                                                        당류<br />
                                                                                        (g)
                                                                                    </th>
                                                                                    <th>
                                                                                        단백질<br />
                                                                                        (g)
                                                                                    </th>
                                                                                    <th>
                                                                                        포화지방<br />
                                                                                        (g/ml)
                                                                                    </th>
                                                                                    <th>
                                                                                        나트륨<br />
                                                                                        (mg)
                                                                                    </th>
                                                                                    <th>
                                                                                        탄수화물<br />
                                                                                        (g)
                                                                                    </th>
                                                                                    <th>
                                                                                        카페인<br />
                                                                                        (mg)
                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        g
                                                                                    </td>
                                                                                    <td>
                                                                                        kcal
                                                                                    </td>
                                                                                    <td>
                                                                                        g
                                                                                    </td>
                                                                                    <td>
                                                                                        g
                                                                                    </td>
                                                                                    <td>
                                                                                        g
                                                                                    </td>
                                                                                    <td>
                                                                                        mg
                                                                                    </td>
                                                                                    <td>
                                                                                        g
                                                                                    </td>
                                                                                    <td>
                                                                                        mg
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div className='mrightList'>
                                                                    <div>
                                                                        <h2 className='mrightTitle'>
                                                                            알레르기 유발 성분
                                                                        </h2>
                                                                    </div>
                                                                    <p className='mrdesc'>
                                                                        {bwaffle.desc2}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>
                            </div>
                            {visibleItems < basicWaffleList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                
                case 'nutella' :
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {nutellaWaffleList.slice(0 , visibleItems).map((bwaffle,index) => (
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
                            {visibleItems < nutellaWaffleList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                case 'special' :
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {specialWaffleList.slice(0 , visibleItems).map((bwaffle,index) => (
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
                            {visibleItems < specialWaffleList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                case 'gelato' :
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {gelatoWaffleList.slice(0 , visibleItems).map((bwaffle,index) => (
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
                            {visibleItems < gelatoWaffleList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                default:
                    return(
                        <></>
                    )
            }
        }

        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ와플 끝

        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ음료

        // 신메뉴 베스트 탭 스위치문 usestate
        const [dnbmenu , setDnbMneu] = useState('newDrink');

        const handleDnbmenu = (DnbmenuTab) => {
            setDnbMneu(DnbmenuTab)
        }

        // 신메뉴 베스트 탭 스위치문
        const renderDnbmenu = () => {
            switch(dnbmenu) {
                case 'newDrink' : 
                    return(
                        <>
                            {newDrink()}
                        </>
                    )
                case 'bestDrink' : 
                    return(
                        <>
                            {bestDrink()}
                        </>
                    )
                default :
                    return(
                        <></>
                    )
            }
        }

        // 신메뉴 음료 리스트
        const newDrinkList = [
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/drink/newDrink/img1.png',
                alt : '자두에이드',
                title : '자두에이드',
                desc : 'Plum Ade',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/drink/newDrink/img2.png',
                alt : '복숭아주스',
                title : '복숭아주스',
                desc : 'Peach Juice',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/drink/newDrink/img3.png',
                alt : '애플시나몬 티(HOT/ICE)',
                title : '애플시나몬 티(HOT/ICE)',
                desc : 'Apple Cinnamon Tea',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/drink/newDrink/img4.png',
                alt : '애플시나몬 요거치노',
                title : '애플시나몬 요거치노',
                desc : 'Apple Cinnamon Yogurt Smoothie',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/drink/newDrink/img5.png',
                alt : '애플시나몬 티에이드',
                title : '애플시나몬 티에이드',
                desc : 'Apple Cinnamon Tea Ade',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/drink/newDrink/img6.png',
                alt : '와숫가루 라떼',
                title : '와숫가루 라떼',
                desc : 'WU MISUGARU',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/drink/newDrink/img7.png',
                alt : '디카페인 프라페',
                title : '디카페인 프라페',
                desc : 'DECAF FRAPPE',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/drink/newDrink/img8.png',
                alt : '나 진짜 수박',
                title : '나 진짜 수박',
                desc : 'I AM REAL WATERMELON',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/drink/newDrink/img9.png',
                alt : '빨간사과유자차(HOT/ICE)',
                title : '빨간사과유자차(HOT/ICE)',
                desc : 'Red Apple Citron Tea',
            },
        ]

        // 신메뉴 음료 슬릭
        function newDrink() {
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
                        {newDrinkList.map((drink, index) => (
                            <div className="newMenu" key={index}>
                                <div className="newIcon">
                                    <img src={process.env.PUBLIC_URL + drink.icon} alt={drink.iconalt} />
                                </div>
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + drink.img} alt={drink.alt} />
                                </div>
                                <h2 className="title">{drink.title}</h2>
                                <p className="desc">{drink.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        // 베스트 음료 리스트
        const bestDrinkList = [
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/drink/bestDrink/img1.png',
                alt : '복숭아아이스티',
                title : '복숭아아이스티',
                desc : 'Peach Iced Tea',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/drink/bestDrink/img2.png',
                alt : '디카페인 콜드브루 (HOT/ ICE)',
                title : '디카페인 콜드브루 (HOT/ ICE)',
                desc : 'Decafe Coldbrew',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/drink/bestDrink/img3.png',
                alt : '카페라떼(HOT/ ICE)',
                title : '카페라떼(HOT/ ICE)',
                desc : 'Cafe Latte',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/drink/bestDrink/img4.png',
                alt : '아메리카노 (HOT/ ICE)',
                title : '아메리카노 (HOT/ ICE)',
                desc : 'Americano',
            },
        ]

        // 베스트 음료 슬릭
        function bestDrink() {
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
                        {bestDrinkList.map((drink, index) => (
                            <div className="newMenu bestMenu" key={index}>
                                <div className="newIcon">
                                    <img src={process.env.PUBLIC_URL + drink.icon} alt={drink.iconalt} />
                                </div>
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + drink.img} alt={drink.alt} />
                                </div>
                                <h2 className="title">{drink.title}</h2>
                                <p className="desc">{drink.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        // 와플 음료 젤라또 스쿨푸드 탭에서 음료탭
        const [drinkTab , setDrinkTab] = useState('coffee');

        const handleDrinkTab = (dtab) => {
            setDrinkTab(dtab);
        }

        // 와플 메인 탭 스위치문
        const renderContentTab2 = () => {

            switch (drinkTab) {
                case 'coffee':
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {coffeeList.slice(0 , visibleItems).map((coffee,index) => (
                                        <div className='content2Listone' key={index}>
                                            <div className='cloImg'>
                                                <img src={process.env.PUBLIC_URL + coffee.img} alt={coffee.alt} />
                                            </div>
                                            <div className='cloDesc'>
                                                <h2>{coffee.title}</h2>
                                                <p>{coffee.sub}</p>
                                            </div>
                                            <div className='moreIcon'>
                                                <img src={process.env.PUBLIC_URL + coffee.moreimg} alt={coffee.morealt} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {visibleItems < coffeeList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                
                case 'noncoffee' :
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {noncoffeeList.slice(0 , visibleItems).map((noncoffee,index) => (
                                        <div className='content2Listone' key={index}>
                                            <div className='cloImg'>
                                                <img src={process.env.PUBLIC_URL + noncoffee.img} alt={noncoffee.alt} />
                                            </div>
                                            <div className='cloDesc'>
                                                <h2>{noncoffee.title}</h2>
                                                <p>{noncoffee.sub}</p>
                                            </div>
                                            <div className='moreIcon'>
                                                <img src={process.env.PUBLIC_URL + noncoffee.moreimg} alt={noncoffee.morealt} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {visibleItems < noncoffeeList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                case 'smoody' :
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {smoodyList.slice(0 , visibleItems).map((smoody,index) => (
                                        <div className='content2Listone' key={index}>
                                            <div className='cloImg'>
                                                <img src={process.env.PUBLIC_URL + smoody.img} alt={smoody.alt} />
                                            </div>
                                            <div className='cloDesc'>
                                                <h2>{smoody.title}</h2>
                                                <p>{smoody.sub}</p>
                                            </div>
                                            <div className='moreIcon'>
                                                <img src={process.env.PUBLIC_URL + smoody.moreimg} alt={smoody.morealt} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {visibleItems < smoodyList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                case 'tea' :
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {teaList.slice(0 , visibleItems).map((tea,index) => (
                                        <div className='content2Listone' key={index}>
                                            <div className='cloImg'>
                                                <img src={process.env.PUBLIC_URL + tea.img} alt={tea.alt} />
                                            </div>
                                            <div className='cloDesc'>
                                                <h2>{tea.title}</h2>
                                                <p>{tea.sub}</p>
                                            </div>
                                            <div className='moreIcon'>
                                                <img src={process.env.PUBLIC_URL + tea.moreimg} alt={tea.morealt} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {visibleItems < teaList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                default:
                    return(
                        <></>
                    )
            }
        }

        // 커피 리스트
        const coffeeList = [
            {
                img : '/img/menu/drink/coffeeList/img1.png',
                alt : '코코넛 연유라떼(HOT/ICE)',
                title : '코코넛 연유라떼(HOT/ICE)',
                sub : 'Coconut Condensed Milk Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/coffeeList/img2.png',
                alt : '하얀 연유라떼(HOT/ICE)',
                title : '하얀 연유라떼(HOT/ICE)',
                sub : 'White Condensed Milk Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/coffeeList/img3.png',
                alt : '디카페인 콜드브루 라떼 (HOT/ ICE)',
                title : '디카페인 콜드브루 라떼 (HOT/ ICE)',
                sub : 'Decafe Coldbrew Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/coffeeList/img4.png',
                alt : '디카페인 콜드브루 (HOT/ ICE)',
                title : '디카페인 콜드브루 (HOT/ ICE)',
                sub : 'Decafe Coldbrew',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/coffeeList/img5.png',
                alt : '카페모카 (HOT / ICE)',
                title : '카페모카 (HOT / ICE)',
                sub : 'Cafe Mocha',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/coffeeList/img6.png',
                alt : '카라멜라떼(HOT/ ICE)',
                title : '카라멜라떼(HOT/ ICE)',
                sub : 'Caramel Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/coffeeList/img7.png',
                alt : '바닐라라떼(HOT/ ICE)',
                title : '바닐라라떼(HOT/ ICE)',
                sub : 'Vanilla Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/coffeeList/img8.png',
                alt : '카페라떼(HOT/ ICE)',
                title : '카페라떼(HOT/ ICE)',
                sub : 'Cafe Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/coffeeList/img9.png',
                alt : '아메리카노 (HOT/ ICE)',
                title : '아메리카노 (HOT/ ICE)',
                sub : 'Americano',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]

        // 논커피 리스트
        const noncoffeeList = [
            {
                img : '/img/menu/drink/noncoffeeList/img1.png',
                alt : '와숫가루 라떼',
                title : '와숫가루 라떼',
                sub : 'WU MISUGARU',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/noncoffeeList/img2.png',
                alt : '디카페인 프라페',
                title : '디카페인 프라페',
                sub : 'DECAF FRAPPE',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/noncoffeeList/img3.png',
                alt : '나 진짜 수박',
                title : '나 진짜 수박',
                sub : 'I AM REAL WATERMELON',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/noncoffeeList/img4.png',
                alt : '딸기라떼',
                title : '딸기라떼',
                sub : 'Strawberry Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/noncoffeeList/img5.png',
                alt : '리얼초코라떼 (HOT/ ICE)',
                title : '리얼초코라떼 (HOT/ ICE)',
                sub : 'Real Chocolate Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/noncoffeeList/img6.png',
                alt : '로얄밀크티라떼 (HOT /ICE)',
                title : '로얄밀크티라떼 (HOT /ICE)',
                sub : 'Royal Milk Tea Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/noncoffeeList/img7.png',
                alt : '그린티라떼(HOT/ ICE)',
                title : '그린티라떼(HOT/ ICE)',
                sub : 'Green Tea Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/noncoffeeList/img8.png',
                alt : '고구마라떼 (HOT/ ICE)',
                title : '고구마라떼 (HOT/ ICE)',
                sub : 'Sweet Potato Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/noncoffeeList/img9.png',
                alt : '누텔라에 빠진 마시멜로 초코라떼',
                title : '누텔라에 빠진 마시멜로 초코라떼',
                sub : 'Nutella Marshmallow Chocolate Latte',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/noncoffeeList/img10.png',
                alt : ' 베이비치노',
                title : ' 베이비치노',
                sub : 'Baby Ccino',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]

        // 스무디/쉐이크 리스트
        const smoodyList = [
            {
                img : '/img/menu/drink/smoodyList/img1.png',
                alt : '애플시나몬 요거치노',
                title : '애플시나몬 요거치노',
                sub : 'Apple Cinnamon Yogurt Smoothie',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img2.png',
                alt : '누텔라에 빠진 마시멜로 프라페',
                title : '누텔라에 빠진 마시멜로 프라페',
                sub : 'Nutella Marshmallow Frappe',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img3.png',
                alt : '딸기딸기쉐이크',
                title : '딸기딸기쉐이크',
                sub : 'Strawberry Shake',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img4.png',
                alt : '초코초코쉐이크',
                title : '초코초코쉐이크',
                sub : 'Chocolate Shake',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img5.png',
                alt : '밀크밀크쉐이크',
                title : '밀크밀크쉐이크',
                sub : 'Milk Shake',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img6.png',
                alt : '팥빙수스무디',
                title : '팥빙수스무디',
                sub : 'Patbingsu Smoothie',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img7.png',
                alt : '복숭아자두스무디',
                title : '복숭아자두스무디',
                sub : 'Peach Plum Smoothie',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img8.png',
                alt : '딸기자두스무디',
                title : '딸기자두스무디',
                sub : 'Strawberry Plum Smoothie',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img9.png',
                alt : '초코코코프라페',
                title : '초코코코프라페',
                sub : 'Chocolate Frappe',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img10.png',
                alt : '블루베리요거치노',
                title : '블루베리요거치노',
                sub : 'Blueberry Yogurt Smoothie',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img11.png',
                alt : '복숭아요거치노',
                title : '복숭아요거치노',
                sub : 'Peach Yogurt Smoothie',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img12.png',
                alt : '망고요거치노',
                title : '망고요거치노',
                sub : 'Mango Yogurt Smoothie',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img13.png',
                alt : '딸기요거치노',
                title : '딸기요거치노',
                sub : 'Strawberry Yogurt Smoothie',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/smoodyList/img14.png',
                alt : '플레인요거치노',
                title : '플레인요거치노',
                sub : 'Plain Yogurt Smoothie',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            
        ]

        // 티/에이드 리스트
        const teaList = [
            {
                img : '/img/menu/drink/teaList/img1.png',
                alt : '자두에이드',
                title : '자두에이드',
                sub : 'Plum Ade',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img2.png',
                alt : '복숭아주스',
                title : '복숭아주스',
                sub : 'Peach Juice',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img3.png',
                alt : '애플시나몬 티(HOT/ICE)',
                title : '애플시나몬 티(HOT/ICE)',
                sub : 'Apple Cinnamon Tea',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img4.png',
                alt : '애플시나몬 티에이드',
                title : '애플시나몬 티에이드',
                sub : 'Apple Cinnamon Tea Ade',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img5.png',
                alt : '빨간사과유자차(HOT/ICE)',
                title : '빨간사과유자차(HOT/ICE)',
                sub : 'Red Apple Citron Tea',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img6.png',
                alt : '딸기에이드',
                title : '딸기에이드',
                sub : 'Strawberry Ade',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img7.png',
                alt : '캐모마일 (HOT/ ICE)',
                title : '캐모마일 (HOT/ ICE)',
                sub : 'Chamomile Tea',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img8.png',
                alt : '페퍼민트(HOT/ ICE)',
                title : '페퍼민트(HOT/ ICE)',
                sub : 'Peppermint Tea',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img9.png',
                alt : '자몽차 (HOT/ ICE)',
                title : '자몽차 (HOT/ ICE)',
                sub : 'Grapefruit Tea',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img10.png',
                alt : '유자차 (HOT/ ICE)',
                title : '유자차 (HOT/ ICE)',
                sub : 'Citron Tea',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img11.png',
                alt : '얼그레이 (HOT/ ICE)',
                title : '얼그레이 (HOT/ ICE)',
                sub : 'Earl Grey Tea',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img12.png',
                alt : '복숭아에이드',
                title : '복숭아에이드',
                sub : 'Peach Ade',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img13.png',
                alt : '아쿠아레몬에이드',
                title : '아쿠아레몬에이드',
                sub : 'Aqua Lemon Ade',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img14.png',
                alt : '자몽에이드',
                title : '자몽에이드',
                sub : 'Grapefruit Ade',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img15.png',
                alt : '청포도에이드',
                title : '청포도에이드',
                sub : 'Green Grape Ade',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img16.png',
                alt : '자두주스',
                title : '자두주스',
                sub : 'Plum Juice',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img17.png',
                alt : '복숭아아이스티',
                title : '복숭아아이스티',
                sub : 'Peach Iced Tea',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/drink/teaList/img18.png',
                alt : '체리톡톡',
                title : '체리톡톡',
                sub : 'Cherry Tok-Tok',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]
        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ음료 끝

        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ젤라또

        // 신메뉴 베스트 탭 스위치문 usestate
        const [gnbmenu , setGnbMneu] = useState('newGelato');

        const handleGnbmenu = (GnbmenuTab) => {
            setGnbMneu(GnbmenuTab)
        }

        // 신메뉴 베스트 탭 스위치문
        const renderGnbmenu = () => {
            switch(gnbmenu) {
                case 'newGelato' : 
                    return(
                        <>
                            {newGelato()}
                        </>
                    )
                case 'bestGelato' : 
                    return(
                        <>
                            {bestGelato()}
                        </>
                    )
                default :
                    return(
                        <></>
                    )
            }
        }

        // 신메뉴 젤라또 리스트
        const newGelatoList = [
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/gelato/newGelato/img1.png',
                alt : '솜사탕 젤라또 컵',
                title : '솜사탕 젤라또 컵',
                desc : 'COTTON CANDY GELATO',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/gelato/newGelato/img2.png',
                alt : '크런치딸기잼젤라또컵',
                title : '크런치딸기잼젤라또컵',
                desc : 'Crunch Strawberry Jam Gelato cup',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/gelato/newGelato/img3.png',
                alt : '팥젤라또컵',
                title : '팥젤라또컵',
                desc : 'Red Beans Gelato cup',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/gelato/newGelato/img4.png',
                alt : '오레오젤라또컵',
                title : '오레오젤라또컵',
                desc : 'Oreo Gelato cup',
            },
        ]

        // 신메뉴 젤라또 슬릭
        function newGelato() {
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
                        {newGelatoList.map((gelato, index) => (
                            <div className="newMenu" key={index}>
                                <div className="newIcon">
                                    <img src={process.env.PUBLIC_URL + gelato.icon} alt={gelato.iconalt} />
                                </div>
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + gelato.img} alt={gelato.alt} />
                                </div>
                                <h2 className="title">{gelato.title}</h2>
                                <p className="desc">{gelato.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        // 베스트 젤라또 리스트
        const bestGelatoList = [
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/gelato/bestGelato/img1.png',
                alt : '애플 시나몬 젤라또 컵',
                title : '애플 시나몬 젤라또 컵',
                desc : 'APPLE CINNAMON GELATO',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/gelato/bestGelato/img2.png',
                alt : '딸기젤라또컵',
                title : '딸기젤라또컵',
                desc : 'Strawberry Gelato cup',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/gelato/bestGelato/img3.png',
                alt : '블루베리젤라또컵',
                title : '블루베리젤라또컵',
                desc : 'Blueberry Gelato cup',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/gelato/bestGelato/img4.png',
                alt : '오레오젤라또컵',
                title : '오레오젤라또컵',
                desc : 'Oreo Gelato cup',
            },
        ]

        // 베스트 젤라또 슬릭
        function bestGelato() {
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
                        {bestGelatoList.map((gelato, index) => (
                            <div className="newMenu bestMenu" key={index}>
                                <div className="newIcon">
                                    <img src={process.env.PUBLIC_URL + gelato.icon} alt={gelato.iconalt} />
                                </div>
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + gelato.img} alt={gelato.alt} />
                                </div>
                                <h2 className="title">{gelato.title}</h2>
                                <p className="desc">{gelato.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }


        // 와플 음료 젤라또 스쿨푸드 탭에서 젤라또탭
        const [gelatoTab , setGelatoTab] = useState('gbasic');

        const handleGelatoTab = (gtab) => {
            setGelatoTab(gtab);
        }

        // 젤라또 메인 탭 스위치문
        const renderContentTab3 = () => {

            switch (gelatoTab) {
                case 'gbasic':
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {basicList.slice(0 , visibleItems).map((basic,index) => (
                                        <div className='content2Listone' key={index}>
                                            <div className='cloImg'>
                                                <img src={process.env.PUBLIC_URL + basic.img} alt={basic.alt} />
                                            </div>
                                            <div className='cloDesc'>
                                                <h2>{basic.title}</h2>
                                                <p>{basic.sub}</p>
                                            </div>
                                            <div className='moreIcon'>
                                                <img src={process.env.PUBLIC_URL + basic.moreimg} alt={basic.morealt} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {visibleItems < basicList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                
                case 'gtopping' :
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {toppingList.slice(0 , visibleItems).map((topping,index) => (
                                        <div className='content2Listone' key={index}>
                                            <div className='cloImg'>
                                                <img src={process.env.PUBLIC_URL + topping.img} alt={topping.alt} />
                                            </div>
                                            <div className='cloDesc'>
                                                <h2>{topping.title}</h2>
                                                <p>{topping.sub}</p>
                                            </div>
                                            <div className='moreIcon'>
                                                <img src={process.env.PUBLIC_URL + topping.moreimg} alt={topping.morealt} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {visibleItems < toppingList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                default:
                    return(
                        <></>
                    )
            }
        }

        // 베이직 리스트
        const basicList = [
            {
                img : '/img/menu/gelato/basicGelato/img1.png',
                alt : '바나나우유젤라또컵',
                title : '바나나우유젤라또컵',
                sub : 'Banana Milk Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/basicGelato/img2.png',
                alt : '망고젤라또컵',
                title : '망고젤라또컵',
                sub : 'Mango Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/basicGelato/img3.png',
                alt : '녹차젤라또컵',
                title : '녹차젤라또컵',
                sub : 'Green Tea Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/basicGelato/img4.png',
                alt : '블루베리요거트젤라또컵',
                title : '블루베리요거트젤라또컵',
                sub : 'Blueberry Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/basicGelato/img5.png',
                alt : '플레인요거트젤라또컵',
                title : '플레인요거트젤라또컵',
                sub : 'Plain Yogurt Gelato Cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/basicGelato/img6.png',
                alt : '크림치즈젤라또컵',
                title : '크림치즈젤라또컵',
                sub : 'Cream Cheese Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/basicGelato/img7.png',
                alt : '딸기젤라또컵',
                title : '딸기젤라또컵',
                sub : 'Strawberry Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/basicGelato/img8.png',
                alt : '초코바닐라젤라또컵',
                title : '초코바닐라젤라또컵',
                sub : 'Chocolate Vanilla Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/basicGelato/img9.png',
                alt : '초코젤라또컵',
                title : '초코젤라또컵',
                sub : 'Chocolate Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/basicGelato/img10.png',
                alt : '바닐라젤라또컵',
                title : '바닐라젤라또컵',
                sub : 'Vanilla Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]

        // 토핑 리스트
        const toppingList = [
            {
                img : '/img/menu/gelato/toppingGelato/img1.png',
                alt : '솜사탕 젤라또 컵',
                title : '솜사탕 젤라또 컵',
                sub : 'COTTON CANDY GELATO',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/toppingGelato/img2.png',
                alt : '애플 시나몬 젤라또 컵',
                title : '애플 시나몬 젤라또 컵',
                sub : 'APPLE CINNAMON GELATO',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/toppingGelato/img3.png',
                alt : '크런치딸기잼젤라또컵',
                title : '크런치딸기잼젤라또컵',
                sub : 'Crunch Strawberry Jam Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/toppingGelato/img4.png',
                alt : '치즈케이크젤라또컵',
                title : '치즈케이크젤라또컵',
                sub : 'Cheese Cake Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/toppingGelato/img5.png',
                alt : '베리베리젤라또컵',
                title : '베리베리젤라또컵',
                sub : 'Berryberry Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/toppingGelato/img6.png',
                alt : '딸기젤라또컵',
                title : '딸기젤라또컵',
                sub : 'Strawberry Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/toppingGelato/img7.png',
                alt : '블루베리젤라또컵',
                title : '블루베리젤라또컵',
                sub : 'Blueberry Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/toppingGelato/img8.png',
                alt : '팥젤라또컵',
                title : '팥젤라또컵',
                sub : 'Red Beans Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
            {
                img : '/img/menu/gelato/toppingGelato/img9.png',
                alt : '오레오젤라또컵',
                title : '오레오젤라또컵',
                sub : 'Oreo Gelato cup',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]
        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ젤라또 끝

        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ스쿨푸드

        // 와플 음료 젤라또 스쿨푸드 탭에서 스쿨푸드탭
        const [sfoodTab , setSfoodTab] = useState('haksick');

        const handleSfoodTab = (stab) => {
            setSfoodTab(stab);
        }

        // 신메뉴 베스트 탭 스위치문 usestate
        const [snbmenu , setSnbMneu] = useState('newSfood');

        const handleSnbmenu = (SnbmenuTab) => {
            setSnbMneu(SnbmenuTab)
        }

        // 신메뉴 베스트 탭 스위치문
        const renderSnbmenu = () => {
            switch(snbmenu) {
                case 'newSfood' : 
                    return(
                        <>
                            {newSfood()}
                        </>
                    )
                case 'bestSfood' : 
                    return(
                        <>
                            {bestSfood()}
                        </>
                    )
                default :
                    return(
                        <></>
                    )
            }
        }

        // 신메뉴 스쿨푸드 리스트
        const newSfoodList = [
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/sfood/img1.png',
                alt : '에그버터K-와플',
                title : '에그버터K-와플',
                desc : 'Egg Butter K-Waffle',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/sfood/img2.png',
                alt : ' 떡꼬치와플',
                title : ' 떡꼬치와플',
                desc : 'Teok-kkochi Waffle',
            },
            {
                icon : '/img/menu/waffle/newWaffle/newicon.png',
                iconalt : 'newimage',
                img : '/img/menu/sfood/img2.png',
                alt : ' 떡꼬치와플',
                title : ' 떡꼬치와플',
                desc : 'Teok-kkochi Waffle',
            },
        ]

        // 신메뉴 스쿨푸드 슬릭
        function newSfood() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3
            };
            return (
                <div className="slider-container newWaffleContainer sfoodContainer">
                    <Slider {...settings}>
                        {newSfoodList.map((sfood, index) => (
                            <div className="newMenu" key={index}>
                                <div className="newIcon">
                                    <img src={process.env.PUBLIC_URL + sfood.icon} alt={sfood.iconalt} />
                                </div>
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + sfood.img} alt={sfood.alt} />
                                </div>
                                <h2 className="title">{sfood.title}</h2>
                                <p className="desc">{sfood.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        // 베스트 스쿨푸드 리스트
        const bestSfoodList = [
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/sfood/img1.png',
                alt : '에그버터K-와플',
                title : '에그버터K-와플',
                desc : 'Egg Butter K-Waffle',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/sfood/img2.png',
                alt : ' 떡꼬치와플',
                title : ' 떡꼬치와플',
                desc : 'Teok-kkochi Waffle',
            },
            {
                icon : '/img/menu/waffle/bestWaffle/besticon.png',
                iconalt : 'bestimage',
                img : '/img/menu/sfood/img2.png',
                alt : ' 떡꼬치와플',
                title : ' 떡꼬치와플',
                desc : 'Teok-kkochi Waffle',
            },
        ]

        // 베스트 스쿨푸드 슬릭
        function bestSfood() {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3
            };
            return (
                <div className="slider-container newWaffleContainer sfoodContainer">
                    <Slider {...settings}>
                        {bestSfoodList.map((sfood, index) => (
                            <div className="newMenu bestMenu" key={index}>
                                <div className="newIcon">
                                    <img src={process.env.PUBLIC_URL + sfood.icon} alt={sfood.iconalt} />
                                </div>
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + sfood.img} alt={sfood.alt} />
                                </div>
                                <h2 className="title">{sfood.title}</h2>
                                <p className="desc">{sfood.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        // 스쿨푸드 메인 탭 스위치문
        const renderContentTab4 = () => {

            switch (sfoodTab) {
                case 'haksick':
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {haksickList.slice(0 , visibleItems).map((haksick,index) => (
                                        <div className='content2Listone' key={index}>
                                            <div className='cloImg'>
                                                <img src={process.env.PUBLIC_URL + haksick.img} alt={haksick.alt} />
                                            </div>
                                            <div className='cloDesc'>
                                                <h2>{haksick.title}</h2>
                                                <p>{haksick.sub}</p>
                                            </div>
                                            <div className='moreIcon'>
                                                <img src={process.env.PUBLIC_URL + haksick.moreimg} alt={haksick.morealt} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {visibleItems < haksickList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                
                case 'gansick' :
                    return(
                        <>
                            <div className='content2List'>
                                <div className='content2ListCover'>
                                    {gansickList.slice(0 , visibleItems).map((gansick,index) => (
                                        <div className='content2Listone' key={index}>
                                            <div className='cloImg'>
                                                <img src={process.env.PUBLIC_URL + gansick.img} alt={gansick.alt} />
                                            </div>
                                            <div className='cloDesc'>
                                                <h2>{gansick.title}</h2>
                                                <p>{gansick.sub}</p>
                                            </div>
                                            <div className='moreIcon'>
                                                <img src={process.env.PUBLIC_URL + gansick.moreimg} alt={gansick.morealt} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {visibleItems < gansickList.length && (
                                <div className='content2ListBtn'>
                                    <button onClick={handleLoadMore}>더보기</button>
                                </div>
                            )}
                        </>
                    )
                default:
                    return(
                        <></>
                    )
            }
        }

        // 학식 리스트
        const haksickList = [
            {
                img : '/img/menu/sfood/img2.png',
                alt : '떡꼬치와플',
                title : '떡꼬치와플',
                sub : 'Teok-kkochi Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]

        // 간식 리스트
        const gansickList = [
            {
                img : '/img/menu/sfood/img1.png',
                alt : '에그버터K-와플',
                title : '에그버터K-와플',
                sub : 'Egg Butter K-Waffle',
                moreimg : '/img/menu/waffle/waffleList/moreicon.png',
                morealt : '더보기 이미지',
            },
        ]

        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ스쿨푸드 끝

        // 와플,음료,젤라또,스쿨푸드 메인 탭 스위치문
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
                                    <p className={waffleTab === 'basic' ? 'waffleTabOn' : ''} onClick={()=>{handleWaffleTab('basic')}}>
                                        베이직 와플
                                    </p>
                                </li>
                                <li>
                                    <p className={waffleTab === 'nutella' ? 'waffleTabOn' : ''} onClick={()=>{handleWaffleTab('nutella')}}>
                                        누텔라 와플
                                    </p>
                                </li>
                                <li>
                                    <p className={waffleTab === 'special' ? 'waffleTabOn' : ''} onClick={()=>{handleWaffleTab('special')}}>
                                        과일/스페셜 와플
                                    </p>
                                </li>
                                <li>
                                    <p className={waffleTab === 'gelato' ? 'waffleTabOn' : ''} onClick={()=>{handleWaffleTab('gelato')}}>
                                        젤라또 와플
                                    </p>
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
                            {renderContentTab()}
                        </div>
                    )
                case 'drink' :
                    return(
                        <div className='content2'>
                            <ul className='content2Tab'>
                                <li>
                                    <p className={drinkTab === 'coffee' ? 'waffleTabOn' : ''} onClick={()=>{handleDrinkTab('coffee')}}>
                                        커피
                                    </p>
                                </li>
                                <li>
                                    <p className={drinkTab === 'noncoffee' ? 'waffleTabOn' : ''} onClick={()=>{handleDrinkTab('noncoffee')}}>
                                        논커피
                                    </p>
                                </li>
                                <li>
                                    <p className={drinkTab === 'smoody' ? 'waffleTabOn' : ''} onClick={()=>{handleDrinkTab('smoody')}}>
                                        스무디/쉐이크
                                    </p>
                                </li>
                                <li>
                                    <p className={drinkTab === 'tea' ? 'waffleTabOn' : ''} onClick={()=>{handleDrinkTab('tea')}}>
                                        티/에이드
                                    </p>
                                </li>
                            </ul>
                            <div className='content2Slide'>
                                <div className='content2SlideCover'>
                                    <div className='c2SlideArea'>
                                        <div className='left'>
                                            <ul className={dnbmenu === 'newDrink' ? 'tabList bgCh' : 'tabList'}>
                                                <li>
                                                    <p className={dnbmenu === 'newDrink' ? 'tabOn' : ''} onClick={ () => {handleDnbmenu('newDrink')}}>
                                                        신메뉴
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className={dnbmenu === 'bestDrink' ? 'tabOn2' : ''} onClick={ () => {handleDnbmenu('bestDrink')}}>
                                                        베스트
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='right'>
                                            {renderDnbmenu()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {renderContentTab2()}
                        </div>
                    )
                case 'gelato' :
                    return(
                        <div className='content2'>
                            <ul className='content2Tab'>
                                <li>
                                    <p className={gelatoTab === 'gbasic' ? 'waffleTabOn' : ''} onClick={()=>{handleGelatoTab('gbasic')}}>
                                        베이직 젤라또컵
                                    </p>
                                </li>
                                <li>
                                    <p className={gelatoTab === 'gtopping' ? 'waffleTabOn' : ''} onClick={()=>{handleGelatoTab('gtopping')}}>
                                        토핑 젤라또컵
                                    </p>
                                </li>
                            </ul>
                            <div className='content2Slide'>
                                <div className='content2SlideCover'>
                                    <div className='c2SlideArea'>
                                        <div className='left'>
                                            <ul className={gnbmenu === 'newGelato' ? 'tabList bgCh' : 'tabList'}>
                                                <li>
                                                    <p className={gnbmenu === 'newGelato' ? 'tabOn' : ''} onClick={ () => {handleGnbmenu('newGelato')}}>
                                                        신메뉴
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className={gnbmenu === 'bestGelato' ? 'tabOn2' : ''} onClick={ () => {handleGnbmenu('bestGelato')}}>
                                                        베스트
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='right'>
                                            {renderGnbmenu()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {renderContentTab3()}
                        </div>
                    )
                case 'sfood' :
                    return(
                        <div className='content2'>
                            <ul className='content2Tab'>
                                <li>
                                    <p className={sfoodTab === 'haksick' ? 'waffleTabOn' : ''} onClick={()=>{handleSfoodTab('haksick')}}>
                                        학식
                                    </p>
                                </li>
                                <li>
                                    <p className={sfoodTab === 'gansick' ? 'waffleTabOn' : ''} onClick={()=>{handleSfoodTab('gansick')}}>
                                        간식
                                    </p>
                                </li>
                            </ul>
                            <div className='content2Slide'>
                                <div className='content2SlideCover'>
                                    <div className='c2SlideArea'>
                                        <div className='left'>
                                            <ul className={snbmenu === 'newSfood' ? 'tabList bgCh' : 'tabList'}>
                                                <li>
                                                    <p className={snbmenu === 'newSfood' ? 'tabOn' : ''} onClick={ () => {handleSnbmenu('newSfood')}}>
                                                        신메뉴
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className={snbmenu === 'bestSfood' ? 'tabOn2' : ''} onClick={ () => {handleSnbmenu('bestSfood')}}>
                                                        베스트
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='right'>
                                            {renderSnbmenu()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {renderContentTab4()}
                        </div>
                    )
                default:
                    return(
                        <></>
                    )
            }
        }

        // 메인 이미지와 탭을 클릭시 바뀌게 하는 것
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