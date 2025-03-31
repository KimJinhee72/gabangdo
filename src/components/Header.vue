<template>
  <header>
    <div class="header inner">
     <nav class="menu">
        <router-link to="/" class="logo"><img src="/images/txtlogo.png" alt="로고" /></router-link>
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
  </header>
</template>

<script setup>
</script>

<style scoped>
.header{
  width: 100%;
  height: 75px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
  width: 15.317%;
  img{
    width: 100%;
  }
}
.menu{
  width: 68%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.extra{
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
