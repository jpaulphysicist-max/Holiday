import { Holiday } from '@/types/holiday';

export const HOLIDAYS_DATA: Holiday[] = [
  {
    id: 'thanksgiving-usa',
    name: 'Thanksgiving Day',
    localName: 'Thanksgiving',
    country: 'United States',
    countryCode: 'US',
    flagEmoji: '🇺🇸',
    season: 'Autumn',
    dateDescription: 'Fourth Thursday of November',
    month: 11,
    heroImage: '/images/thanksgiving.jpg',
    briefExplanation:
      'Thanksgiving is the centerpiece of American autumnal hospitality, commemorating shared harvest blessings. Families gather around elaborately dressed tables for hours of cooking, roasting, storytelling, and gratitude.',
    culturalOrigins:
      'Traced to the 1621 harvest meal between the English pilgrims at Plymouth and the Wampanoag people, Thanksgiving was proclaimed a national holiday by Abraham Lincoln in 1863 to foster unity and peaceful reflection.',
    traditionalAtmosphere:
      'Aromas of roasted turkey, sage stuffing, buttered pumpkin pies, and mulled cider filling warm, fire-lit homes while football games play softly in the background.',
    keyTraditions: [
      'Slow-roasting whole herb-basted turkey with savory cornbread or chestnut stuffing',
      'The ceremonial carving of the bird at the head of the dinner table',
      'Baking spiced pumpkin, pecan, and sweet potato pies with fluted pastry crusts',
      'Setting harvest-themed tablescapes adorned with mini squash, brass candlesticks, and linen runners'
    ],
    tags: ['Culinary', 'Harvest', 'Family Feast', 'Autumn Essentials'],
    products: [
      {
        id: 'staub-roaster-thanksgiving',
        name: 'Staub Enameled Cast Iron Oval Roaster with Rack & Baster',
        category: 'Kitchen & Cookware',
        whyEssential:
          'Roasting a crisp-skinned, succulent 18-pound Thanksgiving turkey demands even radiant heat distribution. The heavy enameled cast iron preserves roasting juices for rich giblet gravy without scorching.',
        originalPriceUSD: 249.99,
        discountPriceUSD: 189.95,
        discountPercentage: 24,
        dealOfferText: 'Save $60.04 (24% Off) · Prime Free Delivery',
        rating: 4.8,
        reviewCount: 3820,
        amazonSearchQuery: 'Staub Cast Iron Oval Roaster Turkey Pan',
        amazonUrl: 'https://www.amazon.com/s?k=Staub+Cast+Iron+Oval+Roaster+Turkey+Pan&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'Heavyweight Enameled Cast Iron' },
          { label: 'Capacity', value: '6.75 Quarts / Accommodates up to 20 lb Turkey' },
          { label: 'Oven Safe', value: 'Up to 500°F (260°C)' },
          { label: 'Included Extras', value: 'Non-stick roasting rack & stainless steel bulb baster' },
          { label: 'Origin', value: 'Designed in France, Made for American Holiday Roasting' }
        ],
        keyHighlights: [
          'Superior heat retention creates deeply golden skin and tender breast meat',
          'Smooth enamel bottom works on induction, gas, and electric cooktops for gravy making',
          'Heavy-duty handles accommodate thick silicone oven mitts effortlessly'
        ],
        inStock: true,
        imageAlt: 'Cast iron oval roasting pan with turkey rack',
        fallbackIconType: 'cookware'
      },
      {
        id: 'emile-henry-pie-dish',
        name: 'Emile Henry Handcrafted Ceramic Fluted Pie Dish (9-Inch)',
        category: 'Kitchen & Cookware',
        whyEssential:
          'From spiced pumpkin custard to bourbon pecan filling, the traditional Thanksgiving dessert requires ceramic that cooks bottom pastry crusts evenly without soggy centers.',
        originalPriceUSD: 59.95,
        discountPriceUSD: 44.99,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Limited Holiday Deal · Clip $5 Coupon',
        rating: 4.9,
        reviewCount: 5120,
        amazonSearchQuery: 'Emile Henry French Ceramic Pie Dish 9 inch',
        amazonUrl: 'https://www.amazon.com/s?k=Emile+Henry+French+Ceramic+Pie+Dish+9+inch&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'High-Resistance HR Burgundy Ceramic Clay' },
          { label: 'Diameter', value: '9 inches (23 cm) / 2 inches deep' },
          { label: 'Glaze', value: 'Scratch-resistant lead-free glass enamel' },
          { label: 'Thermal Range', value: '-4°F to 520°F (Freezer to Oven safe)' },
          { label: 'Care', value: 'Dishwasher safe' }
        ],
        keyHighlights: [
          'Beautiful scalloped edge provides built-in crimping guide for flaky dough',
          'Diffuses heat gently to bake custard pies through without curdling',
          'Stunning tableside presentation straight from the oven'
        ],
        inStock: true,
        imageAlt: 'Burgundy ceramic fluted pie baking dish',
        fallbackIconType: 'cookware'
      },
      {
        id: 'wusthof-carving-set',
        name: 'Wüsthof Classic 2-Piece Hollow Edge Carving Knife & Fork Set',
        category: 'Tableware & Dining',
        whyEssential:
          'The ceremonial tableside turkey carving is the defining ritual of Thanksgiving. A razor-sharp hollow-edge slicer glides cleanly through skin and breast meat in pristine, uniform slices.',
        originalPriceUSD: 195.00,
        discountPriceUSD: 149.99,
        discountPercentage: 23,
        dealOfferText: 'Save $45.01 · Prime Eligible · Gift Boxed',
        rating: 4.9,
        reviewCount: 2240,
        amazonSearchQuery: 'Wusthof Classic 2-Piece Carving Knife Set',
        amazonUrl: 'https://www.amazon.com/s?k=Wusthof+Classic+2-Piece+Carving+Knife+Set&tag=festiveatlas-20',
        specifications: [
          { label: 'Blade Steel', value: 'High-Carbon German Stainless (X50CrMoV15)' },
          { label: 'Blade Length', value: '9-inch (23cm) slicer with hollow indentations' },
          { label: 'Fork Length', value: '6-inch straight carving fork' },
          { label: 'Handle', value: 'Triple-riveted POM ergonomic grip' },
          { label: 'Rockwell Hardness', value: '58 HRC precision edge' }
        ],
        keyHighlights: [
          'Hollow ground ovals prevent warm turkey meat from sticking to the steel',
          'Forged full-tang construction provides balanced leverage when cutting near bone joints',
          'Sturdy fork tines anchor roast steadily for clean cuts'
        ],
        inStock: true,
        imageAlt: 'Stainless steel carving knife and meat fork',
        fallbackIconType: 'tableware'
      },
      {
        id: 'brass-cornucopia-centerpiece',
        name: 'Handcrafted Antique Brass Harvest Cornucopia Tabletop Centerpiece',
        category: 'Home & Decor',
        whyEssential:
          'The horn of plenty represents harvest abundance. Adorning the dinner table with overflowing dried wheat, autumn nuts, and heirloom gourds is the signature visual tradition of the holiday.',
        originalPriceUSD: 85.00,
        discountPriceUSD: 62.50,
        discountPercentage: 26,
        dealOfferText: '26% Discount · Includes velvet protective pouch',
        rating: 4.7,
        reviewCount: 940,
        amazonSearchQuery: 'Brass Harvest Cornucopia Centerpiece Thanksgiving',
        amazonUrl: 'https://www.amazon.com/s?k=Brass+Harvest+Cornucopia+Centerpiece+Thanksgiving&tag=festiveatlas-20',
        specifications: [
          { label: 'Finish', value: 'Antiqued Brushed Brass with warm lacquer coat' },
          { label: 'Dimensions', value: '14" L x 7.5" W x 6" H' },
          { label: 'Weight', value: '3.4 lbs weighted base' },
          { label: 'Base', value: 'Felted bottom to safeguard wood dining surfaces' }
        ],
        keyHighlights: [
          'Timeless heirloom silhouette that transitions seamlessly from Halloween through Thanksgiving',
          'Flared horn holds mini gourds, chestnuts, clementines, or floral sprigs securely'
        ],
        inStock: true,
        imageAlt: 'Brushed brass cornucopia horn centerpiece on dining table',
        fallbackIconType: 'decor'
      }
    ]
  },
  {
    id: 'oktoberfest-germany',
    name: 'Oktoberfest',
    localName: 'Die Wiesn',
    country: 'Germany',
    countryCode: 'DE',
    flagEmoji: '🇩🇪',
    season: 'Autumn',
    dateDescription: 'Mid-September through First Sunday of October',
    month: 9,
    heroImage: '/images/german_market.jpg',
    briefExplanation:
      'Oktoberfest is Bavaria’s globally celebrated folk festival (Volksfest) held in Munich. Millions gather in festive beer tents to honor folk music, roast chicken (Hendl), brass bands, and storied Bavarian brewing traditions.',
    culturalOrigins:
      'Began on October 12, 1810, as a royal wedding celebration for Crown Prince Ludwig of Bavaria and Princess Therese of Saxe-Hildburghausen, where the citizens of Munich were invited to celebrate on the fields (Theresienwiese).',
    traditionalAtmosphere:
      'Resounding oompah brass fanfares, clinking glass steins shouting "Ein Prosit der Gemütlichkeit!", roasted almonds, warm malt pretzels, and vibrant Dirndl and Lederhosen embroidery.',
    keyTraditions: [
      'Tapping the first keg with the ceremonial cry "O’zapft is!" by the Mayor of Munich',
      'Drinking authentic Märzen-style Festbier out of 1-liter heavy glass Maßkrüge',
      'Wearing authentic Bavarian trachten attire (Dirndl with aprons and Lederhosen with suspenders)',
      'Sharing giant Bavarian soft pretzels (Brezen) spread with creamy Obatzda cheese'
    ],
    tags: ['Bavarian', 'Beer Culture', 'Folk Festival', 'Culinary'],
    products: [
      {
        id: 'bavarian-dimpled-beer-stein-set',
        name: 'Authentic 1-Liter Heavy Dimpled Glass Maßkrug Beer Steins (Set of 2)',
        category: 'Tableware & Dining',
        whyEssential:
          'Drinking Festbier at Oktoberfest requires the heavy 1-liter glass Maßkrug. The iconic dimpled facets refract sunlight while the thick walls keep German lagers icy cold during hearty cheers.',
        originalPriceUSD: 44.99,
        discountPriceUSD: 32.99,
        discountPercentage: 27,
        dealOfferText: 'Save 27% · Prime Eligible · Heavy Duty Commercial Glass',
        rating: 4.9,
        reviewCount: 4620,
        amazonSearchQuery: 'Authentic Bavarian Dimpled Beer Stein 1 Liter Set',
        amazonUrl: 'https://www.amazon.com/s?k=Authentic+Bavarian+Dimpled+Beer+Stein+1+Liter+Set&tag=festiveatlas-20',
        specifications: [
          { label: 'Volume Capacity', value: '1.0 Liter (33.8 fl oz) with foam head space' },
          { label: 'Glass Thickness', value: '6mm reinforced restaurant-grade crystal glass' },
          { label: 'Height & Weight', value: '8.0" H, 2.8 lbs per stein for authoritative clinking' },
          { label: 'Dishwasher Safe', value: 'Yes, commercial glasswasher approved' }
        ],
        keyHighlights: [
          'Features official fill calibration line (Eichstrich) mandated in Munich festival tents',
          'Heavy ergonomic glass handle keeps hand warmth away from the chilled brew',
          'Sturdy weighted base prevents tipping during lively folk dancing'
        ],
        inStock: true,
        imageAlt: 'Two dimpled German 1 liter beer steins filled with golden lager',
        fallbackIconType: 'beverage'
      },
      {
        id: 'bavarian-pretzel-baking-kit',
        name: 'Cast Iron Bavarian Pretzel Baking Stone & Pretzel Salt Kit',
        category: 'Kitchen & Cookware',
        whyEssential:
          'Authentic Brezen require blistering bottom heat to achieve their mahogany crust and chewy interior. This pre-seasoned cordierite baking stone replicates German wood-fired hearth ovens at home.',
        originalPriceUSD: 52.00,
        discountPriceUSD: 39.95,
        discountPercentage: 23,
        dealOfferText: 'Save $12.05 · Includes Authentic German Coarse Salt & Lye Guide',
        rating: 4.8,
        reviewCount: 1830,
        amazonSearchQuery: 'Bavarian Soft Pretzel Baking Stone Kit',
        amazonUrl: 'https://www.amazon.com/s?k=Bavarian+Soft+Pretzel+Baking+Stone+Kit&tag=festiveatlas-20',
        specifications: [
          { label: 'Stone Material', value: 'Thermarite Cordierite Stone (thermal shock proof)' },
          { label: 'Dimensions', value: '16" x 14" rectangular stone (holds 6 large pretzels)' },
          { label: 'Included Salt', value: '8 oz authentic German Pretzel-Salz (non-melting grains)' },
          { label: 'Recipe Manual', value: 'Munich beer hall pretzel & Obatzda cheese guide' }
        ],
        keyHighlights: [
          'Micro-pores absorb surface moisture to yield the authentic blistered crunch',
          'Withstands oven temperatures up to 900°F without cracking'
        ],
        inStock: true,
        imageAlt: 'Baking stone with freshly baked Bavarian salted soft pretzels',
        fallbackIconType: 'cookware'
      },
      {
        id: 'bavarian-lederhosen-leather',
        name: 'Authentic Men’s Bavarian Wild Suede Leather Lederhosen with Suspenders',
        category: 'Traditional Attire',
        whyEssential:
          'Wearing real leather Trachten is the hallmark of Bavarian cultural pride. Genuine goat suede with relief embroidery softens with wear and is passed down as a festive heirloom.',
        originalPriceUSD: 189.00,
        discountPriceUSD: 139.00,
        discountPercentage: 26,
        dealOfferText: 'Special Festival Offer · 26% Price Drop',
        rating: 4.7,
        reviewCount: 1420,
        amazonSearchQuery: 'Bavarian Suede Leather Lederhosen with Suspenders Men',
        amazonUrl: 'https://www.amazon.com/s?k=Bavarian+Suede+Leather+Lederhosen+with+Suspenders+Men&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: '100% Genuine Goat Suede Leather' },
          { label: 'Embroidery', value: 'Traditional Bavarian oak leaf relief needlework' },
          { label: 'Hardware', value: 'Antiqued brass buckles and stag horn buttons' },
          { label: 'Adjustability', value: 'Laced rear gusset for custom waist fit' }
        ],
        keyHighlights: [
          'Includes detachable H-form leather suspenders with matching chest plate',
          'Deep knife pocket on right thigh for traditional folding pocket knife',
          'Supple suede breathes comfortably in warm indoor festival halls'
        ],
        inStock: true,
        imageAlt: 'Bavarian leather lederhosen with oak leaf embroidery and suspenders',
        fallbackIconType: 'attire'
      },
      {
        id: 'bavarian-table-decor-set',
        name: 'Bavarian Diamond Blue & White Cotton Table Runner & Bunting Set',
        category: 'Home & Decor',
        whyEssential:
          'The iconic blue and white diamond check (Rautenmuster) represents the Bavarian state flag. Draping banquet tables in these traditional colors instantly transforms any room into a Munich beer hall.',
        originalPriceUSD: 36.99,
        discountPriceUSD: 24.99,
        discountPercentage: 32,
        dealOfferText: 'Save 32% · Set of 2 Runners + 30ft Festive Pennant Bunting',
        rating: 4.7,
        reviewCount: 890,
        amazonSearchQuery: 'Bavarian Blue White Diamond Table Runner Oktoberfest',
        amazonUrl: 'https://www.amazon.com/s?k=Bavarian+Blue+White+Diamond+Table+Runner+Oktoberfest&tag=festiveatlas-20',
        specifications: [
          { label: 'Fabric', value: '100% Woven Cotton Canvas with water-resistant coating' },
          { label: 'Runner Size', value: '108" L x 14" W (Set of 2 included)' },
          { label: 'Bunting Length', value: '32 feet with 20 double-sided pennant flags' }
        ],
        keyHighlights: [
          'Stain-resistant weave cleans easily from spilled mustard and beer droplets',
          'Vivid Bavarian azure blue that will not bleed during cold machine washing'
        ],
        inStock: true,
        imageAlt: 'Bavarian blue and white checkered table runner on wooden trestle table',
        fallbackIconType: 'decor'
      }
    ]
  },
  {
    id: 'bastille-day-france',
    name: 'Bastille Day',
    localName: 'Le 14 Juillet (Fête Nationale)',
    country: 'France',
    countryCode: 'FR',
    flagEmoji: '🇫🇷',
    season: 'Summer',
    dateDescription: 'July 14th',
    month: 7,
    heroImage: '/images/french_patisserie.jpg',
    briefExplanation:
      'France’s National Day commemorates the storming of the Bastille in 1789 and the Fête de la Fédération in 1790. Across France, towns host communal outdoor feasts, firemen’s balls (Bals des Pompiers), and dazzling fireworks shows.',
    culturalOrigins:
      'Symbolizes the birth of the French Republic and constitutional liberty. The celebrations combine solemn military parades down the Champs-Élysées with vibrant outdoor dancing, chilled wine, and gourmet picnics in every public park.',
    traditionalAtmosphere:
      'Open-air accordion melodies along riverbanks, fireworks illuminating the Eiffel Tower, uncorked champagne flutes, crusty baguettes with camembert, and red-white-and-blue tricolor ribbons.',
    keyTraditions: [
      'Gathering at local fire stations for the legendary community "Bals des Pompiers" dance parties',
      'Elaborate picnics featuring chilled Rosé, saucisson, artisanal cheeses, and fresh cherries',
      'Watching the grand military parade and aerial aerobatics squadron (Patrouille de France)',
      'Evening fireworks spectacles over châteaux, rivers, and the Eiffel Tower'
    ],
    tags: ['French Heritage', 'Summer Picnic', 'Wine & Champagne', 'Outdoor Celebration'],
    products: [
      {
        id: 'laguiole-steak-knives-set',
        name: 'Authentic French Laguiole en Aubrac 6-Piece Olive Wood Steak Knife Set',
        category: 'Tableware & Dining',
        whyEssential:
          'Bastille Day outdoor grilling and bistro dining calls for the pride of French cutlery. Hand-forged in the Aubrac region, these knives slice tender magret de canard and steak frites with effortless precision.',
        originalPriceUSD: 280.00,
        discountPriceUSD: 219.00,
        discountPercentage: 22,
        dealOfferText: 'Save $61.00 · Authenticity Certificate & Wooden Storage Box',
        rating: 4.9,
        reviewCount: 1640,
        amazonSearchQuery: 'Laguiole en Aubrac French Steak Knives Olive Wood',
        amazonUrl: 'https://www.amazon.com/s?k=Laguiole+en+Aubrac+French+Steak+Knives+Olive+Wood&tag=festiveatlas-20',
        specifications: [
          { label: 'Blade Steel', value: 'Sandvik 12C27 high-performance Swedish stainless' },
          { label: 'Handle Material', value: 'Aged French Mediterranean olive wood' },
          { label: 'Insignia', value: 'Iconic hand-chiseled Laguiole bee and spring guilloché' },
          { label: 'Craftsmanship', value: '100% handcrafted by a single artisan in France' }
        ],
        keyHighlights: [
          'Smooth non-serrated razor edge slices meat without tearing delicate fibers',
          'Silky olive wood scales age gracefully with a warm golden patina'
        ],
        inStock: true,
        imageAlt: 'Six French Laguiole steak knives with olive wood handles in wooden box',
        fallbackIconType: 'tableware'
      },
      {
        id: 'vintage-french-champagne-cooler',
        name: 'Hammered Stainless Steel & Brass French Champagne Wine Urn Bucket',
        category: 'Tableware & Dining',
        whyEssential:
          'No 14 Juillet toast is complete without chilled French Champagne or Crémant. This double-walled hammered wine urn keeps bottles at optimal cellar temperature throughout long summer evening soirées.',
        originalPriceUSD: 78.00,
        discountPriceUSD: 54.90,
        discountPercentage: 30,
        dealOfferText: 'Save 30% · Prime Shipping · Holds 2 Magnums or 3 Standard Bottles',
        rating: 4.8,
        reviewCount: 1120,
        amazonSearchQuery: 'French Hammered Champagne Bucket Brass Handles',
        amazonUrl: 'https://www.amazon.com/s?k=French+Hammered+Champagne+Bucket+Brass+Handles&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: '18/10 Mirror-finished Hammered Stainless with Brass rings' },
          { label: 'Capacity', value: '7.5 Liters (Holds up to 3 champagne bottles with ice)' },
          { label: 'Insulation', value: 'Double-walled sweat-proof construction' },
          { label: 'Dimensions', value: '10.5" Diameter x 9.2" Height' }
        ],
        keyHighlights: [
          'Prevents outer condensation puddles from ruining vintage linen tablecloths',
          'Heavy cast brass lion head ring handles offer secure grip when carrying ice'
        ],
        inStock: true,
        imageAlt: 'Hammered metal champagne bucket with ice and bubbly bottle',
        fallbackIconType: 'beverage'
      },
      {
        id: 'french-tricolor-linen-tablecloth',
        name: 'Woven French Jacquard Tricolor Bistro Linen Tablecloth (60x108")',
        category: 'Home & Decor',
        whyEssential:
          'French national holidays center around the convivial banquet table. Woven in the tradition of Provençal and Lyonnais bistros, this pure flax linen tablecloth sets the stage for Bastille Day feasts.',
        originalPriceUSD: 69.95,
        discountPriceUSD: 49.95,
        discountPercentage: 29,
        dealOfferText: 'Save $20.00 (29% Off) · Pre-washed French Flax',
        rating: 4.7,
        reviewCount: 780,
        amazonSearchQuery: 'French Bistro Stripe Linen Tablecloth Blue White Red',
        amazonUrl: 'https://www.amazon.com/s?k=French+Bistro+Stripe+Linen+Tablecloth+Blue+White+Red&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: '100% Natural French Flax Linen' },
          { label: 'Dimensions', value: '60" x 108" (Seats 8-10 people)' },
          { label: 'Pattern', value: 'Subtle woven cobalt navy and vermilion selvedge stripes' },
          { label: 'Care', value: 'Machine washable, develops buttery softness with laundering' }
        ],
        keyHighlights: [
          'Breathable natural fibers drape with relaxed elegance for both terrace and dining room',
          'Resists pulling and static, perfect for outdoor summer entertaining'
        ],
        inStock: true,
        imageAlt: 'French linen tablecloth with navy and red stripes on summer patio',
        fallbackIconType: 'decor'
      },
      {
        id: 'guinguette-festive-string-lights',
        name: 'Vintage Outdoor Bistro Guinguette Warm Filament Globe String Lights',
        category: 'Home & Decor',
        whyEssential:
          'Guinguettes—the iconic open-air riverside dance halls of France—are defined by suspended glowing amber filament bulbs under which neighbors dance until dawn on Bastille Day.',
        originalPriceUSD: 48.00,
        discountPriceUSD: 34.99,
        discountPercentage: 27,
        dealOfferText: '27% Price Reduction · Weatherproof Shatterproof G40 Bulbs',
        rating: 4.8,
        reviewCount: 3890,
        amazonSearchQuery: 'Outdoor Bistro Guinguette Globe String Lights Warm White',
        amazonUrl: 'https://www.amazon.com/s?k=Outdoor+Bistro+Guinguette+Globe+String+Lights+Warm+White&tag=festiveatlas-20',
        specifications: [
          { label: 'Total Length', value: '50 Feet with 50 suspended Edison-style sockets' },
          { label: 'Bulb Technology', value: 'Shatterproof LED 2200K warm candlelight glow' },
          { label: 'Weather Rating', value: 'IP65 Commercial waterproof certification' },
          { label: 'Power Consumption', value: 'Ultra-low 1W per bulb' }
        ],
        keyHighlights: [
          'Recreates the dreamy, romantic glow of Parisian municipal summer dances',
          'Heavy rubber cord withstands heavy summer rainstorms and direct sunlight'
        ],
        inStock: true,
        imageAlt: 'Warm glowing globe fairy lights strung over a backyard patio',
        fallbackIconType: 'decor'
      }
    ]
  },
  {
    id: 'midsommar-sweden',
    name: 'Midsommar',
    localName: 'Midsommarafton',
    country: 'Sweden',
    countryCode: 'SE',
    flagEmoji: '🇸🇪',
    season: 'Summer',
    dateDescription: 'Friday between June 19 and June 25',
    month: 6,
    heroImage: '/images/midsommar.jpg',
    briefExplanation:
      'Midsummer’s Eve is Sweden’s most cherished holiday, celebrating the summer solstice when the sun barely sets. Swedes head to the countryside to raise maypoles (Midsommarstång), dance, and feast on pickled herring and strawberries.',
    culturalOrigins:
      'An ancient pagan celebration of fertility and the triumph of light over winter darkness, seamlessly woven into the Christian feast of St. John the Baptist, creating a joyful ode to Scandinavian nature.',
    traditionalAtmosphere:
      'Fragrant birch leaves, wild flower crowns woven from meadow blossoms, accordion folk tunes, ice-cold snaps glasses clinking, and endless golden twilight.',
    keyTraditions: [
      'Weaving traditional flower crowns (Blomsterkrans) using seven different meadow flowers',
      'Dancing the silly "Små grodorna" (The Little Frogs) dance around the leafy maypole',
      'Feasting on new potatoes with fresh dill, pickled herring (Sill), sour cream, and fresh strawberries',
      'Singing hearty drinking songs (Snapsvisor) before downing caraway-infused aquavit'
    ],
    tags: ['Scandinavian', 'Solstice', 'Flower Crowns', 'Midsummer Feast'],
    products: [
      {
        id: 'swedish-dala-horse-ornament',
        name: 'Handcrafted Authentic Swedish Grannas Olsson Carved Dala Horse (5-Inch)',
        category: 'Home & Decor',
        whyEssential:
          'Originating in the province of Dalarna, the carved red Dala horse (Dalahäst) is the definitive symbol of Swedish cultural identity and sits proudly in the center of Midsummer banquet tables.',
        originalPriceUSD: 72.00,
        discountPriceUSD: 54.00,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Authentically Hand-painted in Nusnäs, Sweden',
        rating: 4.9,
        reviewCount: 980,
        amazonSearchQuery: 'Original Swedish Dala Horse Hand Carved Nusnas',
        amazonUrl: 'https://www.amazon.com/s?k=Original+Swedish+Dala+Horse+Hand+Carved+Nusnas&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'Slow-grown Nordic pine wood' },
          { label: 'Height', value: '5 inches (13 cm)' },
          { label: 'Painting', value: 'Traditional Kurbits floral flourishes in oil paint' },
          { label: 'Origin', value: 'Direct from Dalarna, Sweden workshop' }
        ],
        keyHighlights: [
          'Every horse is hand-carved with subtle knife marks proving artisan origin',
          'Classic Falu red base color with intricate white, blue, and green saddle work'
        ],
        inStock: true,
        imageAlt: 'Traditional red Swedish wooden carved Dala horse on oak table',
        fallbackIconType: 'decor'
      },
      {
        id: 'scandinavian-aquavit-schnapps-glasses',
        name: 'Orrefors Intermezzo Nordic Crystal Fluted Snaps Glasses (Set of 4)',
        category: 'Tableware & Dining',
        whyEssential:
          'Midsummer toasts require chilled aquavit served in traditional Scandinavian snaps stems. The distinctive blue drop encased in crystal honors Swedish glassblowing mastery.',
        originalPriceUSD: 110.00,
        discountPriceUSD: 82.50,
        discountPercentage: 25,
        dealOfferText: 'Save $27.50 · Lead-Free Handcrafted Crystal · Gift Boxed',
        rating: 4.9,
        reviewCount: 840,
        amazonSearchQuery: 'Orrefors Crystal Snaps Glasses Set of 4 Swedish',
        amazonUrl: 'https://www.amazon.com/s?k=Orrefors+Crystal+Snaps+Glasses+Set+of+4+Swedish&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'Hand-blown Scandinavian lead-free crystal' },
          { label: 'Capacity', value: '2.0 oz (60 ml) traditional shot size' },
          { label: 'Accent', value: 'Signature blue jewel encased in the stem' },
          { label: 'Care', value: 'Hand wash recommended' }
        ],
        keyHighlights: [
          'High rim prevents snaps from splashing during enthusiastic table thumping',
          'Balanced stem keeps finger warmth away from ice-cold aquavit'
        ],
        inStock: true,
        imageAlt: 'Nordic crystal snaps glasses on wooden tray',
        fallbackIconType: 'beverage'
      },
      {
        id: 'midsummer-flower-crown-kit',
        name: 'Botanical Floral Crown Wreathing Kit with Paper Wire & Swedish Ribbons',
        category: 'Games & Festivities',
        whyEssential:
          'Weaving a wild flower crown (Blomsterkrans) is an essential Midsummer ritual for adults and children alike. Folklore says picking seven different flowers and sleeping with them reveals your true love.',
        originalPriceUSD: 28.00,
        discountPriceUSD: 19.99,
        discountPercentage: 29,
        dealOfferText: '29% Discount · Supplies for 6 Full Flower Crowns',
        rating: 4.7,
        reviewCount: 650,
        amazonSearchQuery: 'DIY Floral Crown Wire Kit with Silk Ribbons',
        amazonUrl: 'https://www.amazon.com/s?k=DIY+Floral+Crown+Wire+Kit+with+Silk+Ribbons&tag=festiveatlas-20',
        specifications: [
          { label: 'Included Materials', value: 'Bark-wrapped flexible floral wire (60 ft), green florist tape, brass wire cutters' },
          { label: 'Ribbons', value: '6 yards of pure satin pastel and meadow-blue trailing ribbons' },
          { label: 'Safety', value: 'Pliable coated aluminum wire gentle on children’s hair' }
        ],
        keyHighlights: [
          'Holds heavy blooms like daisies, cornflowers, and lupines securely without sagging',
          'Soft bark wrapping provides non-slip grip for stems'
        ],
        inStock: true,
        imageAlt: 'Midsummer wild flower crown with daisies and satin ribbons',
        fallbackIconType: 'decor'
      },
      {
        id: 'nordic-pickled-herring-dishes',
        name: 'Ceramic White & Cobalt Nordic Sill Serving Ramekin Trio with Oak Tray',
        category: 'Tableware & Dining',
        whyEssential:
          'No Midsummer smörgåsbord exists without at least three types of pickled herring: mustard, onion, and dill. This three-compartment ceramic set presents each variety cleanly alongside boiled potatoes.',
        originalPriceUSD: 49.00,
        discountPriceUSD: 36.75,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Solid Nordic Oak Serving Board Included',
        rating: 4.8,
        reviewCount: 520,
        amazonSearchQuery: 'Nordic Ceramic Condiment Server with Oak Tray',
        amazonUrl: 'https://www.amazon.com/s?k=Nordic+Ceramic+Condiment+Server+with+Oak+Tray&tag=festiveatlas-20',
        specifications: [
          { label: 'Bowl Material', value: 'High-fired glazed stoneware' },
          { label: 'Tray Material', value: 'FSC-Certified Solid Scandinavian White Oak' },
          { label: 'Includes', value: '3 stoneware serving bowls + 3 mini stainless steel serving forks' }
        ],
        keyHighlights: [
          'Glazed surface will not absorb vinegar brine or aromatic fish oils',
          'Recessed tray pockets keep bowls from sliding when passed around crowded tables'
        ],
        inStock: true,
        imageAlt: 'Three white ceramic bowls with herring and oak wood tray',
        fallbackIconType: 'tableware'
      }
    ]
  },
  {
    id: 'weihnachtsmarkt-germany',
    name: 'German Christmas Markets',
    localName: 'Weihnachtsmarkt & Christkindlmarkt',
    country: 'Germany',
    countryCode: 'DE',
    flagEmoji: '🇩🇪',
    season: 'Winter',
    dateDescription: 'Late November through December 24th',
    month: 12,
    heroImage: '/images/german_market.jpg',
    briefExplanation:
      'Germany’s historic Christmas markets date back to the Late Middle Ages in Nuremberg, Dresden, and Munich. Timber stalls draped in evergreen garlands welcome visitors with steaming Glühwein, roasted chestnuts, and handmade wooden toys.',
    culturalOrigins:
      'Originally one-day winter meat markets in the 1300s, these evolved into Advent fairs where local woodcarvers, bakers, and glassblowers sold festive treats and nativity scenes to eager townspeople.',
    traditionalAtmosphere:
      'Cinnamon and clove vapory aromas rising from copper kettles of spiced wine, snow falling on wooden shingle roofs, brass advent chorales, and children clutching warm gingerbread Lebkuchen.',
    keyTraditions: [
      'Sipping spiced mulled red wine (Glühwein) or rum punch (Feuerzangenbowle) in keepsake boot mugs',
      'Gifting ornate Nuremberg sugar-glazed Lebkuchen hearts with romantic frosted inscriptions',
      'Displaying intricate wooden Erzgebirge pyramid carousels driven by candle heat',
      'Slicing powdered Dresden Christstollen rich with rum-soaked sultanas and almond marzipan'
    ],
    tags: ['Christmas', 'Winter Markets', 'Mulled Wine', 'German Craftsmanship'],
    products: [
      {
        id: 'german-erzgebirge-candle-pyramid',
        name: 'Authentic German Erzgebirge Wooden Christmas Candle Carousel Pyramid',
        category: 'Home & Decor',
        whyEssential:
          'Hand-turned in the Ore Mountains (Erzgebirge) of Saxony, this wooden pyramid spins gracefully as rising heat from burning candles propels the top impeller fan, turning the nativity figures in a hypnotic dance.',
        originalPriceUSD: 165.00,
        discountPriceUSD: 124.95,
        discountPercentage: 24,
        dealOfferText: 'Save $40.05 · Handcrafted in Seiffen, Germany · Authentic Seal',
        rating: 4.9,
        reviewCount: 1490,
        amazonSearchQuery: 'Original German Erzgebirge Christmas Pyramid Nativity',
        amazonUrl: 'https://www.amazon.com/s?k=Original+German+Erzgebirge+Christmas+Pyramid+Nativity&tag=festiveatlas-20',
        specifications: [
          { label: 'Wood Origin', value: 'Sustainable German beech and spruce' },
          { label: 'Height', value: '11.5 inches (29 cm) multi-tier carousel' },
          { label: 'Candle Sockets', value: '4 brass candle cups with heat drip guards' },
          { label: 'Mechanism', value: 'Jeweled bearing axle for silent friction-free rotation' }
        ],
        keyHighlights: [
          'Natural unlacquered wood grain highlights master turning and scroll-saw artisanship',
          'Creates a warm, flickering shadow play across living room walls on dark winter nights'
        ],
        inStock: true,
        imageAlt: 'German wooden Christmas pyramid carousel with candle holders',
        fallbackIconType: 'decor'
      },
      {
        id: 'stainless-gluhwein-urn-and-mugs',
        name: 'Electric Stainless Steel Glühwein & Mulled Cider Urn with Keep-Warm Tap',
        category: 'Kitchen & Cookware',
        whyEssential:
          'Mulled wine must be kept at a steady simmer below 167°F (75°C) to prevent alcohol evaporation and maintain the delicate bouquet of orange peel, cinnamon bark, star anise, and cloves.',
        originalPriceUSD: 119.00,
        discountPriceUSD: 89.00,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Adjustable Thermostat Control · Non-Drip Dispenser',
        rating: 4.8,
        reviewCount: 2110,
        amazonSearchQuery: 'Electric Mulled Wine Urn Stainless Steel Beverage Dispenser',
        amazonUrl: 'https://www.amazon.com/s?k=Electric+Mulled+Wine+Urn+Stainless+Steel+Beverage+Dispenser&tag=festiveatlas-20',
        specifications: [
          { label: 'Capacity', value: '7.0 Liters (Up to 30 cups of Glühwein)' },
          { label: 'Power', value: '950W fast-heating element with automatic simmer cycle' },
          { label: 'Thermostat Range', value: '86°F to 212°F (30°C to 100°C precision dial)' },
          { label: 'Body', value: 'Brushed food-grade 304 stainless steel' }
        ],
        keyHighlights: [
          'Continuous-flow locking lever lets guests refill their holiday mugs seamlessly',
          'Cool-touch handles allow safe transport to outdoor holiday patio gatherings'
        ],
        inStock: true,
        imageAlt: 'Stainless steel electric beverage urn for mulled wine',
        fallbackIconType: 'cookware'
      },
      {
        id: 'nuremberg-lebkuchen-tin',
        name: 'Schmidt Nuremberg Elisen Lebkuchen Heritage Embossed Metal Gift Chest',
        category: 'Specialty Food & Treats',
        whyEssential:
          'Protected by EU Geographical Indication, true Nuremberg Elisen-Lebkuchen contain at least 25% almonds, hazelnuts, and walnuts with virtually no flour, glazed in dark chocolate and sugar on edible wafers.',
        originalPriceUSD: 58.00,
        discountPriceUSD: 44.95,
        discountPercentage: 22,
        dealOfferText: 'Save $13.05 · Imported Directly from Nuremberg, Germany',
        rating: 4.9,
        reviewCount: 2780,
        amazonSearchQuery: 'Schmidt Nuremberg Lebkuchen Gingerbread Chest Tin',
        amazonUrl: 'https://www.amazon.com/s?k=Schmidt+Nuremberg+Lebkuchen+Gingerbread+Chest+Tin&tag=festiveatlas-20',
        specifications: [
          { label: 'Net Weight', value: '1.85 lbs (840g) assortments of glazed & chocolate cookies' },
          { label: 'Wafer Base', value: 'Traditional baking Oblaten base' },
          { label: 'Container', value: 'Collector’s embossed tin chest depicting historic Nuremberg castle' }
        ],
        keyHighlights: [
          'Incomparably moist and chewy texture rich in marzipan, orange peel, and Jamaican rum aroma',
          'Airtight embossed metal chest serves as a holiday cookie keepsake for decades'
        ],
        inStock: true,
        imageAlt: 'Embossed vintage tin chest filled with glazed German gingerbread cookies',
        fallbackIconType: 'treat'
      },
      {
        id: 'traditional-german-stollen-baking-pan',
        name: 'Cast Aluminum Non-Stick Dresden Stollen Baking Hood & Loaf Form',
        category: 'Kitchen & Cookware',
        whyEssential:
          'Traditional Christstollen represents the swaddled baby Jesus. Baking inside a hinged Stollen hood keeps the heavy dough from spreading flat, giving the loaf its signature domed fold.',
        originalPriceUSD: 42.00,
        discountPriceUSD: 31.50,
        discountPercentage: 25,
        dealOfferText: '25% Off Holiday Baker Deal · Premium Cast Aluminum',
        rating: 4.8,
        reviewCount: 920,
        amazonSearchQuery: 'Dresden Stollen Baking Pan Cover Non-Stick',
        amazonUrl: 'https://www.amazon.com/s?k=Dresden+Stollen+Baking+Pan+Cover+Non-Stick&tag=festiveatlas-20',
        specifications: [
          { label: 'Dimensions', value: '12" L x 6.5" W x 3" H' },
          { label: 'Coating', value: 'Reinforced ceramic non-stick release surface' },
          { label: 'Ventilation', value: 'Top steam release slits prevent dough blistering' }
        ],
        keyHighlights: [
          'Ensures the folded marzipan core remains centered without sinking to the bottom',
          'Heavy cast construction promotes deep even browning for the melted butter soak'
        ],
        inStock: true,
        imageAlt: 'Silver stollen baking hood pan with powdered sugar stollen cake',
        fallbackIconType: 'cookware'
      }
    ]
  },
  {
    id: 'la-befana-epiphany-italy',
    name: 'La Festa della Befana',
    localName: 'L’Epifania',
    country: 'Italy',
    countryCode: 'IT',
    flagEmoji: '🇮🇹',
    season: 'Winter',
    dateDescription: 'Night of January 5th into January 6th',
    month: 1,
    heroImage: '/images/hero.jpg',
    briefExplanation:
      'In Italian folklore, La Befana is a kindly, soot-covered old woman who flies on a broomstick on the eve of the Epiphany. She enters chimneys to fill children’s stockings with sweets if they have been good, or "carbone" (sweet edible black coal) if naughty.',
    culturalOrigins:
      'Rooted in Roman agrarian rituals of the Goddess of Rebirth and the Christian journey of the Magi to Bethlehem, who stopped at La Befana’s cottage asking for directions.',
    traditionalAtmosphere:
      'Crackling hearth fires, stockings hanging from stone mantels, midnight footsteps on tiled roofs, espresso steam mingling with sweet hazelnut torrone and spiced panforte.',
    keyTraditions: [
      'Hanging knit woolen stockings by the fireplace for La Befana to fill overnight',
      'Leaving a saucer of wine (Vino Rosso) and a plate of cured sausage or biscuits on the hearth',
      'Surprising children with sweet crunchy black sugar "carbone" candy tucked among chocolates',
      'Gathering for family Epiphany lunches featuring savory roasted lamb, cotechino, and lentils'
    ],
    tags: ['Italian Folklore', 'Epiphany', 'Sweet Treats', 'Hearth Tradition'],
    products: [
      {
        id: 'italian-knit-befana-stocking-set',
        name: 'Hand-Knit Italian Rustic Cable Wool Befana Stockings with Brass Bells (Set of 2)',
        category: 'Home & Decor',
        whyEssential:
          'Unlike American Christmas stockings, Italian Befana stockings are knit in rustic earth tones with ringing brass bells to signal the gentle arrival of the good witch through chimney soot.',
        originalPriceUSD: 39.99,
        discountPriceUSD: 29.99,
        discountPercentage: 25,
        dealOfferText: 'Save $10.00 (25% Off) · Heavy Cable Knit · Lined Interior',
        rating: 4.8,
        reviewCount: 880,
        amazonSearchQuery: 'Rustic Cable Knit Wool Holiday Stocking with Bells',
        amazonUrl: 'https://www.amazon.com/s?k=Rustic+Cable+Knit+Wool+Holiday+Stocking+with+Bells&tag=festiveatlas-20',
        specifications: [
          { label: 'Yarn', value: 'Heavyweight acrylic-wool blend with cable twist' },
          { label: 'Length', value: '20 inches deep with expandable 6-inch cuff' },
          { label: 'Lining', value: 'Internal cotton muslin prevents candy corners from snagging' },
          { label: 'Detail', value: 'Antiqued brass jingle bell and hanging leather loop' }
        ],
        keyHighlights: [
          'Generous stretch accommodates bulky Italian torrone bars, oranges, and chocolate figurines',
          'Heavy weave hangs gracefully without sagging under candy weight'
        ],
        inStock: true,
        imageAlt: 'Two knit wool stockings hanging with brass bells on a stone mantel',
        fallbackIconType: 'decor'
      },
      {
        id: 'bialetti-moka-express-italia',
        name: 'Bialetti Moka Express Italian Stovetop Espresso Maker (6-Cup) Tricolore',
        category: 'Kitchen & Cookware',
        whyEssential:
          'Italian holiday mornings start around the stove listening to the rich gurgle of the Bialetti Moka pot. Welcoming family for the Epiphany feast requires velvety, piping-hot Italian roast espresso.',
        originalPriceUSD: 54.95,
        discountPriceUSD: 41.20,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Official Italian Flag Tricolore Edition · Prime Eligible',
        rating: 4.8,
        reviewCount: 14200,
        amazonSearchQuery: 'Bialetti Moka Express Stovetop Espresso Maker 6 Cup',
        amazonUrl: 'https://www.amazon.com/s?k=Bialetti+Moka+Express+Stovetop+Espresso+Maker+6+Cup&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'Food-grade polished cast aluminum' },
          { label: 'Capacity', value: '6 espresso cups (9.2 fl oz / 270ml rich coffee)' },
          { label: 'Safety Valve', value: 'Patented Bialetti inspection valve' },
          { label: 'Origin', value: 'Engineered in Omegna, Italy' }
        ],
        keyHighlights: [
          'Eight-sided octagonal shape diffuses heat perfectly to extract fragrant coffee oils',
          'Ergonomic heat-resistant stay-cool handle ensures effortless pouring'
        ],
        inStock: true,
        imageAlt: 'Italian stovetop aluminum espresso pot with red, white, and green body',
        fallbackIconType: 'cookware'
      },
      {
        id: 'sweet-black-coal-candy-kit',
        name: 'Authentic Italian Sweet Black Sugar Coal ("Carbone Dolce") Gift Box',
        category: 'Specialty Food & Treats',
        whyEssential:
          'No Italian child’s Epiphany is complete without finding a piece of black sugar coal in their stocking. It is made of crisp spun sugar colored with vegetal carbon, tasting delightfully of sweet vanilla.',
        originalPriceUSD: 24.00,
        discountPriceUSD: 17.50,
        discountPercentage: 27,
        dealOfferText: 'Save 27% · 3-Pack Gift Pouch · Traditional Italian Vanilla Flavor',
        rating: 4.7,
        reviewCount: 640,
        amazonSearchQuery: 'Italian Sweet Coal Candy Carbone Dolce Epifania',
        amazonUrl: 'https://www.amazon.com/s?k=Italian+Sweet+Coal+Candy+Carbone+Dolce+Epifania&tag=festiveatlas-20',
        specifications: [
          { label: 'Weight', value: '14 oz (400g) total across 3 vintage burlap pouches' },
          { label: 'Ingredients', value: 'Cane sugar, egg albumen, natural vanilla, vegetable charcoal' },
          { label: 'Texture', value: 'Crunchy honeycomb melt-in-your-mouth sugar' }
        ],
        keyHighlights: [
          'Brings genuine Italian childhood wonder and laughter to the holiday hearth',
          'Packaged in rustic drawstring burlap sacks stamped with La Befana’s broom'
        ],
        inStock: true,
        imageAlt: 'Sweet black sugar edible coal candy in burlap sacks',
        fallbackIconType: 'treat'
      },
      {
        id: 'italian-torrone-nougat-board',
        name: 'Sperlari Italian Hard & Soft Hazelnut Torrone with Serrated Cutting Guillotine',
        category: 'Tableware & Dining',
        whyEssential:
          'Dense Italian honey-almond nougat (Torrone) is tough to cut with everyday cutlery. This specialized beechwood cradle and double-handled stainless rocker blade slices uniform bite-sized cubes effortlessly.',
        originalPriceUSD: 65.00,
        discountPriceUSD: 48.75,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Solid Beechwood Board + Rocker Knife Set',
        rating: 4.8,
        reviewCount: 490,
        amazonSearchQuery: 'Torrone Nougat Cutter Knife Wooden Board Set',
        amazonUrl: 'https://www.amazon.com/s?k=Torrone+Nougat+Cutter+Knife+Wooden+Board+Set&tag=festiveatlas-20',
        specifications: [
          { label: 'Board', value: 'Solid Italian Beechwood with non-skid rubber feet' },
          { label: 'Blade', value: 'Tempered 420 stainless steel double-bevel rocker knife' },
          { label: 'Dimensions', value: '12" L x 7" W with carved crumb groove' }
        ],
        keyHighlights: [
          'Slices cleanly through whole roasted hazelnuts and brittle caramel wafer layers',
          'Prevents dangerous slipping when serving sticky Mediterranean nougats'
        ],
        inStock: true,
        imageAlt: 'Italian nougat torrone bar on wooden board with stainless cutting rocker',
        fallbackIconType: 'tableware'
      }
    ]
  },
  {
    id: 'three-kings-day-spain',
    name: 'Three Kings Day',
    localName: 'El Día de los Reyes Magos',
    country: 'Spain',
    countryCode: 'ES',
    flagEmoji: '🇪🇸',
    season: 'Winter',
    dateDescription: 'January 5th & 6th',
    month: 1,
    heroImage: '/images/hero.jpg',
    briefExplanation:
      'In Spain, the Three Wise Men (Melchior, Gaspar, and Balthazar) bring holiday gifts to children. On the evening of January 5th, dazzling city parades (La Cabalgata de Reyes) fill the streets with music, candy showers, and majestic camels.',
    culturalOrigins:
      'Commemorates the biblical arrival of the Magi bearing gifts of gold, frankincense, and myrrh to the Christ child, celebrated across the Spanish-speaking world as the premier gift-giving holiday of the season.',
    traditionalAtmosphere:
      'Thousands of families lining broad avenues under twinkling street lamps catching thrown sweets, children polishing shoes left on balconies for the Kings, and the aroma of candied oranges on freshly baked Roscón de Reyes.',
    keyTraditions: [
      'Leaving polished shoes on windowsills filled with straw and carrots for the Kings’ camels',
      'Gathering for the majestic Cabalgata de Reyes parade with floats throwing thousands of candies',
      'Sharing the circular Roscón de Reyes brioche wreath filled with whipped cream, searching for the hidden ceramic king figurine and dry fava bean',
      'Unwrapping the main season gifts on the morning of January 6th'
    ],
    tags: ['Spanish Heritage', 'Epiphany', 'Royal Parade', 'Pastry Tradition'],
    products: [
      {
        id: 'roscon-de-reyes-baking-form',
        name: 'Heavy Ceramic Roscón de Reyes Bundt Crown Form with Porcelain Figurine Set',
        category: 'Kitchen & Cookware',
        whyEssential:
          'Baking an authentic Spanish Roscón demands a circular form that maintains the airy crown shape without collapsing, allowing you to hide the ceramic king (el rey) and the unlucky fava bean (el haba) inside the dough.',
        originalPriceUSD: 52.00,
        discountPriceUSD: 39.00,
        discountPercentage: 25,
        dealOfferText: 'Save $13.00 · Includes 2 Golden Paper Crowns & Porcelain Kings',
        rating: 4.8,
        reviewCount: 710,
        amazonSearchQuery: 'Roscon de Reyes Ceramic Baking Ring Pan Spain',
        amazonUrl: 'https://www.amazon.com/s?k=Roscon+de+Reyes+Ceramic+Baking+Ring+Pan+Spain&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'Glazed heat-conducting stoneware' },
          { label: 'Dimensions', value: '11" Outer Diameter x 3.5" Central Ring' },
          { label: 'Included Accessories', value: '2 food-grade ceramic hidden figurines + 2 adjustable gold foil paper crowns' }
        ],
        keyHighlights: [
          'Ensures the citrus blossom dough bakes with a golden, glossy egg-washed crust',
          'Deep well holds ample pastry cream, whipped chantilly, or truffle chocolate filling'
        ],
        inStock: true,
        imageAlt: 'Spanish Roscon de Reyes brioche cake with candied fruit on baking platter',
        fallbackIconType: 'cookware'
      },
      {
        id: 'traditional-spanish-turron-tray',
        name: 'Hand-Carved Olive Wood Spanish Turrón & Tapas Tasting Platter with Cheese Knife',
        category: 'Tableware & Dining',
        whyEssential:
          'Spanish families offer sliced Turrón de Jijona (soft almond paste) and Turrón de Alicante (hard brittle) to guests during the entire Twelve Days of Christmas. Solid olive wood showcases these rich confections beautifully.',
        originalPriceUSD: 49.99,
        discountPriceUSD: 37.49,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Solid Mediterranean Olive Wood Grain · Food Safe',
        rating: 4.8,
        reviewCount: 930,
        amazonSearchQuery: 'Olive Wood Tasting Platter Spanish Tapas Cheese',
        amazonUrl: 'https://www.amazon.com/s?k=Olive+Wood+Tasting+Platter+Spanish+Tapas+Cheese&tag=festiveatlas-20',
        specifications: [
          { label: 'Wood', value: '100% Spanish wild olive wood from pruned orchard branches' },
          { label: 'Dimensions', value: '14" x 8" organic freeform perimeter' },
          { label: 'Finish', value: 'Conditioned with natural food-grade beeswax and mineral oil' }
        ],
        keyHighlights: [
          'Natural anti-bacterial density resists knife gouges when dividing hard almond nougat',
          'Rich marbled grain makes each presentation board a one-of-a-kind art piece'
        ],
        inStock: true,
        imageAlt: 'Olive wood serving board with Spanish nougat slices and mini knife',
        fallbackIconType: 'tableware'
      },
      {
        id: 'spanish-hot-chocolate-churrera-set',
        name: 'Traditional Stainless Steel Churro Maker Press & Spanish Hot Chocolate Pitcher',
        category: 'Kitchen & Cookware',
        whyEssential:
          'After the chill of the evening Three Kings Parade, Spanish families dip hot, crispy churros into thick, spoon-coating Spanish chocolate a la taza. This heavy-gauge press extrudes authentic fluted ridges that catch sugar and cinnamon.',
        originalPriceUSD: 64.00,
        discountPriceUSD: 48.00,
        discountPercentage: 25,
        dealOfferText: 'Save $16.00 · Includes 8 Interchangeable Nozzles & Chocolate Frother',
        rating: 4.7,
        reviewCount: 1540,
        amazonSearchQuery: 'Churro Maker Machine Stainless Steel Churrera Set',
        amazonUrl: 'https://www.amazon.com/s?k=Churro+Maker+Machine+Stainless+Steel+Churrera+Set&tag=festiveatlas-20',
        specifications: [
          { label: 'Body', value: 'Food-grade 304 stainless steel piston barrel' },
          { label: 'Capacity', value: '1.2 lbs thick dough per extrusion load' },
          { label: 'Included Pitcher', value: '1-quart ceramic Spanish chocolate melting pitcher' }
        ],
        keyHighlights: [
          'Ergonomic ratcheted plunger requires minimal forearm pressure even with stiff dough',
          'Star nozzle creates crisp deep ridges that hold chocolate sauce with every dip'
        ],
        inStock: true,
        imageAlt: 'Stainless steel churro press next to ceramic cup of thick hot chocolate',
        fallbackIconType: 'cookware'
      },
      {
        id: 'gold-midnight-twelve-grapes-ramekins',
        name: 'Stemmed Crystal "Doce Uvas" Holiday Ramekin Flutes with Gold Rim (Set of 6)',
        category: 'Tableware & Dining',
        whyEssential:
          'On New Year’s Eve (Nochevieja) in Spain, tradition dictates eating twelve grapes of luck (Las doce uvas de la suerte)—one on each midnight chime of the clock tower. These elegant crystal vessels display each guest’s portion.',
        originalPriceUSD: 45.00,
        discountPriceUSD: 33.75,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Hand-Applied 24K Gold Rim · Shatter-Resistant Glass',
        rating: 4.9,
        reviewCount: 680,
        amazonSearchQuery: 'Crystal Stemmed Ramekin Dessert Bowls Gold Rim Set',
        amazonUrl: 'https://www.amazon.com/s?k=Crystal+Stemmed+Ramekin+Dessert+Bowls+Gold+Rim+Set&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'Lead-free blown crystal with electroplated 24K gold rim' },
          { label: 'Capacity', value: '4.5 oz (Comfortably holds 12 large green seedless grapes)' },
          { label: 'Set Count', value: '6 stemmed glasses' }
        ],
        keyHighlights: [
          'Elevates the Spanish midnight ritual with sparkling festive refinement',
          'Versatile design doubles as champagne sorbet or holiday prawn cocktail glasses'
        ],
        inStock: true,
        imageAlt: 'Six stemmed crystal bowls with gold rims holding twelve green grapes',
        fallbackIconType: 'tableware'
      }
    ]
  },
  {
    id: 'boxing-day-uk',
    name: 'Boxing Day & British Christmas',
    localName: 'Boxing Day',
    country: 'United Kingdom',
    countryCode: 'GB',
    flagEmoji: '🇬🇧',
    season: 'Winter',
    dateDescription: 'December 26th',
    month: 12,
    heroImage: '/images/hero.jpg',
    briefExplanation:
      'Celebrated across the United Kingdom, Boxing Day is a beloved public holiday following Christmas Day. Historically a day when servants and tradesmen received gift boxes from employers, it is today defined by family walks in the brisk winter countryside, football matches, and feasting on cold holiday ham and Christmas pudding.',
    culturalOrigins:
      'Dates back to the Victorian era and the church alms boxes opened on the feast of St. Stephen to distribute aid to the needy.',
    traditionalAtmosphere:
      'Crackling parlor fireplaces, pulled paper Christmas crackers exploding with party snaps, tissue paper crowns worn during dinner, hot tea, cold cuts, and rich brandy butter melting over steamed plum pudding.',
    keyTraditions: [
      'Pulling handmade British Christmas crackers around the table, reading silly riddles, and donning paper crowns',
      'Steaming and ceremonially flaming the dark Christmas pudding drenched in warm brandy',
      'Going on a brisk countryside "Boxing Day Walk" in Wellington boots followed by hot buttered crumpets',
      'Watching the Premier League Boxing Day football derby fixtures with pints of ale'
    ],
    tags: ['British Heritage', 'Victorian Tradition', 'Pudding & Crackers', 'Winter Warmth'],
    products: [
      {
        id: 'luxury-british-christmas-crackers',
        name: 'Robin Reed English Handcrafted Luxury Christmas Crackers (Set of 6)',
        category: 'Games & Festivities',
        whyEssential:
          'No British holiday dinner can proceed until two diners pull opposite ends of a Christmas cracker, triggering a sharp friction snap. Inside lies a tissue paper crown, an infamous corny joke, and a collectible keepsake.',
        originalPriceUSD: 54.00,
        discountPriceUSD: 39.95,
        discountPercentage: 26,
        dealOfferText: 'Save 26% · Hand-tied Satin Bows · Real Metal Keepsake Gifts Inside',
        rating: 4.8,
        reviewCount: 3120,
        amazonSearchQuery: 'Robin Reed English Luxury Christmas Crackers Snap Set',
        amazonUrl: 'https://www.amazon.com/s?k=Robin+Reed+English+Luxury+Christmas+Crackers+Snap+Set&tag=festiveatlas-20',
        specifications: [
          { label: 'Length', value: '12.5 inches per cracker' },
          { label: 'Paper Quality', value: 'Heavyweight foil-embossed English paper with ribbon bows' },
          { label: 'Contents', value: 'Each contains an explosive snap, colorful paper hat, English motto riddle, and premium steel gift (bottle opener, cuff links, measuring spoon, etc.)' }
        ],
        keyHighlights: [
          'Handmade following authentic 19th-century London confectioner Tom Smith methods',
          'Creates instant laughter and camaraderie across generations around the holiday table'
        ],
        inStock: true,
        imageAlt: 'Six ornate gold and red British Christmas crackers tied with satin bows',
        fallbackIconType: 'decor'
      },
      {
        id: 'mason-cash-cane-pudding-basin',
        name: 'Mason Cash Traditional Ceramic Embossed Christmas Pudding Basin (2-Quart)',
        category: 'Kitchen & Cookware',
        whyEssential:
          'Since 1800, English cooks have steamed their festive plum puddings in the iconic cane earthenware Mason Cash basin. The protruding rim holds parchment and string tightly during 6 hours of gentle water-bath boiling.',
        originalPriceUSD: 38.00,
        discountPriceUSD: 28.50,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Classic Cane Heritage Pattern · Oven & Microwave Safe',
        rating: 4.9,
        reviewCount: 4210,
        amazonSearchQuery: 'Mason Cash Cane Earthenware Pudding Basin Bowl',
        amazonUrl: 'https://www.amazon.com/s?k=Mason+Cash+Cane+Earthenware+Pudding+Basin+Bowl&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'Chip-resistant high-fired English earthenware' },
          { label: 'Capacity', value: '2.0 Quarts (Serves 8-10 generous holiday portions)' },
          { label: 'Base', value: 'Ventilated base ring allows steam bubbles to escape smoothly' }
        ],
        keyHighlights: [
          'Vented base prevents the bowl from rattling violently in the stockpot while boiling',
          'Heavy clay ensures the suet, raisins, molasses, and stout steam into a rich, dark cake'
        ],
        inStock: true,
        imageAlt: 'Traditional tan Mason Cash ceramic pudding basin bowl on kitchen counter',
        fallbackIconType: 'cookware'
      },
      {
        id: 'fortnum-mason-british-tea-caddy',
        name: 'British Royal Blend Loose Leaf Black Tea Caddy & Victorian Fine Mesh Strainer',
        category: 'Specialty Food & Treats',
        whyEssential:
          'Afternoon tea on Boxing Day with warm mince pies and fruitcake is a revered British ritual. A robust malty Ceylon and Assam blend brewed in a warmed ceramic pot warms guests after frosty countryside rambles.',
        originalPriceUSD: 46.00,
        discountPriceUSD: 34.50,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Decorative Eau de Nil Embossed Tin Caddy + Silver Strainer',
        rating: 4.8,
        reviewCount: 2310,
        amazonSearchQuery: 'English Royal Blend Loose Leaf Tea Tin Caddy',
        amazonUrl: 'https://www.amazon.com/s?k=English+Royal+Blend+Loose+Leaf+Tea+Tin+Caddy&tag=festiveatlas-20',
        specifications: [
          { label: 'Net Weight', value: '8.8 oz (250g) whole leaf blend' },
          { label: 'Tea Profile', value: 'Flowery Pekoe from Sri Lanka blended with malted Assam' },
          { label: 'Includes', value: 'Stainless steel resting drip bowl tea strainer' }
        ],
        keyHighlights: [
          'Malty honey undertones cut cleanly through rich Christmas pudding and clotted cream',
          'Hermetic inner plug lid keeps whole tea leaves fresh through the entire winter'
        ],
        inStock: true,
        imageAlt: 'Teal metal tea caddy tin next to fine silver tea strainer and porcelain cup',
        fallbackIconType: 'treat'
      },
      {
        id: 'tartan-wool-picnic-throw-blanket',
        name: 'Scottish Heritage 100% Pure Virgin Wool Tartan Knee Throw Blanket with Leather Strap',
        category: 'Home & Decor',
        whyEssential:
          'Whether watching Boxing Day village rugby matches or sitting on the hearthside chesterfield sofa, an authentic British wool tartan rug provides timeless warmth and heritage texture.',
        originalPriceUSD: 95.00,
        discountPriceUSD: 69.95,
        discountPercentage: 26,
        dealOfferText: 'Save $25.05 · Includes Genuine Saddle Leather Carry Harness',
        rating: 4.9,
        reviewCount: 1670,
        amazonSearchQuery: 'Pure Wool Tartan Blanket Leather Carry Strap British',
        amazonUrl: 'https://www.amazon.com/s?k=Pure+Wool+Tartan+Blanket+Leather+Carry+Strap+British&tag=festiveatlas-20',
        specifications: [
          { label: 'Fabric', value: '100% Pure New Wool (soft, naturally fire-retardant, moisture-wicking)' },
          { label: 'Dimensions', value: '59" x 72" with 3-inch rolled fringe edges' },
          { label: 'Weave', value: 'Royal Stewart / Black Watch heritage twill weave' }
        ],
        keyHighlights: [
          'High thermal density insulates against chilly drafts without feeling scratchy',
          'Saddle leather buckled harness allows you to roll and sling the blanket over your shoulder for country walks'
        ],
        inStock: true,
        imageAlt: 'Plaid tartan wool throw blanket rolled with leather carrying strap',
        fallbackIconType: 'decor'
      }
    ]
  },
  {
    id: 'st-patricks-day-ireland',
    name: 'St. Patrick’s Day',
    localName: 'Lá Fhéile Pádraig',
    country: 'Ireland',
    countryCode: 'IE',
    flagEmoji: '🇮🇪',
    season: 'Spring',
    dateDescription: 'March 17th',
    month: 3,
    heroImage: '/images/hero.jpg',
    briefExplanation:
      'Saint Patrick’s Day is the patron saint’s feast day of Ireland, celebrated with profound cultural pride across Dublin, Galway, Belfast, and Irish diasporas in New York, Boston, and Chicago. Cities transform into seas of green with street parades, fiddlers, step dancing, and communal pub singalongs.',
    culturalOrigins:
      'Commemorating St. Patrick, who brought Christianity to Ireland in the fifth century, using the three-leaf shamrock (seamróg) to explain the Holy Trinity to pagan high kings.',
    traditionalAtmosphere:
      'Lively Celtic tin whistles and bodhrán drums echoing down cobblestone streets, foaming pints of stout with creamy heads, hot bubbling pots of Irish stew, and sprigs of fresh green shamrocks pinned to wool lapels.',
    keyTraditions: [
      'Wearing the "wearing o’ the green" clothing and pinning real trefoil shamrocks to coats',
      'Baking crusty buttermilk Irish soda bread in cast iron with a cross sliced across the top to ward off evil',
      'Enjoying hearty boiled bacon and cabbage or slow-simmered beef & Guinness stew with parsnips',
      'Listening to live traditional Irish music sessions (seisiúns) in historic pubs'
    ],
    tags: ['Irish Pride', 'Celtic Music', 'Stout & Whiskey', 'Spring Celebration'],
    products: [
      {
        id: 'lodge-cast-iron-soda-bread-skillet',
        name: 'Lodge Cast Iron 10.25-Inch Deep Irish Soda Bread Skillet with Lid',
        category: 'Kitchen & Cookware',
        whyEssential:
          'Authentic Irish soda bread was traditionally baked over open turf fires inside a cast-iron bastible pot. The heavy lid traps steam during the initial bake, creating a crisp, crackling crust over the dense buttermilk crumb.',
        originalPriceUSD: 49.95,
        discountPriceUSD: 36.90,
        discountPercentage: 26,
        dealOfferText: 'Save 26% · Pre-Seasoned with 100% Natural Vegetable Oil · Made in USA',
        rating: 4.9,
        reviewCount: 8940,
        amazonSearchQuery: 'Lodge Deep Cast Iron Skillet with Iron Lid 10.25 inch',
        amazonUrl: 'https://www.amazon.com/s?k=Lodge+Deep+Cast+Iron+Skillet+with+Iron+Lid+10.25+inch&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'Pre-seasoned heavy cast iron' },
          { label: 'Capacity', value: '3.2 Quarts deep skillet with dual pour spouts' },
          { label: 'Lid', value: 'Self-basting raised interior condensation tips' }
        ],
        keyHighlights: [
          'Produces the unmistakable crunchy exterior while keeping the center tender and moist',
          'Heirloom construction will last for generations of family St. Patrick’s Day bakes'
        ],
        inStock: true,
        imageAlt: 'Round cast iron skillet holding a freshly baked loaf of crossed Irish soda bread',
        fallbackIconType: 'cookware'
      },
      {
        id: 'guinness-gravity-pint-glasses',
        name: 'Official Guinness Toucan & Harp Embossed Gravity Pint Glasses (Set of 4)',
        category: 'Tableware & Dining',
        whyEssential:
          'Pouring the famous two-part Guinness draft requires the sculpted tulip contour of the official gravity glass. The flared rim allows nitrogen micro-bubbles to surge smoothly, building the iconic dense creamy white head.',
        originalPriceUSD: 38.00,
        discountPriceUSD: 28.50,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Official Dublin St. James’s Gate Merchandise',
        rating: 4.8,
        reviewCount: 3950,
        amazonSearchQuery: 'Official Guinness Embossed Gravity Pint Glass Set of 4',
        amazonUrl: 'https://www.amazon.com/s?k=Official+Guinness+Embossed+Gravity+Pint+Glass+Set+of+4&tag=festiveatlas-20',
        specifications: [
          { label: 'Capacity', value: '20 Imperial Ounces (Full pint with head allowance)' },
          { label: 'Glasswork', value: 'Embossed gold harp logo and raised tactile contour grip' },
          { label: 'Durability', value: 'Thermal-tempered commercial bar glass' }
        ],
        keyHighlights: [
          'Engineered geometry promotes optimal cascade and creamy head formation',
          'Sturdy weighted base prevents sliding on wet pub countertops'
        ],
        inStock: true,
        imageAlt: 'Four Guinness gravity pint glasses filled with dark stout and creamy foam',
        fallbackIconType: 'beverage'
      },
      {
        id: 'aran-crafts-merino-wool-scarf',
        name: 'Aran Crafts 100% Pure Irish Merino Wool Cable Knit Shamrock Green Scarf',
        category: 'Traditional Attire',
        whyEssential:
          'Knit in County Kildare, Ireland, traditional Aran knit patterns date back centuries to Atlantic fishing communities. The intricate cable stitch symbolizes fisherman’s ropes and wishes of safety and fruitful harvest.',
        originalPriceUSD: 59.95,
        discountPriceUSD: 44.95,
        discountPercentage: 25,
        dealOfferText: 'Save $15.00 · Made in Ireland from 100% Pure Merino Wool',
        rating: 4.9,
        reviewCount: 1820,
        amazonSearchQuery: 'Aran Crafts Irish Merino Wool Cable Scarf Green',
        amazonUrl: 'https://www.amazon.com/s?k=Aran+Crafts+Irish+Merino+Wool+Cable+Scarf+Green&tag=festiveatlas-20',
        specifications: [
          { label: 'Yarn', value: '100% Ultra-soft Superfine Merino Wool' },
          { label: 'Dimensions', value: '68" Length x 9.5" Width' },
          { label: 'Color', value: 'Rich Meadow Emerald Green' },
          { label: 'Origin', value: 'Knit in County Kildare, Ireland' }
        ],
        keyHighlights: [
          'Merino wool provides superior lightweight warmth without the prickle of coarse yarns',
          'Rich emerald hue provides the perfect authentic touch for St. Patrick’s Day parades'
        ],
        inStock: true,
        imageAlt: 'Emerald green cable knit merino wool scarf rolled on wooden table',
        fallbackIconType: 'attire'
      },
      {
        id: 'belleek-porcelain-clover-mug',
        name: 'Belleek Handcrafted Parian China Irish Shamrock Basketweave Coffee Mug',
        category: 'Tableware & Dining',
        whyEssential:
          'Established in County Fermanagh in 1857, Belleek porcelain is renowned for its translucent ivory Parian china. Hand-painted with delicate green shamrocks, it is the classic vessel for Irish Coffee topped with floated cream.',
        originalPriceUSD: 48.00,
        discountPriceUSD: 36.00,
        discountPercentage: 25,
        dealOfferText: 'Save 25% · Hand-Painted in Fermanagh, Ireland · Collector Item',
        rating: 4.9,
        reviewCount: 760,
        amazonSearchQuery: 'Belleek Classic Shamrock Basketweave Mug Ireland',
        amazonUrl: 'https://www.amazon.com/s?k=Belleek+Classic+Shamrock+Basketweave+Mug+Ireland&tag=festiveatlas-20',
        specifications: [
          { label: 'Material', value: 'Translucent Parian China' },
          { label: 'Capacity', value: '12 fl oz (350 ml)' },
          { label: 'Decoration', value: 'Hand-painted shamrock sprigs with basketweave relief' }
        ],
        keyHighlights: [
          'Thin, delicate lip provides a sublime drinking experience for hot Irish whiskey cocktails',
          'Each piece bears the historic Belleek trademark backstamp certifying Irish craftsmanship'
        ],
        inStock: true,
        imageAlt: 'Delicate ivory porcelain coffee mug with green shamrock painting',
        fallbackIconType: 'tableware'
      }
    ]
  }
];

export const ALL_COUNTRIES: { name: string; code: string; flag: string }[] = [
  { name: 'All Regions', code: 'ALL', flag: '🌍' },
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'Ireland', code: 'IE', flag: '🇮🇪' },
  { name: 'Sweden', code: 'SE', flag: '🇸🇪' }
];

export const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' }
};
