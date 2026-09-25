import type { EducationRegion } from '@/data/education/types';
import {
    CAREER_GEO_SLUGS,
    type CareerGeoSlug,
    isCareerGeoSlug,
} from '@/data/education/career-pack-geo';

export type { EducationRegion, CareerGeoSlug };
export { CAREER_GEO_SLUGS, isCareerGeoSlug };

/** Páginas de BrandSoft Education con fondo claro y un solo CTA de diagnóstico. */
export function isEducationLanding(pathname: string | null | undefined): boolean {
    if (!pathname) return false;
    return (
        pathname === '/mentorias' ||
        pathname.startsWith('/mentorias/career-pack') ||
        pathname.startsWith('/mentorias/producto-real') ||
        pathname.startsWith('/mentorias/clientes-reales') ||
        pathname === '/crear-pagina-web-con-ia' ||
        pathname.startsWith('/crear-pagina-web-con-ia/')
    );
}

export function resolveEducationRegion(value: string | string[] | undefined): EducationRegion {
    const raw = Array.isArray(value) ? value[0] : value;
    return raw === 'tx' ? 'tx' : 'latam';
}

/** Mapea query legacy `?r=tx` o un slug GEO a región de formulario. */
export function regionFromCareerGeo(geo: CareerGeoSlug | null | undefined): EducationRegion {
    return geo === 'tx' ? 'tx' : 'latam';
}
