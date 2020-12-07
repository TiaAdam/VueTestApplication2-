<template>
    <div id="nav-bar">
        <router-link to="/products" id="products-link">
            <h1>GOLDEN INDIE</h1>
        </router-link>
        <router-link to="/cart" id="cart-link">
            <button>Your Films</button>
        </router-link>
        <router-link to="/login" id="login-link">
            <button>Login</button>
        </router-link>
        <router-link to="/register" id="register-link">
            <button>Register</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    
}
</script>

<style scoped>
  #nav-bar {
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
  }

  #products-link {
    text-align: center;
    display: block;
    color: black;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0;
  }

  #cart-link {
    position: absolute;
    right: 16px;
    top: 16px;
  }

  #login-link{
    position: absolute;
    left: 750px;
    top: 16px;
  }

  #register-link{
    position: absolute;
    left: 650px;
    top: 16px;
  }
</style>

