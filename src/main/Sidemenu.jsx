import React from 'react';
import styles from '../css/Sidemenu.module.css'
import photo from '../img/photo.jpg'

const Sidemenu = () => {
    return (
        <div className={styles.sideMenu}>
            <img src={photo} className={styles.photo} alt="이력서사진" />
            <p className={styles.myName}>박상욱</p>
            <ul>
                <a href="#intro"><li>자기소개</li></a>
                <a href="#tech"><li>기술 스택</li></a>
                <a href="#project"><li>프로젝트 경험</li></a>
                <a href="#education"><li>학력 및 교육</li></a>
            </ul>
        </div>
    );
};

export default Sidemenu;