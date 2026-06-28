import {
  requestGateway,
  type GatewayConfig,
} from "../gateway.js";
import type {
  JsonValue,
  ProductApiCallOptions,
} from "./types.js";

/**
 * OpenAPI 组件类型：0
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/0
 */
export type RiskDataService0 = {
  /** rcc风险事件id */
  id?: number;
  /** rcc风险事件名称 */
  name?: string;
  /** rcc风险事件-演绎归纳 */
  deductiveInduction?: RiskDataServiceDeductiveInduction;
  /** 风险事件类型 */
  type?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE";
};

/**
 * OpenAPI 组件类型：测试
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/测试
 */
export type RiskDataServiceValue = Record<string, never>;

/**
 * OpenAPI 组件类型：ObjectTreeBaseVo«string»
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVo«string»
 */
export type RiskDataServiceObjectTreeBaseVoString = {
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoString[];
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "MEOI_SPACE_TYPE";
  /** 节点唯一键 */
  uuid?: string;
};

/**
 * OpenAPI 组件类型：ObjectTreeVo«string,PjKlbRiskEventManageScopeVo»
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeVo«string,PjKlbRiskEventManageScopeVo»
 */
export type RiskDataServiceObjectTreeVoStringPjKlbRiskEventManageScopeVo = {
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoString[];
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点关联的业务数据 */
  data?: RiskDataServicePjKlbRiskEventManageScopeVo[];
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "MEOI_SPACE_TYPE";
  /** 节点唯一键 */
  uuid?: string;
};

/**
 * OpenAPI 组件类型：刷新参数
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/刷新参数
 */
export type RiskDataServiceValue2 = {
  /** 刷新的风险事件范围,如果为空,则表示刷新全量 */
  riskEventBusinessIds?: number[];
};

/**
 * OpenAPI 组件类型：项目刷新状态
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/项目刷新状态
 */
export type RiskDataServiceValue3 = {
  /** 是否正在刷新 */
  refresh?: boolean;
  /** 任务中的风险事件状态 */
  riskEventStatusList?: RiskDataServiceRiskEventRefreshStatusVo[];
};

/**
 * OpenAPI 组件类型：ExceptionEventResolvedTitleStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventResolvedTitleStruct
 */
export type RiskDataServiceExceptionEventResolvedTitleStruct = {
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
};

/**
 * OpenAPI 组件类型：ExceptionEventResolvedRelExceptionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventResolvedRelExceptionStruct
 */
export type RiskDataServiceExceptionEventResolvedRelExceptionStruct = {
  /** 异常事件编号 */
  exceptionNumber?: string;
  /** 异常事件名称 */
  exceptionEventName?: string;
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 异常开始时间 */
  exceptionStartTime?: string;
};

/**
 * OpenAPI 组件类型：EEObjInstanceProblemStatisticsInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceProblemStatisticsInfoVo
 */
export type RiskDataServiceEEObjInstanceProblemStatisticsInfoVo = {
  totalFaultCrucialFaultCount: number;
  totalOtherCrucialFaultCount: number;
  dealMajorCrucialFaults: RiskDataServiceCrucialFaultCountVo[];
  eeObjInstanceProblemStatistics: RiskDataServiceEEObjInstanceProblemStatisticsVo[];
};

/**
 * OpenAPI 组件类型：CrucialFaultCountVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CrucialFaultCountVo
 */
export type RiskDataServiceCrucialFaultCountVo = {
  code: string;
  crucialFaultCount: number;
};

/**
 * OpenAPI 组件类型：EESuggestProblemImpactVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EESuggestProblemImpactVo
 */
export type RiskDataServiceEESuggestProblemImpactVo = {
  riskBusinessId: string;
  problems: {
    /** 实例id */
    instanceId?: string;
    /** 实例的信息 */
    instance?: RiskDataServiceRwdObjectVo;
    /** 问题的状态 */
    riskStatus?: string;
    /** 要素 */
    riskBusinessId?: string;
    riskInstanceBusinessId?: string;
    /** 问题的等级 */
    issueLevel?: {
      level: {
        code: string;
        name: string;
      };
      alias: string;
    };
    /** 问题 */
    problem?: string;
    /** 实际影响 */
    riskEventImpacts?: {
      /** 实际影响id */
      id: number;
      /** 实际影响描述 */
      description: string;
      /** 实际影响类型 */
      impactCategory: RiskDataServicePjRiskImpactCategoryVo;
    }[];
  }[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleDisableInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleDisableInstanceVo
 */
export type RiskDataServiceIotAlertRuleDisableInstanceVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 品牌 */
  brand?: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  /** 规则id */
  ruleIds: string[];
  /** 是否有规则 */
  hasRule: boolean;
};

/**
 * OpenAPI 组件类型：IotAlertRuleDisableInstanceTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleDisableInstanceTreeVo
 */
export type RiskDataServiceIotAlertRuleDisableInstanceTreeVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 品牌 */
  brand?: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  /** 规则id */
  ruleIds: string[];
  children: RiskDataServiceIotAlertRuleDisableInstanceTreeVo[];
  /** 是否有规则 */
  hasRule: boolean;
};

/**
 * OpenAPI 组件类型：IotAlertRuleStopClassInstanceTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleStopClassInstanceTreeVo
 */
export type RiskDataServiceIotAlertRuleStopClassInstanceTreeVo = {
  classCode: string;
  className: string;
  instances: RiskDataServiceIotAlertRuleDisableInstanceVo[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleBatchDisableVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleBatchDisableVo
 */
export type RiskDataServiceIotAlertRuleBatchDisableVo = {
  instances: RiskDataServiceIotAlertRuleDisableInstanceVo[];
  systemTree: RiskDataServiceIotAlertRuleDisableInstanceTreeVo[];
  spaceTree: RiskDataServiceIotAlertRuleDisableInstanceTreeVo[];
  classTree: RiskDataServiceIotAlertRuleStopClassInstanceTreeVo[];
  rules: RiskDataServiceIotAlertRuleVo[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleBatchStartVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleBatchStartVo
 */
export type RiskDataServiceIotAlertRuleBatchStartVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 品牌 */
  brand?: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  /** 操作人 */
  disablePerson?: string;
  /** 停用时间（发布态才展示） */
  disableTime?: string;
  /** 停用截止时间（发布态才展示） */
  disableEndTime?: string;
  /** 停用原因（发布态才展示） */
  disableReason?: string;
  /** 规则 */
  rules: RiskDataServiceIotAlertRuleVo[];
  /** 停用原因类型 */
  disableReasonType: string;
};

/**
 * OpenAPI 组件类型：RegardFaultRiskEffectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RegardFaultRiskEffectVo
 */
export type RiskDataServiceRegardFaultRiskEffectVo = {
  /** 编码 */
  code: string;
  /** 名称 */
  name: string;
  /** 部件 */
  components: RiskDataServiceRegardFaultRiskEffectVo[];
  /** 风险点列表 */
  pjRisks: RiskDataServicePjRiskListVo[];
}[];

/**
 * OpenAPI 组件类型：RwdObjectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdObjectVo
 */
export type RiskDataServiceRwdObjectVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdObjectVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdObjectVo[];
  /** 品牌 */
  brand?: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
};

/**
 * OpenAPI 组件类型：PjRiskImpactInstVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskImpactInstVo
 */
export type RiskDataServicePjRiskImpactInstVo = {
  /** 影响类型id */
  id?: number;
  /** 影响类型名称 */
  name?: string;
  /** 关键性 */
  crucial?: "PIVOTAL" | "OTHER";
  /** 实际影响id */
  impactId: string;
  /** 实际影响描述 */
  impactDesc: string;
};

/**
 * OpenAPI 组件类型：KlbEntityObjectPoi
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbEntityObjectPoi
 */
export type RiskDataServiceKlbEntityObjectPoi = {
  /** 信息点code */
  poiCode?: string;
  /** 信息点id(信息点code和信息点类型组合) */
  poiId?: string;
  /** 信息点名称 */
  poiName?: string;
  /** 信息点类型 */
  poiType?: "COMMON_POI" | "SPECIAL_POI" | "GENERAL_POI" | "GENERAL_ZONE_POI" | "BUILDING_POI";
  /** 信息点枚举值列表 */
  poiValueEnumDto?: RiskDataServicePoiData[];
  /** 多个匹配 */
  multi?: boolean;
  /** 单位 */
  unit?: string;
};

/**
 * OpenAPI 组件类型：PjKlbRiskEventManageScopeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjKlbRiskEventManageScopeVo
 */
export type RiskDataServicePjKlbRiskEventManageScopeVo = {
  /** 风险事件id */
  id?: number;
  /** 风险事件业务id */
  businessId?: number;
  /** 风险事件描述 */
  riskEventDescription?: string;
  /** 风险事件类型 */
  riskEventType?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE";
  /** 重要性 */
  importance?: "E0" | "E1" | "E2";
  /** 常见性 */
  ordinary?: "E0" | "E1" | "E2";
  /** 一级风控目标 */
  riskMeasureAimLevel1?: "E0" | "E1" | "E2" | "E3";
  /** 二级风控目标 */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44";
  /** 损失类型 */
  lossType?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5";
  /** 风险事件损失影响 */
  impactDescription?: string;
  /** 是否已加入管理 */
  joinedManage?: boolean;
  /** 风险事件顶节点相关数据
对象类code */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** BDTP对象类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实体类信息点 */
  entityObjectPois?: RiskDataServiceKlbEntityObjectPoi[];
  /** 专业code */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 故障状态评级（报警响应类才有,可能为空） */
  faultStateLevel?: "HIGH" | "MID" | "LOW";
  /** 隐患状态评级（报警响应类才有,可能为空） */
  accidentStateLevel?: "HIGH" | "MID" | "LOW";
  /** 发布时间 */
  rccPublishTime?: string;
  /** rcc发布版本号 */
  versionCode?: string;
  /** BMS是否已经移除该风险事件 */
  bmsDeleted?: boolean;
  /** 刷新状态 */
  refreshStatus?: "RUNNING" | "PENDING" | "FAIL" | "SUCCESS";
  /** 对应对象类是否交付了实例（0401） */
  instanceMark?: boolean;
  /** 风险事件编码（0401） */
  klbRiskEventCode?: string;
  /** 数据版本id（0401） */
  dataVersionId?: number;
  /** 数据版本名称（0401） */
  dataVersionName?: string;
  /** 发布时间（0401） */
  releaseTime?: string;
  /** 是否有更新的知识（0401） */
  updateMark?: boolean;
  /** 新数据版本id（0401） */
  newDataVersionId?: number;
  /** 新数据版本名称（0401） */
  newDataVersionName?: string;
  /** 新发布时间（0401） */
  newReleaseTime?: string;
  /** 用户类型 */
  customerTypes?: RiskDataServiceEnumStruct[];
};

/**
 * OpenAPI 组件类型：PoiData
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PoiData
 */
export type RiskDataServicePoiData = {
  /** 选项编码 */
  code?: JsonValue;
  /** 选项名称 */
  name?: JsonValue;
};

/**
 * OpenAPI 组件类型：RiskEventRefreshStatusVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventRefreshStatusVo
 */
export type RiskDataServiceRiskEventRefreshStatusVo = {
  /** 风险事件businessId */
  riskEventBusinessId?: number;
  /** 刷新状态 */
  refreshStatus?: "RUNNING" | "PENDING" | "FAIL" | "SUCCESS";
};

/**
 * OpenAPI 组件类型：ExceptionInstance
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionInstance
 */
export type RiskDataServiceExceptionInstance = {
  /** 物理世界实例id */
  instanceId?: string;
  /** 物理世界实例名称 */
  instanceName?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 所在空间id */
  spaceId?: string;
  /** 所在空间名称 */
  spaceName?: string;
};

/**
 * OpenAPI 组件类型：ExceptionProblem
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionProblem
 */
export type RiskDataServiceExceptionProblem = {
  /** 异常问题id */
  id?: number;
  /** 异常问题描述 */
  problemDesc?: string;
  /** 项目风险实例唯一key */
  pjRiskBusinessId?: string;
  /** 物理世界实例id */
  instanceId?: string;
  /** 物理世界实例名称 */
  instanceName?: string;
  /** 设备所在空间id */
  spaceId?: string;
  /** 设备所在空间名称 */
  spaceName?: string;
  /** 节点状态(已废弃，将返回空) */
  feedbackResult?: "EXCEPTION" | "EXCEPTION_MAYBE" | "WARN" | "UNKNOWN" | "NORMAL_MAYBE" | "NORMAL";
};

/**
 * OpenAPI 组件类型：ExceptionRiskEvent
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionRiskEvent
 */
export type RiskDataServiceExceptionRiskEvent = {
  /** 隐患树顶节点名称 */
  riskEventName?: string;
  /** 隐患树id */
  instanceTreeId?: number;
  /** 实例信息 */
  instances?: RiskDataServiceExceptionInstance[];
  /** 异常问题 */
  problems?: RiskDataServiceExceptionProblem[];
  /** 异常节点数量 */
  exceptionCount?: number;
  /** 超征兆节点数量 */
  warnCount?: number;
};

/**
 * OpenAPI 组件类型：PjRiskImpactCategorySimpleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskImpactCategorySimpleVo
 */
export type RiskDataServicePjRiskImpactCategorySimpleVo = {
  /** 影响类型id */
  id?: number;
  /** 影响类型名称 */
  name?: string;
  /** 关键性 */
  crucial?: "PIVOTAL" | "OTHER";
};

/**
 * OpenAPI 组件类型：ExceptionEventListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventListVo
 */
export type RiskDataServiceExceptionEventListVo = {
  /** 异常事件ID */
  id?: number;
  /** 异常事件状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 异常事件名称 */
  exceptionEventName?: string;
  /** 异常事件编码(将返回异常事件id) */
  exceptionEventCode?: string;
  /** 异常事件类型(已废弃，将返回空) */
  exceptionEventType?: "RCC" | "NOT_RCC";
  /** 异常开始时间 */
  exceptionStartTime?: string;
  /** 异常结束时间 */
  exceptionEndTime?: string;
  /** 异常更新时间 */
  exceptionUpdateTime?: string;
  /** 持续时长(分钟) */
  duration?: number;
  /** 全部问题数量 */
  allProblemCount?: number;
  /** 已解决问题数量 */
  resolvedProblemCount?: number;
  /** 影响范围 */
  impactExpansion?: "IE_00" | "IE_01" | "IE_02";
  /** 实例信息 */
  instances?: RiskDataServiceExceptionInstance[];
  /** 发生过问题的异常实例(最多返回3个) */
  abnormalInstances?: RiskDataServiceExceptionInstance[];
  /** 历史实例信息（废弃，将返回空集合） */
  historyInstances?: RiskDataServiceExceptionInstance[];
  /** 问题信息 */
  problems?: RiskDataServiceExceptionProblem[];
  /** 风险事件信息(废弃，将返回空集合) */
  riskEvents?: RiskDataServiceExceptionRiskEvent[];
  /** 异常事件编号 */
  exceptionNumber?: string;
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 上次严重程度 */
  earlyImportanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 历史严重程度 */
  historyHighestDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 严重程度变化时间 */
  degreeChangeTime?: string;
  /** 事态性质&实际影响(项目风险影响类型) */
  impactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 事态性质&潜在影响(项目风险影响类型) */
  potentialImpactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 历史事态性质&实际影响(项目风险影响类型) */
  historyImpactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 历史事态性质&潜在影响(项目风险影响类型) */
  historyPotentialImpactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 上次事态性质(项目风险影响类型) */
  earlyImpactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 异常节点变化时间(字段名称从topNodeChangeTime变更为impactCategoryChangeTime) */
  impactCategoryChangeTime?: string;
  /** 处理进程 */
  solveProcess?: "FIND_EXCEPTION" | "SOLVING" | "VERIFICATION";
  /** 一级管控目标集合(废弃，将返回空) */
  riskMeasureAimLevel1Collect?: "E0" | "E1" | "E2" | "E3"[];
  /** 二级管控目标集合(废弃，将返回空) */
  riskMeasureAimLevel2Collect?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44"[];
  /** 是否外部客户 */
  externalCustomer?: boolean;
  /** 是否存在费用支出 */
  haveCost?: boolean;
  /** 目标完成时间 */
  targetFinishTime?: string;
  /** 最早要求解决时间 */
  minRequireSolveTime?: string;
  /** 最晚要求解决时间 */
  maxRequireSolveTime?: string;
  /** 是否暂不处理 */
  noTreatment?: boolean;
  /** 是否需核实 */
  needVerification?: boolean;
  /** 人工修改等级名称 */
  userName?: string;
  createTime?: string;
  /** 是否为误报信息 */
  misstatement?: "PART_MISSTATEMENT" | "MISSTATEMENT";
};

/**
 * OpenAPI 组件类型：EEColdListQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEColdListQryDto
 */
export type RiskDataServiceEEColdListQryDto = {
  /** 异常事件状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED"[];
  /** 问题来源类型 */
  sourceTypes?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR"[];
  /** 最后一条异常事件id */
  lastId?: number;
  /** 最小的时间 */
  lastTime?: string;
  /** 开始时间(异常事件开始时间) */
  createStartTime?: string;
  /** 结束时间(异常事件开始时间) */
  createEndTime?: string;
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN"[];
  /** 事件编码 */
  keyWord?: string;
  /** 实例id */
  rwdInstanceIds?: string[];
  limit?: number;
};

/**
 * OpenAPI 组件类型：EEInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEInstanceVo
 */
export type RiskDataServiceEEInstanceVo = {
  /** 物理世界实例id */
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  /** 物理世界实例名称 */
  name?: string;
  /** 物理世界实例类型 */
  type?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实例所在空间id */
  spaceId?: string;
  /** 实例所在空间名称 */
  spaceName?: string;
  /** 实例所属专业编码 */
  majorCode?: string;
  /** 设备型号 */
  specification?: string;
};

/**
 * OpenAPI 组件类型：OrderItem
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OrderItem
 */
export type RiskDataServiceOrderItem = {
  /** 需要进行排序的字段 */
  column?: string;
  /** 是否正序排列，默认 true */
  asc?: boolean;
};

/**
 * OpenAPI 组件类型：PageEEInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PageEEInstanceVo
 */
export type RiskDataServicePageEEInstanceVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceEEInstanceVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
};

/**
 * OpenAPI 组件类型：
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/
 */
export type RiskDataServiceValue4 = Record<string, never>;

/**
 * OpenAPI 组件类型：EEInstancePageQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEInstancePageQueryDto
 */
export type RiskDataServiceEEInstancePageQueryDto = {
  /** 查询数据列表 */
  records?: RiskDataService1[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  maxLimit?: number;
  /** countId */
  countId?: string;
  /** 异常事件id */
  exceptionEventId: number;
  /** 实例名称 */
  instanceName?: string;
  /** 所在建筑 */
  buildingIds?: string[];
  /** 所在楼层 */
  floorIds?: string[];
  /** 所在空间 */
  spaceIds?: string[];
};

/**
 * OpenAPI 组件类型：FloorInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FloorInstanceVo
 */
export type RiskDataServiceFloorInstanceVo = {
  /** 楼层id */
  id: string;
  /** 类编码 */
  classCode: string;
  /** 类名称 */
  className: string;
  /** 楼层名称（例如 5F） */
  localId: string;
  /** 对象本地名称 */
  localName: string;
  /** 建筑id */
  buildingId: string;
  /** 建筑名称 */
  buildingName: string;
  /** 对象类型 */
  objType: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 楼层性质，1-普通，3-夹层，2-室外，4-屋顶 */
  floorType?: string;
  /** 楼层序列 */
  floorSequenceId?: number;
};

/**
 * OpenAPI 组件类型：BuildingFloorInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BuildingFloorInstanceVo
 */
export type RiskDataServiceBuildingFloorInstanceVo = {
  /** 建筑id */
  id: string;
  /** 建筑名称 */
  localName: string;
  /** 建筑下的楼层 */
  floors: RiskDataServiceFloorInstanceVo[];
};

/**
 * OpenAPI 组件类型：SpaceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SpaceVo
 */
export type RiskDataServiceSpaceVo = {
  /** 所在空间id */
  spaceId?: string;
  /** 所在空间名称 */
  spaceName?: string;
};

/**
 * OpenAPI 组件类型：ExceptionEventInstanceFilterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventInstanceFilterVo
 */
export type RiskDataServiceExceptionEventInstanceFilterVo = {
  /** 所在建筑楼层 */
  buildingFloors?: RiskDataServiceBuildingFloorInstanceVo[];
  /** 所在空间 */
  spaces?: RiskDataServiceSpaceVo[];
};

/**
 * OpenAPI 组件类型：InfoPointStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InfoPointStruct
 */
export type RiskDataServiceInfoPointStruct = {
  /** 信息点编码 */
  infoPointCode?: string;
  /** 信息点名称 */
  infoPointName?: string;
  /** 信息点值单位 */
  infoPointUnit?: string;
  /** 信息点类型 */
  numOrBoolEnum?: "ENUM" | "NUM";
  /** 是否为工作历信息点 */
  workCalendar?: boolean;
};

/**
 * OpenAPI 组件类型：PlaceHolderMark
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PlaceHolderMark
 */
export type RiskDataServicePlaceHolderMark = {
  /** 信息点值类型 */
  dataType?: JsonValue;
  /** 类编码 */
  classCode?: JsonValue;
  /** index下标 */
  markIndex?: JsonValue;
  poiCode?: JsonValue;
  poiName?: JsonValue;
  poiTypeEnum?: JsonValue;
  type?: JsonValue;
  name?: JsonValue;
  origDataType?: JsonValue;
  poiId?: JsonValue;
  id?: JsonValue;
  infoPointCode?: JsonValue;
  infoPointName?: JsonValue;
  /** 信息点值 */
  poiValueEnum?: JsonValue;
  /** 信息点类型 */
  numOrBoolEnum?: "ENUM" | "NUM";
};

/**
 * OpenAPI 组件类型：IotConditionPrincipal
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotConditionPrincipal
 */
export type RiskDataServiceIotConditionPrincipal = {
  /** 公式模版 */
  expressionTemplate?: string;
  /** 占位符 */
  placeHolderMarks?: RiskDataServicePlaceHolderMark[];
};

/**
 * OpenAPI 组件类型：IotSubConditionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotSubConditionStruct
 */
export type RiskDataServiceIotSubConditionStruct = {
  /** 节点别名 */
  nodeAlias?: string;
  /** 运算符号 */
  operator?: "PLUS" | "REDUCE" | "MULTIPLICATION" | "DIVISION" | "GREATERTHANOREQUALTO" | "GREATERTHAN" | "EQUALTO" | "LESSTHANOREQUALTO" | "LESSTHAN" | "FORWARD" | "AFTER";
  /** 条件值 */
  conditionValue?: string;
  /** 条件单位 */
  conditionUnit?: string;
  /** 持续时长值 */
  durationValue?: string;
  /** 持续时长单位 */
  durationUnit?: string;
  /** 持续时长符号 */
  durationOperator?: "PLUS" | "REDUCE" | "MULTIPLICATION" | "DIVISION" | "GREATERTHANOREQUALTO" | "GREATERTHAN" | "EQUALTO" | "LESSTHANOREQUALTO" | "LESSTHAN" | "FORWARD" | "AFTER";
  /** 信息点编码 */
  pointInfoList?: RiskDataServiceInfoPointStruct[];
  /** 参数类型 */
  principalType?: "BDTPINFOPOINTNUMERICALCLASS" | "BDTPINFOPOINTOPTIONCLASS" | "CALCULATIONRELATIONSHIPOFINFOPOINT" | "WORKCALENDARLABEL" | "PARAMETERGROUPCALCULATIONFORMULA" | "PROCESSPARAMETERS" | "CUSTOMINFOPOINT";
  /** 过程参数表达式信息 */
  principal?: RiskDataServiceIotConditionPrincipal;
};

/**
 * OpenAPI 组件类型：IotConditionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotConditionStruct
 */
export type RiskDataServiceIotConditionStruct = {
  /** 节点别名 */
  nodeAlias?: string;
  /** 子条件关系(OR:或、AND:且) */
  relationship?: "OR" | "AND";
  /** 子条件列表 */
  subConditionList?: RiskDataServiceIotSubConditionStruct[];
  /** 信息点列表 */
  pointInfoList?: string[];
};

/**
 * OpenAPI 组件类型：Mark
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Mark
 */
export type RiskDataServiceMark = {
  type?: "NODE" | "NODE_i" | "META_PHYSICAL" | "INSTANTIATED_PHYSICAL" | "INSTANTIATED_PHYSICAL_i" | "HUB_WEIGHTING_COEFFICIENT" | "INSTANTIATED_NUMBER" | "CHARACTERISTIC_PHYSICAL" | "BDTP_POINT" | "PROGRESS" | "ASSETS_SCRAP_ALARM_PARAM" | "ENUM";
  id?: JsonValue;
  infoPointCode?: JsonValue;
  code?: JsonValue;
  value?: JsonValue;
};

/**
 * OpenAPI 组件类型：Formula
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Formula
 */
export type RiskDataServiceFormula = {
  expressionTemplate?: string;
  placeHolderMarks?: RiskDataServiceMark[];
};

/**
 * OpenAPI 组件类型：OtherObject
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OtherObject
 */
export type RiskDataServiceOtherObject = {
  majorCode?: string;
  /** 对象类编码 */
  classCode?: string;
};

/**
 * OpenAPI 组件类型：IotRuleInfoCodeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRuleInfoCodeDto
 */
export type RiskDataServiceIotRuleInfoCodeDto = {
  /** 信息点编码 */
  infoCode?: string;
  /** 信息点名称 */
  infoName?: string;
  /** 信息点单位 */
  unit?: string;
  /** 其他对象类 */
  otherObject?: RiskDataServiceOtherObject;
  /** 是否是事件 */
  isEvent?: boolean;
};

/**
 * OpenAPI 组件类型：IotRecordAndRelStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRecordAndRelStruct
 */
export type RiskDataServiceIotRecordAndRelStruct = {
  /** Iot实时计算值 */
  iotCalculatedValue?: string;
  /** Iot过滤计算结果 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 报警触发目标参数 */
  targetParam?: RiskDataServiceIotTargetParamStruct;
  /** 解除条件分组 */
  releaseConditions?: RiskDataServiceTopConditionGroupStruct[];
};

/**
 * OpenAPI 组件类型：IncidentReportVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IncidentReportVo
 */
export type RiskDataServiceIncidentReportVo = {
  /** 上报人ID */
  reporterId?: string;
  /** 上报人名称 */
  reporterName?: string;
  /** 上报时间 */
  reportTime?: string;
  /** 备注 */
  remark?: string;
  /** 问题描述 */
  problemDesc?: string;
  /** 问题图片列表 */
  imageIds?: string[];
};

/**
 * OpenAPI 组件类型：MyFormula
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MyFormula
 */
export type RiskDataServiceMyFormula = {
  expressionTemplate?: string;
  placeHolderMarks?: RiskDataServicePlaceHolderMark[];
};

/**
 * OpenAPI 组件类型：SubCondition
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SubCondition
 */
export type RiskDataServiceSubCondition = {
  id?: number;
  objCode?: string;
  /** 报警发生时节点状态 */
  feedbackStatus?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
  /** 主体类型 */
  principalType?: "BDTPINFOPOINTNUMERICALCLASS" | "BDTPINFOPOINTOPTIONCLASS" | "CALCULATIONRELATIONSHIPOFINFOPOINT" | "WORKCALENDARLABEL" | "PARAMETERGROUPCALCULATIONFORMULA" | "PROCESSPARAMETERS" | "CUSTOMINFOPOINT";
  /** 主体 */
  principal?: RiskDataServiceMyFormula;
  /** 运算符 */
  operator?: "PLUS" | "REDUCE" | "MULTIPLICATION" | "DIVISION" | "GREATERTHANOREQUALTO" | "GREATERTHAN" | "EQUALTO" | "LESSTHANOREQUALTO" | "LESSTHAN" | "FORWARD" | "AFTER";
  /** 持续时长 */
  duration?: RiskDataServiceSubCondition;
  /** 相对时间 */
  relativeTime?: RiskDataServiceSubCondition;
  /** 条件值 */
  conditionValue?: RiskDataServiceConditionValue;
  /** 条件组类型 */
  subConditionGroupType?: string;
  /** 信息点编码和值 */
  pointInfoInfos?: RiskDataServicePointInfo[];
};

/**
 * OpenAPI 组件类型：ConditionValue
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ConditionValue
 */
export type RiskDataServiceConditionValue = {
  value?: string;
  Unit?: string;
};

/**
 * OpenAPI 组件类型：FeedbackResultCalRule
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FeedbackResultCalRule
 */
export type RiskDataServiceFeedbackResultCalRule = {
  /** 一类，枚举类型规则 */
  gradientEnumRule?: JsonValue;
  /** 一类，数值类型规则 */
  gradientNumRule?: JsonValue;
  /** 二类，数值类型规则，可计算 */
  mutantNumCalculateRule?: JsonValue;
  /** 二类，数值类型规则，不可计算 */
  mutantNumNotCalculateRule?: JsonValue;
};

/**
 * OpenAPI 组件类型：ConditionGroup
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ConditionGroup
 */
export type RiskDataServiceConditionGroup = {
  id?: number;
  objCode?: string;
  /** 上级条件组 */
  parentConditionGroup?: number;
  /** 子条件组 */
  subConditionGroups?: RiskDataServiceConditionGroup[];
  /** 子条件 */
  subConditions?: RiskDataServiceSubCondition[];
  /** 条件设置原理 */
  principleOfConditionSetting?: string;
  /** 条件组名称 */
  conditionGroupName?: string;
  /** 组内关系类型 */
  typeOfIntraGroupRelationship?: "OR" | "AND";
  /** 条件组层级 */
  conditionGroupLevel?: "FIRSTLEVEL" | "SECONDLEVEL";
  /** 条件组层级 */
  conditionGroupType?: "DATAREQUIREMENTSNORMAL" | "DATAREQUIREMENTSABNORMAL" | "NODESTATECHANGEOPERATINGCONDITIONS";
};

/**
 * OpenAPI 组件类型：GroupObject
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/GroupObject
 */
export type RiskDataServiceGroupObject = {
  "对象id"?: string;
  "对象名称"?: string;
  "规则编码"?: string;
  "iot告警可生效规则:true-生效 ,false-不生效"?: boolean;
  "措施对象状态   0-初始化，1-启用，2：启用"?: "INIT" | "Enable" | "NOT_Enable";
  ruleOrder?: number;
  "措施对象停用开始时间"?: string;
  "措施对象停用结束时间"?: string;
  /** 展示小红点逻辑:NEW展示 */
  ruleInitType?: "NORMAL" | "NEW";
};

/**
 * OpenAPI 组件类型：AlertCondition
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertCondition
 */
export type RiskDataServiceAlertCondition = {
  id?: number;
  objCode?: string;
  /** 上级条件组 */
  parentConditionGroup?: number;
  /** 子条件组 */
  subConditionGroups?: RiskDataServiceConditionGroup[];
  /** 子条件 */
  subConditions?: RiskDataServiceSubCondition[];
  /** 条件设置原理 */
  principleOfConditionSetting?: string;
  /** 条件组名称 */
  conditionGroupName?: string;
  /** 组内关系类型 */
  typeOfIntraGroupRelationship?: "OR" | "AND";
  /** 条件组层级 */
  conditionGroupLevel?: "FIRSTLEVEL" | "SECONDLEVEL";
  /** 条件组层级 */
  conditionGroupType?: "DATAREQUIREMENTSNORMAL" | "DATAREQUIREMENTSABNORMAL" | "NODESTATECHANGEOPERATINGCONDITIONS";
  "大条件id"?: string;
  /** 节点别名 */
  nodeAlias?: string;
  /** 节点状态 */
  feedbackStatus?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
  /** 组对象集合,如果为空，则不用关注 */
  groupObjects?: RiskDataServiceGroupObject[];
  /** 组对象集合,如果为空，则不用关注 */
  groupView?: boolean;
  /** 条件组的信息点 */
  infoPoints?: string[];
  /** 大条件状态 0-解除屏蔽：1-屏蔽 */
  conditionStatus?: "NOT_Enable" | "Enable";
  /** 大条件状态 0-解除屏蔽：1-屏蔽 */
  defaultConditionStatus?: "NOT_Enable" | "Enable";
};

/**
 * OpenAPI 组件类型：key
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/key
 */
export type RiskDataServiceKey = Record<string, never>;

/**
 * OpenAPI 组件类型：ObjectInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectInstanceVo
 */
export type RiskDataServiceObjectInstanceVo = {
  key?: RiskDataServiceKey;
};

/**
 * OpenAPI 组件类型：AlertConditionGroup
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertConditionGroup
 */
export type RiskDataServiceAlertConditionGroup = {
  id?: number;
  objCode?: string;
  /** 上级条件组 */
  parentConditionGroup?: number;
  /** 子条件组 */
  subConditionGroups?: RiskDataServiceConditionGroup[];
  /** 子条件 */
  subConditions?: RiskDataServiceSubCondition[];
  /** 条件设置原理 */
  principleOfConditionSetting?: JsonValue;
  /** 条件组名称 */
  conditionGroupName?: JsonValue;
  /** 组内关系类型 */
  typeOfIntraGroupRelationship?: "OR" | "AND";
  /** 条件组层级 */
  conditionGroupLevel?: "FIRSTLEVEL" | "SECONDLEVEL";
  /** 条件组层级 */
  conditionGroupType?: "DATAREQUIREMENTSNORMAL" | "DATAREQUIREMENTSABNORMAL" | "NODESTATECHANGEOPERATINGCONDITIONS";
  /** UUID */
  "条件组id"?: JsonValue;
  "是否选中"?: JsonValue;
  "默认选中"?: JsonValue;
  "大条件"?: JsonValue;
  /** 组对象集合,如果为空，则不用关注 */
  groupObjects?: JsonValue;
  /** 条件组的信息点 */
  infoPoints?: JsonValue;
  /** 当前措施对应的过程参数 */
  processParameter?: JsonValue;
};

/**
 * OpenAPI 组件类型：TriAndRelConditionGroup
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TriAndRelConditionGroup
 */
export type RiskDataServiceTriAndRelConditionGroup = {
  "触发解除条件组id"?: string;
  "触发条件组"?: RiskDataServiceAlertConditionGroup;
  /** iot实时计算值 */
  iotCalculatedValue?: JsonValue;
  /** Iot过滤计算结果 */
  feedbackResult?: "EXCEPTION" | "EXCEPTION_MAYBE" | "WARN" | "UNKNOWN" | "NORMAL_MAYBE" | "NORMAL" | "NOT_EXCEEDING_THRESHOLD" | "EXCEEDING_THRESHOLD" | "NOT_OBSERVABLE" | "NOT_EXECUTE" | "EXECUTE";
  "解除条件组"?: JsonValue;
  "组条件"?: JsonValue;
  "是否屏蔽"?: "NOT_Enable" | "Enable";
  /** 对象集合,如果为空，则不用关注 */
  objects?: JsonValue;
  /** 单位Map  key为信息点   value为单位 */
  unitMap?: JsonValue;
  /** 二级标签Map  key为信息点   value为二级标签名称 */
  secondTagMap?: JsonValue;
  /** 报警是否需要人工核实 */
  triggerManualVerify?: JsonValue;
  /** 报警解除是否需要人工核实 */
  relManualVerify?: JsonValue;
  /** 信息点基本信息 */
  infoPoints?: JsonValue;
};

/**
 * OpenAPI 组件类型：OperatingAndAlarm
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OperatingAndAlarm
 */
export type RiskDataServiceOperatingAndAlarm = {
  /** 前置条件 */
  preConditions?: RiskDataServiceAlertConditionGroup[];
  /** 触发与解除条件 */
  triAndRelConditionGroups?: RiskDataServiceTriAndRelConditionGroup[];
};

/**
 * OpenAPI 组件类型：IotRecordInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRecordInfoVo
 */
export type RiskDataServiceIotRecordInfoVo = {
  /** 上报记录ID */
  recordId?: number;
  /** 上报时间 */
  reportTime?: string;
  /** 状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** IOT报警解释信息 */
  alarmExplanation?: string;
  /** 报警规则分组 */
  iotAlertRuleGroup?: RiskDataServiceIotAlertRuleGroupStruct;
  /** 前置条件目标参数计算结果 */
  preParamResults?: JsonValue;
  /** 触发报警目标参数计算结果 */
  triggerParamResults?: JsonValue;
  /** 问题描述（备注） */
  problemDesc?: JsonValue;
  /** 问题图片列表 */
  imageIds?: JsonValue;
  /** 是否事件触发 */
  isEvent?: JsonValue;
  /** 状态变更记录ID */
  pjRiskRecordId?: JsonValue;
  /** 监控实例信息 */
  monitorInfo?: JsonValue;
};

/**
 * OpenAPI 组件类型：EEProblemStatusRecordVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemStatusRecordVo
 */
export type RiskDataServiceEEProblemStatusRecordVo = {
  /** 状态记录ID */
  id?: number;
  /** 节点反馈结果 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 状态更新时间 */
  statusUpdateTime?: string;
  /** 实际发生时间 */
  actualHappenTime?: string;
  /** 报事时间 */
  reportTime?: string;
  /** 是否为误报信息 */
  misstatement?: boolean;
  /** IOT与人工观测结果是否不一致 */
  iotMismatchManualObserve?: boolean;
  /** 记录类型 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 工单上传类型 */
  workOrderUploadType?: "EXTERNAL_USER" | "CONSULTANT";
  /** 异常上报 */
  incidentReport?: RiskDataServiceIncidentReportVo;
  /** IOT监测 */
  iotReport?: RiskDataServiceIotRecordInfoVo;
  /** 人工修改 */
  manualReport?: JsonValue;
  /** 人工观测（工单） */
  observationReport?: JsonValue;
  /** 数据监控系统(Ops-IOT) */
  opsIotReport?: JsonValue;
};

/**
 * OpenAPI 组件类型：fragmentaryProblemLists
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/fragmentaryProblemLists
 */
export type RiskDataServiceFragmentaryProblemLists = {
  /** 节点id */
  nodeId?: number;
  /** 隐患因素描述 */
  description?: string;
  /** 问题描述 */
  statusDesc?: string;
  /** 父级id */
  parentId?: number;
  /** 实体名称 */
  entityName?: string;
  component?: boolean;
  /** 设备id ！！！！可能为空，对应rcc强制实例化节点 */
  equipmentId?: string;
  /** 空间id */
  spaceId?: string;
  /** 空间名称 */
  spaceName?: string;
  /** 设备类名称 */
  equipmentClassName?: string;
  /** 实例名称 */
  equipmentName?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 树节点类型 */
  treeNodeType?: "NORMAL" | "HUB_EXPAND_NODE" | "HUB_EXPAND_INSTANCE_NODE";
  /** 下级节点间关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  /** 风险事件的影响 */
  impact?: string;
  /** 状态变更时间 */
  stateChangeTime?: string;
  /** 状态推算时间 */
  stateCalculationTime?: string;
  /** 持续时长(分钟) */
  duration?: number;
  /** 隐患树节点当前状态 */
  treeNodeStatus?: "EXCEPTION" | "WARN" | "NORMAL" | "UNKNOWN" | "CONJECTURE_NORMAL" | "CONJECTURE_EXCEPTION" | "CONJECTURE_UNKNOWN";
  /** 隐患树观测状态 */
  treeNodeObserveStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 历史异常记录条数 */
  exceptionRecordsCount?: number;
  /** 是否为需核实节点，true为需核实 */
  needVerification?: boolean;
  /** 是否暂不处理，true为暂不处理 */
  noTreatment?: boolean;
  /** 是否原因，true为原因 */
  reason?: boolean;
  /** 是否初始原因，true为初始原因 */
  original?: boolean;
  /** 是否未实例化，true为未实例化节点 */
  virtual?: boolean;
  /** 触发与解除条件 */
  iotTriAndRelInfo?: RiskDataServiceIotRecordAndRelStruct;
  /** 重要性 */
  importance?: "HIGH" | "MID" | "LOW";
  /** 问题数量 -已解决时展示 */
  reserveCount?: number;
  /** 风险实例id */
  pjRiskInstanceBusinessId?: string;
  /** 最后一条上报记录 */
  lastRecord?: RiskDataServiceEEProblemStatusRecordVo;
  /** 子节点 */
  children?: JsonValue;
  /** 对应知识节点Id */
  klbTreeNodeId?: JsonValue;
  /** 是否为误报信息 */
  misstatement?: JsonValue;
  /** 是否包含问题 */
  hasProblem?: JsonValue;
  /** 问题ID */
  problemId?: JsonValue;
  /** 问题是否已结束 */
  finished?: JsonValue;
  /** 是否有效 */
  valid?: JsonValue;
  /** 失效原因 */
  invalidType?: "MANUAL_OBSERVATION_INVALID" | "OTHER_NODE_STATUS_CHANGE";
  /** 观测有效时长 */
  statusValidityPeriod?: JsonValue;
  /** 观测有效时长单位 */
  statusValidityPeriodUnit?: "HOUR" | "DAY" | "WEEK" | "MONTH";
};

/**
 * OpenAPI 组件类型：EECauseAndEffectViewVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EECauseAndEffectViewVo
 */
export type RiskDataServiceEECauseAndEffectViewVo = {
  fragmentaryProblemLists?: RiskDataServiceFragmentaryProblemLists[];
  problemsRelatedInstanceTreeLists?: JsonValue;
};

/**
 * OpenAPI 组件类型：key2
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/key2
 */
export type RiskDataServiceKey2 = Record<string, never>;

/**
 * OpenAPI 组件类型：EEInstanceTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEInstanceTreeVo
 */
export type RiskDataServiceEEInstanceTreeVo = {
  /** 节点id */
  nodeId?: number;
  /** 隐患因素描述 */
  description?: string;
  /** 问题描述 */
  statusDesc?: string;
  /** 父级id */
  parentId?: number;
  /** 实体名称 */
  entityName?: string;
  component?: boolean;
  /** 设备id ！！！！可能为空，对应rcc强制实例化节点 */
  equipmentId?: string;
  /** 空间id */
  spaceId?: string;
  /** 空间名称 */
  spaceName?: string;
  /** 设备类名称 */
  equipmentClassName?: string;
  /** 实例名称 */
  equipmentName?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 树节点类型 */
  treeNodeType?: "NORMAL" | "HUB_EXPAND_NODE" | "HUB_EXPAND_INSTANCE_NODE";
  /** 下级节点间关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  /** 风险事件的影响 */
  impact?: string;
  /** 状态变更时间 */
  stateChangeTime?: string;
  /** 状态推算时间 */
  stateCalculationTime?: string;
  /** 持续时长(分钟) */
  duration?: number;
  /** 隐患树节点当前状态 */
  treeNodeStatus?: "EXCEPTION" | "WARN" | "NORMAL" | "UNKNOWN" | "CONJECTURE_NORMAL" | "CONJECTURE_EXCEPTION" | "CONJECTURE_UNKNOWN";
  /** 隐患树观测状态 */
  treeNodeObserveStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 历史异常记录条数 */
  exceptionRecordsCount?: number;
  /** 是否为需核实节点，true为需核实 */
  needVerification?: boolean;
  /** 是否暂不处理，true为暂不处理 */
  noTreatment?: boolean;
  /** 是否原因，true为原因 */
  reason?: boolean;
  /** 是否初始原因，true为初始原因 */
  original?: boolean;
  /** 是否未实例化，true为未实例化节点 */
  virtual?: boolean;
  /** 触发与解除条件 */
  iotTriAndRelInfo?: RiskDataServiceIotRecordAndRelStruct;
  /** 重要性 */
  importance?: "HIGH" | "MID" | "LOW";
  /** 问题数量 -已解决时展示 */
  reserveCount?: number;
  /** 风险实例id */
  pjRiskInstanceBusinessId?: string;
  /** 最后一条上报记录 */
  lastRecord?: RiskDataServiceEEProblemStatusRecordVo;
  /** 子节点 */
  children?: JsonValue;
  /** 对应知识节点Id */
  klbTreeNodeId?: JsonValue;
  /** 是否为误报信息 */
  misstatement?: JsonValue;
  /** 是否包含问题 */
  hasProblem?: JsonValue;
  /** 问题ID */
  problemId?: JsonValue;
  /** 问题是否已结束 */
  finished?: JsonValue;
  /** 是否有效 */
  valid?: JsonValue;
  /** 失效原因 */
  invalidType?: "MANUAL_OBSERVATION_INVALID" | "OTHER_NODE_STATUS_CHANGE";
  /** 观测有效时长 */
  statusValidityPeriod?: JsonValue;
  /** 观测有效时长单位 */
  statusValidityPeriodUnit?: "HOUR" | "DAY" | "WEEK" | "MONTH";
};

/**
 * OpenAPI 组件类型：PageExceptionEventListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PageExceptionEventListVo
 */
export type RiskDataServicePageExceptionEventListVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceExceptionEventListVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
};

/**
 * OpenAPI 组件类型：EEListQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEListQueryDto
 */
export type RiskDataServiceEEListQueryDto = {
  /** 查询数据列表 */
  records?: RiskDataService1[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
  /** 异常更新时间 */
  exceptionUpdateTime?: string;
  /** 异常更新开始时间 */
  updateStartTime?: string;
  /** 异常更新结束时间 */
  updateEndTime?: string;
  /** 异常创建开始时间 */
  createStartTime?: string;
  /** 异常创建结束时间 */
  createEndTime?: string;
  /** 开始时间(异常事件开始时间) */
  startTime?: string;
  /** 结束时间(异常事件开始时间) */
  endTime?: string;
  /** 异常事件状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 上报人ID */
  reporters?: string[];
  /** 对象类型 */
  objTypes?: string[];
  /** 根据classCode查询 */
  classCodes?: string[];
  /** 根据meoiSpaceType查询 */
  meoiSpaceTypes?: string[];
  /** 根据专业筛选 */
  majorCodes?: string[];
  /** 过滤其他对象 */
  filterOther?: boolean;
  /** 根据处理专业筛选 */
  dealMajorIds?: number[];
  /** 知识风险businessId */
  pjRiskBusinessIds?: string[];
  /** 最后一条异常事件id */
  lastId?: number;
  /** 分页大小 */
  limit?: number;
  /** 是否需核实 */
  needVerification?: boolean;
  /** 来源类型 */
  sourceTypes?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR"[];
  /** 异常事件Id(实际值应当是异常事件id) */
  exceptionIds?: number[];
  /** 所在空间的id */
  spaceIds?: string[];
  /** 实例id */
  rwdInstanceIds?: string[];
  /** 事件编码 */
  keyWord?: string;
  /** 排序方式 */
  orderBy?: "SEVERITY" | "EXCEPTION_START_TIME" | "EXCEPTION_UPDATE_TIME" | "EXCEPTION_END_TIME" | "HISTORY_SEVERITY";
  /** 实际影响类型ID */
  impactCategoryIds?: number[];
  /** 历史实际影响类型ID */
  historyImpactCategoryIds?: number[];
  /** 处理进程(FIND_EXCEPTION:发现异常，SOLVING：排查处理，VERIFICATION：验证闭合) */
  solveProcesses?: "FIND_EXCEPTION" | "SOLVING" | "VERIFICATION"[];
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN"[];
  /** 影响范围 */
  impactExpansion?: "IE_00" | "IE_01" | "IE_02";
  /** 仅看影响外部客户 */
  externalCustomer?: boolean;
  /** 数据权限 */
  dataPermissionFilter?: string;
};

/**
 * OpenAPI 组件类型：MapInteger
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapInteger
 */
export type RiskDataServiceMapInteger = Record<string, never>;

/**
 * OpenAPI 组件类型：MapInteger3
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapInteger3
 */
export type RiskDataServiceMapInteger3 = Record<string, never>;

/**
 * OpenAPI 组件类型：MapInteger4
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapInteger4
 */
export type RiskDataServiceMapInteger4 = Record<string, never>;

/**
 * OpenAPI 组件类型：ExceptionEventStaticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventStaticsVo
 */
export type RiskDataServiceExceptionEventStaticsVo = {
  /** 严重程度统计数据 */
  importanceDegreeStatics?: RiskDataServiceMapInteger;
  /** 处理进程统计数据 */
  solveProcessStatics?: RiskDataServiceMapInteger3;
  /** 损失影响统计 */
  lossTypesStatics?: RiskDataServiceMapInteger4;
};

/**
 * OpenAPI 组件类型：ThirdPartExceptionEventQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ThirdPartExceptionEventQryDto
 */
export type RiskDataServiceThirdPartExceptionEventQryDto = {
  /** 异常事件状态 */
  exceptionEventStatus: "UNRESOLVED" | "RESOLVED";
  /** 处理进程(FIND_EXCEPTION:发现异常，SOLVING：排查处理，VERIFICATION：验证闭合) */
  solveProcesses?: "FIND_EXCEPTION" | "SOLVING" | "VERIFICATION"[];
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN"[];
  /** 是否需核实 */
  eventNeedVerification?: boolean;
};

/**
 * OpenAPI 组件类型：StatisticsItem
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StatisticsItem
 */
export type RiskDataServiceStatisticsItem = {
  /** 类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OTHER";
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 数量 */
  sum?: number;
  /** 包含其他处理专业 */
  child?: number[];
};

/**
 * OpenAPI 组件类型：ExceptionEventSummaryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventSummaryVo
 */
export type RiskDataServiceExceptionEventSummaryVo = {
  /** 已解决数量 */
  resolvedSum?: number;
  /** 未解决数量 */
  unResolvedSum?: number;
  /** 交付专业列表 */
  list?: RiskDataServiceStatisticsItem[];
  /** 专业列表 */
  dealMajorList?: RiskDataServiceStatisticsItem[];
};

/**
 * OpenAPI 组件类型：ObjectTreeBaseVoMajorObjectOtherTreeNodeEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVoMajorObjectOtherTreeNodeEnum
 */
export type RiskDataServiceObjectTreeBaseVoMajorObjectOtherTreeNodeEnum = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "OTHER";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectOtherTreeNodeEnum[];
};

/**
 * OpenAPI 组件类型：ObjectTreeBaseVoMajorObjectClassTreeNodeEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVoMajorObjectClassTreeNodeEnum
 */
export type RiskDataServiceObjectTreeBaseVoMajorObjectClassTreeNodeEnum = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassTreeNodeEnum[];
};

/**
 * OpenAPI 组件类型：ObjectTreeVoPjKlbRiskEventManageScopeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeVoPjKlbRiskEventManageScopeVo
 */
export type RiskDataServiceObjectTreeVoPjKlbRiskEventManageScopeVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassTreeNodeEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServicePjKlbRiskEventManageScopeVo[];
};

/**
 * OpenAPI 组件类型：PjRefreshDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRefreshDto
 */
export type RiskDataServicePjRefreshDto = {
  /** 刷新的风险事件范围,如果为空,则表示刷新全量 */
  riskEventBusinessIds?: number[];
};

/**
 * OpenAPI 组件类型：PjRefreshStatusVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRefreshStatusVo
 */
export type RiskDataServicePjRefreshStatusVo = {
  /** 是否正在刷新 */
  refresh?: boolean;
  /** 任务中的风险事件状态 */
  riskEventStatusList?: RiskDataServiceRiskEventRefreshStatusVo[];
};

/**
 * OpenAPI 组件类型：RiskStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskStatisticVo
 */
export type RiskDataServiceRiskStatisticVo = {
  /** 全部风险事件数量 */
  allRiskCount?: number;
  /** 售前风险事件数量 */
  preRiskCount?: number;
  /** 体验风险事件数量 */
  expRiskCount?: number;
  /** 正式风险事件数量 */
  zsRiskCount?: number;
};

/**
 * OpenAPI 组件类型：EnumStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EnumStruct
 */
export type RiskDataServiceEnumStruct = {
  code?: string;
  name?: string;
};

/**
 * OpenAPI 组件类型：PreRiskEventDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PreRiskEventDetailVo
 */
export type RiskDataServicePreRiskEventDetailVo = {
  /** 风险事件知识id */
  id?: number;
  /** 风险事件实例id */
  riskEventId?: number;
  /** 风险事件描述 */
  riskEventDescription?: string;
  /** 风险事件编码 */
  riskEventCode?: string;
  /** 风险事件编号 */
  riskNum?: string;
  /** 专业类名称 */
  majorTypeName?: string;
  /** 专业类编码 */
  majorTypeCode?: string;
  /** 风险事件类型 */
  riskEventType?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE";
  /** 对象编码 */
  classCode?: string;
  /** 对象类型 */
  className?: string;
  /** 损失类型 */
  lossType?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5";
  /** 常见性 */
  ordinary?: "E0" | "E1" | "E2";
  /** 重要性 */
  importance?: "E0" | "E1" | "E2";
  /** 知识标记 */
  dataMark?: "NO" | "DISABLE" | "LATEST_DISABLE";
  /** 最新版本名称 */
  latestVersionName?: string;
  /** 最新版本id */
  latestVersionId?: number;
  /** 标记消息 */
  markMessage?: string;
  /** 售前知识变更类型 */
  preKnowledgeChangeType?: "NO" | "NEW" | "UPDATE";
  /** 体验知识变更类型 */
  tyKnowledgeChangeType?: "NO" | "NEW" | "UPDATE";
  /** 正式知识变更类型 */
  csKnowledgeChangeType?: "NO" | "NEW" | "UPDATE";
  /** 全部知识变更类型 */
  allKnowledgeChangeType?: "NO" | "NEW" | "UPDATE";
  /** 数据版本id */
  dataVersionId?: number;
  /** 数据版本名称 */
  dataVersionName?: string;
  /** 发布时间 */
  releaseTime?: string;
  /** 风险事件适用场景 */
  riskEventStatusEnum?: "NO" | "PRE_SALE" | "EXP" | "ZS"[];
  /** 生产成果标签 */
  productionResultLabel?: RiskDataServiceEnumStruct;
  /** 关联的一二类风险事件 */
  relatedRiskEvents?: RiskDataServicePreRiskEventDetailVo[];
};

/**
 * OpenAPI 组件类型：PreRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PreRiskVo
 */
export type RiskDataServicePreRiskVo = {
  /** 状态统计信息 */
  statisticVo?: RiskDataServiceRiskStatisticVo;
  /** 风险事件详情列表 */
  riskEventDetailVoList?: RiskDataServicePreRiskEventDetailVo[];
};

/**
 * OpenAPI 组件类型：BatchPreStatusChangeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BatchPreStatusChangeDto
 */
export type RiskDataServiceBatchPreStatusChangeDto = {
  /** 风险事件id(知识)列表 */
  ids?: number[];
  /** 服务场景 */
  sceneEnum: "NO" | "PRE_SALE" | "EXP" | "ZS";
  /** 是否为移除服务场景 */
  removeScene?: boolean;
};

/**
 * OpenAPI 组件类型：ResetRiskChangeTypeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ResetRiskChangeTypeDto
 */
export type RiskDataServiceResetRiskChangeTypeDto = {
  /** 风险事件id(知识id) */
  ids?: number[];
  /** 服务场景 */
  sceneEnums: "NO" | "PRE_SALE" | "EXP" | "ZS"[];
};

/**
 * OpenAPI 组件类型：SimpleRwdObjectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleRwdObjectVo
 */
export type RiskDataServiceSimpleRwdObjectVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
};

/**
 * OpenAPI 组件类型：SimpleRwdSpaceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleRwdSpaceVo
 */
export type RiskDataServiceSimpleRwdSpaceVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** private String meoiSpaceTypeCode; */
  roomFuncType?: string;
  roomFuncTypeDesc?: string;
  spaceId?: string;
  spaceName?: string;
  roomFuncTypeName?: string;
};

/**
 * OpenAPI 组件类型：RwdObjectTableVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdObjectTableVo
 */
export type RiskDataServiceRwdObjectTableVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 品牌 */
  brand?: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
};

/**
 * OpenAPI 组件类型：IPageRwdObjectTableVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPageRwdObjectTableVo
 */
export type RiskDataServiceIPageRwdObjectTableVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceRwdObjectTableVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  maxLimit?: number;
  /** countId */
  countId?: string;
  pages?: number;
};

/**
 * OpenAPI 组件类型：IPageSimpleRwdObjectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPageSimpleRwdObjectVo
 */
export type RiskDataServiceIPageSimpleRwdObjectVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceSimpleRwdObjectVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  maxLimit?: number;
  /** countId */
  countId?: string;
  pages?: number;
};

/**
 * OpenAPI 组件类型：DtpRwdObjectQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DtpRwdObjectQueryDto
 */
export type RiskDataServiceDtpRwdObjectQueryDto = {
  /** 当前页 */
  current?: number;
  /** 每页条数 */
  size?: number;
  /** 关键词:localName的like查询 */
  keyword?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 空间功能类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 建筑id */
  buildingIdList?: string[];
  /** 楼层id */
  floorIdList?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
  /** 所在空间id */
  inSpaceIds?: string[];
};

/**
 * OpenAPI 组件类型：TaskStatusNum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TaskStatusNum
 */
export type RiskDataServiceTaskStatusNum = {
  /** 任务拓展状态 */
  taskExtendStatus?: "EXE_EXCEPTION" | "NORMAL_FINISH" | "DISTRIBUTE_UNFINISHED" | "UN_DISTRIBUTE";
  /** 任务数量 */
  count?: JsonValue;
};

/**
 * OpenAPI 组件类型：NumStatisticStructTaskExceptionTag
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/NumStatisticStructTaskExceptionTag
 */
export type RiskDataServiceNumStatisticStructTaskExceptionTag = {
  /** 编码 */
  code?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE";
  /** 名称 */
  name?: string;
  /** 数量 */
  num?: number;
};

/**
 * OpenAPI 组件类型：PlanTaskStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PlanTaskStatisticVo
 */
export type RiskDataServicePlanTaskStatisticVo = {
  /** 要求开始时间 */
  requiredStartTime?: string;
  /** 要求结束时间 */
  requiredEndTime?: string;
  /** 状态数量集合 */
  statusNums?: RiskDataServiceTaskStatusNum[];
  /** 异常标签统计任务数 逾期未完成-OVERDUE_UNFINISHED; 逾期完成-OVERDUE_FINISHED虚假执行-SHAM_EXECUTION;频次不符-PERIOD_DISAGREE;DISABLE-停用 */
  tagNums?: RiskDataServiceNumStatisticStructTaskExceptionTag[];
};

/**
 * OpenAPI 组件类型：JobViewVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/JobViewVo
 */
export type RiskDataServiceJobViewVo = {
  /** 工作类型id */
  jobTypeId?: string;
  /** 任务统计信息 */
  taskStatistics?: RiskDataServicePlanTaskStatisticVo[];
};

/**
 * OpenAPI 组件类型：MonitorViewQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MonitorViewQueryDto
 */
export type RiskDataServiceMonitorViewQueryDto = {
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 异常标签 */
  exceptionTag?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE";
  /** 组织id */
  orgIds?: string[];
  /** 岗位类id */
  positionCategoryIds?: string[];
  /** 岗位id */
  positionIds?: string[];
  /** 工作类型id */
  jobTypeIds?: string[];
  /** 处理专业id */
  dealMajorIds?: number[];
  returnTaskInfo?: boolean;
};

/**
 * OpenAPI 组件类型：IotConditionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotConditionVo
 */
export type RiskDataServiceIotConditionVo = {
  /** 公式计算叶子节点信息 */
  formulaCondition?: RiskDataServiceFormulaIotLeafConditionVo;
  /** 事件型叶子节点信息 */
  eventCondition?: RiskDataServiceEventLeafConditionVo;
  /** 普通值型叶子节点信息 */
  simpleValueCondition?: RiskDataServiceSimpleValueLeafConditionVo;
  /** 非叶子节点信息 */
  noneLeafConditionDto?: RiskDataServiceNoneLeafConditionVo;
  /** condition的类型 */
  conditionType?: "NO_LEAF" | "FORMULA_LEAF" | "EVENT_LEAF" | "SIMPLE_VAL" | "UN_VALID";
};

/**
 * OpenAPI 组件类型：IotMemRuleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotMemRuleVo
 */
export type RiskDataServiceIotMemRuleVo = {
  /** 规则ID */
  id?: number;
  /** 规则名称 */
  name?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 措施ID */
  klbMeasureId?: number;
  /** 核实要求类型 */
  verifyType?: "NONE" | "APP" | "APP_WEB" | "WEB";
  /** 报警分组 */
  iotAlertRuleGroups?: RiskDataServiceIotAlertRuleGroupVo[];
};

/**
 * OpenAPI 组件类型：InstanceMeasure
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceMeasure
 */
export type RiskDataServiceInstanceMeasure = {
  /** 实例ID */
  rwdInstanceId: string;
  /** 知识措施ID */
  klbMeasureId: number;
};

/**
 * OpenAPI 组件类型：IotRuleQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRuleQryDto
 */
export type RiskDataServiceIotRuleQryDto = {
  /** 是否已启用(True已启用、False未启用、null全部) */
  enabled?: boolean;
  /** 实例ID */
  rwdInstanceIds?: string[];
  /** 知识措施ID */
  klbMeasureIds?: number[];
};

/**
 * OpenAPI 组件类型：MapString
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapString
 */
export type RiskDataServiceMapString = {
  key?: string;
};

/**
 * OpenAPI 组件类型：ParamVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ParamVo
 */
export type RiskDataServiceParamVo = {
  /** 信息点编码 */
  code?: string;
  /** 信息点类型：STATIC静态、TWIN孪生、WORK_CALENDAR工作历 */
  type?: "STATIC" | "TWIN" | "WORK_CALENDAR";
  /** 实例ID */
  rwdObjectId?: string;
  /** 静态信息点值 */
  value?: string;
  /** 枚举值映射信息 */
  valueEnums?: RiskDataServiceMapString;
  /** 是否为事件型 */
  event?: boolean;
};

/**
 * OpenAPI 组件类型：KlbRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbRiskVo
 */
export type RiskDataServiceKlbRiskVo = {
  /** 风险ID */
  id?: number;
  /** 风险名称 */
  riskName?: string;
  /** 知识风险唯一key */
  riskBusinessId?: string;
  /** 知识风险事件ID */
  klbRiskEventBusinessId?: number;
};

/**
 * OpenAPI 组件类型：KlbRiskQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbRiskQryDto
 */
export type RiskDataServiceKlbRiskQryDto = {
  /** 知识风险事件ID */
  klbRiskEventBusinessIds?: number[];
  /** 知识隐患树节点ID */
  klbTreeNodeBusinessIds?: number[];
};

/**
 * OpenAPI 组件类型：ProblemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemVo
 */
export type RiskDataServiceProblemVo = {
  /** 实例id */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
  /** 问题名称 */
  name?: string;
  /** 风险状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 所在空间id */
  spaceIds?: string[];
  /** 所在空间信息 */
  relatedSpaces?: RiskDataServiceInstanceVo[];
  /** 实例类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MID" | "LOW";
  /** 等級別名 */
  degreeAlias?: string;
  /** 关联的风险事件 */
  riskEvents?: RiskDataServiceSimpleRiskEventDto[];
};

/**
 * OpenAPI 组件类型：InstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceVo
 */
export type RiskDataServiceInstanceVo = {
  /** 实例id */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
  /** 所在空间id */
  spaceIds?: string[];
  /** 所在空间信息 */
  relatedSpaces?: RiskDataServiceInstanceVo[];
  /** 实例类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
};

/**
 * OpenAPI 组件类型：SimpleExceptionEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleExceptionEventVo
 */
export type RiskDataServiceSimpleExceptionEventVo = {
  /** 异常事件id */
  id?: number;
  /** 过时,异常事件编码,就是异常事件id了 */
  exceptionEventCode?: string;
  /** 异常事件名称 */
  exceptionEventName?: string;
  /** 异常事件编码 */
  eventNumber?: string;
  /** 异常事件开始时间 */
  exceptionStartTime?: string;
  /** 异常事件结束时间 */
  exceptionEndTime?: string;
  /** 异常事件状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 持续时间,单位分钟 */
  duration?: number;
  /** 已解决问题数量 */
  resolvedProblemCount?: number;
  /** 所有问题数量 */
  allProblemCount?: number;
  /** 问题列表 */
  problems?: RiskDataServiceProblemVo[];
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 历史严重程度 */
  historyHighestDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 将废弃(需找MEOS刘阳 确认)
一级风控目标 */
  riskMeasureAimLevel1Collect?: "E0" | "E1" | "E2" | "E3"[];
  /** 将废弃(需找MEOS刘阳 确认)
二级风控目标 */
  riskMeasureAimLevel2Collect?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44"[];
  /** 实际影响 */
  impactCategoryList?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 实例列表 */
  instances?: RiskDataServiceInstanceVo[];
  /** 始发问题 */
  originalProblem?: RiskDataServiceProblemVo;
  /** 最早要求解决时间 */
  minRequireSolveTime?: string;
  /** 最晚要求解决时间 */
  maxRequireSolveTime?: string;
  /** 异常事件是否已逾期 */
  overdue?: boolean;
  /** 关联风险事件 */
  relatedRiskEvents?: RiskDataServiceSimpleRiskEventDto[];
  /** 处理进程 */
  solveProcess?: "FIND_EXCEPTION" | "SOLVING" | "VERIFICATION";
};

/**
 * OpenAPI 组件类型：EEEventGroupByDateStaticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEEventGroupByDateStaticsVo
 */
export type RiskDataServiceEEEventGroupByDateStaticsVo = {
  /** 日期 */
  localDate?: string;
  /** 数量 */
  exceptionEventCount?: number;
};

/**
 * OpenAPI 组件类型：EEEventStatisticsQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEEventStatisticsQryDto
 */
export type RiskDataServiceEEEventStatisticsQryDto = {
  /** 开始日期，时间戳，闭区间 */
  startDate: string;
  /** 结束日期,时间戳，开区间 */
  endDate: string;
  /** 比较类型 */
  dataGroupType?: "MONTH" | "DAY";
  /** 解决状态 */
  status?: "UNRESOLVED" | "RESOLVED";
  /** 实际影响id */
  impactCategoryIds?: number[];
};

/**
 * OpenAPI 组件类型：MapSetString
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapSetString
 */
export type RiskDataServiceMapSetString = {
  "0"?: string[];
};

/**
 * OpenAPI 组件类型：EERecordSourceIdsQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EERecordSourceIdsQryDto
 */
export type RiskDataServiceEERecordSourceIdsQryDto = {
  exceptionEventIds: number[];
  sourceTypes: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR"[];
};

/**
 * OpenAPI 组件类型：RiskEventHappenStaticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventHappenStaticsVo
 */
export type RiskDataServiceRiskEventHappenStaticsVo = {
  /** 日期 */
  riskEventId?: number;
  /** 实例id */
  rwdInstanceId?: string;
  /** 兼容反回值
数量 */
  happenCount?: number;
};

/**
 * OpenAPI 组件类型：ImpactCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ImpactCategoryVo
 */
export type RiskDataServiceImpactCategoryVo = {
  /** 名称 */
  name?: string;
  /** 关键性 */
  crucial?: boolean;
};

/**
 * OpenAPI 组件类型：EEProblemThirdPageVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemThirdPageVo
 */
export type RiskDataServiceEEProblemThirdPageVo = {
  id?: number;
  /** 问题名称 */
  problemDesc?: string;
  /** 问题开始时间 */
  startTime?: string;
  /** 问题要求解决时间 */
  targetFinishTime?: string;
  /** 问题实际解决时间 */
  solvedTime?: string;
  /** 实例id */
  rwdInstanceId?: string;
  /** 实例名称 */
  rwdInstanceName?: string;
  /** 发生问题的实体 */
  entity?: string;
  /** 资产分类标签 */
  tags?: string[];
  /** 是否为原因问题 */
  reason?: boolean;
  /** 问题类型（是否故障） */
  fault?: boolean;
  /** 问题解决状态 */
  solveStatus?: "NO_TREATMENT" | "SOLVED" | "UN_SOLVED";
  /** 处理专业 */
  pjDealMajorName?: string;
  /** 实际影响类型 */
  riskImpactCategories?: RiskDataServiceImpactCategoryVo[];
};

/**
 * OpenAPI 组件类型：EEProblemThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemThirdVo
 */
export type RiskDataServiceEEProblemThirdVo = {
  total?: number;
  pageVos?: RiskDataServiceEEProblemThirdPageVo[];
};

/**
 * OpenAPI 组件类型：EEProblemThirdPageDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemThirdPageDto
 */
export type RiskDataServiceEEProblemThirdPageDto = {
  /** 时间起点（包含） */
  startTime?: string;
  /** 时间终点（不包含） */
  endTime?: string;
  /** 处理专业 */
  pjDealMajorId?: number;
  /** 问题是否已解决(为空不作筛选) */
  solveStatus?: boolean;
  /** 问题类型(查询故障还是其他问题，为空不作筛选) */
  fault?: boolean;
  /** 是否原因问题 */
  reason?: boolean;
  /** 是否误报 */
  misstatement?: boolean;
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
};

/**
 * OpenAPI 组件类型：MajorVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MajorVo
 */
export type RiskDataServiceMajorVo = {
  /** 处理专业code */
  code?: string;
  /** 处理专业名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：IssueLevelVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IssueLevelVo
 */
export type RiskDataServiceIssueLevelVo = {
  /** 处理专业-问题等级 */
  level?: RiskDataServiceEnumStruct;
  /** 处理专业-问题等级别名 */
  alias?: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorBaseVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorBaseVo
 */
export type RiskDataServicePjDealMajorBaseVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
};

/**
 * OpenAPI 组件类型：PoiValueItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PoiValueItemVo
 */
export type RiskDataServicePoiValueItemVo = {
  /** 信息点参数选项code */
  code?: string;
  /** 信息点参数选项名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：PoiFilterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PoiFilterVo
 */
export type RiskDataServicePoiFilterVo = {
  /** 信息点code */
  poiCode?: string;
  /** 信息点名称 */
  poiName?: string;
  /** 信息点类型 */
  poiType?: "COMMON_POI" | "SPECIAL_POI" | "GENERAL_POI" | "GENERAL_ZONE_POI" | "BUILDING_POI";
  /** 信息点参数 */
  poiValueEnumDto?: RiskDataServicePoiValueItemVo[];
  /** 是否为复数 */
  isMultiple?: boolean;
};

/**
 * OpenAPI 组件类型：ObjectFilterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectFilterVo
 */
export type RiskDataServiceObjectFilterVo = {
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 名称 */
  objectName?: string;
  /** 空间节点编码(MEOI空间节点) */
  spaceNodeCode?: string;
  /** 信息点 */
  poiFilters?: RiskDataServicePoiFilterVo[];
};

/**
 * OpenAPI 组件类型：RiskEventFilterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventFilterVo
 */
export type RiskDataServiceRiskEventFilterVo = {
  /** 风险事件klb业务id */
  klbRiskEventBusinessId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
};

/**
 * OpenAPI 组件类型：PjRiskImpactCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskImpactCategoryVo
 */
export type RiskDataServicePjRiskImpactCategoryVo = {
  /** 影响类型id */
  id?: number;
  /** 影响类型名称 */
  name?: string;
  /** 关键性 */
  crucial?: "PIVOTAL" | "OTHER";
};

/**
 * OpenAPI 组件类型：RwdInstanceTagVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdInstanceTagVo
 */
export type RiskDataServiceRwdInstanceTagVo = {
  /** 资产分类标签id */
  id?: number;
  /** 资产分类标签名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：PjControlObjectiveTimeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjControlObjectiveTimeVo
 */
export type RiskDataServicePjControlObjectiveTimeVo = {
  /** 时长 */
  number?: number;
  /** 时长单位 */
  unit?: "SECOND" | "MINUTE" | "HOUR" | "DAY";
};

/**
 * OpenAPI 组件类型：PjControlObjectiveObjectIndicatorsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjControlObjectiveObjectIndicatorsVo
 */
export type RiskDataServicePjControlObjectiveObjectIndicatorsVo = {
  /** 故障次数 */
  failureCount?: number;
  /** 累计故障时长 */
  failureSumTime?: RiskDataServicePjControlObjectiveTimeVo;
  /** 平均故障时长 */
  failureAvgTime?: RiskDataServicePjControlObjectiveTimeVo;
};

/**
 * OpenAPI 组件类型：PjControlObjectiveRiskEventIndicatorsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjControlObjectiveRiskEventIndicatorsVo
 */
export type RiskDataServicePjControlObjectiveRiskEventIndicatorsVo = {
  /** 发生次数 */
  happenCount?: number;
  /** 单次风险解决时长 */
  singleSolvedTime?: RiskDataServicePjControlObjectiveTimeVo;
  /** 单次风险响应时长 */
  singleRespTime?: RiskDataServicePjControlObjectiveTimeVo;
};

/**
 * OpenAPI 组件类型：PjRiskControlObjectiveThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskControlObjectiveThirdPartyVo
 */
export type RiskDataServicePjRiskControlObjectiveThirdPartyVo = {
  /** 风控目标ID */
  id?: number;
  /** 选择的处理专业 */
  pjDealMajors?: RiskDataServicePjDealMajorBaseVo[];
  /** 风控目标名称 */
  name?: string;
  /** 风控目标类型 */
  type?: "OVERALL" | "MAJOR" | "CUSTOM";
  /** 配置目标方向 */
  objectiveObjType?: "OBJ_INSTANCE" | "RISK_EVENT";
  /** 风险管控范围(资产)-适用对象类 */
  objectFilters?: RiskDataServiceObjectFilterVo[];
  /** 风险管控范围(风险事件)-适用风险事件 */
  riskEventFilters?: RiskDataServiceRiskEventFilterVo[];
  /** 风险管控范围(风险事件)-实际影响 */
  riskImpactCategories?: RiskDataServicePjRiskImpactCategoryVo[];
  /** 风险管控范围(风险事件)-实际影响程度（关键/非关键） */
  riskImpactCategoryCrucial?: boolean;
  /** 风险管控范围(资产/风险事件)-资产分类标签 */
  rwdInstanceTags?: RiskDataServiceRwdInstanceTagVo[];
  /** 资产管控指标 */
  objectIndicators?: RiskDataServicePjControlObjectiveObjectIndicatorsVo;
  /** 风险事件管控指标 */
  riskEventIndicators?: RiskDataServicePjControlObjectiveRiskEventIndicatorsVo;
  /** 负责人id */
  personId?: string;
  /** 负责人名称 */
  personName?: string;
  /** 子集 */
  children?: RiskDataServicePjRiskControlObjectiveThirdPartyVo[];
};

/**
 * OpenAPI 组件类型：SimpleRiskEventDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleRiskEventDto
 */
export type RiskDataServiceSimpleRiskEventDto = {
  /** 风险事件业务id */
  riskEventBusinessId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorThirdPartyVo
 */
export type RiskDataServicePjDealMajorThirdPartyVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 处理专业-是否已删除 */
  deleted?: boolean;
};

/**
 * OpenAPI 组件类型：PjDealMajorThirdPartyQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorThirdPartyQryDto
 */
export type RiskDataServicePjDealMajorThirdPartyQryDto = {
  /** 项目处理专业id集合 */
  ids?: number[];
  /** 是否需返回已删除的数据 */
  includeDeleted?: boolean;
  /** 项目id */
  projectId?: string;
};

/**
 * OpenAPI 组件类型：PjRiskCategoryLabelVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskCategoryLabelVo
 */
export type RiskDataServicePjRiskCategoryLabelVo = {
  /** 项目处理专业-风险分类标签id */
  id?: number;
  /** 项目处理专业-风险分类标签名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorDetailThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorDetailThirdPartyVo
 */
export type RiskDataServicePjDealMajorDetailThirdPartyVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 项目处理专业-风险分类标签集合 */
  pjRiskCategoryLabels?: RiskDataServicePjRiskCategoryLabelVo[];
};

/**
 * OpenAPI 组件类型：PjDealMajorWithRwdInstanceThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorWithRwdInstanceThirdPartyVo
 */
export type RiskDataServicePjDealMajorWithRwdInstanceThirdPartyVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 对象实例id */
  rwdInstanceId?: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorWithRiskInstanceThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorWithRiskInstanceThirdPartyVo
 */
export type RiskDataServicePjDealMajorWithRiskInstanceThirdPartyVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 对象实例id */
  rwdInstanceId?: string;
  /** 项目风险业务id */
  pjRiskBusinessId?: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorThirdPartyQryByRiskInstanceDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorThirdPartyQryByRiskInstanceDto
 */
export type RiskDataServicePjDealMajorThirdPartyQryByRiskInstanceDto = {
  /** 项目风险业务id */
  pjRiskBusinessId: string;
  /** 对象实例id */
  rwdInstanceId: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorWithMeasureThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorWithMeasureThirdPartyVo
 */
export type RiskDataServicePjDealMajorWithMeasureThirdPartyVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 对象实例id */
  rwdInstanceId?: string;
  /** 可执行措施id */
  execMeasureId?: number;
};

/**
 * OpenAPI 组件类型：PjDealMajorThirdPartyQryByMeasureDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorThirdPartyQryByMeasureDto
 */
export type RiskDataServicePjDealMajorThirdPartyQryByMeasureDto = {
  /** 可执行措施id */
  execMeasureId: number;
  /** 对象实例id */
  rwdInstanceId: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorWithStrategyThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorWithStrategyThirdPartyVo
 */
export type RiskDataServicePjDealMajorWithStrategyThirdPartyVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 策略(三级策略分类)id */
  strategyCategoryId?: number;
};

/**
 * OpenAPI 组件类型：PjDealMajorWithKlbMeasureThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorWithKlbMeasureThirdPartyVo
 */
export type RiskDataServicePjDealMajorWithKlbMeasureThirdPartyVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 对象实例id */
  rwdInstanceId?: string;
  /** 可执行措施id */
  klbMeasureId?: number;
};

/**
 * OpenAPI 组件类型：PjDealMajorThirdPartyQryByKlbMeasureDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorThirdPartyQryByKlbMeasureDto
 */
export type RiskDataServicePjDealMajorThirdPartyQryByKlbMeasureDto = {
  /** 知识措施id */
  klbMeasureId: number;
  /** 对象实例id */
  rwdInstanceId: string;
};

/**
 * OpenAPI 组件类型：EERiskEventStaticsQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EERiskEventStaticsQryDto
 */
export type RiskDataServiceEERiskEventStaticsQryDto = {
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 知识风险事件id */
  klbRiskEventIds?: number[];
  riskStatuses?: "NORMAL" | "WARN" | "EXCEPTION"[];
  /** 是否潜在 */
  potential?: boolean;
  /** 是否完成 */
  finished?: boolean;
};

/**
 * OpenAPI 组件类型：PjDealMajorVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorVo
 */
export type RiskDataServicePjDealMajorVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 处理专业-风险分类标签集合 */
  pjRiskCategoryLabels?: RiskDataServicePjRiskCategoryLabelVo[];
};

/**
 * OpenAPI 组件类型：CountByMajor
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CountByMajor
 */
export type RiskDataServiceCountByMajor = {
  /** 所有风险事件数量 */
  total?: number;
  /** 专业列表 */
  majorList?: RiskDataServiceMajorCount[];
};

/**
 * OpenAPI 组件类型：RoomFuncTypeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RoomFuncTypeVo
 */
export type RiskDataServiceRoomFuncTypeVo = {
  code?: string;
  parentCode?: string;
  name?: string;
  children?: RiskDataServiceRoomFuncTypeVo[];
};

/**
 * OpenAPI 组件类型：SpecialPjRiskIssueLevelVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SpecialPjRiskIssueLevelVo
 */
export type RiskDataServiceSpecialPjRiskIssueLevelVo = {
  /** 特殊配置类型 */
  type?: "ROOM_FUNC_TYPE" | "ZONE_MANAGEMENT_GROUPING";
  /** 空间管理分组编码 */
  zoneManagementGroupingCodeList?: string[];
  /** 空间功能类型 */
  roomFuncTypeVoList?: RiskDataServiceRoomFuncTypeVo[];
  /** 超征兆问题等级 */
  symptomaticValueLevel?: RiskDataServiceIssueLevelVo;
  /** 异常问题等级 */
  exceptionValueLevel?: RiskDataServiceIssueLevelVo;
};

/**
 * OpenAPI 组件类型：PjRiskIssueLevelVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskIssueLevelVo
 */
export type RiskDataServicePjRiskIssueLevelVo = {
  /** 超征兆问题等级 */
  symptomaticValueLevel?: RiskDataServiceIssueLevelVo;
  /** 异常问题等级 */
  exceptionValueLevel?: RiskDataServiceIssueLevelVo;
  /** 特殊规则配置 */
  special?: RiskDataServiceSpecialPjRiskIssueLevelVo;
};

/**
 * OpenAPI 组件类型：PjRiskEventListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEventListVo
 */
export type RiskDataServicePjRiskEventListVo = {
  /** 风险事件业务id */
  riskEventBusinessId?: number;
  /** 风险事件名称 */
  name?: string;
  /** 顶节点风险 */
  pjRisk?: RiskDataServicePjRiskListVo;
  /** 一级风控目标
一级风控目标(风险事件类型) */
  riskMeasureAimLevel1?: RiskDataServiceEnumStruct5;
  /** 二级风控目标
二级风控目标(风险事件类型) */
  riskMeasureAimLevel2?: RiskDataServiceEnumStruct5;
  /** 常见性 */
  ordinary?: RiskDataServiceEnumStruct5;
  /** 影响类型呢 */
  impactList?: RiskDataServiceRiskEventImpactVo[];
  /** 是否主动管理 */
  follow?: boolean;
  /** 对象分类 */
  classCategory?: RiskDataServiceClassCategoryVo;
  /** 是否有变更标记 */
  changed?: boolean;
  /** 是否有风控策略 */
  hasStrategy?: boolean;
};

/**
 * OpenAPI 组件类型：IPagePjRiskEventListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPagePjRiskEventListVo
 */
export type RiskDataServiceIPagePjRiskEventListVo = {
  /** 查询数据列表 */
  records?: RiskDataServicePjRiskEventListVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
  pages?: number;
};

/**
 * OpenAPI 组件类型：PjRiskEventQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEventQueryDto
 */
export type RiskDataServicePjRiskEventQueryDto = {
  /** 是否关注(主动管理) */
  follow?: boolean;
  /** 风险事件名称搜索关键词 */
  riskEventNameKeyword?: string;
};

/**
 * OpenAPI 组件类型：TipsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TipsVo
 */
export type RiskDataServiceTipsVo = {
  /** 新增风险事件数量 */
  newRiskEventCount?: number;
  /** 新增风险点数量 */
  newRiskCount?: number;
};

/**
 * OpenAPI 组件类型：PjDealMajorListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorListVo
 */
export type RiskDataServicePjDealMajorListVo = {
  /** id */
  id?: number;
  /** 名称 */
  name?: string;
  /** 排序 */
  sort?: number;
};

/**
 * OpenAPI 组件类型：Component
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Component
 */
export type RiskDataServiceComponent = {
  /** 部件id */
  componentId?: string;
  /** 部件名称 */
  componentName?: string;
  /** 措施列表 */
  measureList?: RiskDataServiceMeasureVo[];
};

/**
 * OpenAPI 组件类型：ObjectClass
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClass
 */
export type RiskDataServiceObjectClass = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 是否包含设备本身:null代表未配置,true代表包含,false代表不包含 */
  self?: boolean;
  /** 部件列表,为空表示全部 */
  components?: RiskDataServiceComponent[];
  /** 处理专业 */
  dealMajor?: RiskDataServicePjDealMajorListVo;
};

/**
 * OpenAPI 组件类型：EquipmentMajorVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentMajorVo
 */
export type RiskDataServiceEquipmentMajorVo = {
  /** 专业编码 */
  code?: string;
  /** 专业名称 */
  name?: string;
  /** 总共的对象类数量 */
  objectClassTotalCount?: number;
  /** 设备定位标签 */
  equipPosTags?: RiskDataServiceEquipPosTag[];
  /** 系统类列表 */
  systemClasses?: RiskDataServiceObjectClass[];
};

/**
 * OpenAPI 组件类型：NoDeliveryEntity
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/NoDeliveryEntity
 */
export type RiskDataServiceNoDeliveryEntity = {
  /** 设备(部件)实体id */
  entityId?: number;
  /** 设备(部件)名称 */
  name?: string;
  /** 处理专业 */
  dealMajor?: RiskDataServicePjDealMajorListVo;
};

/**
 * OpenAPI 组件类型：NoDeliveryObjectTypeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/NoDeliveryObjectTypeVo
 */
export type RiskDataServiceNoDeliveryObjectTypeVo = {
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 部件列表.为空表示全选 */
  equipments?: RiskDataServiceNoDeliveryEntity[];
};

/**
 * OpenAPI 组件类型：PjDealMajorDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorDetailVo
 */
export type RiskDataServicePjDealMajorDetailVo = {
  /** id */
  id?: number;
  /** 名称 */
  name?: string;
  /** 排序 */
  sort?: number;
  /** 关联的交付专业 */
  majorList?: RiskDataServiceMajorVo[];
  /** 设备设施-专业 */
  equipmentMajorList?: RiskDataServiceUnConfigDeliveryVo[];
  /** 未交付的部件或设备-对象类型 */
  noDeliveryObjectTypeList?: RiskDataServiceNoDeliveryObjectTypeVo[];
  /** 特定风险点 */
  pjRiskVos?: RiskDataServicePjDealMajorRiskVo[];
};

/**
 * OpenAPI 组件类型：RoomFuncType
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RoomFuncType
 */
export type RiskDataServiceRoomFuncType = {
  /** 空间功能类型编码 */
  code?: string;
  /** 空间功能类型名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：PjRisk
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRisk
 */
export type RiskDataServicePjRisk = {
  /** 风险点业务id */
  riskBusinessId?: string;
  /** 风险点名称 */
  name?: string;
  /** 特定的空间功能类型列表 */
  roomFuncTypeList?: RiskDataServiceRoomFuncType[];
};

/**
 * OpenAPI 组件类型：PjRiskGroupVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskGroupVo
 */
export type RiskDataServicePjRiskGroupVo = {
  /** 名称(可能是objType,也可能是交付专业,仅起分类作用) */
  name?: string;
  /** 下层的风险列表 */
  riskList?: RiskDataServicePjRisk[];
};

/**
 * OpenAPI 组件类型：ValidResult
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ValidResult
 */
export type RiskDataServiceValidResult = {
  /** 名称是否重复 */
  nameRepeat?: boolean;
  /** 专业是否重复 */
  majorRepeat?: boolean;
  /** 冲突的设备设施-专业 */
  equipmentMajorList?: RiskDataServiceUnConfigDeliveryVo[];
  /** 冲突的 未交付的部件或设备-对象类型 */
  noDeliveryObjectTypeList?: RiskDataServiceNoDeliveryObjectTypeVo[];
};

/**
 * OpenAPI 组件类型：ObjectClass6
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClass6
 */
export type RiskDataServiceObjectClass6 = {
  /** 对象类编码 */
  classCode?: string;
  /** 是否包含设备本身:null代表未配置,true代表包含,false代表不包含 */
  self?: boolean;
  /** 部件列表,为空表示全部 */
  componentIds?: number[];
};

/**
 * OpenAPI 组件类型：EquipmentMajorDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentMajorDto
 */
export type RiskDataServiceEquipmentMajorDto = {
  /** 专业编码 */
  code?: string;
  /** 对象类列表 */
  objectClasses?: RiskDataServiceObjectClass[];
};

/**
 * OpenAPI 组件类型：NoDeliveryObjectType
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/NoDeliveryObjectType
 */
export type RiskDataServiceNoDeliveryObjectType = {
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 部件列表.为空表示全选 */
  equipmentEntityIds?: number[];
};

/**
 * OpenAPI 组件类型：PjRisk7
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRisk7
 */
export type RiskDataServicePjRisk7 = {
  /** 风险点业务id */
  riskBusinessId?: string;
  /** 特定的空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
};

/**
 * OpenAPI 组件类型：PjDealMajorSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorSaveDto
 */
export type RiskDataServicePjDealMajorSaveDto = {
  /** id */
  id?: number;
  /** 名称 */
  name?: string;
  /** 关联的交付专业编码 */
  majorCodes?: string[];
  /** 设备设施-专业 */
  equipmentMajorList?: RiskDataServicePjDealMajorDeliveryDto[];
  /** 未交付的部件或设备-对象类型 */
  noDeliveryObjectTypeList?: RiskDataServicePjDealMajorNoDeliveryDto[];
  /** 特定风险点 */
  pjRisks?: RiskDataServicePjDealMajorRiskDto[];
};

/**
 * OpenAPI 组件类型：PjDealMajorSortDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorSortDto
 */
export type RiskDataServicePjDealMajorSortDto = {
  /** 处理专业id */
  id: number;
  /** 排序值 */
  sort: number;
};

/**
 * OpenAPI 组件类型：SimplePjRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimplePjRiskVo
 */
export type RiskDataServiceSimplePjRiskVo = {
  /** 风险ID */
  id?: number;
  /** 风险名称 */
  riskName?: string;
  classCode?: string;
  className?: string;
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** meoi空间类型编码 */
  meoiSpaceTypeCode?: string;
  /** meoi空间类型 */
  meoiSpaceTypeDesc?: string;
  /** 失效模式 */
  failureMode?: RiskDataServiceEnumStruct;
  /** 实体id */
  entityId?: string;
  /** 所属实体id */
  belongEntityId?: number;
  /** 项目风险业务id -带meoi空间功能类型 */
  pjRiskBusinessId?: string;
  /** 风险业务id */
  riskBusinessId?: string;
  rccRisk?: boolean;
  uniqueKey?: string;
};

/**
 * OpenAPI 组件类型：SimpleRiskEventStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleRiskEventStruct
 */
export type RiskDataServiceSimpleRiskEventStruct = {
  /** 风险事件id */
  id?: number;
  /** 风险事件类型 */
  type?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE";
  /** 风险事件名称 */
  name?: string;
  /** 影响类型 */
  riskImpactCategories?: RiskDataServicePjRiskImpactCategoryVo[];
};

/**
 * OpenAPI 组件类型：PjRiskListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskListVo
 */
export type RiskDataServicePjRiskListVo = {
  /** 风险点id */
  riskBusinessId?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 实体id */
  entityId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 是否部件 */
  isComponent?: boolean;
  /** 风险点名称 */
  name?: string;
  /** 处理专业 */
  dealMajorList?: RiskDataServicePjDealMajorListVo[];
  /** 失效后可能引发的风险事件 */
  pjRiskEvents?: RiskDataServiceSimpleRiskEventStruct[];
  /** 故障标签 */
  faultLabel?: "NONE" | "NOT_REGARD_FAULT";
  /** 空间功能类型 */
  roomFuncTypeList?: RiskDataServiceRoomFuncTypeVo[];
  /** 问题等级 */
  issueLevel?: RiskDataServicePjRiskIssueLevelVo;
  /** 风险分类标签 */
  categoryLabelList?: RiskDataServicePjRiskCategoryLabelVo[];
  /** 是否不视作故障 */
  notRegardFault?: boolean;
  /** 是否根源风险（真叶子） */
  isRootRisk?: boolean;
  /** 是否顶节点 */
  isTopRisk?: boolean;
};

/**
 * OpenAPI 组件类型：PjRiskEntityVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEntityVo
 */
export type RiskDataServicePjRiskEntityVo = {
  /** 部件id */
  componentId?: number;
  /** 部件名称-仅部件有值 */
  componentName?: string;
  /** 实体风险列表 */
  pjRiskList?: RiskDataServicePjRiskListVo[];
};

/**
 * OpenAPI 组件类型：IPagePjRiskEntityVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPagePjRiskEntityVo
 */
export type RiskDataServiceIPagePjRiskEntityVo = {
  /** 查询数据列表 */
  records?: RiskDataServicePjRiskEntityVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
  pages?: number;
};

/**
 * OpenAPI 组件类型：PjRiskQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskQueryDto
 */
export type RiskDataServicePjRiskQueryDto = {
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
  /** 风险名称关键词 */
  riskNameKeyword?: string;
  /** 处理专业id */
  dealMajorIds?: number[];
  /** 对象类编码 */
  classCodes?: string[];
  /** 实体id */
  entityIds?: string[];
  /** 问题等级 */
  issueLevel?: "HIGH" | "MID" | "LOW"[];
  /** 故障标签 */
  faultLabel?: "NONE" | "ADDITIONAL_REPAIR" | "NOT_REGARD_FAULT";
  /** 是否根源风险（真叶子） */
  isRootRisk?: boolean;
  /** 风险分类标签ids */
  categoryLabelIdList?: number[];
};

/**
 * OpenAPI 组件类型：PjRiskInstanceQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskInstanceQueryDto
 */
export type RiskDataServicePjRiskInstanceQueryDto = {
  /** 当前页 */
  current?: number;
  /** 每页条数 */
  size?: number;
  /** 对象名称关键词 */
  localNameKeyword?: string;
  /** 建筑id */
  buildingIdList?: string[];
  /** 楼层id */
  floorIdList?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
  /** 所在空间id */
  inSpaceIds?: string[];
  /** 交付专业 */
  majorCodes?: string[];
  /** 风险id */
  riskBusinessId?: string;
};

/**
 * OpenAPI 组件类型：PjRiskSimpleListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskSimpleListVo
 */
export type RiskDataServicePjRiskSimpleListVo = {
  /** 风险ID */
  id?: string;
  /** 风险名称 */
  name?: string;
  /** 业务ID */
  businessId?: string;
};

/**
 * OpenAPI 组件类型：IPagePjRiskSimpleListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPagePjRiskSimpleListVo
 */
export type RiskDataServiceIPagePjRiskSimpleListVo = {
  /** 查询数据列表 */
  records?: RiskDataServicePjRiskSimpleListVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
  pages?: number;
};

/**
 * OpenAPI 组件类型：PjRiskPageSimpleDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskPageSimpleDto
 */
export type RiskDataServicePjRiskPageSimpleDto = {
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
  /** 关键字（名称） */
  keyWord?: string;
  /** 对象类编码 */
  classCodes?: string[];
};

/**
 * OpenAPI 组件类型：IssueLevelDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IssueLevelDto
 */
export type RiskDataServiceIssueLevelDto = {
  /** 问题等级 */
  level: "HIGH" | "MID" | "LOW";
  /** 问题等级-别名 */
  alias?: string;
};

/**
 * OpenAPI 组件类型：SpecialPjRiskIssueLevelDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SpecialPjRiskIssueLevelDto
 */
export type RiskDataServiceSpecialPjRiskIssueLevelDto = {
  /** 空间功能类型 */
  roomFuncTypeCodeList?: string[];
  /** 超征兆问题等级 */
  symptomaticValueLevel?: "HIGH" | "MID" | "LOW";
  /** 异常问题等级 */
  exceptionValueLevel?: "HIGH" | "MID" | "LOW";
};

/**
 * OpenAPI 组件类型：PjRiskIssueLevelDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskIssueLevelDto
 */
export type RiskDataServicePjRiskIssueLevelDto = {
  /** 超征兆问题等级 */
  symptomaticValueLevel?: "HIGH" | "MID" | "LOW";
  /** 异常问题等级 */
  exceptionValueLevel?: "HIGH" | "MID" | "LOW";
  special?: RiskDataServiceSpecialPjRiskIssueLevelDto;
};

/**
 * OpenAPI 组件类型：PjRiskUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskUpdateDto
 */
export type RiskDataServicePjRiskUpdateDto = {
  /** 风险点id */
  riskBusinessId: string;
  /** 问题等级 */
  issueLevel?: RiskDataServicePjRiskIssueLevelStruct;
  /** 项目风险分类标签id集合，此字段不传或传null表示不进行更新，传空数组代表清空数据 */
  categoryLabelIds?: number[];
  /** 是否不视为故障(不传值则不编辑) */
  isNotRegardFault?: boolean;
  /** 是否额外维修(不传值则不编辑) */
  isAdditionalRisk?: boolean;
  /** 改变是否不视为故障的风险点 */
  regardFaultRiskBusinessIds: string[];
};

/**
 * OpenAPI 组件类型：RiskEventCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventCategoryVo
 */
export type RiskDataServiceRiskEventCategoryVo = {
  /** 一级风控目标
一级风控目标(风险事件类型) */
  riskMeasureAimLevel1?: "E0" | "E1" | "E2" | "E3";
  /** 二级风控目标
二级风控目标(风险事件类型) */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44";
};

/**
 * OpenAPI 组件类型：PjRiskPageSelectDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskPageSelectDto
 */
export type RiskDataServicePjRiskPageSelectDto = {
  /** 严重程度(问题等级) */
  importance?: "HIGH" | "MID" | "LOW" | "NULL"[];
  /** 影响类型ID */
  riskImpactCategoryIds?: number[];
  /** 项目处理专业id */
  pjDealMajorIds?: number[];
  /** 项目风险分类标签id */
  pjRiskCategoryLabelIds?: number[];
  /** 常见性 */
  ordinary?: "E0" | "E1" | "E2"[];
  /** 是否为风险事件 */
  riskEvent?: boolean;
  /** 事件类型(一二级风控目标) */
  riskEventCategoryVos?: RiskDataServiceRiskEventCategoryVo[];
  /** 更新开始时间 */
  startTime?: string;
  /** 更新结束时间 */
  endTime?: string;
  /** 关键字,（搜索风险或影响名称） */
  keyWord?: string;
  /** 是否只看状态变更 */
  isChanged?: boolean;
};

/**
 * OpenAPI 组件类型：PjRiskBatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskBatchUpdateDto
 */
export type RiskDataServicePjRiskBatchUpdateDto = {
  /** 风险点id */
  riskBusinessIdList: string[];
  /** 超征兆问题等级,为空不更新 */
  symptomaticValueLevel?: "HIGH" | "MID" | "LOW";
  /** 异常问题等级,为空不更新 */
  exceptionValueLevel?: "HIGH" | "MID" | "LOW";
  /** 项目风险分类标签id集合，此字段不传或传null表示不进行更新，传空数组代表清空数据 */
  categoryLabelIds?: number[];
  /** 是否不视为故障(不传值则不编辑) */
  isNotRegardFault?: boolean;
  /** 是否额外维修(不传值则不编辑) */
  isAdditionalRisk?: boolean;
  /** 改变是否不视为故障的风险点 */
  regardFaultRiskBusinessIds: string[];
};

/**
 * OpenAPI 组件类型：PjRiskBatchClearDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskBatchClearDto
 */
export type RiskDataServicePjRiskBatchClearDto = {
  /** 风险点id */
  riskBusinessIdList?: string[];
  /** 是否清空风险分类 */
  pjRiskCategory?: boolean;
  /** 是否清空不视作故障 */
  notRegardFault?: boolean;
  /** 是否清空额外维修 */
  additionalRisk?: boolean;
};

/**
 * OpenAPI 组件类型：UpdateFollowDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/UpdateFollowDto
 */
export type RiskDataServiceUpdateFollowDto = {
  /** 风险事件id */
  riskEventBusinessId: number;
  /** 是否主动管理 */
  follow: boolean;
};

/**
 * OpenAPI 组件类型：PjRiskEventUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEventUpdateDto
 */
export type RiskDataServicePjRiskEventUpdateDto = {
  /** 风险事件id */
  riskEventBusinessId: number;
  /** 顶节点发生等级配置 */
  issueLevel: RiskDataServicePjRiskIssueLevelStruct;
  /** 顶节点发生等级配置 */
  impactConfigs: RiskDataServiceRiskEventImpactConfig[];
};

/**
 * OpenAPI 组件类型：BatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BatchUpdateDto
 */
export type RiskDataServiceBatchUpdateDto = {
  /** 风险事件id */
  riskEventBusinessIds: number[];
  /** 超征兆问题等级,为空不更新 */
  symptomaticValueLevel?: "HIGH" | "MID" | "LOW";
  /** 异常问题等级,为空不更新 */
  exceptionValueLevel?: "HIGH" | "MID" | "LOW";
  /** 是否主动管理,为空不更新 */
  follow?: boolean;
};

/**
 * OpenAPI 组件类型：BatchClearDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BatchClearDto
 */
export type RiskDataServiceBatchClearDto = {
  /** 风险事件id */
  riskEventBusinessIds: number[];
  /** 是否清空影响类型 */
  riskImpactCategory?: boolean;
  /** 是否清空问题等级 */
  issueLevel?: boolean;
  /** 是否清空主动管理 */
  follow?: boolean;
};

/**
 * OpenAPI 组件类型：PjRiskTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskTreeNodeVo
 */
export type RiskDataServicePjRiskTreeNodeVo = {
  /** id */
  id?: number;
  /** 名称 */
  name?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 是否部件 */
  component?: boolean;
  /** 实体id */
  entityId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 与下级节点的关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  infoList?: RiskDataServiceRwdInfoVo[];
  /** 下级节点 */
  children?: RiskDataServicePjRiskTreeNodeVo[];
  /** 实体风险.为空则说明这个节点没实例化 */
  pjRisk?: RiskDataServicePjRiskListVo;
  /** 是否有变更标记 */
  changed?: boolean;
  /** 是否有策略 */
  strategy?: boolean;
  /** 实体信息 */
  entity?: RiskDataServiceTreeNodeEntityVo;
  /** 所属实体 */
  belongEntity?: RiskDataServiceTreeNodeEntityVo;
};

/**
 * OpenAPI 组件类型：RiskEventInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventInstanceVo
 */
export type RiskDataServiceRiskEventInstanceVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 品牌 */
  brand?: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  /** 实例树id */
  instanceTreeId?: number;
  /** 是否可评估 */
  evaluable?: boolean;
  /** 是否可预测 */
  predictable?: boolean;
  /** 是否有风控策略 */
  hasStrategy?: boolean;
  inMeoiScope?: boolean;
};

/**
 * OpenAPI 组件类型：PjRiskEventInstanceQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEventInstanceQueryDto
 */
export type RiskDataServicePjRiskEventInstanceQueryDto = {
  /** 当前页 */
  current?: number;
  /** 每页条数 */
  size?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 空间功能类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象名称关键词 */
  localNameKeyword?: string;
  /** 建筑id */
  buildingIdList?: string[];
  /** 楼层id */
  floorIdList?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
  /** 所在空间id */
  inSpaceIds?: string[];
  /** 交付专业 */
  majorCodes?: string[];
  /** 风险事件id */
  riskEventBusinessId?: number;
  /** 处理专业 */
  dealMajorId?: number;
  /** 是否可评估 */
  evaluable?: boolean;
  /** 是否可预测 */
  predictable?: boolean;
  /** 是否主动管理 */
  follow?: boolean;
  /** 是否有风控策略 */
  hasStrategy?: boolean;
};

/**
 * OpenAPI 组件类型：PjRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskVo
 */
export type RiskDataServicePjRiskVo = {
  /** 对象类 */
  classCode?: string;
  /** 对象类编码 */
  className?: string;
  /** 关联对象数量 */
  instanceCount?: number;
  /** 关联处理专业 */
  dealMajorList?: RiskDataServicePjDealMajorListVo[];
  /** 问题等级配置 */
  issueLevel?: RiskDataServicePjRiskIssueLevelVo;
  /** 风险分类 */
  categoryLabelList?: RiskDataServicePjRiskCategoryLabelVo[];
};

/**
 * OpenAPI 组件类型：PjRiskClassVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskClassVo
 */
export type RiskDataServicePjRiskClassVo = {
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 部件列表 */
  components?: RiskDataServicePjRiskEntityVo[];
  /** 实体风险列表 */
  pjRiskList?: RiskDataServicePjRiskListVo[];
};

/**
 * OpenAPI 组件类型：IPagePjRiskClassVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPagePjRiskClassVo
 */
export type RiskDataServiceIPagePjRiskClassVo = {
  records?: RiskDataServicePjRiskClassVo[];
  total?: number;
  size?: number;
  current?: number;
  orders?: RiskDataServiceOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  countId?: string;
  maxLimit?: number;
  pages?: number;
};

/**
 * OpenAPI 组件类型：MajorCount
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MajorCount
 */
export type RiskDataServiceMajorCount = {
  /** 专业编码 */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：PjRiskCategoryLabelDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskCategoryLabelDto
 */
export type RiskDataServicePjRiskCategoryLabelDto = {
  /** 处理专业-风险分类标签id */
  id?: number;
  /** 处理专业-风险分类标签名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorSaveCategoryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorSaveCategoryDto
 */
export type RiskDataServicePjDealMajorSaveCategoryDto = {
  /** 处理专业id */
  id: number;
  /** 处理专业-风险分类标签集合 */
  pjRiskCategoryLabels: RiskDataServicePjDealMajorCategoryDto[];
};

/**
 * OpenAPI 组件类型：PjRiskRootTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskRootTreeNodeVo
 */
export type RiskDataServicePjRiskRootTreeNodeVo = {
  /** id */
  id?: number;
  /** 名称 */
  name?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 是否部件 */
  component?: boolean;
  /** 实体id */
  entityId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 与下级节点的关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  infoList?: RiskDataServiceRwdInfoVo[];
  /** 下级节点 */
  children?: RiskDataServicePjRiskTreeNodeVo[];
  /** 实体风险.为空则说明这个节点没实例化 */
  pjRisk?: RiskDataServicePjRiskListVo;
  /** 是否有变更标记 */
  changed?: boolean;
  /** 是否有策略 */
  strategy?: boolean;
  /** 实体信息 */
  entity?: RiskDataServiceTreeNodeEntityVo;
  /** 所属实体 */
  belongEntity?: RiskDataServiceTreeNodeEntityVo;
  /** 影响类型 */
  riskImpactCategories?: RiskDataServicePjRiskImpactCategoryVo[];
};

/**
 * OpenAPI 组件类型：PjDealMajorRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorRiskVo
 */
export type RiskDataServicePjDealMajorRiskVo = {
  /** 实体风险id */
  riskBusinessId?: string;
  /** 实体风险名称 */
  name?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类名称 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 空间功能类型 */
  roomFuncTypeList?: RiskDataServiceRoomFuncTypeVo[];
};

/**
 * OpenAPI 组件类型：EnumStruct5
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EnumStruct5
 */
export type RiskDataServiceEnumStruct5 = {
  code?: string;
  name?: string;
};

/**
 * OpenAPI 组件类型：PlanStrategyItemTaskInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PlanStrategyItemTaskInfo
 */
export type RiskDataServicePlanStrategyItemTaskInfo = {
  /** 策略事项id */
  id?: number;
  /** 策略事项名称 */
  name?: string;
  strategyItemId?: number;
  /** 是否计划停用 */
  isDisable?: boolean;
  /** 异常标签  逾期未完成-OVERDUE_UNFINISHED; 逾期完成-OVERDUE_FINISHED虚假执行-SHAM_EXECUTION;频次不符-PERIOD_DISAGREE;DISABLE-停用 */
  tags?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE"[];
  /** 任务统计信息 */
  taskStatistics?: RiskDataServicePlanTaskStatisticVo[];
  /** 策略事项id集合（对象类视图使用） */
  ids?: number[];
};

/**
 * OpenAPI 组件类型：ObjectClassInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassInfo
 */
export type RiskDataServiceObjectClassInfo = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 对象实例数量 */
  instanceNum?: number;
  /** 策略事项任务信息 */
  strategyItemInfos?: RiskDataServicePlanStrategyItemTaskInfo[];
};

/**
 * OpenAPI 组件类型：PlanInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PlanInfo
 */
export type RiskDataServicePlanInfo = {
  id?: number;
  /** 计划名称 */
  name?: string;
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 对象类信息 */
  classInfos?: RiskDataServiceObjectClassInfo[];
  /** 修改时间 */
  updateTime?: string;
};

/**
 * OpenAPI 组件类型：PlanViewVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PlanViewVo
 */
export type RiskDataServicePlanViewVo = {
  /** 工单类型 */
  jobType?: RiskDataServiceEnumStruct;
  /** 计划信息 */
  plans?: RiskDataServicePlanInfo[];
};

/**
 * OpenAPI 组件类型：MonitorViewPlanQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MonitorViewPlanQueryDto
 */
export type RiskDataServiceMonitorViewPlanQueryDto = {
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 异常标签 */
  exceptionTag?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE";
  /** 组织id */
  orgIds?: string[];
  /** 岗位类id */
  positionCategoryIds?: string[];
  /** 岗位id */
  positionIds?: string[];
  /** 工作类型id */
  jobTypeIds?: string[];
  /** 处理专业id */
  dealMajorIds?: number[];
  returnTaskInfo?: boolean;
  /** 计划id */
  planIds?: number[];
};

/**
 * OpenAPI 组件类型：Period
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Period
 */
export type RiskDataServicePeriod = {
  /** 周期类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 周期数量（多少次） */
  periodCount?: number;
  /** 频次数量(多少天) */
  periodTimes?: number;
};

/**
 * OpenAPI 组件类型：StrategyStatisticInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyStatisticInfo
 */
export type RiskDataServiceStrategyStatisticInfo = {
  /** 周期 */
  period?: RiskDataServicePeriod;
  /** 父级标签类型 */
  parentTagType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 策略事项任务信息 */
  strategyItemInfos?: RiskDataServicePlanStrategyItemTaskInfo[];
};

/**
 * OpenAPI 组件类型：ObjectClassInfo8
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassInfo8
 */
export type RiskDataServiceObjectClassInfo8 = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 实例数量 */
  instanceNum?: number;
  /** 策略事项统计信息 */
  strategyStatisticInfos?: RiskDataServiceStrategyStatisticInfo[];
};

/**
 * OpenAPI 组件类型：ObjectViewVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectViewVo
 */
export type RiskDataServiceObjectViewVo = {
  /** 专业编码 */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 对象类信息 */
  objectClassInfos?: RiskDataServiceObjectClassInfo8[];
};

/**
 * OpenAPI 组件类型：MonitorViewClassQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MonitorViewClassQueryDto
 */
export type RiskDataServiceMonitorViewClassQueryDto = {
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 异常标签 */
  exceptionTag?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE";
  /** 组织id */
  orgIds?: string[];
  /** 岗位类id */
  positionCategoryIds?: string[];
  /** 岗位id */
  positionIds?: string[];
  /** 工作类型id */
  jobTypeIds?: string[];
  /** 处理专业id */
  dealMajorIds?: number[];
  returnTaskInfo?: boolean;
  /** 对象类编码 */
  classCodes?: string[];
};

/**
 * OpenAPI 组件类型：TaskStatusStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TaskStatusStatisticVo
 */
export type RiskDataServiceTaskStatusStatisticVo = {
  /** 任务总数量 */
  taskCount?: number;
  /** 执行异常任务数量 */
  exceptionNum?: number;
  /** 正常完成任务数量 */
  normalFinishNum?: number;
  /** 未完成任务数量 */
  distributeUnfinishedNum?: number;
  /** 异常标签统计项 逾期未完成-OVERDUE_UNFINISHED; 逾期完成-OVERDUE_FINISHED虚假执行-SHAM_EXECUTION;频次不符-PERIOD_DISAGREE;DISABLE-停用 */
  statistic?: RiskDataServiceNumStatisticStructTaskExceptionTag[];
};

/**
 * OpenAPI 组件类型：NumStatisticStructLong
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/NumStatisticStructLong
 */
export type RiskDataServiceNumStatisticStructLong = {
  /** 编码 */
  code?: number;
  /** 名称 */
  name?: string;
  /** 数量 */
  num?: number;
};

/**
 * OpenAPI 组件类型：ExceptionPlanRatioVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionPlanRatioVo
 */
export type RiskDataServiceExceptionPlanRatioVo = {
  /** 任务总数 */
  taskNum?: number;
  /** 计划任务统计任务数，code是计划id，name是计划名称 */
  statistics?: RiskDataServiceNumStatisticStructLong[];
};

/**
 * OpenAPI 组件类型：NumStatisticStructString
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/NumStatisticStructString
 */
export type RiskDataServiceNumStatisticStructString = {
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 数量 */
  num?: number;
};

/**
 * OpenAPI 组件类型：ExceptionClassRatioVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionClassRatioVo
 */
export type RiskDataServiceExceptionClassRatioVo = {
  /** 任务总数 */
  taskNum?: number;
  /** 对象类统计任务数 */
  statistics?: RiskDataServiceNumStatisticStructString[];
};

/**
 * OpenAPI 组件类型：ViewStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ViewStatisticVo
 */
export type RiskDataServiceViewStatisticVo = {
  /** 视图任务完成情况统计 */
  taskStatusStatisticVo?: RiskDataServiceTaskStatusStatisticVo;
  /** 执行异常计划占比 */
  exceptionPlanRatioVo?: RiskDataServiceExceptionPlanRatioVo;
  /** 执行异常对象类占比 */
  exceptionClassRatioVo?: RiskDataServiceExceptionClassRatioVo;
};

/**
 * OpenAPI 组件类型：MonitorConditionQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MonitorConditionQueryDto
 */
export type RiskDataServiceMonitorConditionQueryDto = {
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 异常标签 */
  exceptionTag?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE";
  /** 组织id */
  orgIds?: string[];
  /** 岗位类id */
  positionCategoryIds?: string[];
  /** 岗位id */
  positionIds?: string[];
  /** 工作类型id */
  jobTypeIds?: string[];
  /** 处理专业id */
  dealMajorIds?: number[];
  returnTaskInfo?: boolean;
  /** 筛选的计划策略事项id */
  strategyItemIds: number[];
};

/**
 * OpenAPI 组件类型：TaskTagStatusStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TaskTagStatusStatisticVo
 */
export type RiskDataServiceTaskTagStatusStatisticVo = {
  /** 异常标签统计任务数 逾期未完成-OVERDUE_UNFINISHED; 逾期完成-OVERDUE_FINISHED虚假执行-SHAM_EXECUTION;频次不符-PERIOD_DISAGREE;DISABLE-停用 */
  statistic?: RiskDataServiceNumStatisticStructTaskExceptionTag[];
  /** 任务状态下拉数据 */
  taskStatus?: RiskDataServiceEnumStruct[];
};

/**
 * OpenAPI 组件类型：TaskExceptionStatistic
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TaskExceptionStatistic
 */
export type RiskDataServiceTaskExceptionStatistic = {
  /** 【执行异常】状态的任务数据关联的策略数 */
  exceptionStrategyNum?: number;
  /** 【所有状态】的任务数据关联的策略数 */
  allStrategyNum?: number;
  /** 【执行异常】状态的任务数据关联的对象实例数 */
  exceptionInstanceNum?: number;
  /** 【所有状态】的任务数据关联的对象实例数 */
  allInstanceNum?: number;
};

/**
 * OpenAPI 组件类型：ViewDetailStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ViewDetailStatisticVo
 */
export type RiskDataServiceViewDetailStatisticVo = {
  /** 任务完成情况统计 */
  statusStatistic?: RiskDataServiceTaskStatusStatisticVo;
  /** 异常情况统计 */
  exceptionStatistic?: RiskDataServiceTaskExceptionStatistic;
};

/**
 * OpenAPI 组件类型：MonitorTaskQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MonitorTaskQueryDto
 */
export type RiskDataServiceMonitorTaskQueryDto = {
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 异常标签 */
  exceptionTag?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE";
  /** 组织id */
  orgIds?: string[];
  /** 岗位类id */
  positionCategoryIds?: string[];
  /** 岗位id */
  positionIds?: string[];
  /** 工作类型id */
  jobTypeIds?: string[];
  /** 处理专业id */
  dealMajorIds?: number[];
  returnTaskInfo?: boolean;
  /** 筛选的计划策略事项id */
  strategyItemIds: number[];
  /** 对象类编码 */
  classCodes?: string[];
  /** 任务状态 */
  taskStatus?: "EXE_EXCEPTION" | "NORMAL_FINISH" | "DISTRIBUTE_UNFINISHED" | "UN_DISTRIBUTE"[];
  /** 异常标签 */
  exceptionTags?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE"[];
  /** 任务名称 */
  taskName?: string;
  /** 是否仅查看异常维修任务 */
  onlyExceptionMaintenance?: boolean;
};

/**
 * OpenAPI 组件类型：TaskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TaskVo
 */
export type RiskDataServiceTaskVo = {
  /** 任务id */
  taskId?: string;
  /** 实例名称 */
  instanceName?: string;
  /** 实例id */
  instanceId?: string;
  /** 计划开始时间 */
  requiredStartTime?: string;
  /** 要求结束时间 */
  requiredEndTime?: string;
  /** 完成时间 */
  finishTime?: string;
  /** 异常标签 */
  exceptionTags?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE"[];
  /** 维修费用 */
  repairCost?: number;
  /** 业务类型 */
  workType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 是否已完成 */
  isFinish?: boolean;
};

/**
 * OpenAPI 组件类型：TaskInstanceStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TaskInstanceStatisticVo
 */
export type RiskDataServiceTaskInstanceStatisticVo = {
  /** 状态 */
  status?: "EXE_EXCEPTION" | "NORMAL_FINISH" | "DISTRIBUTE_UNFINISHED" | "UN_DISTRIBUTE";
  /** 实例数量 */
  instanceNum?: number;
  /** 任务数据 */
  tasks?: RiskDataServiceTaskVo[];
};

/**
 * OpenAPI 组件类型：MeasureTaskStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MeasureTaskStatisticVo
 */
export type RiskDataServiceMeasureTaskStatisticVo = {
  /** 统一结构措施id */
  measureId?: number;
  /** 措施名称 */
  measureName?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 父级标签类型（策略类型） */
  parentTagType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 周期 */
  period?: RiskDataServicePeriod;
  /** 是否异常维修任务 */
  exceptionMaintenance?: boolean;
  /** 任务实例统计 */
  instanceStatistics?: RiskDataServiceTaskInstanceStatisticVo[];
};

/**
 * OpenAPI 组件类型：ObjectTaskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTaskVo
 */
export type RiskDataServiceObjectTaskVo = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 措施统计信息 */
  measureVos?: RiskDataServiceMeasureTaskStatisticVo[];
};

/**
 * OpenAPI 组件类型：PageObjectTaskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PageObjectTaskVo
 */
export type RiskDataServicePageObjectTaskVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceObjectTaskVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
};

/**
 * OpenAPI 组件类型：MonitorTaskPageQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MonitorTaskPageQueryDto
 */
export type RiskDataServiceMonitorTaskPageQueryDto = {
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 异常标签 */
  exceptionTag?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE";
  /** 组织id */
  orgIds?: string[];
  /** 岗位类id */
  positionCategoryIds?: string[];
  /** 岗位id */
  positionIds?: string[];
  /** 工作类型id */
  jobTypeIds?: string[];
  /** 处理专业id */
  dealMajorIds?: number[];
  returnTaskInfo?: boolean;
  /** 筛选的计划策略事项id */
  strategyItemIds: number[];
  /** 对象类编码 */
  classCodes?: string[];
  /** 任务状态 */
  taskStatus?: "EXE_EXCEPTION" | "NORMAL_FINISH" | "DISTRIBUTE_UNFINISHED" | "UN_DISTRIBUTE"[];
  /** 异常标签 */
  exceptionTags?: "OVERDUE_UNFINISHED" | "OVERDUE_FINISHED" | "SHAM_EXECUTION" | "PERIOD_DISAGREE" | "DISABLE"[];
  /** 任务名称 */
  taskName?: string;
  /** 是否仅查看异常维修任务 */
  onlyExceptionMaintenance?: boolean;
  page?: number;
  size?: number;
};

/**
 * OpenAPI 组件类型：TaskHistoryCompareVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TaskHistoryCompareVo
 */
export type RiskDataServiceTaskHistoryCompareVo = {
  /** 任务ID */
  taskId?: number;
  /** 任务名称 */
  taskName?: string;
  /** 任务类型 */
  thirdPartyType?: "DIAGNOSE" | "PLAN_INSPECTION" | "PLAN_MAINTAIN" | "EXCEPTION_REPAIR" | "ACTIVE_REPAIR" | "NON_PLAN_INSPECTION" | "NON_PLAN_MAINTAIN" | "WORK_REPORT";
  /** 完成时间 */
  finishTime?: string;
  /** 执行人 */
  lastUpdateBy?: string;
  /** 校验目标(失效模式) */
  failureMode?: RiskDataServiceEnumStruct;
  /** 节点状态 */
  feedbackResult?: RiskDataServiceEnumStruct;
  /** 反馈类型（分档反馈：OPTION、目标参数：PARAMETER_CALCULATION） */
  feedbackType?: "OPTION" | "PARAMETER_CALCULATION";
  /** 执行结果描述 */
  feedBack?: string;
  /** 分挡反馈值 */
  optionValue?: string;
  /** 分档反馈值描述 */
  optionDesc?: string;
  /** 目标参数名称 */
  targetParameter?: string;
  /** 任务照片ID */
  imageIds?: string[];
  /** 人工复验结果 */
  manualResult?: "FAKE" | "REAL";
  /** 人工复验虚假原因 */
  fakeReasons?: "HISTORY_DEVIATION" | "NUMBER_RATIONALITY" | "IMAGE_AUTHENTICITY"[];
};

/**
 * OpenAPI 组件类型：PjRiskCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskCategoryVo
 */
export type RiskDataServicePjRiskCategoryVo = {
  /** 风险分类标签id */
  id?: number;
  /** 风险分类标签名称 */
  name?: string;
  /** 处理专业id */
  dealMajorId?: number;
};

/**
 * OpenAPI 组件类型：PjDealMajorCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorCategoryVo
 */
export type RiskDataServicePjDealMajorCategoryVo = {
  /** 风险分类标签id */
  id?: number;
  /** 风险分类标签名称 */
  name?: string;
  /** 处理专业id */
  dealMajorId?: number;
};

/**
 * OpenAPI 组件类型：PjDealMajorCategoryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorCategoryDto
 */
export type RiskDataServicePjDealMajorCategoryDto = {
  /** 处理专业-风险分类标签id */
  id?: number;
  /** 处理专业-风险分类标签名称 */
  name: string;
};

/**
 * OpenAPI 组件类型：Serializable
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Serializable
 */
export type RiskDataServiceSerializable = Record<string, never>;

/**
 * OpenAPI 组件类型：PjRiskQueryStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskQueryStruct
 */
export type RiskDataServicePjRiskQueryStruct = {
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
  /** 风险名称关键词 */
  riskNameKeyword?: string;
  /** 交付专业树搜索key */
  dealMajorSearchKeys?: string[];
  /** 未交付的部件或设备-对象类型 */
  noDeliveryObjectTypeList?: RiskDataServicePjDealMajorNoDeliveryDto[];
  /** 问题等级 */
  issueLevel?: "HIGH" | "MID" | "LOW"[];
  /** 故障标签 */
  faultLabel?: "NONE" | "ADDITIONAL_REPAIR" | "NOT_REGARD_FAULT";
  /** 是否根源风险（真叶子） */
  isRootRisk?: boolean;
  /** 风险分类标签ids */
  categoryLabelIdList?: number[];
  /** 空间功能类型编码 */
  roomFuncTypeCodesList?: string[];
};

/**
 * OpenAPI 组件类型：SpecialPjRiskIssueLevelStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SpecialPjRiskIssueLevelStruct
 */
export type RiskDataServiceSpecialPjRiskIssueLevelStruct = {
  /** 特殊配置类型 */
  type?: "ROOM_FUNC_TYPE" | "ZONE_MANAGEMENT_GROUPING";
  /** 空间管理分组编码 */
  zoneManagementGroupingCodeList?: string[];
  /** 空间功能类型 */
  roomFuncTypeCodeList?: string[];
  /** 超征兆问题等级 */
  symptomaticValueLevel?: "HIGH" | "MID" | "LOW";
  /** 异常问题等级 */
  exceptionValueLevel?: "HIGH" | "MID" | "LOW";
};

/**
 * OpenAPI 组件类型：PjRiskIssueLevelStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskIssueLevelStruct
 */
export type RiskDataServicePjRiskIssueLevelStruct = {
  /** 超征兆问题等级 */
  symptomaticValueLevel?: "HIGH" | "MID" | "LOW";
  /** 异常问题等级 */
  exceptionValueLevel?: "HIGH" | "MID" | "LOW";
  special?: RiskDataServiceSpecialPjRiskIssueLevelStruct;
};

/**
 * OpenAPI 组件类型：IPageRiskEventInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPageRiskEventInstanceVo
 */
export type RiskDataServiceIPageRiskEventInstanceVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceRiskEventInstanceVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  maxLimit?: number;
  /** countId */
  countId?: string;
  pages?: number;
};

/**
 * OpenAPI 组件类型：SpaceTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SpaceTreeNodeVo
 */
export type RiskDataServiceSpaceTreeNodeVo = {
  /** 空间数量 */
  objCount: number;
  /** 父节点编码 */
  parentCode?: string;
  /** 节点唯一键 */
  uuid?: string;
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceSpaceTreeNodeVo[];
};

/**
 * OpenAPI 组件类型：PjRiskInstanceFilterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskInstanceFilterVo
 */
export type RiskDataServicePjRiskInstanceFilterVo = {
  /** 所在建筑楼层 */
  buildingFloors?: RiskDataServiceBuildingFloorInstanceVo[];
  /** 所在空间 */
  spaces?: RiskDataServiceSpaceVo[];
  /** 空间功能类型 */
  meoiSpaceTypes?: RiskDataServiceSpaceTreeNodeVo[];
};

/**
 * OpenAPI 组件类型：MapImportanceDegreeEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapImportanceDegreeEnum
 */
export type RiskDataServiceMapImportanceDegreeEnum = {
  "0"?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
};

/**
 * OpenAPI 组件类型：CategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryVo
 */
export type RiskDataServiceCategoryVo = {
  /** 风险分类标签id */
  id?: number;
  /** 风险分类标签名称 */
  name?: string;
  /** 处理专业id */
  dealMajorId?: number;
  /** 是否被使用,如果在用则不能删 */
  inUsed?: boolean;
};

/**
 * OpenAPI 组件类型：PjDealMajorWithCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorWithCategoryVo
 */
export type RiskDataServicePjDealMajorWithCategoryVo = {
  /** 处理专业id */
  dealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
  /** 风险分类标签 */
  categoryList?: RiskDataServiceCategoryVo[];
};

/**
 * OpenAPI 组件类型：IotRiskEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRiskEventVo
 */
export type RiskDataServiceIotRiskEventVo = {
  /** 风险事件id */
  riskEventId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
};

/**
 * OpenAPI 组件类型：IotRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRiskVo
 */
export type RiskDataServiceIotRiskVo = {
  /** 风险点名称 */
  pjRiskName?: string;
  /** 风险点业务ID */
  pjRiskBusinessId?: string;
  /** 风险事件 */
  riskEvents?: RiskDataServiceIotRiskEventVo[];
};

/**
 * OpenAPI 组件类型：IotAlertRulePointVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRulePointVo
 */
export type RiskDataServiceIotAlertRulePointVo = {
  /** 信息点编码 */
  code?: string;
  /** 信息点名称 */
  name?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 对象类类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
};

/**
 * OpenAPI 组件类型：TimeConditionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TimeConditionVo
 */
export type RiskDataServiceTimeConditionVo = {
  /** 单位 */
  unitOfTime?: "SECOND" | "MINUTE" | "HOUR" | "DAY";
  /** 时间 */
  value?: number;
};

/**
 * OpenAPI 组件类型：FormulaIotLeafConditionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FormulaIotLeafConditionVo
 */
export type RiskDataServiceFormulaIotLeafConditionVo = {
  /** 计算公式 */
  principal?: RiskDataServiceFormula;
  /** 运算符 */
  operator?: "PLUS" | "REDUCE" | "MULTIPLICATION" | "DIVISION" | "GREATERTHANOREQUALTO" | "GREATERTHAN" | "EQUALTO" | "LESSTHANOREQUALTO" | "LESSTHAN" | "FORWARD" | "AFTER";
  /** 目标参数名称 */
  targetParamName?: string;
  /** 持续时长 */
  duration?: RiskDataServiceTimeConditionVo;
  /** 条件值 */
  conditionValue?: number;
  /** 公式所用参数 */
  relatedPoiInfo?: RiskDataServiceIotParameterVo[];
};

/**
 * OpenAPI 组件类型：BDTPParameterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BDTPParameterVo
 */
export type RiskDataServiceBDTPParameterVo = {
  /** 关联编码 */
  relCode?: string;
  /** 图关系编码 */
  graphCode?: JsonValue;
  /** 对象类编码 */
  classCode?: JsonValue;
  /** 关联类型 */
  relationDirection?: "FROM_TO" | "TO_FROM" | "BOTH";
  /** 是否事件型 */
  event?: JsonValue;
  /** 对象实例ID */
  rwdInstanceId?: JsonValue;
  /** 信息点编码 */
  infoCode?: JsonValue;
  name?: JsonValue;
  unit?: JsonValue;
  origDataType?: JsonValue;
  enumValues?: JsonValue;
  uk?: JsonValue;
};

/**
 * OpenAPI 组件类型：WorkCalendarParameterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkCalendarParameterVo
 */
export type RiskDataServiceWorkCalendarParameterVo = {
  INFO_CODE_ACSEASON?: string;
  /** 信息点:营业时间 */
  INFO_CODE_OPENING?: string;
  /** 工作历编码 */
  code?: string;
  /** 工作历类型 */
  workCalType?: "AC_SEASON" | "OPENING";
  /** 枚举值映射关系 */
  enumValues?: RiskDataServiceMapString;
};

/**
 * OpenAPI 组件类型：IotParameterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotParameterVo
 */
export type RiskDataServiceIotParameterVo = {
  /** 参数类型 */
  type?: "STATIC" | "TWIN" | "WORK_CALENDAR";
  /** BDTP信息点 */
  bdtpParameterDto?: RiskDataServiceBDTPParameterVo;
  /** 工作历信息点 */
  workCalendarParameterDto?: RiskDataServiceWorkCalendarParameterVo;
  uk?: string;
};

/**
 * OpenAPI 组件类型：EventLeafConditionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EventLeafConditionVo
 */
export type RiskDataServiceEventLeafConditionVo = {
  /** 参数信息呢 */
  iotParameter?: RiskDataServiceIotParameterVo;
};

/**
 * OpenAPI 组件类型：ConditionValueVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ConditionValueVo
 */
export type RiskDataServiceConditionValueVo = {
  /** 值 */
  value?: string;
  /** 单位 */
  unit?: string;
};

/**
 * OpenAPI 组件类型：SimpleConditionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleConditionVo
 */
export type RiskDataServiceSimpleConditionVo = {
  /** 运算符号 */
  operator?: "PLUS" | "REDUCE" | "MULTIPLICATION" | "DIVISION" | "GREATERTHANOREQUALTO" | "GREATERTHAN" | "EQUALTO" | "LESSTHANOREQUALTO" | "LESSTHAN" | "FORWARD" | "AFTER";
  /** 条件信息 */
  conditionValue?: RiskDataServiceConditionValueVo;
};

/**
 * OpenAPI 组件类型：SimpleValueLeafConditionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleValueLeafConditionVo
 */
export type RiskDataServiceSimpleValueLeafConditionVo = {
  iotParameter?: RiskDataServiceIotParameter;
  conditionValue?: JsonValue;
};

/**
 * OpenAPI 组件类型：NoneLeafConditionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/NoneLeafConditionVo
 */
export type RiskDataServiceNoneLeafConditionVo = {
  subConditions?: RiskDataServiceSubConditions[];
  subConditionRelShip?: JsonValue;
};

/**
 * OpenAPI 组件类型：ConditionStatusVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ConditionStatusVo
 */
export type RiskDataServiceConditionStatusVo = {
  /** 树状态 */
  status?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
  /** 节点别名 */
  nodeAlies?: string;
  /** 节点状态描述 */
  nodeStatusDescription?: string;
};

/**
 * OpenAPI 组件类型：IotConditionTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotConditionTreeVo
 */
export type RiskDataServiceIotConditionTreeVo = {
  /** 公式计算叶子节点信息 */
  formulaCondition?: RiskDataServiceFormulaIotLeafConditionVo;
  /** 事件型叶子节点信息 */
  eventCondition?: RiskDataServiceEventLeafConditionVo;
  /** 普通值型叶子节点信息 */
  simpleValueCondition?: RiskDataServiceSimpleValueLeafConditionVo;
  /** 非叶子节点信息 */
  noneLeafConditionDto?: RiskDataServiceNoneLeafConditionVo;
  /** condition的类型 */
  conditionType?: "NO_LEAF" | "FORMULA_LEAF" | "EVENT_LEAF" | "SIMPLE_VAL" | "UN_VALID";
  /** 是否触发 */
  trigger?: JsonValue;
  /** 条件状态信息 */
  conditionStatusDto?: JsonValue;
  /** 是否是树,当否的时候等同于叶子节点 */
  tree?: JsonValue;
};

/**
 * OpenAPI 组件类型：TopConditionGroupVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TopConditionGroupVo
 */
export type RiskDataServiceTopConditionGroupVo = {
  /** 判定条件组 */
  judgementCondition?: RiskDataServiceIotConditionTreeVo;
  /** 触发条件组 */
  triggerCondition?: RiskDataServiceIotConditionTreeVo[];
  /** 条件组名称 */
  conditionGroupName?: string;
};

/**
 * OpenAPI 组件类型：IotConditionGroupsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotConditionGroupsVo
 */
export type RiskDataServiceIotConditionGroupsVo = {
  /** 报警条件分组 */
  iotConditions?: RiskDataServiceTopConditionGroupStruct[];
  /** 报警分组类型 */
  iotGroupType?: "ALARM" | "RELIEVE";
};

/**
 * OpenAPI 组件类型：IotAlertRuleGroupVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleGroupVo
 */
export type RiskDataServiceIotAlertRuleGroupVo = {
  /** 分组ID */
  id?: number;
  /** 报警规则ID */
  iotAlertRuleId?: number;
  /** 应用设备设施对象实例数量 */
  instanceNum?: number;
  /** 已停用实例数量（发布态才使用） */
  disableInstanceNum?: number;
  /** 已停用实例列表(只返回2条数据)（发布态才使用） */
  disableInstances?: RiskDataServiceIotRwdInstanceVo[];
  /** 报警条件分组 */
  triggerConditions?: RiskDataServiceTopConditionGroupStruct[];
  /** 解除条件分组 */
  releaseConditions?: RiskDataServiceTopConditionGroupStruct[];
  /** 设备设施实例ID */
  rwdInstanceIds?: string[];
  /** 策略事项-关联的对象实例，是否存在无法评估风险状态的实例 */
  existUnableAssessInstance?: boolean;
  /** 风险点是否冲突 */
  riskConflict?: boolean;
};

/**
 * OpenAPI 组件类型：IotAlertRuleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleVo
 */
export type RiskDataServiceIotAlertRuleVo = {
  /** 规则ID */
  id?: number;
  /** 规则名称 */
  name?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 知识措施ID */
  klbMeasureId?: number;
  /** 风险点信息 */
  iotRisk?: RiskDataServiceIotRiskVo;
  /** 应用时间（可选态才使用） */
  applyTime?: string;
  /** 核实要求类型 */
  verifyType?: "NONE" | "APP" | "APP_WEB" | "WEB";
  /** 是否已发布过（编辑态才使用） */
  published?: boolean;
  /** 发布变更(红点)标记（编辑态才会赋值） */
  publishChanged?: boolean;
  /** 可用实例数量（编辑态才使用） */
  suitableInstanceNum?: number;
  /** 可用实例新增数量（编辑态才使用） */
  suitableInstanceAddNum?: number;
  /** 报警分组 */
  iotAlertRuleGroups?: RiskDataServiceIotAlertRuleGroupVo[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleTreeVo
 */
export type RiskDataServiceIotAlertRuleTreeVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OTHER_EQUIP" | "OBJECT_CLASS";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassIotAlertRuleTreeNodeEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServiceIotAlertRuleTreeNodeDataVo[];
  /** 可用实例新增标记（红点，仅编辑态树节点使用） */
  changeMark?: boolean;
};

/**
 * OpenAPI 组件类型：IotAlertRulePointQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRulePointQryDto
 */
export type RiskDataServiceIotAlertRulePointQryDto = {
  /** 对象类编码 */
  classCode?: string;
  /** 信息点编码 */
  code?: string;
};

/**
 * OpenAPI 组件类型：IotAlertRuleQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleQryDto
 */
export type RiskDataServiceIotAlertRuleQryDto = {
  /** 是否主动管理 */
  follow?: boolean;
  /** 仅看新增设备设施的报警规则（编辑态） */
  onlyNew?: boolean;
  /** 仅看存在停用设备设施的报警规则（发布态） */
  onlyDisable?: boolean;
};

/**
 * OpenAPI 组件类型：IotAlertRulePointTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRulePointTreeVo
 */
export type RiskDataServiceIotAlertRulePointTreeVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "MEOI_SPACE_TYPE";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassTreeNodeEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServiceIotAlertRulePointVo[];
};

/**
 * OpenAPI 组件类型：RuleGroupInstanceModifyDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RuleGroupInstanceModifyDto
 */
export type RiskDataServiceRuleGroupInstanceModifyDto = {
  /** 规则id */
  alterRuleId: number;
  /** 是否选择所有 */
  chooseAll?: boolean;
  /** 选择的实例id */
  selectedInstanceIds?: string[];
  /** 需要排除的实例id（全选取消选中时传入） */
  excludeInstanceIds?: string[];
  /** 目标规则分组id */
  targetRuleGroupId?: number;
  /** 筛选条件 */
  qryDto?: RiskDataServiceIotAlertRuleSuitableInstancePageQryDto;
};

/**
 * OpenAPI 组件类型：PjRiskSuitAbleStatisticsDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskSuitAbleStatisticsDto
 */
export type RiskDataServicePjRiskSuitAbleStatisticsDto = {
  suitAblePjRiskInstanceBusinessIdSize?: number;
  allSuitAblePjRiskInstanceBusinessIdSize?: number;
  suitAbleKlbRiskEventIdSize?: number;
  allKlbRiskEventIdSize?: number;
};

/**
 * OpenAPI 组件类型：PjRiskSuitAbleTestVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskSuitAbleTestVo
 */
export type RiskDataServicePjRiskSuitAbleTestVo = {
  rwdInstanceId?: string;
  klbRiskEventName?: string;
  workCondition?: string[];
  instanceTreeId?: number[];
};

/**
 * OpenAPI 组件类型：WorkOrderActionDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkOrderActionDto
 */
export type RiskDataServiceWorkOrderActionDto = {
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
  orderState?: "GRAB_ORDERS" | "ASSIGNMENT_IN_PROGRESS" | "AWAITING_FOR_PICKUP" | "IN_EXECUTION" | "AWAITING_PLAN_REVIEW" | "IN_APPROVAL" | "COMPLETED_LATE" | "COMPLETED_ON_TIME" | "TERMINATED_ABNORMALLY" | "DELETED";
  /** 关联工单id集合 */
  exceptionIdList?: number[];
};

/**
 * OpenAPI 组件类型：MapBigDecimal
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapBigDecimal
 */
export type RiskDataServiceMapBigDecimal = {
  "0"?: number;
};

/**
 * OpenAPI 组件类型：PhysicalQuantityRulerDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PhysicalQuantityRulerDto
 */
export type RiskDataServicePhysicalQuantityRulerDto = {
  /** 较差值阈值 */
  badThreshold?: number;
  /** 一般值阈值阈值 */
  normalThreshold?: number;
  /** 较好值阈值 */
  goodThreshold?: number;
  /** 执行阈值 */
  executionThreshold?: number;
  /** 诊断阈值 */
  diagnosticThreshold?: number;
};

/**
 * OpenAPI 组件类型：PhysicalThresholdDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PhysicalThresholdDto
 */
export type RiskDataServicePhysicalThresholdDto = {
  /** 执行阈值百分比 */
  executionThresholdPercent?: number;
  /** 诊断阈值百分比 */
  diagnosticThresholdPercent?: number;
  theBiggerTheBetter?: boolean;
};

/**
 * OpenAPI 组件类型：Param
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Param
 */
export type RiskDataServiceParam = {
  a?: number;
  b?: number;
  n?: number;
};

/**
 * OpenAPI 组件类型：Sample
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Sample
 */
export type RiskDataServiceSample = {
  x0?: number;
  y0?: number;
  x1?: number;
  y1?: number;
};

/**
 * OpenAPI 组件类型：Inflection
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Inflection
 */
export type RiskDataServiceInflection = {
  x?: number;
  y?: number;
};

/**
 * OpenAPI 组件类型：PreFuncStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PreFuncStruct
 */
export type RiskDataServicePreFuncStruct = {
  /** 函数类型 */
  type?: number;
  /** 参数 */
  param?: RiskDataServiceParam;
  /** 一类才有(平均多少天失效) */
  mttf?: number;
  /** 二类有(起始时元知识物理量,寿命时元知识物理量) */
  samples?: RiskDataServiceSample;
  /** 拐点 */
  inflection?: RiskDataServiceInflection;
};

/**
 * OpenAPI 组件类型：TreeNodeExtra
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TreeNodeExtra
 */
export type RiskDataServiceTreeNodeExtra = {
  /** 备用数量(hub用) */
  reserveCount?: number;
  /** 实例化物理量 */
  instancePhysicalQuantities?: RiskDataServiceMapBigDecimal;
  /** 特征物理量标尺(二类) */
  physicalQuantityRuler?: RiskDataServicePhysicalQuantityRulerDto;
  /** 元知识物理量标尺(二类) */
  metaPhysicalQuantityRuler?: RiskDataServicePhysicalQuantityRulerDto;
  /** 特征物理量阈值（二类） */
  physicalThreshold?: RiskDataServicePhysicalThresholdDto;
  /** hub系数 */
  hubBeta?: number;
  /** 匹配的先验曲线 */
  preFunc?: RiskDataServicePreFuncStruct;
};

/**
 * OpenAPI 组件类型：InstanceTreeNodeDebugger
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceTreeNodeDebugger
 */
export type RiskDataServiceInstanceTreeNodeDebugger = {
  id?: number;
  description?: string;
  instanceId?: string;
  instanceName?: string;
  entityName?: string;
  entityType?: string;
  extra?: RiskDataServiceTreeNodeExtra;
  children?: RiskDataServiceInstanceTreeNodeDebugger[];
};

/**
 * OpenAPI 组件类型：RefreshDismantleTreeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RefreshDismantleTreeDto
 */
export type RiskDataServiceRefreshDismantleTreeDto = {
  classCodes?: string[];
};

/**
 * OpenAPI 组件类型：RecordExtInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RecordExtInfo
 */
export type RiskDataServiceRecordExtInfo = {
  /** 图片id集合 */
  pictureIds?: string[];
  /** 问题备注 */
  remark?: string;
  /** 措施id集合 */
  relatedMeasureIds?: string[];
  /** 关联视频集合 */
  videoIds?: string[];
  /** 工单核实类型 */
  verifyType?: "NONE" | "APP" | "APP_WEB" | "WEB";
  triggerInstanceId?: string;
  triggerClassCode?: string;
  /** 是否自维修 */
  selfRepair?: boolean;
};

/**
 * OpenAPI 组件类型：PjRiskImpactCategoryStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskImpactCategoryStruct
 */
export type RiskDataServicePjRiskImpactCategoryStruct = {
  id?: number;
  name?: string;
  categoryCrucial?: "PIVOTAL" | "OTHER";
};

/**
 * OpenAPI 组件类型：WorkOrderRepairAndChangeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkOrderRepairAndChangeDto
 */
export type RiskDataServiceWorkOrderRepairAndChangeDto = {
  /** 实例id */
  rwdInstanceId?: string;
  /** 可执行措施id */
  changeMeasureId?: number;
  repairTime?: string;
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  sourceId?: string;
  reporter?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderEvaluateRecordUploadDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkOrderEvaluateRecordUploadDto
 */
export type RiskDataServiceWorkOrderEvaluateRecordUploadDto = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  isDeleted?: number;
  version?: number;
  /** 租户id */
  groupCode?: string;
  /** 项目名称 */
  projectId?: string;
  /** 项目风险id */
  pjRiskBusinessId: string;
  /** 实例id */
  rwdInstanceId: string;
  pjRiskInstanceBusinessId?: string;
  /** 上报类型 */
  sourceType: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 上报类型 - 顾问或外部用户， 默认顾问 */
  workOrderUploadType?: "EXTERNAL_USER" | "CONSULTANT";
  /** 上报来源数据id */
  recordSourceId: string;
  /** 上报时间 */
  recordTime: string;
  /** 风险的状态 */
  riskStatus: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题描述 */
  recordDesc: string;
  /** 是否需核实 */
  needVerification?: boolean;
  executableMeasureId?: number;
  /** 是否为误报信息 */
  misstatement?: boolean;
  /** IOT与人工观测结果是否不一致 */
  iotMismatchManualObserve?: boolean;
  recordExtInfo?: RiskDataServiceRecordExtInfo;
  /** 异常事件编码 */
  exceptionEventId?: number;
  /** 用户报事单Id */
  workOrderCode?: string;
  /** 是否是异常事件原因 */
  reason: boolean;
  /** 关键事态性质&实际影响(项目风险影响类型)id */
  importantImpactCategories?: RiskDataServicePjRiskImpactCategoryStruct[];
  /** 新问题时抑制工单生成 */
  suppressWorkOrderIfFirst?: boolean;
  /** 是否为异常已修复(忽略冲突状态校验) */
  exceptionFixed?: boolean;
  workOrderRepairAndFixDtos?: RiskDataServiceWorkOrderRepairAndChangeDto[];
  /** 处理专业Id */
  pjDealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
  /** 是否人工确认 */
  manualConfirmed?: boolean;
  /** 实际发生时间 */
  actualHappenTime?: string;
};

/**
 * OpenAPI 组件类型：ProblemImportanceChangeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemImportanceChangeDto
 */
export type RiskDataServiceProblemImportanceChangeDto = {
  problemId?: number;
  importance?: string;
};

/**
 * OpenAPI 组件类型：ProblemDealMajorIdChangeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemDealMajorIdChangeDto
 */
export type RiskDataServiceProblemDealMajorIdChangeDto = {
  /** 问题id */
  problemId?: number;
  /** 处置专业id */
  dealMajorId?: number;
};

/**
 * OpenAPI 组件类型：ProblemSelfProblemDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemSelfProblemDto
 */
export type RiskDataServiceProblemSelfProblemDto = {
  problemId?: number;
  fault?: boolean;
};

/**
 * OpenAPI 组件类型：WorkOrderUploadAndRepairDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkOrderUploadAndRepairDto
 */
export type RiskDataServiceWorkOrderUploadAndRepairDto = {
  /** 状态变更记录 */
  workOrderEvaluateRecordUploadDtos?: RiskDataServiceWorkOrderEvaluateRecordUploadDto[];
  /** 异常事件ID */
  exceptionEventIds?: number[];
  /** 工单ID */
  workId?: string;
  /** 工单类型 */
  workType?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
  /** 工单状态 */
  workOrderStatus?: "GRAB_ORDERS" | "ASSIGNMENT_IN_PROGRESS" | "AWAITING_FOR_PICKUP" | "IN_EXECUTION" | "AWAITING_PLAN_REVIEW" | "IN_APPROVAL" | "COMPLETED_LATE" | "COMPLETED_ON_TIME" | "TERMINATED_ABNORMALLY" | "DELETED";
  /** 工单下所有异常问题暂不处理 */
  problemIds?: number[];
  /** 工单下误报问题ID */
  misstatementProblemIds?: number[];
  /** 问题状态变更 */
  problemImportanceChangeList?: RiskDataServiceProblemImportanceChangeDto[];
  /** 问题状态变更 */
  problemDealMajorChangeList?: RiskDataServiceProblemDealMajorIdChangeDto[];
  /** 问题状态变更 */
  problemSelfProblemList?: RiskDataServiceProblemSelfProblemDto[];
};

/**
 * OpenAPI 组件类型：RefreshTreeStatusDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RefreshTreeStatusDto
 */
export type RiskDataServiceRefreshTreeStatusDto = {
  riskEventBusinessIds?: number[];
  classCode?: string;
  instanceId?: string;
};

/**
 * OpenAPI 组件类型：MapSetLong
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapSetLong
 */
export type RiskDataServiceMapSetLong = {
  "0"?: number[];
};

/**
 * OpenAPI 组件类型：PlaceHolder
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PlaceHolder
 */
export type RiskDataServicePlaceHolder = {
  /** 对象实例Id */
  rwdInstanceId?: string;
  /** 信息点编码 */
  infoCode?: string;
};

/**
 * OpenAPI 组件类型：TargetFormula
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TargetFormula
 */
export type RiskDataServiceTargetFormula = {
  /** 模板 */
  template?: string;
  /** 占位符 */
  placeHolders?: RiskDataServicePlaceHolder[];
};

/**
 * OpenAPI 组件类型：OtherObject9
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OtherObject9
 */
export type RiskDataServiceOtherObject9 = {
  /** 对象类编码 */
  classCode?: JsonValue;
  /** 对象类名称 */
  className?: JsonValue;
  /** 对象实例ID */
  rwdInstanceId?: JsonValue;
  /** 对象实例名称 */
  rwdInstanceName?: JsonValue;
};

/**
 * OpenAPI 组件类型：ObjectInfoCode
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectInfoCode
 */
export type RiskDataServiceObjectInfoCode = {
  /** 对象实例ID */
  rwdInstanceId?: string;
  /** 名称 */
  name?: string;
  /** 编码 */
  code?: string;
  /** 值类型 */
  valueType?: "ENUM" | "NUM";
  /** 信息点类型 */
  type?: "STATIC" | "TWIN" | "WORK_CALENDAR";
  /** 单位 */
  unit?: string;
  /** 枚举映射值 */
  valueEnums?: RiskDataServiceMapString;
  /** 其他对象(观测对象信息) */
  otherObject?: RiskDataServiceOtherObject;
};

/**
 * OpenAPI 组件类型：TargetParamVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TargetParamVo
 */
export type RiskDataServiceTargetParamVo = {
  /** 名称 */
  name?: string;
  /** 公式 */
  formula?: RiskDataServiceTargetFormula;
  /** 类型 */
  valueType?: "ENUM" | "NUM";
  /** 单位 */
  unit?: string;
  /** 信息点列表 */
  infoCodes?: RiskDataServiceObjectInfoCode[];
  /** 唯一键 */
  targetParamKey?: string;
};

/**
 * OpenAPI 组件类型：InfoPoint
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InfoPoint
 */
export type RiskDataServiceInfoPoint = {
  /** 信息点编码 */
  code?: string;
  /** 信息点值 */
  value?: string;
  /** 对象实例ID */
  rwdInstanceId?: string;
  /** 唯一key */
  uk?: string;
};

/**
 * OpenAPI 组件类型：DataPoint
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DataPoint
 */
export type RiskDataServiceDataPoint = {
  /** 数据时间点 */
  dataPointTime?: string;
  /** 数据点值 */
  dataValue?: string;
  /** 数据点位状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 数据点类型 */
  dataPointType?: "TRIGGER_BEFORE" | "TRIGGER_POINT" | "RELEASE_BEFORE" | "RELEASE_POINT" | "COMMON_POINT";
  /** 持续时长(单位秒) */
  conditionValue?: number;
  /** 信息点集合 */
  infoPoints?: RiskDataServiceInfoPoint[];
};

/**
 * OpenAPI 组件类型：IotRuleTargetParamCalDataPointVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRuleTargetParamCalDataPointVo
 */
export type RiskDataServiceIotRuleTargetParamCalDataPointVo = {
  /** 目标参数信息 */
  targetParam?: RiskDataServiceTargetParamVo;
  /** 触发报警数据点位信息 */
  dataPoints?: RiskDataServiceDataPoint[];
};

/**
 * OpenAPI 组件类型：MonitorInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MonitorInfo
 */
export type RiskDataServiceMonitorInfo = {
  /** 对象实例ID */
  rwdInstanceId?: string;
  /** 对象实例ID */
  rwdName?: string;
  /** 对象编码 */
  classCode?: string;
};

/**
 * OpenAPI 组件类型：ManualRectifyReportVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ManualRectifyReportVo
 */
export type RiskDataServiceManualRectifyReportVo = {
  /** 上报人ID */
  reporterId?: string;
  /** 上报人名称 */
  reporterName?: string;
  /** 上报时间 */
  reportTime?: string;
  /** 备注 */
  remark?: string;
  /** 问题描述 */
  problemDesc?: string;
  /** 问题图片列表 */
  imageIds?: string[];
};

/**
 * OpenAPI 组件类型：ObservationReportVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObservationReportVo
 */
export type RiskDataServiceObservationReportVo = {
  /** 上报人ID */
  reporterId?: string;
  /** 上报人名称 */
  reporterName?: string;
  /** 上报时间 */
  reportTime?: string;
  /** 备注 */
  remark?: string;
  /** 问题描述 */
  problemDesc?: string;
  /** 问题图片列表 */
  imageIds?: string[];
  /** 关联工单ID */
  workId?: string;
  /** 关联工单名称 */
  workName?: string;
  /** 关联工单类型 */
  type?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE";
};

/**
 * OpenAPI 组件类型：OpsIotReportVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OpsIotReportVo
 */
export type RiskDataServiceOpsIotReportVo = {
  /** 上报人ID */
  reporterId?: string;
  /** 上报人名称 */
  reporterName?: string;
  /** 上报时间 */
  reportTime?: string;
  /** 备注 */
  remark?: string;
  /** 问题描述 */
  problemDesc?: string;
  /** 问题图片列表 */
  imageIds?: string[];
  /** 上报记录ID */
  recordId?: number;
  /** 上报状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 报警原因 */
  reason?: string;
};

/**
 * OpenAPI 组件类型：targetParam
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/targetParam
 */
export type RiskDataServiceTargetParam = {
  /** 参数UK */
  targetParamUk?: string;
  /** 参数名称 */
  paramName?: string;
  /** 信息点编码 */
  code?: string;
  /** 信息点单位 */
  unit?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 信息点类型 */
  type?: "STATIC" | "TWIN" | "WORK_CALENDAR";
  /** 工作历类型 */
  workCalType?: "AC_SEASON" | "OPENING";
  /** 枚举值映射关系 */
  enumValues?: RiskDataServiceMapString;
  /** 是否为枚举类型 */
  enumParam?: boolean;
  /** 是否为公式型参数 */
  formula?: boolean;
  /** 是否为事件型参数 */
  event?: boolean;
  /** 计算公式 */
  principal?: RiskDataServiceFormula;
  /** 对象实例ID */
  rwdInstanceId?: string;
  /** 对象实例名称 */
  rwdInstanceName?: string;
  /** 公式所用参数 */
  relatedPoiInfo?: RiskDataServiceIotParameterStruct[];
};

/**
 * OpenAPI 组件类型：iotParameter
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/iotParameter
 */
export type RiskDataServiceIotParameter = {
  /** 参数类型 */
  type?: "STATIC" | "TWIN" | "WORK_CALENDAR";
  /** BDTP信息点 */
  bdtpParameterDto?: JsonValue;
  /** 工作历信息点 */
  workCalendarParameterDto?: JsonValue;
  /** 唯一标识 */
  uk?: JsonValue;
};

/**
 * OpenAPI 组件类型：iotConditions
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/iotConditions
 */
export type RiskDataServiceIotConditions = {
  /** 判定条件组 */
  judgementCondition?: RiskDataServiceIotConditionTreeVo;
  /** 触发条件组 */
  triggerCondition?: RiskDataServiceIotConditionTreeVo[];
  /** 条件组名称 */
  conditionGroupName?: JsonValue;
};

/**
 * OpenAPI 组件类型：IotInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotInfo
 */
export type RiskDataServiceIotInfo = {
  /** iot信息点编码 */
  code?: string;
  /** iot参数名称 */
  name?: string;
  /** iot参数值 */
  value?: string;
  /** iot参数单位 */
  unit?: string;
  /** 上报时间 */
  reportTime?: string;
  /** 是否为枚举 */
  isEnumType?: boolean;
  isEvent?: boolean;
};

/**
 * OpenAPI 组件类型：ExceptionEventSimpleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventSimpleVo
 */
export type RiskDataServiceExceptionEventSimpleVo = {
  /** 异常事件ID */
  id?: number;
  /** 异常事件状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 异常事件编号 */
  eventNumber?: string;
};

/**
 * OpenAPI 组件类型：EEProblemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemVo
 */
export type RiskDataServiceEEProblemVo = {
  /** 问题id */
  id?: number;
  /** 问题描述 */
  problemDesc?: string;
  /** 项目风险id */
  pjRiskBusinessId?: string;
  /** 项目实例风险id */
  pjRiskInstanceBusinessId?: string;
  /** 实例信息 */
  instance?: RiskDataServiceEEInstanceVo;
  /** 问题状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 是否外部客户(是否用户报事) */
  externalCustomer?: boolean;
  /** 问题发生次数 */
  count?: number;
  /** 持续时长(分钟) */
  duration?: number;
  /** 目标完成时间 */
  targetFinishTime?: string;
  /** 超出目标时间(分钟)(超出目标：大于0，距离剩余时间：小于0) */
  controlDuration?: number;
  /** 事态性质&实际影响(项目风险影响类型) */
  impacts?: RiskDataServicePjRiskImpactInstVo[];
  /** 事态性质&潜在影响(项目风险影响类型) */
  potentialImpactCategories?: RiskDataServiceEEPjRiskImpactCategoryVo[];
  /** iot参数 */
  iotInfos?: RiskDataServiceIotInfoStruct[];
  /** 是否暂不处理 */
  noTreatment?: boolean;
  /** 是否为需核实节点，true为需核实 */
  needVerification?: boolean;
  /** 该问题涉及的异常事件集合 */
  relExceptionEvents?: RiskDataServiceExceptionEventSimpleVo[];
  /** 最后一条上报记录 */
  lastRecord?: RiskDataServiceEEProblemStatusRecordVo;
  /** 是否始发问题 */
  isOrigin?: JsonValue;
  /** 是否为误报信息 */
  misstatement?: JsonValue;
  /** 误报发生次数 */
  misstatementCount?: JsonValue;
  problemId?: JsonValue;
  /** 摄像头列表 */
  problemCameras?: JsonValue;
};

/**
 * OpenAPI 组件类型：EEProblemItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemItemVo
 */
export type RiskDataServiceEEProblemItemVo = {
  /** 问题集合 */
  problems?: RiskDataServiceEEProblemVo[];
  /** 原因集合 */
  reasons?: RiskDataServiceEEProblemVo[];
};

/**
 * OpenAPI 组件类型：TargetParam
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TargetParam
 */
export type RiskDataServiceTargetParam2 = {
  /** 目标参数唯一Key */
  targetParamKey?: string;
  /** 目标参数名称 */
  targetParamName?: string;
};

/**
 * OpenAPI 组件类型：IotAlertRuleTargetParamVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleTargetParamVo
 */
export type RiskDataServiceIotAlertRuleTargetParamVo = {
  /** 规则ID */
  ruleId?: number;
  /** IOT规则名称 */
  ruleName?: string;
  /** 规则分组ID */
  ruleGroupId?: number;
  /** 目标参数列表 */
  targetParams?: RiskDataServiceTargetParam2[];
};

/**
 * OpenAPI 组件类型：EEProblemDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemDetailVo
 */
export type RiskDataServiceEEProblemDetailVo = {
  /** 问题描述 */
  problemDesc?: string;
  /** 实例风险ID */
  pjRiskInstanceBusinessId?: string;
  /** 实例信息 */
  instance?: RiskDataServiceEEInstanceVo;
  /** 问题状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 持续时长(分钟) */
  duration?: number;
  /** 状态变更时间 */
  lastUpdateTime?: string;
  /** 超出目标时间(分钟)(超出目标：大于0，距离剩余时间：小于0) */
  controlDuration?: number;
  /** 事态性质&实际影响(项目风险影响类型) */
  impactCategories?: RiskDataServiceEEPjRiskImpactCategoryVo[];
  /** 事态性质&潜在影响(项目风险影响类型) */
  potentialImpactCategories?: RiskDataServiceEEPjRiskImpactCategoryVo[];
  /** IOT与人工观测结果是否不一致 */
  iotMismatchManualObserve?: boolean;
  /** iot参数 */
  iotInfos?: RiskDataServiceIotInfoStruct[];
  /** IOT报警规则 */
  iotRuleDtoList?: RiskDataServiceIotAlertRuleTargetParamVo[];
};

/**
 * OpenAPI 组件类型：InfoPoint10
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InfoPoint10
 */
export type RiskDataServiceInfoPoint10 = {
  /** 信息点编码 */
  infoPointCode?: string;
  /** 信息点名称 */
  infoPointName?: string;
  /** 信息点值 */
  infoPointValue?: string;
  /** 信息点值单位 */
  infoPointUnit?: string;
};

/**
 * OpenAPI 组件类型：DataPoint11
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DataPoint11
 */
export type RiskDataServiceDataPoint11 = {
  /** 数据时间点 */
  dataPointTime?: string;
  "数据点类型"?: "TRIGGER_BEFORE" | "TRIGGER_POINT" | "RELEASE_BEFORE" | "RELEASE_POINT" | "COMMON_POINT";
  "枚举/数值：1-枚举，2-数值"?: "ENUM" | "NUM";
  /** 数据点值 */
  dataValue?: string;
  "信息点集合"?: RiskDataServiceInfoPoint10[];
  "持续时长"?: RiskDataServiceConditionValue;
  /** 数据点位状态 */
  dataStatus?: "NORMAL" | "WARN" | "EXCEPTION";
};

/**
 * OpenAPI 组件类型：OtherObjectRelationship
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OtherObjectRelationship
 */
export type RiskDataServiceOtherObjectRelationship = {
  /** 关联对象类编码 */
  classCode?: JsonValue;
  /** 图编码 */
  graphCode?: JsonValue;
  /** 边编码 */
  relCode?: JsonValue;
  /** 边名称 */
  name?: JsonValue;
  /** 过程参数：节点实体对象类（隐患对象类） -> 观测对象类
隐患对象在bdtp关系中的方向：FROM、TO、BOTH_SIDE */
  relationDirection?: "FROM_TO" | "TO_FROM" | "BOTH";
};

/**
 * OpenAPI 组件类型：PointInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PointInfo
 */
export type RiskDataServicePointInfo = {
  /** 对象id */
  objectId?: string;
  /** 类编码 */
  classCode?: JsonValue;
  /** 信息点编码 */
  infoPointCode?: JsonValue;
  /** 是否工作历信息点 */
  isWorkCalendar?: JsonValue;
  /** 信息点名称 */
  infoPointName?: JsonValue;
  /** 信息点值 */
  infoPointValue?: JsonValue;
  /** 信息点类型 */
  numOrBoolEnum?: JsonValue;
  /** 是否静态信息点 */
  staticInfo?: JsonValue;
  /** 是否为其他对象信息点 */
  otherObjectPoint?: JsonValue;
  /** 是否是事件型信息点 */
  event?: JsonValue;
  /** 信息点为“其他对象”时跟其他对象的关联关系 */
  relationship?: JsonValue;
  /** 上报时间,实际业务不需要传 */
  reportTime?: JsonValue;
};

/**
 * OpenAPI 组件类型：IotAlertInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertInfoVo
 */
export type RiskDataServiceIotAlertInfoVo = {
  /** 上报记录ID */
  recordId?: number;
  /** 对象实例id */
  objectId?: string;
  /** 上报时间 */
  reportTime?: string;
  /** IOT报警解释信息 */
  alarmExplanation?: string;
  /** 规则编码 */
  ruleCode?: string;
  "数据点"?: RiskDataServiceDataPoint[];
  /** 信息点编码 */
  infoPoints?: string[];
  /** 工况要求与报警条件 */
  operatingAndAlarm?: RiskDataServiceOperatingAndAlarm;
  /** 报警规则分组 */
  iotAlertRuleGroup?: JsonValue;
  /** 节点状态 */
  feedbackResults?: JsonValue;
  /** 数据类型 */
  numOrBool?: "ENUM" | "NUM";
  /** 监测时间 */
  startUpdateTime?: JsonValue;
  "措施过程参数"?: JsonValue;
};

/**
 * OpenAPI 组件类型：subConditions
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/subConditions
 */
export type RiskDataServiceSubConditions = {
  /** 公式计算叶子节点信息 */
  formulaCondition?: RiskDataServiceFormulaIotLeafConditionVo;
  /** 事件型叶子节点信息 */
  eventCondition?: RiskDataServiceEventLeafConditionVo;
  /** 普通值型叶子节点信息 */
  simpleValueCondition?: JsonValue;
  /** 非叶子节点信息 */
  noneLeafConditionDto?: JsonValue;
  /** condition的类型 */
  conditionType?: "NO_LEAF" | "FORMULA_LEAF" | "EVENT_LEAF" | "SIMPLE_VAL" | "UN_VALID";
};

/**
 * OpenAPI 组件类型：records
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/records
 */
export type RiskDataServiceRecords = {
  /** 状态记录ID */
  id?: number;
  /** 节点反馈结果 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 状态更新时间 */
  statusUpdateTime?: string;
  /** 是否为误报信息 */
  misstatement?: boolean;
  /** IOT与人工观测结果是否不一致 */
  iotMismatchManualObserve?: boolean;
  /** 记录类型 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 工单上传类型 */
  workOrderUploadType?: "EXTERNAL_USER" | "CONSULTANT";
  /** 异常上报 */
  incidentReport?: RiskDataServiceIncidentReportVo;
  /** IOT监测 */
  iotReport?: RiskDataServiceIotRecordInfoVo;
  /** 人工修改 */
  manualReport?: JsonValue;
  /** 人工观测（工单） */
  observationReport?: JsonValue;
  /** 数据监控系统(Ops-IOT) */
  opsIotReport?: JsonValue;
};

/**
 * OpenAPI 组件类型：PageEEProblemStatusRecordVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PageEEProblemStatusRecordVo
 */
export type RiskDataServicePageEEProblemStatusRecordVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceEEProblemStatusRecordVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
};

/**
 * OpenAPI 组件类型：PostInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PostInfoVo
 */
export type RiskDataServicePostInfoVo = {
  /** 岗位id */
  postId?: string;
  /** 岗位名称 */
  postName?: string;
};

/**
 * OpenAPI 组件类型：PersonInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PersonInfoVo
 */
export type RiskDataServicePersonInfoVo = {
  /** 人员id */
  personId?: string;
  /** 人员名称 */
  personName?: string;
  /** 岗位信息 */
  postInfos?: RiskDataServicePostInfoVo[];
};

/**
 * OpenAPI 组件类型：EEProblemStaticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemStaticVo
 */
export type RiskDataServiceEEProblemStaticVo = {
  problemId?: number;
  /** 问题状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题描述 异常变正常时不改别名
问题名称,本地的 */
  problemName?: string;
  /** 问题描述，工单 */
  problemDesc?: string;
  /** 报警原因 */
  recordReason?: string[];
  /** 异常始发时间
问题开始时间 */
  startTime?: string;
  /** 实例id 相关数据在问题实体上查
设备实例id */
  rwdInstanceId?: string;
  /** 设备实例名称 */
  rwdInstanceName?: string;
  /** 问题解决状态
(问题解决状态)问题是否解决 */
  finished?: boolean;
  /** (处理措施(关联排查处理工单中维修方案的任务名称) */
  taskNames?: string[];
  /** 问题实际解决时间(最近一次切变为“正常”的时间) */
  actualSolveTime?: string;
  /** 安保人员(工单备注) */
  workOrderRemark?: string;
  /** 执行人 工单
执行人（处理人员） */
  executePersonInfos?: RiskDataServicePersonInfoVo[];
  /** 审批人 */
  approvePersonInfos?: RiskDataServicePersonInfoVo[];
  /** 是否为误报问题 */
  misstatement?: boolean;
  /** 实际发生时间 */
  actualHappenTime?: string;
  /** 上报人 */
  reporter?: RiskDataServicePersonInfoVo[];
  /** 异常事件编码 */
  eventNumbers?: string[];
};

/**
 * OpenAPI 组件类型：EEProblemStaticQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemStaticQryDto
 */
export type RiskDataServiceEEProblemStaticQryDto = {
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
  /** 实体风险业务id */
  pjRiskBusinessId?: string[];
  /** 分页限制 */
  limit?: number;
  /** 分页id */
  lastId?: number;
};

/**
 * OpenAPI 组件类型：EEProblemExportQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemExportQryDto
 */
export type RiskDataServiceEEProblemExportQryDto = {
  /** 开始时间 */
  startDate?: string;
  /** 结束时间 */
  endDate?: string;
  /** 处理专业ID */
  pjDealMajorIds?: string[];
  containOtherDealMajor?: boolean;
  /** 对象类编码 */
  classCodes?: string[];
  /** 对象类型集合 */
  objTypes?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION"[];
  /** 是否已解决 */
  finished?: boolean;
};

/**
 * OpenAPI 组件类型：EEProblemBaseVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemBaseVo
 */
export type RiskDataServiceEEProblemBaseVo = {
  /** 问题ID */
  id?: number;
  /** 项目风险id */
  pjRiskBusinessId?: string;
  /** 实例ID */
  rwdInstanceId?: string;
  /** 问题结果状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题描述 */
  problemDesc?: string;
  /** 异常始发时间 */
  startTime?: string;
  /** 异常结束时间 */
  endTime?: string;
  /** 是否已结束 */
  finished?: boolean;
  /** 是否暂不处理 */
  noTreatment?: boolean;
  /** 初始评估记录id */
  originalSourceId?: string;
};

/**
 * OpenAPI 组件类型：EEStartProblemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStartProblemVo
 */
export type RiskDataServiceEEStartProblemVo = {
  /** 异常事件ID */
  exceptionEventId?: number;
  /** 异常事件始发问题 */
  startProblem?: RiskDataServiceEEProblemBaseVo;
};

/**
 * OpenAPI 组件类型：PjProblemInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjProblemInstanceVo
 */
export type RiskDataServicePjProblemInstanceVo = {
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
  componentId?: number;
  /** 部件名称 */
  componentName?: string;
  /** 问题类id */
  feedbackResultId: string;
  /** 问题类名称 */
  feedbackResultAlias: string;
  /** 状态（异常、超征兆） */
  feedbackResult: "NORMAL" | "WARN" | "EXCEPTION";
  /** 处理专业Id */
  pjDealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
};

/**
 * OpenAPI 组件类型：EESuggestProblemInfluenceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EESuggestProblemInfluenceVo
 */
export type RiskDataServiceEESuggestProblemInfluenceVo = {
  /** 实例Id */
  instanceId?: string;
  /** 是否部件 */
  component?: boolean;
  /** 部件id */
  componentId?: number;
  /** 部件名称 */
  componentName?: string;
  /** 可能影响问题 */
  effectProblemList?: RiskDataServicePjProblemInstanceVo[];
  /** 部件问题数据 */
  componentLists?: RiskDataServiceEESuggestProblemInfluenceVo[];
};

/**
 * OpenAPI 组件类型：EEProblemSuggestDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemSuggestDto
 */
export type RiskDataServiceEEProblemSuggestDto = {
  /** 初始问题 */
  riskInstanceBusinessIds?: string[];
};

/**
 * OpenAPI 组件类型：EESuggestProblemReasonVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EESuggestProblemReasonVo
 */
export type RiskDataServiceEESuggestProblemReasonVo = {
  /** 实例Id */
  instanceId?: string;
  /** 是否部件 */
  component?: boolean;
  /** 部件id */
  componentId?: number;
  /** 部件名称 */
  componentName?: string;
  /** 可能造成原因 */
  reasonProblemList?: RiskDataServicePjProblemInstanceVo[];
  /** 部件问题数据 */
  componentLists?: RiskDataServiceEESuggestProblemReasonVo[];
};

/**
 * OpenAPI 组件类型：PjProblemRepairVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjProblemRepairVo
 */
export type RiskDataServicePjProblemRepairVo = {
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
  /** 部件id */
  componentId?: number;
  /** 部件名称 */
  componentName?: string;
  /** 措施id */
  measureId: number;
  /** 措施描述 */
  measureName?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 处理专业Id */
  pjDealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
};

/**
 * OpenAPI 组件类型：EESuggestRepairVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EESuggestRepairVo
 */
export type RiskDataServiceEESuggestRepairVo = {
  /** 实例名称 */
  instanceName?: string;
  /** 实例Id */
  instanceId?: string;
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 是否部件 */
  component?: boolean;
  /** 部件id */
  componentId?: number;
  /** 部件名称 */
  componentName?: string;
  /** 处理专业名称 */
  dealMajorName?: string;
  /** 处理专业Id */
  pjDealMajorId?: number;
  /** 可能的措施 */
  suggestMeasures?: RiskDataServicePjProblemRepairVo[];
  /** 部件维修数据 */
  componentLists?: RiskDataServiceEESuggestRepairVo[];
};

/**
 * OpenAPI 组件类型：EEProblemSuggestMeasureDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemSuggestMeasureDto
 */
export type RiskDataServiceEEProblemSuggestMeasureDto = {
  /** 异常事件id */
  exceptionEventId?: number;
  /** 初始问题 */
  riskInstanceBusinessIds?: string[];
  /** 措施类型 */
  controlTypes?: "E1" | "E2" | "E3" | "E4" | "E5"[];
  /** 查询key(异常现象名称) */
  keyword?: string;
};

/**
 * OpenAPI 组件类型：IotRuleDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRuleDto
 */
export type RiskDataServiceIotRuleDto = {
  /** IOT规则编码 */
  ruleCode?: string;
  /** IOT规则名称 */
  ruleName?: string;
  isEvent?: boolean;
};

/**
 * OpenAPI 组件类型：InstanceTreeNodeDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceTreeNodeDetailVo
 */
export type RiskDataServiceInstanceTreeNodeDetailVo = {
  /** 实例风险ID */
  pjRiskInstanceBusinessId?: string;
  /** 实例信息 */
  instance?: RiskDataServiceEEInstanceVo;
  /** 状态变更时间 */
  lastUpdateTime?: string;
  /** IOT与人工观测结果是否不一致 */
  iotMismatchManualObserve?: boolean;
  /** IOT报警规则编码 */
  iotRuleDtoList?: RiskDataServiceIotAlertRuleTargetParamVo[];
  /** 最新状态变更记录 */
  latestStatusUpdateRecord?: RiskDataServiceEEProblemStatusRecordVo[];
};

/**
 * OpenAPI 组件类型：iotConditions12
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/iotConditions12
 */
export type RiskDataServiceIotConditions12 = {
  /** 判定条件组 */
  judgementCondition?: RiskDataServiceIotConditionTreeVo;
  /** 触发条件组 */
  triggerCondition?: RiskDataServiceIotConditionTreeVo[];
  /** 条件组名称 */
  conditionGroupName?: JsonValue;
};

/**
 * OpenAPI 组件类型：IotCurrentDataVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotCurrentDataVo
 */
export type RiskDataServiceIotCurrentDataVo = {
  /** 目标参数名称 */
  targetParamName?: string;
  /** 单位 */
  unit?: string;
  /** 计算结果 */
  value?: string;
  /** 时间 */
  dateTime?: string;
};

/**
 * OpenAPI 组件类型：IotReportDataVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotReportDataVo
 */
export type RiskDataServiceIotReportDataVo = {
  /** 当前计算结果 */
  currentParamResults?: RiskDataServiceCurrentParamResultVo[];
  /** 触发报警参数值 */
  triggerValues?: RiskDataServiceTargetParamResultVo;
  /** 判定条件目标参数 */
  judgementValues?: RiskDataServiceTargetParamResultVo[];
  /** 报警规则分组 */
  iotAlertRuleGroup?: RiskDataServiceIotAlertRuleGroupStruct;
};

/**
 * OpenAPI 组件类型：ManualDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ManualDto
 */
export type RiskDataServiceManualDto = {
  /** 三要素id */
  pjRiskInstanceBusinessId?: string;
  /** 备注 */
  remark?: string;
  /** 问题名称 */
  problemName?: string;
  /** 问题状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  uploadTime?: string;
  reporter?: string;
  accountName?: string;
};

/**
 * OpenAPI 组件类型：WorkOrderFeedbackRecordsDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkOrderFeedbackRecordsDto
 */
export type RiskDataServiceWorkOrderFeedbackRecordsDto = {
  /** 反馈记录ID */
  feedbackId?: string;
  /** 执行人ID */
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
};

/**
 * OpenAPI 组件类型：Video
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Video
 */
export type RiskDataServiceVideo = {
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
 * OpenAPI 组件类型：AlertReportDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertReportDto
 */
export type RiskDataServiceAlertReportDto = {
  id?: number;
  /** 问题名称 */
  name?: string;
  /** 物理世界实例id */
  rwdInstanceId?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 项目风险唯一key */
  pjRiskBusinessId?: string;
  /** 上报状态 */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 描述 */
  description?: string;
  /** 问题图片,逗号隔开 */
  imageIds?: string;
  /** 问题视频列表 */
  videos?: RiskDataServiceVideo[];
  /** 关联工单 */
  sopCode?: string;
  /** 上报人 */
  createBy?: string;
  /** 上报人Id */
  personId?: string;
};

/**
 * OpenAPI 组件类型：ReportRecordDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ReportRecordDto
 */
export type RiskDataServiceReportRecordDto = {
  /** 工单记录 */
  workOrderRecords?: RiskDataServiceWorkOrderFeedbackRecordsDto[];
  /** 异常上报数据 */
  alertReports?: RiskDataServiceAlertReportDto[];
};

/**
 * OpenAPI 组件类型：ReportRecordQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ReportRecordQueryDto
 */
export type RiskDataServiceReportRecordQueryDto = {
  /** 工单ID */
  workFeedbackIds?: string[];
  /** 异常上报ID */
  riskReportIds?: string[];
};

/**
 * OpenAPI 组件类型：RuleGroupInstanceDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RuleGroupInstanceDto
 */
export type RiskDataServiceRuleGroupInstanceDto = {
  /** 规则分组id */
  iotRuleGroupId?: number;
  /** 实例id */
  rwdInstanceId?: string[];
};

/**
 * OpenAPI 组件类型：RuleGroupInstanceOperatorDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RuleGroupInstanceOperatorDto
 */
export type RiskDataServiceRuleGroupInstanceOperatorDto = {
  /** 规则id */
  alterRuleId: number;
  /** 状态 */
  enable: boolean;
  /** 停用原因 */
  disableReason?: string;
  /** 停用截至时间 */
  disableEndTime?: string;
  /** 是否选择所有 */
  chooseAll?: boolean;
  /** 选择的实例id */
  selectedInstanceIds?: string[];
  /** 需要排除的实例id（全选取消选中时传入） */
  excludeInstanceIds?: string[];
  /** 筛选条件 */
  qryDto?: RiskDataServiceIotAlertRulePublishedInstancePageQryDto;
};

/**
 * OpenAPI 组件类型：IotRuleGroupDisableRecordVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRuleGroupDisableRecordVo
 */
export type RiskDataServiceIotRuleGroupDisableRecordVo = {
  /** iot报警规则分组id */
  iotRuleGroupId?: number;
  /** 操作人 */
  operator?: string;
  /** 停用时间 */
  disableTime?: string;
  /** 停用截止时间 */
  disableEndTime?: string;
  /** 停用原因 */
  disableReason?: string;
};

/**
 * OpenAPI 组件类型：IotAlertRuleInstanceFilterConditionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleInstanceFilterConditionVo
 */
export type RiskDataServiceIotAlertRuleInstanceFilterConditionVo = {
  /** 所在建筑楼层 */
  buildingFloors?: RiskDataServiceBuildingFloorInstanceVo[];
  /** 所在空间 */
  spaces?: RiskDataServiceSpaceVo[];
  /** 空间功能类型 */
  meoiSpaceTypes?: RiskDataServiceSpaceTreeNodeVo[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleInstanceVo
 */
export type RiskDataServiceIotAlertRuleInstanceVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 品牌 */
  brand?: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  /** 报警规则分组id */
  iotAlertRuleGroupId?: number;
  /** 是否新增标记（编辑态才展示） */
  whetherNew?: boolean;
  /** 启用状态（发布态才展示） */
  enable?: boolean;
  /** 操作人（发布态才展示） */
  operator?: string;
  /** 停用时间（发布态才展示） */
  disableTime?: string;
  /** 停用截止时间（发布态才展示） */
  disableEndTime?: string;
  /** 停用原因（发布态才展示） */
  disableReason?: string;
  /** 是否在实例化隐患树范围外 */
  outsideInstanceTreeScope?: boolean;
  /** 风险点是否冲突 */
  riskConflict?: boolean;
  inMeoiScope?: boolean;
};

/**
 * OpenAPI 组件类型：IPageIotAlertRuleInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPageIotAlertRuleInstanceVo
 */
export type RiskDataServiceIPageIotAlertRuleInstanceVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceIotAlertRuleInstanceVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  maxLimit?: number;
  /** countId */
  countId?: string;
  pages?: number;
};

/**
 * OpenAPI 组件类型：IotAlertRuleInstancePageQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleInstancePageQryDto
 */
export type RiskDataServiceIotAlertRuleInstancePageQryDto = {
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
  /** iot报警规则分组id */
  iotRuleGroupId?: number;
  /** 对象名称关键词 */
  localNameKeyword?: string;
  /** 建筑id列表 */
  buildingIds?: string[];
  /** 楼层id列表 */
  floorIds?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodes?: string[];
  /** 所在空间ids */
  inSpaceIds?: string[];
  /** 启用状态 */
  enable?: boolean;
  /** 仅看新增设备设施 */
  onlyNewInstance?: boolean;
};

/**
 * OpenAPI 组件类型：IotAlertRuleFilterIdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleFilterIdVo
 */
export type RiskDataServiceIotAlertRuleFilterIdVo = {
  /** iot报警规则id */
  iotRuleId?: number;
  /** iot报警规则分组id列表 */
  iotRuleGroupIds?: number[];
};

/**
 * OpenAPI 组件类型：RulePointDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RulePointDto
 */
export type RiskDataServiceRulePointDto = {
  /** 信息点编码 */
  code?: string;
  /** 对象类编码 */
  classCode?: string;
};

/**
 * OpenAPI 组件类型：IotAlertRuleFilterIdQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleFilterIdQryDto
 */
export type RiskDataServiceIotAlertRuleFilterIdQryDto = {
  /** 设备设施id */
  rwdInstanceIds?: string[];
  /** iot点位列表 */
  infoPoints?: RiskDataServiceRulePointDto[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleGroupSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleGroupSaveDto
 */
export type RiskDataServiceIotAlertRuleGroupSaveDto = {
  /** iot报警规则分组id（编辑时必传） */
  id?: number;
  /** 应用设备设施实例id集合 */
  rwdInstanceIds?: string[];
  /** todo RQ vo -> struct
触发条件组 */
  triggerConditionGroup?: RiskDataServiceIotConditionGroupsVo;
  /** 解除条件组 */
  releaseConditionGroup?: RiskDataServiceIotConditionGroupsVo;
};

/**
 * OpenAPI 组件类型：TargetParamCalResultVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TargetParamCalResultVo
 */
export type RiskDataServiceTargetParamCalResultVo = {
  /** 目标参数信息 */
  targetParam?: RiskDataServiceTargetParam;
  /** 触发时目标参数计算结果 */
  targetParamCalResult?: JsonValue;
  /** 触发报警数据点位信息 */
  dataPoints?: JsonValue;
};

/**
 * OpenAPI 组件类型：IotRwdInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRwdInstanceVo
 */
export type RiskDataServiceIotRwdInstanceVo = {
  /** 实例ID */
  rwdInstanceId?: string;
  /** 实例名称 */
  rwdInstanceName?: string;
};

/**
 * OpenAPI 组件类型：TimeConditionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TimeConditionStruct
 */
export type RiskDataServiceTimeConditionStruct = {
  /** 单位 */
  unitOfTime?: "SECOND" | "MINUTE" | "HOUR" | "DAY";
  /** 时间 */
  value?: number;
};

/**
 * OpenAPI 组件类型：FormulaIotLeafConditionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FormulaIotLeafConditionStruct
 */
export type RiskDataServiceFormulaIotLeafConditionStruct = {
  /** 计算公式 */
  principal?: RiskDataServiceFormula;
  /** 运算符 */
  operator?: "PLUS" | "REDUCE" | "MULTIPLICATION" | "DIVISION" | "GREATERTHANOREQUALTO" | "GREATERTHAN" | "EQUALTO" | "LESSTHANOREQUALTO" | "LESSTHAN" | "FORWARD" | "AFTER";
  /** 目标参数名称 */
  targetParamName?: string;
  /** 持续时长 */
  duration?: RiskDataServiceTimeConditionStruct;
  /** 条件值 */
  conditionValue?: number;
  /** 公式所用参数 */
  relatedPoiInfo?: RiskDataServiceIotParameterStruct[];
  /** 唯一标识 */
  parameterUk?: string;
};

/**
 * OpenAPI 组件类型：BDTPParameterStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BDTPParameterStruct
 */
export type RiskDataServiceBDTPParameterStruct = {
  /** 关联编码 */
  relCode?: JsonValue;
  /** 图关系编码 */
  graphCode?: JsonValue;
  /** 对象类编码 */
  classCode?: JsonValue;
  /** 对象类名称 */
  className?: JsonValue;
  /** 关联类型 */
  relationDirection?: "FROM_TO" | "TO_FROM" | "BOTH";
  /** 是否事件型 */
  event?: JsonValue;
  /** 对象实例ID */
  rwdInstanceId?: JsonValue;
  /** 对象实例名称 */
  rwdInstanceName?: JsonValue;
  /** 信息点编码 */
  infoCode?: JsonValue;
  /** 信息点名称 */
  name?: JsonValue;
  /** 信息点单位 */
  unit?: JsonValue;
  /** 信息点值类型 */
  origDataType?: JsonValue;
  /** 是否为枚举类型 */
  enumParam?: JsonValue;
  /** 枚举值映射关系 */
  enumValues?: JsonValue;
  uk?: JsonValue;
};

/**
 * OpenAPI 组件类型：WorkCalendarParameterStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkCalendarParameterStruct
 */
export type RiskDataServiceWorkCalendarParameterStruct = {
  /** 工作历编码 */
  code?: JsonValue;
  /** 工作历名称 */
  name?: JsonValue;
  /** 工作历类型 */
  workCalType?: "AC_SEASON" | "OPENING";
  /** 是否为枚举类型 */
  enumParam?: JsonValue;
  /** 枚举值映射关系 */
  enumValues?: JsonValue;
  uk?: JsonValue;
};

/**
 * OpenAPI 组件类型：IotParameterStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotParameterStruct
 */
export type RiskDataServiceIotParameterStruct = {
  /** 参数类型 */
  type?: "STATIC" | "TWIN" | "WORK_CALENDAR";
  /** BDTP信息点 */
  bdtpParameterDto?: RiskDataServiceBDTPParameterStruct;
  /** 工作历信息点 */
  workCalendarParameterDto?: RiskDataServiceWorkCalendarParameterStruct;
  /** 唯一标识 */
  uk?: JsonValue;
};

/**
 * OpenAPI 组件类型：EventLeafConditionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EventLeafConditionStruct
 */
export type RiskDataServiceEventLeafConditionStruct = {
  /** 参数信息呢 */
  iotParameter?: RiskDataServiceIotParameterStruct;
  /** 唯一标识 */
  parameterUk?: string;
};

/**
 * OpenAPI 组件类型：ConditionValueStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ConditionValueStruct
 */
export type RiskDataServiceConditionValueStruct = {
  /** 值 */
  value?: JsonValue;
  /** 单位 */
  unit?: JsonValue;
};

/**
 * OpenAPI 组件类型：SimpleConditionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleConditionStruct
 */
export type RiskDataServiceSimpleConditionStruct = {
  /** 运算符号 */
  operator?: "PLUS" | "REDUCE" | "MULTIPLICATION" | "DIVISION" | "GREATERTHANOREQUALTO" | "GREATERTHAN" | "EQUALTO" | "LESSTHANOREQUALTO" | "LESSTHAN" | "FORWARD" | "AFTER";
  /** 条件信息 */
  conditionValue?: RiskDataServiceConditionValueStruct;
};

/**
 * OpenAPI 组件类型：SimpleValueLeafConditionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleValueLeafConditionStruct
 */
export type RiskDataServiceSimpleValueLeafConditionStruct = {
  /** 参数信息点 */
  iotParameter?: RiskDataServiceIotParameterStruct;
  /** 运算符 */
  operator?: "PLUS" | "REDUCE" | "MULTIPLICATION" | "DIVISION" | "GREATERTHANOREQUALTO" | "GREATERTHAN" | "EQUALTO" | "LESSTHANOREQUALTO" | "LESSTHAN" | "FORWARD" | "AFTER";
  /** 条件值 */
  conditionValue?: string;
  /** 持续时长 */
  duration?: RiskDataServiceTimeConditionStruct;
  /** 唯一标识 */
  parameterUk?: string;
};

/**
 * OpenAPI 组件类型：IotConditionTreeNodeStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotConditionTreeNodeStruct
 */
export type RiskDataServiceIotConditionTreeNodeStruct = {
  /** 公式计算叶子节点信息 */
  formulaCondition?: RiskDataServiceFormulaIotLeafConditionStruct;
  /** 事件型叶子节点信息 */
  eventCondition?: RiskDataServiceEventLeafConditionStruct;
  /** 普通值型叶子节点信息 */
  simpleValueCondition?: RiskDataServiceSimpleValueLeafConditionStruct;
  /** condition的类型 */
  conditionType?: "NO_LEAF" | "FORMULA_LEAF" | "EVENT_LEAF" | "SIMPLE_VAL" | "UN_VALID" | "EVENT_UN_VALID";
  /** 下级节点) */
  children?: RiskDataServiceIotConditionTreeNodeStruct[];
  /** 下级节点之间的关联关系(且或) */
  relationship?: "OR" | "AND";
  /** 节点唯一key */
  nodeUniqueKey?: string;
  /** 目标参数唯一值 */
  targetParamUks?: string[];
};

/**
 * OpenAPI 组件类型：IotConditionTreeStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotConditionTreeStruct
 */
export type RiskDataServiceIotConditionTreeStruct = {
  /** 树状态 */
  status?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
  /** 节点别名 */
  nodeAlies?: string;
  /** 树节点) */
  rootTreeNode?: RiskDataServiceIotConditionTreeNodeStruct;
  /** 树唯一key */
  treeUniqueKey?: string;
};

/**
 * OpenAPI 组件类型：TopConditionGroupStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TopConditionGroupStruct
 */
export type RiskDataServiceTopConditionGroupStruct = {
  /** 判定条件组 */
  judgementCondition?: RiskDataServiceIotConditionTreeStruct;
  /** 触发条件组 */
  triggerCondition?: RiskDataServiceIotConditionTreeStruct[];
};

/**
 * OpenAPI 组件类型：IotRuleInstanceStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRuleInstanceStatisticVo
 */
export type RiskDataServiceIotRuleInstanceStatisticVo = {
  /** 规则数量 */
  ruleCount?: number;
  /** 实例数量 */
  instanceCount?: number;
};

/**
 * OpenAPI 组件类型：IotAlertRuleGroupUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleGroupUpdateDto
 */
export type RiskDataServiceIotAlertRuleGroupUpdateDto = {
  /** iot报警规则分组id（编辑时必传） */
  id?: number;
  /** 应用设备设施实例id集合 */
  rwdInstanceIds?: string[];
  /** 报警条件分组 */
  triggerConditions?: RiskDataServiceTopConditionGroupStruct[];
  /** 解除条件分组 */
  releaseConditions?: RiskDataServiceTopConditionGroupStruct[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleUpdateDto
 */
export type RiskDataServiceIotAlertRuleUpdateDto = {
  /** iot报警规则id */
  id: number;
  /** 核实要求类型 */
  verifyType?: "NONE" | "APP" | "APP_WEB" | "WEB";
  /** iot报警规则分组集合 */
  iotAlertRuleGroups: RiskDataServiceIotAlertRuleGroupUpdateDto[];
};

/**
 * OpenAPI 组件类型：PjRiskIdQuery
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskIdQuery
 */
export type RiskDataServicePjRiskIdQuery = {
  /** 风险id */
  riskBusinessIds?: string[];
};

/**
 * OpenAPI 组件类型：TimeConditionDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TimeConditionDto
 */
export type RiskDataServiceTimeConditionDto = {
  unitOfTime?: "SECOND" | "MINUTE" | "HOUR" | "DAY";
  value?: number;
};

/**
 * OpenAPI 组件类型：IotTargetParamStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotTargetParamStruct
 */
export type RiskDataServiceIotTargetParamStruct = {
  /** 参数UK */
  targetParamUk?: string;
  /** 参数名称 */
  paramName?: string;
  /** 信息点编码 */
  code?: string;
  /** 信息点单位 */
  unit?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 信息点类型 */
  type?: "STATIC" | "TWIN" | "WORK_CALENDAR";
  /** 工作历类型 */
  workCalType?: "AC_SEASON" | "OPENING";
  /** 枚举值映射关系 */
  enumValues?: RiskDataServiceMapString;
  /** 是否为枚举类型 */
  enumParam?: boolean;
  /** 是否为公式型参数 */
  formula?: boolean;
  /** 是否为事件型参数 */
  event?: boolean;
  /** 计算公式 */
  principal?: RiskDataServiceFormula;
  /** 对象实例ID */
  rwdInstanceId?: string;
  /** 对象实例名称 */
  rwdInstanceName?: string;
  /** 公式所用参数 */
  relatedPoiInfo?: RiskDataServiceIotParameterStruct[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleGroupStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleGroupStruct
 */
export type RiskDataServiceIotAlertRuleGroupStruct = {
  /** 报警规则名称 */
  iotAlertRuleName?: string;
  /** 核实要求类型 */
  verifyType?: "NONE" | "APP" | "APP_WEB" | "WEB";
  /** 报警条件分组 */
  triggerConditions?: RiskDataServiceTopConditionGroupStruct[];
  /** 解除条件分组 */
  releaseConditions?: RiskDataServiceTopConditionGroupStruct[];
};

/**
 * OpenAPI 组件类型：TargetParamStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TargetParamStruct
 */
export type RiskDataServiceTargetParamStruct = {
  /** 名称 */
  name?: string;
  /** 公式 */
  formula?: RiskDataServiceTargetFormula;
  /** 类型 */
  valueType?: "ENUM" | "NUM";
  /** 单位 */
  unit?: string;
  /** 信息点列表 */
  infoCodes?: RiskDataServiceObjectInfoCode[];
  /** 是否为事件型参数 */
  event?: boolean;
  /** 唯一键 */
  targetParamKey?: string;
};

/**
 * OpenAPI 组件类型：judgementCondition
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/judgementCondition
 */
export type RiskDataServiceJudgementCondition = {
  /** 树状态 */
  status?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
  /** 节点别名 */
  nodeAlies?: string;
  /** 树节点) */
  rootTreeNode?: RiskDataServiceIotConditionTreeNodeStruct;
  /** 树唯一key */
  treeUniqueKey?: JsonValue;
};

/**
 * OpenAPI 组件类型：judgementCondition13
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/judgementCondition13
 */
export type RiskDataServiceJudgementCondition13 = {
  /** 树状态 */
  status?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
  /** 节点别名 */
  nodeAlies?: string;
  /** 树节点) */
  rootTreeNode?: RiskDataServiceIotConditionTreeNodeStruct;
  /** 树唯一key */
  treeUniqueKey?: JsonValue;
};

/**
 * OpenAPI 组件类型：ObjectTreeBaseVoMajorObjectClassAndObjTypeTreeNodeEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVoMajorObjectClassAndObjTypeTreeNodeEnum
 */
export type RiskDataServiceObjectTreeBaseVoMajorObjectClassAndObjTypeTreeNodeEnum = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassAndObjTypeTreeNodeEnum[];
};

/**
 * OpenAPI 组件类型：ObjectTreeVoIotAlertRulePointVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeVoIotAlertRulePointVo
 */
export type RiskDataServiceObjectTreeVoIotAlertRulePointVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassAndObjTypeTreeNodeEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServiceIotAlertRulePointVo[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleSuitableInstancePageQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleSuitableInstancePageQryDto
 */
export type RiskDataServiceIotAlertRuleSuitableInstancePageQryDto = {
  /** 当前页 */
  current?: number;
  /** 每页条数 */
  size?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 空间功能类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象名称关键词 */
  localNameKeyword?: string;
  /** 建筑id */
  buildingIdList?: string[];
  /** 楼层id */
  floorIdList?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
  /** 所在空间id */
  inSpaceIds?: string[];
  /** 交付专业 */
  majorCodes?: string[];
  /** iot报警规则id */
  iotAlertRuleId: number;
  /** iot报警规则分组id（empty代表空分组，即对象实例没有绑定规则分组的数据） */
  iotAlertRuleGroupId?: string;
  /** 仅看新增设备设施 */
  onlyNewInstance?: boolean;
  /** 只返回实例ID */
  onlyShowInstanceId?: boolean;
  /** 只看风险点冲突的实力 */
  riskConflict?: boolean;
};

/**
 * OpenAPI 组件类型：IotAlertRulePublishedInstancePageQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRulePublishedInstancePageQryDto
 */
export type RiskDataServiceIotAlertRulePublishedInstancePageQryDto = {
  /** 当前页 */
  current?: number;
  /** 每页条数 */
  size?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 空间功能类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象名称关键词 */
  localNameKeyword?: string;
  /** 建筑id */
  buildingIdList?: string[];
  /** 楼层id */
  floorIdList?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
  /** 所在空间id */
  inSpaceIds?: string[];
  /** 交付专业 */
  majorCodes?: string[];
  /** iot报警规则id */
  iotAlertRuleId: number;
  /** iot报警规则分组id */
  iotAlertRuleGroupId?: number;
  /** 启用状态 */
  enable?: boolean;
  /** 只看风险点冲突的实力 */
  riskConflict?: boolean;
};

/**
 * OpenAPI 组件类型：IotInfoStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotInfoStruct
 */
export type RiskDataServiceIotInfoStruct = {
  /** iot信息点编码 */
  code?: string;
  /** iot参数名称 */
  name?: string;
  /** iot参数值 */
  value?: string;
  /** iot参数单位 */
  unit?: string;
  /** 上报时间 */
  reportTime?: string;
  /** 是否为枚举 */
  isEnumType?: boolean;
  isEvent?: boolean;
};

/**
 * OpenAPI 组件类型：triggerConditions
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/triggerConditions
 */
export type RiskDataServiceTriggerConditions = {
  /** 判定条件组 */
  judgementCondition?: RiskDataServiceIotConditionTreeStruct;
  /** 触发条件组 */
  triggerCondition?: RiskDataServiceIotConditionTreeStruct[];
};

/**
 * OpenAPI 组件类型：IotMonitoringQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotMonitoringQryDto
 */
export type RiskDataServiceIotMonitoringQryDto = {
  /** 规则ID */
  ruleId: number;
  /** 规则分组ID */
  ruleGroupId: number;
  /** 目标参数唯一Key */
  targetParamKey?: string;
  /** 风险实例ID */
  pjRiskInstanceBusinessId: string;
  /** 对象实例ID */
  rwdInstanceId?: string;
  /** 异常事件Id */
  exceptionEventId?: number;
};

/**
 * OpenAPI 组件类型：RiskMapSecondMajorVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapSecondMajorVo
 */
export type RiskDataServiceRiskMapSecondMajorVo = {
  /** 唯一key */
  uniqueKey?: string;
  /** 风险事件id */
  riskEventId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
  /** 处理专业id */
  dealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
  /** 一级分类编码（专业） */
  primaryMajorCode?: string;
  /** 一级分类名称（专业） */
  primaryMajorName?: string;
  /** 二级分类编码（设备标签） */
  secondClassifyCode?: string;
  /** 二级分类名称（设备标签） */
  secondClassifyName?: string;
  /** 风险等级 */
  riskLevel?: "HIGH" | "MEDIUM" | "UNKNOWN" | "PART_UNKNOWN" | "LOW";
  /** 影响程度 */
  impactLevel?: "GREAT" | "NORMAL" | "SLIGHT";
  /** 是否已关注 */
  followMark?: boolean;
  /** 是否在适用期内(已激活) */
  usefulLifeMark?: boolean;
  /** 是否是系统 */
  isSystem?: boolean;
  /** 事件类型(一级) */
  riskMeasureAimLevel1?: "E0" | "E1" | "E2" | "E3";
  /** 事件类型(二级) */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44";
  /** 影响程度归一值 */
  influenceNormalized?: number;
  /** 排序字段 */
  sortIdx?: number;
};

/**
 * OpenAPI 组件类型：RiskMapCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapCategoryVo
 */
export type RiskDataServiceRiskMapCategoryVo = {
  /** 一级分类编码（专业） */
  primaryMajorCode?: string;
  /** 一级分类名称（专业） */
  primaryMajorName?: string;
  /** 是否是专业 */
  isMajor?: boolean;
  /** 排序字段 */
  sortIdx?: string;
  /** 二级分类列表 */
  secondMajorVos?: RiskDataServiceRiskMapSecondMajorVo[];
};

/**
 * OpenAPI 组件类型：RiskMapMainViewVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapMainViewVo
 */
export type RiskDataServiceRiskMapMainViewVo = {
  /** 处理专业id */
  dealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
  /** 风险分类vo */
  riskMapCategoryVos?: RiskDataServiceRiskMapCategoryVo[];
};

/**
 * OpenAPI 组件类型：RiskMapStatusItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapStatusItemVo
 */
export type RiskDataServiceRiskMapStatusItemVo = {
  /** 数量 */
  count?: number;
  /** 风险状态 */
  riskStatus?: "EXCEPTION" | "CONJECTURE_EXCEPTION" | "POTENTIAL" | "UNKNOWN" | "GENERAL_NORMAL" | "NORMAL";
};

/**
 * OpenAPI 组件类型：RiskMapRiskEventDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapRiskEventDetailVo
 */
export type RiskDataServiceRiskMapRiskEventDetailVo = {
  /** 风险事件ID */
  riskEventId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 风险事件名称 */
  majorName?: string;
  /** 风险等级 */
  riskLevel?: "HIGH" | "MEDIUM" | "UNKNOWN" | "PART_UNKNOWN" | "LOW";
  /** 影响程度 */
  impactLevel?: "GREAT" | "NORMAL" | "SLIGHT";
  /** 发生后可能造成的影响 */
  possibleEffects?: string[];
  /** 损失影响二级分类 */
  impactSecondTags?: string[];
  /** 状态分布列表 */
  statusItems?: RiskDataServiceRiskMapStatusItemVo[];
};

/**
 * OpenAPI 组件类型：RiskMapRiskInstanceListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapRiskInstanceListVo
 */
export type RiskDataServiceRiskMapRiskInstanceListVo = {
  /** 实例id */
  rwdInstanceId?: string;
  /** 实例树ID */
  instanceTreeId?: number;
  /** 实例是否存在 */
  instanceExists?: boolean;
  /** 实例名称 */
  instanceName?: string;
  /** 实例类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实例所在空间id */
  spaceId?: string;
  /** 实例所在空间名称 */
  spaceName?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 实例所属专业编码 */
  majorCode?: string;
  /** 品牌 */
  brand?: string;
  /** 建筑 */
  building?: string;
  /** 楼层 */
  floor?: string;
  /** 风险状态 */
  riskStatus?: "EXCEPTION" | "CONJECTURE_EXCEPTION" | "POTENTIAL" | "UNKNOWN" | "GENERAL_NORMAL" | "NORMAL";
  /** 是否在适用期内 */
  usefulLifeMark?: boolean;
  /** 是否主动管理 */
  followMark?: boolean;
  /** 状态更新时间 */
  statusUpdateTime?: string;
  /** 未解决的异常事件ID列表 */
  unSolvedExceptionEventIds?: number[];
  /** 未解决的异常事件列表 */
  unSolvedExceptionEvents?: RiskDataServiceEEExceptionThirdVo[];
  /** 失效数量 */
  invalidNum?: number;
  /** 监测 */
  monitoringSituations?: "STRATEGY_EXECUTION_NOT_EXPECTED" | "IOT_DISCONNECTION" | "STRATEGY_LOW_FREQUENCY"[];
  /** 策略覆盖率 */
  strategyCoverRatio?: number;
};

/**
 * OpenAPI 组件类型：PageRiskMapRiskInstanceListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PageRiskMapRiskInstanceListVo
 */
export type RiskDataServicePageRiskMapRiskInstanceListVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceRiskMapRiskInstanceListVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
};

/**
 * OpenAPI 组件类型：RiskMapRiskInstancePageDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapRiskInstancePageDto
 */
export type RiskDataServiceRiskMapRiskInstancePageDto = {
  /** 当前页 */
  current?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 对象名称关键词 */
  localNameKeyword?: string;
  /** 建筑id */
  buildingIdList?: string[];
  /** 楼层id */
  floorIdList?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
  /** 所在空间id */
  inSpaceIds?: string[];
  /** 交付专业 */
  majorCodes?: string[];
  /** 风险事件UniqueKey */
  categoryUniqueKey: string;
  /** 风险状态 */
  riskStatuses?: "EXCEPTION" | "CONJECTURE_EXCEPTION" | "WARN" | "INDUCEMENT_HAPPEN" | "UNKNOWN" | "GENERAL_NORMAL" | "NORMAL"[];
  /** 是否已关注 */
  followMark?: boolean;
  /** 地图是否已关注 */
  followMarkMap?: boolean;
  /** 是否在适用期内(已激活) */
  usefulLifeMark?: boolean;
  /** 风险点监测 */
  riskPoints?: "STRATEGY_EXECUTION_NOT_EXPECTED" | "IOT_DISCONNECTION" | "STRATEGY_LOW_FREQUENCY"[];
  /** 实例id */
  instanceIds?: string[];
};

/**
 * OpenAPI 组件类型：RiskMapRiskLevelItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapRiskLevelItemVo
 */
export type RiskDataServiceRiskMapRiskLevelItemVo = {
  /** 数量 */
  count?: number;
  /** 风险等级 */
  riskLevel?: "HIGH" | "MEDIUM" | "UNKNOWN" | "PART_UNKNOWN" | "LOW";
};

/**
 * OpenAPI 组件类型：RiskMapMajorStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapMajorStatisticsVo
 */
export type RiskDataServiceRiskMapMajorStatisticsVo = {
  /** 风险等级分布列表 */
  riskLevelItems?: RiskDataServiceRiskMapRiskLevelItemVo[];
  /** 风险状态分布列表 */
  riskStatusItems?: RiskDataServiceRiskMapStatusItemVo[];
};

/**
 * OpenAPI 组件类型：AimLevelDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AimLevelDto
 */
export type RiskDataServiceAimLevelDto = {
  /** 事件类型(一级) */
  riskMeasureAimLevel1?: "E0" | "E1" | "E2" | "E3";
  /** 事件类型(二级) */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44"[];
};

/**
 * OpenAPI 组件类型：RiskMapRiskQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapRiskQueryDto
 */
export type RiskDataServiceRiskMapRiskQueryDto = {
  /** 风险等级 */
  riskLevel?: "HIGH" | "MEDIUM" | "UNKNOWN" | "PART_UNKNOWN" | "LOW";
  /** 影响程度 */
  impactLevel?: "GREAT" | "NORMAL" | "SLIGHT";
  /** 是否已关注 */
  followMark?: boolean;
  /** 是否在适用期内(已激活) */
  usefulLifeMark?: boolean;
  /** 处理专业id */
  dealMajorId?: number;
  /** 事件类型 */
  riskMeasureAimLevels?: RiskDataServiceAimLevelDto[];
};

/**
 * OpenAPI 组件类型：RiskMapStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapStatisticsVo
 */
export type RiskDataServiceRiskMapStatisticsVo = {
  /** 风险事件数量 */
  riskEvnetCount?: number;
  /** 适用期内风险数量 */
  activatedRiskEvnetCount?: number;
  /** 风险点数量 */
  riskInstanceCount?: number;
  /** 适用期内风险点数量 */
  activatedRiskInstanceCount?: number;
  /** 资产对象类数量 */
  objectClassCount?: number;
  /** 资产数量(对象实例数量) */
  objectInstanceCount?: number;
  /** 异常设备类数量 */
  exceptionObjectClassCount?: number;
  /** 异常资产数量(异常设备实例数量) */
  exceptionObjectInstanceCount?: number;
  /** 风险等级分布列表 */
  riskLevelItems?: RiskDataServiceRiskMapRiskLevelItemVo[];
  /** 风险状态分布列表 */
  riskStatusItems?: RiskDataServiceRiskMapStatusItemVo[];
};

/**
 * OpenAPI 组件类型：RiskMapInstanceTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskMapInstanceTreeNodeVo
 */
export type RiskDataServiceRiskMapInstanceTreeNodeVo = {
  /** 节点id */
  nodeId?: number;
  /** 隐患因素描述 */
  description?: string;
  /** 实体名称 */
  entityName?: string;
  component?: boolean;
  /** 设备id ！！！！可能为空，对应rcc强制实例化节点 */
  equipmentId?: string;
  /** 实例是否存在 */
  instanceExists?: boolean;
  /** 空间id */
  spaceId?: string;
  /** 空间名称 */
  spaceName?: string;
  /** 设备类名称 */
  equipmentClassName?: string;
  /** 实例名称 */
  equipmentName?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 状态变更时间 */
  stateChangeTime?: string;
  /** 状态推算时间 */
  stateCalculationTime?: string;
  /** 当前系统时间 */
  currentTime?: string;
  /** 隐患树节点当前状态 */
  treeNodeStatus?: "EXCEPTION" | "WARN" | "NORMAL" | "UNKNOWN" | "CONJECTURE_NORMAL" | "CONJECTURE_EXCEPTION" | "CONJECTURE_UNKNOWN";
  /** 隐患树节点观测状态 */
  treeNodeObserveStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 节点状态的有效性 */
  valid?: boolean;
  /** 状态的上报来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 触发与解除条件 */
  iotTriAndRelInfo?: RiskDataServiceIotRecordAndRelStruct;
  /** 是否为需核实节点，true为需核实 */
  needVerification?: boolean;
  /** 是否暂不处理，true为暂不处理 */
  noTreatment?: boolean;
  /** 是否未实例化，true为未实例化节点 */
  virtual?: boolean;
  /** 重要性 */
  importance?: "HIGH" | "MID" | "LOW";
  /** 风险事件的影响 */
  impact?: string;
  /** 风险实例id */
  pjRiskInstanceBusinessId?: string;
  /** 下级节点间关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  /** 树节点类型 */
  treeNodeType?: "NORMAL" | "HUB_EXPAND_NODE" | "HUB_EXPAND_INSTANCE_NODE";
  /** 子节点 */
  children?: RiskDataServiceRiskMapInstanceTreeNodeVo[];
  /** 对应知识节点Id */
  klbTreeNodeId?: JsonValue;
};

/**
 * OpenAPI 组件类型：ObjectTreeBaseVoMajorObjectClassIotAlertRuleTreeNodeEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVoMajorObjectClassIotAlertRuleTreeNodeEnum
 */
export type RiskDataServiceObjectTreeBaseVoMajorObjectClassIotAlertRuleTreeNodeEnum = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OTHER_EQUIP" | "OBJECT_CLASS";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassIotAlertRuleTreeNodeEnum[];
};

/**
 * OpenAPI 组件类型：IotPjDealMajorVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotPjDealMajorVo
 */
export type RiskDataServiceIotPjDealMajorVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业排序值 */
  sort?: number;
};

/**
 * OpenAPI 组件类型：CurrentParamResultVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CurrentParamResultVo
 */
export type RiskDataServiceCurrentParamResultVo = {
  /** 目标参数信息 */
  targetParam?: RiskDataServiceIotTargetParamStruct;
  /** 目标参数计算结果 */
  result?: string;
  /** 当前时间 */
  currentTime?: string;
  /** 目标参数各信息点值列表 */
  dataPoints?: RiskDataServiceInfoPoint[];
};

/**
 * OpenAPI 组件类型：TargetParamResultVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TargetParamResultVo
 */
export type RiskDataServiceTargetParamResultVo = {
  /** 目标参数信息 */
  targetParam?: RiskDataServiceIotTargetParamStruct;
  /** 触发前置数据值 */
  triggerBeforeValue?: string;
  /** 触发前置时间点 */
  triggerBeforeTime?: string;
  /** 触发数据值 */
  triggerValue?: string;
  /** 触发时间点 */
  triggerTime?: string;
  /** 目标参数各信息点值列表 */
  dataPoints?: RiskDataServiceInfoPoint[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleIdsDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleIdsDto
 */
export type RiskDataServiceIotAlertRuleIdsDto = {
  /** 报警规则ID */
  ruleIds?: number[];
};

/**
 * OpenAPI 组件类型：RwdBuildingVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdBuildingVo
 */
export type RiskDataServiceRwdBuildingVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** 建筑下的楼层 */
  floors: RiskDataServiceSimpleRwdObjectVo[];
};

/**
 * OpenAPI 组件类型：InstanceFilterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceFilterVo
 */
export type RiskDataServiceInstanceFilterVo = {
  /** 所在建筑楼层 */
  buildingFloors?: RiskDataServiceRwdBuildingVo[];
  /** 所在空间 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 空间功能类型 */
  roomFuncTypeList?: RiskDataServiceRoomFuncTypeVo[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleSuitableInstanceInitPageQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleSuitableInstanceInitPageQryDto
 */
export type RiskDataServiceIotAlertRuleSuitableInstanceInitPageQryDto = {
  /** 当前页 */
  current?: number;
  /** 每页条数 */
  size?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 空间功能类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象名称关键词 */
  localNameKeyword?: string;
  /** 建筑id */
  buildingIdList?: string[];
  /** 楼层id */
  floorIdList?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
  /** 所在空间id */
  inSpaceIds?: string[];
  /** 交付专业 */
  majorCodes?: string[];
  /** iot报警规则id */
  iotAlertRuleId: number;
};

/**
 * OpenAPI 组件类型：IotAlertRuleTreeNodeDataVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleTreeNodeDataVo
 */
export type RiskDataServiceIotAlertRuleTreeNodeDataVo = {
  /** 规则ID */
  id?: number;
  /** 规则名称 */
  name?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 知识措施ID */
  klbMeasureId?: number;
  /** 风险点信息 */
  iotRisk?: RiskDataServiceIotRiskVo;
  /** 处理专业id */
  pjDealMajor?: RiskDataServiceIotPjDealMajorVo;
  /** 应用时间（可选态才使用） */
  applyTime?: string;
  /** 核实要求类型 */
  verifyType?: "NONE" | "APP" | "APP_WEB" | "WEB";
  /** 是否已发布过（编辑态才使用） */
  published?: boolean;
  /** 发布数据变更（发布小红点） */
  publishChanged?: boolean;
  /** 可用实例数量（可选态&编辑态才使用） */
  suitableInstanceNum?: number;
  /** 可用实例新增数量（编辑态才使用） */
  suitableInstanceAddNum?: number;
  /** 报警分组 */
  iotAlertRuleGroups?: RiskDataServiceIotAlertRuleGroupVo[];
  /** 管理范围外提示 */
  outsideScopeTip?: "OUTSIDE_BMS_SCOPE" | "OUTSIDE_PROJECT_SCOPE";
};

/**
 * OpenAPI 组件类型：ObjectTreeBaseVoMajorClassAndSpaceFunctionEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVoMajorClassAndSpaceFunctionEnum
 */
export type RiskDataServiceObjectTreeBaseVoMajorClassAndSpaceFunctionEnum = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "COMPONENT_NODE";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorClassAndSpaceFunctionEnum[];
};

/**
 * OpenAPI 组件类型：PjRiskMajorObjClassTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskMajorObjClassTreeVo
 */
export type RiskDataServicePjRiskMajorObjClassTreeVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "COMPONENT_NODE";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorClassAndSpaceFunctionEnum[];
  /** 物理世界对象类型（树节点type=OBJECT_CLASS时，该字段有值） */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 节点数据统计 */
  count?: number;
  /** 标记变更（红点） */
  changeMark?: boolean;
};

/**
 * OpenAPI 组件类型：formulaCondition
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/formulaCondition
 */
export type RiskDataServiceFormulaCondition = {
  /** 计算公式 */
  principal?: RiskDataServiceFormula;
  /** 运算符 */
  operator?: "PLUS" | "REDUCE" | "MULTIPLICATION" | "DIVISION" | "GREATERTHANOREQUALTO" | "GREATERTHAN" | "EQUALTO" | "LESSTHANOREQUALTO" | "LESSTHAN" | "FORWARD" | "AFTER";
  /** 目标参数名称 */
  targetParamName?: string;
  /** 持续时长 */
  duration?: RiskDataServiceTimeConditionStruct;
  /** 条件值 */
  conditionValue?: number;
  /** 公式所用参数 */
  relatedPoiInfo?: RiskDataServiceIotParameterStruct[];
  /** 唯一标识 */
  parameterUk?: JsonValue;
};

/**
 * OpenAPI 组件类型：principal
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/principal
 */
export type RiskDataServicePrincipal = {
  expressionTemplate?: JsonValue;
  placeHolderMarks?: Record<string, never>[];
};

/**
 * OpenAPI 组件类型：PjRiskImpactCategorySaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskImpactCategorySaveDto
 */
export type RiskDataServicePjRiskImpactCategorySaveDto = {
  /** 影响类型id(编辑时必传) */
  id?: number;
  /** 影响类型名称 */
  name?: string;
  /** 影响类型关键性 */
  crucial?: "PIVOTAL" | "OTHER";
};

/**
 * OpenAPI 组件类型：MapListSimpleExceptionEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapListSimpleExceptionEventVo
 */
export type RiskDataServiceMapListSimpleExceptionEventVo = {
  key?: {
    /** 异常事件id */
    id?: number;
    /** 过时,异常事件编码,就是异常事件id了 */
    exceptionEventCode?: string;
    /** 异常事件名称 */
    exceptionEventName?: string;
    /** 异常事件编码 */
    eventNumber?: string;
    /** 异常事件开始时间 */
    exceptionStartTime?: string;
    /** 异常事件结束时间 */
    exceptionEndTime?: string;
    /** 异常事件状态 */
    exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
    /** 持续时间,单位分钟 */
    duration?: number;
    /** 已解决问题数量 */
    resolvedProblemCount?: number;
    /** 所有问题数量 */
    allProblemCount?: number;
    /** 问题列表 */
    problems?: RiskDataServiceProblemVo[];
    /** 严重程度 */
    importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
    /** 历史严重程度 */
    historyHighestDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
    /** 将废弃(需找MEOS刘阳 确认)
一级风控目标 */
    riskMeasureAimLevel1Collect?: "E0" | "E1" | "E2" | "E3"[];
    /** 将废弃(需找MEOS刘阳 确认)
二级风控目标 */
    riskMeasureAimLevel2Collect?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44"[];
    /** 实际影响 */
    impactCategoryList?: RiskDataServicePjRiskImpactCategorySimpleVo[];
    /** 实例列表 */
    instances?: RiskDataServiceInstanceVo[];
    /** 始发问题 */
    originalProblem?: RiskDataServiceProblemVo;
    /** 最早要求解决时间 */
    minRequireSolveTime?: string;
    /** 最晚要求解决时间 */
    maxRequireSolveTime?: string;
    /** 异常事件是否已逾期 */
    overdue?: boolean;
    /** 关联风险事件 */
    relatedRiskEvents?: RiskDataServiceSimpleRiskEventDto[];
    /** 处理进程 */
    solveProcess?: "FIND_EXCEPTION" | "SOLVING" | "VERIFICATION";
  }[];
};

/**
 * OpenAPI 组件类型：DeductiveInduction
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DeductiveInduction
 */
export type RiskDataServiceDeductiveInduction = {
  /** 损失影响 */
  lossType?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5";
  /** 重要性 */
  importance?: "E0" | "E1" | "E2";
  /** 常见性 */
  ordinary?: "E0" | "E1" | "E2";
  /** 一级风控目标 */
  riskMeasureAimLevel1?: "E0" | "E1" | "E2" | "E3";
  /** 二级风控目标 */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44";
};

/**
 * OpenAPI 组件类型：MapListEERelationRiskEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapListEERelationRiskEventVo
 */
export type RiskDataServiceMapListEERelationRiskEventVo = {
  "0"?: RiskDataService0[];
};

/**
 * OpenAPI 组件类型：ExceptionEventStatusChangeQuery
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventStatusChangeQuery
 */
export type RiskDataServiceExceptionEventStatusChangeQuery = {
  /** 对象id集合 */
  objIds?: string[];
  /** 时间间隔 */
  interval?: number;
  /** 时间单位 */
  unit?: "NANOSECONDS" | "MICROSECONDS" | "MILLISECONDS" | "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};

/**
 * OpenAPI 组件类型：KlbMeasureStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbMeasureStruct
 */
export type RiskDataServiceKlbMeasureStruct = {
  /** id */
  id?: number;
  /** 措施描述 */
  controlDescription?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
};

/**
 * OpenAPI 组件类型：KlbTreeNodeStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbTreeNodeStruct
 */
export type RiskDataServiceKlbTreeNodeStruct = {
  id?: number;
  /** 节点名称 */
  name?: string;
  /** 措施列表 */
  klbMeasures?: RiskDataServiceKlbMeasureStruct[];
  /** 实体名称 */
  entityName?: string;
};

/**
 * OpenAPI 组件类型：Major
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Major
 */
export type RiskDataServiceMajor = {
  code?: string;
  name?: string;
};

/**
 * OpenAPI 组件类型：ObjectClassStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassStruct
 */
export type RiskDataServiceObjectClassStruct = {
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  code?: string;
  /** 对象类名称 */
  name?: string;
  /** 所属专业,仅设备\设备组\系统有 */
  majors?: RiskDataServiceMajor[];
  /** 所属设备组\设备有 */
  systemClasses?: RiskDataServiceObjectClassStruct[];
};

/**
 * OpenAPI 组件类型：InstanceStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceStruct
 */
export type RiskDataServiceInstanceStruct = {
  id?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 类编码 */
  classCode?: string;
  /** 对象类定义(objType,classCode等) */
  objectClass?: RiskDataServiceObjectClassStruct;
  /** 实例名称 */
  localName?: string;
};

/**
 * OpenAPI 组件类型：InstanceTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceTreeNodeVo
 */
export type RiskDataServiceInstanceTreeNodeVo = {
  /** 节点id */
  id?: number;
  /** 节点名称 */
  name?: string;
  classCode?: string;
  className?: string;
  /** 是否是部件 */
  component?: boolean;
  /** 实体id */
  entityId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 风险id */
  riskBusinessId?: string;
  /** 下级节点 */
  children?: RiskDataServiceInstanceTreeNodeVo[];
  /** 与下级节点的关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  /** 是否有策略 */
  strategy?: boolean;
  /** 实例id */
  rwdObjectId?: string;
  /** 实例名称 */
  localName?: string;
  /** 知识树id */
  klbTreeNodeId?: number;
  /** 树节点类型 */
  treeNodeType?: "NORMAL" | "HUB_EXPAND_NODE" | "HUB_EXPAND_INSTANCE_NODE";
  /** 隐患树节点当前状态 */
  treeNodeStatus?: "EXCEPTION" | "WARN" | "NORMAL" | "UNKNOWN" | "CONJECTURE_NORMAL" | "CONJECTURE_EXCEPTION" | "CONJECTURE_UNKNOWN";
  /** 隐患树节点观测状态 */
  treeNodeObserveStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 状态变更时间 */
  stateChangeTime?: string;
  /** 状态更新时间 */
  stateUpdateTime?: string;
  /** 状态推算时间 */
  stateCalculationTime?: string;
  /** 持续时长(分钟) */
  duration?: number;
  /** 节点状态的有效性 */
  valid?: boolean;
  /** 状态的上报来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 触发与解除条件 */
  iotTriAndRelInfo?: RiskDataServiceIotRecordAndRelStruct;
  /** 是否为需核实节点，true为需核实 */
  needVerification?: JsonValue;
  /** 是否暂不处理，true为暂不处理 */
  noTreatment?: JsonValue;
  /** 关联的风险点 */
  pjRisk?: JsonValue;
  /** 是否未实例化，true为未实例化节点 */
  virtual?: JsonValue;
  /** 失效原因 */
  invalidType?: "MANUAL_OBSERVATION_INVALID" | "OTHER_NODE_STATUS_CHANGE";
  /** 失效时间 */
  invalidTime?: JsonValue;
  /** 观测有效时长 */
  statusValidityPeriod?: JsonValue;
  /** 观测有效时长单位 */
  statusValidityPeriodUnit?: "HOUR" | "DAY" | "WEEK" | "MONTH";
  /** 实体信息 */
  entity?: JsonValue;
  /** 所属实体 */
  belongEntity?: JsonValue;
  /** 关联实体 */
  relationEntity?: JsonValue;
  /** 关联关系 */
  relationship?: JsonValue;
  /** 是否需实例化节点 */
  forcedInstantiate?: JsonValue;
};

/**
 * OpenAPI 组件类型：EventTimeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EventTimeVo
 */
export type RiskDataServiceEventTimeVo = {
  /** 节点异常结束时间 */
  exceptionEndTime?: string;
  /** 持续时长 */
  duration?: number;
};

/**
 * OpenAPI 组件类型：EventNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EventNodeVo
 */
export type RiskDataServiceEventNodeVo = {
  /** 节点id */
  nodeId?: number;
  /** 故障名称 */
  riskName?: string;
  /** 风险等级   1高  2中  3低 */
  riskLevel?: number;
  /** 对象实例 */
  objectId?: string;
  /** 异常数据 */
  dataList?: RiskDataServiceEventTimeVo[];
};

/**
 * OpenAPI 组件类型：EventNodeQuery
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EventNodeQuery
 */
export type RiskDataServiceEventNodeQuery = {
  nodeIds?: number[];
  startTime?: string;
  endTime?: string;
};

/**
 * OpenAPI 组件类型：ChangeSeverityDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ChangeSeverityDto
 */
export type RiskDataServiceChangeSeverityDto = {
  /** 异常编码 */
  exceptionCode: string;
  /** 严重程度 */
  severity: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
};

/**
 * OpenAPI 组件类型：ObjectCategoryTree
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectCategoryTree
 */
export type RiskDataServiceObjectCategoryTree = {
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "SPACE" | "EQUIPMENT" | "SHAFT" | "COMPONENT" | "MAJOR" | "VIRTUAL" | "TOOL" | "MATERIAL" | "SYSTEM" | "PARTITION" | "EQUIP_GROUP" | "SYSTEM_OBJECT" | "GROUP" | "PROJECT_CLASS" | "BUILDING_CLASS" | "FLOOR_CLASS" | "SPACE_PARENT_CLASS" | "SPACE_CLASS" | "SPACE_CLASS_AIM_V7" | "EQUIPMENT_CLASS" | "SHAFT_CLASS" | "COMPONENT_CLASS" | "VIRTUAL_CLASS" | "TOOL_CLASS" | "MATERIAL_CLASS" | "FUNCID" | "PARTITION_CLASS" | "BUSINESS_TAG" | "PIPE" | "EQUIP_GROUP_CLASS" | "UNDEFINED";
  /** 下级对象 */
  list?: RiskDataServiceObjectCategoryTree[];
};

/**
 * OpenAPI 组件类型：ExceptionEventBaseInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventBaseInfoVo
 */
export type RiskDataServiceExceptionEventBaseInfoVo = {
  /** 异常事件ID */
  id?: number;
  /** 异常事件状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 异常事件名称 */
  exceptionEventName?: string;
  /** 异常事件编码(将返回异常事件id) */
  exceptionEventCode?: string;
  /** 异常事件类型(已废弃，将返回空) */
  exceptionEventType?: "RCC" | "NOT_RCC";
  /** 异常开始时间 */
  exceptionStartTime?: string;
  /** 异常结束时间 */
  exceptionEndTime?: string;
  /** 异常更新时间 */
  exceptionUpdateTime?: string;
  /** 持续时长(分钟) */
  duration?: number;
  /** 全部问题数量 */
  allProblemCount?: number;
  /** 已解决问题数量 */
  resolvedProblemCount?: number;
  /** 影响范围 */
  impactExpansion?: "IE_00" | "IE_01" | "IE_02";
  /** 实例信息 */
  instances?: RiskDataServiceExceptionInstance[];
  /** 发生过问题的异常实例(最多返回3个) */
  abnormalInstances?: RiskDataServiceExceptionInstance[];
  /** 历史实例信息（废弃，将返回空集合） */
  historyInstances?: RiskDataServiceExceptionInstance[];
  /** 问题信息 */
  problems?: RiskDataServiceExceptionProblem[];
  /** 风险事件信息(废弃，将返回空集合) */
  riskEvents?: RiskDataServiceExceptionRiskEvent[];
  /** 异常事件编号 */
  exceptionNumber?: string;
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 上次严重程度 */
  earlyImportanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 历史严重程度 */
  historyHighestDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 严重程度变化时间 */
  degreeChangeTime?: string;
  /** 事态性质&实际影响(项目风险影响类型) */
  impactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 事态性质&潜在影响(项目风险影响类型) */
  potentialImpactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 历史事态性质&实际影响(项目风险影响类型) */
  historyImpactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 历史事态性质&潜在影响(项目风险影响类型) */
  historyPotentialImpactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 上次事态性质(项目风险影响类型) */
  earlyImpactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 异常节点变化时间(字段名称从topNodeChangeTime变更为impactCategoryChangeTime) */
  impactCategoryChangeTime?: string;
  /** 处理进程 */
  solveProcess?: "FIND_EXCEPTION" | "SOLVING" | "VERIFICATION";
  /** 一级管控目标集合(废弃，将返回空) */
  riskMeasureAimLevel1Collect?: "E0" | "E1" | "E2" | "E3"[];
  /** 二级管控目标集合(废弃，将返回空) */
  riskMeasureAimLevel2Collect?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44"[];
  /** 是否外部客户 */
  externalCustomer?: boolean;
  /** 是否存在费用支出 */
  haveCost?: boolean;
  /** 目标完成时间 */
  targetFinishTime?: string;
  /** 最早要求解决时间 */
  minRequireSolveTime?: string;
  /** 最晚要求解决时间 */
  maxRequireSolveTime?: string;
  /** 是否暂不处理 */
  noTreatment?: boolean;
  /** 是否需核实 */
  needVerification?: boolean;
  /** 人工修改等级名称 */
  userName?: string;
};

/**
 * OpenAPI 组件类型：PjExceptionPhenomenonVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjExceptionPhenomenonVo
 */
export type RiskDataServicePjExceptionPhenomenonVo = {
  /** 实例Id */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 实体id，取klbRisk的businessId，部件的时候，就是部件id */
  entityBusinessId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 所属对象类，取klbRisk的businessId,部件时，不为空 */
  belongEntityBusinessId?: number;
  /** 是否为部件 */
  component?: boolean;
  /** 异常现象名称 */
  name?: string;
  /** 项目风险id */
  pjRiskBusinessId?: string;
  /** 状态（异常、超征兆） */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 处理专业Id */
  pjDealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
  /** 部件名称 */
  componentName?: string;
  /** 是否是三要素聚合 */
  mergeElements?: boolean;
  /** 问题等级 */
  issueLevel?: RiskDataServicePjIssueLevelVo;
  pjRiskBusinessInstanceId?: string;
  businessId?: string;
};

/**
 * OpenAPI 组件类型：IPagePjExceptionPhenomenonVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPagePjExceptionPhenomenonVo
 */
export type RiskDataServiceIPagePjExceptionPhenomenonVo = {
  /** 查询数据列表 */
  records?: RiskDataServicePjExceptionPhenomenonVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  maxLimit?: number;
  /** countId */
  countId?: string;
  pages?: number;
};

/**
 * OpenAPI 组件类型：PjExceptionPhenomenonQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjExceptionPhenomenonQryDto
 */
export type RiskDataServicePjExceptionPhenomenonQryDto = {
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
  /** 查询key(异常现象名称) */
  keyword?: string;
  /** 实例id列表 */
  instanceIds?: string[];
  /** 对象类code */
  classCodes?: string[];
  /** 是否查询处理专业 */
  queryDealMajor?: boolean;
};

/**
 * OpenAPI 组件类型：PjExceptionInfluenceQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjExceptionInfluenceQryDto
 */
export type RiskDataServicePjExceptionInfluenceQryDto = {
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
  /** 查询key(异常现象名称) */
  keyword?: string;
  /** 异常事件id */
  exceptionEventId?: number[];
  /** 风险节点id（三要素id） */
  pjRiskBusinessId?: string[];
  /** 是否需要查相关策略 */
  strategy?: boolean;
};

/**
 * OpenAPI 组件类型：PjExceptionMeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjExceptionMeasureVo
 */
export type RiskDataServicePjExceptionMeasureVo = {
  /** 实例Id */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 实体id，取klbRisk的businessId，部件的时候，就是部件id */
  entityBusinessId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 所属对象类，取klbRisk的businessId,部件时，不为空 */
  belongEntityBusinessId?: number;
  /** 是否为部件 */
  component?: boolean;
  /** 措施名称 */
  measureName?: string;
  /** 措施id */
  measureId?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 项目风险id */
  pjRiskBusinessId?: string;
  /** 处理专业Id */
  pjDealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
  pjRiskBusinessInstanceId?: string;
  businessId?: string;
};

/**
 * OpenAPI 组件类型：IPagePjExceptionMeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPagePjExceptionMeasureVo
 */
export type RiskDataServiceIPagePjExceptionMeasureVo = {
  /** 查询数据列表 */
  records?: RiskDataServicePjExceptionMeasureVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  maxLimit?: number;
  /** countId */
  countId?: string;
  pages?: number;
};

/**
 * OpenAPI 组件类型：PunchingMode
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PunchingMode
 */
export type RiskDataServicePunchingMode = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 打卡方式 */
  punchingModelType?: "NONE" | "PHOTOGRAPH" | "SCAN" | "NFC";
  /** 打卡对象 */
  punchingModelObject?: "SPACE" | "OBJECT";
};

/**
 * OpenAPI 组件类型：PeriodUnit
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PeriodUnit
 */
export type RiskDataServicePeriodUnit = {
  /** 周期类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 周期数量 */
  periodCount?: number;
};

/**
 * OpenAPI 组件类型：PeriodTimeItem
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PeriodTimeItem
 */
export type RiskDataServicePeriodTimeItem = {
  /** 周期单位 */
  periodUnits?: RiskDataServicePeriodUnit[];
  /** 星期 ， 非必传，当periodUnits包含周时传入 */
  weekNum?: number;
  hour?: string;
  minute?: string;
};

/**
 * OpenAPI 组件类型：InstanceGroupDate
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceGroupDate
 */
export type RiskDataServiceInstanceGroupDate = {
  /** 分组开始时间 */
  beginTime?: RiskDataServicePeriodTimeItem;
  /** 分组结束时间 */
  endTime?: RiskDataServicePeriodTimeItem;
};

/**
 * OpenAPI 组件类型：WorkingTime
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkingTime
 */
export type RiskDataServiceWorkingTime = {
  /** 开始时间 */
  beginTime?: RiskDataServicePeriodTimeItem;
  /** 工作时间类型 */
  type?: "END_TIME" | "DURATION";
  /** 结束时间 */
  endTime?: RiskDataServicePeriodTimeItem;
  /** 持续时间 */
  durationUnit?: RiskDataServicePeriodUnit;
  /** 实例分组时间 */
  instanceGroupDates?: RiskDataServiceInstanceGroupDate[];
};

/**
 * OpenAPI 组件类型：InstanceGroup
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceGroup
 */
export type RiskDataServiceInstanceGroup = {
  /** 分组名称 */
  name?: string;
  /** 分组实例id */
  strategyItemInstances?: string[];
};

/**
 * OpenAPI 组件类型：TimeScheme
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TimeScheme
 */
export type RiskDataServiceTimeScheme = {
  /** 频次 */
  period?: RiskDataServicePeriod;
  workingTimes?: RiskDataServiceWorkingTime[];
  /** 是否分组 */
  isGroup?: boolean;
  /** 分组方式 */
  instanceGroupType?: "BUILDING_SORT" | "BUILDING_RANDOM";
  /** 实例分组 */
  instanceGroups?: RiskDataServiceInstanceGroup[];
};

/**
 * OpenAPI 组件类型：GlobalTimeSetting
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/GlobalTimeSetting
 */
export type RiskDataServiceGlobalTimeSetting = {
  /** 时间方案 */
  timeSchemes?: RiskDataServiceTimeScheme[];
};

/**
 * OpenAPI 组件类型：StrategyItemDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyItemDto
 */
export type RiskDataServiceStrategyItemDto = {
  /** 参数名字有问题，但前端已经使用
计划策略事项id */
  strategyItemId?: number;
  /** 策略事项选中的实例id */
  selectedObjectIds?: string[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemObjectRelVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemObjectRelVo
 */
export type RiskDataServiceExeStrategyItemObjectRelVo = {
  /** 主键id */
  id?: number;
  /** 策略事项id */
  strategyItemId?: number;
  /** 关联对象id */
  objectId?: string;
  /** 关联对象名称 */
  objectName?: string;
};

/**
 * OpenAPI 组件类型：ExePlanSimpleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanSimpleVo
 */
export type RiskDataServiceExePlanSimpleVo = {
  /** 计划id */
  id?: number;
  /** 计划名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：ExeStrategyExecStepSimpleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyExecStepSimpleVo
 */
export type RiskDataServiceExeStrategyExecStepSimpleVo = {
  /** id */
  id?: number;
  /** 执行步骤名称 */
  name?: string;
  /** 排序索引 */
  sortIndex?: number;
  /** 策略分类id */
  strategyCategoryId?: number;
};

/**
 * OpenAPI 组件类型：ExePlanStrategyItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanStrategyItemVo
 */
export type RiskDataServiceExePlanStrategyItemVo = {
  /** 计划策略事项id */
  id?: number;
  /** 原策略事项id */
  strategyItemId?: number;
  /** 策略事项名称 */
  name?: string;
  /** 父级标签类型 */
  parentTagType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 标签id */
  tagId?: number;
  /** 标签名称 */
  tagName?: string;
  /** 对象类编码 */
  objectCode?: string;
  /** 对象类名称 */
  objectCodeName?: string;
  /** 物理世界对象类型(equipment: 设备，system: 系统, space: 空间) */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次 */
  period?: RiskDataServicePeriod;
  /** 是否外委 */
  outsource?: boolean;
  /** 适用空调季 */
  airSeason?: "TRANSITIONSEASON" | "COOLINGSEASON" | "HEATINGSEASON" | "NOREQUIREMENT";
  /** 执行时段 */
  executionPeriod?: "TIMEWORKINGREQUIREMENT4" | "BUSINESSHOURS" | "NONBUSINESSHOURS" | "SPECIFICTIME" | "NOREQUIREMENT";
  /** 备注 */
  remark?: string;
  /** 关联对象集合 */
  relObjects?: string[];
  /** 关联对象数量 */
  relObjectCount?: number;
  /** 适用对象总数 */
  objectCount?: number;
  /** 适用对象 */
  objects?: RiskDataServiceExeStrategyItemObjectRelVo[];
  /** 已关联的计划 */
  relExePlans?: RiskDataServiceExePlanSimpleVo[];
  /** 策略事项-执行顺序 */
  execStep?: RiskDataServiceExeStrategyExecStepSimpleVo;
  /** * 策略分类相关字段
是否独立 */
  independence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
};

/**
 * OpenAPI 组件类型：ExePlanDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanDetailVo
 */
export type RiskDataServiceExePlanDetailVo = {
  /** id */
  id?: number;
  /** 名称 */
  name?: string;
  /** 类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 流程方案id */
  processId?: string;
  /** 生效开始时间 */
  beginTime?: string;
  /** 生效结束时间 */
  endTime?: string;
  /** 打卡方式 */
  punchingModelType?: "NONE" | "PHOTOGRAPH" | "SCAN" | "NFC";
  /** 打卡对象 */
  punchingModelObject?: "SPACE" | "OBJECT";
  /** 对象打卡方式 */
  punchingModes?: RiskDataServicePunchingMode[];
  /** 全局时间配置 */
  globalTimeSetting?: RiskDataServiceGlobalTimeSetting;
  /** 变更状态 */
  isChange?: boolean;
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 创建时间 */
  createTime?: string;
  /** 修改时间 */
  updateTime?: string;
  nameChanged?: boolean;
  /** 选中策略事项dto */
  strategyItemDtos?: RiskDataServiceStrategyItemDto[];
  /** 关联事项列表 */
  strategyItemVos?: RiskDataServiceExePlanStrategyItemVo[];
};

/**
 * OpenAPI 组件类型：ImpactMeasure
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ImpactMeasure
 */
export type RiskDataServiceImpactMeasure = {
  /** 执行过程影响名称 */
  impactName?: string;
  /** 措施内容集合 */
  controlDescriptions?: string[];
};

/**
 * OpenAPI 组件类型：CooperateMeasure
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CooperateMeasure
 */
export type RiskDataServiceCooperateMeasure = {
  /** 配合事项名称 */
  cooperationMattersContentName?: string;
  /** 措施内容集合 */
  controlDescriptions?: string[];
};

/**
 * OpenAPI 组件类型：RiskEventImpactAndCooperateMeasuresVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventImpactAndCooperateMeasuresVo
 */
export type RiskDataServiceRiskEventImpactAndCooperateMeasuresVo = {
  /** 风险事件ID */
  riskEventId?: number;
  /** 风险事件描述 */
  riskEventDescription?: string;
  /** 有影响的事项 */
  impactMeasures?: RiskDataServiceImpactMeasure[];
  /** 需要配合的事项 */
  cooperateMeasures?: RiskDataServiceCooperateMeasure[];
};

/**
 * OpenAPI 组件类型：MaterialVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MaterialVo
 */
export type RiskDataServiceMaterialVo = {
  /** 专业编码 */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 图纸资料名称 */
  materialNames?: string[];
};

/**
 * OpenAPI 组件类型：MaterialMajorObjectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MaterialMajorObjectVo
 */
export type RiskDataServiceMaterialMajorObjectVo = {
  /** 专业编码 */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 系统/设备对象类名称 */
  objectNames?: string[];
};

/**
 * OpenAPI 组件类型：ObservationMeansItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObservationMeansItemVo
 */
export type RiskDataServiceObservationMeansItemVo = {
  /** 系统/设备对象类名称 */
  objectName?: string;
  /** 观测执行辅助资料 */
  observationMeans?: string;
  /** 观测执行辅助资料解释 */
  observationMeansExplain?: string;
};

/**
 * OpenAPI 组件类型：ObservationMeanVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObservationMeanVo
 */
export type RiskDataServiceObservationMeanVo = {
  /** 专业编码 */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 辅助资料列表 */
  observationMeansItems?: RiskDataServiceObservationMeansItemVo[];
};

/**
 * OpenAPI 组件类型：RiskEventMaterialsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventMaterialsVo
 */
export type RiskDataServiceRiskEventMaterialsVo = {
  /** 图纸资料 */
  pictureMaterialList?: RiskDataServiceMaterialVo[];
  /** 台账、策略、维修更换 */
  materialObjectList?: RiskDataServiceMaterialMajorObjectVo[];
  /** 观测执行辅助资料 */
  observationMeansList?: RiskDataServiceObservationMeanVo[];
};

/**
 * OpenAPI 组件类型：ObjectClassVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassVo
 */
export type RiskDataServiceObjectClassVo = {
  /** 对象类编码(空间类则是meoiSpaceType) */
  objectType?: string;
  /** 对象类名称 */
  objectName?: string;
  /** 对象类型 */
  type: "PROJECT" | "BUILDING" | "FLOOR" | "SPACE" | "EQUIPMENT" | "SHAFT" | "COMPONENT" | "MAJOR" | "VIRTUAL" | "TOOL" | "MATERIAL" | "SYSTEM" | "PARTITION" | "EQUIP_GROUP" | "SYSTEM_OBJECT" | "GROUP" | "PROJECT_CLASS" | "BUILDING_CLASS" | "FLOOR_CLASS" | "SPACE_PARENT_CLASS" | "SPACE_CLASS" | "SPACE_CLASS_AIM_V7" | "EQUIPMENT_CLASS" | "SHAFT_CLASS" | "COMPONENT_CLASS" | "VIRTUAL_CLASS" | "TOOL_CLASS" | "MATERIAL_CLASS" | "FUNCID" | "PARTITION_CLASS" | "BUSINESS_TAG" | "PIPE" | "EQUIP_GROUP_CLASS" | "UNDEFINED";
  /** 是否是系统 */
  system?: boolean;
  /** 对象类型(不包含部件) */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
};

/**
 * OpenAPI 组件类型：RiskEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventVo
 */
export type RiskDataServiceRiskEventVo = {
  /** 风险事件id */
  riskEventId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
};

/**
 * OpenAPI 组件类型：ObjectClassTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassTreeVo
 */
export type RiskDataServiceObjectClassTreeVo = {
  /** 本级的风险对象 */
  objectClassVo?: RiskDataServiceObjectClassVo;
  /** 本级的风险事件列表 */
  riskEventVoList?: RiskDataServiceRiskEventVo[];
  /** 子集级的风险对象 */
  children?: RiskDataServiceObjectClassTreeVo[];
  childrenRiskSize?: number;
};

/**
 * OpenAPI 组件类型：MeasureAimLevelQueryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MeasureAimLevelQueryVo
 */
export type RiskDataServiceMeasureAimLevelQueryVo = {
  /** 一级风控目标 */
  aimLevel1: "E0" | "E1" | "E2" | "E3";
  /** 二级风控目标 */
  aimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44"[];
};

/**
 * OpenAPI 组件类型：ObjectClassTreeQueryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassTreeQueryVo
 */
export type RiskDataServiceObjectClassTreeQueryVo = {
  /** 风险事件类型 */
  riskEventTypes?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE"[];
  /** 风险事件范围 */
  riskEventStatus: "NO" | "PRE_SALE" | "EXP" | "ZS";
  /** 风险事件属性 */
  riskAttributes?: "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11"[];
  /** 风控目标 */
  measureAimLevel?: RiskDataServiceMeasureAimLevelQueryVo[];
  /** 重要性 */
  importance?: "E0" | "E1" | "E2"[];
  /** 常见性 */
  ordinary?: "E0" | "E1" | "E2"[];
};

/**
 * OpenAPI 组件类型：RiskEventExpSaveVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventExpSaveVo
 */
export type RiskDataServiceRiskEventExpSaveVo = {
  /** 风险事件ID */
  riskEventIds?: number[];
};

/**
 * OpenAPI 组件类型：EquipmentObjectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentObjectVo
 */
export type RiskDataServiceEquipmentObjectVo = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 对象类型 */
  classType?: string;
  /** 对象类路径ID */
  objectPathId?: number;
  /** 对象类实例数量 */
  instanceCount?: number;
  /** 项目现有实例数量 */
  projectInstanceCount?: number;
  /** 设备部件信息 */
  components?: RiskDataServiceEquipmentObjectVo[];
  /** 关联设备对象类 */
  relationObjectList?: RiskDataServiceObjectClassVo[];
  /** 物理世界对象类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 是否为系统类 */
  isSystem?: boolean;
  /** 顶节点标记 */
  topNodeMark?: boolean;
  /** 展开HUB标记 */
  extendHubMark?: boolean;
  /** 实体类型 */
  entityType?: "SYSTEM" | "EQUIPMENT_DIC" | "EQUIPMENT" | "COMPONENT" | "FUNCTION_OBJECT" | "ENTITYCOMBINATION" | "SYS" | "SPACE" | "BUILD" | "PROJECT" | "FLOOR" | "SHAFT" | "MAINPARTITION" | "EQUIPMENTGROUP" | "COMPONENTGROUP";
  /** 是否有未完成实例 */
  hasUncompletedInstance?: boolean;
};

/**
 * OpenAPI 组件类型：MajorEquipmentTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MajorEquipmentTreeVo
 */
export type RiskDataServiceMajorEquipmentTreeVo = {
  /** 专业编码 */
  majorType?: string;
  /** 专业名称 */
  majorName?: string;
  /** 对象类信息 */
  objectList?: RiskDataServiceEquipmentObjectVo[];
};

/**
 * OpenAPI 组件类型：ConstraintObject
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ConstraintObject
 */
export type RiskDataServiceConstraintObject = {
  /** 对象编码 */
  classCode?: string;
  /** 对象名称 */
  className?: string;
};

/**
 * OpenAPI 组件类型：Relationship
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Relationship
 */
export type RiskDataServiceRelationship = {
  /** 关系名称 */
  name?: string;
  /** 图类型编码 */
  graphCode?: string;
  /** 边类型编码
EntityLibraryRelationship: 特殊逻辑/从属关系 */
  relCode?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对应实体为source,关联实体未target.消费方向:关联对象查对应实体
实例化对象source,实例化对象关联对象target.消费方向:关联对象查对应实体 */
  sourceClassCodeDir?: "FROM" | "TO" | "BOTH";
};

/**
 * OpenAPI 组件类型：InformationPointBdtp
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InformationPointBdtp
 */
export type RiskDataServiceInformationPointBdtp = {
  /** 约束信息点 */
  objectClassPoiList?: RiskDataServiceKlbEntityObjectPoi[];
};

/**
 * OpenAPI 组件类型：ConstraintInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ConstraintInfo
 */
export type RiskDataServiceConstraintInfo = {
  /** 约束对象 */
  constraintObject?: RiskDataServiceConstraintObject;
  /** 约束关系类型 */
  constraintRelationshipType?: RiskDataServiceRelationship;
  /** 约束关系信息点 */
  informationPointBDTP?: RiskDataServiceInformationPointBdtp;
};

/**
 * OpenAPI 组件类型：InstancePoiContentVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstancePoiContentVo
 */
export type RiskDataServiceInstancePoiContentVo = {
  /** 对象类型描述 */
  objectPoiCombines?: RiskDataServiceKlbEntityObjectPoi[];
  /** 约束信息 */
  constraintInfos?: RiskDataServiceConstraintInfo[];
};

/**
 * OpenAPI 组件类型：EquipmentInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceVo
 */
export type RiskDataServiceEquipmentInstanceVo = {
  /** 实例ID */
  id?: number;
  /** 实例名称 */
  name?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 投入时间 */
  investTime?: string;
  /** 备注 */
  remark?: string;
  /** 状态 */
  status?: "UNFINISHED" | "FINISHED";
  /** 实例分组id */
  groupId?: number;
  /** 关联部件名称列表 */
  relationComponentNames?: string[];
  /** 关联实例名称列表 */
  relationInstanceNames?: string[];
  /** 未关联重点核实部件名称列表 */
  unRelationComponentNames?: string[];
  /** 未关联实例名称列表 */
  unRelationInstanceNames?: string[];
  /** 未填写物理量字段名称列表 */
  unFillPhysicalQuantityNames?: string[];
  /** 实例信息点数据 */
  instancePoiContentVo?: RiskDataServiceInstancePoiContentVo;
};

/**
 * OpenAPI 组件类型：EquipmentInstanceQueryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceQueryVo
 */
export type RiskDataServiceEquipmentInstanceQueryVo = {
  /** 对象类路径ID */
  objectPathId: number;
  /** 设备实例状态 */
  status?: "UNFINISHED" | "FINISHED";
  /** 检查到一个实例未完成则停止 */
  checkOneStop?: boolean;
};

/**
 * OpenAPI 组件类型：InstanceWeightParamVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceWeightParamVo
 */
export type RiskDataServiceInstanceWeightParamVo = {
  /** 技术参数名称 */
  name: string;
  /** 技术参数值 */
  value?: string;
};

/**
 * OpenAPI 组件类型：EquipmentInstanceMeasuresVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceMeasuresVo
 */
export type RiskDataServiceEquipmentInstanceMeasuresVo = {
  /** 设备实例ID */
  equipmentInstanceId?: number;
  /** 风险措施ID */
  riskMeasureId: number;
  /** 节点ID */
  nodeId?: number;
  /** 节点类型 */
  nodeType?: "RISK" | "DANGER";
  /** 选择时间 */
  dateTime?: string;
  /** 风险措施类型 */
  type?: "E1" | "E2" | "E3" | "E4" | "E5";
};

/**
 * OpenAPI 组件类型：EquipmentInstanceElementVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceElementVo
 */
export type RiskDataServiceEquipmentInstanceElementVo = {
  /** 主键ID */
  id?: number;
  /** 因素类型Key字符串 */
  element?: string;
  /** 对应的节点id */
  nodeId?: number;
  /** 对应的节点类型 */
  nodeType?: "RISK" | "DANGER";
  /** 因素内容 */
  value?: string;
  /** 因素内容 */
  type?: "EXTERNAL_ELEMENT" | "PROBABILITY_ELEMENT";
};

/**
 * OpenAPI 组件类型：InstantiatePhysicalQuantityVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstantiatePhysicalQuantityVo
 */
export type RiskDataServiceInstantiatePhysicalQuantityVo = {
  /** 编码 */
  code?: string;
  /** 常见值 */
  commonValues?: number;
  /** 单位 */
  unit?: string;
  /** 名称 */
  name?: string;
  /** 数据值 */
  value?: string;
  /** 对象类编码 */
  instantiateClassCode?: string;
  /** 对象类名称 */
  instantiateClassName?: string;
  /** 实例化对象的关联关系 */
  objectRelationship?: string;
  /** 物理量类型 */
  quantityType?: "BASE_PARAM" | "TECH_PARAM";
};

/**
 * OpenAPI 组件类型：EquipmentInstanceDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceDetailVo
 */
export type RiskDataServiceEquipmentInstanceDetailVo = {
  /** 实例Id */
  id?: number;
  /** 设备实例名称 */
  name?: string;
  /** 所属空间ID */
  spaceId?: number;
  /** 对象路径ID */
  objectPathId?: number;
  /** 投入时间 */
  investTime?: string;
  /** 备注 */
  remark?: string;
  /** 状态 */
  status?: "UNFINISHED" | "FINISHED";
  /** 计算参数 */
  weightParams?: RiskDataServiceInstanceWeightParamVo[];
  /** 风险措施列表信息 */
  riskMeasures?: RiskDataServiceEquipmentInstanceMeasuresVo[];
  /** 因素列表 */
  elements?: RiskDataServiceEquipmentInstanceElementVo[];
  /** 选择部件列表 */
  relationInstances?: RiskDataServiceEquipmentInstanceDetailVo[];
  /** 物理量参数集合 */
  physicalQuantityList?: RiskDataServiceInstantiatePhysicalQuantityVo[];
  /** 实例信息点数据 */
  instancePoiContentVo?: RiskDataServiceInstancePoiContentVo;
};

/**
 * OpenAPI 组件类型：NodeInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/NodeInfoVo
 */
export type RiskDataServiceNodeInfoVo = {
  /** 节点id */
  nodeId?: number;
  /** 节点类型 */
  nodeType?: "RISK" | "DANGER";
  /** 节点名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：ElementOptionGroupNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ElementOptionGroupNodeVo
 */
export type RiskDataServiceElementOptionGroupNodeVo = {
  /** 节点信息 */
  nodes: RiskDataServiceNodeInfoVo[];
  /** 选项列表 */
  elementOptions?: string[];
  /** 因素类型Key字符串 */
  element?: string;
  /** 选定枚举值 */
  value?: string;
};

/**
 * OpenAPI 组件类型：EquipmentInstanceElementOptionsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceElementOptionsVo
 */
export type RiskDataServiceEquipmentInstanceElementOptionsVo = {
  /** 因素类型Key字符串 */
  element?: string;
  /** 因素类型 */
  type: "EXTERNAL_ELEMENT" | "PROBABILITY_ELEMENT";
  /** 节点下的选项列表 */
  elementNodeOptions?: RiskDataServiceElementOptionGroupNodeVo[];
};

/**
 * OpenAPI 组件类型：ObjectRelationVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectRelationVo
 */
export type RiskDataServiceObjectRelationVo = {
  /** 对象类id */
  objectId?: number;
  /** 图编码 */
  graphCode?: string;
  /** 边编码 */
  relCode?: string;
  /** 备用数量 */
  reserveCount?: number;
  /** 是否排除 */
  excludeFlag?: boolean;
};

/**
 * OpenAPI 组件类型：RelatedInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RelatedInstanceVo
 */
export type RiskDataServiceRelatedInstanceVo = {
  instanceIdList?: number[];
  graphCode?: string;
  relCode?: string;
  /** 关系方向 */
  direction?: "FROM_TO" | "TO_FROM" | "BOTH";
};

/**
 * OpenAPI 组件类型：EquipmentInstanceRelatedInstanceSaveVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceRelatedInstanceSaveVo
 */
export type RiskDataServiceEquipmentInstanceRelatedInstanceSaveVo = {
  /** 关联对象类型vo */
  objectRelationVos?: RiskDataServiceObjectRelationVo[];
  /** 设备实例id */
  instanceId: number;
  /** 关联的设备实例Vo */
  relatedInstanceVoList?: RiskDataServiceRelatedInstanceVo[];
};

/**
 * OpenAPI 组件类型：EquipmentInstanceSaveVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceSaveVo
 */
export type RiskDataServiceEquipmentInstanceSaveVo = {
  /** 实例Id */
  id?: number;
  /** 实例或部件名称 */
  name: string;
  /** 物理世界对象类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 所属空间ID */
  spaceId?: number;
  /** 对象路径ID */
  objectPathId: number;
  /** 投入时间 */
  investTime?: string;
  /** 备注 */
  remark?: string;
  /** 状态 */
  status?: "UNFINISHED" | "FINISHED";
  /** 计算参数 */
  weightParams?: RiskDataServiceInstanceWeightParamVo[];
  /** 因素列表 */
  elements?: RiskDataServiceEquipmentInstanceElementOptionsVo[];
  /** 风险措施列表 */
  riskMeasures?: RiskDataServiceEquipmentInstanceMeasuresVo[];
  /** 选择部件列表 */
  relationInstances?: RiskDataServiceEquipmentInstanceSaveVo[];
  /** 关联设备 */
  equipmentInstanceRelatedInstanceSaveVo?: RiskDataServiceEquipmentInstanceRelatedInstanceSaveVo;
  /** 物理量参数集合 */
  physicalQuantityList?: RiskDataServiceInstantiatePhysicalQuantityVo[];
  /** 实例信息点数据 */
  instancePoiContentVo?: RiskDataServiceInstancePoiContentVo;
};

/**
 * OpenAPI 组件类型：EquipmentInstanceWithRelationMarkVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceWithRelationMarkVo
 */
export type RiskDataServiceEquipmentInstanceWithRelationMarkVo = {
  /** 实例ID */
  id?: number;
  /** 实例名称 */
  name?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 投入时间 */
  investTime?: string;
  /** 备注 */
  remark?: string;
  /** 状态 */
  status?: "UNFINISHED" | "FINISHED";
  /** 实例分组id */
  groupId?: number;
  /** 关联部件名称列表 */
  relationComponentNames?: string[];
  /** 关联实例名称列表 */
  relationInstanceNames?: string[];
  /** 未关联重点核实部件名称列表 */
  unRelationComponentNames?: string[];
  /** 未关联实例名称列表 */
  unRelationInstanceNames?: string[];
  /** 未填写物理量字段名称列表 */
  unFillPhysicalQuantityNames?: string[];
  /** 实例信息点数据 */
  instancePoiContentVo?: RiskDataServiceInstancePoiContentVo;
  /** 是否已经关联 */
  related?: boolean;
};

/**
 * OpenAPI 组件类型：RelatedInstanceUnderObjectInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RelatedInstanceUnderObjectInfoVo
 */
export type RiskDataServiceRelatedInstanceUnderObjectInfoVo = {
  /** 对象类信息 */
  objectClassVo?: RiskDataServiceObjectClassVo;
  /** 隐患因素名称:跟图边类型有关 */
  dangerFactorsName?: string[];
  /** 路径id */
  objectPathId?: number;
  /** 展开型hub标记 */
  extendHubMark?: boolean;
  /** 排除标记 */
  excludeMark?: boolean;
  /** 对象下设备实例信息 */
  instances?: RiskDataServiceEquipmentInstanceWithRelationMarkVo[];
  /** 备用数量 */
  reserveCount?: number;
  /** 图类型 */
  graphCode?: string;
  /** 边类型 */
  relCode?: string;
  /** 关系名称:跟图边类型有关 */
  relationName?: string;
  /** 关系方向 */
  direction?: "FROM_TO" | "TO_FROM" | "BOTH";
};

/**
 * OpenAPI 组件类型：EquipmentInstanceMeasureOptionsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceMeasureOptionsVo
 */
export type RiskDataServiceEquipmentInstanceMeasureOptionsVo = {
  /** 风险措施ID */
  riskMeasureId: number;
  /** 措施内容 */
  controlDescription?: string;
  /** 风险措施类型 */
  type?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施对应的实例|部件的名称 */
  instanceName?: string;
};

/**
 * OpenAPI 组件类型：ConstraintInfoTypeAgg
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ConstraintInfoTypeAgg
 */
export type RiskDataServiceConstraintInfoTypeAgg = {
  /** 约束关系类型 */
  constraintRelationshipType?: RiskDataServiceRelationship;
  /** 约束信息点 */
  constraintInfoList?: RiskDataServiceConstraintInfo[];
};

/**
 * OpenAPI 组件类型：ObjectClassAttrOptionsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassAttrOptionsVo
 */
export type RiskDataServiceObjectClassAttrOptionsVo = {
  /** 部件名称 */
  name?: string;
  /** 类型 */
  type?: "OBJECT" | "COMPONENT" | "INSTANCE_GROUP" | "ENTITY_COMBINATION";
  /** 对象路径ID */
  objectPathId?: number;
  /** 是否为通用部件 */
  commonPart?: boolean;
  /** 是否为重点核实部件 */
  corePart?: boolean;
  /** 实体类型 */
  entityType?: "SYSTEM" | "EQUIPMENT_DIC" | "EQUIPMENT" | "COMPONENT" | "FUNCTION_OBJECT" | "ENTITYCOMBINATION" | "SYS" | "SPACE" | "BUILD" | "PROJECT" | "FLOOR" | "SHAFT" | "MAINPARTITION" | "EQUIPMENTGROUP" | "COMPONENTGROUP";
  /** 计算参数 */
  weightParams?: RiskDataServiceInstanceWeightParamVo[];
  /** 风险措施选项列表 */
  riskMeasures?: RiskDataServiceEquipmentInstanceMeasureOptionsVo[];
  /** 隐患因素选项列表 */
  elements?: RiskDataServiceEquipmentInstanceElementOptionsVo[];
  /** 物理量参数集合 */
  physicalQuantityList?: RiskDataServiceInstantiatePhysicalQuantityVo[];
  /** 对象类型描述 */
  objectPoiCombines?: RiskDataServiceKlbEntityObjectPoi[];
  /** 约束信息 */
  constraintInfoCombines?: RiskDataServiceConstraintInfoTypeAgg[];
};

/**
 * OpenAPI 组件类型：EquipmentInstanceReplicaResultVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceReplicaResultVo
 */
export type RiskDataServiceEquipmentInstanceReplicaResultVo = {
  /** 结果code(成功：success, 失败：fail) */
  code?: string;
  /** 错误提示信息 */
  message?: string;
  /** 重复的设备实例名称集合 */
  duplicateNames?: string[];
  /** 重复的空间id集合 */
  duplicateSpaceId?: number[];
};

/**
 * OpenAPI 组件类型：EquipmentInstanceReplicaCreateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipmentInstanceReplicaCreateDto
 */
export type RiskDataServiceEquipmentInstanceReplicaCreateDto = {
  /** 实例ID */
  instanceId: number;
  /** 复制空间实例时传入，空间位置ID集合 */
  spaceIdList?: number[];
  /** 实例名称集合 */
  names: string[];
  /** 需要复制的内容模块集合, 可选值：(SPACE: 所属空间位置, INVEST_TIME: 投入时间, REMARK: 备注, EXTERNAL_ELEMENT: 外部因素, REPAIR_MEASURE: 维修措施, REPLACE_MEASURE: 更换措施, INIT_LEVEL_ELEMENT: 初始程度影响因素, COMPONENT_INFO: 部件信息, PROBABILITY_ELEMENT: 概率要素, WEIGHT_PARAMS: 计算参数 OBJECT_POI: 对象类型描述, CONSTRAINT_INFO: 约束信息 */
  modules: "SPACE" | "INVEST_TIME" | "REMARK" | "EXTERNAL_ELEMENT" | "REPAIR_MEASURE" | "REPLACE_MEASURE" | "COMPONENT_INFO" | "PROBABILITY_ELEMENT" | "WEIGHT_PARAMS" | "BASE_PARAMS" | "TECH_PARAMS" | "OBJECT_POI" | "CONSTRAINT_INFO"[];
};

/**
 * OpenAPI 组件类型：ObjectTreeBaseVoMajorClassStrategyEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVoMajorClassStrategyEnum
 */
export type RiskDataServiceObjectTreeBaseVoMajorClassStrategyEnum = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "STRATEGY_CATEGORY" | "ROOM_FUNCTION";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorClassStrategyEnum[];
};

/**
 * OpenAPI 组件类型：StrategyItemTagVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyItemTagVo
 */
export type RiskDataServiceStrategyItemTagVo = {
  /** 主键id */
  id?: number;
  /** 名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemVo
 */
export type RiskDataServiceExeStrategyItemVo = {
  /** 策略事项id */
  id?: number;
  /** 策略事项名称 */
  name?: string;
  /** 策略分类id */
  strategyCategoryId?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 适用对象类id */
  suitableObjectClassId?: number;
  /** 空间功能类型集合 */
  roomFuncTypes?: RiskDataServiceRoomFuncTypeSimpleStruct[];
  /** 部件实体id（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityId?: number;
  /** 部件实体名称（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityName?: string;
  /** 物理世界对象类型(equipment: 设备，system: 系统, space: 空间) */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次 */
  period?: RiskDataServicePeriod;
  /** 备注 */
  remark?: string;
  /** 关联对象数量 */
  relObjectCount?: number;
  /** 真*策略事项标签数据 */
  strategyTag?: RiskDataServiceStrategyItemTagStruct[];
  /** 策略事项-执行顺序 */
  execStep?: RiskDataServiceExeStrategyExecStepSimpleVo;
  /** 策略事项是否有变更 */
  strategyItemChanged?: boolean;
  /** 前观措施id */
  beforeMeasureId?: number;
  /** 维修/更换措施id */
  executeMeasureId?: number;
  /** 管理范围外提示 */
  outsideScopeTips?: "OUTSIDE_BMS_SCOPE" | "OUTSIDE_PROJECT_SCOPE"[];
  /** 策略事项-关联的对象实例，是否存在无法评估风险状态的实例 */
  existUnableAssessInstance?: boolean;
  /** 策略事项-关联的措施，是否存在自定义措施 */
  existCustomizeMeasure?: boolean;
  /** * 策略分类相关字段
策略分类名称 */
  strategyCategoryName?: string;
  /** 是否独立标记 */
  strategyCategoryIndependence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
};

/**
 * OpenAPI 组件类型：ObjectTreeVoExeStrategyItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeVoExeStrategyItemVo
 */
export type RiskDataServiceObjectTreeVoExeStrategyItemVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "STRATEGY_CATEGORY" | "ROOM_FUNCTION";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorClassStrategyEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServiceExeStrategyItemVo[];
};

/**
 * OpenAPI 组件类型：ObjectTreeBaseVoStrategyObjectClassTreeEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVoStrategyObjectClassTreeEnum
 */
export type RiskDataServiceObjectTreeBaseVoStrategyObjectClassTreeEnum = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "OBJECT_TYPE" | "OBJECT_CLASS" | "STRATEGY_CATEGORY" | "STRATEGY_TYPE" | "STRATEGY_SECOND_TYPE" | "ROOM_FUNCTION";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoStrategyObjectClassTreeEnum[];
};

/**
 * OpenAPI 组件类型：StrategyCategoryTreeVoExeStrategyItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyCategoryTreeVoExeStrategyItemVo
 */
export type RiskDataServiceStrategyCategoryTreeVoExeStrategyItemVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "OBJECT_TYPE" | "OBJECT_CLASS" | "STRATEGY_CATEGORY" | "STRATEGY_TYPE" | "STRATEGY_SECOND_TYPE" | "ROOM_FUNCTION";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoStrategyObjectClassTreeEnum[];
  /** 节点关联的数据 */
  data?: RiskDataServiceExeStrategyItemVo[];
  /** 独立状态 */
  independence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 项目处理专业 */
  pjDealMajor?: RiskDataServicePjDealMajorBaseVo;
  /** 项目处理专业（包含软删的数据） */
  historyPjDealMajor?: RiskDataServicePjDealMajorBaseVo;
  /** 策略分类是否有变更 */
  strategyCategoryChanged?: boolean;
};

/**
 * OpenAPI 组件类型：ExeStrategyClassTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyClassTreeVo
 */
export type RiskDataServiceExeStrategyClassTreeVo = {
  /** 策略分类树 */
  trees?: RiskDataServiceStrategyCategoryTreeVoStrategyCategoryTreeDataVo[];
};

/**
 * OpenAPI 组件类型：ObjectClassPoiValueItem
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassPoiValueItem
 */
export type RiskDataServiceObjectClassPoiValueItem = {
  /** 信息点参数选项code */
  code?: string;
  /** 信息点参数选项id */
  id?: string;
  /** 信息点参数选项名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：ObjectClassPoi
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassPoi
 */
export type RiskDataServiceObjectClassPoi = {
  /** 信息点code */
  poiCode?: string;
  /** 信息点名称 */
  poiName?: string;
  /** 信息点id(信息点code和信息点类型组合) */
  poiId?: string;
  /** 信息点类型 */
  poiType?: "COMMON_POI" | "SPECIAL_POI" | "GENERAL_POI" | "GENERAL_ZONE_POI" | "BUILDING_POI";
  /** 信息点参数 */
  poiValueEnumDto?: RiskDataServiceObjectClassPoiValueItem[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemBatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemBatchUpdateDto
 */
export type RiskDataServiceExeStrategyItemBatchUpdateDto = {
  /** 策略事项id集合 */
  ids: number[];
  /** 周期类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 周期次数 */
  periodCount?: number;
  /** 周期数量 */
  periodTimes?: number;
  /** 标签id（该字段不传或传null，表示更新忽略该字段） */
  tagIds?: number[];
  /** 策略分类id */
  strategyCategoryId?: number;
  /** 执行顺序id */
  execStepId?: number;
};

/**
 * OpenAPI 组件类型：RoomFunctionTypeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RoomFunctionTypeNodeVo
 */
export type RiskDataServiceRoomFunctionTypeNodeVo = {
  /** 节点code */
  nodeCode?: string;
  /** 节点名称 */
  nodeName?: string;
  /** 下级节点 */
  child?: RiskDataServiceRoomFunctionTypeNodeVo;
};

/**
 * OpenAPI 组件类型：SubjectStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SubjectStruct
 */
export type RiskDataServiceSubjectStruct = {
  entityId?: number;
  /** 对象类 */
  classCode?: string;
  component?: boolean;
  /** 部件名称 */
  entityName?: string;
  /** 失效模式 */
  failureMode?: RiskDataServiceEnumStruct;
  /** 主体key */
  key?: string;
};

/**
 * OpenAPI 组件类型：InvestmentWorkingConditionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InvestmentWorkingConditionStruct
 */
export type RiskDataServiceInvestmentWorkingConditionStruct = {
  /** 通电状态 */
  powerUpState?: RiskDataServiceEnumStruct;
  /** 运行状态 */
  operatingState?: RiskDataServiceEnumStruct;
  /** 控制状态 */
  equipmentState?: RiskDataServiceEnumStruct;
  /** 设备工况营造流程 */
  workingConditionSOP?: string;
};

/**
 * OpenAPI 组件类型：TimeWorkingRequirementStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TimeWorkingRequirementStruct
 */
export type RiskDataServiceTimeWorkingRequirementStruct = {
  /** 季节要求 */
  seasonalRequirement?: RiskDataServiceEnumStruct;
  /** 时间工况要求
时段要求 */
  timeWorkingRequirement?: RiskDataServiceEnumStruct;
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
};

/**
 * OpenAPI 组件类型：WorkingGuidanceStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkingGuidanceStruct
 */
export type RiskDataServiceWorkingGuidanceStruct = {
  /** 标题 */
  title?: string;
  /** 内容 */
  content?: string;
};

/**
 * OpenAPI 组件类型：DecimalRangeStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DecimalRangeStruct
 */
export type RiskDataServiceDecimalRangeStruct = {
  /** 最小 */
  min?: number;
  /** 最大 */
  max?: number;
};

/**
 * OpenAPI 组件类型：MatchingItemStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MatchingItemStruct
 */
export type RiskDataServiceMatchingItemStruct = {
  /** 数据ID */
  objInstId?: number;
  /** 配合事项分类 */
  coordinationMatters?: RiskDataServiceEnumStruct;
  /** 配合事项内容ID */
  cooperationMattersContentIds?: number[];
  /** 配合事项内容 */
  cooperationMattersContent?: string[];
};

/**
 * OpenAPI 组件类型：MatchingContentStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MatchingContentStruct
 */
export type RiskDataServiceMatchingContentStruct = {
  /** 配合单位 */
  coordinateUnitList?: RiskDataServiceEnumStruct[];
  /** 配合事项 */
  matchingItemList?: RiskDataServiceMatchingItemStruct[];
};

/**
 * OpenAPI 组件类型：AttachmentStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AttachmentStruct
 */
export type RiskDataServiceAttachmentStruct = {
  id?: string;
  name?: string;
  type?: string;
};

/**
 * OpenAPI 组件类型：OptionFeedbackOptionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OptionFeedbackOptionStruct
 */
export type RiskDataServiceOptionFeedbackOptionStruct = {
  /** 选项唯一id,评分类的code存数字
数据id */
  code?: number;
  /** 展示名 */
  name?: string;
  /** 描述 */
  desc?: string;
  /** 节点别名 */
  nodeAlias?: string;
  /** 照片 */
  picture?: RiskDataServiceAttachmentStruct;
  /** 差值 */
  badValue?: number;
  /** 差值百分比 */
  badValuePercent?: number;
  /** 好值 */
  goodValue?: number;
  /** 好值百分比 */
  goodPercent?: number;
  /** 状态
反馈状态 */
  status?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
};

/**
 * OpenAPI 组件类型：OptionFeedbackStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OptionFeedbackStruct
 */
export type RiskDataServiceOptionFeedbackStruct = {
  /** 是否数值类型： true表示评分反馈， false表示感官反馈
是否数值类型 */
  rating?: boolean;
  /** 选项 */
  options?: RiskDataServiceOptionFeedbackOptionStruct[];
  /** 超执行阈值的选项 */
  executionThresholdOptions?: number[];
  /** 超诊断阈值的选项 */
  diagnosticThresholdOptions?: number[];
  /** 正常的选项 */
  normalOptions?: number[];
  /** 超征兆的选项 */
  symptomaticOptions?: number[];
  /** 异常的选项 */
  exceptionOptions?: number[];
};

/**
 * OpenAPI 组件类型：PoiInfoStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PoiInfoStruct
 */
export type RiskDataServicePoiInfoStruct = {
  /** 目标对象编码 */
  classCode?: string;
  /** 信息点编码 */
  poiCode?: string;
  /** 图编码 */
  graphCode?: string;
  /** 边编码 */
  relCode?: string;
  /** 依赖方向 */
  relationDirection?: "FROM_TO" | "TO_FROM" | "BOTH";
};

/**
 * OpenAPI 组件类型：ProcessParameterStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProcessParameterStruct
 */
export type RiskDataServiceProcessParameterStruct = {
  /** 参数id */
  id?: number;
  /** 过程参数名称 */
  name?: string;
  /** 描述 */
  desc?: string;
  /** 单位 */
  unit?: string;
  /** 是否为准静态参数 */
  staticParameter?: boolean;
  /** 测量点位数量 */
  numberOfMeasuringPoint?: number;
  /** 测量次数 */
  measurementTimes?: number;
  /** 聚合函数 */
  selectionMethod?: RiskDataServiceEnumStruct;
  /** 示意图 */
  schematicDiagramOfMeasuringPoint?: RiskDataServiceAttachmentStruct;
  /** 类型 */
  type?: "BDTP_POI" | "CUSTOMIZE";
  /** bdtp信息点 */
  bdtpInfo?: RiskDataServicePoiInfoStruct;
};

/**
 * OpenAPI 组件类型：MathRange
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MathRange
 */
export type RiskDataServiceMathRange = {
  /** 下限（区间较小值，null代表无穷） */
  lower?: number;
  /** 上限（区间较大值，null代表无穷） */
  upper?: number;
  /** 类型 */
  op?: "OPEN" | "CLOSED" | "OPEN_CLOSED" | "CLOSED_OPEN";
};

/**
 * OpenAPI 组件类型：TargetParameterInfoStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TargetParameterInfoStruct
 */
export type RiskDataServiceTargetParameterInfoStruct = {
  /** 名称 */
  name?: string;
  /** 编码 */
  code?: string;
  /** 单位 */
  unit?: string;
  /** 过程参数 */
  processParameterGroup?: RiskDataServiceProcessParameterStruct[];
  /** 公式信息 */
  formula?: RiskDataServiceFormula;
  /** 正常范围,生产过程数据 */
  normalRange?: RiskDataServiceMathRange;
  /** 隐患范围,生产过程数据 */
  superSignRange?: RiskDataServiceMathRange;
  /** 是否越大越好(默认越大越好) */
  theBiggerTheBetter?: boolean;
  /** 故障别名 */
  abnormalNodeAlias?: string;
  /** 超征兆别名 */
  superSignRangeNodeAlias?: string;
};

/**
 * OpenAPI 组件类型：ProcessParameterExtend
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProcessParameterExtend
 */
export type RiskDataServiceProcessParameterExtend = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
};

/**
 * OpenAPI 组件类型：MeasureSuitableClassVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MeasureSuitableClassVo
 */
export type RiskDataServiceMeasureSuitableClassVo = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 信息点列表 */
  objectClassPoiLists?: RiskDataServiceObjectClassPoi[];
  /** 部件信息 */
  componentClass?: RiskDataServiceMeasureSuitableClassVo;
};

/**
 * OpenAPI 组件类型：ExeMeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeMeasureVo
 */
export type RiskDataServiceExeMeasureVo = {
  /** 措施来源:
- rcc
- 自定义
措施来源类型 */
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  /** 基于rcc时,措施id
措施来源id */
  klbMeasureId?: number;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施名称 */
  name?: string;
  /** 主体信息 */
  subject?: RiskDataServiceSubjectStruct;
  /** 是否生成异常事件(默认值true)
是否生成异常事件(仅针对自定义措施，默认值true) */
  generateExceptionEvent?: boolean;
  /** 是否外委 */
  delegate?: boolean;
  /** 外委合同到期时间 */
  delegateExpireTime?: string;
  /** 资料名称 */
  meansName?: string;
  /** 资料说明 */
  meansExplain?: string;
  /** 仪器类型 */
  instrumentTypeNames?: string[];
  /** 仪器仪表说明 */
  instrumentDescription?: string;
  /** 设备工况要求 */
  investmentWorkingCondition?: RiskDataServiceInvestmentWorkingConditionStruct;
  /** 时间工况要求 */
  timeWorkingRequirement?: RiskDataServiceTimeWorkingRequirementStruct;
  /** 操作指导 */
  workingGuidanceList?: RiskDataServiceWorkingGuidanceStruct[];
  /** 是否拍照 */
  photoNoteRequirement?: RiskDataServiceEnumStruct;
  /** 正常拍照要求 */
  normalDescriptionOfPhoto?: string;
  /** 异常拍照要求 */
  unusualDescriptionOfPhoto?: string;
  /** 资质要求 */
  credentialRequirementList?: string[];
  /** 安全提示 */
  safePrompt?: string;
  /** 执行过程影响 */
  executionImpactList?: RiskDataServiceEnumStruct[];
  /** 是否相关部门要求 */
  departmentalRequirement?: boolean;
  /** 相关部门要求 */
  departmentalRequirementExplain?: string;
  /** 可执行人员专业 */
  majors?: RiskDataServiceMajor[];
  /** (单次执行)准备时长 */
  preparationTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)时长 */
  executionTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)人工时 */
  laborHour?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)非人工时
(单次执行)单次执行非人工成本 */
  nonLaborCost?: RiskDataServiceDecimalRangeStruct;
  /** 整改效果 */
  rectificationEffect?: string;
  /** 维修深度 */
  maintenanceDepth?: number;
  /** 物业配合内容 */
  matchingContentList?: RiskDataServiceMatchingContentStruct[];
  /** 反馈类型 */
  feedbackType?: "OPTION" | "PARAMETER_CALCULATION";
  /** 分档反馈-可选项 */
  optionFeedbackInfo?: RiskDataServiceOptionFeedbackStruct;
  /** 参数反馈-目标参数信息 */
  targetParameterInfo?: RiskDataServiceTargetParameterInfoStruct;
  /** 过程参数拓展信息 */
  processParameterExtends?: RiskDataServiceProcessParameterExtend[];
  /** 主键ID */
  id?: number;
  /** 管理范围外提示 */
  outsideScopeTip?: "OUTSIDE_BMS_SCOPE" | "OUTSIDE_PROJECT_SCOPE";
  /** 风险点(观测维修措施才返回值) */
  pjRisk?: RiskDataServiceKlbRiskInfoVo;
  /** 引用类措施-知识措施名称 */
  klbMeasureName?: string;
  /** 措施适用对象类信息 */
  measureSuitableClass?: RiskDataServiceMeasureSuitableClassVo;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemDetailVo
 */
export type RiskDataServiceExeStrategyItemDetailVo = {
  /** 策略事项id */
  id?: number;
  /** 策略事项名称 */
  name?: string;
  /** 策略分类id */
  strategyCategoryId?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 适用对象类id */
  suitableObjectClassId?: number;
  /** 空间功能类型集合 */
  roomFuncTypes?: RiskDataServiceRoomFuncTypeSimpleStruct[];
  /** 部件实体id（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityId?: number;
  /** 部件实体名称（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityName?: string;
  /** 物理世界对象类型(equipment: 设备，system: 系统, space: 空间) */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次 */
  period?: RiskDataServicePeriod;
  /** 备注 */
  remark?: string;
  /** 关联对象数量 */
  relObjectCount?: number;
  /** 真*策略事项标签数据 */
  strategyTag?: RiskDataServiceStrategyItemTagStruct[];
  /** 策略事项-执行顺序 */
  execStep?: RiskDataServiceExeStrategyExecStepSimpleVo;
  /** 策略事项是否有变更 */
  strategyItemChanged?: boolean;
  /** 前观措施id */
  beforeMeasureId?: number;
  /** 维修/更换措施id */
  executeMeasureId?: number;
  /** 管理范围外提示 */
  outsideScopeTips?: "OUTSIDE_BMS_SCOPE" | "OUTSIDE_PROJECT_SCOPE"[];
  /** 策略事项-关联的对象实例，是否存在无法评估风险状态的实例 */
  existUnableAssessInstance?: boolean;
  /** 策略事项-关联的措施，是否存在自定义措施 */
  existCustomizeMeasure?: boolean;
  /** 策略分类名称 */
  strategyCategoryName?: string;
  /** 是否独立标记 */
  strategyCategoryIndependence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 一级策略分类 */
  strategyCategoryType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 二级级策略分类 */
  parentStrategyCategoryId?: number;
  /** 二级级策略名称 */
  parentStrategyCategoryName?: string;
  /** 专业编码 可能为空 */
  majorCode?: string;
  /** 专业名称 可能为空 */
  majorName?: string;
  /** 措施数据 */
  measures?: RiskDataServiceExeMeasureVo[];
  /** 关联实例id */
  suitableInstanceIds?: string[];
  /** 对象类名称 */
  className?: string;
};

/**
 * OpenAPI 组件类型：PageExeStrategyItemObjectRelVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PageExeStrategyItemObjectRelVo
 */
export type RiskDataServicePageExeStrategyItemObjectRelVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceExeStrategyItemObjectRelVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemObjectRelPageQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemObjectRelPageQueryDto
 */
export type RiskDataServiceExeStrategyItemObjectRelPageQueryDto = {
  /** 策略事项id */
  strategyItemId?: number;
  /** 当前页 */
  current?: number;
  /** 每页条数 */
  size?: number;
  /** 搜索关键词 */
  keyword?: string;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemRelObjectSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemRelObjectSaveDto
 */
export type RiskDataServiceExeStrategyItemRelObjectSaveDto = {
  /** 策略事项id */
  id: number;
  /** 适用对象实例id集合 */
  suitableInstanceIds?: string[];
};

/**
 * OpenAPI 组件类型：ExeSuitableInstanceRelBatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeSuitableInstanceRelBatchUpdateDto
 */
export type RiskDataServiceExeSuitableInstanceRelBatchUpdateDto = {
  /** 策略分类id */
  strategyCategoryId: number;
  /** 适用对象类id */
  suitableObjectClassId: number;
  /** 关联实例集合 */
  suitableInstanceIds?: string[];
};

/**
 * OpenAPI 组件类型：ExeRefreshResultVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeRefreshResultVo
 */
export type RiskDataServiceExeRefreshResultVo = {
  /** 新增数量 */
  addItemCount?: number;
};

/**
 * OpenAPI 组件类型：RelatedObservationControlAndOrder
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RelatedObservationControlAndOrder
 */
export type RiskDataServiceRelatedObservationControlAndOrder = {
  observationWorkOrder?: "BEFOREEXECUTION" | "AFTEREXECUTION";
  ofACode?: string;
};

/**
 * OpenAPI 组件类型：ExeMeasureDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeMeasureDto
 */
export type RiskDataServiceExeMeasureDto = {
  /** 措施来源:
- rcc
- 自定义
措施来源类型 */
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  /** 基于rcc时,措施id
措施来源id */
  klbMeasureId?: number;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施名称 */
  name?: string;
  /** 主体信息 */
  subject?: RiskDataServiceSubjectStruct;
  /** 是否生成异常事件(默认值true)
是否生成异常事件(仅针对自定义措施，默认值true) */
  generateExceptionEvent?: boolean;
  /** 是否外委 */
  delegate?: boolean;
  /** 外委合同到期时间 */
  delegateExpireTime?: string;
  /** 资料名称 */
  meansName?: string;
  /** 资料说明 */
  meansExplain?: string;
  /** 仪器类型 */
  instrumentTypeNames?: string[];
  /** 仪器仪表说明 */
  instrumentDescription?: string;
  /** 设备工况要求 */
  investmentWorkingCondition?: RiskDataServiceInvestmentWorkingConditionStruct;
  /** 时间工况要求 */
  timeWorkingRequirement?: RiskDataServiceTimeWorkingRequirementStruct;
  /** 操作指导 */
  workingGuidanceList?: RiskDataServiceWorkingGuidanceStruct[];
  /** 是否拍照 */
  photoNoteRequirement?: RiskDataServiceEnumStruct;
  /** 正常拍照要求 */
  normalDescriptionOfPhoto?: string;
  /** 异常拍照要求 */
  unusualDescriptionOfPhoto?: string;
  /** 资质要求 */
  credentialRequirementList?: string[];
  /** 安全提示 */
  safePrompt?: string;
  /** 执行过程影响 */
  executionImpactList?: RiskDataServiceEnumStruct[];
  /** 是否相关部门要求 */
  departmentalRequirement?: boolean;
  /** 相关部门要求 */
  departmentalRequirementExplain?: string;
  /** 可执行人员专业 */
  majors?: RiskDataServiceMajor[];
  /** (单次执行)准备时长 */
  preparationTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)时长 */
  executionTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)人工时 */
  laborHour?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)非人工时
(单次执行)单次执行非人工成本 */
  nonLaborCost?: RiskDataServiceDecimalRangeStruct;
  /** 整改效果 */
  rectificationEffect?: string;
  /** 维修深度 */
  maintenanceDepth?: number;
  /** 物业配合内容 */
  matchingContentList?: RiskDataServiceMatchingContentStruct[];
  /** 反馈类型 */
  feedbackType?: "OPTION" | "PARAMETER_CALCULATION";
  /** 分档反馈-可选项 */
  optionFeedbackInfo?: RiskDataServiceOptionFeedbackStruct;
  /** 参数反馈-目标参数信息 */
  targetParameterInfo?: RiskDataServiceTargetParameterInfoStruct;
  /** 主键ID */
  id?: number;
  /** 过程参数拓展信息 */
  processParameterExtends?: RiskDataServiceProcessParameterExtend[];
  /** 措施来源名称 */
  controlDescription?: string;
  /** 自定义名称 */
  customizeName?: string;
  /** 文件资料 */
  means?: RiskDataServiceEnumStruct;
  /** 自定义文件资料 */
  customizeMeans?: string;
  /** 仪器类型,知识库仪器类型 */
  instrumentTypes?: RiskDataServiceEnumStruct[];
  /** 仪器类型，自定义类型 */
  customizeInstrumentType?: string;
  /** 资质要求 */
  credentialRequirement?: RiskDataServiceEnumStruct[];
  /** 资质要求-自定义 */
  customizeCredentialRequirement?: string;
  /** 是否分档反馈 */
  isItFuzzyObservation?: RiskDataServiceEnumStruct;
  /** 关联的观测措施 */
  relatedObservationControlAndOrders?: RiskDataServiceRelatedObservationControlAndOrder[];
  /** 适用的频次类型(E1:一次性, E2:被动, E3:定周期, E4:定阈值) */
  frequencyTypes: "E1" | "E2" | "E3" | "E4"[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemSaveDto
 */
export type RiskDataServiceExeStrategyItemSaveDto = {
  id?: number;
  /** 适用对象类id */
  suitableObjectClassId: number;
  /** 部件实体id */
  componentEntityId?: number;
  /** 策略分类id */
  strategyCategoryId: number;
  /** 适用对象实例id集合 */
  suitableInstanceIds?: string[];
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 频次时间数 */
  periodTimes?: number;
  /** 频次次数 */
  periodCount?: number;
  /** 措施内容 */
  measureVos?: RiskDataServiceExeMeasureDto[];
  /** 策略事项标签id */
  tagIds?: number[];
  /** 执行顺序id */
  execStepId?: number;
};

/**
 * OpenAPI 组件类型：ObjectClassTreeWithComponentVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassTreeWithComponentVo
 */
export type RiskDataServiceObjectClassTreeWithComponentVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "COMPONENT_NODE";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorClassAndSpaceFunctionEnum[];
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象编码（专业编码、对象类编码） */
  objectType?: string;
  /** 当前树节点关联的组树数据id集合 */
  dataIds?: string[];
};

/**
 * OpenAPI 组件类型：StrategySuitableObjClassMeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategySuitableObjClassMeasureVo
 */
export type RiskDataServiceStrategySuitableObjClassMeasureVo = {
  /** 措施来源:
- rcc
- 自定义
措施来源类型 */
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  /** 基于rcc时,措施id
措施来源id */
  klbMeasureId?: number;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施名称 */
  name?: string;
  /** 主体信息 */
  subject?: RiskDataServiceSubjectStruct;
  /** 是否生成异常事件(默认值true)
是否生成异常事件(仅针对自定义措施，默认值true) */
  generateExceptionEvent?: boolean;
  /** 是否外委 */
  delegate?: boolean;
  /** 外委合同到期时间 */
  delegateExpireTime?: string;
  /** 资料名称 */
  meansName?: string;
  /** 资料说明 */
  meansExplain?: string;
  /** 仪器类型 */
  instrumentTypeNames?: string[];
  /** 仪器仪表说明 */
  instrumentDescription?: string;
  /** 设备工况要求 */
  investmentWorkingCondition?: RiskDataServiceInvestmentWorkingConditionStruct;
  /** 时间工况要求 */
  timeWorkingRequirement?: RiskDataServiceTimeWorkingRequirementStruct;
  /** 操作指导 */
  workingGuidanceList?: RiskDataServiceWorkingGuidanceStruct[];
  /** 是否拍照 */
  photoNoteRequirement?: RiskDataServiceEnumStruct;
  /** 正常拍照要求 */
  normalDescriptionOfPhoto?: string;
  /** 异常拍照要求 */
  unusualDescriptionOfPhoto?: string;
  /** 资质要求 */
  credentialRequirementList?: string[];
  /** 安全提示 */
  safePrompt?: string;
  /** 执行过程影响 */
  executionImpactList?: RiskDataServiceEnumStruct[];
  /** 是否相关部门要求 */
  departmentalRequirement?: boolean;
  /** 相关部门要求 */
  departmentalRequirementExplain?: string;
  /** 可执行人员专业 */
  majors?: RiskDataServiceMajor[];
  /** (单次执行)准备时长 */
  preparationTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)时长 */
  executionTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)人工时 */
  laborHour?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)非人工时
(单次执行)单次执行非人工成本 */
  nonLaborCost?: RiskDataServiceDecimalRangeStruct;
  /** 整改效果 */
  rectificationEffect?: string;
  /** 维修深度 */
  maintenanceDepth?: number;
  /** 物业配合内容 */
  matchingContentList?: RiskDataServiceMatchingContentStruct[];
  /** 反馈类型 */
  feedbackType?: "OPTION" | "PARAMETER_CALCULATION";
  /** 分档反馈-可选项 */
  optionFeedbackInfo?: RiskDataServiceOptionFeedbackStruct;
  /** 参数反馈-目标参数信息 */
  targetParameterInfo?: RiskDataServiceTargetParameterInfoStruct;
  /** 主键ID */
  id?: number;
  /** 过程参数拓展信息 */
  processParameterExtends?: RiskDataServiceProcessParameterExtend[];
  /** 措施来源名称 */
  controlDescription?: string;
  /** 自定义名称 */
  customizeName?: string;
  /** 文件资料 */
  means?: RiskDataServiceEnumStruct;
  /** 自定义文件资料 */
  customizeMeans?: string;
  /** 仪器类型,知识库仪器类型 */
  instrumentTypes?: RiskDataServiceEnumStruct[];
  /** 仪器类型，自定义类型 */
  customizeInstrumentType?: string;
  /** 资质要求 */
  credentialRequirement?: RiskDataServiceEnumStruct[];
  /** 资质要求-自定义 */
  customizeCredentialRequirement?: string;
  /** 是否分档反馈 */
  isItFuzzyObservation?: RiskDataServiceEnumStruct;
  /** 关联的观测措施 */
  relatedObservationControlAndOrders?: RiskDataServiceRelatedObservationControlAndOrder[];
  /** 适用的频次类型(E1:一次性, E2:被动, E3:定周期, E4:定阈值) */
  frequencyTypes: "E1" | "E2" | "E3" | "E4"[];
  /** 措施对应的实体信息 */
  klbEntity?: RiskDataServiceKlbEntityVo;
  /** 该措施是否属于风险管理范围内 */
  inRiskManageScope?: boolean;
  /** 可关联的措施id集合 */
  relevantMeasureIds?: number[];
  /** 项目风险点业务id */
  riskBusinessId?: string;
  /** 项目风险点(观测维修措施才返回值) */
  pjRisk?: RiskDataServiceKlbRiskInfoVo;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemOptionalMeasureQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemOptionalMeasureQryDto
 */
export type RiskDataServiceExeStrategyItemOptionalMeasureQryDto = {
  /** 空间类或非空间类：对象类编码 */
  classCode: string;
  /** 空间类：空间功能类型 */
  roomFuncTypes?: string[];
};

/**
 * OpenAPI 组件类型：RwdInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdInstanceVo
 */
export type RiskDataServiceRwdInstanceVo = {
  /** 实例ID */
  id?: string;
  /** 实例对象类编码 */
  classCode?: string;
  /** 实例对象类名称 */
  className?: string;
  /** 实例对象类信息点 */
  classPoi?: RiskDataServiceObjectClassPoi[];
  /** 实例所属策略关联的对象类主键id（空间类在新增策略事项，返回可选实例时，该字段可能为空） */
  suitableObjectClassId?: number;
  /** 实例名称 */
  name?: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型名称 */
  roomFuncTypeName?: string;
  /** 所属空间实例id */
  spaceId?: string;
  /** 所属空间实例名称 */
  spaceName?: string;
  /** 所属楼层实例id */
  floorId?: string;
  /** 所属楼层实例名称 */
  floorName?: string;
  /** 所属楼层编号（用于排序） */
  floorSequenceId?: number;
  /** 所属建筑实例id */
  buildingId?: string;
  /** 所属建筑实例名称 */
  buildingName?: string;
  /** 设备品牌 */
  brand?: string;
  /** 设备型号 */
  specification?: string;
  /** 空间对象类编码 */
  spaceClassCode?: string;
  /** 空间对象类名称 */
  spaceClassCodeName?: string;
  /** 实例的对象类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 是否已经关联 */
  related?: boolean;
  /** 是否在实例化隐患树范围外 */
  outsideInstanceTreeScope?: boolean;
};

/**
 * OpenAPI 组件类型：PageRwdInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PageRwdInstanceVo
 */
export type RiskDataServicePageRwdInstanceVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceRwdInstanceVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  maxLimit?: number;
  /** countId */
  countId?: string;
};

/**
 * OpenAPI 组件类型：PageInstanceResultVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PageInstanceResultVo
 */
export type RiskDataServicePageInstanceResultVo = {
  result?: RiskDataServicePageRwdInstanceVo;
  alreadyRelatedId?: string[];
  /** 空间功能类型集合 */
  roomFuncTypes?: RiskDataServiceRoomFuncTypeSimpleStruct[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemInstancePageQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemInstancePageQueryDto
 */
export type RiskDataServiceExeStrategyItemInstancePageQueryDto = {
  /** 策略事项id */
  strategyItemIds?: number[];
  /** 是否将可关联的全部实例作为默认关联返回（入参策略事项id为空的情况下） */
  defaultAllRelated?: boolean;
  /** 空间类或非空间类：适用对象类id */
  suitableObjectClassId?: number;
  /** 空间类：空间功能类型 */
  roomFuncTypes?: string[];
  /** 对象实例名称(关键词模糊搜索) */
  keywords?: string;
  /** 页码(-1则查全量) */
  pageNum: number;
  /** 每页条数(-1则查全量) */
  pageSize: number;
  /** 排序字段 */
  orders?: RiskDataServiceOrderItem[];
  /** 信息点集合 */
  poiList?: RiskDataServiceObjectClassPoi[];
  /** 是否仅查询策略事项已关联的对象实例 */
  filterId?: boolean;
};

/**
 * OpenAPI 组件类型：StrategyItemCopyStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyItemCopyStruct
 */
export type RiskDataServiceStrategyItemCopyStruct = {
  /** 策略事项id */
  id: number;
  /** 策略分类id */
  strategyCategoryId?: number;
  /** 执行顺序id(可以为空) */
  execStepId?: number;
};

/**
 * OpenAPI 组件类型：MapLong
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapLong
 */
export type RiskDataServiceMapLong = Record<string, never>;

/**
 * OpenAPI 组件类型：MapLong14
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapLong14
 */
export type RiskDataServiceMapLong14 = Record<string, never>;

/**
 * OpenAPI 组件类型：MapListOriginalStrategyWithItemCount
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapListOriginalStrategyWithItemCount
 */
export type RiskDataServiceMapListOriginalStrategyWithItemCount = Record<string, never>;

/**
 * OpenAPI 组件类型：StrategyUnderTagAndStaticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyUnderTagAndStaticsVo
 */
export type RiskDataServiceStrategyUnderTagAndStaticsVo = {
  /** 事项统计 */
  staticsMap?: RiskDataServiceMapLong;
  /** 调研状态事项统计 */
  investigateStaticsMap?: RiskDataServiceMapLong14;
  /** 策略列表 */
  strategyUnderStrategyType?: RiskDataServiceMapListOriginalStrategyWithItemCount;
};

/**
 * OpenAPI 组件类型：StrategyFilterQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyFilterQryDto
 */
export type RiskDataServiceStrategyFilterQryDto = {
  /** 策略事项状态过滤条件 */
  statusFilter?: "UNDONE" | "DONE" | "UNCONFIRMED" | "WAIT_MODIFY" | "CONFIRMED"[];
  /** 策略事项调研状态过滤条件 */
  investigateStatusFilter?: "WAIT_INVESTIGATE" | "UNNECESSARY" | "FINISH_INVESTIGATE"[];
  /** TODO 去掉必填 */
  strategyId?: number;
};

/**
 * OpenAPI 组件类型：InformationVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InformationVo
 */
export type RiskDataServiceInformationVo = {
  /** 资料id */
  id?: number;
  /** 资料名称 */
  name?: string;
  /** 资料后缀 */
  fileSuffix?: string;
  /** 资料url */
  fileId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 创建人 */
  createBy?: string;
};

/**
 * OpenAPI 组件类型：ObjectClassWithId
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassWithId
 */
export type RiskDataServiceObjectClassWithId = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  objectName?: string;
  /** 对象类型 */
  type: "PROJECT" | "BUILDING" | "FLOOR" | "SPACE" | "EQUIPMENT" | "SHAFT" | "COMPONENT" | "MAJOR" | "VIRTUAL" | "TOOL" | "MATERIAL" | "SYSTEM" | "PARTITION" | "EQUIP_GROUP" | "SYSTEM_OBJECT" | "GROUP" | "PROJECT_CLASS" | "BUILDING_CLASS" | "FLOOR_CLASS" | "SPACE_PARENT_CLASS" | "SPACE_CLASS" | "SPACE_CLASS_AIM_V7" | "EQUIPMENT_CLASS" | "SHAFT_CLASS" | "COMPONENT_CLASS" | "VIRTUAL_CLASS" | "TOOL_CLASS" | "MATERIAL_CLASS" | "FUNCID" | "PARTITION_CLASS" | "BUSINESS_TAG" | "PIPE" | "EQUIP_GROUP_CLASS" | "UNDEFINED";
  /** 是否是系统 */
  system?: boolean;
  /** 对象类型(不包含部件) */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 项目原有策略适用对象类及信息点表主键id */
  id?: number;
  /** 父级id */
  parentId?: number;
  /** RCC对象类实体id */
  entityId?: string;
  entityName?: string;
  /** 对象类信息点 */
  objectClassPoiList?: RiskDataServiceObjectClassPoi[];
};

/**
 * OpenAPI 组件类型：OriginalStrategySaveOrUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategySaveOrUpdateDto
 */
export type RiskDataServiceOriginalStrategySaveOrUpdateDto = {
  /** 策略id */
  id?: number;
  /** 策略名称 */
  name: string;
  /** 策略的父级标签id */
  parentTagId: number;
  /** 关联对象 */
  relatedInformation?: RiskDataServiceInformationVo[];
  /** 适用对象类 */
  objectClassWithIds: RiskDataServiceObjectClassWithId[];
  /** 项目处理专业id */
  pjDealMajorId?: number;
};

/**
 * OpenAPI 组件类型：OriginalStrategyCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategyCategoryVo
 */
export type RiskDataServiceOriginalStrategyCategoryVo = {
  /** 标签id */
  id?: number;
  /** 标签名称 */
  name?: string;
  /** 标签类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 父级id */
  parentId?: number;
  /** 是否独立标记 */
  independence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 项目处理专业 */
  pjDealMajor?: RiskDataServicePjDealMajorBaseVo;
};

/**
 * OpenAPI 组件类型：OriginalStrategyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategyVo
 */
export type RiskDataServiceOriginalStrategyVo = {
  /** 策略id */
  id?: number;
  /** 策略名称 */
  name: string;
  /** 策略的父级标签id */
  parentTagId: number;
  /** 父级策略标签 */
  parentOriginalStrategyCategoryVo?: RiskDataServiceOriginalStrategyCategoryVo;
  /** 关联对象 */
  relatedInformation?: RiskDataServiceInformationVo[];
  /** 适用对象类 */
  objectClassWithIds: RiskDataServiceObjectClassWithId[];
  /** 关联的策略分类 */
  strategyCategoryVo?: RiskDataServiceOriginalStrategyCategoryVo;
};

/**
 * OpenAPI 组件类型：OriginalStrategyCrossProjCopyDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategyCrossProjCopyDto
 */
export type RiskDataServiceOriginalStrategyCrossProjCopyDto = {
  /** 项目id集合 */
  projectIds: string[];
  /** 策略id集合 */
  strategyIds: number[];
};

/**
 * OpenAPI 组件类型：OriginalStrategyItemMeasureDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategyItemMeasureDto
 */
export type RiskDataServiceOriginalStrategyItemMeasureDto = {
  /** 措施来源:
- rcc
- 自定义
措施来源类型 */
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  /** 基于rcc时,措施id
措施来源id */
  klbMeasureId?: number;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施名称 */
  name?: string;
  /** 主体信息 */
  subject?: RiskDataServiceSubjectStruct;
  /** 是否生成异常事件(默认值true)
是否生成异常事件(仅针对自定义措施，默认值true) */
  generateExceptionEvent?: boolean;
  /** 是否外委 */
  delegate?: boolean;
  /** 外委合同到期时间 */
  delegateExpireTime?: string;
  /** 资料名称 */
  meansName?: string;
  /** 资料说明 */
  meansExplain?: string;
  /** 仪器类型 */
  instrumentTypeNames?: string[];
  /** 仪器仪表说明 */
  instrumentDescription?: string;
  /** 设备工况要求 */
  investmentWorkingCondition?: RiskDataServiceInvestmentWorkingConditionStruct;
  /** 时间工况要求 */
  timeWorkingRequirement?: RiskDataServiceTimeWorkingRequirementStruct;
  /** 操作指导 */
  workingGuidanceList?: RiskDataServiceWorkingGuidanceStruct[];
  /** 是否拍照 */
  photoNoteRequirement?: RiskDataServiceEnumStruct;
  /** 正常拍照要求 */
  normalDescriptionOfPhoto?: string;
  /** 异常拍照要求 */
  unusualDescriptionOfPhoto?: string;
  /** 资质要求 */
  credentialRequirementList?: string[];
  /** 安全提示 */
  safePrompt?: string;
  /** 执行过程影响 */
  executionImpactList?: RiskDataServiceEnumStruct[];
  /** 是否相关部门要求 */
  departmentalRequirement?: boolean;
  /** 相关部门要求 */
  departmentalRequirementExplain?: string;
  /** 可执行人员专业 */
  majors?: RiskDataServiceMajor[];
  /** (单次执行)准备时长 */
  preparationTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)时长 */
  executionTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)人工时 */
  laborHour?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)非人工时
(单次执行)单次执行非人工成本 */
  nonLaborCost?: RiskDataServiceDecimalRangeStruct;
  /** 整改效果 */
  rectificationEffect?: string;
  /** 维修深度 */
  maintenanceDepth?: number;
  /** 物业配合内容 */
  matchingContentList?: RiskDataServiceMatchingContentStruct[];
  /** 反馈类型 */
  feedbackType?: "OPTION" | "PARAMETER_CALCULATION";
  /** 分档反馈-可选项 */
  optionFeedbackInfo?: RiskDataServiceOptionFeedbackStruct;
  /** 参数反馈-目标参数信息 */
  targetParameterInfo?: RiskDataServiceTargetParameterInfoStruct;
  /** 主键ID */
  id?: number;
  /** 过程参数拓展信息 */
  processParameterExtends?: RiskDataServiceProcessParameterExtend[];
  /** 措施来源名称 */
  controlDescription?: string;
  /** 自定义名称 */
  customizeName?: string;
  /** 文件资料 */
  means?: RiskDataServiceEnumStruct;
  /** 自定义文件资料 */
  customizeMeans?: string;
  /** 仪器类型,知识库仪器类型 */
  instrumentTypes?: RiskDataServiceEnumStruct[];
  /** 仪器类型，自定义类型 */
  customizeInstrumentType?: string;
  /** 资质要求 */
  credentialRequirement?: RiskDataServiceEnumStruct[];
  /** 资质要求-自定义 */
  customizeCredentialRequirement?: string;
  /** 是否分档反馈 */
  isItFuzzyObservation?: RiskDataServiceEnumStruct;
  /** 关联的观测措施 */
  relatedObservationControlAndOrders?: RiskDataServiceRelatedObservationControlAndOrder[];
  /** 适用的频次类型(E1:一次性, E2:被动, E3:定周期, E4:定阈值) */
  frequencyTypes: "E1" | "E2" | "E3" | "E4"[];
  /** 措施适用对象类信息 */
  measureSuitableClass?: RiskDataServiceMeasureSuitableClassVo;
};

/**
 * OpenAPI 组件类型：OriginalStrategyItemSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategyItemSaveDto
 */
export type RiskDataServiceOriginalStrategyItemSaveDto = {
  id?: number;
  strategyOriginalVo: RiskDataServiceOriginalStrategySaveOrUpdateDto;
  /** 适用对象类 */
  objectClass: RiskDataServiceObjectClassWithId;
  /** 适用对象 */
  suitableInstance?: string[];
  /** 原策略事项 */
  originalStrategyItem: string;
  /** 措施拼接出的事项内容 */
  displayName?: string;
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 频次时间数 */
  periodTimes?: number;
  /** 频次次数 */
  periodCount?: number;
  /** 备注 */
  remark?: string;
  /** 措施内容 */
  measureVos?: RiskDataServiceOriginalStrategyItemMeasureDto[];
  /** 策略事项状态 */
  status?: "UNDONE" | "DONE" | "UNCONFIRMED" | "WAIT_MODIFY" | "CONFIRMED";
  /** 策略事项调研状态 */
  investigateStatus?: "WAIT_INVESTIGATE" | "UNNECESSARY" | "FINISH_INVESTIGATE";
  /** 策略事项创建时间 */
  createTime?: string;
  /** 策略事项更新时间 */
  lastUpdateTime?: string;
  /** 是否自动关联当前事项所属对象类的适用实例（该字段仅新建策略事项时适用） */
  autoRelSuitableInstance?: boolean;
  /** 策略事项标签id */
  tagIds?: number[];
  /** 执行顺序id */
  execStepId?: number;
};

/**
 * OpenAPI 组件类型：StrategyItemChangeStatusDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyItemChangeStatusDto
 */
export type RiskDataServiceStrategyItemChangeStatusDto = {
  /** 数据id */
  id: number;
  /** 策略事项状态 */
  status?: "UNDONE" | "DONE" | "UNCONFIRMED" | "WAIT_MODIFY" | "CONFIRMED";
  /** 策略事项调研状态 */
  investigateStatus?: "WAIT_INVESTIGATE" | "UNNECESSARY" | "FINISH_INVESTIGATE";
};

/**
 * OpenAPI 组件类型：OriginalSuitableInstanceRelBatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalSuitableInstanceRelBatchUpdateDto
 */
export type RiskDataServiceOriginalSuitableInstanceRelBatchUpdateDto = {
  /** 策略id */
  strategyId: number;
  /** 适用对象类id */
  suitableObjectClassId: number;
  /** 关联实例集合 */
  suitableInstanceIds?: string[];
};

/**
 * OpenAPI 组件类型：StrategyItemOriginalPageQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyItemOriginalPageQueryDto
 */
export type RiskDataServiceStrategyItemOriginalPageQueryDto = {
  /** 策略事项id */
  strategyItemIds?: number[];
  /** 是否将可关联的全部实例作为默认关联返回（入参策略事项id为空的情况下） */
  defaultAllRelated?: boolean;
  /** 适用对象类id */
  suitableObjectClassId: number;
  /** 对象实例名称(关键词模糊搜索) */
  keywords?: string;
  /** 页码(-1则查全量) */
  pageNum: number;
  /** 每页条数(-1则查全量) */
  pageSize: number;
  /** 排序字段 */
  orders?: RiskDataServiceOrderItem[];
  /** 信息点集合 */
  poiList?: RiskDataServiceObjectClassPoi[];
  /** 是否仅查询策略事项已关联的对象实例 */
  filterId?: boolean;
};

/**
 * OpenAPI 组件类型：SuitableInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SuitableInstanceVo
 */
export type RiskDataServiceSuitableInstanceVo = {
  id?: string;
  /** 实例名称 */
  name?: string;
  /** 实例的对象类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 是否已经关联 */
  related?: boolean;
};

/**
 * OpenAPI 组件类型：StrategyMeasureOriginalVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyMeasureOriginalVo
 */
export type RiskDataServiceStrategyMeasureOriginalVo = {
  /** 措施来源:
- rcc
- 自定义
措施来源类型 */
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  /** 基于rcc时,措施id
措施来源id */
  klbMeasureId?: number;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施名称 */
  name?: string;
  /** 主体信息 */
  subject?: RiskDataServiceSubjectStruct;
  /** 是否生成异常事件(默认值true)
是否生成异常事件(仅针对自定义措施，默认值true) */
  generateExceptionEvent?: boolean;
  /** 是否外委 */
  delegate?: boolean;
  /** 外委合同到期时间 */
  delegateExpireTime?: string;
  /** 资料名称 */
  meansName?: string;
  /** 资料说明 */
  meansExplain?: string;
  /** 仪器类型 */
  instrumentTypeNames?: string[];
  /** 仪器仪表说明 */
  instrumentDescription?: string;
  /** 设备工况要求 */
  investmentWorkingCondition?: RiskDataServiceInvestmentWorkingConditionStruct;
  /** 时间工况要求 */
  timeWorkingRequirement?: RiskDataServiceTimeWorkingRequirementStruct;
  /** 操作指导 */
  workingGuidanceList?: RiskDataServiceWorkingGuidanceStruct[];
  /** 是否拍照 */
  photoNoteRequirement?: RiskDataServiceEnumStruct;
  /** 正常拍照要求 */
  normalDescriptionOfPhoto?: string;
  /** 异常拍照要求 */
  unusualDescriptionOfPhoto?: string;
  /** 资质要求 */
  credentialRequirementList?: string[];
  /** 安全提示 */
  safePrompt?: string;
  /** 执行过程影响 */
  executionImpactList?: RiskDataServiceEnumStruct[];
  /** 是否相关部门要求 */
  departmentalRequirement?: boolean;
  /** 相关部门要求 */
  departmentalRequirementExplain?: string;
  /** 可执行人员专业 */
  majors?: RiskDataServiceMajor[];
  /** (单次执行)准备时长 */
  preparationTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)时长 */
  executionTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)人工时 */
  laborHour?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)非人工时
(单次执行)单次执行非人工成本 */
  nonLaborCost?: RiskDataServiceDecimalRangeStruct;
  /** 整改效果 */
  rectificationEffect?: string;
  /** 维修深度 */
  maintenanceDepth?: number;
  /** 物业配合内容 */
  matchingContentList?: RiskDataServiceMatchingContentStruct[];
  /** 反馈类型 */
  feedbackType?: "OPTION" | "PARAMETER_CALCULATION";
  /** 分档反馈-可选项 */
  optionFeedbackInfo?: RiskDataServiceOptionFeedbackStruct;
  /** 参数反馈-目标参数信息 */
  targetParameterInfo?: RiskDataServiceTargetParameterInfoStruct;
  /** 主键ID */
  id?: number;
  /** 过程参数拓展信息 */
  processParameterExtends?: RiskDataServiceProcessParameterExtend[];
  /** 措施来源名称 */
  controlDescription?: string;
  /** 自定义名称 */
  customizeName?: string;
  /** 文件资料 */
  means?: RiskDataServiceEnumStruct;
  /** 自定义文件资料 */
  customizeMeans?: string;
  /** 仪器类型,知识库仪器类型 */
  instrumentTypes?: RiskDataServiceEnumStruct[];
  /** 仪器类型，自定义类型 */
  customizeInstrumentType?: string;
  /** 资质要求 */
  credentialRequirement?: RiskDataServiceEnumStruct[];
  /** 资质要求-自定义 */
  customizeCredentialRequirement?: string;
  /** 是否分档反馈 */
  isItFuzzyObservation?: RiskDataServiceEnumStruct;
  /** 关联的观测措施 */
  relatedObservationControlAndOrders?: RiskDataServiceRelatedObservationControlAndOrder[];
  /** 适用的频次类型(E1:一次性, E2:被动, E3:定周期, E4:定阈值) */
  frequencyTypes: "E1" | "E2" | "E3" | "E4"[];
  /** 措施适用对象类信息 */
  measureSuitableClass?: RiskDataServiceMeasureSuitableClassVo;
};

/**
 * OpenAPI 组件类型：OriginalStrategyExecStepVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategyExecStepVo
 */
export type RiskDataServiceOriginalStrategyExecStepVo = {
  /** id */
  id?: number;
  /** 执行步骤名称 */
  name?: string;
  /** 排序索引 */
  sortIndex?: number;
  /** 策略分类id */
  strategyCategoryId?: number;
  /** 是否能删除 */
  deleteAble?: boolean;
};

/**
 * OpenAPI 组件类型：OriginalStrategyItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategyItemVo
 */
export type RiskDataServiceOriginalStrategyItemVo = {
  id?: number;
  strategyOriginalVo: RiskDataServiceOriginalStrategyVo;
  /** 适用对象类 */
  objectClass: RiskDataServiceObjectClassWithId;
  /** 空间功能类型集合 */
  roomFuncTypes?: RiskDataServiceRoomFuncTypeSimpleStruct[];
  /** 适用对象 */
  suitableInstance?: RiskDataServiceSuitableInstanceVo[];
  /** 原策略事项 */
  originalStrategyItem?: string;
  /** 措施拼接出的事项内容 */
  displayName?: string;
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 频次时间数 */
  periodTimes?: number;
  /** 频次次数 */
  periodCount?: number;
  /** 备注 */
  remark?: string;
  /** 措施内容 */
  measureVos?: RiskDataServiceStrategyMeasureOriginalVo[];
  /** 策略事项状态 */
  status?: "UNDONE" | "DONE" | "UNCONFIRMED" | "WAIT_MODIFY" | "CONFIRMED";
  /** 策略事项调研状态 */
  investigateStatus?: "WAIT_INVESTIGATE" | "UNNECESSARY" | "FINISH_INVESTIGATE";
  /** 策略事项创建时间 */
  createTime?: string;
  /** 策略事项更新时间 */
  lastUpdateTime?: string;
  /** 策略事项标签数据 */
  strategyTag?: RiskDataServiceStrategyItemTagVo[];
  /** 策略事项-执行顺序 */
  execStep?: RiskDataServiceOriginalStrategyExecStepVo;
};

/**
 * OpenAPI 组件类型：StrategyItemGroupByObjectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyItemGroupByObjectVo
 */
export type RiskDataServiceStrategyItemGroupByObjectVo = {
  /** 对象类信息 */
  objectClassVo?: RiskDataServiceObjectClassWithId;
  /** 策略事项清单 */
  itemVos?: RiskDataServiceOriginalStrategyItemVo[];
};

/**
 * OpenAPI 组件类型：GroupObjectRelationTypeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/GroupObjectRelationTypeVo
 */
export type RiskDataServiceGroupObjectRelationTypeVo = {
  /** 关联关系编码 */
  relationCode?: string;
  /** 关联关系类型 */
  relationGraphCode?: string;
  /** 关联关系名称 */
  relationName?: string;
};

/**
 * OpenAPI 组件类型：GroupObjectTree
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/GroupObjectTree
 */
export type RiskDataServiceGroupObjectTree = {
  /** 对象类路径ID */
  id?: string;
  /** 对象类型 */
  objType?: string;
  /** 对象编码 */
  objectCode?: string;
  /** 对象名称 */
  objectName?: string;
  /** 统计数量 */
  count?: number;
  /** 关联关系列表 */
  relationTypes?: RiskDataServiceGroupObjectRelationTypeVo[];
  /** 子集对象类列表 */
  children?: RiskDataServiceGroupObjectTree[];
};

/**
 * OpenAPI 组件类型：PeriodGroupVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PeriodGroupVo
 */
export type RiskDataServicePeriodGroupVo = {
  /** 周期类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 名称 */
  name?: string;
  /** 周期时间 */
  periodList?: RiskDataServicePeriod[];
};

/**
 * OpenAPI 组件类型：OriginStrategyItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginStrategyItemVo
 */
export type RiskDataServiceOriginStrategyItemVo = {
  /** 策略事项id */
  id?: number;
  /** 策略事项名称 */
  name?: string;
  /** 策略分类id */
  strategyCategoryId?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 适用对象类id */
  suitableObjectClassId?: number;
  /** 空间功能类型集合 */
  roomFuncTypes?: RiskDataServiceRoomFuncTypeSimpleStruct[];
  /** 部件实体id（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityId?: number;
  /** 部件实体名称（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityName?: string;
  /** 物理世界对象类型(equipment: 设备，system: 系统, space: 空间) */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次 */
  period?: RiskDataServicePeriod;
  /** 备注 */
  remark?: string;
  /** 关联对象数量 */
  relObjectCount?: number;
  /** 适用对象是否已变更 */
  suitableObjectChanged?: boolean;
  /** 真*策略事项标签数据 */
  strategyTag?: RiskDataServiceStrategyItemTagVo[];
  /** 策略事项-执行顺序 */
  execStep?: RiskDataServiceExeStrategyExecStepSimpleVo;
  /** * 策略分类相关字段
策略分类名称 */
  strategyCategoryName?: string;
  /** 是否独立标记 */
  strategyCategoryIndependence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 原策略事项名称 */
  originName?: string;
};

/**
 * OpenAPI 组件类型：OriginStrategyDataVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginStrategyDataVo
 */
export type RiskDataServiceOriginStrategyDataVo = {
  /** 对象类树 */
  groupObjectTrees?: RiskDataServiceGroupObjectTree[];
  /** 频次类型选项 */
  periodVos?: RiskDataServicePeriodGroupVo[];
  /** 策略事项清单 */
  strategyItems?: RiskDataServiceOriginStrategyItemVo[];
};

/**
 * OpenAPI 组件类型：ObjectTreeVoOriginStrategyItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeVoOriginStrategyItemVo
 */
export type RiskDataServiceObjectTreeVoOriginStrategyItemVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "STRATEGY_CATEGORY" | "ROOM_FUNCTION";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorClassStrategyEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServiceOriginStrategyItemVo[];
};

/**
 * OpenAPI 组件类型：StrategyCategoryTreeVoOriginStrategyItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyCategoryTreeVoOriginStrategyItemVo
 */
export type RiskDataServiceStrategyCategoryTreeVoOriginStrategyItemVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "OBJECT_TYPE" | "OBJECT_CLASS" | "STRATEGY_CATEGORY" | "STRATEGY_TYPE" | "STRATEGY_SECOND_TYPE" | "ROOM_FUNCTION";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoStrategyObjectClassTreeEnum[];
  /** 节点关联的数据 */
  data?: RiskDataServiceOriginStrategyItemVo[];
  /** 独立状态 */
  independence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 项目处理专业 */
  pjDealMajor?: RiskDataServicePjDealMajorBaseVo;
  /** 项目处理专业（包含软删的数据） */
  historyPjDealMajor?: RiskDataServicePjDealMajorBaseVo;
};

/**
 * OpenAPI 组件类型：StrategyItemInstanceRelDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyItemInstanceRelDto
 */
export type RiskDataServiceStrategyItemInstanceRelDto = {
  id: number;
  suitableInstance?: string[];
};

/**
 * OpenAPI 组件类型：ExeStrategyOriginalItemDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyOriginalItemDetailVo
 */
export type RiskDataServiceExeStrategyOriginalItemDetailVo = {
  /** 策略事项id */
  id?: number;
  /** 策略事项名称 */
  name?: string;
  /** 策略分类id */
  strategyCategoryId?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 适用对象类id */
  suitableObjectClassId?: number;
  /** 空间功能类型集合 */
  roomFuncTypes?: RiskDataServiceRoomFuncTypeSimpleStruct[];
  /** 部件实体id（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityId?: number;
  /** 部件实体名称（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityName?: string;
  /** 物理世界对象类型(equipment: 设备，system: 系统, space: 空间) */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次 */
  period?: RiskDataServicePeriod;
  /** 备注 */
  remark?: string;
  /** 关联对象数量 */
  relObjectCount?: number;
  /** 适用对象是否已变更 */
  suitableObjectChanged?: boolean;
  /** 真*策略事项标签数据 */
  strategyTag?: RiskDataServiceStrategyItemTagVo[];
  /** 策略事项-执行顺序 */
  execStep?: RiskDataServiceExeStrategyExecStepSimpleVo;
  /** 策略分类名称 */
  strategyCategoryName?: string;
  /** 是否独立标记 */
  strategyCategoryIndependence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 一级策略分类 */
  strategyCategoryType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 二级级策略分类 */
  parentStrategyCategoryId?: number;
  /** 二级级策略名称 */
  parentStrategyCategoryName?: string;
  /** 对象类名称 */
  className?: string;
  /** 专业编码 可能为空 */
  majorCode?: string;
  /** 专业名称 可能为空 */
  majorName?: string;
  /** 措施数据 */
  measures?: RiskDataServiceExeMeasureVo[];
  /** 关联实例id */
  suitableInstanceIds?: string[];
  /** 原有策略名称 */
  originalStrategy?: string;
  /** 主责岗位 */
  maintainResponse?: string;
};

/**
 * OpenAPI 组件类型：OriginalStrategyCopyDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategyCopyDto
 */
export type RiskDataServiceOriginalStrategyCopyDto = {
  /** 来源策略id */
  strategyId?: number;
  /** 复制策略名称 */
  name?: string;
  /** 二级策略分类id */
  secondStrategyCategoryId?: number;
};

/**
 * OpenAPI 组件类型：ResponseResultVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ResponseResultVo
 */
export type RiskDataServiceResponseResultVo = {
  /** 结果code(成功：success, 失败：fail) */
  code?: string;
  /** 错误信息 */
  errorMsg?: string;
};

/**
 * OpenAPI 组件类型：OriginalStrategyItemBatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalStrategyItemBatchUpdateDto
 */
export type RiskDataServiceOriginalStrategyItemBatchUpdateDto = {
  /** 原有策略事项id集合 */
  ids: number[];
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 周期类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 周期次数 */
  periodCount?: number;
  /** 周期数量 */
  periodTimes?: number;
  /** 标签id */
  tagIds?: number[];
  /** 策略事项状态 */
  status?: "UNDONE" | "DONE" | "UNCONFIRMED" | "WAIT_MODIFY" | "CONFIRMED";
  /** 执行顺序id */
  execStepId?: number;
};

/**
 * OpenAPI 组件类型：PeriodVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PeriodVo
 */
export type RiskDataServicePeriodVo = {
  /** 周期类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 周期数量（多少次） */
  periodCount?: number;
  /** 频次数量(多少天) */
  periodTimes?: number;
};

/**
 * OpenAPI 组件类型：ExeStrategyCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyCategoryVo
 */
export type RiskDataServiceExeStrategyCategoryVo = {
  /** 策略分类id */
  id?: number;
  /** 策略分类名称 */
  name?: string;
  /** 策略分类类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 独立状态 */
  independence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 项目处理专业id */
  pjDealMajorId?: number;
  /** 父级标签id */
  parentId?: number;
};

/**
 * OpenAPI 组件类型：ExeMeasureSimpleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeMeasureSimpleVo
 */
export type RiskDataServiceExeMeasureSimpleVo = {
  id?: number;
  /** 自定义措施名称 */
  customizeName?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施来源类型 */
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  /** 措施来源id，如果是生产线知识措施才有值 */
  sourceMeasureId?: number;
  /** 措施来源名称，如果是生产线知识措施才有值 */
  controlDescription?: string;
  /** 操作指导 */
  workingGuidanceList?: RiskDataServiceWorkingGuidanceStruct[];
  /** 分档反馈信息 */
  optionFeedbackInfo?: RiskDataServiceOptionFeedbackStruct;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemSimpleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemSimpleVo
 */
export type RiskDataServiceExeStrategyItemSimpleVo = {
  /** 策略事项id */
  id?: number;
  /** 策略事项名称 */
  name?: string;
  /** 原策略事项名称 */
  originalStrategyName?: string;
  /** 父级标签类型 */
  parentTagType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 周期 */
  period?: RiskDataServicePeriodVo;
  /** 策略分类层级信息 */
  classifyList?: RiskDataServiceExeStrategyCategoryVo[];
  /** 标签信息 */
  tagStructs?: RiskDataServiceEnumStruct[];
  /** 前观测措施 */
  beforeMeasure?: RiskDataServiceExeMeasureSimpleVo;
  /** 维修/更换措施 */
  executeMeasure?: RiskDataServiceExeMeasureSimpleVo;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemQueryDto
 */
export type RiskDataServiceExeStrategyItemQueryDto = {
  /** 实例id */
  instanceIds?: string[];
  /** 策略分类标签id */
  strategyClassifyIds?: number[];
  /** 策略事项id */
  ids?: number[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemPublishRecordVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemPublishRecordVo
 */
export type RiskDataServiceExeStrategyItemPublishRecordVo = {
  id?: number;
  /** 更新时间 */
  publishTime?: string;
  /** 数据是否变化 */
  dataChanged?: boolean;
};

/**
 * OpenAPI 组件类型：ObserveObjectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveObjectVo
 */
export type RiskDataServiceObserveObjectVo = {
  /** 策略事项id */
  strategyItemId?: number;
  /** 策略事项实例id */
  instanceId?: string;
  /** 观测对象id */
  observeObjectMap?: RiskDataServiceMapString;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemDataVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemDataVo
 */
export type RiskDataServiceExeStrategyItemDataVo = {
  /** 策略事项列表 */
  strategyItems?: RiskDataServiceExeStrategyItemVo[];
  /** 对象类树 */
  groupObjectTrees?: RiskDataServiceGroupObjectTree[];
  /** 发布时间（已发布事项列表才填充此字段） */
  publishTime?: string;
  /** 频次类型选项 */
  periodVos?: RiskDataServicePeriodGroupVo[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemTagVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemTagVo
 */
export type RiskDataServiceExeStrategyItemTagVo = {
  /** 标签id */
  id?: number;
  /** 标签名称 */
  name?: string;
  /** 标签类型：1巡检、2维保 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 标签选中的对象组合打包规则code */
  packageRuleCode?: string;
  /** 标签选中的对象组合打包规则名称 */
  ruleName?: string;
};

/**
 * OpenAPI 组件类型：ObsResearchScopeWorkSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsResearchScopeWorkSaveDto
 */
export type RiskDataServiceObsResearchScopeWorkSaveDto = {
  /** 调研检查工作id（编辑时不能为空） */
  id?: number;
  /** 调研检查工作名称 */
  name: string;
};

/**
 * OpenAPI 组件类型：ObserveScopeWorkVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveScopeWorkVo
 */
export type RiskDataServiceObserveScopeWorkVo = {
  /** 调研检查工作id */
  id?: number;
  /** 调研检查工作名称 */
  name?: string;
  /** 调研检查工作最小日期 */
  minTime?: string;
  /** 调研检查工作最大日期 */
  maxTime?: string;
  /** 工作状态 */
  workStatus?: "INIT" | "PROCESSING" | "FINISHED";
  /** 调研检查工作是否已有变更 */
  changed?: boolean;
};

/**
 * OpenAPI 组件类型：ObserveRiskChangeStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveRiskChangeStatisticsVo
 */
export type RiskDataServiceObserveRiskChangeStatisticsVo = {
  /** 新增的风险事件id集合 */
  newRiskEventIds?: number[];
  /** 更新的风险事件id集合 */
  updateRiskEventIds?: number[];
};

/**
 * OpenAPI 组件类型：ObserveObjectTypeTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveObjectTypeTreeVo
 */
export type RiskDataServiceObserveObjectTypeTreeVo = {
  /** 树节点类别 */
  nodeCategory?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION" | "MAJOR";
  /** 树节点类别code(如：专业编码) */
  nodeCode?: string;
  /** 对象类code(多个用逗号分隔)（供前端使用） */
  code?: string;
  /** 对象类名称（供前端使用） */
  name?: string;
  /** BDTP对象类类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 风险事件数量 */
  riskEventCount?: number;
  /** 子集 */
  children?: RiskDataServiceObserveObjectTypeTreeVo[];
};

/**
 * OpenAPI 组件类型：PjRiskHistory
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskHistory
 */
export type RiskDataServicePjRiskHistory = {
  /** 风险历史信息主键id */
  id?: number;
  /** 风险事件id */
  riskEventId?: number;
  /** 风险事件发生时间 */
  happenedTime?: string;
  /** 风险事件影响范围描述 */
  influenceDesc?: string;
  /** 价值主张 */
  valueProposition?: string;
  /** 已选择的隐患因素id列表 */
  dangerFactor?: number[];
};

/**
 * OpenAPI 组件类型：ObserveScopeRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveScopeRiskVo
 */
export type RiskDataServiceObserveScopeRiskVo = {
  /** 对象类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类code */
  classCode?: string;
  /** 排序索引 */
  sortIndex?: string;
  /** 风险事件簇名称 */
  clusterNames?: string[];
  /** 风险事件id */
  id?: number;
  /** 风险事件业务唯一键 */
  businessId?: number;
  /** 对象类名称 */
  className?: string;
  /** 实体类信息点 */
  entityObjectPois?: RiskDataServiceKlbEntityObjectPoi[];
  /** 对象实例总数 */
  instanceCount?: number;
  /** 已加入检查对象实例数量 */
  joinedCheckInstanceCount?: number;
  /** 专业code */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 风险事件描述 */
  riskEventDescription?: string;
  /** 风险事件类型 */
  riskEventType?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE";
  /** 风险历史信息 */
  riskHistory?: RiskDataServicePjRiskHistory;
  /** 检查工时 */
  checkTime?: number;
  /** 检查项数量 */
  checkItemCount?: number;
  /** 是否加入现场检查 */
  joinedCheck?: boolean;
  /** 是否加入对象信息调研 */
  joinedResearch?: boolean;
  /** 是否已经存在检查结果 */
  existedResult?: boolean;
  /** 是否有关联1,2类 */
  hasRelatedRisk?: boolean;
  /** 实例树状态(针对风险事件，此状态是一个聚合状态-[根据产品规则而定]) */
  instanceTreeStatus?: "DEFAULT" | "UPDATE" | "NEW";
};

/**
 * OpenAPI 组件类型：RiskObserveStatusUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskObserveStatusUpdateDto
 */
export type RiskDataServiceRiskObserveStatusUpdateDto = {
  /** 风险事件id */
  id: number;
  /** 调研检查工作id */
  workId: number;
  /** 是否加入现场检查(不传或传null则不变更该状态) */
  joinedCheck?: boolean;
  /** 是否加入对象信息调研(不传或传null则不变更该状态) */
  joinedResearch?: boolean;
};

/**
 * OpenAPI 组件类型：ObserveScopeRiskInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveScopeRiskInstanceVo
 */
export type RiskDataServiceObserveScopeRiskInstanceVo = {
  /** 实例ID */
  id?: string;
  /** 实例名称 */
  localName?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 是否加入检查 */
  joinedCheck?: boolean;
};

/**
 * OpenAPI 组件类型：RiskInstanceObserveStatusUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskInstanceObserveStatusUpdateDto
 */
export type RiskDataServiceRiskInstanceObserveStatusUpdateDto = {
  /** 调研检查工作id */
  workId: number;
  /** 风险事件id */
  riskEventId: number;
  /** 对象实例id集合 */
  rwdInstanceIds: string[];
  /** 是否加入现场检查 */
  joinedCheck?: boolean;
};

/**
 * OpenAPI 组件类型：ObsWorkRiskConfirmDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsWorkRiskConfirmDto
 */
export type RiskDataServiceObsWorkRiskConfirmDto = {
  /** 调研检查工作id */
  workId: number;
};

/**
 * OpenAPI 组件类型：ObsWorkRiskPublishDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsWorkRiskPublishDto
 */
export type RiskDataServiceObsWorkRiskPublishDto = {
  /** 调研检查工作id */
  workId: number;
};

/**
 * OpenAPI 组件类型：UserInfoDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/UserInfoDto
 */
export type RiskDataServiceUserInfoDto = {
  userType?: "INNER" | "SAAS";
  account?: string;
  name?: string;
  email?: string;
  accountId?: string;
  phone?: number;
  prjRole?: string;
};

/**
 * OpenAPI 组件类型：DateWorkPlanDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DateWorkPlanDto
 */
export type RiskDataServiceDateWorkPlanDto = {
  /** 主键id */
  id?: number;
  /** 当天人数 */
  personNum: number;
  /** 检查日期 */
  executeDate?: string;
  /** 检查人员 */
  checkPerson?: RiskDataServiceUserInfoDto[];
};

/**
 * OpenAPI 组件类型：ObserveWorkPlanSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveWorkPlanSaveDto
 */
export type RiskDataServiceObserveWorkPlanSaveDto = {
  /** 检查范围id */
  observeWorkId: number;
  /** 检查主责人 */
  planOwner: RiskDataServiceUserInfoDto;
  /** 物业对接人 */
  propertyManagementOwner?: string;
  /** 每个时间盒子内能装多少小时,默认12 */
  eachBoxHour?: number;
  /** 时间盒子开始时间,默认0 */
  startHour?: number;
  /** 时间盒子满了以后步进，默认0 */
  stepHour?: number;
  eachDayPlans: RiskDataServiceDateWorkPlanDto[];
};

/**
 * OpenAPI 组件类型：DateWorkPlanVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DateWorkPlanVo
 */
export type RiskDataServiceDateWorkPlanVo = {
  /** 主键id */
  id?: number;
  /** 检查日期 */
  executeDate?: string;
  /** 检查人员 */
  checkPerson?: RiskDataServiceUserInfoDto[];
  /** 是否可更改 */
  isModifyAble?: boolean;
  /** 当天人数 */
  personNum?: number;
};

/**
 * OpenAPI 组件类型：ObserveWorkPlanDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveWorkPlanDetailVo
 */
export type RiskDataServiceObserveWorkPlanDetailVo = {
  /** 主键id */
  id?: number;
  /** 检查项数量 */
  totalCheckCount?: number;
  /** 已完成检查数 */
  totalFinishedCount?: number;
  /** 总检查工时 */
  totalCheckTime?: number;
  /** 检查范围id */
  observeRangeId?: number;
  /** 检查主责人 */
  planOwner?: RiskDataServiceUserInfoDto;
  /** 物业对接人 */
  propertyManagementOwner?: string;
  /** 每日计划 */
  eachDayPlans?: RiskDataServiceDateWorkPlanVo[];
  /** 是否初始化 */
  isInit?: boolean;
  /** 是否初始化 */
  isCanPlan?: boolean;
};

/**
 * OpenAPI 组件类型：BuildFloorInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BuildFloorInfo
 */
export type RiskDataServiceBuildFloorInfo = {
  id?: string;
  name?: string;
};

/**
 * OpenAPI 组件类型：SpaceTag
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SpaceTag
 */
export type RiskDataServiceSpaceTag = {
  buildingInfo?: RiskDataServiceBuildFloorInfo;
  floorInfo?: RiskDataServiceBuildFloorInfo[];
};

/**
 * OpenAPI 组件类型：DateWorkPlanTimeBoxVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DateWorkPlanTimeBoxVo
 */
export type RiskDataServiceDateWorkPlanTimeBoxVo = {
  /** id */
  id?: number;
  /** 开始时间，00:00，或12:01，用以区分上午下午 */
  startTime?: string;
  /** 检查日期 */
  executeDate?: string;
  /** 检查人员 */
  checkPerson?: RiskDataServiceUserInfoDto[];
  /** 当天人数 */
  personNum?: number;
  /** 检查项数量 */
  totalCheckCount?: number;
  /** 已完成检查数 */
  totalFinishedCount?: number;
  /** 总检查工时 */
  totalCheckTime?: number;
  /** 总完成检查工时 */
  totalFinishedCheckTime?: number;
  /** 建筑名称 */
  buildingInfo?: RiskDataServiceSpaceTag[];
};

/**
 * OpenAPI 组件类型：ObserveInspectionItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveInspectionItemVo
 */
export type RiskDataServiceObserveInspectionItemVo = {
  /** 检查项id */
  inspectionItemId?: number;
  /** 检查对象id */
  inspectionObjectId?: string;
  /** 检查对象名称-本地名称 */
  checkObjectName?: string;
  /** 检查项 */
  inspectItemName?: string;
  /** 检查方式 */
  observationMode?: string;
  /** 检查工时 */
  checkTime?: number;
  /** 配合事项 */
  matchingItems?: string;
  /** 对应的实例id，可能为空，为空时无法查看详情 */
  rwdInstanceId?: string;
  /** 观测结果 */
  observeResult?: string;
  /** 是否有反馈 */
  isHasResult?: boolean;
  /** 措施id */
  klbMeasureId?: number;
  /** 是否为锁定状态 */
  lockedState?: boolean;
};

/**
 * OpenAPI 组件类型：InspectionPlanSpaceNodeTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InspectionPlanSpaceNodeTreeVo
 */
export type RiskDataServiceInspectionPlanSpaceNodeTreeVo = {
  /** 节点名称 */
  nodeName?: string;
  /** 节点名称 */
  nodeCode?: string;
  /** 节点关联查验对象id */
  relatedInspectObjectId?: string[];
  /** 节点下的查验项列表 */
  inspectionItemVoList?: RiskDataServiceObserveInspectionItemVo[];
  /** 节点下级数据 */
  children?: RiskDataServiceInspectionPlanSpaceNodeTreeVo[];
  /** 是否有反馈 */
  isHasResult?: boolean;
};

/**
 * OpenAPI 组件类型：DateWorkTimeBoxWithItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DateWorkTimeBoxWithItemVo
 */
export type RiskDataServiceDateWorkTimeBoxWithItemVo = {
  /** id */
  id?: number;
  /** 开始时间，00:00，或12:01，用以区分上午下午 */
  startTime?: string;
  /** 调研计划在空间结构下数据-实例级别 */
  inspectionPlanSpaceNodeTreeVos?: RiskDataServiceInspectionPlanSpaceNodeTreeVo[];
};

/**
 * OpenAPI 组件类型：DateWorkFilterQryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DateWorkFilterQryVo
 */
export type RiskDataServiceDateWorkFilterQryVo = {
  /** 时间盒的id */
  id?: number;
  /** 关联的所有查验对象id */
  relatedInspectObjectId?: string[];
  /** 只看配合事项 */
  filterMatchingItems?: boolean;
  /** 只看未完成 */
  filterUndone?: boolean;
  /** 只看影响事项 */
  filterInfluence?: boolean;
};

/**
 * OpenAPI 组件类型：DateWorkItemModifyDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DateWorkItemModifyDto
 */
export type RiskDataServiceDateWorkItemModifyDto = {
  /** 时间盒的id */
  id: number;
  /** 关联的所有查验对象id */
  inspectionItemId?: number[];
};

/**
 * OpenAPI 组件类型：DateWorkPlanProgressVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DateWorkPlanProgressVo
 */
export type RiskDataServiceDateWorkPlanProgressVo = {
  /** 检查日期 */
  executeDate?: string;
  /** 检查人数,不一定是checkPerson的size */
  checkPersonCount?: number;
  /** 检查人员 */
  checkPerson?: string[];
  /** 检查项数量 */
  totalCheckCount?: number;
  /** 已完成检查数 */
  totalFinishedCount?: number;
  /** 总检查工时 */
  totalCheckTime?: number;
  /** 已完成检查工时 */
  totalFinishedTime?: number;
};

/**
 * OpenAPI 组件类型：ObserveWorkPlanProgressVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveWorkPlanProgressVo
 */
export type RiskDataServiceObserveWorkPlanProgressVo = {
  /** 检查主责人 */
  planOwner?: string;
  /** 物业对接人 */
  propertyManagementOwner?: string;
  /** 每日计划进度统计 */
  dateWorkPlanProgress?: RiskDataServiceDateWorkPlanProgressVo[];
};

/**
 * OpenAPI 组件类型：FloorNode
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FloorNode
 */
export type RiskDataServiceFloorNode = {
  /** 楼层名称 */
  floorName?: string;
  /** 空间数量 */
  spaceNodeCount?: number;
};

/**
 * OpenAPI 组件类型：BuildingNode
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BuildingNode
 */
export type RiskDataServiceBuildingNode = {
  /** 建筑名称 */
  buildingName?: string;
  /** 空间节点列表 */
  floorNodes?: RiskDataServiceFloorNode[];
};

/**
 * OpenAPI 组件类型：ObjNode
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjNode
 */
export type RiskDataServiceObjNode = {
  /** 对象名称 */
  objName?: string;
  /** 实例数量 */
  instanceCount?: number;
};

/**
 * OpenAPI 组件类型：EntityNode
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EntityNode
 */
export type RiskDataServiceEntityNode = {
  /** 分类名称 */
  classifyName?: string;
  /** 对象实例列表 */
  objNodes?: RiskDataServiceObjNode[];
};

/**
 * OpenAPI 组件类型：DateWorkPlanStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DateWorkPlanStatisticsVo
 */
export type RiskDataServiceDateWorkPlanStatisticsVo = {
  /** id */
  id?: number;
  /** 开始时间，00:00，或12:01，用以区分上午下午 */
  startTime?: string;
  /** 检查日期 */
  executeDate?: string;
  /** 检查人员 */
  checkPerson?: string[];
  /** 检查人数,不一定是checkPerson的size */
  checkPersonCount?: number;
  /** 检查项数量 */
  totalCheckCount?: number;
  /** 已完成检查数 */
  totalFinishedCount?: number;
  /** 总检查工时 */
  totalCheckTime?: number;
  /** 执行过程影响数量 */
  totalInfluenceCount?: number;
  /** 配合事项数量 */
  totalCooperateCount?: number;
  /** 建筑节点列表 */
  buildingNodes?: RiskDataServiceBuildingNode[];
  /** 实体节点列表 */
  entityNodes?: RiskDataServiceEntityNode[];
};

/**
 * OpenAPI 组件类型：ObservePlanMaterialVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObservePlanMaterialVo
 */
export type RiskDataServiceObservePlanMaterialVo = {
  /** 资料 */
  material?: string;
  /** 资料说明 */
  materialExplains?: string[];
};

/**
 * OpenAPI 组件类型：DateWorkPlanBoxVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DateWorkPlanBoxVo
 */
export type RiskDataServiceDateWorkPlanBoxVo = {
  /** id */
  id?: number;
  /** 开始时间，00:00，或12:01，用以区分上午下午 */
  startTime?: string;
  /** 检查日期 */
  executeDate?: string;
  /** 计划日期排序 */
  indexDay?: number;
  /** 检查人员 */
  checkPerson?: string[];
  /** 当天人数 */
  personNum?: number;
};

/**
 * OpenAPI 组件类型：ObserveInstrumentVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveInstrumentVo
 */
export type RiskDataServiceObserveInstrumentVo = {
  /** 仪器类型 */
  instrumentType?: string;
  /** 计划执行列表 */
  planTimeBoxVos?: RiskDataServiceDateWorkPlanBoxVo[];
};

/**
 * OpenAPI 组件类型：Periods
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Periods
 */
export type RiskDataServicePeriods = {
  /** 次数 */
  frequency?: number;
  /** 时间单位 */
  unitOfTime?: "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE";
  /** 时间间隔 */
  interval?: number;
};

/**
 * OpenAPI 组件类型：ImplementationDifficulty
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ImplementationDifficulty
 */
export type RiskDataServiceImplementationDifficulty = {
  /** 建议执行单位 */
  executiveUnits?: "EXECUTIVEUNITS3" | "EXECUTIVEUNITS2" | "E1" | "E2" | "EXECUTIVEUNITS4" | "EXECUTIVEUNITS5" | "EXECUTIVEUNITS6";
  /** 难度等级 */
  difficultyLevel?: "E1" | "E2" | "E3";
};

/**
 * OpenAPI 组件类型：InvestmentWorkingCondition
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InvestmentWorkingCondition
 */
export type RiskDataServiceInvestmentWorkingCondition = {
  /** 通电状态 */
  powerUpStateStr?: string;
  /** 运行状态 */
  operatingStateStr?: string;
  /** 控制状态 */
  equipmentStateStr?: string;
};

/**
 * OpenAPI 组件类型：TimeWorkingRequirement
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TimeWorkingRequirement
 */
export type RiskDataServiceTimeWorkingRequirement = {
  /** 季节要求 */
  seasonalRequirementStr?: string;
  /** 季节要求 */
  timeRequirementStr?: string;
  /** 开始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
};

/**
 * OpenAPI 组件类型：WorkingGuidance
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkingGuidance
 */
export type RiskDataServiceWorkingGuidance = {
  /** 操作指导内容 */
  workingGuidanceContent?: string;
  /** 操作指导标题 */
  workingGuidanceTitle?: string;
};

/**
 * OpenAPI 组件类型：CooperationMattersContent
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CooperationMattersContent
 */
export type RiskDataServiceCooperationMattersContent = {
  /** 数据ID */
  objInstId?: number;
  /** 内容 */
  content?: string;
};

/**
 * OpenAPI 组件类型：ConsultantCooperationMatters
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ConsultantCooperationMatters
 */
export type RiskDataServiceConsultantCooperationMatters = {
  /** 数据ID */
  objInstId?: number;
  /** 配合事项分类ID */
  CoordinationMatters?: number;
  /** 配合事项分类名称 */
  coordinationMattersTitle?: string;
  /** 配合事项内容ID */
  CooperationMattersContent?: number[];
  /** 配合事项内容 */
  cooperationMattersContent?: RiskDataServiceCooperationMattersContent[];
};

/**
 * OpenAPI 组件类型：TimeMaxMin
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TimeMaxMin
 */
export type RiskDataServiceTimeMaxMin = {
  Max?: number;
  Min?: number;
  unitOfTime?: "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE";
};

/**
 * OpenAPI 组件类型：LaborMaxMin
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/LaborMaxMin
 */
export type RiskDataServiceLaborMaxMin = {
  manHour?: "E1" | "E2";
  Max?: number;
  Min?: number;
};

/**
 * OpenAPI 组件类型：NumberMaxMin
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/NumberMaxMin
 */
export type RiskDataServiceNumberMaxMin = {
  Max?: number;
  Min?: number;
};

/**
 * OpenAPI 组件类型：DefaultPeriodsMaxMin
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DefaultPeriodsMaxMin
 */
export type RiskDataServiceDefaultPeriodsMaxMin = {
  frequencyMax?: number;
  frequencyMin?: number;
  intervalMax?: number;
  intervalMin?: number;
  unitOfTime?: "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE";
  unitOfTimeMax?: "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE";
  unitOfTimeMin?: "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE";
};

/**
 * OpenAPI 组件类型：FuzzyObservationFeedbackVAL
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FuzzyObservationFeedbackVAL
 */
export type RiskDataServiceFuzzyObservationFeedbackVAL = {
  /** 百分比区间——差值 */
  rangePCTLeft?: number;
  /** 百分比区间——好值 */
  rangePCTRight?: number;
  /** 范围区间-差值 */
  rangeLeft?: number;
  /** 范围区间-好值 */
  rangeRight?: number;
  /** 模糊观测反馈值 */
  option?: string;
  /** 模糊观测照片 */
  fuzzyObservationFeedbackVALPic?: RiskDataServiceAttachmentStruct;
  /** 模糊观测描述 */
  fuzzyObservationFeedbackVALDescription?: string;
  /** 数据id */
  objInstId?: number;
  /** 节点别名 */
  nodeAlias?: string;
  /** 反馈值code */
  fuzzyObservationFeedbackCode?: string;
  createTime?: number;
};

/**
 * OpenAPI 组件类型：FuzzyObservationFeedbackTier
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FuzzyObservationFeedbackTier
 */
export type RiskDataServiceFuzzyObservationFeedbackTier = {
  /** 模糊反馈执行阈值 */
  executionThresholds?: number[];
  /** 模糊观测诊断阈值 */
  diagnosticThreshold?: number[];
  /** 节点状态对应的分档反馈值-异常 */
  abnormalOptions?: number[];
  /** 节点状态对应的分档反馈值-正常 */
  normalOptions?: number[];
  /** 节点状态对应的分档反馈值-超征兆 */
  symptomaticOptions?: number[];
  /** 模糊观测反馈可选值 */
  fuzzyObservationFeedbackVALs?: RiskDataServiceFuzzyObservationFeedbackVAL[];
};

/**
 * OpenAPI 组件类型：MapObject
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapObject
 */
export type RiskDataServiceMapObject = {
  key?: RiskDataServiceKey;
};

/**
 * OpenAPI 组件类型：RulerResultValue
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RulerResultValue
 */
export type RiskDataServiceRulerResultValue = {
  bestValueOfScaleRange?: number;
  worstValueOfScaleRange?: number;
  commonIndustryGoodValue?: number;
  commonIndustryBadValue?: number;
};

/**
 * OpenAPI 组件类型：LazyFieldRulerResultValue
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/LazyFieldRulerResultValue
 */
export type RiskDataServiceLazyFieldRulerResultValue = {
  t?: RiskDataServiceRulerResultValue;
};

/**
 * OpenAPI 组件类型：ObjectClassPoiList
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassPoiList
 */
export type RiskDataServiceObjectClassPoiList = {
  poiCode?: string;
  poiId?: string;
};

/**
 * OpenAPI 组件类型：ProcessParameter
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProcessParameter
 */
export type RiskDataServiceProcessParameter = {
  /** 测量点位数量 */
  numberOfMeasuringPoint?: number;
  /** 测量次数 */
  measurementTimes?: number;
  /** 测量点位示意图 */
  schematicDiagramOfMeasuringPoint?: RiskDataServiceAttachmentStruct;
  /** 过程参数 */
  processParameterName?: string;
  /** 过程参数取值方式 */
  processParameterValueSelectionMethod?: "MAXIMUM" | "MINIMUM" | "AVERAGE" | "TIMEMATCHING";
  /** 自定义时需要自己配置 */
  objInstId?: number;
  /** 过程参数对应对象类信息 */
  objectClass?: RiskDataServiceObjectClass;
  /** 是否为实例化物理量(是否为准静态参数) */
  isItInstantiatedPhysicalQuantity?: "YES" | "NO";
};

/**
 * OpenAPI 组件类型：LazyFieldListProcessParameter
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/LazyFieldListProcessParameter
 */
export type RiskDataServiceLazyFieldListProcessParameter = {
  t?: RiskDataServiceProcessParameter[];
};

/**
 * OpenAPI 组件类型：ProcessParameterGroup
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProcessParameterGroup
 */
export type RiskDataServiceProcessParameterGroup = {
  map?: RiskDataServiceMapObject;
  rulerResultValueLazyField?: RiskDataServiceLazyFieldRulerResultValue;
  processParameterLazyField?: RiskDataServiceLazyFieldListProcessParameter;
};

/**
 * OpenAPI 组件类型：RulerResultValue15
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RulerResultValue15
 */
export type RiskDataServiceRulerResultValue15 = {
  bestValueOfScaleRange?: number;
  worstValueOfScaleRange?: number;
  commonIndustryGoodValue?: number;
  commonIndustryBadValue?: number;
};

/**
 * OpenAPI 组件类型：RelationshipStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RelationshipStruct
 */
export type RiskDataServiceRelationshipStruct = {
  name?: string;
  /** 图类型编码 */
  graphCode?: string;
  /** 边类型编码 */
  relCode?: string;
  /** 关联对象->对应实体的方向 */
  queryDirection?: "FROM_TO" | "TO_FROM" | "BOTH";
};

/**
 * OpenAPI 组件类型：ProcessParameter16
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProcessParameter16
 */
export type RiskDataServiceProcessParameter16 = {
  /** 测量点位数量 */
  numberOfMeasuringPoint: number;
  /** 测量次数 */
  measurementTimes: number;
  /** 测量点位示意图 */
  schematicDiagramOfMeasuringPoint?: RiskDataServiceAttachmentStruct;
  /** 过程参数 */
  processParameterName: string;
  /** 过程参数取值方式 */
  processParameterValueSelectionMethod?: RiskDataServiceEnumStruct;
  /** 过程参数 */
  objInstId?: number;
  /** 过程参数对应对象类信息 */
  objectClass?: RiskDataServiceObjectClass6;
  /** 过程参数对应对象类信息 */
  relationship?: RiskDataServiceRelationshipStruct;
  /** 是否为实例化物理量 */
  isItInstantiatedPhysicalQuantity?: "YES" | "NO";
};

/**
 * OpenAPI 组件类型：ProcessParameterGroupStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProcessParameterGroupStruct
 */
export type RiskDataServiceProcessParameterGroupStruct = {
  /** 数据id */
  id?: number;
  /** 业务id */
  businessId?: number;
  /** rcc版本id */
  rccVersionId?: number;
  /** 元数据版本 */
  metaVersionId?: number;
  /** 发布时间 */
  publishTime?: string;
  rulerResultValue?: RiskDataServiceRulerResultValue15;
  processParameter?: RiskDataServiceProcessParameter16[];
  /** 单位 */
  unit?: string;
  /** 代替 characteristicPhysicalQuantityFormula
公式信息
公式信息 characteristicPhysicalQuantityFormula */
  formula?: RiskDataServiceFormula;
  originalString?: string;
};

/**
 * OpenAPI 组件类型：MatchingItem
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MatchingItem
 */
export type RiskDataServiceMatchingItem = {
  /** 数据ID */
  objInstId?: number;
  objCode?: string;
  /** 配合事项分类ID */
  CoordinationMatters?: number;
  /** 配合事项分类名称 */
  coordinationMattersTitle?: string;
  /** 配合事项内容ID */
  CooperationMattersContent?: number[];
  /** 配合事项内容 */
  cooperationMattersContent?: RiskDataServiceCooperationMattersContent[];
};

/**
 * OpenAPI 组件类型：PropertyExecutionCooperation
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PropertyExecutionCooperation
 */
export type RiskDataServicePropertyExecutionCooperation = {
  /** 数据ID */
  objInstId?: number;
  /** 物业配合单位 */
  coordinateUnits?: string[];
  objCode?: string;
  /** 物业配合事项 */
  matchingItems?: RiskDataServiceMatchingItem[];
};

/**
 * OpenAPI 组件类型：KlbMeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbMeasureVo
 */
export type RiskDataServiceKlbMeasureVo = {
  /** 实例id
措施id */
  id: number;
  /** 观测方式 */
  observationMode: "INSPECTION" | "DATA" | "OPERATION" | "E1" | "E2" | "E3";
  /** 文件资料 */
  means: "E06" | "E05" | "E04" | "E03" | "E01" | "E02" | "WATERQUALITY" | "ELECTRODEDETECTION" | "LIGHTNINGPROTECTIONDETECTION" | "MEANS12" | "MEANS11" | "MEANS10" | "MEANS9" | "MEANS13" | "MEANS14" | "MEANS15" | "MEANS16";
  /** 资料说明 */
  meansExplain: string;
  /** 措施类型 */
  controlType: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施内容 */
  controlDescription: string;
  /** 观测措施类型 */
  observationControlType: "SYMPTOMATIC" | "NONSYMPTOMATIC";
  /** 安全提示 */
  safetyTips: string;
  /** 使用的措施公式 */
  useCharacteristicPhysicalQuantityFormula: number;
  /** 整改程度阈值 */
  rectifyThreshold: number;
  /** 维修深度 */
  maintenanceDepth: number;
  /** 故障征兆描述 */
  faultSymptomDescription: string;
  /** 故障照片【图片id】 */
  faultPic: RiskDataServiceAttachmentStruct[];
  /** 拍照和备注要求
是否拍照 */
  photoNoteRequirements_v2: "NORMALPHOTO" | "ABNORMALPHOTO" | "NOPHOTO";
  /** 拍照要求说明 */
  descriptionOfPhoto: string;
  /** 是否可同时对hub节点执行 */
  whetherAppliedToMultipleInstances: "E1" | "E0";
  /** 是否可同时对hub节点执行 */
  onlyExecuteOnHubNode: "YES" | "NO";
  /** 关联的观测措施 */
  relatedObservationControlAndOrder: RiskDataServiceRelatedObservationControlAndOrder[];
  /** 是否相关部门要求 */
  departmentalRequirements: "E1" | "E2";
  /** 相关部门要求说明 */
  departmentalRequirementsExplain: string;
  /** 适用的周期 */
  periods_v2: RiskDataServicePeriods[];
  /** 是否退化维修 */
  degradedMaintenance: "E1" | "E2";
  /** 退化维修容忍时长 */
  degradedMaintenanceToleranceTime: number;
  /** 整改效果 */
  rectificationEffect: string;
  /** 实施难度 */
  implementationDifficulty: RiskDataServiceImplementationDifficulty;
  /** 是否使用仪器 */
  whetherInstrument: "E1" | "E2";
  /** 仪器仪表说明 */
  instrumentDescription: string;
  /** 设备工况要求 */
  investmentWorkingCondition: RiskDataServiceInvestmentWorkingCondition;
  /** 设备工况营造流程 */
  workingConditionSOP: string;
  /** 时间工况要求 */
  timeWorkingRequirement: RiskDataServiceTimeWorkingRequirement;
  /** 操作指导 */
  workingGuidance: RiskDataServiceWorkingGuidance[];
  /** 正常拍照要求 */
  normalDescriptionOfPhoto: string;
  /** 异常拍照要求 */
  unusualDescriptionOfPhoto: string;
  /** 资质要求 */
  credentialRequirement: "CREDENTIALREQUIREMENT9" | "CREDENTIALREQUIREMENT8" | "E05" | "E01" | "E02" | "E03" | "E04" | "HIGHPRESSURE" | "LOWPRESSURE" | "FIREEQUIPMENTOPERATOR" | "CREDENTIALREQUIREMENT10"[];
  /** 设施顾问能力要求 */
  consultantRequirement: "MUST" | "SUGGEST" | "NO";
  /** 适用的频次类型 */
  frequencyTypes: "E1" | "E2" | "E3" | "E4"[];
  /** 安全提示 */
  safePrompt: string;
  /** 执行过程影响 */
  impactMeasureImplicit: string;
  /** 顾问执行需要的配合事项 */
  consultantCooperationMatters?: RiskDataServiceConsultantCooperationMatters[];
  /** 执行过程影响 */
  impactOfExecutionProcess?: RiskDataServiceEnumStruct[];
  /** 影响说明 */
  explanationMeasures: string;
  /** 仪器类型 */
  instrumentType: "INSTRUMENTTYPE51" | "INSTRUMENTTYPE50" | "INSTRUMENTTYPE49" | "INSTRUMENTTYPE48" | "INSTRUMENTTYPE47" | "INSTRUMENTTYPE46" | "INSTRUMENTTYPE45" | "INSTRUMENTTYPE44" | "INSTRUMENTTYPE43" | "INSTRUMENTTYPE42" | "INSTRUMENTTYPE41" | "INSTRUMENTTYPE40" | "INSTRUMENTTYPE39" | "INSTRUMENTTYPE38" | "INSTRUMENTTYPE37" | "INSTRUMENTTYPE36" | "INSTRUMENTTYPE35" | "INSTRUMENTTYPE34" | "INSTRUMENTTYPE33" | "INSTRUMENTTYPE32" | "INSTRUMENTTYPE31" | "INSTRUMENTTYPE30" | "INSTRUMENTTYPE29" | "INSTRUMENTTYPE28" | "INSTRUMENTTYPE27" | "INSTRUMENTTYPE26" | "INSTRUMENTTYPE25" | "INSTRUMENTTYPE24" | "INSTRUMENTTYPE23" | "INSTRUMENTTYPE22" | "INSTRUMENTTYPE21" | "INSTRUMENTTYPE20" | "E11" | "E10" | "E09" | "E08" | "E01" | "E02" | "E03" | "E04" | "E05" | "E06" | "E07" | "E1" | "E2" | "E3" | "E4" | "ANEMOMETER" | "MULTIMETER" | "CLAMPMULTIMETER" | "THERMALIMAGER" | "E111" | "INSTRUMENTTYPE63" | "INSTRUMENTTYPE62" | "INSTRUMENTTYPE61" | "INSTRUMENTTYPE60" | "INSTRUMENTTYPE59" | "INSTRUMENTTYPE58" | "INSTRUMENTTYPE57" | "INSTRUMENTTYPE56" | "INSTRUMENTTYPE55" | "INSTRUMENTTYPE54" | "INSTRUMENTTYPE53" | "INSTRUMENTTYPE52" | "INSTRUMENTTYPE64" | "INSTRUMENTTYPE65" | "INSTRUMENTTYPE66" | "INSTRUMENTTYPE67" | "INSTRUMENTTYPE68" | "INSTRUMENTTYPE69" | "INSTRUMENTTYPE70"[];
  /** 适用的配合单位
使用的配合单位 */
  coordinateUnits: "COORDINATEUNITS8" | "COORDINATEUNITS7" | "E01" | "E02" | "E03" | "FIREMAINTENANCE" | "ELEVATORMAINTENANCE" | "PROPERTY" | "WEAKCURRENT" | "COORDINATEUNITS9"[];
  /** 配合事项 */
  matchingItems: string;
  /** 执行准备时长 */
  executionPreparationTime: RiskDataServiceTimeMaxMin;
  /** 单次执行时长 */
  singleExecutionDuration: RiskDataServiceTimeMaxMin;
  /** 单次执行人工时 */
  singleIaborHours: RiskDataServiceLaborMaxMin;
  /** 单次执行非人工成本 */
  nonLaborCost: RiskDataServiceNumberMaxMin;
  /** 初投资设备 */
  initialInvestment: "INITIALINVESTMENT11" | "INITIALINVESTMENT10" | "INITIALINVESTMENT9" | "INITIALINVESTMENT8" | "YWCGQ" | "TEMPERATURESENSOR" | "HUMIDITYSENSOR" | "CO2SENSOR" | "CO1SENSOR" | "DDC" | "PLC" | "COLLECTOR" | "INITIALINVESTMENT14" | "INITIALINVESTMENT13" | "INITIALINVESTMENT12" | "INITIALINVESTMENT15";
  /** 失效预测类执行阈值 */
  failurePredictionExecutionBasis: "故障" | "超征兆" | "FAILURE" | "SUPERSYMPTOM";
  /** 状态程度类执行阈值 */
  degreeStateExecutionBasis: "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10";
  /** 征兆描述 */
  signDescription: string;
  /** 超征兆照片 */
  signPic: RiskDataServiceAttachmentStruct[];
  /** 正常描述 */
  normalDescription: string;
  /** 正常照片 */
  normalPic: RiskDataServiceAttachmentStruct[];
  /** 故障描述 */
  failureDescription: string;
  /** 是否默认措施 */
  defaultControl: "E1" | "E2";
  /** 默认频次类型 */
  defaultFrequency: string[];
  /** 默认周期 */
  defaultPeriods: RiskDataServicePeriods;
  /** 默认周期范围 */
  defaultPeriodsMaxMin: RiskDataServiceDefaultPeriodsMaxMin;
  /** 诊断观测的优先级顺序 */
  observationOrder: number;
  /** 模糊观测-分档 */
  fuzzyObservationFeedbackVAL?: RiskDataServiceFuzzyObservationFeedbackTier;
  /** 是否分档反馈 （原是否模糊观测） */
  isItFuzzyObservation?: string;
  processParameterGroup?: RiskDataServiceProcessParameterGroup;
  /** 目标参数 */
  klbProcessParameterGroup?: RiskDataServiceProcessParameterGroupStruct;
  /** 目标参数 */
  targetParam?: string;
  /** 目标参数单位 */
  targetParamUnit?: string;
  /** 物业执行内容 */
  propertyExecutionCooperationList?: RiskDataServicePropertyExecutionCooperation[];
};

/**
 * OpenAPI 组件类型：TreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TreeNodeVo
 */
export type RiskDataServiceTreeNodeVo = {
  id?: number;
  name?: string;
};

/**
 * OpenAPI 组件类型：WorkPlanItemDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkPlanItemDetailVo
 */
export type RiskDataServiceWorkPlanItemDetailVo = {
  /** 检查项id */
  id?: number;
  /** 知识措施详情 */
  klbMeasureVo?: RiskDataServiceKlbMeasureVo;
  /** 检查项相关隐患 */
  treeNodes?: RiskDataServiceTreeNodeVo[];
};

/**
 * OpenAPI 组件类型：ObsInspectDetailDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsInspectDetailDto
 */
export type RiskDataServiceObsInspectDetailDto = {
  /** 检查项ID */
  planItemId?: number;
  /** 风险措施ID */
  klbMeasureId?: number;
  /** 调研工作ID */
  observeWorkId?: number;
};

/**
 * OpenAPI 组件类型：ObsCooperationFilterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsCooperationFilterVo
 */
export type RiskDataServiceObsCooperationFilterVo = {
  /** 对象类树 */
  groupObjectTrees?: RiskDataServiceGroupObjectTree[];
};

/**
 * OpenAPI 组件类型：Instance
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Instance
 */
export type RiskDataServiceInstance = {
  /** 检查对象实例Id */
  rwdInstanceId?: string;
  /** 检查对象实例名称 */
  rwdInstanceName?: string;
};

/**
 * OpenAPI 组件类型：ObsImpactAndCooperateInspectionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsImpactAndCooperateInspectionVo
 */
export type RiskDataServiceObsImpactAndCooperateInspectionVo = {
  /** 查验项ID(风控措施ID) */
  klbMeasureId?: number;
  /** 查验项名称 */
  inspectionName?: string;
  /** 执行过程影响 */
  impactMeasureImplicits?: string[];
  /** 配合事项内容 */
  cooperationMatters?: string[];
  /** 对象类编码 */
  objectCode?: string;
  /** 检查对象 */
  objectName?: string;
  /** 检查对象实例 */
  instances?: RiskDataServiceInstance[];
  /** 计划检查时段 */
  dateWorkPlanBoxVo?: RiskDataServiceDateWorkPlanBoxVo;
  /** 配合人员名称 */
  cooperationPerson?: string;
  /** 是否为锁定状态 */
  lockedState?: boolean;
  /** 是否已完成 */
  finished?: boolean;
  /** 是否在检查计划中 */
  inWorkPlan?: boolean;
};

/**
 * OpenAPI 组件类型：Item
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Item
 */
export type RiskDataServiceItem = {
  /** 配合事项内容 */
  content?: string;
  /** 检查项列表 */
  inspectionItems?: RiskDataServiceObsImpactAndCooperateInspectionVo[];
};

/**
 * OpenAPI 组件类型：ObsCooperationMatterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsCooperationMatterVo
 */
export type RiskDataServiceObsCooperationMatterVo = {
  /** 配合事项分类 */
  classification?: string;
  /** 配合事项内容 */
  cooperationContents?: RiskDataServiceItem[];
};

/**
 * OpenAPI 组件类型：ObsCooperationVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsCooperationVo
 */
export type RiskDataServiceObsCooperationVo = {
  /** 配合事项列表筛选项 */
  filterVo?: RiskDataServiceObsCooperationFilterVo;
  /** 配合事项列表 */
  cooperationItems?: RiskDataServiceObsCooperationMatterVo[];
};

/**
 * OpenAPI 组件类型：ObsCooperationDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsCooperationDto
 */
export type RiskDataServiceObsCooperationDto = {
  /** 调研工作id */
  observeWorkId: number;
};

/**
 * OpenAPI 组件类型：ObsImpactMeasureImplicitFilterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsImpactMeasureImplicitFilterVo
 */
export type RiskDataServiceObsImpactMeasureImplicitFilterVo = {
  /** 对象类树 */
  groupObjectTrees?: RiskDataServiceGroupObjectTree[];
};

/**
 * OpenAPI 组件类型：ObsImpactMeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsImpactMeasureVo
 */
export type RiskDataServiceObsImpactMeasureVo = {
  /** 执行过程影响内容 */
  impactMeasureImplicit?: string;
  /** 检查项列表 */
  inspectionItems?: RiskDataServiceObsImpactAndCooperateInspectionVo[];
};

/**
 * OpenAPI 组件类型：ObsImpactMeasureImplicitVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsImpactMeasureImplicitVo
 */
export type RiskDataServiceObsImpactMeasureImplicitVo = {
  /** 影响事项列表筛选项 */
  filterVo?: RiskDataServiceObsImpactMeasureImplicitFilterVo;
  /** 影响事项列表 */
  impactMeasureVos?: RiskDataServiceObsImpactMeasureVo[];
};

/**
 * OpenAPI 组件类型：ObsInspectionLockDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsInspectionLockDto
 */
export type RiskDataServiceObsInspectionLockDto = {
  /** 调研工作ID */
  observeWorkId: number;
  /** 措施ID */
  klbMeasureId: number;
  /** 锁定状态 */
  lockedState: boolean;
};

/**
 * OpenAPI 组件类型：ObsCooperationPersonDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObsCooperationPersonDto
 */
export type RiskDataServiceObsCooperationPersonDto = {
  /** 调研工作ID */
  observeWorkId: number;
  /** 检查项列表 */
  klbMeasureIds: number[];
  /** 配合人员名称 */
  cooperationPerson?: string;
  /** 计划检查时段ID */
  dateWorkPlanId?: number;
  /** 是否只修改计划中的检查项 */
  inWorkPlanOnly?: boolean;
};

/**
 * OpenAPI 组件类型：AlertExceptionEventMsgRuleTriggerConditionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertExceptionEventMsgRuleTriggerConditionStruct
 */
export type RiskDataServiceAlertExceptionEventMsgRuleTriggerConditionStruct = {
  /** 异常事件严重程度(null代表未设置过该条件) */
  severity?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "NOT_HIGH";
  /** 异常事件本消息规则未发送过消息(null代表未设置过该条件) */
  neverSentMsg?: boolean;
  /** 异常事件是否已关闭(null代表未设置过该条件) */
  exceptionEventClosed?: boolean;
  /** *** 规则：时间相关
是否超过要求解决时间(null代表未设置过该条件) */
  overSolveTime?: boolean;
  /** 距离要求解决时间前 N 小时(null代表未设置过该条件) */
  solveTimeBefore?: number;
  /** 是否临近要求响应时间(null代表未设置过该条件) */
  overResponseTime?: boolean;
  /** 距离要求解决时间前 N 分钟(null代表未设置过该条件) */
  responseTimeBefore?: number;
};

/**
 * OpenAPI 组件类型：AlertExceptionEventMsgRulePushUserExtStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertExceptionEventMsgRulePushUserExtStruct
 */
export type RiskDataServiceAlertExceptionEventMsgRulePushUserExtStruct = {
  /** 已选择的其他岗位id集合 */
  selectedOtherPositionIds?: string[];
};

/**
 * OpenAPI 组件类型：AlertExceptionEventMsgRuleSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertExceptionEventMsgRuleSaveDto
 */
export type RiskDataServiceAlertExceptionEventMsgRuleSaveDto = {
  /** 风险消息提醒规则分类 */
  category: "HIGH_LEVEL_HAPPENED_WARN" | "HIGH_LEVEL_TIMEOUT_WARNING" | "HIGH_LEVEL_TIMEOUT_UNSOLVED_WARN" | "EXCEPTION_EVENT_TIMEOUT_WARN" | "HIGH_LEVEL_SOLVED_NOTIFY" | "HIGH_LEVEL_ACTION_TIMEOUT_WARN" | "HAPPENED_WARN";
  /** 规则id（编辑时必传） */
  id?: number;
  /** 状态 */
  status: "DISABLE" | "ENABLE";
  /** 风险消息提醒类型 */
  type: "IMPORTANT_NOTIFY" | "EXEC_RESP_NOTIFY" | "NORMAL_AFFAIRS_NOTIFY";
  /** 风险消息提醒规则触发条件 */
  triggerCondition?: RiskDataServiceAlertExceptionEventMsgRuleTriggerConditionStruct;
  /** 推送渠道 */
  channels?: "MOBILE_INTERNAL_MSG" | "MOBILE_PUSH_MSG" | "MOBILE_SMS" | "MOBILE_VOICE"[];
  /** 推送用户类型 */
  pushUserTypes?: "ACCEPTABLE_WORK_ORDER_USER" | "OTHER_POSITION"[];
  /** 推送用户扩展信息 */
  pushUserExt?: RiskDataServiceAlertExceptionEventMsgRulePushUserExtStruct;
  /** 推送语音用户类型 */
  pushVoiceUserTypes?: string[];
  /** 推送语音用户扩展信息 */
  pushVoiceUserExt?: RiskDataServiceAlertExceptionEventMsgRulePushUserExtStruct;
};

/**
 * OpenAPI 组件类型：PermissionPkgStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PermissionPkgStruct
 */
export type RiskDataServicePermissionPkgStruct = {
  /** 权限包  id */
  id?: string;
  /** 权限包 名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：PositionPermissionPkgVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PositionPermissionPkgVo
 */
export type RiskDataServicePositionPermissionPkgVo = {
  /** 集团权限包id集合（岗位自定义勾选的权限包） */
  groupPermissionPkg?: RiskDataServicePermissionPkgStruct[];
  /** 项目权限包id集合（岗位自定义勾选的权限包） */
  projPermissionPkg?: RiskDataServicePermissionPkgStruct[];
};

/**
 * OpenAPI 组件类型：PositionCategoryPermissionPkgVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PositionCategoryPermissionPkgVo
 */
export type RiskDataServicePositionCategoryPermissionPkgVo = {
  /** 集团权限包id集合 */
  groupPermissionPkg?: RiskDataServicePermissionPkgStruct[];
  /** 项目权限包模板id集合 */
  projTemplatePermissionPkg?: RiskDataServicePermissionPkgStruct[];
};

/**
 * OpenAPI 组件类型：PositionDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PositionDetailVo
 */
export type RiskDataServicePositionDetailVo = {
  /** 岗位id */
  id?: string;
  /** 岗位名称 */
  name?: string;
  /** 岗位职能 */
  dutyStructs?: RiskDataServiceEnumStruct[];
  /** 是否自定义权限包 */
  customize?: boolean;
  /** 岗位所属组织id */
  orgId?: string;
  /** 岗位所属组织名称 */
  orgName?: string;
  /** 岗位类id */
  positionCategoryId?: string;
  /** 岗位类名称 */
  positionCategoryName?: string;
  /** 岗位类层级路径 */
  positionCategoryPath?: string;
  /** 岗位权限包信息 */
  positionPermissionPkg?: RiskDataServicePositionPermissionPkgVo;
  /** 岗位所属岗位类对应的权限包信息 */
  positionCategoryPermissionPkg?: RiskDataServicePositionCategoryPermissionPkgVo;
};

/**
 * OpenAPI 组件类型：AlertExceptionEventMsgRulePushUserExtVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertExceptionEventMsgRulePushUserExtVo
 */
export type RiskDataServiceAlertExceptionEventMsgRulePushUserExtVo = {
  /** 推送用户扩展信息: 已勾选的岗位 */
  selectedOtherPositions?: RiskDataServicePositionDetailVo[];
};

/**
 * OpenAPI 组件类型：AlertExceptionEventMsgRuleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertExceptionEventMsgRuleVo
 */
export type RiskDataServiceAlertExceptionEventMsgRuleVo = {
  /** 风险消息提醒规则分类 */
  category?: "HIGH_LEVEL_HAPPENED_WARN" | "HIGH_LEVEL_TIMEOUT_WARNING" | "HIGH_LEVEL_TIMEOUT_UNSOLVED_WARN" | "EXCEPTION_EVENT_TIMEOUT_WARN" | "HIGH_LEVEL_SOLVED_NOTIFY" | "HIGH_LEVEL_ACTION_TIMEOUT_WARN" | "HAPPENED_WARN";
  /** 规则id */
  id?: number;
  /** 状态 */
  status?: "DISABLE" | "ENABLE";
  /** 风险消息提醒类型 */
  type?: "IMPORTANT_NOTIFY" | "EXEC_RESP_NOTIFY" | "NORMAL_AFFAIRS_NOTIFY";
  /** 风险消息提醒规则触发条件 */
  triggerCondition?: RiskDataServiceAlertExceptionEventMsgRuleTriggerConditionStruct;
  /** 推送渠道 */
  channels?: "MOBILE_INTERNAL_MSG" | "MOBILE_PUSH_MSG" | "MOBILE_SMS" | "MOBILE_VOICE"[];
  /** 推送用户类型 */
  pushUserTypes?: "ACCEPTABLE_WORK_ORDER_USER" | "OTHER_POSITION"[];
  /** 推送用户扩展信息 */
  pushUserExt?: RiskDataServiceAlertExceptionEventMsgRulePushUserExtVo;
  /** 推送用户类型 */
  pushVoiceUserTypes?: string[];
  /** 推送用户扩展信息 */
  pushVoiceUserExt?: RiskDataServiceAlertExceptionEventMsgRulePushUserExtVo;
};

/**
 * OpenAPI 组件类型：TagSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TagSaveDto
 */
export type RiskDataServiceTagSaveDto = {
  /** 标签类型 */
  tagType: "RISK" | "INSTANCE" | "ORIGINAL_STRATEGY_ITEM" | "EXE_STRATEGY_ITEM" | "EXE_STRATEGY_ITEM_PUBLISHED" | "RWD_INSTANCE";
  /** 标签id（编辑标签则必传） */
  id?: number;
  /** 标签名称 */
  name: string;
  /** 父级标签id */
  parentId?: number;
};

/**
 * OpenAPI 组件类型：TagSaveBo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TagSaveBo
 */
export type RiskDataServiceTagSaveBo = {
  /** 标签id */
  id?: number;
  /** 标签名称 */
  name?: string;
  /** 父级标签id */
  parentId?: number;
};

/**
 * OpenAPI 组件类型：TagSaveByTypeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TagSaveByTypeDto
 */
export type RiskDataServiceTagSaveByTypeDto = {
  /** 标签类型 */
  tagType: "RISK" | "INSTANCE" | "ORIGINAL_STRATEGY_ITEM" | "EXE_STRATEGY_ITEM" | "EXE_STRATEGY_ITEM_PUBLISHED" | "RWD_INSTANCE";
  /** 标签集合 */
  tags?: RiskDataServiceTagSaveBo[];
};

/**
 * OpenAPI 组件类型：ObjectTreeBaseVoTagTypeEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVoTagTypeEnum
 */
export type RiskDataServiceObjectTreeBaseVoTagTypeEnum = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "RISK" | "INSTANCE" | "ORIGINAL_STRATEGY_ITEM" | "EXE_STRATEGY_ITEM" | "EXE_STRATEGY_ITEM_PUBLISHED" | "RWD_INSTANCE";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoTagTypeEnum[];
};

/**
 * OpenAPI 组件类型：TagTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TagTreeVo
 */
export type RiskDataServiceTagTreeVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "RISK" | "INSTANCE" | "ORIGINAL_STRATEGY_ITEM" | "EXE_STRATEGY_ITEM" | "EXE_STRATEGY_ITEM_PUBLISHED" | "RWD_INSTANCE";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoTagTypeEnum[];
  /** 标签ID */
  id?: number;
  /** 父级标签id */
  parentId?: number;
  /** 标签描述 */
  desc?: string;
  /** 是否能删除 */
  deleteAble?: boolean;
};

/**
 * OpenAPI 组件类型：ObjectCategoryTagQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectCategoryTagQueryDto
 */
export type RiskDataServiceObjectCategoryTagQueryDto = {
  /** 对象类型（与实例id二选一） */
  rwdObjectTypes?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION"[];
  /** 实例id */
  instanceIds?: string[];
};

/**
 * OpenAPI 组件类型：ObjectInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectInfo
 */
export type RiskDataServiceObjectInfo = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
};

/**
 * OpenAPI 组件类型：ExePlanItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanItemVo
 */
export type RiskDataServiceExePlanItemVo = {
  /** 计划id */
  id?: number;
  /** 计划名称 */
  name?: string;
  /** 计划类型 */
  planType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 流程方案id */
  processId?: string;
  /** 流程方案名称 */
  processName?: string;
  /** 方案状态，0-需维护，1-正常 */
  processType?: number;
  /** 生效开始时间 */
  beginTime?: string;
  /** 生效结束时间 */
  endTime?: string;
  /** 是否过期 */
  isExpired?: boolean;
  /** 策略事项数量 */
  strategyItemCount?: number;
  /** 对象类列表 */
  objects?: RiskDataServiceObjectInfo[];
  /** 频次描述集合 */
  periodDesc?: string[];
  /** 变更状态 */
  isChange?: boolean;
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 修改时间 */
  updateTime?: string;
};

/**
 * OpenAPI 组件类型：ExePlanListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanListVo
 */
export type RiskDataServiceExePlanListVo = {
  /** 计划列表数据 */
  planItems?: RiskDataServiceExePlanItemVo[];
  /** 对象类 */
  groupObjectTrees?: RiskDataServiceGroupObjectTree[];
};

/**
 * OpenAPI 组件类型：PlanChangeStatusDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PlanChangeStatusDto
 */
export type RiskDataServicePlanChangeStatusDto = {
  /** 计划id */
  id?: number;
};

/**
 * OpenAPI 组件类型：ExePlanSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanSaveDto
 */
export type RiskDataServiceExePlanSaveDto = {
  /** id 编辑时传入 */
  id?: number;
  /** 名称 */
  name?: string;
  /** 类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 流程方案id */
  processId?: string;
  /** 生效开始时间 */
  beginTime?: string;
  /** 生效结束时间 */
  endTime?: string;
  /** 打卡方式 */
  punchingModelType?: "NONE" | "PHOTOGRAPH" | "SCAN" | "NFC";
  /** 打卡对象 */
  punchingModelObject?: "SPACE" | "OBJECT";
  /** 对象打卡方式 */
  punchingModes?: RiskDataServicePunchingMode[];
  /** 全局时间配置 */
  globalTimeSetting?: RiskDataServiceGlobalTimeSetting;
  /** 是否启用 */
  isEnable?: boolean;
  /** 选中策略事项id */
  strategyItemDtos?: RiskDataServiceStrategyItemDto[];
};

/**
 * OpenAPI 组件类型：ProcessVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProcessVo
 */
export type RiskDataServiceProcessVo = {
  /** 流程id */
  id?: string;
  /** 流程名称 */
  name?: string;
  /** 流程类型：0-需维护，1-正常 */
  type?: number;
};

/**
 * OpenAPI 组件类型：PlanGenerateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PlanGenerateDto
 */
export type RiskDataServicePlanGenerateDto = {
  /** 规则编码 */
  ruleCode?: string;
  /** 生效开始时间 */
  beginTime?: string;
  /** 生效结束时间 */
  endTime?: string;
  /** 类型（非必填） */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
};

/**
 * OpenAPI 组件类型：ExePlanStatusUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanStatusUpdateDto
 */
export type RiskDataServiceExePlanStatusUpdateDto = {
  /** 执行计划id */
  ids: number[];
  /** 执行计划状态 */
  status: "DISABLE" | "ENABLE";
  /** 是否流程方案改变引起的变更状态 */
  changeAlterStatus?: boolean;
};

/**
 * OpenAPI 组件类型：ExePlanCopyDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanCopyDto
 */
export type RiskDataServiceExePlanCopyDto = {
  /** 执行计划id */
  id: number;
  /** 执行计划名称 */
  name: string;
  /** 生效开始时间 */
  beginTime?: string;
  /** 生效结束时间 */
  endTime?: string;
};

/**
 * OpenAPI 组件类型：ExePlanRemindVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanRemindVo
 */
export type RiskDataServiceExePlanRemindVo = {
  /** 还未创建计划的策略事项数量 */
  pendingExeStrategyItemCount?: number;
  /** 还未创建计划的策略事项id */
  pendingExeStrategyItemIds?: number[];
  /** 已发生变更的策略事项数量 */
  changedExeStrategyItemCount?: number;
  /** 已发生变更的执行计划数量 */
  changedExePlanCount?: number;
};

/**
 * OpenAPI 组件类型：ThirdPlanVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ThirdPlanVo
 */
export type RiskDataServiceThirdPlanVo = {
  /** 计划id */
  id?: number;
  /** 计划名称 */
  name?: string;
  /** 工单流程id */
  processId?: string;
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
};

/**
 * OpenAPI 组件类型：ThirdPlanQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ThirdPlanQueryDto
 */
export type RiskDataServiceThirdPlanQueryDto = {
  /** 流程方案id（不传不作为参数） */
  processIds?: string[];
  /** 是否查询整个集团下的项目 */
  queryAllProject?: boolean;
  /** 类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
};

/**
 * OpenAPI 组件类型：MaterialDownloadQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MaterialDownloadQueryDto
 */
export type RiskDataServiceMaterialDownloadQueryDto = {
  /** 调研检查工作id */
  workId?: number;
};

/**
 * OpenAPI 组件类型：SimpleExceptionInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleExceptionInstanceVo
 */
export type RiskDataServiceSimpleExceptionInstanceVo = {
  /** 实例id */
  rwdInstanceId?: string;
  /** 实例名称 */
  rwdInstanceName?: string;
  /** 所在空间id */
  spaceIds?: string[];
  /** 实例类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 最差状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
};

/**
 * OpenAPI 组件类型：IssueTypeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IssueTypeVo
 */
export type RiskDataServiceIssueTypeVo = {
  /** 业务类别-问题类型id */
  id?: number;
  /** 业务类别-问题类型名称 */
  name?: string;
  /** 是否能删除 */
  deleteAble?: boolean;
};

/**
 * OpenAPI 组件类型：PjRiskBusinessCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskBusinessCategoryVo
 */
export type RiskDataServicePjRiskBusinessCategoryVo = {
  /** 业务类别id */
  id?: number;
  /** 业务类别名称 */
  name?: string;
  /** 业务类别-问题类型集合 */
  issueTypes?: RiskDataServiceIssueTypeVo[];
  /** 业务类别-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 是否能删除 */
  deleteAble?: boolean;
  /** 是否为预制业务类别 */
  prefabrication?: boolean;
};

/**
 * OpenAPI 组件类型：TagVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TagVo
 */
export type RiskDataServiceTagVo = {
  /** 标签ID */
  id?: number;
  /** 父级标签id */
  parentId?: number;
  /** 标签描述 */
  desc?: string;
  /** 标签描述 */
  children?: RiskDataServiceTagVo[];
};

/**
 * OpenAPI 组件类型：BaseExceptionEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BaseExceptionEventVo
 */
export type RiskDataServiceBaseExceptionEventVo = {
  id?: number;
  /** 异常事件的名称 */
  eventName?: string;
  /** 异常事件的项目编码 #YS-2024-10-15-1 */
  eventNum?: string;
  /** 当前的严重程度 */
  now?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 异常事件的状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 异常事件的始发时间 */
  startTime?: string;
  /** 异常事件的更新时间 */
  updateTime?: string;
  /** 异常事件的结束时间 */
  endTime?: string;
};

/**
 * OpenAPI 组件类型：SimpleProblemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleProblemVo
 */
export type RiskDataServiceSimpleProblemVo = {
  id?: number;
  /** 项目风险id */
  pjRiskBusinessId?: string;
  /** 风险实例id */
  pjRiskInstanceBusinessId?: string;
  /** meoi空间功能类型 */
  meoiSpaceTypeCode?: string;
  /** 业务类别 */
  businessCategory?: RiskDataServicePjRiskBusinessCategoryVo;
  /** 对象类别 */
  objectCategories?: RiskDataServiceTagVo[];
  /** 对象实例id */
  rwdInstanceId?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 问题的当前状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题的上次状态 有可能相同 */
  oldRiskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题的描述 */
  problemDesc?: string;
  /** 暂不处理 */
  noTreatment?: boolean;
  /** 异常事件信息 */
  exceptionEvents?: RiskDataServiceBaseExceptionEventVo[];
  /** 问题实际影响 */
  pjRiskImpactCategories?: RiskDataServicePjRiskImpactCategoryVo[];
  /** 问题的开始时间 */
  startTime?: string;
  /** 问题的结束时间 */
  endTime?: string;
  /** 用户报事工单数量 */
  customerOrderCount?: number;
  /** 是否需要人工核实 */
  needManualVerify?: boolean;
  /** 要求解决时间 */
  targetSolvedTime?: string;
  /** 要求响应时间 */
  targetResponseTime?: string;
  /** 问题是否已结束 */
  finished?: boolean;
  projectId?: string;
  groupCode?: string;
  /** 初始来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 实体id */
  entityId?: number;
  /** 其他实例 */
  otherInstance?: boolean;
  /** 其他对象类 */
  isOtherObject?: boolean;
  /** 是否部件 */
  component?: boolean;
  /** 最严重的成都 */
  highestStatus?: "NORMAL" | "WARN" | "EXCEPTION";
};

/**
 * OpenAPI 组件类型：EEProblemQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemQueryDto
 */
export type RiskDataServiceEEProblemQueryDto = {
  /** 异常创建开始时间,闭区间 */
  createStartTime?: string;
  /** 异常创建结束时间，开区间 */
  createEndTime?: string;
  /** 问题是否已结束 */
  finished?: boolean;
  /** 问题状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION"[];
  /** 分页限制 */
  limit?: number;
  /** 分页id */
  lastId?: number;
  /** 对象类编码 */
  classCode?: string;
};

/**
 * OpenAPI 组件类型：RiskBusinessCategoryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskBusinessCategoryDto
 */
export type RiskDataServiceRiskBusinessCategoryDto = {
  id?: number;
  name?: string;
};

/**
 * OpenAPI 组件类型：ExceptionEventChangeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventChangeDto
 */
export type RiskDataServiceExceptionEventChangeDto = {
  /** 异常事件的id */
  id?: number;
  /** 异常事件的名称 */
  eventName?: string;
  /** 异常事件的项目编码 #YS-2024-10-15-1 */
  eventNum?: string;
  /** 当前的严重程度 */
  now?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 当前的严重程度 */
  pre?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 异常事件的状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 异常事件的始发时间 */
  startTime?: string;
  /** 异常事件的更新时间 */
  updateTime?: string;
  /** 异常事件的结束时间 */
  endTime?: string;
};

/**
 * OpenAPI 组件类型：PjRiskEvaluateRecordStructDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEvaluateRecordStructDto
 */
export type RiskDataServicePjRiskEvaluateRecordStructDto = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  /** 项目风险id */
  pjRiskBusinessId: string;
  /** 实例id */
  rwdInstanceId: string;
  pjRiskInstanceBusinessId?: string;
  /** 上报类型 */
  sourceType: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 上报类型 - 顾问或外部用户， 默认顾问 */
  workOrderUploadType?: "EXTERNAL_USER" | "CONSULTANT";
  /** 上报来源数据id */
  recordSourceId: string;
  /** 上报时间 */
  recordTime: string;
  /** 风险的状态 */
  riskStatus: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题描述 */
  recordDesc: string;
  /** 是否需核实 */
  needVerification?: boolean;
  executableMeasureId?: number;
  /** 是否为误报信息 */
  misstatement?: boolean;
  /** IOT与人工观测结果是否不一致 */
  iotMismatchManualObserve?: boolean;
  /** 扩展信息 */
  recordExtInfo?: RiskDataServiceRecordExtInfo;
  /** 扩展信息JSON */
  extInfo?: string;
};

/**
 * OpenAPI 组件类型：DiffDtoBoolean
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DiffDtoBoolean
 */
export type RiskDataServiceDiffDtoBoolean = {
  oldValue?: boolean;
  newValue?: boolean;
};

/**
 * OpenAPI 组件类型：DiffDtoInteger
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DiffDtoInteger
 */
export type RiskDataServiceDiffDtoInteger = {
  oldValue?: number;
  newValue?: number;
};

/**
 * OpenAPI 组件类型：DiffDtoLocalDateTime
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DiffDtoLocalDateTime
 */
export type RiskDataServiceDiffDtoLocalDateTime = {
  oldValue?: string;
  newValue?: string;
};

/**
 * OpenAPI 组件类型：DiffDtoUniversalHighMidLow
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DiffDtoUniversalHighMidLow
 */
export type RiskDataServiceDiffDtoUniversalHighMidLow = {
  oldValue?: "HIGH" | "MID" | "LOW";
  newValue?: "HIGH" | "MID" | "LOW";
};

/**
 * OpenAPI 组件类型：DiffDtoLong
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DiffDtoLong
 */
export type RiskDataServiceDiffDtoLong = {
  oldValue?: number;
  newValue?: number;
};

/**
 * OpenAPI 组件类型：DiffDtoListString
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DiffDtoListString
 */
export type RiskDataServiceDiffDtoListString = {
  oldValue?: string[];
  newValue?: string[];
};

/**
 * OpenAPI 组件类型：EEProblemChangeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemChangeDto
 */
export type RiskDataServiceEEProblemChangeDto = {
  id?: number;
  /** 项目风险id */
  pjRiskBusinessId?: string;
  /** meoi空间功能类型 */
  meoiSpaceTypeCode?: string;
  /** 业务类别 */
  businessCategory?: RiskDataServiceRiskBusinessCategoryDto;
  /** 对象实例id */
  rwdInstanceId?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 问题的当前状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题的上次状态 有可能相同 */
  oldRiskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MID" | "LOW";
  /** 等級別名 */
  degreeAlias?: string;
  /** 之前的严重程度 */
  preImportanceDegree?: "HIGH" | "MID" | "LOW";
  /** 问题的描述 */
  problemDesc?: string;
  /** 暂不处理 */
  noTreatment?: boolean;
  /** 异常事件信息 */
  exceptionEvents?: RiskDataServiceExceptionEventChangeDto[];
  /** 问题对应的评估记录信息 */
  riskEvaluateRecords?: RiskDataServicePjRiskEvaluateRecordStructDto[];
  /** 问题的开始时间 */
  startTime?: string;
  /** 问题的结束时间 */
  endTime?: string;
  /** 用户报事工单数量 */
  customerOrderCount?: number;
  /** 是否抑制工单生成 */
  suppressWorkOrderIfFirst?: boolean;
  /** 初次发生 */
  initProblem?: boolean;
  /** 是否需要人工核实 */
  needManualVerify?: boolean;
  /** 要求解决时间 */
  targetSolvedTime?: string;
  /** 要求响应时间 */
  targetResponseTime?: string;
  /** 物理世界实例类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 是否为误报 */
  misstatement?: boolean;
  projectId?: string;
  groupCode?: string;
  fault?: boolean;
  /** 处理专业Id */
  pjDealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
  /** 关联自维修sourceId */
  selfRepairSourceIds?: string[];
  /** 结束状态变更结果 */
  finishedChange?: RiskDataServiceDiffDtoBoolean;
  /** 暂不处理变更结果 */
  noTreatmentChange?: RiskDataServiceDiffDtoBoolean;
  /** 抑制工单生成变更结果 */
  suppressWorkOrderIfFirstChange?: RiskDataServiceDiffDtoBoolean;
  /** 外部用户生成变更结果 */
  externalCustomerChange?: RiskDataServiceDiffDtoBoolean;
  /** 外部用户生数量变更结果 */
  customerOrderCountChange?: RiskDataServiceDiffDtoInteger;
  /** 人工核实变更结果 */
  needManualVerifyChange?: RiskDataServiceDiffDtoBoolean;
  /** 要求结束时间对比 */
  targetFinishTimeChange?: RiskDataServiceDiffDtoLocalDateTime;
  /** 要求响应时间对比 */
  targetResponseTimeChange?: RiskDataServiceDiffDtoLocalDateTime;
  /** 问题等级对比 */
  degreeChange?: RiskDataServiceDiffDtoUniversalHighMidLow;
  /** 处置专业对比 */
  pjDealMajorIdChange?: RiskDataServiceDiffDtoLong;
  /** 自维修source对比 */
  relatedSelfRepairChange?: RiskDataServiceDiffDtoListString;
  /** 是否自身问题 */
  faultChange?: RiskDataServiceDiffDtoBoolean;
};

/**
 * OpenAPI 组件类型：EEProblemCameraIdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemCameraIdVo
 */
export type RiskDataServiceEEProblemCameraIdVo = {
  /** 问题ID */
  problemId?: number;
  /** 摄像头实例ID */
  objectIds?: string[];
};

/**
 * OpenAPI 组件类型：EEProblemCameraVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemCameraVo
 */
export type RiskDataServiceEEProblemCameraVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  /** 问题ID */
  problemId?: number;
};

/**
 * OpenAPI 组件类型：ExeRoomFuncTypeOptionalComponentVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeRoomFuncTypeOptionalComponentVo
 */
export type RiskDataServiceExeRoomFuncTypeOptionalComponentVo = {
  /** 部件实体id */
  componentEntityId?: number;
  /** 部件实体名称 */
  componentEntityName?: string;
};

/**
 * OpenAPI 组件类型：ExeRoomFuncTypeOptionalComponentQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeRoomFuncTypeOptionalComponentQryDto
 */
export type RiskDataServiceExeRoomFuncTypeOptionalComponentQryDto = {
  /** 空间功能类型 */
  roomFuncTypes: string[];
};

/**
 * OpenAPI 组件类型：RoomFuncTypeSimpleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RoomFuncTypeSimpleVo
 */
export type RiskDataServiceRoomFuncTypeSimpleVo = {
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能名称 */
  roomFuncTypeName?: string;
};

/**
 * OpenAPI 组件类型：RiskEventCategoryListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventCategoryListVo
 */
export type RiskDataServiceRiskEventCategoryListVo = {
  uniqueKey?: string;
  /** 风险事件名称 */
  name?: string;
  /** 发生后可能造成的影响 */
  riskEventImpactDescription?: string;
  /** 是否主动管理 */
  follow?: boolean;
  /** 问题等级配置 */
  issueLevel?: RiskDataServicePjRiskIssueLevelVo;
  /** 常见性 */
  ordinary?: RiskDataServiceEnumStruct5;
  /** 影响类型 */
  riskImpactCategories?: RiskDataServicePjRiskImpactCategoryVo[];
  /** 是否有风控策略 */
  hasStrategy?: boolean;
};

/**
 * OpenAPI 组件类型：LabelVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/LabelVo
 */
export type RiskDataServiceLabelVo = {
  /** 编码.可能为空 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 排序 */
  sort?: number;
  /** 风险事件列表 */
  riskEventCategoryList?: RiskDataServiceRiskEventCategoryListVo[];
};

/**
 * OpenAPI 组件类型：DealMajorVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DealMajorVo
 */
export type RiskDataServiceDealMajorVo = {
  /** 处理专业id,可空 */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 排序 */
  sort?: number;
  labels?: RiskDataServiceLabelVo[];
};

/**
 * OpenAPI 组件类型：CategoryBasicVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryBasicVo
 */
export type RiskDataServiceCategoryBasicVo = {
  uniqueKey?: string;
  /** 风险事件id */
  riskEventBusinessId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
  /** 发生后可能造成的影响 */
  riskEventImpactDescription?: string;
  /** 是否已关注 */
  followMark?: boolean;
  /** 问题等级配置 */
  pjRiskIssueLevelVo?: RiskDataServicePjRiskIssueLevelVo;
  /** 常见性 */
  ordinary?: RiskDataServiceEnumStruct5;
  /** 影响类型 */
  riskImpactCategories?: RiskDataServicePjRiskImpactCategoryVo[];
  /** 处理专业 */
  dealMajorId?: number;
  /** 处理名称 */
  dealMajorName?: string;
  /** 风控目标 */
  riskObjectives?: RiskDataServiceRiskObjectiveVo[];
};

/**
 * OpenAPI 组件类型：CategoryRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryRiskVo
 */
export type RiskDataServiceCategoryRiskVo = {
  /** 风险点编码 */
  riskBusinessId?: string;
  /** 风险点名称 */
  riskName?: string;
  /** 问题等级 */
  issueLevel?: RiskDataServicePjRiskIssueLevelVo;
  /** 风险分类标签 */
  categoryLabelList?: RiskDataServicePjRiskCategoryLabelVo[];
  /** 是否不视作故障 */
  notRegardFault?: boolean;
  /** 是否顶节点 */
  isTopRisk?: boolean;
  /** 关联处理专业 */
  dealMajorList?: RiskDataServicePjDealMajorListVo[];
};

/**
 * OpenAPI 组件类型：ComponentVoCategoryRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ComponentVoCategoryRiskVo
 */
export type RiskDataServiceComponentVoCategoryRiskVo = {
  /** 部件id */
  componentId?: number;
  /** 部件名称 */
  componentName?: string;
  /** 数据 */
  data?: RiskDataServiceCategoryRiskVo[];
};

/**
 * OpenAPI 组件类型：ClassVoCategoryRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ClassVoCategoryRiskVo
 */
export type RiskDataServiceClassVoCategoryRiskVo = {
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 数据 */
  data?: RiskDataServiceCategoryRiskVo[];
  /** 部件 */
  componentList?: RiskDataServiceComponentVoCategoryRiskVo[];
};

/**
 * OpenAPI 组件类型：CategoryTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryTreeNodeVo
 */
export type RiskDataServiceCategoryTreeNodeVo = {
  /** 节点id */
  id?: number;
  /** 节点名称 */
  name?: string;
  classCode?: string;
  className?: string;
  /** 是否是部件 */
  component?: boolean;
  /** 实体id */
  entityId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 风险id */
  riskBusinessId?: string;
  /** 下级节点 */
  children?: RiskDataServiceCategoryTreeNodeVo[];
  /** 与下级节点的关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  /** 是否有策略 */
  strategy?: boolean;
  /** 实体信息 */
  entity?: RiskDataServiceTreeNodeEntityVo;
  /** 所属实体 */
  belongEntity?: RiskDataServiceTreeNodeEntityVo;
};

/**
 * OpenAPI 组件类型：CategoryTreeRootNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryTreeRootNodeVo
 */
export type RiskDataServiceCategoryTreeRootNodeVo = {
  /** 节点id */
  id?: number;
  /** 节点名称 */
  name?: string;
  classCode?: string;
  className?: string;
  /** 是否是部件 */
  component?: boolean;
  /** 实体id */
  entityId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 风险id */
  riskBusinessId?: string;
  /** 下级节点 */
  children?: RiskDataServiceCategoryTreeNodeVo[];
  /** 与下级节点的关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  /** 是否有策略 */
  strategy?: boolean;
  /** 实体信息 */
  entity?: RiskDataServiceTreeNodeEntityVo;
  /** 所属实体 */
  belongEntity?: RiskDataServiceTreeNodeEntityVo;
};

/**
 * OpenAPI 组件类型：CategoryStatusStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryStatusStatisticsVo
 */
export type RiskDataServiceCategoryStatusStatisticsVo = {
  /** 总数量 */
  total?: number;
  /** 最后更新时间 */
  lastUpdateTime?: string;
  /** 风险等级 */
  riskLevel?: "HIGH" | "MEDIUM" | "UNKNOWN" | "PART_UNKNOWN" | "LOW";
  /** 各状态对应的数量 */
  statusCountMap?: RiskDataServiceMapInteger;
};

/**
 * OpenAPI 组件类型：CategoryStrategyStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryStrategyStatisticsVo
 */
export type RiskDataServiceCategoryStrategyStatisticsVo = {
  /** 策略覆盖率 */
  coverRatio?: number;
  /** 巡检策略事项数量 */
  routingInspectionCount?: number;
  /** 维保策略事项数量 */
  maintenanceCount?: number;
  /** iot策略事项数量 */
  iotCount?: number;
  /** 对象类策略统计 */
  classStrategyCounts?: RiskDataServiceClassStrategyCount[];
};

/**
 * OpenAPI 组件类型：ExePlanVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanVo
 */
export type RiskDataServiceExePlanVo = {
  /** 计划id */
  id?: number;
  /** 计划名称 */
  name?: string;
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
};

/**
 * OpenAPI 组件类型：CategoryStrategyItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryStrategyItemVo
 */
export type RiskDataServiceCategoryStrategyItemVo = {
  id?: number;
  /** 策略类型:巡检/维保 */
  strategyType?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 策略事项名称 */
  name?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 使用设备数量 */
  instanceCount?: number;
  /** 频次 */
  period?: RiskDataServicePeriodVo;
  /** 关联计划 */
  planList?: RiskDataServiceExePlanVo[];
  /** 所在节点ID */
  treeNodeIds?: number[];
};

/**
 * OpenAPI 组件类型：CategoryStrategyCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryStrategyCategoryVo
 */
export type RiskDataServiceCategoryStrategyCategoryVo = {
  /** 分类id */
  categoryId?: number;
  /** 分类名称 */
  categoryName?: string;
  /** 策略事项列表 */
  strategyItemList?: RiskDataServiceCategoryStrategyItemVo[];
};

/**
 * OpenAPI 组件类型：CategoryStrategyTypeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryStrategyTypeVo
 */
export type RiskDataServiceCategoryStrategyTypeVo = {
  /** 类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 策略分类 */
  categories?: RiskDataServiceCategoryStrategyCategoryVo[];
};

/**
 * OpenAPI 组件类型：IotRuleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRuleVo
 */
export type RiskDataServiceIotRuleVo = {
  id?: number;
  /** 规则名称 */
  name?: string;
  classCode?: string;
  className?: string;
  /** 应用设备数量 */
  instanceCount?: number;
  /** 临时停用的设备 */
  disabledEquipments?: RiskDataServiceSimpleRwdObjectVo[];
};

/**
 * OpenAPI 组件类型：CategoryDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryDetailVo
 */
export type RiskDataServiceCategoryDetailVo = {
  /** 基本信息 */
  basic?: RiskDataServiceCategoryBasicVo;
  /** 风险点列表 */
  risks?: RiskDataServiceClassVoCategoryRiskVo[];
  /** 因果视图-顶节点 */
  tree?: RiskDataServiceCategoryTreeRootNodeVo;
  /** 状态统计 */
  statusStatistics?: RiskDataServiceCategoryStatusStatisticsVo;
  /** 风险事件统计 */
  riskEventStatistics?: RiskDataServiceCategoryRiskEventStatisticsVo;
  /** 资产问题统计 */
  assetsStatistics?: RiskDataServiceAssetsVo[];
  /** 策略列表 */
  strategies?: RiskDataServiceCategoryStrategyTypeVo[];
  /** iot报警规则 */
  iotRules?: RiskDataServiceIotRuleVo[];
  /** 策略统计 */
  strategyStatistics?: RiskDataServiceCategoryStrategyStatisticsVo;
};

/**
 * OpenAPI 组件类型：CategoryInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryInstanceVo
 */
export type RiskDataServiceCategoryInstanceVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  /** 实例是否存在 */
  instanceExists?: boolean;
  /** 风险状态 */
  riskStatus?: "EXCEPTION" | "CONJECTURE_EXCEPTION" | "POTENTIAL" | "UNKNOWN" | "GENERAL_NORMAL" | "NORMAL";
  /** 是否在适用期内 */
  usefulLifeMark?: boolean;
  /** 是否主动管理 */
  followMark?: boolean;
  /** 状态更新时间 */
  statusUpdateTime?: string;
  /** 隐患树id */
  instanceTreeId?: number;
  /** 未解决的异常事件ID列表 */
  unSolvedExceptionEventIds?: number[];
  /** 未解决的异常事件列表 */
  unSolvedExceptionEvents?: RiskDataServiceEEExceptionThirdVo[];
  /** 失效数量 */
  invalidNum?: number;
  /** 监测 */
  monitoringSituations?: "STRATEGY_EXECUTION_NOT_EXPECTED" | "IOT_DISCONNECTION" | "STRATEGY_LOW_FREQUENCY"[];
  /** 策略覆盖率 */
  strategyCoverRatio?: number;
  inMeoiScope?: boolean;
};

/**
 * OpenAPI 组件类型：CategoryInstanceQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryInstanceQueryDto
 */
export type RiskDataServiceCategoryInstanceQueryDto = {
  /** 当前页 */
  current?: number;
  /** 每页显示条数 */
  size?: number;
  /** 对象名称关键词 */
  localNameKeyword?: string;
  /** 建筑id */
  buildingIdList?: string[];
  /** 楼层id */
  floorIdList?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
  /** 所在空间id */
  inSpaceIds?: string[];
  /** 交付专业 */
  majorCodes?: string[];
  /** 风险事件分类 */
  categoryUniqueKey?: string;
  /** 风险状态 */
  riskStatuses?: "EXCEPTION" | "CONJECTURE_EXCEPTION" | "WARN" | "INDUCEMENT_HAPPEN" | "UNKNOWN" | "GENERAL_NORMAL" | "NORMAL"[];
  /** 是否已关注 */
  followMark?: boolean;
  /** 是否在适用期内(已激活) */
  usefulLifeMark?: boolean;
  /** 风险点监测 */
  riskPoints?: "STRATEGY_EXECUTION_NOT_EXPECTED" | "IOT_DISCONNECTION" | "STRATEGY_LOW_FREQUENCY"[];
};

/**
 * OpenAPI 组件类型：CategoryTreeNodeDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryTreeNodeDetailVo
 */
export type RiskDataServiceCategoryTreeNodeDetailVo = {
  /** 节点id */
  id?: number;
  /** 节点名称 */
  name?: string;
  /** 策略事项列表 */
  strategyItemList?: RiskDataServiceCategoryStrategyItemVo[];
  /** iot报警规则列表 */
  iotRuleList?: RiskDataServiceIotRuleVo[];
};

/**
 * OpenAPI 组件类型：YearToYearVoInteger
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/YearToYearVoInteger
 */
export type RiskDataServiceYearToYearVoInteger = {
  /** 当前值 */
  current?: number;
  /** 同比值 */
  lastYear?: number;
};

/**
 * OpenAPI 组件类型：CategoryRiskEventStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CategoryRiskEventStatisticsVo
 */
export type RiskDataServiceCategoryRiskEventStatisticsVo = {
  /** 发生次数 */
  happenCount?: RiskDataServiceYearToYearVoInteger;
  /** 超征兆以及潜在风险次数 */
  warnCount?: RiskDataServiceYearToYearVoInteger;
};

/**
 * OpenAPI 组件类型：AssetsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AssetsVo
 */
export type RiskDataServiceAssetsVo = {
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 是否部件 */
  component?: boolean;
  /** 部件id */
  entityId?: number;
  /** 部件名称 */
  entityName?: string;
  /** 故障次数 */
  happenCount?: RiskDataServiceYearToYearVoInteger;
  /** 其他问题次数 */
  otherCount?: RiskDataServiceYearToYearVoInteger;
};

/**
 * OpenAPI 组件类型：RoomFuncTypeSimpleStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RoomFuncTypeSimpleStruct
 */
export type RiskDataServiceRoomFuncTypeSimpleStruct = {
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能名称 */
  roomFuncTypeName?: string;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemUpdateDto
 */
export type RiskDataServiceExeStrategyItemUpdateDto = {
  /** 策略事项id */
  id?: number;
  /** 策略事项名称 */
  name?: string;
  /** 部件实体id */
  componentEntityId?: number;
  /** 策略分类id */
  strategyCategoryId: number;
  /** 适用对象类id */
  suitableObjectClassId: number;
  /** 适用对象实例id集合 */
  suitableInstanceIds?: string[];
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 频次时间数 */
  periodTimes?: number;
  /** 频次次数 */
  periodCount?: number;
  /** 措施内容 */
  measureVos?: RiskDataServiceExeMeasureDto[];
  /** 策略事项标签id */
  tagIds?: number[];
  /** 执行顺序id */
  execStepId?: number;
  /** 空间类：空间功能类型编码(该字段如果是空间类必传) */
  roomFuncTypes?: string[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemInsertDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemInsertDto
 */
export type RiskDataServiceExeStrategyItemInsertDto = {
  /** 策略事项id */
  id?: number;
  /** 策略事项名称 */
  name?: string;
  /** 部件实体id */
  componentEntityId?: number;
  /** 策略分类id */
  strategyCategoryId: number;
  /** 适用对象类id */
  suitableObjectClassId?: number;
  /** 适用对象实例id集合 */
  suitableInstanceIds?: string[];
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 频次类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 频次时间数 */
  periodTimes?: number;
  /** 频次次数 */
  periodCount?: number;
  /** 措施内容 */
  measureVos?: RiskDataServiceExeMeasureDto[];
  /** 策略事项标签id */
  tagIds?: number[];
  /** 执行顺序id */
  execStepId?: number;
  /** 对象类编码 */
  classCode: string;
  /** 空间类才传值：空间功能类型编码 */
  roomFuncTypes?: string[];
};

/**
 * OpenAPI 组件类型：RiskObjectiveVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskObjectiveVo
 */
export type RiskDataServiceRiskObjectiveVo = {
  id?: number;
  name?: string;
};

/**
 * OpenAPI 组件类型：AssetObjTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AssetObjTreeNodeVo
 */
export type RiskDataServiceAssetObjTreeNodeVo = {
  code?: string;
  name?: string;
  sort?: number;
  count?: number;
  children?: RiskDataServiceAssetObjTreeNodeVo[];
};

/**
 * OpenAPI 组件类型：ObjectTreeBaseVoMajorObjClassAndSpaceFunctionEnum
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeBaseVoMajorObjClassAndSpaceFunctionEnum
 */
export type RiskDataServiceObjectTreeBaseVoMajorObjClassAndSpaceFunctionEnum = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "ROOM_FUNCTION_NODE" | "ROOM_FUNCTION_NODE_CHILD";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjClassAndSpaceFunctionEnum[];
};

/**
 * OpenAPI 组件类型：MajorObjClassTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MajorObjClassTreeVo
 */
export type RiskDataServiceMajorObjClassTreeVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "ROOM_FUNCTION_NODE" | "ROOM_FUNCTION_NODE_CHILD";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjClassAndSpaceFunctionEnum[];
  /** 物理世界对象类型（树节点type=OBJECT_CLASS时，该字段有值） */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 节点数据统计 */
  count?: number;
};

/**
 * OpenAPI 组件类型：VarietyClassTreeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/VarietyClassTreeDto
 */
export type RiskDataServiceVarietyClassTreeDto = {
  /** 项目id */
  projectId?: string;
  /** 对象类型 */
  objectTypes?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION"[];
};

/**
 * OpenAPI 组件类型：ObjectTreeSearchDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeSearchDto
 */
export type RiskDataServiceObjectTreeSearchDto = {
  /** 需要排除的对象编码 */
  excludeClassCodes?: string[];
  /** 对象类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 是否过滤白名单中的classCode，默认false */
  withOutWhiteList?: boolean;
};

/**
 * OpenAPI 组件类型：ObjectClassPoiVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassPoiVo
 */
export type RiskDataServiceObjectClassPoiVo = {
  /** 信息点code */
  poiCode?: string;
  /** 信息点名称 */
  poiName?: string;
  /** 信息点类型 */
  poiTypeEnum?: "COMMON_POI" | "SPECIAL_POI" | "GENERAL_POI" | "GENERAL_ZONE_POI" | "BUILDING_POI";
  /** 信息点ID */
  poiId?: string;
  /** 单位 */
  unit?: string;
  /** 信息点类型 */
  dataType?: string;
  /** 信息点原类型 */
  origDataType?: string;
  /** 是否复数 */
  isMultiple?: boolean;
  /** 数据(信息点枚举) */
  dataSource?: string;
};

/**
 * OpenAPI 组件类型：RelationTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RelationTreeNodeVo
 */
export type RiskDataServiceRelationTreeNodeVo = {
  /** id，唯一值组装 */
  id?: string;
  /** nodeId */
  nodeId?: string;
  /** 父节点id */
  parentNodeId?: string;
  /** 目录层级时，值为category；图编码层级时，为图编码；边编码层级时，为边编码 */
  code?: string;
  /** name */
  name?: string;
  /** sort */
  sort?: string;
  /** 一级分组，用于图编码层级 */
  firstCategory?: string;
  /** 二级分组，用于图编码层级 */
  secondCategory?: string;
  /** 图编码，用于边编码层级 */
  graphCode?: string;
  /** 主要用于rcc业务，业务中sourceClassCode是必传的，所以只要传了souceClassCode，应该就能算出这个数据
业务上的sourceClassCode方向，比如：对应实体，当筛选了可建立关系，并且可建立关系确定时有效（双方的classCode都筛选了）。正向时，sourceClassCode取关系数据的from方，逆向时，sourceClassCode取关系数据的to方，双向时，sourceClassCode取关系数据的from和to方 */
  sourceClassCodeDir?: "FROM_TO" | "TO_FROM" | "BOTH";
  /** 子节点 */
  children?: RiskDataServiceRelationTreeNodeVo[];
};

/**
 * OpenAPI 组件类型：BuildableRelationTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BuildableRelationTreeVo
 */
export type RiskDataServiceBuildableRelationTreeVo = {
  /** 关系树列表，和参数列表对应，每个元素都可能有多个节点 */
  relTrees?: RiskDataServiceRelationTreeNodeVo[][];
};

/**
 * OpenAPI 组件类型：BuildableRelationFilterDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BuildableRelationFilterDto
 */
export type RiskDataServiceBuildableRelationFilterDto = {
  sourceClassCode: string;
  targetClassCode: string;
};

/**
 * OpenAPI 组件类型：RelationQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RelationQueryDto
 */
export type RiskDataServiceRelationQueryDto = {
  /** 关系树的可建立关系筛选，每个元素会得到一个关系树 */
  buildAbles?: RiskDataServiceBuildableRelationFilterDto[];
};

/**
 * OpenAPI 组件类型：RwdObjectClassVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdObjectClassVo
 */
export type RiskDataServiceRwdObjectClassVo = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 专业编码 */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorDeliveryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorDeliveryDto
 */
export type RiskDataServicePjDealMajorDeliveryDto = {
  /** 专业编码 */
  code?: string;
  /** 对象类列表 */
  objectClasses?: RiskDataServiceObjectClass6[];
};

/**
 * OpenAPI 组件类型：PjDealMajorNoDeliveryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorNoDeliveryDto
 */
export type RiskDataServicePjDealMajorNoDeliveryDto = {
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  self?: boolean;
  /** 部件列表.为空表示全选 */
  equipmentEntityIds?: number[];
};

/**
 * OpenAPI 组件类型：CriteriaRwdObject
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CriteriaRwdObject
 */
export type RiskDataServiceCriteriaRwdObject = {
  key?: Record<string, never>;
};

/**
 * OpenAPI 组件类型：PjRiskEventSimpleListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEventSimpleListVo
 */
export type RiskDataServicePjRiskEventSimpleListVo = {
  /** 风险事件ID */
  id?: number;
  /** 风险事件业务id */
  riskEventBusinessId?: number;
  /** 风险事件名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：PagePjRiskEventSimpleListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PagePjRiskEventSimpleListVo
 */
export type RiskDataServicePagePjRiskEventSimpleListVo = {
  /** 查询数据列表 */
  records?: RiskDataServicePjRiskEventSimpleListVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
};

/**
 * OpenAPI 组件类型：PjRiskEventPageSimpleDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEventPageSimpleDto
 */
export type RiskDataServicePjRiskEventPageSimpleDto = {
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
  /** 关键字（名称） */
  keyWord?: string;
};

/**
 * OpenAPI 组件类型：PjKlbRiskEventManageScopePublishDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjKlbRiskEventManageScopePublishDto
 */
export type RiskDataServicePjKlbRiskEventManageScopePublishDto = {
  /** 加入范围的风险事件id */
  addKlbRiskEventIds?: number[];
  /** 移除范围的风险事件ids */
  removeKlbRiskEventIds?: number[];
};

/**
 * OpenAPI 组件类型：EEPjRiskImpactCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEPjRiskImpactCategoryVo
 */
export type RiskDataServiceEEPjRiskImpactCategoryVo = {
  /** 影响类型id */
  id?: number;
  /** 影响类型名称 */
  name?: string;
  /** 关键性 */
  crucial?: "PIVOTAL" | "OTHER";
};

/**
 * OpenAPI 组件类型：PjRiskEventSimpleDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEventSimpleDto
 */
export type RiskDataServicePjRiskEventSimpleDto = {
  /** 关键字（名称） */
  keyWord?: string;
};

/**
 * OpenAPI 组件类型：Tag
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/Tag
 */
export type RiskDataServiceTag = {
  code?: string;
  name?: string;
  showOrder?: number;
};

/**
 * OpenAPI 组件类型：ClassCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ClassCategoryVo
 */
export type RiskDataServiceClassCategoryVo = {
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  /** 二级分类标签(系统为空)
设备定位标签.(为空时系统固定展示className,非系统展示成其他设备设施) */
  equipPosTag?: RiskDataServiceTag;
  /** 排序 */
  sort?: number;
};

/**
 * OpenAPI 组件类型：EquipPosTag
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EquipPosTag
 */
export type RiskDataServiceEquipPosTag = {
  code?: string;
  name?: string;
  objectClasses?: RiskDataServiceObjectClass[];
};

/**
 * OpenAPI 组件类型：PjDealMajorRiskDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorRiskDto
 */
export type RiskDataServicePjDealMajorRiskDto = {
  /** 风险点业务id */
  riskBusinessId?: string;
  /** 特定的空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
};

/**
 * OpenAPI 组件类型：RwdInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdInfoVo
 */
export type RiskDataServiceRwdInfoVo = {
  classCode?: string;
  code?: string;
  name?: string;
  values?: RiskDataServiceEnumStruct5[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleGroupThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleGroupThirdVo
 */
export type RiskDataServiceIotAlertRuleGroupThirdVo = {
  /** 分组ID */
  id?: number;
  /** 报警条件分组 */
  triggerConditions?: RiskDataServiceTopConditionGroupStruct[];
  /** 解除条件分组 */
  releaseConditions?: RiskDataServiceTopConditionGroupStruct[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleThirdVo
 */
export type RiskDataServiceIotAlertRuleThirdVo = {
  /** 规则ID */
  id?: number;
  /** 规则名称 */
  name?: string;
  /** 核实要求类型 */
  verifyType?: "NONE" | "APP" | "APP_WEB" | "WEB";
  /** 报警分组 */
  iotAlertRuleGroups?: RiskDataServiceIotAlertRuleGroupThirdVo[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleDetailQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleDetailQryDto
 */
export type RiskDataServiceIotAlertRuleDetailQryDto = {
  /** 报警规则ID */
  iotAlertRuleIds?: number[];
};

/**
 * OpenAPI 组件类型：MajorListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MajorListVo
 */
export type RiskDataServiceMajorListVo = {
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 关联的处理专业 */
  dealMajor?: RiskDataServicePjDealMajorListVo;
};

/**
 * OpenAPI 组件类型：DpInfoStandardVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DpInfoStandardVo
 */
export type RiskDataServiceDpInfoStandardVo = {
  /** 信息点编码 */
  code?: string;
  /** 是否重要(是否关键) */
  important?: boolean;
};

/**
 * OpenAPI 组件类型：DpRelationStandardVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DpRelationStandardVo
 */
export type RiskDataServiceDpRelationStandardVo = {
  /** 图类型编码 */
  graphCode?: string;
  /** 边类型编码 */
  relCode?: string;
  /** 是否重要(是否关键) */
  important?: boolean;
  /** 关联目标对象的对象类编码 */
  targetClassCode?: string;
  /** 源对象与目标对象的关联关系方向 */
  direction?: "FROM_TO" | "TO_FROM" | "BOTH";
};

/**
 * OpenAPI 组件类型：DpClassStandardVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DpClassStandardVo
 */
export type RiskDataServiceDpClassStandardVo = {
  /** 对象类编码 */
  classCode?: string;
  /** 是否重要(是否关键) */
  important?: boolean;
  /** 信息点交付标准 */
  infoStandardList?: RiskDataServiceDpInfoStandardVo[];
  /** 信息点交付标准 */
  relationStandardList?: RiskDataServiceDpRelationStandardVo[];
};

/**
 * OpenAPI 组件类型：DeliveryStandardDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DeliveryStandardDto
 */
export type RiskDataServiceDeliveryStandardDto = {
  /** 对象类编码
未避免性能瓶颈,一次不能超过100个 */
  classCodes?: string[];
};

/**
 * OpenAPI 组件类型：EEProblem
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblem
 */
export type RiskDataServiceEEProblem = {
  /** 问题id */
  id?: number;
  /** 问题描述 异常变正常时不改别名 */
  problemDesc?: string;
  /** 持续时长,分钟 */
  durationTime?: number;
  /** 实例id */
  rwdInstanceId?: string;
  /** 关联风险事件 */
  riskEventList?: RiskDataServiceRiskEvent[];
};

/**
 * OpenAPI 组件类型：OriginalProblemAndExceptionEvent
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalProblemAndExceptionEvent
 */
export type RiskDataServiceOriginalProblemAndExceptionEvent = {
  /** 异常事件 */
  exceptionEvent?: RiskDataServiceExceptionEvent;
  /** 始发问题 */
  eeProblem?: RiskDataServiceEEProblem;
};

/**
 * OpenAPI 组件类型：OriginalProblemAndExceptionQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OriginalProblemAndExceptionQueryDto
 */
export type RiskDataServiceOriginalProblemAndExceptionQueryDto = {
  /** 物理世界对象id
最大1000条 */
  rwdObjectIds?: string[];
  /** 二级风控目标 */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44"[];
};

/**
 * OpenAPI 组件类型：ExceptionEvent
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEvent
 */
export type RiskDataServiceExceptionEvent = {
  /** id */
  id?: number;
  /** 编码 */
  eventNumber?: string;
  /** 异常事件状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 是否已逾期 */
  overdue?: boolean;
  /** 处理进程 */
  solveProcess?: "FIND_EXCEPTION" | "SOLVING" | "VERIFICATION";
  /** 最早要求解决时间 */
  minRequireSolveTime?: string;
  /** 最晚要求解决时间 */
  maxRequireSolveTime?: string;
  /** 异常开始时间 */
  exceptionStartTime?: string;
  /** 持续时间,单位分钟 */
  duration?: number;
};

/**
 * OpenAPI 组件类型：EEStatisticsCountVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsCountVo
 */
export type RiskDataServiceEEStatisticsCountVo = {
  /** 当前值 */
  nowCount?: number;
  /** 之前值 */
  oldCount?: number;
};

/**
 * OpenAPI 组件类型：EEObjInstanceProblemStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceProblemStatisticsVo
 */
export type RiskDataServiceEEObjInstanceProblemStatisticsVo = {
  /** 处理专业id */
  pjDealMajorId?: number;
  /** 处理专业名称 */
  pjDealMajorName?: string;
  /** 处理专业排序字段(数字越小越靠前) */
  pjDealMajorSort?: number;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 是否是部件 */
  component?: boolean;
  /** 部件的实体id */
  klbEntityId?: number;
  /** 部件的实体名称 */
  entityName?: string;
  /** 故障问题次数 */
  faultCount?: RiskDataServiceEEStatisticsCountVo;
  /** 其他问题次数 */
  otherCount?: RiskDataServiceEEStatisticsCountVo;
  /** 造成关键影响的问题次数 */
  crucialProblemCount?: RiskDataServiceEEStatisticsCountVo;
  /** 高等级的问题次数 */
  highImportanceProblemCount?: RiskDataServiceEEStatisticsCountVo;
  /** 故障&关键问题数量 */
  crucialFaultProblemCount?: RiskDataServiceEEStatisticsCountVo;
  /** 故障&高等级问题数量 */
  highImportanceFaultProblemCount?: RiskDataServiceEEStatisticsCountVo;
  /** 造成关键影响的问题类数量 */
  crucialProblemCategoryCount?: number;
  /** 全部问题类数量 */
  problemCategoryCount?: number;
  /** 造成关键影响的异常资产数量 */
  crucialObjInstanceCount?: number;
  /** 全部异常资产数量 */
  abnormalObjInstanceCount?: number;
  /** 故障关键影响数量=故障问题的关键影响和异常事件id做笛卡尔集 */
  faultCrucialFaultCount: number;
  /** 其他问题关键影响数量 */
  otherCrucialFaultCount: number;
};

/**
 * OpenAPI 组件类型：EEObjInstanceProblemStatisticsQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceProblemStatisticsQryDto
 */
export type RiskDataServiceEEObjInstanceProblemStatisticsQryDto = {
  /** 开始日期，时间戳，闭区间 */
  startDate?: string;
  /** 结束日期,时间戳，开区间 */
  endDate?: string;
  /** 比较类型 */
  compareType?: "YEAR" | "MONTH" | "NONE";
  /** true: 已解决； false: 未解决； null: 全部 */
  finished?: boolean;
};

/**
 * OpenAPI 组件类型：EEStatisticsByDateVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsByDateVo
 */
export type RiskDataServiceEEStatisticsByDateVo = {
  /** 日期 */
  date?: string;
  /** 数量 */
  count?: RiskDataServiceEEStatisticsCountVo;
};

/**
 * OpenAPI 组件类型：EEObjInstanceProblemStatisticsMajorQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceProblemStatisticsMajorQryDto
 */
export type RiskDataServiceEEObjInstanceProblemStatisticsMajorQryDto = {
  /** 开始日期，时间戳，闭区间 */
  startDate?: string;
  /** 结束日期,时间戳，开区间 */
  endDate?: string;
  /** 比较类型 */
  compareType?: "YEAR" | "MONTH" | "NONE";
  /** true: 已解决； false: 未解决； null: 全部 */
  finished?: boolean;
  /** 处理专业id集合（other代表[其他]: 没有处理专业或处理专业被删除的问题） */
  pjDealMajorIds?: string[];
  /** 对象类型集合 */
  objTypes?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION"[];
  /** 对象类集合 */
  classCodes?: string[];
  /** 是否仅统计故障类问题 */
  onlyFault?: boolean;
};

/**
 * OpenAPI 组件类型：EEProblemRelExceptionEventSimpleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemRelExceptionEventSimpleVo
 */
export type RiskDataServiceEEProblemRelExceptionEventSimpleVo = {
  /** 异常事件ID */
  id?: number;
  /** 异常事件编号 */
  eventNumber?: string;
};

/**
 * OpenAPI 组件类型：EEProblemCategoryRelEEProblemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemCategoryRelEEProblemVo
 */
export type RiskDataServiceEEProblemCategoryRelEEProblemVo = {
  /** 问题id */
  id?: number;
  /** 资产id */
  objInstanceId?: string;
  /** 资产名称 */
  objInstanceName?: string;
  /** 资产在BDTP是否还存在 */
  existed?: boolean;
  /** 资产是否在meoi管理范围 */
  inMeoiScope?: boolean;
  /** 关联的异常事件编码 */
  exceptionEvents?: RiskDataServiceEEProblemRelExceptionEventSimpleVo[];
};

/**
 * OpenAPI 组件类型：EEObjInstanceProblemCategorySimpleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceProblemCategorySimpleVo
 */
export type RiskDataServiceEEObjInstanceProblemCategorySimpleVo = {
  /** 项目风险业务id */
  pjRiskBusinessId?: string;
  /** 问题状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题描述（别名） */
  problemDesc?: string;
  /** 问题定位是否清晰 */
  positionClear?: boolean;
  /** 是否为自定义问题 */
  customProblem?: boolean;
  /** 问题类中故障类问题id集合（故障次数） */
  faultProblemIds?: number[];
  /** 问题类中其他问题id集合（问题类中的全部问题 减去 故障类问题） */
  otherProblemIds?: number[];
  /** 问题类中关键问题id集合（关键影响次数） */
  crucialProblemIds?: number[];
  /** 问题类中高等级问题id集合（高等级次数） */
  highImportanceProblemIds?: number[];
  /** 问题类中所有问题的相关数据 */
  problems?: RiskDataServiceEEProblemCategoryRelEEProblemVo[];
  /** 关键影响数量 */
  crucialFaultCount: number;
};

/**
 * OpenAPI 组件类型：EEObjInstanceProblemQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceProblemQryDto
 */
export type RiskDataServiceEEObjInstanceProblemQryDto = {
  /** 开始日期，时间戳，闭区间 */
  startDate?: string;
  /** 结束日期,时间戳，开区间 */
  endDate?: string;
  /** 比较类型 */
  compareType?: "YEAR" | "MONTH" | "NONE";
  /** true: 已解决； false: 未解决； null: 全部 */
  finished?: boolean;
  /** 处理专业id（other代表[其他]: 没有处理专业或处理专业被删除的问题） */
  pjDealMajorId?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实体id */
  klbEntityId?: number;
};

/**
 * OpenAPI 组件类型：EEObjInstanceRelProblemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceRelProblemVo
 */
export type RiskDataServiceEEObjInstanceRelProblemVo = {
  /** 问题id */
  id?: number;
  /** 问题名称 */
  problemDesc?: string;
  /** 关联的异常事件编码 */
  exceptionEvents?: RiskDataServiceEEProblemRelExceptionEventSimpleVo[];
};

/**
 * OpenAPI 组件类型：EEObjInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceVo
 */
export type RiskDataServiceEEObjInstanceVo = {
  /** 资产id */
  objInstanceId?: string;
  /** 资产名称 */
  objInstanceName?: string;
  /** 所在建筑id */
  buildId?: string;
  /** 所在建筑名称 */
  buildName?: string;
  /** 所在楼层id */
  floorId?: string;
  /** 所在楼层名称 */
  floorName?: string;
  /** 资产所属空间id */
  spaceId?: string;
  /** 资产所属空间名称 */
  spaceName?: string;
  /** 设备品牌 */
  brand?: string;
  /** 设备型号 */
  specification?: string;
  /** 资产在BDTP是否还存在 */
  existed?: boolean;
  /** 资产是否在meoi管理范围 */
  inMeoiScope?: boolean;
  /** 该资产发生故障类问题id集合（故障次数） */
  faultProblemIds?: number[];
  /** 该资产发生的其他问题id集合（全部问题 减去 故障类问题） */
  otherProblemIds?: number[];
  /** 该资产发生关键问题id集合（关键影响次数） */
  crucialProblemIds?: number[];
  /** 该资产发生高等级问题id集合（高等级次数） */
  highImportanceProblemIds?: number[];
  /** 资产发生的问题集合 */
  problems?: RiskDataServiceEEObjInstanceRelProblemVo[];
  /** 关键影响数量 */
  crucialFaultCount: number;
};

/**
 * OpenAPI 组件类型：KlbRwdEntityVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbRwdEntityVo
 */
export type RiskDataServiceKlbRwdEntityVo = {
  /** 对象实体id */
  id?: number;
  /** 对象实体名称 */
  entityName?: string;
};

/**
 * OpenAPI 组件类型：KlbEntityVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbEntityVo
 */
export type RiskDataServiceKlbEntityVo = {
  /** id */
  id?: number;
  /** 实体名称 */
  entityName?: string;
  /** 实体类型 */
  entityType?: "SYSTEM" | "EQUIPMENT_DIC" | "EQUIPMENT" | "COMPONENT" | "FUNCTION_OBJECT" | "ENTITYCOMBINATION" | "SYS" | "SPACE" | "BUILD" | "PROJECT" | "FLOOR" | "SHAFT" | "MAINPARTITION" | "EQUIPMENTGROUP" | "COMPONENTGROUP";
  /** 约束信息 */
  constraintInfoList?: RiskDataServiceConstraintInfo[];
  /** 对象类型描述 */
  objectPoiList?: RiskDataServiceKlbEntityObjectPoi[];
  /** 是否非bdtp实体 */
  isBdtpEntity?: boolean;
  /** 是否部件 */
  component?: boolean;
};

/**
 * OpenAPI 组件类型：KlbDismantleTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbDismantleTreeNodeVo
 */
export type RiskDataServiceKlbDismantleTreeNodeVo = {
  /** 树节点id */
  id?: number;
  /** 实体信息(拆解树节点的business_id是实体id) */
  klbEntity?: RiskDataServiceKlbEntityVo;
  /** 子集 */
  children?: RiskDataServiceKlbDismantleTreeNodeVo[];
  /** 树节点的实体关联的问题类列表 */
  problemCategories?: RiskDataServiceEEObjInstanceProblemCategoryVo[];
};

/**
 * OpenAPI 组件类型：MeasureItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MeasureItemVo
 */
export type RiskDataServiceMeasureItemVo = {
  /** 措施名称 */
  name?: string;
  /** 渠道(按枚举聚合) */
  sourceTypes?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE"[];
};

/**
 * OpenAPI 组件类型：RiskEvaluateRecordSourceTypeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEvaluateRecordSourceTypeVo
 */
export type RiskDataServiceRiskEvaluateRecordSourceTypeVo = {
  /** 渠道 */
  type?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 渠道次数 */
  count?: number;
};

/**
 * OpenAPI 组件类型：StartProblemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StartProblemVo
 */
export type RiskDataServiceStartProblemVo = {
  /** 始发问题描述（名称） */
  problemDesc?: string;
  /** 渠道(按枚举聚合) */
  sourceTypes?: RiskDataServiceRiskEvaluateRecordSourceTypeVo[];
};

/**
 * OpenAPI 组件类型：CausedRiskEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CausedRiskEventVo
 */
export type RiskDataServiceCausedRiskEventVo = {
  /** 风险事件id */
  klbRiskEventBusinessId?: number;
  /** 风险事件名称 */
  klbRiskEventName?: string;
  /** 次数 */
  count?: number;
};

/**
 * OpenAPI 组件类型：EEObjInstanceProblemCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceProblemCategoryVo
 */
export type RiskDataServiceEEObjInstanceProblemCategoryVo = {
  /** 项目风险业务id */
  pjRiskBusinessId?: string;
  /** 问题状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题描述（别名） */
  problemDesc?: string;
  /** 问题定位是否清晰 */
  positionClear?: boolean;
  /** 是否为自定义问题 */
  customProblem?: boolean;
  /** 问题类中故障类问题id集合（故障次数） */
  faultProblemIds?: number[];
  /** 问题类中其他问题id集合（问题类中的全部问题 减去 故障类问题） */
  otherProblemIds?: number[];
  /** 问题类中关键问题id集合（关键影响次数） */
  crucialProblemIds?: number[];
  /** 问题类中高等级问题id集合（高等级次数） */
  highImportanceProblemIds?: number[];
  /** 问题类中所有问题的相关数据 */
  problems?: RiskDataServiceEEProblemCategoryRelEEProblemVo[];
  /** 处理对策及渠道（次数） */
  dealMeasures?: RiskDataServiceMeasureItemVo17[];
  /** 始发异常及渠道（次数） */
  startProblems?: RiskDataServiceStartProblemVo18[];
  /** 导致风险事件发生次数(按知识风险聚合) */
  causedRiskEvents?: RiskDataServiceCausedRiskEventVo19[];
};

/**
 * OpenAPI 组件类型：KlbDismantleTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbDismantleTreeVo
 */
export type RiskDataServiceKlbDismantleTreeVo = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类编码 */
  className?: string;
  /** 树类型 */
  entityTreeType?: "GENERALIZEDTREE" | "DUPLICATETREE" | "ORIGINALTREE";
  /** 是否校验通过 */
  verification?: boolean;
  /** 树的顶节点（包含顶节点的一颗完整的树） */
  rootTreeNode?: RiskDataServiceKlbDismantleTreeNodeVo;
};

/**
 * OpenAPI 组件类型：KlbEntityWithProblemCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbEntityWithProblemCategoryVo
 */
export type RiskDataServiceKlbEntityWithProblemCategoryVo = {
  /** 实体id */
  id?: number;
  /** 实体类型 */
  entityType?: "SYSTEM" | "EQUIPMENT_DIC" | "EQUIPMENT" | "COMPONENT" | "FUNCTION_OBJECT" | "ENTITYCOMBINATION" | "SYS" | "SPACE" | "BUILD" | "PROJECT" | "FLOOR" | "SHAFT" | "MAINPARTITION" | "EQUIPMENTGROUP" | "COMPONENTGROUP";
  /** 实体名称 */
  entityName?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 是否是部件 */
  component?: boolean;
  /** 实体关联的问题类列表 */
  problemCategories?: RiskDataServiceEEObjInstanceProblemCategoryThirdVo[];
};

/**
 * OpenAPI 组件类型：EEObjInstanceStatisticsDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceStatisticsDetailVo
 */
export type RiskDataServiceEEObjInstanceStatisticsDetailVo = {
  /** 实体拆解树 */
  klbDismantleTreeVo?: RiskDataServiceKlbDismantleTreeVo;
  /** 实体对应的问题列表 */
  klbEntityRelProblems?: RiskDataServiceKlbEntityWithProblemCategoryVo20[];
  /** 自定义问题列表 */
  customProblems?: RiskDataServiceKlbEntityWithProblemCategoryVo20[];
};

/**
 * OpenAPI 组件类型：EEObjInstanceProblemStatisticsDetailQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceProblemStatisticsDetailQryDto
 */
export type RiskDataServiceEEObjInstanceProblemStatisticsDetailQryDto = {
  /** 开始日期，时间戳，闭区间 */
  startDate?: string;
  /** 结束日期,时间戳，开区间 */
  endDate?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实体id */
  klbEntityId?: number;
  /** 处理专业id（other代表[其他]: 没有处理专业或处理专业被删除的问题） */
  pjDealMajorId: string;
  /** true: 已解决； false: 未解决； null: 全部 */
  finished?: boolean;
};

/**
 * OpenAPI 组件类型：EERiskEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EERiskEventVo
 */
export type RiskDataServiceEERiskEventVo = {
  name?: string;
  id?: number;
  startTime?: string;
  exceptionHappen?: number;
  /** 风险事件超征兆及潜在次数 */
  warnPotentialHappen?: number;
  /** 关联的异常事件id集合 */
  exceptionEventIds?: number[];
  /** 关联的造成关键影响的异常事件id集合 */
  crucialExceptionEventIds?: number[];
};

/**
 * OpenAPI 组件类型：EERiskEventStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EERiskEventStatisticsVo
 */
export type RiskDataServiceEERiskEventStatisticsVo = {
  /** 风险事件id */
  riskEventBusinessId?: number;
  /** 处理专业id */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 处理专业sort */
  majorSort?: number;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 风险事件名称 */
  riskEventName?: string;
  /** 关键影响总次数 */
  pivotalImpactCount?: RiskDataServiceEEStatisticsCountVo;
  /** 高等级总次数 */
  highImportanceCount?: RiskDataServiceEEStatisticsCountVo;
  /** 发生次数 */
  happenCount?: RiskDataServiceEEStatisticsCountVo;
  /** 关键影响发生 */
  pivotalImpactHappenCount?: RiskDataServiceEEStatisticsCountVo;
  /** 高等级发生 */
  highImportanceHappenCount?: RiskDataServiceEEStatisticsCountVo;
  /** 超征兆以及潜在风险次数 */
  warnCount?: RiskDataServiceEEStatisticsCountVo;
  /** 平均解决时长（分钟） */
  solvedTime?: number;
  /** 解决超时次数 */
  timeoutUnsolvedCount?: RiskDataServiceEEStatisticsCountVo;
  /** 是否已关注(cs01来源) */
  followMark?: boolean;
  startTime?: string;
  sort?: number;
  /** 关联实例id */
  rwdInstanceIds?: string[];
  eeRiskEventList?: RiskDataServiceEERiskEventVo[];
  oldEeRiskEventList?: RiskDataServiceEERiskEventVo[];
};

/**
 * OpenAPI 组件类型：EERiskEventStatisticsMajorVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EERiskEventStatisticsMajorVo
 */
export type RiskDataServiceEERiskEventStatisticsMajorVo = {
  code?: string;
  name?: string;
  sort?: number;
};

/**
 * OpenAPI 组件类型：EERiskEventStatisticsListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EERiskEventStatisticsListVo
 */
export type RiskDataServiceEERiskEventStatisticsListVo = {
  /** 统计列表 */
  statisticsList?: RiskDataServiceEERiskEventStatisticsVo[];
  /** 专业空间列表 */
  majorList?: RiskDataServiceEERiskEventStatisticsMajorVo[];
};

/**
 * OpenAPI 组件类型：EEStatisticsQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsQryDto
 */
export type RiskDataServiceEEStatisticsQryDto = {
  /** 开始日期，时间戳，闭区间 */
  startDate?: string;
  /** 结束日期,时间戳，开区间 */
  endDate?: string;
  /** 比较类型 */
  compareType?: "YEAR" | "MONTH" | "NONE";
  /** true：关键影响，false：非关键影响，null，不过滤 */
  pivotalImpact?: boolean;
  /** true：高问题等级，false：非高问题等级，null，不过滤 */
  highImportance?: boolean;
  /** 是否关注 */
  followMark?: boolean;
  /** true: 已解决； false: 未解决； null: 全部 */
  finished?: boolean;
};

/**
 * OpenAPI 组件类型：ExceptionEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventVo
 */
export type RiskDataServiceExceptionEventVo = {
  id?: number;
  eventNumber?: string;
  startTime?: string;
  endTime?: string;
  /** 关键影响 */
  pivotalImpact?: boolean;
  /** 高问题等级 */
  highImportance?: boolean;
  /** 高问题等级别名 */
  highImportanceAlias?: string[];
  /** 异常事件状态 1:未解决  2已解决 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  sort?: number;
};

/**
 * OpenAPI 组件类型：EEStatisticsRiskEventQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsRiskEventQryDto
 */
export type RiskDataServiceEEStatisticsRiskEventQryDto = {
  /** 开始日期，时间戳，闭区间 */
  startDate?: string;
  /** 结束日期,时间戳，开区间 */
  endDate?: string;
  /** 比较类型 */
  compareType?: "YEAR" | "MONTH" | "NONE";
  /** true：关键影响，false：非关键影响，null，不过滤 */
  pivotalImpact?: boolean;
  /** true：高问题等级，false：非高问题等级，null，不过滤 */
  highImportance?: boolean;
  /** 是否关注 */
  followMark?: boolean;
  /** true: 已解决； false: 未解决； null: 全部 */
  finished?: boolean;
  /** 风险事件id */
  riskEventBusinessId: number;
  /** 风险事件分类key */
  categoryUniqueKey?: string;
  /** 关联实例id */
  rwdInstanceIds?: string[];
};

/**
 * OpenAPI 组件类型：EEStatisticsMajorQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsMajorQryDto
 */
export type RiskDataServiceEEStatisticsMajorQryDto = {
  /** 开始日期，时间戳，闭区间 */
  startDate?: string;
  /** 结束日期,时间戳，开区间 */
  endDate?: string;
  /** 比较类型 */
  compareType?: "YEAR" | "MONTH" | "NONE";
  /** true：关键影响，false：非关键影响，null，不过滤 */
  pivotalImpact?: boolean;
  /** true：高问题等级，false：非高问题等级，null，不过滤 */
  highImportance?: boolean;
  /** 是否关注 */
  followMark?: boolean;
  /** true: 已解决； false: 未解决； null: 全部 */
  finished?: boolean;
  /** 处理专业id，为空查询全部 */
  majorCode?: string;
  /** 是否仅统计发生类风险 */
  onlyHappen?: boolean;
};

/**
 * OpenAPI 组件类型：EEStatisticsTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsTreeNodeVo
 */
export type RiskDataServiceEEStatisticsTreeNodeVo = {
  /** 节点名称 */
  treeNodeName?: string;
  /** 节点id */
  treeNodeId?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实体类型，是否部件 */
  component?: boolean;
  /** 实体名称 */
  entityName?: string;
  /** 超征兆次数 */
  warnCount?: number;
  /** 潜在风险次数 */
  potentialCount?: number;
  /** 故障发生次数 */
  happenCount?: number;
  /** 根节点超征兆次数 */
  rootWarnCount?: number;
  /** 根节点潜在风险次数 */
  rootPotentialCount?: number;
  /** 根节点故障发生次数 */
  rootHappenCount?: number;
  /** 上下级关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  children?: RiskDataServiceEEStatisticsTreeNodeVo[];
};

/**
 * OpenAPI 组件类型：EEStatisticsFragmentaryProblemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsFragmentaryProblemVo
 */
export type RiskDataServiceEEStatisticsFragmentaryProblemVo = {
  /** 节点名称 */
  treeNodeName?: string;
  /** 节点id */
  treeNodeId?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实体类型，是否部件 */
  component?: boolean;
  /** 实体名称 */
  entityName?: string;
  /** 超征兆次数 */
  warnCount?: number;
  /** 潜在风险次数 */
  potentialCount?: number;
  /** 故障发生次数 */
  happenCount?: number;
  /** 根节点超征兆次数 */
  rootWarnCount?: number;
  /** 根节点潜在风险次数 */
  rootPotentialCount?: number;
  /** 根节点故障发生次数 */
  rootHappenCount?: number;
};

/**
 * OpenAPI 组件类型：EEStatisticsRwdInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsRwdInstanceVo
 */
export type RiskDataServiceEEStatisticsRwdInstanceVo = {
  /** 实例id */
  id?: string;
  /** 实例名称 */
  name?: string;
  /** 对象类 */
  classCode?: string;
};

/**
 * OpenAPI 组件类型：ReasonExceptionEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ReasonExceptionEventVo
 */
export type RiskDataServiceReasonExceptionEventVo = {
  /** 异常事件编码 */
  code?: string;
  /** 异常事件id */
  eeExceptionEventId?: number;
};

/**
 * OpenAPI 组件类型：SimpleMeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleMeasureVo
 */
export type RiskDataServiceSimpleMeasureVo = {
  /** 措施id */
  id?: number;
  /** 措施名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：RiskEventStatisticVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventStatisticVo
 */
export type RiskDataServiceRiskEventStatisticVo = {
  name?: string;
  riskEventBusinessId?: number;
  count?: number;
};

/**
 * OpenAPI 组件类型：EEStatisticsProblemDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsProblemDetailVo
 */
export type RiskDataServiceEEStatisticsProblemDetailVo = {
  /** 三要素一致的节点，按名称去重
原因 */
  reason?: string[];
  /** 原因异常事件 */
  reasonExceptionEventVos?: RiskDataServiceReasonExceptionEventVo[];
  pivotalImpactProblemIds?: number[];
  highImportanceProblemIds?: number[];
  /** 高问题等级别名 */
  highImportanceAlias?: string[];
  /** 是否来源RCC */
  rccRisk?: boolean;
  happenProblemIds?: number[];
  warnProblemIds?: number[];
  warnDescList?: string[];
  riskEventBusinessIds?: number[];
  /** 处理方案 */
  measures?: RiskDataServiceSimpleMeasureVo[];
  maintainProblemIds?: number[];
  unMaintainProblemIds?: number[];
  /** 其他风险事件发生次数 */
  otherRiskEventList?: RiskDataServiceRiskEventStatisticVo[];
};

/**
 * OpenAPI 组件类型：EEStatisticsEntityDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsEntityDetailVo
 */
export type RiskDataServiceEEStatisticsEntityDetailVo = {
  /** 实体名称 */
  entityName?: string;
  /** 实体id */
  entityId?: number;
  /** 所属对象实体id */
  belongEntityId?: number;
  /** 原因 */
  problemList?: RiskDataServiceEEStatisticsProblemDetailVo[];
};

/**
 * OpenAPI 组件类型：EEStatisticsClassDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsClassDetailVo
 */
export type RiskDataServiceEEStatisticsClassDetailVo = {
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 异常设备数量 */
  exceptionCount?: number;
  /** 异常设备列表 */
  instanceList?: RiskDataServiceEEStatisticsRwdInstanceVo[];
  /** 明细（按实体分类） */
  detailList?: RiskDataServiceEEStatisticsEntityDetailVo[];
};

/**
 * OpenAPI 组件类型：EEStatisticsChannelVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsChannelVo
 */
export type RiskDataServiceEEStatisticsChannelVo = {
  /** 渠道类型 */
  channelType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 发生次数 */
  happenCount?: number;
  /** 超征兆次数 */
  warnCount?: number;
  /** 潜在风险次数 */
  potentialCount?: number;
  /** 发生始发问题 */
  happenOriginalProblem?: string[];
  happenOriginalProblemIds?: number[];
  /** 超征兆始发问题 */
  potentialOriginalProblem?: string[];
  potentialOriginalProblemIds?: number[];
  /** 潜在风险始发问题 */
  warnOriginalProblem?: string[];
  warnOriginalProblemIds?: number[];
};

/**
 * OpenAPI 组件类型：EEStatisticsDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEStatisticsDetailVo
 */
export type RiskDataServiceEEStatisticsDetailVo = {
  rootTreeNode?: RiskDataServiceEEStatisticsTreeNodeVo;
  /** 零星问题 */
  fragmentaryProblemLists?: RiskDataServiceEEStatisticsFragmentaryProblemVo[];
  detailClasses?: RiskDataServiceEEStatisticsClassDetailVo[];
  /** 发现渠道分布 */
  happenChannels?: RiskDataServiceEEStatisticsChannelVo[];
  /** 处理渠道分布 */
  solveChannels?: RiskDataServiceEEStatisticsChannelVo[];
};

/**
 * OpenAPI 组件类型：OtherObjectDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OtherObjectDto
 */
export type RiskDataServiceOtherObjectDto = {
  /** id */
  id?: string;
  /** 对象类型 */
  objType: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类class
[A_Za_z]*\\[A_Z]*\\other] | [A_Za_z]*
[^[A-Za-z]+$//^[A-Z]+$//other] | ^[A-Za-z]+ */
  classCode: string;
  majorCode?: string;
  /** 名称 */
  localName?: string;
  /** 位置描述 */
  positionDesc: string;
  /** 所在空间id */
  spaceId?: string;
};

/**
 * OpenAPI 组件类型：ClassStrategyCount
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ClassStrategyCount
 */
export type RiskDataServiceClassStrategyCount = {
  /** 对象类类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** 策略数量 */
  count?: number;
};

/**
 * OpenAPI 组件类型：IPageCategoryInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPageCategoryInstanceVo
 */
export type RiskDataServiceIPageCategoryInstanceVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceCategoryInstanceVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  maxLimit?: number;
  /** countId */
  countId?: string;
  pages?: number;
};

/**
 * OpenAPI 组件类型：InstanceTreeBasicVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceTreeBasicVo
 */
export type RiskDataServiceInstanceTreeBasicVo = {
  uniqueKey?: string;
  /** 风险事件id */
  riskEventBusinessId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
  /** 发生后可能造成的影响 */
  riskEventImpactDescription?: string;
  /** 是否已关注 */
  followMark?: boolean;
  /** 问题等级配置 */
  pjRiskIssueLevelVo?: RiskDataServicePjRiskIssueLevelVo;
  /** 常见性 */
  ordinary?: RiskDataServiceEnumStruct5;
  /** 影响类型 */
  riskImpactCategories?: RiskDataServicePjRiskImpactCategoryVo[];
  /** 处理专业 */
  dealMajorId?: number;
  /** 处理名称 */
  dealMajorName?: string;
  /** 风控目标 */
  riskObjectives?: RiskDataServiceRiskObjectiveVo[];
  /** 隐患树id */
  instanceTreeId?: number;
  /** 未解决的异常事件ID列表 */
  unSolvedExceptionEventIds?: number[];
  /** 风险状态 */
  riskStatus?: "EXCEPTION" | "CONJECTURE_EXCEPTION" | "POTENTIAL" | "UNKNOWN" | "GENERAL_NORMAL" | "NORMAL";
  /** 位置信息 */
  position?: RiskDataServiceRwdPositionVo;
  /** 实例信息 */
  rwdObjectVo?: RiskDataServiceSimpleRwdObjectVo;
};

/**
 * OpenAPI 组件类型：InstanceTreeNodeRootVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceTreeNodeRootVo
 */
export type RiskDataServiceInstanceTreeNodeRootVo = {
  /** 节点id */
  id?: number;
  /** 节点名称 */
  name?: string;
  classCode?: string;
  className?: string;
  /** 是否是部件 */
  component?: boolean;
  /** 实体id */
  entityId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 风险id */
  riskBusinessId?: string;
  /** 下级节点 */
  children?: RiskDataServiceInstanceTreeNodeVo[];
  /** 与下级节点的关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  /** 是否有策略 */
  strategy?: boolean;
  /** 实例id */
  rwdObjectId?: string;
  /** 实例名称 */
  localName?: string;
  /** 树节点类型 */
  treeNodeType?: "NORMAL" | "HUB_EXPAND_NODE" | "HUB_EXPAND_INSTANCE_NODE";
  /** 隐患树节点当前状态 */
  treeNodeStatus?: "EXCEPTION" | "WARN" | "NORMAL" | "UNKNOWN" | "CONJECTURE_NORMAL" | "CONJECTURE_EXCEPTION" | "CONJECTURE_UNKNOWN";
  /** 隐患树节点观测状态 */
  treeNodeObserveStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 状态变更时间 */
  stateChangeTime?: string;
  /** 状态推算时间 */
  stateCalculationTime?: string;
  /** 节点状态的有效性 */
  valid?: boolean;
  /** 状态的上报来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 是否为需核实节点，true为需核实 */
  needVerification?: boolean;
  /** 是否暂不处理，true为暂不处理 */
  noTreatment?: boolean;
  /** 关联的风险点 */
  pjRisk?: RiskDataServiceCategoryRiskVo;
};

/**
 * OpenAPI 组件类型：InstanceTreeDetail
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceTreeDetail
 */
export type RiskDataServiceInstanceTreeDetail = {
  /** 基本信息 */
  basic?: RiskDataServiceInstanceTreeBasicVo;
  /** 因果视图-顶节点 */
  tree?: RiskDataServiceInstanceTreeNodeVo;
  /** 策略列表 */
  strategies?: JsonValue;
  /** 策略统计 */
  strategyStatistics?: JsonValue;
};

/**
 * OpenAPI 组件类型：SimpleRwdFloorVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleRwdFloorVo
 */
export type RiskDataServiceSimpleRwdFloorVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  className?: string;
  localId?: string;
  /** 楼层序列 */
  floorSequenceId?: number;
  floorElevation?: string;
};

/**
 * OpenAPI 组件类型：RwdPositionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdPositionVo
 */
export type RiskDataServiceRwdPositionVo = {
  floor?: RiskDataServiceSimpleRwdFloorVo;
  building?: RiskDataServiceSimpleRwdObjectVo;
  space?: RiskDataServiceSimpleRwdSpaceVo;
};

/**
 * OpenAPI 组件类型：LedgerInstanceTreeNodeDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/LedgerInstanceTreeNodeDetailVo
 */
export type RiskDataServiceLedgerInstanceTreeNodeDetailVo = {
  /** 实例风险ID */
  pjRiskInstanceBusinessId?: string;
  /** 实例信息 */
  instance?: RiskDataServiceEEInstanceVo;
  /** 状态变更时间 */
  lastUpdateTime?: string;
  /** IOT与人工观测结果是否不一致 */
  iotMismatchManualObserve?: boolean;
  /** IOT报警规则编码 */
  iotRuleDtoList?: RiskDataServiceIotAlertRuleTargetParamVo[];
  /** 最新状态变更记录 */
  latestStatusUpdateRecord?: RiskDataServiceEEProblemStatusRecordVo[];
  /** 策略事项 */
  strategyItemList?: JsonValue;
};

/**
 * OpenAPI 组件类型：InstanceIotRuleVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceIotRuleVo
 */
export type RiskDataServiceInstanceIotRuleVo = {
  id?: number;
  /** 规则名称 */
  name?: string;
  /** 是否启用 */
  enable?: boolean;
};

/**
 * OpenAPI 组件类型：StrategyInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyInstanceVo
 */
export type RiskDataServiceStrategyInstanceVo = {
  /** 实例id */
  id?: string;
  /** 本地名称 */
  localName?: string;
  /** 策略事项列表 */
  strategyItemList?: RiskDataServiceCategoryStrategyItemVo[];
  /** iot策略 */
  iotRules?: RiskDataServiceIotRuleInstanceVo[];
};

/**
 * OpenAPI 组件类型：InstanceTreeStrategyStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceTreeStrategyStatisticsVo
 */
export type RiskDataServiceInstanceTreeStrategyStatisticsVo = {
  /** 策略覆盖率 */
  coverRatio?: number;
};

/**
 * OpenAPI 组件类型：RiskEvent
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEvent
 */
export type RiskDataServiceRiskEvent = {
  /** 风险事件业务id */
  riskEventBusinessId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
  /** 一级风控目标 */
  riskMeasureAimLevel1?: "E0" | "E1" | "E2" | "E3";
  /** 二级风控目标 */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44";
};

/**
 * OpenAPI 组件类型：DealMajorClassTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DealMajorClassTreeVo
 */
export type RiskDataServiceDealMajorClassTreeVo = {
  /** 唯一编码 */
  uniqueKey?: string;
  /** 编码 */
  searchKey?: string[];
  /** 名称 */
  name?: string;
  /** 类型 */
  type?: "DEAL_MAJOR" | "DEAL_MAJOR_OTHER" | "TAG" | "TAG_OTHER" | "OBJECT_CLASS" | "OBJECT_CLASS_SELF" | "COMPONENT";
  /** 排序编码 */
  sort?: number;
  children?: RiskDataServiceDealMajorClassTreeVo[];
};

/**
 * OpenAPI 组件类型：RwdInstanceTreeThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdInstanceTreeThirdPartyVo
 */
export type RiskDataServiceRwdInstanceTreeThirdPartyVo = {
  /** 风险事件实例树id */
  id?: number;
  /** 风险事件实例树名称(klb) */
  name?: string;
  /** 一级风控目标(风险事件类型) */
  riskMeasureAimLevel1?: RiskDataServiceEnumStruct | JsonValue;
  /** 二级风控目标(风险事件类型) */
  riskMeasureAimLevel2?: RiskDataServiceEnumStruct | JsonValue;
  /** 常见性 */
  ordinary?: RiskDataServiceEnumStruct | JsonValue;
  /** 是否已关注(是否主动管理) */
  followMark?: boolean;
  /** 超征兆问题等级 */
  symptomaticValueLevel?: RiskDataServiceEnumStruct | JsonValue;
  /** 异常问题等级 */
  exceptionValueLevel?: RiskDataServiceEnumStruct | JsonValue;
  /** 影响类型 */
  riskImpactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 对象实例id */
  rwdInstanceId?: string;
  /** 策略覆盖率 */
  strategyCoverRatio?: number;
  /** 监控情况标识 */
  monitoringSituations?: "STRATEGY_EXECUTION_NOT_EXPECTED" | "IOT_DISCONNECTION" | "STRATEGY_LOW_FREQUENCY"[];
};

/**
 * OpenAPI 组件类型：RwdInstanceTreeThirdPartyQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdInstanceTreeThirdPartyQryDto
 */
export type RiskDataServiceRwdInstanceTreeThirdPartyQryDto = {
  /** 对象实例id集合
每次最多传入1000个id */
  rwdInstanceIds?: string[];
  /** 是否仅返回主动管理的风险事件实例，默认值：false(返回全部) */
  followMark?: boolean;
};

/**
 * OpenAPI 组件类型：RwdInstanceCameraVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdInstanceCameraVo
 */
export type RiskDataServiceRwdInstanceCameraVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 所属实例ID */
  belongRwdInstanceId?: string;
};

/**
 * OpenAPI 组件类型：EEExceptionThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEExceptionThirdVo
 */
export type RiskDataServiceEEExceptionThirdVo = {
  /** 异常事件ID */
  id?: number;
  /** 异常事件编号 */
  exceptionNumber?: string;
  /** 异常事件名称 */
  exceptionEventName?: string;
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 上次严重程度 */
  earlyImportanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 历史严重程度 */
  historyHighestDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 严重程度变化时间 */
  degreeChangeTime?: string;
  /** 异常事件状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 已解决问题数量 */
  resolvedProblemCount?: number;
  /** 全部问题数量 */
  allProblemCount?: number;
  /** 处理进程 */
  solveProcess?: "FIND_EXCEPTION" | "SOLVING" | "VERIFICATION";
  /** 事态性质&实际影响(项目风险影响类型) */
  impactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
  /** 状态更新时间 */
  exceptionUpdateTime?: string;
  /** 异常始发时间 */
  exceptionStartTime?: string;
  /** 持续时长(单位毫秒) */
  duration?: number;
  /** 最早要求解决时间 */
  minRequireSolveTime?: string;
  /** 最晚要求解决时间 */
  maxRequireSolveTime?: string;
  /** 是否为误报信息 */
  misstatement?: "PART_MISSTATEMENT" | "MISSTATEMENT";
  /** 异常结束时间 */
  exceptionEndTime?: string;
  /** 目标完成时间 */
  targetFinishTime?: string;
  /** 是否暂不处理 */
  noTreatment?: boolean;
  /** 是否需核实 */
  needVerification?: boolean;
  /** 异常事件名称实例 */
  eventNameInstance?: string;
  /** 异常时间名称问题 */
  eventNameProblem?: string;
  /** 人工修改等级名称 */
  userName?: string;
  /** 异常事件是否已逾期 */
  overdue?: boolean;
  /** 严重程度变化 */
  severityChange?: RiskDataServiceChangeProcess;
  /** 是否外部客户 */
  externalCustomer?: boolean;
};

/**
 * OpenAPI 组件类型：IotRiskEventThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRiskEventThirdVo
 */
export type RiskDataServiceIotRiskEventThirdVo = {
  /** 风险事件id */
  riskEventId?: number;
  /** 风险事件名称 */
  riskEventName?: string;
};

/**
 * OpenAPI 组件类型：IotRiskThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRiskThirdVo
 */
export type RiskDataServiceIotRiskThirdVo = {
  /** 风险点名称 */
  pjRiskName?: string;
  /** 风险点业务ID */
  pjRiskBusinessId?: string;
  /** 风险事件 */
  riskEvents?: RiskDataServiceIotRiskEventThirdVo[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleObjectThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleObjectThirdVo
 */
export type RiskDataServiceIotAlertRuleObjectThirdVo = {
  /** 规则ID */
  id?: number;
  /** 规则名称 */
  name?: string;
  /** 核实要求类型 */
  verifyType?: "NONE" | "APP" | "APP_WEB" | "WEB";
  /** 报警分组 */
  iotAlertRuleGroups?: RiskDataServiceIotAlertRuleGroupThirdVo[];
  /** 风险点信息 */
  iotRisk?: RiskDataServiceIotRiskThirdVo;
  /** 是否已启用 */
  enable?: boolean;
  /** 创建时间 */
  createTime?: string;
  /** 规则使用到的信息点 */
  infoPoint?: RiskDataServiceIotInfoPointStruct[];
  /** 操作符枚举 */
  operatorEnums?: RiskDataServiceEnumStruct[];
  /** 时间单位枚举 */
  timeUnitEnums?: RiskDataServiceEnumStruct[];
};

/**
 * OpenAPI 组件类型：BaseFmeaMessage
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BaseFmeaMessage
 */
export type RiskDataServiceBaseFmeaMessage = {
  messageId?: string;
  /** 创建时间 */
  createTime?: string;
};

/**
 * OpenAPI 组件类型：FmeaMonitorStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FmeaMonitorStatisticsVo
 */
export type RiskDataServiceFmeaMonitorStatisticsVo = {
  /** 风险事件数量 */
  riskEventCount?: number;
  /** 风险点数量 */
  riskCount?: number;
};

/**
 * OpenAPI 组件类型：DataDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DataDto
 */
export type RiskDataServiceDataDto = {
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 状态 */
  status?: RiskDataServiceRiskInstanceStatusVo;
};

/**
 * OpenAPI 组件类型：InstanceGroupDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceGroupDto
 */
export type RiskDataServiceInstanceGroupDto = {
  /** 名字 */
  name?: string;
  /** 是否部件 */
  component?: boolean;
  /** 数据信息 */
  dataList?: RiskDataServiceDataDto[];
};

/**
 * OpenAPI 组件类型：EEProblemSuggestDataStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemSuggestDataStruct
 */
export type RiskDataServiceEEProblemSuggestDataStruct = {
  /** 实例 */
  rwdObject?: RiskDataServiceSimpleRwdObjectVo;
  /** 位置信息 */
  position?: RiskDataServiceRwdPositionVo;
  /** 实例分组 */
  instanceGroups?: RiskDataServiceInstanceGroupDto[];
};

/**
 * OpenAPI 组件类型：EEProblemSuggestStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemSuggestStruct
 */
export type RiskDataServiceEEProblemSuggestStruct = {
  /** 已知影响 */
  knownInfluences?: RiskDataServiceEEProblemSuggestDataStruct[];
  /** 可能影响 */
  unknownInfluences?: RiskDataServiceEEProblemSuggestDataStruct[];
  /** 已知原因 */
  knownReasons?: RiskDataServiceEEProblemSuggestDataStruct[];
  /** 可能原因 */
  unknownReasons?: RiskDataServiceEEProblemSuggestDataStruct[];
  /** 可能原因-优先排查原因 */
  unknownPriorityReason?: RiskDataServiceEEProblemSuggestDataStruct[];
  /** 推荐措施 */
  suggestRepairs?: RiskDataServiceEEProblemSuggestDataStruct[];
};

/**
 * OpenAPI 组件类型：ProblemHappenStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemHappenStruct
 */
export type RiskDataServiceProblemHappenStruct = {
  messageId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 类型 */
  type?: "PROBLEM_HAPPEN" | "PROBLEM_HAPPEN_VERIFICATION" | "MESSAGE_NOTIFY" | "EXCEPTION_EVENT_RESOLVED" | "PROBLEM_NORMAL" | "WORK_ORDER_CREATED" | "IOT_VERIFICATION_RESULT";
  /** 标题：异常问题的情况描述 */
  title?: RiskDataServiceProblemStatusChangeTitleStruct;
  /** 关联的异常事件信息 */
  relExceptionEvents?: RiskDataServiceExceptionEventStruct[];
  /** 异常事件是否合并 */
  merge?: boolean;
  /** 消息通知信息(为空则没有消息通知) */
  notify?: RiskDataServiceProblemHappenNotifyStruct;
  /** 推荐结构 */
  suggest?: RiskDataServiceEEProblemSuggestStruct;
  /** 状态变更记录渠道 */
  recordSource?: RiskDataServiceRecordUploadSourceStruct;
};

/**
 * OpenAPI 组件类型：ProblemHappenTitleStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemHappenTitleStruct
 */
export type RiskDataServiceProblemHappenTitleStruct = {
  /** 问题描述(问题名称) */
  problemDesc?: string;
  /** 上报来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 实例Id */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
  /** 空间位置id */
  spaceId?: string;
  /** 空间位置名称 */
  spaceName?: string;
  /** 所在建筑id */
  buildId?: string;
  /** 所在建筑名称 */
  buildName?: string;
  /** 所在楼层id */
  floorId?: string;
  /** 所在楼层名称 */
  floorName?: string;
};

/**
 * OpenAPI 组件类型：ProblemHappenRelExceptionStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemHappenRelExceptionStruct
 */
export type RiskDataServiceProblemHappenRelExceptionStruct = {
  /** 异常事件ID */
  id?: number;
  /** 异常事件编号 */
  exceptionNumber?: string;
  /** 异常事件名称 */
  exceptionEventName?: string;
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 异常开始时间 */
  exceptionStartTime?: string;
  /** 是否合并至已有异常事件 */
  merge?: boolean;
};

/**
 * OpenAPI 组件类型：ProblemHappenNotifyStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemHappenNotifyStruct
 */
export type RiskDataServiceProblemHappenNotifyStruct = {
  /** 消息通知类型 */
  notifyType?: "EXCEPTION_EVENT_TO_HIGH" | "EXCEPTION_EVENT_INIT_HIGH";
};

/**
 * OpenAPI 组件类型：ExceptionEventResolvedStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventResolvedStruct
 */
export type RiskDataServiceExceptionEventResolvedStruct = {
  messageId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 类型 */
  type?: "PROBLEM_HAPPEN" | "PROBLEM_HAPPEN_VERIFICATION" | "MESSAGE_NOTIFY" | "EXCEPTION_EVENT_RESOLVED" | "PROBLEM_NORMAL" | "WORK_ORDER_CREATED" | "IOT_VERIFICATION_RESULT";
  /** 标题 & 关联异常事件信息 */
  relExceptionEvent?: RiskDataServiceExceptionEventStruct;
};

/**
 * OpenAPI 组件类型：ExceptionEventStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventStruct
 */
export type RiskDataServiceExceptionEventStruct = {
  /** 异常事件ID */
  id?: number;
  /** 异常事件编号 */
  exceptionNumber?: string;
  /** 异常事件名称 */
  exceptionEventName?: string;
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN";
  /** 异常开始时间 */
  exceptionStartTime?: string;
  /** 异常结束时间 */
  exceptionEndTime?: string;
};

/**
 * OpenAPI 组件类型：MessageNotifyStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MessageNotifyStruct
 */
export type RiskDataServiceMessageNotifyStruct = {
  messageId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 类型 */
  type?: "PROBLEM_HAPPEN" | "PROBLEM_HAPPEN_VERIFICATION" | "MESSAGE_NOTIFY" | "EXCEPTION_EVENT_RESOLVED" | "PROBLEM_NORMAL" | "WORK_ORDER_CREATED" | "IOT_VERIFICATION_RESULT";
  /** 关联异常事件信息 */
  relExceptionEvent?: RiskDataServiceExceptionEventStruct;
  /** 消息通知内容 */
  messageNotifyData?: RiskDataServiceMessageNotifyDataStruct;
};

/**
 * OpenAPI 组件类型：ProblemDescStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemDescStruct
 */
export type RiskDataServiceProblemDescStruct = {
  /** 问题id */
  problemId?: string;
  /** 问题描述(问题名称) */
  problemDesc?: string;
  /** 上报来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 问题对象 */
  rwdObject?: RiskDataServiceSimpleRwdObjectVo;
  /** 位置信息 */
  position?: RiskDataServiceRwdPositionVo;
};

/**
 * OpenAPI 组件类型：RecordUploadSourceStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RecordUploadSourceStruct
 */
export type RiskDataServiceRecordUploadSourceStruct = {
  /** 状态变更记录ID */
  pjRiskRecordId?: number;
  /** 状态变更记录实例ID */
  rwdInstanceId?: string;
  /** 渠道类型 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 实际发生时间 */
  actualHappenTime?: string;
  /** 报事人 */
  reporter?: string;
  /** 报事内容 */
  recordDesc?: string;
  /** 是否需核实 */
  needVerification?: boolean;
  /** 是否抑制工单生成(问题发现后就解决) */
  suppressWorkOrderIfFirst?: boolean;
  /** ============= 工单生成 ==============
派发时间 */
  distributeTime?: string;
  /** 执行人 */
  executor?: string;
  /** ============= 事件型IOT =============
是否为事件型IOT */
  eventTrigger?: boolean;
  /** 问题描述(事件型IOT) */
  problemDesc?: string;
  /** 问题图片(事件型IOT) */
  imageIds?: string[];
  /** 监控实例信息(事件型IOT) */
  monitorInfo?: RiskDataServiceMonitorInfo;
};

/**
 * OpenAPI 组件类型：ProblemHappenVerificationStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemHappenVerificationStruct
 */
export type RiskDataServiceProblemHappenVerificationStruct = {
  messageId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 类型 */
  type?: "PROBLEM_HAPPEN" | "PROBLEM_HAPPEN_VERIFICATION" | "MESSAGE_NOTIFY" | "EXCEPTION_EVENT_RESOLVED" | "PROBLEM_NORMAL" | "WORK_ORDER_CREATED" | "IOT_VERIFICATION_RESULT";
  /** 标题：异常问题的情况描述 */
  title?: RiskDataServiceProblemStatusChangeTitleStruct;
  /** 关联的异常事件信息 */
  relExceptionEvents?: RiskDataServiceExceptionEventStruct[];
  /** 异常事件是否合并 */
  merge?: boolean;
  /** 消息通知信息(为空则没有消息通知) */
  notify?: RiskDataServiceProblemHappenNotifyStruct;
  /** 状态变更记录渠道 */
  recordSource?: RiskDataServiceRecordUploadSourceStruct;
};

/**
 * OpenAPI 组件类型：ProblemNormalStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemNormalStruct
 */
export type RiskDataServiceProblemNormalStruct = {
  messageId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 类型 */
  type?: "PROBLEM_HAPPEN" | "PROBLEM_HAPPEN_VERIFICATION" | "MESSAGE_NOTIFY" | "EXCEPTION_EVENT_RESOLVED" | "PROBLEM_NORMAL" | "WORK_ORDER_CREATED" | "IOT_VERIFICATION_RESULT";
  /** 标题：异常问题的情况描述 */
  title?: RiskDataServiceProblemStatusChangeTitleStruct;
  /** 关联的异常事件信息 */
  relExceptionEvents?: RiskDataServiceExceptionEventStruct[];
  /** 状态变更记录渠道 */
  recordSource?: RiskDataServiceRecordUploadSourceStruct;
};

/**
 * OpenAPI 组件类型：WorkOrderCreatedStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkOrderCreatedStruct
 */
export type RiskDataServiceWorkOrderCreatedStruct = {
  messageId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 类型 */
  type?: "PROBLEM_HAPPEN" | "PROBLEM_HAPPEN_VERIFICATION" | "MESSAGE_NOTIFY" | "EXCEPTION_EVENT_RESOLVED" | "PROBLEM_NORMAL" | "WORK_ORDER_CREATED" | "IOT_VERIFICATION_RESULT";
  /** 工单id */
  workOrderId?: string;
  /** *
标题：工单描述 */
  title?: RiskDataServiceWorkOrderCreatedTitleStruct;
  /** 关联的异常事件信息 */
  relExceptionEvent?: RiskDataServiceExceptionEventStruct;
  /** 状态变更记录渠道 */
  recordSource?: RiskDataServiceRecordUploadSourceStruct;
};

/**
 * OpenAPI 组件类型：A
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/A
 */
export type RiskDataServiceA = {
  e1?: RiskDataServiceExceptionEventResolvedStruct;
  e2?: RiskDataServiceMessageNotifyStruct;
  e3?: RiskDataServiceProblemHappenStruct;
  e4?: RiskDataServiceProblemHappenVerificationStruct;
  e5?: RiskDataServiceProblemNormalStruct;
  e6?: RiskDataServiceWorkOrderCreatedStruct;
  e7?: RiskDataServiceIotVerificationResultStruct;
};

/**
 * OpenAPI 组件类型：MessageNotifyDataStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MessageNotifyDataStruct
 */
export type RiskDataServiceMessageNotifyDataStruct = {
  /** 消息类型 */
  messageType?: "HIGH_LEVEL_HAPPENED_WARN" | "HIGH_LEVEL_TIMEOUT_WARNING" | "HIGH_LEVEL_TIMEOUT_UNSOLVED_WARN" | "EXCEPTION_EVENT_TIMEOUT_WARN" | "HIGH_LEVEL_SOLVED_NOTIFY" | "HIGH_LEVEL_ACTION_TIMEOUT_WARN" | "HAPPENED_WARN";
  /** 剩余时间 */
  remainTime?: string;
  /** 消息发送时间 */
  messageSendTime?: string;
  /** 接收人 */
  receiver?: string[];
};

/**
 * OpenAPI 组件类型：ExceptionInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionInstanceVo
 */
export type RiskDataServiceExceptionInstanceVo = {
  /** 实例id */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
  /** 所在空间id */
  spaceId?: string;
  /** 所在空间名称 */
  spaceName?: string;
};

/**
 * OpenAPI 组件类型：ExceptionProblemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionProblemVo
 */
export type RiskDataServiceExceptionProblemVo = {
  /** 问题id */
  id?: number;
  /** 异常问题描述 */
  problemDesc?: string;
  /** 项目风险实例唯一key */
  pjRiskBusinessId?: string;
  /** 实例id */
  instanceId?: string;
  /** 实例名称 */
  instanceName?: string;
  /** 设备所在空间id */
  spaceId?: string;
  /** 设备所在空间名称 */
  spaceName?: string;
};

/**
 * OpenAPI 组件类型：IotInfoPointStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotInfoPointStruct
 */
export type RiskDataServiceIotInfoPointStruct = {
  /** 对象类编码 */
  classCode?: string;
  /** 信息点编码 */
  code?: string;
  /** 信息点类型 */
  type?: "STATIC" | "TWIN" | "WORK_CALENDAR";
  /** 信息点唯一key */
  uk?: string;
};

/**
 * OpenAPI 组件类型：SupplierVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SupplierVo
 */
export type RiskDataServiceSupplierVo = {
  /** 供应商ID */
  id?: string;
  /** 供应商名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：PjControlObjectiveRwdInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjControlObjectiveRwdInstanceVo
 */
export type RiskDataServicePjControlObjectiveRwdInstanceVo = {
  /** 实例ID */
  id?: string;
  /** 实例名称 */
  localName?: string;
  /** 专业code */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 对象类code */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** BDTP对象类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** BDTP对象类型描述 */
  objectTypeDesc?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型 */
  roomFuncTypeDesc?: string;
  /** 建筑面积 */
  buildArea?: string;
  /** 建筑名称 */
  buildingName?: string;
  /** 楼层名字 */
  floorLocalId?: string;
  /** 分类实例数量 */
  instanceCount?: number;
  /** 供应商 */
  supplierVos?: RiskDataServiceSupplierVo[];
};

/**
 * OpenAPI 组件类型：IPagePjControlObjectiveRwdInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPagePjControlObjectiveRwdInstanceVo
 */
export type RiskDataServiceIPagePjControlObjectiveRwdInstanceVo = {
  /** 查询数据列表 */
  records?: RiskDataServicePjControlObjectiveRwdInstanceVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
  /** 内部什么也不干
只是为了 json 反序列化时不报错 */
  pages?: number;
};

/**
 * OpenAPI 组件类型：PoiValueItem
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PoiValueItem
 */
export type RiskDataServicePoiValueItem = {
  /** 信息点参数选项code */
  code?: string;
  /** 信息点参数选项名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：PoiFilter
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PoiFilter
 */
export type RiskDataServicePoiFilter = {
  /** 信息点code */
  poiCode?: string;
  /** 信息点名称 */
  poiName?: string;
  /** 信息点类型 */
  poiType?: "COMMON_POI" | "SPECIAL_POI" | "GENERAL_POI" | "GENERAL_ZONE_POI" | "BUILDING_POI";
  /** 信息点参数 */
  poiValueEnumDto?: RiskDataServicePoiValueItem[];
  /** 是否为复数 */
  isMultiple?: boolean;
};

/**
 * OpenAPI 组件类型：ObjectFilterStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectFilterStruct
 */
export type RiskDataServiceObjectFilterStruct = {
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类编码 */
  classCode?: string;
  /** 名称 */
  objectName?: string;
  /** 信息点 */
  poiFilters?: RiskDataServicePoiFilter[];
};

/**
 * OpenAPI 组件类型：ControlObjectiveInstancePageDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ControlObjectiveInstancePageDto
 */
export type RiskDataServiceControlObjectiveInstancePageDto = {
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
  keyword?: string;
  qryDtoList?: RiskDataServiceObjectFilterStruct[];
  /** 为空则不筛选 */
  majorObjTypes?: number[];
};

/**
 * OpenAPI 组件类型：PjControlObjectiveRiskEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjControlObjectiveRiskEventVo
 */
export type RiskDataServicePjControlObjectiveRiskEventVo = {
  /** 风险事件id */
  id?: number;
  /** 风险事件业务id */
  businessId?: number;
  /** 风险事件描述 */
  riskEventDescription?: string;
  /** 风险事件类型 */
  riskEventType?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE";
  /** 重要性 */
  importance?: "E0" | "E1" | "E2";
  /** 常见性 */
  ordinary?: "E0" | "E1" | "E2";
  /** 一级风控目标 */
  riskMeasureAimLevel1?: "E0" | "E1" | "E2" | "E3";
  /** 二级风控目标 */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44";
  /** 损失类型 */
  lossType?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5";
  /** 风险事件损失影响 */
  impactDescription?: string;
  /** 风险事件顶节点相关数据
对象类code */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** BDTP对象类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实体类信息点 */
  entityObjectPois?: RiskDataServiceKlbEntityObjectPoi[];
  /** 专业code */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 故障状态评级（报警响应类才有,可能为空） */
  faultStateLevel?: "HIGH" | "MID" | "LOW";
  /** 隐患状态评级（报警响应类才有,可能为空） */
  accidentStateLevel?: "HIGH" | "MID" | "LOW";
  /** 发布时间 */
  rccPublishTime?: string;
  /** rcc发布版本号 */
  versionCode?: string;
  /** 对应顶节点对应项目风险是否已关注 */
  followMark?: boolean;
  /** 涉及资产对象数量 */
  rwdInstanceNum?: number;
};

/**
 * OpenAPI 组件类型：ObjectTreeVoPjControlObjectiveRiskEventVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeVoPjControlObjectiveRiskEventVo
 */
export type RiskDataServiceObjectTreeVoPjControlObjectiveRiskEventVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS" | "MEOI_SPACE_TYPE";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassTreeNodeEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServicePjControlObjectiveRiskEventVo[];
};

/**
 * OpenAPI 组件类型：PjControlObjectiveRiskEventInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjControlObjectiveRiskEventInstanceVo
 */
export type RiskDataServicePjControlObjectiveRiskEventInstanceVo = {
  /** 实例ID */
  id?: string;
  /** 实例名称 */
  localName?: string;
  /** 所属空间名称 */
  spaceName?: string;
  /** 是否是设备或者设备分组 */
  equipment?: boolean;
  /** 所在建筑 */
  buildName?: string;
  /** 所在楼层 */
  floor?: string;
};

/**
 * OpenAPI 组件类型：IPagePjControlObjectiveRiskEventInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPagePjControlObjectiveRiskEventInstanceVo
 */
export type RiskDataServiceIPagePjControlObjectiveRiskEventInstanceVo = {
  /** 查询数据列表 */
  records?: RiskDataServicePjControlObjectiveRiskEventInstanceVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
  pages?: number;
};

/**
 * OpenAPI 组件类型：SelectedInstanceQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SelectedInstanceQryDto
 */
export type RiskDataServiceSelectedInstanceQryDto = {
  /** 每页显示条数 */
  size: number;
  /** 当前页 */
  current: number;
  klbRiskEventBusinessId?: number;
  keyword?: string;
};

/**
 * OpenAPI 组件类型：SelectedRiskEventQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SelectedRiskEventQryDto
 */
export type RiskDataServiceSelectedRiskEventQryDto = {
  klbRiskEventBusinessIds?: number[];
  majorObjTypes?: number[];
};

/**
 * OpenAPI 组件类型：PjControlObjectiveTimeStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjControlObjectiveTimeStruct
 */
export type RiskDataServicePjControlObjectiveTimeStruct = {
  /** 时长 */
  number?: number;
  /** 时长单位 */
  unit?: "SECOND" | "MINUTE" | "HOUR" | "DAY";
};

/**
 * OpenAPI 组件类型：PjControlObjectiveObjectIndicatorsStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjControlObjectiveObjectIndicatorsStruct
 */
export type RiskDataServicePjControlObjectiveObjectIndicatorsStruct = {
  /** 故障次数 */
  failureCount?: number;
  /** 累计故障时长 */
  failureSumTime?: RiskDataServicePjControlObjectiveTimeStruct;
  /** 平均故障时长 */
  failureAvgTime?: RiskDataServicePjControlObjectiveTimeStruct;
};

/**
 * OpenAPI 组件类型：PjControlObjectiveRiskEventIndicatorsStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjControlObjectiveRiskEventIndicatorsStruct
 */
export type RiskDataServicePjControlObjectiveRiskEventIndicatorsStruct = {
  /** 发生次数 */
  happenCount?: number;
  /** 单次风险解决时长 */
  singleSolvedTime?: RiskDataServicePjControlObjectiveTimeStruct;
  /** 单次风险响应时长 */
  singleRespTime?: RiskDataServicePjControlObjectiveTimeStruct;
};

/**
 * OpenAPI 组件类型：PjRiskControlObjectiveListVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskControlObjectiveListVo
 */
export type RiskDataServicePjRiskControlObjectiveListVo = {
  /** 风控目标ID */
  id?: number;
  /** 选择的处理专业 */
  pjDealMajors?: RiskDataServicePjDealMajorBaseVo[];
  /** 风控目标名称 */
  name?: string;
  /** 风控目标类型 */
  type?: "OVERALL" | "MAJOR" | "CUSTOM";
  /** 配置目标方向 */
  objectiveObjType?: "OBJ_INSTANCE" | "RISK_EVENT";
  /** 资产管控指标 */
  objectIndicators?: RiskDataServicePjControlObjectiveObjectIndicatorsStruct;
  /** 风险事件管控指标 */
  riskEventIndicators?: RiskDataServicePjControlObjectiveRiskEventIndicatorsStruct;
  /** 负责人id */
  personId?: string;
  /** 负责人名称 */
  personName?: string;
  /** 子集 */
  children?: RiskDataServicePjRiskControlObjectiveListVo[];
};

/**
 * OpenAPI 组件类型：PjRiskControlObjectiveDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskControlObjectiveDetailVo
 */
export type RiskDataServicePjRiskControlObjectiveDetailVo = {
  /** 风控目标ID */
  id?: number;
  /** 选择的处理专业 */
  pjDealMajors?: RiskDataServicePjDealMajorBaseVo[];
  /** 风控目标名称 */
  name?: string;
  /** 风控目标类型 */
  type?: "OVERALL" | "MAJOR" | "CUSTOM";
  /** 配置目标方向 */
  objectiveObjType?: "OBJ_INSTANCE" | "RISK_EVENT";
  /** 资产管控指标 */
  objectIndicators?: RiskDataServicePjControlObjectiveObjectIndicatorsStruct;
  /** 风险事件管控指标 */
  riskEventIndicators?: RiskDataServicePjControlObjectiveRiskEventIndicatorsStruct;
  /** 负责人id */
  personId?: string;
  /** 负责人名称 */
  personName?: string;
  /** 子集 */
  children?: RiskDataServicePjRiskControlObjectiveListVo[];
  /** 实际影响id集合 */
  riskImpactCategoryIds?: number[];
  /** 实际影响程度（关键/非关键） */
  riskImpactCategoryCrucial?: boolean;
  /** 适用对象类(资产) */
  objectFilters?: RiskDataServiceObjectFilterStruct[];
  /** 适用风险事件 */
  riskEventFilters?: RiskDataServiceRiskEventFilterVo[];
};

/**
 * OpenAPI 组件类型：PjRiskControlObjectiveSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskControlObjectiveSaveDto
 */
export type RiskDataServicePjRiskControlObjectiveSaveDto = {
  /** 风控目标ID（编辑时必传） */
  id?: number;
  /** 父级id */
  parentId?: number;
  /** 管控目标选择的处理专业id集合（不传或者null或者空数组代表全部） */
  pjDealMajorIds?: number[];
  /** 管控目标名称 */
  name?: string;
  /** 管控目标类型 */
  type: "OVERALL" | "MAJOR" | "CUSTOM";
  /** 配置目标方向 */
  objectiveObjType?: "OBJ_INSTANCE" | "RISK_EVENT";
  /** 资产管控指标 */
  objectIndicators?: RiskDataServicePjControlObjectiveObjectIndicatorsStruct;
  /** 风险事件管控指标 */
  riskEventIndicators?: RiskDataServicePjControlObjectiveRiskEventIndicatorsStruct;
  /** 负责人id */
  personId?: string;
  /** 实际影响id集合 */
  riskImpactCategoryIds?: number[];
  /** 实际影响程度（关键/非关键） */
  riskImpactCategoryCrucial?: boolean;
  /** 适用对象类(资产) */
  objectFilters?: RiskDataServiceObjectFilterStruct[];
  /** 适用风险事件（风险事件klb业务id集合） */
  klbRiskEventBusinessIds?: number[];
};

/**
 * OpenAPI 组件类型：PjRiskControlObjectiveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskControlObjectiveDto
 */
export type RiskDataServicePjRiskControlObjectiveDto = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  /** 覆盖掉逻辑删除,直接物理删除 */
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  /** 父级id */
  parentId?: number;
  /** 管控目标选择的对象类类型 */
  rwdObjTypes?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION"[];
  /** 管控目标选择的处理专业id集合 */
  pjDealMajorIds?: number[];
  /** 管控目标名称 */
  name?: string;
  /** 管控目标类型（默认的整体目标-只会有一条数据，在风险管理范围发布 或 进入风险管理目标配置页面时生成） */
  type?: "OVERALL" | "MAJOR" | "CUSTOM";
  /** 负责人id */
  personId?: string;
  /** 配置目标方向 */
  objectiveObjectType?: "OBJ_INSTANCE" | "RISK_EVENT";
  /** 适用对象类（资产） */
  objectFilters?: RiskDataServiceObjectFilterStruct[];
  /** 资产管控指标 */
  objectIndicators?: RiskDataServicePjControlObjectiveObjectIndicatorsStruct;
  /** 适用风险事件 */
  riskEventFilters?: number[];
  /** 影响类型id集合 */
  riskImpactCategoryIds?: number[];
  /** 影响类型关键性 */
  riskImpactCategoryCrucial?: boolean;
  /** 风险事件管控指标 */
  riskEventIndicators?: RiskDataServicePjControlObjectiveRiskEventIndicatorsStruct;
};

/**
 * OpenAPI 组件类型：UnConfigDeliveryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/UnConfigDeliveryVo
 */
export type RiskDataServiceUnConfigDeliveryVo = {
  /** 专业编码 */
  code?: string;
  /** 专业名称 */
  name?: string;
  /** 总共的对象类数量 */
  objectClassTotalCount?: number;
  /** 设备定位标签 */
  objectClasses?: RiskDataServiceObjectClass[];
  /** 系统类列表 */
  systemClasses?: RiskDataServiceObjectClass[];
};

/**
 * OpenAPI 组件类型：ProblemStatusChangeTitleStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProblemStatusChangeTitleStruct
 */
export type RiskDataServiceProblemStatusChangeTitleStruct = {
  /** 问题id */
  problemId?: number;
  /** 问题描述(问题名称) */
  problemDesc?: string;
  /** 问题对象 */
  rwdObject?: RiskDataServiceSimpleRwdObjectVo;
  /** 位置信息 */
  position?: RiskDataServiceRwdPositionVo;
  /** 上报来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
};

/**
 * OpenAPI 组件类型：WorkOrderCreatedTitleStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/WorkOrderCreatedTitleStruct
 */
export type RiskDataServiceWorkOrderCreatedTitleStruct = {
  /** 问题id */
  problemId?: number;
  /** 问题描述(问题名称) */
  problemDesc?: string;
  /** 问题对象 */
  rwdObject?: RiskDataServiceSimpleRwdObjectVo;
  /** 位置信息 */
  position?: RiskDataServiceRwdPositionVo;
  /** 排查处理工单类型 */
  workOrderType?: "IOT_ALARM_VERIFICATION" | "NON_IOT_ALARM_VERIFICATION";
  /** 工单当前环节 */
  workOrderStep?: "ASSIGN_OR_CATEGORY" | "PENDING_EXECUTION" | "APPROVAL" | "NONE";
};

/**
 * OpenAPI 组件类型：IotVerificationResultTitleStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotVerificationResultTitleStruct
 */
export type RiskDataServiceIotVerificationResultTitleStruct = {
  /** 问题id */
  problemId?: number;
  /** 问题描述(问题名称) */
  problemDesc?: string;
  /** 问题对象 */
  rwdObject?: RiskDataServiceSimpleRwdObjectVo;
  /** 位置信息 */
  position?: RiskDataServiceRwdPositionVo;
  /** 工单ID */
  workId?: string;
  /** 核实结果 */
  verifyResult?: "NORMAL" | "EXCEPTION" | "EXCEPTION_PROCESSED";
  /** 派发时间 */
  distributeTime?: string;
  /** 执行人 */
  executor?: string;
  /** 排查处理工单类型 */
  workOrderType?: "IOT_ALARM_VERIFICATION" | "NON_IOT_ALARM_VERIFICATION";
};

/**
 * OpenAPI 组件类型：IotVerificationResultStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotVerificationResultStruct
 */
export type RiskDataServiceIotVerificationResultStruct = {
  messageId?: string;
  /** 创建时间 */
  createTime?: string;
  /** 类型 */
  type?: "PROBLEM_HAPPEN" | "PROBLEM_HAPPEN_VERIFICATION" | "MESSAGE_NOTIFY" | "EXCEPTION_EVENT_RESOLVED" | "PROBLEM_NORMAL" | "WORK_ORDER_CREATED" | "IOT_VERIFICATION_RESULT";
  /** 标题：IOT核实结果消息 */
  title?: RiskDataServiceIotVerificationResultTitleStruct;
  /** 关联的异常事件信息 */
  relExceptionEvents?: RiskDataServiceExceptionEventStruct[];
  /** 状态变更记录渠道 */
  recordSource?: RiskDataServiceRecordUploadSourceStruct;
  /** 推荐结构 */
  suggest?: RiskDataServiceEEProblemSuggestStruct;
};

/**
 * OpenAPI 组件类型：AtomicReferenceObject
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AtomicReferenceObject
 */
export type RiskDataServiceAtomicReferenceObject = {
  value?: Record<string, never>;
};

/**
 * OpenAPI 组件类型：FaultEffectPjRiskDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FaultEffectPjRiskDto
 */
export type RiskDataServiceFaultEffectPjRiskDto = {
  /** 是否视作故障 */
  isNotRegardFault?: boolean;
  /** 风险业务id */
  riskBusinessIds?: string[];
};

/**
 * OpenAPI 组件类型：ExeStrategyCategoryIndependenceUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyCategoryIndependenceUpdateDto
 */
export type RiskDataServiceExeStrategyCategoryIndependenceUpdateDto = {
  /** 运维策略分类id */
  id: number;
  /** 独立状态 */
  independence?: boolean;
};

/**
 * OpenAPI 组件类型：ExeStrategyCategoryExecStepUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyCategoryExecStepUpdateDto
 */
export type RiskDataServiceExeStrategyCategoryExecStepUpdateDto = {
  /** 策略分类id */
  id: number;
  /** 是否按顺序执行 */
  execStepEnable?: boolean;
};

/**
 * OpenAPI 组件类型：ClassCodePoiValueItem
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ClassCodePoiValueItem
 */
export type RiskDataServiceClassCodePoiValueItem = {
  /** 信息点参数选项code */
  code?: string;
  /** 信息点参数选项id */
  id?: string;
  /** 信息点参数选项名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：ClassCodePoi
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ClassCodePoi
 */
export type RiskDataServiceClassCodePoi = {
  /** 信息点code */
  poiCode?: string;
  /** 信息点名称 */
  poiName?: string;
  /** 信息点id(信息点code和信息点类型组合) */
  poiId?: string;
  /** 信息点类型 */
  poiType?: "COMMON_POI" | "SPECIAL_POI" | "GENERAL_POI" | "GENERAL_ZONE_POI" | "BUILDING_POI";
  /** 信息点value值 */
  poiValues?: RiskDataServiceClassCodePoiValueItem[];
};

/**
 * OpenAPI 组件类型：ExeStrategySuitableClassVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategySuitableClassVo
 */
export type RiskDataServiceExeStrategySuitableClassVo = {
  /** 适用对象类id */
  id?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 对象类类型 */
  rwdObjectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 信息点集合 */
  poiList?: RiskDataServiceClassCodePoiVo[];
};

/**
 * OpenAPI 组件类型：ExeStrategyCategoryDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyCategoryDetailVo
 */
export type RiskDataServiceExeStrategyCategoryDetailVo = {
  /** 策略分类id */
  id?: number;
  /** 策略分类名称 */
  name?: string;
  /** 策略分类类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 独立状态 */
  independence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 项目处理专业id */
  pjDealMajorId?: number;
  /** 父级标签id */
  parentId?: number;
  /** 适用对象类 */
  suitableClasses?: RiskDataServiceExeStrategySuitableClassVo[];
};

/**
 * OpenAPI 组件类型：StrategyCategoryTagTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyCategoryTagTreeVo
 */
export type RiskDataServiceStrategyCategoryTagTreeVo = {
  /** 标签ID */
  id?: number;
  /** 【废弃】标签编码:合并自身id以及子集的id 用 , 隔开 */
  code?: string;
  /** 标签编码 */
  parentId?: number;
  /** 标签名称 */
  name: string;
  /** 标签类型 */
  type: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 子集 */
  children: RiskDataServiceStrategyCategoryTagTreeVo[];
  /** ************** 策略分类相关字段
是否独立标记 */
  independence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 项目处理专业 */
  pjDealMajor?: RiskDataServicePjDealMajorBaseVo;
};

/**
 * OpenAPI 组件类型：StrategyCategoryTagSaveBo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyCategoryTagSaveBo
 */
export type RiskDataServiceStrategyCategoryTagSaveBo = {
  /** 标签id（编辑时必传） */
  id?: number;
  /** 标签名称 */
  name: string;
  /** 标签类型 */
  type: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 父级标签id */
  parentId?: number;
  /** 项目处理专业id（传null代表清空） */
  pjDealMajorId?: number;
};

/**
 * OpenAPI 组件类型：StrategyCategoryTagSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyCategoryTagSaveDto
 */
export type RiskDataServiceStrategyCategoryTagSaveDto = {
  /** 场景 */
  scene: "COMMON" | "YIHENG_SCENE" | "EXE_PREPUBLISH" | "EXE_PUBLISH";
  /** 标签集合 */
  tags: RiskDataServiceStrategyCategoryTagSaveBo[];
};

/**
 * OpenAPI 组件类型：TagTreeSaveBo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TagTreeSaveBo
 */
export type RiskDataServiceTagTreeSaveBo = {
  /** 标签id（编辑时必传） */
  id?: number;
  /** 标签名称 */
  name: string;
  /** 标签类型 */
  type: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 父级标签id */
  parentId?: number;
  /** 项目处理专业id（传null代表清空） */
  pjDealMajorId?: number;
  /** 子级标签集合 */
  children?: RiskDataServiceTagTreeSaveBo[];
};

/**
 * OpenAPI 组件类型：ExeStrategyCategoryTagTreeSaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyCategoryTagTreeSaveDto
 */
export type RiskDataServiceExeStrategyCategoryTagTreeSaveDto = {
  /** 场景 */
  scene: "COMMON" | "YIHENG_SCENE" | "EXE_PREPUBLISH" | "EXE_PUBLISH";
  /** 标签树集合 */
  tagTrees: RiskDataServiceTagTreeSaveBo[];
};

/**
 * OpenAPI 组件类型：PjRiskInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskInfoVo
 */
export type RiskDataServicePjRiskInfoVo = {
  /** 风险ID */
  id?: number;
  /** 风险名称 */
  riskName?: string;
  /** 风险事件集合 */
  riskEvents?: RiskDataServiceRiskEventVo[];
};

/**
 * OpenAPI 组件类型：ClassCodePoiValueItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ClassCodePoiValueItemVo
 */
export type RiskDataServiceClassCodePoiValueItemVo = {
  /** 信息点参数选项code */
  code?: string;
  /** 信息点参数选项id */
  id?: string;
  /** 信息点参数选项名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：ClassCodePoiVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ClassCodePoiVo
 */
export type RiskDataServiceClassCodePoiVo = {
  /** 信息点code */
  poiCode?: string;
  /** 信息点名称 */
  poiName?: string;
  /** 信息点id(信息点code和信息点类型组合) */
  poiId?: string;
  /** 信息点类型 */
  poiType?: "COMMON_POI" | "SPECIAL_POI" | "GENERAL_POI" | "GENERAL_ZONE_POI" | "BUILDING_POI";
  /** 信息点value值 */
  poiValues?: RiskDataServiceClassCodePoiValueItemVo[];
};

/**
 * OpenAPI 组件类型：KlbEntityWithProblemCategoryVo20
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbEntityWithProblemCategoryVo20
 */
export type RiskDataServiceKlbEntityWithProblemCategoryVo20 = {
  /** 实体id */
  id?: number;
  /** 实体类型 */
  entityType?: "SYSTEM" | "EQUIPMENT_DIC" | "EQUIPMENT" | "COMPONENT" | "FUNCTION_OBJECT" | "ENTITYCOMBINATION" | "SYS" | "SPACE" | "BUILD" | "PROJECT" | "FLOOR" | "SHAFT" | "MAINPARTITION" | "EQUIPMENTGROUP" | "COMPONENTGROUP";
  /** 实体名称 */
  entityName?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 是否是部件 */
  component?: boolean;
  /** 实体关联的问题类列表 */
  problemCategories?: RiskDataServiceEEObjInstanceProblemCategoryVo[];
};

/**
 * OpenAPI 组件类型：EEObjInstanceStatisticsDetailThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceStatisticsDetailThirdVo
 */
export type RiskDataServiceEEObjInstanceStatisticsDetailThirdVo = {
  /** 实体对应的问题列表 */
  klbEntityRelProblems?: RiskDataServiceKlbEntityWithProblemCategoryVo[];
  /** 自定义问题列表 */
  customProblems?: RiskDataServiceKlbEntityWithProblemCategoryVo[];
};

/**
 * OpenAPI 组件类型：StartEndTimeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StartEndTimeDto
 */
export type RiskDataServiceStartEndTimeDto = {
  /** 开始时间 */
  startTime?: string;
  /** 终止时间 */
  endTime?: string;
};

/**
 * OpenAPI 组件类型：EEProblemInstanceQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemInstanceQryDto
 */
export type RiskDataServiceEEProblemInstanceQryDto = {
  /** 实例id */
  rwdInstanceId?: string;
  /** 实例适用时间 */
  suitTimes?: RiskDataServiceStartEndTimeDto[];
};

/**
 * OpenAPI 组件类型：StrategyCategoryTreeDataVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyCategoryTreeDataVo
 */
export type RiskDataServiceStrategyCategoryTreeDataVo = {
  /** 策略分类id */
  id?: number;
  /** 策略分类名称 */
  name?: string;
  /** 策略分类类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 独立状态 */
  independence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 项目处理专业id */
  pjDealMajorId?: number;
  /** 父级策略分类id */
  parentId?: number;
  /** 不包含软删的数据 */
  pjDealMajor?: RiskDataServicePjDealMajorBaseVo;
  /** 包含软删的数据(已发布的运维策略应该使用此字段取处理专业) */
  historyPjDealMajor?: RiskDataServicePjDealMajorBaseVo;
  /** 策略分类关联的策略事项集合 */
  relStrategyItems?: RiskDataServiceExeStrategyItemVo[];
};

/**
 * OpenAPI 组件类型：StrategyCategoryTreeVoStrategyCategoryTreeDataVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyCategoryTreeVoStrategyCategoryTreeDataVo
 */
export type RiskDataServiceStrategyCategoryTreeVoStrategyCategoryTreeDataVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "OBJECT_TYPE" | "OBJECT_CLASS" | "STRATEGY_CATEGORY" | "STRATEGY_TYPE" | "STRATEGY_SECOND_TYPE" | "ROOM_FUNCTION";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoStrategyObjectClassTreeEnum[];
  /** 节点关联的数据 */
  data?: RiskDataServiceStrategyCategoryTreeDataVo[];
  /** 独立状态 */
  independence?: boolean;
  /** 是否按顺序执行标记 */
  execStepEnable?: boolean;
  /** 项目处理专业 */
  pjDealMajor?: RiskDataServicePjDealMajorBaseVo;
  /** 项目处理专业（包含软删的数据） */
  historyPjDealMajor?: RiskDataServicePjDealMajorBaseVo;
};

/**
 * OpenAPI 组件类型：ExeStrategyCategorySaveDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyCategorySaveDto
 */
export type RiskDataServiceExeStrategyCategorySaveDto = {
  /** 策略分类id（编辑时必传） */
  id?: number;
  /** 策略分类名称 */
  name: string;
  /** 策略分类类型 */
  type: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 父级策略分类id */
  parentId?: number;
  /** 项目处理专业id（传null代表清空） */
  pjDealMajorId?: number;
};

/**
 * OpenAPI 组件类型：MapListLong
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MapListLong
 */
export type RiskDataServiceMapListLong = {
  key?: number[];
};

/**
 * OpenAPI 组件类型：EEObjInstanceProblemCategoryThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEObjInstanceProblemCategoryThirdVo
 */
export type RiskDataServiceEEObjInstanceProblemCategoryThirdVo = {
  /** 项目风险业务id */
  pjRiskBusinessId?: string;
  /** 问题状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 问题描述（别名） */
  problemDesc?: string;
  /** 问题定位是否清晰 */
  positionClear?: boolean;
  /** 是否为自定义问题 */
  customProblem?: boolean;
  /** 问题类中故障类问题id集合（故障次数）按年聚合 */
  faultProblemIds?: RiskDataServiceMapListLong;
  /** 问题类中其他问题id集合（问题类中的全部问题 减去 故障类问题）按年聚合 */
  otherProblemIds?: RiskDataServiceMapListLong;
  /** 问题类中关键问题id集合（关键影响次数）按年聚合 */
  crucialProblemIds?: RiskDataServiceMapListLong;
  /** 问题类中高等级问题id集合（高等级次数）按年聚合 */
  highImportanceProblemIds?: RiskDataServiceMapListLong;
  /** 问题类中所有问题的相关数据 */
  problems?: RiskDataServiceEEProblemCategoryRelEEProblemVo[];
  /** 处理对策及渠道（次数） */
  dealMeasures?: RiskDataServiceMeasureItemVo[];
  /** 始发异常及渠道（次数） */
  startProblems?: RiskDataServiceStartProblemVo[];
  /** 导致风险事件发生次数(按知识风险聚合) */
  causedRiskEvents?: RiskDataServiceCausedRiskEventVo[];
};

/**
 * OpenAPI 组件类型：EEProblemSimpleThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemSimpleThirdVo
 */
export type RiskDataServiceEEProblemSimpleThirdVo = {
  /** 故障问题次数 */
  faultProblemCount?: number;
  /** 其他问题次数 */
  otherProblemCount?: number;
};

/**
 * OpenAPI 组件类型：EEProblemSimpleDetailThirdVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemSimpleDetailThirdVo
 */
export type RiskDataServiceEEProblemSimpleDetailThirdVo = {
  /** 问题ID */
  problemId?: number;
  /** 异常事件id */
  exceptionIds?: number[];
  /** 问题名称 */
  problemName?: string;
  /** 异常发生时间 */
  startTime?: number;
  /** 异常恢复时间 */
  recoveryTime?: number;
  /** 持续时长（毫秒） */
  durationHours?: number;
  /** 超出目标时间 */
  exceededTarget?: number;
  /** 异常来源 */
  exceptionSource?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 异常类型 */
  exceptionType?: "NORMAL" | "WARN" | "EXCEPTION";
};

/**
 * OpenAPI 组件类型：MeasureItemVo17
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MeasureItemVo17
 */
export type RiskDataServiceMeasureItemVo17 = {
  /** 措施名称 */
  name?: string;
  /** 渠道(按枚举聚合) */
  sourceTypes?: "PLAN_MAINTENANCE" | "SUBSCRIBER_REPORT" | "SCHEDULED_INSPECTION" | "ABNORMAL_MAINTENANCE" | "PROACTIVE_MAINTENANCE" | "UNSCHEDULED_MAINTENANCE" | "DIAGNOSTIC_TROUBLESHOOTING" | "UNSCHEDULED_INSPECTION" | "STAFF_RECTIFICATION" | "JOB_FILLING" | "TROUBLESHOOTING_HANDLE"[];
};

/**
 * OpenAPI 组件类型：RiskEvaluateRecordSourceTypeVo21
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEvaluateRecordSourceTypeVo21
 */
export type RiskDataServiceRiskEvaluateRecordSourceTypeVo21 = {
  /** 渠道 */
  type?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR";
  /** 渠道次数 */
  count?: number;
};

/**
 * OpenAPI 组件类型：StartProblemVo18
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StartProblemVo18
 */
export type RiskDataServiceStartProblemVo18 = {
  /** 始发问题描述（名称） */
  problemDesc?: string;
  /** 渠道(按枚举聚合) */
  sourceTypes?: RiskDataServiceRiskEvaluateRecordSourceTypeVo21[];
};

/**
 * OpenAPI 组件类型：CausedRiskEventVo19
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/CausedRiskEventVo19
 */
export type RiskDataServiceCausedRiskEventVo19 = {
  /** 风险事件id */
  klbRiskEventBusinessId?: number;
  /** 风险事件名称 */
  klbRiskEventName?: string;
  /** 次数 */
  count?: number;
};

/**
 * OpenAPI 组件类型：StrategyCategoryVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyCategoryVo
 */
export type RiskDataServiceStrategyCategoryVo = {
  /** 策略分类id */
  id?: number;
  /** 策略分类名称 */
  name?: string;
  /** 上级ID */
  parentId?: number;
  /** 上级名称 */
  parentName?: string;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemPublishResultVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemPublishResultVo
 */
export type RiskDataServiceExeStrategyItemPublishResultVo = {
  /** 存在发布失败的策略分类 */
  existFailedCategories?: RiskDataServiceStrategyCategoryVo[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemPublishDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemPublishDto
 */
export type RiskDataServiceExeStrategyItemPublishDto = {
  /** 策略事项ID */
  strategyItemIds?: number[];
  /** 策略分类ID */
  strategyCategoryIds?: number[];
};

/**
 * OpenAPI 组件类型：ExeStrategyCategoryTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyCategoryTreeVo
 */
export type RiskDataServiceExeStrategyCategoryTreeVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "OBJECT_TYPE" | "OBJECT_CLASS" | "STRATEGY_CATEGORY" | "STRATEGY_TYPE" | "STRATEGY_SECOND_TYPE" | "ROOM_FUNCTION";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoStrategyObjectClassTreeEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServiceExeStrategyItemVo[];
  /** 策略分类树 */
  trees?: RiskDataServiceStrategyCategoryTreeVoExeStrategyItemVo[];
  /** 上一次策略校验时间 */
  strategyLastVerifyTime?: number;
};

/**
 * OpenAPI 组件类型：KlbMeasureRelRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbMeasureRelRiskVo
 */
export type RiskDataServiceKlbMeasureRelRiskVo = {
  /** 风险事件id */
  id?: number;
  /** 风险事件名称 */
  riskEventName?: string;
  /** 风险事件类型 */
  riskEventType?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE";
  /** todo risk_map_category */
  uniqueKey?: string;
};

/**
 * OpenAPI 组件类型：KlbTreeNodeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbTreeNodeVo
 */
export type RiskDataServiceKlbTreeNodeVo = {
  /** id */
  id?: number;
  /** 业务id */
  businessId?: number;
  /** 节点名称 */
  name?: string;
  /** 实体信息 */
  entityVo?: RiskDataServiceKlbEntityVo;
  /** 对象类名称 */
  objectName?: string;
  /** 信息点定义 */
  entityDependence?: string;
  /** 下级节点间关系 */
  logic?: "JIAJIAN" | "CHENGCHU" | "SERIAL" | "PARALLEL" | "NONE";
  /** 下级节点 */
  children?: RiskDataServiceKlbTreeNodeVo[];
  /** 节点阈值 */
  quantizationThreshold?: RiskDataServiceQuantizationThresholdStruct;
  allChildrenCount?: number;
};

/**
 * OpenAPI 组件类型：QuantizationThresholdStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/QuantizationThresholdStruct
 */
export type RiskDataServiceQuantizationThresholdStruct = {
  /** 参数反馈执行阈值 */
  quantifiedFeedbackExecutionThreshold?: number;
  /** 参数反馈执行阈值百分比 */
  quantifiedFeedbackExecutionThresholdPct?: number;
  /** 参数反馈诊断阈值 */
  quantifyObservedDiagnosticThreshold?: number;
  /** 参数反馈诊断阈值百分比 */
  quantifyObservedDiagnosticThresholdPct?: number;
};

/**
 * OpenAPI 组件类型：DataBo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/DataBo
 */
export type RiskDataServiceDataBo = {
  /** 风险事件隐患树 */
  treeNode?: RiskDataServiceKlbTreeNodeVo;
  /** 措施所在节点 */
  measureRelTreeNodeIds?: number[];
};

/**
 * OpenAPI 组件类型：KlbMeasureRelRiskTreeNodeResultVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbMeasureRelRiskTreeNodeResultVo
 */
export type RiskDataServiceKlbMeasureRelRiskTreeNodeResultVo = {
  /** 结果code(成功：success, 失败：fail) */
  code?: string;
  /** 错误信息 */
  errorMsg?: string;
  /** 数据信息 */
  data?: RiskDataServiceDataBo;
};

/**
 * OpenAPI 组件类型：KlbExecutableMeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbExecutableMeasureVo
 */
export type RiskDataServiceKlbExecutableMeasureVo = {
  /** 措施来源:
- rcc
- 自定义
措施来源类型 */
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  /** 基于rcc时,措施id
措施来源id */
  klbMeasureId?: number;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施名称 */
  name?: string;
  /** 主体信息 */
  subject?: RiskDataServiceSubjectStruct;
  /** 是否生成异常事件(默认值true)
是否生成异常事件(仅针对自定义措施，默认值true) */
  generateExceptionEvent?: boolean;
  /** 是否外委 */
  delegate?: boolean;
  /** 外委合同到期时间 */
  delegateExpireTime?: string;
  /** 资料名称 */
  meansName?: string;
  /** 资料说明 */
  meansExplain?: string;
  /** 仪器类型 */
  instrumentTypeNames?: string[];
  /** 仪器仪表说明 */
  instrumentDescription?: string;
  /** 设备工况要求 */
  investmentWorkingCondition?: RiskDataServiceInvestmentWorkingConditionStruct;
  /** 时间工况要求 */
  timeWorkingRequirement?: RiskDataServiceTimeWorkingRequirementStruct;
  /** 操作指导 */
  workingGuidanceList?: RiskDataServiceWorkingGuidanceStruct[];
  /** 是否拍照 */
  photoNoteRequirement?: RiskDataServiceEnumStruct;
  /** 正常拍照要求 */
  normalDescriptionOfPhoto?: string;
  /** 异常拍照要求 */
  unusualDescriptionOfPhoto?: string;
  /** 资质要求 */
  credentialRequirementList?: string[];
  /** 安全提示 */
  safePrompt?: string;
  /** 执行过程影响 */
  executionImpactList?: RiskDataServiceEnumStruct[];
  /** 是否相关部门要求 */
  departmentalRequirement?: boolean;
  /** 相关部门要求 */
  departmentalRequirementExplain?: string;
  /** 可执行人员专业 */
  majors?: RiskDataServiceMajor[];
  /** (单次执行)准备时长 */
  preparationTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)时长 */
  executionTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)人工时 */
  laborHour?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)非人工时
(单次执行)单次执行非人工成本 */
  nonLaborCost?: RiskDataServiceDecimalRangeStruct;
  /** 整改效果 */
  rectificationEffect?: string;
  /** 维修深度 */
  maintenanceDepth?: number;
  /** 物业配合内容 */
  matchingContentList?: RiskDataServiceMatchingContentStruct[];
  /** 反馈类型 */
  feedbackType?: "OPTION" | "PARAMETER_CALCULATION";
  /** 分档反馈-可选项 */
  optionFeedbackInfo?: RiskDataServiceOptionFeedbackStruct;
  /** 参数反馈-目标参数信息 */
  targetParameterInfo?: RiskDataServiceTargetParameterInfoStruct;
};

/**
 * OpenAPI 组件类型：StatisticsItemVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StatisticsItemVo
 */
export type RiskDataServiceStatisticsItemVo = {
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 数量 */
  sum?: number;
};

/**
 * OpenAPI 组件类型：ExceptionEventQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExceptionEventQueryDto
 */
export type RiskDataServiceExceptionEventQueryDto = {
  /** 当前页 */
  current?: number;
  /** 每页条数 */
  size?: number;
  /** 异常始发时间-开始 */
  createTimeStart?: string;
  /** 异常始发时间-开始 */
  createTimeEnd?: string;
  /** 关键词搜索 */
  keyword?: string;
  /** 异常事件状态 */
  exceptionEventStatus?: "UNRESOLVED" | "RESOLVED";
  /** 业务分类 */
  dealMajorIds?: number[];
  /** 严重程度 */
  importanceDegree?: "HIGH" | "MEDIUM_HIGH" | "MEDIUM" | "LOW" | "EXTREMELY_LOW" | "UNKNOWN"[];
  /** 是否逾期 */
  overdue?: boolean;
  /** 是否需核实 */
  needVerification?: boolean;
  /** 处理进程(FIND_EXCEPTION:发现异常，SOLVING：排查处理，VERIFICATION：验证闭合) */
  solveProcesses?: "FIND_EXCEPTION" | "SOLVING" | "VERIFICATION"[];
  /** 空间功能类型 */
  roomFuncTypeCodes?: string[];
  /** 风险点 */
  riskBusinessIds?: string[];
  /** 仅看影响外部客户 */
  externalCustomer?: boolean;
  /** 问题位置 */
  spaceIds?: string[];
  /** 实际影响 */
  impactCategoryIds?: number[];
  /** 上报人id */
  reporters?: string[];
  /** 来源类型 */
  sourceTypes?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR"[];
  /** 排序方式 */
  orderBy?: "SEVERITY" | "EXCEPTION_START_TIME" | "EXCEPTION_UPDATE_TIME" | "EXCEPTION_END_TIME" | "HISTORY_SEVERITY";
  /** 涉及对象类 */
  classCodes?: string[];
  /** 对象实例id */
  rwdObjectIds?: string[];
  /** 是否其他对象 */
  filterOther?: boolean;
  /** 工单响应状态 */
  workOrderActionStatus?: "ACTION" | "UN_ACTION";
  /** 工单响应是否超时标记 */
  workOrderOverdueFlag?: boolean;
};

/**
 * OpenAPI 组件类型：StatusStatisticsVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StatusStatisticsVo
 */
export type RiskDataServiceStatusStatisticsVo = {
  /** 已解决数量 */
  resolvedSum?: number;
  /** 未解决数量 */
  unResolvedSum?: number;
};

/**
 * OpenAPI 组件类型：SpaceTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SpaceTreeVo
 */
export type RiskDataServiceSpaceTreeVo = {
  code?: string;
  parentCode?: string;
  name?: string;
  children?: RiskDataServiceSpaceTreeVo[];
  /** 空间列表 */
  spaces?: RiskDataServiceSimpleRwdObjectVo[];
};

/**
 * OpenAPI 组件类型：ExeStrategyCategoryCopyDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyCategoryCopyDto
 */
export type RiskDataServiceExeStrategyCategoryCopyDto = {
  /** 原策略分类id */
  strategyCategoryId?: number;
  /** （三级）策略分类名称 */
  name?: string;
  /** （二级）分组id */
  parentStrategyCategoryId?: number;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemInstanceBatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemInstanceBatchUpdateDto
 */
export type RiskDataServiceExeStrategyItemInstanceBatchUpdateDto = {
  /** 策略事项id集合 */
  strategyItemIds: number[];
  /** 适用对象实例id集合 */
  suitableInstanceIds: string[];
};

/**
 * OpenAPI 组件类型：RiskInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskInstanceVo
 */
export type RiskDataServiceRiskInstanceVo = {
  /** 风险点编码 */
  riskBusinessId?: string;
  /** 风险点名称 */
  riskName?: string;
  /** 问题等级 */
  issueLevel?: RiskDataServicePjRiskIssueLevelVo;
  /** 风险分类标签 */
  categoryLabelList?: RiskDataServicePjRiskCategoryLabelVo[];
  /** 是否不视作故障 */
  notRegardFault?: boolean;
  /** 是否顶节点 */
  isTopRisk?: boolean;
  /** 关联处理专业 */
  dealMajorList?: RiskDataServicePjDealMajorListVo[];
};

/**
 * OpenAPI 组件类型：IotRuleInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotRuleInstanceVo
 */
export type RiskDataServiceIotRuleInstanceVo = {
  /** 规则id */
  id?: number;
  /** 规则名称 */
  name?: string;
  /** 是否启用 */
  enable?: boolean;
};

/**
 * OpenAPI 组件类型：ChangeProcess
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ChangeProcess
 */
export type RiskDataServiceChangeProcess = {
  /** 变更前数据 */
  oldValue?: string;
  /** 变更后数据 */
  newValue?: string;
  /** 变化时间 */
  changeTime?: string;
  /** 人工修改等级名称 */
  userName?: string;
};

/**
 * OpenAPI 组件类型：SpaceTreeQuery
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SpaceTreeQuery
 */
export type RiskDataServiceSpaceTreeQuery = {
  floorId?: string;
};

/**
 * OpenAPI 组件类型：PjInstanceRiskControlStrategyConfigUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjInstanceRiskControlStrategyConfigUpdateDto
 */
export type RiskDataServicePjInstanceRiskControlStrategyConfigUpdateDto = {
  id: number;
  enable?: boolean;
};

/**
 * OpenAPI 组件类型：PjInstanceRiskControlStrategyConfigVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjInstanceRiskControlStrategyConfigVo
 */
export type RiskDataServicePjInstanceRiskControlStrategyConfigVo = {
  id?: number;
  type?: "ONLY_RISK_CONTROL_STRATEGY_INSTANCE";
  enabled?: boolean;
};

/**
 * OpenAPI 组件类型：PjSwitchConfigUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjSwitchConfigUpdateDto
 */
export type RiskDataServicePjSwitchConfigUpdateDto = {
  type: "ONLY_RISK_CONTROL_STRATEGY_INSTANCE";
  enable?: boolean;
};

/**
 * OpenAPI 组件类型：PageCategoryInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PageCategoryInstanceVo
 */
export type RiskDataServicePageCategoryInstanceVo = {
  /** 查询数据列表 */
  records?: RiskDataServiceCategoryInstanceVo[];
  /** 总数 */
  total?: number;
  /** 每页显示条数，默认 10 */
  size?: number;
  /** 当前页 */
  current?: number;
  /** 排序字段信息 */
  orders?: RiskDataServiceOrderItem[];
  /** 自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /** 是否进行 count 查询 */
  searchCount?: boolean;
  /** {@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /** countId */
  countId?: string;
  /** countId */
  maxLimit?: number;
};

/**
 * OpenAPI 组件类型：EELocationViewObjectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EELocationViewObjectVo
 */
export type RiskDataServiceEELocationViewObjectVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  bimLocation?: string;
  outline?: string;
  /** 当前状态 */
  treeNodeStatus?: "EXCEPTION" | "WARN" | "NORMAL" | "UNKNOWN" | "CONJECTURE_NORMAL" | "CONJECTURE_EXCEPTION" | "CONJECTURE_UNKNOWN";
  /** 是否原因 */
  reason?: boolean;
  /** 是否始发问题 */
  original?: boolean;
  /** 触发与解除条件 */
  iotTriAndRelInfo?: RiskDataServiceIotRecordAndRelStruct[];
  /** 是否发生过异常 */
  happenedExceptions?: boolean;
  /** 是否为自定义实例 */
  otherObject?: boolean;
};

/**
 * OpenAPI 组件类型：FloorVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FloorVo
 */
export type RiskDataServiceFloorVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  localId?: string;
  /** 楼层序列 */
  floorSequenceId?: number;
  floorElevation?: string;
  /** 设备设施实例列表 */
  rwdInstances?: RiskDataServiceEELocationViewObjectVo[];
};

/**
 * OpenAPI 组件类型：BuildingVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/BuildingVo
 */
export type RiskDataServiceBuildingVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  localId?: string;
  /** 楼层 */
  floors?: RiskDataServiceFloorVo[];
  /** 全楼摄像头列表 */
  cameras?: RiskDataServiceRwdObjectWithLocationVo[];
};

/**
 * OpenAPI 组件类型：ObjRelationship
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjRelationship
 */
export type RiskDataServiceObjRelationship = {
  /** from对象实例ID */
  fromId?: string;
  /** to对象实例ID */
  toId?: string;
};

/**
 * OpenAPI 组件类型：EELocationViewVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EELocationViewVo
 */
export type RiskDataServiceEELocationViewVo = {
  /** 是否有位置视图 */
  hasLocationView?: boolean;
  /** 有位置视图的实例树列表 */
  locationViewTrees?: RiskDataServiceInstanceTreeVo[];
};

/**
 * OpenAPI 组件类型：EEInstanceRiskPointVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEInstanceRiskPointVo
 */
export type RiskDataServiceEEInstanceRiskPointVo = {
  /** 异常/超征兆：取问题名称
其他状态：取节点名称
名称 */
  name?: string;
  /** 异常事件ID */
  exceptionEventId?: number;
  /** 问题ID */
  problemId?: number;
  /** 风险实例业务ID */
  pjRiskInstanceBusinessId?: string;
  /** 当前状态 */
  treeNodeStatus?: "EXCEPTION" | "WARN" | "NORMAL" | "UNKNOWN" | "CONJECTURE_NORMAL" | "CONJECTURE_EXCEPTION" | "CONJECTURE_UNKNOWN";
  /** 观测状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 是否暂不处理 */
  noTreatment?: boolean;
  /** 实例树节点ID */
  rwdInstanceTreeNodeIds?: number[];
  /** 是否有效 */
  valid?: boolean;
};

/**
 * OpenAPI 组件类型：EELocationRwdObjectVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EELocationRwdObjectVo
 */
export type RiskDataServiceEELocationRwdObjectVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  bimLocation?: string;
  outline?: string;
};

/**
 * OpenAPI 组件类型：RwdObjectWithLocationVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdObjectWithLocationVo
 */
export type RiskDataServiceRwdObjectWithLocationVo = {
  id?: string;
  localName?: string;
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  classCode?: string;
  localId?: string;
  /** 建筑信息 */
  building?: RiskDataServiceSimpleRwdObjectVo;
  /** 楼层信息 */
  floor?: RiskDataServiceSimpleRwdFloorVo;
  /** 空间信息 */
  spaces?: RiskDataServiceSimpleRwdSpaceVo[];
  /** 空间功能类型 */
  roomFuncType?: string;
  /** 空间功能类型描述 */
  roomFuncTypeDesc?: string;
  bimLocation?: string;
  outline?: string;
};

/**
 * OpenAPI 组件类型：SimpleInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/SimpleInstanceVo
 */
export type RiskDataServiceSimpleInstanceVo = {
  /** 物理世界实例id */
  instanceId?: string;
  /** 物理世界实例名称 */
  instanceName?: string;
  /** 所在空间 */
  spaceName?: string;
};

/**
 * OpenAPI 组件类型：InstanceTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceTreeVo
 */
export type RiskDataServiceInstanceTreeVo = {
  /** 隐患树id */
  instanceTreeId?: number;
  /** 隐患树顶节点名称 */
  riskEventName?: string;
  /** 隐患树状态 */
  instanceTreeStatusEnum?: "EXCEPTION" | "CONJECTURE_EXCEPTION" | "POTENTIAL" | "UNKNOWN" | "GENERAL_NORMAL" | "NORMAL";
  /** 实例信息 */
  instances?: RiskDataServiceSimpleInstanceVo[];
};

/**
 * OpenAPI 组件类型：EELocationViewDetailVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EELocationViewDetailVo
 */
export type RiskDataServiceEELocationViewDetailVo = {
  /** 事件涉及的系统 */
  systems?: RiskDataServiceSimpleRwdObjectVo[];
  /** 无位置信息的设备设施实例 */
  nonLocationObjects?: RiskDataServiceRwdObjectTableVo[];
  /** 建筑 */
  buildings?: RiskDataServiceBuildingVo[];
  /** 对象关系 */
  objectRelationships?: RiskDataServiceObjRelationship[];
};

/**
 * OpenAPI 组件类型：ObserveObjectQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObserveObjectQryDto
 */
export type RiskDataServiceObserveObjectQryDto = {
  strategyItemId?: number;
  /** 注意：该实例集合可能包含策略事项关联的实例(ZX00已发布)之外的其他设备实例 */
  rwdInstanceIds?: string[];
};

/**
 * OpenAPI 组件类型：KlbRiskInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbRiskInfoVo
 */
export type RiskDataServiceKlbRiskInfoVo = {
  /** 风险ID */
  id?: number;
  /** 风险名称 */
  riskName?: string;
  /** 风险事件集合 */
  riskEvents?: RiskDataServiceRiskEventVo[];
};

/**
 * OpenAPI 组件类型：MajorClassDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MajorClassDto
 */
export type RiskDataServiceMajorClassDto = {
  /** 处理专业id */
  majorCode: string;
  /** 对象类编码 */
  classCode: string;
};

/**
 * OpenAPI 组件类型：PjDealMajorWithOtherObjectAndKlbMeasureThirdPartyVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorWithOtherObjectAndKlbMeasureThirdPartyVo
 */
export type RiskDataServicePjDealMajorWithOtherObjectAndKlbMeasureThirdPartyVo = {
  /** 处理专业id */
  id?: number;
  /** 处理专业名称 */
  name?: string;
  /** 处理专业-关联的交付专业 */
  majors?: RiskDataServiceMajorVo[];
  /** 处理专业排序字段(数字越小越靠前) */
  sort?: number;
  /** 处理专业-问题等级集合 */
  issueLevels?: RiskDataServiceIssueLevelVo[];
  /** 对象实例id */
  majorCode?: string;
  /** 对象类编码 */
  classCode?: string;
  /** 可执行措施id */
  klbMeasureId?: number;
};

/**
 * OpenAPI 组件类型：PjDealMajorThirdPartyQryByOtherObjectKlbMeasureDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjDealMajorThirdPartyQryByOtherObjectKlbMeasureDto
 */
export type RiskDataServicePjDealMajorThirdPartyQryByOtherObjectKlbMeasureDto = {
  /** 知识措施id */
  klbMeasureId: number;
  /** 专业 */
  majorCode?: string;
  /** 对象类编码 */
  classCode?: string;
};

/**
 * OpenAPI 组件类型：PjIssueLevelVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjIssueLevelVo
 */
export type RiskDataServicePjIssueLevelVo = {
  /** 问题等级 */
  level?: RiskDataServiceEnumStruct;
  /** 问题等级-别名 */
  alias?: string;
};

/**
 * OpenAPI 组件类型：PjOtherObjectExceptionPhenomenonVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjOtherObjectExceptionPhenomenonVo
 */
export type RiskDataServicePjOtherObjectExceptionPhenomenonVo = {
  /** 专业编码 */
  majorCode?: string;
  classCode?: string;
  /** 实体id，取klbRisk的businessId，部件的时候，就是部件id */
  entityBusinessId?: number;
  /** 实体名称 */
  entityName?: string;
  /** 所属对象类，取klbRisk的businessId,部件时，不为空 */
  belongEntityBusinessId?: number;
  /** 是否为部件 */
  component?: boolean;
  /** 异常现象名称 */
  name?: string;
  /** 项目风险id */
  pjRiskBusinessId?: string;
  /** 状态（异常、超征兆） */
  feedbackResult?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 处理专业Id */
  pjDealMajorId?: number;
  /** 处理专业名称 */
  dealMajorName?: string;
  /** 部件名称 */
  componentName?: string;
  /** 是否是三要素聚合 */
  mergeElements?: boolean;
  /** 问题等级 */
  issueLevel?: RiskDataServicePjIssueLevelVo;
  businessId?: string;
};

/**
 * OpenAPI 组件类型：IPagePjOtherObjectExceptionPhenomenonVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IPagePjOtherObjectExceptionPhenomenonVo
 */
export type RiskDataServiceIPagePjOtherObjectExceptionPhenomenonVo = {
  records?: RiskDataServicePjOtherObjectExceptionPhenomenonVo[];
  total?: number;
  size?: number;
  current?: number;
  orders?: RiskDataServiceOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};

/**
 * OpenAPI 组件类型：PjExceptionPhenomenonOtherObjectQryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjExceptionPhenomenonOtherObjectQryDto
 */
export type RiskDataServicePjExceptionPhenomenonOtherObjectQryDto = {
  /** 查询key(异常现象名称) */
  keyword?: string;
  /** 其他对象信息 */
  otherObjects?: RiskDataServiceOtherObject[];
};

/**
 * OpenAPI 组件类型：TreeNodeEntityVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/TreeNodeEntityVo
 */
export type RiskDataServiceTreeNodeEntityVo = {
  /** 实体ID */
  id?: number;
  /** 实体名称 */
  entityName?: string;
  /** 实体类型 */
  entityType?: "SYSTEM" | "EQUIPMENT_DIC" | "EQUIPMENT" | "COMPONENT" | "FUNCTION_OBJECT" | "ENTITYCOMBINATION" | "SYS" | "SPACE" | "BUILD" | "PROJECT" | "FLOOR" | "SHAFT" | "MAINPARTITION" | "EQUIPMENTGROUP" | "COMPONENTGROUP";
  /** 约束信息 */
  constraintInfoList?: RiskDataServiceConstraintInfo[];
  /** 对象类型描述 */
  objectPoiList?: RiskDataServiceKlbEntityObjectPoi[];
  /** 是否部件 */
  component?: boolean;
  /** 是否通用部件 */
  commonPart?: boolean;
};

/**
 * OpenAPI 组件类型：RiskInstanceStatusVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskInstanceStatusVo
 */
export type RiskDataServiceRiskInstanceStatusVo = {
  /** 节点当前状态 */
  currentStatus?: "EXCEPTION" | "WARN" | "NORMAL" | "UNKNOWN" | "CONJECTURE_NORMAL" | "CONJECTURE_EXCEPTION" | "CONJECTURE_UNKNOWN";
  /** 上报来源 */
  sourceType?: "RISK_REPORT_UPLOAD" | "MANUAL_CHANGE" | "WORK_ORDER" | "IOT_ALARM" | "ROUTING_INSPECTION" | "MAINTENANCE" | "CUSTOMER_UPLOAD" | "NOT_ROUTING_INSPECTION" | "NOT_MAINTENANCE" | "DATA_MONITORING_SYSTEM" | "TEMP_REPAIR" | "IOT_WORK_ORDER";
  /** 上报来源id */
  sourceId?: RiskDataServiceSerializable;
  /** 上报时间 */
  reportTime?: string;
  /** 上报状态 */
  riskStatus?: "NORMAL" | "WARN" | "EXCEPTION";
  /** 是否需核实 */
  needVerification?: boolean;
  /** 失效时间 */
  invalidTime?: string;
  /** 失效类型 */
  invalidType?: "MANUAL_OBSERVATION_INVALID" | "OTHER_NODE_STATUS_CHANGE";
};

/**
 * OpenAPI 组件类型：InfluenceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InfluenceVo
 */
export type RiskDataServiceInfluenceVo = {
  /** 状态信息 */
  status?: RiskDataServiceRiskInstanceStatusVo;
  /** 风险点id */
  riskInstanceBusinessId?: string;
  /** 超征兆问题等级 */
  symptomaticIssueLevel?: RiskDataServicePjIssueLevelVo;
  /** 异常问题等级 */
  exceptionIssueLevel?: RiskDataServicePjIssueLevelVo;
  /** 超征兆影响 */
  symptomaticProblems?: string[];
  /** 异常影响 */
  exceptionProblem?: string;
  /** 影响类型 */
  impactCategories?: RiskDataServicePjRiskImpactCategorySimpleVo[];
};

/**
 * OpenAPI 组件类型：EESuggestInfluenceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EESuggestInfluenceVo
 */
export type RiskDataServiceEESuggestInfluenceVo = {
  /** 实例Id */
  instanceId?: string;
  /** 影响列表 */
  influenceList?: RiskDataServiceInfluenceVo[];
};

/**
 * OpenAPI 组件类型：ReasonVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ReasonVo
 */
export type RiskDataServiceReasonVo = {
  /** 状态信息 */
  status?: RiskDataServiceRiskInstanceStatusVo;
  /** 风险点id */
  riskInstanceBusinessId?: string;
  /** 超征兆问题等级 */
  symptomaticIssueLevel?: RiskDataServicePjIssueLevelVo;
  /** 异常问题等级 */
  exceptionIssueLevel?: RiskDataServicePjIssueLevelVo;
  /** 超征兆影响 */
  symptomaticProblems?: string[];
  /** 异常影响 */
  exceptionProblem?: string;
  /** 失效发生概率 */
  probability?: number;
  /** 失效发生概率等级.null表示无 */
  probabilityLevel?: "HIGH" | "MID" | "LOW";
};

/**
 * OpenAPI 组件类型：ComponentReasonVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ComponentReasonVo
 */
export type RiskDataServiceComponentReasonVo = {
  /** 部件id */
  componentId?: string;
  /** 部件名称 */
  componentName?: string;
  /** 原因列表 */
  reasonList?: RiskDataServiceReasonVo[];
};

/**
 * OpenAPI 组件类型：EESuggestReasonVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EESuggestReasonVo
 */
export type RiskDataServiceEESuggestReasonVo = {
  /** 实例Id */
  instanceId?: string;
  /** 部件列表 */
  entities?: RiskDataServiceEntityVo[];
};

/**
 * OpenAPI 组件类型：MeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MeasureVo
 */
export type RiskDataServiceMeasureVo = {
  /** 措施id */
  measureId: number;
  /** 措施描述 */
  measureName?: string;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 非人工成本 */
  nonLaborCost?: number;
};

/**
 * OpenAPI 组件类型：EESuggestMeasureVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EESuggestMeasureVo
 */
export type RiskDataServiceEESuggestMeasureVo = {
  /** 实例Id */
  instanceId?: string;
  classCode?: string;
  /** 部件列表 */
  entities?: RiskDataServiceEntityVo[];
};

/**
 * OpenAPI 组件类型：EEProblemSuggestQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EEProblemSuggestQueryDto
 */
export type RiskDataServiceEEProblemSuggestQueryDto = {
  /** 初始问题 */
  riskInstanceBusinessIds?: string[];
};

/**
 * OpenAPI 组件类型：EntityVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EntityVo
 */
export type RiskDataServiceEntityVo = {
  /** 名称 */
  name?: string;
  /** 是否部件 */
  component?: boolean;
  /** 原因列表 */
  reasonList?: RiskDataServiceReasonVo[];
};

/**
 * OpenAPI 组件类型：ExeStrategySuitableClassPo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategySuitableClassPo
 */
export type RiskDataServiceExeStrategySuitableClassPo = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  /** 知识库实体信息点(根据多实体合并而成) JsonArray  List
7.250801迭代-策略合并-该字段在业务中已经不会使用到了，后续可将表中的字段也移除 */
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  /** 对象类编码  todo RQ 不应该是list */
  classCode?: string[];
  /** 对象类类型 */
  classType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类信息点 JsonArray  List */
  spaceTypePoi?: RiskDataServiceObjectClassPoi[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemPo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemPo
 */
export type RiskDataServiceExeStrategyItemPo = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  /** 覆盖，使用物理删除 */
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  name?: string;
  /** 适用对象类id */
  suitableClassId?: number;
  /** 部件实体id（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityId?: number;
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 前观措施id */
  beforeMeasureId?: number;
  /** 维修/更换措施id */
  executeMeasureId?: number;
  /** 频次类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 频次次数 */
  periodCount?: number;
  /** 频次数量 */
  periodTimes?: number;
  /** 策略分类 */
  strategyCategoryId?: number;
  /** 执行顺序id */
  execStepId?: number;
  /** 对称策略事项ids */
  symmetryStrategyItemIds?: number[];
  /** 措施的md5值 */
  measureMd5?: string;
};

/**
 * OpenAPI 组件类型：ExeStrategyExecStepPo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyExecStepPo
 */
export type RiskDataServiceExeStrategyExecStepPo = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  /** 执行顺序名称 */
  name?: string;
  /** 排序索引 */
  sortIndex?: number;
  /** 策略分类id */
  strategyCategoryId?: number;
};

/**
 * OpenAPI 组件类型：ExeStrategyCategoryPo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyCategoryPo
 */
export type RiskDataServiceExeStrategyCategoryPo = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  /** 标签名称 */
  name?: string;
  /** 父级标签id */
  parentId?: number;
  /** 标签类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 是否独立标记 */
  independence?: boolean;
  /** 是否按顺序执行 */
  execStepEnable?: boolean;
  /** 项目处理专业id */
  pjDealMajorId?: number;
};

/**
 * OpenAPI 组件类型：MathRangEntry
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/MathRangEntry
 */
export type RiskDataServiceMathRangEntry = {
  /** 区间 */
  range?: RiskDataServiceMathRange;
  /** 状态 */
  status?: "NORMAL" | "ABNORMAL" | "SUPERSIGN";
  /** 节点别名 */
  nodeAlias?: string;
};

/**
 * OpenAPI 组件类型：ExecutableMeasureStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExecutableMeasureStruct
 */
export type RiskDataServiceExecutableMeasureStruct = {
  /** 措施来源:
- rcc
- 自定义
措施来源类型 */
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  /** 基于rcc时,措施id
措施来源id */
  klbMeasureId?: number;
  /** 措施类型 */
  controlType?: "E1" | "E2" | "E3" | "E4" | "E5";
  /** 措施名称 */
  name?: string;
  /** 主体信息 */
  subject?: RiskDataServiceSubjectStruct;
  /** 是否生成异常事件(默认值true)
是否生成异常事件(仅针对自定义措施，默认值true) */
  generateExceptionEvent?: boolean;
  /** 是否外委 */
  delegate?: boolean;
  /** 外委合同到期时间 */
  delegateExpireTime?: string;
  /** 资料名称 */
  meansName?: string;
  /** 资料说明 */
  meansExplain?: string;
  /** 仪器类型 */
  instrumentTypeNames?: string[];
  /** 仪器仪表说明 */
  instrumentDescription?: string;
  /** 设备工况要求 */
  investmentWorkingCondition?: RiskDataServiceInvestmentWorkingConditionStruct;
  /** 时间工况要求 */
  timeWorkingRequirement?: RiskDataServiceTimeWorkingRequirementStruct;
  /** 操作指导 */
  workingGuidanceList?: RiskDataServiceWorkingGuidanceStruct[];
  /** 是否拍照 */
  photoNoteRequirement?: RiskDataServiceEnumStruct;
  /** 正常拍照要求 */
  normalDescriptionOfPhoto?: string;
  /** 异常拍照要求 */
  unusualDescriptionOfPhoto?: string;
  /** 资质要求 */
  credentialRequirementList?: string[];
  /** 安全提示 */
  safePrompt?: string;
  /** 执行过程影响 */
  executionImpactList?: RiskDataServiceEnumStruct[];
  /** 是否相关部门要求 */
  departmentalRequirement?: boolean;
  /** 相关部门要求 */
  departmentalRequirementExplain?: string;
  /** 可执行人员专业 */
  majors?: RiskDataServiceMajor[];
  /** (单次执行)准备时长 */
  preparationTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)时长 */
  executionTime?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)人工时 */
  laborHour?: RiskDataServiceDecimalRangeStruct;
  /** (单次执行)非人工时
(单次执行)单次执行非人工成本 */
  nonLaborCost?: RiskDataServiceDecimalRangeStruct;
  /** 整改效果 */
  rectificationEffect?: string;
  /** 维修深度 */
  maintenanceDepth?: number;
  /** 物业配合内容 */
  matchingContentList?: RiskDataServiceMatchingContentStruct[];
  /** 反馈类型 */
  feedbackType?: "OPTION" | "PARAMETER_CALCULATION";
  /** 分档反馈-可选项 */
  optionFeedbackInfo?: RiskDataServiceOptionFeedbackStruct;
  /** 参数反馈-目标参数信息 */
  targetParameterInfo?: RiskDataServiceTargetParameterInfoStruct;
};

/**
 * OpenAPI 组件类型：ExeMeasurePo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeMeasurePo
 */
export type RiskDataServiceExeMeasurePo = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  /** 来源类型，区分自定义与生产线 */
  sourceType?: "RCC_REF" | "CUSTOMIZE";
  /** 数据，JSON格式 */
  sourceData?: RiskDataServiceExecutableMeasureStruct;
};

/**
 * OpenAPI 组件类型：void
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/void
 */
export type RiskDataServiceVoid = {
  /** 文件信息
rcc版本信息等 */
  fileInfo?: RiskDataServiceVersionInfo;
  /** 报警规则列表 */
  rules?: RiskDataServiceIotAlertRuleDto[];
  /** 报警规则分组列表 */
  groups?: RiskDataServiceIotAlertRuleGroupDto[];
  /** 报警规则分组列表
用于上传展示 */
  showGroups?: RiskDataServiceIotAlertRuleGroup[];
};

/**
 * OpenAPI 组件类型：ProjectDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ProjectDto
 */
export type RiskDataServiceProjectDto = {
  /** 集团code */
  groupCode?: string;
  /** 项目id */
  projectId?: string;
  /** 项目名称 */
  projectName?: string;
};

/**
 * OpenAPI 组件类型：ExeStrategySuitableClassDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategySuitableClassDto
 */
export type RiskDataServiceExeStrategySuitableClassDto = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  /** 知识库实体信息点(根据多实体合并而成) JsonArray  List
7.250801迭代-策略合并-该字段在业务中已经不会使用到了，后续可将表中的字段也移除 */
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  /** 对象类编码  todo RQ 不应该是list */
  classCode?: string[];
  /** 对象类类型 */
  classType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象类信息点 JsonArray  List */
  spaceTypePoi?: RiskDataServiceObjectClassPoi[];
  /** 对象类名称 */
  className?: string[];
};

/**
 * OpenAPI 组件类型：ExeStrategyItemDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemDto
 */
export type RiskDataServiceExeStrategyItemDto = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  /** 覆盖，使用物理删除 */
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  name?: string;
  /** 适用对象类id */
  suitableClassId?: number;
  /** 部件实体id（策略事项选择了适用对象类下具体部件时该字段才有值） */
  componentEntityId?: number;
  /** 主责岗位 */
  mainResponsibilityPosition?: string;
  /** 前观措施id */
  beforeMeasureId?: number;
  /** 维修/更换措施id */
  executeMeasureId?: number;
  /** 频次类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 频次次数 */
  periodCount?: number;
  /** 频次数量 */
  periodTimes?: number;
  /** 策略分类 */
  strategyCategoryId?: number;
  /** 执行顺序id */
  execStepId?: number;
  /** 对称策略事项ids */
  symmetryStrategyItemIds?: number[];
  /** 措施的md5值 */
  measureMd5?: string;
  /** 组件实体名称 */
  componentEntityName?: string;
  /** 周期的描述 */
  periodDesc?: string;
};

/**
 * OpenAPI 组件类型：ObjectClassDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassDto
 */
export type RiskDataServiceObjectClassDto = {
  /** 对象类code */
  classCode?: string[];
  /** 空间功能类型code */
  roomFuncType?: string[];
};

/**
 * OpenAPI 组件类型：AlertConfigGlobalDegreeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertConfigGlobalDegreeDto
 */
export type RiskDataServiceAlertConfigGlobalDegreeDto = {
  /** 数据类型 */
  dataType: "CLASS" | "INFO";
  /** 等级 */
  degree: "HIGH" | "MID" | "LOW";
};

/**
 * OpenAPI 组件类型：AlertConfigClassAndInfoDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertConfigClassAndInfoDto
 */
export type RiskDataServiceAlertConfigClassAndInfoDto = {
  /** 对象类code */
  classCode: string;
  /** 信息点code
当创建点位时必填 */
  infoCodes?: string[];
};

/**
 * OpenAPI 组件类型：AlertConfigClassAndInfoBatchDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertConfigClassAndInfoBatchDto
 */
export type RiskDataServiceAlertConfigClassAndInfoBatchDto = {
  /** 数据类型 */
  dataType: "CLASS" | "INFO";
  /** 等级 */
  level: "HIGH" | "MID" | "LOW";
  /** 类和信息点配置 */
  classAndInfos: RiskDataServiceAlertConfigClassAndInfoDto[];
};

/**
 * OpenAPI 组件类型：AlertConfigInstanceDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertConfigInstanceDto
 */
export type RiskDataServiceAlertConfigInstanceDto = {
  /** 数据类型 */
  dataType: "CLASS" | "INFO";
  /** 类和信息点配置的id
新增时传入 */
  parentConfigId?: number;
  /** 等级 */
  level: "HIGH" | "MID" | "LOW";
  /** 数据id
更新时传入 */
  id?: number;
  /** 选择的实例id */
  selectedInstanceIds?: string[];
  /** 是否选择所有 */
  chooseAll?: boolean;
  /** 需要排除的实例id（全选取消选中时传入） */
  excludeInstanceIds?: string[];
  /** 筛选条件 */
  qryDto?: RiskDataServiceRwdObjectPageQuery;
};

/**
 * OpenAPI 组件类型：AlertConfigBatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertConfigBatchUpdateDto
 */
export type RiskDataServiceAlertConfigBatchUpdateDto = {
  /** 数据类型 */
  dataType: "CLASS" | "INFO";
  /** 勾选的数据id */
  ids: number[];
  /** 等级 */
  level: "HIGH" | "MID" | "LOW";
  /** 信息点code
修改点位时传入 */
  infoCodes?: string[];
};

/**
 * OpenAPI 组件类型：IssueLevelVo22
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IssueLevelVo22
 */
export type RiskDataServiceIssueLevelVo22 = {
  /** 问题等级 */
  level?: RiskDataServiceEnumStruct;
  /** 问题等级-别名 */
  alias?: string;
};

/**
 * OpenAPI 组件类型：OpsIotGlobalConfigVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OpsIotGlobalConfigVo
 */
export type RiskDataServiceOpsIotGlobalConfigVo = {
  /** 是否启用 */
  enable?: boolean;
  /** 业务分类 */
  dealMajor?: RiskDataServicePjDealMajorBaseVo;
  /** 实例离线的默认等级 */
  instanceDefaultIssueLevel?: RiskDataServiceIssueLevelVo22;
  /** 信息点离线的默认等级 */
  infoPointDefaultIssueLevel?: RiskDataServiceIssueLevelVo22;
};

/**
 * OpenAPI 组件类型：OpsIotInstanceVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OpsIotInstanceVo
 */
export type RiskDataServiceOpsIotInstanceVo = {
  /** 配置id */
  id?: number;
  /** 对象实例 */
  rwdObjects?: RiskDataServiceSimpleRwdObjectVo[];
  /** 问题等级 */
  issueLevel?: RiskDataServiceIssueLevelVo22;
};

/**
 * OpenAPI 组件类型：OpsIotClassConfigVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OpsIotClassConfigVo
 */
export type RiskDataServiceOpsIotClassConfigVo = {
  id?: number;
  /** 对象类编码 */
  code?: string;
  /** 对象类名称 */
  codeName?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 特殊实例规则 */
  instanceRules?: RiskDataServiceOpsIotInstanceVo[];
  /** 问题等级 */
  issueLevel?: RiskDataServiceIssueLevelVo22;
};

/**
 * OpenAPI 组件类型：OpsIotClassInfoPointConfigVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OpsIotClassInfoPointConfigVo
 */
export type RiskDataServiceOpsIotClassInfoPointConfigVo = {
  id?: number;
  /** 对象类编码 */
  code?: string;
  /** 对象类名称 */
  codeName?: string;
  /** 对象类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 特殊实例规则 */
  instanceRules?: RiskDataServiceOpsIotInstanceVo[];
  /** 问题等级 */
  issueLevel?: RiskDataServiceIssueLevelVo22;
  /** 信息点 */
  rwdInfoList?: RiskDataServiceRwdInfoVo[];
};

/**
 * OpenAPI 组件类型：ObjectTreeVoRwdInfoVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeVoRwdInfoVo
 */
export type RiskDataServiceObjectTreeVoRwdInfoVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassTreeNodeEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServiceRwdInfoVo[];
};

/**
 * OpenAPI 组件类型：OpsIotConfigFilterVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OpsIotConfigFilterVo
 */
export type RiskDataServiceOpsIotConfigFilterVo = {
  /** 对象类树 */
  classTree?: RiskDataServiceObjectTreeBaseVoMajorObjectClassTreeNodeEnum;
  /** iot点位树 */
  infoPointTree?: RiskDataServiceObjectTreeVoRwdInfoVo;
};

/**
 * OpenAPI 组件类型：OpsIotConfigVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/OpsIotConfigVo
 */
export type RiskDataServiceOpsIotConfigVo = {
  /** 全局配置 */
  globalConfig?: RiskDataServiceOpsIotGlobalConfigVo;
  /** 实例离线规则 */
  instanceRules?: RiskDataServiceOpsIotClassConfigVo[];
  /** 信息点离线规则 */
  infoPointRules?: RiskDataServiceOpsIotClassInfoPointConfigVo[];
};

/**
 * OpenAPI 组件类型：InstanceFilterQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InstanceFilterQueryDto
 */
export type RiskDataServiceInstanceFilterQueryDto = {
  classCode: string;
  /** 空间功能类型 */
  roomFuncTypeCodeList?: string[];
};

/**
 * OpenAPI 组件类型：RwdInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdInfo
 */
export type RiskDataServiceRwdInfo = {
  key?: RiskDataServiceKey;
};

/**
 * OpenAPI 组件类型：ObjectClassContainerVoRwdInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectClassContainerVoRwdInfo
 */
export type RiskDataServiceObjectClassContainerVoRwdInfo = {
  classCode?: string;
  className?: string;
  data?: RiskDataServiceRwdInfo[];
};

/**
 * OpenAPI 组件类型：InfoPointQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/InfoPointQueryDto
 */
export type RiskDataServiceInfoPointQueryDto = {
  /** 对象类编码 */
  classCodes: string[];
};

/**
 * OpenAPI 组件类型：IssueLevelConfigVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IssueLevelConfigVo
 */
export type RiskDataServiceIssueLevelConfigVo = {
  /** 问题等级 */
  level?: RiskDataServiceEnumStruct;
  /** 问题等级-别名 */
  alias?: string;
  /** 是否被引用(如果被引用则不能删除) */
  inUse?: boolean;
};

/**
 * OpenAPI 组件类型：AlertConfigGlobalLevelDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertConfigGlobalLevelDto
 */
export type RiskDataServiceAlertConfigGlobalLevelDto = {
  /** 数据类型 */
  dataType: "CLASS" | "INFO";
  /** 开关 */
  enable?: boolean;
  /** 等级 */
  level?: "HIGH" | "MID" | "LOW";
};

/**
 * OpenAPI 组件类型：RwdObjectPageQuery
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RwdObjectPageQuery
 */
export type RiskDataServiceRwdObjectPageQuery = {
  /** 当前页 */
  current?: number;
  /** 每页条数 */
  size?: number;
  /** 对象类编码 */
  classCode?: string;
  /** 空间功能类型 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 对象名称关键词 */
  localNameKeyword?: string;
  /** 建筑id */
  buildingIdList?: string[];
  /** 楼层id */
  floorIdList?: string[];
  /** 空间功能类型列表 */
  roomFuncTypeCodeList?: string[];
  /** 所在空间id */
  inSpaceIds?: string[];
  /** 交付专业 */
  majorCodes?: string[];
};

/**
 * OpenAPI 组件类型：AlertConfigGlobalDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertConfigGlobalDto
 */
export type RiskDataServiceAlertConfigGlobalDto = {
  /** 数据类型 */
  dataType: "CLASS" | "INFO";
  /** 开关 */
  enable?: boolean;
  /** 等级 */
  level?: "HIGH" | "MID" | "LOW";
};

/**
 * OpenAPI 组件类型：AlertConfigInfoCodeDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/AlertConfigInfoCodeDto
 */
export type RiskDataServiceAlertConfigInfoCodeDto = {
  /** 数据id */
  id: number;
  /** 信息点code */
  infoCodes: string[];
};

/**
 * OpenAPI 组件类型：PjOpsiotConfigClassAndInfoDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjOpsiotConfigClassAndInfoDto
 */
export type RiskDataServicePjOpsiotConfigClassAndInfoDto = {
  /** 对象code，classCode或者roomFuncType */
  code: string;
  /** 信息点code
当创建点位时必填 */
  infoCodes?: string[];
};

/**
 * OpenAPI 组件类型：PjOpsiotConfigBatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjOpsiotConfigBatchUpdateDto
 */
export type RiskDataServicePjOpsiotConfigBatchUpdateDto = {
  /** 数据类型 */
  dataType: "CLASS" | "INFO";
  /** 勾选的数据id */
  ids: number[];
  /** 等级 */
  level?: "HIGH" | "MID" | "LOW";
  /** 信息点code
修改点位时传入 */
  classAndInfos?: RiskDataServicePjOpsiotConfigClassAndInfoDto[];
};

/**
 * OpenAPI 组件类型：PjOpsiotConfigClassAndInfoBatchDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjOpsiotConfigClassAndInfoBatchDto
 */
export type RiskDataServicePjOpsiotConfigClassAndInfoBatchDto = {
  /** 数据类型 */
  dataType: "CLASS" | "INFO";
  /** 等级 */
  level: "HIGH" | "MID" | "LOW";
  /** 对象类型 */
  objType: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 类和信息点配置 */
  classAndInfos: RiskDataServicePjOpsiotConfigClassAndInfoDto[];
};

/**
 * OpenAPI 组件类型：PjOpsiotConfigGlobalDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjOpsiotConfigGlobalDto
 */
export type RiskDataServicePjOpsiotConfigGlobalDto = {
  /** 开关
全局开关 */
  enable?: boolean;
  /** 数据类型 */
  dataType?: "CLASS" | "INFO";
  /** 等级 */
  level?: "HIGH" | "MID" | "LOW";
};

/**
 * OpenAPI 组件类型：PjOpsiotConfigInstanceDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjOpsiotConfigInstanceDto
 */
export type RiskDataServicePjOpsiotConfigInstanceDto = {
  /** 数据类型 */
  dataType: "CLASS" | "INFO";
  /** 类和信息点配置的id
新增时传入 */
  parentConfigId?: number;
  /** 等级 */
  level?: "HIGH" | "MID" | "LOW";
  /** 数据id
更新时传入 */
  id?: number;
  /** 选择的实例id */
  selectedInstanceIds?: string[];
  /** 前端暂时没有使用这个参数，由前端分页查询数据，做正向全选，但保留逻辑
是否选择所有 */
  chooseAll?: boolean;
  /** 前端暂时没有使用这个参数，由前端分页查询数据，做正向全选，但保留逻辑
需要排除的实例id（全选取消选中时传入） */
  excludeInstanceIds?: string[];
  /** 前端暂时没有使用这个参数，由前端分页查询数据，做正向全选，但保留逻辑
筛选条件 */
  qryDto?: RiskDataServiceRwdObjectPageQuery;
};

/**
 * OpenAPI 组件类型：FileInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/FileInfo
 */
export type RiskDataServiceFileInfo = {
  rccDataSource?: "A" | "B";
  lang?: string;
  dataVersionId?: string;
};

/**
 * OpenAPI 组件类型：IotAlertRuleDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleDto
 */
export type RiskDataServiceIotAlertRuleDto = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  isDeleted?: number;
  version?: number;
  /** 租户id */
  groupCode?: string;
  /** 项目名称 */
  projectId?: string;
  /** 规则名称 */
  name?: string;
  /** 风险点的classCode */
  classCode?: string;
  /** 风险点的对象类型
空间/楼层/建筑/项目归为其他设备设施 */
  objType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** klb措施ID */
  klbMeasureId?: number;
  /** 项目风险业务ID */
  pjRiskBusinessId?: string;
  /** IOT点位信息 */
  infoPoint?: RiskDataServiceIotInfoPointStruct[];
  /** 可用设备设施(红点)标记（编辑态才会赋值） */
  suitableInstanceNew?: boolean;
  /** 发布变更(红点)标记（编辑态才会赋值） */
  publishChanged?: boolean;
  /** 报警核实要求类型 */
  verifyType?: "NONE" | "APP" | "APP_WEB" | "WEB";
  /** 风险点的className */
  className?: string;
};

/**
 * OpenAPI 组件类型：IotAlertRuleGroupDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleGroupDto
 */
export type RiskDataServiceIotAlertRuleGroupDto = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  isDeleted?: number;
  version?: number;
  /** 租户id */
  groupCode?: string;
  /** 项目名称 */
  projectId?: string;
  /** iot报警规则ID */
  iotAlertRuleId?: number;
  /** 触发条件组 */
  triggerCondition?: RiskDataServiceTopConditionGroupStruct[];
  /** 解除条件组 */
  releaseCondition?: RiskDataServiceTopConditionGroupStruct[];
};

/**
 * OpenAPI 组件类型：IotAlertRiskVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRiskVo
 */
export type RiskDataServiceIotAlertRiskVo = {
  /** 风险点业务ID
用于匹配IotAlertRule */
  pjRiskBusinessId?: string;
  /** 风险点名称 */
  pjRiskName?: string;
  /** 是否有bdtp实例 */
  hasBdtpInstance?: boolean;
  /** 风险事件
范围：风险管理范围+正式服务范围，可能为空 */
  riskEvents?: RiskDataServiceIotRiskEventVo[];
};

/**
 * OpenAPI 组件类型：VersionInfo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/VersionInfo
 */
export type RiskDataServiceVersionInfo = {
  /** AB版本 */
  rccDataSource?: "A" | "B";
  /** 语言版本 */
  lang?: string;
  /** 最新的rcc知识版本id */
  dataVersionId?: string;
};

/**
 * OpenAPI 组件类型：IotAlertRuleGroup
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleGroup
 */
export type RiskDataServiceIotAlertRuleGroup = {
  id?: number;
  createBy?: string;
  createTime?: string;
  lastUpdateBy?: string;
  lastUpdateTime?: string;
  isDeleted?: number;
  version?: number;
  groupCode?: string;
  projectId?: string;
  /** iot报警规则ID */
  iotAlertRuleId?: number;
  /** 触发条件组 */
  triggerCondition?: RiskDataServiceTopConditionGroupStruct[];
  /** 解除条件组 */
  releaseCondition?: JsonValue;
  iotAlertRule?: JsonValue;
  instanceNum?: JsonValue;
  disableInstanceNum?: JsonValue;
  disableInstanceTop2?: JsonValue;
  iotAlertRuleInstances?: JsonValue;
  conditionUniqueKey?: JsonValue;
  key?: JsonValue;
  contexts?: JsonValue;
};

/**
 * OpenAPI 组件类型：StrategyItemTagStruct
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/StrategyItemTagStruct
 */
export type RiskDataServiceStrategyItemTagStruct = {
  /** 主键id */
  id?: number;
  /** 名称 */
  name?: string;
};

/**
 * OpenAPI 组件类型：ExeStrategyItemRelInstanceBatchUpdateDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExeStrategyItemRelInstanceBatchUpdateDto
 */
export type RiskDataServiceExeStrategyItemRelInstanceBatchUpdateDto = {
  /** 策略事项id集合 */
  strategyItemIds: number[];
  /** 适用对象实例id集合 */
  suitableInstanceIds: string[];
};

/**
 * OpenAPI 组件类型：IotAlertRuleInfoPointVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/IotAlertRuleInfoPointVo
 */
export type RiskDataServiceIotAlertRuleInfoPointVo = {
  /** 对象类编码 */
  classCode?: string;
  /** 信息点编码 */
  code?: string;
  /** 信息点名称 */
  name?: string;
  /** 信息点类型 */
  type?: "STATIC" | "TWIN" | "WORK_CALENDAR";
  /** 信息点唯一key */
  uk?: string;
};

/**
 * OpenAPI 组件类型：ObjectTreeVoIotAlertRuleInfoPointVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeVoIotAlertRuleInfoPointVo
 */
export type RiskDataServiceObjectTreeVoIotAlertRuleInfoPointVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassAndObjTypeTreeNodeEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServiceIotAlertRuleInfoPointVo[];
};

/**
 * OpenAPI 组件类型：KlbMetaEnumVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbMetaEnumVo
 */
export type RiskDataServiceKlbMetaEnumVo = {
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 拓展信息 */
  extValue?: string;
  /** 枚举集合 */
  enums?: RiskDataServiceKlbMetaEnumVo[];
};

/**
 * OpenAPI 组件类型：KlbMetaOptionVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbMetaOptionVo
 */
export type RiskDataServiceKlbMetaOptionVo = {
  /** 编码 */
  code?: string;
  /** 名称 */
  name?: string;
  /** 拓展信息 */
  extValue?: string;
  /** 枚举集合 */
  children?: RiskDataServiceKlbMetaOptionVo[];
};

/**
 * OpenAPI 组件类型：RiskEventImpactVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventImpactVo
 */
export type RiskDataServiceRiskEventImpactVo = {
  /** 影响id */
  id?: number;
  /** 影响描述 */
  description?: string;
  /** 损失影响 */
  lossType?: RiskDataServiceEnumStruct23;
};

/**
 * OpenAPI 组件类型：PjRiskEventScopeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/PjRiskEventScopeVo
 */
export type RiskDataServicePjRiskEventScopeVo = {
  /** 风险事件id */
  id?: number;
  /** 风险事件业务id */
  businessId?: number;
  /** 风险事件描述 */
  riskEventDescription?: string;
  /** 风险事件类型 */
  riskEventType?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE";
  /** 重要性 */
  importance?: "E0" | "E1" | "E2";
  /** 常见性 */
  ordinary?: "E0" | "E1" | "E2";
  /** 一级风控目标 */
  riskMeasureAimLevel1?: "E0" | "E1" | "E2" | "E3";
  /** 二级风控目标 */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44";
  /** 是否已加入管理 */
  joinedManage?: boolean;
  /** 风险事件顶节点相关数据
对象类code */
  classCode?: string;
  /** 对象类名称 */
  className?: string;
  /** BDTP对象类型 */
  objectType?: "PROJECT" | "BUILDING" | "FLOOR" | "EQUIPMENT" | "SPACE" | "SYSTEM" | "SHAFT" | "EQUIPMENT_GROUP" | "PARTITION";
  /** 实体类信息点 */
  entityObjectPois?: RiskDataServiceKlbEntityObjectPoi[];
  /** 专业code */
  majorCode?: string;
  /** 专业名称 */
  majorName?: string;
  /** 故障状态评级（报警响应类才有,可能为空） */
  faultStateLevel?: "HIGH" | "MID" | "LOW";
  /** 隐患状态评级（报警响应类才有,可能为空） */
  accidentStateLevel?: "HIGH" | "MID" | "LOW";
  /** 发布时间 */
  rccPublishTime?: string;
  /** rcc发布版本号 */
  versionCode?: string;
  /** BMS是否已经移除该风险事件 */
  bmsDeleted?: boolean;
  /** 刷新状态 */
  refreshStatus?: "RUNNING" | "PENDING" | "FAIL" | "SUCCESS";
  /** 对应对象类是否交付了实例（0401） */
  instanceMark?: boolean;
  /** 风险事件编码（0401） */
  klbRiskEventCode?: string;
  /** 数据版本id（0401） */
  dataVersionId?: number;
  /** 数据版本名称（0401） */
  dataVersionName?: string;
  /** 发布时间（0401） */
  releaseTime?: string;
  /** 是否有更新的知识（0401） */
  updateMark?: boolean;
  /** 新数据版本id（0401） */
  newDataVersionId?: number;
  /** 新数据版本名称（0401） */
  newDataVersionName?: string;
  /** 新发布时间（0401） */
  newReleaseTime?: string;
  /** 用户类型 */
  customerTypes?: RiskDataServiceEnumStruct[];
  /** 影响类型 */
  impactList?: RiskDataServiceRiskEventImpactVo[];
};

/**
 * OpenAPI 组件类型：ObjectTreeVoPjRiskEventScopeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ObjectTreeVoPjRiskEventScopeVo
 */
export type RiskDataServiceObjectTreeVoPjRiskEventScopeVo = {
  /** 节点唯一键 */
  uuid?: string;
  /** 节点类型 */
  type?: "MAJOR" | "OBJECT_TYPE" | "OBJECT_CLASS";
  /** 节点编码（父子级之间可能重复） */
  code?: string;
  /** 节点名称 */
  name?: string;
  /** 排序字段 */
  sortIdx?: string;
  /** 子集 */
  children?: RiskDataServiceObjectTreeBaseVoMajorObjectClassTreeNodeEnum[];
  /** 节点关联的业务数据 */
  data?: RiskDataServicePjRiskEventScopeVo[];
};

/**
 * OpenAPI 组件类型：KlbRiskEventTreeVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/KlbRiskEventTreeVo
 */
export type RiskDataServiceKlbRiskEventTreeVo = {
  id?: number;
  /** 业务id */
  businessId?: number;
  /** 名称 */
  name?: string;
  /** 风险事件类型 */
  riskEventType?: "GRADIENT" | "MUTANT" | "COMPLIANCE" | "ALARMRESPONSE";
  /** 风险属性 */
  riskAttribute?: "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11";
  /** 损失类型 */
  lossType?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5";
  /** 一级风控目标 */
  riskMeasureAimLevel1?: "E0" | "E1" | "E2" | "E3";
  /** 二级风控目标 */
  riskMeasureAimLevel2?: "E0" | "E1" | "E2" | "E3" | "E4" | "E5" | "E6" | "E7" | "E8" | "E9" | "E10" | "E11" | "E12" | "E13" | "E14" | "E15" | "E16" | "E17" | "E18" | "E19" | "E20" | "E21" | "E22" | "E23" | "E24" | "E25" | "E26" | "E27" | "E28" | "E29" | "E30" | "E31" | "E32" | "E33" | "E34" | "E35" | "E36" | "E37" | "E38" | "E39" | "E40" | "E41" | "E42" | "E43" | "E44";
  /** 重要性 */
  importance?: "E0" | "E1" | "E2";
  /** 常见性 */
  ordinary?: "E0" | "E1" | "E2";
  /** 顶节点 */
  rootTreeNode?: RiskDataServiceKlbTreeNodeVo;
};

/**
 * OpenAPI 组件类型：EnumStruct23
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/EnumStruct23
 */
export type RiskDataServiceEnumStruct23 = {
  code?: string;
  name?: string;
};

/**
 * OpenAPI 组件类型：RiskEventImpactConfig
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/RiskEventImpactConfig
 */
export type RiskDataServiceRiskEventImpactConfig = {
  /** 配置id */
  id: number;
  /** 损失类型id */
  lossTypeId: number;
};

/**
 * OpenAPI 组件类型：ExePlanExportVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanExportVo
 */
export type RiskDataServiceExePlanExportVo = {
  /** id */
  id?: number;
  /** 名称 */
  name?: string;
  /** 类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
  /** 流程方案id */
  processId?: string;
  /** 生效开始时间 */
  beginTime?: string;
  /** 生效结束时间 */
  endTime?: string;
  /** 打卡方式 */
  punchingModelType?: "NONE" | "PHOTOGRAPH" | "SCAN" | "NFC";
  /** 打卡对象 */
  punchingModelObject?: "SPACE" | "OBJECT";
  /** 对象打卡方式 */
  punchingModes?: RiskDataServicePunchingMode[];
  /** 全局时间配置 */
  globalTimeSetting?: RiskDataServiceGlobalTimeSetting;
  /** 计划状态 */
  status?: "DISABLE" | "ENABLE";
  /** 创建时间 */
  createTime?: string;
  /** 修改时间 */
  updateTime?: string;
  groupCode?: string;
  projectId?: string;
};

/**
 * OpenAPI 组件类型：ExportPlanQueryDto
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExportPlanQueryDto
 */
export type RiskDataServiceExportPlanQueryDto = {
  /** 流程方案id（不传不作为参数） */
  planIds?: number[];
  /** 类型 */
  type?: "ROUTING_INSPECTION" | "MAINTENANCE";
};

/**
 * OpenAPI 组件类型：ExePlanStrategyExportVo
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/ExePlanStrategyExportVo
 */
export type RiskDataServiceExePlanStrategyExportVo = {
  /** id */
  id?: number;
  /** 计划id */
  planId?: number;
  /** 策略事项id */
  strategyItemId?: number;
  /** 策略名称 */
  name?: string;
  /** 对象类编码 */
  objectCode?: string;
  /** 对象类类型 */
  objType?: string;
  /** 对象类名称 */
  objectName?: string;
  /** 前观措施id */
  beforeMeasureId?: number;
  /** 维修/更换措施id */
  executeMeasureId?: number;
  /** 后观措施id */
  afterMeasureId?: number;
  /** 标签id */
  tagId?: number;
  /** 频次类型 */
  periodType?: "EACH_DAY" | "EACH_WEEK" | "EACH_MONTH" | "EACH_QUARTER" | "EACH_HALF_OF_YEAR" | "EACH_YEAR" | "EACH_TOW_TEAR" | "EACH_THREE_YEAR" | "EACH_FIVE_YEAR" | "EACH_TEN_YEAR" | "EACH_HOUR";
  /** 频次次数,  多少次 */
  periodCount?: number;
  /** 频次数量 例如:多少天 */
  periodTimes?: number;
  /** 关联对象实例id */
  objectIds?: string[];
};

/**
 * OpenAPI 缺失组件的兜底类型：1
 *
 * 来源：docs/product-apis/risk-data-service/openapi.json#/components/schemas/1
 */
export type RiskDataService1 = JsonValue;

/**
 * RiskDataServiceYihengFacilityOpsServerEeProblemThirdPartQueryBySourceIdsQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerEeProblemThirdPartQueryBySourceIdsQuery = {
  /** sourceIds */
  sourceIds?: string[];
};

/**
 * RiskDataServiceYihengFacilityOpsServerExceptionEventBaseInfoQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventBaseInfoQuery = {
  /** 异常事件编码(实际应当传入异常事件id) */
  exceptionEventCode: string;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExceptionEventBaseInfoGETQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventBaseInfoGETQuery = {
  /** 异常事件编码(实际应当传入异常事件id) */
  exceptionEventCode: string;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdDetailQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdDetailQuery = {
  /** 风险实例ID */
  pjRiskInstanceBusinessId: string;
  /** 异常事件Id */
  exceptionEventId: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdListQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdListQuery = {
  /** 异常事件id */
  exceptionEventId: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdPageEvaluateRecordQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdPageEvaluateRecordQuery = {
  /** 风险实例ID */
  pjRiskInstanceBusinessId: string;
  /** 异常事件Id */
  exceptionEventId: number;
  /** 跳过记录数量 */
  skipCount?: number;
  /** 加载条数 */
  size: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdQueryCamerasQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdQueryCamerasQuery = {
  /** 问题ID */
  problemId: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExceptionEventProblemIotQueryReportDataByIdQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemIotQueryReportDataByIdQuery = {
  /** iot上报记录ID IOT上报记录ID */
  iotRecordId: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExePlanDetailQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExePlanDetailQuery = {
  /** 计划id */
  id: number;
  /** 是否排除掉对称事项 */
  excludeSymmetricItem?: boolean;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryDetailQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryDetailQuery = {
  /** id */
  id: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryNameExistsQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryNameExistsQuery = {
  /** 类型 ROUTING_INSPECTION :ROUTING_INSPECTION
MAINTENANCE :MAINTENANCE */
  type: string;
  /** 父级策略分类id */
  parentStrategyCategoryId?: number;
  /** 当前策略分类id */
  currentStrategyCategoryId?: number;
  /** 当前策略分类名称 */
  currentStrategyCategoryName: string;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExeStrategyItemClassCodePoiQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemClassCodePoiQuery = {
  /** suitableClassId */
  suitableClassId: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExeStrategyItemDeleteQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemDeleteQuery = {
  /** 策略事项id */
  strategyItemId: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerExeStrategyItemPublishObserveObjectQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemPublishObserveObjectQuery = {
  /** strategyItemId */
  strategyItemId?: number;
  /** 注意：该实例集合可能包含策略事项关联的实例(ZX00已发布)之外的其他设备实例 */
  rwdInstanceIds?: string;
};

/**
 * RiskDataServiceYihengFacilityOpsServerIotAlertRuleThirdPartQueryByInstanceIdQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerIotAlertRuleThirdPartQueryByInstanceIdQuery = {
  /** 设备实例ID */
  rwdInstanceId: string;
};

/**
 * RiskDataServiceYihengFacilityOpsServerPjDealMajorDetailQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerPjDealMajorDetailQuery = {
  /** 处理专业id */
  id?: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerPjRiskCreateQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskCreateQuery = {
  /** 风险名称 */
  riskDescription: string;
  /** classCode */
  classCode: string;
  /** meoi空间类型编码 */
  meoiSpaceTypeCode?: string;
  /** 业务类别 */
  pjRiskBusinessCategoryIds?: string;
  /** uniqueKey */
  uniqueKey?: string;
};

/**
 * RiskDataServiceYihengFacilityOpsServerPjRiskEventListInstanceFiltersQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskEventListInstanceFiltersQuery = {
  /** 风险ID */
  riskBusinessId: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerPjRiskEventTreeQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskEventTreeQuery = {
  /** riskEventBusinessId */
  riskEventBusinessId?: number;
};

/**
 * RiskDataServiceYihengFacilityOpsServerPjRiskInstanceCriteriaQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskInstanceCriteriaQuery = {
  /** riskBusinessId */
  riskBusinessId?: string;
};

/**
 * RiskDataServiceYihengFacilityOpsServerPjRiskListInstanceFiltersQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskListInstanceFiltersQuery = {
  /** 风险ID */
  riskBusinessId: string;
};

/**
 * RiskDataServiceYihengFacilityOpsServerPjRiskRoomFuncTypeQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskRoomFuncTypeQuery = {
  /** riskBusinessId */
  riskBusinessId?: string;
};

/**
 * RiskDataServiceYihengFacilityOpsServerRiskMapInstanceTreeGetQuery 查询参数。
 */
export type RiskDataServiceYihengFacilityOpsServerRiskMapInstanceTreeGetQuery = {
  /** 实例树id */
  instanceTreeId: number;
};

/**
 * POST /yiheng-facility-ops-server/cold/problem/third-part/page 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerColdProblemThirdPartPageBody = RiskDataServiceEEProblemThirdPageDto;

/**
 * POST /yiheng-facility-ops-server/ee/obj-instance/problem/abnormal-instance/list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemAbnormalInstanceListBody = RiskDataServiceEEObjInstanceProblemQryDto;

/**
 * POST /yiheng-facility-ops-server/ee/obj-instance/problem/count-by-date 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemCountByDateBody = RiskDataServiceEEObjInstanceProblemStatisticsMajorQryDto;

/**
 * POST /yiheng-facility-ops-server/ee/obj-instance/problem/detail 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemDetailBody = RiskDataServiceEEObjInstanceProblemStatisticsDetailQryDto;

/**
 * POST /yiheng-facility-ops-server/ee/obj-instance/problem/detail-third 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemDetailThirdBody = RiskDataServiceEEProblemInstanceQryDto[];

/**
 * POST /yiheng-facility-ops-server/ee/obj-instance/problem/problem-category/list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemProblemCategoryListBody = RiskDataServiceEEObjInstanceProblemQryDto;

/**
 * POST /yiheng-facility-ops-server/ee/obj-instance/problem/simple-detail-third 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemSimpleDetailThirdBody = number[];

/**
 * POST /yiheng-facility-ops-server/ee/obj-instance/problem/static-third 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemStaticThirdBody = RiskDataServiceEEProblemInstanceQryDto[];

/**
 * POST /yiheng-facility-ops-server/ee/obj-instance/problem/statistics-list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemStatisticsListBody = RiskDataServiceEEObjInstanceProblemStatisticsQryDto;

/**
 * POST /yiheng-facility-ops-server/ee/problem/third-part/page 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeProblemThirdPartPageBody = RiskDataServiceEEProblemQueryDto;

/**
 * POST /yiheng-facility-ops-server/ee/problem/third-part/query-binding-cameras 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeProblemThirdPartQueryBindingCamerasBody = number[];

/**
 * POST /yiheng-facility-ops-server/ee/risk-event/count-by-date 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeRiskEventCountByDateBody = RiskDataServiceEEStatisticsMajorQryDto;

/**
 * POST /yiheng-facility-ops-server/ee/risk-event/count-statics 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeRiskEventCountStaticsBody = RiskDataServiceEERiskEventStaticsQryDto;

/**
 * POST /yiheng-facility-ops-server/ee/risk-event/detail 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeRiskEventDetailBody = RiskDataServiceEEStatisticsRiskEventQryDto;

/**
 * POST /yiheng-facility-ops-server/ee/risk-event/exception-event-list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeRiskEventExceptionEventListBody = RiskDataServiceEEStatisticsRiskEventQryDto;

/**
 * POST /yiheng-facility-ops-server/ee/risk-event/statistics-list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerEeRiskEventStatisticsListBody = RiskDataServiceEEStatisticsQryDto;

/**
 * POST /yiheng-facility-ops-server/exception/event/list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventListBody = RiskDataServiceEEListQueryDto;

/**
 * GET /yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdIotMonitoringBody = RiskDataServiceIotMonitoringQryDto;

/**
 * GET /yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring-by-instance 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdIotMonitoringByInstanceBody = RiskDataServiceIotMonitoringQryDto;

/**
 * POST /yiheng-facility-ops-server/exception-event/problem/cold/page-third 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdPageThirdBody = RiskDataServiceEEProblemStaticQryDto;

/**
 * POST /yiheng-facility-ops-server/exception-event/problem/cold/remove/record 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdRemoveRecordBody = number[];

/**
 * POST /yiheng-facility-ops-server/exception-event/problem/cold/statistics/download 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdStatisticsDownloadBody = RiskDataServiceEEProblemExportQryDto;

/**
 * POST /yiheng-facility-ops-server/exception-event/statics 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventStaticsBody = RiskDataServiceThirdPartExceptionEventQryDto;

/**
 * POST /yiheng-facility-ops-server/exception/event/statics 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventStaticsPOSTBody = RiskDataServiceThirdPartExceptionEventQryDto;

/**
 * POST /yiheng-facility-ops-server/exception-event/third-part/date-statics 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventThirdPartDateStaticsBody = RiskDataServiceEEEventStatisticsQryDto;

/**
 * POST /yiheng-facility-ops-server/exception-event/third-part/page 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventThirdPartPageBody = RiskDataServiceEEListQueryDto;

/**
 * POST /yiheng-facility-ops-server/exception-event/third-part/query-exception-record-source-ids 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExceptionEventThirdPartQueryExceptionRecordSourceIdsBody = RiskDataServiceEERecordSourceIdsQryDto;

/**
 * POST /yiheng-facility-ops-server/exe-plan/export/list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExePlanExportListBody = RiskDataServiceExportPlanQueryDto;

/**
 * POST /yiheng-facility-ops-server/exe-plan/export/strategy/list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExePlanExportStrategyListBody = RiskDataServiceExportPlanQueryDto;

/**
 * POST /yiheng-facility-ops-server/exe-plan/monitor/view-statistic 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExePlanMonitorViewStatisticBody = RiskDataServiceMonitorViewQueryDto;

/**
 * POST /yiheng-facility-ops-server/exe-plan/third/list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExePlanThirdListBody = RiskDataServiceThirdPlanQueryDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-category/batch-delete 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryBatchDeleteBody = number[];

/**
 * POST /yiheng-facility-ops-server/exe/strategy-category/copy 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryCopyBody = RiskDataServiceExeStrategyCategoryCopyDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-category/exec-step-mark/update 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryExecStepMarkUpdateBody = RiskDataServiceExeStrategyCategoryExecStepUpdateDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-category/independence-mark/update 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryIndependenceMarkUpdateBody = RiskDataServiceExeStrategyCategoryIndependenceUpdateDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-category/save 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyCategorySaveBody = RiskDataServiceExeStrategyCategorySaveDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/batch-add 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemBatchAddBody = RiskDataServiceExeStrategyItemInsertDto[];

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/batch-update 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemBatchUpdateBody = RiskDataServiceExeStrategyItemBatchUpdateDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/copy 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemCopyBody = RiskDataServiceStrategyItemCopyStruct;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/optional-measures/list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemOptionalMeasuresListBody = RiskDataServiceExeStrategyItemOptionalMeasureQryDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/publish 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemPublishBody = RiskDataServiceExeStrategyItemPublishDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/publish/simple-list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemPublishSimpleListBody = RiskDataServiceExeStrategyItemQueryDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/rel-object/page 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemRelObjectPageBody = RiskDataServiceExeStrategyItemObjectRelPageQueryDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/rel-object/save 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemRelObjectSaveBody = RiskDataServiceExeStrategyItemRelObjectSaveDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/suitable-instance/page 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemSuitableInstancePageBody = RiskDataServiceExeStrategyItemInstancePageQueryDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/suitable-object-class/instance-rel/batch-update 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemSuitableObjectClassInstanceRelBatchUpdateBody = RiskDataServiceExeSuitableInstanceRelBatchUpdateDto;

/**
 * POST /yiheng-facility-ops-server/exe/strategy-item/update 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerExeStrategyItemUpdateBody = RiskDataServiceExeStrategyItemUpdateDto;

/**
 * GET /yiheng-facility-ops-server/iot/alert/rule/third-part/query-by-instance-id 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerIotAlertRuleThirdPartQueryByInstanceIdBody = RiskDataServiceIotAlertRulePointQryDto[];

/**
 * POST /yiheng-facility-ops-server/iot/alert/rule/third-part/query-detail 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerIotAlertRuleThirdPartQueryDetailBody = RiskDataServiceIotAlertRuleDetailQryDto;

/**
 * POST /yiheng-facility-ops-server/open-api/iot-rule/list-by-instance-and-measure 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerOpenApiIotRuleListByInstanceAndMeasureBody = RiskDataServiceIotRuleQryDto;

/**
 * POST /yiheng-facility-ops-server/open-api/klb/klb-risk/list-by-risk-event-business-ids 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerOpenApiKlbKlbRiskListByRiskEventBusinessIdsBody = RiskDataServiceKlbRiskQryDto;

/**
 * POST /yiheng-facility-ops-server/open-api/pj-deal-major/list-by-other-object-and-klb-measure 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerOpenApiPjDealMajorListByOtherObjectAndKlbMeasureBody = RiskDataServicePjDealMajorThirdPartyQryByOtherObjectKlbMeasureDto[];

/**
 * POST /yiheng-facility-ops-server/open-api/pj-deal-major/match-by-major-class-code 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerOpenApiPjDealMajorMatchByMajorClassCodeBody = RiskDataServiceMajorClassDto;

/**
 * POST /yiheng-facility-ops-server/open-api/rwd-instance-tree/list 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerOpenApiRwdInstanceTreeListBody = RiskDataServiceRwdInstanceTreeThirdPartyQryDto;

/**
 * POST /yiheng-facility-ops-server/open-api/suggest/fmea-suggest 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerOpenApiSuggestFmeaSuggestBody = string[];

/**
 * POST /yiheng-facility-ops-server/pj/deal-major/delete 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjDealMajorDeleteBody = number[];

/**
 * POST /yiheng-facility-ops-server/pj/deal-major/save 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjDealMajorSaveBody = RiskDataServicePjDealMajorSaveDto;

/**
 * POST /yiheng-facility-ops-server/pj/deal-major/save-category 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjDealMajorSaveCategoryBody = RiskDataServicePjDealMajorSaveCategoryDto[];

/**
 * POST /yiheng-facility-ops-server/pj/deal-major/sort 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjDealMajorSortBody = RiskDataServicePjDealMajorSortDto[];

/**
 * POST /yiheng-facility-ops-server/pj/deal-major/valid 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjDealMajorValidBody = RiskDataServicePjDealMajorSaveDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk/batch-clear 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskBatchClearBody = RiskDataServicePjRiskBatchClearDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk/batch-update 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskBatchUpdateBody = RiskDataServicePjRiskBatchUpdateDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk-event/batch-clear 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskEventBatchClearBody = RiskDataServiceBatchClearDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk-event/batch-update 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskEventBatchUpdateBody = RiskDataServiceBatchUpdateDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk-event/instance/page 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskEventInstancePageBody = RiskDataServicePjRiskEventInstanceQueryDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk-event/update 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskEventUpdateBody = RiskDataServicePjRiskEventUpdateDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk-event/update-follow 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskEventUpdateFollowBody = RiskDataServiceUpdateFollowDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk-impact-category/save 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskImpactCategorySaveBody = RiskDataServicePjRiskImpactCategorySaveDto[];

/**
 * POST /yiheng-facility-ops-server/pj/risk/instance/page 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskInstancePageBody = RiskDataServicePjRiskInstanceQueryDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk/list-by-ids 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskListByIdsBody = RiskDataServicePjRiskIdQuery;

/**
 * POST /yiheng-facility-ops-server/pj/risk/list-fault-effect-risk 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskListFaultEffectRiskBody = RiskDataServiceFaultEffectPjRiskDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk/page 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskPageBody = RiskDataServicePjRiskQueryStruct;

/**
 * POST /yiheng-facility-ops-server/pj/risk/simple-page-third 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskSimplePageThirdBody = RiskDataServicePjRiskPageSimpleDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk/update 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskUpdateBody = RiskDataServicePjRiskUpdateDto;

/**
 * POST /yiheng-facility-ops-server/pj/risk/update-fault-effect-risk 的请求体。
 */
export type RiskDataServiceYihengFacilityOpsServerPjRiskUpdateFaultEffectRiskBody = RiskDataServiceFaultEffectPjRiskDto;

/**
 * docs/product-apis/risk-data-service 对应的请求对象类型。
 */
export type RiskDataServiceApi = ReturnType<typeof createRiskDataServiceApi>;

/**
 * 创建 risk-data-service 请求对象，所有方法都会复用统一网关配置和鉴权请求头。
 */
export function createRiskDataServiceApi(config: GatewayConfig) {
  return {
  /**
   * 接口说明：(二开)资产问题明细
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/cold/problem/third-part/page
   */
  yihengFacilityOpsServerColdProblemThirdPartPage<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerColdProblemThirdPartPageBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/cold/problem/third-part/page",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【资产问题统计】异常资产列表查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/obj-instance/problem/abnormal-instance/list
   */
  yihengFacilityOpsServerEeObjInstanceProblemAbnormalInstanceList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemAbnormalInstanceListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/obj-instance/problem/abnormal-instance/list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【资产问题统计】发生次数按时间分布
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/obj-instance/problem/count-by-date
   */
  yihengFacilityOpsServerEeObjInstanceProblemCountByDate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemCountByDateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/obj-instance/problem/count-by-date",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【资产问题统计】资产问题原因分析
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/obj-instance/problem/detail
   */
  yihengFacilityOpsServerEeObjInstanceProblemDetail<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemDetailBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/obj-instance/problem/detail",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】资产问题详情统计（价值组用）
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/obj-instance/problem/detail-third
   */
  yihengFacilityOpsServerEeObjInstanceProblemDetailThird<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemDetailThirdBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/obj-instance/problem/detail-third",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【资产问题统计】已交付实例专业对象树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/ee/obj-instance/problem/major-object-tree
   */
  yihengFacilityOpsServerEeObjInstanceProblemMajorObjectTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/obj-instance/problem/major-object-tree",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【资产问题统计】问题类列表查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/obj-instance/problem/problem-category/list
   */
  yihengFacilityOpsServerEeObjInstanceProblemProblemCategoryList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemProblemCategoryListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/obj-instance/problem/problem-category/list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】资产问题摘要（价值组用侧弹窗）
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/obj-instance/problem/simple-detail-third
   */
  yihengFacilityOpsServerEeObjInstanceProblemSimpleDetailThird<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemSimpleDetailThirdBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/obj-instance/problem/simple-detail-third",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】资产问题简单统计（价值组用）
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/obj-instance/problem/static-third
   */
  yihengFacilityOpsServerEeObjInstanceProblemStaticThird<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemStaticThirdBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/obj-instance/problem/static-third",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【资产问题统计】列表查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/obj-instance/problem/statistics-list
   */
  yihengFacilityOpsServerEeObjInstanceProblemStatisticsList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeObjInstanceProblemStatisticsListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/obj-instance/problem/statistics-list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询所有问题
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/problem/third-part/page
   */
  yihengFacilityOpsServerEeProblemThirdPartPage<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeProblemThirdPartPageBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/problem/third-part/page",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】根据问题查询绑定的摄像头ID
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/problem/third-part/query-binding-cameras
   */
  yihengFacilityOpsServerEeProblemThirdPartQueryBindingCameras<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeProblemThirdPartQueryBindingCamerasBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/problem/third-part/query-binding-cameras",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据sourceId查询对应的问题
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/problem/third-part/query-by-source-ids
   */
  yihengFacilityOpsServerEeProblemThirdPartQueryBySourceIds<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerEeProblemThirdPartQueryBySourceIdsQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/problem/third-part/query-by-source-ids",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【风险事件统计】发生次数按时间分布
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/risk-event/count-by-date
   */
  yihengFacilityOpsServerEeRiskEventCountByDate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeRiskEventCountByDateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/risk-event/count-by-date",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询异常实例
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/risk-event/count-statics
   */
  yihengFacilityOpsServerEeRiskEventCountStatics<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeRiskEventCountStaticsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/risk-event/count-statics",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【风险事件统计】详情页面
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/risk-event/detail
   */
  yihengFacilityOpsServerEeRiskEventDetail<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeRiskEventDetailBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/risk-event/detail",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【风险事件统计】异常事件信息
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/risk-event/exception-event-list
   */
  yihengFacilityOpsServerEeRiskEventExceptionEventList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeRiskEventExceptionEventListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/risk-event/exception-event-list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【风险事件统计】列表查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/ee/risk-event/statistics-list
   */
  yihengFacilityOpsServerEeRiskEventStatisticsList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerEeRiskEventStatisticsListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/ee/risk-event/statistics-list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常事件-权限】异常事件详情基本信息
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception-event/baseInfo
   */
  yihengFacilityOpsServerExceptionEventBaseInfo<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExceptionEventBaseInfoQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/baseInfo",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常事件】异常事件详情基本信息
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception/event/baseInfo
   */
  yihengFacilityOpsServerExceptionEventBaseInfoGET<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExceptionEventBaseInfoGETQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception/event/baseInfo",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常事件】异常事件列表
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception/event/list
   */
  yihengFacilityOpsServerExceptionEventList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception/event/list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】问题详情查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception-event/problem/cold/detail
   */
  yihengFacilityOpsServerExceptionEventProblemColdDetail<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdDetailQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/detail",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【评估记录】查找不在问题下的评估记录
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception-event/problem/cold/find-can-remove-record
   */
  yihengFacilityOpsServerExceptionEventProblemColdFindCanRemoveRecord<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/find-can-remove-record",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】问题详情IOT实时监控
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring
   */
  yihengFacilityOpsServerExceptionEventProblemColdIotMonitoring<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdIotMonitoringBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring",
      method: "GET",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】对象IOT实时监控
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring-by-instance
   */
  yihengFacilityOpsServerExceptionEventProblemColdIotMonitoringByInstance<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdIotMonitoringByInstanceBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring-by-instance",
      method: "GET",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常事件】异常事件详情-问题列表
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception-event/problem/cold/list
   */
  yihengFacilityOpsServerExceptionEventProblemColdList<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdListQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/list",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】评估记录列表
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception-event/problem/cold/page-evaluate-record
   */
  yihengFacilityOpsServerExceptionEventProblemColdPageEvaluateRecord<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdPageEvaluateRecordQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/page-evaluate-record",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】资产问题统计列表（能源与碳组用）
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception-event/problem/cold/page-third
   */
  yihengFacilityOpsServerExceptionEventProblemColdPageThird<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdPageThirdBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/page-third",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】查询问题设备监控摄像头
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception-event/problem/cold/query-cameras
   */
  yihengFacilityOpsServerExceptionEventProblemColdQueryCameras<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdQueryCamerasQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/query-cameras",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】资产问题统计数据导出
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception-event/problem/cold/remove/record
   */
  yihengFacilityOpsServerExceptionEventProblemColdRemoveRecord<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdRemoveRecordBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/remove/record",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】资产问题统计数据导出
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception-event/problem/cold/statistics/download
   */
  yihengFacilityOpsServerExceptionEventProblemColdStatisticsDownload<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemColdStatisticsDownloadBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/cold/statistics/download",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【IOT报警】IOT报警信息查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception-event/problem/iot/query-report-data-by-id
   */
  yihengFacilityOpsServerExceptionEventProblemIotQueryReportDataById<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExceptionEventProblemIotQueryReportDataByIdQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/problem/iot/query-report-data-by-id",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常事件-权限】统计
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception-event/statics
   */
  yihengFacilityOpsServerExceptionEventStatics<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventStaticsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/statics",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常事件】统计
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception/event/statics
   */
  yihengFacilityOpsServerExceptionEventStaticsPOST<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventStaticsPOSTBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception/event/statics",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常事件】异常事件按天统计数量（冷数据）
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception-event/third-part/date-statics
   */
  yihengFacilityOpsServerExceptionEventThirdPartDateStatics<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventThirdPartDateStaticsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/third-part/date-statics",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常事件】异常事件列表（热数据）
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception-event/third-part/page
   */
  yihengFacilityOpsServerExceptionEventThirdPartPage<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventThirdPartPageBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/third-part/page",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据异常事件查询关联的始发巡检维保recordSourceId（冷数据）
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exception-event/third-part/query-exception-record-source-ids
   */
  yihengFacilityOpsServerExceptionEventThirdPartQueryExceptionRecordSourceIds<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExceptionEventThirdPartQueryExceptionRecordSourceIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/third-part/query-exception-record-source-ids",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常事件】风险按实例和风险事件统计（热数据）
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exception-event/third-part/risk-instance-statics
   */
  yihengFacilityOpsServerExceptionEventThirdPartRiskInstanceStatics<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exception-event/third-part/risk-instance-statics",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【执行计划】计划详情
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe-plan/detail
   */
  yihengFacilityOpsServerExePlanDetail<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExePlanDetailQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe-plan/detail",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【执行计划】计划导出列表查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe-plan/export/list
   */
  yihengFacilityOpsServerExePlanExportList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExePlanExportListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe-plan/export/list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【执行计划】计划关联策略导出列表查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe-plan/export/strategy/list
   */
  yihengFacilityOpsServerExePlanExportStrategyList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExePlanExportStrategyListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe-plan/export/strategy/list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【计划监控】视图统计
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe-plan/monitor/view-statistic
   */
  yihengFacilityOpsServerExePlanMonitorViewStatistic<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExePlanMonitorViewStatisticBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe-plan/monitor/view-statistic",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【执行计划】第三方计划列表查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe-plan/third/list
   */
  yihengFacilityOpsServerExePlanThirdList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExePlanThirdListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe-plan/third/list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略分类】批量删除策略分类
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-category/batch-delete
   */
  yihengFacilityOpsServerExeStrategyCategoryBatchDelete<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryBatchDeleteBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-category/batch-delete",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]拷贝策略分类
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-category/copy
   */
  yihengFacilityOpsServerExeStrategyCategoryCopy<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryCopyBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-category/copy",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略分类]策略分类详情
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-category/detail
   */
  yihengFacilityOpsServerExeStrategyCategoryDetail<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryDetailQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-category/detail",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略分类】开启/关闭按顺序执行
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-category/exec-step-mark/update
   */
  yihengFacilityOpsServerExeStrategyCategoryExecStepMarkUpdate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryExecStepMarkUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-category/exec-step-mark/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略分类】设置/取消独立标记
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-category/independence-mark/update
   */
  yihengFacilityOpsServerExeStrategyCategoryIndependenceMarkUpdate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryIndependenceMarkUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-category/independence-mark/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略分类】名称重复校验
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-category/name-exists
   */
  yihengFacilityOpsServerExeStrategyCategoryNameExists<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExeStrategyCategoryNameExistsQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-category/name-exists",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略分类】新增或编辑策略分类
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-category/save
   */
  yihengFacilityOpsServerExeStrategyCategorySave<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyCategorySaveBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-category/save",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]批量新增策略事项
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/batch-add
   */
  yihengFacilityOpsServerExeStrategyItemBatchAdd<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemBatchAddBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/batch-add",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]批量修改策略事项
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/batch-update
   */
  yihengFacilityOpsServerExeStrategyItemBatchUpdate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemBatchUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/batch-update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]对象类信息点
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/class-code-poi
   */
  yihengFacilityOpsServerExeStrategyItemClassCodePoi<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExeStrategyItemClassCodePoiQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/class-code-poi",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]拷贝策略事项
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/copy
   */
  yihengFacilityOpsServerExeStrategyItemCopy<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemCopyBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/copy",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]删除策略事项
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/delete
   */
  yihengFacilityOpsServerExeStrategyItemDelete<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExeStrategyItemDeleteQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/delete",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]查询策略事项详情
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/detail/{id}
   */
  yihengFacilityOpsServerExeStrategyItemDetailEmptyObjectIdEmptyObject<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/detail/{id}",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]根据对象类查询可关联的措施列表
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/optional-measures/list
   */
  yihengFacilityOpsServerExeStrategyItemOptionalMeasuresList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemOptionalMeasuresListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/optional-measures/list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]发布策略
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/publish
   */
  yihengFacilityOpsServerExeStrategyItemPublish<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemPublishBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/publish",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略事项】(已发布)策略事项详情(第三方[标品二开]也在使用，谨慎修改)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/publish/detail/{id}
   */
  yihengFacilityOpsServerExeStrategyItemPublishDetailEmptyObjectIdEmptyObject<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/publish/detail/{id}",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略事项】(已发布)查询观测对象(可能西安的在用)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/publish/observe/object
   */
  yihengFacilityOpsServerExeStrategyItemPublishObserveObject<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerExeStrategyItemPublishObserveObjectQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/publish/observe/object",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略事项】(已发布)发布时间(可能西安的在用)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/publish/publish-record
   */
  yihengFacilityOpsServerExeStrategyItemPublishPublishRecord<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/publish/publish-record",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略事项】(已发布)简单列表查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/publish/simple-list
   */
  yihengFacilityOpsServerExeStrategyItemPublishSimpleList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemPublishSimpleListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/publish/simple-list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略事项】(已发布)策略分类对象树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/publish/strategy-class-tree
   */
  yihengFacilityOpsServerExeStrategyItemPublishStrategyClassTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/publish/strategy-class-tree",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略事项】通过策略事项id查询关联的对象集合
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/rel-object/page
   */
  yihengFacilityOpsServerExeStrategyItemRelObjectPage<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemRelObjectPageBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/rel-object/page",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]策略事项关联对象实例
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/rel-object/save
   */
  yihengFacilityOpsServerExeStrategyItemRelObjectSave<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemRelObjectSaveBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/rel-object/save",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]空间功能树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/room-func-type/tree
   */
  yihengFacilityOpsServerExeStrategyItemRoomFuncTypeTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/room-func-type/tree",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]已发布策略事项的对象类顺序
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/sorted-class-code
   */
  yihengFacilityOpsServerExeStrategyItemSortedClassCode<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/sorted-class-code",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【ZX策略事项】(预发布)策略分类对象树(第三方在使用：新建非计划巡检工单)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/strategy-class-tree
   */
  yihengFacilityOpsServerExeStrategyItemStrategyClassTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/strategy-class-tree",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]获得ZX适用对象类树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/strategy/suitable-object-class
   */
  yihengFacilityOpsServerExeStrategyItemStrategySuitableObjectClass<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/strategy/suitable-object-class",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]分页查询策略事项的适用对象实例
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/suitable-instance/page
   */
  yihengFacilityOpsServerExeStrategyItemSuitableInstancePage<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemSuitableInstancePageBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/suitable-instance/page",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]批量修改策略分类对象类下的实例与策略事项的关联关系
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/suitable-object-class/instance-rel/batch-update
   */
  yihengFacilityOpsServerExeStrategyItemSuitableObjectClassInstanceRelBatchUpdate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemSuitableObjectClassInstanceRelBatchUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/suitable-object-class/instance-rel/batch-update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]策略分类对象树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/tree/strategy-class-tree
   */
  yihengFacilityOpsServerExeStrategyItemTreeStrategyClassTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/tree/strategy-class-tree",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]未关联计划的事项数量
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/unLink-plan-count
   */
  yihengFacilityOpsServerExeStrategyItemUnLinkPlanCount<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/unLink-plan-count",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]编辑策略事项
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/exe/strategy-item/update
   */
  yihengFacilityOpsServerExeStrategyItemUpdate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerExeStrategyItemUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[ZX策略事项]校验策略事项
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/exe/strategy-item/verify
   */
  yihengFacilityOpsServerExeStrategyItemVerify<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/exe/strategy-item/verify",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据设备实例查询报警规则
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/iot/alert/rule/third-part/query-by-instance-id
   */
  yihengFacilityOpsServerIotAlertRuleThirdPartQueryByInstanceId<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerIotAlertRuleThirdPartQueryByInstanceIdBody,
    query: RiskDataServiceYihengFacilityOpsServerIotAlertRuleThirdPartQueryByInstanceIdQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/iot/alert/rule/third-part/query-by-instance-id",
      method: "GET",
      query: query,
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：IOT报警规则详情查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/iot/alert/rule/third-part/query-detail
   */
  yihengFacilityOpsServerIotAlertRuleThirdPartQueryDetail<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerIotAlertRuleThirdPartQueryDetailBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/iot/alert/rule/third-part/query-detail",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量查询报警规则实例明细
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/open-api/iot-rule/list-by-instance-and-measure
   */
  yihengFacilityOpsServerOpenApiIotRuleListByInstanceAndMeasure<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerOpenApiIotRuleListByInstanceAndMeasureBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/open-api/iot-rule/list-by-instance-and-measure",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量查询风险事件知识下的风险
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/open-api/klb/klb-risk/list-by-risk-event-business-ids
   */
  yihengFacilityOpsServerOpenApiKlbKlbRiskListByRiskEventBusinessIds<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerOpenApiKlbKlbRiskListByRiskEventBusinessIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/open-api/klb/klb-risk/list-by-risk-event-business-ids",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【管控目标】管控目标列表查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/open-api/pj-control-objective/list
   */
  yihengFacilityOpsServerOpenApiPjControlObjectiveList<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/open-api/pj-control-objective/list",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目处理专业】按知识措施和其他对象信息查询处理专业
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/open-api/pj-deal-major/list-by-other-object-and-klb-measure
   */
  yihengFacilityOpsServerOpenApiPjDealMajorListByOtherObjectAndKlbMeasure<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerOpenApiPjDealMajorListByOtherObjectAndKlbMeasureBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/open-api/pj-deal-major/list-by-other-object-and-klb-measure",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目处理专业】按专业对象类匹配处理专业
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/open-api/pj-deal-major/match-by-major-class-code
   */
  yihengFacilityOpsServerOpenApiPjDealMajorMatchByMajorClassCode<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerOpenApiPjDealMajorMatchByMajorClassCodeBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/open-api/pj-deal-major/match-by-major-class-code",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【实例树】根据对象实例id查询实例树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/open-api/rwd-instance-tree/list
   */
  yihengFacilityOpsServerOpenApiRwdInstanceTreeList<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerOpenApiRwdInstanceTreeListBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/open-api/rwd-instance-tree/list",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【异常问题】FMEA智能体推荐
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/open-api/suggest/fmea-suggest
   */
  yihengFacilityOpsServerOpenApiSuggestFmeaSuggest<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerOpenApiSuggestFmeaSuggestBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/open-api/suggest/fmea-suggest",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：删除
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/deal-major/delete
   */
  yihengFacilityOpsServerPjDealMajorDelete<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjDealMajorDeleteBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/delete",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据id查处理专业详情
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/deal-major/detail
   */
  yihengFacilityOpsServerPjDealMajorDetail<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerPjDealMajorDetailQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/detail",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：风险点业务类别导出
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/deal-major/download
   */
  yihengFacilityOpsServerPjDealMajorDownload<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/download",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：设备设施类型筛选
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/deal-major/equipment-major-tree
   */
  yihengFacilityOpsServerPjDealMajorEquipmentMajorTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/equipment-major-tree",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：初始化处理专业和规则
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/deal-major/init
   */
  yihengFacilityOpsServerPjDealMajorInit<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/init",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：[处理专业]列表查询(二开会用)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/deal-major/list
   */
  yihengFacilityOpsServerPjDealMajorList<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/list",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：列表查询(详细)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/deal-major/list-detail
   */
  yihengFacilityOpsServerPjDealMajorListDetail<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/list-detail",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：列表查询(简单)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/deal-major/list-simple
   */
  yihengFacilityOpsServerPjDealMajorListSimple<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/list-simple",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据处理专业查询风险分类标签
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/deal-major/list-with-category
   */
  yihengFacilityOpsServerPjDealMajorListWithCategory<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/list-with-category",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：交付专业列表
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/deal-major/majors
   */
  yihengFacilityOpsServerPjDealMajorMajors<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/majors",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：未交付对象类树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/deal-major/no-delivery-component-tree
   */
  yihengFacilityOpsServerPjDealMajorNoDeliveryComponentTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/no-delivery-component-tree",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：保存
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/deal-major/save
   */
  yihengFacilityOpsServerPjDealMajorSave<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjDealMajorSaveBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/save",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：保存风险分类
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/deal-major/save-category
   */
  yihengFacilityOpsServerPjDealMajorSaveCategory<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjDealMajorSaveCategoryBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/save-category",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改排序
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/deal-major/sort
   */
  yihengFacilityOpsServerPjDealMajorSort<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjDealMajorSortBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/sort",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：查询提示栏
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/deal-major/tips
   */
  yihengFacilityOpsServerPjDealMajorTips<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/tips",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：重复性校验(只需要传需要校验的字段)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/deal-major/valid
   */
  yihengFacilityOpsServerPjDealMajorValid<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjDealMajorValidBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/deal-major/valid",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：空间功能类型列表
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk/all-room-func-type
   */
  yihengFacilityOpsServerPjRiskAllRoomFuncType<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/all-room-func-type",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量清空标签
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/batch-clear
   */
  yihengFacilityOpsServerPjRiskBatchClear<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskBatchClearBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/batch-clear",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量修改
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/batch-update
   */
  yihengFacilityOpsServerPjRiskBatchUpdate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskBatchUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/batch-update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目风险】自定义风险
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/create
   */
  yihengFacilityOpsServerPjRiskCreate<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerPjRiskCreateQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/create",
      method: "POST",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：风险点交集-设备设施类型筛选
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/deal-major-class-tree
   */
  yihengFacilityOpsServerPjRiskDealMajorClassTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/deal-major-class-tree",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：风险点分层定级导出
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk/download
   */
  yihengFacilityOpsServerPjRiskDownload<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/download",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量清空标签
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk-event/batch-clear
   */
  yihengFacilityOpsServerPjRiskEventBatchClear<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskEventBatchClearBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/batch-clear",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：批量修改
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk-event/batch-update
   */
  yihengFacilityOpsServerPjRiskEventBatchUpdate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskEventBatchUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/batch-update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：清除变更标记
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk-event/clear-change-mark
   */
  yihengFacilityOpsServerPjRiskEventClearChangeMark<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/clear-change-mark",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：风险实例分页接口
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk-event/instance/page
   */
  yihengFacilityOpsServerPjRiskEventInstancePage<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskEventInstancePageBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/instance/page",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：分页查询
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk-event/list
   */
  yihengFacilityOpsServerPjRiskEventList<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/list",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目风险】风险实例对象筛选
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk-event/listInstanceFilters
   */
  yihengFacilityOpsServerPjRiskEventListInstanceFilters<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerPjRiskEventListInstanceFiltersQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/listInstanceFilters",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：未交付对象类树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk-event/no-delivery-component-tree
   */
  yihengFacilityOpsServerPjRiskEventNoDeliveryComponentTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/no-delivery-component-tree",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：空间功能类型列表
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk-event/room-func-type
   */
  yihengFacilityOpsServerPjRiskEventRoomFuncType<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/room-func-type",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：隐患树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk-event/tree
   */
  yihengFacilityOpsServerPjRiskEventTree<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerPjRiskEventTreeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/tree",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：单条更新
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk-event/update
   */
  yihengFacilityOpsServerPjRiskEventUpdate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskEventUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：更新是否主动管理
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk-event/update-follow
   */
  yihengFacilityOpsServerPjRiskEventUpdateFollow<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskEventUpdateFollowBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/update-follow",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：更新提示
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk-event/update-tips
   */
  yihengFacilityOpsServerPjRiskEventUpdateTips<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-event/update-tips",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目风险影响类型】列表查询(第三方也在使用，谨慎修改)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk-impact-category/list
   */
  yihengFacilityOpsServerPjRiskImpactCategoryList<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-impact-category/list",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目风险影响类型】列表查询(第三方也在使用，谨慎修改)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk-impact-category/listThird
   */
  yihengFacilityOpsServerPjRiskImpactCategoryListThird<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-impact-category/listThird",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目风险影响类型】保存
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk-impact-category/save
   */
  yihengFacilityOpsServerPjRiskImpactCategorySave<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskImpactCategorySaveBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk-impact-category/save",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：风险实例分页接口
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk/instance/criteria
   */
  yihengFacilityOpsServerPjRiskInstanceCriteria<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerPjRiskInstanceCriteriaQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/instance/criteria",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：风险实例分页接口
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/instance/page
   */
  yihengFacilityOpsServerPjRiskInstancePage<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskInstancePageBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/instance/page",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：根据风险id查询风险详情
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/list-by-ids
   */
  yihengFacilityOpsServerPjRiskListByIds<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskListByIdsBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/list-by-ids",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【不视作故障】标签影响风险列表
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/list-fault-effect-risk
   */
  yihengFacilityOpsServerPjRiskListFaultEffectRisk<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskListFaultEffectRiskBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/list-fault-effect-risk",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目风险】风险实例对象筛选
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk/listInstanceFilters
   */
  yihengFacilityOpsServerPjRiskListInstanceFilters<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerPjRiskListInstanceFiltersQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/listInstanceFilters",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目风险】专业对象类树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk/major-objClass-tree
   */
  yihengFacilityOpsServerPjRiskMajorObjClassTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/major-objClass-tree",
      method: "GET",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：风险点交集-未交付对象类树
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/no-delivery-component-tree
   */
  yihengFacilityOpsServerPjRiskNoDeliveryComponentTree<T = JsonValue>(
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/no-delivery-component-tree",
      method: "POST",
      headers: options.headers,
    });
  },

  /**
   * 接口说明：分页查询风险点
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/page
   */
  yihengFacilityOpsServerPjRiskPage<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskPageBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/page",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：获取风险点的空间功能类型
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/pj/risk/room-func-type
   */
  yihengFacilityOpsServerPjRiskRoomFuncType<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerPjRiskRoomFuncTypeQuery = {},
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/room-func-type",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【项目风险】风险名称查询(能源与碳组在用)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/simple-page-third
   */
  yihengFacilityOpsServerPjRiskSimplePageThird<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskSimplePageThirdBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/simple-page-third",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：修改风险点
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/update
   */
  yihengFacilityOpsServerPjRiskUpdate<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskUpdateBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/update",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：取消【不视作故障】标签影响风险列表
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：POST /yiheng-facility-ops-server/pj/risk/update-fault-effect-risk
   */
  yihengFacilityOpsServerPjRiskUpdateFaultEffectRisk<T = JsonValue>(
    body: RiskDataServiceYihengFacilityOpsServerPjRiskUpdateFaultEffectRiskBody,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/pj/risk/update-fault-effect-risk",
      method: "POST",
      body,
      headers: options.headers,
    });
  },

  /**
   * 接口说明：【风险地图】实例树查询(谨慎修改，第三方已在使用：自主运行)
   *
   * 来源：docs/product-apis/risk-data-service/openapi.json
   * HTTP：GET /yiheng-facility-ops-server/risk-map/instance-tree/get
   */
  yihengFacilityOpsServerRiskMapInstanceTreeGet<T = JsonValue>(
    query: RiskDataServiceYihengFacilityOpsServerRiskMapInstanceTreeGetQuery,
    options: ProductApiCallOptions = {},
  ): Promise<T> {
    return requestGateway<T>(config, {
      path: "/yiheng-facility-ops-server/risk-map/instance-tree/get",
      method: "GET",
      query: query,
      headers: options.headers,
    });
  }
  };
}
