<template>
  <div>
    <div class="index-bg w">
      <img class="w" src="../../assets/img/bg.jpg" alt="">
    </div>
    <div class="container pb-50">

    </div>
  </div>
</template>

<script>
var data = [];
var now = new Date();
var value = Math.random() * 1000;
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
                phone: "",
                date: "",
                password: ""
            }
        };
    },
    components: {
        // "cd-header": header,
        // "cd-footer": footer
    },
    mounted() {
        // this.getAll()
    },

    methods: {
        onRegister() {
            this.$router.push({ path: "/register" });
        },
        
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.phone-input
  margin-top 200px
  width 50%
#myChart, #acceleration
  height 400px
#mapContent
  width 300px
  height 600px
</style>
