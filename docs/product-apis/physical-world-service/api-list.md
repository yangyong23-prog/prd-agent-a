# physical-world-service 接口清单

> **数据来源**：Apifox 项目 `5881314`
> **OpenAPI 标题**：默认模块
> **最后同步**：2026-06-23 15:33:07
> **接口总数**：156 个 / 16 个分类

## 文档说明

本文档由 `docs/product-apis/sync.sh` 自动同步生成，**不要手动修改接口列表本身**。
更新方式：

```bash
bash docs/product-apis/sync.sh physical-world-service 5881314
```

## 调用约束

- ❗ **只能调用测试环境**，禁止调用生产环境
- ❗ 接口 BaseURL 通过环境变量注入，不在代码中硬编码
- ❗ 鉴权 Token 从环境变量读取，不得提交到 git
- ❗ 多租户场景下，调用前确认 `groupCode`/`projectId` 等租户字段已正确传递
- ❗ **网关服务名**：`dtp-rwd-server`；完整调用路径 = `BaseURL/dtp-rwd-server/接口路径`；本文档路径已含此前缀，`openapi.json` 中路径不含服务名，基于 `openapi.json` 编写调用代码时需在路径前自行追加服务名

## 原始 OpenAPI Spec

完整 schema、请求/响应类型、参数定义见 [`openapi.json`](./openapi.json)。

---

## 未分类（68 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/object/queryBuildingUnderProject` | A1.1、查询指定项目下的所有建筑 |
| `POST` | `/dtp-rwd-server/rwd/object/queryFloorUnderBuilding` | A1.2、查询指定建筑下的所有楼层 |
| `POST` | `/dtp-rwd-server/rwd/object/queryPartitionUnderBuilding` | A1.3、查询指定建筑下的所有主要功能区 |
| `POST` | `/dtp-rwd-server/rwd/object/queryProjectUnderGroupCode` | A1.4、查询指定集团下的所有项目 |
| `POST` | `/dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderProject` | A1.6、查询项目下指定空间功能类型的空间 |
| `POST` | `/dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderBuilding` | A1.7、查询建筑下指定空间功能类型的空间 |
| `POST` | `/dtp-rwd-server/rwd/object/queryRoomFuncTypeUnderPartition` | A1.9、查询主要功能区下指定空间功能类型的空间 |
| `POST` | `/dtp-rwd-server/rwd/object/queryTenantTypeUnderProject` | A1.10、查询项目下指定租赁业态的空间 |
| `POST` | `/dtp-rwd-server/rwd/object/queryTenantTypeUnderBuilding` | A1.11、查询建筑下指定租赁业态的空间 |
| `POST` | `/dtp-rwd-server/rwd/object/queryTenantTypeUnderFloor` | A1.12、查询楼层下指定租赁业态的空间 |
| `POST` | `/dtp-rwd-server/rwd/object/queryTenantTypeUnderPartition` | A1.13、查询主要功能区下指定租赁业态的空间 |
| `POST` | `/dtp-rwd-server/rwd/object/querySpatialInformationPointObjects` | A1.14 按空间功能类型和信息点条件查询所有空间 |
| `POST` | `/dtp-rwd-server/rwd/object/queryEquipLocationSpaceFloor` | A1.15 查询指定设备所在的空间（和楼层） |
| `POST` | `/dtp-rwd-server/rwd/object/queryEquipServiceSpaceFloor` | A1.16 查询指定设备服务的空间（和楼层） |
| `POST` | `/dtp-rwd-server/rwd/object/querySystemUnderProject` | A2.2、查询项目下的所有系统 |
| `POST` | `/dtp-rwd-server/rwd/object/querySystemUnderBuilding` | A2.3、查询建筑下的所有系统 |
| `POST` | `/dtp-rwd-server/rwd/object/querySystemUnderMajor` | A2.4、查询某专业下的所有系统 |
| `POST` | `/dtp-rwd-server/rwd/object/queryEquipUnderMajor` | A2.5、查询某专业下的所有设备 |
| `POST` | `/dtp-rwd-server/rwd/object/queryEquipByClassCodeAndFloor` | A2.7、查询指定楼层下所有指定对象类型的设备 |
| `POST` | `/dtp-rwd-server/rwd/object/queryEquipByClassCodeAndPartition` | A2.9、查询指定主要功能区下的所有指定对象类型的设备 |
| `POST` | `/dtp-rwd-server/rwd/object/queryEquipByClassCodeAndServiceSpace` | A2.10、查询服务于指定空间的所有指定对象类型的设备 |
| `POST` | `/dtp-rwd-server/rwd/object/queryEquipWithinRadius` | A2.11 基于一个设备或一个坐标，找附近R米范围内的某种类型的设备 |
| `POST` | `/dtp-rwd-server/rwd/object/queryEquipInfoObjects` | A2.13 按设备类型编码和信息点条件查询所有设备 |
| `POST` | `/dtp-rwd-server/rwd/object/queryEquipGroupBySystemId` | 系统下设备组查询 |
| `POST` | `/dtp-rwd-server/rwd/aggregate/exhaust/fumes/query` | 厨房排油烟 |
| `POST` | `/dtp-rwd-server/rwd/aggregate/objs` | 查询对象实例信息 |
| `POST` | `/dtp-rwd-server/rwd/aggregate/space/security/query` | 空间安防 |
| `GET` | `/dtp-rwd-server/rwd/aggregate/obj/count` | 统计生产厂商相关数据 |
| `GET` | `/dtp-rwd-server/rwd/aim/equip/tree/query` | apm台账配置-设备树配置查询 |
| `POST` | `/dtp-rwd-server/rwd/aim/equip/tree/save` | apm台账配置-设备树配置保存 |
| `GET` | `/dtp-rwd-server/rwd/aim/space/tree/query` | apm台账配置-空间树配置 |
| `POST` | `/dtp-rwd-server/rwd/aim/space/tree/save` | apm台账配置-空间树配置保存 |
| `POST` | `/dtp-rwd-server/rwd/aim/equip/tree/copy` | apm台账配置(暂未使用)-设备树配置保存(复制一个或多个项目) |
| `POST` | `/dtp-rwd-server/rwd/aim/space/tree/copy` | apm台账配置(暂未使用)-空间树配置保存(复制一个或多个项目) |
| `POST` | `/dtp-rwd-server/rwd/aim/asset/isCal` | apm台账-是否正在计算 |
| `GET` | `/dtp-rwd-server/rwd/aim/asset/cal` | apm台账-计算实例的资产管理序号或设备管理分类 |
| `POST` | `/dtp-rwd-server/rwd/aim/asset/objTree` | apm台账-对象树 |
| `POST` | `/dtp-rwd-server/rwd/aim/asset/objInfos` | apm台账-信息点统计 |
| `POST` | `/dtp-rwd-server/rwd/aim/asset/objList` | apm台账-对象实例列表 |
| `POST` | `/dtp-rwd-server/rwd/aim/asset/multiRel` | apm台账-多关系查询 |
| `POST` | `/dtp-rwd-server/rwd/aim/asset/rel` | apm台账-关系查询 |
| `POST` | `/dtp-rwd-server/rwd/aim/resp/info/query` | apm责任信息-查询 |
| `POST` | `/dtp-rwd-server/rwd/aim/resp/info/save` | apm责任信息-保存 |
| `POST` | `/dtp-rwd-server/rwd/group/tree/roomFuncType` | 根据实例过滤空间功能类型树 |
| `POST` | `/dtp-rwd-server/rwd/group/proj/equip/count` | 项目-专业分组统计设备数量 |
| `POST` | `/dtp-rwd-server/rwd/group/proj/system/count` | 项目-专业分组统计系统数量 |
| `POST` | `/dtp-rwd-server/rwd/group/proj/equipPos` | 各项目下有实例的设备分类 |
| `POST` | `/dtp-rwd-server/rwd/group/proj/equipPos/count` | 各项目-设备分类分组统计设备实例 |
| `POST` | `/dtp-rwd-server/rwd/work/order/bfList` | 查询项目下所有的建筑-楼层list |
| `POST` | `/dtp-rwd-server/rwd/work/order/spObjList` | 查询指定空间下的所有设备实例,按照设备类分组返回 |
| `POST` | `/dtp-rwd-server/rwd/work/order/classCode/bfList` | 专业-设备类下的设备实例或空间所在建筑楼层,返回建筑-楼层树 |
| `POST` | `/dtp-rwd-server/rwd/work/order/classCode/spList` | 专业-设备类下的设备实例所在空间,返回空间功能类型树 |
| `POST` | `/dtp-rwd-server/rwd/work/order/search` | 无条件时的搜索 |
| `POST` | `/dtp-rwd-server/rwd/aggregate/amc/project/overview` | AMC项目概览查询 |
| `POST` | `/dtp-rwd-server/published/detail/list` | 查询最后一次数据发布变更记录2.0 |
| `POST` | `/dtp-rwd-server/dtp-knowledge-server/rwdedit/version/pushDataToMeAi` | 重推数据字典给MeAI |
| `POST` | `/dtp-rwd-server/rwd/meai/start` | 重推静态物理世界给MeAI |
| `POST` | `/dtp-rwd-server/publishData/startup` | 01 开始发布 |
| `POST` | `/dtp-rwd-server/publishData/changLogStatus` | 修改日志状态 |
| `GET` | `/dtp-rwd-server/publishData/getJobStatus` | 获取数据发布状态 -1:没有在执行 0:无日志 1:进行中  2:失败  3:成功 |
| `POST` | `/dtp-rwd-server/publishData/validateInfoCode` | 对象数据精度处理 |
| `POST` | `/dtp-rwd-server/publishData/sendPublishMsgToDtx` | sendPublishMsgToDtx |
| `GET` | `/dtp-rwd-server/rwd/iot/server/point/queryPointAllClassCode` | 查询绑点表所有对象分类 |
| `POST` | `/dtp-rwd-server/rwd/iot/server/point/delete` | 删除绑点信息 |
| `POST` | `/dtp-rwd-server/rwd/iot/server/point/countPointByProtocolType` | 根据协议类型统计绑点数量 |
| `POST` | `/dtp-rwd-server/rwd/iot/server/v2/point/queryPointList` | 查询绑点数据列表 |
| `POST` | `/dtp-rwd-server/rwd/publish/change/record` | 查询数据发布变更记录 |
| `POST` | `/dtp-rwd-server/rwd/publish/change/count` | 统计数据发布数据集 |

## 对象三维数据（22 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/dtp-rwd-server/3d/object/codes` | 2.查询指定楼层有模型的对象类型编码 |
| `GET` | `/dtp-rwd-server/3d/object/scenej` | 3.获取json形式的场景文件 |
| `GET` | `/dtp-rwd-server/3d/object/scene` | 4.获取xj形式的场景文件 |
| `GET` | `/dtp-rwd-server/3d/object/mesh` | 5.获取bg文件 |
| `GET` | `/dtp-rwd-server/3d/object/meshj` | 6.获取bg文件的json格式数据 |
| `GET` | `/dtp-rwd-server/3d/object/floorzip` | 7.全楼打包 |
| `POST` | `/dtp-rwd-server/3d/object/reversePipe` | 22.逆向交付管道 |
| `POST` | `/dtp-rwd-server/3d/object/objectcmd` |  8.逆向交付设备 |
| `GET` | `/dtp-rwd-server/3d/object/modelCount` | 9.统计模型数量 |
| `GET` | `/dtp-rwd-server/3d/object/fullmeshj` | 10.对指定楼层和六位码的模型打包返回(json格式) |
| `GET` | `/dtp-rwd-server/3d/object/fullmeshzip` | 11.对指定楼层和六位码的模型打包返回(zip包形式) |
| `GET` | `/dtp-rwd-server/3d/object/projects` | 12.项目列表 |
| `GET` | `/dtp-rwd-server/3d/object/floors` | 13.楼层列表 |
| `POST` | `/dtp-rwd-server/3d/object/removeproject` | 14.清除项目模型 |
| `POST` | `/dtp-rwd-server/3d/object/removefloor` | 15.清除楼层模型 |
| `GET` | `/dtp-rwd-server/3d/object/floorObjZip` | 16.查询指定楼层的三维模型（.obj格式） |
| `GET` | `/dtp-rwd-server/3d/object/spaceBgZip` | 17.查询指定空间的三维模型（.bg格式） |
| `GET` | `/dtp-rwd-server/3d/object/spaceObjZip` | 18.查询指定空间的三维模型（.obj格式） |
| `POST` | `/dtp-rwd-server/3d/object/uploadfloor` | 19.上传楼层模型 |
| `GET` | `/dtp-rwd-server/3d/object/version` | 20.版本列表 |
| `POST` | `/dtp-rwd-server/3d/object/updateversion` | 21.更新版本信息 |
| `GET` | `/dtp-rwd-server/3d/object/meshes` | 23.批量获取模型文件 |

## 关系&路由查询（11 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/route/queryExistsBetween` | R1 判断节点间是否存在当前关系 |
| `POST` | `/dtp-rwd-server/rwd/route/queryFromToNode` | R2 通过关系查询起点和终点集合 |
| `POST` | `/dtp-rwd-server/rwd/route/queryRelationIdInSet` | R3 批量查询起点设备和终点设备是否有某种关系 |
| `POST` | `/dtp-rwd-server/rwd/route/queryClassCodeFromIds` | R4 指定起点，查询指定类型的终点 |
| `POST` | `/dtp-rwd-server/rwd/route/queryAllClassCodeFromIds` | R4-1 指定起点，查询同条路径上指定类型的所有终点 |
| `POST` | `/dtp-rwd-server/rwd/route/queryClassCodeToIds` | R5 指定终点，查询指定类型的起点 |
| `POST` | `/dtp-rwd-server/rwd/route/queryAllClassCodeToIds` | R5-1 指定终点，查询同条路径上指定类型的所有起点 |
| `POST` | `/dtp-rwd-server/rwd/route/queryNodePathIdInSet` | R6 批量查询起点设备到终点设备之间的途径设备 |
| `POST` | `/dtp-rwd-server/rwd/route/queryNodeToGeneralPath` | R7 查询指定空间到设备的路径 |
| `POST` | `/dtp-rwd-server/rwd/route/queryPathInSpaceId` | R8 查询起点设备到终点设备途径的空间 |
| `POST` | `/dtp-rwd-server/rwd/route/queryNodeForSpacePath` | R9 查询设备服务于空间的路由 |

## 三维数据族库（8 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/dtp-rwd-server/3d/components/codes` | 1.获取轻量化库中所有六位码 |
| `GET` | `/dtp-rwd-server/3d/components/types` | 2.获取指定六位码的设备类型列表 |
| `GET` | `/dtp-rwd-server/3d/components/typeinfos` | 3.获取指定六位码的设备类型(带更新时间)列表 |
| `GET` | `/dtp-rwd-server/3d/components/typetree` | 4.完整的6位码族文件树 |
| `GET` | `/dtp-rwd-server/3d/components/connectors` | 5.获取设备族连接点列表 |
| `GET` | `/dtp-rwd-server/3d/components/componentszip` | 6.族库打包下载 |
| `POST` | `/dtp-rwd-server/3d/components/uploadComp` | 7.上传族库数据 |
| `GET` | `/dtp-rwd-server/3d/components/lastTime` | 8.获取族库数据最后的更新时间 |

## 对象实例查询[老接口，不建议使用]（8 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/instance/object/query` | 查询物理世界对象 |
| `POST` | `/dtp-rwd-server/rwd/instance/object/batchQueryProjectByIds` | 根据项目id集合批量查询项目信息 |
| `POST` | `/dtp-rwd-server/rwd/instance/object/querySpaceListByFloorIdAndRoomFuncType` | 查询指定楼层下所有指定空间类型的空间 |
| `POST` | `/dtp-rwd-server/rwd/instance/object/queryEquipListByClassCode` | 按类型编码查询所有设备 |
| `POST` | `/dtp-rwd-server/rwd/instance/object/queryEquipListBySystemId` | 按系统查询系统下所有设备 |
| `POST` | `/dtp-rwd-server/rwd/instance/object/queryEquipListByConditions` | 根据条件查询设备 |
| `POST` | `/dtp-rwd-server/rwd/instance/object/querySpaceListByRoomFuncType` | 按指定空间功能类型查询此空间类型及其下级类型的所有空间列表 |
| `POST` | `/dtp-rwd-server/rwd/instance/object/queryObjectListSuperiorId` | 根据上级id查询下级关联对象 |

## 四大主体数据标识-修改（7 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/dtp-rwd-server/u` | ⭐修改说明 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/object/update` | 修改对象实例标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/object/info/update` | 修改对象信息点标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/relation/update` | 修改关系标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/relation/info/update` | 修改关系信息点标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/update` | 修改四大主体标识数据为老数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/update/status` | 修改四大主体数据为已发布 |

## 四大主体数据标识-统计（6 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/dtp-rwd-server/count` | ⭐统计说明 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/object/count` | 统计对象标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/object/info/count` | 统计对象信息点标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/relation/count` | 统计关系标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/relation/info/count` | 统计关系信息点标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/count` | 统计四大主体数据 |

## 几何数据（5 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/geometric/object/boundingBox` | 查找对象的外包围盒 |
| `POST` | `/dtp-rwd-server/geometric/object/center/position` | 查找对象的外包围盒中心点、阀门/传感器的定位点 |
| `POST` | `/dtp-rwd-server/geometric/object/bim` | 查找对象的定位点 |
| `POST` | `/dtp-rwd-server/geometric/object/skeletonLine` | 查找对象的骨架线 |
| `POST` | `/dtp-rwd-server/geometric/object/outLine` | 查找空间、设备设施的轮廓线 |

## 关系路由查询-APM专用-暂时不可用（4 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/route/queryTagTypeFromIds` | R10 指定起点，查找某种标签类型的终点设备-APM |
| `POST` | `/dtp-rwd-server/rwd/route/queryTagTypeToIds` | R11 指定终点，查找某种标签类型的起点设备-APM |
| `POST` | `/dtp-rwd-server/rwd/route/queryPathByTag` | R12 基于标签，查找设备之间的路由-APM |
| `POST` | `/dtp-rwd-server/rwd/route/querySpaceToTagPath` | R13  查找设备在管网中途径空间的路由-APM |

## 四大主体数据标识-新增（4 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/data/mark/relation/info/insert` | 新增关系信息点标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/relation/insert` | 新增关系标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/object/info/insert` | 新增对象信息点标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/object/insert` | 新增对象实例标识数据 |

## 四大主体数据标识-查询（4 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/data/mark/object` | 查询对象实例数据标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/object/info` | 查询对象信息点数据标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/relation` | 查询关系实例数据标识数据 |
| `POST` | `/dtp-rwd-server/rwd/data/mark/relation/info` | 查询关系信息点数据标识数据 |

## 管道类型及关系映射表（4 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/def/type/rel/update` | 修改-管道类型及关系映射表数据 |
| `POST` | `/dtp-rwd-server/rwd/def/type/rel/delete` | 删除-管道类型及关系映射表数据 |
| `POST` | `/dtp-rwd-server/rwd/def/type/rel/create` | 新建-管道类型及关系映射数据 |
| `POST` | `/dtp-rwd-server/rwd/def/type/rel/query` | 查询-管道类型及关系映射表 |

## 私有化部署数据发布（2 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/dtp-rwd-server/rwd/dataPublish/req` | 请求数据发布 |
| `GET` | `/dtp-rwd-server/rwd/dataPublish/getResult` | 获取数据发布结果 |

## 半剖图查询（1 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/halfSectionalView/queryHalfSectionalViewInfoByObjId` | 查询设备半剖图配置信息(模型和部件) |

## 对象数据 Controller（1 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/rwd/instance/object/queryInstanceTree` | 专业-设备定位-设备 实例树-已废弃 |

## 查询对象变更情况（1 个）

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/dtp-rwd-server/api/object/last/change/queryRecords` | 查询对象最后一次的变更记录 |

