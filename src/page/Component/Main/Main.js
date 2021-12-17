import React from 'react'
import '../../Css/style.css';
import '../../Css/main.css';
import '../../Css/media.css';

import Head from '../Head.js';
import Tail from "../Tail.js";
import MainBanner from "./MainBanner.js";
import MainBestTalk from "./MainBestTalk.js";
import MainComu from "./Maincomu/MainComu.js";
import MainMiddleBn from "./MainMiddleBn.js";
import MainTrade from "./MainTrade.js";
import MainClub from "./MainClub.js";
import MainEvent from "./MainEvent.js";


function Main() {

    return (
        <div>
            <div className="follow_btn">
                <div className="top_btn">

                </div>
                <div className="write_btn">

                </div>
            </div>
            <div id="main_wrap" className="wrap">
                <Head></Head>
                <MainBanner></MainBanner>
                <MainBestTalk></MainBestTalk>
                <MainComu></MainComu>
                <MainMiddleBn></MainMiddleBn>
                <MainTrade></MainTrade>
                <MainClub></MainClub>
                <MainEvent></MainEvent>
                <Tail></Tail>
            </div>
        </div>
    );
}


export default Main;
