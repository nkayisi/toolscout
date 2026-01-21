export interface Tool {
    id: string;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    categories: string[];
    tags: string[];
    use_cases: string[];
    features: string[];
    pros: string[];
    cons: string[];
    pricing: 'Free' | 'Paid' | 'Freemium' | 'Open Source';
    license?: string;
    website_url: string;
    github_url?: string;
    alternatives: string[]; // Tool IDs
    image_url?: string; // Screenshot or logo URL
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
}

export const categories: Category[] = [
    {
        id: 'backend',
        name: 'Backend',
        slug: 'backend',
        description: 'Server-side frameworks, APIs, and backend services'
    },
    {
        id: 'frontend',
        name: 'Frontend',
        slug: 'frontend',
        description: 'UI frameworks, libraries, and frontend tools'
    },
    {
        id: 'database',
        name: 'Database',
        slug: 'database',
        description: 'Database systems, ORMs, and data management tools'
    },
    {
        id: 'devops',
        name: 'DevOps',
        slug: 'devops',
        description: 'Deployment, CI/CD, monitoring, and infrastructure tools'
    },
    {
        id: 'api',
        name: 'API',
        slug: 'api',
        description: 'API development, testing, and management tools'
    },
    {
        id: 'ai',
        name: 'AI & ML',
        slug: 'ai',
        description: 'Artificial intelligence and machine learning platforms'
    },
    {
        id: 'nocode',
        name: 'No-Code',
        slug: 'nocode',
        description: 'Visual development and no-code platforms'
    }
];

export const tools: Tool[] = [
    {
        id: 'nextjs',
        name: 'Next.js',
        slug: 'nextjs',
        tagline: 'The React framework for production',
        description: 'Next.js is a React framework that provides building blocks to create web applications. It handles tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.',
        categories: ['frontend'],
        tags: ['React', 'SSR', 'Static Site', 'Full-stack'],
        use_cases: [
            'Build SEO-friendly web applications',
            'Create static sites with dynamic capabilities',
            'Develop full-stack React applications',
            'Build e-commerce platforms',
            'Create marketing websites with great performance'
        ],
        features: [
            'Server-side rendering (SSR) and static site generation (SSG)',
            'API routes for backend functionality',
            'Automatic code splitting and optimization',
            'Built-in CSS and Sass support',
            'Image optimization and lazy loading',
            'TypeScript support out of the box',
            'Vercel deployment integration'
        ],
        pros: [
            'Excellent developer experience',
            'Great performance optimizations',
            'Strong ecosystem and community',
            'Flexible rendering options',
            'Built-in optimizations'
        ],
        cons: [
            'Can be overkill for simple projects',
            'Learning curve for SSR concepts',
            'Opinionated file-based routing',
            'Vendor lock-in with Vercel features'
        ],
        pricing: 'Open Source',
        license: 'MIT',
        website_url: 'https://nextjs.org',
        github_url: 'https://github.com/vercel/next.js',
        alternatives: ['react', 'gatsby', 'remix']
    },
    {
        id: 'react',
        name: 'React',
        slug: 'react',
        tagline: 'A JavaScript library for building user interfaces',
        description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.',
        categories: ['frontend'],
        tags: ['JavaScript', 'UI Library', 'Component-based', 'Virtual DOM'],
        use_cases: [
            'Build interactive user interfaces',
            'Create reusable UI components',
            'Develop single-page applications',
            'Build mobile apps with React Native',
            'Create component libraries'
        ],
        features: [
            'Component-based architecture',
            'Virtual DOM for performance',
            'Unidirectional data flow',
            'JSX syntax for writing components',
            'Hooks for state management',
            'Large ecosystem of libraries',
            'Strong TypeScript support'
        ],
        pros: [
            'Huge community and ecosystem',
            'Excellent documentation',
            'Flexible and unopinionated',
            'Great developer tools',
            'Industry standard'
        ],
        cons: [
            'Steep learning curve for beginners',
            'Requires additional tools for full applications',
            'Fast-paced updates',
            'JSX can be confusing initially'
        ],
        pricing: 'Open Source',
        license: 'MIT',
        website_url: 'https://react.dev',
        github_url: 'https://github.com/facebook/react',
        alternatives: ['vue', 'svelte', 'angular']
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        slug: 'postgresql',
        tagline: 'The world\'s most advanced open source relational database',
        description: 'PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
        categories: ['database'],
        tags: ['SQL', 'Relational', 'ACID', 'Open Source'],
        use_cases: [
            'Store structured data with complex relationships',
            'Build applications requiring ACID compliance',
            'Handle large-scale data analytics',
            'Create geospatial applications',
            'Manage time-series data'
        ],
        features: [
            'ACID compliance and reliability',
            'Advanced SQL features and extensions',
            'JSON and JSONB support',
            'Full-text search capabilities',
            'Geospatial data support (PostGIS)',
            'Custom data types and functions',
            'Horizontal and vertical scaling options'
        ],
        pros: [
            'Extremely reliable and stable',
            'Rich feature set',
            'Strong consistency guarantees',
            'Excellent performance',
            'Active community support'
        ],
        cons: [
            'Can be complex for simple use cases',
            'Memory intensive',
            'Requires database administration knowledge',
            'Slower for simple read-heavy workloads'
        ],
        pricing: 'Open Source',
        license: 'PostgreSQL License',
        website_url: 'https://postgresql.org',
        github_url: 'https://github.com/postgres/postgres',
        alternatives: ['mysql', 'mongodb', 'sqlite']
    },
    {
        id: 'docker',
        name: 'Docker',
        slug: 'docker',
        tagline: 'Accelerate how you build, share, and run applications',
        description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. It enables developers to package applications with all dependencies into lightweight, portable containers.',
        categories: ['devops'],
        tags: ['Containerization', 'DevOps', 'Deployment', 'Virtualization'],
        use_cases: [
            'Package applications with dependencies',
            'Create consistent development environments',
            'Deploy applications across different platforms',
            'Build microservices architectures',
            'Simplify CI/CD pipelines'
        ],
        features: [
            'Lightweight containerization',
            'Docker Hub for image sharing',
            'Docker Compose for multi-container apps',
            'Cross-platform compatibility',
            'Resource isolation and security',
            'Easy scaling and orchestration',
            'Integration with cloud platforms'
        ],
        pros: [
            'Consistent environments across stages',
            'Efficient resource utilization',
            'Fast deployment and scaling',
            'Large ecosystem of images',
            'Industry standard for containers'
        ],
        cons: [
            'Learning curve for containerization concepts',
            'Additional complexity for simple apps',
            'Storage overhead for images',
            'Security considerations with shared kernel'
        ],
        pricing: 'Freemium',
        license: 'Apache 2.0',
        website_url: 'https://docker.com',
        github_url: 'https://github.com/docker',
        alternatives: ['podman', 'containerd', 'lxc']
    },
    {
        id: 'stripe',
        name: 'Stripe',
        slug: 'stripe',
        tagline: 'Online payment processing for internet businesses',
        description: 'Stripe is a suite of APIs powering online payment processing and commerce solutions for businesses of all sizes. It provides the technical, fraud prevention, and banking infrastructure required to operate online payment systems.',
        categories: ['api'],
        tags: ['Payments', 'API', 'E-commerce', 'SaaS'],
        use_cases: [
            'Process online payments securely',
            'Build subscription billing systems',
            'Create marketplace payment flows',
            'Handle international payments',
            'Implement payment forms and checkout'
        ],
        features: [
            'Comprehensive payment APIs',
            'Support for 135+ currencies',
            'Advanced fraud protection',
            'Subscription and billing management',
            'Mobile SDKs for iOS and Android',
            'Detailed analytics and reporting',
            'PCI compliance handled automatically'
        ],
        pros: [
            'Excellent developer experience',
            'Comprehensive documentation',
            'Global payment support',
            'Strong security and compliance',
            'Reliable infrastructure'
        ],
        cons: [
            'Transaction fees can add up',
            'Complex pricing structure',
            'Limited customization for some features',
            'Requires technical integration'
        ],
        pricing: 'Paid',
        website_url: 'https://stripe.com',
        alternatives: ['paypal', 'square', 'braintree']
    },
    {
        id: 'openai',
        name: 'OpenAI API',
        slug: 'openai',
        tagline: 'AI models for natural language, code, and images',
        description: 'OpenAI provides cutting-edge AI models through a simple API, including GPT for text generation, Codex for code, and DALL-E for images. Build AI-powered applications with state-of-the-art language models.',
        categories: ['ai'],
        tags: ['AI', 'GPT', 'Natural Language', 'Machine Learning'],
        use_cases: [
            'Build AI chatbots and assistants',
            'Generate and analyze text content',
            'Create code completion tools',
            'Build content generation platforms',
            'Implement AI-powered search and recommendations'
        ],
        features: [
            'GPT models for text generation',
            'Code generation and completion',
            'Image generation with DALL-E',
            'Fine-tuning capabilities',
            'Multiple model sizes and capabilities',
            'Streaming responses',
            'Usage-based pricing'
        ],
        pros: [
            'State-of-the-art AI capabilities',
            'Easy-to-use API',
            'Comprehensive documentation',
            'Regular model improvements',
            'Strong safety measures'
        ],
        cons: [
            'Can be expensive for high usage',
            'Rate limits and quotas',
            'Potential for biased outputs',
            'Requires careful prompt engineering',
            'Data privacy considerations'
        ],
        pricing: 'Paid',
        website_url: 'https://openai.com/api',
        alternatives: ['anthropic', 'cohere', 'huggingface']
    },
    {
        id: 'tailwindcss',
        name: 'Tailwind CSS',
        slug: 'tailwindcss',
        tagline: 'A utility-first CSS framework',
        description: 'Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup. It provides low-level utility classes to build completely custom designs.',
        categories: ['frontend'],
        tags: ['CSS', 'Styling', 'Utility-first', 'Design System'],
        use_cases: [
            'Build custom designs without writing CSS',
            'Create consistent design systems',
            'Rapidly prototype user interfaces',
            'Build responsive designs efficiently',
            'Maintain design consistency across teams'
        ],
        features: [
            'Utility-first approach',
            'Responsive design utilities',
            'Dark mode support',
            'Customizable design system',
            'JIT (Just-In-Time) compilation',
            'Plugin ecosystem',
            'Excellent VS Code integration'
        ],
        pros: [
            'Fast development workflow',
            'Highly customizable',
            'Small production bundle size',
            'Great documentation',
            'Strong community and ecosystem'
        ],
        cons: [
            'Learning curve for utility classes',
            'Can lead to verbose HTML',
            'Requires build process',
            'May not suit all design workflows'
        ],
        pricing: 'Open Source',
        license: 'MIT',
        website_url: 'https://tailwindcss.com',
        github_url: 'https://github.com/tailwindlabs/tailwindcss',
        alternatives: ['bootstrap', 'bulma', 'chakra-ui']
    },
    {
        id: 'vercel',
        name: 'Vercel',
        slug: 'vercel',
        tagline: 'The platform for frontend developers',
        description: 'Vercel is a cloud platform for static sites and serverless functions that fits perfectly with your workflow. It enables developers to host websites and web services that deploy instantly and scale automatically.',
        categories: ['devops'],
        tags: ['Hosting', 'Serverless', 'JAMstack', 'CDN'],
        use_cases: [
            'Deploy frontend applications instantly',
            'Host static sites with global CDN',
            'Run serverless functions',
            'Preview deployments for every commit',
            'Build JAMstack applications'
        ],
        features: [
            'Instant deployments from Git',
            'Global CDN and edge network',
            'Serverless functions support',
            'Preview deployments',
            'Custom domains and SSL',
            'Analytics and performance insights',
            'Team collaboration features'
        ],
        pros: [
            'Excellent developer experience',
            'Fast global performance',
            'Seamless Git integration',
            'Great for frontend frameworks',
            'Generous free tier'
        ],
        cons: [
            'Can be expensive for high traffic',
            'Limited backend capabilities',
            'Vendor lock-in concerns',
            'Function execution time limits'
        ],
        pricing: 'Freemium',
        website_url: 'https://vercel.com',
        alternatives: ['netlify', 'cloudflare-pages', 'aws-amplify']
    }
];

export function getToolBySlug(slug: string): Tool | undefined {
    return tools.find(tool => tool.slug === slug);
}

export function getToolById(id: string): Tool | undefined {
    return tools.find(tool => tool.id === id);
}

export function getToolsByCategory(categoryId: string): Tool[] {
    return tools.filter(tool => tool.categories.includes(categoryId));
}

export function searchTools(query: string): Tool[] {
    const lowercaseQuery = query.toLowerCase();
    return tools.filter(tool =>
        tool.name.toLowerCase().includes(lowercaseQuery) ||
        tool.tagline.toLowerCase().includes(lowercaseQuery) ||
        tool.description.toLowerCase().includes(lowercaseQuery) ||
        tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
}

export function getAlternativeTools(toolId: string): Tool[] {
    const tool = tools.find(t => t.id === toolId);
    if (!tool) return [];

    return tool.alternatives
        .map(altId => tools.find(t => t.id === altId))
        .filter((t): t is Tool => t !== undefined);
}

export const allTags = Array.from(
    new Set(tools.flatMap(tool => tool.tags))
).sort();

export const pricingOptions = ['Free', 'Paid', 'Freemium', 'Open Source'] as const;
