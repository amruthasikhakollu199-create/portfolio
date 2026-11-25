export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  year: string;
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  status: string;
  accentTone: string;
  externalUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'smart-notes-summarizer',
    number: '01',
    title: 'Smart Notes Summarizer',
    category: 'AI / NLP / PRODUCT',
    tagline: 'What if a hundred-page document could become something your brain actually remembers?',
    year: '2025',
    technologies: ['Python', 'LLMs', 'RAG', 'Vector Embeddings', 'FastAPI', 'React'],
    summary: 'An intelligent document summarizer and retrieval system engineered to parse dense technical text into active recall loops and verifiable insights.',
    problem: 'Traditional note-taking and summarizers compress text into passive paragraphs that fail to reinforce conceptual comprehension.',
    solution: 'Indexes hierarchical semantic context using vector embeddings, extracting core thematic arguments and generating Socratic challenge checkpoints.',
    architectureHighlights: [
      'Document chunking preserving conceptual hierarchies & semantic coherence',
      'Retrieval-Augmented Generation (RAG) with ground-truth citation linking',
      'Automated key takeaway extraction and comprehension summaries'
    ],
    status: 'Live on Vercel',
    accentTone: '#C9B596',
    externalUrl: 'https://smart-notes-summarizer-pink.vercel.app/'
  },
  {
    id: 'urban-solar-project',
    number: '02',
    title: 'Urban Solar Project',
    category: 'GEOSPATIAL / CLEAN TECH',
    tagline: 'Mapping urban renewable capacity through spatial analytics and solar irradiation modeling.',
    year: '2025',
    technologies: ['Python', 'Geospatial Analytics', 'Machine Learning', 'React', 'Data Viz'],
    summary: 'A computational platform evaluating rooftop solar irradiation and energy yields across city infrastructure to guide renewable investments.',
    problem: 'Urban energy planners lack rapid, interactive tools to estimate solar viability across irregularly shaped urban roof geometries.',
    solution: 'Combines geospatial environmental metrics and machine learning estimation to calculate potential wattage, payback periods, and grid offset.',
    architectureHighlights: [
      'Multi-factor solar irradiance simulation across localized building angles',
      'Interactive geospatial rooftop profiling and capacity estimation',
      'Energy yield conversion algorithms calculating localized carbon mitigation'
    ],
    status: 'Live on Vercel',
    accentTone: '#B49772',
    externalUrl: 'https://urban-solar-project.vercel.app/'
  },
  {
    id: 'customer-segmentation-kmeans',
    number: '03',
    title: 'Customer Segment Using K-Means Clustering',
    category: 'UNSUPERVISED ML / ANALYTICS',
    tagline: 'Deciphering hidden behavioral archetypes through multi-dimensional clustering.',
    year: '2025',
    technologies: ['Python', 'Scikit-Learn', 'K-Means', 'PCA', 'Data Analytics'],
    summary: 'An unsupervised machine learning system segmenting customer cohorts by transaction behavior, annual spending velocity, and affinity scores.',
    problem: 'Generic customer engagement campaigns fail because average metrics mask polar behavioral patterns across diverse customer groups.',
    solution: 'Applies normalized multi-feature scaling and optimal K-Means cluster partitioning with elbow-method validation to reveal high-value segments.',
    architectureHighlights: [
      'Optimal centroid discovery using inertia reduction & silhouette validation',
      'Dimensionality reduction and feature covariance visualization',
      'Cluster characteristic profiling for tailored user experience strategies'
    ],
    status: 'Live on Vercel',
    accentTone: '#A89274',
    externalUrl: 'https://customer-segmentation-using-k-means-eta.vercel.app/'
  }
];
