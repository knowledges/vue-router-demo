<template>
    <li>
        <a class="tab-item" v-link="{path: path, activeClass: active, replace: true}" v-text="label"></a>
    </li>
</template>

<script>
    export default {
        props: {
            path: '',
            label: ''
        },
    }
</script>
<style scroped>
</style>
