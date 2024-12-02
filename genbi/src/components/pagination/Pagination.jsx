import { createTheme } from "@mui/material/styles";
// style pagination
const themePagination = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#9CA3AF", // Warna teks pada tombol
          // backgroundColor: "blue", // Warna latar belakang tombol
          fontFamily: "MyFont",
          fontSize: "16px",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "#23176D",
            color: "white", // Warna latar belakang tombol terpilih saat dihover
          },
          "&.Mui-selected": {
            color: "white", // Warna teks pada tombol terpilih
            backgroundColor: "#23176D", // Warna latar belakang tombol terpilih
            fontFamily: "MyFont",
            fontSize: "16px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#23176D",
              opacity: 0.8, // Warna latar belakang tombol terpilih saat dihover
            },
          },
        },
      },
    },
  },
});

export { themePagination };
