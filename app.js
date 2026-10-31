/**
 * 🏪 पूनम किराणा (Poonam Kirana) - JAVASCRIPT
 * Permanent Suppliers, Bills, Photo Upload & Viewer, Turnover, Section Breakdown,
 * 1-Year Profit Reports, Professional Excel (.xls) & Clean CSV Export, Navigation Back System
 */

// ==================== SECTIONS DEFINITIONS ====================
const SECTION_CONFIG = {
    kirana: { name: "🛒 किराणा विभाग", icon: "🛒" },
    colddrinks: { name: "🥤 कोल्ड ड्रिंक्स विभाग", icon: "🥤" },
    snacks: { name: "🍿 स्नॅक्स / बिस्किटे", icon: "🍿" },
    dairy: { name: "🥛 दूध व डेअरी", icon: "🥛" },
    masala: { name: "🌶️ मसाले", icon: "🌶️" },
    cleaning: { name: "🧹 साफसफाई", icon: "🧹" },
    personal: { name: "🧴 पर्सनल केअर", icon: "🧴" }
};

const MONTH_NAMES_MR = [
    "जानेवारी (Jan)", "फेब्रुवारी (Feb)", "मार्च (Mar)", "एप्रिल (Apr)",
    "मे (May)", "जून (Jun)", "जुलै (Jul)", "ऑगस्ट (Aug)",
    "सप्टेंबर (Sep)", "ऑक्टोबर (Oct)", "नोव्हेंबर (Nov)", "डिसेंबर (Dec)"
];

// ==================== DEFAULT SUPPLIERS ====================
const DEFAULT_SUPPLIERS = [
    {
        id: 1,
        name: "कोका कोला बेव्हरेजेस एजन्सी",
        section: "colddrinks",
        phone: "9822101010",
        address: "प्लॉट नं. 12, एमआयडीसी, पुणे रोड"
    },
    {
        id: 2,
        name: "पार्ले ऍग्रो सप्लायर्स",
        section: "colddrinks",
        phone: "9822202020",
        address: "शॉप नं. 5, कोल्ड्रिंक्स मार्केट"
    },
    {
        id: 3,
        name: "श्री गणेश ट्रेडिंग कंपनी (मार्केट यार्ड)",
        section: "kirana",
        phone: "9822303030",
        address: "गाळा नं. 45, कृषी उत्पन्न बाजार समिती, मार्केट यार्ड"
    },
    {
        id: 4,
        name: "सह्याद्री ऍग्रो फूड्स",
        section: "kirana",
        phone: "9822404040",
        address: "साखर व तेल विभाग, मार्केट यार्ड"
    },
    {
        id: 5,
        name: "बालाजी वेफर्स डिस्ट्रीब्युशन",
        section: "snacks",
        phone: "9822505050",
        address: "गोदाम क्र. 8, ट्रान्सपोर्ट नगर"
    },
    {
        id: 6,
        name: "अमूल व गोकुळ डेअरी डिस्ट्रीब्युटर",
        section: "dairy",
        phone: "9822606060",
        address: "दूध डेअरी चौक"
    },
    {
        id: 7,
        name: "एव्हरेस्ट व सुहाना मसाले एजन्सी",
        section: "masala",
        phone: "9822707070",
        address: "मसाला गल्ली, सराफ बाजार परिसर"
    }
];

// ==================== MASTER COLDDRINKS & KIRANA CATALOGS (एकच क्लिकवर सर्व माल लोड करणे) ====================
const MASTER_COLDDRINKS_CATALOG = [
    { itemName: "Sprite (स्प्राइट) 750ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 768, sellRate: 960, quantity: 10 },
    { itemName: "Thums Up (थम्स अप) 750ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 768, sellRate: 960, quantity: 15 },
    { itemName: "Coca Cola (कोका कोला) 750ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 768, sellRate: 960, quantity: 10 },
    { itemName: "Maaza (माझा) 600ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 720, sellRate: 912, quantity: 12 },
    { itemName: "Sting Energy (स्टिंग) 250ml (30 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 480, sellRate: 600, quantity: 15 },
    { itemName: "Frooti (फ्रुटी) 200ml टेट्रा (40 नग बॉक्स)", section: "colddrinks", unit: "box", buyRate: 460, sellRate: 600, quantity: 12 },
    { itemName: "Appy Fizz (ॲप्पी फिज) 160ml (30 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 450, sellRate: 600, quantity: 10 },
    { itemName: "Mountain Dew (माउंटन ड्यु) 750ml (24 बॉटल)", section: "colddrinks", unit: "box", buyRate: 768, sellRate: 960, quantity: 8 },
    { itemName: "7-Up (7-अप) 750ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 768, sellRate: 960, quantity: 6 },
    { itemName: "Pepsi (पेप्सी) 750ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 768, sellRate: 960, quantity: 8 },
    { itemName: "Mirinda (मिरिंडा) 750ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 768, sellRate: 960, quantity: 6 },
    { itemName: "Limca (लिम्का) 750ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 768, sellRate: 960, quantity: 6 },
    { itemName: "Fanta (फँटा) 750ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 768, sellRate: 960, quantity: 6 },
    { itemName: "Kinley Soda (किन्ले सोडा) 750ml (24 बॉटल)", section: "colddrinks", unit: "box", buyRate: 360, sellRate: 480, quantity: 10 },
    { itemName: "Kinley Water (किन्ले पाणी) 1L (12 बॉटल)", section: "colddrinks", unit: "box", buyRate: 140, sellRate: 240, quantity: 15 },
    { itemName: "Red Bull (रेड बुल) 250ml कॅन (24 कॅन)", section: "colddrinks", unit: "box", buyRate: 2650, sellRate: 3000, quantity: 2 },
    { itemName: "Jeera Masala Soda (जिरा मसाला सोडा) 200ml (24 बॉटल)", section: "colddrinks", unit: "box", buyRate: 200, sellRate: 288, quantity: 8 },
    { itemName: "Sprite 250ml Can (स्प्राइट कॅन 24 नग)", section: "colddrinks", unit: "box", buyRate: 720, sellRate: 960, quantity: 5 },
    { itemName: "Thums Up 250ml Can (थम्स अप कॅन 24 नग)", section: "colddrinks", unit: "box", buyRate: 720, sellRate: 960, quantity: 5 },
    { itemName: "Coca Cola 250ml Can (कोका कोला कॅन 24 नग)", section: "colddrinks", unit: "box", buyRate: 720, sellRate: 960, quantity: 4 },
    { itemName: "Maaza 1.2L (माझा मोठी बॉटल 12 बॉटल)", section: "colddrinks", unit: "box", buyRate: 660, sellRate: 840, quantity: 8 },
    { itemName: "Sprite 2.25L (स्प्राइट मोठी बॉटल 9 बॉटल)", section: "colddrinks", unit: "box", buyRate: 720, sellRate: 855, quantity: 6 },
    { itemName: "Thums Up 2.25L (थम्स अप मोठी बॉटल 9 बॉटल)", section: "colddrinks", unit: "box", buyRate: 720, sellRate: 855, quantity: 6 },
    { itemName: "Coca Cola 2.25L (कोका कोला मोठी बॉटल 9 बॉटल)", section: "colddrinks", unit: "box", buyRate: 720, sellRate: 855, quantity: 5 },
    { itemName: "Bovonto Grape Soda (बोव्होंटो) 250ml (24 बॉटल)", section: "colddrinks", unit: "box", buyRate: 360, sellRate: 480, quantity: 4 },
    { itemName: "Paper Boat Mango (पेपर बोट) 200ml (24 पॅक)", section: "colddrinks", unit: "box", buyRate: 600, sellRate: 720, quantity: 4 }
];

const MASTER_KIRANA_CATALOG = [
    { itemName: "Fortune Oil (फॉर्च्युन सोयाबीन तेल) 1L (12 नग)", section: "kirana", unit: "box", buyRate: 1296, sellRate: 1440, quantity: 20 },
    { itemName: "Gemini Oil (जेमिनी सोयाबीन तेल) 1L (12 नग)", section: "kirana", unit: "box", buyRate: 1320, sellRate: 1460, quantity: 15 },
    { itemName: "Dhara Groundnut Oil (धारा शेंगदाणा तेल) 1L (12 नग)", section: "kirana", unit: "box", buyRate: 1850, sellRate: 2040, quantity: 10 },
    { itemName: "M 30 Sugar (साखर एम ३०) 50kg पोते", section: "kirana", unit: "bag", buyRate: 1900, sellRate: 2100, quantity: 10 },
    { itemName: "S 30 Sugar (साखर एस ३० बारीक) 50kg पोते", section: "kirana", unit: "bag", buyRate: 1920, sellRate: 2120, quantity: 5 },
    { itemName: "Toor Dal (तूर डाळ उत्तम) 50kg पोते", section: "kirana", unit: "bag", buyRate: 6750, sellRate: 7750, quantity: 4 },
    { itemName: "Moong Dal (मूग डाळ पिवळी) 30kg पोते", section: "kirana", unit: "bag", buyRate: 3450, sellRate: 3900, quantity: 3 },
    { itemName: "Chana Dal (चणा डाळ उत्तम) 30kg पोते", section: "kirana", unit: "bag", buyRate: 2550, sellRate: 2850, quantity: 4 },
    { itemName: "Urad Dal (उडीद डाळ मोगर) 30kg पोते", section: "kirana", unit: "bag", buyRate: 3600, sellRate: 4050, quantity: 2 },
    { itemName: "Masoor Dal (मसूर डाळ उत्तम) 30kg पोते", section: "kirana", unit: "bag", buyRate: 2400, sellRate: 2700, quantity: 3 },
    { itemName: "Matki (मटकी गावरान) 25kg पोते", section: "kirana", unit: "bag", buyRate: 2750, sellRate: 3125, quantity: 2 },
    { itemName: "Chole (काबुली चणे) 25kg पोते", section: "kirana", unit: "bag", buyRate: 3250, sellRate: 3750, quantity: 2 },
    { itemName: "Harbhara (हरभरा गावठी) 50kg पोते", section: "kirana", unit: "bag", buyRate: 3500, sellRate: 4000, quantity: 2 },
    { itemName: "Sharbati Wheat (गहू शरबती एमपी) 50kg पोते", section: "kirana", unit: "bag", buyRate: 1950, sellRate: 2250, quantity: 8 },
    { itemName: "Lokwan Wheat (गहू सिहोर लोकवान) 50kg पोते", section: "kirana", unit: "bag", buyRate: 1800, sellRate: 2050, quantity: 8 },
    { itemName: "Jowar Maldandi (ज्वारी मालदांडी) 50kg पोते", section: "kirana", unit: "bag", buyRate: 2450, sellRate: 2800, quantity: 5 },
    { itemName: "Bajra (बाजरी गावरान) 50kg पोते", section: "kirana", unit: "bag", buyRate: 1450, sellRate: 1700, quantity: 4 },
    { itemName: "Basmati Rice (बासमती तुकडा तांदूळ) 25kg बॅग", section: "kirana", unit: "bag", buyRate: 1400, sellRate: 1650, quantity: 6 },
    { itemName: "Kolam Rice (कोलम तांदूळ उत्तम) 50kg पोते", section: "kirana", unit: "bag", buyRate: 2750, sellRate: 3150, quantity: 5 },
    { itemName: "Indrayani Rice (इंद्रायणी तांदूळ जुना) 50kg पोते", section: "kirana", unit: "bag", buyRate: 3200, sellRate: 3650, quantity: 4 },
    { itemName: "Besan (बेसन उत्तम) 500g (20 पाकिट बॉक्स)", section: "kirana", unit: "box", buyRate: 880, sellRate: 1000, quantity: 5 },
    { itemName: "Rava (रवा उत्तम) 500g (20 पाकिट बॉक्स)", section: "kirana", unit: "box", buyRate: 520, sellRate: 600, quantity: 4 },
    { itemName: "Maida (मैदा उत्तम) 500g (20 पाकिट बॉक्स)", section: "kirana", unit: "box", buyRate: 520, sellRate: 600, quantity: 4 },
    { itemName: "Poha (पोहे जाडे) 500g (20 पाकिट)", section: "kirana", unit: "box", buyRate: 560, sellRate: 660, quantity: 5 },
    { itemName: "Sabudana (साबुदाणा उत्तम) 25kg पोते", section: "kirana", unit: "bag", buyRate: 1750, sellRate: 2000, quantity: 3 },
    { itemName: "Groundnut (शेंगदाणे उत्तम) 50kg पोते", section: "kirana", unit: "bag", buyRate: 5500, sellRate: 6250, quantity: 2 },
    { itemName: "Tata Salt (टाटा सॉल्ट मीठ) 1kg (25 नग पोते)", section: "kirana", unit: "bag", buyRate: 625, sellRate: 700, quantity: 4 },
    { itemName: "Jaggery (गूळ कोल्हापुरी पिवळा) 10kg बॉक्स", section: "kirana", unit: "box", buyRate: 460, sellRate: 540, quantity: 6 }
];

// ==================== DEFAULT SUPPLIER CATALOGS (४०-५० आयटम्स लोड करण्यासाठी) ====================
const DEFAULT_SUPPLIER_CATALOG = {
    "कोका कोला बेव्हरेजेस एजन्सी": MASTER_COLDDRINKS_CATALOG.filter(it => it.section === "colddrinks"),
    "पार्ले ऍग्रो सप्लायर्स": [
        { itemName: "Frooti (फ्रुटी) 200ml टेट्रा (40 नग बॉक्स)", section: "colddrinks", unit: "box", buyRate: 460, sellRate: 600, quantity: 12 },
        { itemName: "Frooti (फ्रुटी) 600ml पेट (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 720, sellRate: 912, quantity: 8 },
        { itemName: "Appy Fizz (ॲप्पी फिज) 160ml (30 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 450, sellRate: 600, quantity: 10 },
        { itemName: "Appy Fizz (ॲप्पी फिज) 600ml (24 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 780, sellRate: 960, quantity: 6 },
        { itemName: "B-Fizz (बी-फिझ) 160ml (30 बॉटल बॉक्स)", section: "colddrinks", unit: "box", buyRate: 450, sellRate: 600, quantity: 5 },
        { itemName: "Smoodh (स्मुथ) 85ml टेट्रा (40 नग)", section: "colddrinks", unit: "box", buyRate: 340, sellRate: 400, quantity: 8 },
        { itemName: "Parle-G (पारले-जी) 5/- (96 पाकिट बॉक्स)", section: "snacks", unit: "box", buyRate: 410, sellRate: 480, quantity: 10 },
        { itemName: "Parle 20-20 (पारले २०-२०) 10/- (48 पाकिट)", section: "snacks", unit: "box", buyRate: 410, sellRate: 480, quantity: 8 },
        { itemName: "Parle Hide & Seek (हायड अँड सीक) 30/- (24 पाकिट)", section: "snacks", unit: "box", buyRate: 620, sellRate: 720, quantity: 5 },
        { itemName: "Parle Monaco (मोनाको) 10/- (48 पाकिट)", section: "snacks", unit: "box", buyRate: 410, sellRate: 480, quantity: 6 }
    ],
    "श्री गणेश ट्रेडिंग कंपनी (मार्केट यार्ड)": MASTER_KIRANA_CATALOG,
    "सह्याद्री ऍग्रो फूड्स": [
        { itemName: "एम 30 साखर (50kg पोते)", section: "kirana", unit: "bag", buyRate: 1900, sellRate: 2100, quantity: 10 },
        { itemName: "एस 30 साखर बारीक (50kg पोते)", section: "kirana", unit: "bag", buyRate: 1920, sellRate: 2120, quantity: 5 },
        { itemName: "गहू शरबती एमपी (50kg पोते)", section: "kirana", unit: "bag", buyRate: 1950, sellRate: 2250, quantity: 8 },
        { itemName: "गहू सिहोर लोकवान (50kg पोते)", section: "kirana", unit: "bag", buyRate: 1800, sellRate: 2050, quantity: 8 },
        { itemName: "ज्वारी गावरान मालदांडी (50kg पोते)", section: "kirana", unit: "bag", buyRate: 2450, sellRate: 2800, quantity: 5 },
        { itemName: "बाजरी उत्तम गावरान (50kg पोते)", section: "kirana", unit: "bag", buyRate: 1450, sellRate: 1700, quantity: 4 },
        { itemName: "शेंगदाणा तेल 15L डबा", section: "kirana", unit: "box", buyRate: 2480, sellRate: 2700, quantity: 6 },
        { itemName: "सूर्यफूल तेल 15L डबा", section: "kirana", unit: "box", buyRate: 1850, sellRate: 2050, quantity: 6 },
        { itemName: "सरकी तेल 15L डबा", section: "kirana", unit: "box", buyRate: 1720, sellRate: 1900, quantity: 5 }
    ],
    "बालाजी वेफर्स डिस्ट्रीब्युशन": [
        { itemName: "बालाजी चाट चस्का वेफर्स 5/- (60 पाकिट)", section: "snacks", unit: "box", buyRate: 255, sellRate: 300, quantity: 8 },
        { itemName: "बालाजी टोमॅटो वेफर्स 5/- (60 पाकिट)", section: "snacks", unit: "box", buyRate: 255, sellRate: 300, quantity: 8 },
        { itemName: "बालाजी साल्टेड वेफर्स 5/- (60 पाकिट)", section: "snacks", unit: "box", buyRate: 255, sellRate: 300, quantity: 6 },
        { itemName: "बालाजी क्रीम अँड ऑनियन 5/- (60 पाकिट)", section: "snacks", unit: "box", buyRate: 255, sellRate: 300, quantity: 6 },
        { itemName: "बालाजी मसाला सेव मुरमुरा 5/- (60 पाकिट)", section: "snacks", unit: "box", buyRate: 255, sellRate: 300, quantity: 5 },
        { itemName: "बालाजी रतलामी सेव 5/- (60 पाकिट)", section: "snacks", unit: "box", buyRate: 255, sellRate: 300, quantity: 5 },
        { itemName: "कुर्कुरे मसाला मंच 5/- (60 पाकिट)", section: "snacks", unit: "box", buyRate: 255, sellRate: 300, quantity: 10 },
        { itemName: "कुर्कुरे ग्रीन चटणी 5/- (60 पाकिट)", section: "snacks", unit: "box", buyRate: 255, sellRate: 300, quantity: 8 },
        { itemName: "लेज अमेरिकन स्टाईल 10/- (48 पाकिट)", section: "snacks", unit: "box", buyRate: 410, sellRate: 480, quantity: 6 },
        { itemName: "लेज स्पॅनिश टोमॅटो 10/- (48 पाकिट)", section: "snacks", unit: "box", buyRate: 410, sellRate: 480, quantity: 6 },
        { itemName: "ब्रिटानिया गुड-डे बटर 10/- (48 पाकिट)", section: "snacks", unit: "box", buyRate: 410, sellRate: 480, quantity: 8 },
        { itemName: "मेरी गोल्ड बिस्किट 10/- (48 पाकिट)", section: "snacks", unit: "box", buyRate: 410, sellRate: 480, quantity: 8 },
        { itemName: "ओरिओ व्हॅनिला 10/- (48 पाकिट)", section: "snacks", unit: "box", buyRate: 415, sellRate: 480, quantity: 6 },
        { itemName: "कॅडबरी डेअरी मिल्क 10/- (48 नग बॉक्स)", section: "snacks", unit: "box", buyRate: 420, sellRate: 480, quantity: 5 },
        { itemName: "5 स्टार चॉकलेट 5/- (48 नग बॉक्स)", section: "snacks", unit: "box", buyRate: 210, sellRate: 240, quantity: 5 }
    ],
    "अमूल व गोकुळ डेअरी डिस्ट्रीब्युटर": [
        { itemName: "अमूल ताझा 500ml दूध (24 पाकिट क्रेट)", section: "dairy", unit: "crate", buyRate: 624, sellRate: 672, quantity: 10 },
        { itemName: "अमूल गोल्ड 500ml दूध (24 पाकिट क्रेट)", section: "dairy", unit: "crate", buyRate: 744, sellRate: 816, quantity: 8 },
        { itemName: "गोकुळ टोंड 500ml (24 पाकिट क्रेट)", section: "dairy", unit: "crate", buyRate: 624, sellRate: 672, quantity: 10 },
        { itemName: "गोकुळ स्पेशल दूध 500ml (24 पाकिट)", section: "dairy", unit: "crate", buyRate: 744, sellRate: 816, quantity: 8 },
        { itemName: "अमूल बटर 100g (20 नग बॉक्स)", section: "dairy", unit: "box", buyRate: 1020, sellRate: 1160, quantity: 4 },
        { itemName: "अमूल पनीर 200g (10 नग पॅक)", section: "dairy", unit: "box", buyRate: 820, sellRate: 950, quantity: 5 },
        { itemName: "अमूल चीज क्यूब्स 200g (12 नग)", section: "dairy", unit: "box", buyRate: 1320, sellRate: 1500, quantity: 3 },
        { itemName: "अमूल मस्ती दही 200g (24 कप)", section: "dairy", unit: "box", buyRate: 430, sellRate: 504, quantity: 4 },
        { itemName: "अमूल मस्ती ताक 200ml (30 पाकिट)", section: "dairy", unit: "box", buyRate: 400, sellRate: 480, quantity: 6 },
        { itemName: "गोवर्धन गाय तूप 1L (12 नग कार्टन)", section: "dairy", unit: "carton", buyRate: 7200, sellRate: 8160, quantity: 2 }
    ],
    "एव्हरेस्ट व सुहाना मसाले एजन्सी": [
        { itemName: "सुहाना चिकन मसाला 50g (20 नग बॉक्स)", section: "masala", unit: "box", buyRate: 700, sellRate: 840, quantity: 6 },
        { itemName: "सुहाना मटन मसाला 50g (20 नग बॉक्स)", section: "masala", unit: "box", buyRate: 700, sellRate: 840, quantity: 6 },
        { itemName: "सुहाना पनीर बटर मसाला 50g (20 नग)", section: "masala", unit: "box", buyRate: 700, sellRate: 840, quantity: 5 },
        { itemName: "सुहाना अंबारी कांदा लसूण 100g (10 नग)", section: "masala", unit: "box", buyRate: 380, sellRate: 460, quantity: 8 },
        { itemName: "एव्हरेस्ट गरम मसाला 100g (10 नग बॉक्स)", section: "masala", unit: "box", buyRate: 820, sellRate: 960, quantity: 5 },
        { itemName: "एव्हरेस्ट हळद पावडर 100g (20 नग बॉक्स)", section: "masala", unit: "box", buyRate: 640, sellRate: 760, quantity: 8 },
        { itemName: "एव्हरेस्ट तिखट मिरची 100g (20 नग बॉक्स)", section: "masala", unit: "box", buyRate: 880, sellRate: 1040, quantity: 8 },
        { itemName: "एव्हरेस्ट धने पावडर 100g (20 नग बॉक्स)", section: "masala", unit: "box", buyRate: 620, sellRate: 740, quantity: 6 },
        { itemName: "एव्हरेस्ट पावभाजी मसाला 100g (10 नग)", section: "masala", unit: "box", buyRate: 650, sellRate: 780, quantity: 4 },
        { itemName: "एव्हरेस्ट चाट मसाला 100g (10 नग)", section: "masala", unit: "box", buyRate: 650, sellRate: 780, quantity: 4 },
        { itemName: "जिरे उत्तम अखंड 1kg (10 पाकिट)", section: "masala", unit: "bag", buyRate: 3600, sellRate: 4200, quantity: 2 },
        { itemName: "मोहरी बारीक 1kg (10 पाकिट)", section: "masala", unit: "bag", buyRate: 1100, sellRate: 1350, quantity: 2 }
    ]
};

// ==================== DEFAULT BILLS ====================
const DEFAULT_BILLS = [
    // कोल्ड ड्रिंक्स
    {
        id: 101,
        date: "2026-10-05",
        supplier: "कोका कोला बेव्हरेजेस एजन्सी",
        billNumber: "CC-9081",
        section: "colddrinks",
        itemName: "थम्प्स अप 750ml (24 बॉटल बॉक्स)",
        quantity: 15,
        unit: "box",
        buyRate: 768,
        totalCost: 11520,
        sellRate: 960,
        totalExpected: 14400,
        profit: 2880,
        margin: "20.0",
        photo: null
    },
    {
        id: 102,
        date: "2026-10-12",
        supplier: "कोका कोला बेव्हरेजेस एजन्सी",
        billNumber: "CC-9140",
        section: "colddrinks",
        itemName: "स्प्राइट 750ml (24 बॉटल बॉक्स)",
        quantity: 10,
        unit: "box",
        buyRate: 768,
        totalCost: 7680,
        sellRate: 960,
        totalExpected: 9600,
        profit: 1920,
        margin: "20.0",
        photo: null
    },
    {
        id: 103,
        date: "2026-09-18",
        supplier: "पार्ले ऍग्रो सप्लायर्स",
        billNumber: "PA-4421",
        section: "colddrinks",
        itemName: "फ्रुटी 200ml टेट्रा (40 नग बॉक्स)",
        quantity: 12,
        unit: "box",
        buyRate: 460,
        totalCost: 5520,
        sellRate: 600,
        totalExpected: 7200,
        profit: 1680,
        margin: "23.3",
        photo: null
    },
    // किराणा
    {
        id: 104,
        date: "2026-10-02",
        supplier: "श्री गणेश ट्रेडिंग कंपनी (मार्केट यार्ड)",
        billNumber: "SG-1092",
        section: "kirana",
        itemName: "फॉर्च्युन सोयाबीन तेल 1L (12 नग बॉक्स)",
        quantity: 20,
        unit: "box",
        buyRate: 1296,
        totalCost: 25920,
        sellRate: 1440,
        totalExpected: 28800,
        profit: 2880,
        margin: "10.0",
        photo: null
    },
    {
        id: 105,
        date: "2026-09-25",
        supplier: "श्री गणेश ट्रेडिंग कंपनी (मार्केट यार्ड)",
        billNumber: "SG-1045",
        section: "kirana",
        itemName: "तूर डाळ उत्तम (50kg पोते)",
        quantity: 4,
        unit: "bag",
        buyRate: 6750,
        totalCost: 27000,
        sellRate: 7750,
        totalExpected: 31000,
        profit: 4000,
        margin: "12.9",
        photo: null
    },
    {
        id: 106,
        date: "2026-08-10",
        supplier: "सह्याद्री ऍग्रो फूड्स",
        billNumber: "SA-312",
        section: "kirana",
        itemName: "एम 30 साखर (50kg पोते)",
        quantity: 10,
        unit: "bag",
        buyRate: 1900,
        totalCost: 19000,
        sellRate: 2100,
        totalExpected: 21000,
        profit: 2000,
        margin: "9.5",
        photo: null
    },
    // स्नॅक्स
    {
        id: 107,
        date: "2026-10-15",
        supplier: "बालाजी वेफर्स डिस्ट्रीब्युशन",
        billNumber: "BW-552",
        section: "snacks",
        itemName: "बालाजी वेफर्स मसाला (60 पाकीट कार्टन)",
        quantity: 15,
        unit: "carton",
        buyRate: 480,
        totalCost: 7200,
        sellRate: 600,
        totalExpected: 9000,
        profit: 1800,
        margin: "20.0",
        photo: null
    }
];

// ==================== DEFAULT SALES ====================
const DEFAULT_SALES = [
    { id: 201, date: "2026-01-28", section: "kirana", note: "जानेवारी किराणा विक्री", costPrice: 95000, saleAmount: 112000, profit: 17000, margin: "15.2" },
    { id: 202, date: "2026-01-29", section: "colddrinks", note: "जानेवारी कोल्ड्रिंक्स", costPrice: 18000, saleAmount: 23500, profit: 5500, margin: "23.4" },
    { id: 203, date: "2026-02-26", section: "kirana", note: "फेब्रुवारी किराणा विक्री", costPrice: 105000, saleAmount: 124000, profit: 19000, margin: "15.3" },
    { id: 204, date: "2026-02-27", section: "colddrinks", note: "फेब्रुवारी कोल्ड्रिंक्स", costPrice: 22000, saleAmount: 28600, profit: 6600, margin: "23.1" },
    { id: 205, date: "2026-03-29", section: "kirana", note: "मार्च किराणा विक्री", costPrice: 118000, saleAmount: 139500, profit: 21500, margin: "15.4" },
    { id: 206, date: "2026-03-30", section: "colddrinks", note: "मार्च उन्हाळा सुरू - कोल्ड्रिंक्स विक्री", costPrice: 48000, saleAmount: 64000, profit: 16000, margin: "25.0" },
    { id: 207, date: "2026-04-28", section: "colddrinks", note: "एप्रिल भर उन्हाळा - कोल्ड्रिंक्स उलाढाल", costPrice: 85000, saleAmount: 115000, profit: 30000, margin: "26.1" },
    { id: 208, date: "2026-04-29", section: "kirana", note: "एप्रिल किराणा विक्री", costPrice: 125000, saleAmount: 147500, profit: 22500, margin: "15.3" },
    { id: 209, date: "2026-05-28", section: "colddrinks", note: "मे महिना - कोल्ड्रिंक्स उच्चांक", costPrice: 92000, saleAmount: 126000, profit: 34000, margin: "27.0" },
    { id: 210, date: "2026-05-29", section: "kirana", note: "मे किराणा विक्री", costPrice: 130000, saleAmount: 153000, profit: 23000, margin: "15.0" },
    { id: 211, date: "2026-06-28", section: "kirana", note: "जून किराणा विक्री", costPrice: 122000, saleAmount: 144000, profit: 22000, margin: "15.3" },
    { id: 212, date: "2026-06-29", section: "colddrinks", note: "जून कोल्ड्रिंक्स", costPrice: 42000, saleAmount: 55000, profit: 13000, margin: "23.6" },
    { id: 213, date: "2026-07-28", section: "kirana", note: "जुलै किराणा", costPrice: 110000, saleAmount: 129800, profit: 19800, margin: "15.3" },
    { id: 214, date: "2026-08-28", section: "kirana", note: "ऑगस्ट किराणा व सणवार", costPrice: 135000, saleAmount: 161000, profit: 26000, margin: "16.1" },
    { id: 215, date: "2026-09-28", section: "kirana", note: "सप्टेंबर किराणा", costPrice: 128000, saleAmount: 151500, profit: 23500, margin: "15.5" },
    { id: 216, date: "2026-10-25", section: "kirana", note: "ऑक्टोबर किराणा व दिवाळी खरेदी", costPrice: 160000, saleAmount: 192000, profit: 32000, margin: "16.7" },
    { id: 217, date: "2026-10-26", section: "colddrinks", note: "ऑक्टोबर कोल्ड्रिंक्स", costPrice: 38000, saleAmount: 49500, profit: 11500, margin: "23.2" }
];

// ==================== STORAGE & STATE ====================
let suppliers = [];
let bills = [];
let sales = [];
let supplierCatalog = {};
let billsViewMode = "invoices"; // 'invoices' (grouped) or 'items' (individual line items)
let yearlyChartInstance = null;
let navHistory = ["dashboard"];
let currentActiveSection = "dashboard";
let currentBillPhotoBase64 = null; // Holds the selected bill photo Base64 string

const SUPPLIERS_KEY = "kirana_suppliers_data_v2";
const BILLS_KEY = "kirana_bills_data_v2";
const SALES_KEY = "kirana_sales_data_v2";
const CATALOG_KEY = "kirana_supplier_catalog_v2";
const AUTH_KEY = "kirana_auth_status_v2";
const USER_CRED_KEY = "kirana_user_credentials_v2";

function initCredentials() {
    if (!localStorage.getItem(USER_CRED_KEY)) {
        localStorage.setItem(USER_CRED_KEY, JSON.stringify({
            username: "admin",
            password: "kirana123"
        }));
    }
}

function loadData() {
    const savedSuppliers = localStorage.getItem(SUPPLIERS_KEY);
    suppliers = savedSuppliers ? JSON.parse(savedSuppliers) : [...DEFAULT_SUPPLIERS];

    const savedBills = localStorage.getItem(BILLS_KEY);
    bills = savedBills ? JSON.parse(savedBills) : [...DEFAULT_BILLS];

    const savedSales = localStorage.getItem(SALES_KEY);
    sales = savedSales ? JSON.parse(savedSales) : [...DEFAULT_SALES];

    const savedCatalog = localStorage.getItem(CATALOG_KEY);
    supplierCatalog = savedCatalog ? JSON.parse(savedCatalog) : {};

    // ⚡ SPEED OPTIMIZATION: Clean up any duplicate bloated photos in memory/localStorage
    let cleaned = false;
    const seenInvoicesWithPhoto = new Set();
    bills.forEach(b => {
        const key = b.invoiceId || `${b.billNumber}_${b.supplier}_${b.date}`;
        if (b.photo) {
            if (seenInvoicesWithPhoto.has(key)) {
                b.photo = null; // Remove redundant photo copies from item 2, 3, 4... of the same bill
                cleaned = true;
            } else {
                seenInvoicesWithPhoto.add(key);
            }
        }
    });
    if (cleaned) {
        saveData();
    }
}

function saveData() {
    localStorage.setItem(SUPPLIERS_KEY, JSON.stringify(suppliers));
    try {
        localStorage.setItem(BILLS_KEY, JSON.stringify(bills));
    } catch (e) {
        console.warn("Storage quota warning, saving bills", e);
        localStorage.setItem(BILLS_KEY, JSON.stringify(bills));
    }
    localStorage.setItem(SALES_KEY, JSON.stringify(sales));
    localStorage.setItem(CATALOG_KEY, JSON.stringify(supplierCatalog));
}

// ==================== AUTHENTICATION ====================
function checkAuth() {
    const isAuth = sessionStorage.getItem(AUTH_KEY);
    if (isAuth === "true") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainApp").style.display = "flex";
        const creds = JSON.parse(localStorage.getItem(USER_CRED_KEY));
        document.getElementById("userBadge").innerText = `👤 ${creds.username}`;
        setTodayDefaults();
        populateSupplierDropdowns();
        renderDashboard();
    } else {
        document.getElementById("loginPage").style.display = "flex";
        document.getElementById("mainApp").style.display = "none";
    }
}

function handleLogin(e) {
    e.preventDefault();
    initCredentials();
    const creds = JSON.parse(localStorage.getItem(USER_CRED_KEY));
    const u = document.getElementById("username").value.trim();
    const p = document.getElementById("password").value;
    const err = document.getElementById("loginError");

    if (u === creds.username && p === creds.password) {
        sessionStorage.setItem(AUTH_KEY, "true");
        err.style.display = "none";
        showToast("लॉगिन यशस्वी झाले! स्वागत आहे पूनम किराणा मध्ये. ✅");
        checkAuth();
    } else {
        err.innerText = "❌ चुकीचा युजरनेम किंवा पासवर्ड!";
        err.style.display = "block";
    }
    return false;
}

function handleLogout() {
    if (confirm("तुम्हाला बाहेर पडायचे आहे का?")) {
        sessionStorage.removeItem(AUTH_KEY);
        checkAuth();
    }
}

function togglePassword() {
    const p = document.getElementById("password");
    p.type = p.type === "password" ? "text" : "password";
}

function changePassword(e) {
    e.preventDefault();
    const creds = JSON.parse(localStorage.getItem(USER_CRED_KEY));
    const oldP = document.getElementById("oldPass").value;
    const newP = document.getElementById("newPass").value;
    const confP = document.getElementById("confirmPass").value;

    if (oldP !== creds.password) {
        alert("❌ सध्याचा पासवर्ड चुकीचा आहे!");
        return false;
    }
    if (newP !== confP) {
        alert("❌ नवीन पासवर्ड आणि कन्फर्म पासवर्ड जुळत नाहीत!");
        return false;
    }
    creds.password = newP;
    localStorage.setItem(USER_CRED_KEY, JSON.stringify(creds));
    alert("✅ पासवर्ड यशस्वीरीत्या बदलला गेला!");
    document.getElementById("oldPass").value = "";
    document.getElementById("newPass").value = "";
    document.getElementById("confirmPass").value = "";
    return false;
}

// ==================== NAVIGATION & BACK SYSTEM ====================
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("sidebarOverlay").classList.toggle("active");
}

function showSection(secId, isBackAction = false) {
    if (!isBackAction) {
        if (currentActiveSection !== secId) {
            navHistory.push(secId);
        }
    }
    currentActiveSection = secId;

    const navBackBtn = document.getElementById("navBackBtn");
    if (navBackBtn) {
        if (secId === "dashboard") {
            navBackBtn.style.display = "none";
        } else {
            navBackBtn.style.display = "inline-flex";
        }
    }

    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active-section"));
    document.querySelectorAll(".sidebar-menu li").forEach(li => li.classList.remove("active"));

    const target = document.getElementById(`sec-${secId}`);
    if (target) {
        target.classList.add("active-section");
    }

    const menuItems = document.querySelectorAll(".sidebar-menu li");
    menuItems.forEach(li => {
        const onc = li.getAttribute("onclick") || "";
        if (onc.includes(`'${secId}'`)) {
            li.classList.add("active");
        }
    });

    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").classList.remove("active");
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (secId === "dashboard") renderDashboard();
    else if (secId === "suppliers") renderSuppliersSection();
    else if (secId === "bills") renderBillsList();
    else if (secId === "recordSale") renderSalesList();
    else if (secId === "reports") renderReports();
    else if (secId === "addBill") { populateSupplierDropdowns(); initBulkBillForm(); }
}

function goBack() {
    if (navHistory.length > 1) {
        navHistory.pop();
        const previousSection = navHistory[navHistory.length - 1];
        showSection(previousSection, true);
    } else {
        navHistory = ["dashboard"];
        showSection("dashboard", true);
    }
}

function showCategory(catKey) {
    showSection("categoryView");
    renderCategoryDetail(catKey);
}

function setTodayDefaults() {
    const today = new Date().toISOString().slice(0, 10);
    const billDate = document.getElementById("billDate");
    const saleDate = document.getElementById("saleDate");
    if (billDate && !billDate.value) billDate.value = today;
    if (saleDate && !saleDate.value) saleDate.value = today;
}

// ==================== BILL PHOTO HANDLING ====================

// Compress and load photo to Base64 (Optimized for speed and crystal clear legibility)
function handleBillPhotoSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
        alert("कृपया फक्त फोटो (Image) फाईल निवडा!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            // Resize image to max 750px width/height and 0.62 quality
            // This drops photo size from 5MB to ~40KB (120x lighter!), instant save & load!
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            const maxDim = 750;

            if (width > height) {
                if (width > maxDim) {
                    height = Math.round((height * maxDim) / width);
                    width = maxDim;
                }
            } else {
                if (height > maxDim) {
                    width = Math.round((width * maxDim) / height);
                    height = maxDim;
                }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            currentBillPhotoBase64 = canvas.toDataURL('image/jpeg', 0.62);

            // Show preview
            document.getElementById("billPhotoPreviewImg").src = currentBillPhotoBase64;
            document.getElementById("billPhotoPreviewContainer").style.display = "flex";
            showToast("📷 बिलाचा फोटो जोडला गेला!");
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function removeBillPhotoPreview() {
    currentBillPhotoBase64 = null;
    const input = document.getElementById("billPhotoInput");
    if (input) input.value = "";
    document.getElementById("billPhotoPreviewImg").src = "";
    document.getElementById("billPhotoPreviewContainer").style.display = "none";
}

// View Photo Modal Popup
function viewBillPhoto(billId) {
    const b = bills.find(item => item.id === billId);
    if (!b) return;

    // Check if this item has photo, or find photo from other items of the same invoice
    const invKey = getInvoiceKey(b);
    const photo = b.photo || bills.find(it => getInvoiceKey(it) === invKey && it.photo)?.photo;

    if (!photo) {
        alert("या बिलाचा फोटो उपलब्ध नाही!");
        return;
    }

    document.getElementById("photoModalImg").src = photo;
    document.getElementById("photoModalTitle").innerText = `🖼️ बिल फोटो — ${b.supplier} (${b.billNumber})`;
    document.getElementById("photoModalDetails").innerText = `तारीख: ${b.date} | माल: ${b.itemName} | एकूण खरेदी: ₹${parseFloat(b.totalCost).toLocaleString('en-IN')}`;

    const dlBtn = document.getElementById("photoDownloadBtn");
    dlBtn.href = photo;
    dlBtn.download = `पूनम_किराणा_बिल_${b.billNumber}_${b.supplier}.jpg`;

    document.getElementById("photoModal").style.display = "flex";
}

function closePhotoModal() {
    document.getElementById("photoModal").style.display = "none";
}

function viewCurrentPhotoModal() {
    if (!currentBillPhotoBase64) return;
    document.getElementById("photoModalImg").src = currentBillPhotoBase64;
    document.getElementById("photoModalTitle").innerText = `🖼️ जोडलेला बिलाचा फोटो`;
    document.getElementById("photoModalDetails").innerText = `हा मूळ फोटो संपूर्ण ४०-५० मालाच्या बिलासोबत कायम सेव्ह राहील.`;
    const dlBtn = document.getElementById("photoDownloadBtn");
    dlBtn.href = currentBillPhotoBase64;
    dlBtn.download = `पूनम_किराणा_बिलाचा_फोटो.jpg`;
    document.getElementById("photoModal").style.display = "flex";
}

function viewPhotoByUrl(photoUrl, title, details) {
    if (!photoUrl) return;
    document.getElementById("photoModalImg").src = photoUrl;
    document.getElementById("photoModalTitle").innerText = title || "🖼️ सप्लायर बिलाचा फोटो";
    document.getElementById("photoModalDetails").innerText = details || "";
    const dlBtn = document.getElementById("photoDownloadBtn");
    dlBtn.href = photoUrl;
    dlBtn.download = `पूनम_किराणा_बिलाचा_फोटो.jpg`;
    document.getElementById("photoModal").style.display = "flex";
}

// ==================== SUPPLIERS MANAGEMENT ====================
function populateSupplierDropdowns() {
    const billSelect = document.getElementById("billSupplierSelect");
    if (billSelect) {
        const currentVal = billSelect.value;
        billSelect.innerHTML = `<option value="">-- सप्लायर निवडा --</option>`;
        suppliers.forEach(s => {
            const opt = document.createElement("option");
            opt.value = s.name;
            opt.dataset.section = s.section || "";
            opt.innerText = `${s.name} (${SECTION_CONFIG[s.section]?.name || ''})`;
            billSelect.appendChild(opt);
        });
        billSelect.value = currentVal;
    }

    const filterSelect = document.getElementById("billSupplierFilter");
    if (filterSelect) {
        const cur = filterSelect.value;
        filterSelect.innerHTML = `<option value="all">सर्व सप्लायर्स</option>`;
        suppliers.forEach(s => {
            const opt = document.createElement("option");
            opt.value = s.name;
            opt.innerText = s.name;
            filterSelect.appendChild(opt);
        });
        filterSelect.value = cur;
    }
}

// ==================== SUPPLIER CATALOG & AUTO-LOAD (४०-५० माल एकाच बिलात) ====================
function getSupplierCatalogItems(suppName) {
    if (!suppName) return [];
    
    const itemsMap = new Map();

    // 1. Check user-saved catalog for this supplier
    if (supplierCatalog && supplierCatalog[suppName]) {
        supplierCatalog[suppName].forEach(it => {
            if (it && it.itemName) {
                itemsMap.set(it.itemName.toLowerCase(), { ...it });
            }
        });
    }

    // 2. Check previous bills from this supplier
    bills.filter(b => b.supplier === suppName).forEach(b => {
        if (b.itemName) {
            const key = b.itemName.toLowerCase();
            if (!itemsMap.has(key)) {
                itemsMap.set(key, {
                    itemName: b.itemName,
                    section: b.section || "kirana",
                    unit: b.unit || "box",
                    buyRate: b.buyRate || 0,
                    sellRate: b.sellRate || 0,
                    quantity: b.quantity || 1
                });
            }
        }
    });

    // 3. Check default supplier catalog preset
    if (DEFAULT_SUPPLIER_CATALOG[suppName]) {
        DEFAULT_SUPPLIER_CATALOG[suppName].forEach(it => {
            const key = it.itemName.toLowerCase();
            if (!itemsMap.has(key)) {
                itemsMap.set(key, { ...it });
            }
        });
    }

    // 4. If still empty, check section-based items
    if (itemsMap.size === 0) {
        const suppObj = suppliers.find(s => s.name === suppName);
        if (suppObj && suppObj.section) {
            Object.values(DEFAULT_SUPPLIER_CATALOG).forEach(catList => {
                catList.forEach(it => {
                    if (it.section === suppObj.section) {
                        const key = it.itemName.toLowerCase();
                        if (!itemsMap.has(key)) {
                            itemsMap.set(key, { ...it });
                        }
                    }
                });
            });
        }
    }

    return Array.from(itemsMap.values());
}

function updateSupplierItemsDatalist(suppName) {
    const datalist = document.getElementById("supplierItemsDatalist");
    if (!datalist) return;
    datalist.innerHTML = "";
    const items = getSupplierCatalogItems(suppName);
    items.forEach(it => {
        const opt = document.createElement("option");
        opt.value = it.itemName;
        datalist.appendChild(opt);
    });
}

function onSupplierSelected() {
    const billSelect = document.getElementById("billSupplierSelect");
    const suppName = billSelect ? billSelect.value.trim() : "";
    if (!suppName) return;

    updateSupplierItemsDatalist(suppName);

    const items = getSupplierCatalogItems(suppName);
    const btn = document.getElementById("btnLoadSupplierItems");
    if (btn) {
        if (items.length > 0) {
            btn.innerHTML = `📋 या सप्लायरचे ${items.length} माल लोड करा ⚡`;
        } else {
            btn.innerHTML = `📋 मागील माल लोड करा ⚡`;
        }
    }

    // Auto-load items into table if table only has blank rows
    const tbody = document.getElementById("billItemsTableBody");
    if (tbody) {
        let hasUserData = false;
        const rows = tbody.querySelectorAll("tr");
        rows.forEach(r => {
            const name = r.querySelector(".item-name-input")?.value?.trim();
            if (name) hasUserData = true;
        });

        if (!hasUserData && items.length > 0) {
            loadSupplierItems(false);
        }
    }
}

// ==================== REAL-TIME INTELLIGENT SEARCH (sp -> Sprite, th -> Thums Up) ====================
function searchCatalogItems(query) {
    if (!query) return [];
    const q = query.trim().toLowerCase();
    if (q.length === 0) return [];

    const itemsMap = new Map();

    function addList(list) {
        if (!list) return;
        list.forEach(it => {
            if (!it || !it.itemName) return;
            const key = it.itemName.toLowerCase();
            if (!itemsMap.has(key)) {
                itemsMap.set(key, { ...it });
            }
        });
    }

    // 1. Current supplier catalog & past bills
    const suppSelect = document.getElementById("billSupplierSelect");
    if (suppSelect && suppSelect.value) {
        addList(getSupplierCatalogItems(suppSelect.value));
    }

    // 2. All master catalogs (Cold drinks, Kirana, Spices, Snacks)
    addList(MASTER_COLDDRINKS_CATALOG);
    addList(MASTER_KIRANA_CATALOG);
    Object.values(DEFAULT_SUPPLIER_CATALOG).forEach(list => addList(list));

    const all = Array.from(itemsMap.values());

    // Search by prefix, word match, or substring
    return all.filter(it => {
        const name = it.itemName.toLowerCase();

        // 1. Exact start or substring
        if (name.includes(q)) return true;

        // 2. Word start match (e.g. 'sp' matches 'Sprite', 'th' matches 'Thums Up')
        const words = name.split(/[\s\(\)\[\]\-\/,\.]+/).filter(w => w.length > 0);
        if (words.some(w => w.startsWith(q))) return true;

        // 3. Short aliases
        if (q === "sp" && name.includes("sprite")) return true;
        if (q === "th" && name.includes("thums")) return true;
        if (q === "st" && name.includes("sting")) return true;
        if (q === "ma" && name.includes("maaza")) return true;
        if (q === "fr" && name.includes("frooti")) return true;
        if (q === "ap" && name.includes("appy")) return true;
        if (q === "co" && (name.includes("coca") || name.includes("cola"))) return true;
        if (q === "pe" && name.includes("pepsi")) return true;
        if (q === "de" && name.includes("dew")) return true;
        if (q === "li" && name.includes("limca")) return true;
        if (q === "fa" && name.includes("fanta")) return true;
        if (q === "ki" && name.includes("kinley")) return true;
        if (q === "re" && name.includes("red bull")) return true;
        if (q === "je" && name.includes("jeera")) return true;
        if (q === "bo" && name.includes("bovonto")) return true;
        if (q === "pa" && (name.includes("parle") || name.includes("paper"))) return true;

        return false;
    }).slice(0, 15);
}

// 1-Click Batch Loader for Categories (सर्व कोल्ड ड्रिंक्स / किराणा एकदम लोड करा)
function loadMasterCategoryItems(categoryKey) {
    const tbody = document.getElementById("billItemsTableBody");
    if (!tbody) return;

    let itemsToLoad = [];
    let catTitle = "";

    if (categoryKey === "colddrinks") {
        itemsToLoad = MASTER_COLDDRINKS_CATALOG;
        catTitle = "कोल्ड ड्रिंक्स (Sprite, Thums Up, Maaza, इत्यादी)";

        const suppSelect = document.getElementById("billSupplierSelect");
        if (suppSelect && !suppSelect.value) {
            const coldSupp = suppliers.find(s => s.section === "colddrinks");
            if (coldSupp) {
                suppSelect.value = coldSupp.name;
                onSupplierSelected();
            }
        }
    } else if (categoryKey === "kirana") {
        itemsToLoad = MASTER_KIRANA_CATALOG;
        catTitle = "किराणा माल (तेल, डाळी, साखर, तांदूळ, इत्यादी)";

        const suppSelect = document.getElementById("billSupplierSelect");
        if (suppSelect && !suppSelect.value) {
            const kiranaSupp = suppliers.find(s => s.section === "kirana");
            if (kiranaSupp) {
                suppSelect.value = kiranaSupp.name;
                onSupplierSelected();
            }
        }
    }

    if (itemsToLoad.length === 0) return;

    tbody.innerHTML = "";
    itemsToLoad.forEach(it => {
        addBillItemRow(it, false);
    });

    renumberBillItemRows();
    calculateMultiItemBillLive();

    showToast(`🥤 सर्व ${itemsToLoad.length} ${catTitle} एका सेकंदात लोड झाले!`);
}

function loadSupplierItems(showNotification = true) {
    const billSelect = document.getElementById("billSupplierSelect");
    const suppName = billSelect ? billSelect.value.trim() : "";
    if (!suppName) {
        alert("कृपया आधी सप्लायर निवडा!");
        return;
    }

    const items = getSupplierCatalogItems(suppName);
    if (items.length === 0) {
        if (showNotification) {
            alert(`"${suppName}" या सप्लायरसाठी आधीचा माल सापडला नाही. खाली ओळींमध्ये नवीन माल टाईप करा.`);
        }
        return;
    }

    const tbody = document.getElementById("billItemsTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    items.forEach(it => {
        addBillItemRow(it, false);
    });

    renumberBillItemRows();
    calculateMultiItemBillLive();

    if (showNotification) {
        showToast(`📋 "${suppName}" चे ${items.length} माल त्वरित लोड झाले! संख्या व दर तपासा.`);
    }
}

function addBillItemRow(itemData = null, shouldFocus = true) {
    const tbody = document.getElementById("billItemsTableBody");
    if (!tbody) return;

    const rowIdx = tbody.children.length + 1;
    const tr = document.createElement("tr");

    const itemName = itemData ? (itemData.itemName || "") : "";
    const section = itemData ? (itemData.section || "kirana") : "kirana";
    const unit = itemData ? (itemData.unit || "box") : "box";
    const quantity = itemData ? (itemData.quantity || 1) : 1;
    const buyRate = itemData && itemData.buyRate !== undefined ? itemData.buyRate : "";
    const sellRate = itemData && itemData.sellRate !== undefined ? itemData.sellRate : "";

    tr.innerHTML = `
        <td class="item-num-cell">${rowIdx}</td>
        <td class="item-name-cell">
            <input type="text" list="supplierItemsDatalist" class="item-name-input" placeholder="उदा. Sprite किंवा sp किंवा थम्स अप" value="${itemName}" autocomplete="off" required>
            <div class="item-autocomplete-dropdown" style="display:none;"></div>
        </td>
        <td>
            <select class="item-section-select">
                <option value="kirana" ${section === 'kirana' ? 'selected' : ''}>🛒 किराणा</option>
                <option value="colddrinks" ${section === 'colddrinks' ? 'selected' : ''}>🥤 कोल्ड ड्रिंक्स</option>
                <option value="snacks" ${section === 'snacks' ? 'selected' : ''}>🍿 स्नॅक्स</option>
                <option value="dairy" ${section === 'dairy' ? 'selected' : ''}>🥛 दूध/डेअरी</option>
                <option value="masala" ${section === 'masala' ? 'selected' : ''}>🌶️ मसाले</option>
                <option value="cleaning" ${section === 'cleaning' ? 'selected' : ''}>🧹 साफसफाई</option>
                <option value="personal" ${section === 'personal' ? 'selected' : ''}>🧴 पर्सनल केअर</option>
            </select>
        </td>
        <td>
            <select class="item-unit-select">
                <option value="box" ${unit === 'box' ? 'selected' : ''}>बॉक्स</option>
                <option value="crate" ${unit === 'crate' ? 'selected' : ''}>क्रेट</option>
                <option value="carton" ${unit === 'carton' ? 'selected' : ''}>कार्टन</option>
                <option value="bag" ${unit === 'bag' ? 'selected' : ''}>पोते/बॅग</option>
                <option value="piece" ${unit === 'piece' ? 'selected' : ''}>नग</option>
                <option value="kg" ${unit === 'kg' ? 'selected' : ''}>किलो</option>
                <option value="liter" ${unit === 'liter' ? 'selected' : ''}>लिटर</option>
            </select>
        </td>
        <td>
            <input type="number" class="item-qty-input" min="1" step="1" value="${quantity}" placeholder="1" style="text-align:right;">
        </td>
        <td>
            <input type="number" class="item-buy-input" min="0" step="0.01" value="${buyRate}" placeholder="0.00" style="text-align:right;">
        </td>
        <td class="item-calc-col item-calc-cost">₹0.00</td>
        <td>
            <input type="number" class="item-sell-input" min="0" step="0.01" value="${sellRate}" placeholder="0.00" style="text-align:right;">
        </td>
        <td class="item-calc-col item-calc-exp">₹0.00</td>
        <td class="item-calc-col item-calc-prof">₹0.00</td>
        <td style="text-align:center;">
            <button type="button" class="btn-row-del" onclick="removeBillItemRow(this)" title="ही ओळ हटवा">✕</button>
        </td>
    `;

    const nameInput = tr.querySelector(".item-name-input");
    const dropdown = tr.querySelector(".item-autocomplete-dropdown");
    const secSelect = tr.querySelector(".item-section-select");
    const unitSelect = tr.querySelector(".item-unit-select");
    const qtyInput = tr.querySelector(".item-qty-input");
    const buyInput = tr.querySelector(".item-buy-input");
    const sellInput = tr.querySelector(".item-sell-input");

    function renderSuggestions(query) {
        if (!query || query.trim().length === 0) {
            dropdown.style.display = "none";
            dropdown.innerHTML = "";
            return;
        }

        const matches = searchCatalogItems(query);
        if (matches.length === 0) {
            dropdown.style.display = "none";
            return;
        }

        dropdown.innerHTML = "";
        matches.forEach(m => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "autocomplete-item";
            itemDiv.innerHTML = `
                <div class="autocomplete-item-title">${m.itemName}</div>
                <div class="autocomplete-item-sub">
                    ${SECTION_CONFIG[m.section]?.name || m.section} | खरेदी: ₹${m.buyRate} | विक्री: ₹${m.sellRate}
                </div>
            `;

            itemDiv.addEventListener("mousedown", (e) => {
                e.preventDefault();
                selectSuggestion(m);
            });

            dropdown.appendChild(itemDiv);
        });

        dropdown.style.display = "block";
    }

    function selectSuggestion(item) {
        nameInput.value = item.itemName;
        if (item.section) secSelect.value = item.section;
        if (item.unit) unitSelect.value = item.unit;
        if (item.buyRate) buyInput.value = item.buyRate;
        if (item.sellRate) sellInput.value = item.sellRate;
        dropdown.style.display = "none";
        calculateMultiItemBillLive();
        qtyInput.focus();
    }

    // Live typing autocomplete (sp -> Sprite, th -> Thums Up)
    nameInput.addEventListener("input", () => {
        renderSuggestions(nameInput.value);
    });

    nameInput.addEventListener("focus", () => {
        if (nameInput.value.trim().length > 0) {
            renderSuggestions(nameInput.value);
        }
    });

    nameInput.addEventListener("blur", () => {
        setTimeout(() => {
            dropdown.style.display = "none";
        }, 220);
    });

    nameInput.addEventListener("change", () => {
        const typedVal = nameInput.value.trim().toLowerCase();
        const matches = searchCatalogItems(typedVal);
        if (matches.length > 0) {
            const exact = matches.find(m => m.itemName.toLowerCase() === typedVal) || matches[0];
            if (exact && (!buyInput.value || !sellInput.value)) {
                if (exact.section) secSelect.value = exact.section;
                if (exact.unit) unitSelect.value = exact.unit;
                if (exact.buyRate && !buyInput.value) buyInput.value = exact.buyRate;
                if (exact.sellRate && !sellInput.value) sellInput.value = exact.sellRate;
                calculateMultiItemBillLive();
            }
        }
    });

    [qtyInput, buyInput, sellInput].forEach(inp => {
        inp.addEventListener("input", calculateMultiItemBillLive);
    });

    // Pressing Enter in sellInput automatically adds next row and focuses on item name!
    sellInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addBillItemRow(null, true);
        }
    });

    tbody.appendChild(tr);

    if (shouldFocus) {
        setTimeout(() => nameInput.focus(), 60);
    }

    renumberBillItemRows();
    calculateMultiItemBillLive();
}

function removeBillItemRow(btn) {
    const tr = btn.closest("tr");
    if (tr) tr.remove();
    const tbody = document.getElementById("billItemsTableBody");
    if (tbody && tbody.children.length === 0) {
        addBillItemRow(null, false);
    } else {
        renumberBillItemRows();
        calculateMultiItemBillLive();
    }
}

function renumberBillItemRows() {
    const tbody = document.getElementById("billItemsTableBody");
    if (!tbody) return;
    const rows = tbody.querySelectorAll("tr");
    rows.forEach((r, idx) => {
        const numCell = r.querySelector(".item-num-cell");
        if (numCell) numCell.innerText = idx + 1;
    });
}

function addMultipleBlankRows(count = 5) {
    for (let i = 0; i < count; i++) {
        addBillItemRow(null, false);
    }
    const tbody = document.getElementById("billItemsTableBody");
    if (tbody && tbody.lastElementChild) {
        tbody.lastElementChild.querySelector(".item-name-input")?.focus();
    }
}

function clearBillItemRows() {
    if (confirm("सर्व ओळी रिकाम्या करायच्या आहेत का?")) {
        const tbody = document.getElementById("billItemsTableBody");
        if (tbody) tbody.innerHTML = "";
        addMultipleBlankRows(3);
        calculateMultiItemBillLive();
    }
}

function initBulkBillForm() {
    const tbody = document.getElementById("billItemsTableBody");
    if (tbody && tbody.children.length === 0) {
        addMultipleBlankRows(5);
    }
}

function calculateMultiItemBillLive() {
    const tbody = document.getElementById("billItemsTableBody");
    if (!tbody) return;

    const rows = tbody.querySelectorAll("tr");
    let totalItemsCount = 0;
    let grandCost = 0;
    let grandExpected = 0;
    let grandProfit = 0;

    rows.forEach(r => {
        const name = r.querySelector(".item-name-input")?.value?.trim() || "";
        const qty = parseFloat(r.querySelector(".item-qty-input")?.value) || 0;
        const buy = parseFloat(r.querySelector(".item-buy-input")?.value) || 0;
        const sell = parseFloat(r.querySelector(".item-sell-input")?.value) || 0;

        const rowCost = qty * buy;
        const rowExpected = qty * sell;
        const rowProfit = rowExpected - rowCost;

        const costCell = r.querySelector(".item-calc-cost");
        const expCell = r.querySelector(".item-calc-exp");
        const profCell = r.querySelector(".item-calc-prof");

        if (costCell) costCell.innerText = `₹${rowCost.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
        if (expCell) expCell.innerText = `₹${rowExpected.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
        if (profCell) {
            profCell.innerText = `₹${rowProfit.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
            profCell.style.color = rowProfit >= 0 ? "#15803d" : "#dc2626";
        }

        if (name && qty > 0 && buy > 0) {
            totalItemsCount++;
            grandCost += rowCost;
            grandExpected += rowExpected;
            grandProfit += rowProfit;
        }
    });

    const margin = grandExpected > 0 ? ((grandProfit / grandExpected) * 100).toFixed(1) : "0.0";

    const countElem = document.getElementById("bulkTotalItemsCount");
    const costElem = document.getElementById("bulkGrandCost");
    const expElem = document.getElementById("bulkGrandExpected");
    const profElem = document.getElementById("bulkGrandProfit");
    const marginElem = document.getElementById("bulkGrandMargin");

    if (countElem) countElem.innerText = `${totalItemsCount} माल / आयटम्स`;
    if (costElem) costElem.innerText = `₹${grandCost.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    if (expElem) expElem.innerText = `₹${grandExpected.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    if (profElem) profElem.innerText = `₹${grandProfit.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    if (marginElem) {
        marginElem.innerText = `${margin}% नफा`;
        marginElem.className = `margin-pill ${parseFloat(margin) >= 15 ? 'margin-high' : (parseFloat(margin) >= 8 ? 'margin-medium' : 'margin-low')}`;
    }
}

function openAddSupplierModal(id = null) {
    document.getElementById("supplierForm").reset();
    document.getElementById("supplierEditId").value = "";
    document.getElementById("supplierModalTitle").innerText = "➕ नवीन कायमचा सप्लायर जोडा";

    if (id) {
        const s = suppliers.find(item => item.id === id);
        if (s) {
            document.getElementById("supplierEditId").value = s.id;
            document.getElementById("suppName").value = s.name;
            document.getElementById("suppSection").value = s.section;
            document.getElementById("suppPhone").value = s.phone || "";
            document.getElementById("suppAddress").value = s.address || "";
            document.getElementById("supplierModalTitle").innerText = "✏️ सप्लायर माहिती बदला";
        }
    }

    document.getElementById("supplierModal").style.display = "flex";
}

function closeSupplierModal() {
    document.getElementById("supplierModal").style.display = "none";
}

function handleSaveSupplier(e) {
    e.preventDefault();
    const editId = document.getElementById("supplierEditId").value;
    const name = document.getElementById("suppName").value.trim();
    const section = document.getElementById("suppSection").value;
    const phone = document.getElementById("suppPhone").value.trim();
    const address = document.getElementById("suppAddress").value.trim();

    if (!name || !section) {
        alert("कृपया सप्लायरचे नाव आणि विभाग निवडा!");
        return false;
    }

    if (editId) {
        const item = suppliers.find(s => s.id === parseInt(editId, 10));
        if (item) {
            const oldName = item.name;
            item.name = name;
            item.section = section;
            item.phone = phone;
            item.address = address;

            if (oldName !== name) {
                bills.forEach(b => {
                    if (b.supplier === oldName) b.supplier = name;
                });
            }
            showToast(`✅ सप्लायर "${name}" माहिती अपडेट केली!`);
        }
    } else {
        const exists = suppliers.find(s => s.name.toLowerCase() === name.toLowerCase());
        if (exists) {
            alert(`⚠️ "${name}" नावाचा सप्लायर आधीच अस्तित्वात आहे!`);
            return false;
        }
        const newSupplier = {
            id: Date.now(),
            name,
            section,
            phone,
            address
        };
        suppliers.push(newSupplier);
        showToast(`✅ नवीन सप्लायर "${name}" जोडला गेला!`);
    }

    saveData();
    closeSupplierModal();
    populateSupplierDropdowns();
    renderSuppliersSection();
    renderDashboard();
    return false;
}

function deleteSupplier(id) {
    const s = suppliers.find(item => item.id === id);
    if (!s) return;

    const countBills = bills.filter(b => b.supplier === s.name).length;
    let msg = `तुम्हाला सप्लायर "${s.name}" हटवायचा आहे का?`;
    if (countBills > 0) {
        msg += `\n⚠️ या सप्लायरची ${countBills} खरेदी बिले सिस्टीममध्ये नोंदवलेली आहेत!`;
    }

    if (confirm(msg)) {
        suppliers = suppliers.filter(item => item.id !== id);
        saveData();
        populateSupplierDropdowns();
        renderSuppliersSection();
        renderDashboard();
        showToast(`🗑️ सप्लायर "${s.name}" हटवला गेला.`);
    }
}

function filterBillsBySupplier(supplierName) {
    showSection("bills");
    const suppFilter = document.getElementById("billSupplierFilter");
    if (suppFilter) {
        suppFilter.value = supplierName;
        renderBillsList();
    }
}

// Render Suppliers Section
function renderSuppliersSection() {
    const grid = document.getElementById("suppliersGrid");
    const tbody = document.getElementById("suppliersTableBody");
    grid.innerHTML = "";
    tbody.innerHTML = "";

    if (suppliers.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:30px; background:#fff; border-radius:12px; color:#64748b;">
            कोणताही सप्लायर नोंदवलेला नाही. वर 'नवीन सप्लायर जोडा' बटण दाबा.
        </div>`;
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:20px; color:#94a3b8;">सप्लायर यादी रिकामी आहे.</td></tr>`;
        return;
    }

    suppliers.forEach(s => {
        const suppBills = bills.filter(b => b.supplier === s.name);
        const billCount = suppBills.length;
        const totalBuy = suppBills.reduce((acc, b) => acc + (parseFloat(b.totalCost) || 0), 0);
        const totalExpected = suppBills.reduce((acc, b) => acc + (parseFloat(b.totalExpected) || 0), 0);
        const totalProfit = totalExpected - totalBuy;

        // Card rendering
        const card = document.createElement("div");
        card.className = "supplier-card";
        card.innerHTML = `
            <div>
                <div class="supplier-header">
                    <h4>${s.name}</h4>
                    <span class="supplier-tag">${SECTION_CONFIG[s.section]?.name || s.section}</span>
                </div>
                <div class="supplier-details">
                    <div>📱 ${s.phone || 'मोबाईल नोंद नाही'}</div>
                    <div>📍 ${s.address || 'पत्ता नोंद नाही'}</div>
                </div>
                <div class="supplier-stats-row">
                    <span>एकूण बिले: <strong>${billCount}</strong></span>
                    <span>खरेदी: <strong style="color:#dc2626;">₹${totalBuy.toLocaleString('en-IN')}</strong></span>
                </div>
            </div>
            <div class="supplier-actions" style="flex-wrap:wrap;">
                <button class="btn-sm btn-quick btn-green" style="flex:1;" onclick="downloadSupplierReportExcel('${encodeURIComponent(s.name)}')">📊 Excel रिपोर्ट 📥</button>
                <button class="btn-sm btn-quick" onclick="downloadSupplierReportCSV('${encodeURIComponent(s.name)}')">📄 CSV</button>
                <button class="btn-sm btn-quick" onclick="filterBillsBySupplier('${s.name}')">📑 बिले</button>
                <button class="btn-sm btn-edit" onclick="openAddSupplierModal(${s.id})">✏️</button>
                <button class="btn-sm btn-delete" onclick="deleteSupplier(${s.id})">🗑️</button>
            </div>
        `;
        grid.appendChild(card);

        // Table row rendering
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${s.name}</strong></td>
            <td>${SECTION_CONFIG[s.section]?.name || s.section}</td>
            <td>${s.phone || '-'}</td>
            <td>${billCount}</td>
            <td><strong>₹${totalBuy.toLocaleString('en-IN')}</strong></td>
            <td>₹${totalExpected.toLocaleString('en-IN')}</td>
            <td><span class="profit-badge">₹${totalProfit.toLocaleString('en-IN')}</span></td>
            <td>
                <div class="action-btn-group">
                    <button class="btn-sm btn-quick btn-green" onclick="downloadSupplierReportExcel('${encodeURIComponent(s.name)}')">📊 Excel 📥</button>
                    <button class="btn-sm btn-quick" onclick="downloadSupplierReportCSV('${encodeURIComponent(s.name)}')">📄 CSV</button>
                </div>
            </td>
            <td>
                <div class="action-btn-group">
                    <button class="btn-sm btn-edit" onclick="filterBillsBySupplier('${s.name}')">📑</button>
                    <button class="btn-sm btn-edit" onclick="openAddSupplierModal(${s.id})">✏️</button>
                    <button class="btn-sm btn-delete" onclick="deleteSupplier(${s.id})">🗑️</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ==================== PROFESSIONAL EXCEL (.XLS) & CSV GENERATION ====================

function triggerExcelDownload(htmlTableContent, fileName) {
    const excelTemplate = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
        <!--[if gte mso 9]>
        <xml>
            <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                    <x:ExcelWorksheet>
                        <x:Name>Report</x:Name>
                        <x:WorksheetOptions>
                            <x:DisplayGridlines/>
                        </x:WorksheetOptions>
                    </x:ExcelWorksheet>
                </x:ExcelWorksheets>
            </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"/>
        <style>
            body { font-family: 'Calibri', 'Segoe UI', Arial, sans-serif; }
            table { border-collapse: collapse; width: 100%; margin-top: 10px; }
            th { background-color: #1e88e5; color: #ffffff; font-weight: bold; font-size: 13px; text-align: center; border: 1px solid #64748b; padding: 10px 8px; }
            td { border: 1px solid #cbd5e1; padding: 8px 10px; font-size: 12px; color: #1e293b; }
            .title-cell { font-size: 18px; font-weight: bold; color: #0d47a1; text-align: center; border: none; padding: 12px; }
            .sub-cell { font-size: 13px; color: #475569; border: none; padding: 4px; }
            .text-left { text-align: left; }
            .text-right { text-align: right; }
            .text-center { text-align: center; }
            .total-row td { background-color: #fef08a; font-weight: bold; font-size: 13px; border-top: 2px solid #ca8a04; }
            .profit-cell { color: #15803d; font-weight: bold; }
            .cost-cell { color: #b91c1c; }
        </style>
    </head>
    <body>
        ${htmlTableContent}
    </body>
    </html>
    `;

    const blob = new Blob(["\uFEFF" + excelTemplate], { type: "application/vnd.ms-excel;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const dl = document.createElement("a");
    dl.setAttribute("href", url);
    dl.setAttribute("download", fileName);
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
    URL.revokeObjectURL(url);
    showToast(`📊 Excel फाईल "${fileName}" तयार झाली!`);
}

function triggerCsvDownload(csvContent, fileName) {
    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const dl = document.createElement("a");
    dl.setAttribute("href", url);
    dl.setAttribute("download", fileName);
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
    URL.revokeObjectURL(url);
    showToast(`📄 CSV फाईल "${fileName}" डाऊनलोड झाली!`);
}

function escapeCsvField(val) {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
}

// 1. Download Individual Supplier Report in Formatted Excel (.xls)
function downloadSupplierReportExcel(encodedName) {
    const suppName = decodeURIComponent(encodedName);
    const suppBills = bills.filter(b => b.supplier === suppName);

    if (suppBills.length === 0) {
        alert(`"${suppName}" या सप्लायरचे एकही बिल नोंदवलेले नाही!`);
        return;
    }

    const suppObj = suppliers.find(s => s.name === suppName) || {};

    let grandBuy = 0;
    let grandExpected = 0;
    let grandProfit = 0;
    let grandQty = 0;

    let rowsHtml = "";
    suppBills.forEach((b, idx) => {
        const buy = parseFloat(b.totalCost) || 0;
        const exp = parseFloat(b.totalExpected) || 0;
        const prof = parseFloat(b.profit) || 0;
        const qty = parseFloat(b.quantity) || 0;

        grandBuy += buy;
        grandExpected += exp;
        grandProfit += prof;
        grandQty += qty;

        rowsHtml += `
            <tr>
                <td class="text-center">${idx + 1}</td>
                <td class="text-center">${b.date}</td>
                <td class="text-center"><strong>${b.billNumber}</strong></td>
                <td class="text-left">${SECTION_CONFIG[b.section]?.name || b.section}</td>
                <td class="text-left"><strong>${b.itemName}</strong></td>
                <td class="text-center">${b.quantity} ${b.unit}</td>
                <td class="text-right">₹${parseFloat(b.buyRate).toFixed(2)}</td>
                <td class="text-right cost-cell">₹${buy.toFixed(2)}</td>
                <td class="text-right">₹${parseFloat(b.sellRate).toFixed(2)}</td>
                <td class="text-right">₹${exp.toFixed(2)}</td>
                <td class="text-right profit-cell">₹${prof.toFixed(2)}</td>
                <td class="text-center"><strong>${b.margin}%</strong></td>
            </tr>
        `;
    });

    const avgMargin = grandExpected > 0 ? ((grandProfit / grandExpected) * 100).toFixed(1) : "0.0";

    const htmlContent = `
        <table>
            <tr>
                <td colspan="12" class="title-cell">🏪 पूनम किराणा - सप्लायर तपशीलवार खरेदी व नफा रिपोर्ट</td>
            </tr>
            <tr>
                <td colspan="6" class="sub-cell"><strong>सप्लायर नाव:</strong> ${suppName}</td>
                <td colspan="6" class="sub-cell"><strong>विभाग:</strong> ${SECTION_CONFIG[suppObj.section]?.name || suppObj.section || '-'}</td>
            </tr>
            <tr>
                <td colspan="6" class="sub-cell"><strong>मोबाईल:</strong> ${suppObj.phone || '-'}</td>
                <td colspan="6" class="sub-cell"><strong>पत्ता:</strong> ${suppObj.address || '-'}</td>
            </tr>
            <tr>
                <td colspan="12" class="sub-cell"><strong>रिपोर्ट दिनांक:</strong> ${new Date().toLocaleDateString('mr-IN')}</td>
            </tr>
        </table>

        <table>
            <thead>
                <tr>
                    <th>अ.क्र.</th>
                    <th>बिल तारीख</th>
                    <th>बिल नं.</th>
                    <th>विभाग</th>
                    <th>मालाचे नाव</th>
                    <th>बॉक्स/नग</th>
                    <th>खरेदी दर (₹)</th>
                    <th>एकूण खरेदी बिल (₹)</th>
                    <th>विक्री दर (₹)</th>
                    <th>विक्रीवर होणार (₹)</th>
                    <th>अपेक्षित नफा (₹)</th>
                    <th>मार्जिन %</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
                <tr class="total-row">
                    <td colspan="5" class="text-center"><strong>एकूण (GRAND TOTAL)</strong></td>
                    <td class="text-center"><strong>${grandQty}</strong></td>
                    <td class="text-center">-</td>
                    <td class="text-right"><strong>₹${grandBuy.toFixed(2)}</strong></td>
                    <td class="text-center">-</td>
                    <td class="text-right"><strong>₹${grandExpected.toFixed(2)}</strong></td>
                    <td class="text-right profit-cell"><strong>₹${grandProfit.toFixed(2)}</strong></td>
                    <td class="text-center"><strong>${avgMargin}%</strong></td>
                </tr>
            </tbody>
        </table>
    `;

    const cleanFileName = `पूनम_किराणा_${suppName.replace(/[^a-zA-Z0-9\u0900-\u097F]/g, '_')}_रिपोर्ट.xls`;
    triggerExcelDownload(htmlContent, cleanFileName);
}

// 2. Download Clean CSV for individual supplier
function downloadSupplierReportCSV(encodedName) {
    const suppName = decodeURIComponent(encodedName);
    const suppBills = bills.filter(b => b.supplier === suppName);

    if (suppBills.length === 0) {
        alert(`"${suppName}" या सप्लायरचे एकही बिल नोंदवलेले नाही!`);
        return;
    }

    const suppObj = suppliers.find(s => s.name === suppName) || {};

    let csv = `पूनम किराणा - सप्लायर तपशीलवार खरेदी व नफा रिपोर्ट\n`;
    csv += `सप्लायर नाव,${escapeCsvField(suppName)}\n`;
    csv += `विभाग,${escapeCsvField(SECTION_CONFIG[suppObj.section]?.name || suppObj.section || '')}\n`;
    csv += `मोबाईल नंबर,${escapeCsvField(suppObj.phone || '-')}\n`;
    csv += `पत्ता,${escapeCsvField(suppObj.address || '-')}\n`;
    csv += `रिपोर्ट तयार तारीख,${new Date().toLocaleDateString('mr-IN')}\n\n`;

    csv += [
        "अ.क्र.",
        "बिल तारीख",
        "बिल क्रमांक",
        "विभाग (Section)",
        "मालाचे नाव",
        "संख्या (Qty)",
        "एकक (Unit)",
        "प्रति बॉक्स खरेदी दर",
        "एकूण खरेदी बिल",
        "प्रति बॉक्स विक्री दर",
        "विक्रीवर एकूण होणार",
        "अपेक्षित नफा",
        "नफा मार्जिन %"
    ].map(escapeCsvField).join(",") + "\n";

    let grandBuy = 0, grandExpected = 0, grandProfit = 0, grandQty = 0;

    suppBills.forEach((b, idx) => {
        const buy = parseFloat(b.totalCost) || 0;
        const exp = parseFloat(b.totalExpected) || 0;
        const prof = parseFloat(b.profit) || 0;
        const qty = parseFloat(b.quantity) || 0;

        grandBuy += buy;
        grandExpected += exp;
        grandProfit += prof;
        grandQty += qty;

        csv += [
            idx + 1,
            b.date,
            b.billNumber,
            SECTION_CONFIG[b.section]?.name || b.section,
            b.itemName,
            b.quantity,
            b.unit,
            b.buyRate,
            buy.toFixed(2),
            b.sellRate,
            exp.toFixed(2),
            prof.toFixed(2),
            `${b.margin}%`
        ].map(escapeCsvField).join(",") + "\n";
    });

    const avgMargin = grandExpected > 0 ? ((grandProfit / grandExpected) * 100).toFixed(1) : "0.0";

    csv += "\n" + [
        "एकूण (TOTAL)",
        "-",
        "-",
        "-",
        "-",
        grandQty,
        "-",
        "-",
        grandBuy.toFixed(2),
        "-",
        grandExpected.toFixed(2),
        grandProfit.toFixed(2),
        `${avgMargin}%`
    ].map(escapeCsvField).join(",") + "\n";

    const cleanFileName = `पूनम_किराणा_${suppName.replace(/[^a-zA-Z0-9\u0900-\u097F]/g, '_')}_रिपोर्ट.csv`;
    triggerCsvDownload(csv, cleanFileName);
}

// 3. Download All Suppliers Summary in Formatted Excel (.xls)
function downloadAllSuppliersReportExcel() {
    if (suppliers.length === 0) {
        alert("कोणताही सप्लायर नोंदवलेला नाही!");
        return;
    }

    let rowsHtml = "";
    let totalBuyAll = 0, totalExpAll = 0, totalProfAll = 0, totalBillsCount = 0;

    suppliers.forEach((s, idx) => {
        const suppBills = bills.filter(b => b.supplier === s.name);
        const billCount = suppBills.length;
        const buy = suppBills.reduce((acc, b) => acc + (parseFloat(b.totalCost) || 0), 0);
        const exp = suppBills.reduce((acc, b) => acc + (parseFloat(b.totalExpected) || 0), 0);
        const prof = exp - buy;
        const margin = exp > 0 ? ((prof / exp) * 100).toFixed(1) : "0.0";

        totalBuyAll += buy;
        totalExpAll += exp;
        totalProfAll += prof;
        totalBillsCount += billCount;

        rowsHtml += `
            <tr>
                <td class="text-center">${idx + 1}</td>
                <td class="text-left"><strong>${s.name}</strong></td>
                <td class="text-left">${SECTION_CONFIG[s.section]?.name || s.section}</td>
                <td class="text-center">${s.phone || '-'}</td>
                <td class="text-left">${s.address || '-'}</td>
                <td class="text-center">${billCount}</td>
                <td class="text-right cost-cell">₹${buy.toFixed(2)}</td>
                <td class="text-right">₹${exp.toFixed(2)}</td>
                <td class="text-right profit-cell">₹${prof.toFixed(2)}</td>
                <td class="text-center"><strong>${margin}%</strong></td>
            </tr>
        `;
    });

    const overallMargin = totalExpAll > 0 ? ((totalProfAll / totalExpAll) * 100).toFixed(1) : "0.0";

    const htmlContent = `
        <table>
            <tr>
                <td colspan="10" class="title-cell">🏪 पूनम किराणा - सर्व कायमचे सप्लायर्स ताळेबंद रिपोर्ट</td>
            </tr>
            <tr>
                <td colspan="10" class="sub-cell"><strong>तारीख:</strong> ${new Date().toLocaleDateString('mr-IN')} | <strong>एकूण सप्लायर्स:</strong> ${suppliers.length}</td>
            </tr>
        </table>
        <table>
            <thead>
                <tr>
                    <th>अ.क्र.</th>
                    <th>सप्लायरचे नाव</th>
                    <th>मुख्य विभाग</th>
                    <th>मोबाईल नंबर</th>
                    <th>पत्ता</th>
                    <th>एकूण बिले</th>
                    <th>एकूण खरेदी रक्कम (₹)</th>
                    <th>विक्रीवर होणार रक्कम (₹)</th>
                    <th>अपेक्षित नफा (₹)</th>
                    <th>मार्जिन %</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
                <tr class="total-row">
                    <td colspan="5" class="text-center"><strong>एकूण (TOTAL)</strong></td>
                    <td class="text-center"><strong>${totalBillsCount}</strong></td>
                    <td class="text-right"><strong>₹${totalBuyAll.toFixed(2)}</strong></td>
                    <td class="text-right"><strong>₹${totalExpAll.toFixed(2)}</strong></td>
                    <td class="text-right profit-cell"><strong>₹${totalProfAll.toFixed(2)}</strong></td>
                    <td class="text-center"><strong>${overallMargin}%</strong></td>
                </tr>
            </tbody>
        </table>
    `;

    triggerExcelDownload(htmlContent, `पूनम_किराणा_सर्व_सप्लायर्स_ताळेबंद_${new Date().toISOString().slice(0, 10)}.xls`);
}

// 4. Download All Bills in Formatted Excel (.xls)
function downloadBillsExcel() {
    if (bills.length === 0) {
        alert("एकही सप्लायर बिल नोंदवलेले नाही!");
        return;
    }

    let rowsHtml = "";
    let totalBuy = 0, totalExp = 0, totalProf = 0, totalQty = 0;

    bills.forEach((b, idx) => {
        const buy = parseFloat(b.totalCost) || 0;
        const exp = parseFloat(b.totalExpected) || 0;
        const prof = parseFloat(b.profit) || 0;
        const qty = parseFloat(b.quantity) || 0;

        totalBuy += buy;
        totalExp += exp;
        totalProf += prof;
        totalQty += qty;

        rowsHtml += `
            <tr>
                <td class="text-center">${idx + 1}</td>
                <td class="text-center">${b.date}</td>
                <td class="text-left"><strong>${b.supplier}</strong></td>
                <td class="text-center">${b.billNumber}</td>
                <td class="text-left">${SECTION_CONFIG[b.section]?.name || b.section}</td>
                <td class="text-left"><strong>${b.itemName}</strong></td>
                <td class="text-center">${b.quantity} ${b.unit}</td>
                <td class="text-right">₹${parseFloat(b.buyRate).toFixed(2)}</td>
                <td class="text-right cost-cell">₹${buy.toFixed(2)}</td>
                <td class="text-right">₹${parseFloat(b.sellRate).toFixed(2)}</td>
                <td class="text-right">₹${exp.toFixed(2)}</td>
                <td class="text-right profit-cell">₹${prof.toFixed(2)}</td>
                <td class="text-center"><strong>${b.margin}%</strong></td>
            </tr>
        `;
    });

    const avgMargin = totalExp > 0 ? ((totalProf / totalExp) * 100).toFixed(1) : "0.0";

    const htmlContent = `
        <table>
            <tr>
                <td colspan="13" class="title-cell">🏪 पूनम किराणा - सर्व सप्लायर खरेदी बिले यादी</td>
            </tr>
            <tr>
                <td colspan="13" class="sub-cell"><strong>तारीख:</strong> ${new Date().toLocaleDateString('mr-IN')} | <strong>एकूण बिले:</strong> ${bills.length}</td>
            </tr>
        </table>
        <table>
            <thead>
                <tr>
                    <th>अ.क्र.</th>
                    <th>बिल तारीख</th>
                    <th>सप्लायरचे नाव</th>
                    <th>बिल नं.</th>
                    <th>विभाग</th>
                    <th>मालाचे नाव</th>
                    <th>संख्या</th>
                    <th>खरेदी दर (₹)</th>
                    <th>एकूण खरेदी बिल (₹)</th>
                    <th>विक्री दर (₹)</th>
                    <th>विक्रीवर होणार (₹)</th>
                    <th>अपेक्षित नफा (₹)</th>
                    <th>मार्जिन %</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
                <tr class="total-row">
                    <td colspan="6" class="text-center"><strong>एकूण (TOTAL)</strong></td>
                    <td class="text-center"><strong>${totalQty}</strong></td>
                    <td class="text-center">-</td>
                    <td class="text-right"><strong>₹${totalBuy.toFixed(2)}</strong></td>
                    <td class="text-center">-</td>
                    <td class="text-right"><strong>₹${totalExp.toFixed(2)}</strong></td>
                    <td class="text-right profit-cell"><strong>₹${totalProf.toFixed(2)}</strong></td>
                    <td class="text-center"><strong>${avgMargin}%</strong></td>
                </tr>
            </tbody>
        </table>
    `;

    triggerExcelDownload(htmlContent, `पूनम_किराणा_सर्व_बिले_${new Date().toISOString().slice(0, 10)}.xls`);
}

function downloadBillsCSV() {
    if (bills.length === 0) {
        alert("एकही सप्लायर बिल नोंदवलेले नाही!");
        return;
    }

    let csv = `पूनम किराणा - सर्व सप्लायर खरेदी बिले\n\n`;
    csv += [
        "अ.क्र.",
        "बिल तारीख",
        "सप्लायरचे नाव",
        "बिल नंबर",
        "विभाग",
        "मालाचे नाव",
        "संख्या",
        "एकक",
        "खरेदी दर",
        "एकूण खरेदी बिल",
        "विक्री दर",
        "विक्रीवर होणार",
        "अपेक्षित नफा",
        "मार्जिन %"
    ].map(escapeCsvField).join(",") + "\n";

    let totalBuy = 0, totalExp = 0, totalProf = 0;

    bills.forEach((b, idx) => {
        totalBuy += (parseFloat(b.totalCost) || 0);
        totalExp += (parseFloat(b.totalExpected) || 0);
        totalProf += (parseFloat(b.profit) || 0);

        csv += [
            idx + 1,
            b.date,
            b.supplier,
            b.billNumber,
            SECTION_CONFIG[b.section]?.name || b.section,
            b.itemName,
            b.quantity,
            b.unit,
            b.buyRate,
            parseFloat(b.totalCost).toFixed(2),
            b.sellRate,
            parseFloat(b.totalExpected).toFixed(2),
            parseFloat(b.profit).toFixed(2),
            `${b.margin}%`
        ].map(escapeCsvField).join(",") + "\n";
    });

    const avgMargin = totalExp > 0 ? ((totalProf / totalExp) * 100).toFixed(1) : "0.0";

    csv += "\n" + [
        "एकूण",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        totalBuy.toFixed(2),
        "-",
        totalExp.toFixed(2),
        totalProf.toFixed(2),
        `${avgMargin}%`
    ].map(escapeCsvField).join(",") + "\n";

    triggerCsvDownload(csv, `पूनम_किराणा_सर्व_बिले_${new Date().toISOString().slice(0, 10)}.csv`);
}

// 5. Download 1-Year Financial Report in Formatted Excel (.xls)
function downloadYearlyReportExcel() {
    const selectedYear = document.getElementById("reportYearSelect").value;
    
    const monthlyTurnover = new Array(12).fill(0);
    const monthlyCost = new Array(12).fill(0);
    const monthlyProfit = new Array(12).fill(0);

    sales.forEach(s => {
        if (s.date && s.date.startsWith(selectedYear)) {
            const m = parseInt(s.date.split("-")[1], 10) - 1;
            if (m >= 0 && m < 12) {
                monthlyTurnover[m] += (parseFloat(s.saleAmount) || 0);
                monthlyCost[m] += (parseFloat(s.costPrice) || 0);
                monthlyProfit[m] += (parseFloat(s.profit) || 0);
            }
        }
    });

    let sumCost = 0, sumTurnover = 0, sumProfit = 0;
    let rowsHtml = "";

    MONTH_NAMES_MR.forEach((mName, idx) => {
        const turn = monthlyTurnover[idx];
        const cost = monthlyCost[idx];
        const prof = monthlyProfit[idx];
        const marg = turn > 0 ? ((prof / turn) * 100).toFixed(1) : "0.0";

        sumCost += cost;
        sumTurnover += turn;
        sumProfit += prof;

        rowsHtml += `
            <tr>
                <td class="text-left"><strong>${mName}</strong></td>
                <td class="text-right cost-cell">₹${cost.toFixed(2)}</td>
                <td class="text-right"><strong>₹${turn.toFixed(2)}</strong></td>
                <td class="text-right profit-cell">₹${prof.toFixed(2)}</td>
                <td class="text-center"><strong>${marg}%</strong></td>
                <td class="text-center">${turn > 0 ? 'नोंद पूर्ण' : '-'}</td>
            </tr>
        `;
    });

    const yearMargin = sumTurnover > 0 ? ((sumProfit / sumTurnover) * 100).toFixed(1) : "0.0";

    const htmlContent = `
        <table>
            <tr>
                <td colspan="6" class="title-cell">🏪 पूनम किराणा - वार्षिक नफा आणि उलाढाल ताळेबंद (${selectedYear})</td>
            </tr>
            <tr>
                <td colspan="6" class="sub-cell"><strong>आर्थिक वर्ष:</strong> ${selectedYear} | <strong>दिनांक:</strong> ${new Date().toLocaleDateString('mr-IN')}</td>
            </tr>
        </table>
        <table>
            <thead>
                <tr>
                    <th>महिना</th>
                    <th>खरेदी खर्च (Cost ₹)</th>
                    <th>झालेली विक्री / उलाढाल (Turnover ₹)</th>
                    <th>निव्वळ नफा (Profit ₹)</th>
                    <th>नफा मार्जिन %</th>
                    <th>स्थिती</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
                <tr class="total-row">
                    <td class="text-left"><strong>१ वर्षाचा एकूण ताळेबंद (${selectedYear})</strong></td>
                    <td class="text-right"><strong>₹${sumCost.toFixed(2)}</strong></td>
                    <td class="text-right"><strong>₹${sumTurnover.toFixed(2)}</strong></td>
                    <td class="text-right profit-cell"><strong>₹${sumProfit.toFixed(2)}</strong></td>
                    <td class="text-center"><strong>${yearMargin}%</strong></td>
                    <td class="text-center"><strong>वार्षिक एकूण</strong></td>
                </tr>
            </tbody>
        </table>
    `;

    triggerExcelDownload(htmlContent, `पूनम_किराणा_वार्षिक_नफा_ताळेबंद_${selectedYear}.xls`);
}

function downloadYearlyReportCSV() {
    const selectedYear = document.getElementById("reportYearSelect").value;
    
    const monthlyTurnover = new Array(12).fill(0);
    const monthlyCost = new Array(12).fill(0);
    const monthlyProfit = new Array(12).fill(0);

    sales.forEach(s => {
        if (s.date && s.date.startsWith(selectedYear)) {
            const m = parseInt(s.date.split("-")[1], 10) - 1;
            if (m >= 0 && m < 12) {
                monthlyTurnover[m] += (parseFloat(s.saleAmount) || 0);
                monthlyCost[m] += (parseFloat(s.costPrice) || 0);
                monthlyProfit[m] += (parseFloat(s.profit) || 0);
            }
        }
    });

    let csv = `पूनम किराणा - वार्षिक नफा आणि उलाढाल रिपोर्ट (${selectedYear})\n\n`;
    csv += [
        "महिना",
        "खरेदी खर्च",
        "झालेली विक्री / उलाढाल",
        "निव्वळ नफा",
        "नफा मार्जिन %"
    ].map(escapeCsvField).join(",") + "\n";

    let sumCost = 0, sumTurnover = 0, sumProfit = 0;

    MONTH_NAMES_MR.forEach((mName, idx) => {
        const turn = monthlyTurnover[idx];
        const cost = monthlyCost[idx];
        const prof = monthlyProfit[idx];
        const marg = turn > 0 ? ((prof / turn) * 100).toFixed(1) : "0.0";

        sumCost += cost;
        sumTurnover += turn;
        sumProfit += prof;

        csv += [
            mName,
            cost.toFixed(2),
            turn.toFixed(2),
            prof.toFixed(2),
            `${marg}%`
        ].map(escapeCsvField).join(",") + "\n";
    });

    const yearMargin = sumTurnover > 0 ? ((sumProfit / sumTurnover) * 100).toFixed(1) : "0.0";

    csv += "\n" + [
        `१ वर्षाचा एकूण ताळेबंद (${selectedYear})`,
        sumCost.toFixed(2),
        sumTurnover.toFixed(2),
        sumProfit.toFixed(2),
        `${yearMargin}%`
    ].map(escapeCsvField).join(",") + "\n";

    triggerCsvDownload(csv, `पूनम_किराणा_वार्षिक_नफा_रिपोर्ट_${selectedYear}.csv`);
}

// ==================== LIVE CALCULATIONS ====================
function calculateBillLive() {
    const qty = parseFloat(document.getElementById("billQuantity").value) || 0;
    const buyRate = parseFloat(document.getElementById("billBuyRate").value) || 0;
    const sellRate = parseFloat(document.getElementById("billSellRate").value) || 0;

    const totalCost = qty * buyRate;
    const totalExpected = qty * sellRate;
    const profit = totalExpected - totalCost;
    const margin = totalExpected > 0 ? ((profit / totalExpected) * 100).toFixed(1) : "0.0";

    document.getElementById("calcTotalCost").innerText = `₹${totalCost.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    document.getElementById("calcTotalExpected").innerText = `₹${totalExpected.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    document.getElementById("calcTotalProfit").innerText = `₹${profit.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    
    const pill = document.getElementById("calcMarginPill");
    pill.innerText = `${margin}% नफा`;
    pill.className = `margin-pill ${parseFloat(margin) >= 15 ? 'margin-high' : (parseFloat(margin) >= 8 ? 'margin-medium' : 'margin-low')}`;
}

function calculateSaleLive() {
    const cost = parseFloat(document.getElementById("saleCostPrice").value) || 0;
    const sale = parseFloat(document.getElementById("saleAmount").value) || 0;
    const profit = sale - cost;
    const margin = sale > 0 ? ((profit / sale) * 100).toFixed(1) : "0.0";

    document.getElementById("saleLiveProfit").innerText = `₹${profit.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    const pill = document.getElementById("saleLiveMargin");
    pill.innerText = `${margin}%`;
    pill.className = `margin-pill ${parseFloat(margin) >= 15 ? 'margin-high' : 'margin-medium'}`;
}

// ==================== SAVE COMPLETE / BULK SUPPLIER BILL (४०-५० माल एकाच बिलात) ====================
function handleSaveBulkBill(e) {
    e.preventDefault();
    const date = document.getElementById("billDate").value;
    const supplier = document.getElementById("billSupplierSelect").value.trim();
    const billNumber = document.getElementById("billNumber").value.trim();

    if (!date || !supplier || !billNumber) {
        alert("कृपया बिल तारीख, सप्लायर आणि बिल क्रमांक भरा!");
        return false;
    }

    const tbody = document.getElementById("billItemsTableBody");
    const rows = tbody.querySelectorAll("tr");
    const validItems = [];

    rows.forEach(r => {
        const itemName = r.querySelector(".item-name-input")?.value?.trim();
        const section = r.querySelector(".item-section-select")?.value || "kirana";
        const unit = r.querySelector(".item-unit-select")?.value || "box";
        const quantity = parseFloat(r.querySelector(".item-qty-input")?.value) || 0;
        const buyRate = parseFloat(r.querySelector(".item-buy-input")?.value) || 0;
        const sellRate = parseFloat(r.querySelector(".item-sell-input")?.value) || 0;

        if (itemName && quantity > 0 && buyRate > 0) {
            const totalCost = quantity * buyRate;
            const totalExpected = quantity * sellRate;
            const profit = totalExpected - totalCost;
            const margin = totalExpected > 0 ? ((profit / totalExpected) * 100).toFixed(1) : "0.0";

            validItems.push({
                itemName,
                section,
                unit,
                quantity,
                buyRate,
                totalCost,
                sellRate,
                totalExpected,
                profit,
                margin
            });
        }
    });

    if (validItems.length === 0) {
        alert("कृपया किमान एका मालाचे नाव, संख्या आणि खरेदी दर भरा!");
        return false;
    }

    // Instant button feedback so the user knows save started
    const submitBtn = e.target.querySelector("button[type='submit']");
    const origText = submitBtn ? submitBtn.innerText : "💾 सेव्ह करा";
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "⏳ बिल सेव्ह होत आहे...";
    }

    // Run asynchronously to allow UI thread to breathe and save in under 10ms
    setTimeout(() => {
        const invoiceId = `INV-${Date.now()}`;
        const invoicePhoto = currentBillPhotoBase64 || null;

        // ⚡ SPEED FIX: Attach photo ONLY to first item (idx === 0)
        // Eliminates 5MB bloating per bill! Saves in milliseconds!
        const newBillEntries = validItems.map((item, idx) => ({
            id: Date.now() + idx,
            invoiceId,
            billNumber,
            date,
            supplier,
            section: item.section,
            itemName: item.itemName,
            quantity: item.quantity,
            unit: item.unit,
            buyRate: item.buyRate,
            totalCost: item.totalCost,
            sellRate: item.sellRate,
            totalExpected: item.totalExpected,
            profit: item.profit,
            margin: item.margin,
            photo: (idx === 0 ? invoicePhoto : null)
        }));

        bills.unshift(...newBillEntries);

        // Save items to supplier catalog for future quick load
        if (!supplierCatalog[supplier]) {
            supplierCatalog[supplier] = [];
        }
        validItems.forEach(vi => {
            const existingIdx = supplierCatalog[supplier].findIndex(c => c.itemName.toLowerCase() === vi.itemName.toLowerCase());
            const catEntry = {
                itemName: vi.itemName,
                section: vi.section,
                unit: vi.unit,
                buyRate: vi.buyRate,
                sellRate: vi.sellRate,
                quantity: vi.quantity
            };
            if (existingIdx >= 0) {
                supplierCatalog[supplier][existingIdx] = catEntry;
            } else {
                supplierCatalog[supplier].push(catEntry);
            }
        });

        saveData();

        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = origText;
        }

        const grandTotalCost = validItems.reduce((acc, it) => acc + it.totalCost, 0);
        showToast(`✅ "${supplier}" चे संपूर्ण बिल (${validItems.length} माल, एकूण ₹${grandTotalCost.toLocaleString('en-IN')}) एका सेकंदात सेव्ह झाले!`);

        document.getElementById("bulkBillForm").reset();
        removeBillPhotoPreview();
        tbody.innerHTML = "";
        addMultipleBlankRows(5);
        setTodayDefaults();
        calculateMultiItemBillLive();

        showSection("bills");
    }, 20);

    return false;
}

// Fallback for legacy calls
function handleAddBill(e) {
    return handleSaveBulkBill(e);
}

// ==================== RECORD DAILY SALE ====================
function handleRecordSale(e) {
    e.preventDefault();
    const date = document.getElementById("saleDate").value;
    const section = document.getElementById("saleSection").value;
    const note = document.getElementById("saleNote").value.trim() || `${SECTION_CONFIG[section].name} विक्री`;
    const costPrice = parseFloat(document.getElementById("saleCostPrice").value) || 0;
    const saleAmount = parseFloat(document.getElementById("saleAmount").value) || 0;

    if (!date || saleAmount <= 0) {
        alert("कृपया विक्री तारीख आणि रक्कम टाका!");
        return false;
    }

    const profit = saleAmount - costPrice;
    const margin = saleAmount > 0 ? ((profit / saleAmount) * 100).toFixed(1) : "0.0";

    const newSale = {
        id: Date.now(),
        date,
        section,
        note,
        costPrice,
        saleAmount,
        profit,
        margin
    };

    sales.unshift(newSale);
    saveData();
    showToast(`🛒 विक्री नोंद (₹${saleAmount.toLocaleString('en-IN')}) सेव्ह झाली!`);

    document.getElementById("saleForm").reset();
    setTodayDefaults();
    calculateSaleLive();
    renderSalesList();
    return false;
}

// ==================== DASHBOARD RENDERING ====================
function renderDashboard() {
    const totalPurchase = bills.reduce((sum, b) => sum + (parseFloat(b.totalCost) || 0), 0);
    const totalSales = sales.reduce((sum, s) => sum + (parseFloat(s.saleAmount) || 0), 0);
    const totalCostOfSales = sales.reduce((sum, s) => sum + (parseFloat(s.costPrice) || 0), 0);
    const realizedProfit = totalSales - totalCostOfSales;
    const netMargin = totalSales > 0 ? ((realizedProfit / totalSales) * 100).toFixed(1) : "0.0";

    document.getElementById("dashTotalPurchase").innerText = `₹${totalPurchase.toLocaleString('en-IN')}`;
    document.getElementById("dashTotalBills").innerText = `${bills.length} सप्लायर बिले`;

    document.getElementById("dashTotalSales").innerText = `₹${totalSales.toLocaleString('en-IN')}`;
    document.getElementById("dashSalesCount").innerText = `${sales.length} विक्री नोंदी`;

    document.getElementById("dashTotalProfit").innerText = `₹${realizedProfit.toLocaleString('en-IN')}`;
    document.getElementById("dashNetMargin").innerText = `${netMargin}% प्रत्यक्ष मार्जिन`;

    document.getElementById("dashSuppliersCount").innerText = `${suppliers.length} सप्लायर्स`;

    // Section Summary Table
    const secSummaryBody = document.getElementById("dashSectionSummaryBody");
    secSummaryBody.innerHTML = "";

    Object.keys(SECTION_CONFIG).forEach(key => {
        const secBills = bills.filter(b => b.section === key);
        const secSales = sales.filter(s => s.section === key);

        const totalQty = secBills.reduce((s, b) => s + (parseFloat(b.quantity) || 0), 0);
        const totalBuy = secBills.reduce((s, b) => s + (parseFloat(b.totalCost) || 0), 0);
        const secSaleTurnover = secSales.reduce((s, sl) => s + (parseFloat(sl.saleAmount) || 0), 0);
        const secCost = secSales.reduce((s, sl) => s + (parseFloat(sl.costPrice) || 0), 0);
        const secProfit = secSaleTurnover - secCost;
        const secMargin = secSaleTurnover > 0 ? ((secProfit / secSaleTurnover) * 100).toFixed(1) : "0.0";

        const tr = document.createElement("tr");
        tr.style.cursor = "pointer";
        tr.onclick = () => showCategory(key);
        tr.innerHTML = `
            <td><strong>${SECTION_CONFIG[key].name}</strong></td>
            <td>${totalQty}</td>
            <td>₹${totalBuy.toLocaleString('en-IN')}</td>
            <td>₹${secSaleTurnover.toLocaleString('en-IN')}</td>
            <td><span class="profit-badge ${secProfit < 0 ? 'profit-negative' : ''}">₹${secProfit.toLocaleString('en-IN')}</span></td>
            <td><span class="margin-pill ${parseFloat(secMargin) >= 15 ? 'margin-high' : 'margin-medium'}">${secMargin}%</span></td>
        `;
        secSummaryBody.appendChild(tr);
    });

    // Recent 5 Bills Preview
    const recentBillsBody = document.getElementById("dashRecentBillsBody");
    recentBillsBody.innerHTML = "";
    bills.slice(0, 5).forEach(b => {
        const photoBtn = b.photo 
            ? `<button class="btn-photo-view" onclick="viewBillPhoto(${b.id})">🖼️ फोटो</button>`
            : `<span class="no-photo-badge">-</span>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${b.date}</td>
            <td><strong>${b.supplier}</strong></td>
            <td><small>${b.billNumber}</small></td>
            <td>${SECTION_CONFIG[b.section]?.name || b.section}</td>
            <td>${b.itemName}</td>
            <td>${b.quantity} ${b.unit}</td>
            <td>₹${b.totalCost.toLocaleString('en-IN')}</td>
            <td>₹${b.totalExpected.toLocaleString('en-IN')}</td>
            <td><span class="profit-badge">₹${b.profit.toLocaleString('en-IN')}</span></td>
            <td>${photoBtn}</td>
        `;
        recentBillsBody.appendChild(tr);
    });
}

// ==================== BILLS LIST & INVOICE MANAGEMENT ====================
function setBillsViewMode(mode) {
    billsViewMode = mode;
    const btnInvoices = document.getElementById("viewToggleInvoices");
    const btnItems = document.getElementById("viewToggleItems");
    const wrapInvoices = document.getElementById("invoicesViewWrapper");
    const wrapItems = document.getElementById("itemsViewWrapper");

    if (mode === "invoices") {
        if (btnInvoices) btnInvoices.classList.add("active");
        if (btnItems) btnItems.classList.remove("active");
        if (wrapInvoices) wrapInvoices.style.display = "block";
        if (wrapItems) wrapItems.style.display = "none";
    } else {
        if (btnInvoices) btnInvoices.classList.remove("active");
        if (btnItems) btnItems.classList.add("active");
        if (wrapInvoices) wrapInvoices.style.display = "none";
        if (wrapItems) wrapItems.style.display = "block";
    }
    renderBillsList();
}

function getInvoiceKey(b) {
    return b.invoiceId || `${b.billNumber}___${b.supplier}___${b.date}`;
}

function renderBillsList() {
    const search = (document.getElementById("billSearchInput")?.value || "").toLowerCase().trim();
    const filterSec = document.getElementById("billSectionFilter")?.value || "all";
    const filterSupp = document.getElementById("billSupplierFilter")?.value || "all";

    const filtered = bills.filter(b => {
        const matchSec = filterSec === "all" || b.section === filterSec;
        const matchSupp = filterSupp === "all" || b.supplier === filterSupp;
        const matchSearch = (b.supplier || "").toLowerCase().includes(search) ||
                            (b.itemName || "").toLowerCase().includes(search) ||
                            (b.billNumber || "").toLowerCase().includes(search);
        return matchSec && matchSupp && matchSearch;
    });

    if (billsViewMode === "invoices") {
        renderInvoicesGroupedTable(filtered);
    } else {
        renderLineItemsTable(filtered);
    }
}

function renderInvoicesGroupedTable(filtered) {
    const tbody = document.getElementById("invoicesTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    // Group items by invoiceKey
    const groups = new Map();
    filtered.forEach(b => {
        const key = getInvoiceKey(b);
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(b);
    });

    if (groups.size === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:24px; color:#94a3b8;">कोणतेही सप्लायर बिल सापडले नाही. वर '➕ नवीन बिल नोंदवा' दाबा.</td></tr>`;
        return;
    }

    groups.forEach((items, invKey) => {
        const first = items[0];
        const totalItemsCount = items.length;
        const totalCost = items.reduce((sum, it) => sum + (parseFloat(it.totalCost) || 0), 0);
        const totalExpected = items.reduce((sum, it) => sum + (parseFloat(it.totalExpected) || 0), 0);
        const totalProfit = totalExpected - totalCost;
        const margin = totalExpected > 0 ? ((totalProfit / totalExpected) * 100).toFixed(1) : "0.0";

        // Unique sections
        const secSet = new Set(items.map(it => it.section));
        const secBadges = Array.from(secSet).map(s => `<span class="supplier-tag" style="margin-right:3px;">${SECTION_CONFIG[s]?.name?.split(" ")[1] || s}</span>`).join("");

        const invoicePhoto = items.find(it => it.photo)?.photo || null;
        const photoBtn = invoicePhoto
            ? `<button class="btn-photo-view" onclick="viewPhotoByUrl('${invoicePhoto}', '🖼️ बिल फोटो — ${first.supplier} (${first.billNumber})', 'तारीख: ${first.date} | एकूण माल: ${totalItemsCount} आयटम्स | एकूण खरेदी: ₹${totalCost.toLocaleString('en-IN')}')">📷 फोटो</button>`
            : `<span class="no-photo-badge">फोटो नाही</span>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${first.date}</td>
            <td><strong>${first.supplier}</strong></td>
            <td><strong style="color:#0284c7;">${first.billNumber}</strong></td>
            <td><span class="badge-item-count">${totalItemsCount} माल / आयटम्स</span></td>
            <td>${secBadges}</td>
            <td style="color:#dc2626; font-weight:700;">₹${totalCost.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            <td style="color:#0284c7; font-weight:700;">₹${totalExpected.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            <td><span class="profit-badge">₹${totalProfit.toLocaleString('en-IN', {minimumFractionDigits: 2})} (${margin}%)</span></td>
            <td>${photoBtn}</td>
            <td>
                <div class="action-btn-group" style="flex-wrap:wrap;">
                    <button class="btn-sm btn-quick" onclick="openInvoiceDetailsModal('${encodeURIComponent(invKey)}')">🔍 सर्व माल पहा (${totalItemsCount})</button>
                    <button class="btn-sm btn-quick btn-green" onclick="downloadSingleInvoiceExcel('${encodeURIComponent(invKey)}')">📊 Excel</button>
                    <button class="btn-sm btn-delete" onclick="deleteCompleteInvoice('${encodeURIComponent(invKey)}')" title="हे संपूर्ण बिल हटवा">🗑️</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderLineItemsTable(filtered) {
    const tbody = document.getElementById("allBillsBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="13" style="text-align:center; padding:20px; color:#94a3b8;">कोणतेही सप्लायर बिल सापडले नाही.</td></tr>`;
        return;
    }

    filtered.forEach(b => {
        const itemPhoto = b.photo || bills.find(it => getInvoiceKey(it) === getInvoiceKey(b) && it.photo)?.photo;
        const photoBtn = itemPhoto 
            ? `<button class="btn-photo-view" onclick="viewPhotoByUrl('${itemPhoto}', '🖼️ बिल फोटो — ${b.supplier} (${b.billNumber})', 'तारीख: ${b.date} | माल: ${b.itemName}')">🖼️ फोटो पहा</button>`
            : `<span class="no-photo-badge">फोटो नाही</span>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${b.date}</td>
            <td><strong>${b.supplier}</strong></td>
            <td><small>${b.billNumber}</small></td>
            <td>${SECTION_CONFIG[b.section]?.name || b.section}</td>
            <td><strong>${b.itemName}</strong></td>
            <td>${b.quantity} ${b.unit}</td>
            <td>₹${b.buyRate}</td>
            <td style="color:#dc2626; font-weight:600;">₹${parseFloat(b.totalCost).toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            <td>₹${b.sellRate}</td>
            <td style="color:#0284c7; font-weight:600;">₹${parseFloat(b.totalExpected).toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            <td><span class="profit-badge">₹${parseFloat(b.profit).toLocaleString('en-IN', {minimumFractionDigits: 2})} (${b.margin}%)</span></td>
            <td>${photoBtn}</td>
            <td>
                <button class="btn-sm btn-delete" onclick="deleteBill(${b.id})">🗑️ हटवा</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openInvoiceDetailsModal(encodedKey) {
    const invKey = decodeURIComponent(encodedKey);
    const invoiceItems = bills.filter(b => getInvoiceKey(b) === invKey);

    if (invoiceItems.length === 0) {
        alert("या बिलातील नोंदी सापडल्या नाहीत!");
        return;
    }

    const first = invoiceItems[0];
    const totalCost = invoiceItems.reduce((acc, it) => acc + (parseFloat(it.totalCost) || 0), 0);
    const totalExpected = invoiceItems.reduce((acc, it) => acc + (parseFloat(it.totalExpected) || 0), 0);
    const totalProfit = totalExpected - totalCost;
    const margin = totalExpected > 0 ? ((totalProfit / totalExpected) * 100).toFixed(1) : "0.0";

    document.getElementById("invoiceModalTitle").innerText = `📑 सप्लायर बिल — ${first.billNumber}`;
    document.getElementById("invoiceModalSubtitle").innerText = `🏢 सप्लायर: ${first.supplier} | 📅 तारीख: ${first.date} | एकूण माल: ${invoiceItems.length} प्रकार`;

    document.getElementById("invoiceModalBanner").innerHTML = `
        <div class="calc-box">
            <span class="calc-label">एकूण आयटम्स संख्या:</span>
            <span class="calc-amount" style="color:#0f172a;">${invoiceItems.length} माल</span>
        </div>
        <div class="calc-box">
            <span class="calc-label">एकूण खरेदी बिल:</span>
            <span class="calc-amount red">₹${totalCost.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
        </div>
        <div class="calc-box">
            <span class="calc-label">विक्रीवर एकूण होणार:</span>
            <span class="calc-amount blue">₹${totalExpected.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
        </div>
        <div class="calc-box">
            <span class="calc-label">एकूण अपेक्षित नफा:</span>
            <span class="calc-amount green">₹${totalProfit.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
            <span class="margin-pill margin-high" style="margin-left:8px;">${margin}% नफा</span>
        </div>
    `;

    const tbody = document.getElementById("invoiceModalItemsBody");
    tbody.innerHTML = "";

    invoiceItems.forEach((b, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="text-align:center;">${idx + 1}</td>
            <td><strong>${b.itemName}</strong></td>
            <td>${SECTION_CONFIG[b.section]?.name || b.section}</td>
            <td style="text-align:center;">${b.quantity} ${b.unit}</td>
            <td style="text-align:right;">₹${parseFloat(b.buyRate).toFixed(2)}</td>
            <td style="text-align:right; color:#dc2626; font-weight:600;">₹${parseFloat(b.totalCost).toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            <td style="text-align:right;">₹${parseFloat(b.sellRate).toFixed(2)}</td>
            <td style="text-align:right; color:#0284c7; font-weight:600;">₹${parseFloat(b.totalExpected).toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            <td style="text-align:right; color:#15803d; font-weight:600;">₹${parseFloat(b.profit).toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            <td style="text-align:center;"><strong>${b.margin}%</strong></td>
        `;
        tbody.appendChild(tr);
    });

    const photoBtnContainer = document.getElementById("invoiceModalPhotoBtn");
    const invoicePhoto = invoiceItems.find(it => it.photo)?.photo || null;
    if (invoicePhoto) {
        photoBtnContainer.innerHTML = `<button class="btn-quick btn-sky" onclick="viewPhotoByUrl('${invoicePhoto}', '🖼️ बिल फोटो — ${first.supplier} (${first.billNumber})', 'तारीख: ${first.date} | एकूण खरेदी: ₹${totalCost.toLocaleString('en-IN')}')">📷 बिलाचा मूळ फोटो पहा</button>`;
    } else {
        photoBtnContainer.innerHTML = `<span style="font-size:12.5px; color:#94a3b8;">📷 या बिलाचा फोटो जोडलेला नाही</span>`;
    }

    const excelBtn = document.getElementById("invoiceModalExcelBtn");
    excelBtn.onclick = () => downloadSingleInvoiceExcel(encodedKey);

    document.getElementById("invoiceDetailsModal").style.display = "flex";
}

function closeInvoiceModal() {
    document.getElementById("invoiceDetailsModal").style.display = "none";
}

function deleteCompleteInvoice(encodedKey) {
    const invKey = decodeURIComponent(encodedKey);
    const invoiceItems = bills.filter(b => getInvoiceKey(b) === invKey);

    if (invoiceItems.length === 0) return;
    const first = invoiceItems[0];

    if (confirm(`तुम्हाला सप्लायर "${first.supplier}" चे बिल (${first.billNumber}) मधील सर्व ${invoiceItems.length} माल नोंदी हटवायच्या आहेत का?`)) {
        bills = bills.filter(b => getInvoiceKey(b) !== invKey);
        saveData();
        renderBillsList();
        renderDashboard();
        showToast("🗑️ संपूर्ण बिल आणि सर्व आयटम्स हटवले गेले.");
    }
}

function downloadSingleInvoiceExcel(encodedKey) {
    const invKey = decodeURIComponent(encodedKey);
    const invoiceItems = bills.filter(b => getInvoiceKey(b) === invKey);

    if (invoiceItems.length === 0) {
        alert("बिलाचा तपशील सापडला नाही!");
        return;
    }

    const first = invoiceItems[0];
    let grandBuy = 0, grandExpected = 0, grandProfit = 0, grandQty = 0;

    let rowsHtml = "";
    invoiceItems.forEach((b, idx) => {
        const buy = parseFloat(b.totalCost) || 0;
        const exp = parseFloat(b.totalExpected) || 0;
        const prof = parseFloat(b.profit) || 0;
        const qty = parseFloat(b.quantity) || 0;

        grandBuy += buy;
        grandExpected += exp;
        grandProfit += prof;
        grandQty += qty;

        rowsHtml += `
            <tr>
                <td class="text-center">${idx + 1}</td>
                <td class="text-left"><strong>${b.itemName}</strong></td>
                <td class="text-left">${SECTION_CONFIG[b.section]?.name || b.section}</td>
                <td class="text-center">${b.quantity} ${b.unit}</td>
                <td class="text-right">₹${parseFloat(b.buyRate).toFixed(2)}</td>
                <td class="text-right cost-cell">₹${buy.toFixed(2)}</td>
                <td class="text-right">₹${parseFloat(b.sellRate).toFixed(2)}</td>
                <td class="text-right">₹${exp.toFixed(2)}</td>
                <td class="text-right profit-cell">₹${prof.toFixed(2)}</td>
                <td class="text-center"><strong>${b.margin}%</strong></td>
            </tr>
        `;
    });

    const avgMargin = grandExpected > 0 ? ((grandProfit / grandExpected) * 100).toFixed(1) : "0.0";

    const htmlContent = `
        <table>
            <tr>
                <td colspan="10" class="title-cell">🏪 पूनम किराणा - सप्लायर बिल तपशील (${first.billNumber})</td>
            </tr>
            <tr>
                <td colspan="5" class="sub-cell"><strong>सप्लायर नाव:</strong> ${first.supplier}</td>
                <td colspan="5" class="sub-cell"><strong>बिल तारीख:</strong> ${first.date}</td>
            </tr>
            <tr>
                <td colspan="5" class="sub-cell"><strong>बिल क्रमांक:</strong> ${first.billNumber}</td>
                <td colspan="5" class="sub-cell"><strong>एकूण माल संख्या:</strong> ${invoiceItems.length} आयटम्स</td>
            </tr>
        </table>
        <table>
            <thead>
                <tr>
                    <th>अ.क्र.</th>
                    <th>मालाचे नाव</th>
                    <th>विभाग</th>
                    <th>संख्या / एकक</th>
                    <th>खरेदी दर (₹)</th>
                    <th>एकूण खरेदी बिल (₹)</th>
                    <th>विक्री दर (₹)</th>
                    <th>विक्रीवर होणार (₹)</th>
                    <th>अपेक्षित नफा (₹)</th>
                    <th>मार्जिन %</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
                <tr class="total-row">
                    <td colspan="3" class="text-center"><strong>एकूण (GRAND TOTAL)</strong></td>
                    <td class="text-center"><strong>${grandQty}</strong></td>
                    <td class="text-center">-</td>
                    <td class="text-right"><strong>₹${grandBuy.toFixed(2)}</strong></td>
                    <td class="text-center">-</td>
                    <td class="text-right"><strong>₹${grandExpected.toFixed(2)}</strong></td>
                    <td class="text-right profit-cell"><strong>₹${grandProfit.toFixed(2)}</strong></td>
                    <td class="text-center"><strong>${avgMargin}%</strong></td>
                </tr>
            </tbody>
        </table>
    `;

    triggerExcelDownload(htmlContent, `पूनम_किराणा_बिल_${first.billNumber}_${first.supplier}.xls`);
}

function deleteBill(id) {
    const b = bills.find(item => item.id === id);
    if (!b) return;
    if (confirm(`तुम्हाला "${b.itemName}" चे बिल (${b.billNumber}) हटवायचे आहे का?`)) {
        bills = bills.filter(item => item.id !== id);
        saveData();
        showToast("बिल हटवले गेले.");
        renderBillsList();
        renderDashboard();
    }
}

// ==================== SALES LIST RENDERING ====================
function renderSalesList() {
    const tbody = document.getElementById("salesTableBody");
    tbody.innerHTML = "";

    if (sales.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:20px; color:#94a3b8;">अद्याप कोणतीही विक्री नोंदवलेली नाही.</td></tr>`;
        return;
    }

    sales.slice(0, 20).forEach(s => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${s.date}</td>
            <td>${SECTION_CONFIG[s.section]?.name || s.section}</td>
            <td>${s.note}</td>
            <td>₹${s.costPrice.toLocaleString('en-IN')}</td>
            <td><strong>₹${s.saleAmount.toLocaleString('en-IN')}</strong></td>
            <td><span class="profit-badge ${s.profit < 0 ? 'profit-negative' : ''}">₹${s.profit.toLocaleString('en-IN')}</span></td>
            <td><span class="margin-pill ${parseFloat(s.margin) >= 15 ? 'margin-high' : 'margin-medium'}">${s.margin}%</span></td>
            <td>
                <button class="btn-sm btn-delete" onclick="deleteSale(${s.id})">🗑️ हटवा</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteSale(id) {
    if (confirm("ही विक्री नोंद हटवायची आहे का?")) {
        sales = sales.filter(s => s.id !== id);
        saveData();
        renderSalesList();
        renderDashboard();
    }
}

// ==================== CATEGORY DETAIL VIEW ====================
function renderCategoryDetail(catKey) {
    const config = SECTION_CONFIG[catKey];
    if (!config) return;

    document.getElementById("catViewTitle").innerText = `${config.name} — सप्लायर माल तपशील`;

    const catBills = bills.filter(b => b.section === catKey);

    const totalQty = catBills.reduce((s, b) => s + (parseFloat(b.quantity) || 0), 0);
    const totalBuy = catBills.reduce((s, b) => s + (parseFloat(b.totalCost) || 0), 0);
    const totalSell = catBills.reduce((s, b) => s + (parseFloat(b.totalExpected) || 0), 0);
    const totalProfit = totalSell - totalBuy;

    document.getElementById("catTotalQty").innerText = totalQty;
    document.getElementById("catTotalBuy").innerText = `₹${totalBuy.toLocaleString('en-IN')}`;
    document.getElementById("catTotalSell").innerText = `₹${totalSell.toLocaleString('en-IN')}`;
    document.getElementById("catTotalProfit").innerText = `₹${totalProfit.toLocaleString('en-IN')}`;

    const tbody = document.getElementById("catViewTableBody");
    tbody.innerHTML = "";

    if (catBills.length === 0) {
        tbody.innerHTML = `<tr><td colspan="11" style="text-align:center; padding:20px; color:#94a3b8;">या सेक्शनमध्ये अजून कोणतेही सप्लायर बिल जोडलेले नाही.</td></tr>`;
        return;
    }

    catBills.forEach(b => {
        const photoBtn = b.photo 
            ? `<button class="btn-photo-view" onclick="viewBillPhoto(${b.id})">🖼️ फोटो</button>`
            : `<span class="no-photo-badge">-</span>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${b.date}</td>
            <td><strong>${b.supplier}</strong></td>
            <td><small>${b.billNumber}</small></td>
            <td>${b.itemName}</td>
            <td>${b.quantity} ${b.unit}</td>
            <td>₹${b.totalCost.toLocaleString('en-IN')} <small>(@₹${b.buyRate})</small></td>
            <td>₹${b.totalExpected.toLocaleString('en-IN')} <small>(@₹${b.sellRate})</small></td>
            <td><span class="profit-badge">₹${b.profit.toLocaleString('en-IN')}</span></td>
            <td><span class="margin-pill ${parseFloat(b.margin) >= 15 ? 'margin-high' : 'margin-medium'}">${b.margin}%</span></td>
            <td>${photoBtn}</td>
            <td><button class="btn-sm btn-delete" onclick="deleteBill(${b.id})">🗑️</button></td>
        `;
        tbody.appendChild(tr);
    });
}

// ==================== 1-YEAR FINANCIAL & PROFIT REPORTS ====================
function renderReports() {
    const selectedYear = document.getElementById("reportYearSelect").value;
    
    const monthlyTurnover = new Array(12).fill(0);
    const monthlyCost = new Array(12).fill(0);
    const monthlyProfit = new Array(12).fill(0);

    sales.forEach(s => {
        if (s.date && s.date.startsWith(selectedYear)) {
            const monthIdx = parseInt(s.date.split("-")[1], 10) - 1;
            if (monthIdx >= 0 && monthIdx < 12) {
                monthlyTurnover[monthIdx] += (parseFloat(s.saleAmount) || 0);
                monthlyCost[monthIdx] += (parseFloat(s.costPrice) || 0);
                monthlyProfit[monthIdx] += (parseFloat(s.profit) || 0);
            }
        }
    });

    let yearBillPurchase = 0;
    bills.forEach(b => {
        if (b.date && b.date.startsWith(selectedYear)) {
            yearBillPurchase += (parseFloat(b.totalCost) || 0);
        }
    });

    const totalAnnualSales = monthlyTurnover.reduce((a, b) => a + b, 0);
    const totalAnnualCost = monthlyCost.reduce((a, b) => a + b, 0);
    const totalAnnualProfit = monthlyProfit.reduce((a, b) => a + b, 0);
    const annualMargin = totalAnnualSales > 0 ? ((totalAnnualProfit / totalAnnualSales) * 100).toFixed(1) : "0.0";

    document.getElementById("annualSummaryBanner").innerHTML = `
        <div class="annual-metric">
            <span class="calc-label">१ वर्षाची एकूण विक्री (Turnover):</span>
            <span class="amt" style="color:#0284c7;">₹${totalAnnualSales.toLocaleString('en-IN')}</span>
        </div>
        <div class="annual-metric">
            <span class="calc-label">१ वर्षात झालेला निव्वळ नफा (Net Profit):</span>
            <span class="amt" style="color:#15803d;">₹${totalAnnualProfit.toLocaleString('en-IN')} (${annualMargin}%)</span>
        </div>
        <div class="annual-metric">
            <span class="calc-label">सप्लायर खरेदी बिले खर्च:</span>
            <span class="amt" style="color:#dc2626;">₹${yearBillPurchase.toLocaleString('en-IN')}</span>
        </div>
    `;

    const tbody = document.getElementById("yearlyTableBody");
    tbody.innerHTML = "";

    MONTH_NAMES_MR.forEach((mName, idx) => {
        const turn = monthlyTurnover[idx];
        const cost = monthlyCost[idx];
        const prof = monthlyProfit[idx];
        const marg = turn > 0 ? ((prof / turn) * 100).toFixed(1) : "0.0";

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${mName}</strong></td>
            <td>₹${cost.toLocaleString('en-IN')}</td>
            <td><strong>₹${turn.toLocaleString('en-IN')}</strong></td>
            <td><span class="profit-badge ${prof < 0 ? 'profit-negative' : ''}">₹${prof.toLocaleString('en-IN')}</span></td>
            <td><span class="margin-pill ${parseFloat(marg) >= 15 ? 'margin-high' : 'margin-medium'}">${marg}%</span></td>
            <td>${turn > 0 ? '✅ विक्री नोंद' : '<span style="color:#94a3b8;">नोंद नाही</span>'}</td>
        `;
        tbody.appendChild(tr);
    });

    renderYearlyChart(monthlyTurnover, monthlyProfit);
}

function renderYearlyChart(turnoverData, profitData) {
    const ctx = document.getElementById("yearlyChart").getContext("2d");

    if (yearlyChartInstance) {
        yearlyChartInstance.destroy();
    }

    yearlyChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["जाने", "फेब्रु", "मार्च", "एप्रि", "मे", "जून", "जुलै", "ऑग", "सप्टें", "ऑक्टो", "नोव्हें", "डिसें"],
            datasets: [
                {
                    label: "एकूण उलाढाल (Turnover ₹)",
                    data: turnoverData,
                    backgroundColor: "rgba(30, 136, 229, 0.75)",
                    borderColor: "#1e88e5",
                    borderWidth: 1.5,
                    borderRadius: 6
                },
                {
                    label: "निव्वळ नफा (Net Profit ₹)",
                    data: profitData,
                    backgroundColor: "rgba(22, 163, 74, 0.8)",
                    borderColor: "#15803d",
                    borderWidth: 1.5,
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(val) {
                            return '₹' + (val >= 1000 ? (val/1000) + 'k' : val);
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ₹${context.raw.toLocaleString('en-IN')}`;
                        }
                    }
                }
            }
        }
    });
}

// ==================== DATA BACKUP & RESTORE ====================
function exportData() {
    const fullBackup = {
        suppliers,
        bills,
        sales,
        shopName: "पूनम किराणा",
        exportDate: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
    const dl = document.createElement("a");
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", `पूनम_किराणा_डेटा_बॅकअप_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
    showToast("💾 सर्व डेटा सुरक्षित डाऊनलोड झाला!");
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data) {
                if (confirm("हा बॅकअप लोड करायचा का? जुना डेटा बदलला जाईल.")) {
                    suppliers = data.suppliers || [...DEFAULT_SUPPLIERS];
                    bills = data.bills || [];
                    sales = data.sales || [];
                    saveData();
                    populateSupplierDropdowns();
                    renderDashboard();
                    showToast("📤 डेटा यशस्वीरीत्या Import झाला!");
                }
            } else {
                alert("अवैध फाईल फॉरमॅट!");
            }
        } catch (err) {
            alert("फाइल वाचता आली नाही!");
        }
    };
    reader.readAsText(file);
}

function clearAllData() {
    if (confirm("⚠️ सावधान: यामुळे पूनम किराणाचा सर्व डेटा (सप्लायर्स, बिले, नोंदी) कायमचा हटेल!")) {
        suppliers = [];
        bills = [];
        sales = [];
        saveData();
        populateSupplierDropdowns();
        renderDashboard();
        showToast("सर्व डेटा हटवला गेला.");
    }
}

// ==================== TOAST ====================
function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

// ==================== INITIALIZE ====================
document.addEventListener("DOMContentLoaded", () => {
    initCredentials();
    loadData();
    checkAuth();
});
