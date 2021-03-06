import Vue from 'vue'
//  图片处理
Vue.filter('imgDetail', (value) => {
  // 返回处理后的价格
  if (value !== undefined) {
    value = `/attachment/${value}`
    return value
  }
})
//  运费处理
Vue.filter('freight', (value) => {
  let val = '包邮'
  // 返回处理后的价格
  if (value !== undefined) {
    if (value === '') {
      val = '包邮'
    }
    if (value.target_money) {
      val = `满${value.target_money}包邮`
    }
    if (value.money) {
      val = `￥${(value.money * 100 / 100).toFixed(2)}起`
    }
    if (value.freight) {
      val = `￥${(value.freight * 100 / 100).toFixed(2)}`
    }
    return val
  }
})
// 单个价格处理
Vue.filter('price', (value) => {
  // 返回处理后的价格
  if (value !== undefined) {
    value = '￥' + (value * 100 / 100).toFixed(2)
    return value
  }
})
// 单个积分处理
Vue.filter('score', (value) => {
  // 返回处理后的价格
  if (value !== undefined) {
    value = (value * 100 / 100)
    return value
  }
})
// 价格除以100
Vue.filter('detailPrice', (value) => {
  if (value !== undefined) {
    value = '￥' + (value / 100).toFixed(2)
    return value
  }
})
// 保留两位小数
Vue.filter('stock', (value) => {
  if (value !== undefined) {
    value = Math.floor(value)
    return value
  }
})
// 针对价格区间的处理
Vue.filter('priceRange', (value) => {
  // 返回处理后的价格区间
  let newValue = []
  if (value !== undefined) {
    if (value.toString().indexOf(',') !== -1) {
      value = value.split(',')
      newValue = value.map((val) => {
        val = '￥' + (val * 100 / 100).toFixed(2)
        return val
      })
      newValue = newValue.join(' - ')
      return newValue
    } else {
      value = '￥' + (value * 100 / 100).toFixed(2)
      return value
    }
  }
})
// 针对规格数组显示进行处理
Vue.filter('spec', (value) => {
  if (value !== undefined) {
    let val = value.join('-')
    return val
  }
})
// 处理支付方式
Vue.filter('payway', (value) => {
  let val = '在线支付'
  if (value !== undefined) {
    switch (value) {
      case 0:
        val = '支付宝支付'
        break
      case 1:
        val = '微信支付'
        break
      case 2:
        val = '积分兑换'
        break
      case 3:
        val = '在线支付'
        break
      case 4:
        val = '余额支付'
        break
      default:
        val = '在线支付'
    }
    return val
  }
})
// 微商城和门店操作端口区别
Vue.filter('terminalName', (value) => {
  let val = '微商城'
  if (value !== undefined) {
    if (value === 'wsc') {
      val = '微商城'
    } else if (value === null) {
      val = '后台充值'
    } else {
      val = value
    }
  }
  return val
})
//  区别微信支付和支付宝支付
Vue.filter('onlinePayway', (value) => {
  let val = '支付宝'
  if (value !== undefined) {
    switch (value) {
      case 'alipay':
        val = '支付宝'
        break
      case 'weixin':
        val = '微信'
        break
      case 'cash':
        val = '现金'
        break
      case 'post':
        val = 'post刷卡'
        break
      case 'balance':
        val = '余额支付'
        break
      default:
        val = '支付宝'
    }
    return val
  }
})
// 订单状态方式处理
Vue.filter('orderStatus', (value) => {
  let val = '待支付'
  if (value !== undefined) {
    switch (value) {
      case 'at00':
        val = '待支付'
        break
      case 'wfs0':
        val = '待发货'
        break
      case 'wfd1':
        val = '待收货'
        break
      case 'wfc0':
        val = '待评价'
        break
      case 'trm0':
        val = '已完成'
        break
      case 'c000':
        val = '已取消'
        break
      case 'rc00':
        val = '待评价'
        break
      case 'r000':
        val = '退款中'
        break
      case 'rs00':
        val = '已退款'
        break
      case 'wfp0':
        val = '待生产'
        break
      case 'kd00':
        val = '待收货'
        break
      case 'gs00':
        val = '待收货'
        break
      case 'ip00':
        val = '生产中'
        break
      case 'sd00':
        val = '待发货'
        break
      case '':
        val = '全部'
        break
      default:
        val = '全部'
    }
    return val
  }
})
