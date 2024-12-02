"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData, fetchDataPublic } from "@/service/api";
import { useDrawer } from "@/contexts/DrawerContext";

export const BerandaLogic = () => {
  const router = useRouter();
  const { setLoadingRoute } = useDrawer();
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  // get data berita terbaru
  const getData = async () => {
    try {
      fetchDataPublic("/public/latest-news").then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ketika button detail berita di klik
  const handleDetailClick = (slug) => {
    try {
      router.push(`/berita/${slug}`);
      setLoadingRoute(true);
      setSelectedSlug(slug);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  // ketika button tentang genbi diklik
  const onClickTentang = () => {
    try {
      setLoadingRoute(true);
      router.push("/tentang_kami");
    } catch (err) {
      console.log(err);
    }
  };

  // ketika button berita lainnya diklik
  const onClickBerita = () => {
    setLoadingRoute(true);
    router.push("/berita");
  };

  // fungsi membatasi text
  const limitText = (html, maxLength) => {
    // Buat DOM parser
    const parser = new DOMParser();
    // Parse string HTML
    const doc = parser.parseFromString(html, "text/html");
    // Ambil teks murni tanpa tag
    const textContent = doc.body.textContent || "";

    // Jika teks murni lebih panjang dari batas yang ditentukan
    if (textContent.length > maxLength) {
      // Potong teks murni
      const truncatedText = textContent.substring(0, maxLength) + "...";
      let charCount = 0;

      // Fungsi untuk merangkai kembali teks dengan HTML
      const truncateHtml = (node) => {
        let newHtml = "";
        node.childNodes.forEach((child) => {
          if (charCount >= maxLength) return;

          if (child.nodeType === Node.TEXT_NODE) {
            const remainingChars = maxLength - charCount;
            if (child.textContent.length <= remainingChars) {
              newHtml += child.textContent;
              charCount += child.textContent.length;
            } else {
              newHtml += child.textContent.substring(0, remainingChars) + "...";
              charCount = maxLength;
            }
          } else if (child.nodeType === Node.ELEMENT_NODE) {
            const innerHtml = truncateHtml(child);
            if (innerHtml) {
              newHtml += `<${child.nodeName.toLowerCase()}${[
                ...child.attributes,
              ]
                .map((attr) => ` ${attr.name}="${attr.value}"`)
                .join("")}>${innerHtml}</${child.nodeName.toLowerCase()}>`;
            }
          }
        });
        return newHtml;
      };

      // Gunakan fungsi truncateHtml pada elemen body
      return truncateHtml(doc.body);
    }

    // Jika teks tidak terlalu panjang, kembalikan HTML asli
    return html;
  };

  return {
    value: {
      data,
      loading,
      selectedSlug,
    },
    func: {
      onClickTentang,
      onClickBerita,
      limitText,
      handleDetailClick,
    },
  };
};
