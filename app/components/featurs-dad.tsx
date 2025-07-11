// import FeatureCard from "./feature-card";
import Image from "next/image";
interface FeatureProps {
  pages: any;
}

const FeaturesDad = ({ pages }: FeatureProps) => {
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
    <section>
    <div className="pb-24">
      <div className="mx-auto w-full grid grid-cols-1 max-w-screen-xl px-4 sm:px-6 lg:px-8">

      <div className="mx-auto w-full text-center max-w-screen-xl py-20">
        <h2 className="text-brand-lightGreen-100 font-semibold text-5xl leading-44 pb-8">
          In His Honour: Join the Movement
        </h2>
          <p className="text-brand-lightGreen-100 text-xl leading-8">
            John Mew was <strong>never given a fair platform.</strong> He was judged without meaningful scientific engagement. <br/> Now, we ask the world to help correct this.
          </p>
      </div>

    <div className="mx-auto w-full grid md:grid-cols-2 grid-cols-1 gap-16 max-w-screen-xl pb-20">
      <div className="bg-brand-light-100 rounded-2xl p-8 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-4.5xl leading-44 text-brand-lightGreen-100">Condolences and Continuing His Mission</h3>
          <div className="flex flex-col gap-4 flex-1">
            <a className="flex items-center gap-4 group text-brand-lightGreen-100 text-xl leading-[26.4px] font-semibold" href="https://forms.gle/q1ZxUXJVuLRPQig5A" target="_blank">
              <span className="shrink-0 w-10 h-10 rounded-full bg-brand-green-dark rounded-full inline-flex items-center justify-center material-symbols-outlined text-brand-light-400">
                <span className="group-hover:translate-x-0.5 transition-all">arrow_forward</span>
              </span>
              <span className="underline">The condolence book - please leave your message</span>
            </a>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <a className="flex items-center gap-4 group text-brand-lightGreen-100 text-xl leading-[26.4px] font-semibold" href="https://gofund.me/25b44317" target="_blank">
              <span className="shrink-0 w-10 h-10 rounded-full bg-brand-green-dark rounded-full inline-flex items-center justify-center material-symbols-outlined text-brand-light-400">
                <span className="group-hover:translate-x-0.5 transition-all">arrow_forward</span>
              </span>
              <span className="underline">GoFundMe – to fund legal, educational, and scientific advocacy </span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-brand-light-100 rounded-2xl p-8 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-4.5xl leading-44 text-brand-lightGreen-100">Attend the Tribute (and mewing) Event</h3>
          
          <div className="flex flex-col gap-4 flex-1">
            <a className="flex items-center gap-4 group text-brand-lightGreen-100 text-2xl leading-[26.4px] font-semibold" href="http://bit.ly/4eqyN4q" target="_blank">
              <span className="shrink-0 w-10 h-10 rounded-full bg-brand-green-dark rounded-full inline-flex items-center justify-center material-symbols-outlined text-brand-light-400">
                <span className="group-hover:translate-x-0.5 transition-all">arrow_forward</span>
              </span>
              <span className="underline">Event Info &amp; Registration</span>
            </a>
          </div>
          <p><em>- September 6th, London </em></p>
          <p><em>- (A more private event for those who knew him will be held on the 7 th Sept, his 97 birthday, at his castle in Sussex)</em></p>
        </div>
      </div>

      <div className="bg-brand-light-100 rounded-2xl p-10 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-4.5xl leading-44 text-brand-lightGreen-100">Get Involved</h3>

          <div className="flex flex-col gap-4 flex-1">
            <a className="flex items-center gap-4 group text-brand-lightGreen-100 text-xl leading-[26.4px] font-semibold" href="https://forms.gle/cgp1NjnMC5RDZLGQ6" target="_blank">
              <span className="shrink-0 w-10 h-10 rounded-full bg-brand-green-dark rounded-full inline-flex items-center justify-center material-symbols-outlined text-brand-light-400">
                <span className="group-hover:translate-x-0.5 transition-all">arrow_forward</span>
              </span>
              <span className="underline">Share your story – if your life was touched by John Mew’s work</span>
            </a>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <a className="flex items-center gap-4 group text-brand-lightGreen-100 text-xl leading-[26.4px] font-semibold" href="https://bit.ly/4lpbivv" target="_blank">
              <span className="shrink-0 w-10 h-10 rounded-full bg-brand-green-dark rounded-full inline-flex items-center justify-center material-symbols-outlined text-brand-light-400">
                <span className="group-hover:translate-x-0.5 transition-all">arrow_forward</span>
              </span>
              <span className="underline">Volunteer – help us spread awareness and build the future he imagined</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-brand-light-100 rounded-2xl p-8 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
            <h3 className="font-semibold text-4.5xl leading-44 text-brand-lightGreen-100">Support Mewing Event</h3>
            <div className="text-center">
              <Image
                src="/images/Mewing-event.jpg"
                alt="Support Mewing Event"
                width={200}
                height={200}
              />
            </div>
        </div>
      </div>
    </div>

      <div className="mx-auto w-full text-center max-w-[800px] pb-20">
          <p className="text-brand-lightGreen-100 text-xl leading-8 pb-5">
            Let us honour Professor John Mew not only with words, but with action. <br/>His vision was one of hope, health, and possibility. Now it’s up to us to carry it forward..
          </p>
          <h2 className="text-brand-lightGreen-100 font-semibold text-5xl leading-90 pb-8">
          May he rest in peace. <br/> May his ideas continue to grow.
        </h2>
      </div>


        {/*<FeatureCard
          title="May his ideas continue to grow. ..."
          description=""
          featureList={[]}
          guidanceTitle=""
          url=""
        />*/}
        {/*<FeatureCard
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
        />*/}

      </div>

    </div>
    <div className="py-24 bg-brand-light-400">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden">
              <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1248 240" width="1248" height="240" className="absolute inset-0 fill-brand-dark-450"><path xmlns="http://www.w3.org/2000/svg" d="M767.011 721.832C720.236 708.389 673.163 680.427 631.392 641.274C613.405 624.414 611.844 624.082 589.138 632.285C377.264 708.823 186.163 588.175 172.498 369.247C170.828 342.485 170.828 342.485 151.336 332.402C-52.8146 226.796 -107.535 9.19257 29.5096 -152.062C50.8459 -177.167 50.3308 -174.754 41.8348 -209.795C0.550129 -380.071 37.4945 -516.902 143.879 -587.738C184.783 -614.973 223.912 -625.829 299.798 -630.996C320.935 -632.436 320.935 -632.436 328.324 -647.598C368.595 -730.232 450.071 -815.265 510.701 -837.935C516.777 -840.207 526.081 -844.118 531.376 -846.626C609.194 -883.485 718.073 -856.711 800.523 -780.442C824.176 -758.562 824.176 -758.562 854.677 -767.58C1076.69 -833.219 1240.47 -732.861 1263.16 -517.294C1267.59 -475.127 1265.68 -478.177 1299.47 -459.326C1493.98 -350.792 1544.08 -132.808 1408.97 17.0928C1384.35 44.4015 1385.74 39.6281 1393.88 68.9898C1460.96 310.849 1358.93 481.214 1136.49 498.763C1115.83 500.392 1115.83 500.392 1102.49 525.889C1066.04 595.566 1006.32 661.507 955.146 688.589C948.621 692.042 941.775 696.428 939.931 698.338C938.088 700.247 935.375 701.809 933.901 701.809C932.429 701.809 926.819 703.996 921.438 706.668C883.936 725.288 805.749 732.966 767.011 721.832ZM887.109 657.918C948.266 643.786 1027.8 577.582 1066.92 508.245C1078.88 487.043 1079.19 488.6 1062.29 485.155C1030.27 478.63 981.862 494.632 929.678 528.997C877.257 563.517 873.588 563.271 829.821 522.309C800.341 494.72 792.862 490.848 764.837 488.667C748.169 487.37 740.791 485.553 732.83 480.786C716.402 470.947 697.886 465.322 655.327 457.243C598.072 446.373 581.781 436.72 563.187 402.643C521.79 326.776 521.608 175.856 562.807 87.1307C567.362 77.322 571.088 68.4697 571.088 67.4587C571.088 66.4476 573.254 62.7679 575.902 59.2816C578.549 55.7953 580.74 51.1308 580.769 48.9161C580.798 46.7015 583.018 42.0848 585.703 38.6569C588.387 35.2289 593.398 27.9367 596.838 22.452C600.279 16.9673 605.119 10.236 607.594 7.49365C623.551 -10.1829 636.222 -26.9442 635.447 -29.3513C628.813 -49.967 495.277 -26.1498 459.563 2.01904C455.376 5.32111 449.365 8.86975 446.204 9.90491C443.044 10.9401 429.201 21.4789 415.442 33.3244C401.683 45.1699 387.253 57.1055 383.374 59.8478C379.495 62.5901 376.28 65.7985 376.229 66.9774C376.178 68.1564 370.876 75.0831 364.446 82.3703C352.029 96.4438 333.485 132.132 331.299 146.164C328.943 161.285 352.922 209.594 367.795 219.688C370.861 221.769 374.49 226.802 375.86 230.872C378.725 239.387 390.465 245.58 403.737 245.58C412.239 245.58 412.239 245.58 412.239 273.324C412.239 301.068 412.239 301.068 427.374 317.687C451.759 344.463 455.039 358.215 447.184 400.738C441.334 432.402 442.304 433.262 497.301 445.224C510.747 448.148 524.147 452.104 527.079 454.015C530.011 455.926 533.88 457.49 535.678 457.49C541.045 457.49 583.111 479.536 600.207 491.309C627.43 510.056 643.818 532.136 651.6 560.552C657.992 583.896 684.391 605.922 741.026 635.17C791.181 661.071 840.337 668.725 887.109 657.918ZM556.647 598.449C590.616 591.311 594.619 586.347 580.023 569.455C555.404 540.961 526.175 526.391 452.207 505.737C400.326 491.25 396.27 485.915 393.805 428.923C392.087 389.211 390.604 384.182 375.008 365.202C367.706 356.314 359.995 343.994 357.872 337.823C348.234 309.8 340.983 293.932 332.427 282.137C327.345 275.131 323.186 267.966 323.186 266.215C323.186 264.464 322.083 263.032 320.735 263.032C306.979 263.032 283.401 202.636 285.321 172.319C288.215 126.638 344.874 28.8026 380.664 7.68781C382.807 6.4234 390.517 0.083374 397.798 -6.40112C455.34 -57.651 537.999 -93.5449 607.792 -97.5888C623.346 -98.49 636.072 -99.9844 636.072 -100.91C636.072 -117.408 578.715 -168.385 536.189 -189.682C457.818 -228.932 331.657 -232.325 296.985 -196.115C275.444 -173.619 263.712 -98.5549 279.374 -83.4404C288.469 -74.6631 283.626 -57.567 269.05 -46.9963C250.434 -33.4957 250.872 -34.3859 249.924 -8.13293C248.723 25.0803 227.558 63.5874 210.503 63.5874C205.142 63.5874 188.405 81.6069 188.405 87.3779C188.405 92.9595 197.098 109.914 209.248 128.029C253.889 194.586 268.87 287.824 241.355 327.85C218.79 360.675 256.829 482.486 307.427 539.432C354.066 591.922 463.91 617.934 556.647 598.449ZM900.821 464.968C917.368 454.968 933.755 444.773 937.237 442.312C945.266 436.637 977.064 423.953 995.86 418.926C1044.96 405.796 1070.44 408.725 1108.74 431.899C1138.69 450.027 1259.41 402.576 1311.34 352.262C1358.41 306.645 1381.92 182.66 1360.72 91.7993C1346.29 29.9191 1300.27 94.6056 1271.57 217.128C1260.69 263.566 1256.38 266.901 1205.16 268.485C1164.49 269.743 1154.79 272.712 1134.66 290.073C1121.1 301.762 1112.09 306.695 1090.19 314.411C1081.01 317.646 1072 321.581 1070.16 323.155C1068.33 324.73 1063.68 327.833 1059.83 330.051C1055.98 332.269 1043.81 341.284 1032.78 350.084C911.464 446.93 702.087 260.951 689.417 45.09C688.487 29.2545 686.732 17.4947 685.221 16.9773C676.82 14.1002 607.19 95.7617 607.19 108.492C607.19 110.1 605.036 114.252 602.403 117.719C567.466 163.726 561.265 335.127 593.335 368.347C615.242 391.038 687.279 404.373 703.905 388.814C716.621 376.914 734.029 385.365 748.528 410.477C752.087 416.643 753.812 417.172 775.432 418.732C815.147 421.598 822.496 425.823 844.35 458.352C856.904 477.039 865.461 485.66 869.533 483.722C870.195 483.408 884.274 474.968 900.821 464.968ZM964.458 321.838C992.194 305.001 1018.76 278.646 1018.76 267.962C1018.76 250.243 1024.48 247.082 1052.92 249.111C1076.81 250.816 1076.81 250.816 1090.82 235.755C1115.67 209.041 1133.15 204.054 1169.94 213.188C1180.94 215.921 1191.56 218.157 1193.54 218.157C1198.78 218.157 1205.31 200.96 1215.92 159.164C1226.88 116.025 1233.3 97.354 1241.49 84.8547C1244.74 79.8918 1247.4 74.8563 1247.4 73.6648C1247.4 58.032 1293.54 14.1843 1319.68 4.97528C1343.09 -3.27209 1346.41 -5.81232 1361.29 -26.8747C1459.59 -165.991 1441.98 -290.028 1307.61 -404.976C1267.3 -439.463 1250.8 -440.383 1251.32 -408.115C1251.95 -368.936 1264.1 -336.564 1300.61 -276.715C1328.09 -231.668 1327.09 -225.118 1285.72 -179.435C1268.28 -160.176 1262.8 -148.746 1257.22 -120.025C1254.73 -107.196 1249.78 -89.5233 1246.23 -80.7522C1235.17 -53.4647 1231.21 -38.4047 1226.95 -7.46466C1211.54 104.63 1116.72 147.915 948.958 119.43C913.326 113.379 839.02 84.8637 820.257 70.0397C815.766 66.4909 811.371 63.5874 810.492 63.5874C809.613 63.5874 799.184 54.8929 787.317 44.2662C750.686 11.4644 751.965 11.433 750.007 45.1814C741.362 194.212 880.022 373.094 964.458 321.838ZM181.597 296.302C198.311 280.634 181.064 216.276 142.568 150.661C110.178 95.4545 110.446 90.4601 148.003 49.1594C170.92 23.9577 177.595 10.2594 181.062 -18.6834C183.011 -34.9588 185.822 -44.5008 193.18 -59.8188C201.175 -76.4626 203.769 -85.9518 208.856 -117.159C221.458 -194.469 232.869 -212.934 282.694 -236.641C395.862 -290.486 567.87 -258.615 665.695 -165.675C685.978 -146.406 687.511 -147.352 688.661 -179.843C691.906 -271.614 635.205 -394.325 567.752 -441.513C513.512 -479.456 497.318 -478.024 439.761 -430.189C420.516 -414.194 418.405 -411.621 419.077 -404.981C420.247 -393.427 411.2 -380.095 403.071 -381.395C368.734 -386.886 362.494 -385.81 351.604 -372.521C331.982 -348.576 307.69 -340.163 276.254 -346.424C235.957 -354.45 238.254 -356.762 221.845 -291.673C200.306 -206.235 161.81 -151.258 113.74 -137.287C90.4077 -130.506 72.8839 -109.212 43.968 -52.5021C-10.199 53.7292 6.56657 144.015 98.1495 239.274C139.297 282.073 172.54 304.791 181.597 296.302ZM1109.01 80.1909C1144.74 68.4106 1157.63 47.2628 1164.73 -11.2368C1168.65 -43.4589 1168.65 -43.4588 1161.09 -50.7692C1149.02 -62.4488 1159.71 -85.0485 1183.26 -97.6672C1190.1 -101.329 1190.24 -101.792 1188.81 -115.987C1184.77 -156.045 1196.1 -178.149 1231.71 -199.647C1254.14 -213.187 1253.61 -221.088 1227.32 -265.915C1183.14 -341.256 1170.66 -410.234 1192.97 -455.794C1222.32 -515.733 1169.93 -651.839 1098.59 -700.991C1041.33 -740.434 858.901 -754.393 848.508 -720.126C847.124 -715.563 870.685 -688.007 879.8 -683.527C884.378 -681.276 889.431 -677.804 891.028 -675.81C896.163 -669.402 928.546 -657.089 971.192 -645.331C994.042 -639.031 1016.71 -632.773 1021.57 -631.426C1036.19 -627.372 1040.89 -612.607 1043.12 -563.658C1044.12 -541.852 1045.92 -523.341 1047.13 -522.522C1048.34 -521.704 1050.74 -518.229 1052.48 -514.801C1054.21 -511.373 1059.67 -503.52 1064.61 -497.35C1073.59 -486.133 1083.74 -467.578 1083.74 -462.383C1083.74 -453.802 1102.94 -419.2 1123.12 -391.404C1135.88 -373.83 1146.32 -357.072 1146.32 -354.164C1146.32 -351.256 1148.18 -346.113 1150.47 -342.736C1158.81 -330.406 1154.27 -290.652 1141.08 -260.51C1127.75 -230.039 1123.38 -221.897 1109.66 -201.921C1086.45 -168.118 1021.62 -107.206 997.86 -96.8791C993.649 -95.0484 989.575 -92.4991 988.809 -91.2141C977.658 -72.5247 883.139 -40.3579 829.358 -36.9494C799.539 -35.0595 799.073 -34.5604 810.757 -16.9883C859.647 56.5408 1021.15 109.162 1109.01 80.1909ZM912.855 -108.096C940.082 -116.853 980.785 -135.718 988.641 -143.22C991.305 -145.763 997.274 -149.479 1001.91 -151.477C1023.53 -160.801 1082.91 -224.349 1096.28 -252.467C1110.44 -282.26 1108.2 -301.043 1086.76 -332.105C1055.37 -377.612 1056.06 -376.875 1042.82 -378.695C1025.29 -381.104 1022.44 -386.641 1024.59 -414.09C1026.26 -435.386 1026.26 -435.386 1009.82 -453.307C992.429 -472.272 988.196 -481.552 985.753 -506.074C985.046 -513.167 985.572 -521.117 986.923 -523.741C1002.04 -553.12 993.334 -566.957 953.313 -577.171C854.654 -602.35 785.845 -652.352 785.265 -699.287C784.844 -733.312 660.236 -796.963 593.953 -797.012C517.359 -797.069 425.252 -733.438 370.464 -642.62C345.275 -600.865 424.824 -611.329 501.953 -659.915C562.27 -697.911 565.183 -697.876 606.948 -658.659C632.289 -634.865 634.074 -633.27 638.003 -630.909C639.727 -629.874 653.279 -626.975 668.12 -624.467C688.234 -621.068 699.382 -617.673 711.918 -611.128C721.567 -606.09 736.941 -600.736 747.989 -598.566C758.579 -596.487 779.699 -592.415 794.922 -589.518C842.309 -580.5 859.875 -567.052 880.305 -524.149C934.087 -411.21 905.967 -230.676 818.562 -127.739C793.614 -98.3576 793.452 -98.5135 847.872 -99.3539C885.052 -99.928 889.195 -100.485 912.855 -108.096ZM765.431 -159.181C770.399 -163.782 776.901 -168.87 779.879 -170.488C782.858 -172.105 785.295 -174.59 785.295 -176.01C785.295 -177.431 790.348 -184.53 796.524 -191.786C878.474 -288.066 894.987 -499.483 822.125 -519.552C781.102 -530.852 741.201 -532.787 733.766 -523.838C724.554 -512.75 711.17 -517.955 695.039 -538.899C685.412 -551.398 685.412 -551.398 661.344 -552.642C628.015 -554.365 610.476 -563.981 596.216 -588.346C575.698 -623.405 571.215 -623.388 518.657 -588.043C507.691 -580.668 498.051 -574.634 497.236 -574.634C496.42 -574.634 490.23 -571.836 483.479 -568.415C441.398 -547.093 373.299 -541.477 344.848 -556.984C293.991 -584.702 158.844 -537.108 119.47 -477.614C116.218 -472.7 109.294 -462.509 104.084 -454.968C74.9943 -412.862 61.3572 -301.968 76.492 -230.593C83.726 -196.478 89.0979 -194.822 111.563 -219.78C137.8 -248.929 145.368 -265.397 159.677 -324.471C177.886 -399.64 177.961 -399.719 234.648 -402.947C275.522 -405.274 281.043 -407.104 305.323 -426.366C316.612 -435.322 328.307 -441.966 339.99 -446.06C349.687 -449.458 363.845 -456.218 371.453 -461.082C379.061 -465.947 386.288 -469.926 387.512 -469.926C388.736 -469.926 392.352 -472.808 395.547 -476.331C406.369 -488.263 439.642 -509.469 454.262 -513.751C486.744 -523.265 549.722 -504.887 582.481 -476.335C586.525 -472.81 590.897 -469.926 592.195 -469.926C600.167 -469.926 684.208 -375.163 684.208 -366.174C684.208 -364.571 685.619 -362.698 687.343 -362.012C692.851 -359.823 719.237 -305.753 730.793 -272.975C740.714 -244.836 743.683 -229.408 746.861 -189.472C750.325 -145.957 750.625 -145.467 765.431 -159.181Z"></path></svg>
              <div className="w-full flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-8 rounded-2xl overflow-hidden px-20 py-[72px] bg-brand-dark-500">
                <h4 className="text-brand-light-400 z-[1] font-semibold text-4.5xl leading-48 xl:max-w-[660px] lg:max-w-md lg:text-left text-center">
                  The Great Mewing Event 2025
                </h4>
                <a
                  className="bg-brand-yellow-200 text-brand-lightGreen-100 z-[1] rounded-full p-5 gap-[15px] text-xl leading-6 max-w-fit inline-flex items-center group whitespace-nowrap"
                  href="https://events.zoom.us/ev/AhWKGDB2kb0fWA30oFIpWnWoWZ3hGMCBFEwyj0iqBfzqoCwI7Dnp~AouIewhbo-zTAIO7NvpMEL-An-2RJtQff78RpmlCoQ6YeCwHD4FqQRI9RA" target="_blank"
                >
                  Event Info &amp; Registration
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-all text-3xl leading-6">
                    chevron_right
                  </span>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
  );
};

export default FeaturesDad;


