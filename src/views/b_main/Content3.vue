<template>
  <div class="macontent3_wrap">
    <div class="inner">
      <!-- 1. 여행도 -->
      <div class="macontent3_gp ma3trip">
        <div class="ma3bg">
          <div class="ma3img">
            <img
              src="/public/images/gh/ma_content3/character_1.png"
              alt="여행도" />
          </div>
          <div class="ma3txt">
            <h3>|&nbsp;&nbsp;쉽고 가벼운 여행도!</h3>
            <h4>
              무거운 짐은 맡기고,<br />가볍게 여행하세요!<br />
              원하는 장소에 짐맡기고<br />
              편하게 이동할 수 있어요.
            </h4>
          </div>
        </div>
      </div>
      <!-- 2. 배달도 -->
      <div class="macontent3_gp madily">
        <div class="ma3bg">
          <div class="ma3txt">
            <h3>|&nbsp;&nbsp;안전하고 정확한<br />배달도!</h3>
            <h4>
              전문 운반원이 책임지고 배송!<br />
              실시간 위치 확인과<br />안전한 보관으로<br />
              안심하고 이용하세요.
            </h4>
          </div>
          <div class="ma3img">
            <img
              src="/public/images/gh/ma_content3/character_2.png"
              alt="배달도" />
          </div>
        </div>
      </div>
      <!-- 3. 배송조회도! -->
      <div class="macontent3_gp ma3shearch">
        <div class="ma3bg">
          <div class="ma3img">
            <img
              src="/public/images/gh/ma_content3/character_3.png"
              alt="배송조회도!" />
          </div>
          <div class="ma3txt">
            <h3>|&nbsp;&nbsp;실시간 배송조회도!</h3>
            <h4>
              내 짐이 어디에 있는지 한눈에!<br />
              배송 상황을 실시간 <br />
              확인할 수 있어요
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
/* 전체영역 */
.macontent3_wrap {
  position: relative;
  width: 100%;
  margin: auto;
}
.macontent3_wrap .inner {
  position: relative;
  margin-top: 100px;
  max-width: 1300px;
}
/* 중앙 원 */
.macontent3_wrap .inner::before {
  display: none;
  content: "";
  position: absolute;
  top: 60%;
  left: 50%;
  width: 800px; /* 원 크기 */
  height: 800px;
  background-color: rgba(237, 237, 237, 1); /* 반투명 흰색 */
  border-radius: 50%;
  transform: translate(-50%, -50%); /* 정확한 중앙 정렬 */
  z-index: -2; /* 콘텐츠보다 뒤에 배치 */
}
/* 컨텐츠 전체영역 */
.macontent3_gp {
  position: relative;
  width: 100%;
  display: flex;
  margin: auto;
}
/* 컨텐츠 배경- 블루 */
.ma3bg {
  width: 550px;
  height: 200px;
  background-color: #0066b3;
  border-radius: 90px;
  z-index: -1; /* 콘텐츠보다 뒤에 배치 */
  margin: auto;
  margin-top: 80px;
  display: flex;
}
/* 텍스트 설명 */
.ma3txt {
  display: block;
  width: 230px;
  color: #fff;
  margin: auto;
  padding: 20px, 0;
}
.ma3txt > h3 {
  font-weight: 500;
}
.ma3txt > h4 {
  margin-top: 10px;
  font-weight: 300;
  line-height: 21px;
}
/* 이미지 설정 */

/* 컨텐츠 별도 위치지정 */

/*  2. 배달도  */
.madily > .ma3bg > .ma3txt {
  text-align: right;
}
</style>
