import MoneyServiceTemplate, { buildMoneyPageMetadata } from '@/components/b2b/MoneyServiceTemplate';

export const metadata = buildMoneyPageMetadata('desarrollo-software-ia');

export default function Page() {
    return <MoneyServiceTemplate slug="desarrollo-software-ia" />;
}
