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
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/Root
 */
export type PhysicalWorldServiceRoot = {
  /** 项目id/建筑id/系统id */
  id?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 返回信息控制 */
  withColumns?: string[];
  page: number;
  size: number;
};

/**
 * OpenAPI 组件类型：Root2
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/Root2
 */
export type PhysicalWorldServiceRoot2 = {
  /** 项目id/建筑id/系统id */
  id?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 返回信息控制 */
  withColumns?: string[];
  page?: number;
  size?: number;
};

/**
 * OpenAPI 组件类型：请求体
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/Root3
 */
export type PhysicalWorldServiceRoot3 = {
  /** 楼层id/空间id/主要功能区id/项目id */
  id: string;
  /** 设备六位编码 */
  classCode: string;
  /** 自定义返回字段 */
  withColumns?: string[];
  /** 页：默认第一页 */
  page: number;
  /** 分页条数：默认10条 */
  size: number;
};

/**
 * OpenAPI 组件类型：: 请求参数
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/Root4
 */
export type PhysicalWorldServiceRoot4 = {
  /** 账号id */
  userId?: string;
  /** 管理分区id */
  groupManageZoneIds?: string[];
  /** 分页页码,从 1 开始 */
  page?: number;
  /** 每页行数 */
  size?: number;
  /** 筛选关键字,本地名称筛选 */
  keyword?: string;
  /** 是否只统计总数 */
  onlyCount?: boolean;
  /** 创建时间筛选范围 */
  createTimeScope?: {
    startEq?: string;
    endEq?: string;
  };
  /** 返回信息点过滤,仅过滤infos内的信息点,基础信息点不过滤 */
  returnInfos?: string[];
  /** 查询有效数据,true,false */
  validSet?: number[];
  /** 集团编码 */
  groupCode?: string;
  /** 项目id */
  projectId?: string;
  /** 项目id数组 */
  projectIds?: string[];
  /** 建筑id */
  buildingId?: string;
  /** 楼层id */
  floorId: string;
  /** 楼层id */
  spaceId: string;
  /** 系统id */
  systemId: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型集合 */
  roomFuncTypes?: string[];
  /** 对象类型 */
  classCode: string;
  /** 对象关系id */
  relId?: string;
  /** 关系Code */
  relCode?: string;
  /** 对象分类 */
  objType?: string;
  /** 设备id */
  equipmentId?: string;
  /** localid */
  localId?: string;
  /** localName */
  localName?: string;
  /** 数字化交付名称 */
  digitalDeliveryName?: string;
  /** 对象类型数组 */
  classCodes?: string[];
  /** 对象分类数组 */
  objTypes?: string[];
  /** 跳跃条数 */
  skip?: number;
  /** 关系code数组 */
  relCodes?: string[];
  /** 查询部件标记,true-查询,false-不查询 */
  queryEcFlag?: boolean;
  /** 部件关系码 */
  ecRelCodes?: string[];
  /** 过滤的对象id */
  filterObjId?: string;
  /** 安装位置 */
  installLocation?: string;
  /** 生产厂家 */
  manufacturer?: string;
  /** 维保单位名称 */
  warranter?: string;
  /** 设备状态 */
  equipStatus?: string;
  /** 排序条件 */
  orders?: {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认 true */
    asc?: boolean;
  }[];
  /** 码表数据code */
  codes?: string[];
  /** 码表数据code */
  parentCode?: string;
  /** 码表类型 */
  typeCode?: string;
  /** 图类型编码 */
  graphCode?: string;
  /** 关系值 */
  relValue?: string;
  /** 主对象分类 */
  masterObjType?: string;
  /** 从对象分类 */
  slaveObjType?: string;
  /** 信息点名称，CADID图纸编码(cadId),设备名称(name),设备ID(id),本地编码(localId),本地名称(localName) */
  type?: string;
  /** 主对象内容 */
  mainContent?: string;
  /** 从对象内容 */
  slaveContent?: string[];
  /** 计算标记 1 为手动 2为自动 */
  sign?: string;
  /** 创建关系时是否带上relValue,默认不赋值 */
  hasRelValue?: boolean;
  /** 查询从对象时是否过滤主对象id,默认过滤 */
  hasFilterMasterId?: boolean;
  /** 查询从对象时是否过滤classCode,true-过滤,false-不过滤,默认不过滤 */
  hasFilterClassCode?: boolean;
  /** 是否检查传感器类型,true-检查,false-不检查,默认不检查 */
  hasCheckSensor?: boolean;
  /** 是否检查classCode,true-检查,false-不检查,默认不检查 */
  hasCheckClassCode?: boolean;
  /** 是否检查classCode使用的classCodes列表 */
  checkClassCodes?: string[];
  /** 是否检查传感器使用的传感器类型列表 */
  checkSensorCodes?: string[];
  /** 过滤的计算标记,1-手动计算,2-自动计算 */
  filterSigns?: string[];
  /** 是否计算前置关系,true-计算,false-不计算.默认不计算 */
  calBeforeRelFlag?: boolean;
  /** 信息点分组统计 */
  groups?: string[];
  /** distinct 查询 系统定制 */
  projection?: string[];
};

/**
 * OpenAPI 组件类型：key
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/key
 */
export type PhysicalWorldServiceKey = Record<string, never>;

/**
 * OpenAPI 组件类型：MapObject
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/MapObject
 */
export type PhysicalWorldServiceMapObject = {
  "{}"?: PhysicalWorldServiceEmptyObjectEmptyObject;
};

/**
 * OpenAPI 组件类型：OrderItem
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/OrderItem
 */
export type PhysicalWorldServiceOrderItem = {
  column?: string;
  asc?: boolean;
};

/**
 * OpenAPI 组件类型：{}
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/{}
 */
export type PhysicalWorldServiceEmptyObjectEmptyObject = Record<string, never>;

/**
 * OpenAPI 组件类型：MapObject1
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/MapObject1
 */
export type PhysicalWorldServiceMapObject1 = {
  key?: PhysicalWorldServiceKey;
};

/**
 * OpenAPI 组件类型：RMapObject
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RMapObject
 */
export type PhysicalWorldServiceRMapObject = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceMapObject1;
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：RVoid
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RVoid
 */
export type PhysicalWorldServiceRVoid = {
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：JsonNodeFactory
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/JsonNodeFactory
 */
export type PhysicalWorldServiceJsonNodeFactory = {
  _cfgBigDecimalExact?: boolean;
};

/**
 * OpenAPI 组件类型：MapJsonNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/MapJsonNode
 */
export type PhysicalWorldServiceMapJsonNode = {
  key?: Record<string, never>[][][];
};

/**
 * OpenAPI 组件类型：ObjectNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ObjectNode
 */
export type PhysicalWorldServiceObjectNode = {
  _nodeFactory?: PhysicalWorldServiceJsonNodeFactory;
  _children?: PhysicalWorldServiceMapJsonNode;
};

/**
 * OpenAPI 组件类型：AssetTree
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/AssetTree
 */
export type PhysicalWorldServiceAssetTree = {
  code?: string;
  name?: string;
  sort?: number;
  extras?: PhysicalWorldServiceObjectNode;
  managementCategory?: string;
  children?: PhysicalWorldServiceAssetTree[];
};

/**
 * OpenAPI 组件类型：ArrayNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ArrayNode
 */
export type PhysicalWorldServiceArrayNode = {
  /** We will keep a reference to the Object (usually TreeMapper)
that can construct instances of nodes to add to this container
node. */
  _nodeFactory?: PhysicalWorldServiceJsonNodeFactory;
  _children?: Record<string, never>[][][][];
};

/**
 * OpenAPI 组件类型：RArrayNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RArrayNode
 */
export type PhysicalWorldServiceRArrayNode = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceArrayNode;
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：RelInfo
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RelInfo
 */
export type PhysicalWorldServiceRelInfo = {
  /** 业务唯一编码 */
  code?: string;
  /** 图 编码 */
  graphCode?: string;
  /** 边 编码 */
  relCode?: string;
  /** 方向 */
  dir?: string;
  /** 对象实例id集合 */
  ids?: string[];
  criteria?: PhysicalWorldServiceObjectNode;
  /** 是否过滤实例化规则 */
  filter?: boolean;
};

/**
 * OpenAPI 组件类型：AssetRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/AssetRequest
 */
export type PhysicalWorldServiceAssetRequest = {
  /** 树类型:1-设备,2-系统树,3-空间树 */
  type?: number;
  /** 所选节点层级:0-全部,1-专业,2-设备定位,3-对象类型 */
  level?: number;
  /** 是否只统计:true-只统计，false-带实例localName */
  onlyCount?: boolean;
  /** 数据权限入参 + 信息点值过滤 */
  criteria?: PhysicalWorldServiceObjectNode;
  /** 是否过滤实例化规则 */
  filter?: boolean;
  /** 是否翻译枚举值
需要注意，翻译的列表数据中所有的classCode不能超过20个，超过20个会报错 */
  transfer?: boolean;
  /** 所选节点编码 */
  code?: string;
  /** 需要统计的信息点 */
  countColumns?: string[];
  /** 查询的信息点 */
  withColumns?: string[];
  /** 查询的信息点
格式：图_边 */
  withRels?: string[];
  /** 层级树参数 */
  tree?: PhysicalWorldServiceAssetTree[];
  /** 项目id列表，仅限复制的时候用 */
  projectIds?: string[];
  /** 设备定位编码 */
  equipPosCodes?: string[];
  /** 关系 */
  rels?: PhysicalWorldServiceRelInfo[];
  /** 此参数用到的地方
1、内部逻辑使用,入参别传
2、多关系查询场景 */
  ids?: string[];
  page?: number;
  size?: number;
};

/**
 * OpenAPI 组件类型：RListObjectNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RListObjectNode
 */
export type PhysicalWorldServiceRListObjectNode = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceObjectNode[];
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：TimeZone
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/TimeZone
 */
export type PhysicalWorldServiceTimeZone = {
  /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
  ID?: string;
};

/**
 * OpenAPI 组件类型：Calendar
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/Calendar
 */
export type PhysicalWorldServiceCalendar = {
  /** The calendar field values for the currently set time for this calendar.
This is an array of FIELD_COUNT integers, with index values
ERA through DST_OFFSET. */
  fields?: number[];
  /** The flags which tell if a specified calendar field for the calendar is set.
A new object has no fields set.  After the first call to a method
which generates the fields, they all remain set after that.
This is an array of FIELD_COUNT booleans, with index values
ERA through DST_OFFSET. */
  isSet?: boolean[];
  /** The currently set time for this calendar, expressed in milliseconds after
January 1, 1970, 0:00:00 GMT. */
  time?: number;
  /** True if then the value of time is valid.
The time is made invalid by a change to an item of field[]. */
  isTimeSet?: boolean;
  /** True if fields[] are in sync with the currently set time.
If false, then the next attempt to get the value of a field will
force a recomputation of all fields from the current value of
time. */
  areFieldsSet?: boolean;
  /** True if this calendar allows out-of-range field values during computation
of time from fields[]. */
  lenient?: boolean;
  /** The TimeZone used by this calendar. Calendar
uses the time zone data to translate between locale and GMT time. */
  zone?: PhysicalWorldServiceTimeZone;
  /** The first day of the week, with possible values SUNDAY,
MONDAY, etc.  This is a locale-dependent value. */
  firstDayOfWeek?: number;
  /** The number of days required for the first week in a month or year,
with possible values from 1 to 7.  This is a locale-dependent value. */
  minimalDaysInFirstWeek?: number;
  /** The next available value for stamp[], an internal array.
This actually should not be written out to the stream, and will probably
be removed from the stream in the near future.  In the meantime,
a value of MINIMUM_USER_STAMP should be used. */
  nextStamp?: number;
  /** The version of the serialized data on the stream.  Possible values:

0 or not present on stream

JDK 1.1.5 or earlier.

1

JDK 1.1.6 or later.  Writes a correct 'time' value
as well as compatible values for other fields.  This is a
transitional format.


When streaming out this class, the most recent format
and the highest allowable serialVersionOnStream
is written. */
  serialVersionOnStream?: number;
};

/**
 * OpenAPI 组件类型：PsDateTime
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/PsDateTime
 */
export type PhysicalWorldServicePsDateTime = {
  calendar?: PhysicalWorldServiceCalendar;
};

/**
 * OpenAPI 组件类型：PublishLastChange
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/PublishLastChange
 */
export type PhysicalWorldServicePublishLastChange = {
  id?: string;
  valid?: number;
  creationTime?: PhysicalWorldServicePsDateTime;
  creator?: string;
  modifiedTime?: PhysicalWorldServicePsDateTime;
  modifier?: string;
  groupCode?: string;
  projectId?: string;
  /** 实例id */
  instanceId?: string;
  /** 最后一次操作的日志id */
  logId?: string;
  /** 操作：0-删除，1-新增, 2-更新 */
  operator?: number;
  /** 实例分类:0-对象,1-对象信息点,2-关系,3-关系信息点,4-iot绑点，5-iot绑点信息,6-revit模型信息 */
  instanceType?: number;
  /** 变化信息 */
  changeInfo?: Record<string, never>[][][];
};

/**
 * OpenAPI 组件类型：RCollectionPublishLastChange
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RCollectionPublishLastChange
 */
export type PhysicalWorldServiceRCollectionPublishLastChange = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServicePublishLastChange[];
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：LastChaneDto
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/LastChaneDto
 */
export type PhysicalWorldServiceLastChaneDto = {
  /** 实例id */
  instanceId?: string;
  /** 操作：0-删除，1-新增, 2-更新 */
  operator?: number;
  /** 例分类:0-对象,1-对象信息点,2-关系,3-关系信息点,4-iot绑点，5-iot绑点信息点,6-revit模型信息 */
  instanceType?: number;
};

/**
 * OpenAPI 组件类型：MapBoolean
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/MapBoolean
 */
export type PhysicalWorldServiceMapBoolean = {
  key?: boolean;
};

/**
 * OpenAPI 组件类型：RMapBoolean
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RMapBoolean
 */
export type PhysicalWorldServiceRMapBoolean = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceMapBoolean;
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：key2
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/key2
 */
export type PhysicalWorldServiceKey2 = {
  /** We will keep a reference to the Object (usually TreeMapper)
that can construct instances of nodes to add to this container
node. */
  _nodeFactory?: PhysicalWorldServiceJsonNodeFactory;
  /** Note: LinkedHashMap for backwards compatibility */
  _children?: PhysicalWorldServiceMapJsonNode;
};

/**
 * OpenAPI 组件类型：MapListMapObject
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/MapListMapObject
 */
export type PhysicalWorldServiceMapListMapObject = {
  key?: PhysicalWorldServiceKey2[];
};

/**
 * OpenAPI 组件类型：RMapListMapObject
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RMapListMapObject
 */
export type PhysicalWorldServiceRMapListMapObject = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceMapListMapObject;
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：MapSetObjectNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/MapSetObjectNode
 */
export type PhysicalWorldServiceMapSetObjectNode = {
  key?: PhysicalWorldServiceKey2[];
};

/**
 * OpenAPI 组件类型：RMapSetObjectNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RMapSetObjectNode
 */
export type PhysicalWorldServiceRMapSetObjectNode = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceMapSetObjectNode;
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：WorkOrderRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/WorkOrderRequest
 */
export type PhysicalWorldServiceWorkOrderRequest = {
  /** id列表(空间id) */
  ids?: string[];
  /** 是否正序排列，默认 true */
  asc?: boolean;
  /** 专业 */
  major?: string;
  /** 对象类型编码 */
  classCodes?: string[];
  /** 空间功能类型编码 */
  roomFuncType?: string[];
  /** 信息点值过滤 */
  criteria?: PhysicalWorldServiceObjectNode;
  /** 搜索词 */
  keyword?: string;
  /** 对象类型 */
  objType?: string;
  page?: number;
  size?: number;
};

/**
 * OpenAPI 组件类型：IotServerPoint
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/IotServerPoint
 */
export type PhysicalWorldServiceIotServerPoint = {
  id?: string;
  valid?: number;
  modifiedTime?: PhysicalWorldServicePsDateTime;
  /** 对象id */
  objectId?: string;
  /** 对象类型编码 */
  classCode?: string;
  /** 信息点编码 */
  infoCode?: string;
  /** 协议类型:obix,UDP,LoRaWAN */
  protocolType?: string;
  /** 品牌:honeywell,persagy */
  brand?: string;
  /** 协议字段信息 */
  keyInfo?: PhysicalWorldServiceObjectNode;
  /** 协议信息 */
  valueInfo?: PhysicalWorldServiceObjectNode;
  /** 是否绑点 0-否 1-是 */
  isPoint?: number;
  /** 对接类型：10-对接本地服务器/对接系统  20- 对接测控设备 30 -对接网关 ；-1 -无需对接 */
  dataType?: number;
  /** 本条数据是否为最终态：0-否 1-是 */
  isFinaly?: number;
  /** 在线状态：0-离线 1-在线.默认为1 */
  onlineStatus?: number;
};

/**
 * OpenAPI 组件类型：RListIotServerPoint
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RListIotServerPoint
 */
export type PhysicalWorldServiceRListIotServerPoint = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceIotServerPoint[];
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：IotServerPointDto
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/IotServerPointDto
 */
export type PhysicalWorldServiceIotServerPointDto = {
  /** 协议类型:obix,UDP,LoRaWAN */
  protocolType?: string;
  /** 品牌:honeywell,persagy */
  brand?: string;
  /** 对象id集合 */
  objectIdSet?: string[];
  /** 信息点编码集合 */
  infoCodeSet?: string[];
  /** 对象类型集合 */
  classCodeSet?: string[];
  /** 在线状态：0-离线 1-在线.默认为1 */
  onlineStatusSet?: number[];
  /** 查询需排除的信息点编码 */
  excludeInfoCode?: string[];
  /** 排序字段
请使用RequestCriteria方式 */
  orders?: PhysicalWorldServiceOrderItem[];
};

/**
 * OpenAPI 组件类型：RequestCriteriaIotServerPointDto
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RequestCriteriaIotServerPointDto
 */
export type PhysicalWorldServiceRequestCriteriaIotServerPointDto = {
  page?: number;
  size?: number;
  onlyCount?: boolean;
  withoutCount?: boolean;
  criteria?: PhysicalWorldServiceIotServerPointDto;
  orders?: PhysicalWorldServiceOrderItem[];
  chineseOrderColumns?: string[];
  withColumns?: string[];
};

/**
 * OpenAPI 组件类型：ObjInfoQueryParam
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ObjInfoQueryParam
 */
export type PhysicalWorldServiceObjInfoQueryParam = {
  objectId?: string;
  infoCode?: string;
};

/**
 * OpenAPI 组件类型：ObjInfoTagParam
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ObjInfoTagParam
 */
export type PhysicalWorldServiceObjInfoTagParam = {
  classCode?: string;
  infoCode?: string;
};

/**
 * OpenAPI 组件类型：EdgePointQueryDto
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/EdgePointQueryDto
 */
export type PhysicalWorldServiceEdgePointQueryDto = {
  /** 同时查询对象id和本地名称 */
  objSearch?: string;
  /** 信息点编码 */
  infoCode?: string[];
  classCodes?: string[];
  /** 对接方式；10-系统直采 20-单设备直采 */
  dataType?: number[];
  objInfoList?: PhysicalWorldServiceObjInfoQueryParam[];
  /** 标签信息点 组合 */
  infoTagList?: PhysicalWorldServiceObjInfoTagParam[];
};

/**
 * OpenAPI 组件类型：RequestCriteriaEdgePointQueryDto
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RequestCriteriaEdgePointQueryDto
 */
export type PhysicalWorldServiceRequestCriteriaEdgePointQueryDto = {
  page?: number;
  size?: number;
  onlyCount?: boolean;
  withoutCount?: boolean;
  criteria?: PhysicalWorldServiceEdgePointQueryDto;
  orders?: PhysicalWorldServiceOrderItem[];
  chineseOrderColumns?: string[];
  withColumns?: string[];
};

/**
 * OpenAPI 组件类型：IotPointClassCodeVo
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/IotPointClassCodeVo
 */
export type PhysicalWorldServiceIotPointClassCodeVo = {
  classCode?: string;
  className?: string;
};

/**
 * OpenAPI 组件类型：RListIotPointClassCodeVo
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RListIotPointClassCodeVo
 */
export type PhysicalWorldServiceRListIotPointClassCodeVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceIotPointClassCodeVo[];
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：RListString
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RListString
 */
export type PhysicalWorldServiceRListString = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: string[];
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：IotPointCountVo
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/IotPointCountVo
 */
export type PhysicalWorldServiceIotPointCountVo = {
  /** 协议类型 */
  protocolType?: string;
  /** 绑点数量 */
  num?: number;
};

/**
 * OpenAPI 组件类型：RListIotPointCountVo
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RListIotPointCountVo
 */
export type PhysicalWorldServiceRListIotPointCountVo = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceIotPointCountVo[];
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：PublishDto
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/PublishDto
 */
export type PhysicalWorldServicePublishDto = {
  /** 文件下载链接
 https://dev-minioapi.ysbdtp.com/datapublish/20231120/DataPublish-TYXM-Pj9909990006-20231120193450827-1.zip */
  fileDownloadUrl?: string;
  /** @NotNull(message = "文件下载链接有误") */
  fileDownloadUrls?: string[];
  /** 此次任务的ID */
  deliveryLogId: string;
  /** dt_object和dt_relation需要特殊处理的信息，
如果此参数为空，不处理信息点，以下载的数据为主，直接替换;
如果不为空，则针对此部分信息点，遍历需要更新数据中的历史数据中的信息点进行合并处理，以某对像信息点businessEffectiveTime为例，有以下几种情况：
1.old.dt_object对象中json_extract(`infos`, '$.businessEffectiveTime') == null,new.dt_object对象中json_extract(`infos`, '$.businessEffectiveTime') ='xxxx' -> final.dt_Object：json_extract(`infos`, '$.businessEffectiveTime') ='xxxx'
2.old.dt_object对象中json_extract(`infos`, '$.businessEffectiveTime') == 'yyyy',new.dt_object对象中json_extract(`infos`, '$.businessEffectiveTime') ='xxxx' -> final.dt_Object：json_extract(`infos`, '$.businessEffectiveTime') ='xxxx'
3.old.dt_object对象中json_extract(`infos`, '$.businessEffectiveTime') == 'yyyy',new.dt_object对象中json_extract(`infos`, '$.businessEffectiveTime') == null -> final.dt_Object：json_extract(`infos`, '$.businessEffectiveTime') ='yyyy' */
  specificInfo?: string[];
  /** 是否是第一次发布 v2 */
  isFirstTime?: boolean;
  /** 是否覆盖资产属性点 默认为false
since:20250930 */
  isCoveredAssets?: boolean;
};

/**
 * OpenAPI 组件类型：RInteger
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RInteger
 */
export type PhysicalWorldServiceRInteger = {
  /** 错误码
结果码 */
  code?: string;
  /** success、fail
结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 返回数据
响应数据 */
  data?: number;
  /** 错误提示，用户可阅读
错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 记录总条数
当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: PhysicalWorldServiceOrderItem[];
  /** 时间戳
响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 通过 withColumns 可以控制返回的数据内容,可以一定程度上提供服务性能.
withColumns 粒度比较粗,一般由服务提供者决定哪些字段可以通过 withColumns 来控制.
扩展字段数据 */
  withColumns?: string[];
  /** 通过 includeColumns指定返回字段,可以一定程度上提供服务性能.
由服务提供者过滤字段，提高接口效率
指定返回字段 */
  includeColumns?: string[];
  /** 系统报错时，抛出的原生信息
异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：MapListObjectNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/MapListObjectNode
 */
export type PhysicalWorldServiceMapListObjectNode = {
  key?: PhysicalWorldServiceKey3[];
};

/**
 * OpenAPI 组件类型：ObjectDigital
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ObjectDigital
 */
export type PhysicalWorldServiceObjectDigital = {
  /** 实体类必须有的属性 */
  id?: string;
  /** 实体状态 - 有效标识 */
  valid?: number;
  /** 创建时间 */
  creationTime?: PhysicalWorldServicePsDateTime;
  /** 创建人 */
  creator?: string;
  /** 最后一次修改时间 */
  modifiedTime?: PhysicalWorldServicePsDateTime;
  /** 最后一个修改人 */
  modifier?: string;
  /** 项目ID */
  projectId?: string;
  /** 名称 */
  name: string;
  /** 本地编码 */
  localId?: string;
  /** 本地名称 */
  localName?: string;
  /** 对象分类 */
  objType?: string;
  /** 类型编码 */
  classCode: string;
  /** 集团编码 */
  groupCode?: string;
  /** 组标识 mysql8中grouping是关键字，必须标识 */
  grouping?: number;
  /** 边类型编码 */
  infos?: PhysicalWorldServiceObjectNode;
  /** 虚点清单 */
  virtualCodes?: string[];
  /** 创建应用 */
  createApp?: string;
  /** 最后修改应用 */
  updateApp?: string;
  /** 符合查询条件的数据总条数 */
  totalCount?: number;
  /** 来源的对象id集合 */
  objFromIds?: string[];
  /** 去向的对象id集合 */
  objToIds?: string[];
  /** 主从对象标记,true-主对象,false-从对象 */
  mainFlag?: boolean;
  /** CADID */
  cadId?: string;
  /** 模型id */
  modelId?: string;
  /** 序号 */
  sequenceId?: number;
  /** 是否使用的标记 */
  usedFlag?: boolean;
  /** 关联的对象列表 */
  relObjs?: PhysicalWorldServiceObjectDigital[];
  /** 对象的bim点坐标 */
  bimLocation?: PhysicalWorldServiceObjectNode;
  /** 对象的边界盒子坐标 */
  boundingBox?: PhysicalWorldServiceObjectNode;
  /** 对象的outline平面坐标 */
  outLines?: PhysicalWorldServiceArrayNode;
  /** 该对象的对象分类所拥有的classCode集合 */
  objTypeClassCodes?: string[];
  /** 单条数据验证信息存储 */
  mark?: string;
  /** 对象所属关系对象ID */
  relObjIds?: string[];
  /** 对象所属空间功能类型 */
  roomFuncType?: string[];
  /** 骨架线 */
  skeletonLine?: PhysicalWorldServiceArrayNode;
  /** 楼层id */
  floorId?: string;
  /** 距离 */
  distance?: number;
  /** 对象类型名称 */
  classCodeName?: string;
  /** objTo */
  objTo?: string;
  /** objFrom */
  objFrom?: string;
  /** systemId */
  systemId?: string;
  /** 聚合结果 */
  aggregate?: PhysicalWorldServiceMapListObjectNode;
};

/**
 * OpenAPI 组件类型：RListObjectDigital
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RListObjectDigital
 */
export type PhysicalWorldServiceRListObjectDigital = {
  /** 错误码
结果码 */
  code?: string;
  /** success、fail
结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 返回数据
响应数据 */
  data?: PhysicalWorldServiceObjectDigital[];
  /** 错误提示，用户可阅读
错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 记录总条数
当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: PhysicalWorldServiceOrderItem[];
  /** 时间戳
响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 通过 withColumns 可以控制返回的数据内容,可以一定程度上提供服务性能.
withColumns 粒度比较粗,一般由服务提供者决定哪些字段可以通过 withColumns 来控制.
扩展字段数据 */
  withColumns?: string[];
  /** 通过 includeColumns指定返回字段,可以一定程度上提供服务性能.
由服务提供者过滤字段，提高接口效率
指定返回字段 */
  includeColumns?: string[];
  /** 系统报错时，抛出的原生信息
异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：key4
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/key4
 */
export type PhysicalWorldServiceKey4 = {
  /** We will keep a reference to the Object (usually TreeMapper)
that can construct instances of nodes to add to this container
node. */
  _nodeFactory?: PhysicalWorldServiceJsonNodeFactory;
  /** Note: LinkedHashMap for backwards compatibility */
  _children?: PhysicalWorldServiceMapJsonNode;
};

/**
 * OpenAPI 组件类型：key5
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/key5
 */
export type PhysicalWorldServiceKey5 = {
  /** We will keep a reference to the Object (usually TreeMapper)
that can construct instances of nodes to add to this container
node. */
  _nodeFactory?: PhysicalWorldServiceJsonNodeFactory;
  /** Note: LinkedHashMap for backwards compatibility */
  _children?: PhysicalWorldServiceMapJsonNode;
};

/**
 * OpenAPI 组件类型：key3
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/key3
 */
export type PhysicalWorldServiceKey3 = {
  /** We will keep a reference to the Object (usually TreeMapper)
that can construct instances of nodes to add to this container
node. */
  _nodeFactory?: PhysicalWorldServiceJsonNodeFactory;
  /** Note: LinkedHashMap for backwards compatibility */
  _children?: PhysicalWorldServiceMapJsonNode;
};

/**
 * OpenAPI 组件类型：PublishDataMsg
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/PublishDataMsg
 */
export type PhysicalWorldServicePublishDataMsg = {
  deliveryLogId?: string;
  /** 操作状态:2=处理失败, 3=处理成功 */
  status?: number;
  message?: string;
  /** 项目id */
  projectId?: string;
  /** 集团编码 */
  groupCode?: string;
};

/**
 * OpenAPI 组件类型：PublishDataRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/PublishDataRequest
 */
export type PhysicalWorldServicePublishDataRequest = {
  /** 最新一次发布对应的发布id */
  id?: string;
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
  /** 受体种类标识：1-对象，2-对象信息点，3-关系，4-关系信息点 */
  type?: number[];
  /** 操作类型：1-新增，2-变更(修改)，0-删除 */
  operateType?: number[];
  /** 对象类型编码(关系过滤，即一侧有此对象类的关系实例，才是符合条件的) */
  classCode?: string;
  /** 空间功能类型便那吗 */
  roomFuncType?: string;
  /** 图(用于查询关系的新增和删除) */
  graphCode?: string;
  /** 边(用于查询关系的新增和删除) */
  relCode?: string;
  withColumns?: string[];
  page?: number;
  size?: number;
};

/**
 * OpenAPI 组件类型：MapObjectNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/MapObjectNode
 */
export type PhysicalWorldServiceMapObjectNode = {
  key?: PhysicalWorldServiceKey;
};

/**
 * OpenAPI 组件类型：RMapObjectNode
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RMapObjectNode
 */
export type PhysicalWorldServiceRMapObjectNode = {
  /** 错误码
结果码 */
  code?: string;
  /** success、fail
结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 返回数据
响应数据 */
  data?: PhysicalWorldServiceMapObjectNode;
  /** 错误提示，用户可阅读
错误提示信息 */
  message?: string;
  /** 返回记录条数或者操作记录条数 */
  count?: number;
  /** 记录总条数
当前满足条件总行数 */
  total?: number;
  /** 每页显示条数 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 当前分页总页数 */
  pages?: number;
  /** 排序信息，排序的字段和正反序 */
  orders?: PhysicalWorldServiceOrderItem[];
  /** 时间戳
响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
  /** 链路traceId */
  traceId?: string;
  /** 通过 withColumns 可以控制返回的数据内容,可以一定程度上提供服务性能.
withColumns 粒度比较粗,一般由服务提供者决定哪些字段可以通过 withColumns 来控制.
扩展字段数据 */
  withColumns?: string[];
  /** 通过 includeColumns指定返回字段,可以一定程度上提供服务性能.
由服务提供者过滤字段，提高接口效率
指定返回字段 */
  includeColumns?: string[];
  /** 系统报错时，抛出的原生信息
异常消息 */
  cause?: string;
};

/**
 * OpenAPI 组件类型：ResponsibilityInfo
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ResponsibilityInfo
 */
export type PhysicalWorldServiceResponsibilityInfo = {
  /** 对象编码(编辑的时候用) */
  classCode?: string;
  /** 信息点编码(编辑的时候用) */
  infoCode?: string;
  /** 类别 */
  category?: string;
  /** 旧值(编辑用) */
  beforeValues?: string[];
  /** 标签值（筛选时、编辑时用） */
  tagValues?: string[];
};

/**
 * OpenAPI 组件类型：ResponsibilityInfoRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ResponsibilityInfoRequest
 */
export type PhysicalWorldServiceResponsibilityInfoRequest = {
  /** 分类：equipment-设备,space-空间 */
  type?: string;
  /** 对象编码(范围) */
  classCodes?: string[];
  /** 标签分类和值（筛选时、编辑时用） */
  tag?: PhysicalWorldServiceResponsibilityInfo[];
};

/**
 * OpenAPI 组件类型：ObjectQueryRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ObjectQueryRequest
 */
export type PhysicalWorldServiceObjectQueryRequest = {
  /** 返回信息控制: 默认不返回outline, skeletonLine
返回全部信息(默认)
withColumns返回withColumns自定义字段 */
  withColumns?: string[];
  /** 页：默认第一页 */
  page?: number;
  /** 分页条数：默认10条 */
  size?: number;
  /** 多个项目id/建筑id/管理分区id/楼层id/空间id */
  ids?: string[];
};

/**
 * OpenAPI 组件类型：SpaceQueryRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/SpaceQueryRequest
 */
export type PhysicalWorldServiceSpaceQueryRequest = {
  /** 返回信息控制: 默认不返回outline, skeletonLine
返回全部信息(默认)
withColumns返回withColumns自定义字段 */
  withColumns?: string[];
  /** 页：默认第一页 */
  page?: number;
  /** 分页条数：默认10条 */
  size?: number;
  /** 项目id/建筑id/楼层id/空间id */
  id?: string;
  /** 空间功能编码列表 */
  roomFuncTypes?: string[];
  /** 租赁业胎编码列表 */
  tenantTypes?: string[];
  /** 是否租赁 */
  isLeasableState?: string;
};

/**
 * OpenAPI 组件类型：SpaceInfoPointRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/SpaceInfoPointRequest
 */
export type PhysicalWorldServiceSpaceInfoPointRequest = {
  /** 返回信息控制: 默认不返回outline, skeletonLine
返回全部信息(默认)
withColumns返回withColumns自定义字段 */
  withColumns?: string[];
  /** 页：默认第一页 */
  page?: number;
  /** 分页条数：默认10条 */
  size?: number;
  /** 空间功能编码列表 */
  roomFuncTypes?: string[];
  /** 信息点条件 */
  conditions?: PhysicalWorldServiceObjectNode;
};

/**
 * OpenAPI 组件类型：SystemEquipRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/SystemEquipRequest
 */
export type PhysicalWorldServiceSystemEquipRequest = {
  /** 返回信息控制: 默认不返回outline, skeletonLine
返回全部信息(默认)
withColumns返回withColumns自定义字段 */
  withColumns?: string[];
  /** 页：默认第一页 */
  page?: number;
  /** 分页条数：默认10条 */
  size?: number;
  /** 项目id/建筑id/系统id */
  id?: string;
  /** 专业编码 */
  majorCode?: string;
};

/**
 * OpenAPI 组件类型：EquipSceneRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/EquipSceneRequest
 */
export type PhysicalWorldServiceEquipSceneRequest = {
  /** 返回信息控制: 默认不返回outline, skeletonLine
返回全部信息(默认)
withColumns返回withColumns自定义字段 */
  withColumns?: string[];
  /** 页：默认第一页 */
  page?: number;
  /** 分页条数：默认10条 */
  size?: number;
  /** 楼层id/空间id/主要功能区id/项目id */
  id?: string;
  /** 设备六位编码 */
  classCode?: string;
};

/**
 * OpenAPI 组件类型：RadiusRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RadiusRequest
 */
export type PhysicalWorldServiceRadiusRequest = {
  /** 返回信息控制: 默认不返回outline, skeletonLine
返回全部信息(默认)
withColumns返回withColumns自定义字段 */
  withColumns?: string[];
  /** 页：默认第一页 */
  page?: number;
  /** 分页条数：默认10条 */
  size?: number;
  /** 设备id */
  id?: string;
  /** 楼层id */
  floorId?: string;
  /** 半径 */
  radius?: number;
  /** x坐标信息 */
  x?: string;
  /** y坐标信息 */
  y?: string;
  /** 对象类型编码 */
  classCode?: string[];
};

/**
 * OpenAPI 组件类型：EquipInfoPointRequest
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/EquipInfoPointRequest
 */
export type PhysicalWorldServiceEquipInfoPointRequest = {
  /** 返回信息控制: 默认不返回outline, skeletonLine
返回全部信息(默认)
withColumns返回withColumns自定义字段 */
  withColumns?: string[];
  /** 页：默认第一页 */
  page?: number;
  /** 分页条数：默认10条 */
  size?: number;
  /** 设备六位编码 */
  classCode?: string;
  /** 信息点条件 */
  conditions?: PhysicalWorldServiceObjectNode;
};

/**
 * OpenAPI 组件类型：OrderItemCustom
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/OrderItemCustom
 */
export type PhysicalWorldServiceOrderItemCustom = {
  column?: string;
  asc?: boolean;
  chineseOrder?: boolean;
};

/**
 * OpenAPI 组件类型：QueryCriteria
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/QueryCriteria
 */
export type PhysicalWorldServiceQueryCriteria = {
  page?: number;
  size?: number;
  onlyCount?: boolean;
  withoutCount?: boolean;
  criteria?: PhysicalWorldServiceObjectNode;
  orders?: PhysicalWorldServiceOrderItem[];
  orderCustoms?: PhysicalWorldServiceOrderItemCustom[];
  withColumns?: string[];
};

/**
 * OpenAPI 组件类型：RListMapObject
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RListMapObject
 */
export type PhysicalWorldServiceRListMapObject = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceMapObject1[];
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * OpenAPI 组件类型：ProjectDetailVO
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ProjectDetailVO
 */
export type PhysicalWorldServiceProjectDetailVO = {
  /** 项目ID */
  projectId?: string;
  /** 项目名称 */
  projectName?: string;
  /** 省份名称（转译后，转译失败返回原始编码） */
  province?: string;
  /** 城市名称（转译后，转译失败返回原始编码） */
  city?: string;
  /** 区县名称（转译后，转译失败返回原始编码） */
  district?: string;
  /** 详细地址 */
  address?: string;
  /** 面积数值 */
  areaValue?: number;
  /** 面积单位（数据字典转译后，转译失败默认返回㎡） */
  areaUnit?: string;
  /** 面积展示文本，格式：{areaValue}{areaUnit} */
  areaDisplay?: string;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
};

/**
 * OpenAPI 组件类型：ProjectStatisticsVO
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ProjectStatisticsVO
 */
export type PhysicalWorldServiceProjectStatisticsVO = {
  /** 建筑数量 */
  building?: number;
  /** 楼层数量 */
  floor?: number;
  /** 空间数量 */
  space?: number;
  /** 系统数量 */
  system?: number;
  /** 设备数量 */
  equipment?: number;
};

/**
 * OpenAPI 组件类型：ProjectOverviewVO
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/ProjectOverviewVO
 */
export type PhysicalWorldServiceProjectOverviewVO = {
  /** 项目详情块 */
  detail?: PhysicalWorldServiceProjectDetailVO;
  /** 对象统计块 */
  statistics?: PhysicalWorldServiceProjectStatisticsVO;
};

/**
 * OpenAPI 组件类型：RProjectOverviewVO
 *
 * 来源：docs/product-apis/physical-world-service/openapi.json#/components/schemas/RProjectOverviewVO
 */
export type PhysicalWorldServiceRProjectOverviewVO = {
  /** 结果码 */
  code?: string;
  /** 结果标识:成功标识：success，失败标识：fail */
  result?: string;
  /** 响应数据 */
  data?: PhysicalWorldServiceProjectOverviewVO;
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
  orders?: PhysicalWorldServiceOrderItem[];
  /** 响应时间戳 */
  timestamp?: number;
  /** 附加数据 */
  extra?: PhysicalWorldServiceMapObject;
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
 * PhysicalWorldServiceDtpRwdServer3dComponentsCodesQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dComponentsCodesQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dComponentsComponentszipQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dComponentsComponentszipQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dComponentsConnectorsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dComponentsConnectorsQuery = {
  /** url中的对象类型编码 */
  code?: string;
  /** url中的对象类型名称 */
  type?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dComponentsTypeinfosQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dComponentsTypeinfosQuery = {
  /** 对象类型编码 */
  code?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dComponentsTypesQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dComponentsTypesQuery = {
  /** 对象类型编码 */
  code?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dComponentsTypetreeQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dComponentsTypetreeQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectCodesQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectCodesQuery = {
  /** 一般形式为[ProjectId]\[FloorId],也有可能是[ProjectId]/[FloorId] */
  path?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectFloorObjZipQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectFloorObjZipQuery = {
  /** 楼层id */
  floorId?: string;
  /** 系统编码 */
  systemCode?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectFloorsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectFloorsQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectFloorzipQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectFloorzipQuery = {
  /** 楼层id */
  floorId?: string;
  /** 系统编码 */
  systemCode?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectFullmeshjQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectFullmeshjQuery = {
  /** 楼层id */
  floor?: string;
  /** 对象类型编码 */
  category?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectFullmeshzipQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectFullmeshzipQuery = {
  /** 楼层id */
  floor?: string;
  /** 对象类型编码 */
  category?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectMeshQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectMeshQuery = {
  /** 项目id加楼层id,一般形式为[ProjectId]\[FloorId],也有可能是[ProjectId]/[FloorId] */
  path?: string;
  /** 指定几何信息的网址 */
  meshUrl?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectMeshesQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectMeshesQuery = {
  /** 楼层id */
  path?: string;
  /** 对象类型编码 */
  category?: string;
  /** 设备id列表 */
  meshUrls?: string;
  /** 是否用LZ4压缩 */
  compressed?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectMeshjQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectMeshjQuery = {
  /** 项目id加楼层id,一般形式为[ProjectId]\[FloorId],也有可能是[ProjectId]/[FloorId] */
  path?: string;
  /** 指定几何信息的网址 */
  meshUrl?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectModelCountQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectModelCountQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectObjectcmdQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectObjectcmdQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectProjectsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectProjectsQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectRemovefloorQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectRemovefloorQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectRemoveprojectQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectRemoveprojectQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectSceneQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectSceneQuery = {
  /** 项目id加楼层id,一般形式为[ProjectId]\[FloorId],也有可能是[ProjectId]/[FloorId] */
  path?: string;
  /** 对象类型编码 */
  category?: string;
  /** get形式的sourceIds入参 */
  sourceIds?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectScenejQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectScenejQuery = {
  /** 项目id加楼层id,一般形式为[ProjectId]\[FloorId],也有可能是[ProjectId]/[FloorId] */
  path?: string;
  /** 对象类型编码 */
  category?: string;
  /** get形式的sourceIds入参 */
  sourceIds?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectSpaceBgZipQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectSpaceBgZipQuery = {
  /** 楼层id */
  spaceId?: string;
  /** 对象类型编码 */
  objTypes?: string;
  /** 设备id列表 */
  ids?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectSpaceObjZipQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectSpaceObjZipQuery = {
  /** 楼层id */
  spaceId?: string;
  /** 对象类型编码 */
  objTypes?: string;
  /** 设备id列表 */
  ids?: string;
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectUpdateversionQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectUpdateversionQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectUploadfloorQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectUploadfloorQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServer3dObjectVersionQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectVersionQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerApiObjectLastChangeQueryRecordsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerApiObjectLastChangeQueryRecordsQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerDtpKnowledgeServerRwdeditVersionPushDataToMeAiQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerDtpKnowledgeServerRwdeditVersionPushDataToMeAiQuery = {
  /** version */
  version: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerGeometricObjectBimQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectBimQuery = {
  /** 应用标识 */
  appId?: string;
  /** 用户ID */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerGeometricObjectBoundingBoxQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectBoundingBoxQuery = {
  /** 应用标识 */
  appId?: string;
  /** 用户ID */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerGeometricObjectCenterPositionQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectCenterPositionQuery = {
  /** 应用标识 */
  appId?: string;
  /** 用户ID */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerGeometricObjectOutLineQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectOutLineQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerGeometricObjectSkeletonLineQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectSkeletonLineQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerPublishDataChangLogStatusQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerPublishDataChangLogStatusQuery = {
  /** logId */
  logId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerPublishDataGetJobStatusQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerPublishDataGetJobStatusQuery = {
  /** deliveryLogId */
  deliveryLogId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerPublishedDetailListQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerPublishedDetailListQuery = {
  /** page */
  page: number;
  /** size */
  size: number;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdAimAssetCalQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimAssetCalQuery = {
  /** calEquip */
  calEquip: boolean;
  /** calSys */
  calSys: boolean;
  /** calSp */
  calSp: boolean;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeQueryQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeQueryQuery = {
  /** 是否是恢复默认功能，如果是，mode=1 即可 */
  mode?: number;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeSaveQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeSaveQuery = {
  /** appId */
  appId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeQueryQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeQueryQuery = {
  /** 是否是恢复默认功能，如果是，mode=1 即可 */
  mode?: number;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeSaveQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeSaveQuery = {
  /** appId */
  appId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdDataPublishGetResultQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataPublishGetResultQuery = {
  /** DataPublishController.requestDataPublish返回值 */
  id?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdDefTypeRelCreateQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDefTypeRelCreateQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdDefTypeRelDeleteQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDefTypeRelDeleteQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdDefTypeRelQueryQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDefTypeRelQueryQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdDefTypeRelUpdateQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDefTypeRelUpdateQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdHalfSectionalViewQueryHalfSectionalViewInfoByObjIdQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdHalfSectionalViewQueryHalfSectionalViewInfoByObjIdQuery = {
  /** 对象id */
  objectId?: string;
  /** 数据字典版本 */
  dictVersion?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdInstanceObjectBatchQueryProjectByIdsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectBatchQueryProjectByIdsQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByClassCodeQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByClassCodeQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByConditionsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByConditionsQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListBySystemIdQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListBySystemIdQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryInstanceTreeQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryInstanceTreeQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryObjectListSuperiorIdQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryObjectListSuperiorIdQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByFloorIdAndRoomFuncTypeQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByFloorIdAndRoomFuncTypeQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByRoomFuncTypeQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByRoomFuncTypeQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdMeaiStartQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdMeaiStartQuery = {
  /** publishLogId */
  publishLogId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryBuildingUnderProjectQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryBuildingUnderProjectQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndFloorQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndFloorQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndPartitionQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndPartitionQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndServiceSpaceQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndServiceSpaceQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipGroupBySystemIdQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipGroupBySystemIdQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipInfoObjectsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipInfoObjectsQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipLocationSpaceFloorQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipLocationSpaceFloorQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipServiceSpaceFloorQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipServiceSpaceFloorQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipUnderMajorQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipUnderMajorQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipWithinRadiusQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipWithinRadiusQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryFloorUnderBuildingQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryFloorUnderBuildingQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryPartitionUnderBuildingQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryPartitionUnderBuildingQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryProjectUnderGroupCodeQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryProjectUnderGroupCodeQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderBuildingQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderBuildingQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderPartitionQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderPartitionQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderProjectQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderProjectQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQuerySpatialInformationPointObjectsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQuerySpatialInformationPointObjectsQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderBuildingQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderBuildingQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderMajorQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderMajorQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderProjectQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderProjectQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderBuildingQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderBuildingQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderFloorQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderFloorQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderPartitionQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderPartitionQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderProjectQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderProjectQuery = {
  /** appId */
  appId: string;
  /** ??id */
  userId: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeFromIdsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeFromIdsQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeToIdsQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeToIdsQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdRouteQueryExistsBetweenQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryExistsBetweenQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdRouteQueryFromToNodeQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryFromToNodeQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodePathIdInSetQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodePathIdInSetQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodeToGeneralPathQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodeToGeneralPathQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdRouteQueryPathInSpaceIdQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryPathInSpaceIdQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * PhysicalWorldServiceDtpRwdServerRwdRouteQueryRelationIdInSetQuery 查询参数。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryRelationIdInSetQuery = {
  /** appId */
  appId?: string;
  /** 账号id */
  userId?: string;
};

/**
 * GET /dtp-rwd-server/3d/components/connectors 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dComponentsConnectorsBody = {
  key?: string;
};

/**
 * GET /dtp-rwd-server/3d/components/typeinfos 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dComponentsTypeinfosBody = PhysicalWorldServiceRoot2;

/**
 * GET /dtp-rwd-server/3d/components/types 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dComponentsTypesBody = PhysicalWorldServiceRoot2;

/**
 * GET /dtp-rwd-server/3d/object/modelCount 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectModelCountBody = string;

/**
 * POST /dtp-rwd-server/3d/object/objectcmd 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectObjectcmdBody = {
  id?: string;
  itemType?: string;
  projectId?: string;
  groupCode?: string;
  addItems?: {
    objType?: string;
    id?: string;
    classCode?: string;
    compType?: string;
    bimLocation?: string;
    floorId?: string;
    matrix4?: {
      _children?: {
        key?: Record<string, never>[][][];
      };
      _nodeFactory?: {
        _cfgBigDecimalExact?: boolean;
      };
    };
  }[];
  modifyItems?: {
    objType?: string;
    id?: string;
    classCode?: string;
    compType?: string;
    bimLocation?: string;
    floorId?: string;
    matrix4?: {
      _children?: {
        key?: Record<string, never>[][][];
      };
      _nodeFactory?: {
        _cfgBigDecimalExact?: boolean;
      };
    };
  }[];
  removeItems?: {
    objType?: string;
    id?: string;
    classCode?: string;
    compType?: string;
    bimLocation?: string;
    floorId?: string;
    matrix4?: {
      _children?: {
        key?: Record<string, never>[][][];
      };
      _nodeFactory?: {
        _cfgBigDecimalExact?: boolean;
      };
    };
  }[];
};

/**
 * POST /dtp-rwd-server/3d/object/removefloor 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectRemovefloorBody = {
  key?: string;
};

/**
 * POST /dtp-rwd-server/3d/object/removeproject 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectRemoveprojectBody = string;

/**
 * GET /dtp-rwd-server/3d/object/scene 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectSceneBody = PhysicalWorldServiceRoot;

/**
 * GET /dtp-rwd-server/3d/object/scenej 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectScenejBody = PhysicalWorldServiceRoot;

/**
 * POST /dtp-rwd-server/3d/object/updateversion 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServer3dObjectUpdateversionBody = {
  /** 项目id */
  project: string;
  /** 楼层id */
  floor: string;
};

/**
 * POST /dtp-rwd-server/api/object/last/change/queryRecords 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerApiObjectLastChangeQueryRecordsBody = {
  /** 分页页码,从 1 开始 */
  page?: number;
  /** 每页行数 */
  size?: number;
  /** 是否只统计总数 */
  onlyCount?: boolean;
  /** 是否不统计总数 */
  withoutCount?: boolean;
  /** 查询条件 */
  criteria?: {
    /** 分类：0-删除，1-新增 */
    type?: number;
  };
  /** 排序条件 */
  orders?: {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认 true */
    asc?: boolean;
  }[];
  /** 按中文排序的字段 */
  chineseOrderColumns?: string[];
  /** 返回的字段清单 */
  withColumns?: string[];
};

/**
 * POST /dtp-rwd-server/geometric/object/bim 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectBimBody = string[];

/**
 * POST /dtp-rwd-server/geometric/object/boundingBox 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectBoundingBoxBody = string[];

/**
 * POST /dtp-rwd-server/geometric/object/center/position 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectCenterPositionBody = string[];

/**
 * POST /dtp-rwd-server/geometric/object/outLine 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectOutLineBody = PhysicalWorldServiceRoot;

/**
 * POST /dtp-rwd-server/geometric/object/skeletonLine 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerGeometricObjectSkeletonLineBody = PhysicalWorldServiceRoot;

/**
 * POST /dtp-rwd-server/publishData/sendPublishMsgToDtx 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerPublishDataSendPublishMsgToDtxBody = PhysicalWorldServicePublishDataMsg;

/**
 * POST /dtp-rwd-server/publishData/startup 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerPublishDataStartupBody = {
  /** 文件下载链接
 https://dev-minioapi.ysbdtp.com/datapublish/20231120/DataPublish-TYXM-Pj9909990006-20231120193450827-1.zip */
  fileDownloadUrl?: string;
  /** @NotNull(message = "文件下载链接有误") */
  fileDownloadUrls?: string[];
  /** 此次任务的ID */
  deliveryLogId: string;
  /** dt_object和dt_relation需要特殊处理的信息，
如果此参数（信息点名称）为空，不处理信息点，以下载的数据为主，直接替换;
如果不为空，则针对此部分信息点，遍历需要更新数据中的历史数据中的信息点进行合并处理 */
  specificInfo?: string[];
  /** 是否是第一次发布 v2 */
  isFirstTime?: boolean;
  /** 是否覆盖资产属性点 默认为false
since:20250930 */
  isCoveredAssets?: boolean;
};

/**
 * POST /dtp-rwd-server/publishData/validateInfoCode 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerPublishDataValidateInfoCodeBody = PhysicalWorldServiceObjectDigital[];

/**
 * POST /dtp-rwd-server/published/detail/list 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerPublishedDetailListBody = PhysicalWorldServiceLastChaneDto;

/**
 * POST /dtp-rwd-server/rwd/aggregate/objs 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAggregateObjsBody = string[];

/**
 * POST /dtp-rwd-server/rwd/aggregate/space/security/query 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAggregateSpaceSecurityQueryBody = PhysicalWorldServiceQueryCriteria;

/**
 * POST /dtp-rwd-server/rwd/aim/asset/isCal 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimAssetIsCalBody = string[];

/**
 * POST /dtp-rwd-server/rwd/aim/asset/multiRel 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimAssetMultiRelBody = {
  /** 关系 */
  rels?: {
    /** 图 编码 */
    graphCode: string;
    /** 边 编码 */
    relCode: string;
    /** 对象实例id集合 */
    ids: string[];
    /** 方向: from(代表ids作为from)、to(代表ids作为to)、both((代表ids作为from、to，会查两次)) */
    dir: string;
    /** 是否过滤实例化规则 */
    filter: boolean;
    /** 对侧对象信息点条件，不允许传入关系查询参数(relationFrom、reltionTo等) */
    criteria?: Record<string, never>;
    /** 这个随便传，业务方自定义唯一编码 */
    code: string;
  }[];
};

/**
 * POST /dtp-rwd-server/rwd/aim/asset/objInfos 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimAssetObjInfosBody = {
  /** 树类型:1-设备,2-系统树,3-空间树 */
  type?: number;
  /** 所选节点层级:0-全部,1-专业,2-设备定位,3-对象类型 */
  level?: number;
  /** 仅支持静态信息点。
数据权限入参 + 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
  /** 是否过滤实例化规则 */
  filter?: boolean;
  /** 所选节点编码 */
  code?: string;
  /** 需要统计的信息点 */
  countColumns?: string[];
  /** 设备定位编码 */
  equipPosCodes?: string[];
  /** 关系 */
  rels?: {
    /** 图 编码 */
    graphCode: string;
    /** 边 编码 */
    relCode: string;
  }[];
};

/**
 * POST /dtp-rwd-server/rwd/aim/asset/objList 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimAssetObjListBody = {
  /** 树类型:1-设备,2-系统树,3-空间树,4-其他(虚拟、控制组等,criteria中需要传入对象类型) */
  type?: number;
  /** 所选节点层级:0-全部,1-专业,2-设备定位,3-对象类型 */
  level?: number;
  /** 仅支持静态信息点。
数据权限入参 + 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
  /** 是否过滤实例化规则 */
  filter?: boolean;
  /** 是否翻译枚举值
需要注意，翻译的列表数据中所有的classCode不能超过20个，超过20个会报错 */
  transfer?: boolean;
  /** 所选节点编码 */
  code?: string;
  /** 查询的信息点 */
  withColumns?: string[];
  /** 查询的信息点
格式：图_边
由于新增功能，满足上面逻辑的同时，新增以下入参形式：
格式：图_边_对象类型
这种入参意义是在第一种功能上加了用对象类型编码过滤所查对象实例的功能 */
  withRels?: string[];
  /** 关系 */
  rels?: {
    /** 业务唯一编码 */
    code?: string;
    /** 图 编码 */
    graphCode?: string;
    /** 边 编码 */
    relCode?: string;
    /** 方向 */
    dir?: string;
    /** 对象实例id集合 */
    ids?: string[];
    /** 不允许传入关系查询参数(relationFrom、reltionTo等) */
    criteria?: Record<string, never>;
    /** 是否过滤实例化规则 */
    filter?: boolean;
  }[];
  page?: number;
  size?: number;
  /** 是否不统计总数,默认false */
  withoutCount?: boolean;
  /** 是否只统计 */
  onlyCount?: boolean;
};

/**
 * POST /dtp-rwd-server/rwd/aim/asset/objTree 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimAssetObjTreeBody = {
  /** 树类型:1-设备,2-系统树,3-空间树,4-其他(虚拟、控制组等,criteria中需要传入对象类型) */
  type?: number;
  /** 是否只统计:true-只统计，false-带实例localName */
  onlyCount?: boolean;
  /** 仅支持静态信息点。
数据权限入参 + 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
  /** 是否过滤实例化规则 */
  filter?: boolean;
  /** 层级树参数,AssetTree */
  tree?: {
    code?: string;
    name?: string;
    sort?: number;
    extras?: Record<string, never>;
    managementCategory?: string;
    /** List */
    children?: Record<string, never>[];
  }[];
  /** 关系 */
  rels?: {
    /** 图 编码 */
    graphCode?: string;
    /** 边 编码 */
    relCode?: string;
    /** 对象实例id集合 */
    ids?: string[];
    /** 是否过滤实例化规则 */
    filter?: boolean;
  }[];
  /** 离岗设备树 调用方统计结果 */
  countMap?: {
    /** 对象类型编码 */
    classCode?: string;
    /** 专业 */
    major?: string;
    /** 实例数 */
    quantity?: string;
  }[];
  /** 自定义返回字段，默认返回了部分字段
此字段仅在onlyCount为false时生效 */
  withColumns?: string[];
};

/**
 * POST /dtp-rwd-server/rwd/aim/asset/rel 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimAssetRelBody = {
  /** 关系 */
  rels?: {
    /** 业务唯一编码 */
    code: string;
    /** 图 编码 */
    graphCode: string;
    /** 边 编码 */
    relCode: string;
    /** 方向 */
    dir: string;
    /** 对象实例id集合 */
    ids: string[];
    /** 不允许传入关系查询参数(relationFrom、reltionTo等) */
    criteria?: Record<string, never>;
    /** 是否过滤实例化规则 */
    filter: boolean;
  }[];
};

/**
 * POST /dtp-rwd-server/rwd/aim/equip/tree/copy 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeCopyBody = {
  /** 层级树参数 */
  tree?: PhysicalWorldServiceAssetTree[];
  /** 项目id列表，仅限复制的时候用 */
  projectIds?: string[];
  /** 设备定位编码 */
  equipPosCodes?: string[];
};

/**
 * POST /dtp-rwd-server/rwd/aim/equip/tree/save 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeSaveBody = PhysicalWorldServiceAssetTree[];

/**
 * POST /dtp-rwd-server/rwd/aim/resp/info/query 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimRespInfoQueryBody = {
  /** 分类：equipment-设备,space-空间 */
  type?: string;
  /** 对象编码(范围) */
  classCodes?: string[];
  /** 标签分类和值（筛选时、编辑时用） */
  tag?: {
    /** 类别 */
    category?: string;
    /** 标签值（筛选时、编辑时用） */
    tagValues?: string[];
  }[];
};

/**
 * POST /dtp-rwd-server/rwd/aim/resp/info/save 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimRespInfoSaveBody = {
  /** 分类：equipment-设备,space-空间 */
  type?: string;
  /** 标签分类和值（筛选时、编辑时用） */
  tag?: {
    /** 对象编码(编辑的时候用),不传无法保存 */
    classCode?: string;
    /** 信息点编码(编辑的时候用),不传无法保存 */
    infoCode?: string;
    /** 类别,不传无法保存 */
    category?: string;
    /** 旧值(编辑用) */
    beforeValues?: string[];
    /** 标签值（筛选时、编辑时用）,不传无法保存 */
    tagValues?: string[];
  }[];
};

/**
 * POST /dtp-rwd-server/rwd/aim/space/tree/copy 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeCopyBody = {
  /** 树类型:1-设备,2-系统树,3-空间树 */
  type?: number;
  /** 层级树参数 */
  tree?: PhysicalWorldServiceAssetTree[];
  /** 项目id列表，仅限复制的时候用 */
  projectIds?: string[];
  /** 设备定位编码 */
  equipPosCodes?: string[];
};

/**
 * POST /dtp-rwd-server/rwd/aim/space/tree/save 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeSaveBody = PhysicalWorldServiceAssetTree[];

/**
 * POST /dtp-rwd-server/rwd/data/mark/count 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkCountBody = PhysicalWorldServiceRoot;

/**
 * POST /dtp-rwd-server/rwd/data/mark/object 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectBody = {
  /** 对象实例id */
  id?: string[];
  classCode?: string[];
  sourceTag?: string[];
  changeTag?: string;
  /** 开始时间(跟modifiedTIme作比较) */
  startTime?: string;
  /** 结束时间(跟modifiedTIme作比较) */
  endTime?: string;
  /** 只根据条件统计数量 */
  onlyCount?: boolean;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/object/count 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectCountBody = {
  id?: string[];
  classCode?: string[];
  sourceTag?: string[];
  changeTag?: string;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/object/info 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInfoBody = {
  /** 对象实例id */
  id?: string[];
  classCode?: string[];
  infoCode?: string[];
  sourceTag?: string[];
  changeTag?: string;
  /** 开始时间(跟modifiedTIme作比较) */
  startTime?: string;
  /** 结束时间(跟modifiedTIme作比较) */
  endTime?: string;
  /** 只根据条件统计数量 */
  onlyCount?: boolean;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/object/info/count 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInfoCountBody = {
  id?: string[];
  classCode?: string[];
  infoCode?: string[];
  sourceTag?: string[];
  changeTag?: string;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/object/info/insert 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInfoInsertBody = {
  groupCode?: string;
  projectId?: string;
  objectId?: string;
  classCode?: string;
  infoCode?: string;
  sourceTag?: string;
  changeTag?: number;
  endTag?: string;
  publishStatus?: number;
  remark?: string;
  creationTime?: {
    DEFAULT_FORMAT?: {
      /** The printer and/or parser to use, not null. */
      printerParser?: {
        printerParsers?: Record<string, never>[];
        optional?: boolean;
      };
      /** The locale to use for formatting, not null. */
      locale?: {
        defaultLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultDisplayLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultFormatLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        isoLanguages?: string[];
        isoCountries?: string[];
      };
      /** The symbols to use for formatting, not null. */
      decimalStyle?: {
        /** The zero digit. */
        zeroDigit?: Record<string, never>;
        /** The positive sign. */
        positiveSign?: Record<string, never>;
        /** The negative sign. */
        negativeSign?: Record<string, never>;
        /** The decimal separator. */
        decimalSeparator?: Record<string, never>;
      };
      /** 枚举说明: STRICT :Style to resolve dates and times strictly.

Using strict resolution will ensure that all parsed values are within
the outer range of valid values for the field. Individual fields may
be further processed for strictness.

For example, resolving year-month and day-of-month in the ISO calendar
system using strict mode will ensure that the day-of-month is valid
for the year-month, rejecting invalid values.
SMART :Style to resolve dates and times in a smart, or intelligent, manner.

Using smart resolution will perform the sensible default for each
field, which may be the same as strict, the same as lenient, or a third
behavior. Individual fields will interpret this differently.

For example, resolving year-month and day-of-month in the ISO calendar
system using smart mode will ensure that the day-of-month is from
1 to 31, converting any value beyond the last valid day-of-month to be
the last valid day-of-month.
LENIENT :Style to resolve dates and times leniently.

Using lenient resolution will resolve the values in an appropriate
lenient manner. Individual fields will interpret this differently.

For example, lenient mode allows the month in the ISO calendar system
to be outside the range 1 to 12.
For example, month 15 is treated as being 3 months after month 12. */
      resolverStyle?: "STRICT" | "SMART" | "LENIENT";
      /** The fields to use in resolving, null for all fields. */
      resolverFields?: Record<string, never>[];
      /** The chronology to use for formatting, null for no override. */
      chrono?: Record<string, never>;
      /** The zone to use for formatting, null for no override. */
      zone?: Record<string, never>;
    };
    DEFAULT_ZONE_ID?: Record<string, never>;
    calendar?: {
      /** The calendar field values for the currently set time for this calendar.
This is an array of FIELD_COUNT integers, with index values
ERA through DST_OFFSET. */
      fields?: number[];
      /** The flags which tell if a specified calendar field for the calendar is set.
A new object has no fields set.  After the first call to a method
which generates the fields, they all remain set after that.
This is an array of FIELD_COUNT booleans, with index values
ERA through DST_OFFSET. */
      isSet?: boolean[];
      /** The currently set time for this calendar, expressed in milliseconds after
January 1, 1970, 0:00:00 GMT. */
      time?: number;
      /** True if then the value of time is valid.
The time is made invalid by a change to an item of field[]. */
      isTimeSet?: boolean;
      /** True if fields[] are in sync with the currently set time.
If false, then the next attempt to get the value of a field will
force a recomputation of all fields from the current value of
time. */
      areFieldsSet?: boolean;
      /** True if this calendar allows out-of-range field values during computation
of time from fields[]. */
      lenient?: boolean;
      /** The TimeZone used by this calendar. Calendar
uses the time zone data to translate between locale and GMT time. */
      zone?: {
        /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
        ID?: string;
        defaultTimeZone?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
        /** a static TimeZone we can reference if no AppContext is in place */
        mainAppContextDefault?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
      };
      /** The first day of the week, with possible values SUNDAY,
MONDAY, etc.  This is a locale-dependent value. */
      firstDayOfWeek?: number;
      /** The number of days required for the first week in a month or year,
with possible values from 1 to 7.  This is a locale-dependent value. */
      minimalDaysInFirstWeek?: number;
      /** The next available value for stamp[], an internal array.
This actually should not be written out to the stream, and will probably
be removed from the stream in the near future.  In the meantime,
a value of MINIMUM_USER_STAMP should be used. */
      nextStamp?: number;
      /** The version of the serialized data on the stream.  Possible values:

0 or not present on stream

JDK 1.1.5 or earlier.

1

JDK 1.1.6 or later.  Writes a correct 'time' value
as well as compatible values for other fields.  This is a
transitional format.


When streaming out this class, the most recent format
and the highest allowable serialVersionOnStream
is written. */
      serialVersionOnStream?: number;
    };
  };
  creator?: string;
  modifiedTime?: {
    DEFAULT_FORMAT?: {
      /** The printer and/or parser to use, not null. */
      printerParser?: {
        printerParsers?: Record<string, never>[];
        optional?: boolean;
      };
      /** The locale to use for formatting, not null. */
      locale?: {
        defaultLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultDisplayLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultFormatLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        isoLanguages?: string[];
        isoCountries?: string[];
      };
      /** The symbols to use for formatting, not null. */
      decimalStyle?: {
        /** The zero digit. */
        zeroDigit?: Record<string, never>;
        /** The positive sign. */
        positiveSign?: Record<string, never>;
        /** The negative sign. */
        negativeSign?: Record<string, never>;
        /** The decimal separator. */
        decimalSeparator?: Record<string, never>;
      };
      /** 枚举说明: STRICT :Style to resolve dates and times strictly.

Using strict resolution will ensure that all parsed values are within
the outer range of valid values for the field. Individual fields may
be further processed for strictness.

For example, resolving year-month and day-of-month in the ISO calendar
system using strict mode will ensure that the day-of-month is valid
for the year-month, rejecting invalid values.
SMART :Style to resolve dates and times in a smart, or intelligent, manner.

Using smart resolution will perform the sensible default for each
field, which may be the same as strict, the same as lenient, or a third
behavior. Individual fields will interpret this differently.

For example, resolving year-month and day-of-month in the ISO calendar
system using smart mode will ensure that the day-of-month is from
1 to 31, converting any value beyond the last valid day-of-month to be
the last valid day-of-month.
LENIENT :Style to resolve dates and times leniently.

Using lenient resolution will resolve the values in an appropriate
lenient manner. Individual fields will interpret this differently.

For example, lenient mode allows the month in the ISO calendar system
to be outside the range 1 to 12.
For example, month 15 is treated as being 3 months after month 12. */
      resolverStyle?: "STRICT" | "SMART" | "LENIENT";
      /** The fields to use in resolving, null for all fields. */
      resolverFields?: Record<string, never>[];
      /** The chronology to use for formatting, null for no override. */
      chrono?: Record<string, never>;
      /** The zone to use for formatting, null for no override. */
      zone?: Record<string, never>;
    };
    DEFAULT_ZONE_ID?: Record<string, never>;
    calendar?: {
      /** The calendar field values for the currently set time for this calendar.
This is an array of FIELD_COUNT integers, with index values
ERA through DST_OFFSET. */
      fields?: number[];
      /** The flags which tell if a specified calendar field for the calendar is set.
A new object has no fields set.  After the first call to a method
which generates the fields, they all remain set after that.
This is an array of FIELD_COUNT booleans, with index values
ERA through DST_OFFSET. */
      isSet?: boolean[];
      /** The currently set time for this calendar, expressed in milliseconds after
January 1, 1970, 0:00:00 GMT. */
      time?: number;
      /** True if then the value of time is valid.
The time is made invalid by a change to an item of field[]. */
      isTimeSet?: boolean;
      /** True if fields[] are in sync with the currently set time.
If false, then the next attempt to get the value of a field will
force a recomputation of all fields from the current value of
time. */
      areFieldsSet?: boolean;
      /** True if this calendar allows out-of-range field values during computation
of time from fields[]. */
      lenient?: boolean;
      /** The TimeZone used by this calendar. Calendar
uses the time zone data to translate between locale and GMT time. */
      zone?: {
        /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
        ID?: string;
        defaultTimeZone?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
        /** a static TimeZone we can reference if no AppContext is in place */
        mainAppContextDefault?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
      };
      /** The first day of the week, with possible values SUNDAY,
MONDAY, etc.  This is a locale-dependent value. */
      firstDayOfWeek?: number;
      /** The number of days required for the first week in a month or year,
with possible values from 1 to 7.  This is a locale-dependent value. */
      minimalDaysInFirstWeek?: number;
      /** The next available value for stamp[], an internal array.
This actually should not be written out to the stream, and will probably
be removed from the stream in the near future.  In the meantime,
a value of MINIMUM_USER_STAMP should be used. */
      nextStamp?: number;
      /** The version of the serialized data on the stream.  Possible values:

0 or not present on stream

JDK 1.1.5 or earlier.

1

JDK 1.1.6 or later.  Writes a correct 'time' value
as well as compatible values for other fields.  This is a
transitional format.


When streaming out this class, the most recent format
and the highest allowable serialVersionOnStream
is written. */
      serialVersionOnStream?: number;
    };
  };
  modifier?: string;
  id?: string;
  valid?: number;
}[];

/**
 * POST /dtp-rwd-server/rwd/data/mark/object/info/update 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInfoUpdateBody = {
  id?: string[];
  classCode?: string[];
  infoCode?: string[];
  sourceTag?: string[];
  /** 修改数据来源时传入 */
  updateSourceTag?: string;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/object/insert 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInsertBody = {
  groupCode?: string;
  projectId?: string;
  objectId?: string;
  classCode?: string;
  sourceTag?: string;
  changeTag?: number;
  endTag?: string;
  publishStatus?: number;
  remark?: string;
  creationTime?: {
    DEFAULT_FORMAT?: {
      /** The printer and/or parser to use, not null. */
      printerParser?: {
        printerParsers?: Record<string, never>[];
        optional?: boolean;
      };
      /** The locale to use for formatting, not null. */
      locale?: {
        defaultLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultDisplayLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultFormatLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        isoLanguages?: string[];
        isoCountries?: string[];
      };
      /** The symbols to use for formatting, not null. */
      decimalStyle?: {
        /** The zero digit. */
        zeroDigit?: Record<string, never>;
        /** The positive sign. */
        positiveSign?: Record<string, never>;
        /** The negative sign. */
        negativeSign?: Record<string, never>;
        /** The decimal separator. */
        decimalSeparator?: Record<string, never>;
      };
      /** 枚举说明: STRICT :Style to resolve dates and times strictly.

Using strict resolution will ensure that all parsed values are within
the outer range of valid values for the field. Individual fields may
be further processed for strictness.

For example, resolving year-month and day-of-month in the ISO calendar
system using strict mode will ensure that the day-of-month is valid
for the year-month, rejecting invalid values.
SMART :Style to resolve dates and times in a smart, or intelligent, manner.

Using smart resolution will perform the sensible default for each
field, which may be the same as strict, the same as lenient, or a third
behavior. Individual fields will interpret this differently.

For example, resolving year-month and day-of-month in the ISO calendar
system using smart mode will ensure that the day-of-month is from
1 to 31, converting any value beyond the last valid day-of-month to be
the last valid day-of-month.
LENIENT :Style to resolve dates and times leniently.

Using lenient resolution will resolve the values in an appropriate
lenient manner. Individual fields will interpret this differently.

For example, lenient mode allows the month in the ISO calendar system
to be outside the range 1 to 12.
For example, month 15 is treated as being 3 months after month 12. */
      resolverStyle?: "STRICT" | "SMART" | "LENIENT";
      /** The fields to use in resolving, null for all fields. */
      resolverFields?: Record<string, never>[];
      /** The chronology to use for formatting, null for no override. */
      chrono?: Record<string, never>;
      /** The zone to use for formatting, null for no override. */
      zone?: Record<string, never>;
    };
    DEFAULT_ZONE_ID?: Record<string, never>;
    calendar?: {
      /** The calendar field values for the currently set time for this calendar.
This is an array of FIELD_COUNT integers, with index values
ERA through DST_OFFSET. */
      fields?: number[];
      /** The flags which tell if a specified calendar field for the calendar is set.
A new object has no fields set.  After the first call to a method
which generates the fields, they all remain set after that.
This is an array of FIELD_COUNT booleans, with index values
ERA through DST_OFFSET. */
      isSet?: boolean[];
      /** The currently set time for this calendar, expressed in milliseconds after
January 1, 1970, 0:00:00 GMT. */
      time?: number;
      /** True if then the value of time is valid.
The time is made invalid by a change to an item of field[]. */
      isTimeSet?: boolean;
      /** True if fields[] are in sync with the currently set time.
If false, then the next attempt to get the value of a field will
force a recomputation of all fields from the current value of
time. */
      areFieldsSet?: boolean;
      /** True if this calendar allows out-of-range field values during computation
of time from fields[]. */
      lenient?: boolean;
      /** The TimeZone used by this calendar. Calendar
uses the time zone data to translate between locale and GMT time. */
      zone?: {
        /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
        ID?: string;
        defaultTimeZone?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
        /** a static TimeZone we can reference if no AppContext is in place */
        mainAppContextDefault?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
      };
      /** The first day of the week, with possible values SUNDAY,
MONDAY, etc.  This is a locale-dependent value. */
      firstDayOfWeek?: number;
      /** The number of days required for the first week in a month or year,
with possible values from 1 to 7.  This is a locale-dependent value. */
      minimalDaysInFirstWeek?: number;
      /** The next available value for stamp[], an internal array.
This actually should not be written out to the stream, and will probably
be removed from the stream in the near future.  In the meantime,
a value of MINIMUM_USER_STAMP should be used. */
      nextStamp?: number;
      /** The version of the serialized data on the stream.  Possible values:

0 or not present on stream

JDK 1.1.5 or earlier.

1

JDK 1.1.6 or later.  Writes a correct 'time' value
as well as compatible values for other fields.  This is a
transitional format.


When streaming out this class, the most recent format
and the highest allowable serialVersionOnStream
is written. */
      serialVersionOnStream?: number;
    };
  };
  creator?: string;
  modifiedTime?: {
    DEFAULT_FORMAT?: {
      /** The printer and/or parser to use, not null. */
      printerParser?: {
        printerParsers?: Record<string, never>[];
        optional?: boolean;
      };
      /** The locale to use for formatting, not null. */
      locale?: {
        defaultLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultDisplayLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultFormatLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        isoLanguages?: string[];
        isoCountries?: string[];
      };
      /** The symbols to use for formatting, not null. */
      decimalStyle?: {
        /** The zero digit. */
        zeroDigit?: Record<string, never>;
        /** The positive sign. */
        positiveSign?: Record<string, never>;
        /** The negative sign. */
        negativeSign?: Record<string, never>;
        /** The decimal separator. */
        decimalSeparator?: Record<string, never>;
      };
      /** 枚举说明: STRICT :Style to resolve dates and times strictly.

Using strict resolution will ensure that all parsed values are within
the outer range of valid values for the field. Individual fields may
be further processed for strictness.

For example, resolving year-month and day-of-month in the ISO calendar
system using strict mode will ensure that the day-of-month is valid
for the year-month, rejecting invalid values.
SMART :Style to resolve dates and times in a smart, or intelligent, manner.

Using smart resolution will perform the sensible default for each
field, which may be the same as strict, the same as lenient, or a third
behavior. Individual fields will interpret this differently.

For example, resolving year-month and day-of-month in the ISO calendar
system using smart mode will ensure that the day-of-month is from
1 to 31, converting any value beyond the last valid day-of-month to be
the last valid day-of-month.
LENIENT :Style to resolve dates and times leniently.

Using lenient resolution will resolve the values in an appropriate
lenient manner. Individual fields will interpret this differently.

For example, lenient mode allows the month in the ISO calendar system
to be outside the range 1 to 12.
For example, month 15 is treated as being 3 months after month 12. */
      resolverStyle?: "STRICT" | "SMART" | "LENIENT";
      /** The fields to use in resolving, null for all fields. */
      resolverFields?: Record<string, never>[];
      /** The chronology to use for formatting, null for no override. */
      chrono?: Record<string, never>;
      /** The zone to use for formatting, null for no override. */
      zone?: Record<string, never>;
    };
    DEFAULT_ZONE_ID?: Record<string, never>;
    calendar?: {
      /** The calendar field values for the currently set time for this calendar.
This is an array of FIELD_COUNT integers, with index values
ERA through DST_OFFSET. */
      fields?: number[];
      /** The flags which tell if a specified calendar field for the calendar is set.
A new object has no fields set.  After the first call to a method
which generates the fields, they all remain set after that.
This is an array of FIELD_COUNT booleans, with index values
ERA through DST_OFFSET. */
      isSet?: boolean[];
      /** The currently set time for this calendar, expressed in milliseconds after
January 1, 1970, 0:00:00 GMT. */
      time?: number;
      /** True if then the value of time is valid.
The time is made invalid by a change to an item of field[]. */
      isTimeSet?: boolean;
      /** True if fields[] are in sync with the currently set time.
If false, then the next attempt to get the value of a field will
force a recomputation of all fields from the current value of
time. */
      areFieldsSet?: boolean;
      /** True if this calendar allows out-of-range field values during computation
of time from fields[]. */
      lenient?: boolean;
      /** The TimeZone used by this calendar. Calendar
uses the time zone data to translate between locale and GMT time. */
      zone?: {
        /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
        ID?: string;
        defaultTimeZone?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
        /** a static TimeZone we can reference if no AppContext is in place */
        mainAppContextDefault?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
      };
      /** The first day of the week, with possible values SUNDAY,
MONDAY, etc.  This is a locale-dependent value. */
      firstDayOfWeek?: number;
      /** The number of days required for the first week in a month or year,
with possible values from 1 to 7.  This is a locale-dependent value. */
      minimalDaysInFirstWeek?: number;
      /** The next available value for stamp[], an internal array.
This actually should not be written out to the stream, and will probably
be removed from the stream in the near future.  In the meantime,
a value of MINIMUM_USER_STAMP should be used. */
      nextStamp?: number;
      /** The version of the serialized data on the stream.  Possible values:

0 or not present on stream

JDK 1.1.5 or earlier.

1

JDK 1.1.6 or later.  Writes a correct 'time' value
as well as compatible values for other fields.  This is a
transitional format.


When streaming out this class, the most recent format
and the highest allowable serialVersionOnStream
is written. */
      serialVersionOnStream?: number;
    };
  };
  modifier?: string;
  id?: string;
  valid?: number;
}[];

/**
 * POST /dtp-rwd-server/rwd/data/mark/object/update 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectUpdateBody = {
  id?: string[];
  classCode?: string[];
  sourceTag?: string[];
  /** 修改数据来源时传入 */
  updateSourceTag?: string;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/relation 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationBody = {
  graphCode?: string;
  relCode?: string;
  objFrom?: string[];
  objTo?: string[];
  /** 关系实例id */
  relId?: string[];
  sourceTag?: string[];
  changeTag?: string;
  /** 开始时间(跟modifiedTIme作比较) */
  startTime?: string;
  /** 结束时间(跟modifiedTIme作比较) */
  endTime?: string;
  /** 只根据条件统计数量 */
  onlyCount?: boolean;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/relation/count 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationCountBody = {
  graphCode?: string;
  relCode?: string;
  objFrom?: string[];
  objTo?: string[];
  relId?: string[];
  sourceTag?: string[];
  changeTag?: string;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/relation/info 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInfoBody = {
  graphCode?: string;
  relCode?: string;
  objFrom?: string[];
  objTo?: string[];
  /** 关系实例id */
  relId?: string[];
  relInfoCode?: string[];
  sourceTag?: string[];
  changeTag?: string;
  /** 开始时间(跟modifiedTIme作比较) */
  startTime?: string;
  /** 结束时间(跟modifiedTIme作比较) */
  endTime?: string;
  /** 只根据条件统计数量 */
  onlyCount?: boolean;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/relation/info/count 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInfoCountBody = {
  graphCode?: string;
  relCode?: string;
  objFrom?: string[];
  objTo?: string[];
  relId?: string[];
  relInfoCode?: string[];
  sourceTag?: string[];
  changeTag?: string;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/relation/info/insert 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInfoInsertBody = {
  projectId?: string;
  groupCode?: string;
  graphCode?: string;
  relCode?: string;
  objFrom?: string;
  objTo?: string;
  relId?: string;
  relInfoCode?: string;
  sourceTag?: string;
  changeTag?: number;
  endTag?: string;
  publishStatus?: number;
  remark?: string;
  creationTime?: {
    DEFAULT_FORMAT?: {
      /** The printer and/or parser to use, not null. */
      printerParser?: {
        printerParsers?: Record<string, never>[];
        optional?: boolean;
      };
      /** The locale to use for formatting, not null. */
      locale?: {
        defaultLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultDisplayLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultFormatLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        isoLanguages?: string[];
        isoCountries?: string[];
      };
      /** The symbols to use for formatting, not null. */
      decimalStyle?: {
        /** The zero digit. */
        zeroDigit?: Record<string, never>;
        /** The positive sign. */
        positiveSign?: Record<string, never>;
        /** The negative sign. */
        negativeSign?: Record<string, never>;
        /** The decimal separator. */
        decimalSeparator?: Record<string, never>;
      };
      /** 枚举说明: STRICT :Style to resolve dates and times strictly.

Using strict resolution will ensure that all parsed values are within
the outer range of valid values for the field. Individual fields may
be further processed for strictness.

For example, resolving year-month and day-of-month in the ISO calendar
system using strict mode will ensure that the day-of-month is valid
for the year-month, rejecting invalid values.
SMART :Style to resolve dates and times in a smart, or intelligent, manner.

Using smart resolution will perform the sensible default for each
field, which may be the same as strict, the same as lenient, or a third
behavior. Individual fields will interpret this differently.

For example, resolving year-month and day-of-month in the ISO calendar
system using smart mode will ensure that the day-of-month is from
1 to 31, converting any value beyond the last valid day-of-month to be
the last valid day-of-month.
LENIENT :Style to resolve dates and times leniently.

Using lenient resolution will resolve the values in an appropriate
lenient manner. Individual fields will interpret this differently.

For example, lenient mode allows the month in the ISO calendar system
to be outside the range 1 to 12.
For example, month 15 is treated as being 3 months after month 12. */
      resolverStyle?: "STRICT" | "SMART" | "LENIENT";
      /** The fields to use in resolving, null for all fields. */
      resolverFields?: Record<string, never>[];
      /** The chronology to use for formatting, null for no override. */
      chrono?: Record<string, never>;
      /** The zone to use for formatting, null for no override. */
      zone?: Record<string, never>;
    };
    DEFAULT_ZONE_ID?: Record<string, never>;
    calendar?: {
      /** The calendar field values for the currently set time for this calendar.
This is an array of FIELD_COUNT integers, with index values
ERA through DST_OFFSET. */
      fields?: number[];
      /** The flags which tell if a specified calendar field for the calendar is set.
A new object has no fields set.  After the first call to a method
which generates the fields, they all remain set after that.
This is an array of FIELD_COUNT booleans, with index values
ERA through DST_OFFSET. */
      isSet?: boolean[];
      /** The currently set time for this calendar, expressed in milliseconds after
January 1, 1970, 0:00:00 GMT. */
      time?: number;
      /** True if then the value of time is valid.
The time is made invalid by a change to an item of field[]. */
      isTimeSet?: boolean;
      /** True if fields[] are in sync with the currently set time.
If false, then the next attempt to get the value of a field will
force a recomputation of all fields from the current value of
time. */
      areFieldsSet?: boolean;
      /** True if this calendar allows out-of-range field values during computation
of time from fields[]. */
      lenient?: boolean;
      /** The TimeZone used by this calendar. Calendar
uses the time zone data to translate between locale and GMT time. */
      zone?: {
        /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
        ID?: string;
        defaultTimeZone?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
        /** a static TimeZone we can reference if no AppContext is in place */
        mainAppContextDefault?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
      };
      /** The first day of the week, with possible values SUNDAY,
MONDAY, etc.  This is a locale-dependent value. */
      firstDayOfWeek?: number;
      /** The number of days required for the first week in a month or year,
with possible values from 1 to 7.  This is a locale-dependent value. */
      minimalDaysInFirstWeek?: number;
      /** The next available value for stamp[], an internal array.
This actually should not be written out to the stream, and will probably
be removed from the stream in the near future.  In the meantime,
a value of MINIMUM_USER_STAMP should be used. */
      nextStamp?: number;
      /** The version of the serialized data on the stream.  Possible values:

0 or not present on stream

JDK 1.1.5 or earlier.

1

JDK 1.1.6 or later.  Writes a correct 'time' value
as well as compatible values for other fields.  This is a
transitional format.


When streaming out this class, the most recent format
and the highest allowable serialVersionOnStream
is written. */
      serialVersionOnStream?: number;
    };
  };
  creator?: string;
  modifiedTime?: {
    DEFAULT_FORMAT?: {
      /** The printer and/or parser to use, not null. */
      printerParser?: {
        printerParsers?: Record<string, never>[];
        optional?: boolean;
      };
      /** The locale to use for formatting, not null. */
      locale?: {
        defaultLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultDisplayLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultFormatLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        isoLanguages?: string[];
        isoCountries?: string[];
      };
      /** The symbols to use for formatting, not null. */
      decimalStyle?: {
        /** The zero digit. */
        zeroDigit?: Record<string, never>;
        /** The positive sign. */
        positiveSign?: Record<string, never>;
        /** The negative sign. */
        negativeSign?: Record<string, never>;
        /** The decimal separator. */
        decimalSeparator?: Record<string, never>;
      };
      /** 枚举说明: STRICT :Style to resolve dates and times strictly.

Using strict resolution will ensure that all parsed values are within
the outer range of valid values for the field. Individual fields may
be further processed for strictness.

For example, resolving year-month and day-of-month in the ISO calendar
system using strict mode will ensure that the day-of-month is valid
for the year-month, rejecting invalid values.
SMART :Style to resolve dates and times in a smart, or intelligent, manner.

Using smart resolution will perform the sensible default for each
field, which may be the same as strict, the same as lenient, or a third
behavior. Individual fields will interpret this differently.

For example, resolving year-month and day-of-month in the ISO calendar
system using smart mode will ensure that the day-of-month is from
1 to 31, converting any value beyond the last valid day-of-month to be
the last valid day-of-month.
LENIENT :Style to resolve dates and times leniently.

Using lenient resolution will resolve the values in an appropriate
lenient manner. Individual fields will interpret this differently.

For example, lenient mode allows the month in the ISO calendar system
to be outside the range 1 to 12.
For example, month 15 is treated as being 3 months after month 12. */
      resolverStyle?: "STRICT" | "SMART" | "LENIENT";
      /** The fields to use in resolving, null for all fields. */
      resolverFields?: Record<string, never>[];
      /** The chronology to use for formatting, null for no override. */
      chrono?: Record<string, never>;
      /** The zone to use for formatting, null for no override. */
      zone?: Record<string, never>;
    };
    DEFAULT_ZONE_ID?: Record<string, never>;
    calendar?: {
      /** The calendar field values for the currently set time for this calendar.
This is an array of FIELD_COUNT integers, with index values
ERA through DST_OFFSET. */
      fields?: number[];
      /** The flags which tell if a specified calendar field for the calendar is set.
A new object has no fields set.  After the first call to a method
which generates the fields, they all remain set after that.
This is an array of FIELD_COUNT booleans, with index values
ERA through DST_OFFSET. */
      isSet?: boolean[];
      /** The currently set time for this calendar, expressed in milliseconds after
January 1, 1970, 0:00:00 GMT. */
      time?: number;
      /** True if then the value of time is valid.
The time is made invalid by a change to an item of field[]. */
      isTimeSet?: boolean;
      /** True if fields[] are in sync with the currently set time.
If false, then the next attempt to get the value of a field will
force a recomputation of all fields from the current value of
time. */
      areFieldsSet?: boolean;
      /** True if this calendar allows out-of-range field values during computation
of time from fields[]. */
      lenient?: boolean;
      /** The TimeZone used by this calendar. Calendar
uses the time zone data to translate between locale and GMT time. */
      zone?: {
        /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
        ID?: string;
        defaultTimeZone?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
        /** a static TimeZone we can reference if no AppContext is in place */
        mainAppContextDefault?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
      };
      /** The first day of the week, with possible values SUNDAY,
MONDAY, etc.  This is a locale-dependent value. */
      firstDayOfWeek?: number;
      /** The number of days required for the first week in a month or year,
with possible values from 1 to 7.  This is a locale-dependent value. */
      minimalDaysInFirstWeek?: number;
      /** The next available value for stamp[], an internal array.
This actually should not be written out to the stream, and will probably
be removed from the stream in the near future.  In the meantime,
a value of MINIMUM_USER_STAMP should be used. */
      nextStamp?: number;
      /** The version of the serialized data on the stream.  Possible values:

0 or not present on stream

JDK 1.1.5 or earlier.

1

JDK 1.1.6 or later.  Writes a correct 'time' value
as well as compatible values for other fields.  This is a
transitional format.


When streaming out this class, the most recent format
and the highest allowable serialVersionOnStream
is written. */
      serialVersionOnStream?: number;
    };
  };
  modifier?: string;
  id?: string;
  valid?: number;
}[];

/**
 * POST /dtp-rwd-server/rwd/data/mark/relation/info/update 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInfoUpdateBody = {
  graphCode?: string;
  relCode?: string;
  objFrom?: string[];
  objTo?: string[];
  relId?: string[];
  relInfoCode?: string[];
  sourceTag?: string[];
  /** 修改数据来源时传入 */
  updateSourceTag?: string;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/relation/insert 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInsertBody = {
  projectId?: string;
  groupCode?: string;
  relId?: string;
  graphCode?: string;
  relCode?: string;
  objFrom?: string;
  objTo?: string;
  sourceTag?: string;
  changeTag?: number;
  endTag?: string;
  publishStatus?: number;
  remark?: string;
  creationTime?: {
    DEFAULT_FORMAT?: {
      /** The printer and/or parser to use, not null. */
      printerParser?: {
        printerParsers?: Record<string, never>[];
        optional?: boolean;
      };
      /** The locale to use for formatting, not null. */
      locale?: {
        defaultLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultDisplayLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultFormatLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        isoLanguages?: string[];
        isoCountries?: string[];
      };
      /** The symbols to use for formatting, not null. */
      decimalStyle?: {
        /** The zero digit. */
        zeroDigit?: Record<string, never>;
        /** The positive sign. */
        positiveSign?: Record<string, never>;
        /** The negative sign. */
        negativeSign?: Record<string, never>;
        /** The decimal separator. */
        decimalSeparator?: Record<string, never>;
      };
      /** 枚举说明: STRICT :Style to resolve dates and times strictly.

Using strict resolution will ensure that all parsed values are within
the outer range of valid values for the field. Individual fields may
be further processed for strictness.

For example, resolving year-month and day-of-month in the ISO calendar
system using strict mode will ensure that the day-of-month is valid
for the year-month, rejecting invalid values.
SMART :Style to resolve dates and times in a smart, or intelligent, manner.

Using smart resolution will perform the sensible default for each
field, which may be the same as strict, the same as lenient, or a third
behavior. Individual fields will interpret this differently.

For example, resolving year-month and day-of-month in the ISO calendar
system using smart mode will ensure that the day-of-month is from
1 to 31, converting any value beyond the last valid day-of-month to be
the last valid day-of-month.
LENIENT :Style to resolve dates and times leniently.

Using lenient resolution will resolve the values in an appropriate
lenient manner. Individual fields will interpret this differently.

For example, lenient mode allows the month in the ISO calendar system
to be outside the range 1 to 12.
For example, month 15 is treated as being 3 months after month 12. */
      resolverStyle?: "STRICT" | "SMART" | "LENIENT";
      /** The fields to use in resolving, null for all fields. */
      resolverFields?: Record<string, never>[];
      /** The chronology to use for formatting, null for no override. */
      chrono?: Record<string, never>;
      /** The zone to use for formatting, null for no override. */
      zone?: Record<string, never>;
    };
    DEFAULT_ZONE_ID?: Record<string, never>;
    calendar?: {
      /** The calendar field values for the currently set time for this calendar.
This is an array of FIELD_COUNT integers, with index values
ERA through DST_OFFSET. */
      fields?: number[];
      /** The flags which tell if a specified calendar field for the calendar is set.
A new object has no fields set.  After the first call to a method
which generates the fields, they all remain set after that.
This is an array of FIELD_COUNT booleans, with index values
ERA through DST_OFFSET. */
      isSet?: boolean[];
      /** The currently set time for this calendar, expressed in milliseconds after
January 1, 1970, 0:00:00 GMT. */
      time?: number;
      /** True if then the value of time is valid.
The time is made invalid by a change to an item of field[]. */
      isTimeSet?: boolean;
      /** True if fields[] are in sync with the currently set time.
If false, then the next attempt to get the value of a field will
force a recomputation of all fields from the current value of
time. */
      areFieldsSet?: boolean;
      /** True if this calendar allows out-of-range field values during computation
of time from fields[]. */
      lenient?: boolean;
      /** The TimeZone used by this calendar. Calendar
uses the time zone data to translate between locale and GMT time. */
      zone?: {
        /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
        ID?: string;
        defaultTimeZone?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
        /** a static TimeZone we can reference if no AppContext is in place */
        mainAppContextDefault?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
      };
      /** The first day of the week, with possible values SUNDAY,
MONDAY, etc.  This is a locale-dependent value. */
      firstDayOfWeek?: number;
      /** The number of days required for the first week in a month or year,
with possible values from 1 to 7.  This is a locale-dependent value. */
      minimalDaysInFirstWeek?: number;
      /** The next available value for stamp[], an internal array.
This actually should not be written out to the stream, and will probably
be removed from the stream in the near future.  In the meantime,
a value of MINIMUM_USER_STAMP should be used. */
      nextStamp?: number;
      /** The version of the serialized data on the stream.  Possible values:

0 or not present on stream

JDK 1.1.5 or earlier.

1

JDK 1.1.6 or later.  Writes a correct 'time' value
as well as compatible values for other fields.  This is a
transitional format.


When streaming out this class, the most recent format
and the highest allowable serialVersionOnStream
is written. */
      serialVersionOnStream?: number;
    };
  };
  creator?: string;
  modifiedTime?: {
    DEFAULT_FORMAT?: {
      /** The printer and/or parser to use, not null. */
      printerParser?: {
        printerParsers?: Record<string, never>[];
        optional?: boolean;
      };
      /** The locale to use for formatting, not null. */
      locale?: {
        defaultLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultDisplayLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        defaultFormatLocale?: {
          defaultLocale?: Record<string, never>;
          defaultDisplayLocale?: Record<string, never>;
          defaultFormatLocale?: Record<string, never>;
          isoLanguages?: string[];
          isoCountries?: string[];
        };
        isoLanguages?: string[];
        isoCountries?: string[];
      };
      /** The symbols to use for formatting, not null. */
      decimalStyle?: {
        /** The zero digit. */
        zeroDigit?: Record<string, never>;
        /** The positive sign. */
        positiveSign?: Record<string, never>;
        /** The negative sign. */
        negativeSign?: Record<string, never>;
        /** The decimal separator. */
        decimalSeparator?: Record<string, never>;
      };
      /** 枚举说明: STRICT :Style to resolve dates and times strictly.

Using strict resolution will ensure that all parsed values are within
the outer range of valid values for the field. Individual fields may
be further processed for strictness.

For example, resolving year-month and day-of-month in the ISO calendar
system using strict mode will ensure that the day-of-month is valid
for the year-month, rejecting invalid values.
SMART :Style to resolve dates and times in a smart, or intelligent, manner.

Using smart resolution will perform the sensible default for each
field, which may be the same as strict, the same as lenient, or a third
behavior. Individual fields will interpret this differently.

For example, resolving year-month and day-of-month in the ISO calendar
system using smart mode will ensure that the day-of-month is from
1 to 31, converting any value beyond the last valid day-of-month to be
the last valid day-of-month.
LENIENT :Style to resolve dates and times leniently.

Using lenient resolution will resolve the values in an appropriate
lenient manner. Individual fields will interpret this differently.

For example, lenient mode allows the month in the ISO calendar system
to be outside the range 1 to 12.
For example, month 15 is treated as being 3 months after month 12. */
      resolverStyle?: "STRICT" | "SMART" | "LENIENT";
      /** The fields to use in resolving, null for all fields. */
      resolverFields?: Record<string, never>[];
      /** The chronology to use for formatting, null for no override. */
      chrono?: Record<string, never>;
      /** The zone to use for formatting, null for no override. */
      zone?: Record<string, never>;
    };
    DEFAULT_ZONE_ID?: Record<string, never>;
    calendar?: {
      /** The calendar field values for the currently set time for this calendar.
This is an array of FIELD_COUNT integers, with index values
ERA through DST_OFFSET. */
      fields?: number[];
      /** The flags which tell if a specified calendar field for the calendar is set.
A new object has no fields set.  After the first call to a method
which generates the fields, they all remain set after that.
This is an array of FIELD_COUNT booleans, with index values
ERA through DST_OFFSET. */
      isSet?: boolean[];
      /** The currently set time for this calendar, expressed in milliseconds after
January 1, 1970, 0:00:00 GMT. */
      time?: number;
      /** True if then the value of time is valid.
The time is made invalid by a change to an item of field[]. */
      isTimeSet?: boolean;
      /** True if fields[] are in sync with the currently set time.
If false, then the next attempt to get the value of a field will
force a recomputation of all fields from the current value of
time. */
      areFieldsSet?: boolean;
      /** True if this calendar allows out-of-range field values during computation
of time from fields[]. */
      lenient?: boolean;
      /** The TimeZone used by this calendar. Calendar
uses the time zone data to translate between locale and GMT time. */
      zone?: {
        /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
        ID?: string;
        defaultTimeZone?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
        /** a static TimeZone we can reference if no AppContext is in place */
        mainAppContextDefault?: {
          /** The string identifier of this TimeZone.  This is a
programmatic identifier used internally to look up TimeZone
objects from the system table and also to map them to their localized
display names.  ID values are unique in the system
table but may not be for dynamically created zones. */
          ID?: string;
          defaultTimeZone?: Record<string, never>;
          /** a static TimeZone we can reference if no AppContext is in place */
          mainAppContextDefault?: Record<string, never>;
        };
      };
      /** The first day of the week, with possible values SUNDAY,
MONDAY, etc.  This is a locale-dependent value. */
      firstDayOfWeek?: number;
      /** The number of days required for the first week in a month or year,
with possible values from 1 to 7.  This is a locale-dependent value. */
      minimalDaysInFirstWeek?: number;
      /** The next available value for stamp[], an internal array.
This actually should not be written out to the stream, and will probably
be removed from the stream in the near future.  In the meantime,
a value of MINIMUM_USER_STAMP should be used. */
      nextStamp?: number;
      /** The version of the serialized data on the stream.  Possible values:

0 or not present on stream

JDK 1.1.5 or earlier.

1

JDK 1.1.6 or later.  Writes a correct 'time' value
as well as compatible values for other fields.  This is a
transitional format.


When streaming out this class, the most recent format
and the highest allowable serialVersionOnStream
is written. */
      serialVersionOnStream?: number;
    };
  };
  modifier?: string;
  id?: string;
  valid?: number;
}[];

/**
 * POST /dtp-rwd-server/rwd/data/mark/relation/update 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationUpdateBody = {
  graphCode?: string;
  relCode?: string;
  objFrom?: string[];
  objTo?: string[];
  relId?: string[];
  sourceTag?: string[];
  /** 修改数据来源时传入 */
  updateSourceTag?: string;
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/update 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkUpdateBody = {
  id?: string[];
  classCode?: string[];
  infoCode?: string[];
  graphCode?: string;
  relCode?: string;
  objFrom?: string[];
  objTo?: string[];
  relId?: string[];
  relInfoCode?: string[];
  sourceTag?: string[];
};

/**
 * POST /dtp-rwd-server/rwd/data/mark/update/status 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDataMarkUpdateStatusBody = PhysicalWorldServiceRoot;

/**
 * POST /dtp-rwd-server/rwd/def/type/rel/create 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDefTypeRelCreateBody = PhysicalWorldServiceRoot;

/**
 * POST /dtp-rwd-server/rwd/def/type/rel/delete 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDefTypeRelDeleteBody = string;

/**
 * POST /dtp-rwd-server/rwd/def/type/rel/query 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDefTypeRelQueryBody = {
  /** 分页页码,从 1 开始 */
  page?: number;
  /** 每页行数 */
  size?: number;
  /** 是否只统计总数 */
  onlyCount?: boolean;
  /** 是否不统计总数 */
  withoutCount?: boolean;
  /** 查询条件 */
  criteria: Record<string, never>;
  /** 排序条件 */
  orders?: {
    column?: string;
    asc?: boolean;
  }[];
  /** 自定义的排序条件,为了提供带中文排序的支持 */
  orderCustoms?: {
    /** 是否正序排列，默认 true */
    chineseOrder?: boolean;
    column?: string;
    asc?: boolean;
  }[];
  /** 额外返回的扩展字段清单 */
  withColumns?: string[];
};

/**
 * POST /dtp-rwd-server/rwd/def/type/rel/update 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdDefTypeRelUpdateBody = PhysicalWorldServiceRoot;

/**
 * POST /dtp-rwd-server/rwd/group/proj/equip/count 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdGroupProjEquipCountBody = {
  /** 项目id */
  projectId: string;
  /** 数据权限入参 + 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
}[];

/**
 * POST /dtp-rwd-server/rwd/group/proj/equipPos 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdGroupProjEquipPosBody = {
  /** 项目id */
  projectId: string;
  /** 数据权限入参 + 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
}[];

/**
 * POST /dtp-rwd-server/rwd/group/proj/equipPos/count 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdGroupProjEquipPosCountBody = {
  /** 项目id */
  projectId: string;
  /** 数据权限入参 + 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
  /** 设备分类编码 */
  equipPosCodes?: string[];
}[];

/**
 * POST /dtp-rwd-server/rwd/group/proj/system/count 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdGroupProjSystemCountBody = {
  /** 项目id */
  projectId: string;
  /** 数据权限入参 + 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
}[];

/**
 * POST /dtp-rwd-server/rwd/group/tree/roomFuncType 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdGroupTreeRoomFuncTypeBody = {
  /** 项目id列表 */
  projectIds?: string[];
};

/**
 * POST /dtp-rwd-server/rwd/instance/object/batchQueryProjectByIds 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectBatchQueryProjectByIdsBody = string[];

/**
 * POST /dtp-rwd-server/rwd/instance/object/query 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryBody = {
  /** 分页页码,从 1 开始 */
  page?: number;
  /** 每页行数 */
  size?: number;
  /** 是否只统计总数 */
  onlyCount?: boolean;
  /** 是否不统计总数 */
  withoutCount?: boolean;
  /** 查询条件,参考(1.通用查询参数说明) */
  criteria?: Record<string, never>;
  /** 排序条件 */
  orders?: {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认 true */
    asc?: boolean;
  }[];
  /** 自定义的排序条件,为了提供带中文排序的支持 */
  orderCustoms?: {
    /** 是否正序排列，默认 true */
    chineseOrder?: boolean;
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认 true */
    asc?: boolean;
  }[];
  /** 额外返回的扩展字段清单 */
  withColumns?: string[];
};

/**
 * POST /dtp-rwd-server/rwd/instance/object/queryEquipListByClassCode 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByClassCodeBody = PhysicalWorldServiceRoot4;

/**
 * POST /dtp-rwd-server/rwd/instance/object/queryEquipListByConditions 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByConditionsBody = {
  /** 分页页码,从 1 开始 */
  page?: number;
  /** 每页行数 */
  size?: number;
  /** 筛选关键字,本地名称筛选 */
  keyword?: string;
  /** 项目id数组 */
  projectIds?: string[];
  /** 建筑id */
  buildingId?: string;
  /** 楼层id */
  floorId?: string;
  /** 系统id */
  systemId?: string;
  /** 对象类型 */
  classCode?: string;
  /** 安装位置 */
  installLocation?: string;
  /** 生产厂家 */
  manufacturer?: string;
  /** 维保单位名称 */
  warranter?: string;
  /** 设备状态 */
  equipStatus?: string;
  /** 排序条件 */
  orders?: {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认 true */
    asc?: boolean;
  }[];
};

/**
 * POST /dtp-rwd-server/rwd/instance/object/queryEquipListBySystemId 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListBySystemIdBody = PhysicalWorldServiceRoot4;

/**
 * POST /dtp-rwd-server/rwd/instance/object/queryInstanceTree 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryInstanceTreeBody = {
  /** 标签黑名单，用于排除设备类 */
  tagBlackList?: {
    /** 标签类别 */
    tagType?: string[];
    /** 标签值 */
    tagCode?: string[];
  };
  /** 设备类黑名单，用于排除设备类 */
  classCodeBlackList?: string[];
  /** 设备实例黑名单，用于排除设备类实例 */
  equipIdBlackList?: string[];
};

/**
 * POST /dtp-rwd-server/rwd/instance/object/queryObjectListSuperiorId 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryObjectListSuperiorIdBody = {
  /** 分页页码,从 1 开始 */
  page?: number;
  /** 每页行数 */
  size?: number;
  /** 筛选关键字,本地名称筛选 */
  keyword?: string;
  /** 是否只统计总数 */
  onlyCount?: boolean;
  /** 创建时间筛选范围 */
  createTimeScope?: {
    startEq?: string;
    endEq?: string;
  };
  /** 项目id */
  projectId?: string;
  /** 建筑id */
  buildingId?: string;
  /** 楼层id */
  floorId: string;
  /** 对象类型数组 */
  classCodes?: string[];
  /** 对象分类数组(仅限1个),当buildingId/floorId不为空时,仅限equipment,space(且classCodes为GeneralZone) */
  objTypes?: string[];
};

/**
 * POST /dtp-rwd-server/rwd/instance/object/querySpaceListByFloorIdAndRoomFuncType 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByFloorIdAndRoomFuncTypeBody = PhysicalWorldServiceRoot4;

/**
 * POST /dtp-rwd-server/rwd/instance/object/querySpaceListByRoomFuncType 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByRoomFuncTypeBody = PhysicalWorldServiceRoot4;

/**
 * POST /dtp-rwd-server/rwd/iot/server/point/countPointByProtocolType 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdIotServerPointCountPointByProtocolTypeBody = PhysicalWorldServiceIotServerPointDto;

/**
 * POST /dtp-rwd-server/rwd/iot/server/point/delete 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdIotServerPointDeleteBody = string[];

/**
 * POST /dtp-rwd-server/rwd/iot/server/v2/point/queryPointList 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdIotServerV2PointQueryPointListBody = PhysicalWorldServiceRequestCriteriaIotServerPointDto;

/**
 * POST /dtp-rwd-server/rwd/object/queryBuildingUnderProject 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryBuildingUnderProjectBody = PhysicalWorldServiceObjectQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryEquipByClassCodeAndFloor 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndFloorBody = PhysicalWorldServiceEquipSceneRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryEquipByClassCodeAndPartition 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndPartitionBody = PhysicalWorldServiceEquipSceneRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryEquipByClassCodeAndServiceSpace 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndServiceSpaceBody = PhysicalWorldServiceMapObject1;

/**
 * POST /dtp-rwd-server/rwd/object/queryEquipGroupBySystemId 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipGroupBySystemIdBody = PhysicalWorldServiceObjectQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryEquipInfoObjects 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipInfoObjectsBody = PhysicalWorldServiceEquipInfoPointRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryEquipLocationSpaceFloor 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipLocationSpaceFloorBody = PhysicalWorldServiceObjectQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryEquipServiceSpaceFloor 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipServiceSpaceFloorBody = PhysicalWorldServiceObjectQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryEquipUnderMajor 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipUnderMajorBody = PhysicalWorldServiceSystemEquipRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryEquipWithinRadius 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipWithinRadiusBody = PhysicalWorldServiceRadiusRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryFloorUnderBuilding 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryFloorUnderBuildingBody = PhysicalWorldServiceObjectQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryPartitionUnderBuilding 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryPartitionUnderBuildingBody = PhysicalWorldServiceObjectQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryProjectUnderGroupCode 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryProjectUnderGroupCodeBody = PhysicalWorldServiceObjectQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderBuilding 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderBuildingBody = PhysicalWorldServiceSpaceQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderPartition 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderPartitionBody = PhysicalWorldServiceSpaceQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderProject 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderProjectBody = PhysicalWorldServiceSpaceQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/querySpatialInformationPointObjects 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQuerySpatialInformationPointObjectsBody = PhysicalWorldServiceSpaceInfoPointRequest;

/**
 * POST /dtp-rwd-server/rwd/object/querySystemUnderBuilding 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderBuildingBody = PhysicalWorldServiceSystemEquipRequest;

/**
 * POST /dtp-rwd-server/rwd/object/querySystemUnderMajor 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderMajorBody = PhysicalWorldServiceSystemEquipRequest;

/**
 * POST /dtp-rwd-server/rwd/object/querySystemUnderProject 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderProjectBody = PhysicalWorldServiceSystemEquipRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryTenantTypeUnderBuilding 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderBuildingBody = PhysicalWorldServiceSpaceQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryTenantTypeUnderFloor 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderFloorBody = PhysicalWorldServiceSpaceQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryTenantTypeUnderPartition 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderPartitionBody = PhysicalWorldServiceSpaceQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/object/queryTenantTypeUnderProject 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderProjectBody = PhysicalWorldServiceSpaceQueryRequest;

/**
 * POST /dtp-rwd-server/rwd/publish/change/count 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdPublishChangeCountBody = {
  /** 最新一次发布对应的发布id
注意：此参数和时间范围(startTime、endTime) 必传其中一个 */
  id?: string;
  /** 开始时间,格式:20250916143712
注意：此参数和id 必传其中一个 */
  startTime?: string;
  /** 结束时间,格式:20250916143712
注意：此参数和id 必传其中一个 */
  endTime?: string;
  /** 受体种类标识：1-对象，2-对象信息点，3-关系，4-关系信息点 */
  type: number[];
  /** 操作类型：1-新增，2-变更(修改)，0-删除 */
  operateType?: number[];
  /** 对象类型编码(关系过滤，即一侧有此对象类的关系实例，才是符合条件的) */
  classCode?: string;
  /** 空间功能类型便那吗 */
  roomFuncType?: string;
  /** 图(用于查询关系的新增和删除) */
  graphCode?: string;
  /** 边(用于查询关系的新增和删除) */
  relCode?: string;
};

/**
 * POST /dtp-rwd-server/rwd/publish/change/record 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdPublishChangeRecordBody = {
  /** 最新一次发布对应的发布id
注意：此参数和时间范围(startTime、endTime) 必传其中一个 */
  id?: string;
  /** 开始时间,格式:20250916143712
注意：此参数和id 必传其中一个 */
  startTime?: string;
  /** 结束时间,格式:20250916143712
注意：此参数和id 必传其中一个 */
  endTime?: string;
  /** 受体种类标识：1-对象，2-对象信息点，3-关系，4-关系信息点
注意：只可传入一个值 */
  type: number[];
  /** 操作类型：1-新增，2-变更(修改)，0-删除 */
  operateType?: number[];
  /** 对象类型编码(关系过滤，即一侧有此对象类的关系实例，才是符合条件的) */
  classCode?: string;
  /** 空间功能类型便那吗 */
  roomFuncType?: string;
  /** 图(用于查询关系的新增和删除) */
  graphCode?: string;
  /** 边(用于查询关系的新增和删除) */
  relCode?: string;
  withColumns?: string[];
  /** 默认1 */
  page?: number;
  /** 默认100，最大一页查询10000 */
  size?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryAllClassCodeFromIds 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryAllClassCodeFromIdsBody = {
  /** 起点设备id,可输入多个 */
  objFroms: string[];
  /** 终点设备类型 */
  toClassCode?: string;
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id,0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: number;
  /** 最大级数.若参数值为1，表示只找到与起点直接连接的终点，没有符合条件的，则不返回。 */
  maxLevel?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryAllClassCodeToIds 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryAllClassCodeToIdsBody = {
  /** 起点设备类型 */
  fromClassCode?: string;
  /** 终点设备id, 可输入多个 */
  objTos: string[];
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id,0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: number;
  /** 最大级数.若参数值为1，表示只找到与起点直接连接的终点，没有符合条件的，则不返回。 */
  maxLevel?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryClassCodeFromIds 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeFromIdsBody = {
  /** 起点设备id,可输入多个 */
  objFroms: string[];
  /** 终点设备类型，[终点类型过多，无法枚举时，此参数可不填，此时只会查询与起点设备直接相连的终点设备，请根据实际情况入参] */
  toClassCode?: string;
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id,0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: number;
  /** 最大级数.若参数值为1，表示只找到与起点直接连接的终点，没有符合条件的，则不返回。此参数若不输入，则按原逻辑，查询到第一个符合条件的终点返回。 */
  maxLevel?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryClassCodeToIds 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeToIdsBody = {
  /** 起点设备类型,[起点类型过多，无法枚举时，此参数可不填，此时只会查找与终点设备直接相连的起点设备，请根据实际需求入参] */
  fromClassCode?: string;
  /** 终点设备id, 可输入多个 */
  objTos: string[];
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id,0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: number;
  /** 最大级数.若参数值为1，表示只找到与起点直接连接的终点，没有符合条件的，则不返回。此参数若不输入，则按原逻辑，查询到第一个符合条件的终点返回。 */
  maxLevel?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryExistsBetween 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryExistsBetweenBody = {
  /** 起点设备id */
  objFrom: string;
  /** 终点设备id */
  objTo: string;
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
};

/**
 * POST /dtp-rwd-server/rwd/route/queryFromToNode 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryFromToNodeBody = {
  /** 起点设备类型 */
  fromClassCode: string;
  /** 终点设备类型 */
  toClassCode: string;
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
};

/**
 * POST /dtp-rwd-server/rwd/route/queryNodeForSpacePath 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodeForSpacePathBody = {
  /** 空间id */
  objFrom: string;
  /** 设备id列表 */
  objTos: string[];
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id,0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: number;
  /** 是否只返回最短路径,0：返回全部路径 1：仅返回最短路径  默认值： 0 */
  ifShortest?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryNodePathIdInSet 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodePathIdInSetBody = {
  /** 起点设备id,可输入多个 */
  objFroms: string[];
  /** 终点设备id, 可输入多个 */
  objTos: string[];
  /** 对象编码+信息点,入参格式：List>， */
  objToList: string[];
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id,0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: number;
  /** 是否只返回最短路径,0：返回全部路径 1：仅返回最短路径  默认值： 0 */
  ifShortest?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryNodeToGeneralPath 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodeToGeneralPathBody = {
  /** 空间id */
  objFrom: string;
  /** 终点对象过滤条件，对象编码+信息点,入参格式：List>， */
  objToList: string[];
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id,0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: number;
  /** 是否只返回最短路径,0：返回全部路径 1：仅返回最短路径  默认值： 0 */
  ifShortest?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryPathByTag 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryPathByTagBody = {
  /** 起点设备id列表 */
  objFroms: string[];
  /** 对象标签+条件 */
  objTag: Record<string, never>;
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id，0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: string;
  /** 查询层级 */
  maxLevel?: number;
  /** 方向：0-双向遍历 1-起点指向终点：说明终点在下游 2-终点指向起点：说明终点在起点上游 */
  direct: number;
  /** 返回设备过滤条件 */
  returnList?: string[];
  /** 是否返回最短路径 */
  ifShortest?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryPathInSpaceId 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryPathInSpaceIdBody = {
  /** 起点设备id */
  objFrom: string;
  /** 终点设备id */
  objTo: string;
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id，0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: string;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryRelationIdInSet 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryRelationIdInSetBody = {
  /** 起点设备id,可输入多个 */
  objFroms: string[];
  /** 终点设备id可输入多个 */
  objTos: string[];
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
};

/**
 * POST /dtp-rwd-server/rwd/route/querySpaceToTagPath 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQuerySpaceToTagPathBody = {
  /** 空间id */
  objFrom: string;
  /** 对象标签+条件 */
  objTag: Record<string, never>;
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id，0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: string;
  /** 查询层级 */
  maxLevel?: number;
  /** 方向：0-双向遍历 1-起点指向终点：说明终点在下游 2-终点指向起点：说明终点在起点上游 */
  direct: number;
  /** 返回设备过滤条件 */
  returnList?: string[];
  /** 是否返回最短路径 */
  ifShortest?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryTagTypeFromIds 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryTagTypeFromIdsBody = {
  /** 起点设备id列表 */
  objFroms: string[];
  /** 对象标签+条件 */
  objTag: Record<string, never>;
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id，0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: string;
  /** 查询层级 */
  maxLevel?: number;
};

/**
 * POST /dtp-rwd-server/rwd/route/queryTagTypeToIds 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdRouteQueryTagTypeToIdsBody = {
  /** 终点设备id列表 */
  objTos: string[];
  /** 对象标签+条件 */
  objTag: Record<string, never>;
  /** 图类型编码 */
  graphCode: string;
  /** 边类型编码 */
  relCode: string;
  /** 允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  whiteList?: Record<string, never>[];
  /** 不允许途径的对象过滤条件，参数格式：List>，支持通过设备类型编码+信息点来确定设备 例如，立管 */
  blackList?: Record<string, never>[];
  /** 输出仅包含设备id，0：输出所有信息点 1：仅输出设备id  默认值： 0 */
  ifOnlyId?: string;
  /** 查询层级 */
  maxLevel?: number;
};

/**
 * POST /dtp-rwd-server/rwd/work/order/bfList 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdWorkOrderBfListBody = {
  /** 是否正序排列，默认 true */
  asc?: boolean;
};

/**
 * POST /dtp-rwd-server/rwd/work/order/classCode/bfList 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdWorkOrderClassCodeBfListBody = {
  /** 专业 */
  major?: string;
  /** 对象类型编码 */
  classCodes?: string[];
  /** 空间功能类型编码 */
  roomFuncType?: string[];
  /** 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
}[];

/**
 * POST /dtp-rwd-server/rwd/work/order/classCode/spList 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdWorkOrderClassCodeSpListBody = {
  /** 专业 */
  major?: string;
  /** 对象类型编码 */
  classCodes?: string[];
  /** 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
}[];

/**
 * POST /dtp-rwd-server/rwd/work/order/search 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdWorkOrderSearchBody = {
  /** 搜索词 */
  keyword: string;
  page?: number;
  size?: number;
  /** 三种类型：equipment、system、space */
  objType: string;
  /** 模糊搜索时,通过关系值进行过滤空间类型，例如：GeneralZone，默认：GeneralZone */
  relValue?: string;
};

/**
 * POST /dtp-rwd-server/rwd/work/order/spObjList 的请求体。
 */
export type PhysicalWorldServiceDtpRwdServerRwdWorkOrderSpObjListBody = {
  /** id列表(空间id) */
  ids?: string[];
  /** 信息点值过滤，不允许传入关系查询参数(relationFrom、reltionTo等) */
  criteria?: Record<string, never>;
};

/**
 * docs/product-apis/physical-world-service 对应的请求对象类型。
 */
export type PhysicalWorldServiceApi = ReturnType<typeof createPhysicalWorldServiceApi>;

/**
 * 创建 physical-world-service 请求对象，所有方法都会复用统一网关配置和鉴权请求头。
 */
export function createPhysicalWorldServiceApi(config: GatewayConfig) {
  return {
  /**
   * 接口说明：1.获取轻量化库中所有六位码
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/components/codes
   */
  dtpRwdServer3dComponentsCodes<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dComponentsCodesQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/components/codes",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：6.族库打包下载
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/components/componentszip
   */
  dtpRwdServer3dComponentsComponentszip<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dComponentsComponentszipQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/components/componentszip",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：5.获取设备族连接点列表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/components/connectors
   */
  dtpRwdServer3dComponentsConnectors<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dComponentsConnectorsBody,
    query: PhysicalWorldServiceDtpRwdServer3dComponentsConnectorsQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/components/connectors",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：8.获取族库数据最后的更新时间
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/components/lastTime
   */
  dtpRwdServer3dComponentsLastTime<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/components/lastTime",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：3.获取指定六位码的设备类型(带更新时间)列表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/components/typeinfos
   */
  dtpRwdServer3dComponentsTypeinfos<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dComponentsTypeinfosBody,
    query: PhysicalWorldServiceDtpRwdServer3dComponentsTypeinfosQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/components/typeinfos",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：2.获取指定六位码的设备类型列表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/components/types
   */
  dtpRwdServer3dComponentsTypes<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dComponentsTypesBody,
    query: PhysicalWorldServiceDtpRwdServer3dComponentsTypesQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/components/types",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：4.完整的6位码族文件树
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/components/typetree
   */
  dtpRwdServer3dComponentsTypetree<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dComponentsTypetreeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/components/typetree",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：7.上传族库数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/3d/components/uploadComp
   */
  dtpRwdServer3dComponentsUploadComp<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/components/uploadComp",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：2.查询指定楼层有模型的对象类型编码
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/codes
   */
  dtpRwdServer3dObjectCodes<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectCodesQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/codes",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：16.查询指定楼层的三维模型（.obj格式）
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/floorObjZip
   */
  dtpRwdServer3dObjectFloorObjZip<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectFloorObjZipQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/floorObjZip",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：13.楼层列表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/floors
   */
  dtpRwdServer3dObjectFloors<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectFloorsQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/floors",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：7.全楼打包
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/floorzip
   */
  dtpRwdServer3dObjectFloorzip<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectFloorzipQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/floorzip",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：10.对指定楼层和六位码的模型打包返回(json格式)
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/fullmeshj
   */
  dtpRwdServer3dObjectFullmeshj<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectFullmeshjQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/fullmeshj",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：11.对指定楼层和六位码的模型打包返回(zip包形式)
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/fullmeshzip
   */
  dtpRwdServer3dObjectFullmeshzip<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectFullmeshzipQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/fullmeshzip",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：5.获取bg文件
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/mesh
   */
  dtpRwdServer3dObjectMesh<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectMeshQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/mesh",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：23.批量获取模型文件
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/meshes
   */
  dtpRwdServer3dObjectMeshes<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectMeshesQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/meshes",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：6.获取bg文件的json格式数据
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/meshj
   */
  dtpRwdServer3dObjectMeshj<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectMeshjQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/meshj",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：9.统计模型数量
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/modelCount
   */
  dtpRwdServer3dObjectModelCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dObjectModelCountBody,
    query: PhysicalWorldServiceDtpRwdServer3dObjectModelCountQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/modelCount",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：8.逆向交付设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/3d/object/objectcmd
   */
  dtpRwdServer3dObjectObjectcmd<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dObjectObjectcmdBody,
    query: PhysicalWorldServiceDtpRwdServer3dObjectObjectcmdQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/objectcmd",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：12.项目列表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/projects
   */
  dtpRwdServer3dObjectProjects<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectProjectsQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/projects",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：15.清除楼层模型
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/3d/object/removefloor
   */
  dtpRwdServer3dObjectRemovefloor<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dObjectRemovefloorBody,
    query: PhysicalWorldServiceDtpRwdServer3dObjectRemovefloorQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/removefloor",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：14.清除项目模型
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/3d/object/removeproject
   */
  dtpRwdServer3dObjectRemoveproject<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dObjectRemoveprojectBody,
    query: PhysicalWorldServiceDtpRwdServer3dObjectRemoveprojectQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/removeproject",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：22.逆向交付管道
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/3d/object/reversePipe
   */
  dtpRwdServer3dObjectReversePipe<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/reversePipe",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：4.获取xj形式的场景文件
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/scene
   */
  dtpRwdServer3dObjectScene<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dObjectSceneBody,
    query: PhysicalWorldServiceDtpRwdServer3dObjectSceneQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/scene",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：3.获取json形式的场景文件
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/scenej
   */
  dtpRwdServer3dObjectScenej<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dObjectScenejBody,
    query: PhysicalWorldServiceDtpRwdServer3dObjectScenejQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/scenej",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：17.查询指定空间的三维模型（.bg格式）
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/spaceBgZip
   */
  dtpRwdServer3dObjectSpaceBgZip<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectSpaceBgZipQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/spaceBgZip",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：18.查询指定空间的三维模型（.obj格式）
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/spaceObjZip
   */
  dtpRwdServer3dObjectSpaceObjZip<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectSpaceObjZipQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/spaceObjZip",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：21.更新版本信息
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/3d/object/updateversion
   */
  dtpRwdServer3dObjectUpdateversion<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServer3dObjectUpdateversionBody,
    query: PhysicalWorldServiceDtpRwdServer3dObjectUpdateversionQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/updateversion",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：19.上传楼层模型
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/3d/object/uploadfloor
   */
  dtpRwdServer3dObjectUploadfloor<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectUploadfloorQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/uploadfloor",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：20.版本列表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/3d/object/version
   */
  dtpRwdServer3dObjectVersion<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServer3dObjectVersionQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/3d/object/version",
      method: "GET",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询对象最后一次的变更记录
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/api/object/last/change/queryRecords
   */
  dtpRwdServerApiObjectLastChangeQueryRecords<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerApiObjectLastChangeQueryRecordsBody,
    query: PhysicalWorldServiceDtpRwdServerApiObjectLastChangeQueryRecordsQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/api/object/last/change/queryRecords",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：⭐统计说明
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/count
   */
  dtpRwdServerCount<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/count",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：重推数据字典给MeAI
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/dtp-knowledge-server/rwdedit/version/pushDataToMeAi
   */
  dtpRwdServerDtpKnowledgeServerRwdeditVersionPushDataToMeAi<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServerDtpKnowledgeServerRwdeditVersionPushDataToMeAiQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/dtp-knowledge-server/rwdedit/version/pushDataToMeAi",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查找对象的定位点
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/geometric/object/bim
   */
  dtpRwdServerGeometricObjectBim<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerGeometricObjectBimBody,
    query: PhysicalWorldServiceDtpRwdServerGeometricObjectBimQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/geometric/object/bim",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查找对象的外包围盒
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/geometric/object/boundingBox
   */
  dtpRwdServerGeometricObjectBoundingBox<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerGeometricObjectBoundingBoxBody,
    query: PhysicalWorldServiceDtpRwdServerGeometricObjectBoundingBoxQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/geometric/object/boundingBox",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查找对象的外包围盒中心点、阀门/传感器的定位点
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/geometric/object/center/position
   */
  dtpRwdServerGeometricObjectCenterPosition<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerGeometricObjectCenterPositionBody,
    query: PhysicalWorldServiceDtpRwdServerGeometricObjectCenterPositionQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/geometric/object/center/position",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查找空间、设备设施的轮廓线
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/geometric/object/outLine
   */
  dtpRwdServerGeometricObjectOutLine<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerGeometricObjectOutLineBody,
    query: PhysicalWorldServiceDtpRwdServerGeometricObjectOutLineQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/geometric/object/outLine",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查找对象的骨架线
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/geometric/object/skeletonLine
   */
  dtpRwdServerGeometricObjectSkeletonLine<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerGeometricObjectSkeletonLineBody,
    query: PhysicalWorldServiceDtpRwdServerGeometricObjectSkeletonLineQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/geometric/object/skeletonLine",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改日志状态
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/publishData/changLogStatus
   */
  dtpRwdServerPublishDataChangLogStatus<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServerPublishDataChangLogStatusQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/publishData/changLogStatus",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：获取数据发布状态 -1:没有在执行 0:无日志 1:进行中  2:失败  3:成功
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/publishData/getJobStatus
   */
  dtpRwdServerPublishDataGetJobStatus<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServerPublishDataGetJobStatusQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/publishData/getJobStatus",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：sendPublishMsgToDtx
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/publishData/sendPublishMsgToDtx
   */
  dtpRwdServerPublishDataSendPublishMsgToDtx<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerPublishDataSendPublishMsgToDtxBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/publishData/sendPublishMsgToDtx",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：01 开始发布
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/publishData/startup
   */
  dtpRwdServerPublishDataStartup<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerPublishDataStartupBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/publishData/startup",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：对象数据精度处理
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/publishData/validateInfoCode
   */
  dtpRwdServerPublishDataValidateInfoCode<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerPublishDataValidateInfoCodeBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/publishData/validateInfoCode",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询最后一次数据发布变更记录2.0
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/published/detail/list
   */
  dtpRwdServerPublishedDetailList<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerPublishedDetailListBody,
    query: PhysicalWorldServiceDtpRwdServerPublishedDetailListQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/published/detail/list",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：AMC项目概览查询
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aggregate/amc/project/overview
   */
  dtpRwdServerRwdAggregateAmcProjectOverview<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aggregate/amc/project/overview",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：厨房排油烟
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aggregate/exhaust/fumes/query
   */
  dtpRwdServerRwdAggregateExhaustFumesQuery<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aggregate/exhaust/fumes/query",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：统计生产厂商相关数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/rwd/aggregate/obj/count
   */
  dtpRwdServerRwdAggregateObjCount<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aggregate/obj/count",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询对象实例信息
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aggregate/objs
   */
  dtpRwdServerRwdAggregateObjs<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAggregateObjsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aggregate/objs",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：空间安防
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aggregate/space/security/query
   */
  dtpRwdServerRwdAggregateSpaceSecurityQuery<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAggregateSpaceSecurityQueryBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aggregate/space/security/query",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账-计算实例的资产管理序号或设备管理分类
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/rwd/aim/asset/cal
   */
  dtpRwdServerRwdAimAssetCal<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServerRwdAimAssetCalQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/asset/cal",
      method: "GET",
      query: { ...{ groupCode: config.groupCode }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账-是否正在计算
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/asset/isCal
   */
  dtpRwdServerRwdAimAssetIsCal<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimAssetIsCalBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/asset/isCal",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账-多关系查询
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/asset/multiRel
   */
  dtpRwdServerRwdAimAssetMultiRel<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimAssetMultiRelBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/asset/multiRel",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账-信息点统计
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/asset/objInfos
   */
  dtpRwdServerRwdAimAssetObjInfos<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimAssetObjInfosBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/asset/objInfos",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账-对象实例列表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/asset/objList
   */
  dtpRwdServerRwdAimAssetObjList<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimAssetObjListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/asset/objList",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账-对象树
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/asset/objTree
   */
  dtpRwdServerRwdAimAssetObjTree<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimAssetObjTreeBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/asset/objTree",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账-关系查询
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/asset/rel
   */
  dtpRwdServerRwdAimAssetRel<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimAssetRelBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/asset/rel",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账配置(暂未使用)-设备树配置保存(复制一个或多个项目)
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/equip/tree/copy
   */
  dtpRwdServerRwdAimEquipTreeCopy<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeCopyBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/equip/tree/copy",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账配置-设备树配置查询
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/rwd/aim/equip/tree/query
   */
  dtpRwdServerRwdAimEquipTreeQuery<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeQueryQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/equip/tree/query",
      method: "GET",
      query: { ...{ groupCode: config.groupCode }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账配置-设备树配置保存
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/equip/tree/save
   */
  dtpRwdServerRwdAimEquipTreeSave<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeSaveBody,
    query: PhysicalWorldServiceDtpRwdServerRwdAimEquipTreeSaveQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/equip/tree/save",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm责任信息-查询
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/resp/info/query
   */
  dtpRwdServerRwdAimRespInfoQuery<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimRespInfoQueryBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/resp/info/query",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm责任信息-保存
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/resp/info/save
   */
  dtpRwdServerRwdAimRespInfoSave<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimRespInfoSaveBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/resp/info/save",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账配置(暂未使用)-空间树配置保存(复制一个或多个项目)
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/space/tree/copy
   */
  dtpRwdServerRwdAimSpaceTreeCopy<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeCopyBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/space/tree/copy",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账配置-空间树配置
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/rwd/aim/space/tree/query
   */
  dtpRwdServerRwdAimSpaceTreeQuery<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeQueryQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/space/tree/query",
      method: "GET",
      query: { ...{ groupCode: config.groupCode }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：apm台账配置-空间树配置保存
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/aim/space/tree/save
   */
  dtpRwdServerRwdAimSpaceTreeSave<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeSaveBody,
    query: PhysicalWorldServiceDtpRwdServerRwdAimSpaceTreeSaveQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/aim/space/tree/save",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：统计四大主体数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/count
   */
  dtpRwdServerRwdDataMarkCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/count",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询对象实例数据标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/object
   */
  dtpRwdServerRwdDataMarkObject<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/object",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：统计对象标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/object/count
   */
  dtpRwdServerRwdDataMarkObjectCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/object/count",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询对象信息点数据标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/object/info
   */
  dtpRwdServerRwdDataMarkObjectInfo<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInfoBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/object/info",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：统计对象信息点标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/object/info/count
   */
  dtpRwdServerRwdDataMarkObjectInfoCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInfoCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/object/info/count",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：新增对象信息点标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/object/info/insert
   */
  dtpRwdServerRwdDataMarkObjectInfoInsert<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInfoInsertBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/object/info/insert",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改对象信息点标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/object/info/update
   */
  dtpRwdServerRwdDataMarkObjectInfoUpdate<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInfoUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/object/info/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：新增对象实例标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/object/insert
   */
  dtpRwdServerRwdDataMarkObjectInsert<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectInsertBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/object/insert",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改对象实例标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/object/update
   */
  dtpRwdServerRwdDataMarkObjectUpdate<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkObjectUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/object/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询关系实例数据标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/relation
   */
  dtpRwdServerRwdDataMarkRelation<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/relation",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：统计关系标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/relation/count
   */
  dtpRwdServerRwdDataMarkRelationCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/relation/count",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询关系信息点数据标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/relation/info
   */
  dtpRwdServerRwdDataMarkRelationInfo<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInfoBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/relation/info",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：统计关系信息点标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/relation/info/count
   */
  dtpRwdServerRwdDataMarkRelationInfoCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInfoCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/relation/info/count",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：新增关系信息点标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/relation/info/insert
   */
  dtpRwdServerRwdDataMarkRelationInfoInsert<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInfoInsertBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/relation/info/insert",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改关系信息点标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/relation/info/update
   */
  dtpRwdServerRwdDataMarkRelationInfoUpdate<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInfoUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/relation/info/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：新增关系标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/relation/insert
   */
  dtpRwdServerRwdDataMarkRelationInsert<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationInsertBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/relation/insert",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改关系标识数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/relation/update
   */
  dtpRwdServerRwdDataMarkRelationUpdate<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkRelationUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/relation/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改四大主体标识数据为老数据
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/update
   */
  dtpRwdServerRwdDataMarkUpdate<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改四大主体数据为已发布
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/data/mark/update/status
   */
  dtpRwdServerRwdDataMarkUpdateStatus<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDataMarkUpdateStatusBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/data/mark/update/status",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：获取数据发布结果
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/rwd/dataPublish/getResult
   */
  dtpRwdServerRwdDataPublishGetResult<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServerRwdDataPublishGetResultQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/dataPublish/getResult",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：请求数据发布
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/rwd/dataPublish/req
   */
  dtpRwdServerRwdDataPublishReq<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/dataPublish/req",
      method: "GET",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：新建-管道类型及关系映射数据
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/def/type/rel/create
   */
  dtpRwdServerRwdDefTypeRelCreate<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDefTypeRelCreateBody,
    query: PhysicalWorldServiceDtpRwdServerRwdDefTypeRelCreateQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/def/type/rel/create",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：删除-管道类型及关系映射表数据
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/def/type/rel/delete
   */
  dtpRwdServerRwdDefTypeRelDelete<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDefTypeRelDeleteBody,
    query: PhysicalWorldServiceDtpRwdServerRwdDefTypeRelDeleteQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/def/type/rel/delete",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询-管道类型及关系映射表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/def/type/rel/query
   */
  dtpRwdServerRwdDefTypeRelQuery<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDefTypeRelQueryBody,
    query: PhysicalWorldServiceDtpRwdServerRwdDefTypeRelQueryQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/def/type/rel/query",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改-管道类型及关系映射表数据
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/def/type/rel/update
   */
  dtpRwdServerRwdDefTypeRelUpdate<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdDefTypeRelUpdateBody,
    query: PhysicalWorldServiceDtpRwdServerRwdDefTypeRelUpdateQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/def/type/rel/update",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：项目-专业分组统计设备数量
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/group/proj/equip/count
   */
  dtpRwdServerRwdGroupProjEquipCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdGroupProjEquipCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/group/proj/equip/count",
      method: "POST",
      query: { groupCode: config.groupCode },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：各项目下有实例的设备分类
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/group/proj/equipPos
   */
  dtpRwdServerRwdGroupProjEquipPos<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdGroupProjEquipPosBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/group/proj/equipPos",
      method: "POST",
      query: { groupCode: config.groupCode },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：各项目-设备分类分组统计设备实例
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/group/proj/equipPos/count
   */
  dtpRwdServerRwdGroupProjEquipPosCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdGroupProjEquipPosCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/group/proj/equipPos/count",
      method: "POST",
      query: { groupCode: config.groupCode },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：项目-专业分组统计系统数量
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/group/proj/system/count
   */
  dtpRwdServerRwdGroupProjSystemCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdGroupProjSystemCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/group/proj/system/count",
      method: "POST",
      query: { groupCode: config.groupCode },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据实例过滤空间功能类型树
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/group/tree/roomFuncType
   */
  dtpRwdServerRwdGroupTreeRoomFuncType<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdGroupTreeRoomFuncTypeBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/group/tree/roomFuncType",
      method: "POST",
      query: { groupCode: config.groupCode },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询设备半剖图配置信息(模型和部件)
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/halfSectionalView/queryHalfSectionalViewInfoByObjId
   */
  dtpRwdServerRwdHalfSectionalViewQueryHalfSectionalViewInfoByObjId<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServerRwdHalfSectionalViewQueryHalfSectionalViewInfoByObjIdQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/halfSectionalView/queryHalfSectionalViewInfoByObjId",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据项目id集合批量查询项目信息
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/instance/object/batchQueryProjectByIds
   */
  dtpRwdServerRwdInstanceObjectBatchQueryProjectByIds<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectBatchQueryProjectByIdsBody,
    query: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectBatchQueryProjectByIdsQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/instance/object/batchQueryProjectByIds",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询物理世界对象
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/instance/object/query
   */
  dtpRwdServerRwdInstanceObjectQuery<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryBody,
    query: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/instance/object/query",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：按类型编码查询所有设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/instance/object/queryEquipListByClassCode
   */
  dtpRwdServerRwdInstanceObjectQueryEquipListByClassCode<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByClassCodeBody,
    query: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByClassCodeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/instance/object/queryEquipListByClassCode",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据条件查询设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/instance/object/queryEquipListByConditions
   */
  dtpRwdServerRwdInstanceObjectQueryEquipListByConditions<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByConditionsBody,
    query: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListByConditionsQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/instance/object/queryEquipListByConditions",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：按系统查询系统下所有设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/instance/object/queryEquipListBySystemId
   */
  dtpRwdServerRwdInstanceObjectQueryEquipListBySystemId<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListBySystemIdBody,
    query: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryEquipListBySystemIdQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/instance/object/queryEquipListBySystemId",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：专业-设备定位-设备 实例树-已废弃
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/instance/object/queryInstanceTree
   */
  dtpRwdServerRwdInstanceObjectQueryInstanceTree<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryInstanceTreeBody,
    query: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryInstanceTreeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/instance/object/queryInstanceTree",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据上级id查询下级关联对象
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/instance/object/queryObjectListSuperiorId
   */
  dtpRwdServerRwdInstanceObjectQueryObjectListSuperiorId<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryObjectListSuperiorIdBody,
    query: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQueryObjectListSuperiorIdQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/instance/object/queryObjectListSuperiorId",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询指定楼层下所有指定空间类型的空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/instance/object/querySpaceListByFloorIdAndRoomFuncType
   */
  dtpRwdServerRwdInstanceObjectQuerySpaceListByFloorIdAndRoomFuncType<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByFloorIdAndRoomFuncTypeBody,
    query: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByFloorIdAndRoomFuncTypeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/instance/object/querySpaceListByFloorIdAndRoomFuncType",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：按指定空间功能类型查询此空间类型及其下级类型的所有空间列表
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/instance/object/querySpaceListByRoomFuncType
   */
  dtpRwdServerRwdInstanceObjectQuerySpaceListByRoomFuncType<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByRoomFuncTypeBody,
    query: PhysicalWorldServiceDtpRwdServerRwdInstanceObjectQuerySpaceListByRoomFuncTypeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/instance/object/querySpaceListByRoomFuncType",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据协议类型统计绑点数量
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/iot/server/point/countPointByProtocolType
   */
  dtpRwdServerRwdIotServerPointCountPointByProtocolType<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdIotServerPointCountPointByProtocolTypeBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/iot/server/point/countPointByProtocolType",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：删除绑点信息
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/iot/server/point/delete
   */
  dtpRwdServerRwdIotServerPointDelete<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdIotServerPointDeleteBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/iot/server/point/delete",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询绑点表所有对象分类
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/rwd/iot/server/point/queryPointAllClassCode
   */
  dtpRwdServerRwdIotServerPointQueryPointAllClassCode<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/iot/server/point/queryPointAllClassCode",
      method: "GET",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询绑点数据列表
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/iot/server/v2/point/queryPointList
   */
  dtpRwdServerRwdIotServerV2PointQueryPointList<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdIotServerV2PointQueryPointListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/iot/server/v2/point/queryPointList",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：重推静态物理世界给MeAI
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/meai/start
   */
  dtpRwdServerRwdMeaiStart<T = JsonValue>(
    query: PhysicalWorldServiceDtpRwdServerRwdMeaiStartQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/meai/start",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.1、查询指定项目下的所有建筑
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryBuildingUnderProject
   */
  dtpRwdServerRwdObjectQueryBuildingUnderProject<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryBuildingUnderProjectBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryBuildingUnderProjectQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryBuildingUnderProject",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A2.7、查询指定楼层下所有指定对象类型的设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryEquipByClassCodeAndFloor
   */
  dtpRwdServerRwdObjectQueryEquipByClassCodeAndFloor<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndFloorBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndFloorQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryEquipByClassCodeAndFloor",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A2.9、查询指定主要功能区下的所有指定对象类型的设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryEquipByClassCodeAndPartition
   */
  dtpRwdServerRwdObjectQueryEquipByClassCodeAndPartition<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndPartitionBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndPartitionQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryEquipByClassCodeAndPartition",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A2.10、查询服务于指定空间的所有指定对象类型的设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryEquipByClassCodeAndServiceSpace
   */
  dtpRwdServerRwdObjectQueryEquipByClassCodeAndServiceSpace<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndServiceSpaceBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipByClassCodeAndServiceSpaceQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryEquipByClassCodeAndServiceSpace",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：系统下设备组查询
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryEquipGroupBySystemId
   */
  dtpRwdServerRwdObjectQueryEquipGroupBySystemId<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipGroupBySystemIdBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipGroupBySystemIdQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryEquipGroupBySystemId",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A2.13 按设备类型编码和信息点条件查询所有设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryEquipInfoObjects
   */
  dtpRwdServerRwdObjectQueryEquipInfoObjects<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipInfoObjectsBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipInfoObjectsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryEquipInfoObjects",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.15 查询指定设备所在的空间（和楼层）
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryEquipLocationSpaceFloor
   */
  dtpRwdServerRwdObjectQueryEquipLocationSpaceFloor<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipLocationSpaceFloorBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipLocationSpaceFloorQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryEquipLocationSpaceFloor",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.16 查询指定设备服务的空间（和楼层）
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryEquipServiceSpaceFloor
   */
  dtpRwdServerRwdObjectQueryEquipServiceSpaceFloor<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipServiceSpaceFloorBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipServiceSpaceFloorQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryEquipServiceSpaceFloor",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A2.5、查询某专业下的所有设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryEquipUnderMajor
   */
  dtpRwdServerRwdObjectQueryEquipUnderMajor<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipUnderMajorBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipUnderMajorQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryEquipUnderMajor",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A2.11 基于一个设备或一个坐标，找附近R米范围内的某种类型的设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryEquipWithinRadius
   */
  dtpRwdServerRwdObjectQueryEquipWithinRadius<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipWithinRadiusBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryEquipWithinRadiusQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryEquipWithinRadius",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.2、查询指定建筑下的所有楼层
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryFloorUnderBuilding
   */
  dtpRwdServerRwdObjectQueryFloorUnderBuilding<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryFloorUnderBuildingBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryFloorUnderBuildingQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryFloorUnderBuilding",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.3、查询指定建筑下的所有主要功能区
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryPartitionUnderBuilding
   */
  dtpRwdServerRwdObjectQueryPartitionUnderBuilding<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryPartitionUnderBuildingBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryPartitionUnderBuildingQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryPartitionUnderBuilding",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.4、查询指定集团下的所有项目
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryProjectUnderGroupCode
   */
  dtpRwdServerRwdObjectQueryProjectUnderGroupCode<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryProjectUnderGroupCodeBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryProjectUnderGroupCodeQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryProjectUnderGroupCode",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.7、查询建筑下指定空间功能类型的空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderBuilding
   */
  dtpRwdServerRwdObjectQueryRoomFuncTypeUnderBuilding<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderBuildingBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderBuildingQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderBuilding",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.9、查询主要功能区下指定空间功能类型的空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderPartition
   */
  dtpRwdServerRwdObjectQueryRoomFuncTypeUnderPartition<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderPartitionBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderPartitionQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderPartition",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.6、查询项目下指定空间功能类型的空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderProject
   */
  dtpRwdServerRwdObjectQueryRoomFuncTypeUnderProject<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderProjectBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryRoomFuncTypeUnderProjectQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderProject",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.14 按空间功能类型和信息点条件查询所有空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/querySpatialInformationPointObjects
   */
  dtpRwdServerRwdObjectQuerySpatialInformationPointObjects<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQuerySpatialInformationPointObjectsBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQuerySpatialInformationPointObjectsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/querySpatialInformationPointObjects",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A2.3、查询建筑下的所有系统
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/querySystemUnderBuilding
   */
  dtpRwdServerRwdObjectQuerySystemUnderBuilding<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderBuildingBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderBuildingQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/querySystemUnderBuilding",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A2.4、查询某专业下的所有系统
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/querySystemUnderMajor
   */
  dtpRwdServerRwdObjectQuerySystemUnderMajor<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderMajorBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderMajorQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/querySystemUnderMajor",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A2.2、查询项目下的所有系统
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/querySystemUnderProject
   */
  dtpRwdServerRwdObjectQuerySystemUnderProject<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderProjectBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQuerySystemUnderProjectQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/querySystemUnderProject",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.11、查询建筑下指定租赁业态的空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryTenantTypeUnderBuilding
   */
  dtpRwdServerRwdObjectQueryTenantTypeUnderBuilding<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderBuildingBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderBuildingQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryTenantTypeUnderBuilding",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.12、查询楼层下指定租赁业态的空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryTenantTypeUnderFloor
   */
  dtpRwdServerRwdObjectQueryTenantTypeUnderFloor<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderFloorBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderFloorQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryTenantTypeUnderFloor",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.13、查询主要功能区下指定租赁业态的空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryTenantTypeUnderPartition
   */
  dtpRwdServerRwdObjectQueryTenantTypeUnderPartition<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderPartitionBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderPartitionQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryTenantTypeUnderPartition",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：A1.10、查询项目下指定租赁业态的空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/object/queryTenantTypeUnderProject
   */
  dtpRwdServerRwdObjectQueryTenantTypeUnderProject<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderProjectBody,
    query: PhysicalWorldServiceDtpRwdServerRwdObjectQueryTenantTypeUnderProjectQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/object/queryTenantTypeUnderProject",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：统计数据发布数据集
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/publish/change/count
   */
  dtpRwdServerRwdPublishChangeCount<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdPublishChangeCountBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/publish/change/count",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询数据发布变更记录
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/publish/change/record
   */
  dtpRwdServerRwdPublishChangeRecord<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdPublishChangeRecordBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/publish/change/record",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R4-1 指定起点，查询同条路径上指定类型的所有终点
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryAllClassCodeFromIds
   */
  dtpRwdServerRwdRouteQueryAllClassCodeFromIds<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryAllClassCodeFromIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryAllClassCodeFromIds",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R5-1 指定终点，查询同条路径上指定类型的所有起点
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryAllClassCodeToIds
   */
  dtpRwdServerRwdRouteQueryAllClassCodeToIds<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryAllClassCodeToIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryAllClassCodeToIds",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R4 指定起点，查询指定类型的终点
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryClassCodeFromIds
   */
  dtpRwdServerRwdRouteQueryClassCodeFromIds<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeFromIdsBody,
    query: PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeFromIdsQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryClassCodeFromIds",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R5 指定终点，查询指定类型的起点
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryClassCodeToIds
   */
  dtpRwdServerRwdRouteQueryClassCodeToIds<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeToIdsBody,
    query: PhysicalWorldServiceDtpRwdServerRwdRouteQueryClassCodeToIdsQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryClassCodeToIds",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R1 判断节点间是否存在当前关系
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryExistsBetween
   */
  dtpRwdServerRwdRouteQueryExistsBetween<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryExistsBetweenBody,
    query: PhysicalWorldServiceDtpRwdServerRwdRouteQueryExistsBetweenQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryExistsBetween",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R2 通过关系查询起点和终点集合
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryFromToNode
   */
  dtpRwdServerRwdRouteQueryFromToNode<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryFromToNodeBody,
    query: PhysicalWorldServiceDtpRwdServerRwdRouteQueryFromToNodeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryFromToNode",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R9 查询设备服务于空间的路由
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryNodeForSpacePath
   */
  dtpRwdServerRwdRouteQueryNodeForSpacePath<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodeForSpacePathBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryNodeForSpacePath",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R6 批量查询起点设备到终点设备之间的途径设备
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryNodePathIdInSet
   */
  dtpRwdServerRwdRouteQueryNodePathIdInSet<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodePathIdInSetBody,
    query: PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodePathIdInSetQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryNodePathIdInSet",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R7 查询指定空间到设备的路径
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryNodeToGeneralPath
   */
  dtpRwdServerRwdRouteQueryNodeToGeneralPath<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodeToGeneralPathBody,
    query: PhysicalWorldServiceDtpRwdServerRwdRouteQueryNodeToGeneralPathQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryNodeToGeneralPath",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R12 基于标签，查找设备之间的路由-APM
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryPathByTag
   */
  dtpRwdServerRwdRouteQueryPathByTag<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryPathByTagBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryPathByTag",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R8 查询起点设备到终点设备途径的空间
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryPathInSpaceId
   */
  dtpRwdServerRwdRouteQueryPathInSpaceId<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryPathInSpaceIdBody,
    query: PhysicalWorldServiceDtpRwdServerRwdRouteQueryPathInSpaceIdQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryPathInSpaceId",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R3 批量查询起点设备和终点设备是否有某种关系
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryRelationIdInSet
   */
  dtpRwdServerRwdRouteQueryRelationIdInSet<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryRelationIdInSetBody,
    query: PhysicalWorldServiceDtpRwdServerRwdRouteQueryRelationIdInSetQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryRelationIdInSet",
      method: "POST",
      query: { ...{ groupCode: config.groupCode, projectId: config.projectId }, ...query },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R13  查找设备在管网中途径空间的路由-APM
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/querySpaceToTagPath
   */
  dtpRwdServerRwdRouteQuerySpaceToTagPath<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQuerySpaceToTagPathBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/querySpaceToTagPath",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R10 指定起点，查找某种标签类型的终点设备-APM
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryTagTypeFromIds
   */
  dtpRwdServerRwdRouteQueryTagTypeFromIds<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryTagTypeFromIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryTagTypeFromIds",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：R11 指定终点，查找某种标签类型的起点设备-APM
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/route/queryTagTypeToIds
   */
  dtpRwdServerRwdRouteQueryTagTypeToIds<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdRouteQueryTagTypeToIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/route/queryTagTypeToIds",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询项目下所有的建筑-楼层list
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/work/order/bfList
   */
  dtpRwdServerRwdWorkOrderBfList<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdWorkOrderBfListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/work/order/bfList",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：专业-设备类下的设备实例或空间所在建筑楼层,返回建筑-楼层树
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/work/order/classCode/bfList
   */
  dtpRwdServerRwdWorkOrderClassCodeBfList<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdWorkOrderClassCodeBfListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/work/order/classCode/bfList",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：专业-设备类下的设备实例所在空间,返回空间功能类型树
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/work/order/classCode/spList
   */
  dtpRwdServerRwdWorkOrderClassCodeSpList<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdWorkOrderClassCodeSpListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/work/order/classCode/spList",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：无条件时的搜索
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/work/order/search
   */
  dtpRwdServerRwdWorkOrderSearch<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdWorkOrderSearchBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/work/order/search",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询指定空间下的所有设备实例,按照设备类分组返回
   *
   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：POST /dtp-rwd-server/rwd/work/order/spObjList
   */
  dtpRwdServerRwdWorkOrderSpObjList<T = JsonValue>(
    body: PhysicalWorldServiceDtpRwdServerRwdWorkOrderSpObjListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/rwd/work/order/spObjList",
      method: "POST",
      query: { groupCode: config.groupCode, projectId: config.projectId },
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：⭐修改说明
   *
   * 来源：docs/product-apis/physical-world-service/openapi.json
   * HTTP：GET /dtp-rwd-server/u
   */
  dtpRwdServerU<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/dtp-rwd-server/u",
      method: "GET",
      headers: options.headers,
    });
  }
  };
}
