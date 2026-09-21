import Link from "next/link";

const cerita = {
  "1": {
    judul: "Persiapan Mendaki Gunung Butak",
    tanggal: "10 Juli 2026",
    gambar: "/images/persiapan.jpg",
    isi: `
Sebelum melakukan pendakian Gunung Butak, saya dan teman-teman mulai mempersiapkan berbagai perlengkapan di kost.
kami mulai mempersiapkan tas carrier, jacket, logistik dan lain lainnya.
Persiapan ini sangat penting karena perjalanan mendaki membutuhkan tenaga dan perlengkapan yang cukup.
    `,
  },

  "2": {
    judul: "Perjalanan Menuju Basecamp",
    tanggal: "11 Juli 2026",
    gambar: "/images/basecamp.jpg",
    isi: `
Perjalanan menuju basecamp menjadi awal dari petualangan kami,
sebelum berangkat, kami memastikan semua perlengkapan sudah siap, sebelum memulai tracking, kita juga harus membongkar ulang alat alat dan logistik kita di basecamp untuk melakukan pengecekan sampah dan memastikan lagi tidak ada yang ketinggalan di kost, setelah pengecekan sampah,
Setelah selesai pengecekan di basecamp, kami beristirahat dan mempersiapkan diri sebelum memulai pendakian.
    `,
  },

  "3": {
    judul: "Perjalanan Mendaki",
    tanggal: "11 Juli 2026",
    gambar: "/images/mendaki.jpg",
    isi: `
Perjalanan mendaki Gunung Butak sangat melelahkan,
Jalur yang kami lalui sangat panjang dan banyak tanjakan di sepanjang perjalanan, jalur nya sangat menantang dan menguras energi kami, namun kami tetap semangat dan saling menyemangati satu sama lain agar tetap semangat dan tidak menyerah.

    `,
  },

  "4": {
    judul: "Sampai di Puncak",
    tanggal: "12 Juli 2026",
    gambar: "/images/puncak.jpg",
    isi: `
Setelah perjalanan yang panjang dan melelahkan, akhirnya kami sampai di puncak bersama teman-teman.

Rasa lelah selama perjalanan langsung terbayar ketika melihat pemandangan yang sangat indah di puncak Gunung Butak.

Pengalaman mendaki Gunung Butak menjadi pengalaman yang tidak akan saya lupakan.
    `,
  },
};

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailCerita({ params }: Props) {
  const { id } = await params;

  const item = cerita[id as keyof typeof cerita];

  return (
    <div>
      <header className="navbar">
        <h2>🏔️ My Adventure</h2>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/cerita">Cerita Kami</Link>
        </nav>
      </header>

      <section className="detail-container">
        <img src={item.gambar} alt={item.judul} />

        <h1>{item.judul}</h1>

        <p className="date">
          📅 {item.tanggal}
        </p>

        <p className="detail-text">
          {item.isi}
        </p>

        <Link href="/cerita" className="btn">
          ← Kembali ke Cerita
        </Link>
      </section>
    </div>
  );
}