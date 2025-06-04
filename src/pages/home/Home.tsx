import About from "./components/About";
import Experience from "./components/Experience";
import type { ExperienceType } from "../../types/ExperienceType";
import type { ProjectType } from "../../types/ProjectType";
import Project from "./components/Project";
import Sidebar from "../../components/Sidebar";

const experiences: ExperienceType[] = [
  {
    year: "2022 - PRESENT",
    title: "Staff SAP PAS",
    company: "Darmex Agro",
    skills: [
      "S4/HANA",
      "Data Analyst",
      "Abap Debugging",
      "Palm Oil Plantation",
    ],
    desc: "Berpengalaman mengelola dan mengembangkan modul PAS (Plantation Application System) di SAP untuk mendukung operasional perkebunan. Menangani proses seperti aktivitas karyawan, penggajian, pembibitan, dan goods issue. Terlibat dalam pembuatan dokumen fungsional, pengujian sistem, serta implementasi SAP S/4HANA dari konfigurasi hingga go-live. Membantu meningkatkan efisiensi sistem melalui validasi dan perbaikan bug.",
  },

  {
    year: "2019 - 2020",
    title: "Web Programmer",
    company: "Widi Center",
    skills: ["PHP", "MySQL", "HTML & CSS", "Javascript"],
    desc: "Terlibat dalam pengembangan sistem secara menyeluruh, mulai dari desain, pemrograman frontend dan backend, hingga basis data. Menyelesaikan bug dan error pada website, serta melakukan update dan penambahan modul sesuai permintaan klien.",
  },
];

const projects: ProjectType[] = [
  {
    target: "",
    title: "Asset Management",
    image: "images/asset/login.png",
    link: "/project/asset",
    skills: ["PHP", "Javascript", "CodeIgniter", "Bootstrap"],
    desc: "Website ini dirancang untuk membantu pengelolaan aset secara menyeluruh, mulai dari proses pengadaan, penempatan, hingga pemeliharaan aset. Sistem ini memudahkan pelacakan transaksi aset dan memastikan pengelolaan inventaris yang lebih efisien, transparan, dan terdokumentasi dengan baik.",
  },
  {
    target: "blank",
    title: "Portfolio",
    image: "images/portfolio.png",
    link: "https://jswikarta.github.io/dportfolio",
    skills: ["Node.js", "Typescript", "React", "Tailwind"],
    desc: "Website portfolio responsif yang dibangun dengan React, TypeScript, dan Tailwind CSS. Menampilkan informasi pribadi, proyek, dan kontak dengan desain modern dan navigasi yang smooth. Fokus pada komponen reusable, struktur kode yang rapi, dan tampilan yang mobile-friendly.",
  },
  {
    target: "blank",
    title: "Whatsapp Bot",
    image: "images/whatsappbot.png",
    link: "https://github.com/jswikarta/whatsappbot",
    skills: ["Node.js", "Javascript"],
    desc: "Proyek ini merupakan implementasi bot WhatsApp yang dirancang untuk mengotomatisasi interaksi dengan pengguna melalui platform WhatsApp. Bot ini mampu merespons pesan secara real-time, menyediakan informasi, menjalankan perintah tertentu, serta terintegrasi dengan API Digiflazz untuk proses transaksi jual beli produk digital.",
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-[#0e162a]">
        <Sidebar />
        <div className="md:pr-[5%] md:pl-[40%]">
          <About />

          <section id="experience">
            <div className="ml-2 font-semibold text-[#cfd9ee] md:hidden">
              EXPERIENCE
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center gap-4 pb-12">
              {experiences.map((i, index) => (
                <div key={index}>
                  <Experience experienceData={i} />
                </div>
              ))}
            </div>
          </section>

          <section id="projects">
            <div className="ml-2 font-semibold text-[#cfd9ee] md:hidden">
              PROJECT
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center gap-4 pb-12">
              {projects.map((i, index) => (
                <div key={index}>
                  <Project projectData={i} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
