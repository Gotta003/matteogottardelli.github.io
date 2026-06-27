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

// Layer sizes driving the CNN -> FCN 3D visualizer: a small conv-like grid
// collapsing into a dense layer, mirroring what ENFORCE actually does.
export const enforceTopology = {
  convGrid: { rows: 4, cols: 4 },
  denseNodes: 8,
}