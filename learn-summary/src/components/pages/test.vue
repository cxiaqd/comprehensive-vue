<template>
   <div id="areacam_table">
     <el-table
       ref="table"
       force-scroll="horizontal"
       :data="tableInfo"
       @selection-change="handleSelectionChange"
       v-if="!show"
     >
       <el-table-column width="60" type="selection"></el-table-column>
       <el-table-column
         prop="sbbh"
         label="卡口编号"
         min-width="150"
       ></el-table-column>
       <el-table-column
         prop="sbmc"
         label="卡口名称"
         min-width="150"
       ></el-table-column>
       <el-table-column
         prop="sblb"
         label="卡口类别"
         min-width="150"
       ></el-table-column>
       <el-table-column
         prop="xzqhmc"
         label="行政区划名称"
         min-width="150"
       ></el-table-column>
       <el-table-column prop="jd" label="经度" min-width="150"></el-table-column>
       <el-table-column prop="wd" label="纬度" min-width="150"></el-table-column>
       <el-table-column
         prop="sjly"
         label="区域来源"
         min-width="150"
       ></el-table-column>
       <el-table-column
         prop="yxbz"
         label="有效标识"
         min-width="150"
       ></el-table-column>
       <el-table-column prop="bz" label="备注" min-width="150"></el-table-column>
       <el-table-column label="操作" fixed="right" width="150">
         <template slot-scope="scope">
           <el-button type="link" @click="detailClick(scope)">详情</el-button>
           <i>&nbsp;|&nbsp;</i>
           <!-- <i v-if="tableInfo[scope.$index].qs">|</i> -->
           <!-- <el-button type="link" v-if="tableInfo[scope.$index].qs"> -->
           <el-button type="link" @click="editData(scope)">编辑</el-button>
           <i>&nbsp;|&nbsp;</i>
           <el-button type="link" @click="deleteData(scope)">删除</el-button>
         </template>
       </el-table-column>
     </el-table>
     <div class="detail_show" v-if="show">
       <div class="nav_title">
         <img src="@/assets/images/arrowLeft.png" @click="show = false" />
         <span>&nbsp;&nbsp;详情</span>
       </div>
       <div class="detail_box" style="">
         <div>
           <el-row>
             <el-col v-for="(value, key) in detailData" :key="key" :span="12">
               <div class="detail_content" v-if="key in tableHead">
                 <p :title="tableHead[key]" style="width: 180px">
                   {{ tableHead[key] }}：
                 </p>
                 <p :title="value">
                   {{ value }}
                 </p>
               </div>
             </el-col>
           </el-row>
         </div>
       </div>
     </div>
   </div>
 </template>
   <script>
 import dataReportApi from '@/api/datareport.js';
 
 export default {
   name: 'vue',
   data() {
     return {
       detailData: {},
       show: false,
       requestKey: '',
       deleteFlag: false,
       editFlag: false,
       deleteIds: []
     };
   },
   props: {
     tableHead: [],
     tableInfo: [],
     typeKey: '',
     nOrd: null,
     subOrd: null,
     siNOrd: null
   },
   components: {},
   methods: {
     handleSelectionChange(select) {
       this.deleteIds = select;
     },
     detailClick(scope) {
       this.detailData = scope.row;
       this.show = true;
     },
     deleteData(scope) {
       if (scope.row.id) {
         this.deleteIds[0] = scope.row.id;
       }
       let parms = {
         ids: this.deleteIds
       };
       dataReportApi.commonDelete(parms, this.typeKey).then(res => {
         if (res.code == 0) {
           this.deleteFlag = true;
           this.$emit('delTabItemEmit', [this.nOrd, this.subOrd, this.siNOrd]);
           this.$message({
             type: 'success',
             message: '删除成功!'
           });
         } else {
           this.$message({
             type: 'warning',
             message: '删除失败!'
           });
         }
         console.log(res);
       });
     },
     editData(scope) {
       this.$emit('EditTabItemEmit', scope);
     },
     tableTranslate(data) {
      console.log(data);
      data.forEach(item => {
        switch (item.yxbz) {
          case 0:
            item.yxbz = '无效';
          case 1:
            item.yxbz = '有效';
            break;
          default:
            return;
        }
        switch (item.zjlx) {
          case '111':
            item.zjlx = '身份证';
            break;
          case '113':
            item.zjlx = '学生证';
            break;
          case '114':
            item.zjlx = '军官证';
            break;
          case '116':
            item.zjlx = '暂住证';
            break;
          case '123':
            item.zjlx = '警官证';
            break;
          case '131':
            item.zjlx = '工作证';
            break;
          case '133':
            item.zjlx = '学生证';
            break;
          case '335':
            item.zjlx = '驾驶证';
            break;
          default:
            return;
        }
        if (this.currentKey == '易倾倒区域') {
          switch (item.dzlb) {
            case 1:
              item.dzlb = '易倾倒';
              break;
            case 2:
              item.dzlb = '历史倾倒';
              break;
            case 3:
              item.dzlb = '市边界收费站';
              break;
            case 4:
              item.dzlb = '省边界收费站';
              break;
            default:
              return;
          }
          switch (item.sjly) {
            case 1:
              item.sjly = '历史案件';
              break;
            case 2:
              item.sjly = '基层采集';
              break;
            case 3:
              item.sjly = '其它';
              break;
            default:
              return;
          }
        }
        if (this.currentKey == '企业信息') {
          switch (item.dwlx) {
            case 1:
              item.dwlx = '产废';
              break;
            case 2:
              item.dwlx = '处废';
              break;
            case 3:
              item.dwlx = '运输';
              break;
            case 4:
              item.dwlx = '建筑垃圾';
              break;
            case 5:
              item.dwlx = '在线监测';
              break;
            default:
              return;
          }
          switch (item.sjly) {
            case 1:
              item.sjly = '环保部门';
              break;
            case 2:
              item.sjly = '经侦';
              break;
            case 3:
              item.sjly = '治安';
              break;
            case 4:
              item.sjly = '其它';
              break;
            default:
              return;
          }
        }
        if (this.currentKey == '环境类企业从业人员') {
          switch (item.dwlb) {
            case 1:
              item.dwlb = '产废';
              break;
            case 2:
              item.dwlb = '处废';
              break;
            case 3:
              item.dwlb = '运废';
              break;
            default:
              return;
          }
          switch (item.rylb) {
            case 1:
              item.rylb = '法人';
              break;
            case 2:
              item.rylb = '环保负责人';
              break;
            case 3:
              item.rylb = '职员';
              break;
            default:
              return;
          }
        }
        if (this.currentKey == '重点前科人员') {
          switch (item.rylb) {
            case 1:
              item.rylb = '前科处罚人员';
              break;
            case 2:
              item.rylb = '其它重点人员';
              break;
            default:
              return;
          }
        }
        if (this.currentKey == '重点车辆驾驶人员') {
          switch (item.rylb) {
            case 1:
              item.rylb = '驾驶重点车辆';
              break;
            case 2:
              item.rylb = '重点人员关联车辆';
              break;
            case 3:
              item.rylb = '违章处罚';
              break;
            case 4:
              item.rylb = '其它';
              break;
            default:
              return;
          }
        }
        if (this.currentKey == '重点车辆') {
          switch (item.sjly) {
            case 1:
              item.sjly = '联单车辆';
              break;
            case 2:
              item.sjly = '渣土车';
              break;
            case 3:
              item.sjly = '前科人员关联';
              break;
            case 4:
              item.sjly = '重点人员关联';
              break;
            case 5:
              item.sjly = '油罐车';
              break;
            case 6:
              item.sjly = '危化运输车';
              break;
            default:
              return;
          }
          switch (item.hpys) {
            case 0:
              item.hpys = '蓝色';
              break;
            case 1:
              item.hpys = '黄色';
              break;
            case 2:
              item.hpys = '绿色';
              break;
            case 3:
              item.hpys = '黑色';
              break;
            case 4:
              item.hpys = '白色';
              break;
            case 5:
              item.hpys = '大型新能源';
              break;
            case 6:
              item.hpys = '小型新能源';
              break;
            case 7:
              item.hpys = '其它';
              break;
            default:
              return;
          }
        }

        if (this.currentKey == '区域关联的卡口') {
          switch (item.sblb) {
            case 1:
              item.sblb = '市际卡口';
              break;
            case 2:
              item.sblb = '省际卡口';
              break;
            case 3:
              item.sblb = '企业卡口';
              break;
            case 4:
              item.sblb = '易倾倒区域卡口';
              break;
            default:
              return;
          }
        }
        if (this.currentKey == '案件') {
          switch (item.ajlb) {
            case 1:
              item.ajlb = '邢事';
              break;
            case 2:
              item.ajlb = '行政';
              break;
            default:
              return;
          }
        }
      });
      console.log(data);
    }
   },
   mounted() {},
   computed: {}
 };
 </script>
   <style scoped lang="scss">
 .detail_show {
   height: 100%;
   width: 100%;
   background: #e5e5e5;
 
   position: absolute;
   left: 0;
   top: 0;
   z-index: 999;
   .nav_title {
     height: 40px;
     width: 100%;
     display: flex;
     align-items: center;
     font-size: 14px;
     background: #fff;
     border-bottom: 1px solid #e5e5e5;
     img{
       width: 20px;
     }
   }
   .detail_box {
     height: calc(100% - 40px);
     width: 80%;
     margin-left: 50%;
     transform: translateX(-50%);
   background: #fff;
 
   }
   .detail_content {
     display: flex;
     margin-left: 100px;
     margin-top: 10px;
     p {
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
       padding: 10px 0;
       font-weight: 600;
       font-size: 18px;
       color: #4a4a4a;
     }
   }
 }
 </style>