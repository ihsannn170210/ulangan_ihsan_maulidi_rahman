import Link from "next/link";

interface Cerita {
  id: number;
  judul: string;
  tanggal: string;
  gambar: string;
  deskripsi: string;
}

const cerita: Cerita[] = [
  {
    id: 1,
    judul: "Persiapan Mendaki Gunung Butak",
    tanggal: "10 Juli 2026",
    gambar: "images/butak7.jpeg",
     
    deskripsi:
      "Sebelum melakukan pendakian, saya dan teman-teman mempersiapkan perlengkapan seperti tas carrier, jaket, makanan, dan perlengkapan lainnya.",
  },
  {
    id: 2,
    judul: "Perjalanan Menuju Basecamp",
    tanggal: "11 Juli 2026",
    gambar: "images/butak6.jpeg",
    deskripsi:
      "Perjalanan dimulai dengan penuh semangat. Kami menuju basecamp sebelum memulai perjalanan pendakian.",
  },
  {
    id: 3,
    judul: "Perjalanan Mendaki",
    tanggal: "11 Juli 2026",
    gambar: "images/butak5.jpeg",
      
    deskripsi:
      "Perjalanan menuju puncak cukup melelahkan karena jalur yang panjang dan menanjak.",
  },
  {
    id: 4,
    judul: "Menikmati Pemandangan di Puncak",
    tanggal: "12 Juli 2026",
    gambar: "images/butak8.jpeg",
    deskripsi:
      "Setelah perjalanan panjang dan melelahkan, akhirnya kami sampai dan menikmati keindahan alam di puncak Gunung Butak, pemandangannya memaanjakan mata kami,view gunung arjuno yang gagah dan indah dengan awan yang melingkari puncaknya, membuat saya dan teman teman saya kagum dan bangga karena suda bisa sampai di puncak gunung bhutak yang indah.",
  },
];

export default function CeritaPage() {
  return (
    <div>
      {/* HEADER */}
      <header className="navbar">
        <h2>🏔️ My Adventure</h2>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/cerita">Cerita Kami</Link>
        </nav>
      </header>

      {/* JUDUL */}
      <section className="page-title">
        <h1>Cerita Kami</h1>

        <p>
          Kumpulan pengalaman perjalanan mendaki Gunung Butak
        </p>
      </section>

      {/* LIST CERITA */}
      <section className="card-container">
        {cerita.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.gambar}
              alt={item.judul}
            />

            <div className="card-content">
              <h2>{item.judul}</h2>

              <span>📅 {item.tanggal}</span>

              <p>{item.deskripsi}</p>

              <Link
                href={`/cerita/${item.id}`}
                className="btn-small"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </div>
        ))}
      </section>

      <footer>
        <p>© 2026 My Adventure | Cerita Pengalaman Ihsan</p>
      </footer>
    </div>
  );
}