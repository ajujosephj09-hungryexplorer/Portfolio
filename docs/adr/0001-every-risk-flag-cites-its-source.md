# ADR 0001: Every Risk Flag Cites Its Source

**Status:** Accepted
**Date:** 2026-10-13

## Decision

Every risk flag raised during the build of this portfolio must cite the exact sentence from a source document (research, PRD, ADR, or external reference) that justifies the flag. A risk flag whose source cannot be shown is treated as a bug and removed.

## Alternatives

1. **Flag risks by judgment alone.** Faster. No citation overhead. But risk lists drift into opinion, and opinion is hard to challenge or retire.
2. **Require a source category but not a specific sentence.** Less friction than full citation. But "see the research" without a line reference means nobody will check, and unchecked flags accumulate indefinitely.
3. **Track risks in a separate risk register.** Adds a dedicated document. But a register that lives outside the decision flow gets ignored once the build is moving.

## Why

- Forces the person raising the flag to verify the claim before writing it down. The act of finding the sentence is the quality gate.
- Makes flags auditable. Anyone reviewing a flag can read the cited sentence and agree or disagree on the spot.
- Makes flags retirable. When the source sentence no longer applies (scope changed, research superseded, decision reversed), the flag goes with it.
- Prevents speculative risk padding. If you cannot point to a sentence, the risk is not evidenced and does not enter the record.

## Consequences

- **Slower to raise a flag.** You have to find the sentence first. This is the point, but it means a quick "this feels risky" cannot be logged until it is grounded.
- **Flags are only as good as the source documents.** If the research or PRD has gaps, real risks may go unflagged because there is no sentence to cite. This puts pressure on keeping source documents current.
- **Every source document change may invalidate existing flags.** When research/summary.md or PRD.md is updated, open flags must be rechecked against their cited sentences. This is maintenance overhead.
- **Cannot flag emergent risks that have no prior documentation.** If a risk surfaces during build that no document anticipated, it must first be written into a source (an ADR, a PRD amendment, or a research update) before it can be formally flagged. This adds a step but ensures the underlying reasoning is captured.
