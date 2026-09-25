export type EducationRegion = 'latam' | 'tx';

export type ProgramSlug = 'producto-real' | 'clientes-reales';

export type PricePair = {
    base: string | null;
    completa: string | null;
};

export type FaqItem = {
    q: string;
    a: string;
};

export type RegionCopy = {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    lede: string;
    symptoms: readonly [string, string, string];
    buildTitle: string;
    buildBody: string;
    diagram: readonly { label: string; detail: string }[];
    notPromise: string;
    requirementsIntro: string;
    requirements: readonly string[];
    faqs: readonly FaqItem[];
    marketNote: string;
};

export type Delivery = {
    name: string;
    deliver: string;
    acceptance: string;
};

export type ChecklistBlock = {
    title: string;
    detail: string;
};

export type CalendarStep = {
    when: string;
    what: string;
};

export type RouteTier = {
    id: 'base' | 'completa';
    name: string;
    summary: string;
    includes: readonly string[];
};

export type EducationProgram = {
    slug: ProgramSlug;
    keyword: string;
    path: string;
    cardQuestion: string;
    cardTitle: string;
    cardBody: string;
    checklistIntro: string;
    deliveries: readonly Delivery[];
    checklist: readonly ChecklistBlock[];
    calendarNote: string;
    calendar: readonly CalendarStep[];
    routes: readonly RouteTier[];
    reference: {
        kicker: string;
        title: string;
        body: string;
    };
    outcomes: readonly string[];
    regions: Record<EducationRegion, RegionCopy>;
};
