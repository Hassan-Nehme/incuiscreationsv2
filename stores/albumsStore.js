export const useAlbumsStore = defineStore("albums", () => {
  const allAlbums = ref([
    {
      name: "migato",
      images: 13,
      title: "migato",
      links: [
        "https://www.youtube-nocookie.com/embed/F282SjTzZY8?si=qYjWj_IkVU-yoRLS",
      ],
      categories: [
        "art direction",
        "digital content production",
        "ad campaign",
        "photography",
      ],
      description: [
        "In our exceptional project for Migato, we executed an ad campaign in Paris for a Greek-based brand without their physical presence. Our unwavering commitment to Migato’s desires, requirements, and brand vision was evident in every step of the process. We began with in-depth market research and a deep understanding of Migato’s brand identity and objectives, crafting a creative concept that celebrated their products and Paris’s beauty.",
        "From locations near the Louvre and the Eiffel Tower to casting models and organizing the shoot. Post-production and editing were handled with precision. This project demonstrates our dedication and expertise, going the extra mile to meet our client’s needs and exceed their expectations, even in a different country.",
      ],
    },
    {
      name: "dior",
      title: "dior",
      links: [
        "https://www.youtube-nocookie.com/embed/86ESc89yJdI?si=MHgQa8HtzP3v6bAS",
      ],
      categories: ["art direction", "ad campaign", "TV Commercial Production"],
      description: [
        "INCUIS had the privilege of partnering with Bocconi University Milan’s Luxury Management Department and Dior for a groundbreaking project. We were tasked with creating a promotional video for the launch of a new perfume that embodied innovation and sustainability.",
        "This collaborative effort allowed us to contribute to a project that aligns with the values of sustainability and luxury while promoting Dior’s innovative fragrance. Our team was dedicated to delivering a visually captivating and compelling ad campaign that supported this exciting venture.",
      ],
    },
    {
      name: "louisexincouture",
      images: 5,
      links: ["https://www.youtube.com/embed/F7EolpYh_4A?si=Ikg0FuKOiIEqevJl"],
      title: "LOUISE XIN COUTURE",
      categories: ["photography", "digital content production"],
      description: [
        "INCUIS has collaborated with Louise Xin Couture for an exclusive Image Amplified feature, bringing to life a night of elegant extravagance on the enchanting streets of Paris. In this narrative, we delve into the remarkable journey of Louise Xin, a prominent fashion designer and a passionate human rights activist, who uses fashion as her weapon to combat forced labor.",

        "This singular dress is the centerpiece of our visual storytelling, symbolizing her mission to make a difference, one dress at a time.",
      ],
    },
    {
      name: "toti",
      images: 5,
      title: "toti",
      categories: ["photography", "art direction"],
      description: [
        "INCUIS partnered with TOTI, a US-based brand, for a remarkable product photography project. Despite the geographical distance, our dedicated team handled every aspect of the project without the brand’s physical presence.",
        "Our focus was to capture the essence of TOTI’s jewelry collections, deeply rooted in the philosophy of ‘everyday luxury’ and universal values such as the warrior spirit, resilience, confidence, and determination. Our high-quality product imagery not only showcased the brand’s identity but also highlighted the visual impact. Our product photography services, tailored to meet unique needs, seamlessly brought the project to life.",
      ],
    },
    {
      name: "imageamplified",
      images: 13,
      title: `IMAGE AMPLIFIED `,
      links: [
        "https://www.youtube-nocookie.com/embed/1alXsGDdU4Q?si=d8CApnBvS-Wjifo4",
      ],
      categories: ["editorial", "photography", "digital content production"],
      description: [
        "INCUIS collaborated with models from M Models and IMG Models agencies, for an Image Amplified Exclusive, spring 2023 edition, centered around the theme of “Casting Attitude.” This project underscores our exceptional capacity to convey engaging narratives and striking visuals.",
        "Our editorial work is a culmination of creative visionaries, seasoned photographers, and talented stylists. We specialize in creating editorial content that captivates and differentiates your brand in the industry.",
      ],
    },
    {
      name: "kanasport",
      images: 4,
      title: "kana sport",
      links: [
        "https://www.youtube-nocookie.com/embed/IEgY3D3CtmU?si=aRlm_PSEABZH8IVG",
        "https://www.youtube-nocookie.com/embed/UgV6oBzlPqo?si=-xWy1x-IHz3hVz72",
        "https://www.youtube-nocookie.com/embed/fh25WxtkfGo?si=Rl2Tp_AHF98nfvLc",
        "https://www.youtube-nocookie.com/embed/gjzkIzBAWoc?si=2xkbFXLI8q1ZLZdz",
        "https://www.youtube-nocookie.com/embed/WlbjSZDo1R0?si=QabEiGqASK8w4w5o",
      ],
      categories: ["digital content production", "photography"],
      description: [
        "Our collaboration with KANA SPORT aimed to enhance their online presence and captivate a wider audience. Through strategic content creation, we curated engaging short videos and reels, meticulously tailored for Instagram and TikTok. Witness the transformation as we propelled their video views from 60 to an impressive 1,500, setting the stage for heightened brand visibility. This project showcases our commitment to fueling the success of emerging brands.",
      ],
    },
    {
      name: "veralab",
      title: "vera lab",
      links: [
        "https://www.youtube-nocookie.com/embed/VJBPavT1Sfw?si=dgS8g8xEpKn9Ke23",
      ],
      categories: ["digital content production", "art direction"],
      description: [
        "In our collaboration, with Vera Lab, we crafted a brand video for their Skin Care collection, embodying universal values such as love, acceptance, joy, and connection. Our creative idea aimed not only to showcase the brand’s products but also to communicate a compelling message that resonates with the Gen Z. Through unique storytelling and a focus on visual impact, we successfully didn’t transform Vera Lab’s image, but we highlighted how their products could also resonate with a new generation, making it more inclusive and appealing to a broader audience.",
      ],
    },
    {
      name: "sospiro",
      images: 16,
      title: "sospiro",
      links: [
        "https://www.youtube-nocookie.com/embed/mJFVimMumdg?si=nBxP0pQ0YbGV0nZ0",
        "https://www.youtube-nocookie.com/embed/5SfSov9rA1I?si=gEKIMWzSR6ptA5jP",
        "https://www.youtube-nocookie.com/embed/HgChAJXDIMI?si=g5YLlKTbqoU3-pgR",
        "https://www.youtube-nocookie.com/embed/xlsNpsY-hXU?si=IYFSlySJAhA2neBN",
        "https://youtube.com/embed/l190voXkOpY?si=g6CvEPI3ZfculQxd",
      ],
      categories: [
        "ad campaign",
        "photography",
        "print production",
        "digital content production",
        "art direction",
      ],
      description: [
        "For Sospiro Fragrance we created an ad campaign that beautifully encapsulates the essence of elegance and cultural richness. Our process begins by understanding Sospiro’s distinctive brand identity and the vibrant tastes of its audience. Despite the geographical separation, our commitment to delivering luxury shines through in every meticulously crafted frame. From casting models that resonate with the brand’s dynamic spirit to orchestrating a shoot that exudes bold elegance, our campaign is a testament to transcendent luxury that speaks volumes.",
      ],
    },
    {
      name: "reinventedparfums",
      images: 15,
      title: "reinvented parfums",
      links: [
        "https://www.youtube-nocookie.com/embed/qZKFs_sLn5M?si=Lj6ad_XHQHv5beo4",
        "https://www.youtube-nocookie.com/embed/ZZgpodc8IfM?si=YnIow2zdwC3yURQu",
        "https://www.youtube-nocookie.com/embed/wvuHzraps-s?si=ea1QOmU376on1t93",
        "https://youtube.com/embed/BUJM7mTUZ9A?si=2-Lz8UFgU3NQ3Zxd",
        "https://www.youtube.com/embed/QWAltHC7dUc?si=TiBlY7uqgCGOYj1-",
      ],
      categories: [
        "digital content production",
        "art direction",
        "graphic design",
        "photography",
        "ad campaign",
      ],
      description: [
        "Our collaboration brought their unique, edgy, and futuristic style to life through captivating social media reels and cutting-edge 3D graphic designs. With an emphasis on reinventing the traditional, we meticulously crafted visuals that speak to the brand’s commitment to pushing boundaries and setting new standards in the fragrance industry.",
      ],
    },
    {
      name: "lesinconnus",
      images: 5,
      title: "LES INCONNUS",
      links: [
        "https://www.youtube-nocookie.com/embed/gCHBaSsV1rE?si=Hamk73CTlOTpd-81",
      ],
      categories: ["photography", "digital content production", "lookbooks"],
      description: [
        "INCUIS collaborated with Les Inconnus to craft a visually captivating lookbook for their “Deep Haze” FW23 collection. This project emphasizes our expertise in creating lookbooks that not only align seamlessly with your brand’s identity but also serve as inspiring visual narratives.",
        "The “Deep Haze” collection immerses viewers in a realm of deep thought and unwavering belief, featuring mesmerizing prints, hypnotic colors, and crystalline sounds. This lookbook showcases our commitment to translating your brand’s story into a style that is uniquely yours.",
      ],
    },
    {
      name: "annabeljewellery",
      images: 18,
      title: "annabel jewellery",
      // links: [
      //   "https://www.youtube-nocookie.com/embed/gCHBaSsV1rE?si=Hamk73CTlOTpd-81",
      // ],
      categories: ["photography"],
      description: [
        "INCUIS collaborated with Les Inconnus to craft a visually captivating lookbook for their “Deep Haze” FW23 collection. This project emphasizes our expertise in creating lookbooks that not only align seamlessly with your brand’s identity but also serve as inspiring visual narratives.",
        "The “Deep Haze” collection immerses viewers in a realm of deep thought and unwavering belief, featuring mesmerizing prints, hypnotic colors, and crystalline sounds. This lookbook showcases our commitment to translating your brand’s story into a style that is uniquely yours.",
      ],
    },
  ]);

  //? At launch, all albums are displayed
  const currentAlbums = allAlbums.value;

  // * Return
  return { allAlbums, currentAlbums };
});
