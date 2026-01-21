import { notFound } from 'next/navigation';
import { getToolById, getAlternativeTools } from '@/app/lib/tools';
import { ToolPageClient } from './ToolPageClient';

interface ToolPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: ToolPageProps) {
    const { id } = await params;
    const tool = getToolById(id);

    if (!tool) {
        return {
            title: 'Tool Not Found',
        };
    }

    return {
        title: `${tool.name} - ${tool.tagline} | ToolScout`,
        description: tool.description,
        keywords: [tool.name, ...tool.tags, ...tool.categories].join(', '),
        openGraph: {
            title: `${tool.name} - ${tool.tagline}`,
            description: tool.description,
            type: 'website',
        },
    };
}

export default async function ToolPage({ params }: ToolPageProps) {
    const { id } = await params;
    const tool = getToolById(id);

    if (!tool) {
        notFound();
    }

    const alternatives = getAlternativeTools(tool.id);

    return <ToolPageClient tool={tool} alternatives={alternatives} />;
}
