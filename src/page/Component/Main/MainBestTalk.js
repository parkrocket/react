import React from 'react'

function MainBestTalk() {
    return (
        <div className="sec best_talk_wrap">
            <div className="sec_tit">
                <h2>오늘의 베스트 톡</h2>
                <a href="#!">&gt;</a>
            </div>
            <div className="best_talk">
                <div className="best_item">
                    <a href="#!">
                        <div className="img"><img src="../../images/best_talk_img01.jpg" alt="" /></div>
                        <div className="text">
                            오늘의 건강 아침 + 간식! 첫 도전해봤어요!
                        </div>
                    </a>
                </div>
                <div className="best_item">
                    <a href="#!">
                        <div className="img"><img src="../../images/best_talk_img02.jpg" alt="" /></div>
                        <div className="text">
                            오늘의 건강 아침 + 간식! 첫 도전해봤어요!
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainBestTalk;
