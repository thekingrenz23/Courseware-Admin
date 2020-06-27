<template>
    <div>
       
    </div>
</template>
<script>
export default{
    created(){
        this.$store.dispatch('updateLoginAction', false)
        this.$store.dispatch('updateUserDataAction', null)
        this.$router.push('/login')
    }
}
</script>