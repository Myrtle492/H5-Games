<template>
  <div class="footer">
    <div class="content">
      <LinkWidget href="/about.html">About</LinkWidget> ·
      <LinkWidget href="/privacy.html">Privacy</LinkWidget> ·
      <LinkWidget href="/contact.html">Contact</LinkWidget> ·
      <LinkWidget href="/terms.html">Terms</LinkWidget>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 50px;
  color: #fff;
  font-size: 13px;
  background: #25b3e5;
  padding: 0 20px;

  .content {
    text-align: center;
    line-height: 50px;
  }
}
</style>
