import MoneyServiceTemplate, { buildMoneyPageMetadata } from '@/components/b2b/MoneyServiceTemplate';

export const metadata = buildMoneyPageMetadata('generacion-leads-b2b');

export default function Page() {
    return <MoneyServiceTemplate slug="generacion-leads-b2b" />;
}
