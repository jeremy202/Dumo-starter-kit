<template>
  <div>
    <div class="relative">
      <div class="custom-label-pali">
        .pali.page
      </div>
      <input class="custom-input-pali" placeholder="Your Store Link" />
    </div>
  </div>
</template>

<style scoped>
.custom-input-pali {
  padding: 14px 110px 14px 12px;
  border: 1.5px solid #E7EAF4;
  border-radius: 14px;
  width: 100%;
  font-size: 16px;
  color: rgba(30, 31, 33, .8);
  appearance: none;
  position: relative;
  background-color: transparent;
  transition: border-color 0.25s ease-in-out;
  line-height: 1.2;
}
.custom-input-pali:focus {
  outline: 0;
  box-shadow: 0;
  border-color: #F07D22;
  color: #1e1f21;
}

.custom-label-pali {
  position: absolute;
  color: #1E1F21;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
}

</style>