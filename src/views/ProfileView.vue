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
<script lang="ts">
export default {
  name: "ProfileView",
};
</script>

<style scoped>
.profile-container {
  text-align: center;
  background-color: #f0f8f7; /* Very light shade of #009688 */
  padding: 20px;
  border-radius: 10px;
  color: #009688; /* Text color matches the button color */
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.profile-form {
  max-width: 400px; /* Limit the form width for better readability */
  margin: 0 auto; /* Center the form horizontally */
}

.form-group {
  margin: 10px 0;
}

label {
  font-size: 16px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #009688; /* Add a border for better visibility */
  border-radius: 5px;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.login-button {
  background-color: #009688;
  color: white;
  transition: background-color 0.3s, color 0.3s; /* Add a transition for smooth hover effect */
}

.login-button:hover {
  background-color: #007566; /* Change the background color on hover */
  color: white; /* Change the text color on hover */
}

.create-account-button {
  background-color: white;
  color: #009688;
  border: 2px solid #009688;
}

/* Add hover styles to make it more interactive for children */

.create-account-button:hover {
  background-color: #009688;
  color: white;
}

/* Add a little animation to the buttons for fun */
.login-button,
.create-account-button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
