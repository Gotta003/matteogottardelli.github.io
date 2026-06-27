// Shared across sections (Research, Projects) — acronym/term definitions
// surfaced via the <Term> hover/tap popover. Lives next to the popover
// system itself rather than inside one section's data file, since multiple
// independent sections reference the same entries.
export const glossary = {
  cnnfcn: {
    eyebrow: 'TERM',
    title: 'CNN \u2192 FCN',
    body: 'ENFORCE\u2019s core conversion: restructuring a convolutional network into a fully-connected one so a fixed-topology accelerator (built only to run dense layers) can execute it, without retraining from scratch.',
  },
  syntiant: {
    eyebrow: 'HARDWARE',
    title: 'Syntiant NDP101',
    body: 'A commercial ultra-low-power Dense Neural Accelerator chip, built for always-on audio inference at sub-milliwatt power \u2014 designed for fixed dense-layer topologies, which is exactly the constraint ENFORCE works around.',
  },
  kws: {
    eyebrow: 'TASK',
    title: 'Keyword Spotting (KWS)',
    body: 'Detecting a small set of trigger words (like a wake word) directly on-device, continuously, without sending audio to the cloud.',
  },
  sv: {
    eyebrow: 'TASK',
    title: 'Speaker Verification (SV)',
    body: 'Confirming a speaker\u2019s identity from their voice. Doing this text-dependent and on-device, alongside KWS, was one of the first systems of its kind on this hardware class.',
  },
  cmsisnn: {
    eyebrow: 'TOOL',
    title: 'CMSIS-NN',
    body: 'Arm\u2019s optimized neural-network kernel library for Cortex-M microcontrollers \u2014 used here to fit inference inside tight memory and latency budgets.',
  },
  mpi: {
    eyebrow: 'TOOL',
    title: 'MPI',
    body: 'Message Passing Interface \u2014 the standard for distributed-memory parallel programming across cluster nodes.',
  },
  openmp: {
    eyebrow: 'TOOL',
    title: 'OpenMP',
    body: 'Shared-memory parallel programming API, used here alongside MPI to study load balancing in matrix transposition.',
  },
  cuda: {
    eyebrow: 'TOOL',
    title: 'CUDA',
    body: 'NVIDIA\u2019s parallel computing platform for GPU acceleration \u2014 used for sparse matrix\u2013vector multiplication (SpMV) kernels.',
  },
  gnn: {
    eyebrow: 'TERM',
    title: 'GNN',
    body: 'Graph Neural Network \u2014 learns over graph-structured data; here, used to learn morphological vessel features extracted from CFD segmentation.',
  },
  pinn: {
    eyebrow: 'TERM',
    title: 'PINN',
    body: 'Physics-Informed Neural Network \u2014 a model trained with physical equations baked into the loss function, so predictions stay consistent with the underlying fluid dynamics.',
  },
  ros2: {
    eyebrow: 'TOOL',
    title: 'ROS2',
    body: 'Robot Operating System 2 \u2014 middleware for robotic control, sensor integration and inter-process communication.',
  },
  slicer: {
    eyebrow: 'TOOL',
    title: '3D Slicer',
    body: 'Open-source medical image computing platform \u2014 automated here via Python scripting to extract CFD-ready geometry from segmentation.',
  },
  tflite: {
    eyebrow: 'TOOL',
    title: 'TFLite',
    body: 'TensorFlow Lite \u2014 a runtime for deploying trained models on mobile and embedded devices.',
  },
  cortexm4: {
    eyebrow: 'HARDWARE',
    title: 'TI Cortex-M4',
    body: 'A Texas Instruments microcontroller built on Arm\u2019s Cortex-M4 core \u2014 used here for bare-metal interrupt-driven game logic and display output.',
  },
  csr: {
    eyebrow: 'TERM',
    title: 'CSR format',
    body: 'Compressed Sparse Row \u2014 a memory layout for sparse matrices that stores only non-zero values, critical for efficient SpMV on large, mostly-empty matrices.',
  },
  gradeNote: {
    eyebrow: 'NOTE',
    title: '109/110',
    body: 'Final BSc grade, Computer, Communication and Electronic Engineering \u2014 University of Trento.',
  },
  gestureNote: {
    eyebrow: 'NOTE',
    title: 'Gesture accuracy at 13KB',
    body: 'Evaluated on-device on an Arduino Nano 33 BLE under a strict flash budget \u2014 the 13KB figure is the full compressed model size, not just weights.',
  },
  b2Note: {
    eyebrow: 'NOTE',
    title: 'English \u2014 B2',
    body: 'Cambridge English Certificate, Advanced level, awarded 2022.',
  },
}