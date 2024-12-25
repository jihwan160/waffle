import React from 'react'
import styled from 'styled-components'

const FooterArea = styled.div`
    width: 100%;

    & .footerMain {
        width: 100%;
        background: #2a56b6;
        padding: 30px 0;

        & .footerCover {
            max-width: 1310px;
            width: 100%;
            margin: 0 auto;
            padding: 0 15px;

            & .f_logo {
                background-image: url('./../../img/footer/f_logo.svg');
                background-repeat: no-repeat;
                background-position: center;
                width: 100%;
                height: 42px;
                display: block;
                
            }

            & .f_link {
                display: flex;
                color: #fff;
                font-size: 16px;
                font-weight: 600;
                align-items: center;
                justify-content: center;
                padding: 20px 0;
                & li {
                    margin: 0 20px;
                    cursor: pointer;
                }
            }

            & .f_info {
                max-width: 640px;
                width: 100%;
                margin: 0 auto;

                & .f_info_item {
                    display: flex;
                    justify-content: center;
                    & span {
                        font-size: 13px;
                        color: #fff;
                        padding: 0 10px;
                        margin: 3px 0;
                        display: block;
                        position: relative;
                        &:first-child::after {
                            content: '';
                            display: block;
                            width: 1px;
                            height: 10px;
                            background: #fff;
                            position: absolute;
                            right: 0;
                            top: 4px;
                        }
                    }
                    & .yesafter::after {
                        content: '';
                        display: block;
                        width: 1px;
                        height: 10px;
                        background: #fff;
                        position: absolute;
                        right: 0;
                        top: 4px;
                    }
                }
            }
        }
    }

    & .copyRight {
        background: #05205c;
        padding: 20px 15px;
        text-align: center;
        & p {
            font-size: 14px;
            color: #fff;
            & span {    
                font-weight: 600;
            }
        }
    }
`;

const Footer = () => {
    return (
        <FooterArea>
            <div className='footerMain'>
                <div className='footerCover'>
                    <div className='f_logo'></div>
                    <ul className='f_link'>
                        <li>브랜드</li>
                        <li>창업안내</li>
                        <li>와플대학 소식</li>
                        <li>고객의 소리</li>
                        <li>개인정보처리방침</li>
                    </ul>
                    <div className='f_info'>
                        <div className='f_info_item'> 
                            <span>대표이사 : 손정희</span>
                            <span>사업자등록번호 : 191-88-02243</span>
                        </div>
                        <div className='f_info_item'> 
                            <span>주소 : 서울특별시 용산구 한강대로 325(갈월동)</span>
                            <span>Office Hour : 평일 09:00 ~ 18:00 (점심시간 11:30 – 13:00 )</span>
                        </div>
                        <div className='f_info_item'> 
                            <span>E-mail : waffleuniv.marketing@gmail.com</span>
                            <span className='yesafter'>Tel : 1588-1706</span>
                            <span>Fax : 070-4170-4105</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='copyRight'>
                <p>
                    Copyright 2023. <span>waffleuniv.</span> All rights reserved.
                </p>
            </div>
        </FooterArea>
    )
}

export default Footer