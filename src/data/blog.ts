export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    content: string; // In a real app, this might be MDX or HTML
    category: string;
    image?: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "first-time-buyer-checklist",
        title: "The Ultimate First-Time Home Buyer Checklist for Canadians",
        excerpt: "Everything you need to know before you start house hunting in Ontario, from pre-approval to closing costs.",
        date: "October 15, 2024",
        author: "EverLend Team",
        category: "Buying",
        content: `
      <h2>Getting Started</h2>
      <p>Buying your first home is exciting, but it can also be overwhelming. Here is a step-by-step checklist to guide you.</p>
      <h3>1. Get Pre-Approved</h3>
      <p>Before you look at homes, know your budget. A pre-approval locks in your rate and shows sellers you are serious.</p>
      <h3>2. Save for Down Payment & Closing Costs</h3>
      <p>Remember, you need at least 5% down for homes under $500k. Don't forget closing costs like land transfer tax and legal fees.</p>
      <h3>3. Find a Realtor</h3>
      <p>A good agent can save you time and money. We can recommend trusted partners.</p>
    `
    },
    {
        slug: "should-you-refinance-now",
        title: "Should You Refinance Your Mortgage Right Now?",
        excerpt: "With changing interest rates, many homeowners are wondering if it's the right time to break their term and refinance.",
        date: "November 2, 2024",
        author: "EverLend Team",
        category: "Refinancing",
        content: `
      <h2>Understanding Refinancing</h2>
      <p>Refinancing involves breaking your current mortgage to start a new one, often to lower your rate or access equity.</p>
      <h3>When it makes sense</h3>
      <ul>
        <li>Interest rates have dropped significantly.</li>
        <li>You have high-interest debt to consolidate.</li>
        <li>You want to fund a renovation.</li>
      </ul>
      <h3>The Costs</h3>
      <p>Consider the penalty for breaking your mortgage. We can help you calculate the break-even point.</p>
    `
    },
    {
        slug: "mortgages-for-self-employed",
        title: "How to Get a Mortgage When You're Self-Employed",
        excerpt: "Being your own boss shouldn't stop you from owning a home. Here is how to navigate the lending landscape as an entrepreneur.",
        date: "November 20, 2024",
        author: "EverLend Team",
        category: "Self-Employed",
        content: `
      <h2>The Challenge</h2>
      <p>Banks often look at net income, which might be lower due to write-offs. But there are other ways to qualify.</p>
      <h3>Stated Income Programs</h3>
      <p>Some lenders allow you to state your income if you have good credit and a larger down payment.</p>
      <h3>B-Lenders</h3>
      <p>Alternative lenders offer more flexibility for business owners. Rates might be slightly higher, but they get the deal done.</p>
    `
    }
];
