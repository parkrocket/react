import React, { useState } from 'react'
import Comu01 from './Comu01.js';
import Comu02 from './Comu02.js';

function MainComu() {
    const menuList = {
        0: <Comu01 />,
        1: <Comu02 />,
    };

    const [menu, setmenu] = useState(0)
   
    const changeMenu = (menuIndex) =>{
        setmenu(menuIndex);
    }

    return (
        <div className="sec notice_wrap">
            <div className="tab_menu_wrap">
                <div className={`${menu === 0? 'active': ''} tab_menu`} onClick={() => changeMenu(0)}>인기글</div>
                <div className={`${menu === 1? 'active': ''} tab_menu`} onClick={() => changeMenu(1)}>추천글</div>
            </div>

            <div className="notice_conts">
                {menuList[menu]}
            </div>
        </div>
    )
}

export default MainComu;
