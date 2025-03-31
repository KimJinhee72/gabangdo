<template>
  <div class="visual-wrap">
    <div class="inner">
      <!-- 왼쪽 -->
      <div class="mavistxt">
        <h4>여행의 시작은 가방도와 함께</h4>
        <h1>여행짐은 가방도에</h1>
        <h1 class="mablue">맡기세요!</h1>
        <button>예약하기 ></button>
        <!-- 오디오 음악재생 -->
        <audio autoplay controls class="mavisaudio" loop>
          <!-- <source src="/public/music.mp3" /> -->
          <source src="/public/images/gh/music.mp3" />
        </audio>
      </div>
      <!-- 오른쪽 -->
      <div class="mavisimg">
        <!-- <img src="/public/images/ma/ma_visual/mavisual.gif" alt="ma-viusal" /> -->
        <img src="/public/images/gh/ma_visual/mavisual.gif" alt="ma-viusal" />
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
/* 전체영역 */
.visual-wrap .inner {
  margin-top: 50px;
  display: flex;
  max-width: 1300px;
  /* background-color: antiquewhite; */
}
/* 왼쪽 - 텍스트박스  */
.mavistxt {
  margin-top: 10%;
  margin-right: 5%;
  width: 40%;
  text-align: right;
}
.mavistxt > h4 {
  font-size: 16px;
  color: #5a5a5a;
  margin-bottom: 10px;
}
.mavistxt > h1 {
  font-size: 40px;
  color: #0d0604;
  line-height: 45px;
}
/* 맡기세요! (문구- 블루) */
.mablue {
  color: #0066b3 !important;
}
.mavistxt > button {
  width: 200px;
  height: 50px;
  font-size: 20px;
  background: #0066b3;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 20px;
}
.mavistxt > button:hover {
  background: #162b50;
}
/* 오른쪽 - gif이미지 */
.mavisimg {
  width: 60%;
  /* min-width: 390px; */
}
.mavisimg > img {
  width: 100%;
}
/* 반응형 - (810px) */
@media screen and (max-width: 810px) {
  .visual-wrap > .inner {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
  /* 이미지 */
  .mavisimg {
    width: 90%;
    /* min-width: 390px; */
  }
  .mavisimg > img {
    width: 100%;
  }
  /* 텍스트 박스 */
  .mavistxt {
    margin-top: 2%;
    width: 80%;
    text-align: center;
  }

  /* 오디오 음악재생 */
  .mavisaudio {
    display: block;
    margin: auto;
  }
}
</style>
