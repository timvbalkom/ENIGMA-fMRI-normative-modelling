# Manual

## Installation
::::{tab-set}

:::{tab-item} Apptainer/Singularity direct download
```bash
wget https://surfdrive.surf.nl/s/ikDotZQx7YHJLdm/download
```
:::

:::{tab-item} Docker
Instructions will follow soon&trade;!
:::

:::{tab-item} Podman
Instructions will follow soon&trade;!
:::

::::


```{note}
Note that you'll also need a FreeSurfer license for this processing pipeline. Most ENIGMA-PD sites will have one; you can request one [here](https://surfer.nmr.mgh.harvard.edu/registration.html).
```

## Download prerequisite atlas and seed images


## Prepare your data


## Prepare and run HALFpipe processing using the HALFpipe GUI


```{note}
Note that it might be advisable to first run HALFpipe for a couple of participants, to assess if everything is working as expected.
```

```{note}
Running the pipeline for a large sample requires significant memory; even the preparatory steps outlined below may take a while to prepare.
```


### Launch HALFpipe GUI
::::{tab-set}

:::{tab-item} Apptainer/Singularity
`````bash
apptainer run --contain --cleanenv --bind /:/ext halfpipe-1.3.3.dev91+g892515660.sif --use-cluster --tui
`````
:::

:::{tab-item} Docker
Instructions will follow soon&trade;!:::

:::{tab-item} Podman
Instructions will follow soon&trade;!:::

::::


### Pipeline settings


### Features


#### Seed-based connectivity


#### Atlas-based connectivity matrices


### Group level models


### Check and run

```{note}
Note that when running HALFpipe on an HPC, HALFpipe will produce files to submit jobs on the cluster, like sbatch scripts (`submit.sge.sh`, `submit.slurm.sh`, `submit.torque.sh`). Please note that some slurn settings (e.g., `time`, `memory`) should be adapted and some settings should be added, dependent on the HPC you're working on.
```
