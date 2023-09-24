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
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  background-color: #ffe6f0;
  color: #3399cc;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 1vh;
  text-align: center;
  border-radius: 10px;
}
.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#social-icons {
  order: 1;
}

#social-icons a {
  margin: 0 10px;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease;
  color: #3e82a4;
}

#social-icons a:hover {
  color: #0055a4;
}

#footer-text {
  order: 2;
  text-align: right;
}
</style>

<script lang="ts">
export default {
  name: "FooterSection",
};
</script>
