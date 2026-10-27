/* ═══════════════════════════════════════════════════════════════════
   Q-ZONE PEST DATA — Kenyan Pest Species Catalogue
   Technical Naturalist content for the Pest Library system.
   Each entry drives both the index grid and the dynamic detail page.
═══════════════════════════════════════════════════════════════════ */

const pestData = [
  {
    id: 'cockroaches',
    name: 'Cockroaches',
    scientificName: 'Blattella germanica / Periplaneta americana',
    category: 'Crawling Insect',
    riskLevel: 'High',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Periplaneta%20americana%20%28American%20cockroach%29%2C%20Bidibidi%2C%20Uganda.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Periplaneta_americana_(American_cockroach),_Bidibidi,_Uganda.jpg',
    imageLicense: 'CC0 / Wikimedia Commons',
    characteristics:
      'Cockroaches are nocturnal, thigmotactic insects that favour warm, humid harbourages near food and water sources. The German cockroach (B. germanica) is the dominant indoor species in Kenyan urban environments, producing 4–8 oothecae per lifecycle with up to 48 nymphs per egg case. The larger American cockroach (P. americana) favours sewer lines, drains, and subfloor voids. Both species are prolific mechanical vectors of enteric pathogens.',
    symptoms: [
      'Faecal spotting — dark, pepper-like deposits along skirting boards, drawer runners, and behind appliances',
      'Musty, oily odour in enclosed kitchen units and utility areas indicating established colony harbourage',
      'Shed exoskeletons (exuviae) accumulating in concealed crevices, cabinet corners, and behind refrigerators',
      'Live sightings during daylight hours — a strong indicator of severe population pressure exceeding harbourage capacity',
    ],
    qzoneSolution:
      'Q-Zone deploys a targeted gel-bait and residual spray programme calibrated to the confirmed species. Our technicians conduct a full harbourage mapping audit, applying PCPB-registered micro-encapsulated formulations to confirmed activity zones — pipe runs, conduit penetrations, and cavity walls — while simultaneously addressing the environmental sanitation conditions (grease accumulation, standing water, unsealed waste) that sustain the colony. The programme operates on a structured monitoring cycle with documented re-inspection intervals, ensuring population suppression is verified by data, not assumption.',
  },
  {
    id: 'rats',
    name: 'Rats',
    scientificName: 'Rattus rattus / Rattus norvegicus',
    category: 'Rodent',
    riskLevel: 'Critical',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rattus%20norvegicus%2074%20Sunbury%20Street%20Geebung%20P1012741.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Rattus_norvegicus_74_Sunbury_Street_Geebung_P1012741.jpg',
    imageLicense: 'CC0 / Wikimedia Commons',
    characteristics:
      'The roof rat (R. rattus) and the brown/Norway rat (R. norvegicus) are the two dominant commensal rodent species in Kenya. Both are neophobic omnivores with powerful incisors that grow continuously, driving compulsive gnawing behaviour that damages electrical wiring, structural timber, and plumbing. A single breeding pair can produce over 200 offspring annually under favourable conditions. Rats are confirmed vectors of Leptospirosis, Salmonellosis, and Hantavirus.',
    symptoms: [
      'Droppings — capsule-shaped (R. norvegicus) or spindle-shaped (R. rattus), found along travel routes and near food sources',
      'Gnaw marks on cables, woodwork, and food packaging, often with fresh, light-coloured shavings beneath',
      'Grease smear marks (sebum trails) along walls, pipes, and beams indicating established, repeated travel routes',
      'Scratching or scurrying sounds in ceiling voids, wall cavities, or subfloor spaces, predominantly after dusk',
    ],
    qzoneSolution:
      'Q-Zone\'s rodent programme leads with structural exclusion — not chemical dependency. Our technicians conduct a full building envelope audit, systematically identifying and sealing every breach point (gaps ≥20mm for rats) using galvanised mesh, steel plates, and specialist proofing compounds. Only after physical denial is established do we deploy tamper-proof, lockable bait stations containing PCPB-registered second-generation anticoagulant blocks along confirmed activity runs. Every station is GPS-mapped and serviced on a structured schedule with consumption data recorded digitally via the Insectram platform.',
  },
  {
    id: 'mice',
    name: 'Mice',
    scientificName: 'Mus musculus',
    category: 'Rodent',
    riskLevel: 'High',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/House%20mouse%20%28Mus%20musculus%29%202732.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:House_mouse_(Mus_musculus)_2732.jpg',
    imageLicense: 'CC0 / Wikimedia Commons',
    characteristics:
      'The house mouse (M. musculus) is a highly adaptable commensal rodent capable of exploiting structural gaps as small as 6mm. Unlike rats, mice are neophilic — readily exploring new objects in their environment — and can survive on as little as 3g of food per day. A single female can produce 5–10 litters annually, each containing 5–6 pups, enabling explosive population growth within warm, food-secure domestic environments.',
    symptoms: [
      'Small, rod-shaped droppings (3–8mm) scattered along skirting boards, inside drawers, and behind appliances',
      'Shredded paper, fabric, or insulation material gathered for nesting, often in undisturbed storage areas',
      'Urine pillars — small mounds of grease, dirt, and urine that accumulate along habitual travel routes',
      'Nibble damage on food packaging, soap bars, and candle wax — characterised by fine, paired incisor marks',
    ],
    qzoneSolution:
      'Q-Zone applies the same exclusion-first methodology used for rats, but calibrated to the mouse\'s significantly smaller entry threshold (6mm). Our technicians inspect and proof all utility penetrations, air bricks, doorframe gaps, and pipe entries using stainless steel wool, caulking compounds, and brush strips. Snap traps and enclosed bait stations are deployed strategically based on droppings distribution mapping. The programme includes a structured follow-up schedule with documented population monitoring until complete elimination is confirmed.',
  },
  {
    id: 'house-flies',
    name: 'House Flies',
    scientificName: 'Musca domestica',
    category: 'Flying Insect',
    riskLevel: 'High',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Housefly%20Musca%20domestica.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Housefly_Musca_domestica.jpg',
    imageLicense: 'CC0 / Wikimedia Commons',
    characteristics:
      'Musca domestica is the most common mechanical disease vector in Kenyan domestic and commercial environments. Each fly regurgitates digestive fluid onto every surface it contacts, creating an immediate cross-contamination pathway. A single female can lay up to 500 eggs over her 15–25 day lifespan, typically in decomposing organic matter, animal waste, or unsecured refuse. Flies have been laboratory-confirmed as carriers of Typhoid, Cholera, Dysentery, and E. coli.',
    symptoms: [
      'Persistent adult fly activity concentrated near waste, food preparation surfaces, and drainage points',
      'Small, dark regurgitation and faecal spots on ceilings, light fittings, and window frames',
      'Maggot larvae visible in poorly sealed waste receptacles, floor drains, or decomposing organic material',
      'Cluster aggregation on external building surfaces near kitchen extraction vents or refuse areas',
    ],
    qzoneSolution:
      'Q-Zone\'s fly management programme integrates environmental source reduction with targeted mechanical and chemical controls. We conduct a full sanitation audit — assessing waste management, drainage efficiency, and food storage practices — before deploying UV insect light traps (ILTs) at calculated positions within the flight interception zone. External-facing entry points are assessed for air curtain or strip-curtain requirements. Residual surface treatments are applied only to confirmed resting surfaces using PCPB-approved formulations rated for food-proximate environments.',
  },
  {
    id: 'bed-bugs',
    name: 'Bed Bugs',
    scientificName: 'Cimex lectularius',
    category: 'Crawling Insect',
    riskLevel: 'Critical',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Adult%20bed%20bug%2C%20Cimex%20lectularius.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Adult_bed_bug,_Cimex_lectularius.jpg',
    imageLicense: 'Public domain / CDC via Wikimedia Commons',
    characteristics:
      'Cimex lectularius is an obligate blood-feeding ectoparasite with a cryptic, nocturnal biology. Adults are 5–7mm, dorsoventrally flattened, and capable of surviving up to 12 months without a blood meal under cool conditions. A single fertilised female can produce 200–500 eggs, depositing them in mattress seams, headboard joints, skirting boards, and electrical socket housings. Infestations spread primarily through passive transfer via luggage, second-hand furniture, and textile items.',
    symptoms: [
      'Linear bite patterns (commonly "breakfast, lunch, dinner" clusters) on exposed skin, especially arms and shoulders',
      'Small blood spots on bedlinen from crushed, recently-fed individuals',
      'Dark faecal spotting (digested blood) along mattress piping, headboard joints, and bed frame crevices',
      'Sweet, musty odour detectable in heavily infested rooms — produced by the insect\'s scent glands',
    ],
    qzoneSolution:
      'Q-Zone deploys a multi-visit specialist bed bug programme combining targeted residual insecticide application with physical intervention. All confirmed harbourage zones — mattress seams, bed frames, headboards, skirting boards, and socket plates — receive direct treatment using micro-encapsulated formulations with extended residual efficacy. Heat treatment or steam application is used in sensitive areas. The programme operates on a minimum 3-visit cycle (days 0, 14, and 28) to intercept all developmental stages as eggs hatch. Mattress encasements are recommended as a monitoring and containment measure.',
  },
  {
    id: 'mosquitoes',
    name: 'Mosquitoes',
    scientificName: 'Anopheles gambiae / Aedes aegypti',
    category: 'Flying Insect',
    riskLevel: 'Critical',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Anopheles%20gambiae%20Mosquitos.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Anopheles_gambiae_Mosquitos.jpg',
    imageLicense: 'Public domain / NIH via Wikimedia Commons',
    characteristics:
      'Kenya hosts both Anopheles gambiae (the primary malaria vector transmitting Plasmodium falciparum) and Aedes aegypti (the principal vector of Dengue, Chikungunya, and Zika virus). Both species breed in standing water — Anopheles in larger natural pools and Aedes in artificial containers as small as bottle caps. Female mosquitoes require blood meals for egg development and can transmit pathogens with every subsequent feeding.',
    symptoms: [
      'Persistent biting activity during dusk/dawn (Anopheles) or daytime (Aedes), particularly near ankles and lower legs',
      'Larvae visible in standing water sources: gutters, flower pot saucers, tyres, water tanks, and drainage sumps',
      'High adult mosquito density around exterior lighting, vegetation borders, and shaded rest areas',
      'Audible high-pitched whining sound in sleeping areas after dusk indicating active host-seeking behaviour',
    ],
    qzoneSolution:
      'Q-Zone\'s mosquito programme targets the breeding cycle at its source. Our technicians conduct a comprehensive larval source survey, identifying and eliminating all standing water breeding sites within and around the property boundary. Larvicidal treatments (Bti-based, WHO-approved) are applied to permanent water features and drainage infrastructure. Adult mosquito populations are suppressed through targeted residual barrier spraying of perimeter vegetation, external wall surfaces, and shaded rest zones using PCPB-registered formulations with proven efficacy against both Anopheles and Aedes species.',
  },
  {
    id: 'termites',
    name: 'Termites',
    scientificName: 'Macrotermes spp. / Coptotermes spp.',
    category: 'Wood-Destroying Insect',
    riskLevel: 'Critical',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Soldier%20and%20worker%20termites.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Soldier_and_worker_termites.jpg',
    imageLicense: 'Public domain / USDA via Wikimedia Commons',
    characteristics:
      'Termites are eusocial wood-destroying insects responsible for more structural damage to Kenyan properties than any other pest species. Macrotermes (mound-building termites) construct large external colonies and launch subterranean gallery attacks on structural timber from below the slab. Coptotermes (subterranean termites) are highly cryptic, travelling through concealed mud tubes that are often invisible until structural damage is catastrophic. A mature colony can exceed 1 million workers.',
    symptoms: [
      'Mud tubes (shelter tubes) running vertically along foundation walls, piers, and internal wall cavities',
      'Hollow-sounding timber when tapped — structural members may appear intact externally while being consumed internally',
      'Discarded wings (alates) near windowsills and light sources, indicating active colony swarming events',
      'Sagging floors, warped door frames, or ceiling distortion caused by progressive structural timber consumption',
    ],
    qzoneSolution:
      'Q-Zone\'s termite programme is a structural protection system combining deep-soil chemical barrier installation with localized colony source eradication. Our surveyors conduct a comprehensive above and below-ground structural assessment, mapping every at-risk zone into a formal Site Risk Register. A continuous termiticide barrier is installed in the soil around the full property perimeter and beneath the slab using PCPB-registered transfer-effect formulations that bond to soil particles for up to 8 years. Active colonies are targeted with non-repellent agents that worker termites carry back to the queen, achieving colony-level elimination.',
  },
  {
    id: 'ants',
    name: 'Ants',
    scientificName: 'Monomorium pharaonis / Camponotus spp.',
    category: 'Crawling Insect',
    riskLevel: 'Medium',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ants%20image.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Ants_image.jpg',
    imageLicense: 'CC0 / Wikimedia Commons',
    characteristics:
      'Kenya hosts multiple pest-significant ant species. The Pharaoh ant (M. pharaonis) is a major nuisance in domestic and clinical environments, forming polygynous colonies that "bud" when disturbed — making conventional spray treatments counterproductive. Carpenter ants (Camponotus spp.) excavate galleries in moisture-damaged timber, creating secondary structural voids. Safari ants (Dorylus spp.) are highly migratory and can overwhelm properties in localised swarm events.',
    symptoms: [
      'Visible foraging trails — persistent lines of worker ants following established pheromone routes to food sources',
      'Fine sawdust-like frass near timber structures, indicating carpenter ant gallery excavation activity',
      'Winged reproductive ants (alates) emerging from wall voids, electrical outlets, or window frames',
      'Food contamination — ants detected inside sealed packaging, sugar containers, and food preparation areas',
    ],
    qzoneSolution:
      'Q-Zone uses a species-specific approach to ant management. For Pharaoh ants, we deploy targeted gel-bait programmes using delayed-action insect growth regulators that workers carry back to the multi-queen colony — conventional spraying is strictly avoided as it triggers colony budding and worsens infestations. For carpenter ants, our technicians identify and address the moisture source driving the timber decay before treating confirmed gallery networks with injectable dust formulations. Perimeter barrier treatments prevent external re-invasion across all species.',
  },
  {
    id: 'fleas',
    name: 'Fleas',
    scientificName: 'Ctenocephalides felis / C. canis',
    category: 'Ectoparasite',
    riskLevel: 'High',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXxJOpXa9fs8kImXqlUedGIV87vqxDtDxJQ&s',
    characteristics:
      'The cat flea (C. felis) is responsible for over 95% of domestic flea infestations in Kenya, affecting both cats and dogs. Adult fleas are obligate blood-feeders capable of consuming 15× their body weight daily. A single female produces up to 50 eggs per day, which fall into carpet fibres, soft furnishings, and floor crevices. The pupal stage can remain dormant for months, triggered to emerge by vibration and CO₂ — explaining why vacant properties often produce explosive infestations upon re-occupancy.',
    symptoms: [
      'Intense itching and raised bite marks, typically concentrated around ankles, lower legs, and waistline',
      'Flea dirt (digested blood faeces) visible as dark specks in pet fur, bedding, and carpet fibres',
      'Pets scratching excessively, hair loss, or showing signs of flea allergy dermatitis',
      'Explosive flea activity after returning to a property that has been vacant — triggered by pupal emergence response',
    ],
    qzoneSolution:
      'Q-Zone\'s flea programme treats the entire domestic environment, not just the pet. Our technicians apply a residual insecticide with insect growth regulator (IGR) activity across all floor surfaces — carpets, rugs, hard floors, soft furnishings, and pet resting areas — to interrupt the egg-larva-pupa cycle at multiple developmental stages. A minimum 2-visit programme (days 0 and 14) is standard to intercept pupae emerging after the initial treatment. Pet-specific treatment guidance is provided in coordination with the owner\'s veterinarian. Post-treatment vacuuming protocols are issued to accelerate pupal emergence and chemical contact.',
  },
  {
    id: 'weevils',
    name: 'Weevils & Grain Beetles',
    scientificName: 'Sitophilus oryzae / Tribolium castaneum',
    category: 'Stored Product Insect',
    riskLevel: 'Medium',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sitophilus%20oryzae.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Sitophilus_oryzae.jpg',
    imageLicense: 'Public domain / Wikimedia Commons',
    characteristics:
      'The rice weevil (S. oryzae) and red flour beetle (T. castaneum) are the most economically significant stored product pests in Kenya. Female weevils bore into individual grain kernels to deposit eggs, with larvae developing invisibly inside the grain — making early detection extremely difficult. Flour beetles infest milled products, producing quinones that taint flour with a pungent, unpleasant odour. Both species can render entire domestic and commercial stockpiles commercially unfit.',
    symptoms: [
      'Small, round emergence holes in rice, maize, wheat, and other stored grains',
      'Fine powder or dust accumulating at the base of grain containers and flour bags',
      'Adult beetles or weevils (2–4mm) visible crawling on storage surfaces or inside product packaging',
      'Off-odour or discolouration of stored flour, indicating quinone contamination from beetle activity',
    ],
    qzoneSolution:
      'Q-Zone addresses stored product infestations through a combination of source elimination, environmental treatment, and — in severe cases — phosphine fumigation. Our technicians inspect and discard all infested material, then treat the storage environment (shelving, cupboard joints, floor-wall junctions) with residual insecticide to eliminate harboured life stages. For large-scale grain storage or commercial settings, precision-metered phosphine fumigation eliminates all developmental stages in a single treatment cycle. Post-treatment, we advise on airtight storage protocols and monitoring to prevent re-infestation.',
  },
  {
    id: 'silverfish',
    name: 'Silverfish',
    scientificName: 'Lepisma saccharina',
    category: 'Crawling Insect',
    riskLevel: 'Low',
    image: 'https://www.dalpest.co.uk/wp-content/uploads/AdobeStock_280272553.jpeg',
    characteristics:
      'Lepisma saccharina is a primitive, wingless insect with a distinctive silver, torpedo-shaped body. Silverfish are nocturnal, photophobic, and thrive in humid environments (75–95% RH). They feed exclusively on starch, cellulose, and polysaccharide materials — including book bindings, wallpaper adhesive, archival documents, photographs, natural-fibre textiles, and even drywall paper facing. Silverfish can survive for over a year without food and live for 3–5 years.',
    symptoms: [
      'Irregular feeding damage on paper, books, photographs, and wallpaper — appearing as surface scraping or holes',
      'Yellow staining on fabrics, especially starched cotton, linen, and silk garments in storage',
      'Tiny, pepper-like faecal pellets in bookshelves, storage boxes, and linen cupboards',
      'Live sightings when disturbing stacked paper, moving furniture, or opening long-undisturbed cupboards',
    ],
    qzoneSolution:
      'Q-Zone targets silverfish through a combination of environmental modification and residual chemical treatment. Our technicians assess and address the humidity conditions sustaining the population — recommending ventilation improvements, dehumidification, and sealing of damp ingress points. Residual dust formulations are applied to confirmed harbourage zones including skirting board cavities, bookshelf backs, linen cupboard joints, and subfloor voids. Monitoring is conducted on a quarterly basis given the silverfish\'s slow reproductive cycle and extended lifespan.',
  },
  {
    id: 'wasps',
    name: 'Wasps',
    scientificName: 'Polistes spp. / Vespula spp.',
    category: 'Stinging Insect',
    riskLevel: 'High',
    image: 'https://www.adamspetcare.com/-/media/project/oneweb/adams/images/photos/blog/article/wasps.jpg',
    characteristics:
      'Paper wasps (Polistes spp.) and yellowjackets (Vespula spp.) are the primary stinging insect threats in Kenyan residential environments. Paper wasps construct open-faced, umbrella-shaped nests under eaves, gutters, and pergola beams. Vespula species build enclosed, large-scale nests in wall cavities, roof voids, and subterranean burrows. Both species are aggressively territorial near their nest and can deliver multiple stings, posing a serious anaphylactic risk to sensitised individuals.',
    symptoms: [
      'Repeated wasp activity around a specific area of the roofline, eaves, or garden structure',
      'Visible paper nest structure — open-celled (Polistes) or enclosed grey-brown ball (Vespula)',
      'Wasps entering and exiting a specific gap in brickwork, fascia boards, or ground-level opening',
      'Aggressive defensive behaviour when approaching a particular area of the building or garden',
    ],
    qzoneSolution:
      'Q-Zone treats wasp nests using direct injection of PCPB-registered insecticidal dust or liquid into the nest cavity during low-activity periods (early morning or late evening). Our technicians wear full protective equipment and assess the nest location for safe treatment access before any intervention. Nests in wall cavities or roof voids are treated in-situ without physical removal to prevent structural damage. Entry points are sealed post-treatment to prevent re-colonisation. Clients with known venom allergies are advised to maintain safe distances during the treatment window.',
  },
  {
    id: 'moths',
    name: 'Moths',
    scientificName: 'Tineola bisselliella / Plodia interpunctella',
    category: 'Flying Insect',
    riskLevel: 'Medium',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplbgBGCxqcRH9eJ0KgzCzDZDkhmRyiin_8A&s',
    characteristics:
      'Two moth categories affect Kenyan properties: clothes moths (T. bisselliella) whose larvae feed on keratin-based textiles including wool, cashmere, silk, and feather-filled items; and Indian meal moths (P. interpunctella) whose larvae infest stored food products including cereals, nuts, dried fruits, and chocolate. Clothes moth adults are weak flyers that avoid light, while Indian meal moths are attracted to lights and are often the first visible sign of a pantry infestation.',
    symptoms: [
      'Irregular holes in woollen garments, cashmere, silk items, or natural-fibre carpets and rugs',
      'Silken tubes or webbing in wardrobes, drawer interiors, and along carpet edges (clothes moths)',
      'Webbing and larval frass (excrement) in stored food packaging, cereal containers, and dried goods',
      'Small, adult moths (8–12mm) fluttering near wardrobes (clothes moths) or kitchen areas (meal moths)',
    ],
    qzoneSolution:
      'Q-Zone deploys species-specific moth management. For clothes moths, we combine pheromone monitoring traps (to assess population levels and activity zones) with targeted residual treatments to wardrobe interiors, carpet edges, and underfloor voids. Infested garments are isolated for professional cleaning or freezing treatment. For Indian meal moths, the programme focuses on source elimination — discarding all infested products, treating storage environments, and installing pheromone traps for ongoing monitoring. Both programmes include client advisory on storage best practices and seasonal prevention.',
  },
  {
    id: 'bees',
    name: 'Bees',
    scientificName: 'Apis mellifera',
    category: 'Stinging Insect',
    riskLevel: 'Medium',
    image: 'https://activepestcontrol.com/wp-content/uploads/2018/11/honey-bee.jpg',
    characteristics:
      'The African honeybee (A. mellifera scutellata) is significantly more defensive than European subspecies and can mount sustained, colony-level stinging attacks of over 1,000 individuals when disturbed. Colonies establish in wall cavities, roof spaces, chimneys, water meter boxes, and hollow trees. Established colonies can contain 20,000–60,000 workers and produce substantial honeycomb that, if left in-situ after colony removal, attracts secondary pests (wax moths, ants, and rodents) and causes structural moisture damage.',
    symptoms: [
      'Heavy, sustained bee flight activity focused on a specific entry point in the building envelope',
      'Audible buzzing or humming within wall cavities, chimney breasts, or ceiling voids',
      'Honey staining or moisture marks on internal walls or ceilings above or adjacent to the nest site',
      'Swarm events — a dense, temporary cluster of bees on tree branches, fencing, or building exteriors',
    ],
    qzoneSolution:
      'Q-Zone prioritises live bee colony relocation wherever safely practicable, coordinating with registered apiarists for humane transfer. Where colony position or defensive behaviour makes live removal unsafe — particularly with Africanised colonies in occupied residential structures — our licensed technicians conduct controlled elimination using methods that prevent secondary pest infestations. Post-removal, all honeycomb material is physically extracted, the cavity is treated and cleaned, and entry points are permanently sealed to prevent re-colonisation by scout bees.',
  },
  {
    id: 'ticks',
    name: 'Ticks',
    scientificName: 'Rhipicephalus spp. / Amblyomma spp.',
    category: 'Ectoparasite',
    riskLevel: 'High',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Klopa_med_parjenjem-fotoBlazVerbic.jpg/250px-Klopa_med_parjenjem-fotoBlazVerbic.jpg',
    characteristics:
      'Ticks are obligate blood-feeding arachnids that parasitise both domestic animals and humans. In Kenya, the brown dog tick (Rhipicephalus sanguineus) is the dominant residential species, while Amblyomma species (bont ticks) are significant in rural and peri-urban environments. Ticks are confirmed vectors of tick-borne relapsing fever (Borrelia duttonii), Crimean-Congo haemorrhagic fever, and tick typhus. Female ticks can produce 2,000–5,000 eggs per reproductive cycle.',
    symptoms: [
      'Ticks found attached to pets — particularly around ears, between toes, and around the collar area',
      'Ticks found crawling on walls, skirting boards, or furniture adjacent to pet resting areas',
      'Blood-engorged ticks (grey-blue, swollen) detaching and dropping onto bedding, carpets, or floors',
      'Pets showing signs of tick-borne disease — lethargy, loss of appetite, fever, or pale gums',
    ],
    qzoneSolution:
      'Q-Zone treats the living environment, not just the pet. Our technicians apply targeted acaricidal residual treatments to all confirmed tick harbourage zones — pet sleeping areas, kennel structures, garden borders, perimeter walls, and adjacent vegetation. Crack-and-crevice treatments address the brown dog tick\'s preference for hiding in wall crevices and skirting board gaps. The programme includes pet treatment coordination guidance with the client\'s veterinarian and a structured follow-up visit to intercept the next generation of hatching larvae.',
  },
  {
    id: 'centipedes',
    name: 'Centipedes',
    scientificName: 'Scolopendra spp.',
    category: 'Predatory Arthropod',
    riskLevel: 'Medium',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRpZOapljHc1NTmMD6bsqPLrxGkzwLMguww&s',
    characteristics:
      'Scolopendra species are large, fast-moving predatory centipedes found throughout Kenya. Adults can reach 15–20cm in length and possess modified front legs (forcipules) capable of delivering a painful venomous bite. Centipedes are nocturnal, moisture-dependent, and prey on other insects, spiders, and small vertebrates. Their presence in domestic environments typically indicates a secondary prey pest population and underlying moisture or harbourage conditions.',
    symptoms: [
      'Live centipede sightings — typically in bathrooms, laundry areas, subfloor spaces, or after heavy rainfall',
      'Fast-moving, elongated arthropod found under stored items, in drain channels, or emerging from wall crevices',
      'Painful bite reaction — localised swelling, redness, and in some cases, nausea or headache',
      'Presence of prey species (cockroaches, spiders, silverfish) indicating the food web sustaining their population',
    ],
    qzoneSolution:
      'Q-Zone addresses centipede incursion by treating the underlying conditions that attract them. Our technicians conduct a moisture audit and harbourage assessment, sealing entry points (weep holes, cracked foundations, pipe penetrations) and recommending drainage or ventilation improvements to reduce humidity. Residual insecticide is applied to perimeter boundaries and known entry zones. Critically, the concurrent prey pest population (cockroaches, silverfish, spiders) is also treated to remove the food source sustaining centipede activity.',
  },
  {
    id: 'scorpions',
    name: 'Scorpions',
    scientificName: 'Parabuthus spp. / Pandinus spp.',
    category: 'Venomous Arachnid',
    riskLevel: 'High',
    image: 'https://pestworldcdn-dcf2a8gbggazaghf.z01.azurefd.net/media/562212/scorpion-homepage-callout.jpg',
    characteristics:
      'Kenya hosts both medically significant scorpion species (Parabuthus spp., capable of dangerous envenomation) and larger, less toxic species (Pandinus spp., the emperor scorpion). All scorpions are nocturnal predators that shelter in rock crevices, rubble, stacked timber, and structural gaps during the day. They fluoresce under ultraviolet light — an important diagnostic tool. Scorpion stings cause intense localised pain and, with Parabuthus species, can produce systemic symptoms including muscle spasms and difficulty breathing.',
    symptoms: [
      'Live scorpion sighting — typically found in shoes, clothing, bedding, or under objects left on the ground',
      'Defensive sting event — immediate sharp pain at the sting site, with potential systemic reaction',
      'UV-reactive fluorescing detected during nocturnal property survey using specialist blacklight equipment',
      'Property adjacent to rocky terrain, construction rubble, or uncleared vegetation harbouring scorpion habitat',
    ],
    qzoneSolution:
      'Q-Zone manages scorpion risk through environmental modification and perimeter barrier treatment. Our technicians conduct a nocturnal UV survey to identify active scorpion harbourage zones and travel routes. External perimeter treatments using residual micro-encapsulated formulations create a chemical barrier zone. Physical exclusion — sealing gaps beneath doors (door sweeps), weep holes, and external wall penetrations — is essential. Habitat modification includes recommending clearance of rubble, stacked timber, and dense vegetation within the immediate property boundary.',
  },
  {
    id: 'spiders',
    name: 'Spiders',
    scientificName: 'Loxosceles spp. / Latrodectus spp.',
    category: 'Arachnid',
    riskLevel: 'Medium',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfINOJ2VpXuV6XJ9P4IFaTDE8VDnlH1mds-w&s',
    characteristics:
      'While most Kenyan spiders are harmless and ecologically beneficial, two genera require management attention: the violin spider (Loxosceles spp.), whose necrotic venom causes localised tissue destruction, and the button spider (Latrodectus spp.), whose neurotoxic venom can produce systemic symptoms including severe muscle pain and autonomic dysfunction. Both are reclusive, non-aggressive species that bite defensively — typically when trapped against skin in clothing, bedding, or stored items.',
    symptoms: [
      'Extensive webbing in undisturbed areas — garages, storerooms, subfloor spaces, and garden sheds',
      'Bite reaction — single or paired puncture marks with localised pain, redness, and potential necrosis (Loxosceles)',
      'Egg sacs attached to shelving, stored boxes, or structural members in low-traffic areas',
      'Spider sightings in shoes, folded clothing, or bedding that has been undisturbed',
    ],
    qzoneSolution:
      'Q-Zone\'s spider management combines physical web clearance with targeted residual treatments. Our technicians physically remove all accessible webbing and egg sacs before applying residual surface spray to harbourage zones — skirting boards, window frames, external lighting surrounds, and structural corners. For properties in high-risk areas (rural, near open land), perimeter barrier spraying suppresses external spider migration. UV night surveys may be used to identify active violin spider populations in specific risk scenarios. As with centipedes, treating the underlying prey population reduces the food web sustaining spider density.',
  },
  {
    id: 'powder-post-beetles',
    name: 'Powder Post Beetles',
    scientificName: 'Lyctus brunneus',
    category: 'Wood-Destroying Insect',
    riskLevel: 'High',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZ7vMqFkUkt3fE7jHL1AINum1O78-g2VN1A&s',
    characteristics:
      'Lyctus brunneus (the brown powder post beetle) is a xylophagous insect whose larvae tunnel through the sapwood of hardwood timbers, feeding on starch-rich cells. Damage only becomes visible when adult beetles emerge through characteristic round exit holes (1–2mm), often accompanied by fine, talc-like frass. Severe infestations can reduce structural timber to a powder-filled shell — hence the common name. Powder post beetles are frequently introduced via infested imported timber, furniture, or flooring materials.',
    symptoms: [
      'Small, perfectly round exit holes (1–2mm diameter) in hardwood surfaces — timber flooring, furniture, door frames',
      'Fine, talc-like wood powder (frass) falling from timber surfaces or accumulating beneath infested items',
      'Structural weakness — timber members feeling soft, crumbling, or failing under load despite appearing intact externally',
      'Live adult beetles (3–6mm, elongated, brown) on windowsills or near timber structures, especially during warm months',
    ],
    qzoneSolution:
      'Q-Zone addresses powder post beetle infestations based on severity. For localised infestations, we apply residual borate-based timber treatments that penetrate the wood surface and eliminate larvae as they feed. For widespread or deep-seated infestations affecting structural timber, phosphine fumigation is the only method guaranteed to eliminate all life stages — eggs, larvae, pupae, and adults — within the timber in a single treatment cycle. Post-treatment, we apply preventive timber preservative to all accessible surfaces and advise on timber sourcing protocols to prevent re-introduction.',
  },
  {
    id: 'bats',
    name: 'Bats',
    scientificName: 'Eidolon helvum / Epomophorus spp.',
    category: 'Chiroptera',
    riskLevel: 'Medium',
    image: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/1645B/production/_108472219_bat-onbackground.jpg',
    characteristics:
      'Fruit bats (Eidolon helvum) and epauletted fruit bats (Epomophorus spp.) are the most common bat species roosting in Kenyan residential structures. Bats are ecologically protected in many jurisdictions and provide significant insect control and pollination services. However, roosting colonies produce substantial guano deposits that corrode building materials, harbour Histoplasma capsulatum fungal spores (causing histoplasmosis), and attract secondary pests including bat bugs (Cimex adjunctus), carpet beetles, and cockroaches.',
    symptoms: [
      'Dark, granular droppings accumulating beneath roof eaves, on windowsills, or on external wall surfaces',
      'Strong ammonia odour emanating from ceiling voids, eaves, or enclosed roof spaces where guano accumulates',
      'Bat activity at dusk — individuals emerging from specific entry points in fascia boards, ridge tiles, or wall gaps',
      'Secondary pest activity — bat bugs migrating into living spaces, carpet beetles feeding on guano debris',
    ],
    qzoneSolution:
      'Q-Zone manages bat roosts through humane exclusion methodology compliant with Kenyan wildlife regulations. Our technicians identify all active entry and exit points used by the colony, then install one-way exclusion devices that allow bats to leave at dusk but prevent re-entry. Entry points are permanently sealed only after the colony has fully vacated — typically over a 7–14 day exclusion period. All guano material is then professionally removed using respiratory protection, the affected area is disinfected and treated for secondary pests (bat bugs, beetles), and structural damage is assessed and documented.',
  },
  {
    id: 'nairobi-fly',
    name: 'Nairobi Fly (Rove Beetle)',
    scientificName: 'Paederus eximius',
    category: 'Toxic Arthropod',
    riskLevel: 'High',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Paederus-littoralis-05-fws.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Paederus-littoralis-05-fws.jpg',
    imageLicense: 'CC0 / representative Paederus photograph via Wikimedia Commons',
    characteristics:
      'Despite the common name, the Nairobi Fly is not a fly but a rove beetle. They do not bite or sting; however, their haemolymph contains pederin, a potent blistering agent. When crushed against human skin, this toxin causes Paederus dermatitis—severe blistering, burning, and lesions. They breed in damp, rotting vegetation and emerge in massive swarms during heavy rainy seasons (El Niño periods), strongly attracted to fluorescent and bright artificial lighting.',
    symptoms: [
      'Sudden swarm activity around outdoor security lights and indoor fluorescent bulbs during the rainy season',
      'Small (6-10mm), narrow beetles with distinctive alternating black and red/orange banding on the thorax and abdomen',
      'Linear blister rashes (dermatitis linearis) on exposed human skin from involuntary crushing during sleep',
    ],
    qzoneSolution:
      'Q-Zone tackles Paederus swarms through light-management and exclusion. We advise on replacing UV-rich white lighting with yellow/warm spectrum LED bulbs. Structural proofing (mesh screens on windows/vents) is enforced. During peak swarms, we apply targeted residual pyrethroid treatments to window frames, eaves, and external walls where the beetles rest before ingress. Environmental management includes clearing rotting vegetation and agricultural debris adjacent to the property perimeter.',
  },
  {
    id: 'jiggers',
    name: 'Jiggers (Chigoe Flea)',
    scientificName: 'Tunga penetrans',
    category: 'Parasitic Ectoparasite',
    riskLevel: 'Critical',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChK1JTHXO6PPGg6yHm0TzV26t8c1DYFnDmQ&s',
    characteristics:
      'The Chigoe flea, locally known as the jigger, is a parasitic arthropod that thrives in dry, dusty, sandy soils. The female flea burrows head-first into the epidermis of mammalian hosts (typically human feet/toes or livestock), where she swells to the size of a pea as eggs develop. This causes tungiasis, leading to severe inflammation, secondary bacterial infections, and potential loss of digits if untreated.',
    symptoms: [
      'White, pea-sized nodules with a dark central spot (the flea\'s respiratory/excretory opening) on feet or under toenails',
      'Intense itching transitioning to severe pain and difficulty walking',
      'High concentrations of dust and loose sandy soil inside or immediately surrounding the dwelling',
    ],
    qzoneSolution:
      'Q-Zone approaches Tunga penetrans through rigorous environmental sanitation and chemical suppression. We apply insect growth regulators (IGRs) and residual adulticides directly to bare earth floors, dusty verandas, and sandy perimeter soils to break the larval life cycle. We strongly advocate for environmental modification, advising clients to seal earthen floors with concrete or regular water-dampening, and coordinate with medical professionals for the clinical extraction of embedded fleas.',
  },
  {
    id: 'feral-pigeons',
    name: 'Feral Pigeons',
    scientificName: 'Columba livia domestica',
    category: 'Avian Pest',
    riskLevel: 'High',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2WyQ3HRbuZzA5WfDBpEy2qaKONg-N-UVww&s',
    characteristics:
      'Feral pigeons are a prolific urban avian pest across Kenyan cities. They exploit architectural features (balconies, HVAC units, roof parapets) for nesting. A single pigeon produces up to 12kg of guano annually. This excrement is highly acidic, corroding building facades and machinery, and serves as a growth medium for Histoplasma capsulatum and Cryptococcus neoformans. Pigeons also introduce secondary ectoparasites like bird mites.',
    symptoms: [
      'Heavy accumulation of white/grey acidic guano on walkways, balconies, and ledges',
      'Nesting debris (twigs, feathers, refuse) obstructing gutters and HVAC intakes',
      'Persistent cooing noises and physical congregation on high structural points',
      'Secondary infestations of bird mites migrating into the building interior',
    ],
    qzoneSolution:
      'Q-Zone employs non-lethal, architectural exclusion strategies. We install UV-stabilised polyethylene bird netting to seal off large nesting voids (balconies, courtyards) and affix marine-grade stainless steel anti-roosting spikes to exposed ledges and parapets. Optical gels and acoustic deterrents are utilized in sensitive commercial zones. Following exclusion, a full biocide sanitation protocol is executed to safely remove guano and eliminate fungal spore risks and ectoparasites.',
  },
  {
    id: 'indian-house-crow',
    name: 'Indian House Crow',
    scientificName: 'Corvus splendens',
    category: 'Avian Pest',
    riskLevel: 'High',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiKDLfGcJ4CbP5LTAaPEaWSKhn77GXTEaNw&s',
    characteristics:
      'An invasive species highly prevalent along the Kenyan coast (Mombasa/Malindi) and increasingly inland. Corvus splendens is an aggressive, highly intelligent scavenger that outcompetes native avifauna. They raid open waste receptacles, outdoor dining areas, and agricultural stores. They pose severe sanitation risks through faecal dropping contamination and are known to aggressively dive-bomb humans and pets during nesting season.',
    symptoms: [
      'Large flocks of aggressive, loud black-and-grey crows congregating around refuse sites or outdoor dining areas',
      'Scavenged waste spread across property perimeters',
      'Aggressive swooping behaviour toward staff, guests, or pets near nesting trees',
    ],
    qzoneSolution:
      'Q-Zone implements a multi-tiered avian management protocol tailored to Corvus splendens. We audit and secure all commercial waste management systems to remove the food source. We deploy advanced auditory deterrents (species-specific distress calls) and visual scare devices to disrupt roosting patterns. In critical hospitality environments, we apply humane, tactile repellent gels to targeted structural ledges to permanently deny roosting access.',
  },
  {
    id: 'snakes',
    name: 'Snakes & Reptiles',
    scientificName: 'Serpentes',
    category: 'Reptile',
    riskLevel: 'Critical',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYGpXYckI4RlnNP7PvYLpkTWf1a70-13-ow&s',
    characteristics:
      'Kenya\'s diverse ecosystem supports numerous snake species, some medically significant (Puff Adders, Cobras, Mambas). Snakes are typically transient pests in residential and commercial properties, entering not to infest, but seeking thermal regulation (shade/warmth) or tracking prey (rodents/frogs). Their presence poses an immediate life-safety risk to occupants and livestock.',
    symptoms: [
      'Direct sightings of live or dead snakes on the property, in outbuildings, or within roof voids',
      'Shed snake skins (sloughs) found in undisturbed areas like garages or woodpiles',
      'Unexplained sudden agitation or alarm calls from domestic pets, poultry, or wild birds',
    ],
    qzoneSolution:
      'Q-Zone’s snake management relies on habitat modification and prey elimination. Snakes cannot be effectively managed with broadcast chemicals. Our protocol involves a rigorous site audit to eliminate the rodent population (the primary attractant). We enforce structural proofing (sealing gaps under doors, weeping holes) and advise on clearing dense brush, woodpiles, and tall grass from the immediate perimeter. For acute sightings, we coordinate with KWS-approved herpetologists for safe, physical capture and relocation.',
  },
  {
    id: 'carpet-beetles',
    name: 'Carpet Beetles',
    scientificName: 'Anthrenus verbasci',
    category: 'Textile Pest',
    riskLevel: 'Medium',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gRdp0FMu0dy0_fyqYPFAmTSmzIjK8j8Rxw&s',
    characteristics:
      'The Varied Carpet Beetle is a destructive pest of natural fibres. While adults feed harmlessly on nectar outdoors, they fly indoors to lay eggs. The larvae (often called "woolly bears" due to their bristly appearance) are photophobic and feed voraciously on keratin-based animal products: wool, silk, fur, feathers, and leather. They frequently cause damage mistakenly attributed to clothes moths.',
    symptoms: [
      'Irregular holes and threadbare patches in woollen carpets, suits, and natural fibre upholstery',
      'Accumulation of shed larval skins (bristly husks) in dark areas like wardrobe corners or under heavy furniture',
      'Live, slow-moving bristly larvae (4-5mm) found along carpet edges or skirting boards',
      'Small, round adult beetles (resembling tiny mottled ladybirds) congregating near window panes seeking light',
    ],
    qzoneSolution:
      'Q-Zone treats carpet beetles through targeted residual applications. We focus micro-encapsulated sprays on the dark, undisturbed perimeters where larvae harbour—skirting boards, carpet edges, and the undersides of heavy furniture. Infested wardrobes are treated with specialized insecticidal dusts. We provide detailed client protocols for high-heat laundering or freezing of infested garments to ensure total eradication of eggs and larvae.',
  },
  {
    id: 'drain-flies',
    name: 'Drain Flies (Moth Flies)',
    scientificName: 'Psychodidae',
    category: 'Flying Insect',
    riskLevel: 'Low',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybGsMRXZj_sLHq-_XUkFOfv2pkEWJJ9OByw&s',
    characteristics:
      'Drain flies are small, furry-looking flies with large, fuzzy wings resembling tiny moths. They breed exclusively in the gelatinous organic sludge (biofilm) that accumulates inside plumbing pipes, floor drains, grease traps, and overflow pipes. While poor fliers, they emerge from drains in large numbers and pose a mechanical transmission risk for bacteria from sewage systems to clean surfaces.',
    symptoms: [
      'Small, fuzzy flies resting on walls adjacent to sinks, showers, and floor drains',
      'Flies exhibiting a short, erratic "hopping" flight pattern when disturbed',
      'Visible dark organic sludge/biofilm buildup visible just inside the drain covers',
    ],
    qzoneSolution:
      'Q-Zone recognizes that treating adult drain flies is futile without destroying the larval breeding site. Our protocol utilizes specialised biological/enzymatic foaming agents injected directly into the drainage system. This foam expands to consume the organic biofilm, removing the food and breeding substrate. We follow up with surface treatments for adult suppression and advise on plumbing maintenance to prevent stagnation.',
  },
  {
    id: 'fruit-flies',
    name: 'Fruit Flies',
    scientificName: 'Drosophila spp.',
    category: 'Flying Insect',
    riskLevel: 'Low',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Drosophila_melanogaster_Proboscis.jpg/250px-Drosophila_melanogaster_Proboscis.jpg',
    characteristics:
      'Fruit flies are highly fecund insects attracted to fermenting sugars. They are a constant nuisance in commercial kitchens, bars, and residential pantries. A female can lay up to 500 eggs near the surface of fermenting fruit, damp mops, empty beverage bottles, or unsealed garbage. Their entire life cycle from egg to adult can complete in just 8 days under Kenyan temperature conditions.',
    symptoms: [
      'Swarm of tiny (3mm) flies with distinctive red eyes hovering over fruit bowls, trash bins, or bar drains',
      'Rapid population explosions seemingly overnight',
      'Tiny larvae (maggots) found on the surface of overripe produce or inside unrinsed recycling bins',
    ],
    qzoneSolution:
      'Q-Zone implements a strict sanitation and trapping protocol. We deploy commercial-grade liquid attractant traps to rapidly deplete the adult population. Concurrently, our technicians conduct a micro-sanitation audit to locate the fermenting breeding source (often overlooked areas like cracked tiles, dirty mop heads, or residual syrup under bar counters). Residual sprays are not used; source elimination is the only effective long-term control.',
  },
  {
    id: 'blow-flies',
    name: 'Blow Flies & Bluebottles',
    scientificName: 'Calliphoridae',
    category: 'Flying Insect',
    riskLevel: 'High',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5i8giyqIuiZ0Aaf0SruYlBg2_-iAKUOJFxg&s',
    characteristics:
      'Blow flies (including metallic blue/greenbottles) are larger than house flies and are the first insects to arrive at decomposing animal matter. They possess acute chemoreceptors and can detect carrion from several kilometres away. In residential and commercial settings, their sudden appearance usually indicates a dead rodent in a wall void or severely mismanaged meat waste. They are major vectors of pathogenic bacteria.',
    symptoms: [
      'Loud, buzzing metallic green or blue flies bumping against windows seeking an exit',
      'Sudden emergence of large white maggots dropping from ceiling fixtures or migrating across floors',
      'A strong, putrid odour accompanying the sudden appearance of the flies',
    ],
    qzoneSolution:
      'Q-Zone treats blow fly incursions as a symptom of a larger biological issue. Our primary action is locating and extracting the breeding source—usually a decaying rodent carcass resulting from uncontrolled baiting. Once the carcass is removed and the area sanitised with antimicrobial agents, we deploy UV light traps and apply targeted space sprays to knock down the remaining adult population, preventing further cross-contamination.',
  },
  {
    id: 'booklice',
    name: 'Booklice (Psocids)',
    scientificName: 'Psocoptera',
    category: 'Crawling Insect',
    riskLevel: 'Low',
    image: 'https://agsci.colostate.edu/agbio/wp-content/uploads/sites/127/2023/11/Adult-booklice-1-jpg.webp',
    characteristics:
      'Booklice are tiny (1-2mm), pale, wingless insects. Despite the name, they are not true lice and do not bite humans or animals. They feed exclusively on microscopic moulds and fungi that grow on damp surfaces—including book bindings, wallpaper paste, damp cardboard, and stored grains. Their presence is a definitive biological indicator of excessive ambient humidity or a structural dampness issue.',
    symptoms: [
      'Tiny, pale specks moving rapidly across damp walls, old books, or inside kitchen cupboards',
      'Musty odours in the affected room indicating fungal/mould growth',
      'Aggregation in newly built houses where plaster and masonry are still drying out',
    ],
    qzoneSolution:
      'Q-Zone approaches Psocid management purely through environmental modification. Because they cannot survive in low humidity, the primary protocol involves mechanical dehumidification, repairing plumbing leaks, and improving structural ventilation. Chemical applications provide only temporary knockdown and are unnecessary once the moisture source driving the microscopic mould growth is eliminated.',
  },
  {
    id: 'millipedes',
    name: 'Millipedes',
    scientificName: 'Diplopoda',
    category: 'Arthropod',
    riskLevel: 'Low',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGwstX7SxZ80tWpa_0-8nEXDKepyyHPmX-Q&s',
    characteristics:
      'Millipedes are slow-moving, cylindrical detritivores that feed on decaying plant matter. They require high moisture to survive. During Kenya’s heavy rainy seasons, rising water tables flush them out of the soil, causing them to invade ground-floor apartments, basements, and commercial facilities in massive numbers. When threatened, they coil into a tight spiral and exude a foul-smelling secretion.',
    symptoms: [
      'Mass incursions of dark, multi-legged cylindrical arthropods across ground floors after heavy rain',
      'Coiled, dead millipedes accumulating near doorways, baseboards, and in sub-floor areas',
      'Brownish stains or foul odours on floors where they have been crushed',
    ],
    qzoneSolution:
      'Q-Zone prevents millipede incursion by establishing robust exterior perimeter barriers. We apply water-resistant micro-encapsulated pyrethroids to the foundation base, exterior walls, and entry thresholds. We advise clients to clear leaf litter, mulch, and decaying vegetation away from the immediate foundation line to remove their natural harbourage, ensuring the building envelope remains secure during seasonal rains.',
  },
  {
    id: 'earwigs',
    name: 'Earwigs',
    scientificName: 'Forficula auricularia',
    category: 'Crawling Insect',
    riskLevel: 'Low',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hxnUKh03D5_N1dyCuKbHKLj5tcTim0YfLQ&s',
    characteristics:
      'Readily identified by the prominent cerci (pincers) at the rear of their abdomen, earwigs are nocturnal omnivores that prefer dark, damp environments. While their pincers look intimidating, they are primarily for defence and mating, posing no serious threat to humans. They frequently invade homes through weeping holes and under doors seeking shelter during periods of extreme heat or heavy rain.',
    symptoms: [
      'Finding dark reddish-brown insects with pincers hiding under damp doormats, potted plants, or in bathrooms',
      'Chew damage to indoor ornamental plants or garden seedlings',
      'Sudden interior sightings following major weather fluctuations',
    ],
    qzoneSolution:
      'Q-Zone controls earwigs by addressing the exterior perimeter. Our technicians conduct a targeted spray of the building’s foundation, focusing on cracks, weeping holes, and window wells. Habitat reduction is prioritized: we recommend the removal of damp harborage (woodpiles, dense ground cover, wet mulch) abutting the exterior walls to naturally force the population away from the structure.',
  },
  {
    id: 'bird-mites',
    name: 'Bird Mites',
    scientificName: 'Ornithonyssus spp.',
    category: 'Parasitic Ectoparasite',
    riskLevel: 'High',
    image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/Mite-of-a-bird-Dermanyssus-gallinae-1296x728-slide1.jpg?w=1155',
    characteristics:
      'Bird mites are microscopic, semi-transparent arachnids that naturally parasitize pigeons, doves, and starlings. When a bird nest located on a building (in eaves, roof voids, or window AC units) is abandoned or the fledglings leave, tens of thousands of starving mites migrate indoors through vents and window frames searching for a new blood meal. While they cannot complete their life cycle on human blood, their bites cause intense irritation.',
    symptoms: [
      'Thousands of tiny "moving specks" appearing on walls, window sills, and beds',
      'Intense, unexplained itching and small red bite marks on the skin, often worse at night',
      'Presence of an abandoned bird nest on the balcony, roof, or within the ceiling void',
    ],
    qzoneSolution:
      'Q-Zone executes a highly synchronized protocol for bird mites. Source removal is critical: we physically extract the abandoned bird nest and treat the immediate cavity with insecticidal dust. Following nest removal, we apply residual acaricides to the migration paths (window frames, vents, wall perimeters) and implement structural proofing to prevent birds from returning to roost.',
  },
  {
    id: 'furniture-beetles',
    name: 'Common Furniture Beetle',
    scientificName: 'Anobium punctatum',
    category: 'Wood-Destroying Insect',
    riskLevel: 'High',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfONs89a3y-JvTNrqYbr91LJy-awtejINiQ&s',
    characteristics:
      'Often referred to colloquially as "woodworm," the Anobium punctatum larva is a severe threat to structural softwoods, floorboards, and antique furniture. The larvae bore intricate gallery networks deep within the timber for 3-4 years before pupating. Adult beetles emerge in the warmer months, creating characteristic 1.5-2mm flight holes. They prefer wood with a slightly elevated moisture content.',
    symptoms: [
      'Clean, round flight holes (approx 2mm) appearing in timber furniture, joists, and floorboards',
      'Small piles of bore-dust (frass) containing tiny, lemon-shaped pellets accumulating beneath the holes',
      'Live adult beetles (brown, 3-4mm long) found near windows between October and March',
    ],
    qzoneSolution:
      'Q-Zone conducts deep-penetrating fungicidal and insecticidal timber treatments. We inject specialized wood preservatives directly into the flight holes and apply surface coatings that penetrate the timber to eliminate developing larvae and prevent future egg-laying. In cases of severe structural or antique furniture infestation, we utilize precision-metered fumigation to guarantee complete eradication across all life stages without damaging the asset.',
  },
  {
    id: 'mole-crickets',
    name: 'Mole Crickets',
    scientificName: 'Gryllotalpidae',
    category: 'Agricultural/Turf Pest',
    riskLevel: 'Medium',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtySwOR9A9fhwA8-jMU1x0rDNt-T7tlRE5UA&s',
    characteristics:
      'Mole crickets are subterranean insects equipped with enlarged, spade-like front legs perfectly adapted for burrowing. They are a devastating pest for manicured lawns, golf courses, and commercial landscaping across Kenya. As they tunnel just beneath the soil surface, they sever grass roots and push up earth, destroying turf integrity. Males produce a loud, continuous churring song from their burrows at night.',
    symptoms: [
      'Extensive networks of raised, spongy soil trails across lawns and garden beds',
      'Dying, yellowing patches of grass that easily peel back due to severed root systems',
      'Loud, continuous trilling sounds emanating from the soil after dusk',
    ],
    qzoneSolution:
      'Q-Zone protects landscaping assets through sub-surface insecticide applications. We apply PCPB-approved granular baits and liquid soil-drenches, specifically timed with the seasonal emergence of early-instar nymphs (when they are most vulnerable). To ensure deep penetration into the root zone where the crickets harbour, treatments are immediately followed by prescribed irrigation protocols.',
  },
  {
    id: 'locusts',
    name: 'Desert Locusts',
    scientificName: 'Schistocerca gregaria',
    category: 'Agricultural/Swarm Pest',
    riskLevel: 'Critical',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Schistocerca%20gregaria%20-%20W%C3%BCstenheuschrecke.jpg?width=1200',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Schistocerca_gregaria_-_W%C3%BCstenheuschrecke.jpg',
    imageLicense: 'CC0 / Wikimedia Commons',
    characteristics:
      'The Desert Locust undergoes a phase polyphenism, shifting from solitary individuals to massive, highly mobile gregarious swarms. While primarily a threat to agriculture, swarms frequently impact commercial properties, airports, and residential estates, consuming all green vegetation in hours and causing severe mechanical disruption. A swarm covering one square kilometre can consume the same amount of food in one day as 35,000 people.',
    symptoms: [
      'Massive, dense clouds of large flying insects darkening the sky',
      'Rapid, total defoliation of trees, ornamental plants, and lawns within hours',
      'Heavy accumulation of frass (droppings) and crushed insect biomass on walkways and roofs',
    ],
    qzoneSolution:
      'Q-Zone responds to locust swarm events with rapid-deployment barrier treatments and knockdown protocols to protect high-value commercial landscaping and property perimeters. We utilize ultra-low volume (ULV) fogging and heavy residual canopy spraying using fast-acting pyrethroids to create a protective "dead zone" around critical assets, while coordinating with national agricultural authorities for broader environmental management.',
  },
];

export default pestData;
