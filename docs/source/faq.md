# Frequently asked questions

This page outlines errors that we have come across when using HALFpipe, and how to resolve these. Feel free to contact us when encountering other errors or potential bugs that you are unsure how to resolve—we can see if we have encountered this as well, or can try to assist resolving it.

The HALFpipe development team has [an actively kept issues page](https://github.com/HALFpipe/HALFpipe/issues) where bugs can be reported. In our experience, they provide fantastic support and respond quickly.

```{note}
This page is under active development, and will outline errors or bugs that you may encounter (and how to fix them).

```

## Missing readout time information error

Error: `[CRITICAL ] Missing readout time information. See documentation for --fallback-total-readout-time.` Also refer to the [HALFpipe issue report](https://github.com/HALFpipe/HALFpipe/issues/916).

This error may pop up when using PePolar fieldmaps accompanying your resting-state fMRI data. The quick fix may be to make sure the information in the `.json` sidecar of the fieldmaps is a list: `"IntendedFor": ["func/sub-XXXXXX_task-rest_run-X_bold.nii.gz"]`, even if it is only intended for a single rs-fMRI image.
