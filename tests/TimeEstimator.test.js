/**
 * @jest-environment jsdom
 */

const TimeEstimator = require('../src/TimeEstimator');

describe('TimeEstimator', () => {
    let estimator;

    beforeEach(() => {
        estimator = new TimeEstimator();
    });

    test('should initialize with correct default values', () => {
        expect(estimator.timings).toEqual([]);
        expect(estimator.windowSize).toBe(10);
        expect(estimator.weights.length).toBe(10);
        expect(estimator.networkSpeedHistory).toEqual([]);
        expect(estimator.speedWindowSize).toBe(5);
    });

    test('should add page timing correctly', () => {
        estimator.addPageTiming(1, 1000, 20);
        expect(estimator.timings.length).toBe(1);
        expect(estimator.networkSpeedHistory.length).toBe(1);
    });

    test('should maintain correct window size', () => {
        // Add more timings than window size
        for (let i = 0; i < 15; i++) {
            estimator.addPageTiming(i, 1000, 20);
        }
        expect(estimator.timings.length).toBe(10);
        expect(estimator.networkSpeedHistory.length).toBe(5);
    });

    test('should calculate network trend correctly', () => {
        // Add some sample timings
        estimator.addPageTiming(1, 1000, 20); // speed: 0.02
        estimator.addPageTiming(2, 900, 20);  // speed: 0.022
        estimator.addPageTiming(3, 800, 20);  // speed: 0.025
        
        const trend = estimator.getNetworkTrend();
        expect(trend).toBeGreaterThan(0);
    });
});
