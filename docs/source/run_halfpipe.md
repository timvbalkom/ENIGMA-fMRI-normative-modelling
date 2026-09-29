# Run HALFpipe processing using the HALFpipe GUI

For this project, we’ll deviate from standard ENIGMA fMRI preprocessing in using an additional atlas (`Schaefer400P7NMSAS3`). For the rest, we will follow the standard HALFpipe preprocessing pipelines, which are outlined in detail [here](https://fmri.science/halfpipe/new_ui.html#pipeline-settings).


```{note}
Note that it might be advisable to first run HALFpipe for a couple of participants, to assess if everything is working as expected.
```

```{note}
Running the pipeline for a large sample requires significant memory; even the preparatory steps outlined below may take a while to prepare.
```


## Launch HALFpipe GUI
::::{tab-set}

:::{tab-item} Apptainer/Singularity
`````bash
apptainer run --contain --cleanenv --bind /:/ext halfpipe-1.3.3.dev91+g892515660.sif --use-cluster --tui
`````
:::

:::{tab-item} Docker
Instructions will follow soon&trade;!
:::

:::{tab-item} Podman
Instructions will follow soon&trade;!
:::

::::


## Pipeline settings
Follow the instructions under [General pipeline settings](https://fmri.science/halfpipe/new_ui.html#general-preprocessing-settings) as described in the HALFpipe manual.

## Features
For features, we’ll use section 1 (seed-based connectivity) and 2 (atlas-based connectivity matrix) of the Features section of the HALFpipe manual:

### Seed-based connectivity
Follow the [instructions in the HALFpipe manual](https://fmri.science/halfpipe/new_ui.html#seed-based-connectivity).
For the seed images, use the **supplied seed images** (in your `seed_regions` folder) of the substantia nigra and nucleus basalis of Meynert:
- `SN_L.nii.gz`, enter with label `SN_L`
- `SN_R.nii.gz`, enter with label `SN_R`
- `SN_Bilateral.nii.gz`, enter with label `SN`
- `NBM_L.nii.gz`, enter with label `NbM_L`
- `NBM_R.nii.gz`, enter with label `NbM_R`
- `NBM_Bilateral.nii.gz`, enter with label `NbM`
A list of six seeds should be selectable:
<img src="{{ site.baseurl }}/assets/screenshots/seed_regions.png" alt="List of HALFpipe seed regions" style="width: 100%; max-width: 400px; border-radius: 8px; margin: 20px 0;">

Use the five denoising strategies that are outlined in [the HALFpipe manual](https://fmri.science/halfpipe/new_ui.html#remove-confounds-for-5-pipelines):
1)	aCompCor
2)	Motion parameters with scrubbing
3)	Pipeline 2 + Global Signal (GSR)
4)	Motion parameters
5)	Pipeline 4 + Global Signal (GSR)

### Atlas-based connectivity matrices
Again, follow the instructions in [the HALFpipe manual](https://fmri.science/halfpipe/new_ui.html#atlas-based-connectivity-matrix).
For the atlas images use the **supplied atlas images** (in your atlases folder) of the two different atlases:
- `atlas-Schaefer2018Combined_dseg.nii.gz`, enter with label `Schaefer2018Combined`
- `atlas-Schaefer400P7N-MSA_dseg.nii.gz`, enter with label `Schaefer400P7NMSAS3`
A list of two atlases should be selectable:
<img src="{{ site.baseurl }}/assets/screenshots/atlases.png" alt="List of HALFpipe atlases" style="width: 100%; max-width: 700px; border-radius: 8px; margin: 20px 0;">

Again, use the five denoising strategies that are outlined in [the HALFpipe manual](https://fmri.science/halfpipe/new_ui.html#remove-confounds-for-5-pipelines-1):
1)	aCompCor
2)	Motion parameters with scrubbing
3)	Pipeline 2 + Global Signal (GSR)
4)	Motion parameters
5)	Pipeline 4 + Global Signal (GSR)

### Feature overview
In the end, the `Features` tab should have ten fields: five `Seed-based connectivity` fields, and five `Atlas-based Connectivity` fields:

```{image} ../../assets/screenshots/features.png
:alt: List of HALFpipe features
:width: 100px
```

## Group level models
-	You can skip the `Group level models` tab.

## Check and run
Under `Check and run`, a json file should be visible that looks like [this example spec.json](https://surfdrive.surf.nl/s/D7rMyMqqDpsTGxJ).

```{note}
Note that when running HALFpipe on an HPC, HALFpipe will produce files to submit jobs on the cluster, like sbatch scripts (`submit.sge.sh`, `submit.slurm.sh`, `submit.torque.sh`). Please note that some slurn settings (e.g., `time`, `memory`) should be adapted and some settings should be added, dependent on the HPC you're working on.
```
