import SocialLinks from "./SocialLinks";
import VideoCard from "./VideoCard";

export default function Hero() {
    return (
        <section className="min-h-[50vh]">
            {/* Main 2-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        Aman Kumar
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-500 max-w-xl leading-relaxed font-light">
                        I am a results-driven sales and operations professional with years of experience in global client relations, now learning, building and shipping on-chain projects in tech, blockchain, and Web3.
                    </p>
                    <SocialLinks />
                </div>

                <div className="flex justify-center lg:justify-end">
                    <VideoCard />
                </div>
            </div>
        </section>
    );
}

