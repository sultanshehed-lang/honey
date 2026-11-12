const image = (id) => import.meta.env.BASE_URL + 'images/' + id + '.webp';
const commonsPhoto = (hash, filename) => {
  const encodedFilename = encodeURIComponent(filename);
  return 'https://upload.wikimedia.org/wikipedia/commons/thumb/' + hash + '/' + encodedFilename + '/1280px-' + encodedFilename;
};

export const products = [
  {
    id: 'pulosah', name: 'Pulosah Honey', subtitle: 'A golden harvest, gathered with care',
    description: 'Full-bodied and warmly floral, with the luminous amber colour of a carefully gathered harvest.',
    details: 'Sultan Pulosah Honey arrives in a presentation as thoughtful as the jar itself. Its rich golden tone and rounded floral sweetness make a beautiful companion to breakfast, tea, or a considered gift.',
    origin: 'Khyber Pakhtunkhwa', category: 'Floral', tasting: 'Golden blossom · Gentle warmth · Clean finish',
    image: import.meta.env.BASE_URL + 'images/pulosah-honey.jpg', photo: true, badge: 'Small-batch selection',
    sizes: ['250ml', '500ml', '1L'],
  },
  {
    id: 'bera', name: 'Bera Honey', subtitle: 'Soft mountain-floral character',
    description: 'A smooth, amber honey with a gentle floral aroma and a warm, rounded finish.',
    details: 'Our Bera Honey is presented in a keepsake-worthy jar inspired by mountain gardens. Enjoy its mellow sweetness on warm bread, with yoghurt, or slowly stirred into tea.',
    origin: 'Khyber Pakhtunkhwa', category: 'Mountain', tasting: 'Soft blossom · Warm amber · Mellow finish',
    image: import.meta.env.BASE_URL + 'images/bera-honey.jpg', photo: true, badge: 'From the mountain garden',
    sizes: ['250ml', '500ml', '1L'],
  },
];

export const origins = [
  {
    id: 'kpk', name: 'Khyber Pakhtunkhwa', shortName: 'KPK', coordinates: [34.4967, 72.0109], region: 'Redawan · Ikram Pur · Biozo Kharki · Katlang · Mardan',
    headline: 'Our home, among orchard and mountain bloom.',
    story: 'Sultan Shehed begins in Redawan, Ikram Pur, Biozo Kharki, Katlang, Mardan. Khyber Pakhtunkhwa brings together orchard trees, foothills and high valleys; its varied flowering seasons give local honey a character all its own.',
    varieties: ['Pulosah Honey', 'Bera Honey'],
    productIds: ['pulosah', 'bera'],
    image: commonsPhoto('6/67', 'Bab-e-Khyber.jpg'),
    imageFallback: image('photo-1464822759023-fed622ff2c3b'),
    imageAlt: 'Bab-e-Khyber gateway at the entrance to the Khyber Pass near Peshawar',
    imageCredit: 'Muhammad Imran Saeed · CC BY 2.5',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Bab-e-Khyber.jpg',
    featured: true,
  },
  {
    id: 'punjab', name: 'Punjab', shortName: 'Punjab', coordinates: [31.1704, 72.7097], region: 'River plains and flowering orchards',
    headline: 'Open plains, orchard edges, changing bloom.',
    story: 'Broad river plains and cultivated landscapes create a varied forage calendar. The floral character of any honey here follows the bloom, local weather and careful harvest timing.',
    varieties: [], productIds: [],
    image: commonsPhoto('4/40', 'A_wheat_field_in_Punjab,_Pakistan.jpg'),
    imageFallback: image('photo-1470770841072-f978cf4d019e'),
    imageAlt: 'A wheat field in Punjab, Pakistan',
    imageCredit: 'AishaSaleemkhan100 · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:A_wheat_field_in_Punjab,_Pakistan.jpg',
  },
  {
    id: 'sindh', name: 'Sindh', shortName: 'Sindh', coordinates: [26.0, 68.0], region: 'Indus plain and dryland bloom',
    headline: 'A resilient landscape with a distinct season.',
    story: 'Along the Indus and across dryland country, flowering windows can be brief. Harvest character depends on the local plants in bloom and the conditions of each season.',
    varieties: [], productIds: [],
    image: commonsPhoto('d/d4', 'View_of_Makli_by_Usman_Ghani_(cropped).jpg'),
    imageFallback: image('photo-1509316785289-025f5b846b35'),
    imageAlt: 'A wide view of the Makli Necropolis in Sindh',
    imageCredit: 'Usman.pg · CC BY-SA 3.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:View_of_Makli_by_Usman_Ghani_(cropped).jpg',
  },
  {
    id: 'balochistan', name: 'Balochistan', shortName: 'Balochistan', coordinates: [28.5, 65.5], region: 'Highlands and wild country',
    headline: 'Wild country, shaped by sun and altitude.',
    story: 'Balochistan spans dry plains, uplands and mountain pockets. Its flowering plants make a distinctive seasonal forage for bees wherever healthy habitat is protected.',
    varieties: [], productIds: [],
    image: commonsPhoto('7/7a', 'Landscape_Balochistan.jpg'),
    imageFallback: image('photo-1500530855697-b586d89ba3ee'),
    imageAlt: 'An apple orchard beneath the mountains of Balochistan',
    imageCredit: 'Huzaefah Bin Shoaib · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Landscape_Balochistan.jpg',
  },
  {
    id: 'ict', name: 'Islamabad Capital Territory', shortName: 'Islamabad', coordinates: [33.7294, 73.0373], region: 'Potohar foothills',
    headline: 'The Potohar bloom, close to the capital.',
    story: 'The Potohar landscape around Islamabad brings together scrub, orchard and seasonal wildflowers. Its honey character is best understood one small harvest at a time.',
    varieties: [], productIds: [],
    image: commonsPhoto('a/a2', 'The_Faisal_Mosque_Islamabad.jpg'),
    imageFallback: image('photo-1500530855697-b586d89ba3ee'),
    imageAlt: 'Faisal Mosque framed by the Margalla Hills in Islamabad',
    imageCredit: 'UsmanHassan · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:The_Faisal_Mosque_Islamabad.jpg',
  },
  {
    id: 'gb', name: 'Gilgit-Baltistan', shortName: 'Gilgit-Baltistan', coordinates: [35.9208, 74.3087], region: 'High mountain valleys',
    headline: 'A short bloom beneath immense peaks.',
    story: 'At altitude, flowering windows are brief and precious. Mountain honey carries the freshness of alpine herbs and the distinct character of a high-country season.',
    varieties: [], productIds: [],
    image: commonsPhoto('7/79', 'View_from_Hunza_valley.jpg'),
    imageFallback: image('photo-1473580044384-7ba9967e16a0'),
    imageAlt: 'A view of Hunza Valley from Baltit Fort in Gilgit-Baltistan',
    imageCredit: 'MhasanShaikh02 · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:View_from_Hunza_valley.jpg',
  },
  {
    id: 'ajk', name: 'Azad Jammu and Kashmir', shortName: 'AJK', coordinates: [34.3572, 73.4764], region: 'Himalayan foothills and forest',
    headline: 'Forest, foothill and spring blossom.',
    story: 'Forested slopes and Himalayan foothills offer a rich mosaic of blossoms. Honey from this landscape can be floral and full-bodied, with the exact notes guided by its season.',
    varieties: [], productIds: [],
    image: commonsPhoto('3/3f', 'The_Neelum_Valley.jpg'),
    imageFallback: image('photo-1470770841072-f978cf4d019e'),
    imageAlt: 'Neelum Valley in Azad Kashmir, Pakistan',
    imageCredit: 'Amir Yusufzai · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:The_Neelum_Valley.jpg',
  },
];

export const processSteps = [
  { number: '01', title: 'A flower, first', text: 'Our story begins in flowering meadows and groves, where bees forage freely across healthy landscapes.', image: image('photo-1597954217997-ad476ec0d2c0'), alt: 'A honeybee gathering nectar from a flower' },
  { number: '02', title: 'A home, tended', text: 'Patient keepers look after each hive with care, leaving the bees what they need to thrive.', image: image('photo-1781498269548-73ec79bfc19f'), alt: 'Honeybees tending their honeycomb' },
  { number: '03', title: 'A considered harvest', text: 'We gather only when the combs are ready, working in step with the season and the colony.', image: image('photo-1647427060148-ea2b8f7c6bb3'), alt: 'A beekeeper carefully inspecting a honeycomb frame' },
  { number: '04', title: 'Nothing unnecessary', text: 'Each batch is gently handled and bottled in small runs, with no added syrups or shortcuts.', image: image('photo-1758522965167-42e34a12bf13'), alt: 'Fresh golden honey flowing from harvest equipment' },
];

export const testimonials = [
  { quote: 'The first spoonful has a beautiful depth. It is rare to find honey with this much character.', name: 'Ayesha K.', detail: 'Lahore · Pulosah, verified purchase' },
  { quote: 'The Bera has become part of our Sunday morning ritual. It is beautifully mellow, and the care in the packaging is unmistakable.', name: 'Mariam R.', detail: 'Mardan · Bera, verified purchase' },
  { quote: 'I gave a gift set as a housewarming present, then immediately ordered one for ourselves. Every jar feels considered.', name: 'Omar F.', detail: 'Islamabad · Gift collection, verified purchase' },
];

export const faqs = [
  { question: 'How do you keep your honey pure?', answer: 'We source in small batches, test each lot for quality and purity, and never blend in syrups or sweeteners. Every jar is traceable to its harvest and region.' },
  { question: 'Why does raw honey sometimes crystallise?', answer: 'Crystallisation is a natural quality of unprocessed honey. It does not mean the honey has spoiled. Set the closed jar in warm water to gently return it to a pourable texture.' },
  { question: 'Where do you deliver?', answer: 'We arrange delivery across Pakistan. Delivery charges and an estimated delivery window are confirmed with you on WhatsApp before your order is finalised.' },
  { question: 'Can I send a gift?', answer: 'Yes. Add your delivery details at checkout and message us on WhatsApp with any gift note or presentation request.' },
];
