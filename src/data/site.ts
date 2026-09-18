export const live = {
  cerohero: 'https://ai.cerohero.com',
  basera: 'https://getbasera.com',
}

export const worlds = [
  {
    id: 'basera' as const,
    name: 'Basera',
    live: live.basera,
    host: 'getbasera.com',
    role: 'I built and operate this PG / hostel product end to end.',
    problem: 'Owners were running rooms, rent, and complaints across notebooks, Excel, and WhatsApp.',
    system: 'FastAPI, PostgreSQL, React Native, Razorpay webhooks, WhatsApp Cloud API, Ask Basera, Celery/Redis.',
    result: 'Live at getbasera.com. Occupancy, rent, expenses, and owner chat in one ledger. 260+ backend tests.',
    nodes: ['Python', 'FastAPI', 'PostgreSQL', 'React Native', 'Razorpay', 'WhatsApp', 'RAG'],
  },
  {
    id: 'cerohero' as const,
    name: 'CeroHero AI',
    live: live.cerohero,
    host: 'ai.cerohero.com',
    role: 'Independent production RAG service I own and run.',
    problem: 'A sustainability coach is useless if it guesses. Keys also cannot sit in the browser.',
    system: 'LangGraph pipeline, pgvector, FastAPI, React streaming chat. Embeddings local. Keys on the server.',
    result: 'Live at ai.cerohero.com. Demo sign-in is on the page.',
    nodes: ['Python', 'FastAPI', 'LangGraph', 'RAG', 'pgvector', 'LLM', 'React'],
  },
]

export const alsoShipped = [
  {
    name: 'SeedLens · PRSTI',
    blurb:
      'Precision Crop Intelligence field dashboard at PRSTI. FastAPI APIs, scoring pipeline, vanilla HTML/JS UI, Ask PRSTI LLM analytics, phased Cognito/tenancy. Team product — prsti.ai.',
    tags: ['FastAPI', 'PostgreSQL', 'Vanilla JS', 'LLMs'],
    nodes: ['Python', 'FastAPI', 'PostgreSQL', 'LLM'],
  },
  {
    name: 'Document automation',
    blurb:
      'At Freightify: Pandas, NumPy, regex, OpenCV, and OpenAI on PDFs and images. About 50% faster processing and 30% better extraction accuracy on high-volume files.',
    tags: ['Python', 'OpenCV', 'SQL', 'AWS'],
    nodes: ['Python', 'AWS'],
  },
]

export const skills = [
  ['Backend', 'Python · FastAPI · Django · Flask · REST · JWT · Celery · Redis'],
  ['Frontend', 'React · TypeScript · React Native · Angular · Vanilla JS'],
  ['Data & AI', 'PostgreSQL · Pandas · NumPy · LangGraph · RAG · OpenAI APIs'],
  ['Cloud', 'AWS EC2 / ECS / S3 · Docker · Nginx · CI/CD'],
]

export const traces = [
  {
    id: 'cerohero' as const,
    index: '01',
    name: 'CeroHero AI',
    host: 'ai.cerohero.com',
    url: live.cerohero,
    figure: 'k = 4',
    figureHint: 'chunks, then a citation',
    query: 'What actually reduces emissions here?',
    steps: [
      ['embed(q)', 'local · 384d'],
      ['retrieve', 'pgvector'],
      ['generate', 'keys on the server'],
      ['cite(source)', 'paragraph or guess'],
    ],
    scores: [0.91, 0.84, 0.71, 0.33],
    footnote: 'If you cannot point to the paragraph, the answer is a guess.',
  },
  {
    id: 'basera' as const,
    index: '02',
    name: 'Basera',
    host: 'getbasera.com',
    url: live.basera,
    figure: '48 / 55',
    figureHint: 'beds occupied this week',
    query: 'Who hasn’t paid this month?',
    steps: [
      ['ledger.read', 'rooms · rent · expenses'],
      ['Ask Basera', '12 pending'],
      ['collect.rent', '₹28,500'],
      ['whatsapp.queue', 'Cloud API'],
    ],
    scores: [0.87, 0.62, 0.48, 0.21],
    footnote: 'One ledger. Occupancy, rent, and owner chat.',
  },
]

export type NodeId =
  | 'Python'
  | 'FastAPI'
  | 'PostgreSQL'
  | 'LangGraph'
  | 'RAG'
  | 'LLM'
  | 'React'
  | 'React Native'
  | 'WhatsApp'
  | 'Razorpay'
  | 'pgvector'
  | 'AWS'

export const nodes: { id: NodeId; x: number; y: number }[] = [
  { id: 'Python', x: 10, y: 72 },
  { id: 'FastAPI', x: 28, y: 48 },
  { id: 'PostgreSQL', x: 28, y: 78 },
  { id: 'LangGraph', x: 50, y: 32 },
  { id: 'RAG', x: 68, y: 28 },
  { id: 'LLM', x: 86, y: 42 },
  { id: 'pgvector', x: 70, y: 48 },
  { id: 'React', x: 50, y: 58 },
  { id: 'React Native', x: 72, y: 68 },
  { id: 'WhatsApp', x: 88, y: 78 },
  { id: 'Razorpay', x: 50, y: 84 },
  { id: 'AWS', x: 14, y: 90 },
]

export const edges: [NodeId, NodeId][] = [
  ['Python', 'FastAPI'],
  ['FastAPI', 'PostgreSQL'],
  ['FastAPI', 'LangGraph'],
  ['LangGraph', 'RAG'],
  ['RAG', 'LLM'],
  ['RAG', 'pgvector'],
  ['FastAPI', 'React'],
  ['React', 'React Native'],
  ['React Native', 'WhatsApp'],
  ['FastAPI', 'Razorpay'],
  ['Python', 'AWS'],
]
