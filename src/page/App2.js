import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

//import store from '../redux/Store.js';


function App() {

    const blogName = "Plug Ground";
    const [subject, subjectSet] = useState([{ wr_subject: "", datetime: "", content: "" }]);
    const [number, /* numberSet */] = useState(1);
    const [viewTarget, viewTargetSet] = useState({});

    useEffect(() => {
        axios.get('http://175.125.95.182:4000/users')
            .then((response) => {
                subjectSet(response.data);
                viewTargetSet(response.data[0]);
            })
            .catch((Error) => {
                console.log(Error);
            })
    }, [])


    let [like, likeChange] = useState(0);
    let [sort, sortChange] = useState("DESC");


    //버튼 눌렀을때 정렬
    const dataChange = () => {
        let newArray = [...subject];
        let sortType = sort;
        if (sortType === "DESC") {
            newArray.sort((a, b) => {
                if (a.wr_subject < b.wr_subject) {
                    return -1;
                } else if (a.wr_subject > b.wr_subject) {
                    return 1;
                } else {
                    return 0;
                }
            });
            sortChange("ASC");
        } else {
            newArray.sort((a, b) => {
                if (a.wr_subject > b.wr_subject) {
                    return -1;
                } else if (a.wr_subject < b.wr_subject) {
                    return 1;
                } else {
                    return 0;
                }
            });
            sortChange("DESC");
        }
        subjectSet(newArray);
    }




    //itemlist 뿌려주기
    const listItem = subject.map((list, index) => {
        let date = moment(list.wr_datetime).format("YYYY년MM월DD일");
        return (
            <div className="list" key={index} >
                <h3 onClick={() => {
                    window.scrollTo(0, 0);
                    viewTargetSet(subject[index]);
                }}> {list.wr_subject}
                    <span onClick={(event) => {
                        event.stopPropagation();
                        likeChange(like + 1)
                    }}>💙</span> {like}
                </h3>
                <p>{date} 발행</p>
                <hr></hr>
            </div>
        )
    });



    return (
        <div className="App">
            <div className="black-nav">
                <div><Link to="/">{blogName}</Link></div>
            </div>
            <button onClick={dataChange}>Sort</button>

            <button onClick={() => {
                console.log(number);
            }}>+</button>
            <Modal subj={viewTarget.wr_subject} date={viewTarget.wr_datetime} content={viewTarget.wr_content} />
            {listItem}
        </div >
    );
}

function Modal(props) {
    let date = moment(props.date).format("YYYY년MM월DD일");

    return (
        <div className="modal">
            <h2>{props.subj}</h2>
            <p>{date}</p>
            <div className="content_wrap" dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>
    )
}

export default App;
