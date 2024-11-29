# ESPA Geliştirici Kılavuzu

## Geliştirme Ortamı Kurulumu

1. Repository'yi klonlayın:
```bash
git clone https://github.com/hasanbeder/ESPA.git
cd ESPA
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Tampermonkey'i tarayıcınıza kurun ve geliştirici modunu etkinleştirin.

## Dosya Yapısı

```
ESPA/
├── src/                    # Kaynak kodlar
│   ├── TimeEstimator.js   # Süre tahmin sınıfı
│   └── EntryArchiver.js   # Ana arşivleme sınıfı
├── tests/                  # Test dosyaları
├── .github/               # GitHub şablonları
├── screenshots/           # Ekran görüntüleri
└── docs/                  # Dokümantasyon
```

## Test Etme

Unit testleri çalıştırma:
```bash
npm test
```

Sürekli test modu:
```bash
npm run test:watch
```

## Debug İpuçları

1. Tarayıcı Konsolu
- Tampermonkey script'i çalışırken F12 ile konsolu açın
- `debug` değişkenini `true` yaparak detaylı logları görün

2. Yaygın Hatalar
- CORS hataları için `@grant` direktiflerini kontrol edin
- Sayfa yapısı değişiklikleri için selektörleri güncelleyin

## Kod Stil Rehberi

1. Genel Kurallar
- 2 boşluk indentasyon
- Camel case değişken isimleri
- Anlamlı fonksiyon ve değişken isimleri

2. Dokümantasyon
- Tüm public metodlar için JSDoc yorumları
- Karmaşık algoritmalarda satır içi yorumlar

3. Testler
- Her yeni özellik için test yazın
- Edge case'leri test etmeyi unutmayın

## Pull Request Süreci

1. Feature branch oluşturun
2. Kodunuzu yazın ve test edin
3. PR şablonunu eksiksiz doldurun
4. Review için gönderin

## Sürüm Yönetimi

- Semantic Versioning (MAJOR.MINOR.PATCH)
- Her değişiklik CHANGELOG.md'ye eklenmeli
- Tag'ler için açıklayıcı mesajlar yazın
