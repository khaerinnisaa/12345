import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ModeEdit } from "@mui/icons-material";
import { deleteData, fetchData, postData, putData } from "@/service/api";
import { useRouter } from "next/navigation";
import { useDrawer } from "@/contexts/DrawerContext";
import Cookies from "js-cookie";

export default function AdminLogic() {
  const token = Cookies.get("token");
  const { setLoadingRoute, setLoadingDetail } = useDrawer();
  const theme = useTheme();
  //   const maxSteps = selectedDetail.gambar.length;
  const [openModal, setOpenModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [fullData, setFullData] = useState();
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [deleteId, setDeleteId] = useState();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  const router = useRouter();
  const [loadingGet, setLoadingGet] = useState(true);
  const [modalSucces, setModalSucces] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState("");

  useEffect(() => {
    dataAdmin();
  }, [page, itemsPerPage, totalItems, totalPages, searchQuery]);

  const dataAdmin = async () => {
    try {
      fetchData(
        `/admin/admins?page=${page}&perpage=10&search=${searchQuery}`,
        token
      ).then((res) => {
        setData(res.data);
        // setFullData(res.data);
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
  const handleDetailClick = (username) => {
    try {
      router.push(`/dashboard/admin/${username}`);
      setLoadingDetail(true);
      setSelectedUsername(username);
    } catch (error) {
      console.error("Terjadi kesalahan saat memilih detail:", error);
    }
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
    setModalSucces(false);
    setEditMode(false);
    setEditingId(null);
    setName("");
    setUsername("");
  };
  // modal delete
  const openModalDelete = (username) => {
    setModalDelete(true);
    setDeleteId(username);
  };

  const handleCloseModalSucces = () => {
    setModalSucces(false);
  };
  // modal end

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
  const handleDelete = async () => {
    setLoading(true);
    deleteData(`/admin/admins/${deleteId}`, token)
      .then((res) => {
        const updateData = data.filter((item) => item.username !== deleteId);
        setData(updateData);
        setModalDelete(false);
        setLoading(false);
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
  };

  //   ketiika tombol edit di klik
  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.username === id);
    setName(selectedItem?.name);
    setUsername(selectedItem?.username);
    setPassword("");
    setOpenModal(true);
    setEditMode(true);
  };

  // lihat password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // tombol save atau simpan data // edit atau tambah data
  const handleSave = () => {
    setLoading(true);
    // edit data
    if (editMode) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("_method", "PUT");
      postData(`/admin/admins/${editingId}`, formData, token)
        .then((res) => {
          const updatedData = data.map((item) =>
            item.username === editingId ? res : item
          );
          setData(updatedData);
          dataAdmin();
          setModalSucces(true);
        })
        .catch((error) => {
          console.error("Gagal mengedit data:", error);
          // Mengambil pesan error dari respons
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
          setEditMode(false);
          setLoading(false);
          setEditingId(null);
          setName("");
          setUsername("");
          setPassword("");
          setLoading(false);
          setOpenModal(false);
        });
    } else {
      // tambah data

      const formDataPost = new FormData();
      formDataPost.append("name", name);
      formDataPost.append("username", username);
      formDataPost.append("password", password);
      postData(`/admin/admins`, formDataPost, token)
        .then((res) => {
          setData([...data, res]);
          dataAdmin();
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
          setName("");
          setUsername("");
          setPassword("");
          setLoading(false);
          setOpenModal(false);
        });

      // dataAdmin();
    }
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
      theme,
      openModal,
      modalDelete,
      showPassword,
      editMode,
      editingId,
      data,
      searchQuery,
      page,
      itemsPerPage,
      totalItems,
      totalPages,
      setSearchQuery,
      loading,
      name,
      username,
      password,
      setName,
      setUsername,
      setPassword,
      snackbar,
      loadingGet,
      modalSucces,
      selectedUsername,
    },
    func: {
      handleDetailClick,
      handleModalOpen,
      handleCloseModal,
      styleModal,
      styleModalDelete,
      openModalDelete,
      handleShowPassword,
      handleMouseDownPassword,
      handleEdit,
      handleChangePage,
      handleDelete,
      handleSave,
      closeSnackbar,
      handleCloseModalSucces,
    },
  };
}
