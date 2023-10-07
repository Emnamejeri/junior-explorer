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
  background-color: #e0f2f1;
  color: #3399cc;
  font-weight: bold;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
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

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-content p {
    margin-bottom: 10px;
    font-size: 14px;
  }

  #social-icons a {
    font-size: 20px;
  }
}
</style>

<script lang="ts">
export default {
  name: "FooterSection",
};
</script>
