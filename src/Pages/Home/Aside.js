import React from 'react'
import styled from 'styled-components'


const RightArea = styled.div`


    & .asideCover {
        position: fixed;
        right: 50px;
        bottom: 90px;
        z-index: 9;
        & .asideList {
            margin-bottom: 12px;
            width: 96px;
            height: 96px;
            background: #4d7adb;
            border-radius: 50%;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            & h2 {
                font-size: 16px;
                font-weight: 600;
            }

            & p {
                font-size: 18px;
                margin-top: 6px;
                font-weight: 700;
            }

            & .fz16 {
                font-size: 16px;
            }
            
            & .imgCover {

                & img {
                    width: 100%;

                }
            }
            
        }
    }
`;

const BottomArea = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;
    & .BottomCover {
        background: #2a56b6;
        padding: 8px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        & .b_logoImg {

            & img {
                width: 100%;
            }
        }

        & p {
            font-size: 22px;
            font-weight: 600;
            color: #fff;
            padding: 0 20px;
            letter-spacing: -1px;
        }

        & .b_arrow {

            & img {
                width: 100%;
            }
        }

    }

    & .openTab {
        width: 100%;
        background: #eceff6;
        position: absolute;
        bottom: 76px;
        z-index: 9;
        padding: 40px 0;
        & .openTabCover {
            max-width: 1230px;
            width: 100%;
            margin: 0 auto;
            padding: 0 15px;
            display: flex;
            align-items: center;
            & .otcLeft {
                position: relative;
                width: 100%;
                flex: 1 1 50%;
                max-width: 50%;
                
                & .otcLeftCover {
                    padding-left: 280px;
                    & .otclTitle {
                        font-size: 40px;
                        font-weight: 700;
                        color: #2a56b6;
                        margin-bottom: 20px;
                    }
                    & .otclDesc {
                        font-size: 20px;
                        font-weight: 600;
                        color: #2a56b6;
                        padding: 0;
                        letter-spacing: 0px;
                    }
                }
                
                &::before {
                    content: '';
                    background-image: url('./../../img/aside/band_con__logo.png');
                    background-repeat: no-repeat;
                    background-position: 0 0;
                    background-size: contain;
                    width: 200px;
                    height: 158px;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }

            & .otcRight {
                flex: 1 1 50%;
                max-width: 50%;
                & #otFrm {
                    padding: 0 40px;

                    & .frmTop {

                        & .td {
                            width: 100%;
                        }
                        & .frmRdi {


                            & .RdiList {
                                display: flex;

                                & li {
                                    padding: 0 20px;
                                    font-size: 18px;
                                    color: #a0a0a0;
                                    font-weight: 600;
                                }
                            }
                        }

                        & .frmSel {

                            & .selCover {
                                display: flex;
                                align-items: center;
                                & li {
                                    width: 100%;
                                    padding: 4px 10px;
                                    & #area {
                                        width: 100%;
                                        height: 50px;
                                        padding: 0 15px;
                                        border: 1px solid #b5b5b5;
                                        border-radius: 5px;
                                        font-size: 16px;
                                        font-weight: 600;
                                        background: #fff;
                                    }
                                }
                            }
                        }

                        & .frmtxt {

                            & .txtCover {
                                display: flex;
                                align-items: center;

                                & li {
                                    width: 100%;
                                    padding: 4px 10px;
                                    max-width: 50%;
                                    & #txt {
                                        width: 100%;
                                        height: 50px;
                                        padding: 0 15px;
                                        font-size: 16px;
                                        font-weight: 600;
                                        background: #fff;
                                        border: 1px solid #b5b5b5;
                                        border-radius: 5px;
                                        box-sizing: border-box;
                                        outline: 0;

                                        &::placeholder {
                                            font-size: 14px;
                                        }
                                    }
                                    & input[type="text"] {
                                        padding: 0;
                                    }
                                }
                            }
                        }

                        & .frmtxtarea {

                            & .txtareaCover {
                                display: flex;
                                align-items: center;
                                padding: 4px 10px;

                                & textarea {
                                    resize: none;
                                    width: 100%;
                                    height: 80px;
                                    padding: 15px;
                                    box-sizing: border-box;
                                    outline: none;
                                    border: 1px solid #b5b5b5;
                                    border-radius: 5px;
                                    font-size: 12px;
                                    color: #a0a0a0;
                                    font-weight: 600;
                                }
                            }
                        }



                    }

                    & .frmBot {
                        margin-top: 20px;
                        

                        & .fbCover {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            & .fbl {

                                & label {
                                    color: #a0a0a0;
                                    font-size: 16px;
                                    margin-left: 4px;
                                    margin-right: 6px;
                                    cursor: pointer;
                                }

                                & span {
                                    color: #073290;
                                    cursor: pointer;
                                }
                            }

                            & .fbr {
                                max-width: 240px;
                                width: 100%;
                                & button {
                                    width: 100%;
                                    height: 56px;
                                    color: #fff;
                                    background: #2a56b6;
                                    font-size: 20px;
                                    font-weight: 600;
                                    border: none;
                                    outline: none;
                                    border-radius: 10px;
                                    cursor: pointer;
                                }
                            }
                        }
                        
                    }
                }
            }

        }
    }
`;

const Aside = () => {

    const RightSide = () => {
        return (
            <RightArea>
                <div className='asideCover'>
                    <div className='asideList'>
                        <h2>개교문의</h2>
                        <p>1588-<br />1706</p>
                    </div>
                    <div className='asideList'>
                        <div className='imgCover'>
                            <img src={`${process.env.PUBLIC_URL}img/aside/q_icon01.png`} alt='icon1' />
                        </div>
                        <p className='fz16'>개교과정</p>
                    </div>
                    <div className='asideList'>
                        <div className='imgCover'>
                            <img src={`${process.env.PUBLIC_URL}img/aside/q_icon02.png`} alt='icon2' />
                        </div>
                        <p className='fz16'>상담문의</p>
                    </div>
                </div>
            </RightArea>
        )
    }

    const BottomSide = () => {
        return (
            <BottomArea>
                <div className='BottomCover'>
                    <div className='b_logoImg'>
                        <img src={`${process.env.PUBLIC_URL}img/aside/brand_logo.png`} alt='logo' />
                    </div>
                    <p>와플대학 창업 문의</p>
                    <div className='b_arrow'>
                        <img src={`${process.env.PUBLIC_URL}img/aside/brand_arrow.png`} alt='arrow' />
                    </div>
                </div>
                <div className='openTab'>
                    <div className='openTabCover'>
                        <div className='otcLeft'>
                            <div className='otcLeftCover'>
                                <h2 className='otclTitle'>1588-706</h2>
                                <p className='otclDesc'>
                                    어려웠던 창업! K-와플로 고민 해결! <br />
                                    와플대학과 함께라면 행복한 창업이 시작됩니다.
                                </p>
                            </div>
                        </div>
                        <div className='otcRight'>
                            <form id='otFrm' method='#' action='#'>
                                <div className='frmTop'>
                                    <div className='td frmRdi'>
                                        <ul className='RdiList'>
                                            <li>
                                                <input type='radio' id='rdi' name='shop' value='보유' />
                                                <label id='rdi' for='rdi'>점포 있음</label>
                                            </li>
                                            <li>
                                                <input type='radio' id='rdi2' name='shop' value='미보유' checked='checked' />
                                                <label id='rdi2' for='rdi2' >점포 없음</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='td frmSel'>
                                        <ul className='selCover'>
                                            <li>
                                                <select id='area'>
                                                    <option>서울시</option>
                                                </select>
                                            </li>
                                            <li>
                                                <select id='area'>
                                                    <option>동대문구</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='td frmtxt'>
                                        <ul className='txtCover'>
                                            <li>
                                                <input type='text' id='txt' placeholder='이름' />
                                            </li>
                                            <li>
                                                <input type='text' id='txt' placeholder='휴대폰번호(-없이 적으셔도됩니다)' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='td frmtxtarea'>
                                        <div className='txtareaCover'>
                                            <textarea value='문의내용'></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='frmBot'>
                                    <div className='fbCover'>
                                        <div className='fbl'>
                                            <input type='checkbox' id='chk' />
                                            <label id='chk' for='chk'>개인정보처리방침 동의</label>
                                            <span>[전문보기]</span>
                                        </div>
                                        <div className='fbr'>
                                            <button>상담신청하기</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </BottomArea>
        )
    }


    return (
        <>
            <RightSide />
            <BottomSide />
        </>
    )
}

export default Aside