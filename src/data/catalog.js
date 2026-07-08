// Eurocall — κατηγορίες καταλόγου (metadata μόνο).
// Τα προϊόντα ζουν στο Supabase catalog_items και διαχειρίζονται από /diaxeirisi.

export const categories = [
  {
    slug: 'fournoi',
    name: 'Φούρνοι',
    tagline: 'Αερόθερμοι, πίτσας, ξυλοκάρβουνου & ηλεκτρικοί',
    intro: 'Φούρνοι για κάθε είδους παραγωγή — από σταθερό ψήσιμο σε εστιατόριο μέχρι υψηλό όγκο σε ξενοδοχείο και catering.',
    hero: '/images/fournoi_main_cat.webp',
  },
  {
    slug: 'psyxi',
    name: 'Ψύξη',
    tagline: 'Θάλαμοι, βιτρίνες, πάγκοι-ψυγεία & κατάψυξη',
    intro: 'Σωστός σχεδιασμός ψυκτικής αλυσίδας για ασφαλή συντήρηση — από τον θάλαμο της κουζίνας μέχρι το mini bar του δωματίου.',
    hero: '/images/psigio3d.webp',
  },
  {
    slug: 'anoxeidotes-kataskeves',
    name: 'Ανοξείδωτες Κατασκευές',
    tagline: 'Λάντζες, πάγκοι, ερμάρια — και επί παραγγελία',
    intro: 'Έτοιμες ή κατασκευασμένες στα μέτρα σας, από inox AISI 304 — δικής μας παραγωγής, για κάθε χώρο και ροή δουλειάς.',
    hero: '/images/inoxkat.webp',
  },
  {
    slug: 'psisimatos',
    name: 'Συσκευές Ψησίματος',
    tagline: 'Πλατό, σαλαμάνδρες, σουβλακιέρες & γύρος',
    intro: 'Εξοπλισμός που αντέχει σε καθημερινή επαγγελματική χρήση και κρατάει σταθερή την παραγωγή τις ώρες αιχμής.',
    hero: '/images/psisimatos.webp',
  },
  {
    slug: 'pagomixanes',
    name: 'Παγομηχανές',
    tagline: 'Μηχανές & αποθήκες πάγου',
    intro: 'Σταθερή παραγωγή πάγου για bar, εστιατόρια και ξενοδοχεία — με service και ανταλλακτικά κοντά σας.',
    hero: '/images/mixanes-pagou.webp',
  },
  {
    slug: 'plyntiria',
    name: 'Πλυντήρια',
    tagline: 'Πιάτων, ποτηριών & σκευών',
    intro: 'Γρήγοροι κύκλοι, χαμηλή κατανάλωση και αξιόπιστη λειτουργία — για να μη σταματάει ποτέ το service.',
    hero: '/images/plintiria.webp',
  },
  {
    slug: 'epexergasia-kreatos',
    name: 'Επεξεργασία Κρέατος',
    tagline: 'Ζαμπονομηχανές, κιμαδομηχανές & εργαλεία',
    intro: 'Εξοπλισμός κοπής και επεξεργασίας για κρεοπωλεία, εστιατόρια και μονάδες παραγωγής.',
    hero: '/images/kreatos.webp',
  },
  {
    slug: 'bar-kafe',
    name: 'Μπαρ & Καφές',
    tagline: 'Bar stations, εξοπλισμός & αξεσουάρ',
    intro: 'Ό,τι χρειάζεται το bar σας για γρήγορο, καθαρό service — κατασκευές, αξεσουάρ και εξοπλισμό καφέ.',
    hero: '/images/barkafe.webp',
  },
  {
    slug: 'bain-marie',
    name: 'Bain Marie & Buffet',
    tagline: 'Θερμοθάλαμοι, θερμαινόμενες βιτρίνες & buffet',
    intro: 'Διατήρηση θερμοκρασίας και σωστή παρουσίαση — για ξενοδοχειακό buffet, catering και self-service.',
    hero: '/images/bainmarie.webp',
  },
  {
    slug: 'blender-stiftes',
    name: 'Μπλέντερ & Στίφτες',
    tagline: 'Μπλέντερ, στίφτες & μίξερ χειρός',
    intro: 'Μικροσυσκευές επαγγελματικής αντοχής για bar, καφετέρια και κουζίνα.',
    hero: '/images/blender.webp',
  },
  {
    slug: 'metaxeirismena',
    name: 'Μεταχειρισμένα',
    tagline: 'Ελεγμένος εξοπλισμός — διαθέσιμος τώρα',
    intro: 'Επιλεγμένος μεταχειρισμένος εξοπλισμός που έχουμε αυτή τη στιγμή σε όλες τις κατηγορίες. Η διαθεσιμότητα αλλάζει συχνά — ρωτήστε μας.',
    hero: '/images/psigio3d.webp',
    virtual: true,
  },
];

/** Κατηγορίες με δικές τους σελίδες προϊόντων (όχι virtual). */
export const productCategories = categories.filter((c) => !c.virtual);

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
