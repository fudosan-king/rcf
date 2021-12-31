<template>
  <div class="row no-gutter vh-100">
    <div class="col-md-6 col-lg-6 col-xl-6 bg-white">
      <div class="login d-flex align-items-center vh-100">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
              <h3>Login to <strong>Admin</strong></h3>
              <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
              <div class="form-group first">
                <label for="username" class="mb-2">Username</label>
                <input type="text" class="form-control" placeholder="your-email@gmail.com" id="username">
              </div>
              <div class="form-group last my-3">
                <label for="password" class="mb-2">Password</label>
                <input type="password" class="form-control" placeholder="Your Password" id="password">
              </div>
              <div class="d-flex mb-5 align-items-center">
                <label class="ckbox">
                  <input checked="" type="checkbox"><span>Remember me</span>
                </label>
                <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password?</a></span>
              </div>
              <input type="submit" value="Log In" class="btn btn-block btn-primary w-100">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-6 col-xl-6 d-none d-md-flex bg-primary-transparent">
      <img src="../../../assets/images/img.png" class="img-fluid " alt="">
      alt="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style lang="scss" scoped>
:root {
  overflow-x: hidden;
}
.ckbox {
  span {
    padding-left: 10px;
    vertical-align: text-bottom;
  }
}
.forgot-pass{
  text-decoration: none;
  color: #14122d;
  font-weight: 700;
  &:hover{
    color: #0162e8
  }
  &:focus{
    color: #0162e8
  }
}
</style>