import React, { useState } from 'react'



function MainComu() {

    const [currentIdx, setCurrentIdx] = useState(0);
    const Tab = [
        {
          title: "section1",
          content: "im content 1"
        },
        {
          title: "section2",
          content: "im content 2"
        },
        {
          title: "section3",
          content: "im content 3"
        }
    ];

    const useTab = (idx, Tabs) => {
        if (!Tabs || !Array.isArray(Tabs)) {
          return null;
        }
        
        return {
          currentItem: Tabs[currentIdx],
          changeItem: setCurrentIdx
        };
    };

    const { currentItem, changeItem } = useTab(0, Tab);
    return (
        <div className="sec notice_wrap">
            <h1>InputHooks with validator</h1>
            <div>
                {Tab.map((e, index) => (
                <button key={index} onClick={e => changeItem(index)}>
                    {e.title}
                </button>
                ))}
            </div>
            <div>{currentItem.content}</div>






            <ul className="notice_tab">
                <li className="on"><a href="#!">인기글</a></li>
                <li><a href="#!">최신글</a></li>
            </ul>
            <div className="notice_conts">
                <div className="hot">
                    <ul>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    사례로 보는 구독 서비스
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    YOU만 모르는 스마트스토어 리마케팅 방법
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    스마트스토어 운영 시 추천 사이트 (기초 셋팅부터 운123456789
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    병읜원 분들!!!
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    꼰머우뇌가 전하는 활용법
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    사례로 보는 구독 서비스
                                </p>
                                <p></p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    스마트스토어 운영 시 추천 사이트 (기초 셋팅부터 운123456789
                                </p>
                                <p></p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    병읜원 분들!!!
                                </p>
                                <p></p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    꼰머우뇌가 전하는 활용법
                                </p>
                                <p></p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    사례로 보는 구독 서비스
                                </p>
                                <p></p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="new">
                    <ul>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    new
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    YOU만 모르는 스마트스토어 리마케팅 방법
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    스마트스토어 운영 시 추천 사이트 (기초 셋팅부터 운123456789
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    병읜원 분들!!!
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    꼰머우뇌가 전하는 활용법
                                </p>
                                <p className="cmt_num">10</p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    사례로 보는 구독 서비스
                                </p>
                                <p></p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    스마트스토어 운영 시 추천 사이트 (기초 셋팅부터 운123456789
                                </p>
                                <p></p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    병읜원 분들!!!
                                </p>
                                <p></p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    꼰머우뇌가 전하는 활용법
                                </p>
                                <p></p>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="tit">
                                    사례로 보는 구독 서비스
                                </p>
                                <p></p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainComu;
