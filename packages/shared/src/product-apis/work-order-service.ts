import {
  requestGateway,
  type GatewayConfig,
} from "../gateway.js";
import type {
  JsonValue,
  ProductApiCallOptions,
} from "./types.js";

/**
 * OpenAPI 组件类型：OrderItem
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OrderItem
 */
export type WorkOrderServiceOrderItem = {
  column?: string;
  asc?: boolean;
};

/**
 * OpenAPI 组件类型：RObject
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RObject
 */
export type WorkOrderServiceRObject = {
  code?: string;
  result?: string;
  data?: Record<string, never>;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：用户报事工单，二开查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportQueryDto
 */
export type WorkOrderServiceUserReportQueryDto = {
  /** 项目id */
  projectId: string;
  /** 开始时间，yyyyMMddHHmmss */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 时间过滤类型：AskEnd-期望完成时间；RelEnd-实际完成时间 */
  timeFilterType: "AskEnd" | "RelEnd" | "AskStart" | "CreateTime";
  /** 工单状态集合 */
  orderStates?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10"[];
  /** 工作分类集合 */
  workTypes?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE"[];
  /** 当前页码 */
  page: number;
  /** 每页大小 */
  pageSize: number;
};

/**
 * OpenAPI 组件类型：所属分类标签信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/CategoryLabel
 */
export type WorkOrderServiceCategoryLabel = {
  /** 分类标签编码 */
  code?: string;
  /** 分类标签名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：评价信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExecutorComment
 */
export type WorkOrderServiceExecutorComment = {
  /** 评价分数 */
  score?: string;
  /** 评价人id：H5为null；WEB取当前用户id */
  evaluatorId?: string;
  /** 评价人名称: H5为手机号；WEB为用户名 */
  evaluator?: string;
  /** 评价时间：yyyyMMddHHmmss */
  evaluationTime?: string;
};

/**
 * OpenAPI 组件类型：问题性质标签信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemNature
 */
export type WorkOrderServiceProblemNature = {
  /** 问题性质标签编码 */
  code?: string;
  /** 问题性质标签名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：RCollectionUserReportWorkOrderVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionUserReportWorkOrderVo
 */
export type WorkOrderServiceRCollectionUserReportWorkOrderVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceUserReportWorkOrderVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：报事类型信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportTypeInfo
 */
export type WorkOrderServiceReportTypeInfo = {
  /** 报事类型编码 */
  code?: string;
  /** 报事类型名称 */
  name?: string;
  /** 报事类型层级 */
  level?: string;
  /** 上级报事类型 */
  parents?: WorkOrderServiceReportTypeInfo[];
  problemNature?: WorkOrderServiceProblemNature;
  /** 所属分类标签信息 */
  categoryLabels?: WorkOrderServiceCategoryLabel[];
};

/**
 * OpenAPI 组件类型：用户报事工单vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportWorkOrderVo
 */
export type WorkOrderServiceUserReportWorkOrderVo = {
  /** 工单id */
  orderId?: string;
  /** 工单编码 */
  woNumber?: string;
  /** 工单名称 */
  woName?: string;
  /** 工单状态 */
  orderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 工作类型分类 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 来源渠道：manual-手动创建;abnormaltrigger-异常事件触发;plan-计划下发 */
  orderFromType?: string;
  /** 工单流程id */
  flowPlanId?: string;
  /** 工单流程名称 */
  flowPlanName?: string;
  reportTypeInfo?: WorkOrderServiceReportTypeInfo;
  /** 要求完成时间，yyyyMMddHHmmss */
  askEndTime?: string;
  /** 创建人：H5默认取手机号；WEB取当前用户id */
  creatorId?: string;
  /** 创建时间，yyyyMMddHHmmss */
  createTime?: string;
  /** 执行人 */
  executors?: string[];
  /** 是否逾期 */
  overdueFlag?: boolean;
  /** 实际完成时间：yyyyMMddHHmmss */
  realFinishTime?: string;
  /** 评价信息 */
  executorComments?: WorkOrderServiceExecutorComment[];
};

/**
 * OpenAPI 组件类型：RListWorkOrderRiskEventVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderRiskEventVO
 */
export type WorkOrderServiceRListWorkOrderRiskEventVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderRiskEventVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：风险事件列表
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskEventVo
 */
export type WorkOrderServiceRiskEventVo = {
  riskEventId?: string;
  riskEventName?: string;
};

/**
 * OpenAPI 组件类型：工单风险事件DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRiskEventVO
 */
export type WorkOrderServiceWorkOrderRiskEventVO = {
  /** 工单编码 */
  orderId?: string;
  /** 工单名称 */
  orderName?: string;
  /** 工单类型分类 */
  orderType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单状态 */
  orderStatus?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 工单实际完成时间 */
  realFinishTime?: string;
  /** 工单要求完成时间 */
  requireFinishTime?: string;
  /** 工单专业集合 */
  majorCodes?: string[];
  /** 风险事件列表 */
  riskEvents?: WorkOrderServiceRiskEventVo[];
};

/**
 * OpenAPI 组件类型：RepairEventCodeDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairEventCodeDto
 */
export type WorkOrderServiceRepairEventCodeDto = {
  sopCode?: string;
  exceptionCode?: string;
};

/**
 * OpenAPI 组件类型：RInteger
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RInteger
 */
export type WorkOrderServiceRInteger = {
  code?: string;
  result?: string;
  data?: number;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：工单id
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderIdDto
 */
export type WorkOrderServiceWorkOrderIdDto = {
  /** 工单id */
  orderId: string;
};

/**
 * OpenAPI 组件类型：问题性质列表Vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemNatureListVo
 */
export type WorkOrderServiceProblemNatureListVo = {
  /** 问题性质标签编码 */
  code?: string;
  /** 问题性质标签名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：RProblemNatureListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RProblemNatureListVo
 */
export type WorkOrderServiceRProblemNatureListVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceProblemNatureListVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：异常编码查询工单信息dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/EventCodeQueryWorkOrderDto
 */
export type WorkOrderServiceEventCodeQueryWorkOrderDto = {
  /** 异常事件编码 */
  exceptionEventCode: string;
};

/**
 * OpenAPI 组件类型：EventCodeQueryWorkOrderVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/EventCodeQueryWorkOrderVo
 */
export type WorkOrderServiceEventCodeQueryWorkOrderVo = {
  workType?: string;
  orderId?: string;
  orderState?: string;
};

/**
 * OpenAPI 组件类型：RListEventCodeQueryWorkOrderVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListEventCodeQueryWorkOrderVo
 */
export type WorkOrderServiceRListEventCodeQueryWorkOrderVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceEventCodeQueryWorkOrderVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：范围值对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RangeValue
 */
export type WorkOrderServiceRangeValue = {
  /** 条件id */
  value?: string;
  /** 条件名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：条件对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskProcessConditionDTO
 */
export type WorkOrderServiceRiskProcessConditionDTO = {
  /** 条件类型编码 */
  code?: "CONDITION_BUSINESS_CATEGORY" | "CONDITION_BUSINESS_CATEGORY_NULL" | "CONDITION_PROBLEM_LEVEL" | "CONDITION_PROBLEM_CATEGORY" | "CONDITION_OBJECT_CLASS" | "CONDITION_ESTIMATED_MAINTENANCE_COST" | "CONDITION_GENERAL_REQUIREMENTS" | "CONDITION_IOT_MONITORING_RESULTS" | "SAME_DEPARTMENT_APPROVAL";
  /** 运算符 */
  criteria?: "EQ" | "GT" | "LT" | "GE" | "LE" | "AND" | "OR";
  /** 范围值 */
  rangeValueList?: WorkOrderServiceRangeValue[];
};

/**
 * OpenAPI 组件类型：风险流程-工作阶段更新入参对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskProcessWorkStageUpdateDTO
 */
export type WorkOrderServiceRiskProcessWorkStageUpdateDTO = {
  /** 流程id */
  id: string;
  /** 启用标识: 0否，1是 */
  isEnabled: boolean;
  /** 工作阶段集合 */
  workStageList: WorkOrderServiceWorkOrderRiskProcessStageDTO[];
  /** 更新人id */
  userId: string;
};

/**
 * OpenAPI 组件类型：风险流程配置工作阶段实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRiskProcessStageDTO
 */
export type WorkOrderServiceWorkOrderRiskProcessStageDTO = {
  /** 阶段主键 */
  stageId?: string;
  /** 风险流程id */
  processId?: string;
  /** 阶段编码 */
  stageCode?: string;
  /** 工作环节编码 */
  workLinkCode?: string;
  /** 是否启用 */
  isEnabled?: boolean;
  /** 审批、审核条件值集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 工作项集合 */
  workItemList?: WorkOrderServiceWorkOrderRiskProcessWorkItemDTO[];
};

/**
 * OpenAPI 组件类型：风险流程-工作阶段-工作项实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRiskProcessWorkItemDTO
 */
export type WorkOrderServiceWorkOrderRiskProcessWorkItemDTO = {
  /** 工作项 ID */
  workItemId?: string;
  /** 风险流程ID */
  processId?: string;
  /** 工作项编码 */
  workItemCode?: string;
  /** 所属阶段id */
  stageId?: string;
  /** 是否默认启用： 0 否、1 是 */
  isEnabled?: boolean;
  /** 通用要求： COMMON(10, "必填"),
    OPTIONAL(20, "选填"),
    CONDITIONAL(30, "视情况") */
  generalRequirement?: "COMMON" | "OPTIONAL" | "CONDITIONAL";
  /** 条件值集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  workOrderActionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：R
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/R
 */
export type WorkOrderServiceR = {
  code?: string;
  result?: string;
  data?: Record<string, never>;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：执行结果审批阶段更新入参
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PublicWorkOrderApprovalDTO
 */
export type WorkOrderServicePublicWorkOrderApprovalDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 是否通过 */
  pass: boolean;
  /** 补充说明 */
  supplementaryExplain?: string;
  /** 图片 */
  images?: string[];
  /** 音频集合 */
  sounds?: WorkOrderServiceSound[];
};

/**
 * OpenAPI 组件类型：音频集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Sound
 */
export type WorkOrderServiceSound = {
  /** 音频key */
  key?: string;
  /** 音频时长 */
  duration?: string;
};

/**
 * OpenAPI 组件类型：RWorkOrderStatusEnum
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderStatusEnum
 */
export type WorkOrderServiceRWorkOrderStatusEnum = {
  code?: string;
  result?: string;
  data?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：问题等级
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/IssueLevelDto
 */
export type WorkOrderServiceIssueLevelDto = {
  id?: string;
  name?: string;
};

/**
 * OpenAPI 组件类型：处理专业信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProcessMajorInfo
 */
export type WorkOrderServiceProcessMajorInfo = {
  /** 处理专业编码 */
  code?: string;
  /** 处理专业名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：分类阶段更新入参
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TicketCategoriesStageUpdateDTO
 */
export type WorkOrderServiceTicketCategoriesStageUpdateDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  businessCategory?: WorkOrderServiceProcessMajorInfo;
  problemLevel?: WorkOrderServiceIssueLevelDto;
};

/**
 * OpenAPI 组件类型：RBoolean
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RBoolean
 */
export type WorkOrderServiceRBoolean = {
  code?: string;
  result?: string;
  data?: boolean;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：IOT监测结果dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/IotMonitoringResultsDTO
 */
export type WorkOrderServiceIotMonitoringResultsDTO = {
  /** 核实选项 */
  verifyOption?: "NORMAL" | "EXCEPTION" | "EXCEPTION_PROCESSED";
  /** 本次暂不处理 */
  notHandledThisTime?: string;
  /** 误报原因 */
  falseAlarmReason?: string;
  /** 补充说明 */
  iotDescription?: string;
  /** 现场照片 */
  photos?: string[];
  /** 现场视频 */
  videos?: WorkOrderServiceVideo[];
};

/**
 * OpenAPI 组件类型：执行阶段-误报信息更新入参
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportFalseAlarmUpdateDTO
 */
export type WorkOrderServiceReportFalseAlarmUpdateDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  iotMonitoringResults: WorkOrderServiceIotMonitoringResultsDTO;
};

/**
 * OpenAPI 组件类型：工单选择问题DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/BaseWorkOrderProblemDTO
 */
export type WorkOrderServiceBaseWorkOrderProblemDTO = {
  /** 对象实例主键 */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** classCode */
  classCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 是否用户选择专业 */
  isUserSelectedMajor?: boolean;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 空间实例对应的空间树节点编码 */
  nodeCode?: string;
  /** 自定义实例类型,为空时不是自定义实例 */
  deviceCustomType?: string;
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 楼层排序 */
  floorSequenceID?: string;
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 任务主键 */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 任务描述 */
  taskDesc?: string;
  /** 实体风险ID */
  physicalRiskId?: string;
  /** 知识措施id */
  rccMeasureId?: string;
  /** 任务问题类型 */
  taskIssueType?: "INITIAL_PROBLEM" | "ASSOCIATED_PROBLEM" | "PROBLEM_CAUSE" | "REPAIR_SCHEME";
  /** 任务状态 */
  taskStatus?: "UNFINISHED" | "FINISHED" | "REVOKE";
  /** 任务类型 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 任务反馈状态 */
  taskFeedbackStatus?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 来源id */
  sourceId?: string;
  /** 是否推荐 */
  isRecommended?: boolean;
  /** 是否自定义问题 */
  isCustom?: boolean;
  /** 是否解决,前端创建默认传true */
  isResolved?: boolean;
  /** 处理-照片集合 */
  handlerPhotos?: string[];
  /** 现场-视频集合 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 解决-照片集合 */
  resolvePhotos?: string[];
  /** 解决-视频集合 */
  resolveVideos?: WorkOrderServiceVideo[];
  /** 未解决原因 */
  unresolvedReason?: string;
  /** 添加问题时间 yyyy.MM.dd HH:mm:ss */
  reportTime?: string;
  /** 对象类型: system,equipment,equipGroup,space,project,floor,building */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象所在位置 */
  location?: string;
};

/**
 * OpenAPI 组件类型：执行方案审核阶段更新入参
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExecutionPlanReviewStageUpdateDTO
 */
export type WorkOrderServiceExecutionPlanReviewStageUpdateDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 是否通过 */
  pass: boolean;
  /** 补充说明-不通过原因 */
  supplementaryExplain?: string;
  /** 要求完成时间yyyy.MM.dd HH:mm */
  requiredCompletionTime: string;
  /** 工单创建时关联问题描述集合 */
  problemInfos?: WorkOrderServiceInitialProblemDTO[];
  /** 引发的问题及影响集合 */
  relatedIssues?: WorkOrderServiceProblemsAndImpactDTO[];
  /** 记录问题发生原因集合 */
  issueCauses?: WorkOrderServiceReasonForProblemDTO[];
  repairPlan?: WorkOrderServiceRepairPlanDTO;
};

/**
 * OpenAPI 组件类型：问题关联影响实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ImpactEntityDTO
 */
export type WorkOrderServiceImpactEntityDTO = {
  /** 是否关键 */
  isCritical?: boolean;
  /** 实际影响id */
  impactId?: string;
  /** 影响名称 */
  additionalDescriptionImpact?: string;
};

/**
 * OpenAPI 组件类型：引发的问题及影响集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemsAndImpactDTO
 */
export type WorkOrderServiceProblemsAndImpactDTO = {
  /** 对象实例主键 */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** classCode */
  classCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 是否用户选择专业 */
  isUserSelectedMajor?: boolean;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 空间实例对应的空间树节点编码 */
  nodeCode?: string;
  /** 自定义实例类型,为空时不是自定义实例 */
  deviceCustomType?: string;
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 楼层排序 */
  floorSequenceID?: string;
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 任务主键 */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 任务描述 */
  taskDesc?: string;
  /** 实体风险ID */
  physicalRiskId?: string;
  /** 知识措施id */
  rccMeasureId?: string;
  /** 任务问题类型 */
  taskIssueType?: "INITIAL_PROBLEM" | "ASSOCIATED_PROBLEM" | "PROBLEM_CAUSE" | "REPAIR_SCHEME";
  /** 任务状态 */
  taskStatus?: "UNFINISHED" | "FINISHED" | "REVOKE";
  /** 任务类型 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 任务反馈状态 */
  taskFeedbackStatus?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 来源id */
  sourceId?: string;
  /** 是否推荐 */
  isRecommended?: boolean;
  /** 是否自定义问题 */
  isCustom?: boolean;
  /** 是否解决,前端创建默认传true */
  isResolved?: boolean;
  /** 处理-照片集合 */
  handlerPhotos?: string[];
  /** 现场-视频集合 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 解决-照片集合 */
  resolvePhotos?: string[];
  /** 解决-视频集合 */
  resolveVideos?: WorkOrderServiceVideo[];
  /** 未解决原因 */
  unresolvedReason?: string;
  /** 添加问题时间 yyyy.MM.dd HH:mm:ss */
  reportTime?: string;
  /** 问题实际影响 */
  actualImpacts?: WorkOrderServiceImpactEntityDTO[];
  /** 对象类型: system,equipment,equipGroup,space,project,floor,building */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象所在位置 */
  location?: string;
};

/**
 * OpenAPI 组件类型：问题发生原因入参DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReasonForProblemDTO
 */
export type WorkOrderServiceReasonForProblemDTO = {
  /** 对象实例主键 */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** classCode */
  classCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 是否用户选择专业 */
  isUserSelectedMajor?: boolean;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 空间实例对应的空间树节点编码 */
  nodeCode?: string;
  /** 自定义实例类型,为空时不是自定义实例 */
  deviceCustomType?: string;
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 楼层排序 */
  floorSequenceID?: string;
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 任务主键 */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 任务描述 */
  taskDesc?: string;
  /** 实体风险ID */
  physicalRiskId?: string;
  /** 知识措施id */
  rccMeasureId?: string;
  /** 任务问题类型 */
  taskIssueType?: "INITIAL_PROBLEM" | "ASSOCIATED_PROBLEM" | "PROBLEM_CAUSE" | "REPAIR_SCHEME";
  /** 任务状态 */
  taskStatus?: "UNFINISHED" | "FINISHED" | "REVOKE";
  /** 任务类型 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 任务反馈状态 */
  taskFeedbackStatus?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 来源id */
  sourceId?: string;
  /** 是否推荐 */
  isRecommended?: boolean;
  /** 是否自定义问题 */
  isCustom?: boolean;
  /** 是否解决,前端创建默认传true */
  isResolved?: boolean;
  /** 处理-照片集合 */
  handlerPhotos?: string[];
  /** 现场-视频集合 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 解决-照片集合 */
  resolvePhotos?: string[];
  /** 解决-视频集合 */
  resolveVideos?: WorkOrderServiceVideo[];
  /** 未解决原因 */
  unresolvedReason?: string;
  /** 添加问题时间 yyyy.MM.dd HH:mm:ss */
  reportTime?: string;
  /** 对象类型: system,equipment,equipGroup,space,project,floor,building */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象所在位置 */
  location?: string;
};

/**
 * OpenAPI 组件类型：维修方案入参DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairPlanDTO
 */
export type WorkOrderServiceRepairPlanDTO = {
  /** 预估维修总费用 */
  totalEstimatedCost?: number;
  /** 方案实例集合 */
  repairPlanObjectList?: WorkOrderServiceRepairPlanObject[];
};

/**
 * OpenAPI 组件类型：维修方案入参详情对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairPlanObject
 */
export type WorkOrderServiceRepairPlanObject = {
  /** 对象实例主键 */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** classCode */
  classCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 是否用户选择专业 */
  isUserSelectedMajor?: boolean;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 空间实例对应的空间树节点编码 */
  nodeCode?: string;
  /** 自定义实例类型,为空时不是自定义实例 */
  deviceCustomType?: string;
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 楼层排序 */
  floorSequenceID?: string;
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 维修方案集合 */
  repairPlanDetails?: WorkOrderServiceBaseWorkOrderProblemDTO[];
  /** 维修前拍摄的照片 */
  preRepairPhoto?: string[];
  /** 维修前拍摄的视频 */
  preRepairVideos?: WorkOrderServiceVideo[];
  /** 维修后拍摄的照片 */
  postRepairPhoto?: string[];
  /** 维修后拍摄的视频 */
  postRepairVideos?: WorkOrderServiceVideo[];
  /** 预估费用 */
  estimatedCost?: number;
  /** 实际费用 */
  actualCost?: number;
  /** 对象类型: system,equipment,equipGroup,space,project,floor,building */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象所在位置 */
  location?: string;
};

/**
 * OpenAPI 组件类型：执行阶段更新入参
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExecuteStageUpdateDTO
 */
export type WorkOrderServiceExecuteStageUpdateDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  problemLevel?: WorkOrderServiceIssueLevelDto;
  iotMonitoringResults?: WorkOrderServiceIotMonitoringResultsDTO;
  /** 工单创建时关联问题描述集合 */
  problemInfos?: WorkOrderServiceInitialProblemDTO[];
  /** 引发的问题及影响集合 */
  relatedIssues?: WorkOrderServiceProblemsAndImpactDTO[];
  /** 记录问题发生原因集合 */
  issueCauses?: WorkOrderServiceReasonForProblemDTO[];
  repairPlan?: WorkOrderServiceRepairPlanDTO;
  remarkInfo?: WorkOrderServiceRemarkInfo;
};

/**
 * OpenAPI 组件类型：备注信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RemarkInfo
 */
export type WorkOrderServiceRemarkInfo = {
  /** 问题及影响备注说明 */
  impactDescription?: string;
  /** 记录问题发生原因备注说明 */
  causeDescription?: string;
  /** 维修方案备注 */
  repairPlanDescription?: string;
};

/**
 * OpenAPI 组件类型：指派阶段更新入参
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AssignStageUpdateDTO
 */
export type WorkOrderServiceAssignStageUpdateDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 引发的问题及影响集合 */
  relatedIssues?: WorkOrderServiceProblemsAndImpactDTO[];
  problemLevel?: WorkOrderServiceIssueLevelDto;
  /** 执行人 */
  executePersonId?: string;
};

/**
 * OpenAPI 组件类型：执行结果审批阶段更新入参
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApprovalOfExecuteResultStageUpdateDTO
 */
export type WorkOrderServiceApprovalOfExecuteResultStageUpdateDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 是否通过 */
  pass: boolean;
  /** 补充说明-不通过原因 */
  supplementaryExplain?: string;
  /** 工单创建时关联问题描述集合 */
  problemInfos?: WorkOrderServiceInitialProblemDTO[];
  /** 引发的问题及影响集合 */
  relatedIssues?: WorkOrderServiceProblemsAndImpactDTO[];
  /** 记录问题发生原因集合 */
  issueCauses?: WorkOrderServiceReasonForProblemDTO[];
  repairPlan?: WorkOrderServiceRepairPlanDTO;
};

/**
 * OpenAPI 组件类型：SystemTransferDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SystemTransferDto
 */
export type WorkOrderServiceSystemTransferDto = {
  /** 工单主键 */
  orderId: string;
  /** 项目id */
  projectId: string;
  /** 账号id */
  userId?: string;
  /** 账号名称 */
  userName?: string;
  /** 人员id */
  personId?: string;
  /** 人员名称 */
  personName?: string;
  transferList: WorkOrderServiceTransferPairDto[];
};

/**
 * OpenAPI 组件类型：TransferPairDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TransferPairDto
 */
export type WorkOrderServiceTransferPairDto = {
  /** 被转交路由 */
  fromRoutingControlId: string;
  /** 转交人 */
  toPersonIds: string[];
};

/**
 * OpenAPI 组件类型：上帝转交列表查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SystemTransferListQueryDto
 */
export type WorkOrderServiceSystemTransferListQueryDto = {
  /** 工单id */
  orderId: string;
};

/**
 * OpenAPI 组件类型：RSystemTransferListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RSystemTransferListVo
 */
export type WorkOrderServiceRSystemTransferListVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceSystemTransferListVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：SystemTransferListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SystemTransferListVo
 */
export type WorkOrderServiceSystemTransferListVo = {
  /** 指派集合 */
  assignList?: WorkOrderServiceSystemTransferVo[];
  /** 执行集合 */
  executeList?: WorkOrderServiceSystemTransferVo[];
  /** 审核集合 */
  auditList?: WorkOrderServiceSystemTransferVo[];
  /** 审批集合 */
  approvalList?: WorkOrderServiceSystemTransferVo[];
};

/**
 * OpenAPI 组件类型：审批集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SystemTransferVo
 */
export type WorkOrderServiceSystemTransferVo = {
  /** 路由id */
  routingControlId?: string;
  /** 人员id */
  personId?: string;
  /** 人员名称 */
  personName?: string;
  /** 路由编码 */
  routingControlCode?: string;
};

/**
 * OpenAPI 组件类型：终止原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/CancelReasonDto
 */
export type WorkOrderServiceCancelReasonDto = {
  /** 原因编码 */
  code?: string;
  /** 原因说明 */
  name?: string;
};

/**
 * OpenAPI 组件类型：SystemStopDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SystemStopDto
 */
export type WorkOrderServiceSystemStopDto = {
  /** 工单主键 */
  orderId: string;
  /** 项目id */
  projectId: string;
  /** 账号id */
  userId?: string;
  /** 账号名称 */
  userName?: string;
  /** 人员id */
  personId?: string;
  /** 人员名称 */
  personName?: string;
  /** 终止备注 */
  remark?: string;
  cancelReason?: WorkOrderServiceCancelReasonDto;
};

/**
 * OpenAPI 组件类型：SystemAssignDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SystemAssignDto
 */
export type WorkOrderServiceSystemAssignDto = {
  /** 工单主键 */
  orderId: string;
  /** 项目id */
  projectId: string;
  /** 账号id */
  userId?: string;
  /** 账号名称 */
  userName?: string;
  /** 人员id */
  personId?: string;
  /** 人员名称 */
  personName?: string;
  /** 请选择人员 */
  assignPersonIds: string[];
};

/**
 * OpenAPI 组件类型：RobbingOrderDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RobbingOrderDto
 */
export type WorkOrderServiceRobbingOrderDto = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
};

/**
 * OpenAPI 组件类型：方案审核进度Dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReviewProgressDto
 */
export type WorkOrderServiceReviewProgressDto = {
  /** 当前用户id */
  personId: string;
  /** 工单主键 */
  orderId: string;
  /** 项目id */
  projectId: string;
  /** 工单路由id */
  routingControlId: string;
};

/**
 * OpenAPI 组件类型：RListReviewProgressVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListReviewProgressVo
 */
export type WorkOrderServiceRListReviewProgressVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceReviewProgressVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：方案审核进度vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReviewProgressVo
 */
export type WorkOrderServiceReviewProgressVo = {
  /** 审核人id */
  reviewPersonId?: string;
  /** 审核人姓名 */
  reviewPersonName?: string;
  /** 处理状态：1-未处理，2-通过 */
  reviewStatus?: number;
  /** 职位集合 */
  position?: string[];
  /** 处理时间 */
  reviewTime?: string;
};

/**
 * OpenAPI 组件类型：现场视频
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Video
 */
export type WorkOrderServiceVideo = {
  /** 视频id */
  key?: string;
  /** 封面图id */
  pic?: string;
  /** 绝对路径（仅离线使用） */
  absolutePath?: string;
  /** 排序顺序 */
  sortOrder?: number;
};

/**
 * OpenAPI 组件类型：工单主体备注入参DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRemarkDTO
 */
export type WorkOrderServiceWorkOrderRemarkDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId?: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 工单主体备注信息 */
  remark?: string;
  /** 图片 */
  images?: string[];
  /** 音频集合 */
  sounds?: WorkOrderServiceSound[];
  /** 视频集合 */
  videos?: WorkOrderServiceVideo[];
};

/**
 * OpenAPI 组件类型：RefundOrderDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RefundOrderDto
 */
export type WorkOrderServiceRefundOrderDto = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
};

/**
 * OpenAPI 组件类型：工单更新业务基础入参属性
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/BaseUpdateDTO
 */
export type WorkOrderServiceBaseUpdateDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
};

/**
 * OpenAPI 组件类型：RWorkOrderRoutingControlVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderRoutingControlVo
 */
export type WorkOrderServiceRWorkOrderRoutingControlVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderRoutingControlVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：工单路由vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRoutingControlVo
 */
export type WorkOrderServiceWorkOrderRoutingControlVo = {
  /** 路由id */
  routingControlId?: string;
  /** 上级路由id */
  lastRoutingControlId?: string;
  /** 人员id */
  personId?: string;
  /** 路由编码 */
  controlCode?: string;
  /** 分组id */
  groupId?: string;
  /** 项目id */
  projectId?: string;
  /** 工单id */
  orderId?: string;
  /** 是否已操作(抢单路由 operated=true表示已抢单) */
  operated?: boolean;
  /** 操作状态(1:已操作;0:未操作;2:暂停) */
  operateFlag?: number;
};

/**
 * OpenAPI 组件类型：忽略工单dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/IgnoreOrderDto
 */
export type WorkOrderServiceIgnoreOrderDto = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
};

/**
 * OpenAPI 组件类型：分类或者换人指派 dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ClassifyOrAssignReplacePeopleDto
 */
export type WorkOrderServiceClassifyOrAssignReplacePeopleDto = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 换人指派 dto */
  replacePersonIds: string[];
  /** 操作类型(CLASSIFY_REPLACE:分类换人;ASSIGN_REPLACE:指派换人) */
  optType: "CLASSIFY_REPLACE" | "ASSIGN_REPLACE";
};

/**
 * OpenAPI 组件类型：延期审批DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderAuditExtensionDTO
 */
export type WorkOrderServiceWorkOrderAuditExtensionDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 延期小时数 */
  delayHour?: number;
  /** 审批结果：1-同意；0-不同意 */
  auditResult: "UN_APPROVE" | "APPROVE";
  /** 审批描述 */
  auditDesc?: string;
  /** 图片集合 */
  images?: string[];
  /** 语音备注 */
  sounds?: WorkOrderServiceSound[];
};

/**
 * OpenAPI 组件类型：终止审批DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderAuditEndDTO
 */
export type WorkOrderServiceWorkOrderAuditEndDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 审批结果：1-同意；0-不同意 */
  auditResult: "UN_APPROVE" | "APPROVE";
  /** 审批描述 */
  auditDesc?: string;
  /** 图片集合 */
  images?: string[];
  /** 语音备注 */
  sounds?: WorkOrderServiceSound[];
};

/**
 * OpenAPI 组件类型：AssignOrderDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AssignOrderDto
 */
export type WorkOrderServiceAssignOrderDto = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 执行人 */
  executePersonIds: string[];
};

/**
 * OpenAPI 组件类型：申请加人、换人
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApplyAddOrReplacePeopleDto
 */
export type WorkOrderServiceApplyAddOrReplacePeopleDto = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 增加的人员id集 */
  personIds: string[];
  /** 审批描述 */
  auditDesc?: string;
  /** 图片集合 */
  images?: string[];
  /** 语音备注 */
  sounds?: WorkOrderServiceSound[];
};

/**
 * OpenAPI 组件类型：延期原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DelayReasonDto
 */
export type WorkOrderServiceDelayReasonDto = {
  /** 原因id */
  id?: string;
  /** 原因名称 */
  explanation?: string;
};

/**
 * OpenAPI 组件类型：申请延期DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderApplyExtensionDTO
 */
export type WorkOrderServiceWorkOrderApplyExtensionDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 延期小时数 */
  delayHour?: number;
  delayReason?: WorkOrderServiceDelayReasonDto;
  /** 延期说明 */
  description?: string;
  /** 图片集合 */
  images?: string[];
  /** 语音备注 */
  sounds?: WorkOrderServiceSound[];
};

/**
 * OpenAPI 组件类型：申请终止DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderApplyEndDTO
 */
export type WorkOrderServiceWorkOrderApplyEndDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 延期说明 */
  description?: string;
  /** 图片集合 */
  images?: string[];
  /** 语音备注 */
  sounds?: WorkOrderServiceSound[];
};

/**
 * OpenAPI 组件类型：ApplyCloseDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApplyCloseDto
 */
export type WorkOrderServiceApplyCloseDto = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
};

/**
 * OpenAPI 组件类型：添加审核人dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AddPlanAuditPeopleDto
 */
export type WorkOrderServiceAddPlanAuditPeopleDto = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 添加的方案审核人员集合 */
  addPersonIds: string[];
};

/**
 * OpenAPI 组件类型：工单响应参数
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ActionOrderDto
 */
export type WorkOrderServiceActionOrderDto = {
  /** 工单 */
  orderId: string;
  /** 响应人ID */
  actionPersonId: string;
  /** 响应人姓名 */
  actionPersonName?: string;
  /** 响应时刻 */
  actionTime: string;
  /** 响应照片 */
  images?: string[];
  scanInfo?: WorkOrderServiceScanInfoDto;
};

/**
 * OpenAPI 组件类型：响应扫码信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ScanInfoDto
 */
export type WorkOrderServiceScanInfoDto = {
  /** 扫码对象id */
  objId?: string;
  /** 扫码对象名称 */
  objName?: string;
};

/**
 * OpenAPI 组件类型：工单异常关闭入参DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AbnormalCloseDTO
 */
export type WorkOrderServiceAbnormalCloseDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  abnormalCloseInfo: WorkOrderServiceAbnormalClosureInfo;
  /** 操作类型(CLASSIFY_CLOSE:分类关闭;ASSIGN_CLOSE:指派关闭) */
  optType: "CLASSIFY_CLOSE" | "ASSIGN_CLOSE";
};

/**
 * OpenAPI 组件类型：工单异常关闭业务信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AbnormalClosureInfo
 */
export type WorkOrderServiceAbnormalClosureInfo = {
  /** 异常关闭原因 */
  reason: "FAKE_ALARM" | "RECOVERED" | "IGNORE";
  /** 补充说明 */
  supplementaryExplanation: string;
  cancelReason?: WorkOrderServiceCancelReasonDto;
  /** 图片 */
  images?: string[];
  /** 音频 */
  sounds?: WorkOrderServiceSound[];
  /** 视频 */
  videos?: WorkOrderServiceVideo[];
};

/**
 * OpenAPI 组件类型：报时类型管理查询流程列表dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeFlowPlanQueryDto
 */
export type WorkOrderServiceReportIssueTypeFlowPlanQueryDto = {
  /** 工作类型 */
  workType: string;
  /** 项目id */
  projectId?: string;
};

/**
 * OpenAPI 组件类型：RListReportIssueTypeFlowPlanVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListReportIssueTypeFlowPlanVo
 */
export type WorkOrderServiceRListReportIssueTypeFlowPlanVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceReportIssueTypeFlowPlanVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：报事类型工单流程列表Vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeFlowPlanVo
 */
export type WorkOrderServiceReportIssueTypeFlowPlanVo = {
  /** 流程id */
  planId?: string;
  /** 流程名称 */
  planName?: string;
};

/**
 * OpenAPI 组件类型：工单流程列表查询入参dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PublicWorkFlowListByParamDTO
 */
export type WorkOrderServicePublicWorkFlowListByParamDTO = {
  /** 项目id集合 */
  projectIdList?: string[];
  /** 工作类型分类编码集合: 1-计划维保   2-用户报事   3-计划巡检   4-异常维修 5-临时维修 6-临时维保 7-诊断排查 8-临时巡检 9-员工整改 10-工作填报 */
  workTypeCodeList?: string[];
  /** 工作类型id集合 */
  jobTypeIdList?: string[];
  /** 工单类型名称模糊搜索 */
  keyword?: string;
  /** 工单流程状态: 0: 需修订,1: 正常 */
  planStatus?: string;
  /** 工单流程id集合 */
  planIdList?: string[];
  /** 工单允许展示岗位id集合 */
  positionIdList?: string[];
};

/**
 * OpenAPI 组件类型：工单流程查询返回值VO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PublicWorkFlowListVO
 */
export type WorkOrderServicePublicWorkFlowListVO = {
  /** 工单流程id */
  planId?: string;
  /** 工单流程名称 */
  planName?: string;
  /** 工作类型分类编码: 1-计划维保   2-用户报事   3-计划巡检   4-异常维修 5-临时维修 6-临时维保 7-诊断排查 8-临时巡检 9-员工整改 10-工作填报 */
  workType?: string;
  /** 工作类型分类名称 */
  workTypeName?: string;
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 工单流程状态:0、需修订,1、正常 */
  planStatus?: string;
};

/**
 * OpenAPI 组件类型：工作流程列表查询入参dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkFlowListByParamDTO
 */
export type WorkOrderServiceWorkFlowListByParamDTO = {
  /** 是否需要controlCode入参,默认true */
  needControlCode?: boolean;
  /** 工单类型名称模糊搜索 */
  keyword?: string;
  /** 控制模块id */
  control_code?: string;
  /** 工作类型id */
  job_type_id?: string;
  /** 岗位id */
  position_id?: string;
  /** 岗位ID集合 兼容原position_id */
  position_ids?: string[];
  /** 项目ID */
  project_id?: string;
  /** 报修是否可以转此工单 0-否，1-是 */
  repair_flag?: string;
  /** 工作类型分类编码: 1-计划维保   2-用户报事   3-计划巡检   4-异常维修 5-临时维修 6-临时维保 7-诊断排查 8-临时巡检 9-员工整改 10-工作填报 */
  work_type?: string;
};

/**
 * OpenAPI 组件类型：Apply
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Apply
 */
export type WorkOrderServiceApply = {
  audit?: WorkOrderServiceAudit[];
  code?: string;
  name?: string;
  useful?: boolean;
};

/**
 * OpenAPI 组件类型：ApplyItem
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApplyItem
 */
export type WorkOrderServiceApplyItem = {
  code?: string;
  name?: string;
  next_code?: string;
  next_route?: WorkOrderServiceApplyItemNextRoute[];
};

/**
 * OpenAPI 组件类型：ApplyItemNextRoute
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApplyItemNextRoute
 */
export type WorkOrderServiceApplyItemNextRoute = {
  name?: string;
  positionId?: string;
  type?: string;
};

/**
 * OpenAPI 组件类型：Audit
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Audit
 */
export type WorkOrderServiceAudit = {
  code?: string;
  name?: string;
  positions?: WorkOrderServiceAuditPosition[];
  useful?: string;
};

/**
 * OpenAPI 组件类型：AuditPosition
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AuditPosition
 */
export type WorkOrderServiceAuditPosition = {
  effective?: string;
  positionId?: string;
  positionName?: string;
};

/**
 * OpenAPI 组件类型：DealDept
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DealDept
 */
export type WorkOrderServiceDealDept = {
  deptId?: string;
  deptName?: string;
};

/**
 * OpenAPI 组件类型：Duty
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Duty
 */
export type WorkOrderServiceDuty = {
  arrivalTimeAllowExecute?: boolean;
  code?: string;
  executieMode?: string;
  expecteOperation?: boolean;
  filterScheduling?: boolean;
  limitDomain?: boolean;
  minute?: number;
  name?: string;
  apply_items?: WorkOrderServiceApplyItem[];
  next_route?: WorkOrderServiceDutyNextRoute[];
};

/**
 * OpenAPI 组件类型：DutyNextRoute
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DutyNextRoute
 */
export type WorkOrderServiceDutyNextRoute = {
  name?: string;
  positionId?: string;
  type?: string;
};

/**
 * OpenAPI 组件类型：EndTime
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/EndTime
 */
export type WorkOrderServiceEndTime = {
  around?: string;
  minute?: number;
  selected?: boolean;
};

/**
 * OpenAPI 组件类型：岗位职责
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JobResponsibilitiesVO
 */
export type WorkOrderServiceJobResponsibilitiesVO = {
  name?: string;
  type?: string;
  positionId?: string;
  duty?: WorkOrderServiceDuty[];
};

/**
 * OpenAPI 组件类型：发单后下级岗位无人员时通知岗位
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/NextRouteNobodyNotify
 */
export type WorkOrderServiceNextRouteNobodyNotify = {
  positions?: WorkOrderServiceNextRouteNobodyNotifyPosition[];
};

/**
 * OpenAPI 组件类型：NextRouteNobodyNotifyPosition
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/NextRouteNobodyNotifyPosition
 */
export type WorkOrderServiceNextRouteNobodyNotifyPosition = {
  position_id?: string;
  position_name?: string;
};

/**
 * OpenAPI 组件类型：岗位职责-新
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PostAndDutyNative
 */
export type WorkOrderServicePostAndDutyNative = {
  /** 职责编码  create-新建 */
  code?: string;
  /** 职责名称 */
  name?: string;
  /** 职责集合 */
  positions?: WorkOrderServicePostAndDutyNativePosition[];
  setup?: WorkOrderServiceSetup;
  /** 有用的（选中） */
  useful?: string;
  /** 是否缺乏岗位 */
  lackPositoion?: boolean;
  /** 循环配置 */
  circulationConfig?: string;
  /** 责任集合配置 */
  responsibility?: string[];
};

/**
 * OpenAPI 组件类型：职责集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PostAndDutyNativePosition
 */
export type WorkOrderServicePostAndDutyNativePosition = {
  effective?: string;
  positionId?: string;
  positionName?: string;
};

/**
 * OpenAPI 组件类型：RListWorkTypeListByPersonIdVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkTypeListByPersonIdVO
 */
export type WorkOrderServiceRListWorkTypeListByPersonIdVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkTypeListByPersonIdVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RemindSet
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RemindSet
 */
export type WorkOrderServiceRemindSet = {
  nextRouteNobodyNotify?: WorkOrderServiceNextRouteNobodyNotify;
  /** 到达工单开始、结束时间提醒 */
  woOrderTimeNotify?: WorkOrderServiceWoOrderTimeNotify[];
  /** 是否启用 */
  enable?: boolean;
};

/**
 * OpenAPI 组件类型：职责配置
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Setup
 */
export type WorkOrderServiceSetup = {
  apply?: WorkOrderServiceApply[];
  arrivalTimeAllowExecute?: string;
  executieMode?: string;
  filterScheduling?: string;
  limitDomain?: string;
};

/**
 * OpenAPI 组件类型：StartTime
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/StartTime
 */
export type WorkOrderServiceStartTime = {
  around?: string;
  dealDept?: WorkOrderServiceDealDept;
  isGenerate?: boolean;
  minute?: number;
  selected?: boolean;
  urgency?: string;
};

/**
 * OpenAPI 组件类型：时间界限
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimeLimit
 */
export type WorkOrderServiceTimeLimit = {
  customField?: string[];
  endTime?: WorkOrderServiceEndTime;
  remindSet?: WorkOrderServiceRemindSet;
  startTime?: WorkOrderServiceStartTime;
  auditor_evaluation_flag?: string;
  automatic_data_capture_flag?: string;
  import_outlay_flag?: number;
  maintenance_configuration_flag?: string;
  sign_desc?: string;
  sign_flag?: number;
  timeout_order_receiving?: WorkOrderServiceTimeoutOrderReceiving;
  video_capture_flag?: number;
};

/**
 * OpenAPI 组件类型：TimeoutOrderReceiving
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimeoutOrderReceiving
 */
export type WorkOrderServiceTimeoutOrderReceiving = {
  selected?: boolean;
  closed_state?: string;
};

/**
 * OpenAPI 组件类型：到达工单开始、结束时间提醒
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WoOrderTimeNotify
 */
export type WorkOrderServiceWoOrderTimeNotify = {
  around?: string;
  minute?: string;
  notifyCycle?: string;
  notifyUseful?: boolean;
  orderState?: string;
  positions?: WorkOrderServiceWoOrderTimeNotifyPosition[];
  timeOption?: string;
  useful?: boolean;
};

/**
 * OpenAPI 组件类型：WoOrderTimeNotifyPosition
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WoOrderTimeNotifyPosition
 */
export type WorkOrderServiceWoOrderTimeNotifyPosition = {
  positionId?: string;
  positionName?: string;
};

/**
 * OpenAPI 组件类型：WorkTypeListByPersonIdVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkTypeListByPersonIdVO
 */
export type WorkOrderServiceWorkTypeListByPersonIdVO = {
  /** 时间类型编码 */
  execute_type?: string;
  /** 时间类型名称 */
  execute_type_name?: string;
  /** 工作类型id */
  job_type_id?: string;
  /** 工作类型名称 */
  job_type_name?: string;
  /** 工单流程id */
  plan_id?: string;
  /** 工工单流程名称 */
  plan_name?: string;
  /** 岗位职责 */
  post_and_duty?: WorkOrderServiceJobResponsibilitiesVO[];
  /** 岗位职责-新 */
  post_and_duty_native?: WorkOrderServicePostAndDutyNative[];
  /** 报修是否可以转此工单，  0-否，1-是 */
  repair_flag?: string;
  time_limit?: WorkOrderServiceTimeLimit;
  /** 工作类型分类编码:1-计划维保   2-用户报事   3-计划巡检   4-异常维修 5-临时维修 6-临时维保 7-诊断排查 8-临时巡检 9-员工整改 10-工作填报 */
  work_type?: string;
  /** 工作类型分类名称 */
  work_type_name?: string;
};

/**
 * OpenAPI 组件类型：RListSimpleWorkTypeListByPersonIdVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListSimpleWorkTypeListByPersonIdVO
 */
export type WorkOrderServiceRListSimpleWorkTypeListByPersonIdVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceSimpleWorkTypeListByPersonIdVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：SimpleWorkTypeListByPersonIdVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SimpleWorkTypeListByPersonIdVO
 */
export type WorkOrderServiceSimpleWorkTypeListByPersonIdVO = {
  /** 工作类型id */
  job_type_id?: string;
  /** 工作类型名称 */
  job_type_name?: string;
  /** 工单流程id */
  plan_id?: string;
  /** 工单流程名称 */
  plan_name?: string;
  /** 工作类型分类编码: 1-计划维保   2-用户报事   3-计划巡检   4-异常维修 5-临时维修 6-临时维保 7-诊断排查 8-临时巡检 9-员工整改 10-工作填报 */
  work_type?: string;
  /** 工作类型分类名称 */
  work_type_name?: string;
};

/**
 * OpenAPI 组件类型：OverviewQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OverviewQueryDto
 */
export type WorkOrderServiceOverviewQueryDto = {
  /** 项目id */
  projectId: string;
  /** 时间维度: 年度: YEAR,半年度: HALF_YEAR,季度度 SEASON,月度: MONTH */
  timeDimension: "YEAR" | "HALF_YEAR" | "SEASON" | "MONTH";
  /** 时间范围起始日期,yyyy-MM-dd */
  startTime: string;
  /** 时间范围结束日期时间,yyyy-MM-dd */
  endTime: string;
  /** 处理专业集合编码 */
  processMajorCodes?: string[];
};

/**
 * OpenAPI 组件类型：报事类型数量统计
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProportionOfReportingTypes
 */
export type WorkOrderServiceProportionOfReportingTypes = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  number?: number;
};

/**
 * OpenAPI 组件类型：RListStatisticsOverviewVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListStatisticsOverviewVo
 */
export type WorkOrderServiceRListStatisticsOverviewVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceStatisticsOverviewVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：StatisticsOverviewVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/StatisticsOverviewVo
 */
export type WorkOrderServiceStatisticsOverviewVo = {
  /** 问题性质 REPORT_REPAIR：报事报修 ASSISTANCE_NEED：ASSISTANCE_NEED COMMENT：意见投诉，OPTIMIZATION_SUGGESTION：优化建议 */
  problemNature?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION";
  proportionOfReportingTypes?: WorkOrderServiceProportionOfReportingTypes;
  timedUnresolvedStatistics?: WorkOrderServiceTimedUnresolvedStatistics;
  timeoutResolutionStatistics?: WorkOrderServiceTimeoutResolutionStatistics;
  timeoutActionStatistics?: WorkOrderServiceTimeoutActionStatistics;
};

/**
 * OpenAPI 组件类型：超时未解决数量统计
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimedUnresolvedStatistics
 */
export type WorkOrderServiceTimedUnresolvedStatistics = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 超时未解决数量 */
  overdueUnsolvedCount?: number;
};

/**
 * OpenAPI 组件类型：超时响应数量统计
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimeoutActionStatistics
 */
export type WorkOrderServiceTimeoutActionStatistics = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 响应超时数量 */
  actionOvertimeCount?: number;
};

/**
 * OpenAPI 组件类型：超时解决数量统计
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimeoutResolutionStatistics
 */
export type WorkOrderServiceTimeoutResolutionStatistics = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 超时解决数量 */
  overdueSolvedCount?: number;
};

/**
 * OpenAPI 组件类型：ReportTypePageStatisticsDTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportTypePageStatisticsDTO
 */
export type WorkOrderServiceReportTypePageStatisticsDTO = {
  /** 项目id */
  projectId: string;
  /** 时间维度: 年度: YEAR,半年度: HALF_YEAR,季度度 SEASON,月度: MONTH */
  timeDimension: "YEAR" | "HALF_YEAR" | "SEASON" | "MONTH";
  /** 时间范围起始日期,yyyy-MM-dd */
  startTime: string;
  /** 时间范围结束日期时间,yyyy-MM-dd */
  endTime: string;
  /** 报事类型名称-模糊搜索条件 */
  searchParam?: string;
  /** 报事类型名称-模糊搜索条件 */
  page: number;
  /** 报事类型名称-模糊搜索条件 */
  size: number;
  /** 报事类型-问题性质：报事报修 REPORT_REPAIR，协助需求 ASSISTANCE_NEED，意见投诉 COMMENT，优化建议 OPTIMIZATION_SUGGESTION */
  problemNature?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION";
  /** 处理专业编码集合 */
  processMajorCodes?: string[];
  sort?: WorkOrderServiceSort;
};

/**
 * OpenAPI 组件类型：排序属性
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Sort
 */
export type WorkOrderServiceSort = {
  /** 排序字段(同时只有一个):报事数量:proportionNumber,报事占比:proportionRatio,整体解决数量:overallNumber,整体解决占比:overallRatio,超时未解决数量:timedUnresolvedNumber,超时未解决占比:timedUnresolvedRatio,超时已解决数量:timeoutResolutionNumber,超时已解决占比:timeoutResolutionRatio,响应超时数量:timeoutActionNumber,响应超时占比:timeoutActionRatio */
  column?: string;
  /** asc-升序、desc-降序 如果不给定，默认是asc */
  order?: string;
};

/**
 * OpenAPI 组件类型：整体解决数量统计
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OverallSolutionQuantityStatistics
 */
export type WorkOrderServiceOverallSolutionQuantityStatistics = {
  /** 超时已解决数量 */
  overdueSolvedCount?: number;
  /** 超时未解决数量 */
  overdueUnsolvedCount?: number;
  /** 当期用户报事工单总数量 */
  totalNum?: number;
  /** 超时已解决+未解决数量，报事类型总工单数量占比 */
  ratio?: string;
  /** 超时已解决数量，报事类型总工单数量占比 */
  overdueSolvedRatio?: string;
  /** 超时未解决数量，报事类型总工单数量占比 */
  overdueUnsolvedRatio?: string;
  /** 报事类型的超时解决+超时未解决工单数量同比 */
  yoy?: string;
  /** 报事类型的超时解决+超时未解决工单数量环比 */
  mom?: string;
};

/**
 * OpenAPI 组件类型：PageReportTypePageStatisticsVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PageReportTypePageStatisticsVO
 */
export type WorkOrderServicePageReportTypePageStatisticsVO = {
  records?: WorkOrderServiceReportTypePageStatisticsVO[];
  total?: number;
  size?: number;
  current?: number;
  orders?: WorkOrderServiceOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  countId?: string;
  maxLimit?: number;
  pages?: number;
};

/**
 * OpenAPI 组件类型：RPageReportTypePageStatisticsVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RPageReportTypePageStatisticsVO
 */
export type WorkOrderServiceRPageReportTypePageStatisticsVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServicePageReportTypePageStatisticsVO;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：ReportTypePageStatisticsVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportTypePageStatisticsVO
 */
export type WorkOrderServiceReportTypePageStatisticsVO = {
  proportionOfReportingTypes?: WorkOrderServiceProportionOfReportingTypes;
  overallSolutionQuantityStatistics?: WorkOrderServiceOverallSolutionQuantityStatistics;
  timedUnresolvedStatistics?: WorkOrderServiceTimedUnresolvedStatistics;
  timeoutResolutionStatistics?: WorkOrderServiceTimeoutResolutionStatistics;
  timeoutActionStatistics?: WorkOrderServiceTimeoutActionStatistics;
  /** 处理专业名称集合 */
  processMajorNameList?: string[];
  /** 报事类型名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：用户报事管理列表查询query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportManageQuery
 */
export type WorkOrderServiceUserReportManageQuery = {
  /** 执行人id */
  personIds?: string[];
  /** 报事位置：选中的层级id集合 */
  positionList?: string[];
  /** 报事类型集合 */
  repairProblemTypes?: string[];
  /** 回访状态集合 */
  orderRevisitStatus?: "REVISIT" | "TIMED_OUT_REVISIT" | "UN_REVISIT" | "TIMED_OUT_UN_REVISIT" | "NEED_FOLLOW_UP"[];
  /** 报事人评价 */
  orderReporterScores?: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "NOT_EVALUATED"[];
  /** 响应状态 */
  actionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION"[];
  /** 解决状态 */
  resolveStatus?: "UN_RESOLVED" | "TIMED_OUT_UN_RESOLVED" | "RESOLVED_ON_TIME" | "TIMED_OUT_RESOLVED"[];
  /** 工单状态 */
  orderStatus?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10"[];
  /** 问题性质标签 */
  problemNatures?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION"[];
  /** 处理专业集合 */
  processMajorCodes?: string[];
  /** 空间标签id */
  positionAsserts?: string[];
  /** 时间类型 */
  timeFilterType?: "CREATE_TIME" | "ASK_ACTION_TIME" | "ASK_RESOLVE_TIME" | "APPOINTMENT_TIME" | "REAL_FINISH_TIME" | "REQUIRED_REVISIT_TIME";
  /** 要求解决开始时间 */
  startTime?: string;
  /** 要求解决结束时间 */
  endTime?: string;
  /** 搜索类型 */
  keywordType?: "PROBLEM_DESC" | "REPORT_PERSON" | "REPORT_PERSON_PHONE" | "ORDER_NUMBER" | "ORDER_NAME";
  /** 搜索值 */
  keyword?: string;
  /** 排序字段(ask_end_time[要求解决时间]）、required_action_time[要求响应时间])、create_time[创建时间]、appointment_time[预约时间]、real_finish_time[实际完成时间]、required_revisit_time[要求回访时间]) */
  orderField?: string;
  /** 排序类型(asc:顺序;desc:倒序。默认desc) */
  orderBy?: string;
  /** pageNum */
  pageNum: number;
  /** pageSize,默认值：200 */
  pageSize?: number;
};

/**
 * OpenAPI 组件类型：报事位置-空间标签
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PositionAssert
 */
export type WorkOrderServicePositionAssert = {
  /** 空间标签编码 */
  code?: string;
  /** 空间标签名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：RCollectionUserReportManageListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionUserReportManageListVo
 */
export type WorkOrderServiceRCollectionUserReportManageListVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceUserReportManageListVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：执行人
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportOrderExecutor
 */
export type WorkOrderServiceReportOrderExecutor = {
  /** id */
  personId?: string;
  /** 姓名 */
  personName?: string;
  /** 手机号 */
  personPhone?: string;
  /** 部门名称集合 */
  departments?: string[];
  /** 岗位名称集合 */
  postNames?: string[];
  /** 工作状态 */
  workStatus?: "ON_WORK" | "LEAVE_WORK";
  /** 用户报事单人员类型 */
  subscriberReportPersonTypes?: "ASSIGNED" | "EXECUTOR" | "UNDER_REVIEW"[];
  /** 排查处理单人员类型 */
  troubleshootingHandlePersonTypes?: "ASSIGNED" | "EXECUTOR" | "UNDER_REVIEW"[];
};

/**
 * OpenAPI 组件类型：用户报事管理列表vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportManageListVo
 */
export type WorkOrderServiceUserReportManageListVo = {
  /** 工单id */
  orderId?: string;
  /** 问题描述 */
  problemDesc?: string;
  /** 报事位置 */
  position?: string;
  /** 空间标签 */
  positionAsserts?: WorkOrderServicePositionAssert[];
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
  /** 是否上报异常：REPORT_EXCEPTION-上报异常，ALL_NORMAL-全部正常 */
  whetherReportException?: "REPORT_EXCEPTION" | "ALL_NORMAL" | "WhetherReportExceptionEnum";
  /** 响应状态 */
  actionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION";
  /** 解决状态 */
  resolveStatus?: "UN_RESOLVED" | "TIMED_OUT_UN_RESOLVED" | "RESOLVED_ON_TIME" | "TIMED_OUT_RESOLVED";
  /** 工单状态 */
  workOrderStatus?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 创建时间 */
  orderCreateTime?: string;
  /** 要求解决时间 */
  askResolveTime?: string;
  /** 要求响应时间 */
  requiredActionTime?: string;
  /** 关单时间 */
  closeTime?: string;
  /** 执行人 */
  executors?: WorkOrderServiceReportOrderExecutor[];
  /** 问题性质标签 */
  problemNature?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION";
  /** 是否有备注 */
  hasRemarks?: boolean;
  /** 报事人 */
  contacts?: string;
  /** 联系电话 */
  phone?: string;
  /** 工单名称 */
  woName?: string;
  /** 工单编码 */
  woNumber?: string;
  /** 流程名称 */
  flowName?: string;
  /** 报事类型名称 */
  repairProblemName?: string;
  /** 预约时间 */
  appointmentTime?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 要求回访 */
  requiredRevisitTime?: string;
  /** 报事人评分 */
  score?: number;
  evaluationDetail?: WorkOrderServiceEvaluationDetail;
  /** 回访状态 */
  orderRevisitStatus?: "REVISIT" | "TIMED_OUT_REVISIT" | "UN_REVISIT" | "TIMED_OUT_UN_REVISIT" | "NEED_FOLLOW_UP";
};

/**
 * OpenAPI 组件类型：WorkOrderTaskBaseQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskBaseQueryDto
 */
export type WorkOrderServiceWorkOrderTaskBaseQueryDto = {
  /** 工单编码 */
  workOrderId?: string;
  /** 异常事件id */
  exceptionId?: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderTaskBaseVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderTaskBaseVo
 */
export type WorkOrderServiceRListWorkOrderTaskBaseVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderTaskBaseVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderTaskBaseVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskBaseVo
 */
export type WorkOrderServiceWorkOrderTaskBaseVo = {
  /** 任务id */
  taskId?: string;
  /** 实体风险ID */
  physicalRiskId?: string;
  /** 任务对象ID */
  taskObjectId?: string;
  /** 可执行措施ID */
  exeMeasureId?: string;
  /** 知识措施id */
  rccMeasureId?: string;
  /** 任务类型 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 工单编码 */
  workOrderId?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderTaskQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskQueryDto
 */
export type WorkOrderServiceWorkOrderTaskQueryDto = {
  /** 计划id集合 */
  planIds: string[];
  /** 工单要求完成时间-起 */
  requireFinishTimeStart: string;
  /** 工单要求完成时间-止 */
  requireFinishTimeEnd: string;
  /** 对象实例id */
  instanceIds?: string[];
  /** 逾期状态  0：未逾期  1：逾期 */
  overdueFlag?: string;
  /** 任务id,每次传上次最后一个任务id,首次请传null */
  taskId: string;
  /** size,默认值：1000 */
  size?: number;
};

/**
 * OpenAPI 组件类型：PlanTaskStatisticInfo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PlanTaskStatisticInfo
 */
export type WorkOrderServicePlanTaskStatisticInfo = {
  planId?: string;
  strategyItemId?: string;
  requiredStartTime?: string;
  requiredEndTime?: string;
  taskCount?: number;
  overdueNum?: number;
  overdueUnfinishedNum?: number;
  overdueFinishedNum?: number;
  normalFinishNum?: number;
  hasSopUnfinishedNum?: number;
  noSopNum?: number;
};

/**
 * OpenAPI 组件类型：RListPlanTaskStatisticInfo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListPlanTaskStatisticInfo
 */
export type WorkOrderServiceRListPlanTaskStatisticInfo = {
  code?: string;
  result?: string;
  data?: WorkOrderServicePlanTaskStatisticInfo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：计划任务查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderPlanTaskQueryDto
 */
export type WorkOrderServiceWorkOrderPlanTaskQueryDto = {
  /** 策略事项id */
  strategyId: string;
  /** 对象实例id */
  taskObjectId: string;
  /** 任务完成状态 */
  isFinish?: boolean;
  /** 逾期状态 0：未逾期 1：逾期 */
  overdueFlag?: string;
  /** 要求结束起始时间 */
  requiredCompletionStartTime?: string;
  /** 要求结束截至时间 */
  requiredCompletionEndTime?: string;
  /** 当前页码 */
  page: number;
  /** 每页大小 */
  pageSize: number;
};

/**
 * OpenAPI 组件类型：不可执行结果
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/EnumStructDto
 */
export type WorkOrderServiceEnumStructDto = {
  code?: string;
  name?: string;
  desc?: string;
};

/**
 * OpenAPI 组件类型：参数类结果
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ParameterCalculateResult
 */
export type WorkOrderServiceParameterCalculateResult = {
  parameterCalculateResult?: number;
  targetParameterName?: string;
  targetParameterUnit?: string;
};

/**
 * OpenAPI 组件类型：RCollectionWorkOrderPlanTaskVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionWorkOrderPlanTaskVo
 */
export type WorkOrderServiceRCollectionWorkOrderPlanTaskVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderPlanTaskVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderPlanTaskVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderPlanTaskVo
 */
export type WorkOrderServiceWorkOrderPlanTaskVo = {
  /** 任务id */
  taskId?: string;
  /** 要求开始时间 */
  requireBeginTime?: string;
  /** 要求结束时间 */
  requireEndTime?: string;
  /** 处理人id */
  handlePersonId?: string;
  /** 处理人名称 */
  handlePersonName?: string;
  /** 实际完成时间 */
  completionTime?: string;
  /** 任务状态 */
  isFinish?: boolean;
  /** 逾期状态 0：未逾期 1：逾期 */
  overdueFlag?: string;
  /** 任务类型 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 任务反馈结果状态 */
  taskResult?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  notTraceableResult?: WorkOrderServiceEnumStructDto;
  unenforceableResult?: WorkOrderServiceEnumStructDto;
  parameterCalculateResult?: WorkOrderServiceParameterCalculateResult;
};

/**
 * OpenAPI 组件类型：TaskExecResultDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskExecResultDto
 */
export type WorkOrderServiceTaskExecResultDto = {
  /** 对象id集合 */
  objIds: string[];
  /** 措施id集合 */
  measureIds?: number[];
  /** 运维策略事项id集合 */
  strategyIds?: string[];
  /** 计划id_运维策略id，集合 */
  planAndStrategyId?: string[];
  /** 工单类型 */
  sopTaskTypes?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE"[];
  /** 开始时间,yyyy-MM-dd HH:mm:ss,开闭区间 */
  startTime: string;
  /** 结束时间,yyyy-MM-dd HH:mm:ss,开闭区间 */
  endTime: string;
};

/**
 * OpenAPI 组件类型：RListTaskExecResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListTaskExecResultVo
 */
export type WorkOrderServiceRListTaskExecResultVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceTaskExecResultVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：TaskExecResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskExecResultVo
 */
export type WorkOrderServiceTaskExecResultVo = {
  /** 工单编码 */
  sopCode?: string;
  /** 任务编码 */
  taskCode?: string;
  /** 对象id */
  objectInstanceId?: string;
  /** 巡检时间,yyyy-MM-dd HH:mm:ss */
  inspectTime?: string;
  /** 措施id */
  measureId?: string;
  /** 计划id */
  planId?: string;
  /** 运维策略id */
  strategyId?: string;
  /** 计划策略id */
  planStrategyId?: string;
  /** 巡检结果 */
  feedBack?: string;
  /** 巡检人姓名 */
  inspectUser?: string;
};

/**
 * OpenAPI 组件类型：TaskPageDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskPageDto
 */
export type WorkOrderServiceTaskPageDto = {
  /** 工单编码集 */
  orderIds: string[];
  /** pageNum */
  pageNum?: number;
  /** pageSize,默认值：200 */
  pageSize?: number;
};

/**
 * OpenAPI 组件类型：RListTaskPageVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListTaskPageVo
 */
export type WorkOrderServiceRListTaskPageVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceTaskPageVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：TaskPageVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskPageVo
 */
export type WorkOrderServiceTaskPageVo = {
  /** 对象实例id */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** 任务id */
  taskId?: string;
  /** 工单编码 */
  orderId?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 处理专业 */
  processMajorCode?: string;
  taskObject?: WorkOrderServiceTaskObjectDto;
};

/**
 * OpenAPI 组件类型：InstanceOperateInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/InstanceOperateInfoVo
 */
export type WorkOrderServiceInstanceOperateInfoVo = {
  /** 对象实例id */
  objectInstanceId?: string;
  /** 完成时间 */
  finishTime?: string;
  /** 最后执行人 */
  lastUpdateBy?: string;
  finishTimeOfEpochMilli?: number;
};

/**
 * OpenAPI 组件类型：RListInstanceOperateInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListInstanceOperateInfoVo
 */
export type WorkOrderServiceRListInstanceOperateInfoVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceInstanceOperateInfoVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderFeedbackRecordsVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderFeedbackRecordsVo
 */
export type WorkOrderServiceRListWorkOrderFeedbackRecordsVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderFeedbackRecordsVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：异常事件-工单任务反馈记录Vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderFeedbackRecordsVo
 */
export type WorkOrderServiceWorkOrderFeedbackRecordsVo = {
  /** 反馈记录id */
  feedbackId?: string;
  /** 执行人id */
  handlerId?: string;
  /** 执行人名称 */
  handlerName?: string;
  /** 观测时间 */
  handlerTime?: string;
  /** 关联工单编码 */
  workOrderId?: string;
  /** 关联工单名称 */
  workOrderName?: string;
  /** 关联工单类型 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 任务id */
  taskId?: string;
  /** 可执行措施ID */
  exeMeasureId?: string;
  /** 任务类型 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
};

/**
 * OpenAPI 组件类型：WorkOrderTaskVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskVo
 */
export type WorkOrderServiceWorkOrderTaskVo = {
  /** 任务id */
  taskId?: string;
  /** 主任务id */
  preTaskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 计划id */
  planId?: string;
  /** 策略事项id */
  strategyItemId?: string;
  /** 计划策略事项id */
  planStrategyId?: string;
  /** 对象实例id */
  instanceId?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 是否已完成 */
  isFinish?: boolean;
  /** 是否逾期 */
  isOverdue?: boolean;
  /** 任务要求开始时间 */
  requiredBeginTime?: string;
  /** 任务要求完成时间 */
  requireFinishTime?: string;
  /** 任务实际完成时间 */
  realFinishTime?: string;
  /** 工单编码 */
  orderId?: string;
  /** 实际费用 */
  repairCost?: number;
  /** 计划类型 */
  workType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 任务执行类型 */
  taskExecuteType?: "GRADED" | "SCORE" | "PARAMETER" | "EXECUTE" | "REPAIR_AND_REPLACE";
  /** 可执行措施ID */
  exeMeasureId?: string;
  /** 人工复验结果枚举：可能为空 */
  manualReviewResults?: "UN_REAL" | "REAL";
};

/**
 * OpenAPI 组件类型：任务集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskDto
 */
export type WorkOrderServiceTaskDto = {
  /** 任务id */
  taskId: string;
  /** 是否需要提交返回记录 */
  needSubmitFeedback: boolean;
  /** 任务名称 */
  taskName: string;
  /** 任务描述 */
  taskDesc: string;
  /** 处理专业 */
  processMajorCode?: string;
  /** 是否用户选择专业 */
  isUserSelectedMajor?: boolean;
  /** 任务类型 */
  taskType: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 任务状态 */
  taskStatus?: "UNFINISHED" | "FINISHED" | "REVOKE";
  /** 任务问题类型 */
  issueType: "INITIAL_PROBLEM" | "ASSOCIATED_PROBLEM" | "PROBLEM_CAUSE" | "REPAIR_SCHEME";
  /** 任务反馈状态 */
  feedbackStatus?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 任务现场照片 */
  photoImages?: string[];
  /** 任务现场照片 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 任务来源id */
  sourceId?: string;
  /** 对象实例id(自定义对象可为空) */
  instanceId?: string;
  /** 自定义实例类型,为空时不是自定义实例 */
  deviceCustomType?: string;
  /** 实体风险ID */
  physicalRiskId?: string;
  /** 是否自定义 */
  isCustom: boolean;
  /** 可执行措施ID */
  exeMeasureId?: string;
  /** RCC可执行措施ID */
  rccMeasureId?: string;
  /** 预估金额 */
  repairCost?: number;
  /** 实际金额 */
  actualCost?: number;
  /** 备注 */
  remarks?: string;
  taskObject?: WorkOrderServiceTaskObjectDto;
  /** 任务类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
};

/**
 * OpenAPI 组件类型：自定义任务对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskObjectDto
 */
export type WorkOrderServiceTaskObjectDto = {
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 对象实例id(自定义对象可为空)，非自定义对象只需要传id */
  instanceId?: string;
  /** 对象classCode */
  classCode?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 楼层排序 */
  floorSequenceId?: string;
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 空间实例对应的空间树节点编码 */
  nodeCode?: string;
  /** 对象实例名称 */
  name?: string;
  /** 对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象所在位置 */
  location?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderTaskCreateDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskCreateDto
 */
export type WorkOrderServiceWorkOrderTaskCreateDto = {
  /** 工单id */
  workOrderId: string;
  /** 创建人id */
  personId: string;
  /** 任务集合 */
  tasks: WorkOrderServiceTaskDto[];
};

/**
 * OpenAPI 组件类型：TaskCostQuery
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskCostQuery
 */
export type WorkOrderServiceTaskCostQuery = {
  /** 工单id,首次查询不传 */
  workOrderId?: string;
  /** 每次查询页数 */
  limit?: number;
  /** 查询结束时间 */
  endTime: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderTaskCostDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderTaskCostDto
 */
export type WorkOrderServiceRListWorkOrderTaskCostDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderTaskCostDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：任务费用集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskCost
 */
export type WorkOrderServiceWorkOrderTaskCost = {
  /** 对象id */
  objectId?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 处理专业 */
  processMajorCode?: string;
  /** 处理专业 */
  majorCode?: string;
  /** 费用类型 */
  costType?: "COST_TYPE_REPAIR" | "COST_TYPE_REPLACE" | "COST_TYPE_CONSUMABLE" | "COST_TYPE_ESTIMATE" | "COST_TYPE_ACTUAL";
  /** 对象类型 */
  costObjectType?: "OBJECT_TYPE_EQUIPMENT" | "OBJECT_TYPE_EQUIPMENT_PART" | "OTHER";
  /** 金额 */
  costAmount?: number;
};

/**
 * OpenAPI 组件类型：WorkOrderTaskCostDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskCostDto
 */
export type WorkOrderServiceWorkOrderTaskCostDto = {
  /** 工单编码 */
  orderId?: string;
  /** 工作编码 */
  workNumber?: string;
  /** 工单名称 */
  orderName?: string;
  /** 处理专业 */
  processMajorCode?: string;
  /** 处理专业 */
  majorCode?: string;
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单创建时间 */
  createTime?: string;
  /** 要求完成时间 */
  askEndTime?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 工单状态 */
  orderStatus?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 任务费用集合 */
  costList?: WorkOrderServiceWorkOrderTaskCost[];
};

/**
 * OpenAPI 组件类型：TaskCreateCostQuery
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskCreateCostQuery
 */
export type WorkOrderServiceTaskCreateCostQuery = {
  /** 工单id,首次查询不传 */
  workOrderId?: string;
  /** 每次查询页数 */
  limit?: number;
  /** 查询创建时间 */
  endTime: string;
};

/**
 * OpenAPI 组件类型：WorkOrderQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderQueryDto
 */
export type WorkOrderServiceWorkOrderQueryDto = {
  /** 人员id */
  personId?: string;
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
  /** 时间类型周期时间类型 */
  timeType?: "createTime" | "askEndTime" | "realFinishTime";
  /** 工作类型分类集合 */
  workTypes?: string[];
  /** 工单流程id集合 */
  flowIds?: string[];
  /** 工作类型集合 */
  jobTypeIds?: string[];
  /** 工单状态 */
  orderStates?: string[];
  /** 处理人id */
  handlerId?: string[];
  /** 是否逾期(true:是;false:否) */
  overdueFlag?: boolean;
  /** 是否流转异常(true:是;false:否) */
  flowAbnormalFlag?: boolean;
  /** 发起人id集合 */
  promoterIds?: string[];
  /** 是否上报异常：REPORT_EXCEPTION-上报异常，ALL_NORMAL-全部正常 */
  whetherReportException?: "REPORT_EXCEPTION" | "ALL_NORMAL" | "WhetherReportExceptionEnum"[];
  /** 创建渠道 */
  createChannels?: string[];
  /** 是否仅查询离职人员工单(true:是;false:否) */
  leaveWorkPersonOrder?: boolean;
  /** 关键字(工单名称、工单编号) */
  keyword?: string;
  /** 处理专业集合 */
  processMajorCodes?: string[];
  /** 排序字段(默认create_time) */
  orderField?: "createTime" | "askStartTime" | "askEndTime" | "realFinishTime";
  /** 排序类型(默认desc) */
  orderBy?: "asc" | "desc";
  /** 当前页码 */
  page?: number;
  /** 每页大小,默认200 */
  pageSize?: number;
};

/**
 * OpenAPI 组件类型：所有处理人信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/HandlerVo
 */
export type WorkOrderServiceHandlerVo = {
  /** id */
  personId?: string;
  /** 姓名 */
  personName?: string;
  /** 手机号 */
  personPhone?: string;
  /** 部门名称集合 */
  departments?: string[];
  /** 人员离职状态 */
  workStatus?: "ON_WORK" | "LEAVE_WORK";
  /** 处理人类型 */
  handlerType?: "WAIT_RECEIVE" | "EXECUTE" | "WAIT_AUDIT_COUNT_SIGN" | "WAIT_APPROVE_COUNT_SIGN" | "WAIT_APPROVE" | "AUDIT_PASS" | "APPROVE_PASS";
};

/**
 * OpenAPI 组件类型：RCollectionWorkOrderQueryVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionWorkOrderQueryVo
 */
export type WorkOrderServiceRCollectionWorkOrderQueryVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderQueryVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderQueryVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderQueryVo
 */
export type WorkOrderServiceWorkOrderQueryVo = {
  /** 工单id */
  orderId?: string;
  /** 项目id */
  projectId?: string;
  /** 工单名称 */
  woName?: string;
  /** 工单编码 */
  woNumber?: string;
  /** 工作类型分类 */
  workType?: string;
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 工单流程id */
  flowId?: string;
  /** 工单流程名称 */
  flowName?: string;
  /** 工单状态 */
  orderState?: string;
  /** 工单状态名称 */
  orderStateName?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
  /** 是否逾期 */
  overdueFlag?: boolean;
  /** 要求开始时间 */
  askStartTime?: string;
  /** 要求结束时间 */
  askEndTime?: string;
  /** 要求响应时间 */
  requiredActionTime?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 处理人信息 */
  handlers?: WorkOrderServiceHandlerVo[];
  /** 所有处理人信息 */
  allHandlers?: WorkOrderServiceHandlerVo[];
  /** 发起人信息 */
  promoters?: WorkOrderServiceExecutorVo[];
  /** 是否上报异常：REPORT_EXCEPTION-上报异常，ALL_NORMAL-全部正常 */
  whetherReportException?: "REPORT_EXCEPTION" | "ALL_NORMAL" | "WhetherReportExceptionEnum";
  /** 创建渠道 */
  createChannels?: string[];
  /** 创建时间 */
  createTime?: string;
  /** 是否流转异常(true:异常;false:非异常) */
  flowAbnormalFlag?: boolean;
  /** 是否自修工单 */
  selfRepair?: boolean;
};

/**
 * OpenAPI 组件类型：推荐人查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MaintenanceDto
 */
export type WorkOrderServiceMaintenanceDto = {
  /** 订单id */
  orderId?: string;
  /** 职责 */
  dutyTypes?: "WORK_ALLOCATION" | "BUSINESS_CLASSIFICATION" | "MAINTENANCE" | "PLAN_REVIEW" | "IOT_VERIFY" | "WORK_APPROVAL"[];
  /** 查询操作类型 execute：执行， applyAddingPeople：加人查询  applyReplacePeople：换人查询 */
  queryOperateType?: "execute" | "applyAddingPeople" | "applyReplacePeople";
};

/**
 * OpenAPI 组件类型：维修执行人vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MaintenanceExecutorVo
 */
export type WorkOrderServiceMaintenanceExecutorVo = {
  /** 部门id */
  deptId?: string;
  /** 部门名称 */
  deptName?: string;
  /** 执行人信息 */
  personInfos?: WorkOrderServicePersonInfo[];
};

/**
 * OpenAPI 组件类型：执行人信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PersonInfo
 */
export type WorkOrderServicePersonInfo = {
  /** 人员id */
  personId?: string;
  /** 人员名称 */
  personName?: string;
  /** 岗位信息 */
  postInfos?: WorkOrderServicePostInfo[];
};

/**
 * OpenAPI 组件类型：岗位信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PostInfo
 */
export type WorkOrderServicePostInfo = {
  /** 岗位id */
  postId?: string;
  /** 岗位名称 */
  postName?: string;
};

/**
 * OpenAPI 组件类型：RListMaintenanceExecutorVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListMaintenanceExecutorVo
 */
export type WorkOrderServiceRListMaintenanceExecutorVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceMaintenanceExecutorVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：工单审批信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApprovalInfo
 */
export type WorkOrderServiceApprovalInfo = {
  /** 处理人 */
  handler?: WorkOrderServiceHandler[];
  /** 任务反馈信息 */
  taskFeedbackInfoList?: WorkOrderServiceTaskFeedbackInfoV2[];
};

/**
 * OpenAPI 组件类型：被指派人信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AssignedInfo
 */
export type WorkOrderServiceAssignedInfo = {
  /** 被指派人名称 */
  assigneePersonName?: string;
  /** 被指派人岗位 */
  positions?: string;
};

/**
 * OpenAPI 组件类型：工单分配信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AssignmentInfo
 */
export type WorkOrderServiceAssignmentInfo = {
  /** 指派人名称 */
  submitPersonName?: string;
  /** 指派时间 */
  submitTime?: string;
  /** 被指派人名称 */
  assigneePersonName?: string;
  /** 被指派人岗位 */
  positions?: string;
  /** 被指派人信息 */
  assignedInfos?: WorkOrderServiceAssignedInfo[];
};

/**
 * OpenAPI 组件类型：EnumStruct
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/EnumStruct
 */
export type WorkOrderServiceEnumStruct = {
  code?: string;
  name?: string;
  desc?: string;
};

/**
 * OpenAPI 组件类型：处理人
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Handler
 */
export type WorkOrderServiceHandler = {
  /** 处理人 */
  name?: string;
  /** 处理时间 */
  submitTime?: string;
};

/**
 * OpenAPI 组件类型：记录问题发生原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemCauseInfoV2
 */
export type WorkOrderServiceProblemCauseInfoV2 = {
  /** 对象实例id */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** 是否在管理范围 */
  inMeoiScope?: boolean;
  /** 对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实例所在空间 */
  spaceLocalName?: string;
  /** 问题名称 */
  problemName?: string;
  /** 是否自定义 */
  isCustom?: boolean;
};

/**
 * OpenAPI 组件类型：RListTroubleshootingOrderDataVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListTroubleshootingOrderDataVo
 */
export type WorkOrderServiceRListTroubleshootingOrderDataVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceTroubleshootingOrderDataVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：引发的问题及影响
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RelatedProblemV2
 */
export type WorkOrderServiceRelatedProblemV2 = {
  /** 对象实例id */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** 是否在管理范围 */
  inMeoiScope?: boolean;
  /** 对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实例所在空间 */
  spaceLocalName?: string;
  /** 问题名称 */
  problemName?: string;
};

/**
 * OpenAPI 组件类型：报事对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairInfoV2
 */
export type WorkOrderServiceRepairInfoV2 = {
  /** 姓名 */
  name?: string;
  /** 岗位信息 */
  positions?: string;
  /** 联系电话 */
  contactNumber?: string;
  /** 报修时间 */
  repairTime?: string;
};

/**
 * OpenAPI 组件类型：方案集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairPlanInfoV2
 */
export type WorkOrderServiceRepairPlanInfoV2 = {
  /** 维修方案名称 */
  taskName?: string;
  /** 是否自定义 */
  isCustom?: boolean;
};

/**
 * OpenAPI 组件类型：维修方案
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairPlanV2
 */
export type WorkOrderServiceRepairPlanV2 = {
  /** 对象实例id */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** 是否在管理范围 */
  inMeoiScope?: boolean;
  /** 对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实例所在空间 */
  spaceLocalName?: string;
  /** 方案集合 */
  repairPlanInfos?: WorkOrderServiceRepairPlanInfoV2[];
  /** 预计支出 */
  estimatedCost?: number;
  /** 实际支出 */
  actualCost?: number;
  /** 维修前拍摄的照片 */
  preRepairPhoto?: string[];
  /** 维修后拍摄的照片 */
  postRepairPhoto?: string[];
};

/**
 * OpenAPI 组件类型：报修对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportObj
 */
export type WorkOrderServiceReportObj = {
  /** 对象id */
  objId?: string;
  /** 对象名称 */
  objName: string;
  /** 对象类型(空间实例:space;空间类:spaceclass;自定义空间:tempspace) */
  objType: string;
  /** 楼层id(自定义空间为null) */
  floorId?: string;
  /** 建筑id */
  buildingId: string;
  /** 位置名称(建筑名称+楼层名称+空间名称) */
  positionName: string;
  /** 空间id集合[建筑id,楼层id,一级空间分类id,二级空间分类id,三级空间分类id,空间实例id/自定义空间名称](仅用于用户报事管理迭代搜索) */
  positionIds?: string[];
  lastLevelSpaceType?: WorkOrderServiceSpaceType;
};

/**
 * OpenAPI 组件类型：报事类型
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportType
 */
export type WorkOrderServiceReportType = {
  /** 报事类型编码 */
  code?: string;
  /** 报事类型名称 */
  name?: string;
  /** 报事类型层级 */
  level?: string;
  /** 上级报事类型 */
  parents?: WorkOrderServiceReportType[];
  problemNature?: WorkOrderServiceProblemNature;
};

/**
 * OpenAPI 组件类型：空间分类集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpaceType
 */
export type WorkOrderServiceSpaceType = {
  /** 空间类型id */
  id: string;
  /** 空间类型名称 */
  name: string;
};

/**
 * OpenAPI 组件类型：任务信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskDataInfoV2
 */
export type WorkOrderServiceTaskDataInfoV2 = {
  /** 任务Id */
  taskId?: string;
  /** 问题名称 */
  problemName?: string;
  /** 是否解决问题 */
  isResolved?: boolean;
  /** 未解决原因 */
  unresolvedReason?: string;
  /** 图片 */
  images?: string[];
};

/**
 * OpenAPI 组件类型：任务反馈信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskFeedbackInfoV2
 */
export type WorkOrderServiceTaskFeedbackInfoV2 = {
  /** 对象实例id */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** 是否在管理范围 */
  inMeoiScope?: boolean;
  /** 实例所在空间 */
  spaceLocalName?: string;
  /** 对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 任务信息 */
  taskDataInfoList?: WorkOrderServiceTaskDataInfoV2[];
};

/**
 * OpenAPI 组件类型：工单异常终止信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TerminatedAbnormally
 */
export type WorkOrderServiceTerminatedAbnormally = {
  handler?: WorkOrderServiceHandler;
  /** 工单关闭原因 */
  reason?: "FAKE_ALARM" | "RECOVERED" | "IGNORE";
  /** 备注 */
  remark?: string;
};

/**
 * OpenAPI 组件类型：排查处理单Vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TroubleshootingOrderDataVo
 */
export type WorkOrderServiceTroubleshootingOrderDataVo = {
  /** 工单id */
  orderId?: string;
  /** 工单状态 */
  orderState?: string;
  /** 响应状态: UN_ACTION(未响应), TIMED_OUT_UN_ACTION(超时未响应), TIMED_OUT_ACTION(超时响应), ON_TIME_ACTION(按时响应) */
  actionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION";
  /** 是否逾期:0-未逾期，1-已逾期 */
  overdueFlag?: string;
  /** 工单IOT类型 */
  workOrderIotType?: "NON_IOT" | "IOT_ALARM_VERIFICATION" | "IOT_CANCEL_ALARM_VERIFICATION" | "OPS_IOT" | "SELF_REPAIR";
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工作类型分类编码-数字 */
  workTypeCode?: string;
  userReportWoBodyDto?: WorkOrderServiceUserReportWoBodyDto;
  /** 创建时间 */
  createTime?: string;
  /** 要求完成时间 */
  requiredCompletionTime?: string;
  /** 初始问题 */
  problemInfos?: WorkOrderServiceV2[];
  assignmentInfo?: WorkOrderServiceAssignmentInfo;
  troubleshootingOrderInfo?: WorkOrderServiceTroubleshootingOrderInfo;
  approvalInfo?: WorkOrderServiceApprovalInfo;
  terminatedAbnormally?: WorkOrderServiceTerminatedAbnormally;
  /** 工单执行人信息 */
  executePersonInfoList?: WorkOrderServicePersonInfo[];
};

/**
 * OpenAPI 组件类型：排查维修信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TroubleshootingOrderInfo
 */
export type WorkOrderServiceTroubleshootingOrderInfo = {
  iotMonitoringResults?: WorkOrderServiceIotMonitoringResultsDTO;
  handler?: WorkOrderServiceHandler;
  /** 引发的问题及影响 */
  relatedProblem?: WorkOrderServiceRelatedProblemV2[];
  /** 问题及影响备注说明 */
  impactDescription?: string;
  /** 记录问题发生原因 */
  problemCauseInfo?: WorkOrderServiceProblemCauseInfoV2[];
  /** 问题发生原因备注说明 */
  causeDescription?: string;
  /** 维修方案 */
  repairPlan?: WorkOrderServiceRepairPlanV2[];
  /** 申领工具 */
  tools?: WorkOrderServiceWoOrderWithdrawalDto[];
  /** 申领耗材 */
  consumable?: WorkOrderServiceWoOrderWithdrawalDto[];
};

/**
 * OpenAPI 组件类型：报事信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportWoBodyDto
 */
export type WorkOrderServiceUserReportWoBodyDto = {
  reportType?: WorkOrderServiceReportType;
  /** 预约时间(yyyyMMddHHmmss) */
  appointmentTime?: string;
  /** 联系电话 */
  phone?: string;
  /** 事项描述 */
  description?: string;
  /** 报事照片 */
  photos?: string[];
  /** 报事视频 */
  videos?: WorkOrderServiceVideo[];
  /** 处理图片 */
  completionPicture?: string[];
  /** 处理视频 */
  completionVideo?: WorkOrderServiceVideo[];
  /** 报事人 */
  contacts?: string;
  reportObj?: WorkOrderServiceReportObj;
  /** 处理反馈 */
  completionFeedback?: string;
  /** 问题解决状态(0-未解决;1-已解决) */
  problemSolutionState?: string;
  /** 报事位置-空间标签 */
  positionAssert?: WorkOrderServicePositionAssert[];
  /** 编辑人ID */
  editPersonId?: string;
  /** 编辑时间(yyyyMMddHHmmss) */
  editTime?: string;
};

/**
 * OpenAPI 组件类型：工单物流工具Dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WoOrderWithdrawalDto
 */
export type WorkOrderServiceWoOrderWithdrawalDto = {
  /** 工单编码 */
  orderId?: string;
  /** 申领类型 */
  type?: "TOOL" | "CONSUMABLE";
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 单价 */
  unitPrice?: number;
  /** 单位 */
  unit?: string;
  /** 申领数量 */
  num?: number;
  /** 是否审批通过 */
  isApproved?: boolean;
};

/**
 * OpenAPI 组件类型：初始问题
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/初始问题V2
 */
export type WorkOrderServiceV2 = {
  /** 任务id */
  taskId?: string;
  /** 来源id */
  sourceId?: string;
  /** 上报来源类型 */
  sourceType?: string;
  /** 对象实例id */
  instanceId?: string;
  /** 是否在管理范围 */
  inMeoiScope?: boolean;
  /** 对象实例名称 */
  instanceName?: string;
  /** 对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实例所在空间 */
  spaceLocalName?: string;
  /** 问题名称 */
  problemName?: string;
  /** 是否始发问题 */
  isOrigin?: boolean;
  /** 报修来源 */
  warrantySource?: string;
  /** 现场照片 */
  sitePhotos?: string[];
  /** 备注信息 */
  remarkInfo?: string;
  repairInfo?: WorkOrderServiceRepairInfoV2;
  /** 是否解决问题 */
  isResolved?: boolean;
};

/**
 * OpenAPI 组件类型：工单可接人员查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderReceiverQueryDto
 */
export type WorkOrderServiceWorkOrderReceiverQueryDto = {
  /** 异常事件id */
  exceptionEventId: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderReceiverVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderReceiverVo
 */
export type WorkOrderServiceRListWorkOrderReceiverVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderReceiverVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderReceiverVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderReceiverVo
 */
export type WorkOrderServiceWorkOrderReceiverVo = {
  /** 工单id */
  orderId?: string;
  /** 可接工单人员集合 */
  personIds?: string[];
};

/**
 * OpenAPI 组件类型：WorkOrderPageParamDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderPageParamDto
 */
export type WorkOrderServiceWorkOrderPageParamDto = {
  /** 项目id */
  projectId: string;
  /** 时间类型周期时间类型-creat_time:创建时间、ask_end_time:要求完成时间、real_finish_time:实际完成时间 */
  timeType?: "create_time" | "ask_end_time" | "real_finish_time";
  /** 开始时间 yyyyMMddHHmmss */
  startTime?: string;
  /** 结束时间 yyyyMMddHHmmss */
  endTime?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 工单状态集合 */
  orderStates?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10"[];
  /** 工作类型分类集合 */
  workTypes?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE"[];
  /** 是否逾期(0:否;1:是) */
  overdueFlag?: string;
  /** 关键字(工单名称、工单编号) */
  keyword?: string;
  /** 排序字段(create_time:创建时间;ask_end_time:要求结束时间。默认create_time) */
  orderField?: "create_time" | "ask_end_time";
  /** 排序类型(asc:顺序;desc:倒序。默认desc) */
  orderBy?: "asc" | "desc";
  /** 当前页码 */
  page: number;
  /** 每页大小 */
  pageSize: number;
};

/**
 * OpenAPI 组件类型：RCollectionWorkOrderPageResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionWorkOrderPageResultVo
 */
export type WorkOrderServiceRCollectionWorkOrderPageResultVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderPageResultVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderPageResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderPageResultVo
 */
export type WorkOrderServiceWorkOrderPageResultVo = {
  /** 项目id */
  projectId?: string;
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  woName?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 处理专业 */
  processMajorCode?: string;
  /** 工单状态 */
  orderStatus?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 工单状态名称 */
  orderStatusName?: string;
  /** 工单类型分类 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工作类型分类名称 */
  workTypeName?: string;
  /** 创建时间 yyyyMMddHHmmss */
  createTime?: string;
  /** 要求开始时间  yyyyMMddHHmmss */
  askStartTime?: string;
  /** 要求结束时间  yyyyMMddHHmmss */
  askEndTime?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 执行人名称 */
  executeNames?: string[];
  /** 是否逾期(0:否;1:是) */
  overdueFlag?: string;
};

/**
 * OpenAPI 组件类型：RepairWorkOrderQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairWorkOrderQueryDto
 */
export type WorkOrderServiceRepairWorkOrderQueryDto = {
  /** 对象实例id */
  objectId?: string[];
};

/**
 * OpenAPI 组件类型：执行人信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Executor
 */
export type WorkOrderServiceExecutor = {
  /** 执行人id */
  executorId?: string;
  /** 执行人名称 */
  executorName?: string;
};

/**
 * OpenAPI 组件类型：RCollectionRepairWorkOrderResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionRepairWorkOrderResultVo
 */
export type WorkOrderServiceRCollectionRepairWorkOrderResultVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceRepairWorkOrderResultVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RepairWorkOrderResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairWorkOrderResultVo
 */
export type WorkOrderServiceRepairWorkOrderResultVo = {
  /** 对象实例id */
  objectId?: string;
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  woName?: string;
  /** 工单类型 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单状态 */
  orderStatus?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 要求结束时间 */
  askEndTime?: string;
  /** 创建时间 */
  createTime?: string;
  /** 执行人信息 */
  executors?: WorkOrderServiceExecutor[];
};

/**
 * OpenAPI 组件类型：WorkOrderPageQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderPageQueryDto
 */
export type WorkOrderServiceWorkOrderPageQueryDto = {
  /** 项目id */
  projectId: string;
  /** 开始时间，yyyyMMddHHmmss */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
  /** 时间过滤类型：askEnd-期望完成时间；relEnd-实际完成时间 */
  timeFilterType?: "AskEnd" | "RelEnd" | "AskStart" | "CreateTime";
  /** 工单状态集合 */
  orderStates?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10"[];
  /** 工单类型集合 */
  workTypes?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE"[];
  /** 工单编码集 */
  orderIds?: string[];
  /** pageNum */
  pageNum: number;
  /** pageSize,默认值：200 */
  pageSize?: number;
};

/**
 * OpenAPI 组件类型：RCollectionWorkOrderPageQueryVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionWorkOrderPageQueryVo
 */
export type WorkOrderServiceRCollectionWorkOrderPageQueryVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderPageQueryVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderPageQueryVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderPageQueryVo
 */
export type WorkOrderServiceWorkOrderPageQueryVo = {
  /** 创建时间，yyyyMMddHHmmss */
  createTime?: string;
  /** 工单编码 */
  orderId?: string;
  /** 要求完成时间，yyyyMMddHHmmss */
  askEndTime?: string;
  /** 实际完成时间：yyyyMMddHHmmss */
  realFinishTime?: string;
  /** 工单类型分类 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单状态 */
  orderStatus?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 工单专业编码 */
  majorCode?: string;
  /** 处理专业 */
  processMajorCode?: string;
  /** 策略事项id */
  strategyItemIds?: string[];
};

/**
 * OpenAPI 组件类型：路程列表
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/FlowVo
 */
export type WorkOrderServiceFlowVo = {
  /** 流程编码 */
  flowId?: string;
  /** 流程名称 */
  flowName?: string;
};

/**
 * OpenAPI 组件类型：JobTypeFlowTreeVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JobTypeFlowTreeVo
 */
export type WorkOrderServiceJobTypeFlowTreeVo = {
  /** 工作类型分类 */
  workType?: string;
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 路程列表 */
  flowList?: WorkOrderServiceFlowVo[];
};

/**
 * OpenAPI 组件类型：RListJobTypeFlowTreeVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListJobTypeFlowTreeVo
 */
export type WorkOrderServiceRListJobTypeFlowTreeVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceJobTypeFlowTreeVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderHisQueryDTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderHisQueryDTO
 */
export type WorkOrderServiceWorkOrderHisQueryDTO = {
  /** 13位时间戳,<= 工单创建时间 */
  timeRage: string;
};

/**
 * OpenAPI 组件类型：可执行措施信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExeMeasureInfo
 */
export type WorkOrderServiceExeMeasureInfo = {
  /** 可执行措施id */
  exeMeasureId?: string;
  /** 可执行措施名称 */
  exeMeasureName?: string;
};

/**
 * OpenAPI 组件类型：对象策略费用信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ObjectMeasureInfo
 */
export type WorkOrderServiceObjectMeasureInfo = {
  /** 任务id */
  taskId?: string;
  /** 对象实例id */
  objectId?: string;
  /** 可执行措施集合 */
  exeMeasureList?: WorkOrderServiceExeMeasureInfo[];
  /** 维修金额,排查处理单取实际费用 */
  repairCost?: number;
  executor?: WorkOrderServiceExecutor;
};

/**
 * OpenAPI 组件类型：RListWorkOrderCompleteInfoDTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderCompleteInfoDTO
 */
export type WorkOrderServiceRListWorkOrderCompleteInfoDTO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderCompleteInfoDTO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderCompleteInfoDTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderCompleteInfoDTO
 */
export type WorkOrderServiceWorkOrderCompleteInfoDTO = {
  /** 工单编码 */
  orderId?: string;
  /** 工单名称 */
  woName?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 创建时间 */
  createTime?: string;
  /** 工作类型分类 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 对象策略费用集合 */
  objectMeasureInfoList?: WorkOrderServiceObjectMeasureInfo[];
};

/**
 * OpenAPI 组件类型：CodeAndNameVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/CodeAndNameVo
 */
export type WorkOrderServiceCodeAndNameVo = {
  code?: string;
  name?: string;
  type?: string;
  content?: string;
  sort?: number;
};

/**
 * OpenAPI 组件类型：RListCodeAndNameVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListCodeAndNameVo
 */
export type WorkOrderServiceRListCodeAndNameVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceCodeAndNameVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：基于工单id集合返回工单列表数据
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderCompleteInfoQueryDto
 */
export type WorkOrderServiceWorkOrderCompleteInfoQueryDto = {
  /** 工单编码集合 */
  orderIdSet: string[];
};

/**
 * OpenAPI 组件类型：RListWorkOrderCompleteInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderCompleteInfoVo
 */
export type WorkOrderServiceRListWorkOrderCompleteInfoVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderCompleteInfoVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderCompleteInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderCompleteInfoVo
 */
export type WorkOrderServiceWorkOrderCompleteInfoVo = {
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  woName?: string;
  /** 工单类型 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 执行人信息集合 */
  executors?: WorkOrderServiceExecutor[];
  /** 维修费用 */
  repairCost?: number;
};

/**
 * OpenAPI 组件类型：WorkOrderAppQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderAppQueryDto
 */
export type WorkOrderServiceWorkOrderAppQueryDto = {
  /** page */
  page: number;
  pageSize: number;
  /** 搜索内容 */
  searchName?: string;
  /** 人员id */
  personId?: string;
  /** 项目id */
  projectId?: string;
  /** 路由控制编码 */
  recommendControlCode?: string;
  /** 工作类型id */
  jobTypeIds?: string[];
  /** 处理专业编码集 */
  processMajorCodes?: string[];
  /** 逾期标识 */
  overdueFlag?: string;
  /** 时间查询类型 */
  timeFilterType?: "AskEnd" | "RelEnd" | "AskStart" | "CreateTime";
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
  /** 排序字段 */
  orderField?: string;
  /** 正序/倒序 */
  orderBy?: string;
};

/**
 * OpenAPI 组件类型：RCollectionObject
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionObject
 */
export type WorkOrderServiceRCollectionObject = {
  code?: string;
  result?: string;
  data?: Record<string, never>[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RWorkOrderCountDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderCountDto
 */
export type WorkOrderServiceRWorkOrderCountDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderCountDto;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderCountDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderCountDto
 */
export type WorkOrderServiceWorkOrderCountDto = {
  "待执行"?: number;
  "待接单"?: number;
  "待审批"?: number;
  "待指派"?: number;
  "待评价"?: number;
  "待抢单"?: number;
  "待审核"?: number;
  "总量"?: number;
};

/**
 * OpenAPI 组件类型：查询对象实例下的任务query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/InstanceTaskPageQuery
 */
export type WorkOrderServiceInstanceTaskPageQuery = {
  /** 工单id */
  orderId: string;
  /** 空间key */
  spaceUniKey: string;
  /** 对象实例id */
  taskObjectId: string;
  /** pageNum */
  pageNum: number;
  /** pageSize,默认值：200 */
  pageSize?: number;
};

/**
 * OpenAPI 组件类型：反馈结果描述
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/GradedOrScoreOption
 */
export type WorkOrderServiceGradedOrScoreOption = {
  /** 选项id */
  optionId?: number;
  /** 选项描述 */
  optionDesc?: string;
};

/**
 * OpenAPI 组件类型：RWorkOrderSpaceTaskVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderSpaceTaskVo
 */
export type WorkOrderServiceRWorkOrderSpaceTaskVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderSpaceTaskVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：任务列表
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpaceTaskVo
 */
export type WorkOrderServiceSpaceTaskVo = {
  /** 任务ID */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 任务描述 */
  taskDesc?: string;
  /** 任务类型 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 是否已完成 */
  isFinish?: boolean;
  /** 任务现场照片集合 */
  photoImages?: string[];
  /** 任务现场视频集合 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 是否策略指定 */
  isPolicySpecified?: boolean;
  /** 维修任务集合 */
  repairs?: WorkOrderServiceSpaceTaskVo[];
  /** 任务执行类型:graded-分档反馈类,score-打分类,parameter-参数类,execute-执行类,repairAndReplace-维修更换类 */
  taskExecutionType?: "GRADED" | "SCORE" | "PARAMETER" | "EXECUTE" | "REPAIR_AND_REPLACE";
  /** 反馈结果：normal-正常,warn-超征兆,exception-异常,notTraceable-不可查,executionCompleted-执行完成,unenforceable-不可执行 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 可查-分档反馈or打分勾选结果 */
  gradedOrScoreOptions?: WorkOrderServiceGradedOrScoreOption[];
  parameterCalculateResult?: WorkOrderServiceParameterCalculateResult;
  notTraceableResult?: WorkOrderServiceEnumStructDto;
  unenforceableReason?: WorkOrderServiceEnumStructDto;
  /** 维修更换任务-维修金额 */
  repairCost?: number;
  /** 是否解决 */
  isResolved?: boolean;
  /** 备注信息 */
  remarks?: string;
  /** 处理人ID */
  handlePersonId?: string;
  /** 处理人名称 */
  handlePersonName?: string;
  /** 任务对象ID */
  taskObjectId?: string;
  /** 任务对象名称 */
  taskObjectName?: string;
  /** 任务对象类编码 */
  classCode?: string;
  /** 实际完成时间（时间戳） */
  completionTime?: string;
};

/**
 * OpenAPI 组件类型：巡检/维保空间对象下的任务vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderSpaceTaskVo
 */
export type WorkOrderServiceWorkOrderSpaceTaskVo = {
  /** 异常任务数量 */
  exceptionCount?: number;
  /** 不可执行任务数量 */
  unenforceableCount?: number;
  /** 任务列表 */
  spaceTasks?: WorkOrderServiceSpaceTaskVo[];
};

/**
 * OpenAPI 组件类型：措施创建任务dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MeasureTaskCreateDto
 */
export type WorkOrderServiceMeasureTaskCreateDto = {
  /** 枚举：定阈值诊断、定阈值维修/更换、周期型维修/更换 */
  businessType: "DIAGNOSE" | "REPAIR" | "CYCLE_REPAIR";
  /** 已有策略措施id (非自定义措施必传) */
  exeMeasureId?: string;
  /** 知识措施id (非自定义引用措施必传) */
  rccMeasureId?: string;
  /** 是否自定义 */
  isCustom: boolean;
  /** 措施类型 */
  measureType: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施名称 */
  measureName: string;
  /** 措施描述 */
  measureDesc: string;
};

/**
 * OpenAPI 组件类型：适用对象集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ObjectDto
 */
export type WorkOrderServiceObjectDto = {
  buildingId?: string;
  buildingName?: string;
  /** 对象实例id */
  instanceId?: string;
  classCode?: string;
  floorId?: string;
  floorName?: string;
  floorSequenceId?: string;
  spaceId?: string;
  spaceName?: string;
  nodeCode?: string;
  /** 末级是空间key: 建筑id/楼层id/空间id,若为空用other替换 */
  spaceKey?: string;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 自定义实例类型,为空时不是自定义实例 */
  deviceCustomType?: string;
  name?: string;
  /** 对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象所在位置 */
  location?: string;
};

/**
 * OpenAPI 组件类型：策略事项集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/StrategyItemInfoDto
 */
export type WorkOrderServiceStrategyItemInfoDto = {
  /** 策略事项id（引用措施必传） */
  strategyItemId?: string;
  /** 是否外委 */
  isOutsource?: boolean;
  /** 是否独立策略 */
  independence?: boolean;
  /** 三级策略编码 */
  strategyCategoryId?: string;
  /** 枚举：定阈值诊断、定阈值维修/更换、周期型维修/更换 */
  businessType: "DIAGNOSE" | "REPAIR" | "CYCLE_REPAIR";
  observeMeasure?: WorkOrderServiceMeasureTaskCreateDto;
  repairMeasure?: WorkOrderServiceMeasureTaskCreateDto;
  /** 适用对象集合 */
  objs: WorkOrderServiceObjectDto[];
};

/**
 * OpenAPI 组件类型：TemporaryPlanTaskOrderCreateRequest
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TemporaryPlanTaskOrderCreateRequest
 */
export type WorkOrderServiceTemporaryPlanTaskOrderCreateRequest = {
  /** 工单分类类型：取大写字符串的值 */
  sopType: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单名称 */
  workOrderName: string;
  /** 要求结束时间 */
  requiredEndTime: string;
  /** 流程id */
  flowId: string;
  /** 创建人id */
  personId: string;
  /** 创建人名称 */
  personName: string;
  /** 策略事项集合 */
  strategyItems: WorkOrderServiceStrategyItemInfoDto[];
  /** 处理专业 */
  processMajorCode: string;
};

/**
 * OpenAPI 组件类型：参数测量，对象过程参数
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ObjectParameterVo
 */
export type WorkOrderServiceObjectParameterVo = {
  /** 对象ID */
  objectId?: string;
  /** 对象名称 */
  objectName?: string;
  /** 参数类，对象类型 */
  taskObjectType?: "HIDDEN_DANGER" | "OBSERVE";
  /** 关联对象id集合，隐患对象时存储关联的观测对象，观测对象时存储关联的隐患对象 */
  linkObjectIds?: string[];
  /** 过程参数信息集合 */
  parameters?: WorkOrderServiceParameter[];
};

/**
 * OpenAPI 组件类型：过程参数信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Parameter
 */
export type WorkOrderServiceParameter = {
  /** 对象过程参数主键ID */
  objectParamId?: string;
  /** 过程参数ID */
  processParameterId?: string;
  /** 过程参数名称 */
  processParameterName?: string;
  /** 过程参数值 */
  processParameterValue?: number;
  /** 过程参数单位 */
  processParameterUnit?: string;
  /** 是否静态参数：默认否 */
  isStaticParameter?: boolean;
  /** 是否不可查：默认可查 */
  isTraceable?: boolean;
};

/**
 * OpenAPI 组件类型：计划任务提交dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PlanTaskSubmitDto
 */
export type WorkOrderServicePlanTaskSubmitDto = {
  /** 工单编码 */
  orderId?: string;
  /** 任务集合 */
  taskSubmits?: WorkOrderServiceTaskSubmitDto[];
  /** 参数测量，对象过程参数填写信息 */
  objectParameters?: WorkOrderServiceObjectParameterVo[];
  /** 处理人ID */
  handlePersonId?: string;
};

/**
 * OpenAPI 组件类型：任务dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskSubmitDto
 */
export type WorkOrderServiceTaskSubmitDto = {
  /** 任务ID */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 任务描述 */
  taskDesc?: string;
  /** 处理专业 */
  processMajorCode?: string;
  /** 是否用户选择专业 */
  isUserSelectedMajor?: boolean;
  /** 空间key : 建筑id/楼层id/空间id,若为空用other替换 */
  taskObjectSpaceKey?: string;
  /** 是否完成 */
  isFinish?: boolean;
  /** 任务对象ID */
  taskObjectId?: string;
  /** 自定义实例类型,为空时不是自定义实例 */
  deviceCustomType?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  taskObject?: WorkOrderServiceTaskObjectDto;
  /** 对象类编码 */
  classCode?: string;
  /** 可执行措施ID */
  exeMeasureId?: string;
  /** rcc措施id */
  rccMeasureId?: string;
  /** 是否自定义 */
  isCustom?: boolean;
  /** 维修任务集合 */
  repairs?: WorkOrderServiceTaskSubmitDto[];
  /** 任务执行类型:graded-分档反馈类,score-打分类,parameter-参数类,execute-执行类,repairAndReplace-维修更换类 */
  taskExecutionType?: "GRADED" | "SCORE" | "PARAMETER" | "EXECUTE" | "REPAIR_AND_REPLACE";
  /** 反馈结果：normal-正常,warn-超征兆,exception-异常,notTraceable-不可查,executionCompleted-执行完成,unenforceable-不可执行 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 可查-分档反馈or打分勾选结果 */
  gradedOrScoreOptions?: WorkOrderServiceGradedOrScoreOption[];
  /** 可查-参数类计算结果 */
  parameterCalculateResult?: number;
  notTraceableResult?: WorkOrderServiceEnumStructDto;
  unenforceableReason?: WorkOrderServiceEnumStructDto;
  /** 维修更换任务-维修金额 */
  repairCost?: number;
  /** 是否解决 */
  isResolved?: boolean;
  /** 是否打卡 */
  isPunched?: boolean;
  /** 备注信息 */
  remarks?: string;
  /** 任务现场照片集合 */
  photoImages?: string[];
  /** 任务现场视频集合 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 空间打卡照片集合 */
  spacePunchingImages?: string[];
  /** 对象打卡照片集合 */
  objectPunchingImages?: string[];
  /** 打卡时间 */
  punchingTime?: string;
  /** 任务完成时间 */
  completionTime?: string;
  /** 解决时间 */
  resolvedTime?: string;
  /** 处理人ID */
  handlePersonId?: string;
};

/**
 * OpenAPI 组件类型：临时维修任务对象集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MaintenanceObjectDto
 */
export type WorkOrderServiceMaintenanceObjectDto = {
  buildingId?: string;
  buildingName?: string;
  /** 对象实例id */
  instanceId?: string;
  classCode?: string;
  floorId?: string;
  floorName?: string;
  floorSequenceId?: string;
  spaceId?: string;
  spaceName?: string;
  nodeCode?: string;
  /** 末级是空间key: 建筑id/楼层id/空间id,若为空用other替换 */
  spaceKey?: string;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 自定义实例类型,为空时不是自定义实例 */
  deviceCustomType?: string;
  /** 临时维修任务集合 */
  maintenanceTasks?: WorkOrderServiceMeasureTaskCreateDto[];
  name?: string;
  /** 对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象所在位置 */
  location?: string;
};

/**
 * OpenAPI 组件类型：临时维修工单创建dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MaintenanceTaskOrderCreateDto
 */
export type WorkOrderServiceMaintenanceTaskOrderCreateDto = {
  /** 工单分类类型：取大写字符串的值 */
  sopType: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单名称 */
  workOrderName: string;
  /** 要求结束时间 */
  requiredEndTime: string;
  /** 流程id */
  flowId: string;
  /** 创建人id */
  personId: string;
  /** 创建人名称 */
  personName: string;
  /** 临时维修任务对象集合 */
  objects: WorkOrderServiceMaintenanceObjectDto[];
  /** 处理专业 */
  processMajorCode: string;
};

/**
 * OpenAPI 组件类型：ObserveObject
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ObserveObject
 */
export type WorkOrderServiceObserveObject = {
  processParameterId?: string;
  observeObjectId?: string;
};

/**
 * OpenAPI 组件类型：RMapStringMapStringListObserveObject
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RMapStringMapStringListObserveObject
 */
export type WorkOrderServiceRMapStringMapStringListObserveObject = {
  code?: string;
  result?: string;
  data?: Record<string, Record<string, WorkOrderServiceObserveObject[]>>;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：ExceptionEventChangeDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExceptionEventChangeDto
 */
export type WorkOrderServiceExceptionEventChangeDto = {
  id?: number;
  eventNum?: string;
};

/**
 * OpenAPI 组件类型：PjRiskEvaluateRecordFreshMsgDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PjRiskEvaluateRecordFreshMsgDto
 */
export type WorkOrderServicePjRiskEvaluateRecordFreshMsgDto = {
  id?: number;
  recordSourceId?: string;
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  needAICheck?: boolean;
  conflictState?: boolean;
  recordTime?: string;
  eventInfo?: WorkOrderServiceExceptionEventChangeDto[];
};

/**
 * OpenAPI 组件类型：RoutingChangeDetail
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RoutingChangeDetail
 */
export type WorkOrderServiceRoutingChangeDetail = {
  routingControlId?: string;
  personId?: string;
  controlCode?: "RECEIVE" | "ROBBING" | "CLASSIFY" | "ASSIGN" | "EXECUTE" | "AUDIT_PLAN" | "AUDIT_CLOSE" | "APPROVAL_CLOSE" | "APPROVAL_ADD_PEOPLE" | "APPROVAL_REPLACE_PEOPLE" | "AUDIT_STOP" | "APPROVAL_STOP" | "AUDIT_DELAY" | "APPROVAL_DELAY" | "EVALUATE";
};

/**
 * OpenAPI 组件类型：RoutingControlChangeEventDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RoutingControlChangeEventDto
 */
export type WorkOrderServiceRoutingControlChangeEventDto = {
  groupCode?: string;
  uniqueId?: string;
  orderId?: string;
  changeTypeEnum?: "CREATE" | "CLOSE" | "OPERATE_CLOSE" | "CLOSE_INVALID" | "OPERATE" | "NOT_OPERATE" | "PAUSE" | "RESET";
  routingChangeDetailList?: WorkOrderServiceRoutingChangeDetail[];
};

/**
 * OpenAPI 组件类型：异常事件信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExceptionEventInfo
 */
export type WorkOrderServiceExceptionEventInfo = {
  /** 异常事件id */
  id?: string;
  /** 异常事件num */
  eventNum?: string;
  /** 异常事件名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：逾期原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Reason
 */
export type WorkOrderServiceReason = {
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 描述 */
  desc?: string;
};

/**
 * OpenAPI 组件类型：创建工单基础字段
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SystemCreateWorkOrderDto
 */
export type WorkOrderServiceSystemCreateWorkOrderDto = {
  /** 工单主键 */
  orderId?: string;
  /** 工单名称 */
  workName?: string;
  /** 项目id */
  projectId?: string;
  /** 工单流程id|风险流程id */
  flowId?: string;
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 风险流程校验hash值 */
  flowInfoHash?: string;
  /** 要求开始时间 */
  requiredBeginTime?: string;
  /** 要求结束时间 */
  requiredCompletionTime?: string;
  workOrderBody?: WorkOrderServiceWorkOrderBodyDto;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 业务分类人 */
  classifyPersonIds?: string[];
  /** 响应类型: 无需响应:NO_RESPONSE,接单即响应:RESPOND_ON_ACCEPT, 拍照确认:TAKE_PHOTO_CONFIRM, 扫码确认:SCAN_CODE_CONFIRM */
  actionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  /** 要求响应时间 */
  requiredActionTime?: string;
  /** 创建人 */
  creatorBy?: string;
  /** 创建人名称 */
  creatorName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 最后一次更新人 */
  lastUpdateBy?: string;
  selfRepair?: boolean;
};

/**
 * OpenAPI 组件类型：TagContext
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TagContext
 */
export type WorkOrderServiceTagContext = {
  tagId?: string;
  tagName?: string;
  tagProperties?: WorkOrderServiceTagProperties;
};

/**
 * OpenAPI 组件类型：TagInfo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TagInfo
 */
export type WorkOrderServiceTagInfo = {
  buildTags?: WorkOrderServiceTagContext[];
};

/**
 * OpenAPI 组件类型：TagProperties
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TagProperties
 */
export type WorkOrderServiceTagProperties = Record<string, never>;

/**
 * OpenAPI 组件类型：解决超时原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimeoutInfoDTO
 */
export type WorkOrderServiceTimeoutInfoDTO = {
  reason?: WorkOrderServiceReason;
  /** 更新人id */
  updateBy?: string;
  /** 登录账号 */
  account?: string;
};

/**
 * OpenAPI 组件类型：工单附表实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderBodyDto
 */
export type WorkOrderServiceWorkOrderBodyDto = {
  /** 工单主键 */
  orderId?: string;
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  exceptionEventInfo?: WorkOrderServiceExceptionEventInfo;
  problemLevel?: WorkOrderServiceIssueLevelDto;
  remarkInfo?: WorkOrderServiceRemarkInfo;
  tagInfo?: WorkOrderServiceTagInfo;
  /** 指派人id集合 */
  initializeFlowPerson?: string[];
  /** 审批人id集合 */
  approverPerson?: string[];
  abnormalCloseInfo?: WorkOrderServiceAbnormalClosureInfo;
  /** 工单IOT类型 */
  workOrderIotType?: "NON_IOT" | "IOT_ALARM_VERIFICATION" | "IOT_CANCEL_ALARM_VERIFICATION" | "OPS_IOT" | "SELF_REPAIR";
  iotMonitoringResults?: WorkOrderServiceIotMonitoringResultsDTO;
  /** 创建时间 */
  createTime?: string;
  /** 最后一次更新人 */
  lastUpdateBy?: string;
  /** 最后一次更新时间 */
  lastUpdateTime?: string;
  /** 审核层级对象 */
  auditStep?: string;
  resolveTimeoutInfo?: WorkOrderServiceTimeoutInfoDTO;
};

/**
 * OpenAPI 组件类型：WorkOrderObjectParameterMessageDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderObjectParameterMessageDto
 */
export type WorkOrderServiceWorkOrderObjectParameterMessageDto = {
  /** 工单id */
  orderId?: string;
  /** 工单任务扩展信息 */
  workOrderTaskPlans?: WorkOrderServiceWorkOrderTaskPlanMessageDto[];
  /** 工单任务信息 */
  workOrderTaskMessageDtoList?: WorkOrderServiceWorkOrderTaskMessageDto[];
  systemCreateWorkOrderDto?: WorkOrderServiceSystemCreateWorkOrderDto;
  tagInfo?: WorkOrderServiceTagInfo;
};

/**
 * OpenAPI 组件类型：工单任务信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskMessageDto
 */
export type WorkOrderServiceWorkOrderTaskMessageDto = {
  taskId?: string;
  taskName?: string;
  taskObjectId?: string;
  workOrderId?: string;
  exeMeasureId?: string;
  processMajorCode?: string;
  projectId?: string;
};

/**
 * OpenAPI 组件类型：工单任务扩展信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskPlanMessageDto
 */
export type WorkOrderServiceWorkOrderTaskPlanMessageDto = {
  taskId?: string;
  workOrderId?: string;
  taskExecutionType?: "GRADED" | "SCORE" | "PARAMETER" | "EXECUTE" | "REPAIR_AND_REPLACE";
  observeObjectInfo?: WorkOrderServiceObserveObject[];
};

/**
 * OpenAPI 组件类型：FloorDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/FloorDto
 */
export type WorkOrderServiceFloorDto = {
  floorId?: string;
  floorName?: string;
  floorSequenceID?: string;
};

/**
 * OpenAPI 组件类型：ObjectAggregateDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ObjectAggregateDto
 */
export type WorkOrderServiceObjectAggregateDto = {
  id?: string;
  projectId?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  buildingId?: string;
  projectName?: string;
  buildingName?: string;
  space?: WorkOrderServiceSpaceDto[];
  floor?: WorkOrderServiceFloorDto[];
};

/**
 * OpenAPI 组件类型：RListObjectAggregateDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListObjectAggregateDto
 */
export type WorkOrderServiceRListObjectAggregateDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceObjectAggregateDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：SpaceDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpaceDto
 */
export type WorkOrderServiceSpaceDto = {
  spaceId?: string;
  spaceName?: string;
  classCode?: string;
};

/**
 * OpenAPI 组件类型：RMapStringTaskObjectDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RMapStringTaskObjectDto
 */
export type WorkOrderServiceRMapStringTaskObjectDto = {
  code?: string;
  result?: string;
  data?: Record<string, WorkOrderServiceTaskObjectDto>;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderObjectFeedback
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderObjectFeedback
 */
export type WorkOrderServiceWorkOrderObjectFeedback = {
  workOrderId?: string;
  objectId?: string;
  preRepairPhoto?: string[];
  postRepairPhoto?: string[];
  preRepairVideos?: WorkOrderServiceVideo[];
  postRepairVideos?: WorkOrderServiceVideo[];
};

/**
 * OpenAPI 组件类型：RMapStringWorkOrderObjectFeedback
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RMapStringWorkOrderObjectFeedback
 */
export type WorkOrderServiceRMapStringWorkOrderObjectFeedback = {
  code?: string;
  result?: string;
  data?: Record<string, WorkOrderServiceWorkOrderObjectFeedback>;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：EEExceptionEventMsgDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/EEExceptionEventMsgDto
 */
export type WorkOrderServiceEEExceptionEventMsgDto = {
  id?: number;
  eventName?: string;
  riskMeasureAimLevel1Collect?: "E0" | "E1" | "E2" | "E3"[];
  riskMeasureAimLevel2Collect?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44"[];
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  instances?: WorkOrderServiceSimpleExceptionInstanceVo[];
  problems?: WorkOrderServiceProblemVo[];
  exceptionStartTime?: string;
  exceptionEndTime?: string;
  exceptionStatusUpdateTime?: string;
  resolvedProblemCount?: number;
  allProblemCount?: number;
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  historyHighestDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  duration?: number;
};

/**
 * OpenAPI 组件类型：ProblemVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemVo
 */
export type WorkOrderServiceProblemVo = {
  instanceId?: string;
  instanceName?: string;
  name?: string;
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  spaceIds?: string[];
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  importanceDegree?: "HIGH" | "MID" | "LOW";
  degreeAlias?: string;
  nodeName?: string;
};

/**
 * OpenAPI 组件类型：SimpleExceptionInstanceVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SimpleExceptionInstanceVo
 */
export type WorkOrderServiceSimpleExceptionInstanceVo = {
  rwdInstanceId?: string;
  rwdInstanceName?: string;
  spaceIds?: string[];
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  instanceId?: string;
  instanceName?: string;
};

/**
 * OpenAPI 组件类型：DutyPerformanceAnalysisQuery
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DutyPerformanceAnalysisQuery
 */
export type WorkOrderServiceDutyPerformanceAnalysisQuery = {
  /** 时间维度: 年度: YEAR,半年度: HALF_YEAR,季度度 SEASON,月度: MONTH */
  timeDimension: "YEAR" | "HALF_YEAR" | "SEASON" | "MONTH";
  /** 时间范围起始日期,yyyy-MM-dd */
  startTime: string;
  /** 时间范围结束日期时间,yyyy-MM-dd */
  endTime: string;
  /** 工作类型合集 */
  jobTypeIdList?: string[];
  /** 处理专业集合编码 */
  processMajorCodes?: string[];
};

/**
 * OpenAPI 组件类型：JobTypeTreeDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JobTypeTreeDto
 */
export type WorkOrderServiceJobTypeTreeDto = {
  jobTypeId?: string;
  jobTypeName?: string;
};

/**
 * OpenAPI 组件类型：RListWorkTypeTreeDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkTypeTreeDto
 */
export type WorkOrderServiceRListWorkTypeTreeDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkTypeTreeDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkTypeTreeDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkTypeTreeDto
 */
export type WorkOrderServiceWorkTypeTreeDto = {
  workType?: string;
  workTypeName?: string;
  jobTypeTreeList?: WorkOrderServiceJobTypeTreeDto[];
};

/**
 * OpenAPI 组件类型：TimeoutReasonUpdateDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimeoutReasonUpdateDto
 */
export type WorkOrderServiceTimeoutReasonUpdateDto = {
  /** 工单id */
  orderId: string;
  timeoutInfo: WorkOrderServiceTimeoutInfoDTO;
  /** 类型 */
  type: "ACTION" | "RESOLVE";
};

/**
 * OpenAPI 组件类型：WorkOrderAnalysisQuery
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderAnalysisQuery
 */
export type WorkOrderServiceWorkOrderAnalysisQuery = {
  /** 时间维度: 年度: YEAR,半年度: HALF_YEAR,季度度 SEASON,月度: MONTH */
  timeDimension: "YEAR" | "HALF_YEAR" | "SEASON" | "MONTH";
  /** 时间范围起始日期,yyyy-MM-dd */
  startTime: string;
  /** 时间范围结束日期时间,yyyy-MM-dd */
  endTime: string;
  /** 工作类型合集 */
  jobTypeIdList?: string[];
  /** 处理专业集合编码 */
  processMajorCodes?: string[];
  /** 页码 */
  pageNum: number;
  /** 每页行数 */
  pageSize: number;
  /** 模糊查询关键字 */
  searchParam?: string;
};

/**
 * OpenAPI 组件类型：发起人信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExecutorVo
 */
export type WorkOrderServiceExecutorVo = {
  /** id */
  personId?: string;
  /** 姓名 */
  personName?: string;
  /** 手机号 */
  personPhone?: string;
  /** 部门名称集合 */
  departments?: string[];
  /** 人员离职状态 */
  workStatus?: "ON_WORK" | "LEAVE_WORK";
};

/**
 * OpenAPI 组件类型：RCollectionWorkOrderTimeoutVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionWorkOrderTimeoutVo
 */
export type WorkOrderServiceRCollectionWorkOrderTimeoutVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderTimeoutVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：超时详情条目
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimeoutItem
 */
export type WorkOrderServiceTimeoutItem = {
  /** 超时类型 */
  timeoutType?: "ACTION" | "RESOLVE";
  /** 要求时间 */
  askTime?: string;
  /** 实际时间 */
  realTime?: string;
  timeoutReason?: WorkOrderServiceReason;
  lastUpdateBy?: WorkOrderServiceExecutorVo;
};

/**
 * OpenAPI 组件类型：WorkOrderTimeoutVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTimeoutVo
 */
export type WorkOrderServiceWorkOrderTimeoutVo = {
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  orderName?: string;
  /** 工作类型分类编码 */
  workType?: string;
  /** 接单人信息 */
  receivePersons?: WorkOrderServiceExecutorVo[];
  /** 超时详情条目 */
  timeoutItems?: WorkOrderServiceTimeoutItem[];
};

/**
 * OpenAPI 组件类型：RCollectionWorkOrderTerminatedVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionWorkOrderTerminatedVo
 */
export type WorkOrderServiceRCollectionWorkOrderTerminatedVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderTerminatedVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderTerminatedVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTerminatedVo
 */
export type WorkOrderServiceWorkOrderTerminatedVo = {
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  orderName?: string;
  /** 工作类型分类编码 */
  workType?: string;
  applyPerson?: WorkOrderServiceExecutorVo;
  /** 审批人员信息集合 */
  approvalPersons?: WorkOrderServiceExecutorVo[];
  /** 异常终止时间 */
  terminatedAbnormallyTime?: string;
  /** 要求完成时间 */
  requireCompleteTime?: string;
  /** 异常终止原因 */
  terminatedReason?: string;
};

/**
 * OpenAPI 组件类型：RCollectionWorkOrderRejectVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionWorkOrderRejectVo
 */
export type WorkOrderServiceRCollectionWorkOrderRejectVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderRejectVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：驳回详情条目
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RejectItem
 */
export type WorkOrderServiceRejectItem = {
  applyPerson?: WorkOrderServiceExecutorVo;
  rejectPerson?: WorkOrderServiceExecutorVo;
  /** 驳回时间 */
  rejectTime?: string;
  /** 驳回原因 */
  rejectReason?: string;
  /** 驳回阶段 */
  rejectStep?: "APPROVE" | "PLAN_AUDIT";
};

/**
 * OpenAPI 组件类型：WorkOrderRejectVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRejectVo
 */
export type WorkOrderServiceWorkOrderRejectVo = {
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  orderName?: string;
  /** 工作类型分类编码 */
  workType?: string;
  /** 驳回次数 */
  rejectCount?: number;
  /** 工单完成时间 */
  realFinishTime?: string;
  /** 驳回详情条目 */
  rejectItems?: WorkOrderServiceRejectItem[];
};

/**
 * OpenAPI 组件类型：更新逾期原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UpdateTaskOverdueReasonDTO
 */
export type WorkOrderServiceUpdateTaskOverdueReasonDTO = {
  /** 需更新任务id集合 */
  updateTaskId?: string[];
  /** 时间维度: 年度: YEAR,半年度: HALF_YEAR,季度度 SEASON,月度: MONTH */
  timeDimension?: "YEAR" | "HALF_YEAR" | "SEASON" | "MONTH";
  /** 时间范围起始日期,yyyy-MM-dd */
  startTime?: string;
  /** 时间范围结束日期时间,yyyy-MM-dd */
  endTime?: string;
  /** 工作类型合集 */
  jobTypeIdList?: string[];
  /** 处理专业编码合集 */
  processMajorCodes?: string[];
  /** 搜索条件 */
  searchParam?: string;
  /** 忽略任务id集合 */
  unDoTaskId?: string[];
  overDuInfo: WorkOrderServiceTimeoutInfoDTO;
};

/**
 * OpenAPI 组件类型：查询复验结果query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskQualityReviewResultQuery
 */
export type WorkOrderServiceTaskQualityReviewResultQuery = {
  /** 任务id */
  taskId: string;
};

/**
 * OpenAPI 组件类型：分档反馈参考照片
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AttachmentStruct
 */
export type WorkOrderServiceAttachmentStruct = {
  id?: string;
  name?: string;
  type?: string;
};

/**
 * OpenAPI 组件类型：异常事件信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExceptionInfo
 */
export type WorkOrderServiceExceptionInfo = {
  /** 异常事件id */
  exceptionId?: string;
  /** 响应状态: UN_ACTION(未响应), TIMED_OUT_UN_ACTION(超时未响应), TIMED_OUT_ACTION(超时响应), ON_TIME_ACTION(按时响应) */
  actionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION";
  /** 是否逾期:0-未逾期，1-已逾期 */
  overdueFlag?: string;
};

/**
 * OpenAPI 组件类型：RTaskQualityReviewResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RTaskQualityReviewResultVo
 */
export type WorkOrderServiceRTaskQualityReviewResultVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceTaskQualityReviewResultVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：任务照片集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskImage
 */
export type WorkOrderServiceTaskImage = {
  /** 任务照片url */
  imageUrl?: string;
  /** 照片是否清晰 */
  clarity?: boolean;
  /** 照片是否完整 */
  complete?: boolean;
  /** ai初验结果 */
  imageAiAnalysisResult?: "REAL" | "UN_REAL" | "CHECK_FAIL" | "CHECKING";
};

/**
 * OpenAPI 组件类型：任务质量数据范围
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskQualityDataScopeDto
 */
export type WorkOrderServiceTaskQualityDataScopeDto = {
  /** 最小范围 */
  min?: number;
  /** 最大范围 */
  max?: number;
};

/**
 * OpenAPI 组件类型：复验结果vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskQualityReviewResultVo
 */
export type WorkOrderServiceTaskQualityReviewResultVo = {
  /** 任务id */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 设备类名称 */
  equipmentClassName?: string;
  /** 对象实例名称 */
  taskObjectName?: string;
  /** 部件名称 */
  componentName?: string;
  /** 失效模式名称 */
  failureModeName?: string;
  /** 是否需要AI校验 */
  needAiAnalysis?: boolean;
  /** 任务执行类型 */
  taskExecutionType?: "GRADED" | "SCORE" | "PARAMETER" | "EXECUTE" | "REPAIR_AND_REPLACE";
  /** 反馈结果 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 分档反馈结果 */
  gradedOrScoreResult?: WorkOrderServiceGradedOrScoreOption[];
  parameterCalculateResult?: WorkOrderServiceParameterCalculateResult;
  /** 任务照片集合 */
  photoImages?: WorkOrderServiceTaskImage[];
  attachmentImage?: WorkOrderServiceAttachmentStruct;
  /** 状态反馈矛盾 */
  exceptionInfos?: WorkOrderServiceExceptionInfo[];
  /** ai初验结果 */
  aiInitialAnalysisResult?: "IMAGE_UN_REAL" | "DEVIATION_TOO_LARGE" | "DATA_REASONABLE" | "STATE_CONTRADICTORY"[];
  hisDataScope?: WorkOrderServiceTaskQualityDataScopeDto;
  /** 是否偏差过大 */
  deviationTooLarge?: "TRUE" | "FALSE" | "FAIL";
  dataReasonableDataScope?: WorkOrderServiceTaskQualityDataScopeDto;
  /** 是否数据合理 */
  dataReasonable?: "TRUE" | "FALSE" | "FAIL";
  /** 人工复验结果 */
  manualReviewResult?: "UN_REAL" | "REAL";
  /** 人工复验虚假原因 */
  manualReviewUnRealReason?: WorkOrderServiceEnumStructDto[];
};

/**
 * OpenAPI 组件类型：任务质量问题分页查询query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskQualityQuery
 */
export type WorkOrderServiceTaskQualityQuery = {
  /** 时间维度: 年度: YEAR,半年度: HALF_YEAR,季度度 SEASON,月度: MONTH */
  timeDimension: "YEAR" | "HALF_YEAR" | "SEASON" | "MONTH";
  /** 时间范围起始日期,yyyy-MM-dd */
  startTime: string;
  /** 时间范围结束日期时间,yyyy-MM-dd */
  endTime: string;
  /** 工作类型合集 */
  jobTypeIdList?: string[];
  /** 处理专业集合编码 */
  processMajorCodes?: string[];
  /** 页码 */
  pageNum: number;
  /** 每页行数 */
  pageSize: number;
  /** 模糊查询关键字 */
  searchParam?: string;
};

/**
 * OpenAPI 组件类型：RCollectionTaskQualityVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionTaskQualityVo
 */
export type WorkOrderServiceRCollectionTaskQualityVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceTaskQualityVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：任务质量问题详情vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskQualityDetailVo
 */
export type WorkOrderServiceTaskQualityDetailVo = {
  /** 任务id */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 对象实例id */
  taskObjectId?: string;
  /** 对象实例名称 */
  taskObjectName?: string;
  taskExecutor?: WorkOrderServiceExecutorVo;
  reviewPerson?: WorkOrderServiceExecutorVo;
  /** 任务执行类型 */
  taskExecutionType?: "GRADED" | "SCORE" | "PARAMETER" | "EXECUTE" | "REPAIR_AND_REPLACE";
  /** 反馈结果 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 分档反馈反馈结果 */
  gradedOrScoreResult?: WorkOrderServiceGradedOrScoreOption[];
  parameterCalculateResult?: WorkOrderServiceParameterCalculateResult;
  /** 任务照片集合 */
  photoImages?: string[];
  /** ai初验结果 */
  aiInitialAnalysisResult?: "IMAGE_UN_REAL" | "DEVIATION_TOO_LARGE" | "DATA_REASONABLE" | "STATE_CONTRADICTORY"[];
  /** 人工复验结果 */
  manualReviewResult?: "UN_REAL" | "REAL";
  /** 人工复验虚假原因 */
  manualReviewUnRealReason?: WorkOrderServiceEnumStructDto[];
};

/**
 * OpenAPI 组件类型：任务质量问题vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskQualityVo
 */
export type WorkOrderServiceTaskQualityVo = {
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  woName?: string;
  /** 工单编码 */
  woNumber?: string;
  /** 工单类型 */
  workTypeEnum?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 要求完成时间 */
  askEndTime?: string;
  /** 疑似任务数量 */
  suspectedTaskCount?: number;
  /** 任务总数量 */
  taskCount?: number;
  /** 复验虚假数量 */
  reviewUnRealCount?: number;
  /** 复验真实数量 */
  reviewRealCount?: number;
  /** 执行人集合 */
  taskExecutors?: WorkOrderServiceExecutorVo[];
  /** 工单下任务质量数据 */
  taskQualityDetails?: WorkOrderServiceTaskQualityDetailVo[];
};

/**
 * OpenAPI 组件类型：分页查询与其任务信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PageDutyPerformanceAnalysisQuery
 */
export type WorkOrderServicePageDutyPerformanceAnalysisQuery = {
  /** 页码 */
  pageNum: number;
  /** 每页行数 */
  pageSize: number;
  /** 模糊查询关键字 */
  searchParam: string;
  /** 时间维度: 年度: YEAR,半年度: HALF_YEAR,季度度 SEASON,月度: MONTH */
  timeDimension: "YEAR" | "HALF_YEAR" | "SEASON" | "MONTH";
  /** 时间范围起始日期,yyyy-MM-dd */
  startTime: string;
  /** 时间范围结束日期时间,yyyy-MM-dd */
  endTime: string;
  /** 工作类型合集 */
  jobTypeIdList?: string[];
  /** 处理专业编码合集 */
  processMajorCodes?: string[];
};

/**
 * OpenAPI 组件类型：任务集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OverDuTask
 */
export type WorkOrderServiceOverDuTask = {
  /** 任务id */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 实际完成时间 */
  completionTime?: string;
  /** 实例id */
  objectId?: string;
  /** 实例名称 */
  objectName?: string;
  /** 计划名称 */
  planName?: string;
  overDuReason?: WorkOrderServiceReason;
  lastUpdateBy?: WorkOrderServiceExecutorVo;
};

/**
 * OpenAPI 组件类型：PageInfoPageTaskOverDueVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PageInfoPageTaskOverDueVO
 */
export type WorkOrderServicePageInfoPageTaskOverDueVO = {
  total?: number;
  list?: WorkOrderServicePageTaskOverDueVO[];
  pageNum?: number;
  pageSize?: number;
  size?: number;
  startRow?: number;
  endRow?: number;
  pages?: number;
  prePage?: number;
  nextPage?: number;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  navigatePages?: number;
  navigatepageNums?: number[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
};

/**
 * OpenAPI 组件类型：PageTaskOverDueVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PageTaskOverDueVO
 */
export type WorkOrderServicePageTaskOverDueVO = {
  /** 工单id */
  orderId?: string;
  /** 工单编码 */
  workNumber?: string;
  /** 工单名称 */
  workName?: string;
  /** 工作类型分类:    /**
     * 计划维保
     * /
    PLAN_MAINTENANCE("1", "计划维保"),

    /**
     * 用户报事
     * /
    SUBSCRIBER_REPORT("2", "用户报事"),

    /**
     * 计划巡检
     * /
    SCHEDULED_INSPECTION("3", "计划巡检"),

    /**
     * 异常维修
     * /
    @Deprecated
    ABNORMAL_MAINTENANCE("4", "异常维修"),

    /**
     * 临时维修
     * /
    PROACTIVE_MAINTENANCE("5", "临时维修"),

    /**
     * 临时维保
     * /
    UNSCHEDULED_MAINTENANCE("6", "临时维保"),


    /**
     * 临时巡检
     * /
    UNSCHEDULED_INSPECTION("8", "临时巡检"),

    /**
     * 员工整改
     * /
    STAFF_RECTIFICATION("9", "员工整改"),


    /**
     * 排查处理
     * /
    TROUBLESHOOTING_HANDLE("11", "排查处理") */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 要求完成时间 */
  requiredCompletionTime?: string;
  /** 工单下逾期任务数 */
  overDuTaskNumber?: number;
  /** 工单下总任务数 */
  allTaskNumber?: number;
  /** 执行人集合 */
  executors?: WorkOrderServiceExecutorVo[];
  /** 任务集合 */
  taskList?: WorkOrderServiceOverDuTask[];
  requiredCompletionTimeByString?: string;
};

/**
 * OpenAPI 组件类型：RPageInfoPageTaskOverDueVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RPageInfoPageTaskOverDueVO
 */
export type WorkOrderServiceRPageInfoPageTaskOverDueVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServicePageInfoPageTaskOverDueVO;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：人工复验dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ManualReviewDto
 */
export type WorkOrderServiceManualReviewDto = {
  /** 任务id */
  taskId: string;
  /** 人工复验结果 */
  manualReviewResult: "UN_REAL" | "REAL";
  /** 人工复验虚假原因 */
  manualReviewUnRealReason?: WorkOrderServiceEnumStructDto[];
  /** 复验人id */
  personId?: string;
  /** 复验人账号 */
  account?: string;
};

/**
 * OpenAPI 组件类型：DutyPerformanceAnalysisVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DutyPerformanceAnalysisVo
 */
export type WorkOrderServiceDutyPerformanceAnalysisVo = {
  /** 工作类型分类 */
  workTypeCode?: string;
  /** 工作类型分类 */
  workTypeName?: string;
  /** 计数 */
  count?: number;
  /** 事项计数 */
  itemCount?: number;
  /** 工作类型下统计信息 */
  workTypeStatisticsVos?: WorkOrderServiceWorkTypeStatisticsVo[];
};

/**
 * OpenAPI 组件类型：RListDutyPerformanceAnalysisVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListDutyPerformanceAnalysisVo
 */
export type WorkOrderServiceRListDutyPerformanceAnalysisVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceDutyPerformanceAnalysisVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：工作类型下统计信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkTypeStatisticsVo
 */
export type WorkOrderServiceWorkTypeStatisticsVo = {
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  count?: WorkOrderServiceCount;
  onTimeItemCount?: WorkOrderServiceOnTimeItemCount;
  timeoutItemCount?: WorkOrderServiceTimeoutItemCount;
  terminateItemCount?: WorkOrderServiceTerminateItemCount;
  timeoutActionOrderCount?: WorkOrderServiceTimeoutActionOrderCount;
  timeoutResolveItemCount?: WorkOrderServiceTimeoutResolveItemCount;
  suspectedItemCount?: WorkOrderServiceSuspectedItemCount;
  confirmItemCount?: WorkOrderServiceConfirmItemCount;
  rejectOrderCount?: WorkOrderServiceRejectOrderCount;
  terminateOrderCount?: WorkOrderServiceTerminateOrderCount;
  sort?: number;
};

/**
 * OpenAPI 组件类型：任务完成质量-确定
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/confirmItemCount
 */
export type WorkOrderServiceConfirmItemCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：事务总数
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/count
 */
export type WorkOrderServiceCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：事务正常完成情况
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/onTimeItemCount
 */
export type WorkOrderServiceOnTimeItemCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：审批驳回
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/rejectOrderCount
 */
export type WorkOrderServiceRejectOrderCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：任务完成质量-疑似
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/suspectedItemCount
 */
export type WorkOrderServiceSuspectedItemCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：事务终止情况
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/terminateItemCount
 */
export type WorkOrderServiceTerminateItemCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：异常终止
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/terminateOrderCount
 */
export type WorkOrderServiceTerminateOrderCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：响应-超时统计
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/timeoutActionOrderCount
 */
export type WorkOrderServiceTimeoutActionOrderCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：事务逾期完成情况
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/timeoutItemCount
 */
export type WorkOrderServiceTimeoutItemCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：解决-超时统计
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/timeoutResolveItemCount
 */
export type WorkOrderServiceTimeoutResolveItemCount = {
  /** 占比 */
  ratio?: string;
  /** 同比 */
  yoy?: string;
  /** 环比 */
  mom?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：JSONObject
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JSONObject
 */
export type WorkOrderServiceJSONObject = {
  empty?: boolean;
  innerMap?: Record<string, Record<string, never>>;
};

/**
 * OpenAPI 组件类型：业务数据json体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JSONArray
 */
export type WorkOrderServiceJSONArray = Record<string, never>[];

/**
 * OpenAPI 组件类型：PubMsgDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PubMsgDto
 */
export type WorkOrderServicePubMsgDto = {
  pubMsgType?: "MERGE_WORK_ORDER" | "RECALL_WORK_ORDER" | "PLAN_ORDER_CHANGE" | "USER_REPORT_UPLOAD" | "WORK_ORDER_ROUTE_LOSS" | "WORK_ORDER_ROUTE_CREATE";
  workOrderId?: string;
  msg?: Record<string, never>[];
  sendTime?: string;
  groupId?: string;
  projectId?: string;
  handlePersonId?: string;
};

/**
 * OpenAPI 组件类型：SseSendMsgDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SseSendMsgDto
 */
export type WorkOrderServiceSseSendMsgDto = {
  sseSessionDto?: WorkOrderServiceSseSessionDto;
  msgDto?: WorkOrderServicePubMsgDto;
};

/**
 * OpenAPI 组件类型：sse会话DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SseSessionDto
 */
export type WorkOrderServiceSseSessionDto = {
  /** 用户id */
  userId?: string;
  /** sse类型 */
  sseType?: "H5" | "APP" | "IOS" | "Android";
  /** 机器标识 */
  identify?: string;
};

/**
 * OpenAPI 组件类型：工单路由查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RoutingControlListByPersonQueryDto
 */
export type WorkOrderServiceRoutingControlListByPersonQueryDto = {
  /** 工单id */
  orderId: string;
  /** 人员id */
  personId: string;
  /** 路由编码 */
  controlCodes?: string[];
};

/**
 * OpenAPI 组件类型：RListWorkOrderRoutingControlVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderRoutingControlVo
 */
export type WorkOrderServiceRListWorkOrderRoutingControlVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderRoutingControlVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：工单路由查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RoutingControlListByOrderQueryDto
 */
export type WorkOrderServiceRoutingControlListByOrderQueryDto = {
  /** 工单id */
  orderId: string;
  /** 路由编码 */
  controlCodes?: string[];
};

/**
 * OpenAPI 组件类型：风险流程配置dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskProcessConfigDto
 */
export type WorkOrderServiceRiskProcessConfigDto = {
  /** 流程id(编辑/复制时需要) */
  id?: string;
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 流程名称 */
  riskProcessName?: string;
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 流程说明 */
  riskProcessDesc?: string;
  /** 项目编码 */
  projectId?: string;
};

/**
 * OpenAPI 组件类型：RString
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RString
 */
export type WorkOrderServiceRString = {
  code?: string;
  result?: string;
  data?: string;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：工作类型分类下的流程配置
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProcessConfig
 */
export type WorkOrderServiceProcessConfig = {
  /** 流程id(编辑/复制时需要) */
  id?: string;
  /** 流程名称 */
  riskProcessName?: string;
  /** 标签：iot 10, 通用 20，无 30 */
  tag?: "IOT" | "COMMON" | "NO" | "SELF_REPAIR";
  /** 是否启用 */
  isEnabled?: boolean;
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 流程说明 */
  riskProcessDesc?: string;
};

/**
 * OpenAPI 组件类型：RListRiskProcessConfigVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListRiskProcessConfigVo
 */
export type WorkOrderServiceRListRiskProcessConfigVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceRiskProcessConfigVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：风险流程配置vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskProcessConfigVo
 */
export type WorkOrderServiceRiskProcessConfigVo = {
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工作类型分类下的流程配置 */
  processConfigs?: WorkOrderServiceProcessConfig[];
};

/**
 * OpenAPI 组件类型：RJSONObject
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RJSONObject
 */
export type WorkOrderServiceRJSONObject = {
  code?: string;
  result?: string;
  data?: {
    empty?: boolean;
    innerMap?: Record<string, Record<string, never>>;
  };
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderListDisplayParamVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderListDisplayParamVo
 */
export type WorkOrderServiceWorkOrderListDisplayParamVo = {
  user_id?: string;
  page: string;
};

/**
 * OpenAPI 组件类型：异常事件
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AbnormalEventDTO
 */
export type WorkOrderServiceAbnormalEventDTO = {
  /** 异常开始时间 */
  exceptionStartTime?: number;
  /** 异常结束时间 */
  exceptionEndTime?: number;
  /** 异常事件编码 */
  exceptionCode?: string;
  /** 诊断排查任务，关联的异常维修任务措施原始数据 */
  exceptionTaskOriginalMeasureInfos?: WorkOrderServiceExceptionTaskOriginalMeasureInfo[];
  taskCosts?: WorkOrderServiceTaskCostVo[];
  /** 关联实例集合 */
  instances?: WorkOrderServiceInstance[];
  /** 关联问题集合 */
  problems?: WorkOrderServiceProblemDTO[];
  /** 关联问题集合 */
  riskEvents?: WorkOrderServiceExceptionRiskEvent[];
};

/**
 * OpenAPI 组件类型：按需匹配集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/CirculationConfigDTO
 */
export type WorkOrderServiceCirculationConfigDTO = {
  code?: string;
  type?: string;
};

/**
 * OpenAPI 组件类型：关联风险事件实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExceptionRiskEvent
 */
export type WorkOrderServiceExceptionRiskEvent = {
  riskEventName?: string;
  instanceTreeId?: number;
  instances?: WorkOrderServiceInstance[];
  problems?: WorkOrderServiceProblemDTO[];
};

/**
 * OpenAPI 组件类型：诊断排查任务，关联的异常维修任务措施原始数据
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExceptionTaskOriginalMeasureInfo
 */
export type WorkOrderServiceExceptionTaskOriginalMeasureInfo = {
  /** 关联隐患树节点id */
  nodeId?: string;
  /** 对象实例id */
  objectId?: string;
  /** 对象实例名称 */
  objectName?: string;
  taskObject: WorkOrderServiceTaskObjectDTO;
  /** 隐患因素描述 */
  riskFactor?: string;
  /** 在Rcc是否为部件类 */
  inRccIsComponent: boolean;
  /** 部件名称，非部件类为空 */
  componentName?: string;
  /** 措施历史执行次数 */
  historyExecutionTimes?: number;
  /** 预防性策略下次执行时间 */
  finishTime?: string;
  /** 措施sop数据原始数据 */
  exeMeasureStruct?: {
    empty?: boolean;
    innerMap?: Record<string, Record<string, never>>;
  };
  riskMeasure?: WorkOrderServiceJSONObject;
  /** 下级实体对应的节点id集合 */
  childNodeIds?: string[];
  /** md5值:三要素（维修）/二要素（更换） */
  md5?: string;
};

/**
 * OpenAPI 组件类型：关联实例实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Instance
 */
export type WorkOrderServiceInstance = {
  /** 实例ID */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
};

/**
 * OpenAPI 组件类型：执行要求
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JobFillingData
 */
export type WorkOrderServiceJobFillingData = {
  execute_requirement?: string;
};

/**
 * OpenAPI 组件类型：关联问题实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemDTO
 */
export type WorkOrderServiceProblemDTO = {
  /** 关联问题节点id */
  nodeId?: number;
  /** 关联问题节点名称 */
  nodeName?: string;
  /** 关联空间名称 */
  spaceName?: string;
  /** 关联实例id */
  instanceId?: string;
  /** 关联实例名称 */
  instanceName?: string;
  /** 节点状态 */
  feedbackResult?: string;
};

/**
 * OpenAPI 组件类型：保存工单入参DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SaveOrUpdateDTO
 */
export type WorkOrderServiceSaveOrUpdateDTO = {
  /** 来源工单id */
  originWorkOrderId?: string;
  /** 来源工单名称 */
  originWorkOrderName?: string;
  /** 项目编码 */
  project_id: string;
  /** 工单执行模式 */
  executie_mode?: string;
  work_order: WorkOrderServiceWorkOrderDTO;
  /** 操作人用户id */
  user_id?: string;
  /** 操作人人员id */
  person_id?: string;
};

/**
 * OpenAPI 组件类型：TaskCostVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskCostVo
 */
export type WorkOrderServiceTaskCostVo = {
  taskCode?: string;
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  objectInstanceId?: string;
  inRccIsComponent?: boolean;
  actualCost?: number;
  majorCode?: string;
};

/**
 * OpenAPI 组件类型：任务对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskObjectDTO
 */
export type WorkOrderServiceTaskObjectDTO = {
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 对象实例id */
  objectInstanceId?: string;
  /** 对象实例名称 */
  objectInstanceName?: string;
  /** 对象classCode */
  objectInstanceClassCode?: string;
  /** 对象类型：SPACE 空间 ,SYSTEM 系统, EQUIPMENT 设备 */
  objectType?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 楼层排序 */
  floorSequenceID?: string;
  /** 在Rcc是否为部件类 */
  inRccIsComponent?: boolean;
  /** 部件名称，非部件类为空 */
  componentName?: string;
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  majorCode?: string;
  majorName?: string;
};

/**
 * OpenAPI 组件类型：工单-wo_body 实体入参映射
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkBodyDTO
 */
export type WorkOrderServiceWorkBodyDTO = {
  /** 紧急程度：巡检任务组合生成的工单，固定传“中”\n" + "诊断排查任务组合生成的工单，固定传“高”\n */
  urgency?: string;
  /** 工单名称 */
  wo_name?: string;
  /** 工单类型 */
  work_type?: string;
  /** 要求开始时间 */
  ask_start_time?: string;
  /** 要求结束时间 */
  ask_end_time?: string;
  /** 工单来源 */
  order_from_type?: string;
  abnormal_events?: WorkOrderServiceAbnormalEventDTO;
  job_filling_data?: WorkOrderServiceJobFillingData;
  /** 创建人ID */
  creator_id?: string;
  /** 创建人名称 */
  creator_name?: string;
  /** 工单流程id */
  order_type?: string;
  /** 创建部门id */
  responsible_department_id?: string;
  /** 创建部门名称 */
  responsible_department_name?: string;
};

/**
 * OpenAPI 组件类型：工单记录
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderDTO
 */
export type WorkOrderServiceWorkOrderDTO = {
  /** 主键 */
  order_id?: string;
  wo_body?: WorkOrderServiceWorkBodyDTO;
  /** 异常事件编码 */
  exception_event_code?: string;
  /** 按需匹配集合 */
  circulationConfig?: WorkOrderServiceCirculationConfigDTO[];
};

/**
 * OpenAPI 组件类型：WorkOrderByIdDetailVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderByIdDetailVo
 */
export type WorkOrderServiceWorkOrderByIdDetailVo = {
  objectId?: string;
  objType?: string;
  orderId: string;
  projectId: string;
};

/**
 * OpenAPI 组件类型：GetBindingTenantListRequest
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/GetBindingTenantListRequest
 */
export type WorkOrderServiceGetBindingTenantListRequest = {
  mobile: string;
};

/**
 * OpenAPI 组件类型：管控需求查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RequireControlQueryDto
 */
export type WorkOrderServiceRequireControlQueryDto = {
  /** 工单id */
  orderId: string;
};

/**
 * OpenAPI 组件类型：RListRequireControlExecRecordVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListRequireControlExecRecordVo
 */
export type WorkOrderServiceRListRequireControlExecRecordVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceRequireControlExecRecordVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：管控需求执行记录Vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RequireControlExecRecordVo
 */
export type WorkOrderServiceRequireControlExecRecordVo = {
  /** 工单id */
  orderId?: string;
  /** 操作类型(1:开始前操作;2:开始后操作) */
  execType?: number;
  /** 管控需求编码 */
  requireControlCode?: string;
  /** 管控需求名称 */
  requireControlName?: string;
  /** 状态(0:未执行;1:已执行) */
  status?: boolean;
  /** 执行人 */
  execName?: string;
  /** 执行时间: 13位时间戳 */
  execTime?: string;
  /** 执行图片 */
  execPhotos?: string[];
};

/**
 * OpenAPI 组件类型：管控需求查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RequireControlInitDto
 */
export type WorkOrderServiceRequireControlInitDto = {
  /** 项目id */
  projectId: string;
  /** 工单id */
  orderId: string;
  /** 工作类型 */
  workType: string;
};

/**
 * OpenAPI 组件类型：管控需求执行操作dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RequireControlExecuteDto
 */
export type WorkOrderServiceRequireControlExecuteDto = {
  /** 工单id */
  orderId: string;
  /** 管控需求编码 */
  requireControlCode: string;
  /** 执行人id */
  execPersonId: string;
  /** 执行人名称 */
  execName: string;
  /** 执行图片 */
  execPhotos?: string[];
  /** 执行时间(yyyyMMddhhmmss) */
  execTime: string;
  /** 操作记录 */
  execRecord: {
    empty?: boolean;
    innerMap?: Record<string, Record<string, never>>;
  };
};

/**
 * OpenAPI 组件类型：AlertEntityRiskSaveDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AlertEntityRiskSaveDto
 */
export type WorkOrderServiceAlertEntityRiskSaveDto = {
  alertObjectInfo: WorkOrderServiceAlertObjectInfo;
  /** 报事问题列表 */
  problems: WorkOrderServiceAlertProblem[];
  /** 问题描述 */
  problemDescription?: string;
  /** 问题图片列表，多个图片id以逗号或其他分隔符分隔 */
  imageIds?: string[];
  /** 问题视频列表 */
  videos?: WorkOrderServiceVideo[];
  /** 关联工单 */
  sopCodeFrom?: string;
  /** 上报人 */
  personId: string;
  /** 关联工单问题性质；REPORT_REPAIR 报事报修，ASSISTANCE_NEED 协助需求，COMMENT 意见投诉，OPTIMIZATION_SUGGESTION 优化建议 */
  problemNature?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION";
};

/**
 * OpenAPI 组件类型：报事对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AlertObjectInfo
 */
export type WorkOrderServiceAlertObjectInfo = {
  /** 数据来源 */
  dataSourceType: "RCC_REF" | "CUSTOMIZE" | "BDTP_REF";
  /** 位置信息 */
  location?: string;
  /** 实例ID */
  id?: string;
  /** 实例名称 */
  name?: string;
  /** 实例的对象类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实例对象类编码 */
  classCode?: string;
  /** 实例对象类名称 */
  className?: string;
  /** 所属空间实例id */
  spaceId?: string;
  /** 所属空间实例名称 */
  spaceName?: string;
  /** 空间对象类编码 */
  spaceClassCode?: string;
  /** 空间对象类名称 */
  spaceClassCodeName?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  localName?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
};

/**
 * OpenAPI 组件类型：报事问题列表
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AlertProblem
 */
export type WorkOrderServiceAlertProblem = {
  /** 报事问题(rcc为别名，非rcc为自定义名称) */
  feedbackResultAlias: string;
  /** 数据来源 */
  dataSourceType: "RCC_REF" | "CUSTOMIZE" | "BDTP_REF";
  /** 状态 */
  feedbackResult: "NORMAL" | "WARN" | "EXCEPTION";
  /** 对应措施id集合 */
  measureIds?: string[];
  /** 实体风险 */
  physicalRiskId?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
  /** 是否用户选择专业 */
  isUserSelectedMajor?: boolean;
  /** 问题类型 */
  problemType?: "SELF_REPAIR";
  /** 维修后拍摄的照片(0401) */
  postRepairPhoto?: string[];
  /** 维修后拍摄的视频(0401) */
  postRepairVideos?: WorkOrderServiceVideo[];
  /** 预估费用(0401) */
  estimatedCost?: number;
  /** 维修记录(0401) */
  repairMeasures?: WorkOrderServiceRepairMeasure[];
  /** 问题记录时间(0401), yyyy-MM-dd HH:mm:ss */
  problemTime?: string;
  /** 项目风险流程Id(0401) */
  processId?: string;
  /** 项目风险流程md5(0401) */
  md5?: string;
};

/**
 * OpenAPI 组件类型：AlertReportInfoDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AlertReportInfoDto
 */
export type WorkOrderServiceAlertReportInfoDto = {
  instanceId?: string;
  instanceName?: string;
  feedbackResultAlias?: string;
  physicalRiskId?: string;
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
};

/**
 * OpenAPI 组件类型：RListAlertReportInfoDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListAlertReportInfoDto
 */
export type WorkOrderServiceRListAlertReportInfoDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceAlertReportInfoDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：ProjectInfoDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProjectInfoDto
 */
export type WorkOrderServiceProjectInfoDto = {
  /** 集团编码 */
  groupCode?: string;
  /** 项目id */
  projectId?: string;
  /** 操作人id */
  userId?: string;
};

/**
 * OpenAPI 组件类型：项目信息返回
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProjectInfoVo
 */
export type WorkOrderServiceProjectInfoVo = {
  /** 项目id */
  projectId?: string;
  /** 项目名称 */
  projectName?: string;
  /** 最近一次标识 */
  lastFlag?: boolean;
};

/**
 * OpenAPI 组件类型：RListProjectInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListProjectInfoVo
 */
export type WorkOrderServiceRListProjectInfoVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceProjectInfoVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：ReportIssueTypeTreeSearchDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeTreeSearchDto
 */
export type WorkOrderServiceReportIssueTypeTreeSearchDto = {
  name?: string;
  problemNatureCodes?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION"[];
  /** 项目id */
  projectId: string;
  /** 操作人id */
  userId: string;
  /** 适用报事位置-空间类型 */
  spaceType?: string;
  /** 适用报事位置-空间id */
  spaceId?: string;
};

/**
 * OpenAPI 组件类型：RListReportIssueTypeVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListReportIssueTypeVo
 */
export type WorkOrderServiceRListReportIssueTypeVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceReportIssueTypeVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：报事类型vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeVo
 */
export type WorkOrderServiceReportIssueTypeVo = {
  /** 报事类型编码 */
  code?: string;
  /** 报事类型名称 */
  name?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 工单流程id */
  flowPlanId?: string;
  /** 问题性质枚举 */
  problemNatureEnum?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION";
  positionAssert?: string[];
  positionClass?: string[];
  /** 报事类型末级名称 */
  lastName?: string;
  /** 子集 */
  children?: WorkOrderServiceReportIssueTypeVo[];
};

/**
 * OpenAPI 组件类型：报事类型搜索dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeQueryDto
 */
export type WorkOrderServiceReportIssueTypeQueryDto = {
  /** 项目id */
  projectId: string;
  /** 报事类型名称 */
  name: string;
};

/**
 * OpenAPI 组件类型：RListReportIssueTypeQueryVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListReportIssueTypeQueryVo
 */
export type WorkOrderServiceRListReportIssueTypeQueryVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceReportIssueTypeQueryVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：报事类型查询Vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeQueryVo
 */
export type WorkOrderServiceReportIssueTypeQueryVo = {
  /** 报事类型编码 */
  code?: string;
  /** 报事类型名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：报事类型列表查询dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeListQueryDto
 */
export type WorkOrderServiceReportIssueTypeListQueryDto = {
  /** 项目id */
  projectId: string;
  /** 层级限制 */
  levelLimit?: number;
};

/**
 * OpenAPI 组件类型：工单流程信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/FlowPlanVo
 */
export type WorkOrderServiceFlowPlanVo = {
  /** 工单流程id */
  flowPlanId?: string;
  /** 工单流程名称 */
  flowPlanName?: string;
  /** 工单状态(0:待修定;1:正常) */
  statue?: string;
  /** 是否有效(true:有效;false:失效) */
  valid?: boolean;
};

/**
 * OpenAPI 组件类型：处理专业
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProcessMajorVo
 */
export type WorkOrderServiceProcessMajorVo = {
  /** 处理专业编码 */
  code?: string;
  /** 处理专业名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：RListReportIssueTypeListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListReportIssueTypeListVo
 */
export type WorkOrderServiceRListReportIssueTypeListVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceReportIssueTypeListVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：报事类型列表Vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeListVo
 */
export type WorkOrderServiceReportIssueTypeListVo = {
  /** 报事类型编码 */
  code?: string;
  /** 报事类型名称 */
  name?: string;
  /** 父级编码 */
  parentCode?: string;
  flowPlan?: WorkOrderServiceFlowPlanVo;
  problemNature?: WorkOrderServiceProblemNatureListVo;
  processMajor?: WorkOrderServiceProcessMajorVo;
  /** 报事类型子集 */
  children?: WorkOrderServiceReportIssueTypeListVo[];
  /** 节点层级 */
  level?: number;
  /** 适用报事位置-资产分类id集合 */
  positionAssert?: string[];
  /** 适用报事位置-空间类型id集合 */
  positionClass?: string[];
  /** 适用报事位置-资产分类名称集合 */
  positionAssertName?: string[];
  /** 适用报事位置-空间类型名称集合 */
  positionClassName?: string[];
  /** 要求解决时长 */
  requireResolveTime?: number;
  /** 要求解决时长展示单位 */
  requireResolveTimeShowUnit?: "HOUR" | "DAY";
  /** 要求响应时长 */
  commonActionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  /** 特殊响应数量 */
  specialActionSize?: number;
  /** 要求响应时长 */
  requireActionTime?: number;
  /** 特殊响应要求是否关联流程失效 */
  specialActionFlowInvalid?: boolean;
};

/**
 * OpenAPI 组件类型：报事类型删除dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeListDeleteDto
 */
export type WorkOrderServiceReportIssueTypeListDeleteDto = {
  /** 项目id */
  projectId: string;
  /** 报事类型编码 */
  code: string;
  /** 用户id */
  userId: string;
};

/**
 * OpenAPI 组件类型：报事类型创建编辑DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeCreateOrEditDto
 */
export type WorkOrderServiceReportIssueTypeCreateOrEditDto = {
  /** 报事类型编码，如果为空就是新建 */
  code?: string;
  /** 报事类型名称 */
  name: string;
  /** 父级编码 */
  parentCode: string;
  /** 工单流程id */
  flowPlanId?: string;
  /** 问题性质标签编码 */
  problemNatureCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 项目id */
  projectId: string;
  /** 操作人id */
  userId: string;
  /** 适用报事位置-资产分类id集合 */
  positionAssert?: string[];
  /** 适用报事位置-空间类型id集合 */
  positionClass?: string[];
  /** 适用报事位置-资产分类名称集合 */
  positionAssertName?: string[];
  /** 适用报事位置-空间类型名称集合 */
  positionClassName?: string[];
  /** 要求解决时长(天) */
  requireResolveTime?: number;
  /** 要求解决时长展示单位 */
  requireResolveTimeShowUnit?: "HOUR" | "DAY";
  /** 要求响应方式 */
  commonActionType: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  /** 要求响应时长 */
  requireActionTime?: number;
};

/**
 * OpenAPI 组件类型：报事类型批量编辑DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportIssueTypeBatchEditDto
 */
export type WorkOrderServiceReportIssueTypeBatchEditDto = {
  /** 项目id */
  projectId: string;
  /** 报事类型编码集合 */
  codes: string[];
  /** 工单流程id */
  flowPlanId?: string;
  /** 问题性质标签编码 */
  problemNatureCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 操作人id */
  userId: string;
  /** 适用报事位置-资产分类id集合 */
  positionAssert?: string[];
  /** 适用报事位置-空间类型id集合 */
  positionClass?: string[];
  /** 适用报事位置-资产分类名称集合 */
  positionAssertName?: string[];
  /** 适用报事位置-空间类型名称集合 */
  positionClassName?: string[];
  /** 要求解决时长 */
  requireResolveTime?: number;
  /** 要求解决时长展示单位 */
  requireResolveTimeShowUnit?: "HOUR" | "DAY";
  /** 要求响应时长 */
  commonActionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  /** 要求响应时长 */
  requireActionTime?: number;
};

/**
 * OpenAPI 组件类型：SpecActionListQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpecActionListQueryDto
 */
export type WorkOrderServiceSpecActionListQueryDto = {
  /** 报事类型编码 */
  reportIssueTypeCode: string;
};

/**
 * OpenAPI 组件类型：RListSpecialActionListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListSpecialActionListVo
 */
export type WorkOrderServiceRListSpecialActionListVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceSpecialActionListVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：SpecialActionListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpecialActionListVo
 */
export type WorkOrderServiceSpecialActionListVo = {
  /** 主键id */
  id?: string;
  /** 报事类型编码 */
  reportIssueTypeCode: string;
  /** 流程id */
  flowPlanId: string;
  /** 适用报事位置-资产分类id集合 */
  positionAssert?: string[];
  /** 适用报事位置-空间类型id集合 */
  positionClass?: string[];
  /** 要求解决时长 */
  requireResolveTime: number;
  /** 要求解决时长展示单位 */
  requireResolveTimeShowUnit?: "HOUR" | "DAY";
  /** 要求响应方式 */
  requireActionType: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  /** 要求响应时长 */
  requireActionTime?: number;
};

/**
 * OpenAPI 组件类型：特殊响应要求集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpecialActionDetail
 */
export type WorkOrderServiceSpecialActionDetail = {
  /** 主键id */
  id?: string;
  /** 流程id */
  flowPlanId: string;
  /** 适用报事位置-资产分类id集合 */
  positionAssert?: string[];
  /** 适用报事位置-空间类型id集合 */
  positionClass?: string[];
  /** 要求解决时长(天) */
  requireResolveTime: number;
  /** 要求响应方式 */
  requireActionType: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  /** 要求响应时长 */
  requireActionTime?: number;
  /** 要求解决时长展示单位 */
  requireResolveTimeShowUnit?: "HOUR" | "DAY";
};

/**
 * OpenAPI 组件类型：SpecialActionEditDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpecialActionEditDto
 */
export type WorkOrderServiceSpecialActionEditDto = {
  /** 报事类型编码 */
  reportIssueTypeCode: string;
  /** 项目id */
  projectId: string;
  /** 用户id */
  userId: string;
  /** 特殊响应要求集合 */
  specialActionList?: WorkOrderServiceSpecialActionDetail[];
};

/**
 * OpenAPI 组件类型：内置报事类型初始化请求DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/InnerReportTypeInitDTO
 */
export type WorkOrderServiceInnerReportTypeInitDTO = {
  /** 项目id */
  projectId: string;
};

/**
 * OpenAPI 组件类型：RListProblemNatureListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListProblemNatureListVo
 */
export type WorkOrderServiceRListProblemNatureListVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceProblemNatureListVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：报修对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Obj
 */
export type WorkOrderServiceObj = {
  /** 对象id */
  objId?: string;
  /** 对象名称 */
  objName: string;
  /** 对象类型(空间实例:space;空间类:spaceclass;自定义空间:tempspace) */
  objType: "space" | "spaceclass" | "tempspace";
  /** 楼层id(自定义空间为null) */
  floorId?: string;
  /** 建筑id(H5手动搜索未匹配到时自定义空间buildingId有值,手动填写自定义空间时buildingId为空) */
  buildingId?: string;
  /** 位置名称(建筑名称+楼层名称+空间名称) */
  positionName: string;
  /** 空间分类集合 */
  spaceTypeList?: WorkOrderServiceSpaceType[];
};

/**
 * OpenAPI 组件类型：编辑用户报事单
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportEditDto
 */
export type WorkOrderServiceUserReportEditDto = {
  /** 工单id */
  orderId: string;
  /** 项目ID */
  projectId: string;
  /** 事项描述 */
  description: string;
  /** 报事照片 */
  photos?: string[];
  /** 报事视频 */
  videos?: WorkOrderServiceVideo[];
  /** 报事人 */
  contacts?: string;
  /** 联系电话 */
  phone: string;
  /** 预约时间(yyyyMMddHHmmss) */
  appointmentTime?: string;
  /** 编辑人ID(Web有人员则为personId,没有人员为userId) */
  editPersonId: string;
  reportObj: WorkOrderServiceObj;
};

/**
 * OpenAPI 组件类型：AlertReportDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AlertReportDto
 */
export type WorkOrderServiceAlertReportDto = {
  id?: number;
  name?: string;
  rwdInstanceId?: string;
  classCode?: string;
  majorCode?: string;
  pjRiskBusinessId?: string;
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
  description?: string;
  imageIds?: string;
  videos?: WorkOrderServiceVideo[];
  sopCode?: string;
  createBy?: string;
  personId?: string;
};

/**
 * OpenAPI 组件类型：RListAlertReportDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListAlertReportDto
 */
export type WorkOrderServiceRListAlertReportDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceAlertReportDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：UserReportApplyCloseDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportApplyCloseDto
 */
export type WorkOrderServiceUserReportApplyCloseDto = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 处理照片 */
  completionPicture?: string[];
  /** 处理视频 */
  completionVideo?: WorkOrderServiceVideo[];
  /** 处理反馈 */
  completionFeedback: string;
  /** 问题解决状态(0:未解决;1:已解决) */
  problemSolutionState?: number;
};

/**
 * OpenAPI 组件类型：创建用户报事单
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportDto
 */
export type WorkOrderServiceUserReportDto = {
  /** 项目ID */
  projectId: string;
  /** 用户id(H5不需要传,Web为用户ID) */
  userId?: string;
  /** 报事类型 */
  reportIssueType: string;
  /** 事项描述 */
  description: string;
  /** 报事照片 */
  photos?: string[];
  /** 报事视频 */
  videos?: WorkOrderServiceVideo[];
  /** 报事人 */
  contacts?: string;
  /** 联系电话 */
  phone: string;
  askEndTime?: string;
  /** 预约时间(yyyyMMddHHmmss) */
  appointmentTime?: string;
  /** 工单来源 */
  orderFromType: string;
  /** 创建人ID(H5为手机号;Web有人员则为personId,没有人员为userId) */
  creatorId: string;
  /** 创建人名称(H5为手机号;Web有人员则为人员名称,没有人员则为userName) */
  creatorName: string;
  /** 创建部门id(H5为空;Web有人员则为人员的部门id,没有人员则为空) */
  responsibleDepartmentId?: string;
  /** 创建部门名称(H5为空;Web有人员则为人员的部门名称,没有人员则为空) */
  responsibleDepartmentName?: string;
  /** 报事位置-空间类型[用于匹配响应要求] */
  spaceType?: string;
  reportObj: WorkOrderServiceObj;
  /** 关联回访工单id */
  revisitOrderId?: string;
  /** 创建渠道 H5:YHBS-ZXBS,WEB端员工服务: YHBS-DKBS */
  createChannel: string;
};

/**
 * OpenAPI 组件类型：OrderRecordDTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OrderRecordDTO
 */
export type WorkOrderServiceOrderRecordDTO = {
  /** 记录内容 */
  record?: string;
  /** 时间 */
  dateTime?: string;
  /** 是否处理 true 已处理  false 未处理 */
  isProcessed?: boolean;
  /** 当前节点 */
  isCurrentNode?: boolean;
};

/**
 * OpenAPI 组件类型：RListOrderRecordDTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListOrderRecordDTO
 */
export type WorkOrderServiceRListOrderRecordDTO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceOrderRecordDTO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：DetailRequestVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DetailRequestVo
 */
export type WorkOrderServiceDetailRequestVo = {
  name?: string;
  num?: string;
  projectTemplateId?: string;
  unitPrice?: string;
  unit?: string;
};

/**
 * OpenAPI 组件类型：ManpowerRequestVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ManpowerRequestVo
 */
export type WorkOrderServiceManpowerRequestVo = {
  hour?: string;
  num?: string;
  totalCost: string;
  unitPrice?: string;
};

/**
 * OpenAPI 组件类型：MaterialRequestVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MaterialRequestVo
 */
export type WorkOrderServiceMaterialRequestVo = {
  detail?: WorkOrderServiceDetailRequestVo[];
  totalCost: string;
};

/**
 * OpenAPI 组件类型：RepairOutlayAddRequestVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairOutlayAddRequestVo
 */
export type WorkOrderServiceRepairOutlayAddRequestVo = {
  orderId: string;
  projectId: string;
  paidService: string;
  materialSource: string;
  outlay?: string;
  outlayState: string;
  manpower?: WorkOrderServiceManpowerRequestVo;
  material?: WorkOrderServiceMaterialRequestVo;
  signature?: string;
};

/**
 * OpenAPI 组件类型：RepairOrderOverviewRequestVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairOrderOverviewRequestVo
 */
export type WorkOrderServiceRepairOrderOverviewRequestVo = {
  project_id: string;
};

/**
 * OpenAPI 组件类型：OrderStatisticsDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OrderStatisticsDto
 */
export type WorkOrderServiceOrderStatisticsDto = {
  /** 项目id */
  projectId: string;
  /** 工单统计类型 */
  orderStatisticsType: "EXPECTED_INCOMPLETE" | "NORMAL_PROGRESS";
};

/**
 * OpenAPI 组件类型：工单统计返回
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OrderStatisticsVo
 */
export type WorkOrderServiceOrderStatisticsVo = {
  /** 进行中工单总数 */
  total?: number;
  /** 当前状态下数量 */
  currentStatusTotal?: number;
  /** 当前状态下数量 */
  problemNatureVos?: WorkOrderServiceProblemNatureVo[];
};

/**
 * OpenAPI 组件类型：当前状态下数量
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemNatureVo
 */
export type WorkOrderServiceProblemNatureVo = {
  /** 问题性质枚举 */
  problemNature?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION";
  /** 条数 */
  total?: number;
};

/**
 * OpenAPI 组件类型：ROrderStatisticsVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ROrderStatisticsVo
 */
export type WorkOrderServiceROrderStatisticsVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceOrderStatisticsVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RepairListQuery
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairListQuery
 */
export type WorkOrderServiceRepairListQuery = {
  /** 页面大小 */
  size?: number;
  /** 创建人ID */
  creatorId?: string;
  /** 类型: ALL,PROCESSING,EVALUATE */
  type?: "ALL" | "PROCESSING" | "EVALUATE";
  /** 创建时间 */
  creationTime?: string;
  workOrderStateEnumList?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10"[];
};

/**
 * OpenAPI 组件类型：原始用户报事单信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OriginalInfo
 */
export type WorkOrderServiceOriginalInfo = {
  /** 编辑人id */
  editPersonId?: string;
  /** 编辑人名称 */
  editPersonName?: string;
  /** 编辑人电话 */
  editPersonPhone?: string;
  /** 编辑时间 */
  editTime?: string;
  /** 报事位置 */
  reportLocation?: string;
  /** 预计时间 */
  scheduledTime?: string;
  /** 报事人 */
  reporterName?: string;
  /** 联系人电话 */
  contactPhone?: string;
  /** 事项描述 */
  issueDescription?: string;
  /** 描述图片 */
  descriptionImageUrls?: string[];
};

/**
 * OpenAPI 组件类型：RCollectionUserReportDTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionUserReportDTO
 */
export type WorkOrderServiceRCollectionUserReportDTO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceUserReportDTO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：用户报事DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportDTO
 */
export type WorkOrderServiceUserReportDTO = {
  /** 用户报事工单名称 */
  workOrderName?: string;
  /** 工单id */
  orderId?: string;
  /** 工单编码 */
  orderNumber?: string;
  /** 工单状态 */
  workOrderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 类型: ALL,PROCESSING,PROCESSING */
  type?: "ALL" | "PROCESSING" | "EVALUATE";
  /** 禹数项目 */
  projectName?: string;
  /** 报事类型 */
  reportType?: string;
  /** 报事位置 */
  reportLocation?: string;
  /** 预计时间 */
  scheduledTime?: string;
  /** 期望完成时间 */
  expectedCompletionTime?: string;
  /** 报事人 */
  reporterName?: string;
  /** 联系人电话 */
  contactPhone?: string;
  /** 创建人 */
  creatorName?: string;
  /** 创建时间 */
  creationTime?: string;
  /** 更新时间 */
  updateTime?: string;
  /** 处理时间 */
  handlerTime?: string;
  /** 事项描述 */
  issueDescription?: string;
  /** 描述图片 */
  descriptionImageUrls?: string[];
  /** 描述视频 */
  descriptionVideos?: WorkOrderServiceVideo[];
  /** 处理反馈 */
  executionResult?: string;
  /** 处理视频 */
  executionVideos?: WorkOrderServiceVideo[];
  /** 处理照片 */
  executionImageUrls?: string[];
  /** 是否完成评价 */
  isEvaluated?: boolean;
  /** 评价列表 */
  evaluates?: WorkOrderServiceUserReportEvaluateDto[];
  originalInfo?: WorkOrderServiceOriginalInfo;
  /** 允许评价 */
  doEvaluate?: boolean;
};

/**
 * OpenAPI 组件类型：RepairTenantRequestVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairTenantRequestVo
 */
export type WorkOrderServiceRepairTenantRequestVo = {
  state?: string;
  tenant: string;
  page?: number;
  pageSize?: number;
};

/**
 * OpenAPI 组件类型：AuditResultMessageQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AuditResultMessageQueryDto
 */
export type WorkOrderServiceAuditResultMessageQueryDto = {
  /** 工单id */
  orderId: string;
  /** 过程记录id */
  processRecordId: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderProcessRecordVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderProcessRecordVo
 */
export type WorkOrderServiceRListWorkOrderProcessRecordVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderProcessRecordVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderProcessRecordVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderProcessRecordVo
 */
export type WorkOrderServiceWorkOrderProcessRecordVo = {
  /** 路由id */
  processRecordId?: string;
  /** 操作人id */
  operatorId?: string;
  /** 操作人名称 */
  operatorName?: string;
  /** 操作类型[apply_close, apply_stop, apply_delay, apply_add_people, apply_replace_people, audit_close_agree, audit_close_reject 、、] */
  operateType?: string;
  /** 操作时间(yyyyMMddHHmmss) */
  operateTime?: string;
  /** 操作描述 */
  description?: string;
  /** 审批意见/备注 */
  remark?: string;
  /** 图片 */
  images?: string[];
  /** 音频 */
  sounds?: WorkOrderServiceSound[];
  /** 视频 */
  videos?: WorkOrderServiceVideo[];
  /** 工单 id */
  orderId?: string;
  /** 分组id */
  groupId?: string;
  /** 项目 id */
  projectId?: string;
  /** 延期小时 */
  delayHour?: number;
  /** 延期原因 */
  delayReason?: string;
  /** 申请加人/换人的名称 */
  addOrReplacePeopleNames?: string[];
};

/**
 * OpenAPI 组件类型：工单-查询对象类树入参实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ObjectTypeTreeQueryDTO
 */
export type WorkOrderServiceObjectTypeTreeQueryDTO = {
  /** 待查询的对象类型 */
  enabledList: "PROJECT" | "BUILDING" | "FLOOR" | "SPACE" | "EQUIPMENT" | "SHAFT" | "MAJOR" | "VIRTUAL" | "TOOL" | "MATERIAL" | "PARTITION" | "EQUIPMENT_GROUP" | "SYSTEM_OBJECT" | "GROUP" | "SPACE_PARENT_CLASS" | "SPACE_CLASS_AIM_V7" | "FUNCID" | "PARTITION_CLASS" | "BUSINESS_TAG" | "PIPE" | "PROJECT_CLASS" | "BUILDING_CLASS" | "FLOOR_CLASS" | "SYSTEM" | "EQUIPMENT_CLASS" | "EQUIP_GROUP_CLASS" | "SPACE_CLASS" | "SHAFT_CLASS" | "VIRTUAL_CLASS" | "TOOL_CLASS" | "MATERIAL_CLASS" | "UNDEFINED"[];
  /** 设备组回显只展示对象类，其它对象类型不受此约束 */
  onlyLeafLayer?: boolean;
  /** 获取meoi白名单过滤后的classCode */
  onlyWhiteList?: boolean;
  /** 获取树节点只包含对象实例非0的classCode */
  noneZero?: boolean;
};

/**
 * OpenAPI 组件类型：对象类树节点实体DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ObjectClassTreeNodeDTO
 */
export type WorkOrderServiceObjectClassTreeNodeDTO = {
  /** 唯一标识 */
  id?: string;
  /** 对象类型编码 */
  classCode?: string;
  /** 对象类型名称 */
  className?: string;
  /** 当前对象class类型 */
  objType?: string;
  /** 父级节点编码 */
  parentCode?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 子对象类数组 */
  children?: WorkOrderServiceObjectClassTreeNodeDTO[];
  /** 节点下对象实例数量 */
  objectCount?: number;
  /** 物理世界对象类编码 */
  rwdObjectType?: string;
};

/**
 * OpenAPI 组件类型：查询空间id集合下关联的设备DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpaceRelationDeviceDTO
 */
export type WorkOrderServiceSpaceRelationDeviceDTO = {
  /** 空间id集合 */
  spaceIdSet: string[];
  /** 忽略的设备id集合 */
  ignoreDeviceSetId?: string[];
  /** (专业+设备类)编码筛选条件集合 */
  majorAndClassCodes?: string[];
  /** 是否执行权限过滤，默认false */
  doPermission?: boolean;
};

/**
 * OpenAPI 组件类型：空间扫码-对象实例回显类
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/CreatWorkOrderInstanceVO
 */
export type WorkOrderServiceCreatWorkOrderInstanceVO = {
  /** 实例ID */
  id?: string;
  /** 对象实例名称 */
  localName?: string;
  /** 实例对象类编码 */
  classCode?: string;
  /** 实例对象类名称 */
  className?: string;
  /** 所属建筑实例id */
  buildingId?: string;
  /** 对象所在位置 */
  objectLocation?: string;
  /** 设备所在空间id */
  spaceId?: string;
  /** bdtp专业编码 */
  majorCode?: string;
  /** bdtp专业名称 */
  majorName?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
};

/**
 * OpenAPI 组件类型：RListSpaceOfDeviceVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListSpaceOfDeviceVO
 */
export type WorkOrderServiceRListSpaceOfDeviceVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceSpaceOfDeviceVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：SpaceOfDeviceVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpaceOfDeviceVO
 */
export type WorkOrderServiceSpaceOfDeviceVO = {
  /** 空间id */
  spaceId?: string;
  /** 空间名称 */
  spaceName?: string;
  /** 物业分区空间-所属父级treeNode */
  parentCode?: string;
  /** 物业分区空间-所属父级tree name */
  parentName?: string;
  /** 空间下的设备 */
  withInSpace?: WorkOrderServiceCreatWorkOrderInstanceVO[];
  /** 服务于空间的设备 */
  serviceSpace?: WorkOrderServiceCreatWorkOrderInstanceVO[];
};

/**
 * OpenAPI 组件类型：classCode下的设备实例
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ClassDetail
 */
export type WorkOrderServiceClassDetail = {
  /** classCode */
  classCode?: string;
  /** className */
  className?: string;
  /** 专业编码+设备编码 */
  majorAndClassCode?: string;
};

/**
 * OpenAPI 组件类型：MajorOfClassVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MajorOfClassVO
 */
export type WorkOrderServiceMajorOfClassVO = {
  /** bdtp专业编码 */
  majorCode?: string;
  /** bdtp专业名称 */
  majorName?: string;
  /** classCode下的设备实例 */
  classDetailList?: WorkOrderServiceClassDetail[];
};

/**
 * OpenAPI 组件类型：RListMajorOfClassVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListMajorOfClassVO
 */
export type WorkOrderServiceRListMajorOfClassVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceMajorOfClassVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：ClassOfDeviceVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ClassOfDeviceVO
 */
export type WorkOrderServiceClassOfDeviceVO = {
  /** 空间id */
  classCode?: string;
  /** 空间名称 */
  className?: string;
  /** classCode下的设备实例 */
  deviceList?: WorkOrderServiceCreatWorkOrderInstanceVO[];
};

/**
 * OpenAPI 组件类型：RListClassOfDeviceVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListClassOfDeviceVO
 */
export type WorkOrderServiceRListClassOfDeviceVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceClassOfDeviceVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：风险价值推荐维修措施措施请求入参DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskSuggestRepairRequestDTO
 */
export type WorkOrderServiceRiskSuggestRepairRequestDTO = {
  /** 异常事件id */
  exceptionEventId?: number;
  /** 初始问题 风险实例唯一key */
  originalProblemPjRiskInstanceBusinessId: string[];
  /** 初始问题对象实例id */
  instanceIds: string[];
  /** 措施类型: 查询推荐维修措施时必传 */
  controlTypes: "E1" | "E2" | "E3" | "E4" | "E5"[];
};

/**
 * OpenAPI 组件类型：可能的维修措施
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PjProblemRepair
 */
export type WorkOrderServicePjProblemRepair = {
  /** 实例Id */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
  /** 项目风险业务id(实体风险id), 更換沒有 */
  physicalRiskId?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 是否部件 */
  component?: boolean;
  /** 部件名称 */
  componentName?: string;
  /** 措施id */
  measureId?: string;
  /** 措施描述 */
  measureName?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
};

/**
 * OpenAPI 组件类型：RListRiskSuggestMeasuresVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListRiskSuggestMeasuresVO
 */
export type WorkOrderServiceRListRiskSuggestMeasuresVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceRiskSuggestMeasuresVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：对象实例实例集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskSuggestMeasures
 */
export type WorkOrderServiceRiskSuggestMeasures = {
  /** 实例名称 */
  instanceName?: string;
  /** classCode */
  classCode?: string;
  /** 所属建筑id */
  buildId?: string;
  /** 所属建筑名称 */
  buildName?: string;
  /** 所属楼层id */
  floorId?: string;
  /** 所属楼层名称 */
  floorName?: string;
  /** 楼层序列号，默认是楼层由第到低到高排序 */
  floorSort?: number;
  /** 所属建筑id */
  spaceId?: string;
  /** 所属建筑id */
  spaceName?: string;
  /** 对象位置信息-最后分组用 */
  objectPosition?: string;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
  /** 对象实例类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实例Id */
  instanceId?: string;
  /** 可能的维修措施 */
  suggestMeasures?: WorkOrderServicePjProblemRepair[];
  /** 部件维修数据 */
  componentLists?: WorkOrderServiceRiskSuggestMeasures[];
  /** 部件id */
  componentId?: string;
  /** 部件名称 */
  componentName?: string;
  build?: string;
};

/**
 * OpenAPI 组件类型：RiskSuggestMeasuresVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskSuggestMeasuresVO
 */
export type WorkOrderServiceRiskSuggestMeasuresVO = {
  /** 对象所在位置 */
  objectPosition?: string;
  /** 对象实例实例集合 */
  instanceList?: WorkOrderServiceRiskSuggestMeasures[];
};

/**
 * OpenAPI 组件类型：风险价值推荐问题、原因 请求入参DTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskSuggestRequestDTO
 */
export type WorkOrderServiceRiskSuggestRequestDTO = {
  /** 异常事件id */
  exceptionEventId: number;
  /** 初始问题 风险实例唯一key */
  originalProblemPjRiskInstanceBusinessId: string[];
  /** 初始问题对象实例id */
  instanceIds: string[];
};

/**
 * OpenAPI 组件类型：(风险实体分组,三要素一致)
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PjProblemInstance
 */
export type WorkOrderServicePjProblemInstance = {
  /** 项目风险业务id(实体风险id) */
  physicalRiskId: string;
  /** 实例Id */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 是否部件 */
  component?: boolean;
  /** 部件id */
  componentId?: string;
  /** 部件名称 */
  componentName?: string;
  /** 问题类id */
  feedbackResultId?: string;
  /** 问题类名称 */
  feedbackResultAlias?: string;
  /** 状态（异常、超征兆） */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
};

/**
 * OpenAPI 组件类型：可能的原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PjProblemInstanceWithGroup
 */
export type WorkOrderServicePjProblemInstanceWithGroup = {
  /** (风险实体分组,三要素一致) */
  physicalRiskGroup?: WorkOrderServicePjProblemInstance[];
};

/**
 * OpenAPI 组件类型：RListRiskSuggestReasonVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListRiskSuggestReasonVO
 */
export type WorkOrderServiceRListRiskSuggestReasonVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceRiskSuggestReasonVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：对象实例实例集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskSuggestReason
 */
export type WorkOrderServiceRiskSuggestReason = {
  /** 实例名称 */
  instanceName?: string;
  /** classCode */
  classCode?: string;
  /** 所属建筑id */
  buildId?: string;
  /** 所属建筑名称 */
  buildName?: string;
  /** 所属楼层id */
  floorId?: string;
  /** 所属楼层名称 */
  floorName?: string;
  /** 楼层序列号，默认是楼层由第到低到高排序 */
  floorSort?: number;
  /** 所属建筑id */
  spaceId?: string;
  /** 所属建筑id */
  spaceName?: string;
  /** 对象位置信息-最后分组用 */
  objectPosition?: string;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
  /** 对象实例类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实例Id */
  instanceId?: string;
  /** 可能的原因 */
  reasonProblemList?: WorkOrderServicePjProblemInstanceWithGroup[];
  /** 部件原因数据 */
  componentLists?: WorkOrderServiceRiskSuggestReason[];
  /** 部件id */
  componentId?: string;
  /** 部件名称 */
  componentName?: string;
  build?: string;
};

/**
 * OpenAPI 组件类型：RiskSuggestReasonVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskSuggestReasonVO
 */
export type WorkOrderServiceRiskSuggestReasonVO = {
  /** 对象所在位置 */
  objectPosition?: string;
  /** 对象实例实例集合 */
  instanceList?: WorkOrderServiceRiskSuggestReason[];
};

/**
 * OpenAPI 组件类型：RListRiskSuggestIssueVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListRiskSuggestIssueVO
 */
export type WorkOrderServiceRListRiskSuggestIssueVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceRiskSuggestIssueVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：对象实例实例集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskSuggestIssue
 */
export type WorkOrderServiceRiskSuggestIssue = {
  /** 实例名称 */
  instanceName?: string;
  /** classCode */
  classCode?: string;
  /** 所属建筑id */
  buildId?: string;
  /** 所属建筑名称 */
  buildName?: string;
  /** 所属楼层id */
  floorId?: string;
  /** 所属楼层名称 */
  floorName?: string;
  /** 楼层序列号，默认是楼层由第到低到高排序 */
  floorSort?: number;
  /** 所属建筑id */
  spaceId?: string;
  /** 所属建筑id */
  spaceName?: string;
  /** 对象位置信息-最后分组用 */
  objectPosition?: string;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
  /** 对象实例类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象实例id */
  instanceId?: string;
  /** 可能影响问题 */
  effectProblemList?: WorkOrderServicePjProblemInstance[];
  /** 部件问题数据 */
  componentLists?: WorkOrderServiceRiskSuggestIssue[];
  /** 部件id */
  componentId?: string;
  /** 部件名称 */
  componentName?: string;
  build?: string;
};

/**
 * OpenAPI 组件类型：RiskSuggestIssueVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskSuggestIssueVO
 */
export type WorkOrderServiceRiskSuggestIssueVO = {
  /** 对象所在位置 */
  objectPosition?: string;
  /** 对象实例实例集合 */
  instanceList?: WorkOrderServiceRiskSuggestIssue[];
};

/**
 * OpenAPI 组件类型：QuerySpaceTreeByFloorDTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/QuerySpaceTreeByFloorDTO
 */
export type WorkOrderServiceQuerySpaceTreeByFloorDTO = {
  buildId: string;
  floorId: string;
  doPermission?: boolean;
};

/**
 * OpenAPI 组件类型：空间节点集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MeoiSpaceTreeNodeVo
 */
export type WorkOrderServiceMeoiSpaceTreeNodeVo = {
  /** 子节点 */
  children?: WorkOrderServiceMeoiSpaceTreeNodeVo[];
  /** 建筑id */
  buildId?: string;
  /** 建筑名称 */
  buildName?: string;
  /** classCode或空间类型编码 */
  classCode?: string;
  /** 空间实例id或空间类型编码 */
  code?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 空间名称或空间类型名称 */
  name?: string;
  /** 节点类型: 空间分类:spaceclass, 空间 space */
  nodeType?: string;
  /** 其下实例数量 */
  objCount?: number;
  /** 位置 */
  objectLocation?: string;
  /** 父级节点编码 */
  parentCode?: string;
  /** 排序 */
  sortOrder?: number;
  /** 空间id */
  spaceId?: string;
};

/**
 * OpenAPI 组件类型：MeoiSpaceTreeResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MeoiSpaceTreeResultVo
 */
export type WorkOrderServiceMeoiSpaceTreeResultVo = {
  /** 实例数量 */
  objCount?: number;
  /** 空间节点集合 */
  nodes?: WorkOrderServiceMeoiSpaceTreeNodeVo[];
};

/**
 * OpenAPI 组件类型：RMeoiSpaceTreeResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RMeoiSpaceTreeResultVo
 */
export type WorkOrderServiceRMeoiSpaceTreeResultVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceMeoiSpaceTreeResultVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：模糊搜索空间历史集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SearchSpaceByParamDTO
 */
export type WorkOrderServiceSearchSpaceByParamDTO = {
  /** 项目编码 */
  projectId: string;
  /** 建筑id编码 */
  buildId?: string;
  /** 楼层id编码 */
  floorId?: string;
  /** 是否过滤空间类型,默认否 */
  spaceTypeFilter?: boolean;
  /** 模糊搜索条件 */
  searchParam: string;
};

/**
 * OpenAPI 组件类型：空间实例
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpacePageVO
 */
export type WorkOrderServiceSpacePageVO = {
  /** 空间id,id属性不可查 */
  id?: string;
  /** 空间实例id */
  spaceId?: string;
  /** 空间本地名称 */
  localName?: string;
  /** 空间名称 */
  name?: string;
  /** 所属楼层id */
  floorId?: string;
  /** 所在楼层描述 */
  floorDesc?: string;
  /** 空间所在节点 */
  spaceType?: string;
  /** 所属建筑id */
  buildId?: string;
  /** 建筑名称 */
  buildingName?: string;
};

/**
 * OpenAPI 组件类型：查询楼层维度空间树结构请求入参实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/QueryFloorSpaceTreeDTO
 */
export type WorkOrderServiceQueryFloorSpaceTreeDTO = {
  /** 项目编码 */
  projectId: string;
  /** 建筑id */
  buildId: string;
  /** 楼层id */
  floorId: string;
  /** 是否过滤空间类型,默认否 */
  spaceTypeFilter?: boolean;
};

/**
 * OpenAPI 组件类型：FmWorkLeafNode
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/FmWorkLeafNode
 */
export type WorkOrderServiceFmWorkLeafNode = {
  /** 父级树节点编码,可以为空 */
  parentCode?: string;
  /** 名称 */
  name?: string;
  /** 末级节点空间实例集合 */
  children?: WorkOrderServiceSpacePageVO[];
  /** 顺序 */
  sortIdx?: number;
  /** 节点类型 */
  nodeType?: "PROJECT" | "BUILDING" | "FLOOR" | "SPACE" | "EQUIPMENT" | "SHAFT" | "MAJOR" | "VIRTUAL" | "TOOL" | "MATERIAL" | "PARTITION" | "EQUIPMENT_GROUP" | "SYSTEM_OBJECT" | "GROUP" | "SPACE_PARENT_CLASS" | "SPACE_CLASS_AIM_V7" | "FUNCID" | "PARTITION_CLASS" | "BUSINESS_TAG" | "PIPE" | "PROJECT_CLASS" | "BUILDING_CLASS" | "FLOOR_CLASS" | "SYSTEM" | "EQUIPMENT_CLASS" | "EQUIP_GROUP_CLASS" | "SPACE_CLASS" | "SHAFT_CLASS" | "VIRTUAL_CLASS" | "TOOL_CLASS" | "MATERIAL_CLASS" | "UNDEFINED";
  /** 节点classCode */
  classCode?: string;
  /** 空间类型分类 */
  spaceType?: string;
  /** 空间实例id */
  spaceId?: string;
  /** 所属建筑id */
  buildId?: string;
  buildingName?: string;
  /** 所属楼层id */
  floorId?: string;
  /** 所在楼层描述 */
  floorDesc?: string;
  /** 空间本地名称 */
  localName?: string;
  /** 树节点编码 */
  id?: string;
};

/**
 * OpenAPI 组件类型：AimTreeNode
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/FmWorkTreeNode
 */
export type WorkOrderServiceFmWorkTreeNode = {
  /** 父级树节点编码,可以为空 */
  parentCode?: string;
  /** 名称 */
  name?: string;
  /** 下级节点 */
  children?: WorkOrderServiceFmWorkLeafNode[];
  /** 顺序 */
  sortIdx?: number;
  /** 节点类型 */
  nodeType?: "PROJECT" | "BUILDING" | "FLOOR" | "SPACE" | "EQUIPMENT" | "SHAFT" | "MAJOR" | "VIRTUAL" | "TOOL" | "MATERIAL" | "PARTITION" | "EQUIPMENT_GROUP" | "SYSTEM_OBJECT" | "GROUP" | "SPACE_PARENT_CLASS" | "SPACE_CLASS_AIM_V7" | "FUNCID" | "PARTITION_CLASS" | "BUSINESS_TAG" | "PIPE" | "PROJECT_CLASS" | "BUILDING_CLASS" | "FLOOR_CLASS" | "SYSTEM" | "EQUIPMENT_CLASS" | "EQUIP_GROUP_CLASS" | "SPACE_CLASS" | "SHAFT_CLASS" | "VIRTUAL_CLASS" | "TOOL_CLASS" | "MATERIAL_CLASS" | "UNDEFINED";
  /** 节点classCode */
  classCode?: string;
  /** 空间类型分类 */
  spaceType?: string;
  /** 树节点编码 */
  id?: string;
};

/**
 * OpenAPI 组件类型：模糊搜索对象类入参实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ObjectTypeTreeSearchDTO
 */
export type WorkOrderServiceObjectTypeTreeSearchDTO = {
  /** 页码 */
  pageNum: number;
  /** 每页行数 */
  pageSize: number;
  /** 模糊查询关键字 */
  searchParam: string;
  /** 对象类型编码:系统-system,设备-equipmentclass，设备组-equipGroupClass，空间-space */
  objectType: string;
};

/**
 * OpenAPI 组件类型：PageSelectObjectTypeVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PageSelectObjectTypeVO
 */
export type WorkOrderServicePageSelectObjectTypeVO = {
  records?: WorkOrderServiceSelectObjectTypeVO[];
  total?: number;
  size?: number;
  current?: number;
  orders?: WorkOrderServiceOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  countId?: string;
  maxLimit?: number;
  pages?: number;
};

/**
 * OpenAPI 组件类型：RPageSelectObjectTypeVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RPageSelectObjectTypeVO
 */
export type WorkOrderServiceRPageSelectObjectTypeVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServicePageSelectObjectTypeVO;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：搜索对象类接口回显对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SelectObjectTypeVO
 */
export type WorkOrderServiceSelectObjectTypeVO = {
  /** 对象编码 */
  code?: string;
  /** 对象类型编码 */
  objectClassCode?: string;
  /** 对象类型名称 */
  objectClassName?: string;
  /** 对象类型 系统-system,设备-equipmentclass，设备组-equipGroupclass，空间-spaceclass */
  objectType?: string;
  /** 对象类下实例数量 */
  objCount?: number;
};

/**
 * OpenAPI 组件类型：JobTypeVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JobTypeVo
 */
export type WorkOrderServiceJobTypeVo = {
  jobTypeId?: string;
  workType?: string;
  workTypeName?: string;
  jobTypeName?: string;
  sourceChannel?: Record<string, never>[];
  editFlag?: boolean;
  editNameFlag?: boolean;
  enableFlag?: boolean;
  deleteFlag?: boolean;
  valid?: boolean;
  enable?: boolean;
  createTime?: string;
  updateTime?: string;
  page?: number;
  pageSize?: number;
  workTypeList?: string[];
  sourceChannelList?: string[];
  sortByWorkType?: boolean;
};

/**
 * OpenAPI 组件类型：JobTypeQuery
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JobTypeQuery
 */
export type WorkOrderServiceJobTypeQuery = {
  /** 工作类型集合 */
  workTypes?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE"[];
  /** 搜索名称 */
  searchName?: string;
};

/**
 * OpenAPI 组件类型：工作分类信息dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JobTypeInfoDto
 */
export type WorkOrderServiceJobTypeInfoDto = {
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  jobTypeName?: string;
  jobTypeId?: string;
};

/**
 * OpenAPI 组件类型：RListJobTypeInfoDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListJobTypeInfoDto
 */
export type WorkOrderServiceRListJobTypeInfoDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceJobTypeInfoDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：DownloadDataVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DownloadDataVo
 */
export type WorkOrderServiceDownloadDataVo = {
  workOrderId: string;
};

/**
 * OpenAPI 组件类型：WorkOrderObjectCostDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderObjectCostDto
 */
export type WorkOrderServiceWorkOrderObjectCostDto = {
  id?: number;
  orderId?: string;
  objectId?: string;
  costObjectType?: "OBJECT_TYPE_EQUIPMENT" | "OBJECT_TYPE_EQUIPMENT_PART" | "OTHER";
  finishTime?: string;
  dataType?: "DATA_TYPE_OBJECT" | "DATA_TYPE_WORK_ORDER";
  costType?: "COST_TYPE_REPAIR" | "COST_TYPE_REPLACE" | "COST_TYPE_CONSUMABLE" | "COST_TYPE_ESTIMATE" | "COST_TYPE_ACTUAL";
  costAmount?: number;
  processMajorCode?: string;
  createTime?: string;
  lastUpdateTime?: string;
  isDeleted?: number;
  projectId?: string;
};

/**
 * OpenAPI 组件类型：RWorkStageAggregateRootVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkStageAggregateRootVO
 */
export type WorkOrderServiceRWorkStageAggregateRootVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkStageAggregateRootVO;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：风险流程配置工作阶段实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRiskProcessStageVO
 */
export type WorkOrderServiceWorkOrderRiskProcessStageVO = {
  /** 阶段主键 */
  stageId?: string;
  /** 风险流程id */
  processId?: string;
  /** 阶段编码 */
  stageCode?: string;
  /** 工作环节编码 */
  workLinkCode?: string;
  /** 是否启用 */
  isEnabled?: boolean;
  /** 审批、审核条件值集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 是否允许编辑 */
  isEditable?: boolean;
  /** 配置是否可见 */
  isConfigVisible?: boolean;
  /** 是否可以添加条件 */
  isConditionAddable?: boolean;
  /** 条件编码集 */
  conditionCodeSet?: string[];
  /** 工作项集合 */
  workItemList?: WorkOrderServiceWorkOrderRiskProcessWorkItemVO[];
};

/**
 * OpenAPI 组件类型：风险流程-工作阶段-工作项实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRiskProcessWorkItemVO
 */
export type WorkOrderServiceWorkOrderRiskProcessWorkItemVO = {
  /** 工作项 ID */
  workItemId?: string;
  /** 风险流程ID */
  processId?: string;
  /** 工作项编码 */
  workItemCode?: string;
  /** 所属阶段id */
  stageId?: string;
  /** 是否默认启用： 0 否、1 是 */
  isEnabled?: boolean;
  /** 通用要求 */
  generalRequirement?: "COMMON" | "OPTIONAL" | "CONDITIONAL";
  /** 响应方式 */
  workOrderActionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
  /** 条件值集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 是否允许编辑 */
  isEditable?: boolean;
  /** 配置是否可见 */
  isConfigVisible?: boolean;
  /** 是否可以添加条件 */
  isConditionAddable?: boolean;
  /** 条件编码集 */
  conditionCodeSet?: string[];
};

/**
 * OpenAPI 组件类型：风险流程-工作阶段查询回显对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkStageAggregateRootVO
 */
export type WorkOrderServiceWorkStageAggregateRootVO = {
  /** 工作阶段集合 */
  workStageList?: WorkOrderServiceWorkOrderRiskProcessStageVO[];
};

/**
 * OpenAPI 组件类型：延期原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DelayReasonVo
 */
export type WorkOrderServiceDelayReasonVo = {
  /** 原因id */
  id?: string;
  /** 原因名称 */
  explanation?: string;
};

/**
 * OpenAPI 组件类型：RWorkOrderApplyExtensionOrEndVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderApplyExtensionOrEndVo
 */
export type WorkOrderServiceRWorkOrderApplyExtensionOrEndVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderApplyExtensionOrEndVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：申请延期或终止Vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderApplyExtensionOrEndVo
 */
export type WorkOrderServiceWorkOrderApplyExtensionOrEndVo = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  /** 延期小时数 */
  delayHour?: number;
  delayReason?: WorkOrderServiceDelayReasonVo;
  /** 延期说明 */
  description?: string;
  /** 图片集合 */
  images?: string[];
  /** 语音备注 */
  sounds?: WorkOrderServiceSound[];
  /** 执行人集合 */
  executors?: string[];
  /** 要求完成时间 */
  askEndTime?: string;
  /** 申请人名称 */
  applyPersonName?: string;
  /** 申请人id */
  applyPersonId?: string;
  /** 申请时间 */
  applyTime?: string;
};

/**
 * OpenAPI 组件类型：ApplyPermissionVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApplyPermissionVo
 */
export type WorkOrderServiceApplyPermissionVo = {
  /** 是否可以申请加人 */
  applyAddingPeople?: boolean;
  /** 是否可以申请换人 */
  applyReplacePeople?: boolean;
  /** 是否可以申请延期 */
  applyDelay?: boolean;
  /** 是否可以申请终止 */
  applyStop?: boolean;
};

/**
 * OpenAPI 组件类型：RApplyPermissionVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RApplyPermissionVo
 */
export type WorkOrderServiceRApplyPermissionVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceApplyPermissionVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：用户报事单详情查询query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportOrderDetailQuery
 */
export type WorkOrderServiceUserReportOrderDetailQuery = {
  /** 工单id */
  orderId: string;
  /** 人员id */
  personId?: string;
};

/**
 * OpenAPI 组件类型：用户报事响应信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ActionContentDto
 */
export type WorkOrderServiceActionContentDto = {
  /** 响应类型 */
  workOrderActionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  /** 响应人id */
  actionPersonId?: string;
  /** 响应人名称 */
  actionPersonName?: string;
  /** 响应时间 */
  actionTime?: string;
  /** 响应扫码信息 */
  scanInfo?: string;
  /** 响应照片 */
  images?: string[];
  /** 要求响应时间 */
  requiredActionTime?: string;
  /** 响应状态 */
  actionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION";
};

/**
 * OpenAPI 组件类型：关联的异常事件信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExceptionEventDto
 */
export type WorkOrderServiceExceptionEventDto = {
  /** 异常事件id */
  eventId?: string;
  /** 异常事件编码 */
  eventNumber?: string;
  /** 异常事件名称 */
  eventName?: string;
};

/**
 * OpenAPI 组件类型：PC端用户报事单详情vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PcUserReportOrderVo
 */
export type WorkOrderServicePcUserReportOrderVo = {
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  workName?: string;
  /** 工单编码 */
  workNumber?: string;
  /** 工单状态 */
  orderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 要求完成时间 */
  requiredCompletionTime?: string;
  /** 创建时间 */
  createTime?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 创建人名称 */
  creatorName?: string;
  /** 工单流程id */
  flowId?: string;
  /** 工单流程名称 */
  flowName?: string;
  /** 工作类型分类编码 */
  workType?: string;
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 是否逾期：true-是，false-否 */
  overDueFlag?: boolean;
  /** 处理专业名称 */
  processMajorName?: string;
  reportData?: WorkOrderServiceUserReportWoBodyDto;
  actionContent?: WorkOrderServiceActionContentDto;
  staffOrderDto?: WorkOrderServiceStaffOrderDto;
  /** 管控需求信息,开始前信息 */
  beforeControlExecRecords?: WorkOrderServiceRequireControlExecRecordVo[];
  /** 管控需求信息,执行后信息 */
  afterControlExecRecords?: WorkOrderServiceRequireControlExecRecordVo[];
  /** 报事报修问题信息 */
  problems?: WorkOrderServiceProblemDto[];
  /** 关联的异常事件信息 */
  exceptionEvent?: WorkOrderServiceExceptionEventDto[];
  /** 报事报修维修任务信息 */
  repairTasks?: WorkOrderServiceTaskInstanceDto[];
  /** 解决状态 */
  resolveStatus?: "UN_RESOLVED" | "TIMED_OUT_UN_RESOLVED" | "RESOLVED_ON_TIME" | "TIMED_OUT_RESOLVED";
  /** 回访状态 */
  revisitStatus?: "REVISIT" | "TIMED_OUT_REVISIT" | "UN_REVISIT" | "TIMED_OUT_UN_REVISIT" | "NEED_FOLLOW_UP";
  cancelDetail?: WorkOrderServiceCancelDto;
  /** 能否编辑 */
  canEdit?: boolean;
  /** 能否取消 */
  canCancel?: boolean;
  editDetail?: WorkOrderServiceEditDto;
  reporterEvaluation?: WorkOrderServiceReporterEvaluationDto;
  revisitRecordEvaluation?: WorkOrderServiceRevisitRecordEvaluationDto;
};

/**
 * OpenAPI 组件类型：报事报修问题信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemDto
 */
export type WorkOrderServiceProblemDto = {
  /** 物理世界实例id */
  instanceId?: string;
  /** 物理世界实例名称 */
  instanceName?: string;
  /** 对象分组问题集合 */
  problemDetails?: WorkOrderServiceProblemDetailDto[];
};

/**
 * OpenAPI 组件类型：RPcUserReportOrderVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RPcUserReportOrderVo
 */
export type WorkOrderServiceRPcUserReportOrderVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServicePcUserReportOrderVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：关联的员工整改单信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/StaffOrderDto
 */
export type WorkOrderServiceStaffOrderDto = {
  /** 关联员工整改单id */
  staffOrderId?: string;
  /** 关联员工整改单名称 */
  staffOrderName?: string;
};

/**
 * OpenAPI 组件类型：任务详细信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskDetailDto
 */
export type WorkOrderServiceTaskDetailDto = {
  /** 实际费用 */
  actualCost?: number;
  /** 维修费用 */
  repairCost?: number;
  /** 执行人 */
  executors?: string[];
  /** 执行结果 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 是否完成 */
  isFinish?: boolean;
  /** 任务图片 */
  sceneImages?: string[];
  /** 任务视频 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 实际完成时间 */
  relEndTime?: string;
  /** 备注 */
  remark?: string;
  /** 任务编码 */
  taskCode?: string;
  /** 任务名称 */
  taskName?: string;
  /** 任务描述 */
  taskDesc?: string;
  /** rcc措施id */
  rccMeasureId?: string;
  /** 可执行措施id */
  exeMeasureId?: string;
  /** 是否自定义 */
  isCustom?: boolean;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
  /** 是否用户选择的处理专业 */
  isUserSelectedMajor?: boolean;
};

/**
 * OpenAPI 组件类型：报事报修维修任务信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskInstanceDto
 */
export type WorkOrderServiceTaskInstanceDto = {
  /** 物理世界实例id */
  instanceId?: string;
  /** 物理世界实例名称 */
  instanceName?: string;
  /** 任务信息 */
  taskDetail?: WorkOrderServiceTaskDetailDto[];
};

/**
 * OpenAPI 组件类型：当日应完成事项
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ClassifyStatistics
 */
export type WorkOrderServiceClassifyStatistics = {
  /** 分类总数量 */
  allCount?: number;
  classifyItem?: WorkOrderServiceItem;
};

/**
 * OpenAPI 组件类型：用户报事单,未完成报事统计dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/IncompleteMatterStatisticsDto
 */
export type WorkOrderServiceIncompleteMatterStatisticsDto = {
  incompleteMatter?: WorkOrderServiceClassifyStatistics;
  timedOutUnResolvedMatter?: WorkOrderServiceClassifyStatistics;
  timedOutUnActionMatter?: WorkOrderServiceClassifyStatistics;
  dayBeCompletedMatter?: WorkOrderServiceClassifyStatistics;
};

/**
 * OpenAPI 组件类型：分类事项
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/Item
 */
export type WorkOrderServiceItem = {
  /** 报事报修数量 */
  reportRepairCount?: number;
  /** 协助需求数量 */
  assistanceNeedCount?: number;
  /** 意见投诉数量 */
  commentCount?: number;
  /** 优化建议数量 */
  optimizationSuggestionCount?: number;
};

/**
 * OpenAPI 组件类型：RIncompleteMatterStatisticsDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RIncompleteMatterStatisticsDto
 */
export type WorkOrderServiceRIncompleteMatterStatisticsDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceIncompleteMatterStatisticsDto;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：初始用户报事信息vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/InitialUserReportOrderInfoVo
 */
export type WorkOrderServiceInitialUserReportOrderInfoVo = {
  /** 工单名称 */
  workName?: string;
  /** 工单编码 */
  workNumber?: string;
  /** 报事类型名称 */
  reportTypeName?: string;
  /** 问题性质标签名称 */
  problemNatureName?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 报事位置 */
  positionName?: string;
  /** 预约时间 */
  appointmentTime?: string;
  /** 要求响应时间 */
  requiredActionTime?: string;
  /** 期望完成时间 */
  requiredCompletionTime?: string;
  /** 报事人 */
  contacts?: string;
  /** 联系电话 */
  phone?: string;
  /** 创建人 */
  creatorName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 事项描述 */
  description?: string;
  /** 照片 */
  photos?: string[];
  /** 视频 */
  videos?: WorkOrderServiceVideo[];
  /** 空间标签 */
  positionAssert?: WorkOrderServicePositionAssert[];
  /** 工单流程id */
  flowId?: string;
  /** 工单流程名称 */
  flowName?: string;
};

/**
 * OpenAPI 组件类型：RInitialUserReportOrderInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RInitialUserReportOrderInfoVo
 */
export type WorkOrderServiceRInitialUserReportOrderInfoVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceInitialUserReportOrderInfoVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：APP端用户报事单详情vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AppUserReportOrderVo
 */
export type WorkOrderServiceAppUserReportOrderVo = {
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  workName?: string;
  /** 工单编码 */
  workNumber?: string;
  /** 工单状态 */
  orderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 要求完成时间 */
  requiredCompletionTime?: string;
  /** 创建时间 */
  createTime?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 创建人名称 */
  creatorName?: string;
  /** 工单流程id */
  flowId?: string;
  /** 工单流程名称 */
  flowName?: string;
  /** 工作类型分类编码 */
  workType?: string;
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 是否逾期：true-是，false-否 */
  overDueFlag?: boolean;
  /** 处理专业名称 */
  processMajorName?: string;
  reportData?: WorkOrderServiceUserReportWoBodyDto;
  actionContent?: WorkOrderServiceActionContentDto;
  staffOrderDto?: WorkOrderServiceStaffOrderDto;
  /** 管控需求信息,开始前信息 */
  beforeControlExecRecords?: WorkOrderServiceRequireControlExecRecordVo[];
  /** 管控需求信息,执行后信息 */
  afterControlExecRecords?: WorkOrderServiceRequireControlExecRecordVo[];
  /** 报事报修问题信息 */
  problems?: WorkOrderServiceProblemDto[];
  /** 关联的异常事件信息 */
  exceptionEvent?: WorkOrderServiceExceptionEventDto[];
  /** 报事报修维修任务信息 */
  repairTasks?: WorkOrderServiceTaskInstanceDto[];
  /** 解决状态 */
  resolveStatus?: "UN_RESOLVED" | "TIMED_OUT_UN_RESOLVED" | "RESOLVED_ON_TIME" | "TIMED_OUT_RESOLVED";
  /** 回访状态 */
  revisitStatus?: "REVISIT" | "TIMED_OUT_REVISIT" | "UN_REVISIT" | "TIMED_OUT_UN_REVISIT" | "NEED_FOLLOW_UP";
  cancelDetail?: WorkOrderServiceCancelDto;
  /** 能否编辑 */
  canEdit?: boolean;
  /** 能否取消 */
  canCancel?: boolean;
  editDetail?: WorkOrderServiceEditDto;
  reporterEvaluation?: WorkOrderServiceReporterEvaluationDto;
  revisitRecordEvaluation?: WorkOrderServiceRevisitRecordEvaluationDto;
};

/**
 * OpenAPI 组件类型：RAppUserReportOrderVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RAppUserReportOrderVo
 */
export type WorkOrderServiceRAppUserReportOrderVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceAppUserReportOrderVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RListWorkTypeDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkTypeDto
 */
export type WorkOrderServiceRListWorkTypeDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkTypeDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkTypeDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkTypeDto
 */
export type WorkOrderServiceWorkTypeDto = {
  workType?: string;
  workTypeName?: string;
  jobTypeId?: string;
  jobTypeName?: string;
  workSort?: number;
};

/**
 * OpenAPI 组件类型：员工整改单详情查询query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/StaffRectificationOrderDetailQuery
 */
export type WorkOrderServiceStaffRectificationOrderDetailQuery = {
  /** 工单id */
  orderId: string;
};

/**
 * OpenAPI 组件类型：整改人
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExecutorDto
 */
export type WorkOrderServiceExecutorDto = {
  /** 执行人id */
  personId?: string;
  /** 执行人名称 */
  personName?: string;
};

/**
 * OpenAPI 组件类型：RStaffRectificationOrderVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RStaffRectificationOrderVo
 */
export type WorkOrderServiceRStaffRectificationOrderVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceStaffRectificationOrderVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：员工整改单Data
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RectificationDataDto
 */
export type WorkOrderServiceRectificationDataDto = {
  /** 整改图片 */
  completionPictures?: string[];
  /** 对策以及实施计划 */
  countermeasureAndPlan?: string;
  /** 对策以及实施计划 */
  executor?: WorkOrderServiceExecutorDto[];
  /** 图片 */
  photos?: string[];
  /** 整改人 */
  rectificationPerson?: WorkOrderServiceExecutorDto[];
  /** 整改原因 */
  rectificationReason?: string;
  /** 来源名称 */
  sourceName?: string;
  /** 来源类型：code为2或者4 */
  sourceType?: "ABNORMAL_EVENT_TO_INVESTIGATION_ORDER" | "USER_REPORT_TO_STAFF_CORRECTION" | "USER_REPORT_TO_INVESTIGATION_ORDER" | "ABNORMAL_EVENT_TO_STAFF_CORRECTION" | "USER_REPORT_TO_ABNORMAL_EVENT" | "REVISIT_ORDER_TO_USER_REPORT";
  /** 来源id */
  sourceOrderId?: string;
  /** 问题视频 */
  videos?: WorkOrderServiceVideo[];
  /** 整改视频 */
  correctionVideos?: WorkOrderServiceVideo[];
};

/**
 * OpenAPI 组件类型：员工整改单详情vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/StaffRectificationOrderVo
 */
export type WorkOrderServiceStaffRectificationOrderVo = {
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  workName?: string;
  /** 工单编码 */
  workNumber?: string;
  /** 工单状态 */
  orderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 要求完成时间 */
  requiredCompletionTime?: string;
  /** 创建时间 */
  createTime?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 创建人名称 */
  creatorName?: string;
  /** 工单流程id */
  flowId?: string;
  /** 工单流程名称 */
  flowName?: string;
  /** 工作类型分类编码 */
  workType?: string;
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 是否逾期：true-是，false-否 */
  overDueFlag?: boolean;
  /** 处理专业名称 */
  processMajorName?: string;
  rectificationData?: WorkOrderServiceRectificationDataDto;
};

/**
 * OpenAPI 组件类型：ExceptionEventVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExceptionEventVo
 */
export type WorkOrderServiceExceptionEventVo = {
  /** 异常事件id */
  exceptionEventId?: string;
  /** 异常事件编码 */
  exceptionEventCode?: string;
  /** 异常事件名称 */
  exceptionEventName?: string;
};

/**
 * OpenAPI 组件类型：RListExceptionEventVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListExceptionEventVo
 */
export type WorkOrderServiceRListExceptionEventVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceExceptionEventVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderRemarkVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderRemarkVO
 */
export type WorkOrderServiceRListWorkOrderRemarkVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderRemarkVO[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：工单备注记录实体
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRemarkVO
 */
export type WorkOrderServiceWorkOrderRemarkVO = {
  /** 人员id */
  personId?: string;
  /** 人员名称 */
  personName?: string;
  /** 创建备注-时间戳 */
  operateTime?: number;
  /** 备注说明 */
  remark?: string;
  /** 操作描述 */
  description?: string;
  /** 图片 */
  images?: string[];
  /** 音频 */
  sounds?: WorkOrderServiceSound[];
  /** 视频 */
  videos?: WorkOrderServiceVideo[];
};

/**
 * OpenAPI 组件类型：RReportObj
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RReportObj
 */
export type WorkOrderServiceRReportObj = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceReportObj;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderBaseVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderBaseVo
 */
export type WorkOrderServiceRListWorkOrderBaseVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderBaseVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderBaseVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderBaseVo
 */
export type WorkOrderServiceWorkOrderBaseVo = {
  /** 工单id */
  orderId?: string;
  /** 工单状态 */
  orderState?: string;
  /** 工单要求完成时间 */
  requiredCompletionTime?: string;
  /** 工单名称 */
  workName?: string;
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单执行人信息 */
  executePersonInfoList?: WorkOrderServicePersonInfo[];
  /** 实际支出 */
  actualCost?: number;
};

/**
 * OpenAPI 组件类型：描述影响
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ActualImpact
 */
export type WorkOrderServiceActualImpact = {
  /** 实际影响 */
  additionalDescriptionImpact?: string;
  /** 实际影响id */
  impactId?: string;
  /** 是否关键问题 */
  isCritical?: boolean;
};

/**
 * OpenAPI 组件类型：报警监测对象信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AlarmMonitorObjVo
 */
export type WorkOrderServiceAlarmMonitorObjVo = {
  /** 监测仪器对象实例id */
  instanceId?: string;
  /** 报警原因 */
  alarmReason?: string;
  /** 报警备注 */
  alarmRemark?: string;
  /** 监测仪器 */
  instanceName?: string;
  /** 监测仪器对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 设备使用地点 */
  deviceLocation?: string;
  /** 监测仪器对象所属系统编码 */
  systemCode?: string;
  /** 监测仪器对象所属系统名称 */
  systemName?: string;
};

/**
 * OpenAPI 组件类型：关闭类型工单展示信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/CloseWorkOrderVo
 */
export type WorkOrderServiceCloseWorkOrderVo = {
  /** 关闭类型 CLASSIFICATION_CLOSED：分类已关闭 ASSIGNMENT_CLOSED：指派已关闭 APPLICATION_TERMINATED：申请终止 */
  workOrderCloseType?: "CLASSIFICATION_CLOSED" | "ASSIGNMENT_CLOSED" | "APPLICATION_TERMINATED" | "SYSTEM_STOP";
  /** 关闭原因  FAKE_ALARM：误报 RECOVERED：已恢复 IGNORE：本次暂不处理 */
  workOrderCloseReason?: "FAKE_ALARM" | "RECOVERED" | "IGNORE";
  /** 关闭备注 */
  closeRemark?: string;
  /** 终止人 */
  closer?: string;
  /** 终止时间 */
  closeTime?: string;
  /** 现场照片 */
  photos?: string[];
};

/**
 * OpenAPI 组件类型：IOT监测结果
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/IotMonitoringResults
 */
export type WorkOrderServiceIotMonitoringResults = {
  /** 工单iot类型枚举 */
  workOrderIotType?: "NON_IOT" | "IOT_ALARM_VERIFICATION" | "IOT_CANCEL_ALARM_VERIFICATION" | "OPS_IOT" | "SELF_REPAIR";
  /** 核实选项 */
  verifyOption?: "NORMAL" | "EXCEPTION" | "EXCEPTION_PROCESSED";
  /** 本次暂不处理  0  否   1：是 */
  notHandledThisTime?: string;
  /** 误报原因 */
  falseAlarmReason?: string;
  /** 补充说明 */
  iotDescription?: string;
  /** 核实照片 */
  photos?: string[];
  /** 核实视频集合 */
  videos?: WorkOrderServiceVideo[];
};

/**
 * OpenAPI 组件类型：问题发生原因卡片
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/IssueCause
 */
export type WorkOrderServiceIssueCause = {
  /** 问题原因 */
  problemName?: string;
  /** 对象实例id */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  taskDataInfo?: WorkOrderServiceTaskDataInfo;
  /** 是否自定义 */
  isCustom?: boolean;
};

/**
 * OpenAPI 组件类型：发生原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemCauseInfo
 */
export type WorkOrderServiceProblemCauseInfo = {
  /** 发生问题原因卡片 */
  issueCauses?: WorkOrderServiceIssueCause[];
  /** 备注说明 */
  causeDescription?: string;
};

/**
 * OpenAPI 组件类型：问题描述
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemInfo
 */
export type WorkOrderServiceProblemInfo = {
  /** 对象实例id */
  instanceId?: string;
  /** 对象类型: PROJECT,BUILDING,FLOOR,SPACE,EQUIPMENT,EQUIPMENT_GROUP,SYSTEM */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 发生问题的设备 */
  instanceName?: string;
  /** 设备使用地点 */
  deviceLocation?: string;
  /** 发生问题的设备信息点名称 */
  infoCodeName?: string;
  /** 问题名称 */
  problemName?: string;
  /** 现场照片 */
  handlerPhotos?: string;
  /** 现场视频集合 */
  sceneVideos?: WorkOrderServiceVideo[];
  taskDataInfo?: WorkOrderServiceTaskDataInfo;
  /** 补充描述影响 */
  actualImpacts?: WorkOrderServiceActualImpact[];
  /** 备注信息 */
  remarkInfo?: string;
  repairInfo?: WorkOrderServiceRepairInfo;
  alarmMonitorObjVo?: WorkOrderServiceAlarmMonitorObjVo;
};

/**
 * OpenAPI 组件类型：RWorkOrderDetailsForPCVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderDetailsForPCVo
 */
export type WorkOrderServiceRWorkOrderDetailsForPCVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderDetailsForPCVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：关联问题卡片
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RelatedIssues
 */
export type WorkOrderServiceRelatedIssues = {
  /** 引发的问题 */
  problemName?: string;
  /** 对象实例id */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  taskDataInfo?: WorkOrderServiceTaskDataInfo;
  /** 补充描述影响 */
  actualImpacts?: WorkOrderServiceActualImpact[];
};

/**
 * OpenAPI 组件类型：问题影响
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RelatedProblem
 */
export type WorkOrderServiceRelatedProblem = {
  /** 问题影响卡片 */
  relatedIssues?: WorkOrderServiceRelatedIssues[];
  /** 备注说明 */
  impactDescription?: string;
  /** 是否有权限操作 */
  hasPermissionOperate?: boolean;
};

/**
 * OpenAPI 组件类型：报事对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairInfo
 */
export type WorkOrderServiceRepairInfo = {
  /** 姓名 */
  name?: string;
  /** 岗位 */
  position?: string;
  /** 联系电话 */
  contactNumber?: string;
  /** 报修时间 */
  repairTime?: string;
  /** 保修来源 */
  warrantySource?: string;
};

/**
 * OpenAPI 组件类型：维修方案
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairPlan
 */
export type WorkOrderServiceRepairPlan = {
  /** 提交人id */
  submitPersonId?: string;
  /** 提交人名称 */
  submitPersonName?: string;
  /** 提交人手机号 */
  submitPersonPone?: string;
  /** 提交人时间 */
  submitTime?: string;
  /** 维修方案集合 */
  repairPlanDetails?: WorkOrderServiceRepairPlanDetail[];
  /** 备注说明 */
  repairPlanDescription?: string;
  /** 是否有权限操作 */
  hasPermissionOperate?: boolean;
};

/**
 * OpenAPI 组件类型：维修方案详情
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairPlanDetail
 */
export type WorkOrderServiceRepairPlanDetail = {
  /** 对象实例id */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** 方案集合 */
  repairPlanInfos?: WorkOrderServiceRepairPlanInfo[];
  /** 维修前拍摄的照片 */
  preRepairPhoto?: string[];
  /** 维修后拍摄的照片 */
  postRepairPhoto?: string[];
  /** 维修前拍摄的视频 */
  preRepairVideos?: WorkOrderServiceVideo[];
  /** 维修后拍摄的视频 */
  postRepairVideos?: WorkOrderServiceVideo[];
  /** 预计支出 */
  estimatedCost?: string;
  /** 实际支出 */
  actualCost?: string;
};

/**
 * OpenAPI 组件类型：方案集合信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairPlanInfo
 */
export type WorkOrderServiceRepairPlanInfo = {
  taskDataInfo?: WorkOrderServiceTaskDataInfo;
  /** 维修方案 */
  taskName?: string;
  /** 是否自定义 */
  isCustom?: boolean;
};

/**
 * OpenAPI 组件类型：任务信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskDataInfo
 */
export type WorkOrderServiceTaskDataInfo = {
  /** 任务Id */
  taskId?: string;
  /** 任务问题类型：初始问题/关联问题/问题原因 */
  taskIssueType?: "INITIAL_PROBLEM" | "ASSOCIATED_PROBLEM" | "PROBLEM_CAUSE" | "REPAIR_SCHEME";
  /** 任务反馈状态：正常/超征兆/异常 */
  taskFeedbackStatus?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 任务来源id */
  sourceId?: string;
  /** 关联措施id */
  linkMeasureId?: string;
  /** 实体风险id */
  physicalRiskId?: string;
  /** 对象实例id */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** 任务类型：观测IOT/观测非IOT/维修 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 任务描述 */
  taskDesc?: string;
  /** 任务状态 */
  taskStatus?: "UNFINISHED" | "FINISHED" | "REVOKE";
  /** 是否解决问题 */
  isResolved?: boolean;
  /** 上报时间 */
  reportTime?: string;
  /** 处理专业 */
  processMajorCode?: string;
  isUserSelectedMajor?: boolean;
  /** 处理专业名称 */
  processMajorName?: string;
  /** 是否推荐 */
  isRecommended?: boolean;
  /** 未解决原因 */
  unresolvedReason?: string;
  /** 解决图片 */
  resolvePhotos?: string;
  /** 解决视频集合 */
  resolveVideos?: WorkOrderServiceVideo[];
};

/**
 * OpenAPI 组件类型：WorkOrderDetailsForPCVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderDetailsForPCVo
 */
export type WorkOrderServiceWorkOrderDetailsForPCVo = {
  /** 工单id */
  orderId?: string;
  /** 异常事件id */
  exceptionEventId?: string;
  /** 风险流程id */
  riskProcessId?: string;
  /** 项目id */
  projectId?: string;
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单来源类型枚举 */
  workOrderIotType?: "NON_IOT" | "IOT_ALARM_VERIFICATION" | "IOT_CANCEL_ALARM_VERIFICATION" | "OPS_IOT" | "SELF_REPAIR";
  /** Iot报警id */
  recordSourceId?: string;
  isAction?: boolean;
  /** 响应状态 */
  workOrderActionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION";
  /** 响应方式 */
  workOrderActionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  /** 风险流程配置类型  IOT:10   COMMON:20(非IOT)    NO:30(非IOT) */
  processTagEnum?: "IOT" | "COMMON" | "NO" | "SELF_REPAIR";
  /** 工单状态 */
  orderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 路由控制id */
  routingControlId?: string;
  /** 异常事件 */
  abnormalEvent?: string;
  /** 维修执行人 */
  repairExecutor?: string;
  iotMonitoringResults?: WorkOrderServiceIotMonitoringResults;
  /** 问题描述 */
  problemInfos?: WorkOrderServiceProblemInfo[];
  /** 业务类别 */
  processMajorCode?: string;
  /** 业务类别名称 */
  processMajorName?: string;
  /** 问题等级 */
  problemLevel?: string;
  /** 问题等级名称 */
  problemLevelName?: string;
  relatedProblem?: WorkOrderServiceRelatedProblem;
  problemCauseInfo?: WorkOrderServiceProblemCauseInfo;
  repairPlan?: WorkOrderServiceRepairPlan;
  /** 要求完成时间 */
  requiredCompletionTime?: string;
  /** 要求响应时间 */
  requiredActionTime?: string;
  /** 拒绝类型 */
  rejectType?: "AUDIT_REJECT" | "APPROVAL_REJECT";
  /** 拒绝原因 */
  rejectReason?: string;
  /** 审核人 */
  rejectPerson?: string;
  /** 审核时间 */
  rejectTime?: string;
  updateTime?: string;
  closeWorkOrderVo?: WorkOrderServiceCloseWorkOrderVo;
  /** 分类人集合 */
  classifyPersons?: string[];
  /** 指派人集合 */
  assignPersons?: string[];
  /** 接收人集合集合 */
  receiverPersons?: string[];
  /** 执行人集合 */
  executorPersons?: string[];
  /** 方案审核人List集合 */
  auditPlanPersons?: string[];
  /** 审批人集合 */
  approvalPersons?: string[];
  /** 方案审核进度 */
  reviewProgressVos?: WorkOrderServiceReviewProgressVo[];
};

/**
 * OpenAPI 组件类型：OrderObjInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OrderObjInfoVo
 */
export type WorkOrderServiceOrderObjInfoVo = {
  /** 任务对象id */
  taskObjectId?: string;
  /** 任务对象名称 */
  taskObjectName?: string;
  /** bdtp的扫码信息 */
  bdtpScanInfo?: string[];
};

/**
 * OpenAPI 组件类型：RCollectionOrderObjInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionOrderObjInfoVo
 */
export type WorkOrderServiceRCollectionOrderObjInfoVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceOrderObjInfoVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RScanObjectVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RScanObjectVo
 */
export type WorkOrderServiceRScanObjectVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceScanObjectVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：ScanObjectVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ScanObjectVo
 */
export type WorkOrderServiceScanObjectVo = {
  /** 对象id */
  id?: string;
  /** equipment :设备  system：系统   space：空间 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 设备数量 */
  equipmentCount?: number;
  /** 设备类编码 */
  classCode?: string;
  /** 空间名称 */
  spaceName?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层名称 */
  floorName?: string;
  localName?: string;
  localId?: string;
};

/**
 * OpenAPI 组件类型：RCollectionWorkOrderActionDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionWorkOrderActionDto
 */
export type WorkOrderServiceRCollectionWorkOrderActionDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderActionDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：工单响应Dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderActionDto
 */
export type WorkOrderServiceWorkOrderActionDto = {
  /** 工单主键 */
  workOrderId?: string;
  /** 要求响应时间 */
  requiredActionTime?: string;
  /** 响应时间 */
  actionTime?: string;
  /** 响应人Id */
  actionPersonId?: string;
  /** 响应人名称 */
  actionPersonName?: string;
  /** 响应方式 */
  actionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  /** 响应状态 */
  actionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION";
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单状态 */
  orderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 关联工单id集合 */
  exceptionIdList?: number[];
};

/**
 * OpenAPI 组件类型：RWorkOrderDetailsVO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderDetailsVO
 */
export type WorkOrderServiceRWorkOrderDetailsVO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderDetailsVO;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：新工单详情vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderDetailsVO
 */
export type WorkOrderServiceWorkOrderDetailsVO = {
  /** 工单id */
  orderId?: string;
  /** 异常事件id */
  exceptionEventId?: string;
  /** 风险流程id */
  riskProcessId?: string;
  /** 项目id */
  projectId?: string;
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单来源类型枚举 */
  workOrderIotType?: "NON_IOT" | "IOT_ALARM_VERIFICATION" | "IOT_CANCEL_ALARM_VERIFICATION" | "OPS_IOT" | "SELF_REPAIR";
  /** Iot报警id */
  recordSourceId?: string;
  /** 风险流程配置类型  IOT:10   COMMON:20(非IOT)    NO:30(非IOT) */
  processTagEnum?: "IOT" | "COMMON" | "NO" | "SELF_REPAIR";
  /** 工单状态 */
  orderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 路由控制id */
  routingControlId?: string;
  isAction?: boolean;
  approvalJudgment?: WorkOrderServiceApprovalJudgmentVo;
  /** 响应状态 */
  workOrderActionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION";
  /** 响应方式 */
  workOrderActionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
  abnormalEvent?: WorkOrderServiceAbnormalEvent;
  repairExecutor?: WorkOrderServiceRepairExecutor;
  iotMonitoringResults?: WorkOrderServiceIotMonitoringResults;
  /** 问题描述 */
  problemInfos?: WorkOrderServiceProblemInfo[];
  processMajorCode?: WorkOrderServiceProcessMajorCode;
  processMajorName?: WorkOrderServiceProcessMajorName;
  problemLevel?: WorkOrderServiceProblemLevel;
  problemLevelName?: WorkOrderServiceProblemLevelName;
  relatedProblem?: WorkOrderServiceRelatedProblem2;
  problemCauseInfo?: WorkOrderServiceProblemCauseInfo2;
  repairPlan?: WorkOrderServiceRepairPlan2;
  requiredCompletionTime?: WorkOrderServiceRequiredCompletionTime;
  /** 所有图片 */
  allImages?: string[];
  /** 所有视频合集 */
  allVideos?: WorkOrderServiceVideo[];
  /** 拒绝类型 */
  rejectType?: "AUDIT_REJECT" | "APPROVAL_REJECT";
  /** 拒绝原因 */
  rejectReason?: string;
  updateTime?: string;
  closeWorkOrderVo?: WorkOrderServiceCloseWorkOrderVo;
  actualImpact?: WorkOrderServiceActualImpact2;
  /** 补充问题描述是否有权限操作 */
  hasActualImpactPermission?: boolean;
};

/**
 * OpenAPI 组件类型：异常事件
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/abnormalEvent
 */
export type WorkOrderServiceAbnormalEvent = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：备注说明
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/causeDescription
 */
export type WorkOrderServiceCauseDescription = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：备注说明
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/impactDescription
 */
export type WorkOrderServiceImpactDescription = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：发生原因
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/problemCauseInfo
 */
export type WorkOrderServiceProblemCauseInfo2 = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
  /** 发生问题原因卡片 */
  issueCauses?: WorkOrderServiceIssueCause[];
  causeDescription?: WorkOrderServiceCauseDescription;
};

/**
 * OpenAPI 组件类型：问题等级
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/problemLevel
 */
export type WorkOrderServiceProblemLevel = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：问题等级名称
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/problemLevelName
 */
export type WorkOrderServiceProblemLevelName = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：处理专业编码
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/processMajorCode
 */
export type WorkOrderServiceProcessMajorCode = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：处理专业名称
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/processMajorName
 */
export type WorkOrderServiceProcessMajorName = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：问题影响
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/relatedProblem
 */
export type WorkOrderServiceRelatedProblem2 = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
  /** 问题影响卡片 */
  relatedIssues?: WorkOrderServiceRelatedIssues[];
  impactDescription?: WorkOrderServiceImpactDescription;
  /** 是否有权限操作 */
  hasPermissionOperate?: boolean;
};

/**
 * OpenAPI 组件类型：维修执行人
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/repairExecutor
 */
export type WorkOrderServiceRepairExecutor = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：维修方案
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/repairPlan
 */
export type WorkOrderServiceRepairPlan2 = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
  /** 提交人id */
  submitPersonId?: string;
  /** 提交人名称 */
  submitPersonName?: string;
  /** 提交人手机号 */
  submitPersonPone?: string;
  /** 提交人时间 */
  submitTime?: string;
  /** 维修方案集合 */
  repairPlanDetails?: WorkOrderServiceRepairPlanDetail[];
  repairPlanDescription?: WorkOrderServiceRepairPlanDescription;
  /** 是否有权限操作 */
  hasPermissionOperate?: boolean;
};

/**
 * OpenAPI 组件类型：备注说明
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/repairPlanDescription
 */
export type WorkOrderServiceRepairPlanDescription = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：要求完成时间
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/requiredCompletionTime
 */
export type WorkOrderServiceRequiredCompletionTime = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：RListWorkOrderCancelReasonVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderCancelReasonVo
 */
export type WorkOrderServiceRListWorkOrderCancelReasonVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderCancelReasonVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderCancelReasonVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderCancelReasonVo
 */
export type WorkOrderServiceWorkOrderCancelReasonVo = {
  /** 原因编码 */
  code?: string;
  /** 原因名称 */
  name?: string;
  /** 解决状态 */
  resolveState?: number;
  /** 排序 */
  sort?: number;
};

/**
 * OpenAPI 组件类型：RListWorkOrderSpaceInstanceVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderSpaceInstanceVo
 */
export type WorkOrderServiceRListWorkOrderSpaceInstanceVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderSpaceInstanceVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：巡检/维保空间下对象实例信息vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderSpaceInstanceVo
 */
export type WorkOrderServiceWorkOrderSpaceInstanceVo = {
  /** 任务对象ID */
  taskObjectId?: string;
  /** 任务对象名称 */
  taskObjectName?: string;
  /** 对象任务总数量 */
  objectAllTaskCount?: number;
  /** 对象未完成任务数量 */
  objectUnFinishTaskCount?: number;
  /** 是否有异常任务 */
  hasExceptionTask?: boolean;
  /** 是否有不可执行任务 */
  hasUnenforceableTask?: boolean;
};

/**
 * OpenAPI 组件类型：工单空间对象树【带数量】
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PlanWorkOrderObjectTreeVo
 */
export type WorkOrderServicePlanWorkOrderObjectTreeVo = {
  /** 工单空间对象树 */
  orderObjectTree?: WorkOrderServiceWorkOrderObjectTreeVo[];
  /** 任务总数量 */
  allTaskCount?: number;
  /** 未完成任务数量 */
  unFinishTaskCount?: number;
  finishTaskCount?: WorkOrderServiceWorkOrderObjectTreeVo[];
};

/**
 * OpenAPI 组件类型：RPlanWorkOrderObjectTreeVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RPlanWorkOrderObjectTreeVo
 */
export type WorkOrderServiceRPlanWorkOrderObjectTreeVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServicePlanWorkOrderObjectTreeVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：对象分类树
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderObjectTreeVo
 */
export type WorkOrderServiceWorkOrderObjectTreeVo = {
  /** 编码：末级是空间key: 建筑id/楼层id/空间id,若为空用other替换 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 下级对象 */
  list?: WorkOrderServiceWorkOrderObjectTreeVo[];
  /** 任务总数量 */
  allTaskCount?: number;
  /** 未完成任务数量 */
  unFinishTaskCount?: number;
  /** 是否有异常任务 */
  hasExceptionTask?: boolean;
  /** 是否有不可执行任务 */
  hasUnenforceableTask?: boolean;
};

/**
 * OpenAPI 组件类型：工单基本信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PlanWorkOrderBaseDetailVo
 */
export type WorkOrderServicePlanWorkOrderBaseDetailVo = {
  /** 工单主键 */
  orderId?: string;
  /** 工单名称 */
  workName?: string;
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单状态 */
  orderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
  /** 是否逾期:0-未逾期，1-已逾期 */
  overdueFlag?: string;
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型名称 */
  jobTypeName?: string;
  /** 工单流程id */
  flowPlanId?: string;
  /** 工单流程名称 */
  flowPlanName?: string;
  /** 要求开始时间【2024.06.05 14:07】 */
  requiredBeginTime?: string;
  /** 要求完成时间【2024.06.05 14:07】 */
  requiredCompletionTime?: string;
  /** 实际完成时间【2024.06.05 14:07】 */
  realFinishTime?: string;
  /** 创建人名称 */
  creatorName?: string;
  /** 创建时间【2024.06.05 14:07】 */
  createTime?: string;
  /** 异常任务数量 */
  exceptionCount?: number;
  /** 不可执行任务数量 */
  unenforceableCount?: number;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
};

/**
 * OpenAPI 组件类型：RPlanWorkOrderBaseDetailVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RPlanWorkOrderBaseDetailVo
 */
export type WorkOrderServiceRPlanWorkOrderBaseDetailVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServicePlanWorkOrderBaseDetailVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RListObjectParameterVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListObjectParameterVo
 */
export type WorkOrderServiceRListObjectParameterVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceObjectParameterVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：ExecutableMeasureDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExecutableMeasureDto
 */
export type WorkOrderServiceExecutableMeasureDto = {
  id?: number;
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  klbMeasureId?: number;
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  name?: string;
  subject?: WorkOrderServiceSubjectStructDto;
  photoNoteRequirement?: WorkOrderServiceEnumStruct;
  normalDescriptionOfPhoto?: string;
  unusualDescriptionOfPhoto?: string;
  feedbackType?: "OPTION" | "PARAMETER_CALCULATION";
  optionFeedbackInfo?: WorkOrderServiceOptionFeedbackDto;
  targetParameterInfo?: WorkOrderServiceTargetParameterInfoDto;
};

/**
 * OpenAPI 组件类型：FormulaDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/FormulaDto
 */
export type WorkOrderServiceFormulaDto = {
  expressionTemplate?: string;
  placeHolderMarks?: WorkOrderServiceMarkDto[];
};

/**
 * OpenAPI 组件类型：MarkDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MarkDto
 */
export type WorkOrderServiceMarkDto = {
  type?: "NODE" | "NODE_i" | "META_PHYSICAL" | "INSTANTIATED_PHYSICAL" | "INSTANTIATED_PHYSICAL_i" | "HUB_WEIGHTING_COEFFICIENT" | "INSTANTIATED_NUMBER" | "CHARACTERISTIC_PHYSICAL" | "BDTP_POINT" | "PROGRESS" | "ASSETS_SCRAP_ALARM_PARAM" | "ENUM";
  id?: number;
  infoPointCode?: string;
};

/**
 * OpenAPI 组件类型：MathRangEntry
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MathRangEntry
 */
export type WorkOrderServiceMathRangEntry = {
  range?: WorkOrderServiceMathRange;
  status?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
  nodeAlias?: string;
};

/**
 * OpenAPI 组件类型：MathRange
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MathRange
 */
export type WorkOrderServiceMathRange = {
  lower?: number;
  upper?: number;
  op?: "OPEN" | "CLOSED" | "OPEN_CLOSED" | "CLOSED_OPEN";
  valid?: boolean;
  notEmpty?: boolean;
};

/**
 * OpenAPI 组件类型：OptionFeedbackDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OptionFeedbackDto
 */
export type WorkOrderServiceOptionFeedbackDto = {
  rating?: boolean;
  options?: WorkOrderServiceOptionFeedbackOptionDto[];
  executionThresholdOptions?: string[];
  diagnosticThresholdOptions?: string[];
  normalOptions?: string[];
  symptomaticOptions?: string[];
  exceptionOptions?: string[];
};

/**
 * OpenAPI 组件类型：OptionFeedbackOptionDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OptionFeedbackOptionDto
 */
export type WorkOrderServiceOptionFeedbackOptionDto = {
  code?: number;
  name?: string;
  desc?: string;
  picture?: WorkOrderServiceAttachmentStruct;
  badValue?: number;
  badValuePercent?: number;
  goodValue?: number;
  goodPercent?: number;
  status?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
};

/**
 * OpenAPI 组件类型：PoiInfoStruct
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PoiInfoStruct
 */
export type WorkOrderServicePoiInfoStruct = {
  classCode?: string;
  poiCode?: string;
  graphCode?: string;
  relCode?: string;
  relationDirection?: "FROM_TO" | "TO_FROM" | "BOTH";
  relKey?: string;
};

/**
 * OpenAPI 组件类型：ProcessParameterDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProcessParameterDto
 */
export type WorkOrderServiceProcessParameterDto = {
  id?: number;
  name?: string;
  desc?: string;
  unit?: string;
  staticParameter?: boolean;
  numberOfMeasuringPoint?: number;
  measurementTimes?: number;
  selectionMethod?: WorkOrderServiceEnumStruct;
  schematicDiagramOfMeasuringPoint?: WorkOrderServiceAttachmentStruct;
  type?: "BDTP_POI" | "CUSTOMIZE";
  bdtpInfo?: WorkOrderServicePoiInfoStruct;
};

/**
 * OpenAPI 组件类型：RListExecutableMeasureDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListExecutableMeasureDto
 */
export type WorkOrderServiceRListExecutableMeasureDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceExecutableMeasureDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：SubjectStructDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SubjectStructDto
 */
export type WorkOrderServiceSubjectStructDto = {
  entityId?: number;
  classCode?: string;
  component?: boolean;
  entityName?: string;
  failureMode?: WorkOrderServiceEnumStruct;
  key?: string;
};

/**
 * OpenAPI 组件类型：TargetParameterInfoDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TargetParameterInfoDto
 */
export type WorkOrderServiceTargetParameterInfoDto = {
  name?: string;
  code?: string;
  unit?: string;
  processParameterGroup?: WorkOrderServiceProcessParameterDto[];
  formula?: WorkOrderServiceFormulaDto;
  feedback?: WorkOrderServiceMathRangEntry[];
  normalRange?: WorkOrderServiceMathRange;
  superSignRange?: WorkOrderServiceMathRange;
};

/**
 * OpenAPI 组件类型：计划任务对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PlanTaskVo
 */
export type WorkOrderServicePlanTaskVo = {
  /** 任务ID */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 任务描述 */
  taskDesc?: string;
  /** 任务类型 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 是否完成 */
  isFinish?: boolean;
  /** 任务完成时间 */
  completionTime?: string;
  /** 任务对象ID */
  taskObjectId?: string;
  /** 任务对象名称 */
  taskObjectName?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 空间key : 建筑id/楼层id/空间id,若为空用other替换 */
  taskObjectSpaceKey?: string;
  punchingModelType?: "NONE" | "PHOTOGRAPH" | "SCAN" | "NFC";
  punchingModelObject?: "SPACE" | "OBJECT";
  /** 打卡时间 */
  punchingTime?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 任务现场照片集合 */
  photoImages?: string[];
  /** 任务现场视频集合 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 空间打卡照片集合 */
  spacePunchingImages?: string[];
  /** 对象打卡照片集合 */
  objectPunchingImages?: string[];
  /** 可执行措施ID */
  exeMeasureId?: string;
  /** rcc措施id */
  rccMeasureId?: string;
  measure?: WorkOrderServicePlanTaskVo;
  /** 是否自定义 */
  isCustom?: boolean;
  /** 维修任务集合 */
  repairs?: WorkOrderServicePlanTaskVo[];
  /** 任务执行类型:graded-分档反馈类,score-打分类,parameter-参数类,execute-执行类,repairAndReplace-维修更换类 */
  taskExecutionType?: "GRADED" | "SCORE" | "PARAMETER" | "EXECUTE" | "REPAIR_AND_REPLACE";
  /** 反馈结果：normal-正常,warn-超征兆,exception-异常,notTraceable-不可查,executionCompleted-执行完成,unenforceable-不可执行 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 可查-分档反馈or打分勾选结果 */
  gradedOrScoreOptions?: WorkOrderServiceGradedOrScoreOption[];
  /** 可查-参数类计算结果 */
  parameterCalculateResult?: number;
  notTraceableResult?: WorkOrderServiceEnumStructDto;
  unenforceableReason?: WorkOrderServiceEnumStructDto;
  /** 维修更换任务-维修金额 */
  repairCost?: number;
  /** 是否解决 */
  isResolved?: boolean;
  /** 是否打卡 */
  isPunched?: boolean;
  /** 备注信息 */
  remarks?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 处理专业名称 */
  processMajorName?: string;
  isUserSelectedMajor?: boolean;
  /** 实体风险id */
  physicalRiskId?: string;
  /** 观测对象 */
  observeObjectInfo?: WorkOrderServiceObserveObject[];
};

/**
 * OpenAPI 组件类型：计划工单任务详情
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PlanWorkOrderDetailVo
 */
export type WorkOrderServicePlanWorkOrderDetailVo = {
  /** 工单任务照片集合 */
  imgIds?: string[];
  /** 工单任务视频集合 */
  videos?: WorkOrderServiceVideo[];
  /** 工单任务集合 */
  tasks?: WorkOrderServicePlanTaskVo[];
  /** 工单主键 */
  orderId?: string;
  /** 工单名称 */
  workName?: string;
  /** 工作类型分类编码 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 要求结束时间 */
  requiredCompletionTime?: string;
};

/**
 * OpenAPI 组件类型：RPlanWorkOrderDetailVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RPlanWorkOrderDetailVo
 */
export type WorkOrderServiceRPlanWorkOrderDetailVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServicePlanWorkOrderDetailVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderObjectTreeVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderObjectTreeVo
 */
export type WorkOrderServiceRListWorkOrderObjectTreeVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderObjectTreeVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：SseEmitter
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SseEmitter
 */
export type WorkOrderServiceSseEmitter = {
  timeout?: number;
};

/**
 * OpenAPI 组件类型：PjRiskBusinessCategoryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PjRiskBusinessCategoryDto
 */
export type WorkOrderServicePjRiskBusinessCategoryDto = {
  id?: string;
  name?: string;
  issueLevels?: WorkOrderServiceIssueLevelDto[];
};

/**
 * OpenAPI 组件类型：RListPjRiskBusinessCategoryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListPjRiskBusinessCategoryDto
 */
export type WorkOrderServiceRListPjRiskBusinessCategoryDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServicePjRiskBusinessCategoryDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RAlertReportDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RAlertReportDto
 */
export type WorkOrderServiceRAlertReportDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceAlertReportDto;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：LastWorkOrderVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/LastWorkOrderVo
 */
export type WorkOrderServiceLastWorkOrderVo = {
  /** 工单id */
  orderId?: string;
  /** 项目编码 */
  projectId?: string;
  reportTypeInfo?: WorkOrderServiceReportTypeInfo;
  reportObj?: WorkOrderServiceObj;
};

/**
 * OpenAPI 组件类型：RLastWorkOrderVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RLastWorkOrderVo
 */
export type WorkOrderServiceRLastWorkOrderVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceLastWorkOrderVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RUserReportDTO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RUserReportDTO
 */
export type WorkOrderServiceRUserReportDTO = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceUserReportDTO;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：审核/审批信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApprovalInfoVo
 */
export type WorkOrderServiceApprovalInfoVo = {
  /** 审批结果 */
  approvalResult?: "AGREE" | "REJECT" | "PROCESSING" | "TERMINAL";
  /** 审批类型 */
  approvalType?: "COUNTER_SIGN" | "OR_SIGN";
  /** 审批条件 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
};

/**
 * OpenAPI 组件类型：扩展操作信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OperateExtendInfoVo
 */
export type WorkOrderServiceOperateExtendInfoVo = {
  /** 卡片类型 */
  cardType?: "CREATE" | "CLASSIFY" | "ASSIGN" | "RECEIVE" | "TRANSFER" | "IGNORE" | "EXECUTE" | "CANCEL" | "STOP" | "CLOSE" | "ADD_PLAN_AUDIT_PEOPLE" | "APPLY_PLAN" | "APPLY_CLOSE" | "APPLY_ADD_PEOPLE" | "APPLY_REPLACE_PEOPLE" | "APPLY_DELAY" | "APPLY_STOP" | "AUDIT_PLAN" | "APPROVAL";
  /** 操作人名称集合 */
  operateNames?: string[];
};

/**
 * OpenAPI 组件类型：操作信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OperateInfoVo
 */
export type WorkOrderServiceOperateInfoVo = {
  /** 操作时间 */
  operateTime?: string;
  /** 是否管理员操作 */
  adminOpt?: boolean;
  /** 操作人名称集合 */
  operateNames?: string[];
  /** 被操作人名称集合 */
  operateToNames?: string[];
  /** 过程记录id */
  processRecordId?: string;
  operateResult?: "AGREE" | "REJECT";
};

/**
 * OpenAPI 组件类型：工单记录-处理记录卡片
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProcessRecordCardVo
 */
export type WorkOrderServiceProcessRecordCardVo = {
  /** 卡片类型 */
  cardType?: "CREATE" | "CLASSIFY" | "ASSIGN" | "RECEIVE" | "TRANSFER" | "IGNORE" | "EXECUTE" | "CANCEL" | "STOP" | "CLOSE" | "ADD_PLAN_AUDIT_PEOPLE" | "APPLY_PLAN" | "APPLY_CLOSE" | "APPLY_ADD_PEOPLE" | "APPLY_REPLACE_PEOPLE" | "APPLY_DELAY" | "APPLY_STOP" | "AUDIT_PLAN" | "APPROVAL";
  /** 卡片状态 */
  cardStatus?: "HISTORY" | "CURRENT" | "FEATURE";
  operateInfo?: WorkOrderServiceOperateInfoVo;
  approvalInfo?: WorkOrderServiceApprovalInfoVo;
  operateExtendInfo?: WorkOrderServiceOperateExtendInfoVo;
};

/**
 * OpenAPI 组件类型：工单记录-处理记录
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProcessRecordListVo
 */
export type WorkOrderServiceProcessRecordListVo = {
  /** 节点列表 */
  nodeList?: WorkOrderServiceProcessRecordNodeVo[];
  /** 关单时间 */
  closeTime?: string;
};

/**
 * OpenAPI 组件类型：工单记录-处理记录节点
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProcessRecordNodeVo
 */
export type WorkOrderServiceProcessRecordNodeVo = {
  /** 节点类型 */
  nodeType?: "CREATE" | "CLASSIFY" | "ASSIGN" | "RECEIVE" | "EXECUTE" | "APPROVAL";
  /** 节点状态 */
  nodeStatus?: "HISTORY" | "CURRENT" | "FEATURE";
  /** 卡片集合 */
  cardList?: WorkOrderServiceProcessRecordCardVo[];
};

/**
 * OpenAPI 组件类型：RProcessRecordListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RProcessRecordListVo
 */
export type WorkOrderServiceRProcessRecordListVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceProcessRecordListVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：申请信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApplicationInfo
 */
export type WorkOrderServiceApplicationInfo = {
  /** 说明 */
  description?: string;
  /** 视频 */
  videos?: WorkOrderServiceVideo[];
  /** 图片 */
  images?: string[];
  /** 语音 */
  sounds?: WorkOrderServiceSound[];
  /** 延期时长 */
  delayDuration?: number;
  /** 延期原因 */
  delayReason?: string;
  /** 需要加入的人集合 */
  peopleToAdd?: string[];
  /** 需要更换的人集合 */
  peopleToReplace?: string[];
};

/**
 * OpenAPI 组件类型：RWorkOrderRecordDetailsVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderRecordDetailsVo
 */
export type WorkOrderServiceRWorkOrderRecordDetailsVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderRecordDetailsVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：审批信息集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RecordApprovalInfo
 */
export type WorkOrderServiceRecordApprovalInfo = {
  /** 节点状态：已完成/进行中/未来 */
  cardStatus?: "HISTORY" | "CURRENT" | "FEATURE";
  /** 审批人集合 */
  operateNames?: string[];
  /** 审批结果 */
  approvalResult?: "AGREE" | "REJECT" | "PROCESSING" | "TERMINAL";
  /** 审批类型 */
  approvalType?: "COUNTER_SIGN" | "OR_SIGN";
  /** 审批时间 */
  operateTime?: string;
  /** 要求完成时间-方案审核通过才有 */
  requiredCompletionTime?: string;
  /** 延期时长-延期审批通过才有 */
  delayDuration?: number;
  /** 是否系统审批 */
  systemOpt?: boolean;
  /** 说明 */
  remarks?: string;
  /** 视频 */
  videos?: WorkOrderServiceVideo[];
  /** 图片 */
  images?: string[];
  /** 语音 */
  sounds?: WorkOrderServiceSound[];
};

/**
 * OpenAPI 组件类型：提交信息对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SubmissionInfo
 */
export type WorkOrderServiceSubmissionInfo = {
  /** 提交人 */
  operateName?: string;
  /** 提交时间 */
  operateTime?: string;
  /** 维修方案集合 */
  repairPlanDetails?: WorkOrderServiceRepairPlanDetail[];
  /** 联系电话 */
  mobileNum?: string;
  applicationInfo?: WorkOrderServiceApplicationInfo;
  /** 备注 */
  remarks?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderRecordDetailsVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRecordDetailsVo
 */
export type WorkOrderServiceWorkOrderRecordDetailsVo = {
  submissionInfo?: WorkOrderServiceSubmissionInfo;
  /** 审批信息集合 */
  approvalInfoList?: WorkOrderServiceRecordApprovalInfo[];
};

/**
 * OpenAPI 组件类型：RCollectionProcessRecordCardVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionProcessRecordCardVo
 */
export type WorkOrderServiceRCollectionProcessRecordCardVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceProcessRecordCardVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：class树节点集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MeoiClassTreeNodeVo
 */
export type WorkOrderServiceMeoiClassTreeNodeVo = {
  /** class树节点 */
  children?: WorkOrderServiceMeoiClassTreeNodeVo[];
  /** 专业或对象类编码 */
  classCode?: string;
  /** 编码 */
  code?: string;
  /** 专业或对象类名称 */
  name?: string;
  /** 节点类型: 专业:major ,设备类: equipmentclass */
  nodeType?: string;
  /** 实例数量 */
  objCount?: number;
  /** 父级节点编码 */
  parentCode?: string;
  /** 排序 */
  sortOrder?: number;
};

/**
 * OpenAPI 组件类型：MeoiClassTreeResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MeoiClassTreeResultVo
 */
export type WorkOrderServiceMeoiClassTreeResultVo = {
  /** 实例数量 */
  objCount?: number;
  /** class树节点集合 */
  nodes?: WorkOrderServiceMeoiClassTreeNodeVo[];
};

/**
 * OpenAPI 组件类型：RMeoiClassTreeResultVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RMeoiClassTreeResultVo
 */
export type WorkOrderServiceRMeoiClassTreeResultVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceMeoiClassTreeResultVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：AddAlarmDisplayVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AddAlarmDisplayVo
 */
export type WorkOrderServiceAddAlarmDisplayVo = {
  groupCodeList?: string[];
};

/**
 * OpenAPI 组件类型：WoObject
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WoObject
 */
export type WorkOrderServiceWoObject = {
  wo_object_id?: string;
  order_id?: string;
  obj_id?: string;
  obj_name?: string;
  obj_type?: string;
  create_time?: string;
  update_time?: string;
  valid?: string;
  returnColumns?: Record<string, never>[];
  page?: number;
  pageSize?: number;
  order_id_list?: Record<string, never>[];
  wo_object_id_list?: Record<string, never>[];
};

/**
 * OpenAPI 组件类型：WorkItemExtend
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkItemExtend
 */
export type WorkOrderServiceWorkItemExtend = {
  workItemExtendCode?: string;
  requirement?: "COMMON" | "OPTIONAL" | "CONDITIONAL";
  workOrderActionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
};

/**
 * OpenAPI 组件类型：执行阶段更新入参
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ExecuteStageJudgeDTO
 */
export type WorkOrderServiceExecuteStageJudgeDTO = {
  /** 工单主键 */
  orderId: string;
  /** 操作人id */
  personId: string;
  /** 项目id */
  projectId: string;
  /** 操作人名称 */
  personName: string;
  /** 工单路由id */
  routingControlId?: string;
  problemLevel?: WorkOrderServiceIssueLevelDto;
  iotMonitoringResults?: WorkOrderServiceIotMonitoringResultsDTO;
  repairPlan?: WorkOrderServiceRepairPlanDTO;
};

/**
 * OpenAPI 组件类型：RListExceptionInfo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListExceptionInfo
 */
export type WorkOrderServiceRListExceptionInfo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceExceptionInfo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：MessageExtend
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MessageExtend
 */
export type WorkOrderServiceMessageExtend = {
  extendContent?: string;
};

/**
 * OpenAPI 组件类型：OrderMessageDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OrderMessageDto
 */
export type WorkOrderServiceOrderMessageDto = {
  businessId?: string;
  messageType?: "system_message" | "general_transaction" | "sub_message" | "grave_matters" | "execute_response" | "new_job" | "review_message" | "job_notice" | "job_exception" | "alarm_message";
  businessType?: "order" | "announcement" | "event" | "exception_event" | "inventory";
  projectId?: string;
  groupCode?: string;
  messageTitle?: string;
  templateId?: string;
  messageContent?: Record<string, never>[];
  noticeType?: "msg" | "sms";
  personIds?: string[];
  mobiles?: string[];
  sendPersonId?: string;
  sendTime?: string;
  messagePriority?: "grave" | "high" | "medium" | "low";
  controlType?: "wo_pending_order" | "create_exception_event" | "resolve_exception_timeout" | "pending_order" | "pending_assign" | "classify" | "pending_audit" | "pending_approval" | "audit_agreed" | "audit_rejected" | "approval_agreed" | "approval_rejected";
  messageSourceName?: string;
  pushFlag?: boolean;
  messageExtend?: WorkOrderServiceMessageExtend;
  /** 工单主键 */
  orderId?: string;
  /** 工单名称 */
  workName?: string;
  /** 要求结束时间 */
  requiredCompletionTime?: string;
  /** 风险流程名称 */
  flowName?: string;
  /** 工作类型 */
  workType?: string;
};

/**
 * OpenAPI 组件类型：用户报事未回访列表查询query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportUnRevisitQuery
 */
export type WorkOrderServiceUserReportUnRevisitQuery = {
  /** 执行人id */
  personIds?: string[];
  /** 报事位置：选中的层级id集合 */
  positionList?: string[];
  /** 报事类型集合 */
  repairProblemTypes?: string[];
  /** 回访状态集合 */
  orderRevisitStatus?: "REVISIT" | "TIMED_OUT_REVISIT" | "UN_REVISIT" | "TIMED_OUT_UN_REVISIT" | "NEED_FOLLOW_UP"[];
  /** 报事人评价 */
  orderReporterScores?: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "NOT_EVALUATED"[];
  /** 响应状态 */
  actionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION"[];
  /** 解决状态 */
  resolveStatus?: "UN_RESOLVED" | "TIMED_OUT_UN_RESOLVED" | "RESOLVED_ON_TIME" | "TIMED_OUT_RESOLVED"[];
  /** 工单状态 */
  orderStatus?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10"[];
  /** 问题性质标签 */
  problemNatures?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION"[];
  /** 处理专业集合 */
  processMajorCodes?: string[];
  /** 空间标签id */
  positionAsserts?: string[];
  /** 时间类型 */
  timeFilterType?: "CREATE_TIME" | "ASK_ACTION_TIME" | "ASK_RESOLVE_TIME" | "APPOINTMENT_TIME" | "REAL_FINISH_TIME" | "REQUIRED_REVISIT_TIME";
  /** 要求解决开始时间 */
  startTime?: string;
  /** 要求解决结束时间 */
  endTime?: string;
  /** 搜索类型 */
  keywordType?: "PROBLEM_DESC" | "REPORT_PERSON" | "REPORT_PERSON_PHONE" | "ORDER_NUMBER" | "ORDER_NAME";
  /** 搜索值 */
  keyword?: string;
  /** 排序字段(ask_end_time[要求解决时间]）、required_action_time[要求响应时间])、create_time[创建时间]、appointment_time[预约时间]、real_finish_time[实际完成时间]、required_revisit_time[要求回访时间]) */
  orderField?: string;
  /** 排序类型(asc:顺序;desc:倒序。默认desc) */
  orderBy?: string;
  /** pageNum */
  pageNum: number;
  /** pageSize,默认值：200 */
  pageSize?: number;
  /** 快速回访 */
  fastRevisitType?: "TODAY_UN_REVISIT" | "PRIORITY_REVISIT" | "TIMEOUT_UN_REVISIT";
};

/**
 * OpenAPI 组件类型：RCollectionUserReportUnRevisitListVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionUserReportUnRevisitListVo
 */
export type WorkOrderServiceRCollectionUserReportUnRevisitListVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceUserReportUnRevisitListVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：用户报事未回访列表vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportUnRevisitListVo
 */
export type WorkOrderServiceUserReportUnRevisitListVo = {
  /** 工单id */
  orderId?: string;
  /** 问题描述 */
  problemDesc?: string;
  /** 报事类型 */
  repairProblemTypeName?: string;
  /** 报事位置 */
  position?: string;
  /** 空间标签 */
  positionAsserts?: WorkOrderServicePositionAssert[];
  /** 报事人 */
  contacts?: string;
  /** 联系电话 */
  phone?: string;
  /** 报事人评分 */
  score?: number;
  /** 创建时间 */
  orderCreateTime?: string;
  /** 预约时间 */
  appointmentTime?: string;
  /** 实际完成时间 */
  realFinishTime?: string;
  /** 要求回访 */
  requiredRevisitTime?: string;
  /** 执行人 */
  executors?: WorkOrderServiceReportOrderExecutor[];
};

/**
 * OpenAPI 组件类型：回访记录-回访保存dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RevisitRecordSaveDto
 */
export type WorkOrderServiceRevisitRecordSaveDto = {
  /** 工单id */
  orderId: string;
  /** 评分 */
  score?: number;
  /** 标签集合 */
  tags?: "TIMEOUT_HANDLE" | "TIMEOUT_VISIT" | "POOR_SERVICE_ATTITUDE" | "ON_TIME_HANDLE" | "ON_TIME_VISIT" | "GOOD_SERVICE_ATTITUDE"[];
  /** 评价内容 */
  evaluation?: string;
  /** 回访备注内容 */
  revisitRemarks?: string;
  /** 是否需要回访跟进 */
  needFollowUp?: boolean;
  /** 回访人id */
  revisitPersonId?: string;
  /** 回访人账号 */
  account?: string;
};

/**
 * OpenAPI 组件类型：回访记录-批量回访dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/BatchRevisitDto
 */
export type WorkOrderServiceBatchRevisitDto = {
  /** 是否批量回访：未回访列表入口为true，详情入口为false */
  isBatchRevisit: boolean;
  /** 工单id集合 */
  orderId?: string[];
  /** 回访者备注 */
  revisitRemarks: string;
  /** 回访备注人id */
  revisitRemarksPersonId?: string;
  /** 回访人账号 */
  account?: string;
};

/**
 * OpenAPI 组件类型：回访记录-追加备注dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RevisitAppendRemarksDto
 */
export type WorkOrderServiceRevisitAppendRemarksDto = {
  /** 工单id */
  orderId: string;
  /** 追加备注内容 */
  appendRemarks: string;
  /** 追加备注人id */
  appendRemarksPersonId?: string;
  /** 回访人账号 */
  account?: string;
};

/**
 * OpenAPI 组件类型：回访配置dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRevisitDto
 */
export type WorkOrderServiceWorkOrderRevisitDto = {
  /** id */
  id?: string;
  /** 时效配置:1-9天 */
  timeConfig?: number;
  /** 优先回访-报事类型配置 */
  reportTypeConfig?: WorkOrderServiceReportType[];
  /** 优先回访-空间标签配置 */
  positionAssertConfig?: WorkOrderServicePositionAssert[];
  /** 优先回访-报事人评价配置：5-低于5分，4-低于4分，3-低于3分，2-低于2分 */
  reporterScoreConfig?: "LESS_THAN_TWO" | "LESS_THAN_THREE" | "LESS_THAN_FOUR" | "LESS_THAN_FIVE";
  /** 操作人id */
  operatePersonId?: string;
};

/**
 * OpenAPI 组件类型：评价列表
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportEvaluateDto
 */
export type WorkOrderServiceUserReportEvaluateDto = {
  /** 工单id */
  orderId: string;
  /** 用户报事评价人手机号 */
  evaluatorName: string;
  /** 评价内容 */
  evaluate?: string;
  /** 评价分数 */
  score: number;
  /** 评价时间:13位时间戳 */
  evaluateTime: string;
  /** 评价标签集合 */
  tags?: "TIMEOUT_HANDLE" | "TIMEOUT_VISIT" | "POOR_SERVICE_ATTITUDE" | "ON_TIME_HANDLE" | "ON_TIME_VISIT" | "GOOD_SERVICE_ATTITUDE"[];
};

/**
 * OpenAPI 组件类型：AppointmentTime
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AppointmentTime
 */
export type WorkOrderServiceAppointmentTime = {
  start?: string;
  end?: string;
};

/**
 * OpenAPI 组件类型：RRepairTenantResponseVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RRepairTenantResponseVo
 */
export type WorkOrderServiceRRepairTenantResponseVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceRepairTenantResponseVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RepairTenantResponseVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairTenantResponseVo
 */
export type WorkOrderServiceRepairTenantResponseVo = {
  tenants?: WorkOrderServiceRepairTenantVo[];
  page?: number;
  total?: number;
  totalPage?: number;
};

/**
 * OpenAPI 组件类型：RepairTenantVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairTenantVo
 */
export type WorkOrderServiceRepairTenantVo = {
  woName?: string;
  address?: string;
  appointmentTime?: WorkOrderServiceAppointmentTime;
  createTime?: string;
  description?: string;
  orderId?: string;
  orderState?: string;
  projectName?: string;
  problemType?: string;
  isTenantArea?: boolean;
  executor?: string;
  askStartTime?: string;
  askEndTime?: string;
  realTime?: string;
};

/**
 * OpenAPI 组件类型：CustomFieldElement
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/CustomFieldElement
 */
export type WorkOrderServiceCustomFieldElement = {
  filedCode?: string;
  fieldName?: string;
  fieldType?: string;
  value?: string;
  valueList?: string[];
};

/**
 * OpenAPI 组件类型：EndJobElement
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/EndJobElement
 */
export type WorkOrderServiceEndJobElement = {
  executorName?: string;
  operateTime?: string;
  photos?: string[];
  stepFinish?: boolean;
  stepName?: string;
  stepType?: string;
};

/**
 * OpenAPI 组件类型：MaintenanceData
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/MaintenanceData
 */
export type WorkOrderServiceMaintenanceData = {
  visitTime?: string;
  realFinishTime?: string;
  completionDescription?: string;
  completionPictures?: string[];
  materialSource?: string;
  outlayState?: string;
  paidService?: string;
  startJob?: WorkOrderServiceStartJobElement[];
  endJob?: WorkOrderServiceEndJobElement[];
  maintenanceManName?: string;
  maintenanceManPhone?: string;
};

/**
 * OpenAPI 组件类型：PitPositionElement
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PitPositionElement
 */
export type WorkOrderServicePitPositionElement = {
  pitPositionAskNames?: string[];
  pitPositionAsks?: string[];
  pitPositionState?: string;
  pitPositionPersonId?: string;
  pitPositionPersonName?: string;
  pitName?: string;
};

/**
 * OpenAPI 组件类型：RWorkOrderResponseVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderResponseVo
 */
export type WorkOrderServiceRWorkOrderResponseVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderResponseVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RepairData
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairData
 */
export type WorkOrderServiceRepairData = {
  address?: string;
  appointmentTime?: WorkOrderServiceAppointmentTime;
  askEndTime?: string;
  askStartTime?: string;
  contacts?: string;
  createTime?: string;
  creatorName?: string;
  customField?: WorkOrderServiceCustomFieldElement[];
  description?: string;
  domainRequires?: string[];
  executeCount?: string;
  phone?: string;
  photos?: string[];
  pitPositions?: WorkOrderServicePitPositionElement[];
  repairObj?: WorkOrderServiceRepairObjClass;
  repairProblemTypeName?: string;
  representation?: string;
  urgency?: string;
  overdueFlag?: string;
  repairDepartmentId?: string;
  repairDepartmentName?: string;
  responsibleDepartmentId?: string;
  responsibleDepartmentName?: string;
};

/**
 * OpenAPI 组件类型：RepairObjClass
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairObjClass
 */
export type WorkOrderServiceRepairObjClass = {
  objId?: string;
  objName?: string;
  objType?: string;
  qrcode?: string;
};

/**
 * OpenAPI 组件类型：StartJobElement
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/StartJobElement
 */
export type WorkOrderServiceStartJobElement = {
  executorName?: string;
  operateTime?: string;
  photos?: string[];
  stepFinish?: boolean;
  stepName?: string;
  stepType?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderResponseVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderResponseVo
 */
export type WorkOrderServiceWorkOrderResponseVo = {
  orderId?: string;
  orderState?: string;
  orderFromType?: string;
  orderTypeName?: string;
  projectName?: string;
  executeType?: string;
  repairProblemTypeName?: string;
  woName?: string;
  woNumber?: string;
  realFinishTime?: string;
  repairOutlayFlag?: boolean;
  maintenanceConfigurationFlag?: boolean;
  repairData?: WorkOrderServiceRepairData;
  maintenanceData?: WorkOrderServiceMaintenanceData;
};

/**
 * OpenAPI 组件类型：ApprovalJudgmentVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ApprovalJudgmentVo
 */
export type WorkOrderServiceApprovalJudgmentVo = {
  /** 维修后照片-  ： 必填 10 、选填 20、视情况 30  默认必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 是否存在审批阶段 */
  auditPlanFlag?: boolean;
  /** 审批、审核条件值集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 是否审核驳回 */
  rejectFlag?: boolean;
};

/**
 * OpenAPI 组件类型：RUserReportUnRevisitStatisticsVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RUserReportUnRevisitStatisticsVo
 */
export type WorkOrderServiceRUserReportUnRevisitStatisticsVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceUserReportUnRevisitStatisticsVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：用户报事未回访标题栏统计vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportUnRevisitStatisticsVo
 */
export type WorkOrderServiceUserReportUnRevisitStatisticsVo = {
  /** 未回访数量 */
  unRevisitCount?: number;
  /** 今日待回访数量 */
  todayUnRevisitCount?: number;
  /** 优先回访数量 */
  priorityRevisitCount?: number;
  /** 超时未回访数量 */
  timeOutUnRevisitCount?: number;
};

/**
 * OpenAPI 组件类型：RWorkOrderRevisitRecordVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderRevisitRecordVo
 */
export type WorkOrderServiceRWorkOrderRevisitRecordVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderRevisitRecordVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：回访记录详情vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRevisitRecordVo
 */
export type WorkOrderServiceWorkOrderRevisitRecordVo = {
  /** 满意度是否必填 */
  necessaryEvaluate?: boolean;
  /** 是否存在未解决异常事件 */
  existUnResolvedExceptionEvent?: boolean;
  /** 关联异常事件信息 */
  exceptionEvents?: WorkOrderServiceExceptionEventVo[];
};

/**
 * OpenAPI 组件类型：RWorkOrderRevisitConfigVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderRevisitConfigVo
 */
export type WorkOrderServiceRWorkOrderRevisitConfigVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderRevisitConfigVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：回访配置详情vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRevisitConfigVo
 */
export type WorkOrderServiceWorkOrderRevisitConfigVo = {
  /** id */
  id?: string;
  /** 时效配置:1-9天 */
  timeConfig?: number;
  /** 优先回访-报事类型配置 */
  reportTypeConfig?: WorkOrderServiceReportType[];
  /** 优先回访-空间标签配置 */
  positionAssertConfig?: WorkOrderServicePositionAssert[];
  /** 优先回访-报事人评价配置：5-低于5分，4-低于4分，3-低于3分，2-低于2分 */
  reporterScoreConfig?: "LESS_THAN_TWO" | "LESS_THAN_THREE" | "LESS_THAN_FOUR" | "LESS_THAN_FIVE";
};

/**
 * OpenAPI 组件类型：工单创建时关联问题描述集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/InitialProblemDTO
 */
export type WorkOrderServiceInitialProblemDTO = {
  /** 对象实例主键 */
  instanceId?: string;
  /** 对象实例名称 */
  instanceName?: string;
  /** classCode */
  classCode?: string;
  /** 处理专业编码 */
  processMajorCode?: string;
  /** 是否用户选择专业 */
  isUserSelectedMajor?: boolean;
  /** bdtp专业编码 */
  majorCode?: string;
  /** 空间实例对应的空间树节点编码 */
  nodeCode?: string;
  /** 自定义实例类型,为空时不是自定义实例 */
  deviceCustomType?: string;
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 楼层排序 */
  floorSequenceID?: string;
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 任务主键 */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 任务描述 */
  taskDesc?: string;
  /** 实体风险ID */
  physicalRiskId?: string;
  /** 知识措施id */
  rccMeasureId?: string;
  /** 任务问题类型 */
  taskIssueType?: "INITIAL_PROBLEM" | "ASSOCIATED_PROBLEM" | "PROBLEM_CAUSE" | "REPAIR_SCHEME";
  /** 任务状态 */
  taskStatus?: "UNFINISHED" | "FINISHED" | "REVOKE";
  /** 任务类型 */
  taskType?: "OBSERVE_IOT" | "OBSERVE_NON_IOT" | "REPAIR";
  /** 任务反馈状态 */
  taskFeedbackStatus?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 来源id */
  sourceId?: string;
  /** 是否推荐 */
  isRecommended?: boolean;
  /** 是否自定义问题 */
  isCustom?: boolean;
  /** 是否解决,前端创建默认传true */
  isResolved?: boolean;
  /** 处理-照片集合 */
  handlerPhotos?: string[];
  /** 现场-视频集合 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 解决-照片集合 */
  resolvePhotos?: string[];
  /** 解决-视频集合 */
  resolveVideos?: WorkOrderServiceVideo[];
  /** 未解决原因 */
  unresolvedReason?: string;
  /** 添加问题时间 yyyy.MM.dd HH:mm:ss */
  reportTime?: string;
  /** 问题实际影响 */
  actualImpacts?: WorkOrderServiceImpactEntityDTO[];
  /** 对象类型: system,equipment,equipGroup,space,project,floor,building */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象所在位置 */
  location?: string;
};

/**
 * OpenAPI 组件类型：非原处理人关联工单信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/OrderInfo
 */
export type WorkOrderServiceOrderInfo = {
  /** 工单id */
  orderId?: string;
  /** 工单状态 */
  orderState?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10";
};

/**
 * OpenAPI 组件类型：SystemBatchTransferDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SystemBatchTransferDto
 */
export type WorkOrderServiceSystemBatchTransferDto = {
  /** 原处理人关联工单信息 */
  originOrders?: WorkOrderServiceOrderInfo[];
  /** 非原处理人关联工单信息 */
  nonOriginOrders?: WorkOrderServiceOrderInfo[];
  /** 账号id */
  userId?: string;
  /** 账号名称 */
  userName?: string;
  /** 人员id */
  personId?: string;
  /** 人员名称 */
  personName?: string;
  /** 原处理人id集合 */
  originHandlers?: string[];
  /** 转交人id集合 */
  toPersonIds: string[];
};

/**
 * OpenAPI 组件类型：RListSystemBatchTransferFailedInfo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListSystemBatchTransferFailedInfo
 */
export type WorkOrderServiceRListSystemBatchTransferFailedInfo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceSystemBatchTransferFailedInfo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：SystemBatchTransferFailedInfo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SystemBatchTransferFailedInfo
 */
export type WorkOrderServiceSystemBatchTransferFailedInfo = {
  /** 工单id */
  orderId?: string;
  /** 工单编码 */
  woNumber?: string;
  /** 工单名称 */
  woName?: string;
  /** 工单状态 */
  orderState?: string;
  /** 工单状态名称 */
  orderStateName?: string;
  /** 工作类型分类 */
  workType?: string;
  /** 转交人名称 */
  toPersonName?: string[];
  /** 原处理人名称 */
  originHandlerName?: string;
};

/**
 * OpenAPI 组件类型：维修记录(0401)
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RepairMeasure
 */
export type WorkOrderServiceRepairMeasure = {
  /** 枚举：定阈值诊断、定阈值维修/更换、周期型维修/更换 */
  businessType: "DIAGNOSE" | "REPAIR" | "CYCLE_REPAIR";
  /** 已有策略措施id (非自定义措施必传) */
  exeMeasureId?: string;
  /** 知识措施id (非自定义引用措施必传) */
  rccMeasureId?: string;
  /** 是否自定义 */
  isCustom: boolean;
  /** 措施类型 */
  measureType: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施名称 */
  measureName: string;
  /** 措施描述 */
  measureDesc: string;
  /** 处理专业 */
  processMajorCode?: string;
  /** 是否用户选择专业 */
  isUserSelectedMajor?: boolean;
};

/**
 * OpenAPI 组件类型：JobTypeParam
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JobTypeParam
 */
export type WorkOrderServiceJobTypeParam = {
  /** 工作类型id */
  jobTypeId?: string;
  /** 工作类型分类 */
  workTypeList?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE"[];
  /** 工作类型是否可用(null为全部) */
  enable?: boolean;
};

/**
 * OpenAPI 组件类型：JobTypeDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/JobTypeDto
 */
export type WorkOrderServiceJobTypeDto = {
  jobTypeId?: string;
  jobTypeName?: string;
  workType?: string;
  workTypeName?: string;
  enabled?: boolean;
};

/**
 * OpenAPI 组件类型：RCollectionJobTypeDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RCollectionJobTypeDto
 */
export type WorkOrderServiceRCollectionJobTypeDto = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceJobTypeDto[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：取消信息dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/CancelDto
 */
export type WorkOrderServiceCancelDto = {
  /** 取消原因 */
  cancelReason?: string;
  /** 取消备注 */
  cancelRemarks?: string;
  /** 取消人名称 */
  cancelPersonName?: string;
  /** 取消时间(时间戳) */
  cancelTime?: string;
};

/**
 * OpenAPI 组件类型：编辑dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/EditDto
 */
export type WorkOrderServiceEditDto = {
  /** 编辑人ID */
  editPersonId?: string;
  /** 编辑时间(时间戳) */
  editTime?: string;
  /** 编辑人名称 */
  editPersonName?: string;
  /** 编辑人电话 */
  editPersonPhone?: string;
};

/**
 * OpenAPI 组件类型：对象分组问题集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemDetailDto
 */
export type WorkOrderServiceProblemDetailDto = {
  /** 问题id */
  physicalRiskId?: string;
  /** 问题名称 */
  problemName?: string;
  isCustom?: boolean;
};

/**
 * OpenAPI 组件类型：报事人评价信息-ReporterEvaluationDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReporterEvaluationDto
 */
export type WorkOrderServiceReporterEvaluationDto = {
  /** 服务满意度 */
  score?: number;
  /** 标签 */
  tags?: "TIMEOUT_HANDLE" | "TIMEOUT_VISIT" | "POOR_SERVICE_ATTITUDE" | "ON_TIME_HANDLE" | "ON_TIME_VISIT" | "GOOD_SERVICE_ATTITUDE"[];
  /** 报事人评价 */
  evaluation?: string;
  /** 评价时间 */
  evaluationTime?: string;
};

/**
 * OpenAPI 组件类型：回访评价信息-RevisitRecordEvaluationDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RevisitRecordEvaluationDto
 */
export type WorkOrderServiceRevisitRecordEvaluationDto = {
  /** 服务满意度 */
  score?: number;
  /** 标签 */
  tags?: "TIMEOUT_HANDLE" | "TIMEOUT_VISIT" | "POOR_SERVICE_ATTITUDE" | "ON_TIME_HANDLE" | "ON_TIME_VISIT" | "GOOD_SERVICE_ATTITUDE"[];
  /** 回访评价 */
  evaluation?: string;
  /** 回访者备注 */
  revisitRemarks?: string;
  /** 回访时间 */
  revisitTime?: string;
  /** 回访人 */
  revisitPersonName?: string;
  /** 是否批量回访 */
  batchRevisit?: boolean;
  /** 是否无法回访 */
  unableRevisit?: boolean;
  /** 追加备注 */
  appendRemarks?: string;
  /** 追加备注时间 */
  appendRemarksTime?: string;
  /** 追加备注人名称 */
  appendRemarksPersonName?: string;
};

/**
 * OpenAPI 组件类型：评价详情(小i)
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/EvaluationDetail
 */
export type WorkOrderServiceEvaluationDetail = {
  /** 报事人评价分数 */
  reporterScore?: number;
  /** 评价时间 */
  evaluationTime?: string;
  /** 回访评价分数 */
  revisitScore?: number;
  /** 回访时间 */
  revisitTime?: string;
};

/**
 * OpenAPI 组件类型：时间筛选集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimeFilter
 */
export type WorkOrderServiceTimeFilter = {
  /** 时间类型 */
  timeFilterType?: "CREATE_TIME" | "ASK_ACTION_TIME" | "REAL_ACTION_TIME" | "ASK_RESOLVE_TIME" | "APPOINTMENT_TIME" | "REAL_FINISH_TIME" | "REQUIRED_REVISIT_TIME" | "REAL_REVISIT_TIME";
  /** 要求开始时间 */
  startTime?: string;
  /** 要求结束时间 */
  endTime?: string;
};

/**
 * OpenAPI 组件类型：用户报事导出query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/UserReportExportQuery
 */
export type WorkOrderServiceUserReportExportQuery = {
  /** 人员id集合 */
  personIds?: string[];
  /** 岗位id集合 */
  postIds?: string[];
  /** 工单流程id集合 */
  flowIds?: string[];
  /** 报事位置：选中的层级id集合 */
  positionList?: string[];
  /** 报事类型集合 */
  repairProblemTypes?: string[];
  /** 回访状态集合 */
  orderRevisitStatus?: "REVISIT" | "TIMED_OUT_REVISIT" | "UN_REVISIT" | "TIMED_OUT_UN_REVISIT" | "NEED_FOLLOW_UP"[];
  /** 报事人评价 */
  orderReporterScores?: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "NOT_EVALUATED"[];
  /** 响应状态 */
  actionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION"[];
  /** 解决状态 */
  resolveStatus?: "UN_RESOLVED" | "TIMED_OUT_UN_RESOLVED" | "RESOLVED_ON_TIME" | "TIMED_OUT_RESOLVED"[];
  /** 工单状态 */
  orderStatus?: "2" | "3" | "4" | "5" | "11" | "6" | "7" | "8" | "9" | "10"[];
  /** 问题性质标签 */
  problemNatures?: "REPORT_REPAIR" | "ASSISTANCE_NEED" | "COMMENT" | "OPTIMIZATION_SUGGESTION"[];
  /** 处理专业集合 */
  processMajorCodes?: string[];
  /** 空间标签id */
  positionAsserts?: string[];
  /** 是否逾期(true:是;false:否) */
  overdueFlag?: boolean;
  /** 是否上报异常：REPORT_EXCEPTION-上报异常，ALL_NORMAL-全部正常 */
  whetherReportException?: "REPORT_EXCEPTION" | "ALL_NORMAL" | "WhetherReportExceptionEnum";
  /** 时间筛选集合 */
  timeFilters?: WorkOrderServiceTimeFilter[];
  /** 事项描述 */
  problemDesc?: string;
  /** 报事人 */
  reportPerson?: string;
  /** 报事人电话 */
  reportPersonPhone?: string;
  /** 工单编码 */
  orderNumber?: string;
  /** 工单名称 */
  orderName?: string;
  /** 导出字段集合 */
  exportedFields?: string[];
  /** 导出配置名称 */
  exportConfigName?: string;
};

/**
 * OpenAPI 组件类型：RWorkOrderTaskDetailVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderTaskDetailVo
 */
export type WorkOrderServiceRWorkOrderTaskDetailVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderTaskDetailVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderTaskDetailVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderTaskDetailVo
 */
export type WorkOrderServiceWorkOrderTaskDetailVo = {
  /** 任务id */
  taskId?: string;
  /** 任务名称 */
  taskName?: string;
  /** 对象实例id */
  instanceId?: string;
  /** 关联对象名称 */
  instanceName?: string;
  /** 部件名称 */
  component?: string;
  /** 任务状态 */
  extendStatus?: "EXE_EXCEPTION" | "NORMAL_FINISH" | "DISTRIBUTE_UNFINISHED" | "UN_DISTRIBUTE";
  /** 异常标签 */
  exceptionTag?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE"[];
  /** 任务要求开始时间（时间戳） */
  requiredBeginTime?: string;
  /** 任务要求完成时间（时间戳） */
  requireFinishTime?: string;
  /** 任务实际完成时间（时间戳） */
  realFinishTime?: string;
  /** 执行人名称 */
  executorName?: string;
  /** 工单编码 */
  orderId?: string;
  /** 工单名称 */
  orderName?: string;
  /** 工单类型 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 任务现场照片集合 */
  sceneImages?: string[];
  /** 任务执行类型：graded-分档反馈类,score-打分类,parameter-参数类,execute-执行类,repairAndReplace-维修更换类 */
  taskExecutionType?: "GRADED" | "SCORE" | "PARAMETER" | "EXECUTE" | "REPAIR_AND_REPLACE";
  /** 观测结果（在排查处理单中为默认结果）：normal-正常,warn-超征兆,exception-异常,notTraceable-不可查,executionCompleted-执行完成,unenforceable-不可执行 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION" | "NOT_TRACEABLE" | "EXECUTION_COMPLETED" | "UNENFORCEABLE";
  /** 分档反馈/打分结果 */
  gradedOrScoreResult?: WorkOrderServiceGradedOrScoreOption[];
  parameterCalculateResult?: WorkOrderServiceParameterCalculateResult;
  notTraceableResult?: WorkOrderServiceEnumStructDto;
  unenforceableResult?: WorkOrderServiceEnumStructDto;
  /** 维修更换任务-维修金额 */
  repairCost?: number;
  /** 备注信息 */
  remarks?: string;
  observeTaskInfo?: WorkOrderServiceWorkOrderTaskDetailVo;
};

/**
 * OpenAPI 组件类型：FeedBackReocrdParam
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/FeedBackReocrdParam
 */
export type WorkOrderServiceFeedBackReocrdParam = {
  recordId?: string;
  riskEvaluateRecordSourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
};

/**
 * OpenAPI 组件类型：FeedBackUploadInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/FeedBackUploadInfoVo
 */
export type WorkOrderServiceFeedBackUploadInfoVo = {
  /** 记录ID */
  recordId?: string;
  /** 现场图片列表 */
  sceneImages?: string[];
  /** 现场视频列表 */
  sceneVideos?: WorkOrderServiceVideo[];
  /** 备注 */
  remarks?: string;
  /** 处理人ID */
  handlerId?: string;
  /** 任务问题类型：INITIAL_PROBLEM（初始问题）、ASSOCIATED_PROBLEM（关联问题）、PROBLEM_CAUSE（问题原因）、REPAIR_SCHEME（维修方案） */
  taskIssueType?: "INITIAL_PROBLEM" | "ASSOCIATED_PROBLEM" | "PROBLEM_CAUSE" | "REPAIR_SCHEME";
};

/**
 * OpenAPI 组件类型：RListFeedBackUploadInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListFeedBackUploadInfoVo
 */
export type WorkOrderServiceRListFeedBackUploadInfoVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceFeedBackUploadInfoVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：FeedBackOrderInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/FeedBackOrderInfoVo
 */
export type WorkOrderServiceFeedBackOrderInfoVo = {
  /** 工单id */
  orderId?: string;
  /** 反馈记录集合 */
  recordId?: string[];
  /** 任务信息 */
  taskInfos?: WorkOrderServiceTaskInfo[];
  /** 执行人 */
  executePersonList?: string[];
  /** 审批人(系统审批时人员id为空) */
  approvalPersonList?: WorkOrderServiceHandlerBaseInfo[];
  /** 维修后拍摄的照片 */
  postRepairPhoto?: string[];
  /** 是否误报 */
  fakeAlarm?: boolean;
  /** 误报时的备注 */
  fakeAlarmRemark?: string;
  /** 工单类型分类 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单备注 */
  workOrderRemarks?: WorkOrderServiceWorkOrderRemarkDto[];
};

/**
 * OpenAPI 组件类型：审批人(系统审批时人员id为空)
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/HandlerBaseInfo
 */
export type WorkOrderServiceHandlerBaseInfo = {
  /** 处理人id */
  id?: string;
  /** 处理人名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：RListFeedBackOrderInfoVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListFeedBackOrderInfoVo
 */
export type WorkOrderServiceRListFeedBackOrderInfoVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceFeedBackOrderInfoVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：任务信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TaskInfo
 */
export type WorkOrderServiceTaskInfo = {
  /** 可执行措施 */
  exeMeasureId?: string;
  /** 任务对象Id */
  taskObjectId?: string;
};

/**
 * OpenAPI 组件类型：工单备注
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRemarkDto
 */
export type WorkOrderServiceWorkOrderRemarkDto = {
  /** 文字 */
  remark?: string;
  /** 图片 */
  images?: string[];
};

/**
 * OpenAPI 组件类型：回访配置dto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderSearchConfigDto
 */
export type WorkOrderServiceWorkOrderSearchConfigDto = {
  /** 配置id */
  id?: string;
  /** 账号 */
  account?: string;
  /** 手机号 */
  phone?: string;
  /** 描述 */
  businessDesc?: string;
  /** 业务类型：workOrderHallQuery-工单大厅筛选条件配置；workOrderHallShow-工单大厅列表展示配置；userReportQuery-用户报事筛选条件配置；userReportShow-用户报事列表展示配置；unRevisitQuery-未回访列表筛选条件配置；unRevisitShow-未回访列表列表展示配置；workOrderHallExport-工单大厅导出配置; userReportExport-用户报事列表导出配置'; */
  businessType: "workOrderHallQuery" | "workOrderHallShow" | "userReportQuery" | "userReportShow" | "unRevisitQuery" | "unRevisitShow" | "workOrderHallExport" | "userReportExport";
  /** 业务数据json体 */
  businessBody: Record<string, never>[];
  /** 人员id */
  personId?: string;
};

/**
 * OpenAPI 组件类型：任务质量问题分页查询query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SearchConfigQuery
 */
export type WorkOrderServiceSearchConfigQuery = {
  /** 配置类型 */
  businessType: "workOrderHallQuery" | "workOrderHallShow" | "userReportQuery" | "userReportShow" | "unRevisitQuery" | "unRevisitShow" | "workOrderHallExport" | "userReportExport"[];
  /** 账号 */
  account?: string;
  /** 手机号 */
  phone?: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderSearchVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderSearchVo
 */
export type WorkOrderServiceRListWorkOrderSearchVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderSearchVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：回访配置vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderSearchVo
 */
export type WorkOrderServiceWorkOrderSearchVo = {
  /** 配置id */
  id?: string;
  /** 描述 */
  businessDesc?: string;
  /** 业务类型：workOrderHallQuery-工单大厅筛选条件配置；workOrderHallShow-工单大厅列表展示配置；userReportQuery-用户报事筛选条件配置；userReportShow-用户报事列表展示配置；unRevisitQuery-未回访列表筛选条件配置；unRevisitShow-未回访列表列表展示配置；workOrderHallExport-工单大厅导出配置; userReportExport-用户报事列表导出配置'; */
  businessType?: "workOrderHallQuery" | "workOrderHallShow" | "userReportQuery" | "userReportShow" | "unRevisitQuery" | "unRevisitShow" | "workOrderHallExport" | "userReportExport";
  /** 业务数据json体 */
  businessBody?: Record<string, never>[];
};

/**
 * OpenAPI 组件类型：PositionInfo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/PositionInfo
 */
export type WorkOrderServicePositionInfo = {
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  /** 楼层序号 */
  floorSequenceID?: number;
  /** 空间id */
  spaceId?: string;
  /** 空间名称 */
  spaceName?: string;
  /** 所在位置 */
  objectLocation?: string;
  spaceKey?: string;
};

/**
 * OpenAPI 组件类型：我的上报记录详情查询query
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportRecordQuery
 */
export type WorkOrderServiceReportRecordQuery = {
  /** 记录id */
  recordId: string;
  /** 创建渠道 */
  sourceType: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
};

/**
 * OpenAPI 组件类型：关联工单信息
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/LinkOrderInfo
 */
export type WorkOrderServiceLinkOrderInfo = {
  /** 工单id */
  orderId?: string;
  /** 工单名称 */
  woName?: string;
  /** 工作类型分类编码 */
  workType?: string;
  /** 问题性质标签（用户报事单有） */
  problemNatureCode?: string;
};

/**
 * OpenAPI 组件类型：问题对象
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProblemObject
 */
export type WorkOrderServiceProblemObject = {
  /** 对象id */
  id?: string;
  /** 对象名称 */
  name?: string;
  /** 对象类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
};

/**
 * OpenAPI 组件类型：RWorkOrderReportRecordVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderReportRecordVo
 */
export type WorkOrderServiceRWorkOrderReportRecordVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderReportRecordVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：上报渠道
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportChannel
 */
export type WorkOrderServiceReportChannel = {
  /** 上报id */
  id?: string;
  /** 上报名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：上报记录详情vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderReportRecordVo
 */
export type WorkOrderServiceWorkOrderReportRecordVo = {
  /** 问题id */
  problemId?: string;
  /** 问题名称 */
  problemName?: string;
  /** 创建渠道来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 标签: 是否已处理 */
  handled?: boolean;
  positionInfo?: WorkOrderServicePositionInfo;
  reportChannel?: WorkOrderServiceReportChannel;
  /** 上报时间 */
  reportTime?: string;
  problemObject?: WorkOrderServiceProblemObject;
  /** 相关描述 */
  reportProblemDesc?: string;
  /** 图片 */
  images?: string[];
  /** 视频 */
  videos?: WorkOrderServiceVideo[];
  sourceOrderInfo?: WorkOrderServiceLinkOrderInfo;
  /** 处理问题的工单 */
  handleProblemOrderInfo?: WorkOrderServiceLinkOrderInfo[];
};

/**
 * OpenAPI 组件类型：时间范围集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/TimeLimitDto
 */
export type WorkOrderServiceTimeLimitDto = {
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
  /** 时间类型 */
  type?: "createTime" | "askStartTime" | "requiredActionTime" | "realActionTime" | "askEndTime" | "realFinishTime";
};

/**
 * OpenAPI 组件类型：WorkOrderDownloadQueryDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderDownloadQueryDto
 */
export type WorkOrderServiceWorkOrderDownloadQueryDto = {
  /** 项目id */
  projectId: string;
  /** 人员id */
  personId?: string;
  /** 账号id */
  accountId: string;
  /** 关键字(工单名称、工单编号) */
  keyword?: string;
  /** 工作类型集合 */
  jobTypeIds?: string[];
  /** 工单流程id集合 */
  flowIds?: string[];
  /** 创建渠道 */
  createChannels?: string[];
  /** 发起人id集合 */
  promoterPersonIds?: string[];
  /** 发起人岗位id集合 */
  promoterPositionIds?: string[];
  /** 计划id集合 */
  planIds?: string[];
  /** 策略id集合 */
  strategyIds?: string[];
  /** 对象类集合 */
  classCodes?: string[];
  /** 空间分类编码集合(空间分类编码集合) */
  spaceTypeCodes?: string[];
  /** 对象实例id集合 */
  instanceIds?: string[];
  /** 建筑id */
  buildingId?: string;
  /** 楼层id */
  floorId?: string;
  /** 空间id */
  spaceId?: string;
  /** 工单状态 */
  orderStates?: string[];
  /** 处理专业集合 */
  processMajorCodes?: string[];
  /** 时间范围集合 */
  timeLimits?: WorkOrderServiceTimeLimitDto[];
  /** 处理人id集合 */
  handlerPersonIds?: string[];
  /** 处理人岗位集合 */
  handlerPositionIds?: string[];
  /** 是否逾期(true:是;false:否) */
  overdueFlag?: boolean;
  /** 响应状态 */
  actionStatus?: "UN_ACTION" | "TIMED_OUT_UN_ACTION" | "TIMED_OUT_ACTION" | "ON_TIME_ACTION"[];
  /** 是否上报异常 */
  whetherReportException?: "REPORT_EXCEPTION" | "ALL_NORMAL" | "WhetherReportExceptionEnum";
  /** 导出字段 */
  orderColumns?: "woNumber" | "woName" | "jobTypeName" | "flowName" | "createChannel" | "promoter" | "planName" | "orderState" | "processMajorName" | "createTime" | "askStartTime" | "requiredActionTime" | "realActionTime" | "askEndTime" | "realFinishTime" | "handlers" | "overdueFlag" | "actionStatus" | "totalTaskNum" | "unfinishedTaskNum" | "whetherReportException" | "exceptionTaskNum" | "exceptionResolvedTaskNum" | "unenforceableTaskNum"[];
  /** 异常任务信息导出字段 */
  exceptionTaskColumns?: "taskId" | "woNumber" | "woName" | "taskObjectName" | "objectPosition" | "strategyName" | "planName" | "taskName" | "taskRemark" | "taskImage"[];
  /** 维修信息导出字段 */
  repairInfoColumns?: "taskId" | "woNumber" | "woName" | "repairObject" | "objectPosition" | "strategyName" | "planName" | "repairInfo" | "taskRemark" | "estimateCost" | "actualCost" | "repairImage" | "repairBeforeImage"[];
  /** 导出配置名称 */
  exportConfigName?: string;
};

/**
 * OpenAPI 组件类型：DailyWorkQuery
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DailyWorkQuery
 */
export type WorkOrderServiceDailyWorkQuery = {
  /** 人员id */
  personId?: string;
  /** 处理状态 */
  processStatus?: "UNPROCESSED" | "PROCESSED";
  /** 逾期状态 */
  overdueStatus?: "ABOUT_TO_OVERDUE" | "OVERDUE";
  /** 工作类型筛选：建筑-楼层-空间 */
  spaceObjDtoList?: WorkOrderServiceSpaceObjDto[];
  /** 空间分布筛选：工单类型 */
  jobTypeIds?: string[];
};

/**
 * OpenAPI 组件类型：工作类型筛选：建筑-楼层-空间
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/SpaceObjDto
 */
export type WorkOrderServiceSpaceObjDto = {
  /** 建筑id */
  buildingId?: string;
  /** 楼层id */
  floorId?: string;
  /** 所属空间id */
  spaceId?: string;
  spaceKey?: string;
};

/**
 * OpenAPI 组件类型：楼层集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DailyFloorDto
 */
export type WorkOrderServiceDailyFloorDto = {
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  floorSequenceId?: string;
  /** 空间集合 */
  spaceObjVoList?: WorkOrderServiceDailySpaceObjVo[];
  floorSequenceIdInt?: number;
};

/**
 * OpenAPI 组件类型：空间集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DailySpaceObjVo
 */
export type WorkOrderServiceDailySpaceObjVo = {
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  floorSequenceId?: string;
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  spaceKey?: string;
};

/**
 * OpenAPI 组件类型：DailyWorkSpaceObjVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DailyWorkSpaceObjVo
 */
export type WorkOrderServiceDailyWorkSpaceObjVo = {
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层集合 */
  floorDtoList?: WorkOrderServiceDailyFloorDto[];
  /** 需处理数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：RListDailyWorkSpaceObjVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListDailyWorkSpaceObjVo
 */
export type WorkOrderServiceRListDailyWorkSpaceObjVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceDailyWorkSpaceObjVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：楼层集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DailySpaceFloorDto
 */
export type WorkOrderServiceDailySpaceFloorDto = {
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  floorSequenceId?: string;
  /** 空间集合 */
  spaceObjVoList?: WorkOrderServiceDailySpaceVo[];
  floorSequenceIdInt?: number;
};

/**
 * OpenAPI 组件类型：空间集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DailySpaceVo
 */
export type WorkOrderServiceDailySpaceVo = {
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 卡片集合 */
  dailyWorkCardVoList?: WorkOrderServiceDailyWorkCardVo[];
};

/**
 * OpenAPI 组件类型：卡片集合
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DailyWorkCardVo
 */
export type WorkOrderServiceDailyWorkCardVo = {
  /** 工单主键 */
  orderId?: string;
  /** 工单名称 */
  workName?: string;
  /** 处理状态 ：未处理：UNPROCESSED  已处理 PROCESSED */
  processStatus?: "UNPROCESSED" | "PROCESSED";
  /** 逾期情况 ABOUT_TO_OVERDUE：即将逾期   OVERDUE：逾期  NOT_OVERDUE：未逾期（不展示） */
  overdueFlag?: "ABOUT_TO_OVERDUE" | "OVERDUE";
  /** 申请类型  申请终止：APPLY_CLOSE,申请延期： APPLY_DELAY */
  applyType?: "APPLY_STOP" | "APPLY_DELAY";
  /** 路由编码 */
  routingControlCode?: "RECEIVE" | "ROBBING" | "CLASSIFY" | "ASSIGN" | "EXECUTE" | "AUDIT_PLAN" | "AUDIT_CLOSE" | "APPROVAL_CLOSE" | "APPROVAL_ADD_PEOPLE" | "APPROVAL_REPLACE_PEOPLE" | "AUDIT_STOP" | "APPROVAL_STOP" | "AUDIT_DELAY" | "APPROVAL_DELAY" | "EVALUATE";
  /** 路由id */
  routingControlId?: string;
  /** 报事保修专用 */
  problemNatureCode?: string;
  /** 要求响应时间 */
  requiredActionTime?: string;
  /** 要求完成时间 */
  requiredCompletionTime?: string;
  /** 设备地点 */
  deviceLocation?: string;
  /** 工作类型分类 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工作类型 */
  jobTypeId?: string;
  /** 响应类型 */
  actionType?: "NO_ACTION" | "ACTION_ON_ACCEPT" | "TAKE_PHOTO_CONFIRM" | "SCAN_CODE_CONFIRM";
};

/**
 * OpenAPI 组件类型：DailyWorkSpaceVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DailyWorkSpaceVo
 */
export type WorkOrderServiceDailyWorkSpaceVo = {
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 需处理数量 */
  count?: number;
  /** 楼层集合 */
  floorDtoList?: WorkOrderServiceDailySpaceFloorDto[];
};

/**
 * OpenAPI 组件类型：RListDailyWorkSpaceVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListDailyWorkSpaceVo
 */
export type WorkOrderServiceRListDailyWorkSpaceVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceDailyWorkSpaceVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：DailyWorkTypeVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/DailyWorkTypeVo
 */
export type WorkOrderServiceDailyWorkTypeVo = {
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  jobTypeId?: string;
  dailyWorkCardVoList?: WorkOrderServiceDailyWorkCardVo[];
};

/**
 * OpenAPI 组件类型：RListDailyWorkTypeVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListDailyWorkTypeVo
 */
export type WorkOrderServiceRListDailyWorkTypeVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceDailyWorkTypeVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderReportRecordCardVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderReportRecordCardVo
 */
export type WorkOrderServiceRListWorkOrderReportRecordCardVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderReportRecordCardVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：上报记录卡片VO
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderReportRecordCardVo
 */
export type WorkOrderServiceWorkOrderReportRecordCardVo = {
  /** 问题id */
  problemId?: string;
  /** 问题名称 */
  problemName?: string;
  /** 创建渠道来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 标签: 是否已处理 */
  handled?: boolean;
  positionInfo?: WorkOrderServicePositionInfo;
  reportChannel?: WorkOrderServiceReportChannel;
  /** 上报时间 */
  reportTime?: string;
  problemObject?: WorkOrderServiceProblemObject;
};

/**
 * OpenAPI 组件类型：补充问题描述
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/actualImpact
 */
export type WorkOrderServiceActualImpact2 = {
  /** 字段值 */
  value?: string;
  /** 排序 */
  sort?: number;
  /** 字段编码 */
  code?: string;
  /** 选填必填 */
  columnProEnum?: "REQUIRED" | "OPTIONAL" | "CONDITIONAL" | "SHOW" | "HIDDEN";
  /** 流程条件集合 */
  conditionValues?: WorkOrderServiceRiskProcessConditionDTO[];
  /** 拓展条件集合 */
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
};

/**
 * OpenAPI 组件类型：CreateChannelTree
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/CreateChannelTree
 */
export type WorkOrderServiceCreateChannelTree = {
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 提示 */
  tip?: string;
  /** 子节点（可为 null 或空） */
  children?: WorkOrderServiceCreateChannelTree[];
};

/**
 * OpenAPI 组件类型：RListCreateChannelTree
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListCreateChannelTree
 */
export type WorkOrderServiceRListCreateChannelTree = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceCreateChannelTree[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：AlertReportDto2
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AlertReportDto2
 */
export type WorkOrderServiceAlertReportDto2 = {
  id?: number;
  name?: string;
  rwdInstanceId?: string;
  classCode?: string;
  pjRiskBusinessId?: string;
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
  reportInfoCode?: string;
  extCustomData?: WorkOrderServiceAlertReportExtDto;
  problemType?: "SELF_REPAIR";
  groupId?: string;
  personId?: string;
  description?: string;
  imageIds?: string;
  videos?: WorkOrderServiceVideo[];
  sopCode?: string;
  projectId?: string;
  createTime?: string;
  reportTime?: string;
};

/**
 * OpenAPI 组件类型：AlertReportExtDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/AlertReportExtDto
 */
export type WorkOrderServiceAlertReportExtDto = {
  problem?: WorkOrderServiceAlertProblem;
  objectInfo?: WorkOrderServiceAlertObjectInfo;
  personId?: string;
  processId?: string;
  md5?: string;
};

/**
 * OpenAPI 组件类型：RAlertReportDto2
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RAlertReportDto2
 */
export type WorkOrderServiceRAlertReportDto2 = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceAlertReportDto2;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RListWorkOrderDownloadVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListWorkOrderDownloadVo
 */
export type WorkOrderServiceRListWorkOrderDownloadVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderDownloadVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderDownloadVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderDownloadVo
 */
export type WorkOrderServiceWorkOrderDownloadVo = {
  /** 下载id */
  id?: string;
  /** 下载状态 */
  state?: "UN_DEAL" | "DEALING" | "DEAL_FINISH" | "DEAL_EXCEPTION";
  /** 下载时间 */
  downloadTime?: string;
  /** 文件名称 */
  fileName?: string;
  /** 文件id */
  fileId?: string;
};

/**
 * OpenAPI 组件类型：RWorkOrderRiskProcessVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RWorkOrderRiskProcessVo
 */
export type WorkOrderServiceRWorkOrderRiskProcessVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceWorkOrderRiskProcessVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RiskProcessDataItemDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskProcessDataItemDto
 */
export type WorkOrderServiceRiskProcessDataItemDto = {
  dataItemId?: string;
  processId?: string;
  dataItemCode?: string;
  workItemId?: string;
  isDisplayed?: boolean;
  isRequired?: boolean;
  sortSeq?: number;
};

/**
 * OpenAPI 组件类型：RiskProcessStageDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskProcessStageDto
 */
export type WorkOrderServiceRiskProcessStageDto = {
  stageId?: string;
  processId?: string;
  stageCode?: string;
  workLinkCode?: string;
  conditionValues?: string;
  sortSeq?: number;
  riskProcessWorkItems?: WorkOrderServiceRiskProcessWorkItemDto[];
};

/**
 * OpenAPI 组件类型：RiskProcessWorkItemDto
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RiskProcessWorkItemDto
 */
export type WorkOrderServiceRiskProcessWorkItemDto = {
  workItemId?: string;
  processId?: string;
  stageId?: string;
  workItemCode?: string;
  isConfigVisible?: boolean;
  generalRequirement?: "COMMON" | "OPTIONAL" | "CONDITIONAL";
  specialRequirement?: string;
  workItemExtends?: WorkOrderServiceWorkItemExtend[];
  conditionValues?: string;
  sortSeq?: number;
  riskProcessDataItems?: WorkOrderServiceRiskProcessDataItemDto[];
};

/**
 * OpenAPI 组件类型：WorkOrderRiskProcessVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/WorkOrderRiskProcessVo
 */
export type WorkOrderServiceWorkOrderRiskProcessVo = {
  /** 项目风险流程Id */
  processId?: string;
  md5?: string;
  projectId?: string;
  processName?: string;
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  tag?: "IOT" | "COMMON" | "NO" | "SELF_REPAIR";
  riskProcessStages?: WorkOrderServiceRiskProcessStageDto[];
};

/**
 * OpenAPI 组件类型：今日工作-统计vo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ProcessStatisticVo
 */
export type WorkOrderServiceProcessStatisticVo = {
  /** 已处理 */
  processed?: number;
  /** 总数 */
  totalCount?: number;
  /** 即将逾期 */
  aboutToOverdue?: number;
  /** 未处理 */
  unprocessed?: number;
  /** 当前时间戳 */
  currentTime?: string;
};

/**
 * OpenAPI 组件类型：RProcessStatisticVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RProcessStatisticVo
 */
export type WorkOrderServiceRProcessStatisticVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceProcessStatisticVo;
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：RListReportRecordObjVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/RListReportRecordObjVo
 */
export type WorkOrderServiceRListReportRecordObjVo = {
  code?: string;
  result?: string;
  data?: WorkOrderServiceReportRecordObjVo[];
  message?: string;
  count?: number;
  total?: number;
  size?: number;
  current?: number;
  pages?: number;
  orders?: WorkOrderServiceOrderItem[];
  timestamp?: number;
  extra?: Record<string, Record<string, never>>;
  traceId?: string;
  withColumns?: string[];
  includeColumns?: string[];
  cause?: string;
};

/**
 * OpenAPI 组件类型：ReportRecordObjVo
 *
 * 来源：docs/product-apis/work-order-service/openapi.json#/components/schemas/ReportRecordObjVo
 */
export type WorkOrderServiceReportRecordObjVo = {
  /** 建筑id */
  buildingId?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层id */
  floorId?: string;
  /** 楼层名称 */
  floorName?: string;
  floorSequenceID?: number;
  /** 所属空间id */
  spaceId?: string;
  /** 所属空间名称 */
  spaceName?: string;
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  children?: WorkOrderServiceReportRecordObjVo[];
  spaceKey?: string;
};

/**
 * WorkOrderServiceFmWorkorderServerWorkOrderQueryHisCompleteListByCreateTimeQuery 查询参数。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryHisCompleteListByCreateTimeQuery = {
  /** 返回数量 */
  limit?: number;
};

/**
 * WorkOrderServiceFmWorkorderServerWorkOrderQueryListActionByExceptionIdQuery 查询参数。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryListActionByExceptionIdQuery = {
  /** exceptionId */
  exceptionId: string;
};

/**
 * WorkOrderServiceFmWorkorderServerWorkOrderQueryMaintenanceExecutorDetailsQuery 查询参数。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryMaintenanceExecutorDetailsQuery = {
  /** 异常事件id */
  exceptionCode: string;
};

/**
 * WorkOrderServiceFmWorkorderServerWorkOrderQueryMaintenanceExecutorDetailsV2Query 查询参数。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryMaintenanceExecutorDetailsV2Query = {
  /** 异常事件id */
  exceptionCode: string;
};

/**
 * WorkOrderServiceFmWorkorderServerWorkOrderQueryQueryByExceptionIdQuery 查询参数。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryQueryByExceptionIdQuery = {
  /** exceptionId */
  exceptionId: string;
};

/**
 * POST /fm-workorder-server/restWorkOrderService/queryWorkOrderList 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerRestWorkOrderServiceQueryWorkOrderListBody = WorkOrderServiceJSONObject;

/**
 * POST /fm-workorder-server/work/flow/getJobTypeList 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkFlowGetJobTypeListBody = WorkOrderServiceJobTypeParam;

/**
 * POST /fm-workorder-server/work/flow/public/listByParam 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkFlowPublicListByParamBody = WorkOrderServicePublicWorkFlowListByParamDTO;

/**
 * POST /fm-workorder-server/work-order/query/complete-list-by-orderIds 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryCompleteListByOrderIdsBody = WorkOrderServiceWorkOrderCompleteInfoQueryDto;

/**
 * POST /fm-workorder-server/work-order/query/his/complete-list-by-createTime 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryHisCompleteListByCreateTimeBody = WorkOrderServiceWorkOrderHisQueryDTO;

/**
 * POST /fm-workorder-server/work-order/query/list-by-dto 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryListByDtoBody = WorkOrderServiceWorkOrderPageQueryDto;

/**
 * POST /fm-workorder-server/work-order/query/list-by-objectId 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryListByObjectIdBody = WorkOrderServiceRepairWorkOrderQueryDto;

/**
 * POST /fm-workorder-server/work-order/query/list-by-param 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryListByParamBody = WorkOrderServiceWorkOrderPageParamDto;

/**
 * POST /fm-workorder-server/work-order/query/list-receiver-by-exceptionId 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderQueryListReceiverByExceptionIdBody = WorkOrderServiceWorkOrderReceiverQueryDto;

/**
 * POST /fm-workorder-server/work-order/task/batch-create 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskBatchCreateBody = WorkOrderServiceWorkOrderTaskCreateDto;

/**
 * POST /fm-workorder-server/work-order/task/batch-query 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskBatchQueryBody = WorkOrderServiceWorkOrderTaskQueryDto;

/**
 * POST /fm-workorder-server/work-order/task-cost/query 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskCostQueryBody = WorkOrderServiceTaskCostQuery;

/**
 * POST /fm-workorder-server/work-order/task-cost/queryAllCost 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskCostQueryAllCostBody = WorkOrderServiceTaskCreateCostQuery;

/**
 * POST /fm-workorder-server/work-order/task/feedback/getOrderInfos 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskFeedbackGetOrderInfosBody = WorkOrderServiceFeedBackReocrdParam[];

/**
 * POST /fm-workorder-server/work-order/task/feedback/getUploadInfos 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskFeedbackGetUploadInfosBody = WorkOrderServiceFeedBackReocrdParam[];

/**
 * POST /fm-workorder-server/work-order/task/feedback/records 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskFeedbackRecordsBody = string[];

/**
 * POST /fm-workorder-server/work-order/task/last-operate-by-instanceIds 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskLastOperateByInstanceIdsBody = string[];

/**
 * POST /fm-workorder-server/work-order/task/list-by-orderIds 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskListByOrderIdsBody = WorkOrderServiceTaskPageDto;

/**
 * POST /fm-workorder-server/work-order/task/list-observe-result-instanceIds 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskListObserveResultInstanceIdsBody = WorkOrderServiceTaskExecResultDto;

/**
 * POST /fm-workorder-server/work-order/task/list-plan-task 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskListPlanTaskBody = WorkOrderServiceWorkOrderPlanTaskQueryDto;

/**
 * POST /fm-workorder-server/work-order/task/plan-task-query 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskPlanTaskQueryBody = WorkOrderServiceWorkOrderTaskQueryDto;

/**
 * POST /fm-workorder-server/work-order/task/query-by-workOrderId 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderTaskQueryByWorkOrderIdBody = WorkOrderServiceWorkOrderTaskBaseQueryDto;

/**
 * POST /fm-workorder-server/workOrder/userReport/queryUserReportOrderData 的请求体。
 */
export type WorkOrderServiceFmWorkorderServerWorkOrderUserReportQueryUserReportOrderDataBody = WorkOrderServiceUserReportQueryDto;

/**
 * docs/product-apis/work-order-service 对应的请求对象类型。
 */
export type WorkOrderServiceApi = ReturnType<typeof createWorkOrderServiceApi>;

/**
 * 创建 work-order-service 请求对象，所有方法都会复用统一网关配置和鉴权请求头。
 */
export function createWorkOrderServiceApi(config: GatewayConfig) {
  return {
  /**
   * 接口说明：【工单大厅】分页查询(自用、迈瑞二开)调用
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/restWorkOrderService/queryWorkOrderList
   */
  fmWorkorderServerRestWorkOrderServiceQueryWorkOrderList<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerRestWorkOrderServiceQueryWorkOrderListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/restWorkOrderService/queryWorkOrderList",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【公共接口】-查询符合条件的工作类型
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work/flow/getJobTypeList
   */
  fmWorkorderServerWorkFlowGetJobTypeList<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkFlowGetJobTypeListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work/flow/getJobTypeList",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【公共接口】-查询符合条件的工单流程集合
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work/flow/public/listByParam
   */
  fmWorkorderServerWorkFlowPublicListByParam<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkFlowPublicListByParamBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work/flow/public/listByParam",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：基于工单id集合返回符合工作类型工单列表数据
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/query/complete-list-by-orderIds
   */
  fmWorkorderServerWorkOrderQueryCompleteListByOrderIds<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderQueryCompleteListByOrderIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/complete-list-by-orderIds",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：基于项目维度获取历史已完成符合工作类型工单列表数据
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/query/his/complete-list-by-createTime
   */
  fmWorkorderServerWorkOrderQueryHisCompleteListByCreateTime<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderQueryHisCompleteListByCreateTimeBody,
    query: WorkOrderServiceFmWorkorderServerWorkOrderQueryHisCompleteListByCreateTimeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/his/complete-list-by-createTime",
      method: "POST",
      query: query,
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据异常事件查询关联工单响应信息
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：GET /fm-workorder-server/work-order/query/list-action-by-exceptionId
   */
  fmWorkorderServerWorkOrderQueryListActionByExceptionId<T = JsonValue>(
    query: WorkOrderServiceFmWorkorderServerWorkOrderQueryListActionByExceptionIdQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/list-action-by-exceptionId",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据时间或工单类型查询工单
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/query/list-by-dto
   */
  fmWorkorderServerWorkOrderQueryListByDto<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderQueryListByDtoBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/list-by-dto",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据对象id查询进行中的维修工单信息
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/query/list-by-objectId
   */
  fmWorkorderServerWorkOrderQueryListByObjectId<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderQueryListByObjectIdBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/list-by-objectId",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据条件查询工单列表
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/query/list-by-param
   */
  fmWorkorderServerWorkOrderQueryListByParam<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderQueryListByParamBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/list-by-param",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据异常事件查询关联的排查处理单的可接工单的所有人员
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/query/list-receiver-by-exceptionId
   */
  fmWorkorderServerWorkOrderQueryListReceiverByExceptionId<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderQueryListReceiverByExceptionIdBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/list-receiver-by-exceptionId",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：排查处理单过程详情
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/query/maintenance/executor/details
   */
  fmWorkorderServerWorkOrderQueryMaintenanceExecutorDetails<T = JsonValue>(
    query: WorkOrderServiceFmWorkorderServerWorkOrderQueryMaintenanceExecutorDetailsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/maintenance/executor/details",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：排查处理单过程详情V2
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/query/maintenance/executor/details/v2
   */
  fmWorkorderServerWorkOrderQueryMaintenanceExecutorDetailsV2<T = JsonValue>(
    query: WorkOrderServiceFmWorkorderServerWorkOrderQueryMaintenanceExecutorDetailsV2Query,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/maintenance/executor/details/v2",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：异常事件查询工单基本信息
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：GET /fm-workorder-server/work-order/query/query-by-exceptionId
   */
  fmWorkorderServerWorkOrderQueryQueryByExceptionId<T = JsonValue>(
    query: WorkOrderServiceFmWorkorderServerWorkOrderQueryQueryByExceptionIdQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/query/query-by-exceptionId",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量创建工单任务
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/batch-create
   */
  fmWorkorderServerWorkOrderTaskBatchCreate<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskBatchCreateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/batch-create",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量查询工单任务
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/batch-query
   */
  fmWorkorderServerWorkOrderTaskBatchQuery<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskBatchQueryBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/batch-query",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量已完成工单查询费用(二开接口&meoi接口)
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task-cost/query
   */
  fmWorkorderServerWorkOrderTaskCostQuery<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskCostQueryBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task-cost/query",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量全量工单查询费用
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task-cost/queryAllCost
   */
  fmWorkorderServerWorkOrderTaskCostQueryAllCost<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskCostQueryAllCostBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task-cost/queryAllCost",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据反馈记录查询工单信息
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/feedback/getOrderInfos
   */
  fmWorkorderServerWorkOrderTaskFeedbackGetOrderInfos<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskFeedbackGetOrderInfosBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/feedback/getOrderInfos",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据反馈记录查询上报信息
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/feedback/getUploadInfos
   */
  fmWorkorderServerWorkOrderTaskFeedbackGetUploadInfos<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskFeedbackGetUploadInfosBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/feedback/getUploadInfos",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据反馈记录id查询反馈记录信息
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/feedback/records
   */
  fmWorkorderServerWorkOrderTaskFeedbackRecords<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskFeedbackRecordsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/feedback/records",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【MEOI】根据对象实例id集合查询最近一次完成的工单信息
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/last-operate-by-instanceIds
   */
  fmWorkorderServerWorkOrderTaskLastOperateByInstanceIds<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskLastOperateByInstanceIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/last-operate-by-instanceIds",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据工单集合批量查询任务基本信息集
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/list-by-orderIds
   */
  fmWorkorderServerWorkOrderTaskListByOrderIds<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskListByOrderIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/list-by-orderIds",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【合规报表】根据对象实例id集合查询实例观测结果
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/list-observe-result-instanceIds
   */
  fmWorkorderServerWorkOrderTaskListObserveResultInstanceIds<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskListObserveResultInstanceIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/list-observe-result-instanceIds",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据策略事项、对象实例查询计划巡检、计划维保工单的任务信息
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/list-plan-task
   */
  fmWorkorderServerWorkOrderTaskListPlanTask<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskListPlanTaskBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/list-plan-task",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：巡检维保计划任务统计查询
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/plan-task-query
   */
  fmWorkorderServerWorkOrderTaskPlanTaskQuery<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskPlanTaskQueryBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/plan-task-query",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据工单id查询任务基本信息
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/work-order/task/query-by-workOrderId
   */
  fmWorkorderServerWorkOrderTaskQueryByWorkOrderId<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderTaskQueryByWorkOrderIdBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/work-order/task/query-by-workOrderId",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询用户报事工单数据
   *
   * 来源：docs/product-apis/work-order-service/openapi.json
   * HTTP：POST /fm-workorder-server/workOrder/userReport/queryUserReportOrderData
   */
  fmWorkorderServerWorkOrderUserReportQueryUserReportOrderData<T = JsonValue>(
    body: WorkOrderServiceFmWorkorderServerWorkOrderUserReportQueryUserReportOrderDataBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/fm-workorder-server/workOrder/userReport/queryUserReportOrderData",
      method: "POST",
      body,
      headers: options.headers,
    });
  }
  };
}
