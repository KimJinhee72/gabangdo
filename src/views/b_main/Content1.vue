<template>
  <!-- 메인 컨텐츠1 전체영역 -->
  <div class="macontent1_wrap">
    <div class="inner">
      <!-- 위 -->
      <div class="macontent1_up">
        <h2>|&nbsp;&nbsp;&nbsp;짐운송도!</h2> <h2> &nbsp; 한번에!</h2> <h2>&nbsp;  가방도!</h2><h2>&nbsp; 한번에!</h2>
      </div>
      <!-- 아래 -->
      <div class="macontent1_down">
        <!-- s사이즈 -->
        <div class="masize">
          <!-- 사이즈 섹션 상단 설명 -->
          <div class="masize_txt">
            <h2>S 사이즈</h2>
            <h4>기내용 캐리어,소형 배낭 등</h4>
            <h5>21인치이하/55cm이하/10kg미만</h5>
          </div>
          <!-- 아이콘 -->
          <div class="masize_icon">
            <img src="/public/images/gh/ma_content1/s_size.png" alt="S사이즈" />
            <!-- <img src="/public/images/ma/ma_content1/s_size.png" alt="S사이즈" /> -->
          </div>
          <!-- 사전예약시 -->
          <div class="masize_beforecash">
            <h5>사전예약시 10,000원</h5>
          </div>
          <!-- 당일예약시 -->
          <div class="masize_aftercash">
            <h4>당일예약</h4>
            <h2>12,000원</h2>
          </div>
        </div>
        <!-- m사이즈 -->
        <div class="masize">
          <!-- 사이즈 섹션 상단 설명 -->
          <div class="masize_txt">
            <h2>M 사이즈</h2>
            <h4>화물용 캐리어, 등산 가방 등</h4>
            <h5>25인치이하/65cm이하/20kg미만</h5>
          </div>
          <!-- 아이콘 -->
          <div class="masize_icon">
            <!-- <img src="/public/images/ma/ma_content1/m_size.png" alt="m사이즈" /> -->
            <img src="/public/images/gh/ma_content1/m_size.png" alt="m사이즈" />
          </div>
          <!-- 사전예약시 -->
          <div class="masize_beforecash">
            <h5>사전예약시 14,000원</h5>
          </div>
          <!-- 당일예약시 -->
          <div class="masize_aftercash">
            <h4>당일예약</h4>
            <h2>16,000원</h2>
          </div>
        </div>
        <!-- l사이즈 -->
        <div class="masize">
          <!-- 사이즈 섹션 상단 설명 -->
          <div class="masize_txt">
            <h2>L 사이즈</h2>
            <h4>대형 캐리어, 배낭, 골프백 등</h4>
            <h5>26인치이상/66cm이상/30kg미만</h5>
          </div>
          <!-- 아이콘 -->
          <div class="masize_icon">
            <!-- <img src="/public/images/ma/ma_content1/l-size.png" alt="l사이즈" /> -->
            <img src="/public/images/gh/ma_content1/l-size.png" alt="l사이즈" />
          </div>
          <!-- 사전예약시 -->
          <div class="masize_beforecash">
            <h5>사전예약시 16,000원</h5>
          </div>
          <!-- 당일예약시 -->
          <div class="masize_aftercash">
            <h4>당일예약</h4>
            <h2>18,000원</h2>
          </div>
        </div>
        <!-- ?사이즈 -->
        <div class="masize">
          <!-- 사이즈 섹션 상단 설명 -->
          <div class="masize_txt">
            <h2>? 사이즈</h2>
            <h4>기타 물품 및 표시 외 사이즈</h4>
            <h5>가방도 문의 후 협의된 물품에 한함</h5>
          </div>
          <!-- 아이콘 -->
          <div class="masize_icon">
            <!-- <img src="/public/images/ma/ma_content1/size.png" alt="?사이즈" /> -->
            <img src="/public/images/gh/ma_content1/size.png" alt="?사이즈" />
          </div>
          <!-- 사전예약시 -->
          <div class="masize_beforecash">
            <h5></h5>
          </div>
          <!-- 카카오톡 문의 -->
          <div class="masize_aftercash">
            <h2>카카오톡 문의</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
@import '/src/assets/Variables';
/* 전체영역 */
.macontent1_wrap {
  width: 100%;
  background-color: #0066b3;
  margin: auto;
}
.inner {
  max-width: 1300px;
  padding: $padding-s 0px;
  margin: auto;
}
/* 위 - txt */
.macontent1_up {
  margin-left: $margin-L - 25px;
  display: flex;
  align-items: flex-end;
  color: #fff;
}
.macontent1_up > h2 {
  margin-left: $margin-sss / 2;
}
/* 위 - img-캡션별 */
/* 전체영역 */
.macontent1_down {
  display: flex;
  padding: $padding-s $padding-s 0 $padding-s;
  justify-content: space-evenly;
  line-height: 20px;
}
/* 사이즈 섹션 */
.masize {
  width: 100%;
  max-width: 200px;
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
}
/* 사이즈 섹션 상단 설명  */
.masize_txt > h4 {
  font-size: 14.5px;
  color: #162b50;
}
.masize_txt > h5 {
  font-size: 11.7px;
  color: #5a5a5a;
}
/* 아이콘 */
.masize_icon {
  padding: 10px 0;
  text-align: center;
}
.masize_icon > img {
  width: 50%;
}
/* 사이즈 섹션 하단 설명 */
.masize_beforecash {
  text-align: right;
  min-height: 20px;
  font-size: 14px;
  letter-spacing: -1px;
  color: #5a5a5a;
}
.masize_aftercash {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -1px;
  color: #162b50;
}
/* 반응형 - 데스크탑 (1140px) */
@media screen and (max-width: 1140px) {
  .macontent1_down {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .masize {
    width: 45%; /* 한 줄에 2개 배치 */
  }
}
/* 반응형 - 태블릿 (768px) */
@media screen and (max-width: 768px) {
  .macontent1_down {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .masize {
    width: 45%; /* 한 줄에 2개 배치 */
  }
}

/* 반응형 - 모바일 (390px) */
@media screen and (max-width: 390px) {
  .macontent1_down {
    flex-direction: column;
    align-items: center;
  }
  .masize {
    width: 100%; /* 한 줄에 1개 배치 */
  }
}
</style>
