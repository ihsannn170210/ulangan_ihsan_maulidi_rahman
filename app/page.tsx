import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <header className="navbar">
        <h2>🏔️ pengalaman saya</h2>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/cerita">Cerita Kami</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Selamat Datang di Website pribadi saya</h1>

          <p>
            Website ini berisi cerita dan pengalaman pribadi saya ketika
            melakukan perjalanan mendaki Gunung Bhutak.
          </p>

          <Link href="/cerita" className="btn">
            Lihat Cerita
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>Pengalaman Mendaki Gunung Butak</h2>

        <p>
          Gunung Butak merupakan salah satu gunung yang memiliki pemandangan
          indah. Dalam perjalanan ini saya mendapatkan banyak pengalaman
          menarik mulai dari perjalanan panjang, rasa lelah, hingga menikmati
          keindahan alam dari atas gunung.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 My Adventure | Cerita Pengalaman Ihsan</p>
      </footer>
    </div>
  );
}