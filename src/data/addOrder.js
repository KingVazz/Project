<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clickable Image Example</title>
</head>
<body>

    <!-- Gambar yang dapat diklik -->
    <img src="AyamBakar.jpeg" alt="Clickable Image" id="clickableImage">

    <script>
        // Mendapatkan referensi ke elemen gambar berdasarkan ID
        var clickableImage = document.getElementById("clickableImage");

        // Menambahkan event listener untuk menanggapi klik pada gambar
        clickableImage.addEventListener("click", function() {
            // Ganti URL halaman sesuai kebutuhan Anda
            window.location.replace("halaman-tujuan.html");
            // atau
            // window.location.href = "halaman-tujuan.html";
        });
    </script>

</body>
</html>
