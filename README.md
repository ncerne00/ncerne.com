This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started
1) Clone the repository.
2) run `npm run dev` to run the application locally.
3) Open http://localhost:3000 to view it in you browser.

## Technology Stack

1) Chakra UI
- https://chakra-ui.com/ 
- A React component library that was leveraged to build many of the custom components for the website. 
2) NextJS
- https://nextjs.org/
- A derivative framework of ReactJS that leverages static generation to pre-render pages. This improves the performance of the application. 
3) GraphCMS
- https://graphcms.com/
- Utilized GraphCMS to host queryable content for the website. The website pulls data from GraphCMS via the npm package graphql-request each time the website is built.
4) AWS Lambda & API
- https://aws.amazon.com/lambda/
- Leveraged AWS Lambda & API to invoke a GitHub workflow that automatically rebuilds the website when the API is called by GraphCMS. 
