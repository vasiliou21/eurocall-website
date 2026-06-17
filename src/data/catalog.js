// Eurocall — κατάλογος προϊόντων (10 κύριες κατηγορίες)
// Δεδομένα/φωτό ως ρεαλιστικά placeholders από lappas/e-lappas (reference πελάτη).
// Στο production αντικαθίστανται με τις δικές του φωτογραφίες & προϊόντα.

// Τοπικά assets (κατέβηκαν στο public/images/). Στο production αντικαθίστανται
// με τις φωτογραφίες του πελάτη — απλό swap αρχείου, ίδιο όνομα.
const L = '/images/';
const LC = '/images/';
const E = '/images/';

export const categories = [
  {
    slug: 'fournoi',
    name: 'Φούρνοι',
    tagline: 'Αερόθερμοι, πίτσας, ξυλοκάρβουνου & ηλεκτρικοί',
    intro: 'Φούρνοι για κάθε είδους παραγωγή — από σταθερό ψήσιμο σε εστιατόριο μέχρι υψηλό όγκο σε ξενοδοχείο και catering.',
    hero: LC + 'fournoi_main_cat.webp',
    products: [
      { name: 'Αερόθερμος Φούρνος 10 GN 1/1', spec: 'Ηλεκτρικός με υγρασία · 10 θέσεις GN 1/1', img: L + 'DYNAMICfournoi_600x600.jpg' },
      { name: 'Φούρνος Πίτσας Διπλός Ø40', spec: '2 θάλαμοι · Πυρότουβλο · Ανεξάρτητοι θερμοστάτες', img: L + 'NERONE-FOYRNOI_600x600.png' },
      { name: 'Φούρνος Convection HENDI', spec: 'Ψηφιακός · 4 θέσεις · Ιδανικός για bakery & snack', img: L + 'fournoi-hendii_600x600.jpg' },
    ],
  },
  {
    slug: 'psyxi',
    name: 'Ψύξη',
    tagline: 'Θάλαμοι, βιτρίνες, πάγκοι-ψυγεία & κατάψυξη',
    intro: 'Σωστός σχεδιασμός ψυκτικής αλυσίδας για ασφαλή συντήρηση — από τον θάλαμο της κουζίνας μέχρι το mini bar του δωματίου.',
    hero: LC + 'psigio3d.webp',
    products: [
      { name: 'Ψυγείο Θάλαμος Συντήρησης 360L', spec: 'Inox · 5 ράφια GN · Ψηφιακός θερμοστάτης', img: E + '107633_m.jpg' },
      { name: 'Blast Chiller 5 GN 1/1', spec: 'Ταχεία ψύξη +90°C → +3°C · Ασφάλεια HACCP', img: L + 'Blast-Chiller-kathgoria_600x600.jpg' },
      { name: 'Ψυγείο Mini Bar 50L', spec: 'Αθόρυβο · Για δωμάτια ξενοδοχείων & γραφεία', img: L + 'mini-bar_600x600.jpg' },
    ],
  },
  {
    slug: 'anoxeidotes-kataskeves',
    name: 'Ανοξείδωτες Κατασκευές',
    tagline: 'Λάντζες, πάγκοι, ερμάρια — και επί παραγγελία',
    intro: 'Έτοιμες ή κατασκευασμένες στα μέτρα σας, από inox AISI 304 — δικής μας παραγωγής, για κάθε χώρο και ροή δουλειάς.',
    hero: LC + 'inoxkat.webp',
    products: [
      { name: 'Λάντζα 2 Γούρνες με Στραγγιστήρα', spec: '140×70cm · Γούρνες 50×50×30 · Επί παραγγελία', img: L + 'lantzes_600x600.jpg' },
      { name: 'Πάγκος Εργασίας Inox 180×70', spec: 'AISI 304 · Με ράφι & σήκωμα πλάτης · Λυόμενος', img: L + 'epifanies_gournes6_600x600.jpg' },
      { name: 'Ερμάριο Inox Κλειστό 2 Πόρτες', spec: 'Συρόμενες πόρτες · Ρυθμιζόμενα ράφια', img: L + 'ermaria_600x600.jpg' },
    ],
  },
  {
    slug: 'psisimatos',
    name: 'Συσκευές Ψησίματος',
    tagline: 'Πλατό, σαλαμάνδρες, σουβλακιέρες & γύρος',
    intro: 'Εξοπλισμός που αντέχει σε καθημερινή επαγγελματική χρήση και κρατάει σταθερή την παραγωγή τις ώρες αιχμής.',
    hero: LC + 'psisimatos.webp',
    products: [
      { name: 'Πλατό Ψησίματος Αερίου 80cm', spec: 'Λείο/ραβδωτό μικτό · Χυτοσιδηρή πλάκα', img: L + 'platw-katigoria_600x600.jpg' },
      { name: 'Σαλαμάνδρα Inox Ηλεκτρική', spec: 'Ρυθμιζόμενο ύψος σχάρας · Για finishing & γκρατινάρισμα', img: L + 'katigoria-salamandra_600x600.jpg' },
      { name: 'Σουβλακιέρα Αερίου 4 Καυστήρων', spec: 'Ανεξάρτητοι καυστήρες · Inox σώμα', img: L + 'soyvlakieres-katigoria_600x600.jpg' },
    ],
  },
  {
    slug: 'pagomixanes',
    name: 'Παγομηχανές',
    tagline: 'Μηχανές & αποθήκες πάγου',
    intro: 'Σταθερή παραγωγή πάγου για bar, εστιατόρια και ξενοδοχεία — με service και ανταλλακτικά κοντά σας.',
    hero: LC + 'mixanes-pagou.webp',
    products: [
      { name: 'Παγομηχανή 45kg/24h', spec: 'Παγάκι συμπαγές 18g · Αποθήκη 15kg · Αερόψυκτη', img: L + 'hendiicemakercat_600x600.webp' },
      { name: 'Παγομηχανή Επαγγελματική 90kg/24h', spec: 'Για υψηλό όγκο · Αξιόπιστη σε ζέστη', img: L + 'itv_cat2_600x600.webp' },
      { name: 'Αποθήκη Πάγου Inox', spec: 'Μονωμένη · Με σπάτουλα · Διάφορες χωρητικότητες', img: L + 'katigories-apothikes-pagou_600x600.jpg' },
    ],
  },
  {
    slug: 'plyntiria',
    name: 'Πλυντήρια',
    tagline: 'Πιάτων, ποτηριών & σκευών',
    intro: 'Γρήγοροι κύκλοι, χαμηλή κατανάλωση και αξιόπιστη λειτουργία — για να μη σταματάει ποτέ το service.',
    hero: LC + 'plintiria.webp',
    products: [
      { name: 'Πλυντήριο Πιάτων Καλάθι 50×50', spec: 'Κύκλος 2′ · Με δοσομετρητές · Inox κάδος', img: L + 'hoionved-newcateg_600x600.png' },
      { name: 'Πλυντήριο Σκευών Βαρέως Τύπου', spec: 'Μεγάλο καλάθι · Για κουζίνες υψηλού όγκου', img: L + 'katigoria-plintiria-skeywn4_600x600.jpg' },
      { name: 'Πλυντήριο Καμπάνα (Hood Type)', spec: 'Ανυψούμενη καμπάνα · Υψηλή απόδοση', img: L + 'kabanes_plintiria_600x600.jpg' },
    ],
  },
  {
    slug: 'epexergasia-kreatos',
    name: 'Επεξεργασία Κρέατος',
    tagline: 'Ζαμπονομηχανές, κιμαδομηχανές & εργαλεία',
    intro: 'Εξοπλισμός κοπής και επεξεργασίας για κρεοπωλεία, εστιατόρια και μονάδες παραγωγής.',
    hero: LC + 'kreatos.webp',
    products: [
      { name: 'Ζαμπονομηχανή Ø250', spec: 'Λεπίδα inox · Ομαλή κοπή · Εύκολος καθαρισμός', img: L + 'zampomixanes_600x600.jpg' },
      { name: 'Κιμαδομηχανή Επαγγελματική', spec: 'Σώμα inox · Υψηλή απόδοση · Διάφορες διατρήσεις', img: L + 'kanonaki-loukaniko_600x600.jpg' },
      { name: 'Κούτσουρο Κοπής Πολυαιθυλενίου', spec: 'Υγιεινό · Ανθεκτικό · Σε διάφορες διαστάσεις', img: L + 'koytsoura1_600x600.jpg' },
    ],
  },
  {
    slug: 'bar-kafe',
    name: 'Μπαρ & Καφές',
    tagline: 'Bar stations, εξοπλισμός & αξεσουάρ',
    intro: 'Ό,τι χρειάζεται το bar σας για γρήγορο, καθαρό service — κατασκευές, αξεσουάρ και εξοπλισμό καφέ.',
    hero: LC + 'barkafe.webp',
    products: [
      { name: 'Bar Station Inox με Λεκάνη', spec: 'Πλήρης πάγκος bar · Speed rail & ράφια', img: L + 'barstations22s_600x600.jpg' },
      { name: 'Pitcher Rinser & Drainer', spec: 'Ξέπλυμα κανατών με πίεση · Inox', img: L + 'pitcher_kat_600x600.jpg' },
      { name: 'Εξοπλισμός Bar — Σειρά', spec: 'Shakers, jiggers, αξεσουάρ service', img: LC + 'barkafe.webp' },
    ],
  },
  {
    slug: 'bain-marie',
    name: 'Bain Marie & Buffet',
    tagline: 'Θερμοθάλαμοι, θερμαινόμενες βιτρίνες & buffet',
    intro: 'Διατήρηση θερμοκρασίας και σωστή παρουσίαση — για ξενοδοχειακό buffet, catering και self-service.',
    hero: LC + 'bainmarie.webp',
    products: [
      { name: 'Θερμοθάλαμος Πιάτων Inox', spec: '30–90°C · Συρόμενες πόρτες · ~120 πιάτα', img: L + 'thermothalamoi_600x600.jpg' },
      { name: 'Θερμαινόμενη Βιτρίνα Buffet', spec: 'Με υγρασία · Φωτισμός · Για ζεστή έκθεση', img: L + 'thermainomenes-vitrines_600x600.jpg' },
      { name: 'Ισοθερμικά Δοχεία Τροφίμων', spec: 'GN · Διατήρηση θερμοκρασίας · Στοιβαζόμενα', img: L + 'isothermika-doxeia9_600x600.jpg' },
    ],
  },
  {
    slug: 'blender-stiftes',
    name: 'Μπλέντερ & Στίφτες',
    tagline: 'Μπλέντερ, στίφτες & μίξερ χειρός',
    intro: 'Μικροσυσκευές επαγγελματικής αντοχής για bar, καφετέρια και κουζίνα.',
    hero: LC + 'blender.webp',
    products: [
      { name: 'Μπλέντερ Επαγγελματικό 1.5L', spec: 'Ισχυρό μοτέρ · Κάδος πολυκαρβονικός · Για cocktails & smoothies', img: L + 'blender-katigoria-new_600x600.jpg' },
      { name: 'Στίφτης Εσπεριδοειδών', spec: 'Inox · Αθόρυβος · Για φρέσκους χυμούς', img: L + 'stiftes-new6_600x600.jpg' },
      { name: 'Μπλέντερ Ραβδομίξερ Χειρός', spec: 'Μεταβλητή ταχύτητα · Για μεγάλες ποσότητες', img: L + 'katigoria-mixer-xeiros_600x600.jpg' },
    ],
  },
];

export const company = {
  name: 'Eurocall',
  tagline: 'Κέντρο εξοπλισμού επαγγελματικής κουζίνας',
  since: '2000',
  phone: '694 593 6149',
  phoneHref: '+306945936149',
  email: 'vasfar64@gmail.com',
  address: 'Βελισσαρίου 6, Πεδινή Ιωαννίνων',
  hours: 'Δευ–Σαβ 08:00–16:00',
};
