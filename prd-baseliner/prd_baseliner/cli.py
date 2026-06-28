"""CLI 入口：prd-baseliner run --config configs/inputs.example.yaml

读输入契约（§4），跑流水线，产物落 /outputs。骨架阶段未实现的阶段会打印 [skip] 并继续。
"""

from __future__ import annotations

import argparse
import sys

import yaml

from .pipeline import Pipeline, PipelineConfig


def _load_config(path: str) -> PipelineConfig:
    with open(path, encoding="utf-8") as f:
        raw = yaml.safe_load(f)
    inp = raw.get("inputs", raw)
    code = inp.get("code", {})
    return PipelineConfig(
        product_line=inp.get("product_line", ""),
        repo=code.get("repo", "."),
        commit=str(code.get("commit", "WORKDIR")),
        services=code.get("services", []),
        prd_manifest=inp.get("prd_manifest", []),
        base_dir=inp.get("base_dir", "."),
        out_dir=inp.get("out_dir", "outputs"),
        runtime_facts=inp.get("runtime_facts"),
        ontology=inp.get("ontology"),
    )


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(prog="prd-baseliner", description="基线 PRD 核实修正 Agent（MVP）")
    sub = parser.add_subparsers(dest="cmd", required=True)
    run_p = sub.add_parser("run", help="跑完整流水线")
    run_p.add_argument("--config", required=True, help="输入契约 YAML（见 §4）")
    run_p.add_argument(
        "--reasoner", default="heuristic", choices=["heuristic", "noop", "claude"],
        help="推理层实现：heuristic（默认，确定性无 key）/ claude（LLM，需 SDK+key）/ noop",
    )

    args = parser.parse_args(argv)
    if args.cmd == "run":
        cfg = _load_config(args.config)
        reasoner = None
        if args.reasoner == "claude":
            from .reason.claude_reasoner import ClaudeReasoner

            reasoner = ClaudeReasoner()
        elif args.reasoner == "heuristic":
            from .reason.heuristic_reasoner import HeuristicReasoner

            reasoner = HeuristicReasoner()
        Pipeline(cfg, reasoner=reasoner).run()
    return 0


if __name__ == "__main__":
    sys.exit(main())
