# Katkıda Bulunma Rehberi

Ekşi Sözlük Personal Archiver (ESPA) projesine katkıda bulunmak istediğiniz için teşekkür ederiz! 

## Önemli Not

Bu projeye katkıda bulunurken:
- Ekşi Sözlük'ün gizlilik politikasına ve kullanım koşullarına uygun değişiklikler yapın
- Kişisel kullanım amacı dışına çıkmayın
- Telif haklarına ve kişisel verilerin korunmasına özen gösterin
- Ekşi Sözlük'ün normal işleyişini etkileyecek değişiklikler yapmayın

## Nasıl Katkıda Bulunabilirsiniz?

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: XYZ eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Yeni bir Pull Request oluşturun

## Kod Standartları

- Tüm kod JavaScript standart stili takip etmelidir
- Kodunuzu açıklayıcı yorumlarla belgelendirin
- Karmaşık fonksiyonlar için JSDoc kullanın
- Değişken ve fonksiyon isimleri açıklayıcı olmalıdır
- Türkçe karakter kullanmaktan kaçının (değişken/fonksiyon isimlerinde)
- Kişisel veri işleyen fonksiyonlarda özel dikkat gösterin
- Arşivleme işlemlerinde güvenlik kontrollerini atlamamaya özen gösterin

## Commit Mesajları

Commit mesajlarınız şu formatta olmalıdır:

```
<type>: <description>

[optional body]
```

Tipler:
- `feat`: Yeni özellik
- `fix`: Hata düzeltmesi
- `docs`: Sadece dokümantasyon değişiklikleri
- `style`: Kod davranışını etkilemeyen değişiklikler (boşluk, format, noktalama vb.)
- `refactor`: Hata düzeltmesi veya özellik eklemeyen kod değişiklikleri
- `perf`: Performans iyileştirmeleri
- `test`: Test ekleme veya düzenleme
- `chore`: Yapılandırma değişiklikleri

## Pull Request Süreci

1. PR açmadan önce kodunuzu test edin
2. PR'ınızın açıklamasında değişiklikleri detaylı bir şekilde anlatın
3. Gerekiyorsa ekran görüntüleri ekleyin
4. Varsa ilgili issue'ları referans gösterin
5. Değişikliklerinizin gizlilik politikasına uygunluğunu kontrol edin

## Hata Raporlama

Bir hata bulduğunuzda:

1. Önce var olan issue'ları kontrol edin
2. Yeni bir issue açın ve şunları belirtin:
   - Hatanın tam olarak ne olduğu
   - Hatayı nasıl tetikleyebileceğimiz
   - Beklenen davranış
   - Tarayıcı ve Tampermonkey versiyonu
   - Varsa ekran görüntüleri (kişisel verileri gizleyerek)

## Yeni Özellik Önerme

1. Önce var olan issue'ları kontrol edin
2. Yeni bir issue açın ve şunları belirtin:
   - Özelliğin detaylı açıklaması
   - Bu özelliğin neden gerekli olduğu
   - Varsa örnek kullanım senaryoları
   - Özelliğin gizlilik politikasına uygunluğu

## İletişim

Sorularınız için:
- Issue açabilirsiniz
- GitHub: [@hasanbeder](https://github.com/hasanbeder)
- X (Twitter): [@hasanbeder](https://x.com/hasanbeder)
