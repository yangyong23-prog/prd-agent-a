# work-order-service 接口清单

> **数据来源**：Apifox 项目 `5913789`
> **OpenAPI 标题**：默认模块
> **最后同步**：2026-06-23 09:45:50
> **接口总数**：27 个 / 2 个分类

## 文档说明

本文档由 `docs/product-apis/sync.sh` 自动同步生成，**不要手动修改接口列表本身**。
更新方式：

```bash
bash docs/product-apis/sync.sh work-order-service 5913789
```

## 调用约束

- ❗ **只能调用测试环境**，禁止调用生产环境
- ❗ 接口 BaseURL 通过环境变量注入，不在代码中硬编码
- ❗ 鉴权 Token 从环境变量读取，不得提交到 git
- ❗ 多租户场景下，调用前确认 `groupCode`/`projectId` 等租户字段已正确传递
- ❗ **网关服务名**：`fm-workorder-server`；完整调用路径 = `BaseURL/fm-workorder-server/接口路径`；本文档路径已含此前缀，`openapi.json` 中路径不含服务名，基于 `openapi.json` 编写调用代码时需在路径前自行追加服务名

## 原始 OpenAPI Spec

完整 schema、请求/响应类型、参数定义见 [`openapi.json`](./openapi.json)。

---

## 公共接口（21 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/fm-workorder-server/work-order/task/query-by-workOrderId` | 根据工单id查询任务基本信息 |
| `POST` | `/fm-workorder-server/work/flow/public/listByParam` | 【公共接口】-查询符合条件的工单流程集合 |
| `POST` | `/fm-workorder-server/work-order/task/plan-task-query` | 巡检维保计划任务统计查询 |
| `POST` | `/fm-workorder-server/work-order/task/list-plan-task` | 根据策略事项、对象实例查询计划巡检、计划维保工单的任务信息 |
| `POST` | `/fm-workorder-server/work/flow/getJobTypeList` | 【公共接口】-查询符合条件的工作类型 |
| `POST` | `/fm-workorder-server/work-order/task/list-observe-result-instanceIds` | 【合规报表】根据对象实例id集合查询实例观测结果 |
| `POST` | `/fm-workorder-server/work-order/task/last-operate-by-instanceIds` | 【MEOI】根据对象实例id集合查询最近一次完成的工单信息 |
| `POST` | `/fm-workorder-server/work-order/task/feedback/records` | 根据反馈记录id查询反馈记录信息 |
| `POST` | `/fm-workorder-server/work-order/task/feedback/getUploadInfos` | 根据反馈记录查询上报信息 |
| `POST` | `/fm-workorder-server/work-order/task/feedback/getOrderInfos` | 根据反馈记录查询工单信息 |
| `POST` | `/fm-workorder-server/work-order/task/batch-query` | 批量查询工单任务 |
| `POST` | `/fm-workorder-server/work-order/task/batch-create` | 批量创建工单任务 |
| `POST` | `/fm-workorder-server/work-order/task-cost/queryAllCost` | 批量全量工单查询费用 |
| `POST` | `/fm-workorder-server/work-order/query/maintenance/executor/details` | 排查处理单过程详情 |
| `POST` | `/fm-workorder-server/work-order/query/maintenance/executor/details/v2` | 排查处理单过程详情V2 |
| `POST` | `/fm-workorder-server/work-order/query/list-receiver-by-exceptionId` | 根据异常事件查询关联的排查处理单的可接工单的所有人员 |
| `POST` | `/fm-workorder-server/work-order/query/list-by-objectId` | 根据对象id查询进行中的维修工单信息 |
| `POST` | `/fm-workorder-server/work-order/query/his/complete-list-by-createTime` | 基于项目维度获取历史已完成符合工作类型工单列表数据 |
| `POST` | `/fm-workorder-server/work-order/query/complete-list-by-orderIds` | 基于工单id集合返回符合工作类型工单列表数据 |
| `GET` | `/fm-workorder-server/work-order/query/query-by-exceptionId` | 异常事件查询工单基本信息 |
| `GET` | `/fm-workorder-server/work-order/query/list-action-by-exceptionId` | 根据异常事件查询关联工单响应信息 |

## 二开接口（6 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/fm-workorder-server/workOrder/userReport/queryUserReportOrderData` | 查询用户报事工单数据 |
| `POST` | `/fm-workorder-server/work-order/task/list-by-orderIds` | 根据工单集合批量查询任务基本信息集 |
| `POST` | `/fm-workorder-server/work-order/task-cost/query` | 批量已完成工单查询费用(二开接口&meoi接口) |
| `POST` | `/fm-workorder-server/work-order/query/list-by-param` | 根据条件查询工单列表 |
| `POST` | `/fm-workorder-server/work-order/query/list-by-dto` | 根据时间或工单类型查询工单 |
| `POST` | `/fm-workorder-server/restWorkOrderService/queryWorkOrderList` | 【工单大厅】分页查询(自用、迈瑞二开)调用 |

