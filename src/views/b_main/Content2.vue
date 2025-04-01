<template>
  <div class="macontent2_wrap">
    <div class="inner">
      <div class="macontent2_icon">
        <!-- 1. 가방도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <img
              src="/public/images/gh/ma_content2/gabangdo_icon.png"
              alt="가방도 아이콘"
            />
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>짐운송, 보관,<br />차량 대절까지<br />당일 배송, 안전한 픽업</h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>가방도</h4>
          </div>
        </div>
        <!-- 2. 예약도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <img
              src="/public/images/gh/ma_content2/reservation_icon.png"
              alt="예약도 아이콘"
            />
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>
                특별 예약으로<br />
                원하는 서비스를<br />
                빠르게 이용하세요.
              </h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>예약도</h4>
          </div>
        </div>
        <!-- 3. 요금도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <img src="/public/images/gh/ma_content2/cash_icon.png" alt="요금도 아이콘" />
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>
                서비스 요금과 결제 방법<br />
                전체적으로 확인하세요.
              </h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>요금도</h4>
          </div>
        </div>
        <!-- 4. 소통도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <img
              src="/public/images/gh/ma_content2/comunity_icon.png"
              alt="소통도 아이콘"
            />
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>
                공지사항과 커뮤니티에서<br />가방도 프로모션과 후기들을<br />만나보세요.
              </h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>소통도</h4>
          </div>
        </div>
        <!-- 5. 여행도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <img src="/public/images/gh/ma_content2/trip_icon.png" alt="여행도 아이콘" />
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>대구 축제, 관광지, 맛집<br />정보를 만나보세요.</h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>여행도</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
/* 전체영역 */
.macontent2_wrap {
  width: 100%;
  margin: auto;
}
.macontent2_wrap .inner {
  margin-top: 50px;
  max-width: 1300px;
}
/* 아이콘 전체 영역 */
.macontent2_icon {
  display: flex;
  justify-content: center;
  gap: 20px;
  text-align: center;
}

/* 아이콘 이미지 박스 */
.macontent2_iconimg {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px; /* 원하는 크기로 조정 */
  cursor: pointer;
}

/* 아이콘 이미지 */
.macontent2_iconimg img {
  width: 100%;
  transition: filter 0.5s ease-in-out;
}

/* hover 시 이미지 배경 검게 만들기 */
.macontent2_iconimg:hover img {
  filter: brightness(50%);
}

/* hover 시 텍스트 보이게 하기 */
.macontent2_icon_hover {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: white;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* hover 시 텍스트 보이게 설정 */
.macontent2_iconimg:hover .macontent2_icon_hover {
  opacity: 1;
}

/* 항상 보이는 텍스트 */
.macontent2_icontxt h4 {
  margin-top: 8px;
  color: black;
}
</style>
