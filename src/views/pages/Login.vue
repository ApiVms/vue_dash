<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="card p-4">
          <h1>Login</h1>
          <p class="text-muted">Sign In to your account</p>
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-user"></i></span>
            <input type="text" class="form-control" placeholder="Username">
          </div>
          <div class="input-group mb-4">
            <span class="input-group-addon"><i class="icon-lock"></i></span>
            <input type="password" class="form-control" placeholder="Password">
          </div>
          <div class="row">
            <div class="col-6">
              <button type="button" class="btn btn-primary px-4">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
