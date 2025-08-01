import { ReportHandler } from 'web-vitals';
import reportWebVitals from './reportWebVitals';

jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn()
}));

describe('reportWebVitals', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not call web-vitals when onPerfEntry is not provided', () => {
    reportWebVitals();
    expect(require('web-vitals').getCLS).not.toHaveBeenCalled();
  });

  it('should not call web-vitals when onPerfEntry is not a function', () => {
    reportWebVitals({} as ReportHandler);
    expect(require('web-vitals').getCLS).not.toHaveBeenCalled();
  });

  it('should call all web-vitals functions when valid onPerfEntry is provided', async () => {
    const mockOnPerfEntry = jest.fn();
    await reportWebVitals(mockOnPerfEntry);

    const webVitals = require('web-vitals');
    expect(webVitals.getCLS).toHaveBeenCalledWith(mockOnPerfEntry);
    expect(webVitals.getFID).toHaveBeenCalledWith(mockOnPerfEntry);
    expect(webVitals.getFCP).toHaveBeenCalledWith(mockOnPerfEntry);
    expect(webVitals.getLCP).toHaveBeenCalledWith(mockOnPerfEntry);
    expect(webVitals.getTTFB).toHaveBeenCalledWith(mockOnPerfEntry);
  });
});
