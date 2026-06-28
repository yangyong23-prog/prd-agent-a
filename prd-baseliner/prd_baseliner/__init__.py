"""prd-baseliner —— 基线 PRD 核实修正 Agent（MVP）。

输入：一条产品线的代码（锁定 commit）+ 该产线参与基线的历史 PRD 集合。
输出：按《基线 PRD 章节 Schema》填好的章节实例 + 漂移台账 + PM 决策队列。

权威参考（§0 必读）：
  - docs/refs/基线PRD章节Schema.md  —— 输出形状（数据结构）
  - docs/refs/样例-异常事件基线PRD章节.md —— 目标输出样例
"""

__version__ = "0.0.1"
