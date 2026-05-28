/**
 * Sistema de Analytics para el Portfolio
 * 
 * Este archivo contiene las funciones para rastrear eventos importantes
 * como descargas de CV, clics en proyectos, etc.
 */

// Tipos de eventos que se pueden rastrear
export type AnalyticsEvent = 
  | "cv_download"
  | "project_click"
  | "contact_email_click"
  | "social_link_click";

interface EventData {
  event: AnalyticsEvent;
  language?: string;
  projectName?: string;
  socialPlatform?: string;
  [key: string]: string | number | boolean | undefined;
}

interface AnalyticsWindow extends Window {
  gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void;
  va?: (command: 'track', eventName: string, params?: Record<string, unknown>) => void;
  fbq?: (command: 'trackCustom', eventName: string, params?: Record<string, unknown>) => void;
  plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
}

/**
 * Función principal para rastrear eventos
 * Soporta múltiples plataformas de analytics
 */
export function trackEvent(data: EventData) {
  const timestamp = new Date().toISOString();
  
  // 1. Console log para desarrollo (puedes comentar en producción)
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', {
      ...data,
      timestamp,
    });
  }

  // 2. Google Analytics (si está configurado)
  if (typeof window !== 'undefined' && (window as AnalyticsWindow).gtag) {
    (window as AnalyticsWindow).gtag?.('event', data.event, {
      ...data,
      timestamp,
    });
  }

  // 3. Vercel Analytics (si está instalado)
  if (typeof window !== 'undefined' && (window as AnalyticsWindow).va) {
    (window as AnalyticsWindow).va?.('track', data.event, data);
  }

  // 4. Facebook Pixel (si está configurado)
  if (typeof window !== 'undefined' && (window as AnalyticsWindow).fbq) {
    (window as AnalyticsWindow).fbq?.('trackCustom', data.event, data);
  }

  // 5. Plausible Analytics (si está configurado)
  if (typeof window !== 'undefined' && (window as AnalyticsWindow).plausible) {
    (window as AnalyticsWindow).plausible?.(data.event, { props: data });
  }
}

/**
 * Rastrear descarga de CV
 */
export function trackCVDownload(language: string) {
  trackEvent({
    event: "cv_download",
    language,
    cv_name: `CV-Karla-Agraz-${language.toUpperCase()}.pdf`,
  });
}

/**
 * Rastrear clic en proyecto
 */
export function trackProjectClick(projectName: string, projectUrl: string) {
  trackEvent({
    event: "project_click",
    projectName,
    projectUrl,
  });
}

/**
 * Rastrear clic en email
 */
export function trackContactEmailClick(email: string) {
  trackEvent({
    event: "contact_email_click",
    email,
  });
}

/**
 * Rastrear clic en redes sociales
 */
export function trackSocialLinkClick(platform: string, url: string) {
  trackEvent({
    event: "social_link_click",
    socialPlatform: platform,
    url,
  });
}

