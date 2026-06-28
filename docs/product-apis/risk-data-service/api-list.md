# risk-data-service 接口清单

> **数据来源**：Apifox 项目 `5914030`（已过滤为仅 OpenApi 模块）
> **OpenAPI 标题**：默认模块
> **最后同步**：2026-06-23 09:42:30
> **接口总数**：134 个 / 1 个分类
> **过滤规则**：仅保留 tag 数组包含 `OpenApi` 的接口

## 文档说明

本文档由 `docs/product-apis/sync.sh` 自动同步生成后，**手动过滤为仅 OpenApi 模块**。
重新同步注意事项：直接跑 `sync.sh` 会重新从 Apifox 拉全量数据，需再次执行过滤步骤（见 docs/product-apis/README.md "维护说明"）。

## 调用约束

- ❗ **只能调用测试环境**，禁止调用生产环境
- ❗ 接口 BaseURL 通过环境变量注入，不在代码中硬编码
- ❗ 鉴权 Token 从环境变量读取，不得提交到 git
- ❗ 多租户场景下，调用前确认 `groupCode`/`projectId` 等租户字段已正确传递
- ❗ **网关服务名**：`yiheng-facility-ops-server`；完整调用路径 = `BaseURL/yiheng-facility-ops-server/接口路径`；本文档路径已含此前缀，`openapi.json` 中路径不含服务名，基于 `openapi.json` 编写调用代码时需在路径前自行追加服务名
- ❗ 仅可调用本文件中列出的 OpenApi 模块接口；该业务线其他内部 tag 接口（版本批次、策略合并等）不属对外契约面，禁止调用

## 原始 OpenAPI Spec

完整 schema、请求/响应类型、参数定义见 [`openapi.json`](./openapi.json)（已过滤为仅 OpenApi 模块）。

---

## OpenApi（134 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/yiheng-facility-ops-server/pj/deal-major/tips` | 查询提示栏 |
| `POST` | `/yiheng-facility-ops-server/pj/deal-major/init` | 初始化处理专业和规则 |
| `GET` | `/yiheng-facility-ops-server/pj/deal-major/list-simple` | 列表查询(简单) |
| `GET` | `/yiheng-facility-ops-server/pj/deal-major/list-detail` | 列表查询(详细) |
| `POST` | `/yiheng-facility-ops-server/pj/deal-major/save` | 保存 |
| `POST` | `/yiheng-facility-ops-server/pj/deal-major/delete` | 删除 |
| `POST` | `/yiheng-facility-ops-server/pj/deal-major/save-category` | 保存风险分类 |
| `POST` | `/yiheng-facility-ops-server/pj/deal-major/sort` | 修改排序 |
| `POST` | `/yiheng-facility-ops-server/pj/deal-major/equipment-major-tree` | 设备设施类型筛选 |
| `POST` | `/yiheng-facility-ops-server/pj/deal-major/no-delivery-component-tree` | 未交付对象类树 |
| `GET` | `/yiheng-facility-ops-server/pj/deal-major/detail` | 根据id查处理专业详情 |
| `POST` | `/yiheng-facility-ops-server/pj/deal-major/valid` | 重复性校验(只需要传需要校验的字段) |
| `GET` | `/yiheng-facility-ops-server/pj/deal-major/list-with-category` | 根据处理专业查询风险分类标签 |
| `POST` | `/yiheng-facility-ops-server/pj/deal-major/majors` | 交付专业列表 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/page` | 分页查询风险点 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/deal-major-class-tree` | 风险点交集-设备设施类型筛选 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/create` | 【项目风险】自定义风险 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/list-by-ids` | 根据风险id查询风险详情 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/update` | 修改风险点 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/batch-update` | 批量修改 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/batch-clear` | 批量清空标签 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/instance/page` | 风险实例分页接口 |
| `GET` | `/yiheng-facility-ops-server/pj/risk/instance/criteria` | 风险实例分页接口 |
| `GET` | `/yiheng-facility-ops-server/pj/risk/room-func-type` | 获取风险点的空间功能类型 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/simple-page-third` | 【项目风险】风险名称查询(能源与碳组在用) |
| `GET` | `/yiheng-facility-ops-server/pj/risk/listInstanceFilters` | 【项目风险】风险实例对象筛选 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/no-delivery-component-tree` | 风险点交集-未交付对象类树 |
| `GET` | `/yiheng-facility-ops-server/pj/risk/all-room-func-type` | 空间功能类型列表 |
| `GET` | `/yiheng-facility-ops-server/pj/risk-event/list` | 分页查询 |
| `POST` | `/yiheng-facility-ops-server/pj/risk-event/update-follow` | 更新是否主动管理 |
| `POST` | `/yiheng-facility-ops-server/pj/risk-event/update` | 单条更新 |
| `POST` | `/yiheng-facility-ops-server/pj/risk-event/batch-update` | 批量修改 |
| `POST` | `/yiheng-facility-ops-server/pj/risk-event/batch-clear` | 批量清空标签 |
| `GET` | `/yiheng-facility-ops-server/pj/risk-event/tree` | 隐患树 |
| `POST` | `/yiheng-facility-ops-server/pj/risk-event/no-delivery-component-tree` | 未交付对象类树 |
| `GET` | `/yiheng-facility-ops-server/pj/risk-event/room-func-type` | 空间功能类型列表 |
| `GET` | `/yiheng-facility-ops-server/pj/risk-event/listInstanceFilters` | 【项目风险】风险实例对象筛选 |
| `POST` | `/yiheng-facility-ops-server/pj/risk-event/instance/page` | 风险实例分页接口 |
| `GET` | `/yiheng-facility-ops-server/pj/risk-event/update-tips` | 更新提示 |
| `POST` | `/yiheng-facility-ops-server/pj/risk-event/clear-change-mark` | 清除变更标记 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/tree/strategy-class-tree` | [ZX策略事项]策略分类对象树 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/class-code-poi` | [ZX策略事项]对象类信息点 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/batch-update` | [ZX策略事项]批量修改策略事项 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/detail/{id}` | [ZX策略事项]查询策略事项详情 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/rel-object/save` | [ZX策略事项]策略事项关联对象实例 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-category/independence-mark/update` | 【ZX策略分类】设置/取消独立标记 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/publish` | [ZX策略事项]发布策略 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/unLink-plan-count` | [ZX策略事项]未关联计划的事项数量 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/sorted-class-code` | [ZX策略事项]已发布策略事项的对象类顺序 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/strategy-class-tree` | 【ZX策略事项】(预发布)策略分类对象树(第三方在使用：新建非计划巡检工单) |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/update` | [ZX策略事项]编辑策略事项 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/batch-add` | [ZX策略事项]批量新增策略事项 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/delete` | [ZX策略事项]删除策略事项 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-category/exec-step-mark/update` | 【ZX策略分类】开启/关闭按顺序执行 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/strategy/suitable-object-class` | [ZX策略事项]获得ZX适用对象类树 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/room-func-type/tree` | [ZX策略事项]空间功能树 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/optional-measures/list` | [ZX策略事项]根据对象类查询可关联的措施列表 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/suitable-instance/page` | [ZX策略事项]分页查询策略事项的适用对象实例 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/copy` | [ZX策略事项]拷贝策略事项 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-category/batch-delete` | 【ZX策略分类】批量删除策略分类 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/verify` | [ZX策略事项]校验策略事项 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-category/detail` | [ZX策略分类]策略分类详情 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/rel-object/page` | 【ZX策略事项】通过策略事项id查询关联的对象集合 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-category/name-exists` | 【ZX策略分类】名称重复校验 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-category/save` | 【ZX策略分类】新增或编辑策略分类 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/suitable-object-class/instance-rel/batch-update` | [ZX策略事项]批量修改策略分类对象类下的实例与策略事项的关联关系 |
| `GET` | `/yiheng-facility-ops-server/exception-event/baseInfo` | 【异常事件-权限】异常事件详情基本信息 |
| `POST` | `/yiheng-facility-ops-server/exception-event/statics` | 【异常事件-权限】统计 |
| `GET` | `/yiheng-facility-ops-server/exception-event/problem/cold/list` | 【异常事件】异常事件详情-问题列表 |
| `POST` | `/yiheng-facility-ops-server/exception-event/problem/cold/page-third` | 【异常问题】资产问题统计列表（能源与碳组用） |
| `GET` | `/yiheng-facility-ops-server/exception-event/problem/cold/detail` | 【异常问题】问题详情查询 |
| `GET` | `/yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring` | 【异常问题】问题详情IOT实时监控 |
| `GET` | `/yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring-by-instance` | 【异常问题】对象IOT实时监控 |
| `GET` | `/yiheng-facility-ops-server/exception-event/problem/cold/page-evaluate-record` | 【异常问题】评估记录列表 |
| `GET` | `/yiheng-facility-ops-server/exception-event/problem/cold/query-cameras` | 【异常问题】查询问题设备监控摄像头 |
| `POST` | `/yiheng-facility-ops-server/exception-event/problem/cold/statistics/download` | 【异常问题】资产问题统计数据导出 |
| `POST` | `/yiheng-facility-ops-server/exception-event/problem/cold/find-can-remove-record` | 【评估记录】查找不在问题下的评估记录 |
| `POST` | `/yiheng-facility-ops-server/exception-event/problem/cold/remove/record` | 【异常问题】资产问题统计数据导出 |
| `GET` | `/yiheng-facility-ops-server/risk-map/instance-tree/get` | 【风险地图】实例树查询(谨慎修改，第三方已在使用：自主运行) |
| `GET` | `/yiheng-facility-ops-server/exe-plan/detail` | 【执行计划】计划详情 |
| `POST` | `/yiheng-facility-ops-server/exe-plan/third/list` | 【执行计划】第三方计划列表查询 |
| `POST` | `/yiheng-facility-ops-server/exe-plan/export/list` | 【执行计划】计划导出列表查询 |
| `POST` | `/yiheng-facility-ops-server/exe-plan/export/strategy/list` | 【执行计划】计划关联策略导出列表查询 |
| `POST` | `/yiheng-facility-ops-server/exe-plan/monitor/view-statistic` | 【计划监控】视图统计 |
| `POST` | `/yiheng-facility-ops-server/ee/obj-instance/problem/statistics-list` | 【资产问题统计】列表查询 |
| `POST` | `/yiheng-facility-ops-server/ee/obj-instance/problem/count-by-date` | 【资产问题统计】发生次数按时间分布 |
| `POST` | `/yiheng-facility-ops-server/ee/obj-instance/problem/problem-category/list` | 【资产问题统计】问题类列表查询 |
| `POST` | `/yiheng-facility-ops-server/ee/obj-instance/problem/abnormal-instance/list` | 【资产问题统计】异常资产列表查询 |
| `POST` | `/yiheng-facility-ops-server/ee/obj-instance/problem/detail` | 【资产问题统计】资产问题原因分析 |
| `GET` | `/yiheng-facility-ops-server/ee/obj-instance/problem/major-object-tree` | 【资产问题统计】已交付实例专业对象树 |
| `POST` | `/yiheng-facility-ops-server/ee/risk-event/statistics-list` | 【风险事件统计】列表查询 |
| `POST` | `/yiheng-facility-ops-server/ee/risk-event/exception-event-list` | 【风险事件统计】异常事件信息 |
| `POST` | `/yiheng-facility-ops-server/ee/risk-event/count-by-date` | 【风险事件统计】发生次数按时间分布 |
| `POST` | `/yiheng-facility-ops-server/ee/risk-event/detail` | 【风险事件统计】详情页面 |
| `POST` | `/yiheng-facility-ops-server/open-api/iot-rule/list-by-instance-and-measure` | 批量查询报警规则实例明细 |
| `POST` | `/yiheng-facility-ops-server/iot/alert/rule/third-part/query-detail` | IOT报警规则详情查询 |
| `GET` | `/yiheng-facility-ops-server/iot/alert/rule/third-part/query-by-instance-id` | 根据设备实例查询报警规则 |
| `POST` | `/yiheng-facility-ops-server/pj/risk-impact-category/save` | 【项目风险影响类型】保存 |
| `GET` | `/yiheng-facility-ops-server/pj/risk-impact-category/list` | 【项目风险影响类型】列表查询(第三方也在使用，谨慎修改) |
| `GET` | `/yiheng-facility-ops-server/pj/risk-impact-category/listThird` | 【项目风险影响类型】列表查询(第三方也在使用，谨慎修改) |
| `POST` | `/yiheng-facility-ops-server/pj/risk/list-fault-effect-risk` | 【不视作故障】标签影响风险列表 |
| `POST` | `/yiheng-facility-ops-server/pj/risk/update-fault-effect-risk` | 取消【不视作故障】标签影响风险列表 |
| `GET` | `/yiheng-facility-ops-server/pj/risk/download` | 风险点分层定级导出 |
| `GET` | `/yiheng-facility-ops-server/pj/deal-major/download` | 风险点业务类别导出 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-category/copy` | [ZX策略事项]拷贝策略分类 |
| `POST` | `/yiheng-facility-ops-server/ee/obj-instance/problem/detail-third` | 【异常问题】资产问题详情统计（价值组用） |
| `POST` | `/yiheng-facility-ops-server/ee/obj-instance/problem/static-third` | 【异常问题】资产问题简单统计（价值组用） |
| `POST` | `/yiheng-facility-ops-server/ee/obj-instance/problem/simple-detail-third` | 【异常问题】资产问题摘要（价值组用侧弹窗） |
| `POST` | `/yiheng-facility-ops-server/open-api/pj-deal-major/match-by-major-class-code` | 【项目处理专业】按专业对象类匹配处理专业 |
| `POST` | `/yiheng-facility-ops-server/open-api/pj-deal-major/list-by-other-object-and-klb-measure` | 【项目处理专业】按知识措施和其他对象信息查询处理专业 |
| `POST` | `/yiheng-facility-ops-server/cold/problem/third-part/page` | (二开)资产问题明细 |
| `GET` | `/yiheng-facility-ops-server/open-api/pj-control-objective/list` | 【管控目标】管控目标列表查询 |
| `GET` | `/yiheng-facility-ops-server/exception-event/problem/iot/query-report-data-by-id` | 【IOT报警】IOT报警信息查询 |
| `POST` | `/yiheng-facility-ops-server/exception-event/third-part/page` | 【异常事件】异常事件列表（热数据） |
| `POST` | `/yiheng-facility-ops-server/ee/risk-event/count-statics` | 查询异常实例 |
| `POST` | `/yiheng-facility-ops-server/exception-event/third-part/date-statics` | 【异常事件】异常事件按天统计数量（冷数据） |
| `POST` | `/yiheng-facility-ops-server/exception-event/third-part/query-exception-record-source-ids` | 根据异常事件查询关联的始发巡检维保recordSourceId（冷数据） |
| `GET` | `/yiheng-facility-ops-server/exception-event/third-part/risk-instance-statics` | 【异常事件】风险按实例和风险事件统计（热数据） |
| `GET` | `/yiheng-facility-ops-server/exception/event/baseInfo` | 【异常事件】异常事件详情基本信息 |
| `POST` | `/yiheng-facility-ops-server/ee/problem/third-part/page` | 查询所有问题 |
| `POST` | `/yiheng-facility-ops-server/exception/event/statics` | 【异常事件】统计 |
| `POST` | `/yiheng-facility-ops-server/ee/problem/third-part/query-by-source-ids` | 根据sourceId查询对应的问题 |
| `POST` | `/yiheng-facility-ops-server/ee/problem/third-part/query-binding-cameras` | 【异常问题】根据问题查询绑定的摄像头ID |
| `POST` | `/yiheng-facility-ops-server/exception/event/list` | 【异常事件】异常事件列表 |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/publish/simple-list` | 【ZX策略事项】(已发布)简单列表查询 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/publish/publish-record` | 【ZX策略事项】(已发布)发布时间(可能西安的在用) |
| `POST` | `/yiheng-facility-ops-server/exe/strategy-item/publish/observe/object` | 【ZX策略事项】(已发布)查询观测对象(可能西安的在用) |
| `GET` | `/yiheng-facility-ops-server/pj/deal-major/list` | [处理专业]列表查询(二开会用) |
| `GET` | `/yiheng-facility-ops-server/pj/risk/major-objClass-tree` | 【项目风险】专业对象类树 |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/publish/detail/{id}` | 【ZX策略事项】(已发布)策略事项详情(第三方[标品二开]也在使用，谨慎修改) |
| `GET` | `/yiheng-facility-ops-server/exe/strategy-item/publish/strategy-class-tree` | 【ZX策略事项】(已发布)策略分类对象树 |
| `POST` | `/yiheng-facility-ops-server/open-api/klb/klb-risk/list-by-risk-event-business-ids` | 批量查询风险事件知识下的风险 |
| `POST` | `/yiheng-facility-ops-server/open-api/rwd-instance-tree/list` | 【实例树】根据对象实例id查询实例树 |
| `POST` | `/yiheng-facility-ops-server/open-api/suggest/fmea-suggest` | 【异常问题】FMEA智能体推荐 |

