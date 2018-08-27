<template>
    <div>

        <div class="index-bg w">
            <div class="container">
                <header class="index-header w color-white cb">
                    <img class="fl" src="http://ares.kktv8.com/kktv/webskin/20180810115542_781.png" alt="">
                    <div class="fl ml-80 header-title">
                        <span class="">首页</span>
                    </div>

                </header>
                <div class="cb">
                    <div class="w70 fl">
                        <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true" customEventName="customstatechangedeventname">
                        </video-player>
                    </div>
                    <div class="fl header-left">
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <div class="pr">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col :span="12">
                                <div class="pr">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col class="left-img" :span="12">
                                <div class="pr">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col class="left-img" :span="12">
                                <div class="pr">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col class="left-img" :span="12">
                                <div class="pr">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col class="left-img" :span="12">
                                <div class="pr">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                                </div>

                            </el-col>

                        </el-row>
                    </div>
                </div>

            </div>

        </div>
        <div class="container pb-50">
            <div>
                <nav class="f20 mt-50 cb"><img class="nav-i fl mr-15" src="http://img.airtoy.cn/ts-color.svg">
                    <span class="fl"> 精选推荐</span>
                </nav>
            </div>
            <div class="mt-50">
                <el-row :gutter="10">
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="mt-5">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                            <div class="mt-5">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                            <div class="mt-5">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="mt-30">
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="mt-5">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                            <div class="mt-5">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                            <div class="mt-5">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="index-puple w">
            <div class="container pt-50 pb-50">
                <div>
                <nav class="f20 cb mb-40"><img class="nav-i fl mr-15" src="http://img.airtoy.cn/ts-lightning.svg">
                    <span class="fl color-white"> 近期最火</span>
                </nav>
            </div>
                <el-row :gutter="10">
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="mt-30">
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
var data = []
var now = new Date()
var value = Math.random() * 1000
export default {
  data() {
    return {
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
        phone: '',
        date: '',
        password: ''
      },
      playerOptions: {
        // videojs options

        muted: false,
        autoplay: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src:
              'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          }
        ],
        poster: '/static/images/author.jpg'
      }
    }
  },
  components: {
    // "cd-header": header,
    // "cd-footer": footer
    videoPlayer
  },
  mounted() {
    // this.getAll()
  },

  methods: {
    onRegister() {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
html
    // background-color #855bd9
.index-puple
    background:url("http://img.airtoy.cn/bg5.jpg")
.nav-i
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
        margin-top 5px
        font-size 16px
.video-js
    width 100% !important
    height 450px
.index-bg
    background url('http://img.airtoy.cn/bg.jpg')
    height 600px
    padding-top 30px
.phone-input
    margin-top 200px
    width 50%
#myChart, #acceleration
    height 400px
#mapContent
    width 300px
    height 600px
</style>
