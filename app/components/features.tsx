import FeatureCard from "./feature-card";

interface FeatureProps {
  pages: any;
}

const Features = ({ pages }: FeatureProps) => {
  const discoverPages = pages?.filter((page: any) => {
    return page.fields.category.fields.slug === "discover";
  });

  const educationPages = pages?.filter((page: any) => {
    return page.fields.category.fields.slug === "education";
  });

  const sciencePages = pages?.filter((page: any) => {
    return page.fields.category.fields.slug === "science";
  });
  const discoverPagesFeatureList: any = [];
  const educationPagesFeatureList: any = [];
  const sciencePageFeatureList: any = [];

  discoverPages.forEach((item: any) => {
    discoverPagesFeatureList.push({
      fields: {
        slug: item.fields.slug,
        title: item.fields.title,
      },
    });
  });

  discoverPagesFeatureList.push({
    fields: {
      slug: "timeline",
      title: "Gasping for Reform",
    },
  });

  educationPages.forEach((item: any) => {
    educationPagesFeatureList.push({
      fields: {
        slug: item.fields.slug,
        title: item.fields.title,
      },
    });
  });

  sciencePages.forEach((item: any) => {
    sciencePageFeatureList.push({
      fields: {
        slug: item.fields.slug,
        title: item.fields.title,
      },
    });
  });

  return (
    <section className="pb-24">
      <div className="mx-auto w-full grid md:grid-cols-2 grid-cols-1 gap-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <FeatureCard
          title="Discover"
          description="Practical guidance about Orthotropics."
          featureList={discoverPagesFeatureList}
          guidanceTitle="More guidance on Orthotropics"
          url="/discover"
        />
        <FeatureCard
          title="Education"
          description="Educational information about Orthotropics."
          featureList={educationPagesFeatureList}
          guidanceTitle="More resources on Orthotropics"
          url="/education"
        />
        <FeatureCard
          title="Science"
          description="Following the data on Orthotropics."
          featureList={sciencePageFeatureList}
          guidanceTitle="More science on Orthotropics"
          url="/science"
        />
        <FeatureCard
          title="About the IAFGG"
          description="International Association of Facial Growth Guidance (Orthotropics®)"
          featureList={[
            {
              fields: {
                slug: "/about-us",
                title: "Who we are and what we do",
              },
            },
            {
              fields: {
                slug: "/news",
                title: "Latest news and blogs",
              },
            },
            {
              fields: {
                slug: "/contact",
                title: "Contact the IAFGG",
              },
            },
          ]}
          guidanceTitle="More about the IAFGG"
          url="/about-us"
        />
      </div>
    </section>
  );
};

export default Features;
