import type { Metadata } from "next";
import ExternalBlogCard from "../components/external-blog-card";

interface Product {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  slug: string;
  price: string;
  excerpt: string;
}
interface Blog {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  authorName: string;
}

const Products: Product[] = [
  {
    image: { src: "/images/cbd-tea.webp", alt: "cbd-tea" },
    title: "CBD Tea - Create Your Own CBD Infused Tea",
    slug: "cbd-tea",
    price: "£19.66 each (Pack of 3) ",
    excerpt:
      "Enjoy the soothing benefits of CBD-infused tea with just a few drops and your favourite tea bag. Our drops blend effortlessly with any tea, making the perfect CBD tea every time. No need for CBD tea bags. Each dropper provides 60 servings.",
  },
  {
    image: { src: "/images/cbd-coffee.webp", alt: "cbd-coffee" },
    title: "CBD Coffeee - Infuses Coffee | themightyme",
    slug: "cbd-coffee",
    price: "£19.66 each (Pack of 3) ",
    excerpt:
      "180 servings of water-based CBD oil in three tiny bottles. We recommend one serving in the morning and one before bedtime.​",
  },
  {
    image: { src: "/images/cbd-oil.webp", alt: "cbd-oil" },
    title: "CBD Oil | Water-Based Unwind in Minutes not Hours",
    slug: "cbd-oil",
    price: "£19.66 each (Pack of 3) ",
    excerpt:
      "180 servings in three tiny droppers of water-based CBD oil. We recommend one serving in the morning and one before bedtime.",
  },
];

const Blogs: Blog[] = [
  {
    image: { src: "/images/cdb-stairmaster.webp", alt: "cdb-stairmaster" },
    title:
      "How a simple 30 min Stairmaster workout every day can lead to big results – Stairmaster Workout Complete Guide",
    slug: "blog/how-to-do-a-simple-30-min-stairmaster-workout",
    date: "July 5, 2024",
    excerpt:
      "Climbing up and down stairs is used as a fitness modality more often than you think and calming with the CBD Drinks! Even sports stars have used stadium stairs as a training tool for years.",
    authorName: "Charlie Kitcat",
  },

  {
    image: { src: "/images/cdb-stay.jpeg", alt: "cdb-stay" },
    title: "How Long Does CBD Stay In Your System?",
    slug: "health/how-long-does-cbd-stay-in-your-system",
    date: "July 3, 2024",
    excerpt:
      "Hey there! Ever wondered how long CBD stays in your system? It’s a good question, especially if you use it regularly or even just once in a while. Knowing this can help you figure out how much to take and avoid any issues with other medicines you might be using. ",
    authorName: "Rishabh S.",
  },
  {
    image: { src: "/images/cdb-drinks.jpg", alt: "cdb-drinks" },
    title:
      "The Battle for the CBD Can: Trip Drinks, Goodrays or Simply CBD by MightyMe?",
    slug: "the-battle-for-the-cbd-can-trip-drinks-goodrays-or-mee",
    date: "July 3, 2024",
    excerpt:
      "CBD drinks have exploded onto the UK market at some pace.  One day, they were nowhere. And now, they are everywhere. TRIP Drinks, Goodrays, Medahuman, the list seems to be endless. ",
    authorName: "Henry Wheeler",
  },
  {
    image: { src: "/images/green-tea-shot.webp", alt: "green-tea-shot" },
    title: "Green Tea Shot",
    slug: "green-tea-shot",
    date: "June 30, 2024",
    excerpt:
      "Green Tea Shot doesn’t have any tea in it. It’s a fun and popular drink at parties. Also called the “Jameson Green Tea Shot” or “Green Tea Shooter,” this drink is loved for its fresh and tasty flavor.",
    authorName: "Tushar Sharma",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "What is MightyMe? - Orthotropics",
  description:
    "MightyMe is a trusted brand in the CBD industry, committed to offering high-quality, water-soluble CBD products. Our aim is to provide natural solutions that seamlessly integrate into your daily routine, helping you maintain a balanced and healthy lifestyle.",
  alternates: {
    canonical: `${process.env.BASE_URL}/themightyme`,
  },
  keywords: ["Orthotropics", "orthodontics", "Mike Mew", "Mewing", "mewing"],
  openGraph: {
    title: "What is MightyMe? - Orthotropics",
    images: [`${process.env.BASE_URL}/images/ogimage.png`],
    description:
      "MightyMe is a trusted brand in the CBD industry, committed to offering high-quality, water-soluble CBD products. Our aim is to provide natural solutions that seamlessly integrate into your daily routine, helping you maintain a balanced and healthy lifestyle.",
    type: "website",
    url: `${process.env.BASE_URL}/themightyme`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Orthotropics",
  },
};

const TheMightyMePage = () => {
  return (
    <div className="py-24 bg-white">
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="w-full prose max-w-none prose-p:text-lg prose-p:text-brand-lightGreen-100 prose-headings:font-semibold prose-headings:text-2xl prose-headings:leading-[26.4px] prose-headings:text-brand-lightGreen-100 prose-strong:text-brand-lightGreen-100 prose-strong:font-source-serif prose-strong:font-semibold prose-li:text-brand-lightGreen-100 prose-li:text-lg prose-a:text-brand-lightGreen-100 prose-a:underline-offset-2 prose-a:font-source-serif">
            <p>
              <a
                href="https://themightyme.com/"
                target="_blank"
                className="no-underline"
              >
                MightyMe
              </a>{" "}
              is a trusted brand in the CBD industry, committed to offering
              high-quality, water-soluble CBD products. Our aim is to provide
              natural solutions that seamlessly integrate into your daily
              routine, helping you maintain a balanced and healthy lifestyle.
            </p>

            <h3>Potential Benefits of CBD:</h3>
            <ul className="list-disc pl-8">
              <li>
                <strong>Calm and Relaxation:</strong> Many users find CBD
                helpful for promoting a sense of calm and relaxation.
              </li>
              <li>
                <strong>Improved Posture:</strong> Proper tongue posture can
                lead to better head and neck alignment, reducing strain and
                discomfort.
              </li>
              <li>
                <strong>Discomfort Relief:</strong> Some individuals report that
                CBD can aid in managing everyday discomfort.
              </li>
              <li>
                <strong>Sleep Support:</strong> CBD is often used by those
                looking to support better sleep quality.
              </li>
              <li>
                <strong>Overall Wellness:</strong> Incorporating CBD into your
                routine may contribute to general well-being.
              </li>
            </ul>
            <h2>Water Soluble CBD by MightyMe</h2>
            <p>
              MightyMe&apos;s water-soluble CBD products are designed for
              enhanced absorption and convenience, setting them apart from
              traditional CBD oils. This innovative form of CBD ensures you can
              easily incorporate it into your daily life.
            </p>
            <h3>Features of MightyMe Water Soluble CBD:</h3>
            <ul className="list-disc pl-8">
              <li>
                <strong>Improved Absorption:</strong> Our water-soluble formula
                is designed for quicker and more efficient absorption into the
                body.
              </li>
              <li>
                <strong>Ease of Use:</strong> Simply mix our water-soluble CBD
                with any beverage or food, allowing for seamless integration
                into your daily routine.
              </li>
              <li>
                <strong>Flavor Options:</strong> Available in a variety of
                flavors, our water-soluble CBD is both effective and enjoyable
                to use.
              </li>
              <li>
                <strong>Quality Ingredients:</strong> We use high-quality,
                organically grown hemp to produce our CBD, ensuring a product
                free from harmful additives.
              </li>
            </ul>
            <h2>Why Choose MightyMe?</h2>
            <p>
              At MightyMe, we prioritize quality, transparency, and customer
              satisfaction. Our water-soluble CBD products undergo rigorous
              testing to meet high standards of purity and potency. By choosing
              MightyMe, you are selecting a brand dedicated to supporting your
              wellness journey.
            </p>
            <h3>Start Your Journey with MightyMe Today!</h3>
            <p>
              Explore the potential benefits of water-soluble CBD with MightyMe.
              Our innovative products are designed to provide you with a
              convenient and effective way to incorporate CBD into your daily
              routine. Whether you are looking to support relaxation, manage
              everyday discomfort, improve sleep quality, or enhance your
              overall wellness, MightyMe offers a range of solutions tailored to
              your needs.
            </p>
            <p>
              Join the MightyMe community today and discover the advantages of
              water-soluble CBD. Visit our website to explore our product range
              and find the perfect fit for your lifestyle.
            </p>
          </div>
          <h3 className="pt-10 font-semibold text-2xl leading-[26.4px] text-brand-lightGreen-100">
            Products
          </h3>
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
            {Products.map((data: Product) => (
              <ExternalBlogCard
                key={data.slug}
                slug={`https://themightyme.com/${data.slug}`}
                image={data.image}
                title={data.title}
                price={data.price}
                excerpt={data.excerpt}
              />
            ))}
          </div>
          <h3 className="pt-10 font-semibold text-2xl leading-[26.4px] text-brand-lightGreen-100">
            Blogs
          </h3>
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
            {Blogs.map((data: Blog) => (
              <ExternalBlogCard
                key={data.slug}
                slug={`https://themightyme.com/${data.slug}`}
                image={data.image}
                title={data.title}
                date={data.date}
                excerpt={data.excerpt}
                authorName={data.authorName}
              />
            ))}
          </div>
        </div>

        {/* <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
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
        </div> */}
      </section>
    </div>
  );
};

export default TheMightyMePage;
