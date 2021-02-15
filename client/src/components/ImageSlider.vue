<template>
    <div id="pageContainer">
        <div id="sliderBg">
            <div id="slider">
                <img :src="`/banners/banner${imageIndex}.jpg`" alt="banner" ref="imageSlider" />
                <span @click="previousImage" class="arrow" id="left"
                    ><i class="fas fa-chevron-left"></i
                ></span>
                <span @click="nextImage" class="arrow" id="right"
                    ><i class="fas fa-chevron-right"></i
                ></span>
                <div id="dots">
                    <i
                        @click="showImageOnDot(index)"
                        :class="circleClass(index)"
                        v-for="index in 8"
                        :key="index"
                        class="far fa-circle"
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageSlider',
    data() {
        return {
            imageIndex: 1,
            interval: 0,
        };
    },
    methods: {
        circleClass(index) {
            return {
                'fa-dot-circle': this.imageIndex === index,
            };
        },
        showNextImg3sec() {
            clearInterval(this.interval);
            this.interval = setInterval(this.nextImage, 2500);
        },

        previousImage() {
            if (this.imageIndex !== 1) {
                this.imageIndex--;
            } else {
                this.imageIndex = 8;
            }
            const imageSlider = this.$refs.imageSlider;
            imageSlider.classList.remove('show');
            setTimeout(function() {
                imageSlider.classList.add('show');
            }, 1);

            this.showNextImg3sec();
        },

        nextImage() {
            if (this.imageIndex !== 8) {
                this.imageIndex++;
            } else {
                this.imageIndex = 1;
            }
            const imageSlider = this.$refs.imageSlider;
            imageSlider.classList.remove('show');
            setTimeout(function() {
                imageSlider.classList.add('show');
            }, 1);

            this.showNextImg3sec();
        },

        showImageOnDot(index) {
            this.imageIndex = index;
            const imageSlider = this.$refs.imageSlider;
            imageSlider.classList.remove('show');
            setTimeout(function() {
                imageSlider.classList.add('show');
            }, 1);

            this.showNextImg3sec();
        },
        changeImageOnButton(e) {
            if (e.key === 'ArrowLeft') {
                this.previousImage();
            }
            if (e.key === 'ArrowRight') {
                this.nextImage();
            }
        },
    },
    created() {
        this.showNextImg3sec();
        window.addEventListener('keydown', this.changeImageOnButton);
    },
};
</script>

<style></style>
