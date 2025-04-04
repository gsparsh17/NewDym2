const services = [
  // Engineering Services
  {
    id: 1,
    title: "Engineering Consultation for businesses",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_dd6c911d0243418b95d8b9c7b62232a5~mv2.png/v1/fill/w_398,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ussiness_optimized.png",
    description: "Innovative Designs, Scalable Solutions & Reliable Results. Fields We Deal: Mechanical, Civil, Mechatronics, Electronics, IOT, AI & ML, Automation, Robotics, etc.",
    fees: "Starts From ₹1200/- ($50) Per Session"
  },
  {
    id: 2,
    title: "Industrial Engineering Design & Research Development",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_04f027ab893f4addbee78831b4c7e097~mv2.png/v1/fill/w_316,h_298,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Engineerng_Design_optimized.png",
    description: "Build products, concepts & ideas that break through. Industries We Deal: Healthcare, Transportation, Agriculture, Architectures, Home appliances, Defence, etc.",
    fees: "Starts from ₹5000/- ($100)"
  },
  {
    id: 3,
    title: "New Product Introduction (NPI)",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_f65275d8a7844671a8d2ace76835c1a5~mv2.png/v1/fill/w_398,h_296,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/New_Functions-rafiki_optimized.png",
    description: "When your concepts come alive - whether it's a digital device, wearable, machine, Home Appliances and an app for your IOTS or ASAAS.",
    fees: "Starts from ₹10000/- ($200)"
  },
  {
    id: 4,
    title: "Medical Equipment Design & Development",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_d4bcd3f612d7413d8968109186554e73~mv2.png",
    description: "From a standalone medical device to a sophisticated machine. We build prototypes of medical devices, complex machinery, ergonomic ICU beds, operating tables, carts, etc.",
    fees: "Design Starts from ₹30000/- ($500)"
  },
  {
    id: 5,
    title: "Transportation Design & Development",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_b22faeedd19d4d56b83e00c8dacbf759~mv2.png",
    description: "Automotive design, smart transportation systems. Work we do: Concept sketching, battery packaging, lightweight composites, HMI, dashboard layouts and modular components.",
    fees: "Design Starts from ₹50000/- ($1000)"
  },
  {
    id: 6,
    title: "Embedded System Design & Sensor Integration",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_cf5ce639407843349bd82e39666a7c3c~mv2.png",
    description: "From hardware design & Development to fully functional IOT device. We Develop: enclosure design, sensors integration in a device, PCB design, PLC design, machine user interface.",
    fees: "Starts from ₹5000/- ($100)"
  },
  {
    id: 7,
    title: "Modern Furniture Design & Development",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_45f0515b61814f2eb0790f0b5764e962~mv2.png",
    description: "Your old furniture design requires an update. We Design Modern Furniture Integrating New Technology, Such as Motors, Sensors, Displays, and Actuators, While Maintaining Aesthetics and Ergonomics.",
    fees: "Starts from ₹15000/- ($200)"
  },
  {
    id: 8,
    title: "2D & 3D CAD Modeling",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_8480407b83344508ab882677064ee967~mv2.png",
    description: "Design custom 2D CAD models to sophisticated 3D CAD assemblies. We Also Handle your distorted and corrupted CAD models, redesigning them for further production or cross-compatibility.",
    fees: "Starts from ₹1000/- ($15) Per file"
  },
  {
    id: 9,
    title: "CAD Simulation Analysis & Testing",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_d850a5c63bd64e4784ffbf054f515459~mv2.png",
    description: "Before sending your CAD files to production, you might be missing a crucial step that could save costs.",
    fees: "Simulation starts from ₹5000/- ($100)"
  },
  {
    id: 10,
    title: "Rapid Prototyping",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_4a73cd7d67004e909977e3346ceab9d4~mv2.png",
    description: "Fast, reliable and flawless prototypes. We manufacture prototypes including systems with enclosures, SoC, enclosure-only designs, appliances, IoT devices, and more.",
    fees: "Starts from ₹25000/- ($300) Per prototype"
  },
  {
    id: 11,
    title: "Technical Drawings & Transfer to Manufacturing",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_f3c17f6e741440e2ba4d082ccc803b71~mv2.png",
    description: "CAD technical files and documentation. We create technical drawings for your CAD models maintaining GD&T standards.",
    fees: "Starts from ₹4000/- ($50) per session"
  },
  {
    id: 12,
    title: "Hyper-Realistic 3D CAD Rendering",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_9a9c6b9956d245d2b244048681b4e84d~mv2.png",
    description: "With powerful RTX 4090 servers we render your CAD model scenes to perfection.",
    fees: "Starts from ₹500/- ($10) Per 10 renders"
  },
  {
    id: 13,
    title: "Product 3D Promo Video Creation",
    category: "Engineering",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_2b7f8d2e8d7243c0bc936aabab698b71~mv2.png",
    description: "You need an engaging 3D video for promotion through 3D animation & VFX.",
    fees: "Contact for pricing"
  },

  // Design Services
  {
    id: 14,
    title: "Brand Identity & Material Design",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_0d33905684ab467898589f355870def2~mv2.png/v1/fill/w_398,h_233,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Brand_identity_optimized.png",
    description: "Transforming visions into iconic brands. We offer brand strategy, brand kit design, brand e-store design, etc.",
    fees: "Starts from ₹50,000/- ($1000)"
  },
  {
    id: 15,
    title: "Responsive Web Design & Development",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_d1f4ce9ccc314563a0d80e64ed58e648~mv2.png/v1/fill/w_398,h_349,fp_0.18_0.59,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Low_code_development-rafiki_optimized.png",
    description: "Build Future-Proof Responsive & Interactive Websites. We Focus On Delivering A Fast, User-Friendly Experience Across Desktops, Tablets, And Smartphones.",
    fees: "Starts from ₹10,000/- ($200)"
  },
  {
    id: 16,
    title: "E-Commerce Store Design",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_cea3cf9acc3549fb81c14f02b5dfc0ac~mv2.png/v1/fill/w_598,h_548,fp_0.34_0.45,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ecommerce_web_page-rafiki_optimized.png",
    description: "Seamless Designs & Limitless Sales. We create stunning, user-friendly Stores That drive traffic, and deliver a seamless shopping experience.",
    fees: "Starts from ₹2,00,000/- ($7000)"
  },
  {
    id: 17,
    title: "iOS & Android App Design",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_056add6ce7f1438a8382c956f51d7b45~mv2.png/v1/fill/w_598,h_536,fp_0.74_0.32,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freepik__background__34079_optimized.png",
    description: "Intuitive Designs, Exceptional Experiences. We design cutting-edge iOS & Android apps, blending innovation with user-centric interfaces.",
    fees: "Starts from ₹60,000/- ($500)"
  },
  {
    id: 18,
    title: "UI & UX Design",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_daec05de54984a9fa7c297a14a62e99c~mv2.png/v1/fill/w_598,h_548,fp_0.34_0.45,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UX__UI_optimized.png",
    description: "Designing Experiences, Elevating Brands. Engaging UI/UX designs that enhance user satisfaction and drive business success.",
    fees: "Starts from ₹20,000/- ($300)"
  },
  {
    id: 19,
    title: "Packaging Material Design",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_777b3970493943c99de1cdf964333ee0~mv2.png/v1/fill/w_598,h_548,fp_0.34_0.45,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Packeging_optimized.png",
    description: "Smart, Sustainable, Striking Packaging. We create eye-catching, standout designs that drive sales and enhance your brand's visibility.",
    fees: "Starts from ₹10,000/- ($150)"
  },
  {
    id: 20,
    title: "Textile Design",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_ca3522610b034a1c9a226e9b47329571~mv2.png/v1/fill/w_598,h_548,fp_0.34_0.45,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/POD_Merch_optimized.png",
    description: "Weaving Creativity into Every Thread. We craft stylish, trend-forward designs that boost sales while enhancing your brand's appeal.",
    fees: "Starts from ₹30,000/- ($500)"
  },
  {
    id: 21,
    title: "2D & 3D Animation",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_f58daccfe4334b39bb4168ef245c7021~mv2.png/v1/fill/w_598,h_548,fp_0.34_0.45,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Animation_optimized.png",
    description: "Transforming Ideas into Dynamic Motion. We craft visually stunning animations that Inspire, Tell your brand story, and drive Meaningful Connections.",
    fees: "Starts from ₹10,000/- ($150)"
  },
  {
    id: 22,
    title: "CGI & VFX",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_4dc657b6f7b540f180e78e1fe9e02920~mv2.png/v1/fill/w_598,h_548,fp_0.34_0.45,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/VFX_optimized.png",
    description: "Where Imagination Meets Reality. We Offer hyper-realistic visual effects to stunning 3D renderings, we turn your ideas into cinematic experiences.",
    fees: "Starts from ₹10,000/- ($150)"
  },
  {
    id: 23,
    title: "Video Production",
    category: "Design",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_f88a1710679c467bbbd6a6e5ef2745a1~mv2.png/v1/fill/w_598,h_548,fp_0.34_0.45,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/12085849_209443421_optimized.pn",
    description: "Bringing Vision to Life, Frame by Frame. From concept to final cut, we create high quality, engaging videos that leave a lasting impact.",
    fees: "Starts from ₹3,000/- ($50)"
  },

  // Architecture Services
  {
    id: 24,
    title: "Home & Building Automation",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_3ffb4520ba894a1eab3e155f25223c40~mv2.png/v1/crop/x_21,y_0,w_1509,h_1453/fill/w_267,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Smart_home_optimized.png",
    description: "Intelligent Spaces, Effortless Control. Smart Lighting, Climate Control, Security Systems, Entertainment Systems, Appliance Management.",
    fees: "Starts from ₹3000/- ($50)"
  },
  {
    id: 25,
    title: "House & Building Planning",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_3cbbd0640700419ebe33a300036558f1~mv2.png/v1/fill/w_235,h_222,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/home_planning_optimized.png",
    description: "Designing Your Dream Space. Site Analysis, Budgeting, Design Development, Construction Scheduling, Quality Control.",
    fees: "Starts from ₹3000/- ($50)"
  },
  {
    id: 26,
    title: "Landscape Design",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_6b2b8eb1bb074ff68496d262ccaf7cf4~mv2.png/v1/fill/w_294,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Landscape_optimized.png",
    description: "Transforming Nature into Art. Site Analysis, Design Development, Plant Selection, Hardscape Design, Sustainability Considerations.",
    fees: "Starts from ₹3000/- ($50)"
  },
  {
    id: 27,
    title: "Building Automation Modeling (BIM)",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_08ca13bbc6994a6da1709818bf4c8e3b~mv2.png/v1/fill/w_231,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Building_Automation_optimized.png",
    description: "Designing Automated Building Solutions. System Analysis, Model Development, Integration Planning, Simulation and Testing, Documentation.",
    fees: "Starts from ₹3000/- ($50)"
  },
  {
    id: 28,
    title: "Architectural 3D Rendering",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_97bca37026c74acfa3a12779ec95a385~mv2.png/v1/fill/w_276,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Artitectural_3d_optimized.png",
    description: "Immersive 3D Architectural Visuals. Model Creation, Texturing and Materials, Lighting Setup, Rendering, Post-Processing.",
    fees: "Starts from ₹3000/- ($50)"
  },
  {
    id: 29,
    title: "Automated Home Security Design",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_e6f5458a00424a2193a756a4da0c7cbe~mv2.png/v1/fill/w_294,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/home_security_optimized.png",
    description: "Intelligent Security, Peace of Mind. Intrusion Detection Systems, Surveillance Cameras, Smart Locks and Access Control, Environmental Monitoring, Mobile Integration.",
    fees: "Starts from ₹3000/- ($50)"
  },
  {
    id: 30,
    title: "Interior Design & Planning",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_45713068502144ca96396def1c7f660b~mv2.png/v1/fill/w_222,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Interior_Designing_optimized.png",
    description: "Creating Functional, Beautiful Spaces. Client Consultation, Space Planning, Budgeting and Scheduling, Project Management, Implementation and Styling.",
    fees: "Starts from ₹3000/- ($50)"
  },
  {
    id: 31,
    title: "Futuristic Custom House Interior",
    category: "Architecture",
    imageUrl: "https://static.wixstatic.com/media/a4aa79_a9c53bc7c67e47839c454a907b59af3d~mv2.png/v1/fill/w_534,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/custom_house_optimized.png",
    description: "Designing Tomorrow's Living Spaces. Smart Home Integration, Innovative Materials, Geometric and Abstract Designs, High-Tech Lighting Solutions, Sustainable Practices.",
    fees: "Starts from ₹3000/- ($50)"
  }
];

export default services;