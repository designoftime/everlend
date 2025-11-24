export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    benefits: string[];
    steps: string[];
    icon?: string;
}

export const services: Service[] = [
    {
        slug: "mortgage-pre-approval",
        title: "Mortgage Pre-Approval",
        shortDescription: "Get a clear picture of how much home you can afford before you start searching.",
        longDescription: "We analyze your income, credit, and financial profile to provide a fast and accurate pre-approval, strengthening your offer and boosting your confidence.",
        benefits: [
            "Know your exact budget before hunting",
            "Lock in a rate for up to 120 days",
            "Strengthen your offer in competitive markets",
            "Identify and fix credit issues early"
        ],
        steps: [
            "Initial Consultation",
            "Document Collection",
            "Credit Analysis",
            "Pre-Approval Letter Issued"
        ]
    },
    {
        slug: "home-purchase-mortgage",
        title: "Home Purchase Mortgage",
        shortDescription: "Secure competitive rates and tailor-made mortgage solutions.",
        longDescription: "Whether it’s a condo, townhouse, or detached home, we secure competitive rates and tailor-made mortgage solutions that match your goals, timeline, and lifestyle.",
        benefits: [
            "Access to 50+ lenders",
            "Customized term and amortization",
            "First-time home buyer incentives guidance",
            "Stress-free closing process"
        ],
        steps: [
            "Needs Assessment",
            "Lender Selection",
            "Application Submission",
            "Approval & Funding"
        ]
    },
    {
        slug: "refinance-equity-take-out",
        title: "Refinance & Equity Take-Out",
        shortDescription: "Tap into your home’s equity for renovations, debt consolidation, or investment.",
        longDescription: "We help you unlock funds at the best possible rates without unnecessary stress. Use your home equity to pay off high-interest debt, renovate, or invest.",
        benefits: [
            "Lower your monthly payments",
            "Access tax-efficient capital",
            "Consolidate high-interest debt",
            "Fund major renovations"
        ],
        steps: [
            "Equity Assessment",
            "Goal Planning",
            "Refinance Application",
            "Funds Released"
        ]
    },
    {
        slug: "mortgage-renewal",
        title: "Mortgage Renewal",
        shortDescription: "Don’t settle for your lender’s first offer. We shop around for you.",
        longDescription: "We review your options across multiple lenders to find a lower rate or better terms — potentially saving you thousands over the life of your mortgage.",
        benefits: [
            "Better rates than auto-renewal",
            "Review of current financial goals",
            "No cost to switch (in most cases)",
            "Negotiation on your behalf"
        ],
        steps: [
            "Review Renewal Offer",
            "Market Comparison",
            "Application for Transfer",
            "Seamless Switch"
        ]
    },
    {
        slug: "investment-property-financing",
        title: "Investment Property Financing",
        shortDescription: "Grow your real-estate portfolio with flexible lending options.",
        longDescription: "We structure deals that improve cash flow, reduce risk, and maximize long-term returns for rental properties or secondary homes.",
        benefits: [
            "Rental offset calculations",
            "Multi-unit financing expertise",
            "BRRRR strategy support",
            "Corporate structure lending"
        ],
        steps: [
            "Portfolio Review",
            "Cash Flow Analysis",
            "Lender Matching",
            "Closing & Growth"
        ]
    },
    {
        slug: "self-employed-mortgages",
        title: "Self-Employed Mortgages",
        shortDescription: "Income-flexible solutions designed for entrepreneurs and business owners.",
        longDescription: "If you’re self-employed, traditional banks may make borrowing harder — EverLend doesn’t. We offer solutions that understand your business income.",
        benefits: [
            "Stated income programs",
            "Business bank statement analysis",
            "Add-back validation",
            "Flexible debt servicing ratios"
        ],
        steps: [
            "Business Income Review",
            "Program Selection",
            "Application Packaging",
            "Approval"
        ]
    },
    {
        slug: "new-immigrant-mortgages",
        title: "New Immigrant Mortgages",
        shortDescription: "We help newcomers secure financing even with limited credit history.",
        longDescription: "New to Canada? We match you with programs built specifically for new immigrants to help you buy your first Canadian home.",
        benefits: [
            "New to Canada programs",
            "Recognition of foreign credit",
            "Low down payment options",
            "Guidance on Canadian housing market"
        ],
        steps: [
            "Status Verification",
            "Credit Building Advice",
            "Program Matching",
            "Home Ownership"
        ]
    },
    {
        slug: "private-alternative-lending",
        title: "Private & Alternative Lending",
        shortDescription: "Access to trusted private lenders and alternative mortgage solutions.",
        longDescription: "For clients who don’t fit traditional lending guidelines, we provide access to trusted private lenders, B-lenders, and alternative mortgage solutions.",
        benefits: [
            "Flexible approval criteria",
            "Fast funding (often within days)",
            "Interest-only payment options",
            "Bridge financing solutions"
        ],
        steps: [
            "Situation Analysis",
            "Exit Strategy Planning",
            "Private Lender Matching",
            "Quick Funding"
        ]
    },
    {
        slug: "commercial-mortgage",
        title: "Commercial Mortgage",
        shortDescription: "Business-friendly commercial financing for retail, industrial, and more.",
        longDescription: "From small retail units to large industrial spaces, we offer business-friendly commercial financing that supports long-term growth.",
        benefits: [
            "Retail, office, and industrial",
            "Multi-residential properties",
            "Construction financing",
            "Land acquisition"
        ],
        steps: [
            "Project Assessment",
            "Financial Modeling",
            "Lender Proposal",
            "Commercial Closing"
        ]
    }
];
