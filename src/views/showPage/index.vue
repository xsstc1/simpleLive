<template>
    <div>

        <div class="index-bg w">
            <div class="container">
                <header class="index-header w color-white cb">
                    <img style="width:80px" class="fl" src="http://www.kzb.life/image/logo.png" alt="">
                    <div class="fl ml-10 mt-20 header-title">
                        <span class="f32">名模直播</span>
                    </div>

                </header>
                <div class="cb">
                    <div class="w70 fl" v-if="showOrNot">
                        <video-player @ended="onPlayerEnded($event)" class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true" customEventName="customstatechangedeventname">
                        </video-player>
                    </div>
                    <div class="fl header-left">
                        <el-row :gutter="10">

                            <el-col :span="12" v-for="data of headerImg" :key="data.id">
                                <div class="pr oh cp header-img" @click="showDIalog">
                                    <div class="left-shadow"></div>
                                    <img class="w" :src="data.img_url" alt="">
                                </div>
                            </el-col>

                        </el-row>
                    </div>
                </div>

            </div>

        </div>
        <div class="container pb-50">
            <div>
                <nav class="f20 mt-50 cb"><img class="nav-i fl mr-15" src="http://www.kzb.life/image/ts-star-2.svg">
                    <span class="fl color-6">{{firstTitle}}</span>
                </nav>
            </div>
            <div class="mt-50">
                <el-row :gutter="10">

                    <el-col :span="4" v-for="data of recommendImg" :key="data.id">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <div class="content-img"><img class="w " :src="data.img_url" alt=""></div>
                            <div class="p15">{{data.name}}</div>
                        </div>
                    </el-col>

                </el-row>

            </div>
        </div>
        <div class="index-puple w">
            <div class="container pt-50 pb-50">
                <div>
                    <nav class="f20 cb mb-40"><img class="nav-i fl mr-15" src="http://www.kzb.life/image/ts-lightning-2.svg">
                        <span class="fl color-6">{{secondTitle}}</span>
                    </nav>
                </div>
                <el-row :gutter="10">
                    <el-col :span="4" v-for="data of hotImg" :key="data.id">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <div class="content-img"><img class="w " :src="data.img_url" alt=""></div>
                            <div class="p15">{{data.name}}</div>
                        </div>
                    </el-col>

                </el-row>

            </div>
        </div>
        <div class="container pb-50">
            <div>
                <nav class="f20 mt-50 cb"><img class="nav-i fl mr-15" src="http://www.kzb.life/image/ts-color-plate.svg">
                    <span class="fl color-6">{{thirdTitle}}</span>
                </nav>
            </div>
            <div class="mt-50">
                <el-row :gutter="10">
                    <el-col :span="4" v-for="data of likeImg" :key="data.id">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <div class="content-img"><img class="w " :src="data.img_url" alt=""></div>
                            <div class="p15">{{data.name}}</div>
                        </div>
                    </el-col>

                </el-row>

            </div>
        </div>
        <div class="container pb-50">
            <div>
                <nav class="f20 mt-50 cb"><img class="nav-i fl mr-15" src="http://www.kzb.life/image/ts-star-2.svg">
                    <span class="fl color-6">{{forthTitle}}</span>
                </nav>
            </div>
            <div class="mt-50">
                <el-row :gutter="10">
                    <el-col :span="4" v-for="data of followImg" :key="data.id">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <div class="content-img"><img class="w " :src="data.img_url" alt=""></div>
                            <div class="p15">{{data.name}}</div>
                        </div>
                    </el-col>

                </el-row>

            </div>
        </div>
        <footer class="footer mt-50">
            <div class="container wrap_footer">
                <div class="page_foot mt-30 tc">

                    <div class="item color-6 f14">
                        <span class="mr-10">浙ICP备10213853号-8</span>
                        <!--|<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010502000565">浙公网安备 33010502000565号</a>-->
                        |
                        <span class="ml-10 mr-10">浙网文[2017]7731-557号</span>
                        |
                        <span class="ml-10 mr-10">增值电信业务经营许可证：浙B2-20110029</span>
                        |
                        <span class="ml-10">12318全国文化市场举报网站链接</span>
                    </div>
                    <div class="item mt-15 color-6">
                        <span class="license_box box1" target="_blank"></span>
                        <span class="line mr-10 ml-10">|</span>
                        <span class="license_box box2" target="_blank"></span>
                        <span class="line mr-10 ml-10">|</span>
                        <span class="license_box box3" target="_blank"></span>

                    </div>
                </div>
            </div>

        </footer>
        <div class="fix-left" v-if="showOrNot">
            <div>
                <a href="http://www.783882.com/PageRegister?Agent=evan123" target="_blank"><img class="w" src="http://www.kzb.life/image/bjl.png"></a>
            </div>
            <div class="mt-10">
                <a href="http://www.bg56777.com" target="_blank"><img class="w" src="http://www.kzb.life/image/bogou.png"></a>
            </div>
            <div class="mt-10">
                <a href="http://www.783882.com/PageRegister?Agent=evan123" target="_blank"><img class="w" src="http://www.kzb.life/image/bjl.png"></a>
            </div>
        </div>
        <div class="fix-right" v-if="showOrNot">
            <div>
                <a href="http://www.bg56777.com" target="_blank"><img class="w" src="http://www.kzb.life/image/bogou.png"></a>
            </div>
            <div class="mt-10">
                <a href="http://www.783882.com/PageRegister?Agent=evan123" target="_blank"><img class="w" src="http://www.kzb.life/image/bjl.png"></a>
            </div>
            <div class="mt-10">
                <a href="http://www.bg56777.com" target="_blank"><img class="w" src="http://www.kzb.life/image/bogou.png"></a>
            </div>
        </div>
        <el-dialog title="请完成付费" :visible.sync="dialogVisible" width="30%">
            <span> 扫码付费观看</span>
            <div class="mt-20">
                <img class="w" :src="qrImg">
            </div>

        </el-dialog>
    </div>

</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
var data = [];
var now = new Date();
var value = Math.random() * 1000;
export default {
    data() {
        return {
            showOrNot: true,
            firstTitle: "",
            secondTitle: "",
            thirdTitle: "",
            forthTitle: "",
            followImg: [],
            headerImg: [],
            titleData: [],
            recommendImg: [],
            likeImg: [],
            hotImg: [],
            qrImg: "",
            videoUrl: "",
            dialogVisible: false,
            intervalid: {},
            intervalidPic: {},
            page: 1,
            total: 0,
            PI: 3.1415926535897932384626,
            ee: 0.00669342162296594323,
            aData: 6378245.0,
            activeIndex: 1,
            dialogVisible: false,
            projectData: [],
            searchData: {
                phone: "",
                date: "",
                password: ""
            },
            playerOptions: {
                // videojs options

                muted: false,
                autoplay: true,
                loop: true,
                replay: true,
                language: "en",
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [
                    {
                        type: "video/mp4",
                        src: ""
                    }
                ],
                poster: "/static/images/author.jpg"
            }
        };
    },
    components: {
        // "cd-header": header,
        // "cd-footer": footer
        videoPlayer
    },
    mounted() {
        // this.getAll()
        this.getQrImg();
        this.getVideo();
        this.getHeaderImg();
        this.getRecommendImg();
        this.getHotImg();
        this.getlikeImg();
        this.getFollowImg();
        this.getTitle();
    },

    methods: {
        getTitle() {
            this.publicFun.httpNode(
                "get",
                "live/getTitle",
                null,
                (status, data, message) => {
                    if (status == 200) {
                        this.titleData = data;
                        data.forEach(item => {
                            if (item.title_id == 1) {
                                this.firstTitle = item.title_name;
                            } else if (item.title_id == 2) {
                                this.secondTitle = item.title_name;
                            } else if (item.title_id == 3) {
                                this.thirdTitle = item.title_name;
                            } else if (item.title_id == 4) {
                                this.forthTitle = item.title_name;
                            }
                        });
                    } else {
                        this.$message.error(message);
                    }
                }
            );
        },
        getFollowImg() {
            this.publicFun.httpNode(
                "get",
                "live/getImg?classifyId=4",
                null,
                (status, data, message) => {
                    if (status == 200) {
                        this.followImg = data;
                    } else {
                        this.$message.error(message);
                    }
                }
            );
        },
        getlikeImg() {
            this.publicFun.httpNode(
                "get",
                "live/getImg?classifyId=3",
                null,
                (status, data, message) => {
                    if (status == 200) {
                        this.likeImg = data;
                    } else {
                        this.$message.error(message);
                    }
                }
            );
        },
        getHotImg() {
            this.publicFun.httpNode(
                "get",
                "live/getImg?classifyId=2",
                null,
                (status, data, message) => {
                    if (status == 200) {
                        this.hotImg = data;
                    } else {
                        this.$message.error(message);
                    }
                }
            );
        },
        getRecommendImg() {
            this.publicFun.httpNode(
                "get",
                "live/getImg?classifyId=1",
                null,
                (status, data, message) => {
                    if (status == 200) {
                        this.recommendImg = data;
                    } else {
                        this.$message.error(message);
                    }
                }
            );
        },
        getHeaderImg() {
            this.publicFun.httpNode(
                "get",
                "live/getImg?classifyId=5",
                null,
                (status, data, message) => {
                    if (status == 200) {
                        this.headerImg = data;
                    } else {
                        this.$message.error(message);
                    }
                }
            );
        },
        getVideo() {
            this.publicFun.httpNode(
                "get",
                "live/getVideo",
                null,
                (status, data, message) => {
                    if (status == 200) {
                        this.playerOptions.sources[0].src = data[0].video_url;
                    } else {
                        this.$message.error(message);
                    }
                }
            );
        },
        showDIalog() {
            this.dialogVisible = true;
        },
        onRegister() {
            this.$router.push({ path: "/register" });
        },
        getQrImg() {
            this.publicFun.httpNode(
                "get",
                "qiniu/getQrImg",
                null,
                (status, data, message) => {
                    if (status == 200) {
                        this.qrImg = data[0].img_url;
                    } else {
                        this.$message.error(message);
                    }
                }
            );
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
body
    background-color #f1f1f1
    // background url('http://www.kzb.life/image/zb_bg.jpg')
.header-img
    width 142.5px
    height 142.5px
    overflow hidden
.content-img
    width 186.66px
    height 186.66px
    overflow hidden
.el-col-4
    margin-top 20px
.fix-left
    width 250px
    position fixed
    left 20px
    top 100px
.fix-right
    width 250px
    position fixed
    right 20px
    top 100px
.footer
    // background url('http://www.kzb.life/image/bg.jpg')
.index-puple, .nav-i
    width 30px
.left-shadow
    background-color rgba(119, 58, 197, 0.3)
    width 100%
    height 100%
    position absolute
.left-img
    margin-top 6px
.header-left
    padding-left 25px
    width 320px
.index-header
    margin-bottom 20px
    img
        width 120px
    .header-title
        margin-top 20px
        font-size 16px
.video-js
    width 100% !important
    height 450px
.index-bg
    background url('http://img.airtoy.cn/footer_bg.jpg')
    height 680px
    padding-top 30px
.phone-input
    margin-top 200px
    width 50%
#myChart, #acceleration
    height 400px
#mapContent
    width 300px
    height 600px
.box1
    background url('http://www.kktv5.com/images/license.gif') no-repeat
    width 35px
    height 35px
    background-position 0 -2px
    vertical-align middle
    display inline-block
.box2
    background url('http://www.kktv5.com/images/license.gif') no-repeat
    width 35px
    height 35px
    background-position 0 -35px
    vertical-align middle
    display inline-block
.box3
    background url('http://www.kktv5.com/images/license.gif') no-repeat
    width 35px
    height 35px
    background-position 0 -71px
    vertical-align middle
    display inline-block
.wrap_footer
    border-top 1px solid #d8d8d8
</style>
