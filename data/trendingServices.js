const trendingServices = [
  {
    id: 1,
    title: "Industrial Engineering Design & Research Development",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_04f027ab893f4addbee78831b4c7e097~mv2.png/v1/fill/w_316,h_298,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Engineerng_Design_optimized.png",
    fees: "₹5000/- ($100)",
    description: "Build products, concepts & ideas that break through. Industries We Deal: Healthcare, Transportation, Agriculture, Architectures, Home appliances, Defence, etc.",
    rating: "⭐ 4.9"
  },
  {
    id: 2,
    title: "iOS & Android App Design",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_056add6ce7f1438a8382c956f51d7b45~mv2.png/v1/fill/w_598,h_536,fp_0.74_0.32,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freepik__background__34079_optimized.png",
    fees: "₹60,000/- ($500)",
    description: "Intuitive Designs, Exceptional Experiences. We design cutting-edge iOS & Android apps, blending innovation with user-centric interfaces.",
    rating: "⭐ 4.8"
  },
  {
    id: 3,
    title: "Medical Equipment Design & Development",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_d4bcd3f612d7413d8968109186554e73~mv2.png",
    fees: "₹30000/- ($500)",
    description: "From standalone medical devices to sophisticated machines. We build prototypes of medical devices, complex machinery, ergonomic ICU beds, operating tables, carts, etc.",
    rating: "⭐ 5.0"
  },
  {
    id: 4,
    title: "E-Commerce Store Design",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_cea3cf9acc3549fb81c14f02b5dfc0ac~mv2.png/v1/fill/w_598,h_548,fp_0.34_0.45,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ecommerce_web_page-rafiki_optimized.png",
    fees: "₹2,00,000/- ($7000)",
    description: "Seamless Designs & Limitless Sales. We create stunning, user-friendly Stores That drive traffic, and deliver a seamless shopping experience.",
    rating: "⭐ 4.7"
  },
  {
    id: 5,
    title: "Brand Identity & Material Design",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_0d33905684ab467898589f355870def2~mv2.png/v1/fill/w_398,h_233,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Brand_identity_optimized.png",
    fees: "₹50,000/- ($1000)",
    description: "Transforming visions into iconic brands. We offer brand strategy, brand kit design, brand e-store design, etc.",
    rating: "⭐ 4.9"
  },
  {
    id: 6,
    title: "Hyper-Realistic 3D CAD Rendering",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_9a9c6b9956d245d2b244048681b4e84d~mv2.png",
    fees: "₹500/- ($10) Per 10 renders",
    description: "With powerful RTX 4090 servers we render your CAD model scenes to perfection.",
    rating: "⭐ 4.8"
  },
  {
    id: 7,
    title: "Transportation Design & Development",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_b22faeedd19d4d56b83e00c8dacbf759~mv2.png",
    fees: "₹50000/- ($1000)",
    description: "Automotive design, smart transportation systems. Work we do: Concept sketching, battery packaging, lightweight composites, HMI, dashboard layouts and modular components.",
    rating: "⭐ 4.9"
  },
  {
    id: 8,
    title: "Home & Building Automation",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_3ffb4520ba894a1eab3e155f25223c40~mv2.png/v1/crop/x_21,y_0,w_1509,h_1453/fill/w_267,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Smart_home_optimized.png",
    fees: "₹3000/- ($50)",
    description: "Intelligent Spaces, Effortless Control. Smart Lighting, Climate Control, Security Systems, Entertainment Systems, Appliance Management.",
    rating: "⭐ 4.7"
  },
  {
    id: 9,
    title: "Architectural 3D Rendering",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_97bca37026c74acfa3a12779ec95a385~mv2.png/v1/fill/w_276,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Artitectural_3d_optimized.png",
    fees: "₹3000/- ($50)",
    description: "Immersive 3D Architectural Visuals. Model Creation, Texturing and Materials, Lighting Setup, Rendering, Post-Processing.",
    rating: "⭐ 4.9"
  },
  {
    id: 10,
    title: "Landscape Design",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_6b2b8eb1bb074ff68496d262ccaf7cf4~mv2.png/v1/fill/w_294,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Landscape_optimized.png",
    fees: "₹3000/- ($50)",
    description: "Transforming Nature into Art. Site Analysis, Design Development, Plant Selection, Hardscape Design, Sustainability Considerations.",
    rating: "⭐ 4.8"
  },
  {
    id: 11,
    title: "Modern Furniture Design & Development",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_45f0515b61814f2eb0790f0b5764e962~mv2.png",
    fees: "₹15000/- ($200)",
    description: "Your old furniture design requires an update. We Design Modern Furniture Integrating New Technology, Such as Motors, Sensors, Displays, and Actuators, While Maintaining Aesthetics and Ergonomics.",
    rating: "⭐ 4.9"
  },
  {
    id: 12,
    title: "Responsive Web Design & Development",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_d1f4ce9ccc314563a0d80e64ed58e648~mv2.png/v1/fill/w_398,h_349,fp_0.18_0.59,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Low_code_development-rafiki_optimized.png",
    fees: "₹10,000/- ($200)",
    description: "Build Future-Proof Responsive & Interactive Websites. We Focus On Delivering A Fast, User-Friendly Experience Across Desktops, Tablets, And Smartphones.",
    rating: "⭐ 4.7"
  },
  {
    id: 13,
    title: "Embedded System Design & Sensor Integration",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_cf5ce639407843349bd82e39666a7c3c~mv2.png",
    fees: "₹5000/- ($100)",
    description: "From hardware design & Development to fully functional IOT device. We Develop: enclosure design, sensors integration in a device, PCB design, PLC design, machine user interface.",
    rating: "⭐ 4.8"
  },
  {
    id: 14,
    title: "Interior Design & Planning",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_45713068502144ca96396def1c7f660b~mv2.png/v1/fill/w_222,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Interior_Designing_optimized.png",
    fees: "₹3000/- ($50)",
    description: "Creating Functional, Beautiful Spaces. Client Consultation, Space Planning, Budgeting and Scheduling, Project Management, Implementation and Styling.",
    rating: "⭐ 4.9"
  },
  {
    id: 15,
    title: "2D & 3D Animation",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_f58daccfe4334b39bb4168ef245c7021~mv2.png/v1/fill/w_183,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Animation_optimized.png",
    fees: "₹10,000/- ($150)",
    description: "Transforming Ideas into Dynamic Motion. We craft visually stunning animations that Inspire, Tell your brand story, and drive Meaningful Connections.",
    rating: "⭐ 4.8"
  }
];

export default trendingServices;