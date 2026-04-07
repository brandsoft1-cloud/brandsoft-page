import MoneyServiceTemplate, { buildMoneyPageMetadata } from '@/components/b2b/MoneyServiceTemplate';

export const metadata = buildMoneyPageMetadata('posicionamiento-seo-geo');

export default function Page() {
    return <MoneyServiceTemplate slug="posicionamiento-seo-geo" />;
}
