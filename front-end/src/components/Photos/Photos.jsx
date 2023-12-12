import styles from "./Photos.module.css";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { useState } from "react";

export function Photos({ product }) {
	const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

	return (
		<FlexContainer>
			<div className={styles.thumbnails}>
				{product.photos.map((photo) => {
					return (
						<img
							key={photo}
							className={photo === currentPhoto ? styles.active : ""}
							src={photo}
							alt="Minatura produktu"
							onClick={() => {
								setCurrentPhoto(photo);
							}}
						/>
					);
				})}
			</div>
			<img className={styles.mainPhoto} src={currentPhoto} alt="Produkt" />
		</FlexContainer>
	);
}
