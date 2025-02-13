import { FC } from "react";

const PodcastPage: FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Podcast</h1>
        <div className="space-y-6">
          {/* Example podcast */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">
              Episode 1: Introduction to LawyerApp®
            </h2>
            <p className="text-sm text-gray-500">Duration: 30 mins</p>
            <audio controls className="w-full mt-4">
              <source src="your-podcast-link.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* Add more podcast episodes here */}
        </div>
      </section>
    </main>
  );
};

export default PodcastPage;
