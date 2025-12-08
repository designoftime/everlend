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
        title: "Debt Consolidation",
        shortDescription: "Get rid of high interest debt with a lower rate! Let us show you how to improve your credit score! Low monthly payments allow you to break free!",
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
        title: "Mortgage Refinance",
        shortDescription: "First, second mortgage, third mortgage - we consolidate your mortgages and provide one mortgage solution with an overall lower monthly payment. Break free from high interest - high monthly payments!",
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
        title: "Home Renovation Loans",
        shortDescription: "Funds for home improvements and renovations! Make your home work for you! You deserve that home makeover with a fast, simple - low payment solution!",
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
        title: "Investment Loan",
        shortDescription: "Low rate investment loans to capitalize in the markets!  Let your home - work for you with one low monthly payment.  Obtain low rates to diversify your investment strategies and obtain financial freedom!  Low rates for your dream business to even cryptocurrencies!  Let us help you make your dreams reality!",
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
        title: "Emergency Loan",
        shortDescription: "No questions asked about loans - for that cash-out emergency - whatever the case - 'no questions asked' - let's make sure you have the lowest rate!",
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
        title: "Mortgage Arrears/Evictions",
        shortDescription: "Get back on track and stay in your home with one low monthly payment.  Let us help you bring arrear payments on any debt up to date - including saving the keys to your home!  Low rate mortgages for arrears immediately!",
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
        title: "Unemployed Loans",
        shortDescription: "Loans for that rainy day - to assist you till the sun is shining again!  Let us bring some light into your life with a quick cash-in hand low rate loan!",
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
        title: "Prepaid Loans",
        shortDescription: "Take a vacation from monthly mortgage payments and have your home make your payment for you!  No monthly payment mortgage - tailored for your needs!",
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
