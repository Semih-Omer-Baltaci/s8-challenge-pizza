import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import './components/SiparisForm'

function App() {
    const [count, setCount] = useState(0)
}

<div class="container">
        <header class="header">
            <h1>Teknolojik Yemekler</h1>
            <p><a href="#">Anasayfa</a> - <strong>Sipariş Oluştur</strong></p>
        </header>




    <main class="content">
            <section class="pizza-details">
                <h2>Position Absolute Acı Pizza</h2>
                <p class="price">85.50₺</p>
                <p class="rating">4.9 <span>(200)</span></p>
                <p class="description">Frontend Dev olarak hala position:absolute olayını çözemiyorsan bu çok acı pizza tam sana göre...</p>
                
                <form action="#" method="post">
                    <label>Boyut Seç *</label>
                    <div class="size-options">
                        <label><input type="radio" name="size" value="Küçük"></input> Küçük</label>
                        <label><input type="radio" name="size" value="Orta"> </input> Orta</label>
                        <label><input type="radio" name="size" value="Büyük"></input> Büyük</label>
                    </div>

                    <label for="hamur-sec">Hamur Seç *</label>
                    <select id="hamur-sec" name="hamur">
                        <option value="Kalın">Hamur Kalınlığı</option>
                        <option value="İnce">İnce Hamur</option>
                        <option value="Normal">Normal Hamur</option>
                    </select>

                    <label>Ek Malzemeler</label>
                    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div class="extra-options">
                        <label><input type="checkbox" name="extra" value="Pepperoni"> </input> Pepperoni</label>
                        <label><input type="checkbox" name="extra" value="Tavuk Izgara"></input> Tavuk Izgara</label>
                        <label><input type="checkbox" name="extra" value="Mısır" checked></input> Mısır</label>
                        <label><input type="checkbox" name="extra" value="Sarımsak"> </input> Sarımsak</label>
                        <label><input type="checkbox" name="extra" value="Ananas" checked> </input> Ananas</label>
                        <label><input type="checkbox" name="extra" value="Sosis" checked> </input> Sosis</label>
                        <label><input type="checkbox" name="extra" value="Soğan"></input>  Soğan</label>
                        <label><input type="checkbox" name="extra" value="Biber"></input> Biber</label>
                        <label><input type="checkbox" name="extra" value="Kabak"></input> Kabak</label>
                        <label><input type="checkbox" name="extra" value="Sucuk"></input> Sucuk</label>
                    </div>

                    <label for="note">Sipariş Notu</label>
                    <textarea id="note" name="note" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>

                    <div class="order-summary">
                        <div class="quantity-control">
                            <button type="button" class="quantity-btn">-</button>
                            <input type="number" value="1" min="1"></input>
                            <button type="button" class="quantity-btn">+</button>
                        </div>
                        <div class="price-summary">
                            <p>Seçimler: <span>25.00₺</span></p>
                            <p>Toplam: <span>110.50₺</span></p>
                        </div>
                    </div>

                    <button type="submit" class="order-btn">SİPARİŞ VER</button>
                </form>
            </section>
        </main>
    </div>
  

export default App
