# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

<img width="1917" height="808" alt="image" src="https://github.com/user-attachments/assets/a4b65efb-1b6c-4c06-b49e-501d9b399141" />
<img width="715" height="752" alt="image" src="https://github.com/user-attachments/assets/9b3c8f0a-e0b8-471b-9ee7-c3190e3989fd" />
<img width="706" height="753" alt="image" src="https://github.com/user-attachments/assets/32874ce0-e379-4c51-bab1-edd323e43437" />

## Penjelasan Fitur API (Tugas Pekan 7)
1. Endpoint API:** Menggunakan `https://api.adviceslip.com/advice` untuk mengambil kutipan/tips harian secara asinkron bagi para kolektor.
2. Penerapan Loading & Error:
   - Dikelola menggunakan state `loading`, `error`, dan `quote` di dalam fungsi `fetchQuote()` pada komponen `QuoteWidget.jsx`.
   - Menampilkan indikator pesan saat data sedang dimuat, pesan kesalahan jika request gagal, dan menyediakan tombol **"Coba Lagi"** untuk memicu ulang pengambilan data.
<img width="703" height="822" alt="image" src="https://github.com/user-attachments/assets/3f10230f-adf5-4a4d-b6ac-e047cab15a96" />
<img width="698" height="823" alt="image" src="https://github.com/user-attachments/assets/e59c4e92-bcb7-4b67-941e-9cf07d51bbbd" />
<img width="698" height="852" alt="image" src="https://github.com/user-attachments/assets/9d9566aa-e7df-47d3-ac6e-c1cb0d2b616a" />

