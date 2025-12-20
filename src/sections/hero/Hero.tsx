import SocialLinks from "./SocialLinks";
import VideoCard from "./VideoCard";
import ContributionGraph from "./ContributionGraph";

export default function Hero() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[70vh]">
            <div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                    Hi, I'm Aman.
                </h1>
                <p className="text-xl md:text-2xl text-zinc-500 max-w-xl leading-relaxed font-light">
                    Ex-sales & operations professional. Now building decentralized
                    systems on Solana. Bridging the gap between business strategy and
                    technical execution.
                </p>

                <SocialLinks />
                <ContributionGraph />
            </div>

            <div className="flex justify-center lg:justify-end">
                <VideoCard />
            </div>
        </section>
    );
}
