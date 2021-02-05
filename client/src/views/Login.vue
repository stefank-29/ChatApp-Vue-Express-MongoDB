<template>
    <div class="inner">
        <form action="/register" class="form card">
            <h2>Login</h2>
            <label for="username">Username*</label>
            <input type="text" name="username" required />
            <label for="password">Password*</label>
            <input type="password" name="password" required />
            <input type="submit" value="Log In" name="login" class="button save" />
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
