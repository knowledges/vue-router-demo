<template>
    <div class="row">
        <div class="carousel slide">
            <div class="carousel-inner clearfix">
                <div class="item active">
                    <img src="/assets/img/005.jpg" alt="...">
                    <div class="carousel-caption">
                        <h1>The First slide</h1>
                    </div>
                </div>
                <div class="item ">
                    <img src="/assets/img/001.jpg" alt="...">
                    <div class="carousel-caption">
                        <h1>The Sencond slide</h1>
                    </div>
                </div>
                <div class="item ">
                    <img src="/assets/img/002.jpg" alt="...">
                    <div class="carousel-caption">
                        <h1>The Third slide</h1>
                    </div>
                </div>
            </div>
            <!-- Controls -->
            <a href="javascript:;;" class="left carousel-control" v-link:click="" role="button" data-slide="prev">
                <span class="arrow left-icon"></span>
            </a>
            <a href="javascript:;;" class="right carousel-control" v-link:click="" role="button" data-slide="next">
                <span class="arrow right-icon"></span>
            </a>
        </div>
    </div>
</template>
<style scoped>

    .slide{
        display: inline-block;
        width: 100%;
        height: 360px;
        overflow: hidden;
    }
    .arrow{
        display: inline-block;
        width: 36px;
        height: 72px;
        margin-top: 70%;
    }
    .left-icon {
        background: url(/assets/img/left_arrow.png) no-repeat;
    }
    .right-icon{
        background: url(/assets/img/right_arrow.png) no-repeat;
    }
</style>