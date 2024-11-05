import App from "../App";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const submitBtn = document.getElementById('submitBtn');

    // Form durumunu güncelleyen fonksiyon
    function updateFormState() {
        const size = document.querySelector('input[name="size"]:checked');
        const hamur = document.getElementById('hamur-sec').value;
        const isValid = size && hamur;  // Formun geçerlilik durumu

        // Submit butonunu aktif/pasif yap
        submitBtn.disabled = !isValid;
    }

    // Form submit işlemi
    function handleSubmit(event) {
        event.preventDefault();

        // Form verilerini topla
        const size = document.querySelector('input[name="size"]:checked').value;
        const hamur = document.getElementById('hamur-sec').value;

        const data = {
            size: size,
            hamur: hamur
        };

        // Axios ile POST isteği
        axios.post('https://reqres.in/api/pizza', data)
            .then(response => {
                console.log("Sipariş Özeti:", response.data);
                alert("Sipariş başarıyla oluşturuldu! Detaylar konsola yazdırıldı.");
            })
            .catch(error => {
                console.error("Sipariş gönderimi başarısız:", error);
                alert("Sipariş gönderilirken bir hata oluştu.");
            });
    }

    // Event listeners
    form.addEventListener('change', updateFormState);
});

