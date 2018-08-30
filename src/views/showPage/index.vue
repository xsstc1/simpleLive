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
                                <div class="proh cp" @click="showDIalog">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col :span="12">
                                <div class="pr oh cp" @click="showDIalog">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/4/100803678_4617770.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col class="left-img" :span="12">
                                <div class="pr oh cp" @click="showDIalog">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180824/15/138242991_3952279.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col class="left-img" :span="12">
                                <div class="pr oh cp" @click="showDIalog">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/21/137066102_196792.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col class="left-img" :span="12">
                                <div class="pr oh cp" @click="showDIalog">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20180601/17/136399297_491787.jpg!256" alt="">
                                </div>

                            </el-col>
                            <el-col class="left-img" :span="12">
                                <div class="pr oh cp" @click="showDIalog">
                                    <div class="left-shadow"></div>
                                    <img class="w " src="http://ures.kktv8.com/kktv/poster/20171026/15/130595151_144713.jpg!256" alt="">
                                </div>

                            </el-col>

                        </el-row>
                    </div>
                </div>

            </div>

        </div>
        <div class="container pb-50">
            <div>
                <nav class="f20 mt-50 cb"><img class="nav-i fl mr-15" src="http://img.airtoy.cn/ts-star-2-1.svg">
                    <span class="fl color-white"> 精选推荐</span>
                </nav>
            </div>
            <div class="mt-50">
                <el-row :gutter="10">

                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180714/13/135101918_2356531.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180319/15/133631729_312585.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180808/15/98970688_180269.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/13/130358746_4213669.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180824/12/138185872_2551443.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180821/15/138461918_527491.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="mt-30">
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180814/1/138287835_1333670.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180824/0/138214356_321671.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180828/10/134724278_1418420.jpg!256" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180806/19/132442228_5212233.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180608/17/66816780_834801.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180802/15/98018152_1227408.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
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
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180821/9/136660309_242460.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180823/18/138575658_32771.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180420/12/128053253_949163.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180705/18/137366182_236737.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180403/8/130318528_4534971.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180827/15/136933862_3213767.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="mt-30">
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180828/10/138609978_5619769.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180801/11/137983551_3520968.png!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180724/23/136723467_4346502.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180803/19/138037478_517158.png!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180813/23/129945928_5539719.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180811/17/130008053_4234298.png!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="container pb-50">
            <div>
                <nav class="f20 mt-50 cb"><img class="nav-i fl mr-15" src="http://img.airtoy.cn/ts-color-plate%20%281%29.svg">
                    <span class="fl color-white"> 大家喜欢的</span>
                </nav>
            </div>
            <div class="mt-50">
                <el-row :gutter="10">
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20170702/10/104122436_2534188.png!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180822/9/138442379_352246.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180813/15/135458516_507905.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20171124/18/108203852_401551.png!300" alt="">
                        <div class="p15">夏凡年度首战不一样</div></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180627/14/131541803_4920816.jpg!300" alt="">
                        <div class="p15">夏凡年度首战不一样</div></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180826/15/138627450_418281.jpg!300" alt="">
                        <div class="p15">夏凡年度首战不一样</div></div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="mt-30">
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180806/15/138111146_2323680.png!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180709/13/130867510_363601.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180825/10/138620876_3635198.png!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180720/18/135155657_573924.jpg!300" alt="">
                        <div class="p15">夏凡年度首战不一样</div></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180824/12/138185872_2551443.jpg!300" alt="">
                        <div class="p15">夏凡年度首战不一样</div></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180424/2/130867167_1739175.jpg!300" alt="">
                        <div class="p15">夏凡年度首战不一样</div></div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="mt-30">
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180825/15/138442232_5930621.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20171124/17/132195579_5928989.png!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180805/15/137993738_435368.jpg!300" alt="">
                            <div class="p15">夏凡年度首战不一样</div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180803/19/138037478_517158.png!300" alt="">
                        <div class="p15">夏凡年度首战不一样</div></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180828/13/138609311_3349949.jpg!300" alt="">
                        <div class="p15">夏凡年度首战不一样</div></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="pr bg-color-white radius5 oh cp" @click="showDIalog">
                            <img class="w " src="http://ures.kktv8.com/kktv/poster/20180117/23/116934545_1229552.jpg!300" alt="">
                        <div class="p15">夏凡年度首战不一样</div></div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <footer class="footer mt-50">
            <div class="container  bt-1 wrap_footer">
                <div class="page_foot mt-30 tc">

                    <div class="item color-white f14">
                        <span class="mr-10">浙ICP备10213853号-8</span>
                        <!--|<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010502000565">浙公网安备 33010502000565号</a>-->
                        |
                        <span class="ml-10 mr-10">浙网文[2017]7731-557号</span>
                        |
                        <span class="ml-10 mr-10">增值电信业务经营许可证：浙B2-20110029</span>
                        |
                        <span class="ml-10">12318全国文化市场举报网站链接</span>
                    </div>
                    <div class="item mt-15 color-white">
                        <span class="license_box box1" target="_blank"></span>
                        <span class="line mr-10 ml-10">|</span>
                        <span class="license_box box2" target="_blank"></span>
                        <span class="line mr-10 ml-10">|</span>
                        <span class="license_box box3" target="_blank"></span>

                    </div>
                </div>
            </div>

        </footer>
        <div class="fix-left">
            <div><a href="http://www.783882.com/PageRegister?Agent=evan123" target="_blank"><img class="w" src="http://img.airtoy.cn/bjl.png"></a></div>
            <div class="mt-10"><a href="http://www.bg56777.com" target="_blank"><img class="w" src="http://img.airtoy.cn/bogou.png"></a></div>
            <div class="mt-10"><a href="http://www.783882.com/PageRegister?Agent=evan123" target="_blank"><img class="w" src="http://img.airtoy.cn/bjl.png"></a></div>
        </div>
        <div class="fix-right">
            <div><a href="http://www.bg56777.com" target="_blank"><img class="w" src="http://img.airtoy.cn/bogou.png"></a></div>
            <div class="mt-10"><a href="http://www.783882.com/PageRegister?Agent=evan123" target="_blank"><img class="w" src="http://img.airtoy.cn/bjl.png"></a></div>
            <div class="mt-10"><a href="http://www.bg56777.com" target="_blank"><img class="w" src="http://img.airtoy.cn/bogou.png"></a></div>
        </div>
        <el-dialog title="请完成付费" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span> 扫码付费观看</span>
            <div class="mt-20">
                <img class="w" :src="qrImg">
            </div>

        </el-dialog>
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
      qrImg: '',
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
    this.getQrImg()
  },

  methods: {
    showDIalog() {
      this.dialogVisible = true
    },
    onRegister() {
      this.$router.push({ path: '/register' })
    },
    getQrImg() {
      this.publicFun.httpNode(
        'get',
        'qiniu/getQrImg',
        null,
        (status, data, message) => {
          if (status == 200) {
            this.qrImg = data[0].img_url
          } else {
            this.$message.error(message)
          }
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
body
    background url('http://img.airtoy.cn/bg_all.jpg')
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
    // background url('http://img.airtoy.cn/bg.jpg')
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
        margin-top 5px
        font-size 16px
.video-js
    width 100% !important
    height 450px
.index-bg
    // background url('http://img.airtoy.cn/footer_bg.jpg')
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
</style>
