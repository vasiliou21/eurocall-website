// Eurocall — στατικά defaults (εταιρεία + virtual κατηγορία Μεταχειρισμένα).
// Οι πραγματικές κατηγορίες ζουν στο Supabase catalog_categories.

export const virtualCategory = {
  slug: 'metaxeirismena',
  name: 'Μεταχειρισμένα',
  tagline: 'Ελεγμένος εξοπλισμός — διαθέσιμος τώρα',
  intro: 'Επιλεγμένος μεταχειρισμένος εξοπλισμός που έχουμε αυτή τη στιγμή σε όλες τις κατηγορίες. Η διαθεσιμότητα αλλάζει συχνά — ρωτήστε μας.',
  hero: '/images/psigio3d.webp',
  virtual: true,
};

export const defaultHero = '/images/psigio3d.webp';

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
