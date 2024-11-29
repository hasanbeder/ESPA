/**
 * Entry arşivleme sürecinde kalan süreyi tahmin eden sınıf.
 * Ağ hızı ve sayfa yükleme sürelerini analiz ederek tahmin yapar.
 */
class TimeEstimator {
    /**
     * TimeEstimator sınıfını başlatır ve varsayılan değerleri ayarlar.
     */
    constructor() {
        /** @type {Array<{pageNumber: number, loadTime: number, entryCount: number}>} */
        this.timings = [];
        
        /** @type {number} Hesaplamada kullanılacak maksimum örnek sayısı */
        this.windowSize = 10;
        
        /** @type {Array<number>} Her örnek için ağırlık katsayıları */
        this.weights = Array.from(
            {length: this.windowSize}, 
            (_, i) => (i + 1) / this.windowSize
        );
        
        /** @type {Array<number>} Ağ hızı geçmişi */
        this.networkSpeedHistory = [];
        
        /** @type {number} Ağ hızı hesabı için pencere boyutu */
        this.speedWindowSize = 5;
    }

    /**
     * Yeni bir sayfa yükleme metriği ekler.
     * @param {number} pageNumber - Yüklenen sayfanın numarası
     * @param {number} loadTime - Sayfanın yüklenme süresi (ms)
     * @param {number} entryCount - Sayfadaki entry sayısı
     */
    addPageTiming(pageNumber, loadTime, entryCount) {
        this.timings.push({ pageNumber, loadTime, entryCount });
        if (this.timings.length > this.windowSize) {
            this.timings.shift();
        }

        const speed = entryCount / loadTime;
        this.networkSpeedHistory.push(speed);
        if (this.networkSpeedHistory.length > this.speedWindowSize) {
            this.networkSpeedHistory.shift();
        }
    }

    /**
     * Ağ hızı trendini hesaplar.
     * @returns {number} 1'den büyükse hız artıyor, küçükse azalıyor demektir
     */
    getNetworkTrend() {
        if (this.networkSpeedHistory.length < 2) return 1;

        const recentSpeed = this.networkSpeedHistory
            .slice(-3)
            .reduce((a, b) => a + b, 0) / 3;
            
        const olderSpeed = this.networkSpeedHistory
            .slice(0, -3)
            .reduce((a, b) => a + b, 0) / 
            Math.max(1, this.networkSpeedHistory.length - 3);

        return recentSpeed / olderSpeed;
    }
}

// Node.js ortamında test edilebilmesi için
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TimeEstimator;
}
