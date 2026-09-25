import { educationOg, educationOgSize } from '@/lib/education-og';

export const alt = 'Mentoría para desarrolladores: Producto Real';
export const size = educationOgSize;
export const contentType = 'image/png';

export default function Image() {
    return educationOg('Mentoría para desarrolladores', 'Una URL pública, con revisión escrita');
}
