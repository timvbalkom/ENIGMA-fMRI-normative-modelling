# Prepare your data

## Is you data structured in BIDS format?
Fantastic! You can proceed to preprocessing.

## Is your data not structured in BIDS format?
No worries. Just make sure data is organized in a structured manner, so that participant identifiers (e.g., `sub-0001`) can be replaced with wildcards (`{subject}`). The same holds for `{session}`, `{run}`, `{acquisition}`, and `{task}` identifiers. More information can be found [here](https://fmri.science/halfpipe/new_ui.html#specify-your-data-location) (see tab “If not in BIDS”).
