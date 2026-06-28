# data-service 接口清单

> **数据来源**：Apifox 项目 `5878457`
> **OpenAPI 标题**：默认模块
> **最后同步**：2026-06-22 17:53:33
> **接口总数**：63 个 / 13 个分类

## 文档说明

本文档由 `docs/product-apis/sync.sh` 自动同步生成，**不要手动修改接口列表本身**。
更新方式：

```bash
bash docs/product-apis/sync.sh data-service 5878457
```

## 调用约束

- ❗ **只能调用测试环境**，禁止调用生产环境
- ❗ 接口 BaseURL 通过环境变量注入，不在代码中硬编码
- ❗ 鉴权 Token 从环境变量读取，不得提交到 git
- ❗ 多租户场景下，调用前确认 `groupCode`/`projectId` 等租户字段已正确传递
- ❗ **网关服务名（按路径前缀区分）**：本业务线跨多个后端服务，调用时需按接口路径对应的服务名进行路由；本文档路径已含服务名前缀，`openapi.json` 中路径不含，基于 `openapi.json` 编写调用代码时需自行追加：

  | 服务名 | 适用路径前缀 |
  |--------|------------|
  | `dtp-rwd-server` | `/rwd/...` |
  | `dtp-persist-server` | `/iot/...`、`/ipcal/...`、`/compute/...` |
  | `dtp-persist-analysis-server` | `/iot/statistic/...` |
  | `dtp-compute-migrate` | `/iot/data/getRegionNo`、`/iot/compute/data/...`、`/iot/data/createSubentry`、`/iot/data/createLoadAccdE` |


## 原始 OpenAPI Spec

完整 schema、请求/响应类型、参数定义见 [`openapi.json`](./openapi.json)。

---

## 未分类（38 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/ipcal/point/queryInfoPointPeroid` | 查询设备持久化规则信息 |
| `POST` | `/dtp-persist-server/iot/ipcal/data/queryIPDataOnMoment` | queryIPDataOnMoment |
| `POST` | `/dtp-persist-server/iot/ipcal/data/queryIPDataInPeriod` | queryIPDataInPeriod |
| `POST` | `/dtp-persist-server/iot/ipcal/data/queryIPDataByValueTypeInPeriod` | queryIPDataByValueTypeInPeriod |
| `POST` | `/dtp-persist-server/iot/ipcal/data/queryProjectElecPrice` | 项目电价 |
| `POST` | `/dtp-persist-server/iot/ipcal/data/queryAbnormalDataStatistics` | 持久化异常数据统计查询 |
| `POST` | `/dtp-persist-server/ipcal/data/queryIpDataStatisticalDuration` | 查询设备一天持久化数据统计值 |
| `POST` | `/dtp-rwd-server/rwd/compute/subscribe/subscribeInfoToRedis` | 订阅topic缓存推送 |
| `POST` | `/dtp-rwd-server/rwd/compute/subscribe/add` | 新增订阅 |
| `POST` | `/dtp-persist-server/iot/manual/save` | 保存人工采集数 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/homepage/fanEquipmentStatusStatistics` | 通风状态统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/homepage/coolHeatSysStatusStatistics` | 值班首页聚合 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/homepage/exhaustFumeStatusStatistics` | 厨房排油烟状态统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/homepage/lightingStatusStatistics` | 照明状态统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/homepage/terminalObjectStatusStatistics` | 空调末端状态统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/watch/spaceSecurityStatistics` | 撤布防空间统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/watch/fanStatistics` | 通风统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/watch/lightingStatistics` | 照明状态统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/watch/terminalStatistics` | 末端统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/watch/securityEquipmentStatistics` | 感知监控 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/watch/exhaustFumeStatistics` | 排油烟对象统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/watch/chillerStatistics` | 运行监控-冷机统计 |
| `POST` | `/dtp-persist-server/iot/data/aggreg/watch/chillPumpStatistics` | 泵组开启台数统计 |
| `POST` | `/dtp-persist-server/ipcal/data/aggreg/projectOrTime` | 按项目或时间维度聚合数据 |
| `POST` | `/dtp-persist-server/ipcal/data/aggreg/projectAndTime` | 按项目&时间汇总 |
| `POST` | `/dtp-persist-server/ipcal/data/aggreg/infoCode` | 信息点维度聚合 |
| `POST` | `/dtp-persist-server/ipcal/data/aggreg/subentry` | 无需聚合 |
| `POST` | `/dtp-persist-server/ipcal/data/queryObjectCount` | 根据信息点枚举值统计对象数量 |
| `POST` | `/dtp-rwd-server/compute/rule/queryRuleInstantiationInfos` | ops根据设备查询实例化详情 |
| `POST` | `/dtp-persist-server/compute/data/complement` | ops补数 |
| `POST` | `/dtp-persist-server/compute/data/preview` | 数据修复预览 |
| `POST` | `/dtp-persist-server/compute/data/repair` | 数据修复 |
| `POST` | `/dtp-compute-migrate/iot/compute/data/repairData` | 持久化数据重新汇总 |
| `POST` | `/dtp-compute-migrate/iot/compute/data/clear` | 数据清理 |
| `POST` | `/dtp-persist-server/iot/hbaseInfo/flushTableCache` | 刷新持久化查询项目缓存 |
| `POST` | `/dtp-persist-server/iot/hbaseInfo/init` | 表结构初始化 |
| `POST` | `/dtp-compute-migrate/iot/data/createSubentry` | 分项模拟造数 |
| `POST` | `/dtp-compute-migrate/iot/data/createLoadAccdE` | 负载模拟造数 |

## 持久化再计算（4 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-persist-server/compute/manualReadingRecord` | 人工补录 |
| `POST` | `/dtp-persist-server/compute/push` | 持久化计算推数 |
| `POST` | `/dtp-persist-server/compute/complement` | 持久化计算补数 |
| `POST` | `/dtp-persist-server/compute/deriveRecalculate` | 衍生重新计算 |

## hbase数据查询（1 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/dtp-compute-migrate/iot/data/getRegionNo` | 获取分区号 |

## ops界面补数功能（3 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-persist-server/compute/data/upload` | 上传持久化数据 |
| `POST` | `/dtp-persist-server/compute/data/download` | 下载持久化数据导入模板 |
| `POST` | `/dtp-persist-server/compute/data/save` | 录入数据 |

## 持久化点位信息查询（3 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/ipcal/point/queryObjectsOfExistRule` | E1.2查找持久化有值的对象 |
| `POST` | `/dtp-rwd-server/rwd/ipcal/point/queryInfoPointPeroidAndAbundanceInfo` | E1.3查找对象下哪些动态点有持久化数据，并提供持久化数据丰度信息 |
| `POST` | `/dtp-rwd-server/rwd/ipcal/point/queryInfoPointCalType` | E4.1 查找对象下动态点的持久化计算来源类型 |

## 持久化计算数据处理（3 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-compute-migrate/iot/compute/data/compareToExcel` | 信息点数据汇总结果导出 |
| `POST` | `/dtp-compute-migrate/iot/compute/data/deriveRecalculate` | 衍生消息重算 |
| `POST` | `/dtp-compute-migrate/iot/compute/data/compare` | 查询信息点数据比对结果 |

## ops界面实例化功能（2 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/compute/data/query` | 查询对象下绑点详情列表 |
| `POST` | `/dtp-rwd-server/compute/rule/queryRuleInstantiationTree` | 查询持久化实例列表树 |

## 人工采集数据的存储和查询（2 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-persist-server/iot/manual/queryIotData` | 查询人工采集数据 |
| `POST` | `/dtp-persist-server/iot/manual/queryObjectsInfoPoint` | 查询对象下有人工观测数据的信息点 |

## 持久化信息订阅（2 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/compute/subscribe/update` | 修改信息点订阅信息 |
| `POST` | `/dtp-rwd-server/rwd/compute/subscribe/delete` | 删除信息点订阅信息 |

## 持久化计算数据修复（1 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-compute-migrate/iot/compute/data/repairEquipmentHourData` | 修复 |

## 点位在离线判断（2 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/ipcal/point/listPointStatus` | 批量点位在线状态查询 |
| `POST` | `/dtp-rwd-server/rwd/ipcal/point/statsPointStatus` | 设备在离线状态统计查询 |

## 分精度值统计（1 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-persist-analysis-server/iot/statistic/queryStatisticDataByObjectInfo` | 查询设备点位统计值【根据历史数据-电流统计】 |

## 持久化数据查询（1 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-persist-server/ipcal/data/queryRealTimeIpData` | 查找最新的持久化数据(能源报警业务定制) |

