import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ModeEdit } from "@mui/icons-material";
import { deleteData, fetchData, postData, putData } from "@/service/api";
import { useRouter } from "next/navigation";
import { useDrawer } from "@/contexts/DrawerContext";
import Cookies from "js-cookie";

export default function PeriodeLogic() {
  const token = Cookies.get("token");
  const { setLoadingRoute, setLoadingDetail } = useDrawer();
  const router = useRouter();
  const [selectedDetail, setSelectedDetail] = useState(null);
  const theme = useTheme();
  //   const maxSteps = selectedDetail.gambar.length;
  const [openModal, setOpenModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState();
  const [totalPages, setTotalPages] = useState();
  const [totalItems, setTotalItems] = useState();
  const [name, setName] = useState();
  const [period, setPeriod] = useState();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loadingGet, setLoadingGet] = useState(true);
  const [modalSucces, setModalSucces] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    dataKabinet();
  }, [page, itemsPerPage, totalItems, totalPages, searchQuery]);

  const dataKabinet = async () => {
    try {
      fetchData(
        `admin/cabinets?page=${page}&perpage=10&search=${searchQuery}`,
        token
      ).then((res) => {
        setData(res.data);
        setTotalPages(res.meta.total_page);
        setTotalItems(res.meta.total_item);
        setItemsPerPage(res.meta.perpage);
        setLoadingRoute(false);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingGet(false);
    }
  };

  // Function untuk menangani klik pada item
  const handleDetailClick = (id) => {
    router.push(`/dashboard/kabinet/${id}`);
    setLoadingDetail(true);
    setSelectedId(id);
  };
  //   close detail
  const handleCloseDetail = () => {
    setSelectedDetail(null);
  };

  // modal
  //   modal add open
  const handleModalOpen = () => {
    setOpenModal(true);
  };
  //   close modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setModalDelete(false);
    setEditMode(false);
    setEditingId(null);
    setName("");
    setPeriod("");
  };
  // modal delete
  const openModalDelete = (id) => {
    setModalDelete(true);
    setDeleteId(id);
  };
  const handleCloseModalSucces = () => {
    setModalSucces(false);
  };
  // modal end

  // page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // snackbar
  // handle close snackbar
  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ open: false, message: "" });
  };
  // snackbar end

  // delete data
  const handleDelete = async (id) => {
    setLoading(true);
    deleteData(`/admin/cabinets/${deleteId}`, token)
      .then((res) => {
        const updateData = data.filter((item) => item.id !== deleteId);
        setData(updateData);
        setModalDelete(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal menghapus data:", error);
        let pesanError = "Terjadi kesalahan saat menghapus data";

        if (error.response) {
          const errors = error.response.data.errors;

          if (errors && typeof errors === "object") {
            // Menggabungkan semua pesan error dari objek 'errors'
            pesanError = Object.values(errors)
              .flat() // Untuk menangani array dalam objek, misalnya 'period'
              .join(" ");
          } else {
            // Jika tidak ditemukan objek 'errors', gunakan pesan default dari response
            pesanError = error.response.data.message || pesanError;
          }
        }

        setSnackbar({
          open: true,
          message: pesanError,
        });
      });
  };

  //   ketiika tombol edit di klik
  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.id === id);
    setName(selectedItem?.name);
    setPeriod(selectedItem?.period);
    setOpenModal(true);
    setEditMode(true);
  };

  // tombol save atau simpan data // edit atau tambah data
  const handleSave = () => {
    setLoading(true);
    // edit data
    if (editMode) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("period", period);
      formData.append("_method", "PUT");
      postData(`/admin/cabinets/${editingId}`, formData, token)
        .then((res) => {
          const updatedData = data.map((item) =>
            item.id === editingId ? res : item
          );
          setData(updatedData);
          dataKabinet();
          setEditMode(false);
          setModalSucces(true);
        })
        .catch((error) => {
          console.error("Gagal menambahkan data:", error);
          let pesanError = "Terjadi kesalahan saat menambah data";

          if (error.response) {
            const errors = error.response.data.errors;

            if (errors && typeof errors === "object") {
              // Menggabungkan semua pesan error dari objek 'errors'
              pesanError = Object.values(errors)
                .flat() // Untuk menangani array dalam objek, misalnya 'period'
                .join(" ");
            } else {
              // Jika tidak ditemukan objek 'errors', gunakan pesan default dari response
              pesanError = error.response.data.message || pesanError;
            }
          }

          setSnackbar({
            open: true,
            message: pesanError,
          });
        });

    } else {
      // tambah data

      const formDataPost = new FormData();
      formDataPost.append("name", name);
      formDataPost.append("period", period);
      postData(`/admin/cabinets`, formDataPost, token)
        .then((res) => {
          setData([...data, res]);
          dataKabinet();
          setModalSucces(true);
        })
        .catch((error) => {
          console.error("Gagal menambahkan data:", error);
          let pesanError = "Terjadi kesalahan saat menambah data";

          if (error.response) {
            const errors = error.response.data.errors;

            if (errors && typeof errors === "object") {
              // Menggabungkan semua pesan error dari objek 'errors'
              pesanError = Object.values(errors)
                .flat() // Untuk menangani array dalam objek, misalnya 'period'
                .join(" ");
            } else {
              // Jika tidak ditemukan objek 'errors', gunakan pesan default dari response
              pesanError = error.response.data.message || pesanError;
            }
          }

          setSnackbar({
            open: true,
            message: pesanError,
          });
        });

      dataKabinet();
    }

    setEditingId(null);
    setName("");
    setPeriod("");
    setLoading(false);
    setOpenModal(false);
    dataKabinet();
  };

  // style modal tambah data
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
    overflowY: "auto",
    // outline: "none",
  };

  // style modal hapus
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
      selectedDetail,
      theme,
      openModal,
      modalDelete,
      editMode,
      editingId,
      data,
      searchQuery,
      setSearchQuery,
      page,
      itemsPerPage,
      totalItems,
      totalPages,
      snackbar,
      name,
      period,
      setName,
      setPeriod,
      loading,
      loadingGet,
      modalSucces,
      selectedId,
    },
    func: {
      handleDetailClick,
      handleCloseDetail,
      handleModalOpen,
      handleCloseModal,
      styleModal,
      styleModalDelete,
      openModalDelete,
      handleEdit,
      handleSave,
      handleDelete,
      closeSnackbar,
      handleCloseModalSucces,
      handleChangePage,
    },
  };
}
