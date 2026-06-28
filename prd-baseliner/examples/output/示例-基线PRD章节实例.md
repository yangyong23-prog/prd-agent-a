# 基线 PRD 章节实例 · 异常事件（RCC）
> 由 prd-baseliner 自动生成（实建层绑代码、意图层逐字保留不改写）。本文件为对标样例的真实数据版。

## 标记图例

| 标记 | 含义 |
|------|------|
| 需代码·生成 | 实建层，从代码/库直接生成，绑 commit 可再生 |
| 需代码·核实 | 文档与代码有分歧 / build_status 待对照基线代码核实 |
| 需PM·确认 | 描述性表述，可倾向按代码更新，PM 轻确认 |
| 需PM·决策 | 规范性意图（含架构占位绑定），必须 PM 裁决 |
| 需PM·本体 | 语义/规范名对齐本体 |

## 文档级

```yaml
product_line: 异常事件（RCC）
baseline: {version: v-baseline-2026, commit: ca6dfed}
section_count: 11　drift_count: 3　queue_count: 3
```
> 【需代码·生成】基线 commit、运行期 DDL/topic/注册表快照。

---

## 节 1 · 数据 · 数据表 · tenants（Tenant）

```yaml
section_id: SEC-异常事件-RCC-数据-tenants
kind: 数据　layer: 实建层
source_authority: 代码　build_status: 已实现
regenerable: true　generated_from_commit: ca6dfed　generator: prisma
review_state: 草稿　rag.indexable: false
```

**表**：`tenants`（model `Tenant`）　来源：ca6dfed:apps/server/prisma/schema.prisma:10

| 字段 | 库列 | 类型 | 可空 | 主键 | 唯一 | 默认 |
|------|------|------|------|------|------|------|
| id | id | String | 否 | ✓ |  | cuid() |
| code | code | String | 否 |  | ✓ |  |
| name | name | String | 否 |  |  |  |
| status | status | String | 否 |  |  | "active" |
| createdAt | created_at | DateTime | 否 |  |  | now() |
| updatedAt | updated_at | DateTime | 否 |  |  |  |

**主键**：id
**关系**（非库列）：users→User[]

---

## 节 2 · 数据 · 数据表 · users（User）

```yaml
section_id: SEC-异常事件-RCC-数据-users
kind: 数据　layer: 实建层
source_authority: 代码　build_status: 已实现
regenerable: true　generated_from_commit: ca6dfed　generator: prisma
review_state: 草稿　rag.indexable: false
```

**表**：`users`（model `User`）　来源：ca6dfed:apps/server/prisma/schema.prisma:22

| 字段 | 库列 | 类型 | 可空 | 主键 | 唯一 | 默认 |
|------|------|------|------|------|------|------|
| id | id | String | 否 | ✓ |  | cuid() |
| tenantId | tenant_id | String | 否 |  |  |  |
| username | username | String | 否 |  |  |  |
| passwordHash | password_hash | String | 否 |  |  |  |
| name | name | String | 否 |  |  |  |
| roles | roles | Json | 否 |  |  |  |
| status | status | String | 否 |  |  | "active" |
| createdAt | created_at | DateTime | 否 |  |  | now() |
| updatedAt | updated_at | DateTime | 否 |  |  |  |

**主键**：id
**外键**：tenantId → Tenant.id
**关系**（非库列）：tenant→Tenant
**唯一约束**：(tenantId, username)
**索引**：(tenantId, status)

---

## 节 3 · 数据 · 数据表 · todos（Todo）

```yaml
section_id: SEC-异常事件-RCC-数据-todos
kind: 数据　layer: 实建层
source_authority: 代码　build_status: 已实现
regenerable: true　generated_from_commit: ca6dfed　generator: prisma
review_state: 草稿　rag.indexable: false
```

**表**：`todos`（model `Todo`）　来源：ca6dfed:apps/server/prisma/schema.prisma:39

| 字段 | 库列 | 类型 | 可空 | 主键 | 唯一 | 默认 |
|------|------|------|------|------|------|------|
| id | id | Int | 否 | ✓ |  | autoincrement() |
| tenantId | tenant_id | String | 否 |  |  |  |
| title | title | VarChar(200) | 否 |  |  |  |
| completed | completed | Boolean | 否 |  |  | false |
| createdAt | created_at | DateTime | 否 |  |  | now() |
| updatedAt | updated_at | DateTime | 否 |  |  |  |

**主键**：id
**索引**：(tenantId)；(tenantId, completed)

---

## 节 4 · 接口 · 接口契约 · data-service（63 端点）

```yaml
section_id: SEC-异常事件-RCC-接口-data-service
kind: 接口　layer: 实建层
source_authority: 代码　build_status: 已实现
regenerable: true　generated_from_commit: ca6dfed　generator: openapi
review_state: 草稿　rag.indexable: false
drift: [DRIFT-0003]
```

> 【需代码·核实】[DRIFT-0003] PRD 节「与工单的交互消息字段说明（接口）」正文为空，但代码有 380 条「接口」事实可生成

**服务**：data-service　**端点数**：63

| 方法 | 路径 | 摘要 | 入参数 | 请求体 | 响应码 |
|------|------|------|--------|--------|--------|
| POST | `/dtp-compute-migrate/iot/compute/data/clear` | 数据清理 | 0 | IotDataDelParam | 200 |
| POST | `/dtp-compute-migrate/iot/compute/data/compare` | 查询信息点数据比对结果 | 0 | Root2 | 200 |
| POST | `/dtp-compute-migrate/iot/compute/data/compareToExcel` | 信息点数据汇总结果导出 | 0 | Root2 | 200 |
| POST | `/dtp-compute-migrate/iot/compute/data/deriveRecalculate` | 衍生消息重算 | 0 | object | 200 |
| POST | `/dtp-compute-migrate/iot/compute/data/repairData` | 持久化数据重新汇总 | 0 | object | 200 |
| POST | `/dtp-compute-migrate/iot/compute/data/repairEquipmentHourData` | 修复 | 0 | Root | 200 |
| POST | `/dtp-compute-migrate/iot/data/createLoadAccdE` | 负载模拟造数 | 2 | object | 200 |
| POST | `/dtp-compute-migrate/iot/data/createSubentry` | 分项模拟造数 | 0 | object | 200 |
| GET | `/dtp-compute-migrate/iot/data/getRegionNo` | 获取分区号 | 1 |  | 200 |
| POST | `/dtp-persist-analysis-server/iot/statistic/queryStatisticDataByObjectInfo` | 查询设备点位统计值【根据历史数据-电流统计】 | 3 | object | 200 |
| POST | `/dtp-persist-server/compute/complement` | 持久化计算补数 | 4 | object | 200 |
| POST | `/dtp-persist-server/compute/data/complement` | ops补数 | 2 | object | 200 |
| POST | `/dtp-persist-server/compute/data/download` | 下载持久化数据导入模板 | 0 |  | 200 |
| POST | `/dtp-persist-server/compute/data/preview` | 数据修复预览 | 2 | object | 200 |
| POST | `/dtp-persist-server/compute/data/repair` | 数据修复 | 0 | IpDataRepairParam | 200 |
| POST | `/dtp-persist-server/compute/data/save` | 录入数据 | 4 | object[] | 200 |
| POST | `/dtp-persist-server/compute/data/upload` | 上传持久化数据 | 4 | object | 200 |
| POST | `/dtp-persist-server/compute/deriveRecalculate` | 衍生重新计算 | 0 | object[] | 200 |
| POST | `/dtp-persist-server/compute/manualReadingRecord` | 人工补录 | 0 | object[] | 200 |
| POST | `/dtp-persist-server/compute/push` | 持久化计算推数 | 0 | object[] | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/homepage/coolHeatSysStatusStatistics` | 值班首页聚合 | 3 | object | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/homepage/exhaustFumeStatusStatistics` | 厨房排油烟状态统计 | 3 | AggregationStatisticsParam | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/homepage/fanEquipmentStatusStatistics` | 通风状态统计 | 3 | AggregationStatisticsParam | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/homepage/lightingStatusStatistics` | 照明状态统计 | 3 | AggregationStatisticsParam | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/homepage/terminalObjectStatusStatistics` | 空调末端状态统计 | 3 | AggregationStatisticsParam | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/watch/chillPumpStatistics` | 泵组开启台数统计 | 3 | ChillPumpParam | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/watch/chillerStatistics` | 运行监控-冷机统计 | 3 | object | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/watch/exhaustFumeStatistics` | 排油烟对象统计 | 3 | AggregationStatisticsParam | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/watch/fanStatistics` | 通风统计 | 3 | AggregationStatisticsParam | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/watch/lightingStatistics` | 照明状态统计 | 3 | StatisticsParam | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/watch/securityEquipmentStatistics` | 感知监控 | 3 | object | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/watch/spaceSecurityStatistics` | 撤布防空间统计 | 3 | StatisticsParam | 200 |
| POST | `/dtp-persist-server/iot/data/aggreg/watch/terminalStatistics` | 末端统计 | 3 | AggregationStatisticsParam | 200 |
| POST | `/dtp-persist-server/iot/hbaseInfo/flushTableCache` | 刷新持久化查询项目缓存 | 2 |  | 200 |
| POST | `/dtp-persist-server/iot/hbaseInfo/init` | 表结构初始化 | 0 | HBaseInfoParam | 200 |
| POST | `/dtp-persist-server/iot/ipcal/data/queryAbnormalDataStatistics` | 持久化异常数据统计查询 | 2 | object | 200 |
| POST | `/dtp-persist-server/iot/ipcal/data/queryIPDataByValueTypeInPeriod` | queryIPDataByValueTypeInPeriod | 2 | object | 200 |
| POST | `/dtp-persist-server/iot/ipcal/data/queryIPDataInPeriod` | queryIPDataInPeriod | 2 | object | 200 |
| POST | `/dtp-persist-server/iot/ipcal/data/queryIPDataOnMoment` | queryIPDataOnMoment | 2 | object | 200 |
| POST | `/dtp-persist-server/iot/ipcal/data/queryProjectElecPrice` | 项目电价 | 2 | object | 200 |
| POST | `/dtp-persist-server/iot/manual/queryIotData` | 查询人工采集数据 | 0 | object | 200 |
| POST | `/dtp-persist-server/iot/manual/queryObjectsInfoPoint` | 查询对象下有人工观测数据的信息点 | 0 | object | 200 |
| POST | `/dtp-persist-server/iot/manual/save` | 保存人工采集数 | 0 | object | 200 |
| POST | `/dtp-persist-server/ipcal/data/aggreg/infoCode` | 信息点维度聚合 | 2 | object | 200 |
| POST | `/dtp-persist-server/ipcal/data/aggreg/projectAndTime` | 按项目&时间汇总 | 2 | object | 200 |
| POST | `/dtp-persist-server/ipcal/data/aggreg/projectOrTime` | 按项目或时间维度聚合数据 | 2 | object | 200 |
| POST | `/dtp-persist-server/ipcal/data/aggreg/subentry` | 无需聚合 | 2 | object | 200 |
| POST | `/dtp-persist-server/ipcal/data/queryIpDataStatisticalDuration` | 查询设备一天持久化数据统计值 | 2 | object | 200 |
| POST | `/dtp-persist-server/ipcal/data/queryObjectCount` | 根据信息点枚举值统计对象数量 | 0 | IPDataCountDto | 200 |
| POST | `/dtp-persist-server/ipcal/data/queryRealTimeIpData` | 查找最新的持久化数据(能源报警业务定制) | 4 | object | 200 |
| POST | `/dtp-rwd-server/compute/data/query` | 查询对象下绑点详情列表 | 6 |  | 200 |
| POST | `/dtp-rwd-server/compute/rule/queryRuleInstantiationInfos` | ops根据设备查询实例化详情 | 2 | object | 200 |
| POST | `/dtp-rwd-server/compute/rule/queryRuleInstantiationTree` | 查询持久化实例列表树 | 4 |  | 200 |
| POST | `/dtp-rwd-server/rwd/compute/subscribe/add` | 新增订阅 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/compute/subscribe/delete` | 删除信息点订阅信息 | 4 | string[] | 200 |
| POST | `/dtp-rwd-server/rwd/compute/subscribe/subscribeInfoToRedis` | 订阅topic缓存推送 | 0 | string[] | 200 |
| POST | `/dtp-rwd-server/rwd/compute/subscribe/update` | 修改信息点订阅信息 | 4 | PersistentDefineSubscribeParam | 200 |
| POST | `/dtp-rwd-server/rwd/ipcal/point/listPointStatus` | 批量点位在线状态查询 | 4 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/ipcal/point/queryInfoPointCalType` | E4.1 查找对象下动态点的持久化计算来源类型 | 4 | string[] | 200 |
| POST | `/dtp-rwd-server/rwd/ipcal/point/queryInfoPointPeroid` | 查询设备持久化规则信息 | 2 | string[] | 200 |
| POST | `/dtp-rwd-server/rwd/ipcal/point/queryInfoPointPeroidAndAbundanceInfo` | E1.3查找对象下哪些动态点有持久化数据，并提供持久化数据丰度信s息 | 4 | string[] | 200 |
| POST | `/dtp-rwd-server/rwd/ipcal/point/queryObjectsOfExistRule` | E1.2查找持久化有值的对象 | 0 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/ipcal/point/statsPointStatus` | 设备在离线状态统计查询 | 4 | object | 200 |

---

## 节 5 · 接口 · 接口契约 · physical-world-service（156 端点）

```yaml
section_id: SEC-异常事件-RCC-接口-physical-world-service
kind: 接口　layer: 实建层
source_authority: 代码　build_status: 已实现
regenerable: true　generated_from_commit: ca6dfed　generator: openapi
review_state: 草稿　rag.indexable: false
```

**服务**：physical-world-service　**端点数**：156

| 方法 | 路径 | 摘要 | 入参数 | 请求体 | 响应码 |
|------|------|------|--------|--------|--------|
| GET | `/dtp-rwd-server/3d/components/codes` | 1.获取轻量化库中所有六位码 | 4 |  | 200 |
| GET | `/dtp-rwd-server/3d/components/componentszip` | 6.族库打包下载 | 4 |  | 200 |
| GET | `/dtp-rwd-server/3d/components/connectors` | 5.获取设备族连接点列表 | 6 | object | 200 |
| GET | `/dtp-rwd-server/3d/components/lastTime` | 8.获取族库数据最后的更新时间 | 0 |  | 200 |
| GET | `/dtp-rwd-server/3d/components/typeinfos` | 3.获取指定六位码的设备类型(带更新时间)列表 | 5 | Root2 | 200 |
| GET | `/dtp-rwd-server/3d/components/types` | 2.获取指定六位码的设备类型列表 | 5 | Root2 | 200 |
| GET | `/dtp-rwd-server/3d/components/typetree` | 4.完整的6位码族文件树 | 4 |  | 200 |
| POST | `/dtp-rwd-server/3d/components/uploadComp` | 7.上传族库数据 | 0 | object | 200 |
| GET | `/dtp-rwd-server/3d/object/codes` | 2.查询指定楼层有模型的对象类型编码 | 5 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/floorObjZip` | 16.查询指定楼层的三维模型（.obj格式） | 6 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/floors` | 13.楼层列表 | 4 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/floorzip` | 7.全楼打包 | 6 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/fullmeshj` | 10.对指定楼层和六位码的模型打包返回(json格式) | 6 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/fullmeshzip` | 11.对指定楼层和六位码的模型打包返回(zip包形式) | 6 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/mesh` | 5.获取bg文件 | 6 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/meshes` | 23.批量获取模型文件 | 6 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/meshj` | 6.获取bg文件的json格式数据 | 6 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/modelCount` | 9.统计模型数量 | 4 | string | 200 |
| POST | `/dtp-rwd-server/3d/object/objectcmd` |  8.逆向交付设备 | 4 | object | 200 |
| GET | `/dtp-rwd-server/3d/object/projects` | 12.项目列表 | 4 |  | 200 |
| POST | `/dtp-rwd-server/3d/object/removefloor` | 15.清除楼层模型 | 4 | object | 200 |
| POST | `/dtp-rwd-server/3d/object/removeproject` | 14.清除项目模型 | 4 | string | 200 |
| POST | `/dtp-rwd-server/3d/object/reversePipe` | 22.逆向交付管道 | 0 | object | 200 |
| GET | `/dtp-rwd-server/3d/object/scene` | 4.获取xj形式的场景文件 | 7 | Root | 200 |
| GET | `/dtp-rwd-server/3d/object/scenej` | 3.获取json形式的场景文件 | 7 | Root | 200 |
| GET | `/dtp-rwd-server/3d/object/spaceBgZip` | 17.查询指定空间的三维模型（.bg格式） | 7 |  | 200 |
| GET | `/dtp-rwd-server/3d/object/spaceObjZip` | 18.查询指定空间的三维模型（.obj格式） | 7 |  | 200 |
| POST | `/dtp-rwd-server/3d/object/updateversion` | 21.更新版本信息 | 4 | object | 200 |
| POST | `/dtp-rwd-server/3d/object/uploadfloor` | 19.上传楼层模型 | 4 | object | 200 |
| GET | `/dtp-rwd-server/3d/object/version` | 20.版本列表 | 4 |  | 200 |
| POST | `/dtp-rwd-server/api/object/last/change/queryRecords` | 查询对象最后一次的变更记录 | 4 | object | 200 |
| GET | `/dtp-rwd-server/count` | ⭐统计说明 | 0 |  | 200 |
| POST | `/dtp-rwd-server/dtp-knowledge-server/rwdedit/version/pushDataToMeAi` | 重推数据字典给MeAI | 1 |  | 200 |
| POST | `/dtp-rwd-server/geometric/object/bim` | 查找对象的定位点 | 4 | string[] | 200 |
| POST | `/dtp-rwd-server/geometric/object/boundingBox` | 查找对象的外包围盒 | 4 | string[] | 200 |
| POST | `/dtp-rwd-server/geometric/object/center/position` | 查找对象的外包围盒中心点、阀门/传感器的定位点 | 4 | string[] | 200 |
| POST | `/dtp-rwd-server/geometric/object/outLine` | 查找空间、设备设施的轮廓线 | 4 | Root | 200 |
| POST | `/dtp-rwd-server/geometric/object/skeletonLine` | 查找对象的骨架线 | 4 | Root | 200 |
| POST | `/dtp-rwd-server/publishData/changLogStatus` | 修改日志状态 | 1 |  | 200 |
| GET | `/dtp-rwd-server/publishData/getJobStatus` | 获取数据发布状态 -1:没有在执行 0:无日志 1:进行中  2:失败  3:成 | 1 |  | 200 |
| POST | `/dtp-rwd-server/publishData/sendPublishMsgToDtx` | sendPublishMsgToDtx | 0 | PublishDataMsg | 200 |
| POST | `/dtp-rwd-server/publishData/startup` | 01 开始发布 | 0 | object | 200 |
| POST | `/dtp-rwd-server/publishData/validateInfoCode` | 对象数据精度处理 | 2 | ObjectDigital[] | 200 |
| POST | `/dtp-rwd-server/published/detail/list` | 查询最后一次数据发布变更记录2.0 | 4 | LastChaneDto | 200 |
| POST | `/dtp-rwd-server/rwd/aggregate/amc/project/overview` | AMC项目概览查询 | 2 |  | 200 |
| POST | `/dtp-rwd-server/rwd/aggregate/exhaust/fumes/query` | 厨房排油烟 | 0 |  | 200 |
| GET | `/dtp-rwd-server/rwd/aggregate/obj/count` | 统计生产厂商相关数据 | 0 |  | 200 |
| POST | `/dtp-rwd-server/rwd/aggregate/objs` | 查询对象实例信息 | 0 | string[] | 200 |
| POST | `/dtp-rwd-server/rwd/aggregate/space/security/query` | 空间安防 | 0 | QueryCriteria | 200 |
| GET | `/dtp-rwd-server/rwd/aim/asset/cal` | apm台账-计算实例的资产管理序号或设备管理分类 | 6 |  | 200 |
| POST | `/dtp-rwd-server/rwd/aim/asset/isCal` | apm台账-是否正在计算 | 3 | string[] | 200 |
| POST | `/dtp-rwd-server/rwd/aim/asset/multiRel` | apm台账-多关系查询 | 2 | object | 200 |
| POST | `/dtp-rwd-server/rwd/aim/asset/objInfos` | apm台账-信息点统计 | 2 | object | 200 |
| POST | `/dtp-rwd-server/rwd/aim/asset/objList` | apm台账-对象实例列表 | 2 | object | 200 |
| POST | `/dtp-rwd-server/rwd/aim/asset/objTree` | apm台账-对象树 | 2 | object | 200 |
| POST | `/dtp-rwd-server/rwd/aim/asset/rel` | apm台账-关系查询 | 2 | object | 200 |
| POST | `/dtp-rwd-server/rwd/aim/equip/tree/copy` | apm台账配置(暂未使用)-设备树配置保存(复制一个或多个项目) | 0 | object | 200 |
| GET | `/dtp-rwd-server/rwd/aim/equip/tree/query` | apm台账配置-设备树配置查询 | 2 |  | 200 |
| POST | `/dtp-rwd-server/rwd/aim/equip/tree/save` | apm台账配置-设备树配置保存 | 3 | AssetTree[] | 200 |
| POST | `/dtp-rwd-server/rwd/aim/resp/info/query` | apm责任信息-查询 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/aim/resp/info/save` | apm责任信息-保存 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/aim/space/tree/copy` | apm台账配置(暂未使用)-空间树配置保存(复制一个或多个项目) | 0 | object | 200 |
| GET | `/dtp-rwd-server/rwd/aim/space/tree/query` | apm台账配置-空间树配置 | 2 |  | 200 |
| POST | `/dtp-rwd-server/rwd/aim/space/tree/save` | apm台账配置-空间树配置保存 | 3 | AssetTree[] | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/count` | 统计四大主体数据 | 0 | Root | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/object` | 查询对象实例数据标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/object/count` | 统计对象标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/object/info` | 查询对象信息点数据标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/object/info/count` | 统计对象信息点标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/object/info/insert` | 新增对象信息点标识数据 | 0 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/object/info/update` | 修改对象信息点标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/object/insert` | 新增对象实例标识数据 | 0 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/object/update` | 修改对象实例标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/relation` | 查询关系实例数据标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/relation/count` | 统计关系标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/relation/info` | 查询关系信息点数据标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/relation/info/count` | 统计关系信息点标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/relation/info/insert` | 新增关系信息点标识数据 | 0 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/relation/info/update` | 修改关系信息点标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/relation/insert` | 新增关系标识数据 | 0 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/relation/update` | 修改关系标识数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/update` | 修改四大主体标识数据为老数据 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/data/mark/update/status` | 修改四大主体数据为已发布 | 0 | Root | 200 |
| GET | `/dtp-rwd-server/rwd/dataPublish/getResult` | 获取数据发布结果 | 1 |  | 200 |
| GET | `/dtp-rwd-server/rwd/dataPublish/req` | 请求数据发布 | 2 |  | 200 |
| POST | `/dtp-rwd-server/rwd/def/type/rel/create` | 新建-管道类型及关系映射数据 | 4 | Root | 200 |
| POST | `/dtp-rwd-server/rwd/def/type/rel/delete` | 删除-管道类型及关系映射表数据 | 4 | string | 200 |
| POST | `/dtp-rwd-server/rwd/def/type/rel/query` | 查询-管道类型及关系映射表 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/def/type/rel/update` | 修改-管道类型及关系映射表数据 | 4 | Root | 200 |
| POST | `/dtp-rwd-server/rwd/group/proj/equip/count` | 项目-专业分组统计设备数量 | 1 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/group/proj/equipPos` | 各项目下有实例的设备分类 | 1 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/group/proj/equipPos/count` | 各项目-设备分类分组统计设备实例 | 1 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/group/proj/system/count` | 项目-专业分组统计系统数量 | 1 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/group/tree/roomFuncType` | 根据实例过滤空间功能类型树 | 1 | object | 200 |
| POST | `/dtp-rwd-server/rwd/halfSectionalView/queryHalfSectionalViewInfoByObjId` | 查询设备半剖图配置信息(模型和部件) | 4 |  | 200 |
| POST | `/dtp-rwd-server/rwd/instance/object/batchQueryProjectByIds` | 根据项目id集合批量查询项目信息 | 4 | string[] | 200 |
| POST | `/dtp-rwd-server/rwd/instance/object/query` | 查询物理世界对象 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/instance/object/queryEquipListByClassCode` | 按类型编码查询所有设备 | 4 | Root4 | 200 |
| POST | `/dtp-rwd-server/rwd/instance/object/queryEquipListByConditions` | 根据条件查询设备 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/instance/object/queryEquipListBySystemId` | 按系统查询系统下所有设备 | 4 | Root4 | 200 |
| POST | `/dtp-rwd-server/rwd/instance/object/queryInstanceTree` | 专业-设备定位-设备 实例树-已废弃 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/instance/object/queryObjectListSuperiorId` | 根据上级id查询下级关联对象 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/instance/object/querySpaceListByFloorIdAndRoomFuncType` | 查询指定楼层下所有指定空间类型的空间 | 4 | Root4 | 200 |
| POST | `/dtp-rwd-server/rwd/instance/object/querySpaceListByRoomFuncType` | 按指定空间功能类型查询此空间类型及其下级类型的所有空间列表 | 4 | Root4 | 200 |
| POST | `/dtp-rwd-server/rwd/iot/server/point/countPointByProtocolType` | 根据协议类型统计绑点数量 | 0 | IotServerPointDto | 200 |
| POST | `/dtp-rwd-server/rwd/iot/server/point/delete` | 删除绑点信息 | 0 | string[] | 200 |
| GET | `/dtp-rwd-server/rwd/iot/server/point/queryPointAllClassCode` | 查询绑点表所有对象分类 | 2 |  | 200 |
| POST | `/dtp-rwd-server/rwd/iot/server/v2/point/queryPointList` | 查询绑点数据列表 | 0 | RequestCriteriaIotServerPointDto | 200 |
| POST | `/dtp-rwd-server/rwd/meai/start` | 重推静态物理世界给MeAI | 3 |  | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryBuildingUnderProject` | A1.1、查询指定项目下的所有建筑 | 4 | ObjectQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryEquipByClassCodeAndFloor` | A2.7、查询指定楼层下所有指定对象类型的设备 | 4 | EquipSceneRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryEquipByClassCodeAndPartition` | A2.9、查询指定主要功能区下的所有指定对象类型的设备 | 4 | EquipSceneRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryEquipByClassCodeAndServiceSpace` | A2.10、查询服务于指定空间的所有指定对象类型的设备 | 4 | MapObject1 | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryEquipGroupBySystemId` | 系统下设备组查询 | 4 | ObjectQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryEquipInfoObjects` | A2.13 按设备类型编码和信息点条件查询所有设备 | 4 | EquipInfoPointRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryEquipLocationSpaceFloor` | A1.15 查询指定设备所在的空间（和楼层） | 4 | ObjectQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryEquipServiceSpaceFloor` | A1.16 查询指定设备服务的空间（和楼层） | 4 | ObjectQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryEquipUnderMajor` | A2.5、查询某专业下的所有设备 | 4 | SystemEquipRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryEquipWithinRadius` | A2.11 基于一个设备或一个坐标，找附近R米范围内的某种类型的设备 | 4 | RadiusRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryFloorUnderBuilding` | A1.2、查询指定建筑下的所有楼层 | 4 | ObjectQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryPartitionUnderBuilding` | A1.3、查询指定建筑下的所有主要功能区 | 4 | ObjectQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryProjectUnderGroupCode` | A1.4、查询指定集团下的所有项目 | 4 | ObjectQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderBuilding` | A1.7、查询建筑下指定空间功能类型的空间 | 4 | SpaceQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderPartition` | A1.9、查询主要功能区下指定空间功能类型的空间 | 4 | SpaceQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderProject` | A1.6、查询项目下指定空间功能类型的空间 | 4 | SpaceQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/querySpatialInformationPointObjects` | A1.14 按空间功能类型和信息点条件查询所有空间 | 4 | SpaceInfoPointRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/querySystemUnderBuilding` | A2.3、查询建筑下的所有系统 | 4 | SystemEquipRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/querySystemUnderMajor` | A2.4、查询某专业下的所有系统 | 4 | SystemEquipRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/querySystemUnderProject` | A2.2、查询项目下的所有系统 | 4 | SystemEquipRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryTenantTypeUnderBuilding` | A1.11、查询建筑下指定租赁业态的空间 | 4 | SpaceQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryTenantTypeUnderFloor` | A1.12、查询楼层下指定租赁业态的空间 | 4 | SpaceQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryTenantTypeUnderPartition` | A1.13、查询主要功能区下指定租赁业态的空间 | 4 | SpaceQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/object/queryTenantTypeUnderProject` | A1.10、查询项目下指定租赁业态的空间 | 4 | SpaceQueryRequest | 200 |
| POST | `/dtp-rwd-server/rwd/publish/change/count` | 统计数据发布数据集 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/publish/change/record` | 查询数据发布变更记录 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryAllClassCodeFromIds` | R4-1 指定起点，查询同条路径上指定类型的所有终点 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryAllClassCodeToIds` | R5-1 指定终点，查询同条路径上指定类型的所有起点 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryClassCodeFromIds` | R4 指定起点，查询指定类型的终点 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryClassCodeToIds` | R5 指定终点，查询指定类型的起点 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryExistsBetween` | R1 判断节点间是否存在当前关系 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryFromToNode` | R2 通过关系查询起点和终点集合 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryNodeForSpacePath` | R9 查询设备服务于空间的路由 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryNodePathIdInSet` | R6 批量查询起点设备到终点设备之间的途径设备 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryNodeToGeneralPath` | R7 查询指定空间到设备的路径 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryPathByTag` | R12 基于标签，查找设备之间的路由-APM | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryPathInSpaceId` | R8 查询起点设备到终点设备途径的空间 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryRelationIdInSet` | R3 批量查询起点设备和终点设备是否有某种关系 | 4 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/querySpaceToTagPath` | R13  查找设备在管网中途径空间的路由-APM | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryTagTypeFromIds` | R10 指定起点，查找某种标签类型的终点设备-APM | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/route/queryTagTypeToIds` | R11 指定终点，查找某种标签类型的起点设备-APM | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/work/order/bfList` | 查询项目下所有的建筑-楼层list | 2 | object | 200 |
| POST | `/dtp-rwd-server/rwd/work/order/classCode/bfList` | 专业-设备类下的设备实例或空间所在建筑楼层,返回建筑-楼层树 | 2 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/work/order/classCode/spList` | 专业-设备类下的设备实例所在空间,返回空间功能类型树 | 2 | object[] | 200 |
| POST | `/dtp-rwd-server/rwd/work/order/search` | 无条件时的搜索 | 0 | object | 200 |
| POST | `/dtp-rwd-server/rwd/work/order/spObjList` | 查询指定空间下的所有设备实例,按照设备类分组返回 | 2 | object | 200 |
| GET | `/dtp-rwd-server/u` | ⭐修改说明 | 0 |  | 200 |

---

## 节 6 · 接口 · 接口契约 · risk-data-service（134 端点）

```yaml
section_id: SEC-异常事件-RCC-接口-risk-data-service
kind: 接口　layer: 实建层
source_authority: 代码　build_status: 已实现
regenerable: true　generated_from_commit: ca6dfed　generator: openapi
review_state: 草稿　rag.indexable: false
```

**服务**：risk-data-service　**端点数**：134

| 方法 | 路径 | 摘要 | 入参数 | 请求体 | 响应码 |
|------|------|------|--------|--------|--------|
| POST | `/yiheng-facility-ops-server/cold/problem/third-part/page` | (二开)资产问题明细 | 3 | EEProblemThirdPageDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/obj-instance/problem/abnormal-instance/list` | 【资产问题统计】异常资产列表查询 | 3 | EEObjInstanceProblemQryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/obj-instance/problem/count-by-date` | 【资产问题统计】发生次数按时间分布 | 3 | EEObjInstanceProblemStatisticsMajorQryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/obj-instance/problem/detail` | 【资产问题统计】资产问题原因分析 | 3 | EEObjInstanceProblemStatisticsDetailQryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/obj-instance/problem/detail-third` | 【异常问题】资产问题详情统计（价值组用） | 3 | EEProblemInstanceQryDto[] | 200 |
| GET | `/yiheng-facility-ops-server/ee/obj-instance/problem/major-object-tree` | 【资产问题统计】已交付实例专业对象树 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/ee/obj-instance/problem/problem-category/list` | 【资产问题统计】问题类列表查询 | 3 | EEObjInstanceProblemQryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/obj-instance/problem/simple-detail-third` | 【异常问题】资产问题摘要（价值组用侧弹窗） | 3 | integer[] | 200 |
| POST | `/yiheng-facility-ops-server/ee/obj-instance/problem/static-third` | 【异常问题】资产问题简单统计（价值组用） | 3 | EEProblemInstanceQryDto[] | 200 |
| POST | `/yiheng-facility-ops-server/ee/obj-instance/problem/statistics-list` | 【资产问题统计】列表查询 | 3 | EEObjInstanceProblemStatisticsQryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/problem/third-part/page` | 查询所有问题 | 3 | EEProblemQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/problem/third-part/query-binding-cameras` | 【异常问题】根据问题查询绑定的摄像头ID | 3 | integer[] | 200 |
| POST | `/yiheng-facility-ops-server/ee/problem/third-part/query-by-source-ids` | 根据sourceId查询对应的问题 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/ee/risk-event/count-by-date` | 【风险事件统计】发生次数按时间分布 | 3 | EEStatisticsMajorQryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/risk-event/count-statics` | 查询异常实例 | 3 | EERiskEventStaticsQryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/risk-event/detail` | 【风险事件统计】详情页面 | 3 | EEStatisticsRiskEventQryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/risk-event/exception-event-list` | 【风险事件统计】异常事件信息 | 3 | EEStatisticsRiskEventQryDto | 200 |
| POST | `/yiheng-facility-ops-server/ee/risk-event/statistics-list` | 【风险事件统计】列表查询 | 3 | EEStatisticsQryDto | 200 |
| GET | `/yiheng-facility-ops-server/exception-event/baseInfo` | 【异常事件-权限】异常事件详情基本信息 ⚠️deprecated | 4 |  | 200 |
| GET | `/yiheng-facility-ops-server/exception-event/problem/cold/detail` | 【异常问题】问题详情查询 | 5 |  | 200 |
| POST | `/yiheng-facility-ops-server/exception-event/problem/cold/find-can-remove-record` | 【评估记录】查找不在问题下的评估记录 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring` | 【异常问题】问题详情IOT实时监控 | 3 | IotMonitoringQryDto | 200 |
| GET | `/yiheng-facility-ops-server/exception-event/problem/cold/iot/monitoring-by-instance` | 【异常问题】对象IOT实时监控 | 3 | IotMonitoringQryDto | 200 |
| GET | `/yiheng-facility-ops-server/exception-event/problem/cold/list` | 【异常事件】异常事件详情-问题列表 | 4 |  | 200 |
| GET | `/yiheng-facility-ops-server/exception-event/problem/cold/page-evaluate-record` | 【异常问题】评估记录列表 | 7 |  | 200 |
| POST | `/yiheng-facility-ops-server/exception-event/problem/cold/page-third` | 【异常问题】资产问题统计列表（能源与碳组用） | 3 | EEProblemStaticQryDto | 200 |
| GET | `/yiheng-facility-ops-server/exception-event/problem/cold/query-cameras` | 【异常问题】查询问题设备监控摄像头 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/exception-event/problem/cold/remove/record` | 【异常问题】资产问题统计数据导出 | 3 | integer[] | 200 |
| POST | `/yiheng-facility-ops-server/exception-event/problem/cold/statistics/download` | 【异常问题】资产问题统计数据导出 | 3 | EEProblemExportQryDto | 200 |
| GET | `/yiheng-facility-ops-server/exception-event/problem/iot/query-report-data-by-id` | 【IOT报警】IOT报警信息查询 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/exception-event/statics` | 【异常事件-权限】统计 | 3 | ThirdPartExceptionEventQryDto | 200 |
| POST | `/yiheng-facility-ops-server/exception-event/third-part/date-statics` | 【异常事件】异常事件按天统计数量（冷数据） | 3 | EEEventStatisticsQryDto | 200 |
| POST | `/yiheng-facility-ops-server/exception-event/third-part/page` | 【异常事件】异常事件列表（热数据） | 3 | EEListQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/exception-event/third-part/query-exception-record-source-ids` | 根据异常事件查询关联的始发巡检维保recordSourceId（冷数据） | 3 | EERecordSourceIdsQryDto | 200 |
| GET | `/yiheng-facility-ops-server/exception-event/third-part/risk-instance-statics` | 【异常事件】风险按实例和风险事件统计（热数据） | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/exception/event/baseInfo` | 【异常事件】异常事件详情基本信息 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/exception/event/list` | 【异常事件】异常事件列表 | 3 | EEListQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/exception/event/statics` | 【异常事件】统计 | 3 | ThirdPartExceptionEventQryDto | 200 |
| GET | `/yiheng-facility-ops-server/exe-plan/detail` | 【执行计划】计划详情 | 5 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe-plan/export/list` | 【执行计划】计划导出列表查询 | 3 | ExportPlanQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/exe-plan/export/strategy/list` | 【执行计划】计划关联策略导出列表查询 | 3 | ExportPlanQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/exe-plan/monitor/view-statistic` | 【计划监控】视图统计 | 3 | MonitorViewQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/exe-plan/third/list` | 【执行计划】第三方计划列表查询 | 3 | ThirdPlanQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-category/batch-delete` | 【ZX策略分类】批量删除策略分类 | 3 | integer[] | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-category/copy` | [ZX策略事项]拷贝策略分类 | 3 | ExeStrategyCategoryCopyDto | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-category/detail` | [ZX策略分类]策略分类详情 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-category/exec-step-mark/update` | 【ZX策略分类】开启/关闭按顺序执行 | 3 | ExeStrategyCategoryExecStepUpdateDto | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-category/independence-mark/update` | 【ZX策略分类】设置/取消独立标记 | 3 | ExeStrategyCategoryIndependenceUpdateDto | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-category/name-exists` | 【ZX策略分类】名称重复校验 | 7 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-category/save` | 【ZX策略分类】新增或编辑策略分类 | 3 | ExeStrategyCategorySaveDto | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/batch-add` | [ZX策略事项]批量新增策略事项 | 3 | ExeStrategyItemInsertDto[] | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/batch-update` | [ZX策略事项]批量修改策略事项 | 3 | ExeStrategyItemBatchUpdateDto | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/class-code-poi` | [ZX策略事项]对象类信息点 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/copy` | [ZX策略事项]拷贝策略事项 | 3 | StrategyItemCopyStruct | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/delete` | [ZX策略事项]删除策略事项 | 4 |  | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/detail/{id}` | [ZX策略事项]查询策略事项详情 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/optional-measures/list` | [ZX策略事项]根据对象类查询可关联的措施列表 | 3 | ExeStrategyItemOptionalMeasureQryDto | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/publish` | [ZX策略事项]发布策略 | 3 | ExeStrategyItemPublishDto | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/publish/detail/{id}` | 【ZX策略事项】(已发布)策略事项详情(第三方[标品二开]也在使用，谨慎修改) | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/publish/observe/object` | 【ZX策略事项】(已发布)查询观测对象(可能西安的在用) | 5 |  | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/publish/publish-record` | 【ZX策略事项】(已发布)发布时间(可能西安的在用) | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/publish/simple-list` | 【ZX策略事项】(已发布)简单列表查询 | 3 | ExeStrategyItemQueryDto | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/publish/strategy-class-tree` | 【ZX策略事项】(已发布)策略分类对象树 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/rel-object/page` | 【ZX策略事项】通过策略事项id查询关联的对象集合 | 3 | ExeStrategyItemObjectRelPageQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/rel-object/save` | [ZX策略事项]策略事项关联对象实例 | 3 | ExeStrategyItemRelObjectSaveDto | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/room-func-type/tree` | [ZX策略事项]空间功能树 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/sorted-class-code` | [ZX策略事项]已发布策略事项的对象类顺序 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/strategy-class-tree` | 【ZX策略事项】(预发布)策略分类对象树(第三方在使用：新建非计划巡检工单) ⚠️deprecated | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/strategy/suitable-object-class` | [ZX策略事项]获得ZX适用对象类树 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/suitable-instance/page` | [ZX策略事项]分页查询策略事项的适用对象实例 | 3 | ExeStrategyItemInstancePageQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/suitable-object-class/instance-rel/batch-update` | [ZX策略事项]批量修改策略分类对象类下的实例与策略事项的关联关系 | 3 | ExeSuitableInstanceRelBatchUpdateDto | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/tree/strategy-class-tree` | [ZX策略事项]策略分类对象树 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/unLink-plan-count` | [ZX策略事项]未关联计划的事项数量 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/exe/strategy-item/update` | [ZX策略事项]编辑策略事项 | 3 | ExeStrategyItemUpdateDto | 200 |
| GET | `/yiheng-facility-ops-server/exe/strategy-item/verify` | [ZX策略事项]校验策略事项 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/iot/alert/rule/third-part/query-by-instance-id` | 根据设备实例查询报警规则 | 4 | IotAlertRulePointQryDto[] | 200 |
| POST | `/yiheng-facility-ops-server/iot/alert/rule/third-part/query-detail` | IOT报警规则详情查询 | 3 | IotAlertRuleDetailQryDto | 200 |
| POST | `/yiheng-facility-ops-server/open-api/iot-rule/list-by-instance-and-measure` | 批量查询报警规则实例明细 | 3 | IotRuleQryDto | 200 |
| POST | `/yiheng-facility-ops-server/open-api/klb/klb-risk/list-by-risk-event-business-ids` | 批量查询风险事件知识下的风险 | 3 | KlbRiskQryDto | 200 |
| GET | `/yiheng-facility-ops-server/open-api/pj-control-objective/list` | 【管控目标】管控目标列表查询 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/open-api/pj-deal-major/list-by-other-object-and-klb-measure` | 【项目处理专业】按知识措施和其他对象信息查询处理专业 | 3 | PjDealMajorThirdPartyQryByOtherObjectKlbMeasureDto[] | 200 |
| POST | `/yiheng-facility-ops-server/open-api/pj-deal-major/match-by-major-class-code` | 【项目处理专业】按专业对象类匹配处理专业 | 3 | MajorClassDto | 200 |
| POST | `/yiheng-facility-ops-server/open-api/rwd-instance-tree/list` | 【实例树】根据对象实例id查询实例树 | 3 | RwdInstanceTreeThirdPartyQryDto | 200 |
| POST | `/yiheng-facility-ops-server/open-api/suggest/fmea-suggest` | 【异常问题】FMEA智能体推荐 | 3 | string[] | 200 |
| POST | `/yiheng-facility-ops-server/pj/deal-major/delete` | 删除 | 3 | integer[] | 200 |
| GET | `/yiheng-facility-ops-server/pj/deal-major/detail` | 根据id查处理专业详情 | 4 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/deal-major/download` | 风险点业务类别导出 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/deal-major/equipment-major-tree` | 设备设施类型筛选 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/deal-major/init` | 初始化处理专业和规则 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/deal-major/list` | [处理专业]列表查询(二开会用) | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/deal-major/list-detail` | 列表查询(详细) | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/deal-major/list-simple` | 列表查询(简单) | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/deal-major/list-with-category` | 根据处理专业查询风险分类标签 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/deal-major/majors` | 交付专业列表 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/deal-major/no-delivery-component-tree` | 未交付对象类树 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/deal-major/save` | 保存 | 3 | PjDealMajorSaveDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/deal-major/save-category` | 保存风险分类 | 3 | PjDealMajorSaveCategoryDto[] | 200 |
| POST | `/yiheng-facility-ops-server/pj/deal-major/sort` | 修改排序 | 3 | PjDealMajorSortDto[] | 200 |
| GET | `/yiheng-facility-ops-server/pj/deal-major/tips` | 查询提示栏 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/deal-major/valid` | 重复性校验(只需要传需要校验的字段) | 3 | PjDealMajorSaveDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk-event/batch-clear` | 批量清空标签 | 3 | BatchClearDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk-event/batch-update` | 批量修改 | 3 | BatchUpdateDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk-event/clear-change-mark` | 清除变更标记 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk-event/instance/page` | 风险实例分页接口 | 3 | PjRiskEventInstanceQueryDto | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk-event/list` | 分页查询 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk-event/listInstanceFilters` | 【项目风险】风险实例对象筛选 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk-event/no-delivery-component-tree` | 未交付对象类树 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk-event/room-func-type` | 空间功能类型列表 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk-event/tree` | 隐患树 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk-event/update` | 单条更新 | 3 | PjRiskEventUpdateDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk-event/update-follow` | 更新是否主动管理 | 3 | UpdateFollowDto | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk-event/update-tips` | 更新提示 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk-impact-category/list` | 【项目风险影响类型】列表查询(第三方也在使用，谨慎修改) | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk-impact-category/listThird` | 【项目风险影响类型】列表查询(第三方也在使用，谨慎修改) | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk-impact-category/save` | 【项目风险影响类型】保存 | 3 | PjRiskImpactCategorySaveDto[] | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk/all-room-func-type` | 空间功能类型列表 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/batch-clear` | 批量清空标签 | 3 | PjRiskBatchClearDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/batch-update` | 批量修改 | 3 | PjRiskBatchUpdateDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/create` | 【项目风险】自定义风险 | 8 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/deal-major-class-tree` | 风险点交集-设备设施类型筛选 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk/download` | 风险点分层定级导出 | 3 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk/instance/criteria` | 风险实例分页接口 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/instance/page` | 风险实例分页接口 | 3 | PjRiskInstanceQueryDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/list-by-ids` | 根据风险id查询风险详情 | 3 | PjRiskIdQuery | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/list-fault-effect-risk` | 【不视作故障】标签影响风险列表 | 3 | FaultEffectPjRiskDto | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk/listInstanceFilters` | 【项目风险】风险实例对象筛选 | 4 |  | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk/major-objClass-tree` | 【项目风险】专业对象类树 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/no-delivery-component-tree` | 风险点交集-未交付对象类树 | 3 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/page` | 分页查询风险点 | 3 | PjRiskQueryStruct | 200 |
| GET | `/yiheng-facility-ops-server/pj/risk/room-func-type` | 获取风险点的空间功能类型 | 4 |  | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/simple-page-third` | 【项目风险】风险名称查询(能源与碳组在用) | 3 | PjRiskPageSimpleDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/update` | 修改风险点 | 3 | PjRiskUpdateDto | 200 |
| POST | `/yiheng-facility-ops-server/pj/risk/update-fault-effect-risk` | 取消【不视作故障】标签影响风险列表 | 3 | FaultEffectPjRiskDto | 200 |
| GET | `/yiheng-facility-ops-server/risk-map/instance-tree/get` | 【风险地图】实例树查询(谨慎修改，第三方已在使用：自主运行) | 4 |  | 200 |

---

## 节 7 · 接口 · 接口契约 · work-order-service（27 端点）

```yaml
section_id: SEC-异常事件-RCC-接口-work-order-service
kind: 接口　layer: 实建层
source_authority: 代码　build_status: 已实现
regenerable: true　generated_from_commit: ca6dfed　generator: openapi
review_state: 草稿　rag.indexable: false
```

**服务**：work-order-service　**端点数**：27

| 方法 | 路径 | 摘要 | 入参数 | 请求体 | 响应码 |
|------|------|------|--------|--------|--------|
| POST | `/fm-workorder-server/restWorkOrderService/queryWorkOrderList` | 【工单大厅】分页查询(自用、迈瑞二开)调用 | 0 | JSONObject | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/query/complete-list-by-orderIds` | 基于工单id集合返回符合工作类型工单列表数据 | 3 | WorkOrderCompleteInfoQueryDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/query/his/complete-list-by-createTime` | 基于项目维度获取历史已完成符合工作类型工单列表数据 | 4 | WorkOrderHisQueryDTO | 200,400,401,404 |
| GET | `/fm-workorder-server/work-order/query/list-action-by-exceptionId` | 根据异常事件查询关联工单响应信息 | 2 |  | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/query/list-by-dto` | 根据时间或工单类型查询工单 | 2 | WorkOrderPageQueryDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/query/list-by-objectId` | 根据对象id查询进行中的维修工单信息 | 3 | RepairWorkOrderQueryDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/query/list-by-param` | 根据条件查询工单列表 | 2 | WorkOrderPageParamDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/query/list-receiver-by-exceptionId` | 根据异常事件查询关联的排查处理单的可接工单的所有人员 | 3 | WorkOrderReceiverQueryDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/query/maintenance/executor/details` | 排查处理单过程详情 | 1 |  | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/query/maintenance/executor/details/v2` | 排查处理单过程详情V2 | 1 |  | 200,400,401,404 |
| GET | `/fm-workorder-server/work-order/query/query-by-exceptionId` | 异常事件查询工单基本信息 | 1 |  | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task-cost/query` | 批量已完成工单查询费用(二开接口&meoi接口) | 3 | TaskCostQuery | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task-cost/queryAllCost` | 批量全量工单查询费用 | 2 | TaskCreateCostQuery | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/batch-create` | 批量创建工单任务 | 0 | WorkOrderTaskCreateDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/batch-query` | 批量查询工单任务 | 0 | WorkOrderTaskQueryDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/feedback/getOrderInfos` | 根据反馈记录查询工单信息 | 1 | FeedBackReocrdParam[] | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/feedback/getUploadInfos` | 根据反馈记录查询上报信息 | 1 | FeedBackReocrdParam[] | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/feedback/records` | 根据反馈记录id查询反馈记录信息 | 1 | string[] | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/last-operate-by-instanceIds` | 【MEOI】根据对象实例id集合查询最近一次完成的工单信息 | 0 | string[] | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/list-by-orderIds` | 根据工单集合批量查询任务基本信息集 | 2 | TaskPageDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/list-observe-result-instanceIds` | 【合规报表】根据对象实例id集合查询实例观测结果 | 0 | TaskExecResultDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/list-plan-task` | 根据策略事项、对象实例查询计划巡检、计划维保工单的任务信息 | 3 | WorkOrderPlanTaskQueryDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/plan-task-query` | 巡检维保计划任务统计查询 | 0 | WorkOrderTaskQueryDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work-order/task/query-by-workOrderId` | 根据工单id查询任务基本信息 | 1 | WorkOrderTaskBaseQueryDto | 200,400,401,404 |
| POST | `/fm-workorder-server/work/flow/getJobTypeList` | 【公共接口】-查询符合条件的工作类型 | 1 | JobTypeParam | 200,400,401,404 |
| POST | `/fm-workorder-server/work/flow/public/listByParam` | 【公共接口】-查询符合条件的工单流程集合 | 0 | PublicWorkFlowListByParamDTO | 200,400,401,404 |
| POST | `/fm-workorder-server/workOrder/userReport/queryUserReportOrderData` | 查询用户报事工单数据 | 2 | UserReportQueryDto | 200,400,401,404 |

---

## 节 8 · 枚举 · 枚举 · risk-data-service（142 个去重取值集）

```yaml
section_id: SEC-异常事件-RCC-枚举-risk-data-service
kind: 枚举　layer: 混合
source_authority: 代码　build_status: 已实现
regenerable: true　generated_from_commit: ca6dfed　generator: openapi-enum
review_state: 待PM确认　rag.indexable: false
drift: [DRIFT-0002]
```

> 【需代码·核对】[DRIFT-0002] 节「问题来源（枚举）」在版本 v3.0, v3.1 间正文不一致，需 PM 认定哪版作数

**服务**：risk-data-service　**去重取值集**：142

> 值由代码（OpenAPI enum）生成；每个取值的规范名/含义待 PM 与本体对齐。

| 取值集（代码真实值） | 引用次数 | 示例引用处 |
|----------------------|----------|------------|
| PROJECT, BUILDING, FLOOR, EQUIPMENT, SPACE, SYSTEM, SHAFT, EQUIPMENT_GROUP, PART | 92 | IotAlertRuleDisableInstanceVo.objType, IotAlertRuleDisableInstanceTreeVo.objType, IotAlertRuleBatchStartVo.objType |
| HIGH, MID, LOW | 38 | PjKlbRiskEventManageScopeVo.faultStateLevel, PjKlbRiskEventManageScopeVo.accidentStateLevel, fragmentaryProblemLists.importance |
| NORMAL, WARN, EXCEPTION | 36 | IotRecordAndRelStruct.feedbackResult, IotRecordInfoVo.riskStatus, EEProblemStatusRecordVo.feedbackResult |
| ROUTING_INSPECTION, MAINTENANCE | 27 | StrategyStatisticInfo.parentTagType, TaskVo.workType, MeasureTaskStatisticVo.parentTagType |
| HIGH, MEDIUM_HIGH, MEDIUM, LOW, EXTREMELY_LOW, UNKNOWN | 21 | ExceptionEventResolvedTitleStruct.importanceDegree, ExceptionEventResolvedRelExceptionStruct.importanceDegree, ExceptionEventListVo.importanceDegree |
| RISK_REPORT_UPLOAD, MANUAL_CHANGE, WORK_ORDER, IOT_ALARM, ROUTING_INSPECTION, MA | 17 | EEProblemStatusRecordVo.sourceType, WorkOrderRepairAndChangeDto.sourceType, WorkOrderEvaluateRecordUploadDto.sourceType |
| E1, E2, E3, E4, E5 | 16 | MeasureTaskStatisticVo.controlType, PjProblemRepairVo.controlType, KlbMeasureStruct.controlType |
| DISABLE, ENABLE | 15 | MonitorViewQueryDto.status, PlanInfo.status, MonitorViewPlanQueryDto.status |
| EACH_DAY, EACH_WEEK, EACH_MONTH, EACH_QUARTER, EACH_HALF_OF_YEAR, EACH_YEAR, EAC | 14 | Period.periodType, PeriodUnit.periodType, ExeStrategyItemBatchUpdateDto.periodType |
| UNRESOLVED, RESOLVED | 13 | ExceptionEventListVo.exceptionEventStatus, EEListQueryDto.exceptionEventStatus, ThirdPartExceptionEventQryDto.exceptionEventStatus |
| E0, E1, E2 | 12 | PjKlbRiskEventManageScopeVo.importance, PjKlbRiskEventManageScopeVo.ordinary, PreRiskEventDetailVo.ordinary |
| JIAJIAN, CHENGCHU, SERIAL, PARALLEL, NONE | 11 | fragmentaryProblemLists.logic, EEInstanceTreeVo.logic, PjRiskTreeNodeVo.logic |
| CLASS, INFO | 10 | AlertConfigGlobalDegreeDto.dataType, AlertConfigClassAndInfoBatchDto.dataType, AlertConfigInstanceDto.dataType |
| E0, E1, E2, E3 | 10 | PjKlbRiskEventManageScopeVo.riskMeasureAimLevel1, RiskEventCategoryVo.riskMeasureAimLevel1, RiskMapSecondMajorVo.riskMeasureAimLevel1 |
| FROM_TO, TO_FROM, BOTH | 9 | BDTPParameterVo.relationDirection, OtherObjectRelationship.relationDirection, BDTPParameterStruct.relationDirection |
| GRADIENT, MUTANT, COMPLIANCE, ALARMRESPONSE | 9 | 0.type, PjKlbRiskEventManageScopeVo.riskEventType, PreRiskEventDetailVo.riskEventType |
| NONE, APP, APP_WEB, WEB | 9 | IotMemRuleVo.verifyType, IotAlertRuleVo.verifyType, RecordExtInfo.verifyType |
| PLUS, REDUCE, MULTIPLICATION, DIVISION, GREATERTHANOREQUALTO, GREATERTHAN, EQUAL | 9 | IotSubConditionStruct.operator, IotSubConditionStruct.durationOperator, SubCondition.operator |
| RCC_REF, CUSTOMIZE | 9 | ExeMeasureVo.sourceType, ExeMeasureDto.sourceType, StrategySuitableObjClassMeasureVo.sourceType |
| STATIC, TWIN, WORK_CALENDAR | 9 | ParamVo.type, IotParameterVo.type, ObjectInfoCode.type |
| E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17,  | 8 | PjKlbRiskEventManageScopeVo.riskMeasureAimLevel2, RiskEventCategoryVo.riskMeasureAimLevel2, RiskMapSecondMajorVo.riskMeasureAimLevel2 |
| EXCEPTION, WARN, NORMAL, UNKNOWN, CONJECTURE_NORMAL, CONJECTURE_EXCEPTION, CONJE | 8 | fragmentaryProblemLists.treeNodeStatus, EEInstanceTreeVo.treeNodeStatus, RiskMapInstanceTreeNodeVo.treeNodeStatus |
| NORMAL, ABNORMAL, SUPERSIGN | 8 | SubCondition.feedbackStatus, AlertCondition.feedbackStatus, ConditionStatusVo.status |
| OPTION, PARAMETER_CALCULATION | 8 | TaskHistoryCompareVo.feedbackType, ExeMeasureVo.feedbackType, ExeMeasureDto.feedbackType |
| COMMON_POI, SPECIAL_POI, GENERAL_POI, GENERAL_ZONE_POI, BUILDING_POI | 7 | KlbEntityObjectPoi.poiType, PoiFilterVo.poiType, ObjectClassPoi.poiType |
| ENUM, NUM | 7 | InfoPointStruct.numOrBoolEnum, PlaceHolderMark.numOrBoolEnum, ObjectInfoCode.valueType |
| MAJOR, OBJECT_TYPE, OBJECT_CLASS | 7 | ObjectTreeBaseVoMajorObjectClassTreeNodeEnum.type, ObjectTreeVoPjKlbRiskEventManageScopeVo.type, ObjectTreeBaseVoMajorObjectClassAndObjTypeTreeNodeEnum.type |
| OVERDUE_UNFINISHED, OVERDUE_FINISHED, SHAM_EXECUTION, PERIOD_DISAGREE, DISABLE | 7 | NumStatisticStructTaskExceptionTag.code, MonitorViewQueryDto.exceptionTag, MonitorViewPlanQueryDto.exceptionTag |
| PROBLEM_HAPPEN, PROBLEM_HAPPEN_VERIFICATION, MESSAGE_NOTIFY, EXCEPTION_EVENT_RES | 7 | ProblemHappenStruct.type, ExceptionEventResolvedStruct.type, MessageNotifyStruct.type |
| PIVOTAL, OTHER | 6 | PjRiskImpactInstVo.crucial, PjRiskImpactCategorySimpleVo.crucial, PjRiskImpactCategoryVo.crucial |
| SYSTEM, EQUIPMENT_DIC, EQUIPMENT, COMPONENT, FUNCTION_OBJECT, ENTITYCOMBINATION, | 6 | EquipmentObjectVo.entityType, ObjectClassAttrOptionsVo.entityType, KlbEntityVo.entityType |
| YEAR, MONTH, NONE | 6 | EEObjInstanceProblemStatisticsQryDto.compareType, EEObjInstanceProblemStatisticsMajorQryDto.compareType, EEObjInstanceProblemQryDto.compareType |
| E0, E1, E2, E3, E4, E5 | 5 | PjKlbRiskEventManageScopeVo.lossType, PreRiskEventDetailVo.lossType, DeductiveInduction.lossType |
| E1, E2 | 5 | LaborMaxMin.manHour, KlbMeasureVo.departmentalRequirements, KlbMeasureVo.degradedMaintenance |
| EXCEPTION, CONJECTURE_EXCEPTION, POTENTIAL, UNKNOWN, GENERAL_NORMAL, NORMAL | 5 | RiskMapStatusItemVo.riskStatus, RiskMapRiskInstanceListVo.riskStatus, CategoryInstanceVo.riskStatus |
| FIND_EXCEPTION, SOLVING, VERIFICATION | 5 | ExceptionEventListVo.solveProcess, SimpleExceptionEventVo.solveProcess, ExceptionEventBaseInfoVo.solveProcess |
| HIGH, MEDIUM, UNKNOWN, PART_UNKNOWN, LOW | 5 | RiskMapSecondMajorVo.riskLevel, RiskMapRiskEventDetailVo.riskLevel, RiskMapRiskLevelItemVo.riskLevel |
| NORMAL, HUB_EXPAND_NODE, HUB_EXPAND_INSTANCE_NODE | 5 | fragmentaryProblemLists.treeNodeType, EEInstanceTreeVo.treeNodeType, RiskMapInstanceTreeNodeVo.treeNodeType |
| OBJECT_TYPE, OBJECT_CLASS, STRATEGY_CATEGORY, STRATEGY_TYPE, STRATEGY_SECOND_TYP | 5 | ObjectTreeBaseVoStrategyObjectClassTreeEnum.type, StrategyCategoryTreeVoExeStrategyItemVo.type, StrategyCategoryTreeVoOriginStrategyItemVo.type |
| OBJ_INSTANCE, RISK_EVENT | 5 | PjRiskControlObjectiveThirdPartyVo.objectiveObjType, PjRiskControlObjectiveListVo.objectiveObjType, PjRiskControlObjectiveDetailVo.objectiveObjType |
| OR, AND | 5 | IotConditionStruct.relationship, ConditionGroup.typeOfIntraGroupRelationship, AlertCondition.typeOfIntraGroupRelationship |
| OVERALL, MAJOR, CUSTOM | 5 | PjRiskControlObjectiveThirdPartyVo.type, PjRiskControlObjectiveListVo.type, PjRiskControlObjectiveDetailVo.type |
| SECOND, MINUTE, HOUR, DAY | 5 | PjControlObjectiveTimeVo.unit, TimeConditionVo.unitOfTime, TimeConditionStruct.unitOfTime |
| UNFINISHED, FINISHED | 5 | EquipmentInstanceVo.status, EquipmentInstanceQueryVo.status, EquipmentInstanceDetailVo.status |
| YEAR, MONTH, DAY, HOUR, MINUTE | 5 | Periods.unitOfTime, TimeMaxMin.unitOfTime, DefaultPeriodsMaxMin.unitOfTime |
| AC_SEASON, OPENING | 4 | WorkCalendarParameterVo.workCalType, targetParam.workCalType, WorkCalendarParameterStruct.workCalType |
| EXTERNAL_USER, CONSULTANT | 4 | EEProblemStatusRecordVo.workOrderUploadType, WorkOrderEvaluateRecordUploadDto.workOrderUploadType, records.workOrderUploadType |
| MAJOR, OBJECT_TYPE, OBJECT_CLASS, MEOI_SPACE_TYPE | 4 | ObjectTreeBaseVo«string».type, ObjectTreeVo«string,PjKlbRiskEventManageScopeVo».type, IotAlertRulePointTreeVo.type |
| MANUAL_OBSERVATION_INVALID, OTHER_NODE_STATUS_CHANGE | 4 | fragmentaryProblemLists.invalidType, EEInstanceTreeVo.invalidType, InstanceTreeNodeVo.invalidType |
| NO, NEW, UPDATE | 4 | PreRiskEventDetailVo.preKnowledgeChangeType, PreRiskEventDetailVo.tyKnowledgeChangeType, PreRiskEventDetailVo.csKnowledgeChangeType |
| NONE, PHOTOGRAPH, SCAN, NFC | 4 | PunchingMode.punchingModelType, ExePlanDetailVo.punchingModelType, ExePlanSaveDto.punchingModelType |
| PLAN_MAINTENANCE, SUBSCRIBER_REPORT, SCHEDULED_INSPECTION, ABNORMAL_MAINTENANCE, | 4 | WorkOrderActionDto.workType, WorkOrderUploadAndRepairDto.workType, ObservationReportVo.type |
| RISK, INSTANCE, ORIGINAL_STRATEGY_ITEM, EXE_STRATEGY_ITEM, EXE_STRATEGY_ITEM_PUB | 4 | TagSaveDto.tagType, TagSaveByTypeDto.tagType, ObjectTreeBaseVoTagTypeEnum.type |
| SPACE, OBJECT | 4 | PunchingMode.punchingModelObject, ExePlanDetailVo.punchingModelObject, ExePlanSaveDto.punchingModelObject |
| UNDONE, DONE, UNCONFIRMED, WAIT_MODIFY, CONFIRMED | 4 | OriginalStrategyItemSaveDto.status, StrategyItemChangeStatusDto.status, OriginalStrategyItemVo.status |
| DATAREQUIREMENTSNORMAL, DATAREQUIREMENTSABNORMAL, NODESTATECHANGEOPERATINGCONDIT | 3 | ConditionGroup.conditionGroupType, AlertCondition.conditionGroupType, AlertConditionGroup.conditionGroupType |
| FIRSTLEVEL, SECONDLEVEL | 3 | ConditionGroup.conditionGroupLevel, AlertCondition.conditionGroupLevel, AlertConditionGroup.conditionGroupLevel |
| GREAT, NORMAL, SLIGHT | 3 | RiskMapSecondMajorVo.impactLevel, RiskMapRiskEventDetailVo.impactLevel, RiskMapRiskQueryDto.impactLevel |
| HIGH_LEVEL_HAPPENED_WARN, HIGH_LEVEL_TIMEOUT_WARNING, HIGH_LEVEL_TIMEOUT_UNSOLVE | 3 | AlertExceptionEventMsgRuleSaveDto.category, AlertExceptionEventMsgRuleVo.category, MessageNotifyDataStruct.messageType |
| HOUR, DAY, WEEK, MONTH | 3 | fragmentaryProblemLists.statusValidityPeriodUnit, EEInstanceTreeVo.statusValidityPeriodUnit, InstanceTreeNodeVo.statusValidityPeriodUnit |
| IE_00, IE_01, IE_02 | 3 | ExceptionEventListVo.impactExpansion, EEListQueryDto.impactExpansion, ExceptionEventBaseInfoVo.impactExpansion |
| MAJOR, OBJECT_TYPE, OBJECT_CLASS, COMPONENT_NODE | 3 | ObjectTreeBaseVoMajorClassAndSpaceFunctionEnum.type, PjRiskMajorObjClassTreeVo.type, ObjectClassTreeWithComponentVo.type |
| MAJOR, OBJECT_TYPE, OBJECT_CLASS, STRATEGY_CATEGORY, ROOM_FUNCTION | 3 | ObjectTreeBaseVoMajorClassStrategyEnum.type, ObjectTreeVoExeStrategyItemVo.type, ObjectTreeVoOriginStrategyItemVo.type |
| NOT_Enable, Enable | 3 | AlertCondition.conditionStatus, AlertCondition.defaultConditionStatus, TriAndRelConditionGroup.是否屏蔽 |
| NO_LEAF, FORMULA_LEAF, EVENT_LEAF, SIMPLE_VAL, UN_VALID | 3 | IotConditionVo.conditionType, IotConditionTreeVo.conditionType, subConditions.conditionType |
| PROJECT, BUILDING, FLOOR, SPACE, EQUIPMENT, SHAFT, COMPONENT, MAJOR, VIRTUAL, TO | 3 | ObjectCategoryTree.objType, ObjectClassVo.type, ObjectClassWithId.type |
| RISK, DANGER | 3 | EquipmentInstanceMeasuresVo.nodeType, EquipmentInstanceElementVo.nodeType, NodeInfoVo.nodeType |
| RUNNING, PENDING, FAIL, SUCCESS | 3 | PjKlbRiskEventManageScopeVo.refreshStatus, RiskEventRefreshStatusVo.refreshStatus, PjRiskEventScopeVo.refreshStatus |
| WAIT_INVESTIGATE, UNNECESSARY, FINISH_INVESTIGATE | 3 | OriginalStrategyItemSaveDto.investigateStatus, StrategyItemChangeStatusDto.investigateStatus, OriginalStrategyItemVo.investigateStatus |
| YES, NO | 3 | ProcessParameter.isItInstantiatedPhysicalQuantity, ProcessParameter16.isItInstantiatedPhysicalQuantity, KlbMeasureVo.onlyExecuteOnHubNode |
| A, B | 2 | FileInfo.rccDataSource, VersionInfo.rccDataSource |
| BDTPINFOPOINTNUMERICALCLASS, BDTPINFOPOINTOPTIONCLASS, CALCULATIONRELATIONSHIPOF | 2 | IotSubConditionStruct.principalType, SubCondition.principalType |
| COMMON, YIHENG_SCENE, EXE_PREPUBLISH, EXE_PUBLISH | 2 | StrategyCategoryTagSaveDto.scene, ExeStrategyCategoryTagTreeSaveDto.scene |
| EXE_EXCEPTION, NORMAL_FINISH, DISTRIBUTE_UNFINISHED, UN_DISTRIBUTE | 2 | TaskStatusNum.taskExtendStatus, TaskInstanceStatisticVo.status |
| EXTERNAL_ELEMENT, PROBABILITY_ELEMENT | 2 | EquipmentInstanceElementVo.type, EquipmentInstanceElementOptionsVo.type |
| GRAB_ORDERS, ASSIGNMENT_IN_PROGRESS, AWAITING_FOR_PICKUP, IN_EXECUTION, AWAITING | 2 | WorkOrderActionDto.orderState, WorkOrderUploadAndRepairDto.workOrderStatus |
| IMPORTANT_NOTIFY, EXEC_RESP_NOTIFY, NORMAL_AFFAIRS_NOTIFY | 2 | AlertExceptionEventMsgRuleSaveDto.type, AlertExceptionEventMsgRuleVo.type |
| IOT_ALARM_VERIFICATION, NON_IOT_ALARM_VERIFICATION | 2 | WorkOrderCreatedTitleStruct.workOrderType, IotVerificationResultTitleStruct.workOrderType |
| MAJOR, OBJECT_TYPE, OBJECT_CLASS, ROOM_FUNCTION_NODE, ROOM_FUNCTION_NODE_CHILD | 2 | ObjectTreeBaseVoMajorObjClassAndSpaceFunctionEnum.type, MajorObjClassTreeVo.type |
| MAJOR, OTHER_EQUIP, OBJECT_CLASS | 2 | IotAlertRuleTreeVo.type, ObjectTreeBaseVoMajorObjectClassIotAlertRuleTreeNodeEnum.type |
| NO, PRE_SALE, EXP, ZS | 2 | BatchPreStatusChangeDto.sceneEnum, ObjectClassTreeQueryVo.riskEventStatus |
| NONE, ADDITIONAL_REPAIR, NOT_REGARD_FAULT | 2 | PjRiskQueryDto.faultLabel, PjRiskQueryStruct.faultLabel |
| ONLY_RISK_CONTROL_STRATEGY_INSTANCE | 2 | PjInstanceRiskControlStrategyConfigVo.type, PjSwitchConfigUpdateDto.type |
| OUTSIDE_BMS_SCOPE, OUTSIDE_PROJECT_SCOPE | 2 | IotAlertRuleTreeNodeDataVo.outsideScopeTip, ExeMeasureVo.outsideScopeTip |
| PART_MISSTATEMENT, MISSTATEMENT | 2 | ExceptionEventListVo.misstatement, EEExceptionThirdVo.misstatement |
| RCC, NOT_RCC | 2 | ExceptionEventListVo.exceptionEventType, ExceptionEventBaseInfoVo.exceptionEventType |
| ROOM_FUNC_TYPE, ZONE_MANAGEMENT_GROUPING | 2 | SpecialPjRiskIssueLevelVo.type, SpecialPjRiskIssueLevelStruct.type |
| SEVERITY, EXCEPTION_START_TIME, EXCEPTION_UPDATE_TIME, EXCEPTION_END_TIME, HISTO | 2 | EEListQueryDto.orderBy, ExceptionEventQueryDto.orderBy |
| TRIGGER_BEFORE, TRIGGER_POINT, RELEASE_BEFORE, RELEASE_POINT, COMMON_POINT | 2 | DataPoint.dataPointType, DataPoint11.数据点类型 |
| ACTION, UN_ACTION | 1 | ExceptionEventQueryDto.workOrderActionStatus |
| ALARM, RELIEVE | 1 | IotConditionGroupsVo.iotGroupType |
| ASSIGN_OR_CATEGORY, PENDING_EXECUTION, APPROVAL, NONE | 1 | WorkOrderCreatedTitleStruct.workOrderStep |
| BASE_PARAM, TECH_PARAM | 1 | InstantiatePhysicalQuantityVo.quantityType |
| BDTP_POI, CUSTOMIZE | 1 | ProcessParameterStruct.type |
| BEFOREEXECUTION, AFTEREXECUTION | 1 | RelatedObservationControlAndOrder.observationWorkOrder |
| BUILDING_SORT, BUILDING_RANDOM | 1 | TimeScheme.instanceGroupType |
| DEAL_MAJOR, DEAL_MAJOR_OTHER, TAG, TAG_OTHER, OBJECT_CLASS, OBJECT_CLASS_SELF, C | 1 | DealMajorClassTreeVo.type |
| DEFAULT, UPDATE, NEW | 1 | ObserveScopeRiskVo.instanceTreeStatus |
| DIAGNOSE, PLAN_INSPECTION, PLAN_MAINTAIN, EXCEPTION_REPAIR, ACTIVE_REPAIR, NON_P | 1 | TaskHistoryCompareVo.thirdPartyType |
| E06, E05, E04, E03, E01, E02, WATERQUALITY, ELECTRODEDETECTION, LIGHTNINGPROTECT | 1 | KlbMeasureVo.means |
| E1, E0 | 1 | KlbMeasureVo.whetherAppliedToMultipleInstances |
| E1, E2, E3 | 1 | ImplementationDifficulty.difficultyLevel |
| E1, E2, E3, E4, E5, E6, E7, E8, E9, E10 | 1 | KlbMeasureVo.degreeStateExecutionBasis |
| E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11 | 1 | KlbRiskEventTreeVo.riskAttribute |
| END_TIME, DURATION | 1 | WorkingTime.type |
| EXCEPTION, EXCEPTION_MAYBE, WARN, UNKNOWN, NORMAL_MAYBE, NORMAL | 1 | ExceptionProblem.feedbackResult |
| EXCEPTION, EXCEPTION_MAYBE, WARN, UNKNOWN, NORMAL_MAYBE, NORMAL, NOT_EXCEEDING_T | 1 | TriAndRelConditionGroup.feedbackResult |
| EXCEPTION_EVENT_TO_HIGH, EXCEPTION_EVENT_INIT_HIGH | 1 | ProblemHappenNotifyStruct.notifyType |
| EXECUTIVEUNITS3, EXECUTIVEUNITS2, E1, E2, EXECUTIVEUNITS4, EXECUTIVEUNITS5, EXEC | 1 | ImplementationDifficulty.executiveUnits |
| FAKE, REAL | 1 | TaskHistoryCompareVo.manualResult |
| FROM, TO, BOTH | 1 | Relationship.sourceClassCodeDir |
| GENERALIZEDTREE, DUPLICATETREE, ORIGINALTREE | 1 | KlbDismantleTreeVo.entityTreeType |
| HIGH, MEDIUM_HIGH, MEDIUM, LOW, EXTREMELY_LOW, NOT_HIGH | 1 | AlertExceptionEventMsgRuleTriggerConditionStruct.severity |
| INIT, Enable, NOT_Enable | 1 | GroupObject.措施对象状态   0-初始化，1-启用，2：启用 |
| INIT, PROCESSING, FINISHED | 1 | ObserveScopeWorkVo.workStatus |
| INITIALINVESTMENT11, INITIALINVESTMENT10, INITIALINVESTMENT9, INITIALINVESTMENT8 | 1 | KlbMeasureVo.initialInvestment |
| INNER, SAAS | 1 | UserInfoDto.userType |
| INSPECTION, DATA, OPERATION, E1, E2, E3 | 1 | KlbMeasureVo.observationMode |
| MAJOR, OBJECT_TYPE, OBJECT_CLASS, OTHER | 1 | ObjectTreeBaseVoMajorObjectOtherTreeNodeEnum.type |
| MAJOR, OBJECT_TYPE, OTHER | 1 | StatisticsItem.type |
| MAXIMUM, MINIMUM, AVERAGE, TIMEMATCHING | 1 | ProcessParameter.processParameterValueSelectionMethod |
| MONTH, DAY | 1 | EEEventStatisticsQryDto.dataGroupType |
| MUST, SUGGEST, NO | 1 | KlbMeasureVo.consultantRequirement |
| NANOSECONDS, MICROSECONDS, MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS | 1 | ExceptionEventStatusChangeQuery.unit |
| NO, DISABLE, LATEST_DISABLE | 1 | PreRiskEventDetailVo.dataMark |
| NODE, NODE_i, META_PHYSICAL, INSTANTIATED_PHYSICAL, INSTANTIATED_PHYSICAL_i, HUB | 1 | Mark.type |
| NONE, NOT_REGARD_FAULT | 1 | PjRiskListVo.faultLabel |
| NORMAL, EXCEPTION, EXCEPTION_PROCESSED | 1 | IotVerificationResultTitleStruct.verifyResult |
| NORMAL, NEW | 1 | GroupObject.ruleInitType |
| NORMALPHOTO, ABNORMALPHOTO, NOPHOTO | 1 | KlbMeasureVo.photoNoteRequirements_v2 |
| NO_ACTION, ACTION_ON_ACCEPT, TAKE_PHOTO_CONFIRM, SCAN_CODE_CONFIRM | 1 | WorkOrderActionDto.actionType |
| NO_LEAF, FORMULA_LEAF, EVENT_LEAF, SIMPLE_VAL, UN_VALID, EVENT_UN_VALID | 1 | IotConditionTreeNodeStruct.conditionType |
| NO_TREATMENT, SOLVED, UN_SOLVED | 1 | EEProblemThirdPageVo.solveStatus |
| OBJECT, COMPONENT, INSTANCE_GROUP, ENTITY_COMBINATION | 1 | ObjectClassAttrOptionsVo.type |
| OPEN, CLOSED, OPEN_CLOSED, CLOSED_OPEN | 1 | MathRange.op |
| PROJECT, BUILDING, FLOOR, EQUIPMENT, SPACE, SYSTEM, SHAFT, EQUIPMENT_GROUP, PART | 1 | ObserveObjectTypeTreeVo.nodeCategory |
| RISK_REPORT_UPLOAD, MANUAL_CHANGE, WORK_ORDER, IOT_ALARM, ROUTING_INSPECTION, MA | 1 | RiskInstanceStatusVo.sourceType |
| SYMPTOMATIC, NONSYMPTOMATIC | 1 | KlbMeasureVo.observationControlType |
| TIMEWORKINGREQUIREMENT4, BUSINESSHOURS, NONBUSINESSHOURS, SPECIFICTIME, NOREQUIR | 1 | ExePlanStrategyItemVo.executionPeriod |
| TRANSITIONSEASON, COOLINGSEASON, HEATINGSEASON, NOREQUIREMENT | 1 | ExePlanStrategyItemVo.airSeason |
| UN_ACTION, TIMED_OUT_UN_ACTION, TIMED_OUT_ACTION, ON_TIME_ACTION | 1 | WorkOrderActionDto.actionStatus |
| 故障, 超征兆, FAILURE, SUPERSYMPTOM | 1 | KlbMeasureVo.failurePredictionExecutionBasis |

---

## 节 9 · 枚举 · 枚举 · work-order-service（99 个去重取值集）

```yaml
section_id: SEC-异常事件-RCC-枚举-work-order-service
kind: 枚举　layer: 混合
source_authority: 代码　build_status: 已实现
regenerable: true　generated_from_commit: ca6dfed　generator: openapi-enum
review_state: 待PM确认　rag.indexable: false
```

**服务**：work-order-service　**去重取值集**：99

> 值由代码（OpenAPI enum）生成；每个取值的规范名/含义待 PM 与本体对齐。

| 取值集（代码真实值） | 引用次数 | 示例引用处 |
|----------------------|----------|------------|
| PLAN_MAINTENANCE, SUBSCRIBER_REPORT, SCHEDULED_INSPECTION, ABNORMAL_MAINTENANCE, | 30 | UserReportWorkOrderVo.workType, WorkOrderRiskEventVO.orderType, WorkOrderFeedbackRecordsVo.workType |
| PROJECT, BUILDING, FLOOR, EQUIPMENT, SPACE, SYSTEM, SHAFT, EQUIPMENT_GROUP, PART | 27 | BaseWorkOrderProblemDTO.rwdObjectType, ProblemsAndImpactDTO.rwdObjectType, ReasonForProblemDTO.rwdObjectType |
| 2, 3, 4, 5, 11, 6, 7, 8, 9, 10 | 17 | UserReportWorkOrderVo.orderState, WorkOrderRiskEventVO.orderStatus, RWorkOrderStatusEnum.data |
| REQUIRED, OPTIONAL, CONDITIONAL, SHOW, HIDDEN | 15 | abnormalEvent.columnProEnum, causeDescription.columnProEnum, impactDescription.columnProEnum |
| NORMAL, WARN, EXCEPTION, NOT_TRACEABLE, EXECUTION_COMPLETED, UNENFORCEABLE | 14 | BaseWorkOrderProblemDTO.taskFeedbackStatus, ProblemsAndImpactDTO.taskFeedbackStatus, ReasonForProblemDTO.taskFeedbackStatus |
| NO_ACTION, ACTION_ON_ACCEPT, TAKE_PHOTO_CONFIRM, SCAN_CODE_CONFIRM | 14 | WorkOrderRiskProcessWorkItemDTO.workOrderActionType, SystemCreateWorkOrderDto.actionType, ReportIssueTypeListVo.commonActionType |
| OBSERVE_IOT, OBSERVE_NON_IOT, REPAIR | 11 | BaseWorkOrderProblemDTO.taskType, ProblemsAndImpactDTO.taskType, ReasonForProblemDTO.taskType |
| E1, E2, E3, E4, E5 | 9 | WorkOrderTaskVo.controlType, TaskDto.controlType, MeasureTaskCreateDto.measureType |
| GRADED, SCORE, PARAMETER, EXECUTE, REPAIR_AND_REPLACE | 8 | WorkOrderTaskVo.taskExecuteType, SpaceTaskVo.taskExecutionType, TaskSubmitDto.taskExecutionType |
| INITIAL_PROBLEM, ASSOCIATED_PROBLEM, PROBLEM_CAUSE, REPAIR_SCHEME | 7 | BaseWorkOrderProblemDTO.taskIssueType, ProblemsAndImpactDTO.taskIssueType, ReasonForProblemDTO.taskIssueType |
| NORMAL, WARN, EXCEPTION | 7 | ProblemVo.riskStatus, SimpleExceptionInstanceVo.riskStatus, AlertProblem.feedbackResult |
| UN_ACTION, TIMED_OUT_UN_ACTION, TIMED_OUT_ACTION, ON_TIME_ACTION | 7 | UserReportManageListVo.actionStatus, TroubleshootingOrderDataVo.actionStatus, ExceptionInfo.actionStatus |
| YEAR, HALF_YEAR, SEASON, MONTH | 7 | OverviewQueryDto.timeDimension, ReportTypePageStatisticsDTO.timeDimension, DutyPerformanceAnalysisQuery.timeDimension |
| REPORT_REPAIR, ASSISTANCE_NEED, COMMENT, OPTIMIZATION_SUGGESTION | 6 | StatisticsOverviewVo.problemNature, ReportTypePageStatisticsDTO.problemNature, UserReportManageListVo.problemNature |
| UNFINISHED, FINISHED, REVOKE | 6 | BaseWorkOrderProblemDTO.taskStatus, ProblemsAndImpactDTO.taskStatus, ReasonForProblemDTO.taskStatus |
| HOUR, DAY | 5 | ReportIssueTypeListVo.requireResolveTimeShowUnit, ReportIssueTypeCreateOrEditDto.requireResolveTimeShowUnit, ReportIssueTypeBatchEditDto.requireResolveTimeShowUnit |
| NON_IOT, IOT_ALARM_VERIFICATION, IOT_CANCEL_ALARM_VERIFICATION, OPS_IOT, SELF_RE | 5 | TroubleshootingOrderDataVo.workOrderIotType, WorkOrderBodyDto.workOrderIotType, IotMonitoringResults.workOrderIotType |
| RISK_REPORT_UPLOAD, MANUAL_CHANGE, WORK_ORDER, IOT_ALARM, ROUTING_INSPECTION, MA | 5 | PjRiskEvaluateRecordFreshMsgDto.sourceType, FeedBackReocrdParam.riskEvaluateRecordSourceType, ReportRecordQuery.sourceType |
| COMMON, OPTIONAL, CONDITIONAL | 4 | WorkOrderRiskProcessWorkItemDTO.generalRequirement, WorkOrderRiskProcessWorkItemVO.generalRequirement, WorkItemExtend.requirement |
| IOT, COMMON, NO, SELF_REPAIR | 4 | ProcessConfig.tag, WorkOrderDetailsForPCVo.processTagEnum, WorkOrderDetailsVO.processTagEnum |
| REPORT_EXCEPTION, ALL_NORMAL, WhetherReportExceptionEnum | 4 | UserReportManageListVo.whetherReportException, WorkOrderQueryVo.whetherReportException, UserReportExportQuery.whetherReportException |
| UN_REAL, REAL | 4 | WorkOrderTaskVo.manualReviewResults, TaskQualityReviewResultVo.manualReviewResult, TaskQualityDetailVo.manualReviewResult |
| AskEnd, RelEnd, AskStart, CreateTime | 3 | UserReportQueryDto.timeFilterType, WorkOrderPageQueryDto.timeFilterType, WorkOrderAppQueryDto.timeFilterType |
| DIAGNOSE, REPAIR, CYCLE_REPAIR | 3 | MeasureTaskCreateDto.businessType, StrategyItemInfoDto.businessType, RepairMeasure.businessType |
| FAKE_ALARM, RECOVERED, IGNORE | 3 | AbnormalClosureInfo.reason, TerminatedAbnormally.reason, CloseWorkOrderVo.workOrderCloseReason |
| HISTORY, CURRENT, FEATURE | 3 | ProcessRecordCardVo.cardStatus, ProcessRecordNodeVo.nodeStatus, RecordApprovalInfo.cardStatus |
| ON_WORK, LEAVE_WORK | 3 | ReportOrderExecutor.workStatus, HandlerVo.workStatus, ExecutorVo.workStatus |
| REVISIT, TIMED_OUT_REVISIT, UN_REVISIT, TIMED_OUT_UN_REVISIT, NEED_FOLLOW_UP | 3 | UserReportManageListVo.orderRevisitStatus, PcUserReportOrderVo.revisitStatus, AppUserReportOrderVo.revisitStatus |
| UN_RESOLVED, TIMED_OUT_UN_RESOLVED, RESOLVED_ON_TIME, TIMED_OUT_RESOLVED | 3 | UserReportManageListVo.resolveStatus, PcUserReportOrderVo.resolveStatus, AppUserReportOrderVo.resolveStatus |
| ABOUT_TO_OVERDUE, OVERDUE | 2 | DailyWorkQuery.overdueStatus, DailyWorkCardVo.overdueFlag |
| ACTION, RESOLVE | 2 | TimeoutReasonUpdateDto.type, TimeoutItem.timeoutType |
| AGREE, REJECT, PROCESSING, TERMINAL | 2 | ApprovalInfoVo.approvalResult, RecordApprovalInfo.approvalResult |
| ALL, PROCESSING, EVALUATE | 2 | RepairListQuery.type, UserReportDTO.type |
| AUDIT_REJECT, APPROVAL_REJECT | 2 | WorkOrderDetailsForPCVo.rejectType, WorkOrderDetailsVO.rejectType |
| COST_TYPE_REPAIR, COST_TYPE_REPLACE, COST_TYPE_CONSUMABLE, COST_TYPE_ESTIMATE, C | 2 | WorkOrderTaskCost.costType, WorkOrderObjectCostDto.costType |
| COUNTER_SIGN, OR_SIGN | 2 | ApprovalInfoVo.approvalType, RecordApprovalInfo.approvalType |
| CREATE, CLASSIFY, ASSIGN, RECEIVE, TRANSFER, IGNORE, EXECUTE, CANCEL, STOP, CLOS | 2 | OperateExtendInfoVo.cardType, ProcessRecordCardVo.cardType |
| CREATE_TIME, ASK_ACTION_TIME, ASK_RESOLVE_TIME, APPOINTMENT_TIME, REAL_FINISH_TI | 2 | UserReportManageQuery.timeFilterType, UserReportUnRevisitQuery.timeFilterType |
| HIGH, MEDIUM_HIGH, MEDIUM, LOW, EXTREMELY_LOW, UNKNOWN | 2 | EEExceptionEventMsgDto.importanceDegree, EEExceptionEventMsgDto.historyHighestDegree |
| LESS_THAN_TWO, LESS_THAN_THREE, LESS_THAN_FOUR, LESS_THAN_FIVE | 2 | WorkOrderRevisitDto.reporterScoreConfig, WorkOrderRevisitConfigVo.reporterScoreConfig |
| NORMAL, ABNORMAL, SUPERSIGN | 2 | MathRangEntry.status, OptionFeedbackOptionDto.status |
| NORMAL, EXCEPTION, EXCEPTION_PROCESSED | 2 | IotMonitoringResultsDTO.verifyOption, IotMonitoringResults.verifyOption |
| OBJECT_TYPE_EQUIPMENT, OBJECT_TYPE_EQUIPMENT_PART, OTHER | 2 | WorkOrderTaskCost.costObjectType, WorkOrderObjectCostDto.costObjectType |
| PROBLEM_DESC, REPORT_PERSON, REPORT_PERSON_PHONE, ORDER_NUMBER, ORDER_NAME | 2 | UserReportManageQuery.keywordType, UserReportUnRevisitQuery.keywordType |
| PROJECT, BUILDING, FLOOR, SPACE, EQUIPMENT, SHAFT, MAJOR, VIRTUAL, TOOL, MATERIA | 2 | FmWorkLeafNode.nodeType, FmWorkTreeNode.nodeType |
| RCC_REF, CUSTOMIZE, BDTP_REF | 2 | AlertObjectInfo.dataSourceType, AlertProblem.dataSourceType |
| RECEIVE, ROBBING, CLASSIFY, ASSIGN, EXECUTE, AUDIT_PLAN, AUDIT_CLOSE, APPROVAL_C | 2 | RoutingChangeDetail.controlCode, DailyWorkCardVo.routingControlCode |
| SELF_REPAIR | 2 | AlertProblem.problemType, AlertReportDto2.problemType |
| TRUE, FALSE, FAIL | 2 | TaskQualityReviewResultVo.deviationTooLarge, TaskQualityReviewResultVo.dataReasonable |
| UNPROCESSED, PROCESSED | 2 | DailyWorkQuery.processStatus, DailyWorkCardVo.processStatus |
| UN_APPROVE, APPROVE | 2 | WorkOrderAuditExtensionDTO.auditResult, WorkOrderAuditEndDTO.auditResult |
| asc, desc | 2 | WorkOrderQueryDto.orderBy, WorkOrderPageParamDto.orderBy |
| workOrderHallQuery, workOrderHallShow, userReportQuery, userReportShow, unRevisi | 2 | WorkOrderSearchConfigDto.businessType, WorkOrderSearchVo.businessType |
| ABNORMAL_EVENT_TO_INVESTIGATION_ORDER, USER_REPORT_TO_STAFF_CORRECTION, USER_REP | 1 | RectificationDataDto.sourceType |
| AGREE, REJECT | 1 | OperateInfoVo.operateResult |
| APPLY_STOP, APPLY_DELAY | 1 | DailyWorkCardVo.applyType |
| APPROVE, PLAN_AUDIT | 1 | RejectItem.rejectStep |
| BDTP_POI, CUSTOMIZE | 1 | ProcessParameterDto.type |
| CLASSIFICATION_CLOSED, ASSIGNMENT_CLOSED, APPLICATION_TERMINATED, SYSTEM_STOP | 1 | CloseWorkOrderVo.workOrderCloseType |
| CLASSIFY_CLOSE, ASSIGN_CLOSE | 1 | AbnormalCloseDTO.optType |
| CLASSIFY_REPLACE, ASSIGN_REPLACE | 1 | ClassifyOrAssignReplacePeopleDto.optType |
| CONDITION_BUSINESS_CATEGORY, CONDITION_BUSINESS_CATEGORY_NULL, CONDITION_PROBLEM | 1 | RiskProcessConditionDTO.code |
| CREATE, CLASSIFY, ASSIGN, RECEIVE, EXECUTE, APPROVAL | 1 | ProcessRecordNodeVo.nodeType |
| CREATE, CLOSE, OPERATE_CLOSE, CLOSE_INVALID, OPERATE, NOT_OPERATE, PAUSE, RESET | 1 | RoutingControlChangeEventDto.changeTypeEnum |
| CREATE_TIME, ASK_ACTION_TIME, REAL_ACTION_TIME, ASK_RESOLVE_TIME, APPOINTMENT_TI | 1 | TimeFilter.timeFilterType |
| DATA_TYPE_OBJECT, DATA_TYPE_WORK_ORDER | 1 | WorkOrderObjectCostDto.dataType |
| EQ, GT, LT, GE, LE, AND, OR | 1 | RiskProcessConditionDTO.criteria |
| EXE_EXCEPTION, NORMAL_FINISH, DISTRIBUTE_UNFINISHED, UN_DISTRIBUTE | 1 | WorkOrderTaskDetailVo.extendStatus |
| EXPECTED_INCOMPLETE, NORMAL_PROGRESS | 1 | OrderStatisticsDto.orderStatisticsType |
| FROM_TO, TO_FROM, BOTH | 1 | PoiInfoStruct.relationDirection |
| H5, APP, IOS, Android | 1 | SseSessionDto.sseType |
| HIDDEN_DANGER, OBSERVE | 1 | ObjectParameterVo.taskObjectType |
| HIGH, MID, LOW | 1 | ProblemVo.importanceDegree |
| MERGE_WORK_ORDER, RECALL_WORK_ORDER, PLAN_ORDER_CHANGE, USER_REPORT_UPLOAD, WORK | 1 | PubMsgDto.pubMsgType |
| NODE, NODE_i, META_PHYSICAL, INSTANTIATED_PHYSICAL, INSTANTIATED_PHYSICAL_i, HUB | 1 | MarkDto.type |
| NONE, PHOTOGRAPH, SCAN, NFC | 1 | PlanTaskVo.punchingModelType |
| OPEN, CLOSED, OPEN_CLOSED, CLOSED_OPEN | 1 | MathRange.op |
| OPTION, PARAMETER_CALCULATION | 1 | ExecutableMeasureDto.feedbackType |
| RCC_REF, CUSTOMIZE | 1 | ExecutableMeasureDto.sourceType |
| REAL, UN_REAL, CHECK_FAIL, CHECKING | 1 | TaskImage.imageAiAnalysisResult |
| ROUTING_INSPECTION, MAINTENANCE | 1 | WorkOrderTaskVo.workType |
| SPACE, OBJECT | 1 | PlanTaskVo.punchingModelObject |
| TODAY_UN_REVISIT, PRIORITY_REVISIT, TIMEOUT_UN_REVISIT | 1 | UserReportUnRevisitQuery.fastRevisitType |
| TOOL, CONSUMABLE | 1 | WoOrderWithdrawalDto.type |
| UNRESOLVED, RESOLVED | 1 | EEExceptionEventMsgDto.exceptionEventStatus |
| UN_DEAL, DEALING, DEAL_FINISH, DEAL_EXCEPTION | 1 | WorkOrderDownloadVo.state |
| WAIT_RECEIVE, EXECUTE, WAIT_AUDIT_COUNT_SIGN, WAIT_APPROVE_COUNT_SIGN, WAIT_APPR | 1 | HandlerVo.handlerType |
| createTime, askEndTime, realFinishTime | 1 | WorkOrderQueryDto.timeType |
| createTime, askStartTime, askEndTime, realFinishTime | 1 | WorkOrderQueryDto.orderField |
| createTime, askStartTime, requiredActionTime, realActionTime, askEndTime, realFi | 1 | TimeLimitDto.type |
| create_time, ask_end_time | 1 | WorkOrderPageParamDto.orderField |
| create_time, ask_end_time, real_finish_time | 1 | WorkOrderPageParamDto.timeType |
| execute, applyAddingPeople, applyReplacePeople | 1 | MaintenanceDto.queryOperateType |
| grave, high, medium, low | 1 | OrderMessageDto.messagePriority |
| msg, sms | 1 | OrderMessageDto.noticeType |
| order, announcement, event, exception_event, inventory | 1 | OrderMessageDto.businessType |
| space, spaceclass, tempspace | 1 | Obj.objType |
| system_message, general_transaction, sub_message, grave_matters, execute_respons | 1 | OrderMessageDto.messageType |
| wo_pending_order, create_exception_event, resolve_exception_timeout, pending_ord | 1 | OrderMessageDto.controlType |

---

## 节 10 · 背景 · 需求背景

```yaml
section_id: SEC-异常事件-RCC-背景-需求背景
kind: 背景　layer: 意图层
source_authority: 判定　build_status: 已实现
source_prd: {name: prd-baseliner/examples/prd/异常事件管理-v3.1.md, version: v3.1}
review_state: 待PM确认　rag.indexable: false
```

> 【待PM确认 · 意图层未自动改写，原文逐字保留】来源：prd-baseliner/examples/prd/异常事件管理-v3.1.md:6

异常事件是"异常与风险管理"环节的核心概念，集中体现管理标准与各上报渠道的风控策略。

---

## 节 11 · 流程 · 异常事件全生命周期（流程）

```yaml
section_id: SEC-异常事件-RCC-流程-异常事件全生命周期-流程
kind: 流程　layer: 意图层
source_authority: 判定　build_status: 已实现
nature: 描述性
source_prd: {name: prd-baseliner/examples/prd/异常事件管理-v3.1.md, version: v3.1}
review_state: 待PM确认　rag.indexable: false
drift: [DRIFT-0001]
```

> 【需代码·核对】[DRIFT-0001] 节「异常事件全生命周期（流程）」在版本 v3.0, v3.1 间正文不一致，需 PM 认定哪版作数

> 【待PM确认 · 意图层未自动改写，原文逐字保留】来源：prd-baseliner/examples/prd/异常事件管理-v3.1.md:10

A程序接收状态变更记录后生成问题；问题判定后生成新异常事件或合并进已有异常事件；
异常事件生成排查处理单，工单流转：指派 → 执行 → 审批，审批不通过则回到执行环节；
工单结束后做异常事件关闭判断，不满足则更新问题回到生成异常事件。

---

# 汇总：两张清单

## A. 需代码才能补充/核实

| 项 | 节 | 类型 |
|----|----|------|
| 基线 commit、运行期 DDL/topic/注册表快照 | 文档级 | 生成 |
| 数据表 · tenants（Tenant） | SEC-异常事件-RCC-数据-tenants | 生成 |
| 数据表 · users（User） | SEC-异常事件-RCC-数据-users | 生成 |
| 数据表 · todos（Todo） | SEC-异常事件-RCC-数据-todos | 生成 |
| 接口契约 · data-service（63 端点） | SEC-异常事件-RCC-接口-data-service | 生成 |
| 接口契约 · physical-world-service（156 端点） | SEC-异常事件-RCC-接口-physical-world-service | 生成 |
| 接口契约 · risk-data-service（134 端点） | SEC-异常事件-RCC-接口-risk-data-service | 生成 |
| 接口契约 · work-order-service（27 端点） | SEC-异常事件-RCC-接口-work-order-service | 生成 |
| 枚举 · risk-data-service（142 个去重取值集） | SEC-异常事件-RCC-枚举-risk-data-service | 生成 |
| 枚举 · work-order-service（99 个去重取值集） | SEC-异常事件-RCC-枚举-work-order-service | 生成 |
| PRD 节「与工单的交互消息字段说明（接口）」正文为空，但代码有 380 条「接口」事实可生成 | SEC-异常事件-RCC-接口-data-service | 核实 |

## B. 需 PM 再确认/补充

| 项 | 节 | 类型 |
|----|----|------|
| 占位名「A程序」需绑定到真实可部署服务（架构决策）；定后全文统一引用 | 文档级 | 决策（架构） |
| PRD 节「问题来源（枚举）」声称「共 10 种」但实际列举 7 项，且代码有 241 个去重枚举——确认单 | 文档级 | 本体 |
| 将节「问题来源（枚举）」中文取值与代码枚举常量对齐（如 计划巡检↔PLAN_MAINTENANCE），并确认 | 文档级 | 本体 |
