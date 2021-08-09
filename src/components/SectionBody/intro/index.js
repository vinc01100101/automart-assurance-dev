/**
 * the "Which is more difficult–buying or selling a car?" section of the body
 */

import {Typography} from "@material-ui/core";

intro.title = "Why Get Car Insurance?";
const textEntries = [
    {
        subtitle: "Financial Security",
        body: "When you get into an accident, the insurance company will pay to repair the damages to your vehicle, the other party’s vehicle, as well as medical expenses incurred, if any. You won’t have unexpected expenses, which can break your finances. You’re buying peace-of-mind!",
    },
    {
        subtitle: "Pay Now and Save Later",
        body: "Pay your car insurance premiums and see how much savings you have when your car needs to get repaired.",
    },
    {
        subtitle: "Protection from Day 1",
        body: "If you buy from us, you’ll be protected right from the moment you first drive your car! Only Automart.Ph and Assurance.Ph can offer you that protection.",
    },
];
export default function intro() {
    return (
        <ul style={{listStyleType: "none", padding: 0}}>
            {textEntries.map((e, i) => (
                <li key={i} style={{marginBottom: 30}}>
                    <Typography variant="h6" style={{fontWeight: "bold"}}>
                        {e.subtitle}
                    </Typography>
                    <Typography variant="body1">{e.body}</Typography>
                </li>
            ))}
        </ul>
    );
}
