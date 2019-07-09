<template>
  <div class="post">
    <div class="post-header">
      <slot name="header"></slot>
    </div>
    <div class="post-body">
      <slot name="body"></slot>
    </div>
    <div class="post-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
  .post {
    margin: 15px auto;
  }
  .post-header {
    padding: 5px 12px;
    background-color: #eee;
  }
  .post-body {
    font-size: 16px;
  }
  .post-footer {
    font-style: italic;
  }
</style>
