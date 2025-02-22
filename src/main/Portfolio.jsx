import React from "react";
import styles from "../css/Portfolio.module.css"; // CSS 파일 import

import Sidemenu from "./Sidemenu";

const Portfolio = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* 1. 개인소개 */}
        <section className={styles.section} id="intro">
          <h2 className={styles.subtitle}>자기소개</h2>
          <div className={styles.card}>
            <p>
              <strong className={styles.introduce}>
                안녕하세요. <br/>
                저는 신입 개발자 박상욱입니다.
              </strong><br/><br/>
              새로운 기술을 사용하거나, 기존의 코드를 개선하는 걸 좋아합니다.<br/>
              내가 작성한 코드도 부족한 부분이 없나 한번 더 고민해 봅니다.<br/>

              현재 신입 개발자로 구직중 입니다.
            </p>
            <pre>핸드폰 : 010 - 4115 - 0111       이메일 : anfto02@naver.com</pre>
          </div>
        </section>

        {/* 2. 기술 스택 */}
        <section className={styles.section} id="tech">
          <h2 className={styles.subtitle}>사용하는 기술 스택</h2>
          <div className={styles.card}>
              <ul>
                  <li><p><strong>프론트엔드:</strong> HTML, CSS, React, JavaScript, Jquery</p></li>
                  <li><p><strong>백엔드:</strong> Spring Boot, Java, JPA, MyBatis, RESTful API</p></li>
                  <li><p><strong>데이터베이스:</strong> MySQL, Oracle, Redis</p></li>
                  <li><p><strong>개발도구:</strong> Eclipse, VSCode, Postman, Git</p></li>
              </ul>
          </div>
        </section>

        {/* 3. 프로젝트 경험 */}
        <section className={styles.section} id="project">
          <h2 className={styles.subtitle}>프로젝트 경험</h2>
          <div className={`${styles.card} ${styles.pro}`}>
            <p><strong>프로젝트명:</strong> 금리박사</p>
            <p><strong>개발 기간:</strong> 5주</p>
            <p><strong>팀 구성:</strong> 총 인원: 8명, 2명씩 조를 맞춰서 프론트엔드, 백엔드를 같이 구현하였습니다.</p>
            <p><strong>프로젝트 설명</strong><br/>여러 은행들의 예·적금 목록을 불러와서 사용자가 비교하고 싶은 예·적금을 한번에 비교할수 있게 해주는 웹사이트입니다.</p>
            <p><strong>프로젝트 링크:</strong> <a href="https://github.com/BitCamp-Final-Project" target="_blank" rel="noopener noreferrer">https://github.com/BitCamp-Final-Project</a></p>
            <p><strong>사용 기술</strong> <br/>
            <ul>
              <li>프론트엔드: HTML, SCSS, JavaScript, React, Jotai</li>
              <li>백엔드: Spring Boot, JPA, Spring Security, JWT, RESTful API</li>
              <li>데이터베이스: MySQL, Redis, MongoDB</li>
              <li>버전관리 : Git, GitHub</li>
            </ul>
            </p>
            <p><strong>맡은 기능:</strong></p>
            <ul className={styles.list}>
              <li>✅ 사용자 회원가입 및 로그인, 회원 정보 수정, 회원 탈퇴, 로그아웃 기능 (JWT, OAuth 2.0 적용)</li>
              <li>✅ SMTP기능 구현 (Google)</li>
            </ul>
            <p><strong>문제정의</strong></p>
            <ul>
              <li>Security와 JWT을 처음으로 구현을 시도하였습니다.</li>
              <li>정보를 찾으면서 보안에 취약점이 있다는걸 알았습니다.</li>
              <li>관계형 데이터베이스를 사용하면 성능적으로 많이 떨어졌습니다.</li>
            </ul>
            <p><strong>문제해결</strong></p>
            <ul>
              <li>성능 개선을 위해 Redis를 사용하였습니다.</li>
              <li>JWT의 두가지 토큰이 한번에 탈취당할 경우를 가정하여 클라이언트에는 Access토큰만 전달하였습니다.</li>
              <li>유효기간이 긴 Refresh토큰은 Redis에서만 관리하도록 하였습니다.</li>
              <li>토큰의 검증을 위해 Access토큰과 Refresh토큰을 Json형식으로 Redis에 저장하였습니다.</li>
              <li>새로운 토큰 요청시 만료된 토큰에서 정보를 추출하여 Redis에 저장된 토큰과 비교 후 새로운 토큰을 발급하도록 하였습니다.</li>
            </ul>
            <p><strong>결과</strong></p>
            <ul>
              <li>속도와 부하면에서 성능이 크게 개선되었습니다.</li>
              <li>토큰의 관리방식을 바꿔서 보안적으로 더욱 향상되었습니다.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <p><strong>프로젝트명:</strong> 핀터레스트 클론 코딩</p>
            <p><strong>개발 기간:</strong> 5일</p>
            <p><strong>팀 구성:</strong> 3명, 담당한 기능에 대해서 프론트와 백을 같이 구성하였습니다.</p>
            <p><strong>프로젝트 설명</strong><br/>
              핀터레스트 사이트를 참고하여 클론 코딩을 진행하였습니다.
            </p>
            <p><strong>프로젝트 링크:</strong><a href="https://github.com/BitCamp-SemiProject3/PinterSemi">https://github.com/BitCamp-SemiProject3/PinterSemi</a></p>
            <p><strong>사용 기술</strong> <br/>
            <ul>
              <li>프론트엔드: HTML, CSS, JavaScript (jQuery), Bootstrap, JSP</li>
              <li>백엔드: Java, Spring Framework, MyBatis</li>
              <li>데이터베이스: Oracle</li>
              <li>버전관리 : Git</li>
            </ul>
            </p>
            <p><strong>맡은 기능:</strong></p>
            <ul className={styles.list}>
              <li>✅ 사용자 프로필사진 변경 기능 구현</li>
              <li>✅ 이미지 스크랩 기능 추가</li>
              <li>✅ 사용자가 저장한 핀과 사용자가 작성한 핀 구분 토글 기능 추가</li>
              <li>✅ 메인 페이지 반응형 리팩토링</li>
            </ul>
          </div>
        </section>
          

        {/* 5. 기타 활동 */}
        <section className={styles.section} id="education">
          <h2 className={styles.subtitle}>학력 및 교육이수</h2>
          <div className={styles.card}>
            <p><strong>[네이버 클라우드]클라우드 기반 AIaaS 개발자 과정</strong><br/>2024.07 ~ 2025.01 교육이수</p>
            <p><strong>반응형 앱 & 웹디자인 콘텐츠 제작과정</strong><br/>2021.06 ~ 2021.10 교육이수</p>
            <p><strong>두원공과대학교</strong><br/>기계설계과 / 2016.02 ~ 2018.03 졸업</p>
          </div>
        </section>
      </div>
      <Sidemenu/>
    </div>
  );
};

export default Portfolio;
