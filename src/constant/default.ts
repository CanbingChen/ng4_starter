const DEFAULT = {
  count: 10,
  orderStatus: {
    0: '全部',
    200: '审核中',
    201: '审核终止',
    202: '审核终止',
    300: '审核中',
    301: '审核终止',
    302: '审核不通过',
    400: '待商户确认',
    401: '商户确认超时',
    402: '确认未通过',
    500: '待客户签署合同',
    501: '签约超时',
    600: '待平台确认',
    601: '交易失败',
    602: '交易失败',
    700: '交易成功',
    701: '交易失败',
    702: '放款中',
    800: '待上传发货照片',
    801: '上传照片超时'
  },
  statusClassName: {
    200: 'pass',
    201: 'fail',
    202: 'fail',
    300: 'pass',
    301: 'fail',
    302: 'fail',
    400: 'warn',
    401: 'fail',
    402: 'fail',
    500: 'pass',
    501: 'fail',
    600: 'pass',
    601: 'fail',
    602: 'fail',
    700: 'pass',
    701: 'fail',
    702: 'pass',
    800: 'warn',
    801: 'fail'
  },
  orderStatusObj: {
    all: 0,
    searching: 200, // 查询中
    searchTimeout: 201, // 查询超时
    searchFail: 202, // 查询失败
    auditing: 300, // 审核中
    auditingEnd: 301, // 审核终止
    auditingRefuse: 302, // 审核不通过
    waitVerify: 400, // 待商户确认
    verifyTimeout: 401, // 终止（商户确认）
    verifyRefuse: 402, // 商户确认拒绝
    waitSign: 500, // 待签署合同
    signTimeout: 501, // 签约超时
    waitSureLend: 600, // 待确认放款
    surelendTimeout: 601, // 放款超时
    surelendRefuse: 602, // 确认放款拒绝
    lendSuccess: 700, // 放款成功
    lendFail: 701, // 放款失败
    lending: 702, // 确认放款成功
    waitUploadImg: 800, // 待上传发货照片
    uploadTimeout: 801, // 上传照片超时
  },

  productType: {
    cash: 1, // 现金贷
    consumption: 2, // 消费分期
    cellphone: 3// 手机分期
  }
}

export default DEFAULT;
