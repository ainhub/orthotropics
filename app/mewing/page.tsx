import type { Metadata } from "next";
import { parseContentfulImage } from "../utils/parseContentfulImage";
import { MewingBlogSkeleton } from "@/util/contentful/types/mewingBlogs";
import { createClient } from "contentful";
import ExternalBlogCard from "../components/external-blog-card";

const spaceID = process.env.MEWING_CTF_SPACE_ID;
const TokenID = process.env.MEWING_CTF_ACCESS_TOKEN;

if (!spaceID || !TokenID) {
  throw new Error("Space id or the Token id not found!");
}
const client = createClient({
  space: spaceID,
  accessToken: TokenID,
});

const fetchArticle = async (slug: string) => {
  const blog = await client
    .getEntries<MewingBlogSkeleton>({
      content_type: "blog",
      "fields.slug": slug,
    })
    .then((response) => {
      return response.items[0];
    })
    .catch(() => {
      return null;
    });
  return blog;
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "What is Mewing? - Orthotropics",
  description:
    "Mewing is a popular technique focused on improving facial structure, posture, and overall oral health through the correct positioning of the tongue. Developed by Dr. John Mew and his son Dr. Mike Mew, this method emphasizes the importance of proper oral posture, which involves placing the tongue against the roof of the mouth, keeping the lips closed, and breathing through the nose.",
  alternates: {
    canonical: `${process.env.BASE_URL}/mewing`,
  },
  keywords: ["Orthotropics", "orthodontics", "Mike Mew", "Mewing", "mewing"],
  openGraph: {
    title: "What is Mewing? - Orthotropics",
    images: [`${process.env.BASE_URL}/images/ogimage.png`],
    description:
      "Mewing is a popular technique focused on improving facial structure, posture, and overall oral health through the correct positioning of the tongue. Developed by Dr. John Mew and his son Dr. Mike Mew, this method emphasizes the importance of proper oral posture, which involves placing the tongue against the roof of the mouth, keeping the lips closed, and breathing through the nose.",
    type: "website",
    url: `${process.env.BASE_URL}/mewing`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Orthotropics",
  },
};

const MewingPage = async () => {
  const articlesFromMewing = [
    await fetchArticle("what-is-a-weak-jawline"),
    await fetchArticle("square-jaw"),
    await fetchArticle("what-are-hunter-eyes"),
  ];

  return (
    <div className="py-24 bg-white">
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="w-full prose max-w-none prose-p:text-lg prose-p:text-brand-lightGreen-100 prose-headings:font-semibold prose-headings:text-2xl prose-headings:leading-[26.4px] prose-headings:text-brand-lightGreen-100 prose-strong:text-brand-lightGreen-100 prose-strong:font-source-serif prose-strong:font-semibold prose-li:text-brand-lightGreen-100 prose-li:text-lg prose-a:text-brand-lightGreen-100 prose-a:underline-offset-2 prose-a:font-source-serif">
            <p>
              <a
                href="https://mewingapp.co"
                target="_blank"
                className="no-underline"
              >
                Mewing
              </a>{" "}
              is a popular technique focused on improving facial structure,
              posture, and overall oral health through the correct positioning
              of the tongue. Developed by Dr. John Mew and his son Dr. Mike Mew,
              this method emphasizes the importance of proper oral posture,
              which involves placing the tongue against the roof of the mouth,
              keeping the lips closed, and breathing through the nose.
            </p>

            <h3>Benefits of Mewing:</h3>
            <ul className="list-disc pl-8">
              <li>
                <strong>Enhanced Facial Aesthetics:</strong> Regular practice of
                mewing can help in defining the jawline and improving the
                overall symmetry of the face.
              </li>
              <li>
                <strong>Improved Posture:</strong> Proper tongue posture can
                lead to better head and neck alignment, reducing strain and
                discomfort.
              </li>
              <li>
                <strong>Better Breathing:</strong> Encouraging nasal breathing
                can improve respiratory health and reduce the risk of certain
                oral health issues.
              </li>
              <li>
                <strong>Oral Health:</strong> Mewing promotes better oral
                hygiene by maintaining optimal tongue posture and minimizing
                mouth breathing.
              </li>
            </ul>
            <h2>The Official Mew App</h2>
            <p>
              To help you achieve the best results from mewing, the official Mew
              app has been developed as a comprehensive guide and tracking tool.
              The app is designed to support both beginners and advanced
              practitioners by providing structured guidance, progress tracking,
              and valuable insights into the practice of mewing.
            </p>
            <h3>Features of the Mew App:</h3>
            <ul className="list-disc pl-8">
              <li>
                <strong>Step-by-Step Tutorials:</strong> Detailed instructions
                and video demonstrations to ensure you practice mewing
                correctly.
              </li>
              <li>
                <strong>Personalized Plans:</strong> Customized mewing routines
                based on your specific goals and progress.
              </li>
              <li>
                <strong>Progress Tracking:</strong> Tools to monitor your
                improvements over time, including photo comparisons and habit
                tracking.
              </li>
              <li>
                <strong>Expert Tips:</strong> Access to advice and tips from
                leading experts in the field of orthotropics and facial
                development.
              </li>
              <li>
                <strong>Community Support:</strong> Connect with a community of
                fellow mewers for motivation, support, and shared experiences.
              </li>
            </ul>
            <h2>Why Use the Mew App?</h2>
            <p>
              The Mew app serves as an essential companion for anyone serious
              about improving their facial structure and overall health through
              mewing. By offering structured guidance and progress monitoring,
              the app ensures that you are consistently on the right track.
              Whether you are new to mewing or looking to refine your technique,
              the Mew app provides the tools and resources you need to achieve
              your goals effectively.
            </p>
            <h3>Get Started with Mewing Today!</h3>
            <p>
              Embark on your mewing journey with the official Mew app. Download
              it now to explore the benefits of proper tongue posture and start
              seeing improvements in your facial aesthetics, posture, and
              overall health. Join a growing community of individuals who are
              transforming their lives with the power of mewing.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
          {articlesFromMewing.map((article: any) => (
            <ExternalBlogCard
              key={article.fields.slug}
              slug={article.fields.slug}
              image={parseContentfulImage(article.fields.heroImage)}
              title={article.fields.title}
              body={article.fields.body}
              excerpt={article.fields.excerpt}
              authorName={article.fields.postAuthor.fields.name}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MewingPage;
