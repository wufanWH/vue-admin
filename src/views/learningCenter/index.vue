<template>
    <div class="learning-center">
        <el-row class="top-learn-info">
            <el-col :span="12">
                <div class="grid-content bg-purple score-charts">
                    <p>学分、学时展示</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <div class="top-box box-top-1">

                    </div>
                    <div class="top-box box-top-2">

                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <div class="top-box box-top-3">

                    </div>
                    <div class="top-box box-top-4">

                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="learn-content">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <div class="learning bg-white">
                        <div class="learning-title">
                            <span>进行中</span>
                        </div>
                        <div class="type-content">
                            <ul>
                                <li>1</li>
                            </ul>
                        </div>
                    </div>
                    <div class="news bg-white">
                        <div class="learning-title">
                            <span>最新项目</span>
                        </div>
                        <div class="type-content">
                            <ul>
                                <li>1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div class="learning-announcement bg-white">
                        <div class="right-colums-title">
                            <span>公告</span>
                        </div>
                        <div class="colum-list">
                            <ul>
                                <li>1</li>
                            </ul>
                        </div>
                    </div>
                    <div class="learing-history bg-white">
                        <div class="right-colums-title">
                            <span>学习历史</span>
                        </div>
                        <ul class="history-steps">
                           <li><i class="icon-circle"></i><span class="span-topic">中材国际（南京）中青年创新能力创新能力</span><span class="time">2015-09-01</span></li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import '../../styles/learningCenter.scss';
</style>


