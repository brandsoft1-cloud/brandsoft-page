import { educationOg, educationOgSize } from '@/lib/education-og';

export const alt = 'BrandSoft Education — mentoría técnica 1 a 1';
export const size = educationOgSize;
export const contentType = 'image/png';

export default function Image() {
    return educationOg('BrandSoft Education', 'Mentoría 1 a 1 · empleo, producto o clientes');
}
