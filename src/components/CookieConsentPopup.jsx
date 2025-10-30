"use client";
import { useState } from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

const CookieConsentPopup = () => {
	const [isAccepted, setIsAccepted] = useState(false);
	const [isClosed, setIsClosed] = useState(false);
	return (
		!isAccepted &&
		!isClosed && (
			<section className="cookie-consent-popup">
				<header className="cookie-consent-popup-header">
					<LiaCookieBiteSolid size={50} />
					<IoIosClose className="pointer" size={25} onClick={() => setIsClosed(!isClosed)} />
				</header>
				<footer className="cookie-consent-popup-footer">
					<p className="cookie-consent-popup-paragraph">We use cookies to improve your user experience!</p>
					<button className="cookie-consent-popup-cta pointer" onClick={() => setIsAccepted(!isAccepted)}>
						I like Cookies
					</button>
				</footer>
			</section>
		)
	);
};

export default CookieConsentPopup;
