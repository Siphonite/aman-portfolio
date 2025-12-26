type Props = {
    title: string;
};

export default function SectionHeader({ title }: Props) {
    return (
        <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-bold">{title}</h2>
            <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>
    );
}
