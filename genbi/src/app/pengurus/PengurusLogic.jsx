"use client";
import { fetchData, fetchDataPublic } from "@/service/api";
import React, { useEffect, useState } from "react";

export default function PengurusLogic() {
  const [category, setCategory] = useState(false);
  const [data, setData] = useState([]);
  const [presidium, setPresidium] = useState([]);
  const [pendidikan, setPendidikan] = useState([]);
  const [kewirausahaan, setKewirausahaan] = useState([]);
  const [lingkunganHidup, setLingkunganHidup] = useState([]);
  const [kesehatan, setKesehatan] = useState([]);
  const [publicRelation, setPublicRelation] = useState([]);
  const [multimediaManagement, setMultimediaManagement] = useState([]);
  const [pengembangansdm, setPengembangansdm] = useState([]);
  const [kabinetId, setKabinetId] = useState();
  const [kabinet, setKabinet] = useState();
  const [imageLoaded, setImageLoaded] = useState([]);

  useEffect(() => {
    dataKabinet();
    dataPengurus();
  }, [kabinetId]);

  // dropdown kabinet
  const dataKabinet = async () => {
    try {
      fetchDataPublic(`/public/cabinets`).then((res) => {
        setKabinet(res.data);

        if (res.data.length > 0) {
          if (category === true) {
            setKabinetId(kabinetId);
          } else {
            setKabinetId(res.data[0].id);
          }
        }
      });
    } catch (err) {}
  };

  // data pengurus
  const dataPengurus = async () => {
    try {
      fetchDataPublic(`/public/pengurus/${kabinetId}`).then((res) => {
        setPresidium(res.data["Presidium"]);
        setPendidikan(res.data["Deputi Pendidikan"]);
        setKewirausahaan(res.data["Deputi Kewirausahaan"]);
        setLingkunganHidup(res.data["Deputi Lingkungan Hidup"]);
        setKesehatan(res.data["Deputi Kesehatan"]);
        setPublicRelation(res.data["Deputi Public Relation"]);
        setMultimediaManagement(res.data["Deputi Multimedia Management"]);
        setPengembangansdm(res.data["Deputi Pengembangan SDM"]);
      });
    } catch (error) {
      console.log(error);
    } finally {
      // setLoadingGet(false);
    }
  };

  let selectedKabinet;

  kabinet &&
    kabinet.forEach((res, index) => {
      if (res.id === kabinetId) {
        selectedKabinet = res.name;
      }
    });

  //
  const handleCategory = async (e) => {
    setCategory(true);
    // setKabinet(e.target.value);
    setKabinetId(e.target.value);
  };

  // imageload
  const handleImageLoad = (id) => {
    // Menambahkan id ke array imageLoaded jika gambar sudah selesai di-load
    setImageLoaded((prev) => [...prev, id]);
  };

  return {
    value: {
      category,
      data,
      kabinet,
      kabinetId,
      selectedKabinet,
      presidium,
      pendidikan,
      kewirausahaan,
      lingkunganHidup,
      kesehatan,
      publicRelation,
      multimediaManagement,
      pengembangansdm,
      imageLoaded,
      setImageLoaded,
    },
    func: { handleCategory, handleImageLoad },
  };
}
