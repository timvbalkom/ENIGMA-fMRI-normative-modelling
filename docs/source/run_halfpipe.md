# Run HALFpipe processing

After you have finished the configuration using the HALFpipe GUI, it is time to start the preprocessing. HALFpipe will have produced files to submit jobs on the cluster, like sbatch scripts (`submit.sge.sh`, `submit.slurm.sh`, `submit.torque.sh`). These form the basis for running the preprocessing.

A couple of tips from our experience:
- Please note that some slurm settings (e.g., `time`, `memory`) should be adapted and some settings should be added, dependent on the HPC you're working on.
- It is advisable to first run HALFpipe for a couple of participants, to assess if everything is working as expected. You can run a subset of your sample for example using `sbatch --array=1-5 submit.slurm.sh` (for slurm HPC).
- After you have run some test cases, check if the output is as expected (e.g., check the `err.txt` log file for any errors or unexpected warnings) and check the `index.html` page in the `reports` folder. Let us know if you run into errors that you cannot localize.
- If you are satisfied with the result, check if your slurm/sge/torque settings are optimal (by checking efficiency, using e.g., `seff [batch job number]`). If needed, adapt.

If the batch job settings and results look good, **you are ready to run the full sample**!
