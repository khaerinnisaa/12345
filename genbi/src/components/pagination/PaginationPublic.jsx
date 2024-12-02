import { createTheme } from "@mui/material/styles";
// style pagination
const themePaginationPublic = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#000000", // Warna teks pada tombol
          // backgroundColor: "blue", // Warna latar belakang tombol
          fontFamily: "MyFont",
          fontSize: "16px",
          fontWeight: 600,
          "&:hover": {
            border: "2px solid #007AFF",
            color: "#007AFF", // Warna latar belakang tombol terpilih saat dihover
          },
          "&.Mui-selected": {
            color: "#007AFF", // Warna teks pada tombol terpilih
            backgroundColor: "#FFFFFF", // Warna latar belakang tombol terpilih
            fontFamily: "MyFont",
            fontSize: "16px",
            fontWeight: 600,
            border: "2px solid #007AFF",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              opacity: 0.8, // Warna latar belakang tombol terpilih saat dihover
            },
          },
          "&:disabled": {
            backgroundColor: "#919EAB",
            color: "#C4CDD5",
          },
        },
      },
    },
  },
});

export { themePaginationPublic };
