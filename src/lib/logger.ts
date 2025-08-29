// ✅ Production-safe logger utility

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private isDevelopment: boolean;

  constructor() {
    // Check if we're in development environment
    this.isDevelopment = 
      import.meta.env.MODE === 'development' ||
      import.meta.env.DEV === true ||
      process.env.NODE_ENV === 'development';
  }

  private shouldLog(level: LogLevel): boolean {
    // Check for silent mode
    if (import.meta.env.SILENT_LOGS === 'true') {
      return level === 'error'; // Only errors in silent mode
    }
    
    if (level === 'error') {
      // Always log errors
      return true;
    }
    
    if (level === 'warn') {
      // Log warnings only in development or if explicitly enabled
      return this.isDevelopment || import.meta.env.SHOW_WARNINGS === 'true';
    }
    
    // Only log debug/info in development
    return this.isDevelopment;
  }

  debug(...args: any[]): void {
    if (this.shouldLog('debug')) {
      console.log(...args);
    }
  }

  info(...args: any[]): void {
    if (this.shouldLog('info')) {
      console.log(...args);
    }
  }

  warn(...args: any[]): void {
    if (this.shouldLog('warn')) {
      console.warn(...args);
    }
  }

  error(...args: any[]): void {
    if (this.shouldLog('error')) {
      console.error(...args);
    }
  }

  // Special methods for specific use cases
  mediaDebug(message: string, data?: any): void {
    if (this.isDevelopment) {
      console.log(`🖼️ ${message}`, data || '');
    }
  }

  apiDebug(message: string, data?: any): void {
    if (this.isDevelopment) {
      console.log(`🔄 ${message}`, data || '');
    }
  }

  success(message: string, data?: any): void {
    if (this.isDevelopment) {
      console.log(`✅ ${message}`, data || '');
    }
  }

  // Production-safe method for important operations
  production(level: LogLevel, message: string, data?: any): void {
    if (level === 'error') {
      console.error(`[PROD ERROR] ${message}`, data || '');
    } else if (level === 'warn') {
      console.warn(`[PROD WARN] ${message}`, data || '');
    } else if (this.isDevelopment) {
      console.log(`[${level.toUpperCase()}] ${message}`, data || '');
    }
  }
}

// Export singleton instance
export const logger = new Logger();

// Export for backwards compatibility
export default logger;
