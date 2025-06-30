import { usePathname } from "next/navigation";
import Anchor from "./anchor";
import Image from "next/image";

interface HeroProps {
  title?: string;
  description?: string;
}

const Hero = ({ description, title }: HeroProps) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <section>
        <div className="py-24 bg-brand-lightGreen-100">
          <div className="mx-auto w-full flex flex-col gap-16 max-w-[800px] px-4 sm:px-6 lg:px-8">
              <h1 className="text-center text-brand-light-400 font-semibold text-4.5xl leading-44">
                Professor John Mew (1928–2025): Visionary, Pioneer, and Relentless Advocate for Human Health
              </h1>
               
               <div className="rounded-2xl bg-brand-light-100 overflow-hidden">
               <div className="flex items-center justify-center mb-5">
                  <Image
                    src="/images/Professor-John-Mew.jpg"
                    alt="John Mew"
                    width={736}
                    height={400}
                  />
                </div>
                <div className="text-brand-lightGreen-100 text-center leading-28.8 group-hover:text-brand-green-light transition-all duration-100">
                  <em>Professor John Mew (1928–2025)</em>
                </div>
                <div className="px-10 py-10 ">
                <h2 className="text-brand-lightGreen-100 font-semibold text-4.5xl leading-44 pb-8">
                  Professor John Mew (1928–2025): Visionary, Pioneer, and Relentless Advocate for Human Health
                </h2>
                <p className="text-brand-lightGreen-100 text-xl leading-8">
                  We are deeply saddened to announce the passing of <strong>Professor John Mew,</strong> who died
                  peacefully in 2025 at the age of 96. A man of remarkable intellect, courage, and conviction,
                  John was not only one of the most visionary orthodontists of his generation — he was a
                  pioneer, a philosopher of health, and a true force for change.
                </p>
                <p className="text-brand-lightGreen-100 text-xl leading-8">
                  Widley considered a polymath in every sense of the word: a <strong>Formula 1 test driver, WWII
                  dispatch rider, America’s Cup sailor, castle builder, Anthropologist, GB downhill
                  skier, author, and father of three.</strong> But it was his work in <strong>craniofacial development</strong> and his
                  lifelong commitment to better health outcomes that left his most lasting impact.
                  </p>
                  <p className="text-brand-lightGreen-100 text-xl leading-8">
                  After qualifying in dentistry at University College London and initially training as a
                  maxillofacial surgeon, John entered the world of orthodontics — only to discover a
                  profession that, in his eyes, had lost its way. He became disillusioned with a system that
                  focused on mechanically straightening teeth rather than understanding why faces grow
                  incorrectly in the first place.</p>
                              <p className="text-brand-lightGreen-100 text-xl leading-8">
                  In response, he developed <strong>Biobloc Orthotropics</strong> — a revolutionary approach that placed
                  early oral posture, breathing, and function at the centre of facial development. He believed
                  that by guiding growth naturally in children, we could prevent crooked teeth, enhance facial
                  aesthetics, reduce airway issues, and support long-term systemic health.
                  </p>
                              <p className="text-brand-lightGreen-100 text-xl leading-8">
                  His ideas were far ahead of their time. They challenged powerful institutions and, as a result,
                  he faced decades of criticism, professional sanction, and even the loss of his orthodontic
                  license. But John never wavered. He continued to teach, publish, and speak — influencing a
                  quiet revolution in dentistry and inspiring a global community of parents, professionals, and
                  seekers of truth.
                  </p>
                              <p className="text-brand-lightGreen-100 text-xl leading-8">
                  Today, his work is carried forward by his son, <strong>Dr. Mike Mew,</strong> and a growing international
                  movement. The practice of &quot;mewing&quot; — now with over <strong>30 billion views on TikTok</strong> — has
                  ignited new public interest in his ideas, and sparked debate about the very foundations of
                  orthodontic care.
                  </p>
                              <p className="text-brand-lightGreen-100 text-xl leading-8">
                  John Mew was not just ahead of his time — he was a man unafraid to ask the uncomfortable
                  questions others refused to face. In doing so, he made it possible for us all to envision a new
                  standard of care: one based on prevention, function, and informed choice.
                  </p>
            </div>
            </div>

          </div>
        </div>


        <div className="pt-24 pb-20 hidden">
          <div className="mx-auto w-full flex flex-col gap-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-brand-lightGreen-100 font-semibold md:text-[64px] text-4.5xl leading-[3.5rem] md:leading-[70.4px]">
              Professor John Mew (1928–2025): Visionary, Pioneer, and Relentless Advocate for Human Health
            </h1>
            <div className="flex flex-col gap-8">
            <p className="text-brand-lightGreen-100 text-xl leading-8">
              We are deeply saddened to announce the passing of Professor John Mew, who died
              peacefully in 2025 at the age of 96. A man of remarkable intellect, courage, and conviction,
              John was not only one of the most visionary orthodontists of his generation — he was a
              pioneer, a philosopher of health, and a true force for change.
            </p>
            <p className="text-brand-lightGreen-100 text-xl leading-8">
              Widley considered a polymath in every sense of the word: a Formula 1 test driver, WWII
              dispatch rider, America’s Cup sailor, castle builder, Anthropologist, GB downhill
              skier, author, and father of three. But it was his work in craniofacial development and his
              lifelong commitment to better health outcomes that left his most lasting impact.
              </p>
                          <p className="text-brand-lightGreen-100 text-xl leading-8">
              After qualifying in dentistry at University College London and initially training as a
              maxillofacial surgeon, John entered the world of orthodontics — only to discover a
              profession that, in his eyes, had lost its way. He became disillusioned with a system that
              focused on mechanically straightening teeth rather than understanding why faces grow
              incorrectly in the first place.</p>
                          <p className="text-brand-lightGreen-100 text-xl leading-8">
              In response, he developed Biobloc Orthotropics — a revolutionary approach that placed
              early oral posture, breathing, and function at the centre of facial development. He believed
              that by guiding growth naturally in children, we could prevent crooked teeth, enhance facial
              aesthetics, reduce airway issues, and support long-term systemic health.
              </p>
                          <p className="text-brand-lightGreen-100 text-xl leading-8">
              His ideas were far ahead of their time. They challenged powerful institutions and, as a result,
              he faced decades of criticism, professional sanction, and even the loss of his orthodontic
              license. But John never wavered. He continued to teach, publish, and speak — influencing a
              quiet revolution in dentistry and inspiring a global community of parents, professionals, and
              seekers of truth.
              </p>
                          <p className="text-brand-lightGreen-100 text-xl leading-8">
              Today, his work is carried forward by his son, Dr. Mike Mew, and a growing international
              movement. The practice of &quot;mewing&quot; — now with over 30 billion views on TikTok — has
              ignited new public interest in his ideas, and sparked debate about the very foundations of
              orthodontic care.
              </p>
                          <p className="text-brand-lightGreen-100 text-xl leading-8">
              John Mew was not just ahead of his time — he was a man unafraid to ask the uncomfortable
              questions others refused to face. In doing so, he made it possible for us all to envision a new
              standard of care: one based on prevention, function, and informed choice.
              </p>
            </div>
          </div>
        </div>
        </section>

        // <section className="pt-24 pb-20">
        //   <div className="mx-auto w-full flex flex-col gap-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        //     <h1 className="text-brand-lightGreen-100 font-semibold md:text-[64px] text-4.5xl leading-[3.5rem] md:leading-[70.4px] md:max-w-[899px]">
        //       The International Association of Facial Growth Guidance
        //       (Orthotropics®)
        //     </h1>
        //     <div className="flex flex-col gap-8 md:max-w-3xl">
        //       <p className="text-brand-lightGreen-100 text-xl leading-8">
        //         The IAFGG represents all those clinicians and technicians who
        //         believe that ideal development of the face and jaws is dependent
        //         on correct ‘oral posture’.
        //       </p>
        //       <Anchor link="/about-us" text="Find out more" variant="yellow" />
        //     </div>
        //   </div>
        // </section>

      ) : (
        <section className="pt-24 pb-20">
          <div className="mx-auto w-full flex flex-col gap-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col gap-4">
              <h1
                className={`${
                  pathname.includes("search") ? "" : "capitalize"
                } text-brand-lightGreen-100 font-semibold text-[52px] leading-[57.2px]`}
              >
                {title
                  ? title
                  : pathname
                      .replace("shop-item/", "")
                      .replaceAll("-", " ")
                      .replaceAll("+", " ")
                      .replace("/", "")
                      .replace("event/", "")
                      .replace("ii", "II")}
              </h1>
              {description && (
                <p className="text-brand-lightGreen-100 text-xl leading-[30px]">
                  {description}
                </p>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
