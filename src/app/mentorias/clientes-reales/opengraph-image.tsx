import { educationOg, educationOgSize } from '@/lib/education-og';

export const alt = 'Mentoría de marketing digital para negocios: Clientes Reales';
export const size = educationOgSize;
export const contentType = 'image/png';

export default function Image() {
    return educationOg('Mentoría de marketing digital para negocios', 'Un motor de captación que puedes sostener');
}
