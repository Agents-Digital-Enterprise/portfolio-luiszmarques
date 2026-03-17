export interface Skill {
    name: string;
    note?: string;
  }
  
  export interface SkillGroup {
    domain: string;
    description: string;
    skills: Skill[];
  }
  
  export const skillGroups: SkillGroup[] = [
    {
      domain: 'Frontend',
      description: 'Component-driven UI architecture built for scale',
      skills: [
        { name: 'Vue 3', note: 'Composition API, component architecture' },
        { name: 'GraphQL', note: 'Schema design, resolvers' },
        { name: 'REST', note: 'API design' },
        { name: 'Cloudflare Workers', note: 'BFF pattern, edge compute' },
        { name: 'Cloudflare Pages', note: 'Static + edge deployment' }
      ],
    },
    {
      domain: 'Backend',
      description: 'API gateway and backend-for-frontend on the edge',
      skills: [
        { name: 'API Gateway Design', note: 'Routing, auth' },
        { name: 'GraphQL', note: 'Schema design, resolvers' },
        { name: 'Federation', note: 'Distributed schema architecture' },
        { name: 'Data Migration', note: 'Strategy, execution, validation' },
        { name: 'Data Integrity', note: 'Validation, reconciliation, auditing' },
      ],
    },
    {
      domain: 'DevOps',
      description: 'Cloud infrastructure, pipelines, and environment management',
      skills: [
        { name: 'AWS', note: 'System design, resource management' },
        { name: 'CI/CD', note: 'Pipeline design, GitHub Actions' },
        { name: 'Environment Management', note: 'Dev/staging/prod parity' },
      ],
    },
  ];
