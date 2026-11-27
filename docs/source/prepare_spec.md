# Prepare the pre-processing configuration

This page shows a detailed overview of preparing the `spec.json` configuration using the HALFpipe GUI.

## Deviations from standard HALFpipe preprocessing

For this project, we’ll deviate minimally from standard ENIGMA fMRI preprocessing: 1) we'll use an additional atlas (`Schaefer400P7NMSAS3`), 2) we'll use specific seed regions (Nucleus Basalis of Meynert and Substantia Nigra), and 3) we'll apply 4mm FWHM smoothing for the seed-based connectivity (instead of 6mm FWHM). For the rest, we will follow the standard HALFpipe preprocessing pipelines, which are outlined in detail [here](https://fmri.science/halfpipe/new_ui.html#pipeline-settings). A large proportion of this manual is written by the HALFpipe team.


```{note}
Running the pipeline for a large sample requires significant memory; even the configuration steps outlined below may take a while to prepare.
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


## Specify working directory

```{note}
If you initiate HALFpipe using `apptainer run --contain --cleanenv --bind /:/ext halfpipe...`, you mount all folders to `/ext`. For this reason, you will need to start paths (e.g., working directory, BIDS directory, atlas/seed image paths) with `/ext/`, e.g., `/ext/data/HALFpipe/work`.
```

Specify the directory where you want to run HALFpipe in. If there is no FreeSurfer license in this directory, HALFpipe will request a path where the FreeSurfer license can be found.
```{image} /screenshots/workdir.png
:alt: Working directory
:width: 500px
```

## Specify BIDS/data location

Next, specify the directory where the MRI data is stored (either BIDS or not).
- If your data is in **BIDS**, leave the flag **Data in BIDS format** at **ON** and select the directory.
- If your data is **not in BIDS**, specify the pattern of folders and file names so that HALFpipe will recognize the MR images (for more detail, see [the HALFpipe manual](https://fmri.science/halfpipe/new_ui.html#specify-your-data-location)).
```{image} /screenshots/bids_format.png
:alt: BIDS data directory
:width: 500px
```

## Pipeline settings

### General pipeline settings

- Switch slice timing to **ON**, if you know the slice timing details during the acquisition for your data. If unsure, check with the MR physicist/technician or any dataset information. In the following steps you can check the slice order and slice timing values. **Check the metadata automatically found**. Then click **Yes** if these are the expected numbers, otherwise **No** and specify them. Switch slice timing to **OFF** if slice timing is not needed.
- Remove initial volumes (e.g., *dummy* volumes) if needed.

Your screen should look like the image below:
```{image} /screenshots/settings.png
:alt: General pipeline settings
:width: 500px
```

## Features
For features, we’ll use **seed-based connectivity** and **atlas-based connectivity** features. Go to the **Features** tab in the top navigation bar.

### Seed-based connectivity
- Select **New**, **Seed-based-connectivity**, and for **Feature name** type `seedCorr1`.
- Select **rest** under **Select tasks**. Your BOLD images should be recognized (*Found n BOLD image files for x session, y run, z subject*).
- For the seed images, use the **supplied seed images** (in your `seed_regions` folder) of the substantia nigra and nucleus basalis of Meynert.
  - Under **Seed images**, click **Add**. This will open a window where you can specify the path of your seed images.
  - **Specify the path of one seed image** and accept.
  - Change the file name (e.g., `SN_L.nii.gz`) to `{seed}.nii.gz`.
- All seed images in that directory should be recognized (six in total):
```{image} /screenshots/seed_images.png
:alt: Specify seed images
:width: 500px
```

- A list of six seeds should now be selectable. Make sure to select all seeds:
```{image} /screenshots/seed_overview.png
:alt: SBC overview
:width: 500px
```

- Set `Minimum brain coverage` to `0.5`.
- Set `Smoothing (FWHM in mm)` to `4`.
- Switch `low-pass temporal filter width` to `OFF`.
- Under **Remove confounds** tick `aCompCor`.
```{image} /screenshots/seed_settings.png
:alt: SBC settings
:width: 500px
```

We've finished the settings for the first feature. However, we'll use five denoising strategies (in line with HALFpipe best practices). To copy all settings to a new feature, click **Duplicate** in the left navigation bar (located below the New button). This will create a new panel for seed-based connectivity, automatically pre-filled with the general settings. We'll duplicate this feature four times, and **only alter the Remove counfounds settings**:
- Duplicate `seedCorr1`, and Enter `seedCorr2` as feature name. Select the following confounds (Motion parameters with scrubbing):
```{image} /screenshots/seed_settings2.png
:alt: SBC settings 2
:width: 500px
```
- Duplicate `seedCorr1`, and Enter `seedCorr3` as feature name. Select the following confounds (Pipeline 2 + Global Signal (GSR)):
```{image} /screenshots/seed_settings3.png
:alt: SBC settings 3
:width: 500px
```
- Duplicate `seedCorr1`, and Enter `seedCorr4` as feature name. Select the following confounds (Motion parameters):
```{image} /screenshots/seed_settings4.png
:alt: SBC settings 4
:width: 500px
```
- Duplicate `seedCorr1`, and Enter `seedCorr5` as feature name. Select the following confounds (Pipeline 4 + Global Signal (GSR)):
```{image} /screenshots/seed_settings5.png
:alt: SBC settings 5
:width: 500px
```


### Atlas-based connectivity matrices
- Select **New**, **Atlas-based connectivity**, and for **Feature name** type `corrMatrix1`.
- Select **rest** under **Select tasks**. Your BOLD images should be recognized (*Found n BOLD image files for x session, y run, z subject*).
- For the atlas images, use the **supplied atlas images** (in your `atlases` folder) of the two different atlases: `atlas-Schaefer2018Combined_dseg.nii.gz` and `atlas-Schaefer400P7N-MSA_dseg.nii.gz`.
  - Under **Atlas images**, click **Add**. This will open a window where you can specify the path of your seed images.
  - Specify the path of `atlas-Schaefer2018Combined_dseg.nii.gz`, accept, and enter with label `Schaefer2018Combined`.
  - For the second atlas, again click **Add**. This will open a window where you can specify the path of your seed images.
  - Specify the path of `atlas-Schaefer400P7N-MSA_dseg.nii.gz`, accept, and enter with label `Schaefer400P7NMSAS3`.
- A list of two atlases should now be selectable. Make sure to select all atlases:
```{image} /screenshots/matrix_overview2.png
:alt: Specify atlas images
:width: 500px
```

- Set `Minimum atlas region coverage` to `0.5`.
- Make sure `Smoothing (FWHM in mm)` is turned `OFF`.
- Switch `Low-pass temporal filter width` to `OFF`.
- Under **Remove confounds** tick `aCompCor`.
```{image} /screenshots/matrix_settings.png
:alt: ABC settings
:width: 500px
```

We've finished the settings for the first feature. However, we'll use five denoising strategies (in line with HALFpipe best practices). To copy all settings to a new feature, click **Duplicate** in the left navigation bar (located below the New button). This will create a new panel for seed-based connectivity, automatically pre-filled with the general settings. We'll duplicate this feature four times, and **only alter the Remove counfounds settings**:
- Duplicate `corrMatrix1`, and Enter `corrMatrix2` as feature name. Select the following confounds (Motion parameters with scrubbing):
```{image} /screenshots/matrix_settings2.png
:alt: ABC settings 2
:width: 500px
```
- Duplicate `corrMatrix1`, and Enter `corrMatrix3` as feature name. Select the following confounds (Pipeline 2 + Global Signal (GSR)):
```{image} /screenshots/matrix_settings3.png
:alt: ABC settings 3
:width: 500px
```
- Duplicate `corrMatrix1`, and Enter `corrMatrix4` as feature name. Select the following confounds (Motion parameters):
```{image} /screenshots/matrix_settings4.png
:alt: ABC settings 4
:width: 500px
```
- Duplicate `corrMatrix1`, and Enter `corrMatrix5` as feature name. Select the following confounds (Pipeline 4 + Global Signal (GSR)):
```{image} /screenshots/matrix_settings5.png
:alt: ABC settings 5
:width: 500px
```

### Feature overview
In the end, the `Features` tab should have ten fields: five `Seed-based connectivity` fields, and five `Atlas-based Connectivity` fields:

```{image} /screenshots/features.png
:alt: List of HALFpipe features
:width: 300px
```

## Group level models
-	You can skip the `Group level models` tab.

## Check and run
Under `Check and run`, a json file should be visible that looks like [this example spec.json](https://surfdrive.surf.nl/s/D7rMyMqqDpsTGxJ).

**Please make sure** that `some` intermediary files are saved. This setting is default, can be found under the `Check and run` tab, and will look like this:
```{image} /screenshots/keep_some2.png
:alt: List of HALFpipe features
:width: 600px
```

When you're happy with the configuration, click **Save** (top right) and click **Generate HPC batch script** (if you're working on an HPC). This will produce bash scripts to submit your HALFpipe preprocessing as batch job.
