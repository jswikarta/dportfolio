import { Link } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const assetDetail = [
  {
    name: "Halaman Login",
    image: "/images/asset/login.png",
    description:
      "Silakan masuk dengan Username & Password Anda untuk mengakses sistem danmemanfaatkan seluruh fitur yang tersedia.",
  },
  {
    name: "Dashboard",
    image: "/images/asset/dashboard.png",
    description:
      "Pada halaman ini anda dapat melihat rekap transaksi pengadaan, penempatan & maintain asset pada bulan ini.",
  },
  {
    name: "Menu Master Data",
    image: "/images/asset/data.png",
    description:
      "Pada Menu Master Data anda dapat melihat seluruh listmaster data yang telah terdaftar di sistem, mulai dari master data asset habis pakai, asset tak habis pakai, data pengguna, data unit dan data supplier.",
  },
  {
    name: "Menu Transaksi",
    image: "/images/asset/transaksi.png",
    description:
      "Pada Menu Transaksi anda dapat melakukan proses transaksi pengadaan/pembelian asset, penempatan asset dan maintain asset",
  },
  {
    name: "Menu Stok",
    image: "/images/asset/stok.png",
    description:
      "Pada Menu Stok anda dapat melihat detail stok setiap asset di setiap unit dan juga stok yang terdapat di sapra/gudang.",
  },
  {
    name: "Menu Laporan",
    image: "/images/asset/laporan.png",
    description:
      "Pada Menu laporan anda dapat melihat detail laporan transaksi yang telah dijalankan dalam sistem.",
  },
];

export default function Asset() {
  return (
    <>
      <div className="bg-[#0e162a]">
        <div className="fixed w-full bg-slate-900/90">
          <Link to={"/"} className="flex items-center px-6 py-2 text-white">
            <KeyboardBackspaceOutlinedIcon className="mr-2" /> Back
          </Link>
        </div>

        <div className="flex flex-col items-center py-12">
          <div className="w-full pb-12 text-center text-3xl font-semibold text-white md:px-12">
            Asset Management <br /> Abdurrab University
          </div>

          {assetDetail.map((i, index) => (
            <div
              key={index}
              className="flex flex-col px-2 pt-12 md:w-3/4 md:flex-row md:px-0"
            >
              <img src={i.image} className="rounded-sm md:h-64" />
              <div className="text-white md:pl-12">
                <div className="pt-2 text-xl font-semibold md:pt-0">
                  {i.name}
                </div>
                <p className="pt-2 md:pt-4">{i.description}</p>
              </div>
            </div>
          ))}

          <div className="flex w-full justify-center px-2 pt-12 text-white">
            <p className="text-center text-slate-300">
              Untuk Source Code nya dapat anda download melalui github saya{" "}
              <br />
              <a
                href="http://github.com/jswikarta/asset"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-slate-100 text-slate-100"
              >
                jswikarta/asset
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
