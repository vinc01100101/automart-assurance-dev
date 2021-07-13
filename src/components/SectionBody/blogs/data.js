//array of data objects
import getConfig from "next/config";
const {publicRuntimeConfig} = getConfig();
let basePath = publicRuntimeConfig.basePath || "/";

export default [
    {
        date: "April 5, 2021",
        title: "HOW TO GET INSURANCE FOR YOUR USED CAR",
        src: basePath + "/images/blogs/blog0.png",
        summary: `When you’re buying a car what your auto insurance options are should be your next thought--especially if you’re getting a used or repossessed car. Regardless of your vehicle’s state or status, having car insurance is a must.`,
    },
    {
        date: "April 5, 2021",
        title: "DO I NEED ACTS OF NATURE INSURANCE COVERAGE?",
        src: basePath + "/images/blogs/blog1.png",
        summary: `Why do you need Acts of Nature car insurance coverage? So when one of the most devastating disasters strikes, you’re ready.`,
    },
    {
        date: "April 5, 2021",
        title: "HOW TO FILE A CAR INSURANCE CLAIM",
        src: basePath + "/images/blogs/blog2.png",
        summary: `What happens next if the unexpected occurs? Read on as Assurance.Ph outlines how you can file your car insurance claim.`,
    },
    {
        date: "April 5 2021",
        title: "WHAT INSURANCE DO I NEED FOR MY MOTORCYCLE?",
        src: basePath + "/images/blogs/blog3.png",
        summary: `As motorcycle driving has risen, so have theft and accidents. Assurance.Ph shares why it’s important for drivers to have coverage.`,
    },
];
