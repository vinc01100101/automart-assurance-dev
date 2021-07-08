import {Grid} from "@material-ui/core";
import {CONTACTUS} from "../../hrefLinks";
import Link from "next/link";

export default [
    {
        title: "A. INITIAL REPORTING",
        content: [
            {
                q: ``,
                a: (
                    <>
                        The Claims Division should be immediately notified, by
                        phone or in writing of the facts of the accident/loss
                        (such as date, time, and location of the accident,
                        names, addresses and telephone numbers of contact
                        persons) and particulars of the insured's and third
                        party's vehicles (such as plate number, make, type, year
                        model and, if possible, the name of his insurance
                        company). <Link href={CONTACTUS}>Contact Us</Link>
                    </>
                ),
            },
        ],
    },
    {
        title: "B. DOCUMENTATION",
        content: [
            {
                a: `The following documents necessary for processing the claim should be submitted to the Claims Division:`,
            },
            {
                q: "1. Own Damage Claim",
                a: (
                    <ol type="a">
                        <li>
                            Police report and/or notarized Driver's Statement
                            (Affidavit) showing the circumstances of the
                            accident/loss including the description of the
                            vehicles involved and the names of any injured
                            person;
                        </li>
                        <li>
                            Photocopy of:
                            <ol>
                                <li>
                                    Certificate of Registration and current
                                    Official Receipt;
                                </li>
                                <li>
                                    Driver's License and current Official
                                    Receipt.
                                </li>
                                <li>Comprehensive Insurance Policy</li>
                            </ol>
                        </li>
                        <li>
                            Color photographs showing the vehicle's license
                            plate and extent of the loss/damage;
                        </li>
                        <li>
                            Stensils of the motor number and serial (chasis)
                            number;
                        </li>
                    </ol>
                ),
            },
            {
                q: "2. Third Party Claim",
                a: (
                    <ol type="a">
                        <li>
                            Third Party Property Damage Claim
                            <br />
                            Same documents listed in{" "}
                            <strong>Own Damage Claim</strong>, and Certificate
                            of No Claim Form from the third party's insurer.
                        </li>
                        <li>
                            Third Party Bodily Injury/Death Claim
                            <br />
                            The Company will assign an Adjuster for immediate
                            attendance. (Simple cases may be handled by the
                            Company's Claim Examiner.)
                            <br />
                            <br />
                            The following documents will be needed:
                            <br />
                            <br />
                            <ol>
                                <li>
                                    Medical Certificate or Death Certificate;
                                </li>
                                <li>
                                    Hospital Statement of Account and supporting
                                    medical official receipt and/or receipts of
                                    funeral expenses.
                                </li>
                            </ol>
                        </li>
                    </ol>
                ),
            },
            {
                break: true,
                q: "3. Carnapped Vehicle Claim.",
                a: (
                    <>
                        The following documents are required:
                        <br />
                        <ol type="a">
                            <li>
                                Notarized Complaint Sheet (Carnapping Report
                                Form)
                            </li>
                            <li>Police Report</li>
                            <li>Copy of Special Operation Unit Alarm Sheet</li>
                            <li>
                                Original Copy of Insured's Vehicle Registration
                                Certificate and current Official Receipt
                            </li>
                            <li>
                                Copy of Driver's License and current Official
                                Receipt (of the person driving the vehicle when
                                carnapped)
                            </li>
                            <li>Certificate of Non-Recovery</li>
                            <li>Keys</li>
                        </ol>
                        Note: The Company may require other relevant documents
                        that it may consider necessary in resolving the claim.
                    </>
                ),
            },
        ],
    },
    {
        title: "MORE IMPORTANT DETAILS...",
        content: [
            {
                a: (
                    <>
                        <strong>C.</strong> The insured vehicle may be brought
                        to any of the Company's accredited repair shops, where
                        it will be inspected by a claim examiner. The ocular
                        inspection is necessary to determine the extent of
                        damage.
                    </>
                ),
            },
            {
                a: (
                    <>
                        <strong>D.</strong> The letter of authority to repair
                        will be issued as soon as all the necessary documents
                        supporting the claim are received. As needed, additional
                        letter of authority will be prepared for
                        accident-related damages discovered in the course of
                        actual repair.
                    </>
                ),
            },
            {
                a: (
                    <>
                        <strong>E.</strong> As stated in the policy, the assured
                        cannot proceed with the repair of his vehicle unless
                        prior approval of the Company is obtained.
                    </>
                ),
            },
            {
                a: (
                    <>
                        <strong>F.</strong> All vehicles that are more than 3
                        years old (depending on your policy provider) shall be
                        repaired by a NON-DEALER (non-casa) repair shop
                        accredited with the company.
                    </>
                ),
            },
            {
                a: (
                    <>
                        <strong>G.</strong> Depreciation rates shall be applied
                        to cost of parts (except for windshield glass and other
                        glass parts) as follows:
                        <Grid container>{makeTable()}</Grid>
                    </>
                ),
            },
            {
                break: true,
                a: (
                    <>
                        <strong>H.</strong> All payments to repair shops shall
                        be made upon receipt of final repair bill and
                        corresponding Release papers duly signed by the assured
                        or his authorized representative.
                    </>
                ),
            },
            {
                a: (
                    <>
                        <strong>I.</strong> For total loss or carnapped cases,
                        settlement will be subjected to review and evaluation
                        based on the present market value of the insured
                        vehicle.
                        <br />
                        Additionally, the following documents/papers will be
                        submitted/accomplished upon settlement of the claim:
                        <br />
                        <ol>
                            <li>
                                Original Copy of the insured vehicle's
                                Certificate of Registration and current Official
                                Receipt;
                            </li>
                            <li>Car keys</li>
                            <li>Deed of Sale;</li>
                            <li>
                                Release of Chattel Mortgage (if vehicle is
                                mortgaged)
                            </li>
                        </ol>
                    </>
                ),
            },
            {
                a: (
                    <>
                        <strong>J.</strong> The insured should immediately
                        notify the company of broken windshields or side window
                        glasses. He may proceed with its replacement provided he
                        submits a photographs of the damaged portion and the
                        official receipt evidencing the cost of the replacement.
                        The replaced part should be of the same type as the one
                        that was damaged.
                    </>
                ),
            },
        ],
    },
];

function makeTable() {
    function makeGrid(col1, col2, col3, i) {
        const background = i % 2 == 0 && "#F0F5EF";
        const style = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background,
        };
        return (
            <>
                <Grid item xs={6} style={{background}}>
                    {col1}
                </Grid>
                <Grid item xs={3} style={style}>
                    {col2}
                </Grid>
                <Grid item xs={3} style={style}>
                    {col3}
                </Grid>
            </>
        );
    }
    const data = [
        ["", <strong>PRIVATE</strong>, <strong>COMMERCIAL</strong>],
        ["Up to 3 years", "nil", "nil"],
        ["Over 3 years up to 4 years", "20%", "25%"],
        ["Over 4 years up to 5 years", "25%", "30%"],
        ["Over 5 years up to 6 years", "30%", "35%"],
        ["Over 6 years up to 7 years", "35%", "40%"],
        ["Over 7 years", "40%", "45%"],
        [
            "Batteries, Tires, Ball Joints, Tie Rod and Shock Absorber",
            "45%",
            "50%",
        ],
        ["Rebuilt & Reconditioned Vehicles", "nil", "45%"],
    ];

    return data.map((d, i) => makeGrid(...d, i));
}
