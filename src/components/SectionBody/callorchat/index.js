//svg pieces
import {viber, telephone, atsign} from "@/svgStore/svgCall";
//href strings
import {TELEPHONE, EMAIL, VIBER} from "@/components/hrefLinks";

import {Link, Typography} from "@material-ui/core";

//sibling files
import useStyles from "./styles";
//react
import {useState, useEffect} from "react";

callorchat.title = "Contact Us";

export default function callorchat() {
    const classes = useStyles();
    const [viberFormat, setViberFormat] = useState(
        "viber://add?number=63963 188 2087"
    );

    useEffect(() => {
        import("react-device-detect").then((mod) => {
            mod.isMobile
                ? setViberFormat("viber://add?number=639")
                : setViberFormat("viber://chat?number=+639");
        });
    }, []);

    const viberLinks = VIBER.map((phoneNum) => [
        viberFormat.concat(phoneNum),
        viber,
    ]);
    const contacts = [...viberLinks, [TELEPHONE, telephone], [EMAIL, atsign]];

    const makeContacts = () => {
        return contacts.map((contact, i) => {
            let display = /viber/.test(contact[0])
                ? contact[0].split("=")[1]
                : contact[0].split(":")[1];
            display = display[0] == "6" ? "+".concat(display) : display;
            return (
                <div className={classes.contact} key={i}>
                    <div className={classes.contactLogo}>{contact[1]}</div>
                    <Link
                        href={contact[0]}
                        className={classes.contactText}
                        variant="h6"
                        color="secondary"
                    >
                        {display}
                    </Link>
                </div>
            );
        });
    };

    return (
        <div className={classes.root}>
            <Typography variant="body1">
                This insurance product is offered by Automart.Ph and
                Assurance.Ph. We want to ensure that you drive your dream car,
                worry free!
            </Typography>
            {makeContacts()}
        </div>
    );
}
