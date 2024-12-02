import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "@/assets/logo.svg";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import Pendidikan from "@/assets/pendidikan.svg";
import Lingkungan from "@/assets/lingkungan.svg";
import Public from "@/assets/public.svg";
import Kesehatan from "@/assets/kesehatan.svg";
import Psdm from "@/assets/psdm.svg";
import Kewirausahaan from "@/assets/kewirausahaan.svg";
import Multimedia from "@/assets/multimedia.svg";
import Gambar from "@/assets/pengurus.png";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { useParams } from "next/navigation";

export const drawerWidth = 240;

export const menuDashboard = [
  {
    title: "Dashboard",
    router: "/dashboard",
    icon: <DashboardIcon sx={{ mt: "3px" }} />,
  },
  {
    title: "Berita",
    router: `/dashboard/berita`,
    icon: <ArticleIcon sx={{ mt: "3px" }} />,
  },
  {
    title: "Kabinet",
    router: "/dashboard/kabinet",
    icon: <Diversity2Icon sx={{ mt: "3px" }} />,
  },
  {
    title: "Pengurus",
    router: "/dashboard/pengurus",
    icon: <GroupsIcon sx={{ mt: "3px" }} />,
  },
  {
    title: "Admin",
    router: "/dashboard/admin",
    icon: <PersonIcon sx={{ mt: "3px" }} />,
  },
  {
    title: "Logout",
    router: "/logout",
    icon: <LogoutIcon />,
  },
];

export const NavbarMenu = [
  {
    id: 1,
    title: "Beranda",
    router: "/",
  },
  {
    id: 2,
    title: "Berita",
    router: "/berita",
  },
  {
    id: 3,
    title: "Pengurus",
    router: "/pengurus",
  },
  {
    id: 4,
    title: "Tentang Kami",
    router: "/tentang_kami",
  },
];

export const Data = [
  {
    id: 1,
    gambar: Logo,
    judul: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    tanggal: "230ehfbjhegfjy e ejgge",
  },
  {
    id: 2,
    gambar: Logo,
    judul:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quae, quidem illo obcaecati doloribus sint quisquam quis dignissimos. Sit, numquam est ullam totam consectetur illo ipsum voluptates quasi, reprehenderit facilis aspernatur quisquam labore, nesciunt ex. Eius expedita beatae error ipsum, fuga nemo soluta nam vel autem nobis, eveniet rerum quisquam, dolor ab itaque saepe tempore sed quis ea! Quaerat, placeat!",
    tanggal: "230ehfbjhegfjy e ejgge",
  },
  {
    id: 3,
    gambar: Logo,
    judul:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quae, quidem illo obcaecati doloribus sint quisquam quis dignissimos. Sit, numquam est ullam totam consectetur illo ipsum voluptates quasi, reprehenderit facilis aspernatur quisquam labore, nesciunt ex. Eius expedita beatae error ipsum, fuga nemo soluta nam vel autem nobis, eveniet rerum quisquam, dolor ab itaque saepe tempore sed quis ea! Quaerat, placeat!",
    tanggal: "230ehfbjhegfjy e ejgge",
  },
  {
    id: 4,
    gambar: Logo,
    judul:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quae, quidem illo obcaecati doloribus sint quisquam quis dignissimos. Sit, numquam est ullam totam consectetur illo ipsum voluptates quasi, reprehenderit facilis aspernatur quisquam labore, nesciunt ex. Eius expedita beatae error ipsum, fuga nemo soluta nam vel autem nobis, eveniet rerum quisquam, dolor ab itaque saepe tempore sed quis ea! Quaerat, placeat!",
    tanggal: "230ehfbjhegfjy e ejgge",
  },
  {
    id: 5,
    gambar: Logo,
    judul:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quae, quidem illo obcaecati doloribus sint quisquam quis dignissimos. Sit, numquam est ullam totam consectetur illo ipsum voluptates quasi, reprehenderit facilis aspernatur quisquam labore, nesciunt ex. Eius expedita beatae error ipsum, fuga nemo soluta nam vel autem nobis, eveniet rerum quisquam, dolor ab itaque saepe tempore sed quis ea! Quaerat, placeat!",
    tanggal: "230ehfbjhegfjy e ejgge",
  },
];

export const DataPengurus = [
  {
    id: 1,
    nama: "Rapiul Muiz S.kom",
    alamat: "Samata",
    divisi: "Turu",
    jabatan: "Ketua Umum",
    periode: "2024/2025",
    gambar: Logo,
  },
  {
    id: 2,
    nama: "Piul",
    alamat: "Gowa",
    divisi: "Turu",
    jabatan: "Ketua Umum",
    periode: "2024/2025",
    gambar: Logo,
  },
  {
    id: 3,
    nama: "Bois",
    alamat: "Tamarunang",
    divisi: "Turu",
    jabatan: "Ketua Umum",
    periode: "2024/2025",
    gambar: Logo,
  },
  {
    id: 4,
    nama: "Naura",
    alamat: "samata",
    divisi: "Turu",
    jabatan: "Ketua Umum",
    periode: "2024/2025",
    gambar: Logo,
  },
];

export const DataAdmin = [
  {
    id: 1,
    nama: "Muiz",
    username: "Rafiul Muiz",
  },
  {
    id: 2,
    nama: "Bois",
    username: "Rafiul Muiz",
  },
  {
    id: 3,
    nama: "Piul",
    username: "Rafiul Muiz",
  },
  {
    id: 4,
    nama: "Naura",
    username: "Rafiul Muiz",
  },
  {
    id: 5,
    nama: "Muiz Kun",
    username: "Rafiul Muiz",
  },
];

export const BeritaTerbaru = [
  {
    id: 1,
    gambar: Logo,
    judul: "GenBI Megazine Vol.2",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 2,
    gambar: Logo,
    judul: "GenBI Megazine Vol.2",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 3,
    gambar: Logo,
    judul: "GenBI Megazine Vol.2",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
];
export const BeritaPage = [
  {
    id: 1,
    gambar: Logo,
    judul: "GenBI Megazine Vol.1",
    rilis: "03 Juni 2024",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi! Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
    waktu: 5,
  },
  {
    id: 2,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul:
      "Tips And Trick Mempersiapkan Beasiswa BI Melalui Sosialisasi Beasiswa Bank Indonesia by GenBI UINAM",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
    waktu: "5",
  },
  {
    id: 3,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.3",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
    waktu: "5",
  },
  {
    id: 4,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
    waktu: "5",
  },
  {
    id: 5,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 6,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 7,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 8,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 9,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 10,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 11,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 12,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 13,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 14,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 15,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 16,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 17,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 18,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 19,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 20,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 21,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 22,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 23,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 24,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 25,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 26,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 27,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 28,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 29,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 30,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 31,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 32,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 33,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 34,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 35,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 36,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 37,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
  {
    id: 38,
    gambar: Logo,
    rilis: "03 Juni 2024",
    judul: "GenBI Megazine Vol.2",
    waktu: "5",
    deskripsi:
      "Majalah GenBI Komisariat UINAM hadir kembali dengan edisi kedua yang penuh inspirasi!",
  },
];

export const TentangKami = [
  {
    id: 1,
    gambar: Pendidikan,
  },
  {
    id: 2,
    gambar: Lingkungan,
  },
  {
    id: 3,
    gambar: Public,
  },
  {
    id: 4,
    gambar: Kesehatan,
  },
  {
    id: 5,
    gambar: Psdm,
  },
  {
    id: 6,
    gambar: Kewirausahaan,
  },
  {
    id: 7,
    gambar: Multimedia,
  },
];

export const PengurusPage = [
  {
    id: 1,
    gambar: Gambar,
    nama: "Rafiul Muiz",
    jabatan: "Ketua umum",
    jurusan: "Teknik Informatika",
  },
  {
    id: 2,
    gambar: Gambar,
    nama: "Rafiul Muiz",
    jabatan: "Ketua umum",
    jurusan: "Teknik Informatika",
  },
  {
    id: 3,
    gambar: Gambar,
    nama: "Rafiul Muiz",
    jabatan: "Ketua umum",
    jurusan: "Teknik Informatika",
  },
  {
    id: 4,
    gambar: Gambar,
    nama: "Rafiul Muiz",
    jabatan: "Ketua umum",
    jurusan: "Teknik Informatika",
  },
  {
    id: 5,
    gambar: Gambar,
    nama: "Rafiul Muiz",
    jabatan: "Ketua umum",
    jurusan: "Teknik Informatika",
  },
  {
    id: 6,
    gambar: Gambar,
    nama: "Rafiul Muiz",
    jabatan: "Ketua umum",
    jurusan: "Teknik Informatika",
  },
  {
    id: 7,
    gambar: Gambar,
    nama: "Rafiul Muiz",
    jabatan: "Ketua umum",
    jurusan: "Teknik Informatika",
  },
];
