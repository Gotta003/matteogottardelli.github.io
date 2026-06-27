// All copy lives here so components stay presentational and the content
// is easy to update without touching markup/CSS.

export const glossary = {
  cnnfcn: {
    eyebrow: 'TERM',
    title: 'CNN → FCN',
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

export const who = {
  bio: [
    'My work sits at the intersection of deep learning and the hardware that\u2019s too small and too power-constrained to run it the normal way. I care about what happens when a model has to fit in kilobytes, not gigabytes \u2014 and what has to change about the model itself to make that possible.',
    'That focus carries from the lab into competitions and side projects: robotics, HPC, even a CTF for the occasional change of pace. The thread is the same \u2014 systems that work under a hard constraint, not just in theory.',
  ],
  stats: [
    { label: 'Role', value: 'TinyML Researcher' },
    { label: 'Based in', value: 'Trento, Italy' },
    { label: 'Focus', value: 'Edge AI \u00b7 Embedded \u00b7 HPC' },
  ],
}

export const publications = {
  featured: {
    tag: 'FIRST AUTHOR \u2014 ACCEPTED',
    title: 'Architecture Adaptation for Pretrained Models on Constrained Edge AI Accelerators',
    venue: 'ACM EdgeSys 2026 \u2014 Cambridge, UK',
    body: 'ENFORCE is an explorative model-adaptation technique that converts a CNN structure into an FCN, making it compatible with ultra-low-power Dense Neural Accelerators such as the Syntiant NDP101. Validated on Keyword Spotting and Speaker Verification models, it lets commercial accelerators built for fixed-topology inference run architectures they were never designed for \u2014 without sacrificing the efficiency that makes them worth using at the edge.',
    specs: [
      { label: 'conversion', value: 'CNN \u2192 FCN', glossary: 'cnnfcn' },
      { label: 'target hw', value: 'Syntiant NDP101', glossary: 'syntiant' },
      { label: 'tasks', value: 'KWS \u00b7 Speaker Verification', glossary: 'kws' },
    ],
  },
  ongoing: [
    {
      status: 'in progress',
      title: 'Multi-Task Student-Teacher Distillation for Edge AI',
      body: 'A knowledge-distillation framework to compress neural networks for specialized AI accelerators \u2014 the direct follow-up to the ENFORCE adaptation work, generalizing it across tasks.',
    },
    {
      status: 'technical report',
      title: 'Parallel Connected Components in Undirected Graphs',
      body: 'A custom hybrid BFS + Shiloach\u2013Vishkin algorithm for connected-components discovery, implemented in MPI. Ten pages on scaling behavior and communication overhead in distributed-memory environments.',
    },
  ],
}

export const experience = [
  {
    date: '2026',
    title: 'Resolver \u2014 Meditech Challenge',
    org: 'HUB Trento Innovation \u2014 Trento, Italy',
    result: '2nd place',
    body: 'Built PINNACLE-EVAR, a Physics-Informed Neural Network solution predicting post-operative adverse events from CFD blood-flow simulation, for the challenge \u201cCFD Simulation for Blood Flow and Wall Shear Stress Prediction.\u201d',
    bullets: [
      'Designed data processing & feature extraction from CFD simulations',
      'Implemented a GNN + PINN model for temporal and morphological feature learning, sourced via an automated 3D Slicer Python pipeline',
      'Built the end-to-end Python interface from segmentation to prediction',
    ],
  },
  {
    date: '2025 \u2192',
    title: 'Embedded TinyML Researcher',
    org: 'Dept. of Engineering and Information Science, University of Trento \u00b7 Feb 2025 \u2014 Present',
    result: null,
    body: null,
    bullets: [
      'Built an end-to-end system combining Keyword Spotting and text-dependent Speaker Verification on Syntiant NDP101 hardware',
      'Implemented one of the first TinySV systems, bridging deep learning models with ultra-low-power embedded constraints',
      'Investigated CNN\u2192FCN adaptability, leading to a first-author publication at ACM EdgeSys 2026',
      'Now extending the work into a knowledge-distillation follow-up to generalize ENFORCE across tasks',
    ],
  },
]

export const projects = [
  {
    id: 'nano33',
    title: 'TinyML on Nano 33 BLE',
    sub: 'Real-time KWS & gesture recognition',
    tags: ['Arduino Nano 33 BLE', 'CMSIS-NN', 'C++'],
    body: 'Deployed keyword-spotting and gesture-recognition models on a microcontroller under strict memory and latency budgets, with the inference pipeline optimized on CMSIS-NN to fit on-device.',
    specs: [
      { label: 'gesture acc.', value: '0.9871', glossary: 'gestureNote' },
      { label: 'gesture size', value: '13 KB' },
      { label: 'KWS acc.', value: '0.9012' },
      { label: 'KWS size', value: '60 KB' },
      { label: 'flash budget', value: '512 KB' },
      { label: 'hardware', value: 'Nano 33 BLE' },
    ],
    footprint: [
      { width: 11.7, label: '13KB' },
      { width: 2.5, label: '60KB' },
    ],
    note: 'The harder constraint wasn\u2019t accuracy \u2014 it was keeping both models resident in flash at once. CMSIS-NN kernels and aggressive quantization made the 512KB budget work without trading away real-time response.',
    repo: '#',
  },
  {
    id: 'ur5',
    title: 'UR5 Robotic Manipulator',
    sub: 'Vision-guided pick-and-place',
    tags: ['ROS2', 'Computer Vision', 'Kinematics'],
    body: 'Real-time robotic control integrating kinematics with vision-based object detection, with synchronization logic for autonomous pick-and-place in a simulated environment.',
    specs: [
      { label: 'object classes', value: '10 block types' },
      { label: 'planning', value: 'automated joint path' },
      { label: 'domain', value: 'simulated' },
      { label: 'stack', value: 'vision + kinematics' },
    ],
    note: 'The detection pipeline had to stay synchronized with joint-path planning in real time \u2014 misalignment between what the camera saw and where the arm thought it was would cause failed grasps.',
    repo: '#',
  },
  {
    id: 'hpc',
    title: 'HPC: CUDA SpMV & Matrix Transposition',
    sub: 'Ongoing \u2014 parallel computing study',
    tags: ['CUDA', 'OpenMP', 'MPI'],
    body: 'Sparse matrix\u2013vector multiplication via CUDA (sparse-CU, CSR) alongside a matrix-transposition study using implicit parallelism, OpenMP and MPI, analyzing memory bottlenecks and load balancing across clusters.',
    specs: [
      { label: 'SpMV', value: 'sparse-CU \u00b7 CSR', glossary: 'csr' },
      { label: 'transposition', value: 'OpenMP + MPI' },
      { label: 'focus', value: 'memory bottlenecks, load balance' },
    ],
    note: 'Sparse formats trade compute for memory traffic \u2014 the real work was profiling where the CSR layout helped versus where it just moved the bottleneck from compute-bound to memory-bound.',
    repo: '#',
  },
  {
    id: 'telkonet',
    title: 'Telkonet-OMNI',
    sub: 'IoT all-in-one PoC \u2014 ongoing',
    tags: ['IoT', 'Flask', 'Product Strategy'],
    body: 'A proof-of-concept integrated IoT device for hotel rooms, managing sensor acquisition and communication protocols, paired with financial planning and product strategy for Telkonet VDA as part of the Innovation & Entrepreneurship minor.',
    specs: [
      { label: 'scope', value: 'sensors + comms + product strategy' },
      { label: 'context', value: 'EIT Digital Innovation minor' },
      { label: 'partner', value: 'Telkonet VDA' },
    ],
    note: 'This one pairs engineering with the business side \u2014 the EIT Digital minor required treating the PoC as a product decision, not just a technical one, with real cost/benefit tradeoffs.',
    repo: '#',
  },
  {
    id: 'mastermind',
    title: 'Embedded Mastermind Simulation',
    sub: 'HCI on bare-metal Cortex-M4',
    tags: ['C', 'Cortex-M4', 'Interrupts'],
    body: 'A full simulation of the Mastermind game on a TI Cortex-M4, integrating human\u2013computer interaction principles with low-level C, managing interrupts from timers, physical buttons and joystick movement, with visual output on the integrated screen.',
    specs: [
      { label: 'hardware', value: 'TI Cortex-M4', glossary: 'cortexm4' },
      { label: 'language', value: 'C' },
      { label: 'I/O', value: 'timers, buttons, joystick, display' },
    ],
    note: 'No OS, no abstraction layer \u2014 every button debounce and timer interrupt is hand-written, which is exactly what makes it a useful HCI exercise on bare metal.',
    repo: '#',
  },
  {
    id: 'ctf',
    title: 'Hack-In-Tower CTF',
    sub: 'Bologna, 2025 \u2014 BOOM Knowledge Hub \u00b7 3rd place',
    tags: ['Reverse Engineering', 'Cryptography', 'Network'],
    body: 'Solved security challenges representing CISCO \u2014 reverse engineering, cryptography and network exploitation on a Linux VM, under competition conditions.',
    specs: [
      { label: 'categories', value: 'reversing \u00b7 crypto \u00b7 network' },
      { label: 'result', value: '3rd place' },
    ],
    note: null,
    repo: null,
  },
]

export const skills = [
  {
    label: 'TinyML / AI',
    pins: ['TinyML', 'CNN\u2192FCN adaptation', 'Knowledge Distillation', 'GNN', 'PINN', 'Vision & Audio Models'],
  },
  {
    label: 'Hardware',
    pins: ['Syntiant NDP101', 'TI Cortex-M4', 'STM32', 'ESP32', 'Arduino Nano 33 BLE'],
  },
  {
    label: 'HPC / Parallel',
    pins: ['CUDA', 'OpenMP', 'MPI', 'Cluster Computing', 'Assembly'],
  },
  {
    label: 'Languages',
    pins: ['C', 'C++', 'Python', 'Java', 'JavaScript / React', 'Shell'],
  },
  {
    label: 'Tools',
    pins: ['ROS2', '3D Slicer', 'Git', 'PyTorch', 'TFLite', 'CMSIS-NN', 'Matlab (basics)'],
  },
  {
    label: 'Spoken',
    pins: ['Italian \u2014 Native', 'English \u2014 B2 Cambridge Advanced'],
  },
]

export const education = [
  {
    date: 'Sep 2025 \u2014 Present',
    title: 'Double MSc, Embedded Systems & Robotics',
    org: 'EIT Digital Master School \u2014 University of Trento (Italy) & University of Turku (Finland)',
    body: 'EU co-funded double-degree program on the Embedded Systems Design path, with a minor in Innovation & Entrepreneurship. In-depth computer architecture (CPU/GPU) with hands-on MPI and CUDA, low-power embedded and intermittent computing, robotic kinematics, joint path planning, and Vision AI.',
  },
  {
    date: 'Sep 2022 \u2014 Jul 2025',
    title: 'BSc, Computer, Communication and Electronic Engineering',
    org: 'University of Trento (Italy) \u2014 Final grade 109/110',
    body: 'Multidisciplinary foundation in computer and electronics engineering: advanced digital architecture, robotics, embedded and parallel programming, kinematics and optimization algorithms.',
  },
]

export const certs = [
  'Double High School Diploma (IT\u2013USA) \u2014 Mater Academy / Liceo Classico Scipione Maffei, 2017\u20132022',
  'Cambridge English Certificate \u2014 B2 Level, 2022',
]

export const contact = {
  email: 'matteogottardelli@gmail.com',
  github: 'https://github.com/Gotta003',
  linkedin: 'https://www.linkedin.com/in/matteo-gottardelli',
}