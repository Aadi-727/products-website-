const Thumbnails = ({ image, alt }) => {
	return (
		<div className="thumbnail__sm">
			<img src={image} alt={alt} />
		</div>
	);
};

export default Thumbnails;
