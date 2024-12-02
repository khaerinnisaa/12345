import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { deleteData, fetchData, postData, putData } from "@/service/api";
import { useRouter } from "next/navigation";
import { useDrawer } from "@/contexts/DrawerContext";
import Cookies from "js-cookie";

export default function PengurusLogic() {
  const token = Cookies.get("token");
  const { setLoadingRoute, setLoadingDetail } = useDrawer();
  const [selectedDetail, setSelectedDetail] = useState(null);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  //   const maxSteps = selectedDetail.gambar.length;
  const [openModal, setOpenModal] = useState(false);
  const [openModalPeriode, setOpenModalPeriode] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  const [deleteId, setDeleteId] = useState();
  const router = useRouter();
  const [kabinet, setKabinet] = useState("");
  const [kabinetId, setKabinetId] = useState();
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [position, setPosition] = useState("");
  const [division, setDivision] = useState("");
  const [cabinet, setCabinet] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataJabatan, setDataJabatan] = useState("");
  const [dataDivisi, setDataDivisi] = useState();
  const [loadingGet, setLoadingGet] = useState(true);
  const [category, setCategory] = useState(false);
  const [modalSucces, setModalSucces] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [imageLoaded, setImageLoaded] = useState([]);

  useEffect(() => {
    dataKabinet();
    dataPengurus();
    dataPosition();
    dataDivision();
    // setKabinetId(kabinet.id);
  }, [
    page,
    itemsPerPage,
    totalItems,
    totalPages,
    searchQuery,
    kabinetId,
    // kabinet,
  ]);

  // dropdown kabinet
  const dataKabinet = async () => {
    fetchData(`/admin/cabinets?page=1&perpage=100`, token).then((res) => {
      setKabinet(res.data);

      if (res.data.length > 0) {
        if (category === true) {
          setKabinetId(kabinetId);
        } else {
          setKabinetId(res.data[0].id);
        }
      }
    });
  };

  let selectedKabinet;

  kabinet &&
    kabinet.forEach((res, index) => {
      if (res.id === kabinetId) {
        selectedKabinet = res.name;
        // setKabinetId[index];
      }
    });

  // data jabatan
  const dataPosition = async () => {
    fetchData(`/admin/positions`, token).then((res) => {
      setDataJabatan(res.data);
    });
  };

  // data divisi
  const dataDivision = async () => {
    fetchData(`/admin/divisions`, token).then((res) => {
      setDataDivisi(res.data);
    });
  };

  // kondisi agar value divisi bernilai angka
  dataDivisi &&
    dataDivisi.map((res) => {
      if (res.name === division) {
        setDivision(res.id);
      }
    });
  // kondisi agar value jabatan bernilai angka
  dataJabatan &&
    dataJabatan.map((res) => {
      if (res.name === position) {
        setPosition(res.id);
      }
    });
  // kondisi agar value kabinet bernilai angka
  kabinet &&
    kabinet.map((res) => {
      if (res.name === cabinet) {
        setCabinet(res.id);
      }
    });

  // data pengurus
  const dataPengurus = async () => {
    try {
      fetchData(
        `/admin/members/cabinets/${kabinetId}?page=${page}&perpage=10&search=${searchQuery}`,
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
    try {
      router.push(`/dashboard/pengurus/${id}`);
      setLoadingDetail(true);
      setSelectedId(id);
    } catch (error) {
      console.error("Terjadi kesalahan saat memilih detail:", error);
    }
  };
  //   close detail
  const handleCloseDetail = () => {
    setSelectedDetail(null);
  };

  // modal
  //   modal add pengurus
  const handleModalOpen = () => {
    setOpenModal(true);
  };
  //   close modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setModalDelete(false);
    setOpenModalPeriode(false);
    setEditMode(false);
    setName("");
    setMajor("");
    setAddress("");
    setGender("");
    setImage();
    setPosition("");
    setDivision("");
    setCabinet("");
    setImage("");
    setPreviewImage("");
  };
  // modal delete
  const openModalDelete = (id) => {
    setModalDelete(true);
    setDeleteId(id);
  };
  // modal add periode
  const handleModalPeriode = () => {
    setOpenModalPeriode(true);
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

  //   ketiika tombol edit di klik
  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.id === id);
    setName(selectedItem?.name);
    setMajor(selectedItem?.major);
    setAddress(selectedItem?.address);
    setGender(selectedItem?.gender);
    setImage(selectedItem?.image);
    setPosition(selectedItem?.position);
    setDivision(selectedItem?.division);
    setCabinet(selectedItem?.cabinet);
    setPreviewImage(selectedItem?.image);
    setOpenModal(true);
    setEditMode(true);
  };

  // penanganan gambar
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

  // fungsi untuk menghapus gambar yang di pilih ketika menambah/mengedit data
  const removeImage = () => {
    // setImage({ files: [], previewImages: [] });
    setSelectedFile(null);
    setPreviewImage(null);
  };

  // tombol input image
  const handleChooseFileClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  // page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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

  // delete data
  const handleDelete = async (id) => {
    setLoading(true);
    deleteData(`/admin/members/${deleteId}`, token)
      .then((res) => {
        const updateData = data.filter((item) => item.id !== deleteId);
        setData(updateData);
        setModalDelete(false);
        setLoading(false);
        dataPengurus();
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
    dataPengurus();
  };

  // add / update data
  const handleSave = () => {
    setLoading(true);
    if (editMode) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("major", major);
      formData.append("address", address);
      formData.append("gender", gender);

      // Tambahkan selectedFile hanya jika ada
      if (selectedFile) {
        formData.append("image", selectedFile); // Pastikan ini adalah file, bukan URL
      }

      formData.append("position_id", position);
      formData.append("division_id", division);
      formData.append("cabinet_id", cabinet);
      formData.append("_method", "PUT");

      // Cek isi FormData untuk memastikan data benar
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value); // Debug untuk memastikan file terkirim
      }

      postData(`/admin/members/${editingId}`, formData, token)
        .then((res) => {
          const updatedData = data.map((item) =>
            item.id === editingId ? res : item
          );
          setData(updatedData);
          // setLoading(true);
          dataPengurus();
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
          setEditMode(false);
          setEditingId(null);
          setLoading(false);
          setOpenModal(false);
          setName("");
          setMajor("");
          setAddress("");
          setGender("");
          setImage();
          setPosition("");
          setDivision("");
          setCabinet("");
          setImage("");
          setPreviewImage(null);
          setSelectedFile(null);
        });
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("major", major);
      formData.append("address", address);
      formData.append("gender", gender);
      formData.append("image", selectedFile);
      formData.append("position_id", position);
      formData.append("division_id", division);
      formData.append("cabinet_id", cabinet);

      postData(`/admin/members`, formData, token)
        .then((res) => {
          setData([...data, res]);
          // setLoading(true);
          dataPengurus();
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
          setName("");
          setMajor("");
          setAddress("");
          setGender("");
          setImage();
          setPosition("");
          setDivision("");
          setCabinet("");
          setImage("");
          setPreviewImage(null);
          setSelectedFile(null);
        });
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
    overflowY: "scroll",
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
      activeStep,
      theme,
      openModal,
      modalDelete,
      openModalPeriode,
      editingId,
      editMode,
      data,
      searchQuery,
      page,
      itemsPerPage,
      totalItems,
      totalPages,
      setSearchQuery,
      kabinet,
      kabinetId,
      selectedKabinet,
      loading,
      name,
      setName,
      major,
      setMajor,
      address,
      setAddress,
      gender,
      setGender,
      image,
      position,
      setPosition,
      division,
      setDivision,
      cabinet,
      setCabinet,
      dataJabatan,
      dataDivisi,
      snackbar,
      previewImage,
      loadingGet,
      modalSucces,
      selectedId,
      imageLoaded,
      setImageLoaded,
    },
    func: {
      handleDetailClick,
      handleCloseDetail,
      handleModalOpen,
      handleCloseModal,
      styleModal,
      styleModalDelete,
      openModalDelete,
      handleModalPeriode,
      handleEdit,
      handleChangePage,
      handleCategory,
      handleDelete,
      handleSave,
      handleImageChange,
      handleChooseFileClick,
      closeSnackbar,
      handleCloseModalSucces,
      removeImage,
      handleDrop,
      handleDragOver,
      handleImageLoad,
    },
  };
}
