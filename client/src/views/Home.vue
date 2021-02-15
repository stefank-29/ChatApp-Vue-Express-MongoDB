<template>
    <div class="home">
        <div class="flux">Sneakers Shop</div>
        <ImageSlider />
    </div>
</template>

<script>
// @ is an alias to /src
import ImageSlider from '@/components/ImageSlider';
export default {
    name: 'Home',
    components: {
        ImageSlider,
    },
};
</script>
