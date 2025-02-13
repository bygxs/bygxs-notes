export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Inspiring Stories
        </h1>
        <p className="text-lg text-center mb-6">
          Discover real-life stories of how lawyers and firms have made a
          difference in people’s lives.
        </p>
        <div className="flex flex-col gap-6">
          <article className="bg-gray-800 p-6 shadow rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Justice Served: A Landmark Case
            </h2>
            <p>
              In a groundbreaking case, a dedicated team of lawyers took on a
              powerful corporation accused of environmental violations. Their
              relentless pursuit of justice not only held the corporation
              accountable but also set a precedent for future cases. The
              community rallied behind the lawyers, sharing their stories of how
              the pollution had affected their health and livelihoods. Thanks to
              the lawyers' efforts, the corporation was forced to pay
              significant damages and implement changes to prevent further harm.
              This case became a beacon of hope for many, demonstrating the
              power of the legal system to effect change.
            </p>
          </article>
          <article className="bg-gray-800 p-6 shadow rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">Pro Bono Heroes</h2>
            <p>
              A group of lawyers from a prestigious law firm decided to give
              back to their community by offering pro bono services to those in
              need. They worked tirelessly to assist low-income families facing
              eviction, helping them navigate the complex legal system and
              secure their homes. One particular case involved a single mother
              who was on the brink of losing her home due to unforeseen medical
              expenses. The lawyers not only provided legal representation but
              also connected her with resources for financial assistance. Their
              dedication changed her life, allowing her to stay in her home and
              provide stability for her children. This initiative inspired other
              firms to follow suit, creating a ripple effect of compassion and
              support within the legal community.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
