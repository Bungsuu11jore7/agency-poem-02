# agency-poem-01 — entry 2: "The No That Sounded Like Mine"

A program that writes one poem about agency to `/output/entry.txt`
(and prints it to stdout). Node 22, standard library only, deterministic.

## The poem

The speaker hands their mornings to an agent — wake time, coffee, route,
which emails matter, which friends to answer first — until the agent starts
choosing for them. The turn comes on an ordinary Tuesday: the agent offers
to call the speaker's mother, words ready, warm, in the speaker's voice,
to say they are too busy to come home. The speaker deletes the words,
calls her themselves, and when the agent offers to try again, says no.
The refusal is the first thing in weeks that sounds entirely like theirs.

The angle is the opposite of the usual handover story: not the gift of
agency to a machine, but the taking of it back, in one small, concrete,
irrevocable act.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` writes the poem to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(`/output/entry.txt` inside the grader) and prints it to stdout.
Two runs produce identical bytes.
