import styles from "./Accordion.module.css";
import ARROW_ICON from "../../assets/arrow.svg";
import { useState } from "react";

export function Accordion({ items }) {
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	return (
		<ul>
			{items.map((item, index) => {
				return (
					<li
						key={item.title}
						onClick={() => {
							setActiveItemIndex(index);
						}}>
						<div className={styles.item}>
							<p>{item.title}</p>
							<img className={activeItemIndex === index ? styles.expanded : ""} src={ARROW_ICON} alt="Ikona strzałki" />
						</div>
						{activeItemIndex === index && <p>{item.content}</p>}
					</li>
				);
			})}
		</ul>
	);
}
