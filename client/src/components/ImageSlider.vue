<template>
    <div id="pageContainer">
        <div id="sliderBg">
            <div id="slider">
                <!-- <img
                    :src="`@/assets/images/banners/banner${imageIndex}.jpg`"
                    alt="image of nature"
                /> -->
                <img :src="`/banners/banner${imageIndex}.jpg`" alt="banner" />
                <span @click="previousImage" class="arrow" id="left"
                    ><i class="fas fa-chevron-left"></i
                ></span>
                <span @click="nextImage" class="arrow" id="right"
                    ><i class="fas fa-chevron-right"></i
                ></span>
                <div id="dots">
                    <i
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
            interval: null,
        };
    },
    methods: {
        circleClass(index) {
            return {
                'fa-dot-circle': this.imageIndex === index,
            };
        },
        showNextImg5sec() {
            clearInterval(interval);
            interval = setInterval(nextImage, 5000);
        },

        previousImage() {
            if (this.imageIndex !== 1) {
                this.imageIndex--;
            } else {
                this.imageIndex = 8;
            }

            sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
            sliderImage.classList.remove('show');
            setTimeout(function() {
                //! forica da se skine i prikaze klasa
                sliderImage.classList.add('show');
            }, 1);

            showNextImg5sec();
        },

        nextImage() {
            if (this.imageIndex !== 8) {
                this.imageIndex++;
            } else {
                this.imageIndex = 1;
            }

            sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
            sliderImage.classList.remove('show');
            setTimeout(function() {
                sliderImage.classList.add('show');
            }, 1);

            showNextImg5sec();
        },

        showImageOnDot(dot) {
            const dotIndex = dot.dataset.index;
            imageIndex = dotIndex;
            _deactivateAllDots();
            sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
            sliderImage.classList.remove('show');
            setTimeout(function() {
                sliderImage.classList.add('show');
            }, 1);
            _activateDot();
            showNextImg5sec();
        },
    },
};
</script>

<style></style>
