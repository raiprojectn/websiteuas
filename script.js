const formTransaksi = document.getElementById("formTransaksi");

if (formTransaksi) {
  formTransaksi.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const jumlah = document.getElementById("jumlah").value.trim();
    const kategori = document.getElementById("kategori").value;

    if (!nama || !jumlah || !kategori) {
      alert("Wajib mengisi form transaksi sebelum dikirim.");
      return;
    }

    alert("transaksi berhasil disimpan, terima kasih.");
    formTransaksi.reset();
  });
}

const USERNAME = "admin";
const PASSWORD = "12345";

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const u = document.getElementById("username").value.trim();
    const p = document.getElementById("password").value.trim();

    if (u === USERNAME && p === PASSWORD) {
      localStorage.setItem("isLogin", "yes");
      localStorage.setItem("user", u);
      window.location = "index.html";
    } else {
      alert("username / password salah");
    }
  });
}