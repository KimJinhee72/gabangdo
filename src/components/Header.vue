<template>
  <header>
    <div class="header ">
      <div class="inner">
        <router-link to="/" class="logo"><img src="/images/txtlogo.png" alt="로고" /></router-link>
     <nav class="menu">
        <router-link to="/bangbeob">방법도</router-link>
        <router-link to="/yeyak">예약도</router-link>
        <router-link to="/yogeum">요금도</router-link>
        <router-link to="/sotong">소통도</router-link>
        <router-link to="/yeohang">여행도</router-link>
      </nav>
      <nav class="extra">
        <router-link to="/delivery">배송조회</router-link>|
        <router-link to="/login">로그인</router-link>
      </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>

.header{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 75px;
  padding-top: 8px;
  z-index: 1000; 
  background-color:#fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
header .inner{
  width: 100% !important;
  display: flex;
  justify-content: space-between;
  align-items: center; 
}
.logo{
  width: 15.317%;
  img{
    width: 90%;
  }
}
.menu{
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.extra{
  width: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}
</style>
