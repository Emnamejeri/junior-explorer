<template>
  <div class="profile-container">
    <h2>Child's Profile</h2>
    <form class="profile-form">
      <div class="form-group">
        <label for="childName"> Name:</label>
        <input
          type="text"
          id="childName"
          placeholder="Enter child's name"
          required
        />
      </div>
      <div class="form-group">
        <label for="childEmail"> Email:</label>
        <input
          type="email"
          id="childEmail"
          placeholder="Enter child's email"
          required
        />
      </div>
      <div class="form-group">
        <label for="childPassword">Password:</label>
        <input
          type="password"
          id="childPassword"
          placeholder="Enter password"
          required
        />
      </div>
      <button class="login-button">Login</button>
      <button class="create-account-button">Create Account</button>
    </form>
  </div>
</template>

<style scoped>
.profile-container {
  text-align: center;
  background-color: #f0f8f7;
  padding: 20px;
  border-radius: 10px;
  color: #009688;
  margin-top: 3em;
  max-width: 100%;
}

h2 {
  font-size: 2em;
  margin-bottom: 1em;
}

.profile-form {
  width: 80%;
  margin: 0 auto;
}

.form-group {
  margin: 1em 0;
}

label {
  display: block;
  font-size: 1em;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 1em;
  border: 2px solid #009688;
  border-radius: 5px;
  margin: 10px 0;
  display: block;
}

button {
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  margin-top: 1em;
  cursor: pointer;
}

.login-button {
  background-color: #009688;
  color: white;
}

.login-button:hover {
  background-color: #007566;
}

.create-account-button {
  background-color: white;
  color: #009688;
  border: 2px solid #009688;
}

.create-account-button:hover {
  background-color: #009688;
  color: white;
}

@media only screen and (max-width: 768px) {
  .profile-form {
    width: 90%;
  }

  h2 {
    font-size: 1.8em;
  }
}

@media only screen and (max-width: 480px) {
  h2 {
    font-size: 1.5em;
  }

  label {
    font-size: 0.9em;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  button {
    width: calc(100% - 10px);
  }

  button {
    font-size: 1em;
  }

  .form-group {
    margin: 0.5em 0;
  }
}
</style>

<script lang="ts">
export default {
  name: "ProfileView",
};
</script>
