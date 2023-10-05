<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2023 Junior Explorer -- All Rights Reserved.</p>
      <div id="social-icons">
        <a href="https://www.facebook.com/yourpage" target="_blank">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/yourpage" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 4em;
}

.footer {
  background-color: #e0f2f1;
  color: #3399cc;
  font-weight: bold;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 2em);
}

#social-icons a {
  color: #3399cc;
  text-decoration: none;
  font-size: 24px;
  transition: color 0.3s ease;
  margin: 0 10px;
}

#social-icons a:hover {
  color: #ff007f;
}
</style>

<script lang="ts">
export default {
  name: "FooterSection",
};
</script>
