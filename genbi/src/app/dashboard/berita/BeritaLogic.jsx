"use client";
import { Data } from "@/values/Constant";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { deleteData, fetchData, postData, putData } from "@/service/api";
import { useParams, useRouter } from "next/navigation";
import { useDrawer } from "@/contexts/DrawerContext";
import Cookies from "js-cookie";

export default function BeritaLogic() {
  const token = Cookies.get("token");
  const { setLoadingRoute, setLoadingDetail } = useDrawer();
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState();
  const [existingImage, setExistingImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalItems, setTotalItems] = useState();
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  const { slug } = useParams();
  const router = useRouter();
  const [loadingGet, setLoadingGet] = useState(true);
  const [modalSucces, setModalSucces] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [imageLoaded, setImageLoaded] = useState([]);

  useEffect(() => {
    dataBerita();
  }, [page, totalPage, totalItems, searchQuery]);

  const dataBerita = async () => {
    try {
      fetchData(
        `/admin/news?page=${page}&perpage=10&search=${searchQuery}`,
        token
      ).then((res) => {
        setData(res.data);
        setPage(res.meta.page);
        setTotalPage(res.meta.total_page);
        setTotalItems(res.meta.total_item);
        setLoadingRoute(false);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingGet(false);
    }
  };

  const handleDetailClick = (slug) => {
    try {
      router.push(`/dashboard/berita/${slug}`);
      setLoadingDetail(true);
      setSelectedSlug(slug);
    } catch (error) {
      console.error("Terjadi kesalahan saat memilih detail:", error);
    }
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  // page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // imageload
  const handleImageLoad = (id) => {
    // Menambahkan id ke array imageLoaded jika gambar sudah selesai di-load
    setImageLoaded((prev) => [...prev, id]);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalDelete(false);
    setEditMode(false);
    setEditingId(null);
    setTitle("");
    setContent("");
    setImage("");
    setPreviewImage(null);
  };

  const openModalDelete = (id) => {
    setModalDelete(true);
    setDeleteId(id);
  };

  const handleCloseModalSucces = () => {
    setModalSucces(false);
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.slug === id);
    setTitle(selectedItem?.title);
    setContent(selectedItem?.content);
    setExistingImage(selectedItem.image);
    setPreviewImage(selectedItem.image);
    setOpenModal(true);
    setEditMode(true);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ open: false, message: "" });
  };

  const handleChooseFileClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
      setPreviewImage(URL.createObjectURL(selectedImage));
      setSelectedFile(e.target.files[0]);
    }
  };

  // fungsi untuk menghapus gambar yang di pilih ketika menambah/mengedit data
  const removeImage = () => {
    // setImage({ files: [], previewImages: [] });
    setSelectedFile(null);
    setPreviewImage(null);
  };

  const handleDrop = (event) => {
    const selectedImage = event.dataTransfer.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
      setPreviewImage(URL.createObjectURL(selectedImage));
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDelete = async () => {
    setLoading(true);
    deleteData(`/admin/news/${deleteId}`, token)
      .then((res) => {
        const updateData = data.filter((item) => item.id !== deleteId);
        setData(updateData);
        setModalDelete(false);
        setLoading(false);
        dataBerita();
      })
      .catch((error) => {
        console.log("Gagal menghapus data:", error);
        let pesanError = "Terjadi kesalahan saat menghapus data";

        if (error.response) {
          pesanError = error.response.data.message || pesanError;
        }

        setSnackbar({
          open: true,
          message: pesanError,
        });
        setLoading(false);
      });
    dataBerita();
  };

  const handleSave = async () => {
    setLoading(true);

    if (editMode) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);

      if (selectedFile) {
        formData.append("image", selectedFile);
      }
      formData.append("_method", "PUT");
      postData(`/admin/news/${editingId}`, formData, token)
        .then((res) => {
          const updatedData = data.map((item) =>
            item.slug === editingId ? res : item
          );
          setData(updatedData);
          dataBerita();
          setModalSucces(true);
        })
        .catch((error) => {
          console.error("Gagal mengedit data:", error);
          let pesanError = "Terjadi kesalahan saat mengedit data";

          if (error.response) {
            pesanError = error.response.data.message || pesanError;
          }

          setSnackbar({
            open: true,
            message: pesanError,
          });
        })
        .finally(() => {
          setEditingId(null);
          setLoading(false);
          setOpenModal(false);
          setTitle("");
          setContent("");
          setImage("");
          setSelectedFile("");
          setPreviewImage(null);
        });
    } else {
      const formDataPost = new FormData();
      formDataPost.append("title", title);
      formDataPost.append("content", content);

      if (image) {
        formDataPost.append("image", selectedFile);
      }
      postData(`/admin/news`, formDataPost, token)
        .then((res) => {
          setData([...data, res.data]);
          // setOpenModal(false);
          dataBerita();
          setModalSucces(true);
        })
        .catch((error) => {
          console.error("Gagal menambahkan data:", error);
          let pesanError = "Terjadi kesalahan saat menambah data";

          if (error.response) {
            pesanError = error.response.data.message || pesanError;
          }

          setSnackbar({
            open: true,
            message: pesanError,
          });
        })
        .finally(() => {
          setLoading(false);
          setOpenModal(false);
          setTitle("");
          setContent("");
          setImage("");
          setSelectedFile("");
          setPreviewImage(null);
        });
    }
  };

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    maxHeight: "95vh",
    overflowY: "scroll",
  };

  const styleModalDelete = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    outline: "none",
  };

  return {
    value: {
      theme,
      openModal,
      modalDelete,
      editingId,
      editMode,
      data,
      searchQuery,
      setSearchQuery,
      loading,
      snackbar,
      page,
      totalItems,
      totalPage,
      title,
      content,
      image,
      setTitle,
      setContent,
      setImage,
      previewImage,
      loadingGet,
      modalSucces,
      selectedSlug,
      imageLoaded,
      setImageLoaded,
    },

    func: {
      handleDetailClick,
      handleModalOpen,
      handleCloseModal,
      styleModal,
      styleModalDelete,
      openModalDelete,
      handleEdit,
      handleDelete,
      closeSnackbar,
      handleSave,
      handleChooseFileClick,
      handleImageChange,
      handleDrop,
      handleDragOver,
      removeImage,
      handleCloseModalSucces,
      handleChangePage,
      handleImageLoad,
    },
  };
}
