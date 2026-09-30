# Manual for HALFpipe processing of resting-state fMRI data
## For the ENIGMA-PD fMRI normative modelling project

For questions, feel free to contact us!
- PI: [Tim van Balkom](mailto:t.vanbalkom@amsterdamumc.nl)
- PhD candidate: [Chahd el Fassi](mailto:c.elfassi@amsterdamumc.nl)

An outline of the secondary proposal is published [here](https://enigma-infra.github.io/ENIGMA-PD/projects/ongoing/normative_modelling/).

Please also check out our project page on the ENIGMA-PD website [here](https://enigma-infra.github.io/ENIGMA-PD/projects/ongoing/normative_modelling/)!


```{note}
This project is under active development.

```

## Brief description of the processing pipeline
The aim of this study is to get a better understanding of the neuranatomical heterogeneity underlying cognitive impairment in PD using normative modelling. Given the involvement of various functional brain circuits in PD-related cognitive impairment that shows high interindividual variety, we aim to develop brain charts of "normal" functional connectivity across the aging lifespan. Using these brain charts, we can compute deviations from normal functional connectivity in a sample of individuals with PD and assess how interindividual variation in deviation from normal connectivity is related to cognitive heterogeneity.

We’ll combine the rich and heterogeneous resting-state fMRI data from individuals with Parkinson’s disease and healthy controls, with data from the Human Connectome Project Aging (preprocessed in an identical manner with HALFpipe) and UK Biobank (preprocessed using the standard UKB pipeline) to model normative growth curves.

The preprocessing pipeline is for the most part following standard procedures of ENIGMA-fMRI. We will use a second atlas, combining the Schaefer cortical atlas with the [Melbourne Subcortical Atlas](https://github.com/yetianmed/subcortex), which provides more detail about subcortical structures compared with the standard aseg atlas. Moreover, we’re using a novel version of HALFpipe, which has not formally been released yet (as of Sep-26), which fixes several bugs essential for this preprocessing pipeline.



```{toctree}
:maxdepth: 2
:caption: Contents

installation
prerequisites
data_prep
run_halfpipe
finished
faq
acknowledgment
```
