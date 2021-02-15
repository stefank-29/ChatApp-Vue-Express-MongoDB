<template>
    <div class="home">
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
