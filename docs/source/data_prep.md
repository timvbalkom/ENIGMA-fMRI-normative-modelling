# Prepare your data

## Is you data structured in BIDS format?
Fantastic! 

Make sure you have a dataset description file in the BIDS folder (dataset_description.json), see [BIDS documentation](https://bids-specification.readthedocs.io/en/stable/modality-agnostic-files/dataset-description.html), and find a minimal example below (source: BIDS standard).


```JSON
{
  "Name": "The mother of all experiments",
  "BIDSVersion": "1.10.1",
  "License": "CC0",
  "Authors": [
    "Paul Broca",
    "Carl Wernicke"
  ]
}
```


You can now proceed to preprocessing.

## Is your data not structured in BIDS format?
No worries. Just make sure data is organized in a structured manner, so that participant identifiers (e.g., `sub-0001`) can be replaced with wildcards (`{subject}`). The same holds for `{session}`, `{run}`, `{acquisition}`, and `{task}` identifiers. More information can be found [here](https://fmri.science/halfpipe/new_ui.html#specify-your-data-location) (see tab “If not in BIDS”).
