const CookieAcceptButton = ({ isAccepted, setIsAccepted }) => {
	return (
		<button className="cookie-consent-popup-cta pointer" onClick={() => setIsAccepted(!isAccepted)}>
			I like Cookies
		</button>
	);
};

export default CookieAcceptButton;
