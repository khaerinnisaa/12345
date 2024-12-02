"use client";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { fetchDataPublic } from "@/service/api";
import { useRouter } from "next/navigation";
import { useDrawer } from "@/contexts/DrawerContext";

export default function BeritaLogic() {
  const { setLoadingRoute } = useDrawer();
  const router = useRouter();
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerpage] = useState();
  const [totalPage, setTotalPage] = useState();
  const [totalItem, setTotalItem] = useState();
  const [selectedSlug, setSelectedSlug] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    getData();
  }, [page, perPage, totalPage, totalItem]);

  const getData = async () => {
    try {
      fetchDataPublic(`/public/news?page=${page}&perpage=${perPage}`).then(
        (res) => {
          setData(res.data);
          // setFullData(res.data);
          setTotalPage(res.meta.total_page);
          setTotalItem(res.meta.total_item);
          setPerpage(res.meta.perpage);
          setLoadingRoute(false);
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      // setLoadingGet(false);
    }
  };

  const handleDetail = (slug) => {
    try {
      router.push(`/berita/${slug}`);
      setLoadingRoute(true);
      setSelectedSlug(slug);
    } catch (error) {
      console.log(error);
    }
  };

  // page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
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
      page,
      perPage,
      totalPage,
      totalItem,
      selectedSlug,
      imageLoaded,
      setImageLoaded,
    },
    func: {
      limitText,
      handleChangePage,
      handleDetail,
    },
  };
}
