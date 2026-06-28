import {
  requestGateway,
  type GatewayConfig,
} from "../gateway.js";
import type {
  JsonValue,
  ProductApiCallOptions,
} from "./types.js";

/**
 * OpenAPI 组件类型：Root
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/Root
 */
export type DataServiceRoot = {
  /** 集团编码 */
  groupCode: string;
  /** 项目id */
  projectId: string;
  /** 是否为分项 */
  subentryStatus?: boolean;
  /** 计算类型 */
  calculateType?: string;
  /** 数据类型 */
  dataType?: string;
  /** 信息点编码 */
  infoCode?: string;
  /** 对象信息点列表 */
  objects?: {
    /** 对象id */
    objectId?: string;
    /** 信息点编码列表 */
    infoCodes?: string[];
  }[];
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
};

/**
 * OpenAPI 组件类型：Root2
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/Root2
 */
export type DataServiceRoot2 = {
  /** 集团编码 */
  groupCode: string;
  /** 项目id */
  projectId: string;
  /** 是否为过程表 */
  processTableStatus?: boolean;
  /** 新版本标识 */
  latestVersionStatus?: boolean;
  /** 是否过滤一致数据 */
  equalStatus?: boolean;
  /** 对象类id */
  objectId?: string;
  /** 信息点编码 */
  infoCode?: string;
  /** 对象信息点列表 */
  objects?: {
    /** 对象id */
    objectId?: string;
    /** 信息点编码列表 */
    infoCodes?: string[];
  }[];
  /** 分精度时间类型，1-5min,2-15min,3-1h,4-1d,5-其他 */
  ipTimeType: number;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
};

/**
 * OpenAPI 组件类型：Root3
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/Root3
 */
export type DataServiceRoot3 = {
  /** 源hbase命名空间 */
  sourceNameSpace: string;
  /** 待迁移表名 */
  sourceTableName: string;
  /** 目标hbase命名空间 */
  targetNameSpace: string;
  /** 目标表名 */
  targetTableName?: string;
  /** 集团编码 */
  groupCode?: string;
  /** 项目ID */
  projectId?: string;
  /** 项目ID列表 */
  projectIds?: string[];
  /** 是否同步过程表 */
  syncProcessTable?: boolean;
  /** 是否同步业务表 */
  syncBussinessTable?: boolean;
  /** 线程数 */
  poolSize?: number;
  /** 分割周期 */
  splitPeriod?: number;
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
};

/**
 * OpenAPI 组件类型：Root4
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/Root4
 */
export type DataServiceRoot4 = {
  /** 主键id生成状态 */
  normalStatus?: boolean;
  /** 小时主键id生成状态 */
  hourStatus?: boolean;
  /** 天主键id生成状态 */
  dayStatus?: boolean;
  /** 月主键id生成状态 */
  monthStatus?: boolean;
  /** 待生成主键信息 */
  objects?: {
    /** 对象id */
    objectId?: string;
    /** 信息点编码列表 */
    infoCodes?: string[];
  }[];
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
};

/**
 * OpenAPI 组件类型：AggregQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/AggregQueryVo
 */
export type DataServiceAggregQueryVo = {
  /** 项目Id */
  projectId?: string;
  /** 对象实例Id */
  objectId?: string;
  /** 信息点 */
  infoCode?: string;
  /** 时间 */
  ipTime?: string;
  /** 值 */
  ipValue?: string;
};

/**
 * OpenAPI 组件类型：Map
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/Map
 */
export type DataServiceMap = {
  key?: JsonValue;
};

/**
 * OpenAPI 组件类型：WatchQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/WatchQueryVo
 */
export type DataServiceWatchQueryVo = {
  /** 运行设备数量 */
  runTotal?: number;
  /** 停止设备数量 */
  stopTotal?: number;
  /** 离线设备数量 */
  offLineTotal?: number;
  /** 控反不一致设备数量 */
  alarmTotal?: number;
  /** 本地设备数量 */
  localTotal?: number;
  /** 手动状态设备数量 */
  manualTotal?: number;
  /** 自动状态设备数量 */
  autoTotal?: number;
  /** 布防设备数量 */
  deployTotal?: number;
  /** 撤防设备数量 */
  withdrawTotal?: number;
  /** 部分布防数量 */
  partTotal?: number;
  /** 未知布防数量 */
  unKnownTotal?: number;
  /** 远程手动数量 */
  remoteManualTotal: number;
  /** 远程自动数量 */
  remoteAutoTotal: number;
};

/**
 * OpenAPI 组件类型：StatisticDataDto
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/StatisticDataDto
 */
export type DataServiceStatisticDataDto = {
  /** 值 */
  value?: string;
  /** 累计时间 (min) */
  totalTime?: string;
};

/**
 * OpenAPI 组件类型：IpDataAnalysisVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/IpDataAnalysisVo
 */
export type DataServiceIpDataAnalysisVo = {
  /** 设备实例id */
  objectId?: string;
  /** 信息点详情 */
  infoCodes?: {
    /** 信息点编码 */
    infoCode?: string;
    /** 问题类型信息 */
    statisticsTypeData?: {
      /** 问题类型 */
      key?: {
        /** 个数 */
        amount?: number;
        /** 数据明细 */
        ipDataDetail?: {
          /** 分精度时间 */
          ipTime?: string;
          /** 结果值 */
          ipValue?: string;
          /** 持续时长 */
          durationTime?: number;
        }[];
      };
    };
  }[];
};

/**
 * OpenAPI 组件类型：IpDataVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/IpDataVo
 */
export type DataServiceIpDataVo = {
  /** 分精度时间 */
  ipTime?: string;
  /** 结果值 */
  ipValue?: string;
  /** 持续时长 */
  durationTime?: number;
};

/**
 * OpenAPI 组件类型：ResponseResultVoid
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ResponseResultVoid
 */
export type DataServiceResponseResultVoid = {
  /** code */
  respCode?: string;
  /** 信息 */
  respMsg?: string;
  /** 内容 */
  content?: JsonValue;
  /** 内容长度 */
  count?: number;
};

/**
 * OpenAPI 组件类型：OrderItem
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/OrderItem
 */
export type DataServiceOrderItem = {
  /** 需要进行排序的字段 */
  column?: string;
  /** 是否正序排列，默认 true */
  asc?: boolean;
};

/**
 * OpenAPI 组件类型：MapStatusStatisticsVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/MapStatusStatisticsVo
 */
export type DataServiceMapStatusStatisticsVo = {
  key?: {
    /** 运行设备数量 */
    runTotal?: number;
    /** 离线设备数量 */
    offLineTotal?: number;
    /** 控反不一致设备数量 */
    alarmTotal?: number;
  };
};

/**
 * OpenAPI 组件类型：IpDataResponseVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/IpDataResponseVo
 */
export type DataServiceIpDataResponseVo = {
  /** 集团code */
  groupCode?: string;
  /** 项目id */
  projectId?: string;
  /** 对象类id */
  objectId?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 信息点编码 */
  infoCode?: string;
  /** 分精度时间频率 单位:min */
  ipPeriod?: number;
  /** 分精度类型 5min,15min,1h,1d,1m */
  ipType?: string;
  /** 数据状态 (1-正常, 2-异常, 3-补录, 4-切变点, 5-临时, 6-程序补录, 7-手抄表补录, 8-人工补录, 9-换表记录) */
  dataStatus?: number;
  /** 数据标签 (1-设备上报, 2-人工补录, 3-程序补录, 4-换表记录) */
  dataTag?: number;
  /** 分精度时间 */
  ipTime?: string;
  /** 结果值 */
  ipValue?: string;
  /** 最小值 */
  minValue?: string;
  /** 最小值时间 */
  minTime?: string;
  /** 最大值 */
  maxValue?: string;
  /** 最大值时间 */
  maxTime?: string;
  /** 平均值 */
  avgValue?: string;
  /** 统计值列表 */
  statisticDatas?: DataServiceStatisticDataDto[];
  /** ts */
  ts?: string;
  /** 数据来源 1-项目电价, 2-城市电价 */
  sourceFrom: number;
};

/**
 * OpenAPI 组件类型：MapReduceParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/MapReduceParam
 */
export type DataServiceMapReduceParam = {
  /** 源hbase命名空间 */
  sourceNameSpace: string;
  /** 待迁移表名 */
  sourceTableName: string;
  /** 目标hbase命名空间 */
  targetNameSpace: string;
  /** 目标表名 */
  targetTableName?: string;
  /** 集团编码 */
  groupCode?: string;
  /** 项目ID */
  projectId?: string;
  /** 项目ID列表 */
  projectIds?: string[];
  /** 是否同步过程表 */
  syncProcessTable?: boolean;
  /** 是否同步业务表 */
  syncBussinessTable?: boolean;
  /** 线程数 */
  poolSize?: number;
  /** 分割周期 */
  splitPeriod?: number;
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
  /** 源集群root地址 */
  sourceRootDir?: string;
  /** 源集群zk地址 */
  sourceZookeeperQuorum?: string;
  /** 源集群zk端口 */
  sourcePort?: string;
  /** 源集群meta地址 */
  sourceZnodeParent?: string;
  /** 源集群Scan超时时间 */
  sourceScannerTimeout?: string;
  /** 源集群RPC超时时间 */
  sourceRpcTimeout?: string;
  /** 目标集群root地址 */
  targetRootDir?: string;
  /** 目标集群zk地址 */
  targetZookeeperQuorum?: string;
  /** 目标集群zk端口 */
  targetPort?: string;
  /** 目标集群meta地址 */
  targetZnodeParent?: string;
  /** 目标集群Scan超时时间 */
  targetScannerTimeout?: string;
  /** 目标集群RPC超时时间 */
  targetRpcTimeout?: string;
};

/**
 * OpenAPI 组件类型：MapChillQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/MapChillQueryVo
 */
export type DataServiceMapChillQueryVo = {
  key?: DataServiceKey;
};

/**
 * OpenAPI 组件类型：ObjectInfoParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ObjectInfoParam
 */
export type DataServiceObjectInfoParam = {
  /** 对象id */
  objectId?: string;
  /** 信息点编码列表 */
  infoCodes?: string[];
};

/**
 * OpenAPI 组件类型：{}
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/{}
 */
export type DataServiceEmptyObjectEmptyObject = Record<string, never>;

/**
 * OpenAPI 组件类型：HomePageQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/HomePageQueryVo
 */
export type DataServiceHomePageQueryVo = {
  /** 离线设备数量 */
  offLineTotal?: number;
  /** 控反不一致设备数量 */
  alarmTotal?: number;
  /** 汇总数据详情

示例：{
"ACATFC":{
"runTotal": 20
}
} */
  statusStatistics?: DataServiceMapStatusStatisticsVo;
};

/**
 * OpenAPI 组件类型：DataRepairParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/DataRepairParam
 */
export type DataServiceDataRepairParam = {
  /** 是否为分项 */
  subentryStatus?: boolean;
  /** 集团编码 */
  groupCode: string;
  /** 项目ID */
  projectId: string;
  /** 对象信息点列表 */
  objects?: DataServiceObjectInfoParam[];
  /** 数据类型 */
  dataType: string;
  /** 新版本标识 */
  latestVersionStatus?: boolean;
  /** 是否为过程表 */
  processTableStatus?: boolean;
  /** 是否为数据缺失 */
  dataMissingStatus?: boolean;
  /** 分精度时间类型（3-小时,4-日,5-月） */
  ipTimeType?: number;
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
};

/**
 * OpenAPI 组件类型：MapObject
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/MapObject
 */
export type DataServiceMapObject = {
  "{}"?: DataServiceEmptyObjectEmptyObject;
};

/**
 * OpenAPI 组件类型：RString
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RString
 */
export type DataServiceRString = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: string;
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：InfoVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/InfoVo
 */
export type DataServiceInfoVo = {
  /** 信息点编码 */
  infoCode?: string;
  /** 问题类型信息 */
  statisticsData?: JsonValue;
};

/**
 * OpenAPI 组件类型：InfoCodeVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/InfoCodeVo
 */
export type DataServiceInfoCodeVo = {
  /** 信息点编码 */
  infoCode?: string;
  /** 问题类型信息 */
  statisticsTypeData?: JsonValue;
};

/**
 * OpenAPI 组件类型：IotDataDelParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/IotDataDelParam
 */
export type DataServiceIotDataDelParam = {
  /** 集团编码 */
  groupCode: string;
  /** 项目ID */
  projectId: string;
  /** 对象信息点列表 */
  objects: DataServiceObjectInfoParam[];
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
};

/**
 * OpenAPI 组件类型：RListAggregQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RListAggregQueryVo
 */
export type DataServiceRListAggregQueryVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceAggregQueryVo[];
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：RMap
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RMap
 */
export type DataServiceRMap = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceMap;
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：RWatchQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RWatchQueryVo
 */
export type DataServiceRWatchQueryVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceWatchQueryVo;
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：IpDataValueExcelParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/IpDataValueExcelParam
 */
export type DataServiceIpDataValueExcelParam = {
  /** 集团code */
  groupCode: string;
  /** 项目id */
  projectId: string;
  /** 对象类编码 */
  classCode: string;
  /** 信息点编码 */
  infoCode: string;
  /** 对象类id */
  objectId: string;
  /** 分精度时间频率 单位:min */
  ipPeriod: number;
  /** 数据上报时间 */
  ipTime: string;
  /** 数据值 */
  ipValue: number;
  /** 原始数据类型 */
  dataType: string;
};

/**
 * OpenAPI 组件类型：HBaseInfoParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/HBaseInfoParam
 */
export type DataServiceHBaseInfoParam = {
  /** 命名空间 */
  nameSpace: string;
  /** 集团编码 */
  groupCode: string;
  /** 项目id */
  projectIds?: string[];
  /** 年 */
  year: number;
  /** 是否创建全年表结构状态（默认按季度创建） */
  fullStatus?: boolean;
  /** 季度 */
  quarter: number;
  /** 过程表数据保留时长 (单位:天) */
  processTableTtl?: number;
  /** 业务表数据保留时长 (单位:天) */
  projectTableTtl?: number;
};

/**
 * OpenAPI 组件类型：RListIpDataAnalysisVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RListIpDataAnalysisVo
 */
export type DataServiceRListIpDataAnalysisVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceIpDataAnalysisVo[];
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：ObjectParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ObjectParam
 */
export type DataServiceObjectParam = {
  /** 对象类型编码 */
  objectId?: string;
  /** 信息点编码列表 */
  infoCodes?: string[];
  /** 查询时间点(为空时取最新) */
  ipTime?: string;
};

/**
 * OpenAPI 组件类型：PersistentDefineSubscribeParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/PersistentDefineSubscribeParam
 */
export type DataServicePersistentDefineSubscribeParam = {
  id?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 信息点编码 */
  infoCode?: string;
  /** 主题名称 */
  topicName: string;
  /** 备注 */
  remark?: string;
};

/**
 * OpenAPI 组件类型：StatisticsParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/StatisticsParam
 */
export type DataServiceStatisticsParam = {
  /** 设备id列表 */
  objectIds: string[];
  /** 查询时间点 */
  ipTime: string;
};

/**
 * OpenAPI 组件类型：RListIpDataResponseVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RListIpDataResponseVo
 */
export type DataServiceRListIpDataResponseVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceIpDataResponseVo[];
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：InfoParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/InfoParam
 */
export type DataServiceInfoParam = {
  /** 信息点编码 */
  infoCode: string;
  /** 分精度类型  5min,15min,1h,1d,1m */
  ipType: string;
  /** 问题类型 (abnormal-异常, miss-丢数, duration-持续不变) */
  codeTypes?: string[];
  /** 是否显示异常明细 */
  displayAbnormalDetail?: boolean;
  /** 是否显示丢数明细 */
  displayMissingDetail?: boolean;
  /** 持续不变的阈值 */
  durationThreshold?: number;
};

/**
 * OpenAPI 组件类型：RMapChillQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RMapChillQueryVo
 */
export type DataServiceRMapChillQueryVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceMapChillQueryVo;
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：ProjectParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ProjectParam
 */
export type DataServiceProjectParam = {
  /** 项目ID */
  projectId?: string;
  /** 对象信息 */
  objects?: DataServiceObjectParam[];
};

/**
 * OpenAPI 组件类型：RVoid
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RVoid
 */
export type DataServiceRVoid = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: JsonValue;
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：RHomePageQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RHomePageQueryVo
 */
export type DataServiceRHomePageQueryVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceHomePageQueryVo;
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：IpDataRepairParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/IpDataRepairParam
 */
export type DataServiceIpDataRepairParam = {
  /** 修复规则类型(1-连续修复,2-向前续接,3-向后递减,4-按量修复) */
  repairType: number;
  /** 修复对象实例id */
  objectId: string;
  /** 修复信息点编码 */
  infoCode: string;
  /** 修复开始时间 */
  startTime: string;
  /** 修复结束时间 */
  endTime: string;
  /** 参考对象实例id */
  sourceObjectId: string;
  /** 参考信息点编码 */
  sourceInfoCode: string;
  /** 参考开始时间 */
  sourceStartTime: string;
  /** 参考结束时间 */
  sourceEndTime: string;
  /** 变化量 */
  ipValue?: number;
};

/**
 * OpenAPI 组件类型：ProjectElecPriceParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ProjectElecPriceParam
 */
export type DataServiceProjectElecPriceParam = {
  /** 用电类型(1：单一制；2：两部制) */
  electricityType: number;
  /** 分精度类型  5min,15min,1h,1d,1m */
  ipType?: string;
  /** 信息点编码 */
  infoCode?: string;
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
};

/**
 * OpenAPI 组件类型：ObjInfoCodeParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ObjInfoCodeParam
 */
export type DataServiceObjInfoCodeParam = {
  /** 对象类型编码 */
  objectId: string;
  /** 信息点详情 */
  infoCodes?: DataServiceInfoCodeParam[];
};

/**
 * OpenAPI 组件类型：ChillerParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ChillerParam
 */
export type DataServiceChillerParam = {
  /** 系统id */
  objectId: string;
  /** 查询时间点 (格式: yyyyMMddHHmmss) */
  ipTime: string;
};

/**
 * OpenAPI 组件类型：AggregQueryParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/AggregQueryParam
 */
export type DataServiceAggregQueryParam = {
  /** 分精度类型  15min,1h,1d,1m,1y */
  ipType?: string;
  /** 分精度时间类型，1-5min,2-15min,3-1h,4-1d,5-其他 */
  ipTimeType?: number;
  /** 开始时间点 */
  startTime?: string;
  /** 结束时间点 */
  endTime?: string;
  /** 结果返回聚合方式 1-按项目聚合 2-按时间聚合 */
  aggregType?: number;
  /** 项目信息 */
  projects?: DataServiceProjectParam[];
};

/**
 * OpenAPI 组件类型：R?
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/R?
 */
export type DataServiceR = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: JsonValue;
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：MapWatchQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/MapWatchQueryVo
 */
export type DataServiceMapWatchQueryVo = {
  key?: DataServiceKey;
};

/**
 * OpenAPI 组件类型：IpAbnormalDataQueryParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/IpAbnormalDataQueryParam
 */
export type DataServiceIpAbnormalDataQueryParam = {
  /** 对象信息点参数数组 */
  objects: DataServiceObjInfoCodeParam[];
  /** 开始时间点 (时间格式:yyyyMMddHHmmss) */
  startTime: string;
  /** 结束时间点 (时间格式:yyyyMMddHHmmss) */
  endTime: string;
};

/**
 * OpenAPI 组件类型：ChillPumpParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ChillPumpParam
 */
export type DataServiceChillPumpParam = {
  /** 泵组id列表 */
  objectIds: string[];
  /** 查询时间点 (格式：yyyyMMddHHmmss) */
  ipTime: string;
};

/**
 * OpenAPI 组件类型：key
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/key
 */
export type DataServiceKey = {
  /** 大机(泵)数量 */
  Num?: number;
  /** 中机(泵)数量 */
  M1Num?: number;
  /** 小机(泵)数量 */
  SNum?: number;
};

/**
 * OpenAPI 组件类型：RMapWatchQueryVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RMapWatchQueryVo
 */
export type DataServiceRMapWatchQueryVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceMapWatchQueryVo;
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：MapObject1
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/MapObject1
 */
export type DataServiceMapObject1 = {
  key?: DataServiceKey;
};

/**
 * OpenAPI 组件类型：ObjectStatisticParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ObjectStatisticParam
 */
export type DataServiceObjectStatisticParam = {
  /** 类型编码 */
  code: string;
  /** 设备id列表 */
  objectIds: string[];
};

/**
 * OpenAPI 组件类型：key2
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/key2
 */
export type DataServiceKey2 = {
  /** 运行设备数量 */
  runTotal?: number;
  /** 离线设备数量 */
  offLineTotal?: number;
  /** 控反不一致设备数量 */
  alarmTotal?: number;
};

/**
 * OpenAPI 组件类型：InfoCodeParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/InfoCodeParam
 */
export type DataServiceInfoCodeParam = {
  /** 信息点编码 */
  infoCode: string;
  /** 分精度类型  5min,15min,1h,1d,1m */
  ipType: string;
  /** 问题类型 (abnormal-异常, miss-丢数, duration-持续不变) */
  codeTypes?: string[];
  /** 是否显示异常明细 */
  displayAbnormalDetail?: boolean;
  /** 是否显示丢数明细 */
  displayMissingDetail?: boolean;
  /** 持续不变的阈值 */
  durationThreshold?: number;
};

/**
 * OpenAPI 组件类型：RListMapObject
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RListMapObject
 */
export type DataServiceRListMapObject = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceMapObject1[];
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：AggregationStatisticsParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/AggregationStatisticsParam
 */
export type DataServiceAggregationStatisticsParam = {
  /** 设备参数数组 */
  objects: DataServiceObjectStatisticParam[];
  /** 查询时间点 */
  ipTime: string;
};

/**
 * OpenAPI 组件类型：RMapStatusStatisticsVo
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RMapStatusStatisticsVo
 */
export type DataServiceRMapStatusStatisticsVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: DataServiceMapStatusStatisticsVo;
  /** 错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: DataServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: DataServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 扩展字段数据 */
  withColumns?: string[];
  /** 指定返回字段 */
  includeColumns?: string[];
  /** 异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：RelationCriteria
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/RelationCriteria
 */
export type DataServiceRelationCriteria = {
  objFrom?: string;
  objTo?: string;
  /** 边code */
  relCode?: string;
  /** 图code */
  graphCode?: string;
};

/**
 * OpenAPI 组件类型：SecurityParam
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/SecurityParam
 */
export type DataServiceSecurityParam = {
  /** 设备id列表 */
  objectIds: string[];
  /** 信息点编码 */
  infoCodes: string[];
  /** 查询时间点 */
  ipTime: string;
};

/**
 * OpenAPI 组件类型：JsonNodeFactory
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/JsonNodeFactory
 */
export type DataServiceJsonNodeFactory = {
  _cfgBigDecimalExact?: boolean;
};

/**
 * OpenAPI 组件类型：MapJsonNode
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/MapJsonNode
 */
export type DataServiceMapJsonNode = {
  key?: Record<string, never>[][][];
};

/**
 * OpenAPI 组件类型：ObjectNode
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/ObjectNode
 */
export type DataServiceObjectNode = {
  /** We will keep a reference to the Object (usually TreeMapper)
that can construct instances of nodes to add to this container
node. */
  _nodeFactory?: DataServiceJsonNodeFactory;
  /** Note: LinkedHashMap for backwards compatibility */
  _children?: DataServiceMapJsonNode;
};

/**
 * OpenAPI 组件类型：FilterCriteria
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/FilterCriteria
 */
export type DataServiceFilterCriteria = {
  /** 静态条件
例如要限定楼层id的值，传值如下
{
"floorId":["Fl6101122010ad1a51a218e84041b046bd331139a9d5"]
} */
  immobile?: DataServiceObjectNode;
  /** 动态值条件
例如要查询runStatus持久化数值为1的数据
{
"runStatus":1
} */
  dynamic: DataServiceObjectNode;
};

/**
 * OpenAPI 组件类型：IPDataCountDto
 *
 * 来源：docs/product-apis/data-service/openapi.json#/components/schemas/IPDataCountDto
 */
export type DataServiceIPDataCountDto = {
  classCodes: string[];
  groups: string[];
  /** 关系查询 */
  relations?: DataServiceRelationCriteria;
  /** 查询时间点 */
  ipTime: string;
  /** 筛选条件 */
  criteria?: DataServiceFilterCriteria;
};

/**
 * DataServiceComputeComplementQuery 查询参数。
 */
export type DataServiceComputeComplementQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceComputeDataQueryQuery 查询参数。
 */
export type DataServiceComputeDataQueryQuery = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象实例id */
  objectId?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceComputeDataSaveQuery 查询参数。
 */
export type DataServiceComputeDataSaveQuery = {
  /** 设备id */
  objectId?: string;
  /** 信息点编码 */
  infoCode?: string;
};

/**
 * DataServiceComputeDataUploadQuery 查询参数。
 */
export type DataServiceComputeDataUploadQuery = {
  /** 设备id */
  objectId?: string;
  /** 信息点编码 */
  infoCode?: string;
};

/**
 * DataServiceComputeRuleQueryRuleInstantiationTreeQuery 查询参数。
 */
export type DataServiceComputeRuleQueryRuleInstantiationTreeQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceIotDataAggregHomepageCoolHeatSysStatusStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregHomepageCoolHeatSysStatusStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregHomepageExhaustFumeStatusStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregHomepageExhaustFumeStatusStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregHomepageFanEquipmentStatusStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregHomepageFanEquipmentStatusStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregHomepageLightingStatusStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregHomepageLightingStatusStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregHomepageTerminalObjectStatusStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregHomepageTerminalObjectStatusStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregWatchChillerStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregWatchChillerStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregWatchChillPumpStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregWatchChillPumpStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregWatchExhaustFumeStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregWatchExhaustFumeStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregWatchFanStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregWatchFanStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregWatchLightingStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregWatchLightingStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregWatchSecurityEquipmentStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregWatchSecurityEquipmentStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregWatchSpaceSecurityStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregWatchSpaceSecurityStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataAggregWatchTerminalStatisticsQuery 查询参数。
 */
export type DataServiceIotDataAggregWatchTerminalStatisticsQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIotDataCreateLoadAccdEQuery 查询参数。
 */
export type DataServiceIotDataCreateLoadAccdEQuery = {
  /** 是同步过程表(true-是,false-否) */
  processStatus?: boolean;
  /** 增长步长 */
  addStep?: number;
};

/**
 * DataServiceIotDataGetRegionNoQuery 查询参数。
 */
export type DataServiceIotDataGetRegionNoQuery = {
  /** objectId */
  objectId?: string;
};

/**
 * DataServiceIotStatisticQueryStatisticDataByObjectInfoQuery 查询参数。
 */
export type DataServiceIotStatisticQueryStatisticDataByObjectInfoQuery = {
  /** appId */
  appId?: string;
};

/**
 * DataServiceIpcalDataAggregInfoCodeQuery 查询参数。
 */
export type DataServiceIpcalDataAggregInfoCodeQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIpcalDataAggregProjectAndTimeQuery 查询参数。
 */
export type DataServiceIpcalDataAggregProjectAndTimeQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIpcalDataAggregProjectOrTimeQuery 查询参数。
 */
export type DataServiceIpcalDataAggregProjectOrTimeQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIpcalDataAggregSubentryQuery 查询参数。
 */
export type DataServiceIpcalDataAggregSubentryQuery = {
  /** appId */
  appId: string;
};

/**
 * DataServiceIpcalDataQueryRealTimeIpDataQuery 查询参数。
 */
export type DataServiceIpcalDataQueryRealTimeIpDataQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceRwdComputeSubscribeDeleteQuery 查询参数。
 */
export type DataServiceRwdComputeSubscribeDeleteQuery = {
  /** appId */
  appId: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceRwdComputeSubscribeUpdateQuery 查询参数。
 */
export type DataServiceRwdComputeSubscribeUpdateQuery = {
  /** appId */
  appId: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceRwdInstantiateDeleteQuery 查询参数。
 */
export type DataServiceRwdInstantiateDeleteQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceRwdInstantiateQueryObjIdQuery 查询参数。
 */
export type DataServiceRwdInstantiateQueryObjIdQuery = {
  /** objectId */
  objectId: string;
  /** infoCode */
  infoCode: string;
};

/**
 * DataServiceRwdInstantiateQueryObjIdBatchQuery 查询参数。
 */
export type DataServiceRwdInstantiateQueryObjIdBatchQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceRwdInstantiateUpdateQuery 查询参数。
 */
export type DataServiceRwdInstantiateUpdateQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceRwdIpcalPointListPointStatusQuery 查询参数。
 */
export type DataServiceRwdIpcalPointListPointStatusQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceRwdIpcalPointQueryInfoPointCalTypeQuery 查询参数。
 */
export type DataServiceRwdIpcalPointQueryInfoPointCalTypeQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * DataServiceRwdIpcalPointQueryInfoPointPeroidAndAbundanceInfoQuery 查询参数。
 */
export type DataServiceRwdIpcalPointQueryInfoPointPeroidAndAbundanceInfoQuery = {
  /** 应用标识 */
  appId?: string;
  /** 用户ID */
  userId?: string;
};

/**
 * DataServiceRwdIpcalPointStatsPointStatusQuery 查询参数。
 */
export type DataServiceRwdIpcalPointStatsPointStatusQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * POST /compute/complement 的请求体。
 */
export type DataServiceComputeComplementBody = {
  /** 集团编码 */
  groupCode?: string;
  /** 项目ID */
  projectId?: string;
  /** 对象类编码 */
  classCode: string;
  /** 对象实例Id */
  objectId: string;
  /** 信息点编码 */
  infoCode: string;
  /** 采集周期 单位:分钟 */
  period: number;
  /** 原始数据类型(Accm, Inst, Enump, Boolv) */
  dataType: string;
  /** 计算类型 (1-直采, 2-衍生) */
  calculateType?: number;
  /** 规则计算类型内容 (enumvalue, leftnear, linearinterpolation) */
  ruleContent: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 精度 */
  scale?: number;
};

/**
 * POST /compute/data/complement 的请求体。
 */
export type DataServiceComputeDataComplementBody = {
  projectId: string;
  objectId: string;
  infoCode: string;
  startTime: string;
  endTime: string;
};

/**
 * POST /compute/data/preview 的请求体。
 */
export type DataServiceComputeDataPreviewBody = {
  repairType: number;
  startTime: string;
  endTime: string;
  objectId: string;
  infoCode: string;
  sourceObjectId: string;
  sourceInfoCode: string;
  sourceStartTime: string;
  sourceEndTime: string;
  ipValue: number;
};

/**
 * POST /compute/data/repair 的请求体。
 */
export type DataServiceComputeDataRepairBody = DataServiceIpDataRepairParam;

/**
 * POST /compute/data/save 的请求体。
 */
export type DataServiceComputeDataSaveBody = {
  /** 分精度时间 */
  ipTime: string;
  /** 分精度值 */
  ipValue: string;
}[];

/**
 * POST /compute/deriveRecalculate 的请求体。
 */
export type DataServiceComputeDeriveRecalculateBody = {
  /** 集团code */
  groupCode: string;
  /** 项目id */
  projectId: string;
  /** 对象类 */
  classCode?: string;
  /** 对象类id */
  objectId: string;
  /** 信息点编码 */
  infoCode: string;
  /** 分精度(单位分钟，默认：15) */
  period: number;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime?: string;
  /** kafka消息主题 */
  topicName?: string;
}[];

/**
 * POST /compute/manualReadingRecord 的请求体。
 */
export type DataServiceComputeManualReadingRecordBody = {
  /** 集团code */
  groupCode: string;
  /** 项目id */
  projectId: string;
  /** 对象类编码 */
  classCode: string;
  /** 信息点编码 */
  infoCode: string;
  /** 对象类id */
  objectId: string;
  /** 分精度时间频率 单位:min */
  ipPeriod: number;
  /** 数据上报时间 */
  ipTime: string;
  /** 数据值 */
  ipValue: number;
  /** 原始数据类型 */
  dataType: string;
}[];

/**
 * POST /compute/push 的请求体。
 */
export type DataServiceComputePushBody = {
  /** kafka消息主题 */
  topicName?: string;
  /** 消息id */
  msgId: string;
  /** 指令类型 */
  cmd?: string;
  /** 网关id */
  gwId?: string;
  /** sessionId */
  sessionId?: string;
  /** 上报时间戳 */
  reportTime: string;
  /** 设备id */
  objectId: string;
  /** 集团编码 */
  groupCode: string;
  /** 项目id */
  projectId: string;
  /** 对象类编码 */
  classCode: string;
  /** 设备信息点详情列表 */
  properties?: {
    /** 信息点编码 */
    infoCode: string;
    /** 信息点值 */
    val: string;
    /** 点位上报时间戳 */
    time?: string;
    /** 数据标签 */
    transfiniteType?: string;
  }[];
  sourceFrom?: number;
}[];

/**
 * POST /compute/rule/queryRuleInstantiationInfos 的请求体。
 */
export type DataServiceComputeRuleQueryRuleInstantiationInfosBody = {
  criteria: {
    classCode: string;
    objectId: string;
    defineInfo: string;
  };
  page: number;
  size: number;
};

/**
 * POST /iot/compute/data/clear 的请求体。
 */
export type DataServiceIotComputeDataClearBody = DataServiceIotDataDelParam;

/**
 * POST /iot/compute/data/compare 的请求体。
 */
export type DataServiceIotComputeDataCompareBody = DataServiceRoot2;

/**
 * POST /iot/compute/data/compareToExcel 的请求体。
 */
export type DataServiceIotComputeDataCompareToExcelBody = DataServiceRoot2;

/**
 * POST /iot/compute/data/deriveRecalculate 的请求体。
 */
export type DataServiceIotComputeDataDeriveRecalculateBody = {
  /** 集团code */
  groupCode: string;
  /** 项目id */
  projectId: string;
  /** 是否为分项 */
  subentryStatus?: boolean;
  /** 衍生消息topic */
  topicName: string;
  /** 对象信息点列表 */
  objects?: {
    /** 对象类id */
    objectId: string;
    /** 信息点编码 */
    infoCode: string;
    /** 分精度类型(单位分钟) */
    period: number;
  }[];
  /** 信息点编码 */
  infoCode?: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
};

/**
 * POST /iot/compute/data/repairData 的请求体。
 */
export type DataServiceIotComputeDataRepairDataBody = {
  groupCode: string;
  projectId: string;
  dataType: string;
  ipTimeType: number;
  subentryStatus: boolean;
  processTableStatus: boolean;
  objects: {
    objectId?: string;
    infoCodes?: string[];
  }[];
  startTime: string;
  endTime: string;
};

/**
 * POST /iot/compute/data/repairEquipmentData 的请求体。
 */
export type DataServiceIotComputeDataRepairEquipmentDataBody = DataServiceRoot;

/**
 * POST /iot/compute/data/repairEquipmentHourData 的请求体。
 */
export type DataServiceIotComputeDataRepairEquipmentHourDataBody = DataServiceRoot;

/**
 * POST /iot/data/aggreg/homepage/coolHeatSysStatusStatistics 的请求体。
 */
export type DataServiceIotDataAggregHomepageCoolHeatSysStatusStatisticsBody = {
  objects: {
    code: string;
    objectIds: string[];
  }[];
  objectIds: string[];
  ipTime: string;
};

/**
 * POST /iot/data/aggreg/homepage/exhaustFumeStatusStatistics 的请求体。
 */
export type DataServiceIotDataAggregHomepageExhaustFumeStatusStatisticsBody = DataServiceAggregationStatisticsParam;

/**
 * POST /iot/data/aggreg/homepage/fanEquipmentStatusStatistics 的请求体。
 */
export type DataServiceIotDataAggregHomepageFanEquipmentStatusStatisticsBody = DataServiceAggregationStatisticsParam;

/**
 * POST /iot/data/aggreg/homepage/lightingStatusStatistics 的请求体。
 */
export type DataServiceIotDataAggregHomepageLightingStatusStatisticsBody = DataServiceAggregationStatisticsParam;

/**
 * POST /iot/data/aggreg/homepage/terminalObjectStatusStatistics 的请求体。
 */
export type DataServiceIotDataAggregHomepageTerminalObjectStatusStatisticsBody = DataServiceAggregationStatisticsParam;

/**
 * POST /iot/data/aggreg/watch/chillerStatistics 的请求体。
 */
export type DataServiceIotDataAggregWatchChillerStatisticsBody = {
  objectId: string;
  ipTime: string;
};

/**
 * POST /iot/data/aggreg/watch/chillPumpStatistics 的请求体。
 */
export type DataServiceIotDataAggregWatchChillPumpStatisticsBody = DataServiceChillPumpParam;

/**
 * POST /iot/data/aggreg/watch/exhaustFumeStatistics 的请求体。
 */
export type DataServiceIotDataAggregWatchExhaustFumeStatisticsBody = DataServiceAggregationStatisticsParam;

/**
 * POST /iot/data/aggreg/watch/fanStatistics 的请求体。
 */
export type DataServiceIotDataAggregWatchFanStatisticsBody = DataServiceAggregationStatisticsParam;

/**
 * POST /iot/data/aggreg/watch/lightingStatistics 的请求体。
 */
export type DataServiceIotDataAggregWatchLightingStatisticsBody = DataServiceStatisticsParam;

/**
 * POST /iot/data/aggreg/watch/securityEquipmentStatistics 的请求体。
 */
export type DataServiceIotDataAggregWatchSecurityEquipmentStatisticsBody = {
  objects: {
    code: string;
    objectIds: string[];
  }[];
  objectIds: string[];
  infoCodes: string[];
  ipTime: string;
};

/**
 * POST /iot/data/aggreg/watch/spaceSecurityStatistics 的请求体。
 */
export type DataServiceIotDataAggregWatchSpaceSecurityStatisticsBody = DataServiceStatisticsParam;

/**
 * POST /iot/data/aggreg/watch/terminalStatistics 的请求体。
 */
export type DataServiceIotDataAggregWatchTerminalStatisticsBody = DataServiceAggregationStatisticsParam;

/**
 * POST /iot/data/getDeleteSql 的请求体。
 */
export type DataServiceIotDataGetDeleteSqlBody = DataServiceRoot4;

/**
 * POST /iot/data/getRowkeySql 的请求体。
 */
export type DataServiceIotDataGetRowkeySqlBody = DataServiceRoot4;

/**
 * POST /iot/hbaseInfo/init 的请求体。
 */
export type DataServiceIotHbaseInfoInitBody = DataServiceHBaseInfoParam;

/**
 * POST /iot/ipcal/data/queryAbnormalDataStatistics 的请求体。
 */
export type DataServiceIotIpcalDataQueryAbnormalDataStatisticsBody = {
  objects: {
    objectId?: string;
    infoCodes?: {
      infoCode?: string;
      ipType?: string;
      durationThreshold?: number;
      displayAbnormalDetail?: boolean;
      displayMissingDetail?: boolean;
    }[];
  }[];
  startTime: string;
  endTime: string;
};

/**
 * POST /iot/ipcal/data/queryIPDataByValueTypeInPeriod 的请求体。
 */
export type DataServiceIotIpcalDataQueryIPDataByValueTypeInPeriodBody = {
  objects: {
    objectId: string;
    infoCodes: string[];
  }[];
  valueTypes: string[];
  ipType: string;
  startTime: string;
  endTime: string;
};

/**
 * POST /iot/ipcal/data/queryIPDataInPeriod 的请求体。
 */
export type DataServiceIotIpcalDataQueryIPDataInPeriodBody = {
  objects: {
    objectId: string;
    infoCodes: string[];
  }[];
  /** 分精度类型 5min,15min,1h,1d,1m(默认值:15min) */
  ipType?: string;
  /** reg-整点值(默认),avg-平均值,max-最大值,min-最小值,rcov-切变+整点值,stat-枚举值统计时间 */
  valueType?: string;
  startTime: string;
  endTime: string;
  /** 数据状态标签(1-正常, 2-异常, 3-补录, 4-切变点) */
  dataStatus?: number;
  /** 数据标签 (1-设备上报, 2-人工补录, 3-程序补录, 4-换表记录；mo) */
  dataTag?: number;
};

/**
 * POST /iot/ipcal/data/queryIPDataOnMoment 的请求体。
 */
export type DataServiceIotIpcalDataQueryIPDataOnMomentBody = {
  objects: {
    objectId: string;
    infoCodes?: string[];
  }[];
  /** 分精度类型 5min,15min,1h,1d,1m */
  ipType?: string;
  /** eg-整点值(默认),avg-平均值,max-最大值,min-最小值,rcov- 切变+整点值，stat-统计值 */
  valueType?: string;
  /** 查询时间点(格式：yyyyMMddHHmmss，为空时取最新) */
  ipTime?: string;
  /** 开始时间点(格式：yyyyMMddHHmmss) */
  startTime?: string;
  /** 结束时间点(格式：yyyyMMddHHmmss) */
  endTime?: string;
  /** 数据状态标签(1-正常, 2-异常, 3-补录, 4-切变点) */
  dataStatus?: number;
};

/**
 * POST /iot/ipcal/data/queryProjectElecPrice 的请求体。
 */
export type DataServiceIotIpcalDataQueryProjectElecPriceBody = {
  electricityType: number;
  ipType: string;
  infoCode: string;
  startTime: string;
  endTime: string;
};

/**
 * POST /iot/manual/queryIotData 的请求体。
 */
export type DataServiceIotManualQueryIotDataBody = {
  /** 项目id */
  projectId: string;
  /** 工单id */
  workOrderId?: string;
  /** 对象信息点参数数组 */
  objects: {
    /** 对象id */
    objectId?: string;
    /** 信息点编码列表 */
    infoCodes?: string[];
  }[];
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
};

/**
 * POST /iot/manual/queryObjectsInfoPoint 的请求体。
 */
export type DataServiceIotManualQueryObjectsInfoPointBody = {
  /** 项目id */
  projectId: string;
  /** 对象信息点参数数组 */
  objects: string[];
  /** 开始时间点 */
  startTime: string;
  /** 结束时间点 */
  endTime: string;
};

/**
 * POST /iot/manual/save 的请求体。
 */
export type DataServiceIotManualSaveBody = {
  projectId: string;
  classCode: string;
  objectId: string;
  infoCode: string;
  infoName: string;
  ipValue: string;
  ipTime: string;
  workOrderId: string;
  remark: string;
};

/**
 * POST /iot/statistic/queryStatisticDataByObjectInfo 的请求体。
 */
export type DataServiceIotStatisticQueryStatisticDataByObjectInfoBody = {
  /** 对象信息点参数数组 */
  objects: {
    /** 对象id */
    objectId: string;
    /** 信息点编码列表 */
    infoCodes: string[];
  }[];
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
};

/**
 * POST /ipcal/data/aggreg/infoCode 的请求体。
 */
export type DataServiceIpcalDataAggregInfoCodeBody = {
  /** 分精度类型  15min,1h,1d,1m,1y */
  ipType?: string;
  /** 开始时间点 */
  startTime?: string;
  /** 结束时间点 */
  endTime?: string;
  /** 结果返回聚合方式 1-按项目聚合 2-按时间聚合 */
  aggregType?: number;
  /** 项目信息 */
  projects?: DataServiceProjectParam[];
};

/**
 * POST /ipcal/data/aggreg/projectAndTime 的请求体。
 */
export type DataServiceIpcalDataAggregProjectAndTimeBody = {
  /** 分精度类型  15min,1h,1d,1m,1y */
  ipType?: string;
  /** 开始时间点 */
  startTime?: string;
  /** 结束时间点 */
  endTime?: string;
  /** 结果返回聚合方式 1-按项目聚合 2-按时间聚合 */
  aggregType?: number;
  /** 项目信息 */
  projects?: DataServiceProjectParam[];
};

/**
 * POST /ipcal/data/aggreg/projectOrTime 的请求体。
 */
export type DataServiceIpcalDataAggregProjectOrTimeBody = {
  /** 分精度类型  15min,1h,1d,1m,1y */
  ipType?: string;
  /** 开始时间点 */
  startTime?: string;
  /** 结束时间点 */
  endTime?: string;
  /** 结果返回聚合方式 1-按项目聚合 2-按时间聚合 */
  aggregType?: number;
  /** 项目信息 */
  projects?: DataServiceProjectParam[];
};

/**
 * POST /ipcal/data/aggreg/subentry 的请求体。
 */
export type DataServiceIpcalDataAggregSubentryBody = {
  /** 分精度类型  15min,1h,1d,1m,1y */
  ipType?: string;
  /** 开始时间点 */
  startTime?: string;
  /** 结束时间点 */
  endTime?: string;
  /** 结果返回聚合方式 1-按项目聚合 2-按时间聚合 */
  aggregType?: number;
  /** 项目信息 */
  projects?: DataServiceProjectParam[];
};

/**
 * POST /ipcal/data/queryIpDataStatisticalDuration 的请求体。
 */
export type DataServiceIpcalDataQueryIpDataStatisticalDurationBody = {
  objects: {
    objectId?: string;
    infoCodes?: string[];
  }[];
  ipType: string;
  startTime: string;
  endTime: string;
};

/**
 * POST /ipcal/data/queryObjectCount 的请求体。
 */
export type DataServiceIpcalDataQueryObjectCountBody = DataServiceIPDataCountDto;

/**
 * POST /ipcal/data/queryRealTimeIpData 的请求体。
 */
export type DataServiceIpcalDataQueryRealTimeIpDataBody = {
  /** 对象信息点参数数组 */
  objects?: {
    /** 对象实例Id */
    objectId: string;
    /** 信息点编码列表 */
    infoCodes?: string[];
  }[];
  /** 分精度类型 5min,15min,1h,1d,1m */
  ipType?: string;
  /** reg-整点值(默认),avg-平均值,max-最大值,min-最小值,rcov- 切变+整点值 */
  valueType?: string;
  /** 查询时间点(为空时取最新) */
  ipTime?: string;
  /** 开始时间点 */
  startTime?: string;
  /** 结束时间点 */
  endTime?: string;
  /** 数据状态标签(1-正常, 2-异常, 3-补录, 4-切变点) */
  dataStatus?: number;
  /** 数据标签 (1-设备上报, 2-人工补录, 3-程序补录, 4-换表记录, 5-数据修复) */
  dataTag?: number;
};

/**
 * POST /mapReduce/executeJobByConditions 的请求体。
 */
export type DataServiceMapReduceExecuteJobByConditionsBody = DataServiceRoot3;

/**
 * POST /mapReduce/job/execute 的请求体。
 */
export type DataServiceMapReduceJobExecuteBody = DataServiceRoot3;

/**
 * POST /rwd/compute/subscribe/add 的请求体。
 */
export type DataServiceRwdComputeSubscribeAddBody = {
  classCode: string;
  infoCode: string;
  topicName: string;
};

/**
 * POST /rwd/compute/subscribe/delete 的请求体。
 */
export type DataServiceRwdComputeSubscribeDeleteBody = string[];

/**
 * POST /rwd/compute/subscribe/subscribeInfoToRedis 的请求体。
 */
export type DataServiceRwdComputeSubscribeSubscribeInfoToRedisBody = string[];

/**
 * POST /rwd/compute/subscribe/update 的请求体。
 */
export type DataServiceRwdComputeSubscribeUpdateBody = DataServicePersistentDefineSubscribeParam;

/**
 * POST /rwd/instantiate/add 的请求体。
 */
export type DataServiceRwdInstantiateAddBody = {
  groupCode: string;
  calculateType: number;
  classCode: string;
  collectType: number;
  content: string;
  infoCode: string;
  objectId: string;
  ruleType: number;
  origDataType: string;
  period: number;
  statPeriod: number;
};

/**
 * POST /rwd/instantiate/delete 的请求体。
 */
export type DataServiceRwdInstantiateDeleteBody = {
  /** ids */
  ids?: string[];
  /** 对象实例Id */
  objectId?: string;
  /** 信息点编码 */
  infoCode?: string;
  /** 数据来源(0-BDTP自动 1-资管手工) */
  dataFrom?: number;
};

/**
 * POST /rwd/instantiate/query/objId/batch 的请求体。
 */
export type DataServiceRwdInstantiateQueryObjIdBatchBody = {
  objIdInfos: {
    /** 对象实例化Id */
    objectId: string;
    /** 信息点 */
    infoCode: string;
  }[];
};

/**
 * POST /rwd/instantiate/update 的请求体。
 */
export type DataServiceRwdInstantiateUpdateBody = {
  /** id主键 */
  id: string;
  /** 集团编码 */
  groupCode?: string;
  /** 项目ID */
  projectId?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象实例Id */
  objectId: string;
  /** 信息点编码 */
  infoCode: string;
  /** 原始数据类型 */
  origDataType?: string;
  /** 规则类型 (1-持久化计算, 2-孪生计算)，默认为 1 */
  ruleType?: number;
  /** 采集类型 (1-数值，2-文本)，默认为 1 */
  collectType?: number;
  /** 采集周期 单位:分 */
  period: number;
  /** 统计周期 单位:分 */
  statPeriod?: number;
  /** 计算类型 (1-直采，2-衍生（继承、计算）)，默认为1 */
  calculateType?: number;
  /** 衍生计算依赖的参数信息，_A_、_B_ 参数的命名
[{
	"var": "_A_",
	"type": 1,
	"array": 0,
	"infos": [{
		"objId": "Eq610112201040332c0e18e14ba18119eb10d3ada497",
		"infoCode": "coolP"
       }],
	"defaultValue": 0
},{
	"var": "_B_",
	"type": 1,
	"array": 0,
	"infos": [{
		"objId": "Eq610112201040332c0e18e14ba18119eb10d3ada497",
		"infoCode": "elecConsumP"
   }],
	"defaultValue": 0
}] */
  deriveInfos?: {
    /** 是否是数组 0-否 1-是 */
    array?: number;
    /** 变量 */
    var?: string;
    /** 值类型，1-分精度值，2-平均值，3-最大值，4-最小值 */
    type?: number;
    /** 默认值 */
    defaultValue?: number;
    /** 单位转换系数 */
    unitRatio?: Record<string, never>;
    /** 最小计算数量 */
    minimum?: number;
    /** 参数信息 */
    infos?: {
      /** 对象实例Id */
      objId?: string;
      /** 信息code */
      infoCode?: string;
    }[];
  }[];
  /** 规则内容
直采类型：leftnear-临近值 linearinterpolation-线性插值 enumvalue-开关值 neardiffcal-临近差分值 lineardiffcal-线性插值差分值
衍生继承：inherit-间接继承 inheritdiffcal-差分继承
衍生计算：内容填写具体的计算公式，比如 local function fun() local _result = _A_*_B_ return _result end return tostring(fun()); 其中变化的是 _A_*_B_，_A_，_B_分表是参与计算的参数命名 */
  content?: string;
  /** 备注 */
  remark?: string;
};

/**
 * POST /rwd/ipcal/point/listPointStatus 的请求体。
 */
export type DataServiceRwdIpcalPointListPointStatusBody = {
  /** 项目ID */
  projectId?: string;
  /** 设备编码 */
  objectId: string;
  /** 属性信息点编码 */
  infoCode: string;
}[];

/**
 * POST /rwd/ipcal/point/queryInfoPointCalType 的请求体。
 */
export type DataServiceRwdIpcalPointQueryInfoPointCalTypeBody = string[];

/**
 * POST /rwd/ipcal/point/queryInfoPointPeroid 的请求体。
 */
export type DataServiceRwdIpcalPointQueryInfoPointPeroidBody = string[];

/**
 * POST /rwd/ipcal/point/queryInfoPointPeroidAndAbundanceInfo 的请求体。
 */
export type DataServiceRwdIpcalPointQueryInfoPointPeroidAndAbundanceInfoBody = string[];

/**
 * POST /rwd/ipcal/point/queryObjectsOfExistRule 的请求体。
 */
export type DataServiceRwdIpcalPointQueryObjectsOfExistRuleBody = {
  /** 对象类型编码 */
  classCode: string;
  /** 信息点编码列表 */
  infoCodes?: string[];
}[];

/**
 * POST /rwd/ipcal/point/statsPointStatus 的请求体。
 */
export type DataServiceRwdIpcalPointStatsPointStatusBody = {
  model: {
    /** 集团编码 */
    groupCode?: string;
    /** 项目ID */
    projectId: string;
    /** 对象类编码 */
    classCode: string;
    /** 对象列表 */
    objectIdList?: string[];
    /** 对象id */
    objectId?: string;
    /** 信息点编码 */
    infoCode?: string;
    /** 枚举说明: online :在线
offline :离线
unknown :未知 */
    onlineStatus?: "online" | "offline" | "unknown";
  };
  size?: number;
  current?: number;
  orders?: {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认 true */
    asc?: boolean;
  }[];
  sort?: string;
  order?: string;
  extra?: {
    key?: Record<string, never>;
  };
  onlyCount?: boolean;
  withColumns?: string[];
  includeColumns?: string[];
};

/**
 * docs/product-apis/data-service 对应的请求对象类型。
 */
export type DataServiceApi = ReturnType<typeof createDataServiceApi>;

/**
 * 创建 data-service 请求对象，所有方法都会复用统一网关配置和鉴权请求头。
 */
export function createDataServiceApi(config: GatewayConfig) {
  return {
  /**
   * 接口说明：持久化计算补数
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/complement
   */
  computeComplement<T = JsonValue>(
    body: DataServiceComputeComplementBody,
    query: DataServiceComputeComplementQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/complement",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：ops补数
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/data/complement
   */
  computeDataComplement<T = JsonValue>(
    body: DataServiceComputeDataComplementBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/data/complement",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：下载持久化数据导入模板
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/data/download
   */
  computeDataDownload<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/data/download",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：数据修复预览
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/data/preview
   */
  computeDataPreview<T = JsonValue>(
    body: DataServiceComputeDataPreviewBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/data/preview",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询对象下绑点详情列表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/data/query
   */
  computeDataQuery<T = JsonValue>(
    query: DataServiceComputeDataQueryQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/compute/data/query",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：数据修复
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/data/repair
   */
  computeDataRepair<T = JsonValue>(
    body: DataServiceComputeDataRepairBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/data/repair",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：录入数据
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/data/save
   */
  computeDataSave<T = JsonValue>(
    body: DataServiceComputeDataSaveBody,
    query: DataServiceComputeDataSaveQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/data/save",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：上传持久化数据
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/data/upload
   */
  computeDataUpload<T = JsonValue>(
    query: DataServiceComputeDataUploadQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/data/upload",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：衍生重新计算
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/deriveRecalculate
   */
  computeDeriveRecalculate<T = JsonValue>(
    body: DataServiceComputeDeriveRecalculateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/deriveRecalculate",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：人工补录
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/manualReadingRecord
   */
  computeManualReadingRecord<T = JsonValue>(
    body: DataServiceComputeManualReadingRecordBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/manualReadingRecord",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：持久化计算推数
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/push
   */
  computePush<T = JsonValue>(
    body: DataServiceComputePushBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/compute/push",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：ops根据设备查询实例化详情
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/rule/queryRuleInstantiationInfos
   */
  computeRuleQueryRuleInstantiationInfos<T = JsonValue>(
    body: DataServiceComputeRuleQueryRuleInstantiationInfosBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/compute/rule/queryRuleInstantiationInfos",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询持久化实例列表树
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /compute/rule/queryRuleInstantiationTree
   */
  computeRuleQueryRuleInstantiationTree<T = JsonValue>(
    query: DataServiceComputeRuleQueryRuleInstantiationTreeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/compute/rule/queryRuleInstantiationTree",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：数据清理
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/compute/data/clear
   */
  iotComputeDataClear<T = JsonValue>(
    body: DataServiceIotComputeDataClearBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-compute-migrate/iot/compute/data/clear",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询信息点数据比对结果
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/compute/data/compare
   */
  iotComputeDataCompare<T = JsonValue>(
    body: DataServiceIotComputeDataCompareBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-compute-migrate/iot/compute/data/compare",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：信息点数据汇总结果导出
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/compute/data/compareToExcel
   */
  iotComputeDataCompareToExcel<T = JsonValue>(
    body: DataServiceIotComputeDataCompareToExcelBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-compute-migrate/iot/compute/data/compareToExcel",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：衍生消息重算
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/compute/data/deriveRecalculate
   */
  iotComputeDataDeriveRecalculate<T = JsonValue>(
    body: DataServiceIotComputeDataDeriveRecalculateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-compute-migrate/iot/compute/data/deriveRecalculate",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：持久化数据重新汇总
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/compute/data/repairData
   */
  iotComputeDataRepairData<T = JsonValue>(
    body: DataServiceIotComputeDataRepairDataBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-compute-migrate/iot/compute/data/repairData",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修复业务表有数据，过程表数据不存在的
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/compute/data/repairEquipmentData
   */
  iotComputeDataRepairEquipmentData<T = JsonValue>(
    body: DataServiceIotComputeDataRepairEquipmentDataBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/iot/compute/data/repairEquipmentData",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修复
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/compute/data/repairEquipmentHourData
   */
  iotComputeDataRepairEquipmentHourData<T = JsonValue>(
    body: DataServiceIotComputeDataRepairEquipmentHourDataBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-compute-migrate/iot/compute/data/repairEquipmentHourData",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：值班首页聚合
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/homepage/coolHeatSysStatusStatistics
   */
  iotDataAggregHomepageCoolHeatSysStatusStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregHomepageCoolHeatSysStatusStatisticsBody,
    query: DataServiceIotDataAggregHomepageCoolHeatSysStatusStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/homepage/coolHeatSysStatusStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：厨房排油烟状态统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/homepage/exhaustFumeStatusStatistics
   */
  iotDataAggregHomepageExhaustFumeStatusStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregHomepageExhaustFumeStatusStatisticsBody,
    query: DataServiceIotDataAggregHomepageExhaustFumeStatusStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/homepage/exhaustFumeStatusStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：通风状态统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/homepage/fanEquipmentStatusStatistics
   */
  iotDataAggregHomepageFanEquipmentStatusStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregHomepageFanEquipmentStatusStatisticsBody,
    query: DataServiceIotDataAggregHomepageFanEquipmentStatusStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/homepage/fanEquipmentStatusStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：照明状态统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/homepage/lightingStatusStatistics
   */
  iotDataAggregHomepageLightingStatusStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregHomepageLightingStatusStatisticsBody,
    query: DataServiceIotDataAggregHomepageLightingStatusStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/homepage/lightingStatusStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：空调末端状态统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/homepage/terminalObjectStatusStatistics
   */
  iotDataAggregHomepageTerminalObjectStatusStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregHomepageTerminalObjectStatusStatisticsBody,
    query: DataServiceIotDataAggregHomepageTerminalObjectStatusStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/homepage/terminalObjectStatusStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：运行监控-冷机统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/watch/chillerStatistics
   */
  iotDataAggregWatchChillerStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregWatchChillerStatisticsBody,
    query: DataServiceIotDataAggregWatchChillerStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/watch/chillerStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：泵组开启台数统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/watch/chillPumpStatistics
   */
  iotDataAggregWatchChillPumpStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregWatchChillPumpStatisticsBody,
    query: DataServiceIotDataAggregWatchChillPumpStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/watch/chillPumpStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：排油烟对象统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/watch/exhaustFumeStatistics
   */
  iotDataAggregWatchExhaustFumeStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregWatchExhaustFumeStatisticsBody,
    query: DataServiceIotDataAggregWatchExhaustFumeStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/watch/exhaustFumeStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：通风统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/watch/fanStatistics
   */
  iotDataAggregWatchFanStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregWatchFanStatisticsBody,
    query: DataServiceIotDataAggregWatchFanStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/watch/fanStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：照明状态统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/watch/lightingStatistics
   */
  iotDataAggregWatchLightingStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregWatchLightingStatisticsBody,
    query: DataServiceIotDataAggregWatchLightingStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/watch/lightingStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：感知监控
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/watch/securityEquipmentStatistics
   */
  iotDataAggregWatchSecurityEquipmentStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregWatchSecurityEquipmentStatisticsBody,
    query: DataServiceIotDataAggregWatchSecurityEquipmentStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/watch/securityEquipmentStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：撤布防空间统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/watch/spaceSecurityStatistics
   */
  iotDataAggregWatchSpaceSecurityStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregWatchSpaceSecurityStatisticsBody,
    query: DataServiceIotDataAggregWatchSpaceSecurityStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/watch/spaceSecurityStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：末端统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/aggreg/watch/terminalStatistics
   */
  iotDataAggregWatchTerminalStatistics<T = JsonValue>(
    body: DataServiceIotDataAggregWatchTerminalStatisticsBody,
    query: DataServiceIotDataAggregWatchTerminalStatisticsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/data/aggreg/watch/terminalStatistics",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：负载模拟造数
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/createLoadAccdE
   */
  iotDataCreateLoadAccdE<T = JsonValue>(
    query: DataServiceIotDataCreateLoadAccdEQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-compute-migrate/iot/data/createLoadAccdE",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：分项模拟造数
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/createSubentry
   */
  iotDataCreateSubentry<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-compute-migrate/iot/data/createSubentry",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：获取hbase删除sql
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/getDeleteSql
   */
  iotDataGetDeleteSql<T = JsonValue>(
    body: DataServiceIotDataGetDeleteSqlBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/iot/data/getDeleteSql",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：获取分区号
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：GET /iot/data/getRegionNo
   */
  iotDataGetRegionNo<T = JsonValue>(
    query: DataServiceIotDataGetRegionNoQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-compute-migrate/iot/data/getRegionNo",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：获取rowkey
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/data/getRowkeySql
   */
  iotDataGetRowkeySql<T = JsonValue>(
    body: DataServiceIotDataGetRowkeySqlBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/iot/data/getRowkeySql",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：刷新持久化查询项目缓存
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/hbaseInfo/flushTableCache
   */
  iotHbaseInfoFlushTableCache<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/hbaseInfo/flushTableCache",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：表结构初始化
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/hbaseInfo/init
   */
  iotHbaseInfoInit<T = JsonValue>(
    body: DataServiceIotHbaseInfoInitBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/hbaseInfo/init",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：持久化异常数据统计查询
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/ipcal/data/queryAbnormalDataStatistics
   */
  iotIpcalDataQueryAbnormalDataStatistics<T = JsonValue>(
    body: DataServiceIotIpcalDataQueryAbnormalDataStatisticsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/ipcal/data/queryAbnormalDataStatistics",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：queryIPDataByValueTypeInPeriod
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/ipcal/data/queryIPDataByValueTypeInPeriod
   */
  iotIpcalDataQueryIPDataByValueTypeInPeriod<T = JsonValue>(
    body: DataServiceIotIpcalDataQueryIPDataByValueTypeInPeriodBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/ipcal/data/queryIPDataByValueTypeInPeriod",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：queryIPDataInPeriod
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/ipcal/data/queryIPDataInPeriod
   */
  iotIpcalDataQueryIPDataInPeriod<T = JsonValue>(
    body: DataServiceIotIpcalDataQueryIPDataInPeriodBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/ipcal/data/queryIPDataInPeriod",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：queryIPDataOnMoment
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/ipcal/data/queryIPDataOnMoment
   */
  iotIpcalDataQueryIPDataOnMoment<T = JsonValue>(
    body: DataServiceIotIpcalDataQueryIPDataOnMomentBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/ipcal/data/queryIPDataOnMoment",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：项目电价
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/ipcal/data/queryProjectElecPrice
   */
  iotIpcalDataQueryProjectElecPrice<T = JsonValue>(
    body: DataServiceIotIpcalDataQueryProjectElecPriceBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/ipcal/data/queryProjectElecPrice",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询人工采集数据
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/manual/queryIotData
   */
  iotManualQueryIotData<T = JsonValue>(
    body: DataServiceIotManualQueryIotDataBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/manual/queryIotData",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询对象下有人工观测数据的信息点
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/manual/queryObjectsInfoPoint
   */
  iotManualQueryObjectsInfoPoint<T = JsonValue>(
    body: DataServiceIotManualQueryObjectsInfoPointBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/manual/queryObjectsInfoPoint",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：保存人工采集数
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/manual/save
   */
  iotManualSave<T = JsonValue>(
    body: DataServiceIotManualSaveBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/iot/manual/save",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询设备点位统计值【根据历史数据-电流统计】
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /iot/statistic/queryStatisticDataByObjectInfo
   */
  iotStatisticQueryStatisticDataByObjectInfo<T = JsonValue>(
    body: DataServiceIotStatisticQueryStatisticDataByObjectInfoBody,
    query: DataServiceIotStatisticQueryStatisticDataByObjectInfoQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-analysis-server/iot/statistic/queryStatisticDataByObjectInfo",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：信息点维度聚合
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /ipcal/data/aggreg/infoCode
   */
  ipcalDataAggregInfoCode<T = JsonValue>(
    body: DataServiceIpcalDataAggregInfoCodeBody,
    query: DataServiceIpcalDataAggregInfoCodeQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/ipcal/data/aggreg/infoCode",
      method: "POST",
      query: { ...{ groupCode: config.groupCode }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：按项目&时间汇总
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /ipcal/data/aggreg/projectAndTime
   */
  ipcalDataAggregProjectAndTime<T = JsonValue>(
    body: DataServiceIpcalDataAggregProjectAndTimeBody,
    query: DataServiceIpcalDataAggregProjectAndTimeQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/ipcal/data/aggreg/projectAndTime",
      method: "POST",
      query: { ...{ groupCode: config.groupCode }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：按项目或时间维度聚合数据
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /ipcal/data/aggreg/projectOrTime
   */
  ipcalDataAggregProjectOrTime<T = JsonValue>(
    body: DataServiceIpcalDataAggregProjectOrTimeBody,
    query: DataServiceIpcalDataAggregProjectOrTimeQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/ipcal/data/aggreg/projectOrTime",
      method: "POST",
      query: { ...{ groupCode: config.groupCode }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：无需聚合
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /ipcal/data/aggreg/subentry
   */
  ipcalDataAggregSubentry<T = JsonValue>(
    body: DataServiceIpcalDataAggregSubentryBody,
    query: DataServiceIpcalDataAggregSubentryQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/ipcal/data/aggreg/subentry",
      method: "POST",
      query: { ...{ groupCode: config.groupCode }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询设备一天持久化数据统计值
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /ipcal/data/queryIpDataStatisticalDuration
   */
  ipcalDataQueryIpDataStatisticalDuration<T = JsonValue>(
    body: DataServiceIpcalDataQueryIpDataStatisticalDurationBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/ipcal/data/queryIpDataStatisticalDuration",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据信息点枚举值统计对象数量
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /ipcal/data/queryObjectCount
   */
  ipcalDataQueryObjectCount<T = JsonValue>(
    body: DataServiceIpcalDataQueryObjectCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/ipcal/data/queryObjectCount",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查找最新的持久化数据(能源报警业务定制)
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /ipcal/data/queryRealTimeIpData
   */
  ipcalDataQueryRealTimeIpData<T = JsonValue>(
    body: DataServiceIpcalDataQueryRealTimeIpDataBody,
    query: DataServiceIpcalDataQueryRealTimeIpDataQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-persist-server/ipcal/data/queryRealTimeIpData",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：mapReduce任务-按条件迁移
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /mapReduce/executeJobByConditions
   */
  mapReduceExecuteJobByConditions<T = JsonValue>(
    body: DataServiceMapReduceExecuteJobByConditionsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/mapReduce/executeJobByConditions",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：mapReduce任务-表全量数据迁移
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /mapReduce/job/execute
   */
  mapReduceJobExecute<T = JsonValue>(
    body: DataServiceMapReduceJobExecuteBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/mapReduce/job/execute",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：新增订阅
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/compute/subscribe/add
   */
  rwdComputeSubscribeAdd<T = JsonValue>(
    body: DataServiceRwdComputeSubscribeAddBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/compute/subscribe/add",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：删除信息点订阅信息
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/compute/subscribe/delete
   */
  rwdComputeSubscribeDelete<T = JsonValue>(
    body: DataServiceRwdComputeSubscribeDeleteBody,
    query: DataServiceRwdComputeSubscribeDeleteQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/compute/subscribe/delete",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：订阅topic缓存推送
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/compute/subscribe/subscribeInfoToRedis
   */
  rwdComputeSubscribeSubscribeInfoToRedis<T = JsonValue>(
    body: DataServiceRwdComputeSubscribeSubscribeInfoToRedisBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/compute/subscribe/subscribeInfoToRedis",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改信息点订阅信息
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/compute/subscribe/update
   */
  rwdComputeSubscribeUpdate<T = JsonValue>(
    body: DataServiceRwdComputeSubscribeUpdateBody,
    query: DataServiceRwdComputeSubscribeUpdateQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/compute/subscribe/update",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：手工新增规则实例
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/instantiate/add
   */
  rwdInstantiateAdd<T = JsonValue>(
    body: DataServiceRwdInstantiateAddBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/rwd/instantiate/add",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：删除持久化规则
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/instantiate/delete
   */
  rwdInstantiateDelete<T = JsonValue>(
    body: DataServiceRwdInstantiateDeleteBody,
    query: DataServiceRwdInstantiateDeleteQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/rwd/instantiate/delete",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询设备点位规则实例化详情
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：GET /rwd/instantiate/query/objId
   */
  rwdInstantiateQueryObjId<T = JsonValue>(
    query: DataServiceRwdInstantiateQueryObjIdQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/rwd/instantiate/query/objId",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量查询持久化规则
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/instantiate/query/objId/batch
   */
  rwdInstantiateQueryObjIdBatch<T = JsonValue>(
    body: DataServiceRwdInstantiateQueryObjIdBatchBody,
    query: DataServiceRwdInstantiateQueryObjIdBatchQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/rwd/instantiate/query/objId/batch",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改持久化规则
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/instantiate/update
   */
  rwdInstantiateUpdate<T = JsonValue>(
    body: DataServiceRwdInstantiateUpdateBody,
    query: DataServiceRwdInstantiateUpdateQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/rwd/instantiate/update",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量点位在线状态查询
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/ipcal/point/listPointStatus
   */
  rwdIpcalPointListPointStatus<T = JsonValue>(
    body: DataServiceRwdIpcalPointListPointStatusBody,
    query: DataServiceRwdIpcalPointListPointStatusQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/ipcal/point/listPointStatus",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：E4.1 查找对象下动态点的持久化计算来源类型
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/ipcal/point/queryInfoPointCalType
   */
  rwdIpcalPointQueryInfoPointCalType<T = JsonValue>(
    body: DataServiceRwdIpcalPointQueryInfoPointCalTypeBody,
    query: DataServiceRwdIpcalPointQueryInfoPointCalTypeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/ipcal/point/queryInfoPointCalType",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询设备持久化规则信息
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/ipcal/point/queryInfoPointPeroid
   */
  rwdIpcalPointQueryInfoPointPeroid<T = JsonValue>(
    body: DataServiceRwdIpcalPointQueryInfoPointPeroidBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/ipcal/point/queryInfoPointPeroid",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：E1.3查找对象下哪些动态点有持久化数据，并提供持久化数据丰度信息
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/ipcal/point/queryInfoPointPeroidAndAbundanceInfo
   */
  rwdIpcalPointQueryInfoPointPeroidAndAbundanceInfo<T = JsonValue>(
    body: DataServiceRwdIpcalPointQueryInfoPointPeroidAndAbundanceInfoBody,
    query: DataServiceRwdIpcalPointQueryInfoPointPeroidAndAbundanceInfoQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/ipcal/point/queryInfoPointPeroidAndAbundanceInfo",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：E1.2查找持久化有值的对象
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/ipcal/point/queryObjectsOfExistRule
   */
  rwdIpcalPointQueryObjectsOfExistRule<T = JsonValue>(
    body: DataServiceRwdIpcalPointQueryObjectsOfExistRuleBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/ipcal/point/queryObjectsOfExistRule",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：设备在离线状态统计查询
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/data-service/openapi.json
   * HTTP：POST /rwd/ipcal/point/statsPointStatus
   */
  rwdIpcalPointStatsPointStatus<T = JsonValue>(
    body: DataServiceRwdIpcalPointStatsPointStatusBody,
    query: DataServiceRwdIpcalPointStatsPointStatusQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/ipcal/point/statsPointStatus",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  }
  };
}
